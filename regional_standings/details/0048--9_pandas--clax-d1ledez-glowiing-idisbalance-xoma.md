### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, Xoma<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  987.4<br />
<br />
Final Rank Value (987.4) = Starting Rank Value (1081.5) + Head To Head Adjustments (-94.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.404[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1081.5
- 400 + ( ( 0.353 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1081.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      109 | 2024-04-19 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -23.18 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma   |
|           61 |      193 | 2024-04-17 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -24.36 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           60 |      343 | 2024-04-10 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -6.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           59 |      396 | 2024-04-09 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -16.08 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           58 |      419 | 2024-04-09 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -6.83 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           57 |      433 | 2024-04-08 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -29.14 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           56 |      442 | 2024-04-08 | Metizport         | W   | 1.000      | 0.143        | 0.136 (0.019)    | 1.000 (0.143)    | 0 (0.000) |    12.99 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           55 |      503 | 2024-04-05 | Secret            | L   | 1.000      | -            | -                | -                | -         |   -29.57 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           54 |      534 | 2024-04-04 | TSM               | W   | 1.000      | 0.500        | -                | 0.299 (0.150)    | 0 (0.000) |     4.46 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           53 |      579 | 2024-04-03 | EYEBALLERS        | W   | 1.000      | 0.500        | 0.052 (0.026)    | 0.406 (0.203)    | -         |     7.50 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           52 |      587 | 2024-04-03 | 9INE              | W   | 1.000      | -            | -                | -                | -         |     0.62 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           51 |      614 | 2024-04-02 | Sangal            | W   | 1.000      | 0.500        | -                | 0.685 (0.343)    | -         |     3.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           50 |     1148 | 2024-03-06 | KOI               | L   | 0.887      | -            | -                | -                | -         |   -14.92 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           49 |     1288 | 2024-03-01 | Aurora            | L   | 0.852      | -            | -                | -                | -         |    -7.43 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           48 |     1294 | 2024-02-29 | FORZE             | L   | 0.847      | -            | -                | -                | -         |   -17.66 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           47 |     1308 | 2024-02-28 | Spirit Academy    | W   | 0.840      | -            | -                | -                | -         |     3.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           46 |     1314 | 2024-02-28 | Lotus             | W   | 0.839      | -            | -                | -                | -         |     1.01 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           45 |     1406 | 2024-02-24 | GamerLegion       | W   | 0.813      | 0.143        | 0.185 (0.022)    | -                | 1 (0.813) |    20.08 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           44 |     1423 | 2024-02-23 | Astralis          | W   | 0.805      | -            | -                | -                | 1 (0.805) |    20.91 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           43 |     1570 | 2024-02-17 | AMKAL             | L   | 0.765      | -            | -                | -                | -         |   -14.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           42 |     1592 | 2024-02-16 | 3DMAX             | W   | 0.759      | 0.143        | -                | 0.801 (0.087)    | 1 (0.759) |     8.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           41 |     1628 | 2024-02-15 | KOI               | L   | 0.751      | -            | -                | -                | -         |   -13.08 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           40 |     1659 | 2024-02-14 | SAW               | W   | 0.746      | 0.143        | 0.173 (0.018)    | 0.824 (0.088)    | 1 (0.746) |    15.92 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           39 |     1671 | 2024-02-14 | FaZe              | L   | 0.744      | -            | -                | -                | -         |    -0.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           38 |     1924 | 2024-01-30 | Nemiga            | L   | 0.646      | -            | -                | -                | -         |   -14.85 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           37 |     1943 | 2024-01-28 | Rebels            | W   | 0.633      | -            | -                | -                | -         |     4.55 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           36 |     2112 | 2024-01-20 | 3DMAX             | W   | 0.581      | -            | -                | -                | -         |     7.56 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           35 |     2125 | 2024-01-20 | SAW               | L   | 0.579      | -            | -                | -                | -         |    -5.56 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           34 |     2183 | 2024-01-19 | Gaimin Gladiators | W   | 0.572      | 0.143        | -                | 1.000 (0.082)    | -         |    13.87 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           33 |     2233 | 2024-01-18 | Natus Vincere     | L   | 0.566      | -            | -                | -                | -         |    -0.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           32 |     2246 | 2024-01-18 | Nexus             | W   | 0.566      | -            | -                | -                | -         |     3.82 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           31 |     2679 | 2023-12-17 | IKLA              | L   | 0.353      | -            | -                | -                | -         |   -10.50 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           30 |     2710 | 2023-12-16 | B8                | L   | 0.347      | -            | -                | -                | -         |   -10.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           29 |     2736 | 2023-12-15 | ORKS              | W   | 0.340      | -            | -                | -                | -         |     0.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           28 |     2776 | 2023-12-11 | Preasy            | L   | 0.314      | -            | -                | -                | -         |    -5.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           27 |     2877 | 2023-12-06 | Guild Eagles      | L   | 0.281      | -            | -                | -                | -         |    -5.40 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           26 |     2890 | 2023-12-06 | Gaimin Gladiators | W   | 0.280      | 0.384        | -                | 1.000 (0.107)    | -         |     6.77 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           25 |     2901 | 2023-12-06 | SAW               | W   | 0.278      | 0.589        | 0.173 (0.028)    | 0.824 (0.135)    | -         |     6.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           24 |     2910 | 2023-12-05 | BIG               | L   | 0.274      | -            | -                | -                | -         |    -3.00 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           23 |     2944 | 2023-12-03 | Into the Breach   | W   | 0.261      | -            | -                | -                | -         |     1.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           22 |     3003 | 2023-11-30 | Legacy            | W   | 0.240      | 0.589        | -                | 0.501 (0.071)    | -         |     3.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           21 |     3010 | 2023-11-30 | SAW               | L   | 0.238      | -            | -                | -                | -         |    -2.26 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           20 |     3126 | 2023-11-22 | ALTERNATE aTTaX   | W   | 0.185      | -            | -                | -                | -         |     0.91 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           19 |     3151 | 2023-11-20 | Eternal Fire      | W   | 0.173      | 0.500        | 0.338 (0.029)    | -                | 1 (0.173) |     5.18 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           18 |     3174 | 2023-11-19 | FURIA             | W   | 0.166      | 0.500        | 0.316 (0.026)    | -                | 1 (0.166) |     4.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           17 |     3229 | 2023-11-17 | Gaimin Gladiators | L   | 0.153      | -            | -                | -                | -         |    -0.99 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           16 |     3239 | 2023-11-17 | MIBR              | W   | 0.151      | 0.500        | 0.305 (0.023)    | -                | 1 (0.151) |     4.08 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           15 |     3258 | 2023-11-16 | Legacy            | W   | 0.147      | -            | -                | -                | -         |     2.18 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           14 |     3268 | 2023-11-16 | BetBoom           | W   | 0.146      | 0.500        | 0.457 (0.033)    | -                | 1 (0.146) |     3.28 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           13 |     3311 | 2023-11-15 | Entropiq          | W   | 0.139      | -            | -                | -                | -         |     0.61 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           12 |     3316 | 2023-11-15 | ECLOT             | W   | 0.138      | -            | -                | -                | -         |     0.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           11 |     3334 | 2023-11-14 | Alliance          | W   | 0.132      | -            | -                | -                | -         |     1.17 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           10 |     3350 | 2023-11-13 | Legacy            | W   | 0.126      | -            | -                | -                | -         |     1.92 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            9 |     3364 | 2023-11-12 | Pompa             | W   | 0.120      | -            | -                | -                | -         |     0.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            8 |     3385 | 2023-11-12 | Entropiq          | L   | 0.118      | -            | -                | -                | -         |    -3.19 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            7 |     3425 | 2023-11-10 | Space             | W   | 0.106      | -            | -                | -                | -         |     0.40 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            6 |     3438 | 2023-11-09 | SINNERS           | L   | 0.099      | -            | -                | -                | -         |    -1.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            5 |     3466 | 2023-11-08 | Aurora            | W   | 0.092      | 0.435        | 0.763 (0.030)    | -                | -         |     2.47 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            4 |     3470 | 2023-11-08 | MOUZ NXT          | L   | 0.091      | -            | -                | -                | -         |    -2.06 | clax, faydett, glowiing, iDISBALANCE, seized |
|            3 |     3487 | 2023-11-07 | Permitta          | W   | 0.086      | -            | -                | -                | -         |     0.19 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            2 |     3526 | 2023-11-05 | 500               | W   | 0.071      | -            | -                | -                | -         |     0.17 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            1 |     3823 | 2023-10-26 | Preasy            | L   | 0.005      | -            | -                | -                | -         |    -0.09 | clax, d1Ledez, glowiing, iDISBALANCE, seized |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,881.32)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.327 | $500.00        | $163.38         |
| 2023-12-07 |      0.287 | $15,000.00     | $4,304.11       |
| 2023-11-21 |      0.180 | $1,000.00      | $180.38         |
| 2023-11-20 |      0.173 | $60,000.00     | $10,387.47      |
| 2023-11-18 |      0.160 | $2,000.00      | $319.21         |
| 2023-11-09 |      0.100 | $5,000.00      | $500.43         |
| 2023-10-27 |      0.013 | $2,000.00      | $26.34          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
