### Roster Details<br />
Team Name: Flamengo<br />
Roster: ALLE, danoco, LUCAS1, realz1n, remix<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  545.5<br />
<br />
Final Rank Value (545.5) = Starting Rank Value (509.4) + Head To Head Adjustments (36.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 509.4


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
|           14 |     3019 | 2024-01-21 | RED Canids | L   | 0.341      | -            | -                | -                | -         |    -0.76 | ALLE, danoco, LUCAS1, realz1n, remix |
|           13 |     3029 | 2024-01-21 | TIMACETA   | W   | 0.339      | 0.143        | 0.000 (0.000)    | 0.049 (0.002)    | 0 (0.000) |     5.14 | ALLE, danoco, LUCAS1, realz1n, remix |
|           12 |     3054 | 2024-01-20 | Galorys    | W   | 0.334      | 0.143        | 0.022 (0.001)    | 0.577 (0.028)    | 0 (0.000) |     8.98 | ALLE, danoco, LUCAS1, realz1n, remix |
|           11 |     3102 | 2024-01-19 | ODDIK      | L   | 0.328      | -            | -                | -                | -         |    -0.90 | ALLE, danoco, LUCAS1, realz1n, remix |
|           10 |     3111 | 2024-01-19 | BESTIA     | L   | 0.327      | -            | -                | -                | -         |    -0.85 | ALLE, danoco, LUCAS1, realz1n, remix |
|            9 |     3503 | 2024-01-09 | Legacy     | W   | 0.261      | 0.143        | 0.024 (0.001)    | 0.328 (0.012)    | 0 (0.000) |     7.54 | ALLE, danoco, LUCAS1, realz1n, remix |
|            8 |     3510 | 2024-01-09 | ODDIK      | W   | 0.260      | 0.143        | 0.017 (0.001)    | 0.638 (0.024)    | 0 (0.000) |     7.56 | ALLE, danoco, LUCAS1, realz1n, remix |
|            7 |     3514 | 2024-01-09 | Case       | W   | 0.260      | 0.143        | 0.001 (0.000)    | 0.095 (0.004)    | 0 (0.000) |     5.79 | ALLE, danoco, LUCAS1, realz1n, remix |
|            6 |     3527 | 2024-01-09 | aNXi5tyS   | W   | 0.259      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.85 | ALLE, danoco, LUCAS1, realz1n, remix |
|            5 |     3581 | 2023-12-21 | Case       | L   | 0.133      | -            | -                | -                | -         |    -1.24 | ALLE, danoco, LUCAS1, realz1n, remix |
|            4 |     3584 | 2023-12-20 | Solid      | L   | 0.127      | -            | -                | -                | -         |    -0.39 | ALLE, danoco, LUCAS1, realz1n, remix |
|            3 |     3593 | 2023-12-19 | VELOX      | W   | 0.119      | 0.303        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.05 | ALLE, danoco, LUCAS1, realz1n, remix |
|            2 |     3625 | 2023-12-17 | 9z Academy | W   | 0.106      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.18 | ALLE, danoco, LUCAS1, realz1n, remix |
|            1 |     3686 | 2023-12-15 | Case       | L   | 0.093      | -            | -                | -                | -         |    -0.86 | ALLE, danoco, LUCAS1, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
