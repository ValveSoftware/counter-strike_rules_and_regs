### Roster Details<br />
Team Name: RED Canids<br />
Roster: dav1deuS, hardzao, nython, righi, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1057.0<br />
<br />
Final Rank Value (1057.0) = Starting Rank Value (1005.1) + Head To Head Adjustments (51.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.510[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.313<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1005.1
- 400 + ( ( 0.313 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1005.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           78 |      169 | 2024-04-17 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -3.27 | dav1deuS, hardzao, nython, righi, venomzera   |
|           77 |      177 | 2024-04-17 | O PLANO         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.62 | dav1deuS, hardzao, nython, righi, venomzera   |
|           76 |      211 | 2024-04-16 | LaChampionsLiga | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.77 | dav1deuS, hardzao, nython, righi, venomzera   |
|           75 |      260 | 2024-04-13 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -2.13 | dav1deuS, hardzao, nython, righi, venomzera   |
|           74 |      279 | 2024-04-12 | W7M             | W   | 1.000      | 0.435        | -                | 0.490 (0.213)    | 0 (0.000) |     6.17 | dav1deuS, hardzao, nython, righi, venomzera   |
|           73 |      334 | 2024-04-10 | 2GAME           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.05 | dav1deuS, hardzao, nython, righi, venomzera   |
|           72 |      338 | 2024-04-10 | 2GAME           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.15 | dav1deuS, hardzao, nython, righi, venomzera   |
|           71 |      341 | 2024-04-10 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -1.66 | dav1deuS, hardzao, nython, righi, venomzera   |
|           70 |      388 | 2024-04-09 | W7M             | W   | 1.000      | 0.450        | -                | 0.490 (0.220)    | 0 (0.000) |     6.67 | dav1deuS, hardzao, nython, righi, venomzera   |
|           69 |      393 | 2024-04-09 | W7M             | W   | 1.000      | 0.450        | -                | 0.490 (0.220)    | 0 (0.000) |     7.09 | dav1deuS, hardzao, nython, righi, venomzera   |
|           68 |      394 | 2024-04-09 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -4.37 | dav1deuS, hardzao, nython, righi, venomzera   |
|           67 |      427 | 2024-04-08 | BESTIA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.55 | dav1deuS, hardzao, nython, righi, venomzera   |
|           66 |      435 | 2024-04-08 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.89 | dav1deuS, hardzao, nython, righi, venomzera   |
|           65 |      463 | 2024-04-07 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -1.44 | dav1deuS, hardzao, nython, righi, venomzera   |
|           64 |      482 | 2024-04-06 | W7M             | L   | 1.000      | -            | -                | -                | -         |   -24.82 | dav1deuS, hardzao, nython, righi, venomzera   |
|           63 |      523 | 2024-04-04 | Case            | L   | 1.000      | -            | -                | -                | -         |   -25.19 | dav1deuS, hardzao, nython, righi, venomzera   |
|           62 |      526 | 2024-04-04 | Case            | W   | 1.000      | 0.450        | 0.034 (0.015)    | 0.767 (0.345)    | -         |     5.80 | dav1deuS, hardzao, nython, righi, venomzera   |
|           61 |      540 | 2024-04-04 | Fluxo           | W   | 1.000      | 0.143        | 0.147 (0.021)    | -                | -         |    14.49 | dav1deuS, hardzao, nython, righi, venomzera   |
|           60 |      563 | 2024-04-03 | ODDIK           | W   | 1.000      | 0.450        | 0.017 (0.007)    | 0.552 (0.248)    | -         |     8.83 | dav1deuS, hardzao, nython, righi, venomzera   |
|           59 |      566 | 2024-04-03 | ODDIK           | W   | 1.000      | 0.450        | 0.017 (0.007)    | 0.552 (0.248)    | -         |     9.50 | dav1deuS, hardzao, nython, righi, venomzera   |
|           58 |      851 | 2024-03-18 | ODDIK           | W   | 0.967      | -            | -                | -                | -         |    10.12 | dav1deuS, destiny, hardzao, nython, venomzera |
|           57 |      894 | 2024-03-16 | ODDIK           | W   | 0.954      | -            | -                | -                | -         |    10.33 | dav1deuS, destiny, hardzao, nython, venomzera |
|           56 |      911 | 2024-03-15 | Case            | W   | 0.948      | 0.303        | 0.034 (0.010)    | 0.767 (0.220)    | -         |     7.65 | dav1deuS, destiny, hardzao, nython, venomzera |
|           55 |      944 | 2024-03-14 | Solid           | L   | 0.941      | -            | -                | -                | -         |   -20.55 | dav1deuS, destiny, hardzao, nython, venomzera |
|           54 |      952 | 2024-03-14 | Flamengo        | W   | 0.939      | -            | -                | -                | -         |     1.63 | dav1deuS, destiny, hardzao, nython, venomzera |
|           53 |      970 | 2024-03-13 | Case            | W   | 0.934      | 0.435        | 0.034 (0.014)    | 0.767 (0.311)    | -         |     7.25 | dav1deuS, destiny, hardzao, nython, venomzera |
|           52 |      983 | 2024-03-13 | Galorys         | W   | 0.933      | -            | -                | -                | -         |     5.90 | dav1deuS, destiny, hardzao, nython, venomzera |
|           51 |     1014 | 2024-03-12 | BESTIA          | W   | 0.927      | 0.435        | 0.029 (0.012)    | -                | -         |     8.68 | dav1deuS, destiny, hardzao, nython, venomzera |
|           50 |     1032 | 2024-03-11 | Corinthians     | W   | 0.920      | -            | -                | -                | -         |     2.76 | dav1deuS, destiny, hardzao, nython, venomzera |
|           49 |     1068 | 2024-03-09 | W7M             | W   | 0.908      | 0.435        | -                | 0.490 (0.193)    | -         |     8.16 | dav1deuS, destiny, hardzao, nython, venomzera |
|           48 |     1115 | 2024-03-07 | VELOX           | W   | 0.895      | -            | -                | -                | -         |     3.05 | dav1deuS, destiny, hardzao, nython, venomzera |
|           47 |     1232 | 2024-03-03 | ODDIK           | L   | 0.867      | -            | -                | -                | -         |   -16.88 | dav1deuS, destiny, hardzao, nython, venomzera |
|           46 |     1266 | 2024-03-02 | paiN            | L   | 0.859      | -            | -                | -                | -         |    -0.81 | dav1deuS, destiny, hardzao, nython, venomzera |
|           45 |     1281 | 2024-03-01 | Wildcard        | W   | 0.854      | -            | -                | -                | 1 (0.854) |     8.87 | dav1deuS, destiny, hardzao, nython, venomzera |
|           44 |     1681 | 2024-02-13 | Imperial        | L   | 0.742      | -            | -                | -                | -         |    -0.56 | dav1deuS, destiny, hardzao, nython, venomzera |
|           43 |     1685 | 2024-02-13 | Imperial        | W   | 0.741      | 0.450        | 0.569 (0.190)    | 1.000 (0.334)    | -         |    22.88 | dav1deuS, destiny, hardzao, nython, venomzera |
|           42 |     1870 | 2024-02-01 | W7M             | L   | 0.662      | -            | -                | -                | -         |   -14.34 | dav1deuS, destiny, hardzao, nython, venomzera |
|           41 |     1873 | 2024-02-01 | paiN            | L   | 0.661      | -            | -                | -                | -         |    -0.47 | dav1deuS, destiny, hardzao, nython, venomzera |
|           40 |     2046 | 2024-01-22 | W7M             | L   | 0.595      | -            | -                | -                | -         |   -13.50 | dav1deuS, destiny, hardzao, nython, venomzera |
|           39 |     2071 | 2024-01-21 | 9z              | W   | 0.590      | -            | -                | -                | -         |     7.77 | dav1deuS, destiny, hardzao, nython, venomzera |
|           38 |     2072 | 2024-01-21 | Flamengo        | W   | 0.589      | -            | -                | -                | -         |     1.84 | dav1deuS, destiny, hardzao, nython, venomzera |
|           37 |     2076 | 2024-01-21 | ODDIK           | L   | 0.588      | -            | -                | -                | -         |   -11.27 | dav1deuS, destiny, hardzao, nython, venomzera |
|           36 |     2109 | 2024-01-20 | Legacy          | L   | 0.581      | -            | -                | -                | -         |    -7.94 | dav1deuS, destiny, hardzao, nython, venomzera |
|           35 |     2161 | 2024-01-19 | Fluxo           | W   | 0.575      | 0.143        | 0.147 (0.012)    | -                | -         |     9.84 | dav1deuS, destiny, hardzao, nython, venomzera |
|           34 |     2175 | 2024-01-19 | Case            | W   | 0.573      | -            | -                | -                | -         |     5.46 | dav1deuS, destiny, hardzao, nython, venomzera |
|           33 |     2268 | 2024-01-17 | Sharks          | L   | 0.562      | -            | -                | -                | -         |   -10.78 | dav1deuS, destiny, hardzao, nython, venomzera |
|           32 |     2282 | 2024-01-17 | 9z              | L   | 0.561      | -            | -                | -                | -         |   -11.71 | dav1deuS, destiny, hardzao, nython, venomzera |
|           31 |     2314 | 2024-01-16 | Legacy          | W   | 0.555      | -            | -                | -                | -         |     9.35 | dav1deuS, destiny, hardzao, nython, venomzera |
|           30 |     2328 | 2024-01-16 | Case            | W   | 0.554      | -            | -                | -                | -         |     5.23 | dav1deuS, destiny, hardzao, nython, venomzera |
|           29 |     2335 | 2024-01-16 | adalYamigos     | W   | 0.554      | -            | -                | -                | -         |     2.99 | dav1deuS, destiny, hardzao, nython, venomzera |
|           28 |     2374 | 2024-01-15 | AJF             | W   | 0.548      | -            | -                | -                | -         |     1.90 | dav1deuS, destiny, hardzao, nython, venomzera |
|           27 |     2402 | 2024-01-14 | paiN            | L   | 0.541      | -            | -                | -                | -         |    -0.27 | dav1deuS, destiny, hardzao, nython, venomzera |
|           26 |     2407 | 2024-01-14 | Legacy          | W   | 0.541      | -            | -                | -                | -         |     9.16 | dav1deuS, destiny, hardzao, nython, venomzera |
|           25 |     2427 | 2024-01-13 | E-Xolos LAZER   | W   | 0.535      | -            | -                | -                | -         |     0.56 | dav1deuS, destiny, hardzao, nython, venomzera |
|           24 |     2931 | 2023-12-05 | SAW             | L   | 0.271      | -            | -                | -                | -         |    -1.69 | dav1deuS, destiny, hardzao, nython, venomzera |
|           23 |     2934 | 2023-12-04 | Sprout          | W   | 0.266      | -            | -                | -                | -         |     1.64 | dav1deuS, destiny, hardzao, nython, venomzera |
|           22 |     2970 | 2023-12-02 | Legacy          | W   | 0.253      | 0.589        | 0.055 (0.008)    | -                | -         |     4.52 | dav1deuS, destiny, hardzao, nython, venomzera |
|           21 |     3008 | 2023-11-30 | Into the Breach | L   | 0.239      | -            | -                | -                | -         |    -5.51 | dav1deuS, destiny, hardzao, nython, venomzera |
|           20 |     3092 | 2023-11-24 | Case            | L   | 0.199      | -            | -                | -                | -         |    -4.29 | dav1deuS, destiny, hardzao, nython, venomzera |
|           19 |     3105 | 2023-11-23 | 9z              | L   | 0.194      | -            | -                | -                | -         |    -3.91 | dav1deuS, destiny, hardzao, nython, venomzera |
|           18 |     3149 | 2023-11-20 | Sharks          | W   | 0.173      | -            | -                | -                | -         |     1.98 | dav1deuS, destiny, hardzao, nython, venomzera |
|           17 |     3166 | 2023-11-19 | W7M             | W   | 0.167      | -            | -                | -                | -         |     1.48 | dav1deuS, destiny, hardzao, nython, venomzera |
|           16 |     3193 | 2023-11-18 | Flamengo        | W   | 0.160      | -            | -                | -                | -         |     0.35 | dav1deuS, destiny, hardzao, nython, venomzera |
|           15 |     3223 | 2023-11-17 | W7M             | L   | 0.154      | -            | -                | -                | -         |    -3.49 | dav1deuS, destiny, hardzao, nython, venomzera |
|           14 |     3324 | 2023-11-14 | Flamengo        | W   | 0.134      | -            | -                | -                | -         |     0.28 | dav1deuS, destiny, hardzao, nython, venomzera |
|           13 |     3361 | 2023-11-12 | Case            | W   | 0.120      | -            | -                | -                | -         |     1.23 | dav1deuS, destiny, hardzao, nython, venomzera |
|           12 |     3530 | 2023-11-04 | BESTIA          | W   | 0.068      | -            | -                | -                | -         |     0.59 | dav1deuS, destiny, hardzao, nython, venomzera |
|           11 |     3544 | 2023-11-04 | paiN            | L   | 0.066      | -            | -                | -                | -         |    -0.03 | dav1deuS, destiny, hardzao, nython, venomzera |
|           10 |     3574 | 2023-11-02 | Fluxo           | W   | 0.055      | -            | -                | -                | -         |     0.97 | dav1deuS, destiny, hardzao, nython, venomzera |
|            9 |     3597 | 2023-11-01 | BESTIA          | W   | 0.048      | -            | -                | -                | -         |     0.41 | dav1deuS, destiny, hardzao, nython, venomzera |
|            8 |     3636 | 2023-10-31 | Sharks          | W   | 0.040      | -            | -                | -                | -         |     0.45 | dav1deuS, destiny, hardzao, nython, venomzera |
|            7 |     3699 | 2023-10-29 | W7M             | W   | 0.027      | -            | -                | -                | -         |     0.24 | dav1deuS, destiny, hardzao, nython, venomzera |
|            6 |     3737 | 2023-10-28 | Solid           | W   | 0.021      | -            | -                | -                | -         |     0.27 | dav1deuS, destiny, hardzao, nython, venomzera |
|            5 |     3747 | 2023-10-28 | Case            | W   | 0.020      | -            | -                | -                | -         |     0.20 | dav1deuS, destiny, hardzao, nython, venomzera |
|            4 |     3777 | 2023-10-27 | ODDIK           | W   | 0.014      | -            | -                | -                | -         |     0.17 | dav1deuS, destiny, hardzao, nython, venomzera |
|            3 |     3781 | 2023-10-27 | paiN            | L   | 0.013      | -            | -                | -                | -         |    -0.01 | dav1deuS, destiny, hardzao, nython, venomzera |
|            2 |     3819 | 2023-10-26 | W7M             | W   | 0.005      | -            | -                | -                | -         |     0.05 | destiny, hardzao, nython, righi, venomzera    |
|            1 |     3844 | 2023-10-25 | MIBR Academy    | W   | 0.000      | -            | -                | -                | -         |     0.00 | destiny, hardzao, nython, righi, venomzera    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,905.43)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-18 |      0.967 | $3,500.00      | $3,384.32       |
| 2024-03-14 |      0.941 | $15,000.00     | $14,112.43      |
| 2023-12-07 |      0.287 | $5,000.00      | $1,434.70       |
| 2023-11-20 |      0.173 | $3,500.00      | $606.71         |
| 2023-11-04 |      0.068 | $18,000.00     | $1,232.42       |
| 2023-11-04 |      0.067 | $2,000.00      | $134.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
