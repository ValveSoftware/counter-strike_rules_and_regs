"use strict";

module.exports = {
    init: init,
    outputEWRBins: outputEWRBins
}

const { match } = require('assert');
const Glicko = require('./glicko');
const Ranking = require('./ranking');
const fs = require('fs');
const { time } = require('console');

const defaultGlickoParams = {
    rd : 75,
    sampleWindow : 7*24*60*60,
    analysisWindow : 4*30*24*60*60
}

function init( glickoParams = defaultGlickoParams ){
    const analysis = new Analysis();
    analysis.init();

    return analysis;
}

function outputEWRBins( analysis ){
    let resultSet = analysis.resultSet();
    let numBins = 20;
    let inc = 1 / numBins;

    for ( let i = 0; i < numBins; i+= 1){
        let ewr = i / numBins;
        let binResults = resultSet.filter( el => el.expectedWinRate >= ewr && el.expectedWinRate < ewr + inc ).map( el => el.winningTeam === 1 ? 1 : 0 );
        let t1Wins = binResults.reduce( (a,b) => a + b, 0 );
        let count = binResults.length;

        let ratio = ( count > 0 ? t1Wins / count : 0 ).toFixed(2);

        if ( count >= numBins ) //e.g., don't report 5% increments with fewer than 20 observations
            console.log( `${ewr},${ratio}, (${t1Wins} / ${count})` );
    }
}

class Analysis
{
    constructor( glickoParams = defaultGlickoParams ){
        this.mDataset = new Dataset();
        this.mFit = new Fit();
        this.mGlickoParams = glickoParams;
        this.mResultSet = [];
    }

    init(){
        this.dataset().init( this.glickoParams() );
        this.fit().init( this.glickoParams() );
    }

    addResult( result ){
        this.mResultSet.push( result );
    }

    dataset(){
        return this.mDataset;
    }

    fit(){
        return this.mFit;
    }

    glickoParams(){
        return this.mGlickoParams;
    }

    resultSet(){
        return this.mResultSet;
    }

    evaluate(){
        this.dataset().sampleMatches().forEach( (el) => {
            let expectedWinRate = this.fit().priorWinExpectation( el );

            if ( expectedWinRate >= 0 ){
                let result = {
                    winningTeam : el.winningTeam,
                    expectedWinRate : expectedWinRate
                }

                this.addResult( result );        
            }
        });    
    }   
}

class Fit
{
    constructor (){
        this.mGlicko = new Glicko();
    }

    init( glickoParams = defaultGlickoParams){
        this.glicko().setFixedRD( glickoParams.rd );
    }

    glicko(){
        return this.mGlicko;
    }

    priorWinExpectation( match ){        
        // set up teams:
        let rv1 = match.team1.rankValue;
        let rv2 = match.team2.rankValue;
        if ( rv1 === -1 || rv2 === -1 )
            return -1 //insufficient data to compare teams

        let t1_W = this.glicko().newTeam( rv1 );
        let t1_L = this.glicko().newTeam( rv1 );
        let t2 = this.glicko().newTeam( rv2 );
        let startingRV = t1_W.rank();
    
        t1_W.addPendingMatch( t2, 1 );
        t1_L.addPendingMatch( t2, 0 );
        t1_W.applyPendingMatches( this.glicko() );
        t1_L.applyPendingMatches( this.glicko() );
    
        let winDelta = t1_W.rank() - startingRV;
        let lossDelta = startingRV - t1_L.rank();
    
        let ratio = 1 - ( winDelta / ( winDelta + lossDelta ) );
    
        return ratio;
    }

}

class Dataset
{

    constructor(){
        this.mAllMatches = [];
        this.mMostRecentMatch = -1;
        this.mEarliestMatch = -1;
        this.mSampleMatches = [];
        this.mSampleWindow = -1;

        this.mRankedTeams = [];
    }

    init( glickoParams = defaultGlickoParams ){
        let [matches] = Ranking.generateRanking();
        this.setAllMatches( matches );

        this.setMostRecentMatch( Math.max( ...this.allMatches().map( m => m.matchStartTime ) ) );
        this.setEarliestMatch( this.mostRecentMatch() - glickoParams.analysisWindow );
        this.setSampleWindow( glickoParams.sampleWindow );
    }

    allMatches(){
        return this.mAllMatches;
    }

    earliestMatch(){
        return this.mEarliestMatch;
    }

    mostRecentMatch(){
        return this.mMostRecentMatch;
    }

    rankedTeams(){
        return this.mRankedTeams;
    }

    rankValueByRoster( roster ){
        let matchedTeams = this.rankedTeams().filter( el => el.sharesRoster( roster ) );
        if (matchedTeams.length > 0 ) {            
            return Math.max( matchedTeams.map( el => el.rankValue ) );        
        }

        return -1;
    }

    sampleMatches(){
        return this.mSampleMatches;
    }

    sampleWindow(){
        return this.mSampleWindow;
    }

    setAllMatches( matches ){
        this.mAllMatches = matches;
    }

    setAllTeams( teams ){
        this.mAllTeams = teams;
    }

    setEarliestMatch( timestamp ){
        this.mEarliestMatch = timestamp;
    }

    setMostRecentMatch( timestamp ){
        this.mMostRecentMatch = timestamp;
    }

    setRankedTeams( teams ){
        this.mRankedTeams = teams;
    }

    setSampleMatches( timestamp ){
        this.mSampleMatches = this.allMatches().filter( el => { return el.matchStartTime >= timestamp && el.matchStartTime <= (timestamp + this.sampleWindow()) });
        this.mSampleMatches.forEach( el => {
            // update sample match rankings here, otherwise stuck with the original.
            el.team1.rankValue = this.rankValueByRoster( el.team1.players );
            el.team2.rankValue = this.rankValueByRoster( el.team2.players );
        });
    }

    setSampleWindow( windowSize ){
        this.mSampleWindow = windowSize;
    }

    updateRanking( timestamp ){
        let [matches, teams] = Ranking.generateRanking( timestamp );
        this.setRankedTeams( teams );
    }

}