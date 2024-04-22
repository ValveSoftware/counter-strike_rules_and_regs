### Roster Details<br />
Team Name: Take Flyte<br />
Roster: BeaKie, CoJoMo, Gabe, mds, shutout<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  721.4<br />
<br />
Final Rank Value (721.4) = Starting Rank Value (732.2) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.2
- 400 + ( ( 0.172 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 732.2


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
|           32 |      171 | 2024-04-17 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.87 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |      322 | 2024-04-10 | MIGHT            | L   | 1.000      | -            | -                | -                | -         |   -18.79 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |      329 | 2024-04-10 | MIGHT            | W   | 1.000      | 0.477        | 0.003 (0.002)    | 0.233 (0.111)    | 0 (0.000) |    12.45 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |      506 | 2024-04-04 | Carpe Diem       | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.315 (0.150)    | 0 (0.000) |    13.44 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |      512 | 2024-04-04 | Carpe Diem       | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.315 (0.150)    | 0 (0.000) |    14.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |      554 | 2024-04-03 | Limitless        | W   | 1.000      | 0.477        | 0.001 (0.001)    | 0.201 (0.096)    | 0 (0.000) |    14.24 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |      557 | 2024-04-03 | Limitless        | W   | 1.000      | 0.477        | 0.001 (0.001)    | 0.201 (0.096)    | 0 (0.000) |    15.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |      604 | 2024-04-02 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -8.30 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |      608 | 2024-04-02 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -10.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |      693 | 2024-03-27 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |      698 | 2024-03-27 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.69 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |      819 | 2024-03-20 | LAG              | W   | 0.982      | 0.477        | 0.032 (0.015)    | 0.560 (0.262)    | 0 (0.000) |    24.11 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           20 |      821 | 2024-03-20 | LAG              | L   | 0.982      | -            | -                | -                | -         |    -6.34 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           19 |      835 | 2024-03-19 | Party Astronauts | L   | 0.976      | -            | -                | -                | -         |    -8.73 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           18 |      838 | 2024-03-19 | Party Astronauts | L   | 0.975      | -            | -                | -                | -         |    -9.38 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           17 |      933 | 2024-03-14 | Wildcard         | L   | 0.942      | -            | -                | -                | -         |    -8.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |      935 | 2024-03-14 | Wildcard         | L   | 0.941      | -            | -                | -                | -         |    -8.79 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |      965 | 2024-03-13 | Mythic           | W   | 0.935      | 0.143        | 0.003 (0.000)    | 0.413 (0.055)    | 0 (0.000) |    15.67 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     1006 | 2024-03-12 | bubibabu         | W   | 0.928      | -            | -                | -                | 0 (0.000) |     4.32 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     1432 | 2024-02-22 | MIGHT            | L   | 0.801      | -            | -                | -                | -         |   -12.58 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     1675 | 2024-02-13 | One More         | L   | 0.742      | -            | -                | -                | -         |   -11.41 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     1678 | 2024-02-13 | One More         | W   | 0.742      | 0.477        | 0.012 (0.004)    | 0.216 (0.077)    | 0 (0.000) |    12.19 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           10 |     2904 | 2023-12-05 | FLUFFY AIMERS    | L   | 0.276      | -            | -                | -                | -         |    -5.14 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            9 |     2940 | 2023-12-03 | M80              | L   | 0.262      | -            | -                | -                | -         |    -1.63 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            8 |     2943 | 2023-12-03 | huge sweaty      | W   | 0.262      | 0.294        | -                | 0.012 (0.001)    | 0 (0.000) |     1.16 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            7 |     3118 | 2023-11-22 | Elevate          | L   | 0.189      | -            | -                | -                | -         |    -1.89 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            6 |     3214 | 2023-11-17 | BOSS             | L   | 0.156      | -            | -                | -                | -         |    -1.46 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            5 |     3338 | 2023-11-13 | Party Astronauts | L   | 0.129      | -            | -                | -                | -         |    -1.61 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            4 |     3393 | 2023-11-11 | M80              | L   | 0.115      | -            | -                | -                | -         |    -0.77 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            3 |     3450 | 2023-11-08 | NRG              | L   | 0.095      | -            | -                | -                | -         |    -1.29 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            2 |     3494 | 2023-11-06 | Limitless        | W   | 0.082      | 0.500        | 0.001 (0.000)    | 0.201 (0.008)    | -         |     1.10 | CoJoMo, Gabe, mds, Sandman, xaler  |
|            1 |     3836 | 2023-10-25 | Kari             | W   | 0.002      | 0.500        | 0.001 (0.000)    | -                | -         |     0.01 | CoJoMo, Gabe, mds, Sandman, xaler  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($879.70)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.309 | $2,000.00      | $617.58         |
| 2023-12-03 |      0.262 | $1,000.00      | $262.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
