### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1835.1<br />
<br />
Final Rank Value (1835.1) = Starting Rank Value (1861.4) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.865[<sup>1</sup>](#table2)
- Bounty Collected: 0.650[<sup>2</sup>](#table1)
- Opponent Network: 0.496[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.753<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1861.4
- 400 + ( ( 0.753 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1861.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |        0 | 2024-05-29 | 9z            | L   | 1.000      | -            | -                | -                | -         |   -30.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |       44 | 2024-05-27 | G2            | W   | 1.000      | 0.624        | 0.469 (0.293)    | 0.565 (0.352)    | 1 (1.000) |    10.54 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |       54 | 2024-05-27 | Monte         | W   | 1.000      | 0.624        | 0.181 (0.113)    | 0.611 (0.382)    | 1 (1.000) |     0.89 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      524 | 2024-05-12 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -10.73 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      555 | 2024-05-11 | Astralis      | W   | 1.000      | 0.889        | 0.395 (0.351)    | 0.495 (0.440)    | 1 (1.000) |    11.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |      573 | 2024-05-10 | FaZe          | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.688 (0.612)    | 1 (1.000) |    20.67 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |      825 | 2024-04-28 | TheMongolz    | W   | 0.991      | 0.889        | 0.176 (0.155)    | 0.583 (0.513)    | 1 (0.991) |     3.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |      898 | 2024-04-25 | BetBoom       | W   | 0.972      | 0.889        | 0.392 (0.339)    | 0.951 (0.822)    | 1 (0.972) |     1.72 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |      935 | 2024-04-23 | Sharks        | W   | 0.958      | 0.889        | -                | 0.530 (0.451)    | 1 (0.958) |     0.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1599 | 2024-03-30 | FaZe          | L   | 0.799      | -            | -                | -                | -         |    -7.97 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1626 | 2024-03-28 | Cloud9        | W   | 0.785      | 1.000        | 0.188 (0.147)    | 0.382 (0.300)    | 1 (0.785) |     3.08 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1713 | 2024-03-23 | Complexity    | W   | 0.752      | 1.000        | 0.260 (0.196)    | -                | 1 (0.752) |     4.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1730 | 2024-03-22 | Imperial      | W   | 0.744      | 1.000        | 0.373 (0.277)    | 0.889 (0.662)    | 1 (0.744) |     3.21 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     1749 | 2024-03-21 | TheMongolz    | W   | 0.739      | 1.000        | 0.176 (0.130)    | 0.583 (0.430)    | -         |     2.58 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     1756 | 2024-03-21 | Eternal Fire  | L   | 0.738      | -            | -                | -                | -         |   -12.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2411 | 2024-02-21 | ENCE          | W   | 0.545      | -            | -                | -                | -         |     1.46 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2441 | 2024-02-20 | Cloud9        | L   | 0.538      | -            | -                | -                | -         |   -15.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2458 | 2024-02-19 | HEROIC        | W   | 0.533      | -            | -                | -                | -         |     5.09 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2474 | 2024-02-19 | GamerLegion   | W   | 0.530      | -            | -                | -                | -         |     0.39 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     2723 | 2024-02-05 | HEROIC        | L   | 0.438      | -            | -                | -                | -         |    -9.74 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     2757 | 2024-02-03 | ENCE          | L   | 0.427      | -            | -                | -                | -         |   -12.55 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     2907 | 2024-01-27 | Astralis      | W   | 0.378      | -            | -                | -                | -         |     4.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     2926 | 2024-01-26 | Falcons       | W   | 0.371      | -            | -                | -                | -         |     1.19 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     2973 | 2024-01-23 | Astralis      | L   | 0.353      | -            | -                | -                | -         |    -7.38 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3004 | 2024-01-22 | OG            | W   | 0.345      | -            | -                | -                | -         |     0.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3631 | 2023-12-17 | FaZe          | W   | 0.105      | -            | -                | -                | -         |     2.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3666 | 2023-12-16 | Natus Vincere | W   | 0.098      | -            | -                | -                | -         |     1.60 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3698 | 2023-12-14 | Cloud9        | W   | 0.084      | -            | -                | -                | -         |     0.19 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     3709 | 2023-12-13 | Natus Vincere | W   | 0.077      | -            | -                | -                | -         |     1.25 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($210,369.70)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.70) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $80,000.00     | $80,000.00      |
| 2024-03-31 |      0.806 | $80,000.00     | $64,491.21      |
| 2024-02-11 |      0.479 | $10,000.00     | $4,790.47       |
| 2024-01-28 |      0.386 | $22,500.00     | $8,680.92       |
| 2023-12-17 |      0.105 | $500,000.00    | $52,407.10      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
