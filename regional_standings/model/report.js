"use strict";

module.exports = {
    generateOutput: generateOutput
}

const fs = require('fs');
const path = require('path');
const Table = require('./table');
const Ranking = require('./ranking');
const nthHighest = require('./util/nth_highest');
const RegionList = ['Europe', 'Americas', 'Asia'];

const summaryFolder = 'details/';
const format = '.md';


function formatLine( line, newline = false ){ 
    let output = line + '<br />\n';
    if ( newline )
        output = line + '\n';
    return output;
};

function generateOutput( teams, regions = [0,1,2], strDate ){

    clearSummaryFolder();

    fs.writeFileSync( `../standings_global${ format }`, displayRankings( teams, [0,1,2], strDate ) );
    fs.writeFileSync( `../standings_europe${ format }`, displayRankings( teams, [0], strDate ) );
    fs.writeFileSync( `../standings_americas${ format }`, displayRankings( teams, [1], strDate ) );
    fs.writeFileSync( `../standings_asia${ format }`, displayRankings( teams, [2], strDate ) );

    teams.forEach( t => {
        if (t.globalRank > 0 ){
            let paddedRank = t.globalRank.toString().padStart(4,'0');
            t.filename =  `../${ summaryFolder }${ paddedRank }--${ sanitize( t.name ) }--${ sanitizeRoster( t.players ) }${ format }`;

            fs.writeFileSync( t.filename, displayTeamRankingSummary( t, teams ) );
        }
    });    
}

function sortCaseInsensitive( list ){
    return list.sort( (a,b) => {
        if ( a.toLowerCase() < b.toLowerCase() ) return -1;
        if ( a.toLowerCase() > b.toLowerCase() ) return 1;
        return 0;
    });
}

function sanitize( text, replacement = '_' ){
    return text.toLowerCase().replace(/[^a-z0-9-]/gi, replacement );
}

function sanitizeRoster( roster, delimiter = '-' ){
    let text = sortCaseInsensitive( roster.map( el => el.nick ) ).join( delimiter );
    return sanitize( text );
}

function clearSummaryFolder(){
    fs.rmSync( `../${summaryFolder}`,{ recursive : true, force: true } );
    fs.mkdirSync( `../${summaryFolder}` );
}

function displayRankings( teams, regions = [0,1,2], strDate ) {
    let output = '';

    // Get the region we are doing standings for
    let standings = 'Standings';
    if( regions.length === 1 )
        standings = `Regional Standings for ${RegionList[regions[0]]}`;

    // Print markdown table for results
    output += formatLine( `### ${standings} as of ${strDate}` );
    output += formatLine( '' );

    var table = new Table();

    let sampleTeam;

    // Sort teams by rank value
    let sortedTeams = [...teams].sort((a, b) => b.rankValue - a.rankValue);

    table.addColumn( 'Standing' );
    table.addNumericColumn( 'Points' ).setPrecision(0);
    table.addColumn( 'Team Name' ).setMinWidth(12);
    table.addColumn( 'Roster' );
    table.addColumn( '' );

    var dispRank = 0;
    teams.forEach( t => {
		if (t.globalRank > 0 && regions.some(r => r === t.region) ) {
            let displayRank = t.globalRank;
            let paddedRank = displayRank.toString().padStart(4,'0');
            
            if ( regions.length === 1 )
                displayRank = t.regionalRank;

            table.addElem( displayRank );
            table.addElem( t.glickoTeam.rank() );
            table.addElem( t.name );
            table.addElem( sortCaseInsensitive( t.players.map(p => p.nick) ).join(', ') );
            table.addElem( `[details](${summaryFolder}${ paddedRank }--${ sanitize( t.name ) }--${ sanitizeRoster( t.players )}${ format })` );
            table.commitRow();
        }
    });

    let tableString = table.printMarkdownToString();
    output += '\n' + tableString + '\n';

    output += formatLine( '', true );
    output += formatLine( '_Event data for Regional Standings provided by HLTV.org_' );

    //console.log( output );
    return output;
}



function displayTeamRankingSummary( team, teams ){
    let region = RegionList[team.region];
    let regionFile = `standings_${ RegionList[team.region].toLowerCase() }`;
    let roster = sortCaseInsensitive( team.players.map( el=> el.nick ) ).join(', ');
    let minSeedValue = Math.min( ...teams.map(t => t.seedValue ) );
    let maxSeedValue = Math.max( ...teams.map(t => t.seedValue ) );

    let output = '';
    output += formatLine( `### Roster Details`);
    output += formatLine( `Team Name: ${ team.name }` );
    output += formatLine( `Roster: ${ roster }` );
    output += formatLine( `Region: [${ region }]( ../${ regionFile}.md)` );
    output += formatLine( '' );
    output += formatLine( `Global Rank: [${ team.globalRank }](../standings_global.md)`);
    output += formatLine( `Regional Rank: [${ team.regionalRank }]( ../${ regionFile}.md)` );
    output += formatLine( `Final Rank Value:  ${ team.rankValue.toFixed(1) }` );
    output += formatLine( '' );
    output += formatLine( `Final Rank Value (${ team.rankValue.toFixed(1) }) = Starting Rank Value (${ team.rankValueSeed.toFixed(1) }) + Head To Head Adjustments (${ (team.rankValue - team.rankValueSeed).toFixed(1) })`);
    output += formatLine( '', true );
    output += formatLine( '#### Starting Rank Value' );
    output += formatLine( `To figure out a rosters's Starting Rank Value, first take the average of these four factors:`);
    output += formatLine( `- Bounty Offered: ${ team.modifiers.bountyOffered.toFixed(3) }[<sup>1</sup>](#table2)`, true);
    output += formatLine( `- Bounty Collected: ${ team.modifiers.bountyCollected.toFixed(3) }[<sup>2</sup>](#table1)`, true);
    output += formatLine( `- Opponent Network: ${ team.modifiers.opponentNetwork.toFixed(3) }[<sup>2</sup>](#table1)`, true);
    output += formatLine( `- LAN Wins: ${ team.modifiers.lanFactor.toFixed(3) }[<sup>2</sup>](#table1)`, true);
    output += formatLine( '', true );
    output += formatLine( `The average of these factors is ${ team.seedValue.toFixed(3) }`);
    output += formatLine( '' );
    output += formatLine( `Next, take the maximum and minimum average across all teams and compute the following:`)
    output += formatLine( `- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = ${ team.rankValueSeed.toFixed(1) }`, true);
    output += formatLine( `- 400 + ( ( ${ team.seedValue.toFixed(3) } - ${ minSeedValue.toFixed(3) } ) / ( ${ maxSeedValue.toFixed(3) } - ${ minSeedValue.toFixed(3) } ) ) * 1600 = ${ team.rankValueSeed.toFixed(1) }`, true);
    output += formatLine( '', true );
    output += formatLine( '', true );
    output += formatLine( '#### Factors');
    output += formatLine( `Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.`);
    output += formatLine( `Note:`);
    output += formatLine( '', true );
    output += formatLine( `- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.`, true);
    output += formatLine( `- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.`, true);
    output += formatLine( `- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)`, true);
    output += formatLine( `- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight`, true);
    output += formatLine( '<span id="table1"></span>' );

    var table = new Table();
    table.addNumericColumn( 'MatchPlayed' );
    table.addNumericColumn( 'MatchID' );
    table.addColumn( 'Date' );
    table.addColumn( 'Opponent' );
    table.addColumn( 'W/L' );
    table.addColumn( 'Age Weight' );
    table.addColumn( 'Event Weight' );
    table.addColumn( 'Bounty Collected' );
    table.addColumn( 'Opponent Network' );
    table.addColumn( 'LAN Wins' );
    table.addNumericColumn( 'H2H Adjustment' ).setPrecision(2);
    table.addColumn( 'Participating Roster' );
    
    var totalMatches = team.matchesPlayed;
    team.teamMatches.forEach( (tm, idx) => {
        let umid = tm.match.umid;
        let d = new Date( 0 );
        d.setUTCSeconds( tm.match.matchStartTime );
        let strDate = d.toLocaleString( 'fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/Los_Angeles' } );

        let bounty = '-';
        let net = '-';
        let lanWin = '-';
        let eventWeight = '-';

        let roster = tm.match.team1Name === team.name ? tm.match.team1Players : tm.match.team2Players;

        // use base if you're showing age/event modifiers, val otherwise.

        let bountyEl = team.bounties.filter( el => {return el.id === umid } );
        if ( bountyEl.length > 0 ){
            bounty = bountyEl[0].base.toFixed(3).toString() + ' (' + bountyEl[0].val.toFixed(3).toString() + ')';
            eventWeight = bountyEl[0].context.toFixed(3).toString();
        }

        let netEl = team.network.filter( el => {return el.id === umid } );
        if ( netEl.length > 0 ){
            net = netEl[0].base.toFixed(3).toString() + ' (' + netEl[0].val.toFixed(3).toString() + ')';
            eventWeight = netEl[0].context.toFixed(3).toString();
        }

        let lanWinEl = team.lanWins.filter( el => {return el.id === umid } );
        if ( lanWinEl.length > 0 ){
            lanWin = lanWinEl[0].base.toString() + ' (' + lanWinEl[0].val.toFixed(3).toString() + ')';    
        }

        let glickoAdjustment = tm.isWinner ? tm.match.winnerDeltaRankValue : tm.match.loserDeltaRankValue;
        glickoAdjustment = glickoAdjustment.toFixed(3).toString();
        
        table.addElem( totalMatches - idx );
        table.addElem( umid );
        table.addElem( strDate );
        table.addElem( tm.opponent.name );
        table.addElem( tm.isWinner ? 'W' : 'L' );
        table.addElem( tm.match.informationContent.toFixed(3).toString() );
        table.addElem( eventWeight ); 
        table.addElem( bounty );
        table.addElem( net );
        table.addElem( lanWin );
        table.addElem( glickoAdjustment );
        table.addElem( sortCaseInsensitive( roster.map( el=> el.nick ) ).join(', ') );

        table.commitRow();
    });

    let tableString = table.printMarkdownToString();
    output += '\n\n' + tableString + '\n';

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    output += formatLine( '');
    output += formatLine( '<span id="table2"></span>' );
    output += formatLine( `To calculate a roster's Bounty Offered:` );
    output += formatLine( '',true );
    output += formatLine( `- First, take the sum of their top 10 scaled winnings (${ USDollar.format(team.scaledWinnings.toFixed(2)) })`, true );
    output += formatLine( `- Divide that value by the 5th highest value among all rosters (${ USDollar.format( nthHighest( teams.map( t => t.scaledWinnings ) , 5 ) ) })`, true);
    output += formatLine( `- The final value (${ team.bountyOffered.toFixed(2) }) is scaled by the curve function.[<sup>3</sup>](#curveFunction)`, true)
    output += formatLine('\nTop ten winnings for this roster:');
    var winningsTable = new Table();

    winningsTable.addColumn( 'Event Date' );
    winningsTable.addNumericColumn( 'Age Weight' ).setPrecision(3);
    winningsTable.addColumn( 'Prize Winnings');
    winningsTable.addColumn( 'Scaled Winnings');

    team.winnings.sort( (a,b) => b.eventTime - a.eventTime );
    team.winnings.forEach( (w,idx) => {
        let d = new Date( 0 );
        d.setUTCSeconds( w.eventTime );
        let strDate = d.toLocaleString( 'fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/Los_Angeles' } );

        winningsTable.addElem( strDate );
        winningsTable.addElem( w.age );
        winningsTable.addElem( USDollar.format( w.base ) );
        winningsTable.addElem( USDollar.format( w.val ) );

        winningsTable.commitRow();
    })

    let winningsTableString = winningsTable.printMarkdownToString();
    output += '\n' + winningsTableString + '\n';

    output += formatLine( '', true );
    output += formatLine( `<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_` );
    output += formatLine( '', true );
    output += formatLine( '---', true );
    output += formatLine( '_Event data for Regional Standings provided by HLTV.org_' );

    return output;
}
