### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1840.7<br />
<br />
Final Rank Value (1840.7) = Starting Rank Value (1871.6) + Head To Head Adjustments (-30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.665[<sup>2</sup>](#table1)
- Opponent Network: 0.452[<sup>2</sup>](#table1)
- LAN Wins: 0.974[<sup>2</sup>](#table1)

The average of these factors is 0.773<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1871.6
- 400 + ( ( 0.773 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1871.6


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
|           27 |      174 | 2024-04-28 | TheMongolz    | W   | 1.000      | 0.889        | 0.253 (0.225)    | 0.595 (0.529)    | 1 (1.000) |     3.08 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      247 | 2024-04-25 | BetBoom       | W   | 1.000      | 0.889        | 0.563 (0.500)    | 1.000 (0.889)    | 1 (1.000) |     1.90 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      284 | 2024-04-23 | Sharks        | W   | 1.000      | 0.889        | -                | 0.453 (0.402)    | 1 (1.000) |     0.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |      948 | 2024-03-30 | FaZe          | L   | 0.953      | -            | -                | -                | -         |   -10.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |      975 | 2024-03-28 | Cloud9        | W   | 0.939      | 1.000        | 0.472 (0.444)    | 0.525 (0.493)    | 1 (0.939) |     7.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1062 | 2024-03-23 | Complexity    | W   | 0.906      | 1.000        | 0.262 (0.238)    | 0.374 (0.339)    | 1 (0.906) |     4.81 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1079 | 2024-03-22 | Imperial      | W   | 0.898      | 1.000        | 0.656 (0.589)    | 0.965 (0.867)    | 1 (0.898) |     6.17 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1098 | 2024-03-21 | TheMongolz    | W   | 0.893      | 1.000        | 0.253 (0.226)    | 0.595 (0.531)    | 1 (0.893) |     2.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1105 | 2024-03-21 | Eternal Fire  | L   | 0.892      | -            | -                | -                | -         |   -18.66 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1760 | 2024-02-21 | ENCE          | W   | 0.699      | -            | -                | -                | 1 (0.699) |     2.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1790 | 2024-02-20 | Cloud9        | L   | 0.692      | -            | -                | -                | -         |   -17.21 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     1807 | 2024-02-19 | HEROIC        | W   | 0.687      | -            | -                | -                | 1 (0.687) |     4.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     1823 | 2024-02-19 | GamerLegion   | W   | 0.684      | -            | -                | -                | 1 (0.684) |     2.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2072 | 2024-02-05 | HEROIC        | L   | 0.592      | -            | -                | -                | -         |   -14.92 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2106 | 2024-02-03 | ENCE          | L   | 0.581      | -            | -                | -                | -         |   -16.56 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2256 | 2024-01-27 | Astralis      | W   | 0.532      | 0.581        | -                | 0.454 (0.140)    | -         |     2.56 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2275 | 2024-01-26 | Falcons       | W   | 0.525      | -            | -                | -                | -         |     0.71 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     2322 | 2024-01-23 | Astralis      | L   | 0.507      | -            | -                | -                | -         |   -13.73 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     2353 | 2024-01-22 | OG            | W   | 0.499      | 0.581        | 0.580 (0.168)    | 0.490 (0.142)    | -         |     0.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     2980 | 2023-12-17 | FaZe          | W   | 0.259      | 1.000        | 1.000 (0.259)    | 0.712 (0.184)    | -         |     5.35 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3015 | 2023-12-16 | Natus Vincere | W   | 0.252      | 1.000        | 1.000 (0.252)    | -                | -         |     4.92 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3047 | 2023-12-14 | Cloud9        | W   | 0.238      | -            | -                | -                | -         |     1.49 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3058 | 2023-12-13 | Natus Vincere | W   | 0.231      | 1.000        | 1.000 (0.231)    | -                | -         |     4.57 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3346 | 2023-11-26 | FaZe          | W   | 0.119      | -            | -                | -                | -         |     2.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3367 | 2023-11-25 | Cloud9        | W   | 0.113      | -            | -                | -                | -         |     0.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3402 | 2023-11-23 | Complexity    | W   | 0.100      | -            | -                | -                | -         |     0.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     3421 | 2023-11-22 | HEROIC        | W   | 0.092      | -            | -                | -                | -         |     0.00 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($248,644.32)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      0.960 | $80,000.00     | $76,818.63      |
| 2024-02-11 |      0.633 | $10,000.00     | $6,331.40       |
| 2024-01-28 |      0.540 | $22,500.00     | $12,148.01      |
| 2023-12-17 |      0.259 | $500,000.00    | $129,453.47     |
| 2023-11-26 |      0.119 | $200,000.00    | $23,892.81      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
