"use strict";

// Linearly remaps a value between two outputs
// If it's outside of the input range, it will be clamped to one end.
function remapValueClamped( val, inStart, inEnd, outStart, outEnd )
{
    const interp = ( inStart === inEnd ) ? 0.5 : ((val - inStart) / (inEnd - inStart));
    const clamped = Math.max( interp, Math.min( interp, 1 ), 0);
    return ( clamped * outEnd + ( 1 - clamped ) * outStart );
}

module.exports = remapValueClamped;

