### Roster Details<br />
Team Name: 2GAME<br />
Roster: beg0d, dok, dzt, santos, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  633.6<br />
<br />
Final Rank Value (633.6) = Starting Rank Value (595.7) + Head To Head Adjustments (37.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.7
- 400 + ( ( 0.103 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 595.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      630 | 2024-04-10 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -2.98 | beg0d, dok, dzt, santos, vhz  |
|           22 |      634 | 2024-04-10 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -3.08 | beg0d, dok, dzt, santos, vhz  |
|           21 |      792 | 2024-04-05 | adalYamigos | W   | 0.994      | 0.450        | 0.000 (0.000)    | 0.373 (0.167)    | 0 (0.000) |    22.53 | beg0d, dok, dzt, santos, vhz  |
|           20 |      793 | 2024-04-05 | adalYamigos | L   | 0.994      | -            | -                | -                | -         |    -8.31 | beg0d, dok, dzt, santos, vhz  |
|           19 |      860 | 2024-04-03 | Sharks      | L   | 0.981      | -            | -                | -                | -         |    -4.71 | beg0d, dok, dzt, santos, vhz  |
|           18 |      863 | 2024-04-03 | Sharks      | L   | 0.981      | -            | -                | -                | -         |    -4.93 | beg0d, dok, dzt, santos, vhz  |
|           17 |      996 | 2024-03-27 | Corinthians | W   | 0.935      | 0.450        | 0.001 (0.000)    | 0.123 (0.052)    | 0 (0.000) |    13.58 | beg0d, dok, dzt, santos, vhz  |
|           16 |      999 | 2024-03-27 | Corinthians | L   | 0.934      | -            | -                | -                | -         |   -16.04 | beg0d, dok, dzt, santos, vhz  |
|           15 |     1037 | 2024-03-26 | Galorys     | L   | 0.928      | -            | -                | -                | -         |    -8.21 | beg0d, dok, dzt, santos, vhz  |
|           14 |     1039 | 2024-03-26 | Galorys     | L   | 0.928      | -            | -                | -                | -         |    -8.78 | beg0d, dok, dzt, santos, vhz  |
|           13 |     1120 | 2024-03-20 | Solid       | W   | 0.887      | 0.450        | 0.132 (0.053)    | 0.503 (0.201)    | 0 (0.000) |    21.95 | beg0d, dok, dzt, santos, vhz  |
|           12 |     1121 | 2024-03-20 | Solid       | L   | 0.887      | -            | -                | -                | -         |    -5.68 | beg0d, dok, dzt, santos, vhz  |
|           11 |     1205 | 2024-03-15 | ODDIK       | L   | 0.855      | -            | -                | -                | -         |    -4.26 | beg0d, dok, dzt, santos, vhz  |
|           10 |     1206 | 2024-03-15 | ODDIK       | L   | 0.854      | -            | -                | -                | -         |    -4.43 | beg0d, dok, dzt, santos, vhz  |
|            9 |     1478 | 2024-03-05 | W7M         | W   | 0.788      | 0.450        | 0.009 (0.003)    | 0.476 (0.169)    | 0 (0.000) |    18.37 | beg0d, dok, dzt, santos, vhz  |
|            8 |     1480 | 2024-03-05 | W7M         | W   | 0.788      | 0.450        | 0.009 (0.003)    | 0.476 (0.169)    | 0 (0.000) |    19.33 | beg0d, dok, dzt, santos, vhz  |
|            7 |     1684 | 2024-02-24 | Case        | L   | 0.721      | -            | -                | -                | -         |    -4.88 | beg0d, dok, dzt, santos, vhz  |
|            6 |     1691 | 2024-02-24 | Case        | W   | 0.721      | 0.450        | 0.026 (0.008)    | 0.578 (0.188)    | 0 (0.000) |    18.26 | beg0d, dok, dzt, santos, vhz  |
|            5 |     1749 | 2024-02-21 | Imperial    | L   | 0.701      | -            | -                | -                | -         |    -0.05 | beg0d, dok, dzt, santos, vhz  |
|            4 |     1753 | 2024-02-21 | Imperial    | L   | 0.701      | -            | -                | -                | -         |    -0.05 | beg0d, dok, dzt, santos, vhz  |
|            3 |     1934 | 2024-02-14 | 9z          | L   | 0.655      | -            | -                | -                | -         |    -1.93 | beg0d, dok, dzt, santos, vhz  |
|            2 |     2803 | 2024-01-11 | adalYamigos | L   | 0.427      | -            | -                | -                | -         |    -5.58 | BRNZ1K, dok, dzt, santos, vhz |
|            1 |     2810 | 2024-01-11 | Corinthians | W   | 0.427      | 0.143        | 0.001 (0.000)    | 0.123 (0.008)    | 0 (0.000) |     7.75 | BRNZ1K, dok, dzt, santos, vhz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
