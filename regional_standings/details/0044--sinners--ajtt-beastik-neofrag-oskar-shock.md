### Roster Details<br />
Team Name: SINNERS<br />
Roster: AJTT, beastik, NEOFRAG, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1022.2<br />
<br />
Final Rank Value (1022.2) = Starting Rank Value (1069.5) + Head To Head Adjustments (-47.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.450[<sup>2</sup>](#table1)
- Opponent Network: 0.284[<sup>2</sup>](#table1)
- LAN Wins: 0.230[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1069.5
- 400 + ( ( 0.347 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1069.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |        7 | 2024-04-22 | HAVU              | W   | 1.000      | 0.435        | 0.027 (0.012)    | -                | 0 (0.000) |     5.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           63 |       56 | 2024-04-20 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -23.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           62 |      112 | 2024-04-19 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -18.08 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           61 |      195 | 2024-04-17 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -7.11 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           60 |      227 | 2024-04-16 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -15.45 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           59 |      257 | 2024-04-14 | Passion UA        | W   | 1.000      | 0.371        | -                | 0.625 (0.232)    | 0 (0.000) |     7.31 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           58 |      346 | 2024-04-10 | 3DMAX             | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.801 (0.400)    | 0 (0.000) |    15.84 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           57 |      365 | 2024-04-10 | UNiTY             | W   | 1.000      | 0.371        | 0.047 (0.018)    | -                | 0 (0.000) |     7.48 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           56 |      396 | 2024-04-09 | 9 Pandas          | W   | 1.000      | 0.500        | 0.083 (0.042)    | 0.656 (0.328)    | 0 (0.000) |    16.08 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           55 |      450 | 2024-04-08 | ALTERNATE aTTaX   | W   | 1.000      | 0.384        | -                | 0.639 (0.246)    | 0 (0.000) |     7.12 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           54 |      500 | 2024-04-05 | Nexus             | W   | 1.000      | 0.384        | -                | 0.544 (0.209)    | -         |     9.47 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           53 |      591 | 2024-04-03 | Rebels            | W   | 1.000      | 0.500        | 0.050 (0.025)    | 0.360 (0.180)    | -         |    10.77 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           52 |      635 | 2024-04-01 | Aurora            | W   | 1.000      | 0.500        | 0.763 (0.381)    | 1.000 (0.500)    | -         |    26.37 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           51 |      660 | 2024-03-29 | ex-Sprout         | W   | 1.000      | -            | -                | -                | -         |     1.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           50 |      875 | 2024-03-17 | ECLOT             | L   | 0.960      | -            | -                | -                | -         |   -14.97 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           49 |      882 | 2024-03-17 | UNiTY             | W   | 0.959      | 0.345        | 0.047 (0.016)    | -                | 1 (0.959) |     9.61 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           48 |      900 | 2024-03-16 | Sampi             | W   | 0.952      | 0.345        | 0.084 (0.028)    | 0.698 (0.229)    | 1 (0.952) |    13.44 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           47 |      913 | 2024-03-15 | UNiTY             | L   | 0.947      | -            | -                | -                | -         |   -19.91 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           46 |      981 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.933      | 0.500        | -                | 0.639 (0.298)    | -         |     7.93 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           45 |     1034 | 2024-03-11 | brazylijski luz   | L   | 0.920      | -            | -                | -                | -         |   -22.15 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           44 |     1248 | 2024-03-03 | Gaimin Gladiators | L   | 0.866      | -            | -                | -                | -         |    -5.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           43 |     1536 | 2024-02-18 | Monte             | L   | 0.773      | -            | -                | -                | -         |    -5.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           42 |     1584 | 2024-02-16 | 500               | W   | 0.760      | -            | -                | -                | -         |     3.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           41 |     1591 | 2024-02-16 | PERA              | W   | 0.759      | -            | -                | -                | -         |     7.58 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           40 |     1596 | 2024-02-16 | 500               | L   | 0.759      | -            | -                | -                | -         |   -20.86 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           39 |     1802 | 2024-02-04 | Into the Breach   | L   | 0.678      | -            | -                | -                | -         |   -16.01 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           38 |     1865 | 2024-02-02 | Preasy            | L   | 0.664      | -            | -                | -                | -         |   -10.46 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           37 |     1961 | 2024-01-27 | GODSENT           | W   | 0.625      | -            | -                | -                | -         |     3.88 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           36 |     2034 | 2024-01-23 | MOUZ NXT          | W   | 0.599      | 0.371        | 0.054 (0.012)    | 0.970 (0.215)    | -         |     6.25 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           35 |     2167 | 2024-01-19 | Nexus             | L   | 0.574      | -            | -                | -                | -         |   -13.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           34 |     2227 | 2024-01-18 | fnatic            | L   | 0.567      | -            | -                | -                | -         |    -8.68 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           33 |     2248 | 2024-01-18 | Virtus.pro        | L   | 0.566      | -            | -                | -                | -         |    -0.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           32 |     2505 | 2024-01-11 | HEROIC            | L   | 0.521      | -            | -                | -                | -         |    -0.82 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           31 |     2510 | 2024-01-11 | PERA              | W   | 0.520      | -            | -                | -                | -         |     3.37 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           30 |     2521 | 2024-01-11 | ILIN              | W   | 0.520      | -            | -                | -                | -         |     0.81 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           29 |     2526 | 2024-01-11 | V1dar             | W   | 0.519      | -            | -                | -                | -         |     0.79 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           28 |     2541 | 2024-01-10 | The Prodigies     | W   | 0.514      | -            | -                | -                | -         |     0.77 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           27 |     2810 | 2023-12-09 | FORZE             | L   | 0.300      | -            | -                | -                | -         |    -7.73 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           26 |     2854 | 2023-12-07 | 3DMAX             | L   | 0.287      | -            | -                | -                | -         |    -5.08 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           25 |     2881 | 2023-12-06 | Spirit Academy    | W   | 0.280      | -            | -                | -                | -         |     1.20 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           24 |     2912 | 2023-12-05 | ENCE              | W   | 0.274      | 0.500        | 0.299 (0.041)    | -                | -         |     7.17 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           23 |     3077 | 2023-11-25 | UNiTY             | L   | 0.205      | -            | -                | -                | -         |    -4.98 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           22 |     3096 | 2023-11-24 | Sampi             | L   | 0.199      | -            | -                | -                | -         |    -3.91 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           21 |     3207 | 2023-11-18 | BIG               | L   | 0.158      | -            | -                | -                | -         |    -1.58 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           20 |     3232 | 2023-11-17 | TSM               | W   | 0.152      | -            | -                | -                | -         |     0.56 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           19 |     3277 | 2023-11-16 | Legacy            | W   | 0.145      | -            | -                | -                | -         |     2.24 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           18 |     3312 | 2023-11-15 | paiN              | L   | 0.139      | -            | -                | -                | -         |    -0.08 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           17 |     3349 | 2023-11-13 | ALTERNATE aTTaX   | W   | 0.126      | -            | -                | -                | -         |     0.69 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           16 |     3368 | 2023-11-12 | eEriness          | W   | 0.120      | -            | -                | -                | 1 (0.120) |     0.09 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           15 |     3398 | 2023-11-11 | UNiTY             | L   | 0.114      | -            | -                | -                | -         |    -2.77 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           14 |     3410 | 2023-11-11 | eEriness          | W   | 0.112      | -            | -                | -                | 1 (0.112) |     0.08 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           13 |     3433 | 2023-11-09 | BetBoom           | L   | 0.100      | -            | -                | -                | -         |    -0.87 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           12 |     3438 | 2023-11-09 | 9 Pandas          | W   | 0.099      | -            | -                | -                | -         |     1.59 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           11 |     3457 | 2023-11-08 | Monte             | W   | 0.094      | -            | -                | -                | -         |     1.97 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           10 |     3468 | 2023-11-08 | Gaimin Gladiators | W   | 0.091      | -            | -                | -                | -         |     2.36 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            9 |     3483 | 2023-11-07 | ENCE              | L   | 0.087      | -            | -                | -                | -         |    -0.45 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            8 |     3498 | 2023-11-06 | SAW               | W   | 0.080      | -            | -                | -                | -         |     1.87 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            7 |     3522 | 2023-11-05 | The Chosen Few    | W   | 0.071      | -            | -                | -                | -         |     0.28 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            6 |     3556 | 2023-11-03 | Preasy            | L   | 0.060      | -            | -                | -                | -         |    -1.09 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            5 |     3584 | 2023-11-02 | ENCE Academy      | W   | 0.052      | -            | -                | -                | -         |     0.36 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            4 |     3616 | 2023-11-01 | Apeks             | L   | 0.045      | -            | -                | -                | -         |    -0.38 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            3 |     3630 | 2023-10-31 | The Prodigies     | W   | 0.040      | -            | -                | -                | -         |     0.06 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            2 |     3651 | 2023-10-31 | Permitta          | L   | 0.038      | -            | -                | -                | -         |    -1.10 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            1 |     3723 | 2023-10-29 | ALTERNATE aTTaX   | W   | 0.025      | -            | -                | -                | -         |     0.14 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,227.93)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-17 |      0.960 | $2,984.00      | $2,865.02       |
| 2023-12-10 |      0.307 | $8,000.00      | $2,454.20       |
| 2023-11-25 |      0.207 | $5,176.00      | $1,073.12       |
| 2023-11-19 |      0.167 | $5,000.00      | $834.74         |
| 2023-11-09 |      0.100 | $10,000.00     | $1,000.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
