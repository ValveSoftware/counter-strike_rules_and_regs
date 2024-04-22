### Roster Details<br />
Team Name: Galorys<br />
Roster: detr0ittJ, happ, hoax, koala, ninjaZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [20]( ../standings_americas.md)<br />
Final Rank Value:  861.2<br />
<br />
Final Rank Value (861.2) = Starting Rank Value (898.8) + Head To Head Adjustments (-37.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.8
- 400 + ( ( 0.258 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 898.8


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
|           55 |       34 | 2024-04-20 | Solid        | W   | 1.000      | 0.450        | 0.126 (0.056)    | 0.584 (0.263)    | 0 (0.000) |    15.80 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           54 |       36 | 2024-04-20 | Solid        | L   | 1.000      | -            | -                | -                | -         |   -15.69 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           53 |      212 | 2024-04-16 | Case         | L   | 1.000      | -            | -                | -                | -         |   -16.72 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           52 |      249 | 2024-04-14 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -1.45 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           51 |      268 | 2024-04-13 | Fluxo        | W   | 1.000      | 0.435        | 0.147 (0.064)    | 0.633 (0.275)    | 0 (0.000) |    24.27 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           50 |      277 | 2024-04-12 | Sharks       | W   | 1.000      | 0.435        | 0.040 (0.018)    | 0.532 (0.231)    | 0 (0.000) |    20.22 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           49 |      295 | 2024-04-11 | Vikings KR   | L   | 1.000      | -            | -                | -                | -         |   -22.08 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           48 |      304 | 2024-04-11 | BESTIA       | W   | 1.000      | 0.435        | 0.029 (0.013)    | 0.455 (0.198)    | 0 (0.000) |    15.57 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           47 |      335 | 2024-04-10 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -1.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           46 |      336 | 2024-04-10 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -1.38 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           45 |      386 | 2024-04-09 | BESTIA       | W   | 1.000      | 0.450        | 0.029 (0.013)    | 0.455 (0.205)    | 0 (0.000) |    16.88 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           44 |      391 | 2024-04-09 | BESTIA       | L   | 1.000      | -            | -                | -                | -         |   -14.52 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           43 |      464 | 2024-04-07 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.44 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           42 |      695 | 2024-03-27 | Fluxo        | W   | 1.000      | 0.450        | 0.147 (0.066)    | 0.633 (0.285)    | 0 (0.000) |    24.54 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           41 |      701 | 2024-03-27 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -6.45 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           40 |      741 | 2024-03-26 | 2GAME        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.19 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           39 |      743 | 2024-03-26 | 2GAME        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.90 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           38 |      937 | 2024-03-14 | W7M          | W   | 0.941      | 0.450        | 0.010 (0.004)    | 0.490 (0.207)    | 0 (0.000) |    14.94 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           37 |      940 | 2024-03-14 | W7M          | W   | 0.941      | 0.450        | -                | 0.490 (0.207)    | 0 (0.000) |    16.23 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           36 |      983 | 2024-03-13 | RED Canids   | L   | 0.933      | -            | -                | -                | -         |    -5.90 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           35 |     1026 | 2024-03-11 | LA RUGONETA  | L   | 0.921      | -            | -                | -                | -         |   -21.61 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           34 |     1048 | 2024-03-10 | MIBR         | L   | 0.914      | -            | -                | -                | -         |    -1.32 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           33 |     1106 | 2024-03-08 | ODDIK        | W   | 0.899      | 0.435        | 0.017 (0.006)    | 0.552 (0.216)    | -         |    19.12 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           32 |     1386 | 2024-02-24 | Sharks       | L   | 0.815      | -            | -                | -                | -         |    -7.24 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           31 |     1397 | 2024-02-24 | Sharks       | L   | 0.814      | -            | -                | -                | -         |    -7.68 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           30 |     1418 | 2024-02-23 | Corinthians  | L   | 0.808      | -            | -                | -                | -         |   -19.08 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           29 |     1419 | 2024-02-23 | Corinthians  | W   | 0.808      | -            | -                | -                | -         |     6.17 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           28 |     1436 | 2024-02-22 | MIBR Academy | W   | 0.801      | -            | -                | -                | -         |     6.93 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           27 |     1451 | 2024-02-21 | adalYamigos  | L   | 0.795      | -            | -                | -                | -         |   -13.31 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           26 |     1455 | 2024-02-21 | adalYamigos  | L   | 0.794      | -            | -                | -                | -         |   -14.27 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           25 |     1458 | 2024-02-21 | Sharks       | L   | 0.794      | -            | -                | -                | -         |    -9.20 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           24 |     1530 | 2024-02-18 | Sharks       | L   | 0.775      | -            | -                | -                | -         |    -9.52 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           23 |     1532 | 2024-02-18 | Case         | W   | 0.774      | 0.303        | 0.034 (0.008)    | 0.767 (0.180)    | -         |    14.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           22 |     1556 | 2024-02-17 | Sharks       | W   | 0.767      | 0.303        | 0.040 (0.009)    | -                | -         |    16.03 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           21 |     1559 | 2024-02-17 | Corinthians  | W   | 0.766      | -            | -                | -                | -         |     6.02 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           20 |     1581 | 2024-02-16 | Flamengo     | W   | 0.761      | -            | -                | -                | -         |     3.73 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           19 |     1587 | 2024-02-16 | Imperial     | L   | 0.760      | -            | -                | -                | -         |    -0.19 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           18 |     1590 | 2024-02-16 | Imperial     | L   | 0.760      | -            | -                | -                | -         |    -0.19 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           17 |     1615 | 2024-02-15 | 9z Academy   | W   | 0.754      | -            | -                | -                | -         |     2.08 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           16 |     1642 | 2024-02-14 | Solid        | L   | 0.748      | -            | -                | -                | -         |   -10.41 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           15 |     1655 | 2024-02-14 | Sharks       | L   | 0.746      | -            | -                | -                | -         |    -7.13 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           14 |     1691 | 2024-02-13 | Case         | L   | 0.740      | -            | -                | -                | -         |   -10.41 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           13 |     1701 | 2024-02-12 | inSanitY     | W   | 0.734      | -            | -                | -                | -         |     1.93 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           12 |     2045 | 2024-01-22 | 9z           | L   | 0.595      | -            | -                | -                | -         |    -6.67 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           11 |     2107 | 2024-01-20 | Flamengo     | L   | 0.582      | -            | -                | -                | -         |   -14.84 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           10 |     2156 | 2024-01-19 | Sharks       | L   | 0.575      | -            | -                | -                | -         |    -7.39 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            9 |     2169 | 2024-01-19 | Imperial     | L   | 0.574      | -            | -                | -                | -         |    -0.15 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            8 |     2366 | 2024-01-15 | Legacy       | L   | 0.548      | -            | -                | -                | -         |    -5.04 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            7 |     2422 | 2024-01-13 | Sharks       | L   | 0.535      | -            | -                | -                | -         |    -7.81 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            6 |     2500 | 2024-01-11 | adalYamigos  | L   | 0.522      | -            | -                | -                | -         |   -11.95 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            5 |     2501 | 2024-01-11 | Case         | W   | 0.521      | -            | -                | -                | -         |     7.74 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            4 |     2503 | 2024-01-11 | inSanitY     | W   | 0.521      | -            | -                | -                | -         |     1.10 | antonini, iDk, Maluk3, pesadelo, prt     |
|            3 |     2517 | 2024-01-11 | Vex Dragons  | W   | 0.520      | -            | -                | -                | -         |     1.05 | duzzy, mrcn, pac, spider, Tineu          |
|            2 |     2575 | 2024-01-09 | blockkstar   | L   | 0.507      | -            | -                | -                | -         |   -14.14 | Demonos, drummond, fREQ, proSHOW, suNday |
|            1 |     2999 | 2023-11-30 | adalYamigos  | L   | 0.241      | -            | -                | -                | -         |    -5.83 | detr0ittJ, happ, hoax, koala, ninjaZ     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,916.91)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-11 |      1.000 | $592.00        | $592.00         |
| 2024-02-22 |      0.801 | $1,417.00      | $1,134.65       |
| 2024-02-21 |      0.794 | $1,500.00      | $1,190.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
