### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, sk0R, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [20]( ../standings_asia.md)<br />
Final Rank Value:  633.3<br />
<br />
Final Rank Value (633.3) = Starting Rank Value (638.8) + Head To Head Adjustments (-5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.8
- 400 + ( ( 0.125 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 638.8


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
|           22 |       65 | 2024-05-03 | IHC             | L   | 1.000      | -            | -                | -                | -         |   -19.86 | Bart4k, cobra, nin9, sk0R, tamir |
|           21 |      494 | 2024-04-17 | TYLOO           | L   | 1.000      | -            | -                | -                | -         |    -5.37 | Bart4k, cobra, H4wK, ncl, nin9   |
|           20 |     1292 | 2024-03-13 | LYG             | L   | 0.838      | -            | -                | -                | -         |   -12.83 | Bart4k, ncl, nin9, sk0R, Tsogoo  |
|           19 |     1921 | 2024-02-15 | GR              | L   | 0.658      | -            | -                | -                | -         |   -10.72 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           18 |     1960 | 2024-02-14 | padaem Holodnie | W   | 0.652      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.53 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           17 |     2259 | 2024-01-27 | TYLOO           | L   | 0.531      | -            | -                | -                | -         |    -2.58 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           16 |     2274 | 2024-01-26 | Wings Up        | W   | 0.525      | 0.143        | 0.001 (0.000)    | 0.090 (0.007)    | 0 (0.000) |     7.71 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           15 |     2280 | 2024-01-26 | TheMongolz      | L   | 0.524      | -            | -                | -                | -         |    -0.22 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           14 |     2332 | 2024-01-23 | Steel Helmet    | W   | 0.505      | 0.143        | 0.025 (0.002)    | 0.104 (0.008)    | 0 (0.000) |     8.51 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           13 |     2334 | 2024-01-23 | ATOX            | W   | 0.504      | 0.143        | 0.005 (0.000)    | 0.258 (0.019)    | 0 (0.000) |    10.40 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           12 |     2358 | 2024-01-22 | Wings Up        | W   | 0.499      | 0.143        | 0.001 (0.000)    | 0.090 (0.006)    | 0 (0.000) |     7.52 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     2387 | 2024-01-21 | ATOX            | L   | 0.492      | -            | -                | -                | -         |    -5.39 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     2389 | 2024-01-21 | Eruption        | W   | 0.491      | 0.143        | 0.000 (0.000)    | 0.067 (0.005)    | 0 (0.000) |     4.60 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     2426 | 2024-01-20 | GR              | W   | 0.485      | 0.143        | 0.005 (0.000)    | 0.217 (0.015)    | 0 (0.000) |     7.80 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     2434 | 2024-01-20 | NKT             | W   | 0.484      | 0.143        | 0.013 (0.001)    | 0.088 (0.006)    | 0 (0.000) |     9.81 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     2488 | 2024-01-19 | MungYu          | L   | 0.478      | -            | -                | -                | -         |    -9.94 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     2672 | 2024-01-15 | MungYu          | L   | 0.452      | -            | -                | -                | -         |    -9.75 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     2676 | 2024-01-15 | Fort Arena      | W   | 0.452      | 0.143        | -                | 0.020 (0.001)    | 0 (0.000) |     2.92 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     2680 | 2024-01-15 | NKT             | W   | 0.451      | 0.143        | 0.013 (0.001)    | 0.088 (0.006)    | 0 (0.000) |     9.11 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     3276 | 2023-12-02 | ATOX            | L   | 0.158      | -            | -                | -                | -         |    -1.67 | Bart4k, ncl, nin9, sk0R, yAmi    |
|            2 |     3568 | 2023-11-16 | Newhappy        | L   | 0.052      | -            | -                | -                | -         |    -0.71 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     3577 | 2023-11-16 | Lynn Vision     | W   | 0.051      | 0.143        | 0.135 (0.001)    | 0.390 (0.003)    | -         |     1.52 | Bart4k, nin9, sk0R, Tsogoo, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($228.89)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
