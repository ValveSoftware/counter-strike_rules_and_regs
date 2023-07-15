"use strict";

function nthHighest( arr, nth, compare = ((a,b) => b-a) )
{
    // 1-based
    if( nth < 1 )
    {
        throw new Error( "nth < 1" );
    }

    if( arr.length === 0 )
    {
        throw new Error( "attempting to get Nth highest from empty list" );
    }

    nth = Math.min( nth, arr.length );
    return [...arr].sort(compare)[ nth - 1 ];
}

module.exports = nthHighest;
