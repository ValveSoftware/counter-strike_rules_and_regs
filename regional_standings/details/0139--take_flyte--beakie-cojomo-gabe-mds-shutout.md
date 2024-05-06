### Roster Details<br />
Team Name: Take Flyte<br />
Roster: BeaKie, CoJoMo, Gabe, mds, shutout<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  722.2<br />
<br />
Final Rank Value (722.2) = Starting Rank Value (711.9) + Head To Head Adjustments (10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.9
- 400 + ( ( 0.164 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 711.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      467 | 2024-04-17 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -8.01 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |      618 | 2024-04-10 | MIGHT            | L   | 1.000      | -            | -                | -                | -         |   -19.27 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |      625 | 2024-04-10 | MIGHT            | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.190 (0.090)    | 0 (0.000) |    11.93 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |      802 | 2024-04-04 | Carpe Diem       | W   | 0.989      | 0.477        | 0.009 (0.004)    | 0.253 (0.119)    | 0 (0.000) |    12.75 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |      808 | 2024-04-04 | Carpe Diem       | W   | 0.988      | 0.477        | 0.009 (0.004)    | 0.253 (0.119)    | 0 (0.000) |    13.89 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |      850 | 2024-04-03 | Limitless        | W   | 0.982      | 0.477        | 0.001 (0.001)    | 0.173 (0.081)    | 0 (0.000) |    13.50 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |      853 | 2024-04-03 | Limitless        | W   | 0.982      | 0.477        | 0.001 (0.001)    | 0.173 (0.081)    | 0 (0.000) |    14.71 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |      900 | 2024-04-02 | Party Astronauts | L   | 0.975      | -            | -                | -                | -         |    -7.54 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |      904 | 2024-04-02 | BOSS             | L   | 0.974      | -            | -                | -                | -         |    -9.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |      989 | 2024-03-27 | M80              | L   | 0.935      | -            | -                | -                | -         |    -2.61 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |      994 | 2024-03-27 | M80              | L   | 0.935      | -            | -                | -                | -         |    -2.68 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     1115 | 2024-03-20 | LAG              | W   | 0.889      | 0.477        | 0.033 (0.014)    | 0.484 (0.205)    | 0 (0.000) |    21.64 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           18 |     1117 | 2024-03-20 | LAG              | L   | 0.888      | -            | -                | -                | -         |    -6.02 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           17 |     1131 | 2024-03-19 | Party Astronauts | L   | 0.882      | -            | -                | -                | -         |    -6.83 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           16 |     1134 | 2024-03-19 | Party Astronauts | L   | 0.882      | -            | -                | -                | -         |    -7.25 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           15 |     1229 | 2024-03-14 | Wildcard         | L   | 0.848      | -            | -                | -                | -         |    -6.20 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     1231 | 2024-03-14 | Wildcard         | L   | 0.848      | -            | -                | -                | -         |    -6.54 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     1261 | 2024-03-13 | Mythic           | W   | 0.841      | 0.143        | 0.003 (0.000)    | 0.402 (0.048)    | 0 (0.000) |    14.86 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     1302 | 2024-03-12 | bubibabu         | W   | 0.835      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.12 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     1728 | 2024-02-22 | MIGHT            | L   | 0.708      | -            | -                | -                | -         |   -11.30 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           10 |     1971 | 2024-02-13 | One More         | L   | 0.649      | -            | -                | -                | -         |    -9.59 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            9 |     1974 | 2024-02-13 | One More         | W   | 0.649      | 0.477        | 0.010 (0.003)    | 0.231 (0.071)    | 0 (0.000) |    11.09 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            8 |     3200 | 2023-12-05 | FLUFFY AIMERS    | L   | 0.183      | -            | -                | -                | -         |    -3.49 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            7 |     3236 | 2023-12-03 | M80              | L   | 0.169      | -            | -                | -                | -         |    -0.23 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            6 |     3239 | 2023-12-03 | huge sweaty      | W   | 0.168      | 0.294        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.80 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            5 |     3414 | 2023-11-22 | Elevate          | L   | 0.095      | -            | -                | -                | -         |    -0.93 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            4 |     3510 | 2023-11-17 | BOSS             | L   | 0.062      | -            | -                | -                | -         |    -0.53 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            3 |     3634 | 2023-11-13 | Party Astronauts | L   | 0.035      | -            | -                | -                | -         |    -0.32 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            2 |     3689 | 2023-11-11 | M80              | L   | 0.022      | -            | -                | -                | -         |    -0.03 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            1 |     3746 | 2023-11-08 | NRG              | L   | 0.002      | -            | -                | -                | -         |    -0.03 | CoJoMo, Gabe, mds, Sandman, xaler  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($599.78)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.215 | $2,000.00      | $430.97         |
| 2023-12-03 |      0.169 | $1,000.00      | $168.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
