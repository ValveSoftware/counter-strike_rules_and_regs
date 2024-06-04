### Roster Details<br />
Team Name: The Huns<br />
Roster: Bart4k, cobra, nin9, sk0R, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [23]( ../standings_asia.md)<br />
Final Rank Value:  573.9<br />
<br />
Final Rank Value (573.9) = Starting Rank Value (584.5) + Head To Head Adjustments (-10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.175[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 584.5
- 400 + ( ( 0.095 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 584.5


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
|           21 |      341 | 2024-05-17 | ATOX            | L   | 1.000      | -            | -                | -                | -         |    -5.29 | Bart4k, cobra, nin9, sk0R, tamir |
|           20 |      716 | 2024-05-03 | IHC             | L   | 1.000      | -            | -                | -                | -         |   -18.45 | Bart4k, cobra, nin9, sk0R, tamir |
|           19 |     1145 | 2024-04-17 | TYLOO           | L   | 0.917      | -            | -                | -                | -         |    -5.18 | Bart4k, cobra, H4wK, ncl, nin9   |
|           18 |     1943 | 2024-03-13 | LYG             | L   | 0.684      | -            | -                | -                | -         |    -9.52 | Bart4k, ncl, nin9, sk0R, Tsogoo  |
|           17 |     2572 | 2024-02-15 | GR              | L   | 0.504      | -            | -                | -                | -         |    -7.66 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           16 |     2611 | 2024-02-14 | padaem Holodnie | W   | 0.497      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.57 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           15 |     2910 | 2024-01-27 | TYLOO           | L   | 0.377      | -            | -                | -                | -         |    -1.98 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           14 |     2925 | 2024-01-26 | Wings Up        | W   | 0.371      | 0.143        | 0.000 (0.000)    | 0.058 (0.003)    | 0 (0.000) |     4.35 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           13 |     2931 | 2024-01-26 | TheMongolz      | L   | 0.370      | -            | -                | -                | -         |    -0.10 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           12 |     2983 | 2024-01-23 | Steel Helmet    | W   | 0.351      | 0.143        | 0.012 (0.001)    | 0.065 (0.003)    | 0 (0.000) |     6.34 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           11 |     2985 | 2024-01-23 | ATOX            | W   | 0.350      | 0.143        | 0.000 (0.000)    | 0.248 (0.012)    | 0 (0.000) |     8.97 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|           10 |     3009 | 2024-01-22 | Wings Up        | W   | 0.345      | 0.143        | 0.000 (0.000)    | 0.058 (0.003)    | 0 (0.000) |     4.05 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            9 |     3038 | 2024-01-21 | ATOX            | L   | 0.338      | -            | -                | -                | -         |    -1.98 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            8 |     3040 | 2024-01-21 | Eruption        | W   | 0.337      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     3.68 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            7 |     3077 | 2024-01-20 | GR              | W   | 0.331      | 0.143        | 0.001 (0.000)    | 0.146 (0.007)    | 0 (0.000) |     5.67 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            6 |     3085 | 2024-01-20 | NKT             | W   | 0.330      | 0.143        | 0.005 (0.000)    | 0.057 (0.003)    | 0 (0.000) |     6.77 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            5 |     3139 | 2024-01-19 | MungYu          | L   | 0.323      | -            | -                | -                | -         |    -6.36 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            4 |     3323 | 2024-01-15 | MungYu          | L   | 0.298      | -            | -                | -                | -         |    -6.01 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            3 |     3327 | 2024-01-15 | Fort Arena      | W   | 0.298      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.44 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            2 |     3331 | 2024-01-15 | NKT             | W   | 0.297      | 0.143        | 0.005 (0.000)    | 0.057 (0.002)    | 0 (0.000) |     6.09 | Bart4k, nin9, sk0R, Tsogoo, yAmi |
|            1 |     3927 | 2023-12-02 | ATOX            | L   | 0.004      | -            | -                | -                | -         |    -0.02 | Bart4k, ncl, nin9, sk0R, yAmi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5.61)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
