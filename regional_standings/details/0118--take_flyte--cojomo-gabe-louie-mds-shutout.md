### Roster Details<br />
Team Name: Take Flyte<br />
Roster: CoJoMo, Gabe, Louie, mds, shutout<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [27]( ../standings_americas.md)<br />
Final Rank Value:  793.5<br />
<br />
Final Rank Value (793.5) = Starting Rank Value (788.3) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.3
- 400 + ( ( 0.195 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 788.3


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
|           40 |      334 | 2024-06-04 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -12.51 | CoJoMo, Gabe, Louie, mds, shutout  |
|           39 |      637 | 2024-05-22 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.87 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |      640 | 2024-05-22 | BOSS             | W   | 1.000      | 0.477        | 0.018 (0.009)    | 0.407 (0.194)    | 0 (0.000) |    15.62 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |      685 | 2024-05-21 | NRG              | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.578 (0.276)    | 0 (0.000) |    23.79 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |      687 | 2024-05-21 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.21 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |      720 | 2024-05-20 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -17.36 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |      725 | 2024-05-20 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.354 (0.169)    | 0 (0.000) |    14.00 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |      887 | 2024-05-15 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -13.83 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |      893 | 2024-05-15 | Mythic           | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.391 (0.187)    | 0 (0.000) |    17.85 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |      955 | 2024-05-14 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.85 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |      959 | 2024-05-14 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -9.52 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |     1011 | 2024-05-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.23 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |     1018 | 2024-05-12 | Mythic           | W   | 1.000      | 0.270        | 0.010 (0.003)    | 0.391 (0.106)    | 0 (0.000) |    17.86 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |     1039 | 2024-05-11 | BOSS             | W   | 1.000      | 0.270        | 0.018 (0.005)    | 0.407 (0.110)    | 0 (0.000) |    18.47 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |     1043 | 2024-05-11 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.14 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     1047 | 2024-05-11 | Party Astronauts | W   | 1.000      | 0.270        | 0.048 (0.013)    | 0.677 (0.183)    | 0 (0.000) |    24.29 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     1107 | 2024-05-08 | Nouns            | L   | 0.982      | -            | -                | -                | -         |    -6.60 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     1109 | 2024-05-08 | Nouns            | L   | 0.981      | -            | -                | -                | -         |    -7.00 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     1618 | 2024-04-17 | Nouns            | L   | 0.841      | -            | -                | -                | -         |    -5.43 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     1769 | 2024-04-10 | MIGHT            | L   | 0.795      | -            | -                | -                | -         |   -19.23 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     1776 | 2024-04-10 | MIGHT            | W   | 0.795      | -            | -                | -                | 0 (0.000) |     5.62 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     1953 | 2024-04-04 | Carpe Diem       | W   | 0.755      | 0.477        | 0.007 (0.002)    | 0.321 (0.116)    | 0 (0.000) |    10.52 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     1959 | 2024-04-04 | Carpe Diem       | W   | 0.755      | 0.477        | 0.007 (0.002)    | 0.321 (0.116)    | 0 (0.000) |    11.24 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     2001 | 2024-04-03 | Limitless        | W   | 0.749      | -            | -                | -                | -         |     8.84 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     2004 | 2024-04-03 | Limitless        | W   | 0.748      | -            | -                | -                | -         |     9.42 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     2051 | 2024-04-02 | Party Astronauts | L   | 0.742      | -            | -                | -                | -         |    -5.26 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     2055 | 2024-04-02 | BOSS             | L   | 0.741      | -            | -                | -                | -         |    -9.64 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     2140 | 2024-03-27 | M80              | L   | 0.702      | -            | -                | -                | -         |    -1.89 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     2145 | 2024-03-27 | M80              | L   | 0.701      | -            | -                | -                | -         |    -1.93 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     2266 | 2024-03-20 | LAG              | W   | 0.655      | 0.477        | 0.021 (0.007)    | 0.484 (0.151)    | -         |    14.29 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     2268 | 2024-03-20 | LAG              | L   | 0.655      | -            | -                | -                | -         |    -6.33 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            9 |     2282 | 2024-03-19 | Party Astronauts | L   | 0.649      | -            | -                | -                | -         |    -4.73 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            8 |     2285 | 2024-03-19 | Party Astronauts | L   | 0.649      | -            | -                | -                | -         |    -4.93 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            7 |     2380 | 2024-03-14 | Wildcard         | L   | 0.615      | -            | -                | -                | -         |    -4.59 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     2382 | 2024-03-14 | Wildcard         | L   | 0.615      | -            | -                | -                | -         |    -4.78 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     2412 | 2024-03-13 | Mythic           | W   | 0.608      | -            | -                | -                | -         |    11.23 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     2453 | 2024-03-12 | bubibabu         | W   | 0.602      | -            | -                | -                | -         |     2.06 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     2879 | 2024-02-22 | MIGHT            | L   | 0.475      | -            | -                | -                | -         |   -11.54 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            2 |     3122 | 2024-02-13 | One More         | L   | 0.416      | -            | -                | -                | -         |    -7.87 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            1 |     3125 | 2024-02-13 | One More         | W   | 0.415      | -            | -                | -                | -         |     5.31 | BeaKie, CoJoMo, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,600.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
