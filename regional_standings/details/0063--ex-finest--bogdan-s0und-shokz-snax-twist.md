### Roster Details<br />
Team Name: ex-Finest<br />
Roster: Bogdan, s0und, shokz, Snax, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  906.0<br />
<br />
Final Rank Value (906.0) = Starting Rank Value (854.9) + Head To Head Adjustments (51.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.9
- 400 + ( ( 0.222 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 854.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       99 | 2023-02-07 | Sangal            | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.684 (0.297)    | 0 (0.000) |    17.18 | Bogdan, s0und, shokz, Snax, twist        |
|           27 |      641 | 2023-01-17 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.776 (0.337)    | 0 (0.000) |    16.72 | Bogdan, s0und, shokz, Snax, twist        |
|           26 |      959 | 2022-12-11 | MASONIC           | L   | 0.779      | -            | -                | -                | -         |   -12.62 | Bogdan, hades, PlesseN, Snax, twist      |
|           25 |      986 | 2022-12-10 | Apeks             | L   | 0.773      | -            | -                | -                | -         |   -10.02 | Bogdan, hades, PlesseN, Snax, twist      |
|           24 |     1032 | 2022-12-08 | HAVU              | L   | 0.761      | -            | -                | -                | -         |    -8.64 | Bogdan, hades, PlesseN, Snax, twist      |
|           23 |     1071 | 2022-12-07 | Believe           | L   | 0.753      | -            | -                | -                | -         |   -15.54 | Bogdan, hades, PlesseN, Snax, twist      |
|           22 |     1106 | 2022-12-06 | Young Ninjas      | W   | 0.747      | 0.435        | 0.076 (0.025)    | 0.694 (0.226)    | 0 (0.000) |    13.56 | Bogdan, hades, PlesseN, Snax, twist      |
|           21 |     1223 | 2022-12-03 | sYnck             | W   | 0.726      | 0.435        | -                | 0.397 (0.125)    | 0 (0.000) |     7.36 | Bogdan, hades, PlesseN, Snax, twist      |
|           20 |     1254 | 2022-12-02 | forZe             | L   | 0.719      | -            | -                | -                | -         |    -9.40 | hades, PlesseN, shokz, Snax, twist       |
|           19 |     1282 | 2022-12-01 | HAVU              | L   | 0.712      | -            | -                | -                | -         |   -10.43 | hades, PlesseN, shokz, Snax, twist       |
|           18 |     1333 | 2022-11-29 | Endpoint          | L   | 0.700      | -            | -                | -                | -         |   -10.50 | hades, PlesseN, shokz, Snax, twist       |
|           17 |     1381 | 2022-11-27 | ECLOT             | W   | 0.687      | 0.435        | 0.046 (0.014)    | 0.584 (0.174)    | 0 (0.000) |    12.34 | hades, PlesseN, shokz, Snax, twist       |
|           16 |     1462 | 2022-11-25 | ECSTATIC          | W   | 0.672      | 0.435        | 0.030 (0.009)    | 0.556 (0.162)    | 0 (0.000) |     8.78 | hades, PlesseN, shokz, Snax, twist       |
|           15 |     1491 | 2022-11-23 | EPG Family        | W   | 0.661      | -            | -                | -                | 0 (0.000) |     8.69 | hades, PlesseN, shokz, Snax, twist       |
|           14 |     1565 | 2022-11-18 | Copenhagen Flames | L   | 0.627      | -            | -                | -                | -         |    -6.83 | hades, PlesseN, shokz, Snax, twist       |
|           13 |     1574 | 2022-11-18 | Endpoint          | W   | 0.625      | 0.435        | 0.033 (0.009)    | 0.641 (0.174)    | 0 (0.000) |    10.50 | hades, PlesseN, shokz, Snax, twist       |
|           12 |     1576 | 2022-11-17 | BLUEJAYS          | W   | 0.621      | 0.435        | 0.102 (0.028)    | 0.490 (0.132)    | 0 (0.000) |    14.06 | hades, PlesseN, shokz, Snax, twist       |
|           11 |     1610 | 2022-11-16 | SINNERS           | W   | 0.614      | 0.435        | 0.068 (0.018)    | 0.549 (0.146)    | 0 (0.000) |    13.12 | hades, PlesseN, shokz, Snax, twist       |
|           10 |     1659 | 2022-11-11 | HONORIS           | L   | 0.579      | -            | -                | -                | -         |    -8.35 | hades, PlesseN, shokz, Snax, twist       |
|            9 |     1664 | 2022-11-10 | LDLC              | L   | 0.571      | -            | -                | -                | -         |   -12.44 | hades, PlesseN, shokz, Snax, twist       |
|            8 |     1744 | 2022-11-02 | SAW               | L   | 0.520      | -            | -                | -                | -         |    -3.54 | hades, PlesseN, shokz, Snax, twist       |
|            7 |     1873 | 2022-10-26 | GamerLegion       | L   | 0.471      | -            | -                | -                | -         |    -2.57 | hades, PlesseN, shokz, Snax, twist       |
|            6 |     1895 | 2022-10-25 | Eternal Fire      | W   | 0.465      | 0.384        | -                | 0.496 (0.089)    | -         |     8.32 | hades, PlesseN, shokz, Snax, twist       |
|            5 |     1912 | 2022-10-24 | Sprout            | W   | 0.459      | 0.384        | 0.067 (0.012)    | -                | -         |    11.71 | hades, PlesseN, shokz, Snax, twist       |
|            4 |     2214 | 2022-10-13 | Aurora            | W   | 0.386      | -            | -                | -                | -         |     3.42 | hades, PlesseN, shokz, Snax, twist       |
|            3 |     2244 | 2022-10-12 | ECLOT             | W   | 0.380      | -            | -                | -                | -         |     7.97 | hades, PlesseN, shokz, Snax, twist       |
|            2 |     2281 | 2022-10-11 | Sprout            | W   | 0.372      | 0.384        | 0.067 (0.010)    | -                | -         |    10.02 | hades, PlesseN, shokz, Snax, twist       |
|            1 |     2551 | 2022-09-28 | BLUEJAYS          | L   | 0.286      | -            | -                | -                | -         |    -1.81 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,979.89)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-18 |      0.627 | $10,000.00     | $6,269.39       |
| 2022-10-26 |      0.474 | $1,500.00      | $710.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
