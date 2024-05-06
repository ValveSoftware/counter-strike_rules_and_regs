### Roster Details<br />
Team Name: W7M<br />
Roster: fokiu, jz, saadzin, stormzyn, zede<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  795.6<br />
<br />
Final Rank Value (795.6) = Starting Rank Value (817.9) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.9
- 400 + ( ( 0.219 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 817.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |        0 | 2024-05-06 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.35 | fokiu, jz, saadzin, stormzyn, zede     |
|           65 |        1 | 2024-05-06 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.36 | fokiu, jz, saadzin, stormzyn, zede     |
|           64 |       24 | 2024-05-05 | Galorys       | W   | 1.000      | 0.435        | 0.047 (0.020)    | 0.510 (0.222)    | 0 (0.000) |    18.25 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           63 |      208 | 2024-04-26 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |    -9.24 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           62 |      210 | 2024-04-26 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |    -9.96 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           61 |      472 | 2024-04-17 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -11.70 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           60 |      505 | 2024-04-16 | Sharks        | W   | 1.000      | 0.143        | 0.060 (0.009)    | 0.453 (0.065)    | 0 (0.000) |    21.01 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           59 |      575 | 2024-04-12 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -6.18 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           58 |      684 | 2024-04-09 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -6.69 | fokiu, jz, saadzin, stormzyn, zede     |
|           57 |      689 | 2024-04-09 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -7.10 | fokiu, jz, saadzin, stormzyn, zede     |
|           56 |      722 | 2024-04-08 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -0.46 | fokiu, jz, saadzin, stormzyn, zede     |
|           55 |      778 | 2024-04-06 | RED Canids    | W   | 1.000      | 0.435        | 0.105 (0.046)    | 0.808 (0.351)    | 0 (0.000) |    24.73 | fokiu, jz, saadzin, stormzyn, zede     |
|           54 |      995 | 2024-03-27 | BESTIA        | W   | 0.935      | 0.450        | 0.025 (0.011)    | 0.389 (0.164)    | 0 (0.000) |    17.38 | fokiu, jz, saadzin, stormzyn, zede     |
|           53 |     1000 | 2024-03-27 | BESTIA        | L   | 0.934      | -            | -                | -                | -         |   -11.93 | fokiu, jz, saadzin, stormzyn, zede     |
|           52 |     1233 | 2024-03-14 | Galorys       | L   | 0.848      | -            | -                | -                | -         |   -13.21 | fokiu, jz, saadzin, stormzyn, zede     |
|           51 |     1236 | 2024-03-14 | Galorys       | L   | 0.848      | -            | -                | -                | -         |   -14.24 | fokiu, jz, saadzin, stormzyn, zede     |
|           50 |     1329 | 2024-03-11 | Solid         | L   | 0.827      | -            | -                | -                | -         |   -11.97 | fokiu, jz, saadzin, stormzyn, zede     |
|           49 |     1364 | 2024-03-09 | RED Canids    | L   | 0.815      | -            | -                | -                | -         |    -7.47 | fokiu, jz, saadzin, stormzyn, zede     |
|           48 |     1424 | 2024-03-07 | Solid         | W   | 0.800      | 0.435        | 0.132 (0.046)    | 0.503 (0.175)    | 0 (0.000) |    13.74 | fokiu, jz, saadzin, stormzyn, zede     |
|           47 |     1478 | 2024-03-05 | 2GAME         | L   | 0.788      | -            | -                | -                | -         |   -18.37 | fokiu, jz, saadzin, stormzyn, zede     |
|           46 |     1480 | 2024-03-05 | 2GAME         | L   | 0.788      | -            | -                | -                | -         |   -19.33 | fokiu, jz, saadzin, stormzyn, zede     |
|           45 |     1685 | 2024-02-24 | Corinthians   | W   | 0.721      | -            | -                | -                | 0 (0.000) |     4.88 | fokiu, jz, saadzin, stormzyn, zede     |
|           44 |     1694 | 2024-02-24 | Corinthians   | W   | 0.721      | -            | -                | -                | 0 (0.000) |     5.09 | fokiu, jz, saadzin, stormzyn, zede     |
|           43 |     1746 | 2024-02-21 | Fluxo         | W   | 0.702      | 0.450        | 0.148 (0.047)    | 0.569 (0.180)    | 0 (0.000) |    16.96 | fokiu, jz, saadzin, stormzyn, zede     |
|           42 |     1750 | 2024-02-21 | Fluxo         | L   | 0.701      | -            | -                | -                | -         |    -5.02 | fokiu, jz, saadzin, stormzyn, zede     |
|           41 |     1758 | 2024-02-21 | BESTIA        | L   | 0.700      | -            | -                | -                | -         |   -10.62 | fokiu, jz, saadzin, stormzyn, zede     |
|           40 |     1784 | 2024-02-20 | Case          | L   | 0.694      | -            | -                | -                | -         |   -10.14 | fokiu, jz, saadzin, stormzyn, zede     |
|           39 |     1848 | 2024-02-17 | Sharks        | W   | 0.675      | 0.435        | 0.060 (0.018)    | 0.453 (0.133)    | 0 (0.000) |    12.82 | fokiu, jz, saadzin, stormzyn, zede     |
|           38 |     1879 | 2024-02-16 | Solid         | L   | 0.667      | -            | -                | -                | -         |   -10.04 | fokiu, jz, saadzin, stormzyn, zede     |
|           37 |     1882 | 2024-02-16 | Sharks        | L   | 0.666      | -            | -                | -                | -         |    -8.30 | fokiu, jz, saadzin, stormzyn, zede     |
|           36 |     1908 | 2024-02-15 | Fluxo         | L   | 0.661      | -            | -                | -                | -         |    -5.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           35 |     1939 | 2024-02-14 | Genei Ryodan  | W   | 0.655      | -            | -                | -                | 0 (0.000) |     1.47 | fokiu, jz, saadzin, stormzyn, zede     |
|           34 |     1978 | 2024-02-13 | Case          | L   | 0.648      | -            | -                | -                | -         |   -10.59 | fokiu, jz, saadzin, stormzyn, zede     |
|           33 |     1982 | 2024-02-13 | Case          | W   | 0.648      | 0.450        | 0.026 (0.008)    | 0.578 (0.169)    | -         |    10.01 | fokiu, jz, saadzin, stormzyn, zede     |
|           32 |     1988 | 2024-02-13 | Corinthians   | W   | 0.646      | -            | -                | -                | -         |     4.73 | fokiu, jz, saadzin, stormzyn, zede     |
|           31 |     1999 | 2024-02-12 | Corinthians   | W   | 0.641      | -            | -                | -                | -         |     4.89 | fokiu, jz, saadzin, stormzyn, zede     |
|           30 |     2101 | 2024-02-03 | 9z            | L   | 0.582      | -            | -                | -                | -         |    -5.66 | fokiu, jz, saadzin, stormzyn, zede     |
|           29 |     2164 | 2024-02-01 | paiN          | W   | 0.569      | 0.143        | 0.786 (0.064)    | 0.869 (0.071)    | -         |    17.76 | fokiu, jz, saadzin, stormzyn, zede     |
|           28 |     2166 | 2024-02-01 | RED Canids    | W   | 0.568      | 0.143        | 0.105 (0.009)    | 0.808 (0.066)    | -         |    12.31 | fokiu, jz, saadzin, stormzyn, zede     |
|           27 |     2171 | 2024-02-01 | MIBR          | L   | 0.567      | -            | -                | -                | -         |    -0.20 | fokiu, jz, saadzin, stormzyn, zede     |
|           26 |     2319 | 2024-01-23 | paiN          | L   | 0.508      | -            | -                | -                | -         |    -0.10 | fokiu, jz, saadzin, stormzyn, zede     |
|           25 |     2342 | 2024-01-22 | RED Canids    | W   | 0.501      | -            | -                | -                | -         |    11.30 | fokiu, jz, saadzin, stormzyn, zede     |
|           24 |     2370 | 2024-01-21 | 9z            | L   | 0.495      | -            | -                | -                | -         |    -4.87 | fokiu, jz, saadzin, stormzyn, zede     |
|           23 |     2373 | 2024-01-21 | BESTIA        | L   | 0.494      | -            | -                | -                | -         |    -7.75 | fokiu, jz, saadzin, stormzyn, zede     |
|           22 |     2414 | 2024-01-20 | TIMACETA      | W   | 0.487      | -            | -                | -                | -         |     2.61 | fokiu, jz, saadzin, stormzyn, zede     |
|           21 |     2450 | 2024-01-19 | Case          | W   | 0.482      | -            | -                | -                | -         |     5.76 | fokiu, jz, saadzin, stormzyn, zede     |
|           20 |     2470 | 2024-01-19 | paiN          | L   | 0.480      | -            | -                | -                | -         |    -0.08 | fokiu, jz, saadzin, stormzyn, zede     |
|           19 |     2621 | 2024-01-16 | Legacy        | L   | 0.461      | -            | -                | -                | -         |    -3.36 | fokiu, jz, saadzin, stormzyn, zede     |
|           18 |     2628 | 2024-01-16 | TIMACETA      | W   | 0.461      | -            | -                | -                | -         |     2.40 | fokiu, jz, saadzin, stormzyn, zede     |
|           17 |     2664 | 2024-01-15 | inSanitY      | W   | 0.455      | -            | -                | -                | -         |     1.31 | fokiu, jz, saadzin, stormzyn, zede     |
|           16 |     2701 | 2024-01-14 | BESTIA        | L   | 0.447      | -            | -                | -                | -         |    -7.14 | fokiu, jz, saadzin, stormzyn, zede     |
|           15 |     2719 | 2024-01-13 | Case          | W   | 0.441      | -            | -                | -                | -         |     5.16 | fokiu, jz, saadzin, stormzyn, zede     |
|           14 |     2853 | 2024-01-09 | ODDIK         | L   | 0.415      | -            | -                | -                | -         |    -4.15 | fokiu, jz, saadzin, stormzyn, zede     |
|           13 |     2856 | 2024-01-09 | Legacy        | L   | 0.415      | -            | -                | -                | -         |    -3.12 | fokiu, jz, saadzin, stormzyn, zede     |
|           12 |     2860 | 2024-01-09 | Dusty Roots   | W   | 0.414      | -            | -                | -                | -         |     1.14 | fokiu, jz, saadzin, stormzyn, zede     |
|           11 |     2874 | 2024-01-09 | LA RUGONETA   | W   | 0.413      | -            | -                | -                | -         |     2.01 | fokiu, jz, saadzin, stormzyn, zede     |
|           10 |     2954 | 2023-12-18 | WINDINGO      | W   | 0.266      | -            | -                | -                | -         |     2.52 | fokiu, jz, saadzin, stormzyn, zede     |
|            9 |     3001 | 2023-12-16 | Case          | W   | 0.255      | -            | -                | -                | -         |     3.01 | fokiu, jz, saadzin, stormzyn, zede     |
|            8 |     3312 | 2023-11-29 | BESTIA        | L   | 0.141      | -            | -                | -                | -         |    -2.26 | fokiu, jz, saadzin, stormzyn, zede     |
|            7 |     3326 | 2023-11-28 | adalYamigos   | W   | 0.135      | -            | -                | -                | -         |     1.22 | fokiu, jz, saadzin, stormzyn, zede     |
|            6 |     3462 | 2023-11-19 | RED Canids    | L   | 0.073      | -            | -                | -                | -         |    -0.69 | fokiu, jz, saadzin, stormzyn, zede     |
|            5 |     3481 | 2023-11-18 | Sharks        | L   | 0.068      | -            | -                | -                | -         |    -0.87 | fokiu, jz, saadzin, stormzyn, zede     |
|            4 |     3519 | 2023-11-17 | RED Canids    | W   | 0.060      | -            | -                | -                | -         |     1.34 | fokiu, jz, saadzin, stormzyn, zede     |
|            3 |     3546 | 2023-11-16 | Solid         | W   | 0.054      | -            | -                | -                | -         |     1.07 | fokiu, jz, saadzin, stormzyn, zede     |
|            2 |     3594 | 2023-11-15 | FURIA Academy | W   | 0.047      | -            | -                | -                | -         |     0.26 | fokiu, jz, saadzin, stormzyn, zede     |
|            1 |     3639 | 2023-11-13 | Sharks        | L   | 0.033      | -            | -                | -                | -         |    -0.43 | fokiu, jz, saadzin, stormzyn, zede     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,434.47)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
