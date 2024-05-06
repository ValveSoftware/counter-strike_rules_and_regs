### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, hardzao, nython, venomzera<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1057.9<br />
<br />
Final Rank Value (1057.9) = Starting Rank Value (974.2) + Head To Head Adjustments (83.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.505[<sup>1</sup>](#table2)
- Bounty Collected: 0.394[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.301<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 974.2
- 400 + ( ( 0.301 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 974.2


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
|           69 |        6 | 2024-05-06 | Intense         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.76 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |      236 | 2024-04-25 | BESTIA          | W   | 1.000      | 0.450        | 0.025 (0.011)    | 0.389 (0.175)    | 0 (0.000) |     5.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |      238 | 2024-04-25 | BESTIA          | W   | 1.000      | 0.450        | 0.025 (0.011)    | 0.389 (0.175)    | 0 (0.000) |     5.97 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |      465 | 2024-04-17 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -1.26 | dav1deuS, hardzao, nython, righi, venomzera    |
|           65 |      473 | 2024-04-17 | O PLANO         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.71 | dav1deuS, hardzao, nython, righi, venomzera    |
|           64 |      507 | 2024-04-16 | LaChampionsLiga | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.83 | dav1deuS, hardzao, nython, righi, venomzera    |
|           63 |      556 | 2024-04-13 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -1.68 | dav1deuS, hardzao, nython, righi, venomzera    |
|           62 |      575 | 2024-04-12 | W7M             | W   | 1.000      | 0.435        | -                | 0.476 (0.207)    | 0 (0.000) |     6.18 | dav1deuS, hardzao, nython, righi, venomzera    |
|           61 |      630 | 2024-04-10 | 2GAME           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.98 | dav1deuS, hardzao, nython, righi, venomzera    |
|           60 |      634 | 2024-04-10 | 2GAME           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.08 | dav1deuS, hardzao, nython, righi, venomzera    |
|           59 |      637 | 2024-04-10 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -1.12 | dav1deuS, hardzao, nython, righi, venomzera    |
|           58 |      684 | 2024-04-09 | W7M             | W   | 1.000      | 0.450        | -                | 0.476 (0.214)    | 0 (0.000) |     6.69 | dav1deuS, hardzao, nython, righi, venomzera    |
|           57 |      689 | 2024-04-09 | W7M             | W   | 1.000      | 0.450        | -                | 0.476 (0.214)    | -         |     7.10 | dav1deuS, hardzao, nython, righi, venomzera    |
|           56 |      690 | 2024-04-09 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -1.47 | dav1deuS, hardzao, nython, righi, venomzera    |
|           55 |      723 | 2024-04-08 | BESTIA          | W   | 1.000      | -            | -                | -                | -         |     8.46 | dav1deuS, hardzao, nython, righi, venomzera    |
|           54 |      731 | 2024-04-08 | Bounty Hunters  | W   | 1.000      | -            | -                | -                | -         |     0.98 | dav1deuS, hardzao, nython, righi, venomzera    |
|           53 |      759 | 2024-04-07 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -1.15 | dav1deuS, hardzao, nython, righi, venomzera    |
|           52 |      778 | 2024-04-06 | W7M             | L   | 1.000      | -            | -                | -                | -         |   -24.73 | dav1deuS, hardzao, nython, righi, venomzera    |
|           51 |      819 | 2024-04-04 | Case            | L   | 0.988      | -            | -                | -                | -         |   -24.62 | dav1deuS, hardzao, nython, righi, venomzera    |
|           50 |      822 | 2024-04-04 | Case            | W   | 0.988      | 0.450        | 0.026 (0.012)    | 0.578 (0.257)    | -         |     6.01 | dav1deuS, hardzao, nython, righi, venomzera    |
|           49 |      836 | 2024-04-04 | Fluxo           | W   | 0.986      | 0.143        | 0.148 (0.021)    | -                | -         |    15.12 | dav1deuS, hardzao, nython, righi, venomzera    |
|           48 |      859 | 2024-04-03 | ODDIK           | W   | 0.981      | 0.450        | 0.015 (0.006)    | 0.547 (0.242)    | -         |    10.22 | dav1deuS, hardzao, nython, righi, venomzera    |
|           47 |      862 | 2024-04-03 | ODDIK           | W   | 0.981      | 0.450        | -                | 0.547 (0.242)    | -         |    11.05 | dav1deuS, hardzao, nython, righi, venomzera    |
|           46 |     1147 | 2024-03-18 | ODDIK           | W   | 0.874      | -            | -                | -                | -         |    10.73 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           45 |     1190 | 2024-03-16 | ODDIK           | W   | 0.861      | -            | -                | -                | -         |    11.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           44 |     1207 | 2024-03-15 | Case            | W   | 0.854      | 0.303        | 0.026 (0.007)    | -                | -         |     7.22 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           43 |     1240 | 2024-03-14 | Solid           | L   | 0.848      | -            | -                | -                | -         |   -18.20 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           42 |     1248 | 2024-03-14 | Flamengo        | W   | 0.846      | -            | -                | -                | -         |     1.65 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           41 |     1266 | 2024-03-13 | Case            | W   | 0.841      | 0.435        | 0.026 (0.010)    | 0.578 (0.211)    | -         |     6.89 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           40 |     1279 | 2024-03-13 | Galorys         | W   | 0.840      | -            | -                | -                | -         |     5.84 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           39 |     1310 | 2024-03-12 | BESTIA          | W   | 0.833      | 0.435        | 0.025 (0.009)    | -                | -         |     7.88 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           38 |     1328 | 2024-03-11 | Corinthians     | W   | 0.827      | -            | -                | -                | -         |     2.75 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           37 |     1364 | 2024-03-09 | W7M             | W   | 0.815      | -            | -                | -                | -         |     7.47 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           36 |     1411 | 2024-03-07 | VELOX           | W   | 0.801      | -            | -                | -                | -         |     2.83 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           35 |     1528 | 2024-03-03 | ODDIK           | L   | 0.774      | -            | -                | -                | -         |   -13.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           34 |     1562 | 2024-03-02 | paiN            | L   | 0.766      | -            | -                | -                | -         |    -0.49 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           33 |     1577 | 2024-03-01 | Wildcard        | W   | 0.760      | -            | -                | -                | 1 (0.760) |     9.57 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           32 |     1977 | 2024-02-13 | Imperial        | L   | 0.648      | -            | -                | -                | -         |    -0.43 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           31 |     1981 | 2024-02-13 | Imperial        | W   | 0.648      | 0.450        | 0.656 (0.191)    | 0.965 (0.281)    | -         |    20.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           30 |     2166 | 2024-02-01 | W7M             | L   | 0.568      | -            | -                | -                | -         |   -12.31 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           29 |     2169 | 2024-02-01 | paiN            | L   | 0.568      | -            | -                | -                | -         |    -0.28 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           28 |     2342 | 2024-01-22 | W7M             | L   | 0.501      | -            | -                | -                | -         |   -11.30 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           27 |     2367 | 2024-01-21 | 9z              | W   | 0.496      | -            | -                | -                | -         |     7.42 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           26 |     2368 | 2024-01-21 | Flamengo        | W   | 0.495      | -            | -                | -                | -         |     1.53 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           25 |     2372 | 2024-01-21 | ODDIK           | L   | 0.494      | -            | -                | -                | -         |    -8.10 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           24 |     2405 | 2024-01-20 | Legacy          | L   | 0.488      | -            | -                | -                | -         |    -6.32 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           23 |     2457 | 2024-01-19 | Fluxo           | W   | 0.481      | 0.143        | 0.148 (0.010)    | -                | -         |     8.87 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           22 |     2471 | 2024-01-19 | Case            | W   | 0.480      | -            | -                | -                | -         |     3.09 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           21 |     2564 | 2024-01-17 | Sharks          | L   | 0.468      | -            | -                | -                | -         |    -8.81 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           20 |     2578 | 2024-01-17 | 9z              | L   | 0.467      | -            | -                | -                | -         |    -8.74 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           19 |     2610 | 2024-01-16 | Legacy          | W   | 0.462      | -            | -                | -                | -         |     8.23 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           18 |     2624 | 2024-01-16 | Case            | W   | 0.461      | -            | -                | -                | -         |     2.92 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           17 |     2631 | 2024-01-16 | adalYamigos     | W   | 0.461      | -            | -                | -                | -         |     2.42 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           16 |     2670 | 2024-01-15 | AJF             | W   | 0.455      | -            | -                | -                | -         |     1.72 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           15 |     2698 | 2024-01-14 | paiN            | L   | 0.448      | -            | -                | -                | -         |    -0.16 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           14 |     2703 | 2024-01-14 | Legacy          | W   | 0.447      | -            | -                | -                | -         |     7.99 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     2723 | 2024-01-13 | E-Xolos LAZER   | W   | 0.441      | -            | -                | -                | -         |     0.55 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3227 | 2023-12-05 | SAW             | L   | 0.178      | -            | -                | -                | -         |    -0.39 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3230 | 2023-12-04 | Sprout          | W   | 0.173      | -            | -                | -                | -         |     1.08 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3266 | 2023-12-02 | Legacy          | W   | 0.160      | -            | -                | -                | -         |     2.97 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3304 | 2023-11-30 | Into the Breach | L   | 0.145      | -            | -                | -                | -         |    -3.38 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3388 | 2023-11-24 | Case            | L   | 0.106      | -            | -                | -                | -         |    -2.70 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3401 | 2023-11-23 | 9z              | L   | 0.100      | -            | -                | -                | -         |    -1.80 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3445 | 2023-11-20 | Sharks          | W   | 0.080      | -            | -                | -                | -         |     0.96 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     3462 | 2023-11-19 | W7M             | W   | 0.073      | -            | -                | -                | -         |     0.69 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     3489 | 2023-11-18 | Flamengo        | W   | 0.067      | -            | -                | -                | -         |     0.16 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     3519 | 2023-11-17 | W7M             | L   | 0.060      | -            | -                | -                | -         |    -1.34 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     3620 | 2023-11-14 | Flamengo        | W   | 0.041      | -            | -                | -                | -         |     0.09 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     3657 | 2023-11-12 | Case            | W   | 0.027      | -            | -                | -                | -         |     0.16 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,018.89)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-18 |      0.874 | $3,500.00      | $3,057.74       |
| 2024-03-14 |      0.848 | $15,000.00     | $12,712.84      |
| 2023-12-07 |      0.194 | $5,000.00      | $968.17         |
| 2023-11-20 |      0.080 | $3,500.00      | $280.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
