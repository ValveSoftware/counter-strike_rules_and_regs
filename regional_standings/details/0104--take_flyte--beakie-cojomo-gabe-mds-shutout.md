### Roster Details<br />
Team Name: Take Flyte<br />
Roster: BeaKie, CoJoMo, Gabe, mds, shutout<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  775.4<br />
<br />
Final Rank Value (775.4) = Starting Rank Value (775.2) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.2
- 400 + ( ( 0.193 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 775.2


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
|           42 |      137 | 2024-05-22 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.97 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           41 |      140 | 2024-05-22 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.477 (0.228)    | 0 (0.000) |    15.51 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           40 |      185 | 2024-05-21 | NRG              | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.605 (0.288)    | 0 (0.000) |    23.39 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           39 |      187 | 2024-05-21 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.61 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |      220 | 2024-05-20 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -16.93 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |      225 | 2024-05-20 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | 0.315 (0.150)    | 0 (0.000) |    14.47 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |      387 | 2024-05-15 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -14.79 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |      393 | 2024-05-15 | Mythic           | W   | 1.000      | 0.477        | -                | 0.439 (0.209)    | 0 (0.000) |    16.80 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |      455 | 2024-05-14 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -9.10 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |      459 | 2024-05-14 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -9.80 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |      511 | 2024-05-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.88 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |      518 | 2024-05-12 | Mythic           | W   | 1.000      | 0.270        | -                | 0.439 (0.119)    | 0 (0.000) |    16.67 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |      539 | 2024-05-11 | BOSS             | W   | 1.000      | 0.270        | 0.016 (0.004)    | 0.477 (0.129)    | 0 (0.000) |    18.32 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |      543 | 2024-05-11 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.91 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |      547 | 2024-05-11 | Party Astronauts | W   | 1.000      | 0.270        | 0.010 (0.003)    | 0.670 (0.181)    | 0 (0.000) |    23.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |      607 | 2024-05-08 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |      609 | 2024-05-08 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.69 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     1118 | 2024-04-17 | Nouns            | L   | 0.920      | -            | -                | -                | -         |    -6.42 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     1269 | 2024-04-10 | MIGHT            | L   | 0.874      | -            | -                | -                | -         |   -18.37 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     1276 | 2024-04-10 | MIGHT            | W   | 0.874      | 0.477        | 0.001 (0.000)    | -                | 0 (0.000) |     8.98 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     1453 | 2024-04-04 | Carpe Diem       | W   | 0.835      | 0.477        | -                | 0.369 (0.147)    | 0 (0.000) |     8.14 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     1459 | 2024-04-04 | Carpe Diem       | W   | 0.834      | 0.477        | -                | 0.369 (0.147)    | 0 (0.000) |     8.68 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     1501 | 2024-04-03 | Limitless        | W   | 0.828      | 0.477        | 0.001 (0.001)    | -                | -         |    10.08 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     1504 | 2024-04-03 | Limitless        | W   | 0.828      | 0.477        | 0.001 (0.001)    | -                | -         |    10.81 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     1551 | 2024-04-02 | Party Astronauts | L   | 0.821      | -            | -                | -                | -         |    -7.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     1555 | 2024-04-02 | BOSS             | L   | 0.820      | -            | -                | -                | -         |   -10.55 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     1640 | 2024-03-27 | M80              | L   | 0.781      | -            | -                | -                | -         |    -2.40 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     1645 | 2024-03-27 | M80              | L   | 0.781      | -            | -                | -                | -         |    -2.46 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     1766 | 2024-03-20 | LAG              | W   | 0.734      | 0.477        | 0.014 (0.005)    | 0.440 (0.154)    | -         |    15.96 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           13 |     1768 | 2024-03-20 | LAG              | L   | 0.734      | -            | -                | -                | -         |    -7.10 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           12 |     1782 | 2024-03-19 | Party Astronauts | L   | 0.728      | -            | -                | -                | -         |    -6.78 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           11 |     1785 | 2024-03-19 | Party Astronauts | L   | 0.728      | -            | -                | -                | -         |    -7.16 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     1880 | 2024-03-14 | Wildcard         | L   | 0.694      | -            | -                | -                | -         |    -6.33 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            9 |     1882 | 2024-03-14 | Wildcard         | L   | 0.694      | -            | -                | -                | -         |    -6.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            8 |     1912 | 2024-03-13 | Mythic           | W   | 0.687      | -            | -                | -                | -         |    11.20 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            7 |     1953 | 2024-03-12 | bubibabu         | W   | 0.681      | -            | -                | -                | -         |     2.49 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     2379 | 2024-02-22 | MIGHT            | L   | 0.554      | -            | -                | -                | -         |   -11.13 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     2622 | 2024-02-13 | One More         | L   | 0.495      | -            | -                | -                | -         |    -9.06 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     2625 | 2024-02-13 | One More         | W   | 0.495      | 0.477        | 0.005 (0.001)    | -                | -         |     6.64 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     3851 | 2023-12-05 | FLUFFY AIMERS    | L   | 0.028      | -            | -                | -                | -         |    -0.66 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            2 |     3887 | 2023-12-03 | M80              | L   | 0.015      | -            | -                | -                | -         |    -0.03 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            1 |     3890 | 2023-12-03 | huge sweaty      | W   | 0.014      | -            | -                | -                | -         |     0.05 | CoJoMo, Gabe, mds, Sandman, xaler  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,737.50)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $1,600.00      | $1,600.00       |
| 2023-12-10 |      0.061 | $2,000.00      | $122.78         |
| 2023-12-03 |      0.015 | $1,000.00      | $14.72          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
