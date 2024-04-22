"use strict";

const Ranking = require('./ranking');
const Report = require('./report');
const RegionList = ['Europe', 'Americas', 'Asia'];

function run()
{
    let regions = [0,1,2];
    if ( process.argv[2] !== undefined )
        regions = JSON.parse(process.argv[2]);

    // Parse matches and generate standings
    let [matches,teams] = Ranking.generateRanking( );

    // Get date of most recent match
    let mostRecentMatch = Math.max( ...matches.map( m => m.matchStartTime ) );

    // format date as YYYY-MM-DD
    let d = new Date( 0 );
    d.setUTCSeconds( mostRecentMatch );
    let strDate = d.toLocaleString( 'fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/Los_Angeles' } );

    // Get the region we are doing standings for
    let standings = 'Standings';
    if( regions.length === 1 )
    {
        standings = `Regional Standings for ${RegionList[regions[0]]}`;
    }

    // Print markdown table for results
    Report.generateOutput( teams, regions, strDate );
}

run();

