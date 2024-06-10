### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1167.7<br />
<br />
Final Rank Value (1167.7) = Starting Rank Value (1067.6) + Head To Head Adjustments (100.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.512[<sup>1</sup>](#table2)
- Bounty Collected: 0.475[<sup>2</sup>](#table1)
- Opponent Network: 0.296[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.335<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1067.6
- 400 + ( ( 0.335 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1067.6


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
|           82 |       28 | 2024-06-09 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -22.18 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |       32 | 2024-06-09 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -7.77 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      167 | 2024-06-07 | Intense         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.05 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      207 | 2024-06-06 | Imperial        | W   | 1.000      | 0.450        | 0.415 (0.187)    | 0.799 (0.360)    | 0 (0.000) |    23.73 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      275 | 2024-06-05 | 9z              | W   | 1.000      | 0.450        | 0.194 (0.087)    | 0.724 (0.326)    | 0 (0.000) |    23.13 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      693 | 2024-05-21 | Sharks          | L   | 1.000      | -            | -                | -                | -         |   -22.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      697 | 2024-05-21 | Sharks          | W   | 1.000      | 0.450        | 0.037 (0.016)    | -                | 0 (0.000) |     8.80 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      727 | 2024-05-20 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |   -18.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      729 | 2024-05-20 | Fluxo           | W   | 1.000      | 0.450        | 0.064 (0.029)    | 0.670 (0.302)    | 0 (0.000) |    12.83 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      758 | 2024-05-19 | 9z              | W   | 1.000      | 0.371        | 0.194 (0.072)    | 0.724 (0.268)    | 0 (0.000) |    22.28 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      783 | 2024-05-18 | ODDIK           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |      854 | 2024-05-16 | Fluxo           | W   | 1.000      | 0.371        | 0.064 (0.024)    | 0.670 (0.248)    | 0 (0.000) |    15.42 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |      897 | 2024-05-15 | 9z              | L   | 1.000      | -            | -                | -                | -         |    -7.94 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |      899 | 2024-05-15 | 9z              | W   | 1.000      | 0.450        | 0.194 (0.087)    | 0.724 (0.326)    | 0 (0.000) |    24.11 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |      957 | 2024-05-14 | Corinthians     | W   | 1.000      | -            | -                | -                | -         |     2.06 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |      961 | 2024-05-14 | Corinthians     | W   | 1.000      | -            | -                | -                | -         |     2.10 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |      975 | 2024-05-14 | BESTIA          | W   | 1.000      | 0.371        | -                | 0.631 (0.234)    | -         |     9.00 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |      992 | 2024-05-13 | Sharks          | L   | 1.000      | -            | -                | -                | -         |   -19.95 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1012 | 2024-05-12 | Vikings KR      | W   | 1.000      | -            | -                | -                | -         |     3.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1021 | 2024-05-12 | FURIA Academy   | W   | 1.000      | -            | -                | -                | -         |     1.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1075 | 2024-05-10 | paiN            | L   | 0.993      | -            | -                | -                | -         |    -3.25 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1092 | 2024-05-09 | Intense         | W   | 0.988      | -            | -                | -                | -         |     1.29 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           60 |     1110 | 2024-05-08 | paiN            | L   | 0.981      | -            | -                | -                | -         |    -2.89 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1112 | 2024-05-08 | paiN            | W   | 0.981      | 0.450        | 0.437 (0.193)    | 0.877 (0.387)    | -         |    28.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1113 | 2024-05-08 | Solid           | L   | 0.981      | -            | -                | -                | -         |   -23.86 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     1157 | 2024-05-06 | Intense         | W   | 0.966      | -            | -                | -                | -         |     1.20 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     1387 | 2024-04-25 | BESTIA          | W   | 0.894      | 0.450        | 0.031 (0.013)    | 0.631 (0.254)    | -         |     6.15 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     1389 | 2024-04-25 | BESTIA          | W   | 0.894      | 0.450        | -                | 0.631 (0.254)    | -         |     6.50 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     1616 | 2024-04-17 | MIBR            | L   | 0.841      | -            | -                | -                | -         |    -1.72 | dav1deuS, hardzao, nython, righi, venomzera    |
|           53 |     1624 | 2024-04-17 | O PLANO         | W   | 0.841      | -            | -                | -                | -         |     1.08 | dav1deuS, hardzao, nython, righi, venomzera    |
|           52 |     1658 | 2024-04-16 | LaChampionsLiga | W   | 0.835      | -            | -                | -                | -         |     0.52 | dav1deuS, hardzao, nython, righi, venomzera    |
|           51 |     1707 | 2024-04-13 | Imperial        | L   | 0.815      | -            | -                | -                | -         |    -2.68 | dav1deuS, hardzao, nython, righi, venomzera    |
|           50 |     1726 | 2024-04-12 | W7M             | W   | 0.807      | -            | -                | -                | -         |     4.35 | dav1deuS, hardzao, nython, righi, venomzera    |
|           49 |     1781 | 2024-04-10 | ex-2GAME        | W   | 0.795      | -            | -                | -                | -         |     2.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           48 |     1785 | 2024-04-10 | ex-2GAME        | W   | 0.794      | -            | -                | -                | -         |     2.76 | dav1deuS, hardzao, nython, righi, venomzera    |
|           47 |     1788 | 2024-04-10 | paiN            | L   | 0.794      | -            | -                | -                | -         |    -1.63 | dav1deuS, hardzao, nython, righi, venomzera    |
|           46 |     1835 | 2024-04-09 | W7M             | W   | 0.788      | -            | -                | -                | -         |     4.50 | dav1deuS, hardzao, nython, righi, venomzera    |
|           45 |     1840 | 2024-04-09 | W7M             | W   | 0.788      | -            | -                | -                | -         |     4.70 | dav1deuS, hardzao, nython, righi, venomzera    |
|           44 |     1841 | 2024-04-09 | MIBR            | L   | 0.787      | -            | -                | -                | -         |    -1.85 | dav1deuS, hardzao, nython, righi, venomzera    |
|           43 |     1874 | 2024-04-08 | BESTIA          | W   | 0.781      | -            | -                | -                | -         |     7.59 | dav1deuS, hardzao, nython, righi, venomzera    |
|           42 |     1882 | 2024-04-08 | Bounty Hunters  | W   | 0.780      | -            | -                | -                | -         |     1.89 | dav1deuS, hardzao, nython, righi, venomzera    |
|           41 |     1910 | 2024-04-07 | Imperial        | L   | 0.774      | -            | -                | -                | -         |    -2.01 | dav1deuS, hardzao, nython, righi, venomzera    |
|           40 |     1929 | 2024-04-06 | W7M             | L   | 0.767      | -            | -                | -                | -         |   -19.89 | dav1deuS, hardzao, nython, righi, venomzera    |
|           39 |     1970 | 2024-04-04 | Case            | L   | 0.755      | -            | -                | -                | -         |   -19.25 | dav1deuS, hardzao, nython, righi, venomzera    |
|           38 |     1973 | 2024-04-04 | Case            | W   | 0.754      | -            | -                | -                | -         |     4.34 | dav1deuS, hardzao, nython, righi, venomzera    |
|           37 |     1987 | 2024-04-04 | Fluxo           | W   | 0.753      | -            | -                | -                | -         |     9.50 | dav1deuS, hardzao, nython, righi, venomzera    |
|           36 |     2010 | 2024-04-03 | ODDIK           | W   | 0.748      | -            | -                | -                | -         |     7.13 | dav1deuS, hardzao, nython, righi, venomzera    |
|           35 |     2013 | 2024-04-03 | ODDIK           | W   | 0.748      | -            | -                | -                | -         |     7.55 | dav1deuS, hardzao, nython, righi, venomzera    |
|           34 |     2298 | 2024-03-18 | ODDIK           | W   | 0.640      | -            | -                | -                | -         |     6.89 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           33 |     2341 | 2024-03-16 | ODDIK           | W   | 0.628      | -            | -                | -                | -         |     6.92 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           32 |     2358 | 2024-03-15 | Case            | W   | 0.621      | -            | -                | -                | -         |     4.52 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           31 |     2391 | 2024-03-14 | Solid           | L   | 0.614      | -            | -                | -                | -         |   -14.39 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           30 |     2399 | 2024-03-14 | Flamengo        | W   | 0.613      | -            | -                | -                | -         |     0.78 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           29 |     2417 | 2024-03-13 | Case            | W   | 0.608      | -            | -                | -                | -         |     4.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           28 |     2430 | 2024-03-13 | Galorys         | W   | 0.606      | -            | -                | -                | -         |     3.67 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           27 |     2461 | 2024-03-12 | BESTIA          | W   | 0.600      | -            | -                | -                | -         |     7.21 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           26 |     2479 | 2024-03-11 | Corinthians     | W   | 0.593      | -            | -                | -                | -         |     1.63 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           25 |     2515 | 2024-03-09 | W7M             | W   | 0.582      | -            | -                | -                | -         |     3.83 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           24 |     2562 | 2024-03-07 | VELOX           | W   | 0.568      | -            | -                | -                | -         |     0.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           23 |     2679 | 2024-03-03 | ODDIK           | L   | 0.540      | -            | -                | -                | -         |   -10.76 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           22 |     2713 | 2024-03-02 | paiN            | L   | 0.533      | -            | -                | -                | -         |    -0.93 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     2728 | 2024-03-01 | Wildcard        | W   | 0.527      | -            | -                | -                | 1 (0.527) |     6.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           20 |     3128 | 2024-02-13 | Imperial        | L   | 0.415      | -            | -                | -                | -         |    -0.95 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           19 |     3132 | 2024-02-13 | Imperial        | W   | 0.415      | 0.450        | 0.415 (0.078)    | -                | -         |    12.20 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           18 |     3317 | 2024-02-01 | W7M             | L   | 0.335      | -            | -                | -                | -         |    -8.50 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     3320 | 2024-02-01 | paiN            | L   | 0.334      | -            | -                | -                | -         |    -0.52 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     3493 | 2024-01-22 | W7M             | L   | 0.268      | -            | -                | -                | -         |    -6.91 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     3518 | 2024-01-21 | 9z              | W   | 0.263      | -            | -                | -                | -         |     6.82 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     3519 | 2024-01-21 | Flamengo        | W   | 0.262      | -            | -                | -                | -         |     0.42 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3523 | 2024-01-21 | ODDIK           | L   | 0.261      | -            | -                | -                | -         |    -5.21 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3556 | 2024-01-20 | Legacy          | L   | 0.254      | -            | -                | -                | -         |    -4.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3608 | 2024-01-19 | Fluxo           | W   | 0.248      | -            | -                | -                | -         |     3.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3622 | 2024-01-19 | Case            | W   | 0.247      | -            | -                | -                | -         |     0.71 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3715 | 2024-01-17 | Sharks          | L   | 0.235      | -            | -                | -                | -         |    -4.61 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3729 | 2024-01-17 | 9z              | L   | 0.234      | -            | -                | -                | -         |    -1.37 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3761 | 2024-01-16 | Legacy          | W   | 0.229      | -            | -                | -                | -         |     3.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3775 | 2024-01-16 | Case            | W   | 0.228      | -            | -                | -                | -         |     0.65 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3782 | 2024-01-16 | adalYamigos     | W   | 0.227      | -            | -                | -                | -         |     0.62 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     3821 | 2024-01-15 | AJF             | W   | 0.222      | -            | -                | -                | -         |     0.27 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     3849 | 2024-01-14 | paiN            | L   | 0.214      | -            | -                | -                | -         |    -0.29 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     3854 | 2024-01-14 | Legacy          | W   | 0.214      | -            | -                | -                | -         |     2.87 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     3874 | 2024-01-13 | E-Xolos LAZER   | W   | 0.208      | -            | -                | -                | -         |     0.76 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,955.18)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      1.000 | $11,500.00     | $11,500.00      |
| 2024-05-19 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-18 |      0.640 | $3,500.00      | $2,241.32       |
| 2024-03-14 |      0.614 | $15,000.00     | $9,213.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
