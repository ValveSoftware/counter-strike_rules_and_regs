### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, nin9, sk0R, Tsogoo, yAmi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [23]( ../standings_asia.md)<br />
Final Rank Value:  602.8<br />
<br />
Final Rank Value (602.8) = Starting Rank Value (524.5) + Head To Head Adjustments (78.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.5
- 400 + ( ( 0.064 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 524.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1625 | 2024-02-15 | GR              | L   | 0.751      | -            | -                | -                | -         |    -9.59 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           17 |     1664 | 2024-02-14 | padaem Holodnie | W   | 0.745      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     5.51 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           16 |     1963 | 2024-01-27 | TYLOO           | L   | 0.624      | -            | -                | -                | -         |    -2.97 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           15 |     1978 | 2024-01-26 | Wings Up        | W   | 0.619      | 0.143        | 0.005 (0.000)    | 0.111 (0.010)    | 0 (0.000) |    11.68 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           14 |     1984 | 2024-01-26 | TheMongolz      | L   | 0.618      | -            | -                | -                | -         |    -0.30 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           13 |     2036 | 2024-01-23 | Steel Helmet    | W   | 0.598      | 0.143        | 0.021 (0.002)    | 0.131 (0.011)    | 0 (0.000) |    12.18 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           12 |     2038 | 2024-01-23 | ATOX            | W   | 0.598      | 0.143        | 0.007 (0.001)    | 0.329 (0.028)    | 0 (0.000) |    14.46 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     2062 | 2024-01-22 | Wings Up        | W   | 0.592      | 0.143        | 0.005 (0.000)    | 0.111 (0.009)    | 0 (0.000) |    11.75 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     2091 | 2024-01-21 | ATOX            | L   | 0.585      | -            | -                | -                | -         |    -4.15 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     2093 | 2024-01-21 | Eruption        | W   | 0.584      | 0.143        | 0.000 (0.000)    | 0.091 (0.008)    | 0 (0.000) |    10.28 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     2130 | 2024-01-20 | GR              | W   | 0.579      | 0.143        | 0.005 (0.000)    | 0.267 (0.022)    | 0 (0.000) |    11.96 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     2138 | 2024-01-20 | NKT             | W   | 0.578      | 0.143        | 0.013 (0.001)    | 0.110 (0.009)    | 0 (0.000) |    14.01 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     2192 | 2024-01-19 | MungYu          | L   | 0.571      | -            | -                | -                | -         |    -9.28 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     2376 | 2024-01-15 | MungYu          | L   | 0.545      | -            | -                | -                | -         |    -9.32 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     2380 | 2024-01-15 | Fort Arena      | W   | 0.545      | 0.143        | -                | 0.025 (0.002)    | 0 (0.000) |     5.47 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     2384 | 2024-01-15 | NKT             | W   | 0.544      | 0.143        | 0.013 (0.001)    | 0.110 (0.009)    | 0 (0.000) |    13.38 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            2 |     3272 | 2023-11-16 | Newhappy        | L   | 0.145      | -            | -                | -                | -         |    -1.24 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     3281 | 2023-11-16 | Lynn Vision     | W   | 0.144      | 0.143        | 0.136 (0.003)    | 0.458 (0.009)    | -         |     4.44 | Bart4k, nin9, sk0R, Tsogoo, yAmi |

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
