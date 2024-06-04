"use strict";

module.exports = {
    generateRanking: generateRanking,
}

const RankingContext = require('./ranking_context');
const DataLoader = require('./data_loader');
const Glicko = require('./glicko');
const Report = require('./report');
const remapValueClamped = require('./util/remap_value_clamped');

const SEED_MODIFIER_FACTORS = {
    bountyCollected: 1,
    bountyOffered: 1,
    opponentNetwork: 1,
    ownNetwork: 0,
    lanFactor: 1
};
const MIN_SEEDED_RANK = 400;
const MAX_SEEDED_RANK = 2000;

function generateRanking( versionTimestamp = -1)
{
    // Parameters
    const rankingContext = new RankingContext;
    rankingContext.setHveMod(1).setOutlierCount(5);

    const dataLoader = new DataLoader( rankingContext );
    dataLoader.loadData( versionTimestamp );

    let teams = dataLoader.teams;
    let matches = dataLoader.matches;

    const glicko = new Glicko();
    glicko.setFixedRD( 75 );        // glicko -> elo

    // Apply seeding
    seedTeams( glicko, teams );

    // Adjust rankings based on games played
    runMatches( glicko, matches );
    teams.forEach( team => { team.rankValue = team.glickoTeam.rank(); } );

    // Remove rosters with no wins from the standings
    teams = teams.filter( t => t.distinctTeamsDefeated > 0 );

    // Determine global and regional rank for each roster
    applyRanking( teams );

    return [matches,teams];
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
// Seeding Teams
function seedTeams( glicko, teams ) {
    teams.forEach(team => {
        team.seedValue = calculateSeedModifierValue( team.modifiers );
    } );

	// remap teams from current range to minRankValue..maxRankValue
    let minSeedValue = Math.min( ...teams.map(t => t.seedValue ) );
    let maxSeedValue = Math.max( ...teams.map(t => t.seedValue ) );

    teams.forEach( team => {
        team.rankValue = remapValueClamped( team.seedValue, minSeedValue, maxSeedValue, MIN_SEEDED_RANK, MAX_SEEDED_RANK );

        // Save off original rank
        team.rankValueSeed = team.rankValue;

        // create glicko data
        team.glickoTeam = glicko.newTeam( team.rankValue );
    } );
}

function calculateSeedModifierValue( modifiers )
{
    let sumCoeff = 0;
    let scaledMods = 0;
    for( let factor in SEED_MODIFIER_FACTORS )
    {
        sumCoeff   += SEED_MODIFIER_FACTORS[factor];
        scaledMods += SEED_MODIFIER_FACTORS[factor] * modifiers[factor];
    }
    sumCoeff = sumCoeff === 0 ? 1 : sumCoeff;
    return scaledMods / sumCoeff;
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
// Adjusting Teams by Results
function runMatches( glicko, matches ) {
    //matches.reverse();
    matches.forEach( match => {
        let team1 = match.team1;
        let team2 = match.team2;

        let [winTeam, loseTeam] = ( match.winningTeam === 1) ? [team1,team2] : [team2,team1];

        winTeam.startingRankValue = winTeam.glickoTeam.rank();
        loseTeam.startingRankValue = loseTeam.glickoTeam.rank();
        
        glicko.singleMatch( winTeam.glickoTeam, loseTeam.glickoTeam, match.informationContent );
        
        match.winnerDeltaRankValue = winTeam.glickoTeam.rank() - winTeam.startingRankValue;
        match.loserDeltaRankValue = loseTeam.glickoTeam.rank() - loseTeam.startingRankValue;
    } );
}


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
// Apply global and regional standings
function applyRanking( teams ){
    teams.sort( (a,b ) => b.rankValue - a.rankValue );

    let globalRank = 0;
    let regions = [0,1,2];

    teams.forEach( t => {
        if (t.matchesPlayed >= 10) {
            globalRank += 1;
            t.globalRank = globalRank;
        }
    });

    regions.forEach( r => {
        let regionalRank = 0;
        teams.forEach( t => {            
            if ( t.matchesPlayed >= 10 && r === t.region ) {
                regionalRank += 1;
                t.regionalRank = regionalRank;
            }    
        });       
    });
}