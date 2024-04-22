### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  941.1<br />
<br />
Final Rank Value (941.1) = Starting Rank Value (913.9) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 913.9
- 400 + ( ( 0.266 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 913.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |        4 | 2024-04-22 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.052 (0.022)    | 0.406 (0.176)    | 0 (0.000) |    11.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |       11 | 2024-04-22 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -12.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |       22 | 2024-04-21 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.019 (0.010)    | 0.639 (0.320)    | 0 (0.000) |     9.81 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |       28 | 2024-04-21 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -12.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |       50 | 2024-04-20 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |      137 | 2024-04-18 | Enterprise        | W   | 1.000      | 0.500        | 0.026 (0.013)    | 0.452 (0.226)    | 0 (0.000) |    14.90 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |      159 | 2024-04-18 | ENCE Academy      | W   | 1.000      | 0.371        | 0.016 (0.006)    | -                | 0 (0.000) |    12.75 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |      206 | 2024-04-17 | JANO              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |      219 | 2024-04-16 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -27.86 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           46 |      245 | 2024-04-15 | Alliance          | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.855 (0.328)    | 0 (0.000) |    10.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |      286 | 2024-04-12 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -17.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |      413 | 2024-04-09 | Zero Tenacity     | W   | 1.000      | 0.371        | -                | 0.805 (0.298)    | 0 (0.000) |     9.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |      443 | 2024-04-08 | B8                | W   | 1.000      | 0.384        | -                | 0.655 (0.252)    | 0 (0.000) |    13.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |      573 | 2024-04-03 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.62 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |      903 | 2024-03-16 | Sampi             | L   | 0.951      | -            | -                | -                | -         |   -14.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |      920 | 2024-03-15 | Entropiq          | W   | 0.945      | -            | -                | -                | 0 (0.000) |     7.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |      969 | 2024-03-13 | Permitta          | L   | 0.934      | -            | -                | -                | -         |   -14.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |      989 | 2024-03-13 | Alliance          | W   | 0.932      | 0.371        | 0.020 (0.007)    | 0.855 (0.295)    | -         |    11.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1017 | 2024-03-12 | AURA              | W   | 0.926      | -            | -                | -                | -         |     2.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     1023 | 2024-03-12 | Sampi             | L   | 0.924      | -            | -                | -                | -         |   -14.56 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           35 |     1043 | 2024-03-11 | Passion UA        | W   | 0.919      | 0.303        | 0.031 (0.009)    | 0.625 (0.174)    | -         |    11.84 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1045 | 2024-03-11 | NOM               | W   | 0.917      | -            | -                | -                | -         |     3.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     1053 | 2024-03-10 | V1dar             | W   | 0.914      | -            | -                | -                | -         |     2.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     1062 | 2024-03-10 | Passion UA        | L   | 0.912      | -            | -                | -                | -         |   -17.03 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     1066 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.911      | -            | -                | -                | -         |    10.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     1104 | 2024-03-08 | K10               | W   | 0.899      | -            | -                | -                | -         |     9.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     1120 | 2024-03-07 | INGLORIOUS        | L   | 0.894      | -            | -                | -                | -         |   -24.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     1255 | 2024-03-03 | Preasy            | W   | 0.864      | 0.371        | 0.205 (0.066)    | 0.723 (0.231)    | -         |    17.68 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     1268 | 2024-03-02 | ECF               | W   | 0.859      | -            | -                | -                | -         |     3.82 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     1338 | 2024-02-27 | ECLOT             | L   | 0.832      | -            | -                | -                | -         |    -9.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     1353 | 2024-02-26 | BLEED             | W   | 0.826      | 0.143        | 0.221 (0.026)    | -                | -         |    17.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     1416 | 2024-02-24 | Sashi             | W   | 0.811      | 0.333        | 0.064 (0.017)    | 1.000 (0.270)    | -         |    13.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     1470 | 2024-02-21 | Entropiq          | W   | 0.791      | -            | -                | -                | -         |     7.09 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     1964 | 2024-01-27 | TSM               | L   | 0.624      | -            | -                | -                | -         |   -13.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2034 | 2024-01-23 | SINNERS           | L   | 0.599      | -            | -                | -                | -         |    -6.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2096 | 2024-01-21 | Astralis Talent   | W   | 0.584      | -            | -                | -                | -         |     7.78 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           19 |     2139 | 2024-01-20 | Monte Gen         | W   | 0.578      | -            | -                | -                | -         |     3.37 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           18 |     2187 | 2024-01-19 | Astralis Talent   | W   | 0.572      | -            | -                | -                | -         |     7.86 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           17 |     2195 | 2024-01-19 | CEPTER            | W   | 0.571      | -            | -                | -                | -         |     3.13 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           16 |     2261 | 2024-01-18 | Passion UA        | W   | 0.564      | -            | -                | -                | -         |     9.21 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           15 |     2301 | 2024-01-17 | Aurora Young Blud | W   | 0.558      | -            | -                | -                | -         |     4.56 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           14 |     2385 | 2024-01-15 | The Prodigies     | L   | 0.544      | -            | -                | -                | -         |   -15.19 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           13 |     2853 | 2023-12-07 | Zero Tenacity     | L   | 0.287      | -            | -                | -                | -         |    -5.93 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           12 |     2876 | 2023-12-06 | Endpoint          | L   | 0.281      | -            | -                | -                | -         |    -5.49 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           11 |     2895 | 2023-12-06 | Nemiga            | W   | 0.279      | -            | -                | -                | -         |     4.99 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           10 |     3203 | 2023-11-18 | Sashi             | L   | 0.159      | -            | -                | -                | -         |    -2.47 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            9 |     3225 | 2023-11-17 | paiN              | L   | 0.153      | -            | -                | -                | -         |    -0.04 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            8 |     3270 | 2023-11-16 | ARCRED            | W   | 0.145      | -            | -                | -                | -         |     1.08 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            7 |     3299 | 2023-11-15 | Sprout            | L   | 0.140      | -            | -                | -                | -         |    -3.26 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            6 |     3335 | 2023-11-14 | Into the Breach   | L   | 0.132      | -            | -                | -                | -         |    -2.63 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            5 |     3354 | 2023-11-13 | ex-Anonymo        | L   | 0.125      | -            | -                | -                | -         |    -2.77 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            4 |     3383 | 2023-11-12 | Sampi             | W   | 0.118      | -            | -                | -                | -         |     2.24 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            3 |     3423 | 2023-11-10 | Metizport         | L   | 0.106      | -            | -                | -                | -         |    -2.59 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            2 |     3470 | 2023-11-08 | 9 Pandas          | W   | 0.091      | -            | -                | -                | -         |     2.06 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            1 |     3507 | 2023-11-06 | PGE Turow         | W   | 0.077      | -            | -                | -                | -         |     0.61 | Chr1zN, Neityu, Nexius, PR, sirah      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,378.08)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-18 |      0.965 | $1,000.00      | $964.50         |
| 2024-03-11 |      0.919 | $3,500.00      | $3,215.09       |
| 2024-02-28 |      0.838 | $1,500.00      | $1,256.78       |
| 2024-01-21 |      0.584 | $5,000.00      | $2,920.31       |
| 2024-01-20 |      0.578 | $3,500.00      | $2,021.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
