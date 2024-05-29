### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1936.7<br />
<br />
Final Rank Value (1936.7) = Starting Rank Value (2000.0) + Head To Head Adjustments (-63.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.791[<sup>2</sup>](#table1)
- Opponent Network: 0.506[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.824<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.824 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |        2 | 2024-05-29 | Spirit        | L   | 1.000      | -            | -                | -                | -         |   -15.84 | broky, frozen, karrigan, rain, ropz |
|           42 |       23 | 2024-05-28 | Virtus.pro    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.54 | broky, frozen, karrigan, rain, ropz |
|           41 |       48 | 2024-05-27 | M80           | W   | 1.000      | 0.624        | -                | 0.789 (0.493)    | 1 (1.000) |     0.53 | broky, frozen, karrigan, rain, ropz |
|           40 |      573 | 2024-05-10 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -20.67 | broky, frozen, karrigan, rain, ropz |
|           39 |      615 | 2024-05-08 | Natus Vincere | W   | 1.000      | 0.889        | 1.000 (0.889)    | -                | 1 (1.000) |    11.22 | broky, frozen, karrigan, rain, ropz |
|           38 |      632 | 2024-05-07 | Monte         | W   | 1.000      | 0.889        | -                | 0.611 (0.543)    | 1 (1.000) |     0.53 | broky, frozen, karrigan, rain, ropz |
|           37 |      864 | 2024-04-26 | Eternal Fire  | W   | 0.979      | 0.889        | 1.000 (0.870)    | 0.605 (0.527)    | 1 (0.979) |     8.69 | broky, frozen, karrigan, rain, ropz |
|           36 |      893 | 2024-04-25 | Virtus.pro    | W   | 0.972      | 0.889        | -                | 0.499 (0.432)    | 1 (0.972) |     4.78 | broky, frozen, karrigan, rain, ropz |
|           35 |      912 | 2024-04-24 | Astralis      | L   | 0.966      | -            | -                | -                | -         |   -23.34 | broky, frozen, karrigan, rain, ropz |
|           34 |      930 | 2024-04-23 | Imperial      | W   | 0.959      | 0.889        | 0.373 (0.318)    | 0.889 (0.758)    | 1 (0.959) |     1.81 | broky, frozen, karrigan, rain, ropz |
|           33 |     1205 | 2024-04-14 | MOUZ          | W   | 0.897      | 0.624        | 1.000 (0.560)    | 0.653 (0.366)    | 1 (0.897) |    14.45 | broky, frozen, karrigan, rain, ropz |
|           32 |     1219 | 2024-04-13 | Astralis      | W   | 0.891      | -            | -                | -                | 1 (0.891) |     6.07 | broky, frozen, karrigan, rain, ropz |
|           31 |     1232 | 2024-04-12 | Liquid        | W   | 0.884      | 0.624        | 0.493 (0.272)    | 0.854 (0.471)    | 1 (0.884) |     4.27 | broky, frozen, karrigan, rain, ropz |
|           30 |     1307 | 2024-04-10 | FlyQuest      | W   | 0.871      | -            | -                | -                | -         |     1.33 | broky, frozen, karrigan, rain, ropz |
|           29 |     1322 | 2024-04-10 | Cloud9        | W   | 0.869      | -            | -                | -                | -         |     1.83 | broky, frozen, karrigan, rain, ropz |
|           28 |     1368 | 2024-04-09 | Astralis      | L   | 0.863      | -            | -                | -                | -         |   -21.94 | broky, frozen, karrigan, rain, ropz |
|           27 |     1399 | 2024-04-08 | Nemiga        | W   | 0.856      | -            | -                | -                | -         |     0.38 | broky, frozen, karrigan, rain, ropz |
|           26 |     1592 | 2024-03-31 | Natus Vincere | L   | 0.806      | -            | -                | -                | -         |   -15.88 | broky, frozen, karrigan, rain, ropz |
|           25 |     1599 | 2024-03-30 | Vitality      | W   | 0.799      | 1.000        | 0.699 (0.559)    | 0.481 (0.385)    | -         |     7.97 | broky, frozen, karrigan, rain, ropz |
|           24 |     1617 | 2024-03-28 | Spirit        | W   | 0.787      | 1.000        | 1.000 (0.787)    | 0.534 (0.420)    | -         |    11.49 | broky, frozen, karrigan, rain, ropz |
|           23 |     1704 | 2024-03-24 | Complexity    | W   | 0.758      | -            | -                | -                | -         |     2.16 | broky, frozen, karrigan, rain, ropz |
|           22 |     1717 | 2024-03-23 | Imperial      | W   | 0.751      | 1.000        | 0.373 (0.280)    | 0.889 (0.668)    | -         |     1.70 | broky, frozen, karrigan, rain, ropz |
|           21 |     1731 | 2024-03-22 | Eternal Fire  | L   | 0.744      | -            | -                | -                | -         |   -16.02 | broky, frozen, karrigan, rain, ropz |
|           20 |     1742 | 2024-03-21 | FURIA         | W   | 0.740      | -            | -                | -                | -         |     0.76 | broky, frozen, karrigan, rain, ropz |
|           19 |     1754 | 2024-03-21 | HEROIC        | L   | 0.738      | -            | -                | -                | -         |   -19.15 | broky, frozen, karrigan, rain, ropz |
|           18 |     2542 | 2024-02-16 | Eternal Fire  | W   | 0.512      | -            | -                | -                | -         |     4.69 | broky, frozen, karrigan, rain, ropz |
|           17 |     2569 | 2024-02-15 | G2            | L   | 0.505      | -            | -                | -                | -         |   -11.85 | broky, frozen, karrigan, rain, ropz |
|           16 |     2603 | 2024-02-14 | Falcons       | W   | 0.499      | -            | -                | -                | -         |     0.93 | broky, frozen, karrigan, rain, ropz |
|           15 |     2618 | 2024-02-14 | 9 Pandas      | W   | 0.497      | -            | -                | -                | -         |     0.14 | broky, frozen, karrigan, rain, ropz |
|           14 |     2655 | 2024-02-11 | Spirit        | L   | 0.479      | -            | -                | -                | -         |    -9.27 | broky, frozen, karrigan, rain, ropz |
|           13 |     2667 | 2024-02-10 | MOUZ          | W   | 0.472      | 1.000        | 1.000 (0.472)    | -                | -         |     6.79 | broky, frozen, karrigan, rain, ropz |
|           12 |     2681 | 2024-02-09 | G2            | W   | 0.465      | -            | -                | -                | -         |     3.57 | broky, frozen, karrigan, rain, ropz |
|           11 |     2712 | 2024-02-06 | Spirit        | L   | 0.445      | -            | -                | -                | -         |    -8.79 | broky, frozen, karrigan, rain, ropz |
|           10 |     2731 | 2024-02-04 | Eternal Fire  | W   | 0.434      | 1.000        | 1.000 (0.434)    | -                | -         |     4.02 | broky, frozen, karrigan, rain, ropz |
|            9 |     2771 | 2024-02-03 | Rebels        | W   | 0.425      | -            | -                | -                | -         |     0.07 | broky, frozen, karrigan, rain, ropz |
|            8 |     2902 | 2024-01-27 | Liquid        | W   | 0.379      | -            | -                | -                | -         |     1.72 | broky, frozen, karrigan, rain, ropz |
|            7 |     2916 | 2024-01-26 | GamerLegion   | W   | 0.373      | -            | -                | -                | -         |     0.10 | broky, frozen, karrigan, rain, ropz |
|            6 |     2941 | 2024-01-25 | Spirit        | W   | 0.364      | -            | -                | -                | -         |     4.28 | broky, frozen, karrigan, rain, ropz |
|            5 |     2962 | 2024-01-24 | GamerLegion   | L   | 0.357      | -            | -                | -                | -         |   -11.17 | broky, frozen, karrigan, rain, ropz |
|            4 |     3631 | 2023-12-17 | Vitality      | L   | 0.105      | -            | -                | -                | -         |    -2.26 | broky, frozen, karrigan, rain, ropz |
|            3 |     3669 | 2023-12-16 | MOUZ          | W   | 0.098      | -            | -                | -                | -         |     1.44 | broky, frozen, karrigan, rain, ropz |
|            2 |     3696 | 2023-12-14 | G2            | W   | 0.085      | -            | -                | -                | -         |     0.65 | broky, frozen, karrigan, rain, ropz |
|            1 |     3708 | 2023-12-13 | HEROIC        | W   | 0.077      | -            | -                | -                | -         |     0.00 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($379,880.23)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.897 | $100,000.00    | $89,723.43      |
| 2024-03-31 |      0.806 | $170,000.00    | $137,043.82     |
| 2024-02-11 |      0.479 | $180,000.00    | $86,228.51      |
| 2024-01-28 |      0.386 | $22,500.00     | $8,680.92       |
| 2023-12-17 |      0.105 | $250,000.00    | $26,203.55      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
