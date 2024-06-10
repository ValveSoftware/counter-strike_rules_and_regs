### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, sk0R, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [203](../standings_global.md)<br />
Regional Rank: [29]( ../standings_asia.md)<br />
Final Rank Value:  511.3<br />
<br />
Final Rank Value (511.3) = Starting Rank Value (507.8) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.8
- 400 + ( ( 0.054 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 507.8


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
|           20 |      841 | 2024-05-17 | ATOX            | L   | 1.000      | -            | -                | -                | -         |    -2.54 | Bart4k, cobra, nin9, sk0R, tamir |
|           19 |     1216 | 2024-05-03 | IHC             | L   | 0.944      | -            | -                | -                | -         |   -17.52 | Bart4k, cobra, nin9, sk0R, tamir |
|           18 |     1645 | 2024-04-17 | TYLOO           | L   | 0.838      | -            | -                | -                | -         |    -4.54 | Bart4k, cobra, H4wK, ncl, nin9   |
|           17 |     2443 | 2024-03-13 | LYG             | L   | 0.604      | -            | -                | -                | -         |    -5.26 | Bart4k, ncl, nin9, sk0R, Tsogoo  |
|           16 |     3072 | 2024-02-15 | GR              | L   | 0.425      | -            | -                | -                | -         |    -4.28 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           15 |     3111 | 2024-02-14 | padaem Holodnie | W   | 0.418      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.08 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           14 |     3410 | 2024-01-27 | TYLOO           | L   | 0.298      | -            | -                | -                | -         |    -2.08 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           13 |     3425 | 2024-01-26 | Wings Up        | W   | 0.292      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     4.34 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           12 |     3431 | 2024-01-26 | The MongolZ     | L   | 0.291      | -            | -                | -                | -         |    -0.00 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     3483 | 2024-01-23 | Steel Helmet    | W   | 0.272      | 0.143        | 0.011 (0.000)    | 0.046 (0.002)    | 0 (0.000) |     5.79 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     3485 | 2024-01-23 | ATOX            | W   | 0.271      | 0.143        | 0.026 (0.001)    | 0.315 (0.012)    | 0 (0.000) |     7.84 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     3509 | 2024-01-22 | Wings Up        | W   | 0.265      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     3.99 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     3538 | 2024-01-21 | ATOX            | L   | 0.259      | -            | -                | -                | -         |    -0.66 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     3540 | 2024-01-21 | Eruption        | W   | 0.258      | 0.143        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     2.82 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     3577 | 2024-01-20 | GR              | W   | 0.252      | 0.143        | 0.011 (0.000)    | 0.148 (0.005)    | 0 (0.000) |     5.71 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     3585 | 2024-01-20 | NKT             | W   | 0.251      | 0.143        | 0.004 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     5.84 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     3639 | 2024-01-19 | MungYu          | L   | 0.244      | -            | -                | -                | -         |    -3.93 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     3823 | 2024-01-15 | MungYu          | L   | 0.219      | -            | -                | -                | -         |    -3.59 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            2 |     3827 | 2024-01-15 | Fort Arena      | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.41 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     3831 | 2024-01-15 | NKT             | W   | 0.218      | 0.143        | 0.004 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     5.09 | Bart4k, nin9, sk0R, Tsogoo, yAmi |

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
