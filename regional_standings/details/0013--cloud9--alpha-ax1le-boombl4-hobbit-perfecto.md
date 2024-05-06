### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1573.0<br />
<br />
Final Rank Value (1573.0) = Starting Rank Value (1635.3) + Head To Head Adjustments (-62.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.754[<sup>1</sup>](#table2)
- Bounty Collected: 0.611[<sup>2</sup>](#table1)
- Opponent Network: 0.293[<sup>2</sup>](#table1)
- LAN Wins: 0.936[<sup>2</sup>](#table1)

The average of these factors is 0.649<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1635.3
- 400 + ( ( 0.649 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1635.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      351 | 2024-04-20 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -29.52 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           39 |      382 | 2024-04-19 | BetBoom           | W   | 1.000      | 0.143        | 0.563 (0.080)    | 1.000 (0.143)    | -         |     6.01 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           38 |      396 | 2024-04-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.00 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           37 |      671 | 2024-04-10 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -5.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           36 |      721 | 2024-04-08 | Wildcard          | W   | 1.000      | 0.624        | -                | 0.490 (0.306)    | 1 (1.000) |     0.65 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           35 |      751 | 2024-04-08 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |   -26.62 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           34 |      975 | 2024-03-28 | Vitality          | L   | 0.939      | -            | -                | -                | -         |    -7.91 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           33 |     1058 | 2024-03-23 | Natus Vincere     | W   | 0.907      | 1.000        | 1.000 (0.907)    | 0.509 (0.462)    | 1 (0.907) |    23.41 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           32 |     1082 | 2024-03-22 | G2                | W   | 0.898      | 1.000        | 0.841 (0.755)    | 0.607 (0.545)    | 1 (0.898) |    21.62 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           31 |     1093 | 2024-03-21 | Gaimin Gladiators | W   | 0.893      | 1.000        | 0.189 (0.169)    | 0.990 (0.885)    | 1 (0.893) |     4.79 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           30 |     1101 | 2024-03-21 | Spirit            | L   | 0.892      | -            | -                | -                | -         |    -6.37 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           29 |     1149 | 2024-03-18 | SAW               | W   | 0.873      | 0.143        | -                | 0.774 (0.096)    | 1 (0.873) |     8.10 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           28 |     1167 | 2024-03-17 | Legacy            | W   | 0.867      | -            | -                | -                | 1 (0.867) |     1.56 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           27 |     1185 | 2024-03-17 | Gaimin Gladiators | W   | 0.865      | 0.143        | -                | 0.990 (0.122)    | 1 (0.865) |     3.92 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           26 |     1393 | 2024-03-08 | SAW               | L   | 0.807      | -            | -                | -                | -         |   -18.95 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           25 |     1459 | 2024-03-06 | Rare Atom         | W   | 0.792      | 0.535        | -                | 0.189 (0.080)    | -         |     0.18 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     1790 | 2024-02-20 | Vitality          | W   | 0.692      | 0.143        | 1.000 (0.099)    | -                | 1 (0.692) |    17.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     1808 | 2024-02-19 | Apeks             | W   | 0.687      | -            | -                | -                | 1 (0.687) |     4.42 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     1817 | 2024-02-19 | PERA              | W   | 0.685      | -            | -                | -                | 1 (0.685) |     0.52 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2074 | 2024-02-05 | Monte             | L   | 0.592      | -            | -                | -                | -         |   -14.81 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2094 | 2024-02-04 | MOUZ              | L   | 0.586      | -            | -                | -                | -         |    -4.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2147 | 2024-02-02 | Virtus.pro        | W   | 0.573      | -            | -                | -                | -         |    11.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2175 | 2024-02-01 | BetBoom           | W   | 0.567      | 0.143        | 0.563 (0.046)    | 1.000 (0.081)    | -         |     5.31 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2199 | 2024-01-31 | Rebels            | L   | 0.559      | -            | -                | -                | -         |   -16.79 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2264 | 2024-01-26 | BIG               | L   | 0.527      | -            | -                | -                | -         |   -13.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2289 | 2024-01-25 | Virtus.pro        | L   | 0.520      | -            | -                | -                | -         |    -6.06 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     2302 | 2024-01-24 | HEROIC            | W   | 0.514      | 0.581        | 0.347 (0.104)    | 0.712 (0.212)    | -         |     7.67 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     2474 | 2024-01-19 | BetBoom           | W   | 0.479      | 0.143        | 0.563 (0.039)    | -                | -         |     4.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     2527 | 2024-01-18 | 3DMAX             | W   | 0.473      | -            | -                | -                | -         |     1.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     2548 | 2024-01-18 | OG                | W   | 0.472      | 0.143        | 0.580 (0.039)    | -                | -         |     2.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3044 | 2023-12-15 | MOUZ              | L   | 0.244      | -            | -                | -                | -         |    -1.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3047 | 2023-12-14 | Vitality          | L   | 0.238      | -            | -                | -                | -         |    -1.49 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3059 | 2023-12-13 | ENCE              | W   | 0.230      | -            | -                | -                | -         |     0.06 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3137 | 2023-12-08 | BetBoom           | L   | 0.198      | -            | -                | -                | -         |    -4.59 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3160 | 2023-12-07 | MIBR              | L   | 0.192      | -            | -                | -                | -         |    -2.78 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3226 | 2023-12-05 | GamerLegion       | W   | 0.178      | -            | -                | -                | -         |     1.68 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3367 | 2023-11-25 | Vitality          | L   | 0.113      | -            | -                | -                | -         |    -0.75 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3390 | 2023-11-24 | HEROIC            | W   | 0.106      | -            | -                | -                | -         |     0.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     3408 | 2023-11-23 | FaZe              | L   | 0.099      | -            | -                | -                | -         |    -0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     3424 | 2023-11-22 | Natus Vincere     | W   | 0.092      | 0.729        | 1.000 (0.067)    | -                | -         |     2.52 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($76,536.76)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      0.960 | $45,000.00     | $43,210.48      |
| 2024-03-10 |      0.821 | $7,500.00      | $6,154.40       |
| 2024-02-11 |      0.633 | $10,000.00     | $6,331.40       |
| 2024-01-28 |      0.540 | $8,500.00      | $4,589.25       |
| 2023-12-17 |      0.259 | $25,000.00     | $6,472.67       |
| 2023-11-26 |      0.119 | $40,000.00     | $4,778.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
