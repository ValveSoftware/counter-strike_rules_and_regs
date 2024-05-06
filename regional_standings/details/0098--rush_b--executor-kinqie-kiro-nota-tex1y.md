### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  815.6<br />
<br />
Final Rank Value (815.6) = Starting Rank Value (759.2) + Head To Head Adjustments (56.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.2
- 400 + ( ( 0.189 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 759.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       16 | 2024-05-05 | Sampi        | L   | 1.000      | -            | -                | -                | -         |    -9.02 | executor, kinqie, Kiro, nota, tex1y |
|           24 |       41 | 2024-05-04 | HAVU         | W   | 1.000      | 0.435        | 0.023 (0.010)    | 0.214 (0.093)    | 0 (0.000) |    13.06 | executor, kinqie, Kiro, nota, tex1y |
|           23 |       85 | 2024-05-02 | EYEBALLERS   | L   | 1.000      | -            | -                | -                | -         |   -11.97 | executor, kinqie, Kiro, nota, tex1y |
|           22 |      142 | 2024-04-29 | ENCE Academy | W   | 1.000      | 0.435        | 0.027 (0.012)    | 0.374 (0.163)    | 0 (0.000) |    16.56 | executor, kinqie, Kiro, nota, tex1y |
|           21 |      644 | 2024-04-10 | KOI          | L   | 1.000      | -            | -                | -                | -         |    -5.55 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      697 | 2024-04-09 | PARIVISION   | W   | 1.000      | 0.500        | 0.003 (0.002)    | 0.544 (0.272)    | 0 (0.000) |    21.82 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      933 | 2024-04-01 | PERA         | L   | 0.966      | -            | -                | -                | -         |   -11.02 | executor, kinqie, Kiro, nota, tex1y |
|           18 |      942 | 2024-03-31 | Monte        | W   | 0.959      | 0.500        | 0.188 (0.090)    | 0.589 (0.283)    | 0 (0.000) |    28.63 | executor, kinqie, Kiro, nota, tex1y |
|           17 |      955 | 2024-03-29 | System5      | W   | 0.947      | 0.500        | -                | 0.077 (0.036)    | 0 (0.000) |     6.87 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1274 | 2024-03-13 | Betera       | W   | 0.840      | 0.500        | 0.004 (0.002)    | 0.199 (0.084)    | 0 (0.000) |    12.09 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1538 | 2024-03-03 | Metizport    | L   | 0.773      | -            | -                | -                | -         |    -4.29 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1647 | 2024-02-26 | SAW          | L   | 0.734      | -            | -                | -                | -         |    -0.62 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     2222 | 2024-01-30 | Sashi        | L   | 0.553      | -            | -                | -                | -         |    -3.10 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     2827 | 2024-01-11 | ILIN         | L   | 0.425      | -            | -                | -                | -         |   -10.93 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2829 | 2024-01-10 | QuackQuack   | W   | 0.421      | -            | -                | -                | 0 (0.000) |     1.47 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     3005 | 2023-12-16 | TSM          | W   | 0.254      | 0.143        | 0.008 (0.000)    | -                | 0 (0.000) |     3.31 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     3037 | 2023-12-15 | IKLA         | W   | 0.247      | 0.143        | -                | 0.151 (0.005)    | 0 (0.000) |     1.93 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     3053 | 2023-12-13 | BIG Academy  | L   | 0.233      | -            | -                | -                | -         |    -4.41 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     3073 | 2023-12-11 | TSM          | W   | 0.220      | 0.372        | 0.008 (0.001)    | 0.074 (0.006)    | 0 (0.000) |     2.88 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     3086 | 2023-12-10 | lajtbitexe   | W   | 0.212      | 0.372        | 0.003 (0.000)    | -                | -         |     2.53 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     3109 | 2023-12-09 | Endpoint     | W   | 0.207      | 0.372        | 0.020 (0.002)    | 0.694 (0.053)    | -         |     4.42 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3124 | 2023-12-08 | Lausanne SE  | W   | 0.201      | -            | -                | -                | -         |     2.04 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3146 | 2023-12-07 | LT5          | W   | 0.194      | -            | -                | -                | -         |     0.73 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     3174 | 2023-12-06 | lajtbitexe   | L   | 0.187      | -            | -                | -                | -         |    -3.68 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     3215 | 2023-12-05 | The Witchers | W   | 0.180      | 0.372        | 0.033 (0.002)    | 0.114 (0.008)    | -         |     2.69 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,001.75)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
