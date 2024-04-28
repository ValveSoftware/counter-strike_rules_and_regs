### Roster Details<br />
Team Name: SAW<br />
Roster: ewjerkz, JUST, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1131.6<br />
<br />
Final Rank Value (1131.6) = Starting Rank Value (1127.0) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.493[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.371[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1127.0
- 400 + ( ( 0.355 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1127.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      231 | 2023-02-01 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -19.35 | ewjerkz, JUST, MUTiRiS, roman, story |
|           56 |      317 | 2023-01-29 | 9INE            | L   | 1.000      | -            | -                | -                | -         |   -23.03 | ewjerkz, JUST, MUTiRiS, roman, story |
|           55 |      408 | 2023-01-26 | Bad News Eagles | L   | 1.000      | -            | -                | -                | -         |   -17.26 | ewjerkz, JUST, MUTiRiS, roman, story |
|           54 |      441 | 2023-01-25 | Sangal          | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.684 (0.297)    | 0 (0.000) |     6.22 | ewjerkz, JUST, MUTiRiS, roman, story |
|           53 |      492 | 2023-01-23 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | -                | 0.486 (0.211)    | 0 (0.000) |     3.26 | ewjerkz, JUST, MUTiRiS, roman, story |
|           52 |      531 | 2023-01-22 | Movistar Riders | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.12 | ewjerkz, JUST, MUTiRiS, roman, story |
|           51 |      536 | 2023-01-22 | GTZ             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.63 | ewjerkz, JUST, MUTiRiS, roman, story |
|           50 |      617 | 2023-01-18 | forZe           | W   | 1.000      | 0.143        | 0.047 (0.007)    | 0.708 (0.101)    | 0 (0.000) |     8.71 | ewjerkz, JUST, MUTiRiS, roman, story |
|           49 |      639 | 2023-01-17 | Endpoint        | W   | 1.000      | 0.143        | -                | 0.641 (0.092)    | -         |     6.98 | ewjerkz, JUST, MUTiRiS, roman, story |
|           48 |      659 | 2023-01-16 | Babos           | W   | 1.000      | -            | -                | -                | -         |     2.17 | ewjerkz, JUST, MUTiRiS, roman, story |
|           47 |      754 | 2022-12-19 | Spirit          | W   | 0.833      | 0.435        | 0.211 (0.076)    | 0.350 (0.127)    | -         |    19.93 | ewjerkz, JUST, MUTiRiS, roman, story |
|           46 |      888 | 2022-12-14 | Spirit          | W   | 0.800      | 0.435        | 0.211 (0.073)    | 0.350 (0.122)    | -         |    20.14 | ewjerkz, JUST, MUTiRiS, roman, story |
|           45 |      911 | 2022-12-13 | BLUEJAYS        | W   | 0.793      | 0.435        | 0.102 (0.035)    | 0.490 (0.169)    | -         |    10.45 | ewjerkz, JUST, MUTiRiS, roman, story |
|           44 |      977 | 2022-12-10 | Case            | W   | 0.774      | -            | -                | -                | 1 (0.774) |     2.22 | ewjerkz, JUST, MUTiRiS, roman, story |
|           43 |     1142 | 2022-12-05 | Endpoint        | L   | 0.740      | -            | -                | -                | -         |   -17.43 | ewjerkz, JUST, MUTiRiS, roman, story |
|           42 |     1169 | 2022-12-04 | FTW             | W   | 0.733      | 0.342        | 0.026 (0.007)    | -                | 1 (0.733) |     5.30 | ewjerkz, JUST, MUTiRiS, roman, story |
|           41 |     1208 | 2022-12-03 | FTW             | W   | 0.727      | -            | -                | -                | 1 (0.727) |     5.36 | ewjerkz, JUST, MUTiRiS, roman, story |
|           40 |     1230 | 2022-12-03 | GTZ             | W   | 0.725      | -            | -                | -                | 1 (0.725) |     1.17 | ewjerkz, JUST, MUTiRiS, roman, story |
|           39 |     1301 | 2022-11-30 | forZe           | W   | 0.707      | 0.435        | 0.047 (0.015)    | 0.708 (0.217)    | -         |     7.42 | ewjerkz, JUST, MUTiRiS, roman, story |
|           38 |     1377 | 2022-11-27 | FTW             | L   | 0.687      | -            | -                | -                | -         |   -17.20 | ewjerkz, JUST, MUTiRiS, roman, story |
|           37 |     1416 | 2022-11-26 | FTW             | W   | 0.680      | -            | -                | -                | -         |     4.17 | ewjerkz, JUST, MUTiRiS, roman, story |
|           36 |     1426 | 2022-11-26 | GTZ             | W   | 0.679      | -            | -                | -                | -         |     1.12 | ewjerkz, JUST, MUTiRiS, roman, story |
|           35 |     1446 | 2022-11-25 | Movistar Riders | W   | 0.674      | -            | -                | -                | -         |     2.94 | ewjerkz, JUST, MUTiRiS, roman, story |
|           34 |     1577 | 2022-11-17 | 500             | L   | 0.621      | -            | -                | -                | -         |   -10.49 | ewjerkz, JUST, MUTiRiS, roman, story |
|           33 |     1584 | 2022-11-17 | fnatic          | L   | 0.620      | -            | -                | -                | -         |    -2.55 | ewjerkz, JUST, MUTiRiS, roman, story |
|           32 |     1594 | 2022-11-17 | Complexity      | W   | 0.619      | 0.589        | 0.129 (0.047)    | 0.487 (0.177)    | 1 (0.619) |    15.19 | ewjerkz, JUST, MUTiRiS, roman, story |
|           31 |     1600 | 2022-11-17 | Astralis        | L   | 0.618      | -            | -                | -                | -         |    -4.86 | ewjerkz, JUST, MUTiRiS, roman, story |
|           30 |     1604 | 2022-11-17 | Bad News Eagles | L   | 0.617      | -            | -                | -                | -         |    -8.71 | ewjerkz, JUST, MUTiRiS, roman, story |
|           29 |     1744 | 2022-11-02 | ex-Finest       | W   | 0.520      | -            | -                | -                | -         |     3.54 | ewjerkz, JUST, MUTiRiS, roman, story |
|           28 |     1859 | 2022-10-26 | GamerLegion     | W   | 0.474      | 0.384        | 0.105 (0.019)    | -                | -         |     8.69 | ewjerkz, JUST, MUTiRiS, roman, story |
|           27 |     1867 | 2022-10-26 | TYLOO           | W   | 0.473      | -            | -                | -                | -         |     1.39 | ewjerkz, JUST, MUTiRiS, roman, story |
|           26 |     1879 | 2022-10-25 | Movistar Riders | W   | 0.467      | -            | -                | -                | -         |     1.96 | ewjerkz, JUST, MUTiRiS, roman, story |
|           25 |     1919 | 2022-10-24 | Endpoint        | W   | 0.457      | 0.384        | -                | 0.641 (0.113)    | -         |     3.55 | ewjerkz, JUST, MUTiRiS, roman, story |
|           24 |     1938 | 2022-10-23 | 1WIN            | L   | 0.452      | -            | -                | -                | -         |   -10.96 | ewjerkz, JUST, MUTiRiS, roman, story |
|           23 |     1993 | 2022-10-21 | Nemiga          | W   | 0.439      | -            | -                | -                | -         |     1.75 | ewjerkz, JUST, MUTiRiS, roman, story |
|           22 |     2213 | 2022-10-13 | AGO             | W   | 0.386      | -            | -                | -                | -         |     1.67 | ewjerkz, JUST, MUTiRiS, roman, story |
|           21 |     2246 | 2022-10-12 | Believe         | W   | 0.380      | -            | -                | -                | -         |     1.74 | ewjerkz, JUST, MUTiRiS, roman, story |
|           20 |     2267 | 2022-10-12 | ECLOT           | W   | 0.378      | 0.384        | 0.046 (0.007)    | -                | -         |     4.09 | ewjerkz, JUST, MUTiRiS, roman, story |
|           19 |     2351 | 2022-10-07 | HEET            | L   | 0.345      | -            | -                | -                | -         |    -7.81 | ewjerkz, JUST, MUTiRiS, roman, story |
|           18 |     2402 | 2022-10-05 | Monte           | L   | 0.332      | -            | -                | -                | -         |    -9.50 | ewjerkz, JUST, MUTiRiS, roman, story |
|           17 |     2421 | 2022-10-04 | Heroic          | L   | 0.326      | -            | -                | -                | -         |    -0.24 | ewjerkz, JUST, MUTiRiS, roman, story |
|           16 |     2529 | 2022-09-29 | ECSTATIC        | W   | 0.292      | -            | -                | -                | -         |     2.02 | ewjerkz, JUST, MUTiRiS, roman, story |
|           15 |     2790 | 2022-09-21 | Sprout          | L   | 0.239      | -            | -                | -                | -         |    -3.35 | ewjerkz, JUST, MUTiRiS, roman, story |
|           14 |     3032 | 2022-09-13 | EYEBALLERS      | W   | 0.185      | -            | -                | -                | -         |     1.46 | ewjerkz, JUST, MUTiRiS, roman, story |
|           13 |     3284 | 2022-09-04 | MASONIC         | L   | 0.127      | -            | -                | -                | -         |    -3.06 | ewjerkz, JUST, MUTiRiS, roman, story |
|           12 |     3318 | 2022-09-03 | Sprout          | W   | 0.120      | -            | -                | -                | -         |     2.15 | ewjerkz, JUST, MUTiRiS, roman, story |
|           11 |     3384 | 2022-09-01 | Apeks           | W   | 0.106      | -            | -                | -                | -         |     0.87 | ewjerkz, JUST, MUTiRiS, roman, story |
|           10 |     3413 | 2022-08-31 | forZe           | L   | 0.100      | -            | -                | -                | -         |    -2.18 | ewjerkz, JUST, MUTiRiS, roman, story |
|            9 |     3429 | 2022-08-30 | 1WIN            | L   | 0.093      | -            | -                | -                | -         |    -2.41 | ewjerkz, JUST, MUTiRiS, roman, story |
|            8 |     3470 | 2022-08-28 | Astralis        | W   | 0.080      | -            | -                | -                | -         |     1.88 | ewjerkz, JUST, MUTiRiS, roman, story |
|            7 |     3476 | 2022-08-28 | 1WIN            | W   | 0.079      | -            | -                | -                | -         |     0.45 | ewjerkz, JUST, MUTiRiS, roman, story |
|            6 |     3494 | 2022-08-27 | GamerLegion     | W   | 0.074      | -            | -                | -                | -         |     1.29 | ewjerkz, JUST, MUTiRiS, roman, story |
|            5 |     3508 | 2022-08-27 | Anonymo         | W   | 0.073      | -            | -                | -                | -         |     0.10 | ewjerkz, JUST, MUTiRiS, roman, story |
|            4 |     3525 | 2022-08-27 | Infinite        | W   | 0.072      | -            | -                | -                | -         |     0.07 | ewjerkz, JUST, MUTiRiS, roman, story |
|            3 |     3613 | 2022-08-23 | Coalesce        | L   | 0.046      | -            | -                | -                | -         |    -1.31 | ewjerkz, JUST, MUTiRiS, roman, story |
|            2 |     3675 | 2022-08-21 | 1WIN            | L   | 0.033      | -            | -                | -                | -         |    -0.85 | ewjerkz, JUST, MUTiRiS, roman, story |
|            1 |     3698 | 2022-08-21 | Beyond Possible | W   | 0.033      | -            | -                | -                | -         |     0.03 | ewjerkz, JUST, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,236.20)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-11 |      1.000 | $1,600.00      | $1,600.00       |
| 2023-01-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2022-12-19 |      0.833 | $20,000.00     | $16,662.36      |
| 2022-12-10 |      0.774 | $6,000.00      | $4,642.66       |
| 2022-12-04 |      0.733 | $6,162.00      | $4,518.05       |
| 2022-11-27 |      0.687 | $3,513.00      | $2,414.54       |
| 2022-11-20 |      0.640 | $4,000.00      | $2,558.48       |
| 2022-10-26 |      0.474 | $12,500.00     | $5,920.84       |
| 2022-10-24 |      0.460 | $2,000.00      | $919.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
