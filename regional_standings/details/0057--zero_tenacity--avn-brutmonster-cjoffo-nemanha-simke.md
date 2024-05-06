### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  961.5<br />
<br />
Final Rank Value (961.5) = Starting Rank Value (959.1) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.492[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.304[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 959.1
- 400 + ( ( 0.294 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 959.1


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
|           79 |        4 | 2024-05-06 | Insilio            | W   | 1.000      | 0.435        | -                | 0.660 (0.287)    | 0 (0.000) |    17.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |       52 | 2024-05-03 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |   -17.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |       63 | 2024-05-03 | Metizport          | L   | 1.000      | -            | -                | -                | -         |   -12.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |       91 | 2024-05-02 | HAVU               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |      112 | 2024-05-01 | KOI                | W   | 1.000      | 0.435        | 0.059 (0.025)    | 0.772 (0.335)    | 0 (0.000) |    20.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |      128 | 2024-04-30 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -15.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |      138 | 2024-04-30 | B8                 | W   | 1.000      | 0.435        | 0.080 (0.035)    | 0.851 (0.370)    | 0 (0.000) |    15.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |      153 | 2024-04-29 | PARIVISION         | L   | 1.000      | -            | -                | -                | -         |   -14.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |      169 | 2024-04-28 | SINNERS            | W   | 1.000      | 0.435        | -                | 0.749 (0.325)    | 0 (0.000) |    17.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      181 | 2024-04-27 | 500                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      202 | 2024-04-27 | SINNERS            | W   | 1.000      | 0.500        | 0.033 (0.016)    | 0.749 (0.374)    | 0 (0.000) |    19.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |      226 | 2024-04-26 | Illuminar          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |      250 | 2024-04-25 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |   -17.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |      272 | 2024-04-24 | Guild Eagles       | L   | 1.000      | -            | -                | -                | -         |   -11.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |      289 | 2024-04-23 | Nemiga             | L   | 1.000      | -            | -                | -                | -         |    -4.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |      297 | 2024-04-22 | Grannys Knockers   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |      304 | 2024-04-22 | Nexus              | W   | 1.000      | 0.500        | 0.031 (0.015)    | 0.605 (0.302)    | -         |    15.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |      350 | 2024-04-20 | RUBY               | W   | 1.000      | -            | -                | -                | -         |    13.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |      377 | 2024-04-19 | PARIVISION         | W   | 1.000      | 0.500        | -                | 0.544 (0.272)    | -         |    16.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |      401 | 2024-04-19 | ALTERNATE aTTaX    | W   | 1.000      | 0.143        | 0.104 (0.015)    | 0.779 (0.111)    | -         |    15.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |      460 | 2024-04-18 | B8                 | L   | 1.000      | -            | -                | -                | -         |   -13.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |      485 | 2024-04-17 | B8                 | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.851 (0.425)    | -         |    18.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |      512 | 2024-04-16 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -16.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |      533 | 2024-04-15 | ALTERNATE aTTaX    | W   | 1.000      | 0.143        | 0.104 (0.015)    | -                | -         |    17.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |      583 | 2024-04-12 | JANO               | L   | 1.000      | -            | -                | -                | -         |   -23.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |      611 | 2024-04-11 | Alliance           | L   | 1.000      | -            | -                | -                | -         |   -17.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |      709 | 2024-04-09 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -9.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |      771 | 2024-04-07 | ex-Preasy          | L   | 1.000      | -            | -                | -                | -         |    -8.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |      940 | 2024-04-01 | Nemiga             | L   | 0.964      | -            | -                | -                | -         |    -4.50 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           50 |     1348 | 2024-03-10 | CYBERSHOKE         | L   | 0.820      | -            | -                | -                | -         |   -20.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1360 | 2024-03-10 | ECLOT              | W   | 0.819      | 0.143        | 0.156 (0.018)    | -                | -         |    18.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1376 | 2024-03-09 | Sangal             | W   | 0.812      | 0.358        | -                | 0.797 (0.232)    | -         |     8.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1425 | 2024-03-07 | Nemiga             | L   | 0.800      | -            | -                | -                | -         |    -3.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1457 | 2024-03-06 | AURA               | W   | 0.793      | -            | -                | -                | -         |     2.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1492 | 2024-03-05 | AMKAL              | L   | 0.786      | -            | -                | -                | -         |    -4.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1550 | 2024-03-03 | Secret             | W   | 0.771      | -            | -                | -                | -         |     3.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1570 | 2024-03-02 | Secret             | W   | 0.764      | -            | -                | -                | -         |     3.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1596 | 2024-02-29 | Young Ninjas       | W   | 0.752      | -            | -                | -                | -         |    12.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     1859 | 2024-02-17 | Sashi              | L   | 0.673      | -            | -                | -                | -         |    -6.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2014 | 2024-02-10 | Sampi              | L   | 0.626      | -            | -                | -                | -         |    -7.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2095 | 2024-02-04 | 500                | L   | 0.585      | -            | -                | -                | -         |   -12.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2108 | 2024-02-03 | The Chosen Few     | W   | 0.580      | -            | -                | -                | -         |     4.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2154 | 2024-02-02 | NAVI Junior        | W   | 0.572      | -            | -                | -                | -         |     4.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2158 | 2024-02-02 | Juggernauts        | W   | 0.572      | -            | -                | -                | -         |     0.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2428 | 2024-01-20 | 3DMAX              | L   | 0.485      | -            | -                | -                | -         |    -2.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2478 | 2024-01-19 | SAW                | L   | 0.479      | -            | -                | -                | -         |    -0.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2524 | 2024-01-18 | Permitta           | W   | 0.473      | -            | -                | -                | -         |     7.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2541 | 2024-01-18 | BetBoom            | L   | 0.473      | -            | -                | -                | -         |    -0.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2555 | 2024-01-18 | Aurora Young Blud  | L   | 0.471      | -            | -                | -                | -         |   -11.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2611 | 2024-01-16 | Passion UA         | W   | 0.462      | -            | -                | -                | -         |     8.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2622 | 2024-01-16 | samaloyod          | W   | 0.461      | -            | -                | -                | -         |     1.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2645 | 2024-01-16 | premghouls         | W   | 0.460      | -            | -                | -                | -         |     0.72 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2654 | 2024-01-16 | ECLOT              | W   | 0.458      | 0.333        | 0.156 (0.024)    | -                | -         |    10.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2708 | 2024-01-14 | Astralis Talent    | L   | 0.445      | -            | -                | -                | -         |    -8.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2830 | 2024-01-10 | Gucci Academy      | L   | 0.421      | -            | -                | -                | -         |    -9.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2883 | 2024-01-09 | 9INE               | L   | 0.413      | -            | -                | -                | -         |   -11.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2902 | 2024-01-09 | The Prodigies      | W   | 0.413      | -            | -                | -                | -         |     1.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     3126 | 2023-12-08 | ALTERNATE aTTaX    | L   | 0.200      | -            | -                | -                | -         |    -2.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     3149 | 2023-12-07 | MOUZ NXT           | W   | 0.194      | 0.372        | 0.210 (0.015)    | -                | -         |     4.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     3187 | 2023-12-06 | GenOne             | W   | 0.186      | -            | -                | -                | -         |     0.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3204 | 2023-12-05 | TSM                | L   | 0.181      | -            | -                | -                | -         |    -4.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3231 | 2023-12-04 | SAW                | L   | 0.172      | -            | -                | -                | -         |    -0.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3252 | 2023-12-03 | TSM                | L   | 0.164      | -            | -                | -                | -         |    -4.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3262 | 2023-12-02 | Bad News Kangaroos | W   | 0.160      | -            | -                | -                | -         |     2.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3292 | 2023-12-01 | Sprout             | L   | 0.151      | -            | -                | -                | -         |    -3.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3301 | 2023-11-30 | BIG                | L   | 0.146      | -            | -                | -                | -         |    -0.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3336 | 2023-11-27 | Legacy             | W   | 0.125      | -            | -                | -                | -         |     2.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3342 | 2023-11-26 | Guild Eagles       | L   | 0.120      | -            | -                | -                | -         |    -1.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3344 | 2023-11-26 | Illyrians          | W   | 0.120      | -            | -                | -                | -         |     0.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3363 | 2023-11-25 | Guild Eagles       | L   | 0.114      | -            | -                | -                | -         |    -1.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3396 | 2023-11-24 | ex-sYnck           | L   | 0.105      | -            | -                | -                | -         |    -2.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3407 | 2023-11-23 | Amigosi            | W   | 0.099      | -            | -                | -                | -         |     0.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3410 | 2023-11-23 | Lazer Cats         | W   | 0.098      | -            | -                | -                | -         |     0.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3423 | 2023-11-22 | JANO               | W   | 0.092      | -            | -                | -                | -         |     0.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3438 | 2023-11-21 | Pompa              | W   | 0.085      | -            | -                | -                | -         |     0.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3456 | 2023-11-20 | ex-sYnck           | L   | 0.078      | -            | -                | -                | -         |    -1.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3668 | 2023-11-12 | Sangal             | L   | 0.026      | -            | -                | -                | -         |    -0.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     3697 | 2023-11-11 | The Suspect        | W   | 0.020      | -            | -                | -                | 1 (0.020) |     0.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     3727 | 2023-11-09 | FORZE              | L   | 0.007      | -            | -                | -                | -         |    -0.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,096.88)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-24 |      1.000 | $12,500.00     | $12,500.00      |
| 2023-12-13 |      0.233 | $750.00        | $174.72         |
| 2023-11-24 |      0.105 | $3,000.00      | $313.62         |
| 2023-11-11 |      0.020 | $5,332.00      | $108.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
