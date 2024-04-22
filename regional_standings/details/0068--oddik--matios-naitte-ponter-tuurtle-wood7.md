### Roster Details<br />
Team Name: ODDIK<br />
Roster: matios, naitte, ponter, Tuurtle, WOOD7<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  880.1<br />
<br />
Final Rank Value (880.1) = Starting Rank Value (915.7) + Head To Head Adjustments (-35.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.7
- 400 + ( ( 0.267 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 915.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      168 | 2024-04-17 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -7.82 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           67 |      176 | 2024-04-17 | W7M          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.89 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           66 |      210 | 2024-04-16 | DANVIET      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.06 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           65 |      261 | 2024-04-13 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.67 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           64 |      282 | 2024-04-12 | Solid        | W   | 1.000      | 0.435        | 0.126 (0.055)    | 0.584 (0.254)    | 0 (0.000) |    15.45 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           63 |      326 | 2024-04-10 | Sharks       | L   | 1.000      | -            | -                | -                | -         |   -11.87 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           62 |      332 | 2024-04-10 | Sharks       | W   | 1.000      | 0.450        | 0.040 (0.018)    | 0.532 (0.239)    | 0 (0.000) |    19.98 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           61 |      387 | 2024-04-09 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -7.45 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           60 |      392 | 2024-04-09 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -7.95 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           59 |      428 | 2024-04-08 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -8.51 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           58 |      481 | 2024-04-06 | Sharks       | L   | 1.000      | -            | -                | -                | -         |   -12.67 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           57 |      484 | 2024-04-06 | LA RUGONETA  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.43 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           56 |      498 | 2024-04-05 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -2.09 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           55 |      524 | 2024-04-04 | Imperial     | L   | 1.000      | -            | -                | -                | -         |    -0.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           54 |      529 | 2024-04-04 | Imperial     | L   | 1.000      | -            | -                | -                | -         |    -0.66 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           53 |      563 | 2024-04-03 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -8.83 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           52 |      566 | 2024-04-03 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -9.50 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           51 |      742 | 2024-03-26 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -2.64 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           50 |      744 | 2024-03-26 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -2.71 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           49 |      851 | 2024-03-18 | RED Canids   | L   | 0.967      | -            | -                | -                | -         |   -10.12 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           48 |      872 | 2024-03-17 | Case         | W   | 0.960      | 0.303        | 0.034 (0.010)    | 0.767 (0.223)    | 0 (0.000) |    11.55 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           47 |      894 | 2024-03-16 | RED Canids   | L   | 0.954      | -            | -                | -                | -         |   -10.33 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           46 |      909 | 2024-03-15 | 2GAME        | W   | 0.948      | 0.450        | -                | 0.217 (0.093)    | 0 (0.000) |     5.83 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           45 |      910 | 2024-03-15 | 2GAME        | W   | 0.948      | 0.450        | -                | 0.217 (0.093)    | 0 (0.000) |     6.14 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           44 |      914 | 2024-03-15 | MIBR Academy | W   | 0.947      | -            | -                | -                | -         |     5.40 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           43 |      971 | 2024-03-13 | Sharks       | L   | 0.934      | -            | -                | -                | -         |   -12.61 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           42 |      984 | 2024-03-13 | Case         | W   | 0.933      | 0.303        | 0.034 (0.010)    | 0.767 (0.217)    | -         |    13.08 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           41 |     1055 | 2024-03-10 | Solid        | W   | 0.913      | 0.303        | 0.126 (0.035)    | 0.584 (0.162)    | -         |    12.74 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           40 |     1060 | 2024-03-10 | LA RUGONETA  | L   | 0.913      | -            | -                | -                | -         |   -25.47 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           39 |     1106 | 2024-03-08 | Galorys      | L   | 0.899      | -            | -                | -                | -         |   -19.12 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           38 |     1217 | 2024-03-04 | paiN         | L   | 0.873      | -            | -                | -                | -         |    -0.56 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           37 |     1232 | 2024-03-03 | RED Canids   | W   | 0.867      | 0.143        | 0.110 (0.014)    | 0.842 (0.104)    | 1 (0.867) |    16.88 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           36 |     1256 | 2024-03-02 | Elevate      | W   | 0.861      | -            | -                | -                | 1 (0.861) |    13.06 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           35 |     1284 | 2024-03-01 | M80          | L   | 0.854      | -            | -                | -                | -         |   -10.04 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           34 |     1836 | 2024-02-02 | BESTIA       | L   | 0.668      | -            | -                | -                | -         |   -12.01 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           33 |     1843 | 2024-02-02 | 9z           | L   | 0.667      | -            | -                | -                | -         |    -9.51 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           32 |     2043 | 2024-01-22 | Fluxo        | L   | 0.595      | -            | -                | -                | -         |    -7.07 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           31 |     2076 | 2024-01-21 | RED Canids   | W   | 0.588      | 0.143        | 0.110 (0.009)    | -                | -         |    11.27 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           30 |     2116 | 2024-01-20 | 9z           | W   | 0.580      | -            | -                | -                | -         |     9.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           29 |     2155 | 2024-01-19 | Flamengo     | W   | 0.575      | -            | -                | -                | -         |     2.50 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           28 |     2172 | 2024-01-19 | MIBR         | L   | 0.574      | -            | -                | -                | -         |    -1.19 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           27 |     2355 | 2024-01-16 | adalYamigos  | L   | 0.553      | -            | -                | -                | -         |   -13.23 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           26 |     2408 | 2024-01-14 | paiN         | L   | 0.541      | -            | -                | -                | -         |    -0.17 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           25 |     2429 | 2024-01-13 | Solid        | W   | 0.535      | 0.143        | 0.126 (0.010)    | -                | -         |     7.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           24 |     2557 | 2024-01-09 | W7M          | W   | 0.508      | -            | -                | -                | -         |     6.35 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           23 |     2563 | 2024-01-09 | Flamengo     | L   | 0.508      | -            | -                | -                | -         |   -14.10 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           22 |     2569 | 2024-01-09 | Corinthians  | W   | 0.507      | -            | -                | -                | -         |     2.91 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           21 |     2577 | 2024-01-09 | Hype         | W   | 0.507      | -            | -                | -                | -         |     0.79 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           20 |     2629 | 2023-12-23 | Case         | W   | 0.394      | 0.303        | -                | 0.767 (0.091)    | -         |     5.37 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           19 |     2633 | 2023-12-21 | Solid        | W   | 0.381      | 0.303        | 0.126 (0.014)    | -                | -         |     6.07 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           18 |     2638 | 2023-12-20 | Case         | W   | 0.373      | 0.303        | -                | 0.767 (0.087)    | -         |     5.22 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           17 |     2645 | 2023-12-19 | Corinthians  | W   | 0.367      | -            | -                | -                | -         |     2.28 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           16 |     2655 | 2023-12-18 | Solid        | L   | 0.361      | -            | -                | -                | -         |    -5.63 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           15 |     2714 | 2023-12-16 | Corinthians  | W   | 0.347      | -            | -                | -                | -         |     2.08 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           14 |     3317 | 2023-11-15 | Metizport    | L   | 0.138      | -            | -                | -                | -         |    -3.35 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           13 |     3407 | 2023-11-11 | Entropiq     | L   | 0.112      | -            | -                | -                | -         |    -2.55 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           12 |     3535 | 2023-11-04 | Sharks       | L   | 0.067      | -            | -                | -                | -         |    -1.11 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           11 |     3573 | 2023-11-02 | paiN         | L   | 0.055      | -            | -                | -                | -         |    -0.01 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           10 |     3580 | 2023-11-02 | Imperial     | W   | 0.053      | 0.417        | 0.569 (0.013)    | -                | -         |     1.66 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            9 |     3596 | 2023-11-01 | Sharks       | W   | 0.048      | -            | -                | -                | -         |     0.72 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            8 |     3607 | 2023-11-01 | Case         | W   | 0.046      | -            | -                | -                | -         |     0.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            7 |     3632 | 2023-10-31 | BESTIA       | W   | 0.040      | -            | -                | -                | -         |     0.49 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            6 |     3666 | 2023-10-30 | Solid        | W   | 0.033      | -            | -                | -                | -         |     0.56 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            5 |     3671 | 2023-10-30 | WINDINGO     | W   | 0.033      | -            | -                | -                | -         |     0.21 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            4 |     3777 | 2023-10-27 | RED Canids   | L   | 0.014      | -            | -                | -                | -         |    -0.17 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            3 |     3807 | 2023-10-26 | Flamengo     | L   | 0.007      | -            | -                | -                | -         |    -0.20 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            2 |     3810 | 2023-10-26 | MIBR Academy | W   | 0.007      | -            | -                | -                | -         |     0.04 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            1 |     3843 | 2023-10-25 | Imperial     | L   | 0.000      | -            | -                | -                | -         |     0.00 | matios, naitte, ponter, Tuurtle, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,157.72)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-18 |      0.967 | $1,500.00      | $1,450.42       |
| 2023-12-23 |      0.394 | $3,500.00      | $1,378.10       |
| 2023-11-04 |      0.068 | $4,000.00      | $273.87         |
| 2023-11-02 |      0.055 | $1,000.00      | $55.32          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
