### Roster Details<br />
Team Name: Flamengo<br />
Roster: ALLE, danoco, LUCAS1, realz1n, remix<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  609.3<br />
<br />
Final Rank Value (609.3) = Starting Rank Value (535.9) + Head To Head Adjustments (73.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.9
- 400 + ( ( 0.070 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 535.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     2072 | 2024-01-21 | RED Canids   | L   | 0.589      | -            | -                | -                | -         |    -1.84 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           26 |     2082 | 2024-01-21 | TIMACETA     | W   | 0.587      | 0.143        | 0.000 (0.000)    | 0.101 (0.008)    | 0 (0.000) |     7.69 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           25 |     2107 | 2024-01-20 | Galorys      | W   | 0.582      | 0.143        | 0.042 (0.003)    | 0.557 (0.046)    | 0 (0.000) |    14.84 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           24 |     2155 | 2024-01-19 | ODDIK        | L   | 0.575      | -            | -                | -                | -         |    -2.50 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           23 |     2164 | 2024-01-19 | BESTIA       | L   | 0.574      | -            | -                | -                | -         |    -3.76 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           22 |     2556 | 2024-01-09 | Legacy       | W   | 0.508      | 0.143        | 0.055 (0.004)    | 0.501 (0.036)    | 0 (0.000) |    14.88 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           21 |     2563 | 2024-01-09 | ODDIK        | W   | 0.508      | 0.143        | 0.017 (0.001)    | 0.552 (0.040)    | 0 (0.000) |    14.10 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           20 |     2567 | 2024-01-09 | Case         | W   | 0.507      | 0.143        | 0.034 (0.002)    | 0.767 (0.056)    | 0 (0.000) |    13.63 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           19 |     2580 | 2024-01-09 | aNXi5tyS     | W   | 0.507      | -            | -                | -                | 0 (0.000) |     4.81 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           18 |     2634 | 2023-12-21 | Case         | L   | 0.380      | -            | -                | -                | -         |    -1.72 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           17 |     2637 | 2023-12-20 | Solid        | L   | 0.374      | -            | -                | -                | -         |    -1.31 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           16 |     2646 | 2023-12-19 | VELOX        | W   | 0.367      | 0.303        | 0.003 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     7.13 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           15 |     2678 | 2023-12-17 | 9z Academy   | W   | 0.353      | -            | -                | -                | 0 (0.000) |     3.47 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           14 |     2739 | 2023-12-15 | Case         | L   | 0.340      | -            | -                | -                | -         |    -1.44 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           13 |     3018 | 2023-11-29 | Imperial     | L   | 0.234      | -            | -                | -                | -         |    -0.01 | ALLE, danoco, LUCAS1, realz1n, remix  |
|           12 |     3193 | 2023-11-18 | RED Canids   | L   | 0.160      | -            | -                | -                | -         |    -0.35 | ALLE, danoco, realz1n, remix, RICIOLI |
|           11 |     3217 | 2023-11-17 | Sharks       | L   | 0.154      | -            | -                | -                | -         |    -0.56 | ALLE, danoco, realz1n, remix, RICIOLI |
|           10 |     3257 | 2023-11-16 | Case         | W   | 0.147      | 0.303        | 0.034 (0.002)    | 0.767 (0.034)    | 0 (0.000) |     4.02 | ALLE, danoco, realz1n, remix, RICIOLI |
|            9 |     3324 | 2023-11-14 | RED Canids   | L   | 0.134      | -            | -                | -                | -         |    -0.28 | ALLE, danoco, realz1n, remix, RICIOLI |
|            8 |     3358 | 2023-11-12 | Corinthians  | W   | 0.121      | 0.303        | 0.001 (0.000)    | 0.150 (0.006)    | 0 (0.000) |     2.57 | ALLE, danoco, realz1n, remix, RICIOLI |
|            7 |     3624 | 2023-10-31 | Imperial     | L   | 0.041      | -            | -                | -                | -         |    -0.00 | ALLE, danoco, realz1n, remix, RICIOLI |
|            6 |     3656 | 2023-10-30 | O PLANO      | W   | 0.034      | -            | -                | -                | -         |     0.35 | ALLE, danoco, realz1n, remix, RICIOLI |
|            5 |     3659 | 2023-10-30 | Boca Juniors | L   | 0.034      | -            | -                | -                | -         |    -0.73 | ALLE, danoco, realz1n, remix, RICIOLI |
|            4 |     3693 | 2023-10-29 | Imperial     | L   | 0.027      | -            | -                | -                | -         |    -0.00 | ALLE, danoco, realz1n, remix, RICIOLI |
|            3 |     3742 | 2023-10-28 | BESTIA       | L   | 0.020      | -            | -                | -                | -         |    -0.10 | ALLE, danoco, realz1n, remix, RICIOLI |
|            2 |     3788 | 2023-10-27 | Legacy       | W   | 0.013      | 0.417        | 0.055 (0.000)    | 0.501 (0.003)    | -         |     0.39 | ALLE, danoco, realz1n, remix, RICIOLI |
|            1 |     3807 | 2023-10-26 | ODDIK        | W   | 0.007      | 0.371        | 0.017 (0.000)    | 0.552 (0.001)    | -         |     0.20 | ALLE, danoco, realz1n, remix, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
