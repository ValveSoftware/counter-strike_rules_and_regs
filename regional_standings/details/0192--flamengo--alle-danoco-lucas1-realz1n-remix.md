### Roster Details<br />
Team Name: Flamengo<br />
Roster: ALLE, danoco, LUCAS1, realz1n, remix<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
Final Rank Value:  541.0<br />
<br />
Final Rank Value (541.0) = Starting Rank Value (515.3) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.3
- 400 + ( ( 0.058 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 515.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3519 | 2024-01-21 | RED Canids | L   | 0.262      | -            | -                | -                | -         |    -0.42 | ALLE, danoco, LUCAS1, realz1n, remix |
|           13 |     3529 | 2024-01-21 | TIMACETA   | W   | 0.260      | 0.143        | 0.000 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     3.95 | ALLE, danoco, LUCAS1, realz1n, remix |
|           12 |     3554 | 2024-01-20 | Galorys    | W   | 0.255      | 0.143        | 0.025 (0.001)    | 0.596 (0.022)    | 0 (0.000) |     6.96 | ALLE, danoco, LUCAS1, realz1n, remix |
|           11 |     3602 | 2024-01-19 | ODDIK      | L   | 0.248      | -            | -                | -                | -         |    -0.64 | ALLE, danoco, LUCAS1, realz1n, remix |
|           10 |     3611 | 2024-01-19 | BESTIA     | L   | 0.248      | -            | -                | -                | -         |    -0.57 | ALLE, danoco, LUCAS1, realz1n, remix |
|            9 |     4003 | 2024-01-09 | Legacy     | W   | 0.182      | 0.143        | 0.087 (0.002)    | 0.461 (0.012)    | 0 (0.000) |     5.39 | ALLE, danoco, LUCAS1, realz1n, remix |
|            8 |     4010 | 2024-01-09 | ODDIK      | W   | 0.181      | 0.143        | 0.024 (0.001)    | 0.602 (0.016)    | 0 (0.000) |     5.27 | ALLE, danoco, LUCAS1, realz1n, remix |
|            7 |     4014 | 2024-01-09 | Case       | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.058 (0.002)    | 0 (0.000) |     3.89 | ALLE, danoco, LUCAS1, realz1n, remix |
|            6 |     4027 | 2024-01-09 | aNXi5tyS   | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.95 | ALLE, danoco, LUCAS1, realz1n, remix |
|            5 |     4081 | 2023-12-21 | Case       | L   | 0.053      | -            | -                | -                | -         |    -0.54 | ALLE, danoco, LUCAS1, realz1n, remix |
|            4 |     4084 | 2023-12-20 | Solid      | L   | 0.048      | -            | -                | -                | -         |    -0.14 | ALLE, danoco, LUCAS1, realz1n, remix |
|            3 |     4093 | 2023-12-19 | VELOX      | W   | 0.040      | 0.303        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.43 | ALLE, danoco, LUCAS1, realz1n, remix |
|            2 |     4125 | 2023-12-17 | 9z Academy | W   | 0.027      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.29 | ALLE, danoco, LUCAS1, realz1n, remix |
|            1 |     4186 | 2023-12-15 | Case       | L   | 0.014      | -            | -                | -                | -         |    -0.14 | ALLE, danoco, LUCAS1, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
