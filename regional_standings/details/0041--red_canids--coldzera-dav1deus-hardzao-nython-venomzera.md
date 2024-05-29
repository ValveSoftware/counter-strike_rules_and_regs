### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1114.9<br />
<br />
Final Rank Value (1114.9) = Starting Rank Value (1007.7) + Head To Head Adjustments (107.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.313<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1007.7
- 400 + ( ( 0.313 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1007.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |      193 | 2024-05-21 | Sharks          | L   | 1.000      | -            | -                | -                | -         |   -23.29 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      197 | 2024-05-21 | Sharks          | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.530 (0.238)    | 0 (0.000) |     7.71 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      227 | 2024-05-20 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -17.52 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      229 | 2024-05-20 | Fluxo           | W   | 1.000      | 0.450        | 0.066 (0.030)    | 0.647 (0.291)    | 0 (0.000) |    13.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      258 | 2024-05-19 | 9z              | W   | 1.000      | 0.371        | 0.107 (0.040)    | 0.769 (0.285)    | 0 (0.000) |    21.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      283 | 2024-05-18 | ODDIK           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      354 | 2024-05-16 | Fluxo           | W   | 1.000      | 0.371        | 0.066 (0.024)    | 0.647 (0.240)    | 0 (0.000) |    16.61 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      397 | 2024-05-15 | 9z              | L   | 1.000      | -            | -                | -                | -         |    -8.78 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      399 | 2024-05-15 | 9z              | W   | 1.000      | 0.450        | 0.107 (0.048)    | 0.769 (0.346)    | 0 (0.000) |    23.25 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |      457 | 2024-05-14 | Corinthians     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.94 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |      461 | 2024-05-14 | Corinthians     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |      475 | 2024-05-14 | BESTIA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.40 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |      492 | 2024-05-13 | Sharks          | L   | 1.000      | -            | -                | -                | -         |   -21.63 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |      512 | 2024-05-12 | Vikings KR      | W   | 1.000      | -            | -                | -                | -         |     2.88 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |      521 | 2024-05-12 | FURIA Academy   | W   | 1.000      | -            | -                | -                | -         |     1.58 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |      575 | 2024-05-10 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -3.00 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |      592 | 2024-05-09 | Intense         | W   | 1.000      | -            | -                | -                | -         |     0.77 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           63 |      610 | 2024-05-08 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -2.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |      612 | 2024-05-08 | paiN            | W   | 1.000      | 0.450        | 0.464 (0.209)    | 0.829 (0.373)    | -         |    29.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |      613 | 2024-05-08 | Solid           | L   | 1.000      | -            | -                | -                | -         |   -23.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |      657 | 2024-05-06 | Intense         | W   | 1.000      | -            | -                | -                | -         |     0.70 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |      887 | 2024-04-25 | BESTIA          | W   | 0.974      | 0.450        | 0.026 (0.011)    | 0.626 (0.274)    | -         |     7.17 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |      889 | 2024-04-25 | BESTIA          | W   | 0.973      | 0.450        | 0.026 (0.011)    | 0.626 (0.274)    | -         |     7.64 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1116 | 2024-04-17 | MIBR            | L   | 0.920      | -            | -                | -                | -         |    -1.55 | dav1deuS, hardzao, nython, righi, venomzera    |
|           56 |     1124 | 2024-04-17 | O PLANO         | W   | 0.920      | -            | -                | -                | -         |     1.39 | dav1deuS, hardzao, nython, righi, venomzera    |
|           55 |     1158 | 2024-04-16 | LaChampionsLiga | W   | 0.914      | -            | -                | -                | -         |     0.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           54 |     1207 | 2024-04-13 | Imperial        | L   | 0.894      | -            | -                | -                | -         |    -2.58 | dav1deuS, hardzao, nython, righi, venomzera    |
|           53 |     1226 | 2024-04-12 | W7M             | W   | 0.886      | -            | -                | -                | -         |     5.18 | dav1deuS, hardzao, nython, righi, venomzera    |
|           52 |     1281 | 2024-04-10 | ex-2GAME        | W   | 0.874      | -            | -                | -                | -         |     3.39 | dav1deuS, hardzao, nython, righi, venomzera    |
|           51 |     1285 | 2024-04-10 | ex-2GAME        | W   | 0.873      | -            | -                | -                | -         |     3.51 | dav1deuS, hardzao, nython, righi, venomzera    |
|           50 |     1288 | 2024-04-10 | paiN            | L   | 0.873      | -            | -                | -                | -         |    -1.59 | dav1deuS, hardzao, nython, righi, venomzera    |
|           49 |     1335 | 2024-04-09 | W7M             | W   | 0.867      | -            | -                | -                | -         |     5.45 | dav1deuS, hardzao, nython, righi, venomzera    |
|           48 |     1340 | 2024-04-09 | W7M             | W   | 0.867      | -            | -                | -                | -         |     5.73 | dav1deuS, hardzao, nython, righi, venomzera    |
|           47 |     1341 | 2024-04-09 | MIBR            | L   | 0.866      | -            | -                | -                | -         |    -1.65 | dav1deuS, hardzao, nython, righi, venomzera    |
|           46 |     1374 | 2024-04-08 | BESTIA          | W   | 0.861      | -            | -                | -                | -         |     9.40 | dav1deuS, hardzao, nython, righi, venomzera    |
|           45 |     1382 | 2024-04-08 | Bounty Hunters  | W   | 0.859      | -            | -                | -                | -         |     0.76 | dav1deuS, hardzao, nython, righi, venomzera    |
|           44 |     1410 | 2024-04-07 | Imperial        | L   | 0.854      | -            | -                | -                | -         |    -1.86 | dav1deuS, hardzao, nython, righi, venomzera    |
|           43 |     1429 | 2024-04-06 | W7M             | L   | 0.846      | -            | -                | -                | -         |   -21.37 | dav1deuS, hardzao, nython, righi, venomzera    |
|           42 |     1470 | 2024-04-04 | Case            | L   | 0.834      | -            | -                | -                | -         |   -20.65 | dav1deuS, hardzao, nython, righi, venomzera    |
|           41 |     1473 | 2024-04-04 | Case            | W   | 0.834      | 0.450        | 0.028 (0.011)    | 0.693 (0.260)    | -         |     5.35 | dav1deuS, hardzao, nython, righi, venomzera    |
|           40 |     1487 | 2024-04-04 | Fluxo           | W   | 0.832      | -            | -                | -                | -         |    11.76 | dav1deuS, hardzao, nython, righi, venomzera    |
|           39 |     1510 | 2024-04-03 | ODDIK           | W   | 0.827      | 0.450        | -                | 0.638 (0.237)    | -         |     8.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           38 |     1513 | 2024-04-03 | ODDIK           | W   | 0.827      | -            | -                | -                | -         |     9.29 | dav1deuS, hardzao, nython, righi, venomzera    |
|           37 |     1798 | 2024-03-18 | ODDIK           | W   | 0.720      | -            | -                | -                | -         |     8.69 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           36 |     1841 | 2024-03-16 | ODDIK           | W   | 0.707      | -            | -                | -                | -         |     8.82 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           35 |     1858 | 2024-03-15 | Case            | W   | 0.700      | -            | -                | -                | -         |     5.93 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           34 |     1891 | 2024-03-14 | Solid           | L   | 0.693      | -            | -                | -                | -         |   -15.36 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           33 |     1899 | 2024-03-14 | Flamengo        | W   | 0.692      | -            | -                | -                | -         |     1.13 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           32 |     1917 | 2024-03-13 | Case            | W   | 0.687      | -            | -                | -                | -         |     5.67 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           31 |     1930 | 2024-03-13 | Galorys         | W   | 0.686      | -            | -                | -                | -         |     4.65 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           30 |     1961 | 2024-03-12 | BESTIA          | W   | 0.679      | -            | -                | -                | -         |     9.03 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           29 |     1979 | 2024-03-11 | Corinthians     | W   | 0.673      | -            | -                | -                | -         |     1.94 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           28 |     2015 | 2024-03-09 | W7M             | W   | 0.661      | -            | -                | -                | -         |     5.20 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           27 |     2062 | 2024-03-07 | VELOX           | W   | 0.647      | -            | -                | -                | -         |     1.40 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           26 |     2179 | 2024-03-03 | ODDIK           | L   | 0.620      | -            | -                | -                | -         |   -11.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           25 |     2213 | 2024-03-02 | paiN            | L   | 0.612      | -            | -                | -                | -         |    -0.80 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           24 |     2228 | 2024-03-01 | Wildcard        | W   | 0.606      | -            | -                | -                | 1 (0.606) |     6.94 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           23 |     2628 | 2024-02-13 | Imperial        | L   | 0.494      | -            | -                | -                | -         |    -0.80 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           22 |     2632 | 2024-02-13 | Imperial        | W   | 0.494      | 0.450        | 0.373 (0.083)    | -                | -         |    14.84 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     2817 | 2024-02-01 | W7M             | L   | 0.414      | -            | -                | -                | -         |    -9.96 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           20 |     2820 | 2024-02-01 | paiN            | L   | 0.414      | -            | -                | -                | -         |    -0.46 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           19 |     2993 | 2024-01-22 | W7M             | L   | 0.347      | -            | -                | -                | -         |    -8.55 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           18 |     3018 | 2024-01-21 | 9z              | W   | 0.342      | -            | -                | -                | -         |     8.86 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     3019 | 2024-01-21 | Flamengo        | W   | 0.341      | -            | -                | -                | -         |     0.76 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     3023 | 2024-01-21 | ODDIK           | L   | 0.340      | -            | -                | -                | -         |    -6.05 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3056 | 2024-01-20 | Legacy          | L   | 0.334      | -            | -                | -                | -         |    -5.81 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3108 | 2024-01-19 | Fluxo           | W   | 0.327      | -            | -                | -                | -         |     4.86 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3122 | 2024-01-19 | Case            | W   | 0.326      | -            | -                | -                | -         |     1.36 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3215 | 2024-01-17 | Sharks          | L   | 0.314      | -            | -                | -                | -         |    -5.96 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3229 | 2024-01-17 | 9z              | L   | 0.313      | -            | -                | -                | -         |    -1.86 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3261 | 2024-01-16 | Legacy          | W   | 0.308      | -            | -                | -                | -         |     4.13 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3275 | 2024-01-16 | Case            | W   | 0.307      | -            | -                | -                | -         |     1.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3282 | 2024-01-16 | adalYamigos     | W   | 0.306      | -            | -                | -                | -         |     1.22 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3321 | 2024-01-15 | AJF             | W   | 0.301      | -            | -                | -                | -         |     0.52 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3349 | 2024-01-14 | paiN            | L   | 0.293      | -            | -                | -                | -         |    -0.26 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3354 | 2024-01-14 | Legacy          | W   | 0.293      | -            | -                | -                | -         |     3.87 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     3374 | 2024-01-13 | E-Xolos LAZER   | W   | 0.287      | -            | -                | -                | -         |     0.29 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     3878 | 2023-12-05 | SAW             | L   | 0.024      | -            | -                | -                | -         |    -0.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     3881 | 2023-12-04 | Sprout          | W   | 0.019      | -            | -                | -                | -         |     0.06 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     3917 | 2023-12-02 | Legacy          | W   | 0.006      | -            | -                | -                | -         |     0.08 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,117.58)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-19 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-18 |      0.720 | $3,500.00      | $2,518.42       |
| 2024-03-14 |      0.693 | $15,000.00     | $10,401.45      |
| 2023-12-07 |      0.040 | $5,000.00      | $197.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
