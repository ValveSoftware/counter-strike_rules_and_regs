### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1071.5<br />
<br />
Final Rank Value (1071.5) = Starting Rank Value (1064.0) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.545[<sup>1</sup>](#table2)
- Bounty Collected: 0.437[<sup>2</sup>](#table1)
- Opponent Network: 0.386[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.342<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1064.0
- 400 + ( ( 0.342 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1064.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           88 |        3 | 2024-05-29 | JANO               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |       73 | 2024-05-26 | RUBY               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |       87 | 2024-05-25 | ex-Guild Eagles    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.46 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |       91 | 2024-05-25 | iNation            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |      101 | 2024-05-25 | Rhyno              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |      105 | 2024-05-24 | ex-Guild Eagles    | L   | 1.000      | -            | -                | -                | -         |   -21.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |      108 | 2024-05-24 | Illyrians          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |      125 | 2024-05-23 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -11.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |      131 | 2024-05-23 | brazylijski luz    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |      164 | 2024-05-22 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -16.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |      170 | 2024-05-22 | Illuminar          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |      208 | 2024-05-21 | BLEED              | W   | 1.000      | 0.500        | 0.246 (0.123)    | 0.982 (0.491)    | 0 (0.000) |    20.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |      213 | 2024-05-21 | Verdant            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |      234 | 2024-05-20 | Metizport          | W   | 1.000      | 0.500        | 0.088 (0.044)    | 0.860 (0.430)    | -         |    15.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |      270 | 2024-05-19 | B8                 | W   | 1.000      | 0.500        | 0.165 (0.082)    | 1.000 (0.500)    | -         |    21.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |      324 | 2024-05-17 | PARIVISION         | L   | 1.000      | -            | -                | -                | -         |   -18.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |      333 | 2024-05-17 | Endpoint           | W   | 1.000      | 0.435        | -                | 0.627 (0.272)    | -         |    12.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |      374 | 2024-05-16 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -15.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      382 | 2024-05-16 | ECF                | W   | 1.000      | -            | -                | -                | -         |     9.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      423 | 2024-05-15 | 3DMAX              | W   | 1.000      | 0.500        | 0.105 (0.052)    | 0.669 (0.335)    | -         |    22.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |      482 | 2024-05-14 | Preasy             | W   | 1.000      | -            | -                | -                | -         |     6.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |      501 | 2024-05-13 | EYEBALLERS         | W   | 1.000      | 0.435        | -                | 0.611 (0.265)    | -         |    11.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |      530 | 2024-05-12 | Verdant            | W   | 1.000      | -            | -                | -                | -         |     8.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |      600 | 2024-05-09 | 9 Pandas           | L   | 1.000      | -            | -                | -                | -         |   -12.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |      655 | 2024-05-06 | Insilio            | W   | 1.000      | -            | -                | -                | -         |    15.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |      703 | 2024-05-03 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |   -19.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |      714 | 2024-05-03 | Metizport          | L   | 1.000      | -            | -                | -                | -         |   -14.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |      742 | 2024-05-02 | HAVU               | W   | 1.000      | -            | -                | -                | -         |     5.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |      763 | 2024-05-01 | KOI                | W   | 1.000      | 0.435        | 0.025 (0.011)    | -                | -         |    16.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |      779 | 2024-04-30 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -12.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |      789 | 2024-04-30 | B8                 | W   | 1.000      | 0.435        | 0.165 (0.072)    | 1.000 (0.435)    | -         |    15.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |      804 | 2024-04-29 | PARIVISION         | L   | 0.998      | -            | -                | -                | -         |   -15.95 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |      820 | 2024-04-28 | SINNERS            | W   | 0.992      | 0.435        | -                | 0.728 (0.314)    | -         |    13.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |      832 | 2024-04-27 | 500                | W   | 0.986      | -            | -                | -                | -         |     8.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |      853 | 2024-04-27 | SINNERS            | W   | 0.984      | 0.500        | -                | 0.728 (0.358)    | -         |    15.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |      877 | 2024-04-26 | Illuminar          | W   | 0.977      | -            | -                | -                | -         |     3.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |      901 | 2024-04-25 | EYEBALLERS         | L   | 0.971      | -            | -                | -                | -         |   -20.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |      923 | 2024-04-24 | ex-Guild Eagles    | L   | 0.964      | -            | -                | -                | -         |   -15.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |      940 | 2024-04-23 | Nemiga             | L   | 0.958      | -            | -                | -                | -         |    -6.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |      948 | 2024-04-22 | Grannys Knockers   | W   | 0.953      | -            | -                | -                | -         |     7.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |      955 | 2024-04-22 | Nexus              | W   | 0.951      | -            | -                | -                | -         |    11.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1001 | 2024-04-20 | RUBY               | W   | 0.938      | -            | -                | -                | -         |    10.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1028 | 2024-04-19 | PARIVISION         | W   | 0.933      | -            | -                | -                | -         |    12.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1052 | 2024-04-19 | ALTERNATE aTTaX    | W   | 0.931      | -            | -                | -                | -         |    11.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1111 | 2024-04-18 | B8                 | L   | 0.923      | -            | -                | -                | -         |   -12.95 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1136 | 2024-04-17 | B8                 | W   | 0.917      | 0.500        | 0.165 (0.076)    | 1.000 (0.459)    | -         |    16.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1163 | 2024-04-16 | Sangal             | L   | 0.913      | -            | -                | -                | -         |   -11.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     1184 | 2024-04-15 | ALTERNATE aTTaX    | W   | 0.906      | -            | -                | -                | -         |    12.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     1234 | 2024-04-12 | JANO               | L   | 0.883      | -            | -                | -                | -         |   -22.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     1262 | 2024-04-11 | Alliance           | L   | 0.878      | -            | -                | -                | -         |   -18.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     1360 | 2024-04-09 | MOUZ NXT           | L   | 0.865      | -            | -                | -                | -         |   -11.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     1422 | 2024-04-07 | ex-Preasy          | L   | 0.850      | -            | -                | -                | -         |   -13.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     1591 | 2024-04-01 | Nemiga             | L   | 0.810      | -            | -                | -                | -         |    -6.75 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           35 |     1999 | 2024-03-10 | CYBERSHOKE         | L   | 0.666      | -            | -                | -                | -         |   -18.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2011 | 2024-03-10 | ECLOT              | W   | 0.664      | 0.143        | 0.084 (0.008)    | -                | -         |    10.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2027 | 2024-03-09 | Sangal             | W   | 0.658      | 0.358        | 0.166 (0.039)    | -                | -         |    10.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2076 | 2024-03-07 | Nemiga             | L   | 0.646      | -            | -                | -                | -         |    -4.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2108 | 2024-03-06 | GODSENT            | W   | 0.639      | -            | -                | -                | -         |     2.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2143 | 2024-03-05 | AMKAL              | L   | 0.632      | -            | -                | -                | -         |    -5.80 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2201 | 2024-03-03 | Secret             | W   | 0.617      | -            | -                | -                | -         |     1.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2221 | 2024-03-02 | Secret             | W   | 0.610      | -            | -                | -                | -         |     1.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2247 | 2024-02-29 | Young Ninjas       | W   | 0.598      | -            | -                | -                | -         |     5.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2510 | 2024-02-17 | Sashi              | L   | 0.518      | -            | -                | -                | -         |    -7.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2665 | 2024-02-10 | Sampi              | L   | 0.472      | -            | -                | -                | -         |    -9.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2746 | 2024-02-04 | 500                | L   | 0.431      | -            | -                | -                | -         |   -11.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2759 | 2024-02-03 | The Chosen Few     | W   | 0.426      | -            | -                | -                | -         |     1.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2805 | 2024-02-02 | NAVI Junior        | W   | 0.418      | -            | -                | -                | -         |     1.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2809 | 2024-02-02 | Juggernauts        | W   | 0.418      | -            | -                | -                | -         |     0.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     3079 | 2024-01-20 | 3DMAX              | L   | 0.331      | -            | -                | -                | -         |    -3.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3129 | 2024-01-19 | SAW                | L   | 0.325      | -            | -                | -                | -         |    -1.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3175 | 2024-01-18 | Permitta           | W   | 0.319      | -            | -                | -                | -         |     3.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3192 | 2024-01-18 | BetBoom            | L   | 0.318      | -            | -                | -                | -         |    -1.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3206 | 2024-01-18 | Aurora Young Blud  | L   | 0.317      | -            | -                | -                | -         |    -8.95 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3262 | 2024-01-16 | Passion UA         | W   | 0.308      | -            | -                | -                | -         |     4.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3273 | 2024-01-16 | samaloyod          | W   | 0.307      | -            | -                | -                | -         |     0.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3296 | 2024-01-16 | premghouls         | W   | 0.306      | -            | -                | -                | -         |     0.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3305 | 2024-01-16 | ECLOT              | W   | 0.304      | 0.333        | 0.084 (0.008)    | -                | -         |     4.72 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3359 | 2024-01-14 | Astralis Talent    | L   | 0.290      | -            | -                | -                | -         |    -7.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3481 | 2024-01-10 | Gucci Academy      | L   | 0.267      | -            | -                | -                | -         |    -7.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3534 | 2024-01-09 | 9INE               | L   | 0.259      | -            | -                | -                | -         |    -7.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3553 | 2024-01-09 | The Prodigies      | W   | 0.259      | -            | -                | -                | -         |     0.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3777 | 2023-12-08 | ALTERNATE aTTaX    | L   | 0.046      | -            | -                | -                | -         |    -0.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3800 | 2023-12-07 | MOUZ NXT           | W   | 0.040      | -            | -                | -                | -         |     0.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3838 | 2023-12-06 | GenOne             | W   | 0.032      | -            | -                | -                | -         |     0.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3855 | 2023-12-05 | TSM                | L   | 0.027      | -            | -                | -                | -         |    -0.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3882 | 2023-12-04 | SAW                | L   | 0.018      | -            | -                | -                | -         |    -0.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     3903 | 2023-12-03 | TSM                | L   | 0.010      | -            | -                | -                | -         |    -0.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     3913 | 2023-12-02 | Bad News Kangaroos | W   | 0.006      | -            | -                | -                | -         |     0.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,122.13)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-05-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-24 |      0.965 | $12,500.00     | $12,062.98      |
| 2023-12-13 |      0.079 | $750.00        | $59.16          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
