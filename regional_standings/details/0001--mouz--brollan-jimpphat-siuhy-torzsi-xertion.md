### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  1951.1<br />
<br />
Final Rank Value (1951.1) = Starting Rank Value (1979.3) + Head To Head Adjustments (-28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.731[<sup>2</sup>](#table1)
- Opponent Network: 0.523[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.814<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1979.3
- 400 + ( ( 0.814 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1979.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       20 | 2024-05-28 | G2                 | L   | 1.000      | -            | -                | -                | -         |   -24.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           37 |       41 | 2024-05-27 | Complexity         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.22 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           36 |       52 | 2024-05-27 | 9z                 | L   | 1.000      | -            | -                | -                | -         |   -31.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           35 |      269 | 2024-05-19 | Spirit             | W   | 1.000      | 0.769        | 1.000 (0.769)    | 0.534 (0.410)    | 1 (1.000) |    12.70 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |      297 | 2024-05-18 | HEROIC             | W   | 1.000      | 0.769        | 0.322 (0.248)    | 0.662 (0.509)    | 1 (1.000) |     3.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      376 | 2024-05-16 | Virtus.pro         | W   | 1.000      | 0.769        | -                | 0.499 (0.384)    | 1 (1.000) |     4.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      481 | 2024-05-14 | BetBoom            | W   | 1.000      | 0.769        | 0.392 (0.302)    | 0.951 (0.731)    | 1 (1.000) |     0.67 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      524 | 2024-05-12 | Vitality           | W   | 1.000      | 0.889        | 0.699 (0.621)    | 0.481 (0.428)    | 1 (1.000) |    10.73 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      544 | 2024-05-11 | Complexity         | W   | 1.000      | 0.889        | 0.260 (0.231)    | -                | 1 (1.000) |     3.58 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |      594 | 2024-05-09 | G2                 | W   | 1.000      | 0.889        | 0.469 (0.417)    | 0.565 (0.502)    | 1 (1.000) |     7.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |      687 | 2024-05-04 | Liquid             | W   | 1.000      | 0.889        | 0.493 (0.438)    | 0.854 (0.759)    | 1 (1.000) |     4.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |      756 | 2024-05-01 | GamerLegion        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.45 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |      786 | 2024-04-30 | Bad News Kangaroos | W   | 1.000      | -            | -                | -                | -         |     0.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1205 | 2024-04-14 | FaZe               | L   | 0.897      | -            | -                | -                | -         |   -14.45 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1222 | 2024-04-13 | G2                 | W   | 0.890      | 0.624        | 0.469 (0.261)    | -                | -         |     7.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1315 | 2024-04-10 | Liquid             | W   | 0.870      | 0.624        | 0.493 (0.268)    | 0.854 (0.464)    | -         |     3.90 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1385 | 2024-04-08 | FURIA              | W   | 0.858      | -            | -                | -                | -         |     0.85 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1403 | 2024-04-08 | TYLOO              | W   | 0.856      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1605 | 2024-03-29 | G2                 | L   | 0.793      | -            | -                | -                | -         |   -18.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     1728 | 2024-03-22 | Complexity         | W   | 0.745      | -            | -                | -                | -         |     1.95 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     1748 | 2024-03-21 | Eternal Fire       | W   | 0.739      | 1.000        | 1.000 (0.739)    | 0.605 (0.447)    | -         |     7.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     1759 | 2024-03-21 | Gaimin Gladiators  | W   | 0.737      | 1.000        | -                | 0.809 (0.596)    | -         |     0.39 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2438 | 2024-02-20 | Spirit             | W   | 0.539      | -            | -                | -                | -         |     7.62 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2460 | 2024-02-19 | Gaimin Gladiators  | W   | 0.532      | -            | -                | -                | -         |     0.24 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2473 | 2024-02-19 | ex-Guild Eagles    | W   | 0.530      | -            | -                | -                | -         |     0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2667 | 2024-02-10 | FaZe               | L   | 0.472      | -            | -                | -                | -         |    -6.79 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     2710 | 2024-02-06 | ENCE               | W   | 0.446      | -            | -                | -                | -         |     0.60 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     2722 | 2024-02-05 | GamerLegion        | W   | 0.439      | -            | -                | -                | -         |     0.16 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     2745 | 2024-02-04 | Cloud9             | W   | 0.432      | -            | -                | -                | -         |     0.63 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3058 | 2024-01-20 | ex-Preasy          | W   | 0.333      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3073 | 2024-01-20 | Spirit             | L   | 0.332      | -            | -                | -                | -         |    -6.22 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3123 | 2024-01-19 | Eternal Fire       | L   | 0.326      | -            | -                | -                | -         |    -7.11 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3181 | 2024-01-18 | HEROIC             | W   | 0.319      | -            | -                | -                | -         |     1.92 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3197 | 2024-01-18 | EYEBALLERS         | W   | 0.318      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3669 | 2023-12-16 | FaZe               | L   | 0.098      | -            | -                | -                | -         |    -1.44 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     3695 | 2023-12-15 | Cloud9             | W   | 0.090      | -            | -                | -                | -         |     0.11 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     3697 | 2023-12-14 | HEROIC             | W   | 0.084      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     3706 | 2023-12-13 | G2                 | L   | 0.078      | -            | -                | -                | -         |    -1.81 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($596,193.14)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $300,000.00    | $300,000.00     |
| 2024-05-12 |      1.000 | $170,000.00    | $170,000.00     |
| 2024-04-14 |      0.897 | $42,000.00     | $37,683.84      |
| 2024-03-31 |      0.806 | $45,000.00     | $36,276.31      |
| 2024-02-11 |      0.479 | $80,000.00     | $38,323.78      |
| 2023-12-17 |      0.105 | $85,000.00     | $8,909.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
