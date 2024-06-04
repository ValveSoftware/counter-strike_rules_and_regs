### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  878.9<br />
<br />
Final Rank Value (878.9) = Starting Rank Value (927.1) + Head To Head Adjustments (-48.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.393[<sup>2</sup>](#table1)
- Opponent Network: 0.281[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.1
- 400 + ( ( 0.272 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 927.1


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
|           63 |       32 | 2024-05-28 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -15.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           62 |       36 | 2024-05-28 | Rhyno             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.62 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           61 |       71 | 2024-05-26 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -12.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           60 |       88 | 2024-05-25 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.28 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           59 |      119 | 2024-05-23 | GUN5              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           58 |      153 | 2024-05-22 | VENI VIDI VICI    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.88 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           57 |      243 | 2024-05-20 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.97 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           56 |      249 | 2024-05-20 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -20.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           55 |      301 | 2024-05-18 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -22.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           54 |      369 | 2024-05-16 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -11.66 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           53 |      380 | 2024-05-16 | B8                | L   | 1.000      | -            | -                | -                | -         |    -9.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           52 |      505 | 2024-05-13 | Nexus             | W   | 1.000      | 0.435        | -                | 0.518 (0.225)    | 0 (0.000) |     9.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           51 |      593 | 2024-05-09 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -6.37 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           50 |      667 | 2024-05-05 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           49 |      698 | 2024-05-04 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -15.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           48 |      732 | 2024-05-02 | Permitta          | W   | 1.000      | 0.435        | 0.025 (0.011)    | 1.000 (0.435)    | 0 (0.000) |    13.47 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           47 |      758 | 2024-05-01 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -15.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           46 |      765 | 2024-05-01 | ENCE Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           45 |      770 | 2024-04-30 | GL Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.07 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           44 |      788 | 2024-04-30 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -16.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           43 |      904 | 2024-04-25 | ECLOT             | L   | 0.971      | -            | -                | -                | -         |   -11.78 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           42 |      924 | 2024-04-24 | Permitta          | W   | 0.963      | 0.371        | -                | 1.000 (0.357)    | 0 (0.000) |    14.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           41 |      943 | 2024-04-23 | ECLOT             | L   | 0.957      | -            | -                | -                | -         |   -11.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           40 |      979 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.943      | 0.371        | 0.048 (0.017)    | 0.650 (0.227)    | -         |    11.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           39 |     1053 | 2024-04-19 | BLEED             | L   | 0.931      | -            | -                | -                | -         |    -6.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           38 |     1112 | 2024-04-18 | Permitta          | W   | 0.923      | 0.371        | -                | 1.000 (0.342)    | -         |    14.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           37 |     1133 | 2024-04-17 | NOM               | L   | 0.918      | -            | -                | -                | -         |   -26.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           36 |     1172 | 2024-04-16 | SAW               | W   | 0.911      | 0.384        | 0.109 (0.038)    | 0.611 (0.214)    | -         |    25.66 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           35 |     1175 | 2024-04-16 | Secret            | W   | 0.910      | -            | -                | -                | -         |     3.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           34 |     1187 | 2024-04-15 | ENCE Academy      | L   | 0.905      | -            | -                | -                | -         |   -18.72 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           33 |     1221 | 2024-04-13 | BetBoom           | L   | 0.891      | -            | -                | -                | -         |    -3.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           32 |     1265 | 2024-04-11 | PGE Turow         | W   | 0.877      | -            | -                | -                | -         |     4.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           31 |     1437 | 2024-04-06 | Enterprise        | W   | 0.844      | -            | -                | -                | -         |    11.72 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           30 |     1539 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.824      | 0.384        | 0.118 (0.037)    | -                | -         |    17.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           29 |     1667 | 2024-03-27 | B8                | L   | 0.779      | -            | -                | -                | -         |    -7.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           28 |     1808 | 2024-03-18 | ex-Preasy         | L   | 0.717      | -            | -                | -                | -         |    -9.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           27 |     1839 | 2024-03-17 | Passion UA        | W   | 0.710      | 0.371        | 0.056 (0.015)    | -                | -         |    12.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           26 |     1847 | 2024-03-16 | SINNERS           | L   | 0.705      | -            | -                | -                | -         |   -11.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           25 |     1850 | 2024-03-16 | MOUZ NXT          | W   | 0.704      | 0.371        | 0.157 (0.041)    | 1.000 (0.261)    | -         |    13.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           24 |     1865 | 2024-03-15 | ECLOT             | L   | 0.699      | -            | -                | -                | -         |    -9.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           23 |     1869 | 2024-03-15 | Permitta          | W   | 0.697      | 0.371        | -                | 1.000 (0.258)    | -         |    11.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           22 |     1901 | 2024-03-14 | Passion UA        | L   | 0.691      | -            | -                | -                | -         |    -9.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           21 |     1970 | 2024-03-12 | MOUZ NXT          | W   | 0.677      | 0.371        | 0.157 (0.039)    | 1.000 (0.251)    | -         |    13.91 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           20 |     2012 | 2024-03-10 | Sashi             | W   | 0.664      | 0.358        | 0.157 (0.037)    | 1.000 (0.238)    | -         |    12.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           19 |     2036 | 2024-03-09 | Enterprise        | W   | 0.658      | -            | -                | -                | -         |    10.20 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           18 |     2121 | 2024-03-06 | GODSENT           | W   | 0.637      | -            | -                | -                | -         |     3.82 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           17 |     2170 | 2024-03-04 | Sangal            | L   | 0.624      | -            | -                | -                | -         |    -6.64 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           16 |     2223 | 2024-03-02 | Enterprise        | L   | 0.610      | -            | -                | -                | -         |    -9.23 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           15 |     2259 | 2024-02-28 | Sashi             | L   | 0.592      | -            | -                | -                | -         |    -7.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           14 |     2326 | 2024-02-25 | ECLOT             | L   | 0.570      | -            | -                | -                | -         |    -6.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           13 |     2372 | 2024-02-23 | Entropiq          | W   | 0.557      | -            | -                | -                | -         |     2.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           12 |     2415 | 2024-02-21 | Sashi             | L   | 0.544      | -            | -                | -                | -         |    -5.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           11 |     2518 | 2024-02-17 | Secret            | W   | 0.518      | -            | -                | -                | -         |     2.12 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           10 |     2665 | 2024-02-10 | Zero Tenacity     | W   | 0.472      | 0.358        | 0.147 (0.025)    | -                | -         |     9.57 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            9 |     2724 | 2024-02-05 | Pigeons           | W   | 0.438      | -            | -                | -                | -         |     3.88 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            8 |     2777 | 2024-02-03 | Sashi             | W   | 0.424      | 0.358        | 0.157 (0.024)    | -                | -         |     8.62 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            7 |     2831 | 2024-02-01 | Metizport         | L   | 0.412      | -            | -                | -                | -         |    -5.53 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            6 |     2975 | 2024-01-23 | ex-Guild Eagles   | L   | 0.352      | -            | -                | -                | -         |    -4.76 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            5 |     2979 | 2024-01-23 | Viperio           | L   | 0.352      | -            | -                | -                | -         |   -10.11 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            4 |     2997 | 2024-01-22 | Rebels            | W   | 0.346      | -            | -                | -                | -         |     7.66 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            3 |     3003 | 2024-01-22 | PERA              | W   | 0.345      | -            | -                | -                | -         |     4.93 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            2 |     3005 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.345      | -            | -                | -                | -         |    -5.05 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|            1 |     3549 | 2024-01-09 | HAVU              | L   | 0.259      | -            | -                | -                | -         |    -6.00 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,330.98)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-25 |      0.971 | $5,000.00      | $4,852.93       |
| 2024-04-14 |      0.898 | $1,600.00      | $1,437.11       |
| 2024-03-18 |      0.717 | $5,000.00      | $3,585.51       |
| 2024-03-17 |      0.713 | $639.00        | $455.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
