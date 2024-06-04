### Roster Details<br />
Team Name: Galorys<br />
Roster: detr0ittJ, happ, hoax, ninjaZ, Tomate<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  829.3<br />
<br />
Final Rank Value (829.3) = Starting Rank Value (871.1) + Head To Head Adjustments (-41.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.238[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.1
- 400 + ( ( 0.243 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 871.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |       58 | 2024-05-27 | Dusty Roots  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.53 | detr0ittJ, happ, hoax, ninjaZ, Tomate    |
|           70 |      238 | 2024-05-20 | Case         | L   | 1.000      | -            | -                | -                | -         |   -15.12 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           69 |      261 | 2024-05-19 | Solid        | W   | 1.000      | 0.303        | 0.062 (0.019)    | 0.627 (0.190)    | 0 (0.000) |    16.14 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           68 |      289 | 2024-05-18 | ODDIK        | L   | 1.000      | -            | -                | -                | -         |   -12.21 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           67 |      404 | 2024-05-15 | Hype         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.53 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           66 |      415 | 2024-05-15 | Case         | L   | 1.000      | -            | -                | -                | -         |   -17.71 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           65 |      456 | 2024-05-14 | Case         | L   | 1.000      | -            | -                | -                | -         |   -19.29 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           64 |      460 | 2024-05-14 | Case         | W   | 1.000      | 0.450        | 0.028 (0.013)    | 0.693 (0.312)    | 0 (0.000) |    11.91 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           63 |      472 | 2024-05-14 | 9z           | L   | 1.000      | -            | -                | -                | -         |    -2.79 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           62 |      490 | 2024-05-13 | 9z           | L   | 1.000      | -            | -                | -                | -         |    -2.87 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           61 |      497 | 2024-05-13 | Yawara       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.68 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           60 |      516 | 2024-05-12 | KRÜ          | W   | 1.000      | 0.371        | 0.017 (0.006)    | -                | 0 (0.000) |    13.97 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           59 |      556 | 2024-05-11 | Case         | W   | 1.000      | 0.384        | 0.028 (0.011)    | 0.693 (0.266)    | 0 (0.000) |    15.06 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           58 |      616 | 2024-05-08 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.60 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           57 |      618 | 2024-05-08 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.61 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           56 |      638 | 2024-05-07 | KRÜ          | L   | 1.000      | -            | -                | -                | -         |   -18.51 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           55 |      675 | 2024-05-05 | W7M          | L   | 1.000      | -            | -                | -                | -         |   -18.52 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           54 |      981 | 2024-04-20 | Solid        | W   | 0.940      | 0.450        | 0.062 (0.026)    | 0.627 (0.266)    | 0 (0.000) |    14.89 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           53 |      983 | 2024-04-20 | Solid        | L   | 0.940      | -            | -                | -                | -         |   -14.80 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           52 |     1159 | 2024-04-16 | Case         | L   | 0.914      | -            | -                | -                | -         |   -15.23 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           51 |     1196 | 2024-04-14 | MIBR         | L   | 0.900      | -            | -                | -                | -         |    -0.61 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           50 |     1215 | 2024-04-13 | Fluxo        | W   | 0.892      | 0.435        | 0.066 (0.025)    | 0.647 (0.251)    | 0 (0.000) |    21.37 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           49 |     1224 | 2024-04-12 | Sharks       | W   | 0.887      | 0.435        | 0.031 (0.012)    | 0.530 (0.204)    | 0 (0.000) |    18.20 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           48 |     1242 | 2024-04-11 | Vikings KR   | L   | 0.881      | -            | -                | -                | -         |   -20.39 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           47 |     1251 | 2024-04-11 | BESTIA       | W   | 0.879      | 0.435        | 0.026 (0.010)    | 0.626 (0.239)    | -         |    15.85 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           46 |     1282 | 2024-04-10 | MIBR         | L   | 0.874      | -            | -                | -                | -         |    -0.54 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           45 |     1283 | 2024-04-10 | MIBR         | L   | 0.873      | -            | -                | -                | -         |    -0.54 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           44 |     1333 | 2024-04-09 | BESTIA       | W   | 0.867      | 0.450        | 0.026 (0.010)    | 0.626 (0.244)    | -         |    16.81 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           43 |     1338 | 2024-04-09 | BESTIA       | L   | 0.867      | -            | -                | -                | -         |   -10.40 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           42 |     1411 | 2024-04-07 | paiN         | L   | 0.853      | -            | -                | -                | -         |    -0.43 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           41 |     1642 | 2024-03-27 | Fluxo        | W   | 0.781      | 0.450        | 0.066 (0.023)    | 0.647 (0.227)    | -         |    18.44 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           40 |     1648 | 2024-03-27 | Fluxo        | L   | 0.780      | -            | -                | -                | -         |    -5.97 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           39 |     1688 | 2024-03-26 | ex-2GAME     | W   | 0.774      | -            | -                | -                | -         |     9.02 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           38 |     1690 | 2024-03-26 | ex-2GAME     | W   | 0.774      | -            | -                | -                | -         |     9.62 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           37 |     1884 | 2024-03-14 | W7M          | W   | 0.694      | -            | -                | -                | -         |    10.31 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           36 |     1887 | 2024-03-14 | W7M          | W   | 0.694      | -            | -                | -                | -         |    10.97 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           35 |     1930 | 2024-03-13 | RED Canids   | L   | 0.686      | -            | -                | -                | -         |    -4.65 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           34 |     1973 | 2024-03-11 | LA RUGONETA  | L   | 0.674      | -            | -                | -                | -         |   -16.46 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           33 |     1995 | 2024-03-10 | MIBR         | L   | 0.667      | -            | -                | -                | -         |    -0.33 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           32 |     2053 | 2024-03-08 | ODDIK        | W   | 0.651      | 0.435        | -                | 0.638 (0.181)    | -         |    14.66 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           31 |     2333 | 2024-02-24 | Sharks       | L   | 0.567      | -            | -                | -                | -         |    -5.41 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           30 |     2344 | 2024-02-24 | Sharks       | L   | 0.567      | -            | -                | -                | -         |    -5.64 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           29 |     2365 | 2024-02-23 | Corinthians  | L   | 0.561      | -            | -                | -                | -         |   -13.53 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           28 |     2366 | 2024-02-23 | Corinthians  | W   | 0.560      | -            | -                | -                | -         |     4.09 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           27 |     2383 | 2024-02-22 | MIBR Academy | W   | 0.553      | -            | -                | -                | -         |     4.18 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           26 |     2398 | 2024-02-21 | adalYamigos  | L   | 0.547      | -            | -                | -                | -         |   -11.08 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           25 |     2402 | 2024-02-21 | adalYamigos  | L   | 0.547      | -            | -                | -                | -         |   -11.57 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           24 |     2405 | 2024-02-21 | Sharks       | L   | 0.546      | -            | -                | -                | -         |    -6.35 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           23 |     2477 | 2024-02-18 | Sharks       | L   | 0.528      | -            | -                | -                | -         |    -6.39 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           22 |     2479 | 2024-02-18 | Case         | W   | 0.527      | -            | -                | -                | -         |     9.65 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           21 |     2503 | 2024-02-17 | Sharks       | W   | 0.520      | -            | -                | -                | -         |    10.79 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           20 |     2506 | 2024-02-17 | Corinthians  | W   | 0.519      | -            | -                | -                | -         |     3.78 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           19 |     2528 | 2024-02-16 | Flamengo     | W   | 0.514      | -            | -                | -                | -         |     2.32 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           18 |     2534 | 2024-02-16 | Imperial     | L   | 0.512      | -            | -                | -                | -         |    -0.29 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           17 |     2537 | 2024-02-16 | Imperial     | L   | 0.512      | -            | -                | -                | -         |    -0.29 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           16 |     2562 | 2024-02-15 | 9z Academy   | W   | 0.506      | -            | -                | -                | -         |     1.33 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           15 |     2589 | 2024-02-14 | Solid        | L   | 0.501      | -            | -                | -                | -         |    -6.95 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           14 |     2602 | 2024-02-14 | Sharks       | L   | 0.499      | -            | -                | -                | -         |    -5.04 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           13 |     2638 | 2024-02-13 | Case         | L   | 0.493      | -            | -                | -                | -         |    -7.07 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           12 |     2648 | 2024-02-12 | inSanitY     | W   | 0.487      | -            | -                | -                | -         |     1.23 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           11 |     2992 | 2024-01-22 | 9z           | L   | 0.347      | -            | -                | -                | -         |    -0.89 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           10 |     3054 | 2024-01-20 | Flamengo     | L   | 0.334      | -            | -                | -                | -         |    -8.98 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            9 |     3103 | 2024-01-19 | Sharks       | L   | 0.328      | -            | -                | -                | -         |    -3.95 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            8 |     3116 | 2024-01-19 | Imperial     | L   | 0.326      | -            | -                | -                | -         |    -0.21 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            7 |     3313 | 2024-01-15 | Legacy       | L   | 0.301      | -            | -                | -                | -         |    -3.55 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            6 |     3369 | 2024-01-13 | Sharks       | L   | 0.287      | -            | -                | -                | -         |    -3.75 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            5 |     3447 | 2024-01-11 | adalYamigos  | L   | 0.274      | -            | -                | -                | -         |    -6.63 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            4 |     3448 | 2024-01-11 | Case         | W   | 0.274      | -            | -                | -                | -         |     2.17 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            3 |     3450 | 2024-01-11 | inSanitY     | W   | 0.274      | -            | -                | -                | -         |     0.61 | antonini, iDk, Maluk3, pesadelo, prt     |
|            2 |     3464 | 2024-01-11 | Vex Dragons  | W   | 0.273      | -            | -                | -                | -         |     0.59 | duzzy, mrcn, pac, spider, Tineu          |
|            1 |     3522 | 2024-01-09 | blockkstar   | L   | 0.259      | -            | -                | -                | -         |    -7.27 | Demonos, drummond, fREQ, proSHOW, suNday |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,658.55)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-15 |      0.907 | $5,000.00      | $4,533.88       |
| 2024-04-11 |      0.881 | $592.00        | $521.43         |
| 2024-02-22 |      0.553 | $1,417.00      | $784.09         |
| 2024-02-21 |      0.546 | $1,500.00      | $819.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
