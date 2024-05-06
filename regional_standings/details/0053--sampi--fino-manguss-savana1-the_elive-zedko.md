### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  987.6<br />
<br />
Final Rank Value (987.6) = Starting Rank Value (1011.4) + Head To Head Adjustments (-23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.501[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.317[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1011.4
- 400 + ( ( 0.321 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1011.4


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
|           57 |       16 | 2024-05-05 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           56 |       47 | 2024-05-04 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -16.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           55 |       81 | 2024-05-02 | Permitta          | W   | 1.000      | 0.435        | 0.053 (0.023)    | 0.979 (0.425)    | 0 (0.000) |    12.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           54 |      107 | 2024-05-01 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -17.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           53 |      114 | 2024-05-01 | ENCE Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           52 |      119 | 2024-04-30 | GL Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           51 |      137 | 2024-04-30 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -17.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           50 |      253 | 2024-04-25 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -12.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           49 |      273 | 2024-04-24 | Permitta          | W   | 1.000      | 0.371        | -                | 0.979 (0.363)    | 0 (0.000) |    14.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           48 |      292 | 2024-04-23 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -12.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           47 |      328 | 2024-04-21 | ALTERNATE aTTaX   | W   | 1.000      | 0.371        | 0.104 (0.039)    | 0.779 (0.289)    | 0 (0.000) |    10.34 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           46 |      402 | 2024-04-19 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -8.72 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           45 |      461 | 2024-04-18 | Permitta          | W   | 1.000      | 0.371        | -                | 0.979 (0.363)    | -         |    14.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           44 |      482 | 2024-04-17 | NOM               | L   | 1.000      | -            | -                | -                | -         |   -29.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           43 |      521 | 2024-04-16 | SAW               | W   | 1.000      | 0.384        | 0.248 (0.095)    | 0.774 (0.297)    | -         |    28.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           42 |      524 | 2024-04-16 | Secret            | W   | 1.000      | -            | -                | -                | -         |     3.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           41 |      536 | 2024-04-15 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -20.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           40 |      570 | 2024-04-13 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -4.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           39 |      614 | 2024-04-11 | PGE Turow         | W   | 1.000      | -            | -                | -                | -         |     4.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           38 |      786 | 2024-04-06 | Enterprise        | W   | 0.998      | -            | -                | -                | -         |    14.46 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           37 |      888 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.978      | 0.384        | 0.236 (0.089)    | -                | -         |    20.59 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           36 |     1016 | 2024-03-27 | B8                | L   | 0.933      | -            | -                | -                | -         |   -13.06 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           35 |     1157 | 2024-03-18 | ex-Preasy         | L   | 0.871      | -            | -                | -                | -         |    -9.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           34 |     1188 | 2024-03-17 | Passion UA        | W   | 0.864      | 0.371        | 0.111 (0.035)    | -                | -         |    12.63 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           33 |     1196 | 2024-03-16 | SINNERS           | L   | 0.859      | -            | -                | -                | -         |   -13.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           32 |     1199 | 2024-03-16 | MOUZ NXT          | W   | 0.858      | 0.371        | 0.210 (0.067)    | 1.000 (0.318)    | -         |    15.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           31 |     1214 | 2024-03-15 | ECLOT             | L   | 0.853      | -            | -                | -                | -         |   -12.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           30 |     1218 | 2024-03-15 | Permitta          | W   | 0.851      | 0.371        | -                | 0.979 (0.309)    | -         |    14.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           29 |     1250 | 2024-03-14 | Passion UA        | L   | 0.845      | -            | -                | -                | -         |   -13.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           28 |     1319 | 2024-03-12 | MOUZ NXT          | W   | 0.831      | 0.371        | 0.210 (0.065)    | 1.000 (0.308)    | -         |    15.42 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           27 |     1361 | 2024-03-10 | Sashi             | W   | 0.818      | 0.358        | 0.188 (0.055)    | 1.000 (0.293)    | -         |    13.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           26 |     1385 | 2024-03-09 | Enterprise        | W   | 0.812      | -            | -                | -                | -         |    13.32 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           25 |     1470 | 2024-03-06 | AURA              | W   | 0.791      | -            | -                | -                | -         |     1.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           24 |     1519 | 2024-03-04 | Sangal            | L   | 0.778      | -            | -                | -                | -         |   -17.33 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           23 |     1572 | 2024-03-02 | Enterprise        | L   | 0.764      | -            | -                | -                | -         |   -10.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           22 |     1608 | 2024-02-28 | Sashi             | L   | 0.746      | -            | -                | -                | -         |   -11.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           21 |     1675 | 2024-02-25 | ECLOT             | L   | 0.724      | -            | -                | -                | -         |    -9.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           20 |     1721 | 2024-02-23 | Entropiq          | W   | 0.711      | -            | -                | -                | -         |     4.37 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           19 |     1764 | 2024-02-21 | Sashi             | L   | 0.698      | -            | -                | -                | -         |    -9.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           18 |     1867 | 2024-02-17 | Secret            | W   | 0.672      | -            | -                | -                | -         |     2.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           17 |     2014 | 2024-02-10 | Zero Tenacity     | W   | 0.626      | 0.358        | 0.093 (0.021)    | 0.936 (0.210)    | -         |     7.83 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           16 |     2073 | 2024-02-05 | Pigeons           | W   | 0.592      | -            | -                | -                | -         |     5.70 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           15 |     2126 | 2024-02-03 | Sashi             | W   | 0.578      | 0.358        | 0.188 (0.039)    | -                | -         |    10.05 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           14 |     2180 | 2024-02-01 | Metizport         | L   | 0.566      | -            | -                | -                | -         |    -8.64 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           13 |     2324 | 2024-01-23 | Guild Eagles      | L   | 0.506      | -            | -                | -                | -         |    -6.83 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           12 |     2328 | 2024-01-23 | Viperio           | L   | 0.506      | -            | -                | -                | -         |   -14.97 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           11 |     2346 | 2024-01-22 | Rebels            | W   | 0.500      | -            | -                | -                | -         |    10.36 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           10 |     2352 | 2024-01-22 | PERA              | W   | 0.500      | -            | -                | -                | -         |     6.07 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            9 |     2354 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.499      | -            | -                | -                | -         |    -8.43 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            8 |     2898 | 2024-01-09 | HAVU              | L   | 0.413      | -            | -                | -                | -         |    -9.37 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            7 |     3360 | 2023-11-25 | ECLOT             | W   | 0.114      | -            | -                | -                | 1 (0.114) |     0.47 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            6 |     3392 | 2023-11-24 | SINNERS           | W   | 0.105      | -            | -                | -                | 1 (0.105) |     1.88 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            5 |     3644 | 2023-11-13 | Pompa             | L   | 0.033      | -            | -                | -                | -         |    -0.97 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            4 |     3679 | 2023-11-12 | MOUZ NXT          | L   | 0.025      | -            | -                | -                | -         |    -0.33 | bestch, fino, MATYS, sAvana1, The eLiVe  |
|            3 |     3723 | 2023-11-10 | ex-Anonymo        | W   | 0.011      | -            | -                | -                | -         |     0.06 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            2 |     3726 | 2023-11-09 | SINNERS Academy   | W   | 0.007      | -            | -                | -                | 1 (0.007) |     0.01 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            1 |     3733 | 2023-11-09 | Enterprise        | W   | 0.006      | -            | -                | -                | 1 (0.006) |     0.01 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,428.21)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-14 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-03-18 |      0.871 | $5,000.00      | $4,355.98       |
| 2024-03-17 |      0.867 | $639.00        | $553.90         |
| 2023-11-25 |      0.114 | $43,136.00     | $4,918.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
