"use strict";

const remapValueClamped = require('./util/remap_value_clamped');

class RankingContext {
    constructor()
    {
        this.topOutlierCount = 10;          // teams with at least as good performance as the 10th best team get the same modifiers
        this.timeWindowStart = null;
        this.timeWindowEnd = null;
        this.timeDecayFactor = 1;           // default to linear; <1 gives more weight to matches in the past, >1 gives less.
        this.highValueEventModifier = 1;    // extra weight placed on RMR/major events.
    }
    
    // set window of times for getTimestampModifier
    setTimeWindow( start, end ) {
        this.timeWindowStart = start;
        this.timeWindowEnd = Math.max( start, end );
    }

    getTimestampModifier( timeStamp ) {
        if( this.timeWindowStart === null || this.timeWindowEnd === null )
        {
            return 1;
        }

        let clamp = remapValueClamped( timeStamp, this.timeWindowStart, this.timeWindowEnd, 0, 1 )
        return Math.pow( clamp, this.timeDecayFactor );
    }

    // Currently we use the same value for both prize pool outlier count, and distinct opponent outlier count.
    setOutlierCount( nth )
    {
        this.topOutlierCount = nth;
        return this;
    }
    getOutlierCount()
    {
        return this.topOutlierCount;
    }

    setHveMod( modifier )
    {
        this.highValueEventModifier = modifier;
        return this;
    }
    getHveMod()
    {
        return this.highValueEventModifier;
    }
}

module.exports = RankingContext;