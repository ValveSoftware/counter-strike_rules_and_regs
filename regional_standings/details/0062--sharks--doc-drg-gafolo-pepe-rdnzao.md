### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, gafolo, pepe, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  971.4<br />
<br />
Final Rank Value (971.4) = Starting Rank Value (921.3) + Head To Head Adjustments (50.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.398[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.270[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 921.3
- 400 + ( ( 0.269 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 921.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |      159 | 2024-05-22 | Imperial    | W   | 1.000      | 0.450        | 0.373 (0.168)    | 0.889 (0.400)    | 0 (0.000) |    28.63 | doc, drg, gafolo, pepe, rdnzao    |
|           78 |      163 | 2024-05-22 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -2.53 | doc, drg, gafolo, pepe, rdnzao    |
|           77 |      189 | 2024-05-21 | Case        | L   | 1.000      | -            | -                | -                | -         |   -19.35 | doc, drg, gafolo, pepe, rdnzao    |
|           76 |      190 | 2024-05-21 | Case        | W   | 1.000      | 0.450        | 0.028 (0.013)    | 0.693 (0.312)    | 0 (0.000) |    11.84 | doc, drg, gafolo, pepe, rdnzao    |
|           75 |      193 | 2024-05-21 | RED Canids  | W   | 1.000      | 0.450        | 0.077 (0.035)    | 0.840 (0.378)    | 0 (0.000) |    23.29 | doc, drg, gafolo, pepe, rdnzao    |
|           74 |      197 | 2024-05-21 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -7.71 | doc, drg, gafolo, pepe, rdnzao    |
|           73 |      325 | 2024-05-17 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -18.04 | doc, drg, gafolo, rdnzao, togs    |
|           72 |      353 | 2024-05-16 | W7M         | W   | 1.000      | 0.450        | -                | 0.385 (0.173)    | 0 (0.000) |     7.09 | doc, drg, gafolo, rdnzao, togs    |
|           71 |      356 | 2024-05-16 | W7M         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.55 | doc, drg, gafolo, rdnzao, togs    |
|           70 |      358 | 2024-05-16 | Hype        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.57 | doc, drg, gafolo, rdnzao, togs    |
|           69 |      398 | 2024-05-15 | Vikings KR  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.01 | doc, drg, gafolo, rdnzao, togs    |
|           68 |      401 | 2024-05-15 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -3.94 | doc, drg, gafolo, rdnzao, togs    |
|           67 |      465 | 2024-05-14 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -8.37 | doc, drg, gafolo, rdnzao, togs    |
|           66 |      492 | 2024-05-13 | RED Canids  | W   | 1.000      | 0.384        | 0.077 (0.030)    | 0.840 (0.323)    | 0 (0.000) |    21.63 | doc, drg, gafolo, rdnzao, togs    |
|           65 |      500 | 2024-05-13 | W7M         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.68 | doc, drg, gafolo, rdnzao, togs    |
|           64 |      549 | 2024-05-11 | W7M         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.45 | doc, drg, gafolo, rdnzao, togs    |
|           63 |      588 | 2024-05-09 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |   -17.84 | doc, drg, gafolo, rdnzao, togs    |
|           62 |      611 | 2024-05-08 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -3.89 | doc, drg, gafolo, rdnzao, togs    |
|           61 |      649 | 2024-05-06 | BESTIA      | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.626 (0.272)    | -         |    12.90 | doc, drg, gafolo, rdnzao, togs    |
|           60 |      863 | 2024-04-26 | TYLOO       | L   | 0.979      | -            | -                | -                | -         |   -17.15 | doc, drg, rdnzao, supLexN1, togs  |
|           59 |      895 | 2024-04-25 | M80         | L   | 0.972      | -            | -                | -                | -         |    -5.88 | doc, drg, rdnzao, supLexN1, togs  |
|           58 |      935 | 2024-04-23 | Vitality    | L   | 0.958      | -            | -                | -                | -         |    -0.20 | doc, drg, rdnzao, supLexN1, togs  |
|           57 |     1156 | 2024-04-16 | W7M         | L   | 0.914      | -            | -                | -                | -         |   -19.80 | doc, drg, rdnzao, supLexN1, togs  |
|           56 |     1224 | 2024-04-12 | Galorys     | L   | 0.887      | -            | -                | -                | -         |   -18.20 | doc, drg, rdnzao, supLexN1, togs  |
|           55 |     1247 | 2024-04-11 | paiN        | L   | 0.880      | -            | -                | -                | -         |    -0.98 | doc, drg, gafolo, rdnzao, togs    |
|           54 |     1273 | 2024-04-10 | ODDIK       | W   | 0.874      | 0.450        | -                | 0.638 (0.251)    | -         |    11.35 | doc, drg, lukiz, rdnzao, supLexN1 |
|           53 |     1279 | 2024-04-10 | ODDIK       | L   | 0.874      | -            | -                | -                | -         |   -16.51 | doc, drg, lukiz, rdnzao, supLexN1 |
|           52 |     1378 | 2024-04-08 | paiN        | L   | 0.859      | -            | -                | -                | -         |    -0.98 | doc, drg, rdnzao, supLexN1, togs  |
|           51 |     1417 | 2024-04-07 | BESTIA      | W   | 0.851      | 0.435        | -                | 0.626 (0.232)    | -         |    12.11 | doc, drg, rdnzao, supLexN1, togs  |
|           50 |     1428 | 2024-04-06 | ODDIK       | W   | 0.846      | -            | -                | -                | -         |    11.96 | doc, drg, gafolo, supLexN1, togs  |
|           49 |     1448 | 2024-04-05 | paiN        | L   | 0.839      | -            | -                | -                | -         |    -0.78 | doc, drg, gafolo, supLexN1, togs  |
|           48 |     1466 | 2024-04-04 | paiN        | L   | 0.834      | -            | -                | -                | -         |    -0.78 | doc, drg, gafolo, supLexN1, togs  |
|           47 |     1474 | 2024-04-04 | paiN        | L   | 0.833      | -            | -                | -                | -         |    -0.79 | doc, drg, gafolo, supLexN1, togs  |
|           46 |     1511 | 2024-04-03 | ex-2GAME    | W   | 0.827      | -            | -                | -                | -         |     5.28 | doc, drg, gafolo, rdnzao, togs    |
|           45 |     1514 | 2024-04-03 | ex-2GAME    | W   | 0.827      | -            | -                | -                | -         |     5.54 | doc, drg, gafolo, rdnzao, togs    |
|           44 |     1552 | 2024-04-02 | BESTIA      | L   | 0.821      | -            | -                | -                | -         |   -13.45 | doc, drg, rdnzao, supLexN1, togs  |
|           43 |     1556 | 2024-04-02 | MIBR        | L   | 0.820      | -            | -                | -                | -         |    -1.00 | doc, drg, rdnzao, supLexN1, togs  |
|           42 |     1883 | 2024-03-14 | MIBR        | L   | 0.694      | -            | -                | -                | -         |    -0.87 | doc, drg, gafolo, rdnzao, togs    |
|           41 |     1885 | 2024-03-14 | MIBR        | L   | 0.694      | -            | -                | -                | -         |    -0.87 | doc, drg, gafolo, rdnzao, togs    |
|           40 |     1911 | 2024-03-13 | Yawara      | W   | 0.688      | -            | -                | -                | -         |     1.75 | doc, drg, gafolo, rdnzao, togs    |
|           39 |     1918 | 2024-03-13 | ODDIK       | W   | 0.687      | -            | -                | -                | -         |    10.72 | doc, drg, gafolo, rdnzao, togs    |
|           38 |     1986 | 2024-03-11 | Fluxo       | L   | 0.672      | -            | -                | -                | -         |    -8.74 | doc, drg, gafolo, rdnzao, togs    |
|           37 |     2016 | 2024-03-09 | Case        | L   | 0.660      | -            | -                | -                | -         |   -13.47 | doc, drg, gafolo, rdnzao, togs    |
|           36 |     2080 | 2024-03-07 | Corinthians | W   | 0.645      | -            | -                | -                | -         |     2.35 | doc, drg, gafolo, rdnzao, togs    |
|           35 |     2136 | 2024-03-05 | Solid       | W   | 0.633      | 0.450        | 0.062 (0.018)    | 0.627 (0.179)    | -         |     7.33 | doc, drg, gafolo, rdnzao, togs    |
|           34 |     2140 | 2024-03-05 | Solid       | W   | 0.632      | 0.450        | 0.062 (0.018)    | 0.627 (0.179)    | -         |     7.73 | doc, drg, gafolo, rdnzao, togs    |
|           33 |     2333 | 2024-02-24 | Galorys     | W   | 0.567      | -            | -                | -                | -         |     5.41 | doc, drg, gafolo, rdnzao, togs    |
|           32 |     2344 | 2024-02-24 | Galorys     | W   | 0.567      | -            | -                | -                | -         |     5.64 | doc, drg, gafolo, rdnzao, togs    |
|           31 |     2346 | 2024-02-24 | Fluxo       | L   | 0.567      | -            | -                | -                | -         |    -7.57 | doc, drg, gafolo, rdnzao, togs    |
|           30 |     2399 | 2024-02-21 | Corinthians | W   | 0.547      | -            | -                | -                | -         |     2.22 | doc, drg, gafolo, rdnzao, togs    |
|           29 |     2403 | 2024-02-21 | Case        | W   | 0.547      | -            | -                | -                | -         |     7.33 | doc, drg, gafolo, rdnzao, togs    |
|           28 |     2405 | 2024-02-21 | Galorys     | W   | 0.546      | -            | -                | -                | -         |     6.35 | doc, drg, gafolo, rdnzao, togs    |
|           27 |     2434 | 2024-02-20 | Flamengo    | L   | 0.540      | -            | -                | -                | -         |   -15.67 | doc, drg, gafolo, rdnzao, togs    |
|           26 |     2439 | 2024-02-20 | Case        | W   | 0.539      | -            | -                | -                | -         |     7.22 | doc, drg, gafolo, rdnzao, togs    |
|           25 |     2461 | 2024-02-19 | Solid       | W   | 0.532      | 0.303        | 0.062 (0.010)    | -                | -         |     6.96 | doc, drg, gafolo, rdnzao, togs    |
|           24 |     2477 | 2024-02-18 | Galorys     | W   | 0.528      | -            | -                | -                | -         |     6.39 | doc, drg, gafolo, rdnzao, togs    |
|           23 |     2499 | 2024-02-17 | W7M         | L   | 0.521      | -            | -                | -                | -         |   -10.97 | doc, drg, gafolo, rdnzao, togs    |
|           22 |     2503 | 2024-02-17 | Galorys     | L   | 0.520      | -            | -                | -                | -         |   -10.79 | doc, drg, gafolo, rdnzao, togs    |
|           21 |     2533 | 2024-02-16 | W7M         | W   | 0.512      | -            | -                | -                | -         |     5.32 | doc, drg, gafolo, rdnzao, togs    |
|           20 |     2558 | 2024-02-15 | Case        | L   | 0.507      | -            | -                | -                | -         |    -9.60 | doc, drg, gafolo, rdnzao, togs    |
|           19 |     2563 | 2024-02-15 | Fluxo       | L   | 0.506      | -            | -                | -                | -         |    -7.25 | doc, drg, gafolo, rdnzao, togs    |
|           18 |     2566 | 2024-02-15 | Fluxo       | L   | 0.505      | -            | -                | -                | -         |    -7.58 | doc, drg, gafolo, rdnzao, togs    |
|           17 |     2592 | 2024-02-14 | Hype        | W   | 0.501      | -            | -                | -                | -         |     0.61 | doc, drg, gafolo, rdnzao, togs    |
|           16 |     2602 | 2024-02-14 | Galorys     | W   | 0.499      | -            | -                | -                | -         |     5.04 | doc, drg, gafolo, rdnzao, togs    |
|           15 |     2647 | 2024-02-12 | Solid       | W   | 0.487      | -            | -                | -                | -         |     6.24 | doc, drg, gafolo, rdnzao, togs    |
|           14 |     2950 | 2024-01-24 | paiN        | W   | 0.361      | 0.143        | 0.464 (0.024)    | -                | -         |    11.08 | doc, drg, gafolo, rdnzao, togs    |
|           13 |     2968 | 2024-01-23 | adalYamigos | W   | 0.354      | -            | -                | -                | -         |     1.96 | doc, drg, gafolo, rdnzao, togs    |
|           12 |     2994 | 2024-01-22 | Legacy      | W   | 0.347      | -            | -                | -                | -         |     6.11 | doc, drg, gafolo, rdnzao, togs    |
|           11 |     3028 | 2024-01-21 | 9z          | L   | 0.339      | -            | -                | -                | -         |    -1.38 | doc, drg, gafolo, rdnzao, togs    |
|           10 |     3067 | 2024-01-20 | paiN        | L   | 0.333      | -            | -                | -                | -         |    -0.24 | doc, drg, gafolo, rdnzao, togs    |
|            9 |     3103 | 2024-01-19 | Galorys     | W   | 0.328      | -            | -                | -                | -         |     3.95 | doc, drg, gafolo, rdnzao, togs    |
|            8 |     3110 | 2024-01-19 | TIMACETA    | L   | 0.327      | -            | -                | -                | -         |    -9.41 | doc, drg, gafolo, rdnzao, togs    |
|            7 |     3169 | 2024-01-18 | MIBR        | L   | 0.320      | -            | -                | -                | -         |    -0.25 | doc, drg, gafolo, rdnzao, togs    |
|            6 |     3215 | 2024-01-17 | RED Canids  | W   | 0.314      | -            | -                | -                | -         |     5.96 | doc, drg, gafolo, rdnzao, togs    |
|            5 |     3233 | 2024-01-17 | MIBR        | L   | 0.313      | -            | -                | -                | -         |    -0.22 | doc, drg, gafolo, rdnzao, togs    |
|            4 |     3344 | 2024-01-14 | paiN        | W   | 0.294      | 0.143        | 0.464 (0.020)    | -                | -         |     9.10 | doc, drg, gafolo, rdnzao, togs    |
|            3 |     3347 | 2024-01-14 | BESTIA      | W   | 0.294      | -            | -                | -                | -         |     5.25 | doc, drg, gafolo, rdnzao, togs    |
|            2 |     3353 | 2024-01-14 | Corinthians | W   | 0.293      | -            | -                | -                | -         |     1.53 | doc, drg, gafolo, rdnzao, togs    |
|            1 |     3369 | 2024-01-13 | Galorys     | W   | 0.287      | -            | -                | -                | -         |     3.75 | doc, drg, gafolo, rdnzao, togs    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,277.32)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-02-25 |      0.573 | $5,000.00      | $2,865.94       |
| 2024-02-21 |      0.546 | $3,500.00      | $1,911.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
