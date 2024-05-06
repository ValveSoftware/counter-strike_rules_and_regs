### Roster Details<br />
Team Name: Case<br />
Roster: nyezin, RCF, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  830.3<br />
<br />
Final Rank Value (830.3) = Starting Rank Value (846.9) + Head To Head Adjustments (-16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 846.9
- 400 + ( ( 0.235 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 846.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |       11 | 2024-05-05 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -11.30 | nyezin, RCF, RICIOLI, urban0, yepz |
|           52 |       70 | 2024-05-02 | ODDIK         | W   | 1.000      | 0.450        | 0.015 (0.007)    | 0.547 (0.246)    | 0 (0.000) |    20.59 | nyezin, RCF, RICIOLI, urban0, yepz |
|           51 |       71 | 2024-05-02 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -10.52 | nyezin, RCF, RICIOLI, urban0, yepz |
|           50 |       95 | 2024-05-01 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -6.88 | nyezin, RCF, RICIOLI, urban0, yepz |
|           49 |       97 | 2024-05-01 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -7.31 | nyezin, RCF, RICIOLI, urban0, yepz |
|           48 |      471 | 2024-04-17 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -0.42 | RCF, RICIOLI, snow, urban0, yepz   |
|           47 |      508 | 2024-04-16 | Galorys       | W   | 1.000      | 0.143        | 0.047 (0.007)    | -                | 0 (0.000) |    16.80 | RCF, RICIOLI, snow, urban0, yepz   |
|           46 |      559 | 2024-04-13 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -0.42 | pr1sma, RCF, RICIOLI, urban0, yepz |
|           45 |      572 | 2024-04-12 | adalYamigos   | W   | 1.000      | 0.435        | -                | 0.373 (0.162)    | 0 (0.000) |    14.44 | RCF, RICIOLI, snow, urban0, yepz   |
|           44 |      607 | 2024-04-11 | FURIA Academy | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.10 | RCF, RICIOLI, snow, urban0, yepz   |
|           43 |      680 | 2024-04-09 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.33 | RCF, RICIOLI, snow, urban0, yepz   |
|           42 |      686 | 2024-04-09 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.33 | RCF, RICIOLI, snow, urban0, yepz   |
|           41 |      757 | 2024-04-07 | adalYamigos   | L   | 1.000      | -            | -                | -                | -         |   -16.87 | RCF, RICIOLI, snow, urban0, yepz   |
|           40 |      819 | 2024-04-04 | RED Canids    | W   | 0.988      | 0.450        | 0.105 (0.047)    | 0.808 (0.359)    | 0 (0.000) |    24.62 | RCF, RICIOLI, snow, urban0, yepz   |
|           39 |      822 | 2024-04-04 | RED Canids    | L   | 0.988      | -            | -                | -                | -         |    -6.01 | RCF, RICIOLI, snow, urban0, yepz   |
|           38 |      858 | 2024-04-03 | Imperial      | L   | 0.981      | -            | -                | -                | -         |    -0.37 | RCF, RICIOLI, snow, urban0, yepz   |
|           37 |      861 | 2024-04-03 | Imperial      | L   | 0.981      | -            | -                | -                | -         |    -0.37 | RCF, RICIOLI, snow, urban0, yepz   |
|           36 |      992 | 2024-03-27 | MIBR          | L   | 0.935      | -            | -                | -                | -         |    -0.43 | RCF, RICIOLI, snow, urban0, yepz   |
|           35 |      998 | 2024-03-27 | MIBR          | L   | 0.934      | -            | -                | -                | -         |    -0.43 | RCF, RICIOLI, snow, urban0, yepz   |
|           34 |     1168 | 2024-03-17 | ODDIK         | L   | 0.867      | -            | -                | -                | -         |    -9.24 | RCF, RICIOLI, snow, urban0, yepz   |
|           33 |     1192 | 2024-03-16 | MIBR Academy  | W   | 0.860      | -            | -                | -                | 0 (0.000) |     6.88 | RCF, RICIOLI, snow, urban0, yepz   |
|           32 |     1207 | 2024-03-15 | RED Canids    | L   | 0.854      | -            | -                | -                | -         |    -7.22 | RCF, RICIOLI, snow, urban0, yepz   |
|           31 |     1247 | 2024-03-14 | FURIA Academy | W   | 0.847      | -            | -                | -                | 0 (0.000) |     5.21 | RCF, RICIOLI, snow, urban0, yepz   |
|           30 |     1266 | 2024-03-13 | RED Canids    | L   | 0.841      | -            | -                | -                | -         |    -6.89 | RCF, RICIOLI, snow, urban0, yepz   |
|           29 |     1276 | 2024-03-13 | Yawara        | L   | 0.840      | -            | -                | -                | -         |   -22.67 | RCF, RICIOLI, snow, urban0, yepz   |
|           28 |     1280 | 2024-03-13 | ODDIK         | L   | 0.840      | -            | -                | -                | -         |   -10.08 | RCF, RICIOLI, snow, urban0, yepz   |
|           27 |     1316 | 2024-03-12 | LA RUGONETA   | W   | 0.832      | -            | -                | -                | 0 (0.000) |     5.15 | RCF, RICIOLI, snow, urban0, yepz   |
|           26 |     1345 | 2024-03-10 | FURIA Academy | W   | 0.821      | -            | -                | -                | 0 (0.000) |     4.15 | RCF, RICIOLI, snow, urban0, yepz   |
|           25 |     1365 | 2024-03-09 | Sharks        | W   | 0.814      | 0.435        | 0.060 (0.021)    | 0.453 (0.160)    | 0 (0.000) |    16.95 | RCF, RICIOLI, snow, urban0, yepz   |
|           24 |     1415 | 2024-03-07 | Fluxo         | W   | 0.801      | 0.435        | 0.148 (0.051)    | 0.569 (0.198)    | -         |    19.86 | RCF, RICIOLI, snow, urban0, yepz   |
|           23 |     1477 | 2024-03-05 | adalYamigos   | L   | 0.788      | -            | -                | -                | -         |   -13.71 | RCF, RICIOLI, snow, urban0, yepz   |
|           22 |     1479 | 2024-03-05 | adalYamigos   | L   | 0.788      | -            | -                | -                | -         |   -14.68 | RCF, RICIOLI, snow, urban0, yepz   |
|           21 |     1507 | 2024-03-04 | Fluxo         | L   | 0.782      | -            | -                | -                | -         |    -5.35 | RCF, RICIOLI, snow, urban0, yepz   |
|           20 |     1508 | 2024-03-04 | Fluxo         | L   | 0.781      | -            | -                | -                | -         |    -5.61 | RCF, RICIOLI, snow, urban0, yepz   |
|           19 |     1684 | 2024-02-24 | 2GAME         | W   | 0.721      | -            | -                | -                | -         |     4.88 | RCF, RICIOLI, snow, urban0, yepz   |
|           18 |     1691 | 2024-02-24 | 2GAME         | L   | 0.721      | -            | -                | -                | -         |   -18.26 | RCF, RICIOLI, snow, urban0, yepz   |
|           17 |     1744 | 2024-02-21 | Solid         | W   | 0.702      | 0.450        | 0.132 (0.042)    | 0.503 (0.159)    | -         |    11.47 | RCF, RICIOLI, snow, urban0, yepz   |
|           16 |     1745 | 2024-02-21 | Solid         | L   | 0.702      | -            | -                | -                | -         |   -10.82 | RCF, RICIOLI, snow, urban0, yepz   |
|           15 |     1752 | 2024-02-21 | Sharks        | L   | 0.701      | -            | -                | -                | -         |    -9.26 | RCF, RICIOLI, snow, urban0, yepz   |
|           14 |     1781 | 2024-02-20 | 9z            | L   | 0.694      | -            | -                | -                | -         |    -7.62 | RCF, RICIOLI, snow, urban0, yepz   |
|           13 |     1784 | 2024-02-20 | W7M           | W   | 0.694      | -            | -                | -                | -         |    10.14 | RCF, RICIOLI, snow, urban0, yepz   |
|           12 |     1788 | 2024-02-20 | Sharks        | L   | 0.693      | -            | -                | -                | -         |    -9.28 | RCF, RICIOLI, snow, urban0, yepz   |
|           11 |     1828 | 2024-02-18 | Galorys       | L   | 0.681      | -            | -                | -                | -         |   -12.29 | RCF, RICIOLI, snow, urban0, yepz   |
|           10 |     1849 | 2024-02-17 | Solid         | W   | 0.675      | 0.303        | 0.132 (0.027)    | 0.503 (0.103)    | -         |    10.06 | RCF, RICIOLI, snow, urban0, yepz   |
|            9 |     1873 | 2024-02-16 | BESTIA        | W   | 0.668      | 0.435        | 0.025 (0.007)    | 0.389 (0.113)    | -         |     9.78 | RCF, RICIOLI, snow, urban0, yepz   |
|            8 |     1906 | 2024-02-15 | 9z            | L   | 0.661      | -            | -                | -                | -         |    -6.66 | RCF, RICIOLI, snow, urban0, yepz   |
|            7 |     1907 | 2024-02-15 | Sharks        | W   | 0.661      | 0.143        | 0.060 (0.006)    | -                | -         |    12.28 | RCF, RICIOLI, snow, urban0, yepz   |
|            6 |     1914 | 2024-02-15 | Flamengo      | W   | 0.660      | -            | -                | -                | -         |     2.72 | RCF, RICIOLI, snow, urban0, yepz   |
|            5 |     1935 | 2024-02-14 | O PLANO C     | W   | 0.655      | -            | -                | -                | -         |     1.46 | RCF, RICIOLI, snow, urban0, yepz   |
|            4 |     1978 | 2024-02-13 | W7M           | W   | 0.648      | 0.450        | -                | 0.476 (0.139)    | -         |    10.59 | RCF, RICIOLI, snow, urban0, yepz   |
|            3 |     1982 | 2024-02-13 | W7M           | L   | 0.648      | -            | -                | -                | -         |   -10.01 | RCF, RICIOLI, snow, urban0, yepz   |
|            2 |     1987 | 2024-02-13 | Galorys       | W   | 0.647      | 0.303        | 0.047 (0.009)    | 0.510 (0.100)    | -         |     9.44 | RCF, RICIOLI, snow, urban0, yepz   |
|            1 |     2000 | 2024-02-12 | Dusty Roots   | W   | 0.640      | -            | -                | -                | -         |     1.56 | RCF, RICIOLI, snow, urban0, yepz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,237.61)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
