### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  1075.5<br />
<br />
Final Rank Value (1075.5) = Starting Rank Value (1108.6) + Head To Head Adjustments (-33.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.552[<sup>1</sup>](#table2)
- Bounty Collected: 0.455[<sup>2</sup>](#table1)
- Opponent Network: 0.415[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1108.6
- 400 + ( ( 0.355 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1108.6


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
|          104 |       67 | 2024-06-09 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          103 |       76 | 2024-06-09 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -11.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          102 |       99 | 2024-06-08 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -19.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          101 |      116 | 2024-06-08 | Passion UA        | W   | 1.000      | 0.500        | 0.088 (0.044)    | 0.905 (0.452)    | 0 (0.000) |    13.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|          100 |      157 | 2024-06-07 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           99 |      173 | 2024-06-07 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -23.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           98 |      195 | 2024-06-07 | 5W                | L   | 1.000      | -            | -                | -                | -         |   -29.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           97 |      217 | 2024-06-06 | FAVBET            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           96 |      245 | 2024-06-06 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -23.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           95 |      264 | 2024-06-06 | GhoulsW           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           94 |      301 | 2024-06-05 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           93 |      340 | 2024-06-04 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           92 |      348 | 2024-06-04 | Grannys Knockers  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           91 |      378 | 2024-06-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -18.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           90 |      385 | 2024-06-02 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           89 |      390 | 2024-06-02 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    23.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           88 |      415 | 2024-06-01 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -22.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           87 |      430 | 2024-06-01 | DMS               | W   | 1.000      | -            | -                | -                | -         |     8.72 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           86 |      434 | 2024-06-01 | KOI               | W   | 1.000      | -            | -                | -                | -         |    11.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           85 |      438 | 2024-06-01 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -3.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           84 |      466 | 2024-05-31 | Passion UA        | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.905 (0.393)    | -         |    12.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           83 |      477 | 2024-05-30 | ThunderFlash      | W   | 1.000      | -            | -                | -                | -         |     0.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           82 |      486 | 2024-05-30 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -19.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           81 |      503 | 2024-05-29 | JANO              | W   | 1.000      | -            | -                | -                | -         |     2.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           80 |      573 | 2024-05-26 | RUBY              | W   | 1.000      | -            | -                | -                | -         |     8.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           79 |      587 | 2024-05-25 | M1X KS            | W   | 1.000      | -            | -                | -                | -         |    12.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           78 |      591 | 2024-05-25 | ex-iNation        | W   | 1.000      | -            | -                | -                | -         |     4.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           77 |      601 | 2024-05-25 | Rhyno             | W   | 1.000      | -            | -                | -                | -         |    10.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           76 |      605 | 2024-05-24 | M1X KS            | L   | 1.000      | -            | -                | -                | -         |   -19.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           75 |      608 | 2024-05-24 | The Suspect       | W   | 1.000      | -            | -                | -                | -         |     4.84 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           74 |      625 | 2024-05-23 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -11.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           73 |      631 | 2024-05-23 | brazylijski luz   | W   | 1.000      | -            | -                | -                | -         |     6.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           72 |      664 | 2024-05-22 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -14.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           71 |      670 | 2024-05-22 | Illuminar         | W   | 1.000      | -            | -                | -                | -         |     2.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |      708 | 2024-05-21 | BLEED             | W   | 1.000      | 0.500        | 0.349 (0.174)    | 1.000 (0.500)    | -         |    21.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |      713 | 2024-05-21 | Verdant           | W   | 1.000      | -            | -                | -                | -         |     5.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |      734 | 2024-05-20 | Metizport         | W   | 1.000      | 0.500        | 0.078 (0.039)    | 0.706 (0.353)    | -         |    15.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |      770 | 2024-05-19 | B8                | W   | 1.000      | 0.500        | 0.160 (0.080)    | 1.000 (0.500)    | -         |    21.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |      824 | 2024-05-17 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -17.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |      833 | 2024-05-17 | Endpoint          | W   | 1.000      | -            | -                | -                | -         |    11.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |      874 | 2024-05-16 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -16.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |      882 | 2024-05-16 | ECF               | W   | 1.000      | -            | -                | -                | -         |     8.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |      923 | 2024-05-15 | 3DMAX             | W   | 1.000      | 0.500        | 0.122 (0.061)    | 0.821 (0.410)    | -         |    23.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |      982 | 2024-05-14 | Preasy            | W   | 1.000      | -            | -                | -                | -         |     5.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |     1001 | 2024-05-13 | EYEBALLERS        | W   | 1.000      | -            | -                | -                | -         |    11.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |     1030 | 2024-05-12 | Verdant           | W   | 1.000      | -            | -                | -                | -         |     7.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |     1100 | 2024-05-09 | 9 Pandas          | L   | 0.985      | -            | -                | -                | -         |   -12.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           57 |     1155 | 2024-05-06 | Insilio           | W   | 0.966      | -            | -                | -                | -         |    13.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1203 | 2024-05-03 | EYEBALLERS        | L   | 0.947      | -            | -                | -                | -         |   -18.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1214 | 2024-05-03 | Metizport         | L   | 0.945      | -            | -                | -                | -         |   -14.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1242 | 2024-05-02 | HAVU              | W   | 0.938      | -            | -                | -                | -         |     4.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1263 | 2024-05-01 | KOI               | W   | 0.932      | 0.435        | 0.054 (0.022)    | -                | -         |    15.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1279 | 2024-04-30 | Sangal            | L   | 0.926      | -            | -                | -                | -         |   -11.28 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1289 | 2024-04-30 | B8                | W   | 0.925      | 0.435        | 0.160 (0.064)    | 1.000 (0.402)    | -         |    14.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1304 | 2024-04-29 | PARIVISION        | L   | 0.919      | -            | -                | -                | -         |   -14.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1320 | 2024-04-28 | SINNERS           | W   | 0.913      | 0.435        | -                | 0.844 (0.335)    | -         |    14.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1332 | 2024-04-27 | 500               | W   | 0.907      | -            | -                | -                | -         |     6.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1353 | 2024-04-27 | SINNERS           | W   | 0.905      | 0.500        | -                | 0.844 (0.382)    | -         |    15.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1377 | 2024-04-26 | Illuminar         | W   | 0.898      | -            | -                | -                | -         |     3.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1401 | 2024-04-25 | EYEBALLERS        | L   | 0.892      | -            | -                | -                | -         |   -18.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1423 | 2024-04-24 | M1X KS            | L   | 0.885      | -            | -                | -                | -         |   -12.24 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1440 | 2024-04-23 | Nemiga            | L   | 0.878      | -            | -                | -                | -         |    -6.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     1448 | 2024-04-22 | Grannys Knockers  | W   | 0.873      | -            | -                | -                | -         |     5.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     1455 | 2024-04-22 | Nexus             | W   | 0.872      | -            | -                | -                | -         |     8.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     1501 | 2024-04-20 | RUBY              | W   | 0.859      | -            | -                | -                | -         |     9.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     1528 | 2024-04-19 | PARIVISION        | W   | 0.854      | -            | -                | -                | -         |    11.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     1552 | 2024-04-19 | ALTERNATE aTTaX   | W   | 0.852      | -            | -                | -                | -         |    10.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     1611 | 2024-04-18 | B8                | L   | 0.844      | -            | -                | -                | -         |   -12.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     1636 | 2024-04-17 | B8                | W   | 0.838      | 0.500        | 0.160 (0.067)    | 1.000 (0.419)    | -         |    14.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     1663 | 2024-04-16 | Sangal            | L   | 0.833      | -            | -                | -                | -         |   -10.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     1684 | 2024-04-15 | ALTERNATE aTTaX   | W   | 0.827      | -            | -                | -                | -         |    11.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     1734 | 2024-04-12 | JANO              | L   | 0.804      | -            | -                | -                | -         |   -21.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     1762 | 2024-04-11 | Alliance          | L   | 0.799      | -            | -                | -                | -         |   -17.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     1860 | 2024-04-09 | MOUZ NXT          | L   | 0.786      | -            | -                | -                | -         |   -10.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     1922 | 2024-04-07 | ex-Preasy         | L   | 0.771      | -            | -                | -                | -         |   -14.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2091 | 2024-04-01 | Nemiga            | L   | 0.731      | -            | -                | -                | -         |    -6.46 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           28 |     2499 | 2024-03-10 | CYBERSHOKE        | L   | 0.587      | -            | -                | -                | -         |   -16.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2511 | 2024-03-10 | ECLOT             | W   | 0.585      | -            | -                | -                | -         |    12.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2527 | 2024-03-09 | Sangal            | W   | 0.579      | 0.358        | 0.214 (0.044)    | -                | -         |     9.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2576 | 2024-03-07 | Nemiga            | L   | 0.567      | -            | -                | -                | -         |    -4.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2608 | 2024-03-06 | GODSENT           | W   | 0.559      | -            | -                | -                | -         |     0.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2643 | 2024-03-05 | AMKAL             | L   | 0.553      | -            | -                | -                | -         |    -5.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2701 | 2024-03-03 | Secret            | W   | 0.538      | -            | -                | -                | -         |     1.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2721 | 2024-03-02 | Secret            | W   | 0.531      | -            | -                | -                | -         |     1.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2747 | 2024-02-29 | Young Ninjas      | W   | 0.519      | -            | -                | -                | -         |     3.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3010 | 2024-02-17 | Sashi             | L   | 0.439      | -            | -                | -                | -         |    -5.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3165 | 2024-02-10 | Sampi             | L   | 0.393      | -            | -                | -                | -         |    -8.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3246 | 2024-02-04 | 500               | L   | 0.352      | -            | -                | -                | -         |    -9.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3259 | 2024-02-03 | The Chosen Few    | W   | 0.347      | -            | -                | -                | -         |     1.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3305 | 2024-02-02 | NAVI Junior       | W   | 0.339      | -            | -                | -                | -         |     1.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3309 | 2024-02-02 | Juggernauts       | W   | 0.338      | -            | -                | -                | -         |     0.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3579 | 2024-01-20 | 3DMAX             | L   | 0.252      | -            | -                | -                | -         |    -2.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3629 | 2024-01-19 | SAW               | L   | 0.246      | -            | -                | -                | -         |    -1.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3675 | 2024-01-18 | Permitta          | W   | 0.240      | -            | -                | -                | -         |     2.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3692 | 2024-01-18 | BetBoom           | L   | 0.239      | -            | -                | -                | -         |    -0.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3706 | 2024-01-18 | Aurora Young Blud | L   | 0.238      | -            | -                | -                | -         |    -6.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3762 | 2024-01-16 | Passion UA        | W   | 0.228      | -            | -                | -                | -         |     3.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3773 | 2024-01-16 | samaloyod         | W   | 0.228      | -            | -                | -                | -         |     0.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3796 | 2024-01-16 | premghouls        | W   | 0.227      | -            | -                | -                | -         |     0.14 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3805 | 2024-01-16 | ECLOT             | W   | 0.224      | -            | -                | -                | -         |     4.89 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3859 | 2024-01-14 | Astralis Talent   | L   | 0.211      | -            | -                | -                | -         |    -5.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3981 | 2024-01-10 | Gucci Academy     | L   | 0.188      | -            | -                | -                | -         |    -5.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     4034 | 2024-01-09 | 9INE              | L   | 0.180      | -            | -                | -                | -         |    -5.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     4053 | 2024-01-09 | The Prodigies     | W   | 0.179      | -            | -                | -                | -         |     0.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,979.11)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-22 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-05-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-04 |      0.953 | $2,000.00      | $1,905.79       |
| 2024-04-24 |      0.886 | $12,500.00     | $11,073.32      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
