### Roster Details<br />
Team Name: Wildcard<br />
Roster: Grizz, JBa, SLIGHT, Sonic, stanislaw<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  965.0<br />
<br />
Final Rank Value (965.0) = Starting Rank Value (877.8) + Head To Head Adjustments (87.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.8
- 400 + ( ( 0.246 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 877.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      118 | 2024-05-23 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.42 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           65 |      132 | 2024-05-22 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.44 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           64 |      136 | 2024-05-22 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.64 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           63 |      144 | 2024-05-22 | LAG              | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.440 (0.169)    | 0 (0.000) |     9.42 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           62 |      192 | 2024-05-21 | Carpe Diem       | W   | 1.000      | 0.477        | -                | 0.369 (0.176)    | 0 (0.000) |     6.66 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           61 |      198 | 2024-05-21 | Carpe Diem       | W   | 1.000      | 0.477        | -                | 0.369 (0.176)    | 0 (0.000) |     7.08 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           60 |      255 | 2024-05-19 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.75 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           59 |      313 | 2024-05-17 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -17.32 | Grizz, JBa, motm, SLIGHT, stanislaw      |
|           58 |      383 | 2024-05-15 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.477 (0.228)    | 0 (0.000) |    10.11 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           57 |      394 | 2024-05-15 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.477 (0.228)    | 0 (0.000) |    10.93 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           56 |      439 | 2024-05-14 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | 0 (0.000) |     9.68 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           55 |      443 | 2024-05-14 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | -         |    10.45 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |      489 | 2024-05-13 | Nouns            | W   | 1.000      | 0.477        | 0.030 (0.014)    | 0.601 (0.286)    | -         |    18.28 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           53 |      491 | 2024-05-13 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |      534 | 2024-05-11 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.27 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |      536 | 2024-05-11 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -22.28 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |      586 | 2024-05-09 | MIGHT            | W   | 1.000      | -            | -                | -                | -         |     4.90 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |      590 | 2024-05-09 | MIGHT            | W   | 1.000      | -            | -                | -                | -         |     5.13 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |      602 | 2024-05-08 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     5.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |      605 | 2024-05-08 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     5.24 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |      719 | 2024-05-02 | Party Astronauts | W   | 1.000      | 0.477        | -                | 0.670 (0.319)    | -         |    16.89 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           45 |      720 | 2024-05-02 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -14.51 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           44 |      883 | 2024-04-25 | NRG              | W   | 0.975      | 0.477        | -                | 0.605 (0.281)    | -         |    13.96 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           43 |      885 | 2024-04-25 | NRG              | L   | 0.974      | -            | -                | -                | -         |   -16.89 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           42 |      925 | 2024-04-23 | Elevate          | W   | 0.961      | 0.477        | 0.013 (0.006)    | 0.528 (0.242)    | -         |    14.26 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           41 |      927 | 2024-04-23 | Elevate          | L   | 0.961      | -            | -                | -                | -         |   -16.15 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           40 |     1119 | 2024-04-17 | Elevate          | L   | 0.920      | -            | -                | -                | -         |   -16.97 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           39 |     1372 | 2024-04-08 | Cloud9           | L   | 0.862      | -            | -                | -                | -         |    -1.38 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           38 |     1401 | 2024-04-08 | Virtus.pro       | L   | 0.856      | -            | -                | -                | -         |    -0.41 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           37 |     1641 | 2024-03-27 | Mythic           | W   | 0.781      | -            | -                | -                | -         |     8.16 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           36 |     1644 | 2024-03-27 | Mythic           | W   | 0.781      | -            | -                | -                | -         |     8.69 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           35 |     1680 | 2024-03-26 | LAG              | W   | 0.775      | -            | -                | -                | -         |    11.09 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           34 |     1684 | 2024-03-26 | LAG              | L   | 0.775      | -            | -                | -                | -         |   -13.59 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           33 |     1880 | 2024-03-14 | Take Flyte       | W   | 0.694      | -            | -                | -                | -         |     6.33 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           32 |     1882 | 2024-03-14 | Take Flyte       | W   | 0.694      | -            | -                | -                | -         |     6.66 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           31 |     1906 | 2024-03-13 | M80              | W   | 0.688      | 0.477        | 0.135 (0.044)    | 0.789 (0.259)    | -         |    18.75 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           30 |     1908 | 2024-03-13 | M80              | L   | 0.688      | -            | -                | -                | -         |    -2.80 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           29 |     1954 | 2024-03-12 | Mythic           | L   | 0.681      | -            | -                | -                | -         |   -14.65 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           28 |     2187 | 2024-03-03 | M80              | L   | 0.619      | -            | -                | -                | -         |    -2.58 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           27 |     2207 | 2024-03-02 | BESTIA           | W   | 0.613      | -            | -                | -                | 1 (0.613) |    11.61 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           26 |     2228 | 2024-03-01 | RED Canids       | L   | 0.606      | -            | -                | -                | -         |    -6.94 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           25 |     2308 | 2024-02-25 | Liquid           | L   | 0.575      | -            | -                | -                | -         |    -0.29 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           24 |     2313 | 2024-02-25 | BOSS             | L   | 0.574      | -            | -                | -                | -         |   -11.15 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           23 |     2331 | 2024-02-24 | NRG              | W   | 0.568      | -            | -                | -                | -         |     7.21 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           22 |     2332 | 2024-02-24 | Party Astronauts | W   | 0.567      | -            | -                | -                | -         |     8.35 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           21 |     2343 | 2024-02-24 | G3               | W   | 0.567      | -            | -                | -                | -         |     4.56 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           20 |     2380 | 2024-02-22 | NRG              | L   | 0.554      | -            | -                | -                | -         |   -10.49 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           19 |     2729 | 2024-02-04 | Elevate          | L   | 0.434      | -            | -                | -                | -         |    -7.82 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           18 |     2753 | 2024-02-03 | Nouns            | W   | 0.428      | -            | -                | -                | -         |     6.32 | Infinite, JBa, motm, SLIGHT, stanislaw   |
|           17 |     2786 | 2024-02-02 | NRG              | W   | 0.420      | -            | -                | -                | -         |     5.11 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           16 |     2791 | 2024-02-02 | Carpe Diem       | W   | 0.420      | -            | -                | -                | -         |     2.17 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           15 |     3055 | 2024-01-20 | M80              | L   | 0.334      | -            | -                | -                | -         |    -1.30 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           14 |     3099 | 2024-01-19 | Liquid           | L   | 0.328      | -            | -                | -                | -         |    -0.14 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     3104 | 2024-01-19 | M80              | W   | 0.328      | 0.143        | 0.135 (0.006)    | -                | -         |     9.13 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     3161 | 2024-01-18 | Nouns            | W   | 0.321      | -            | -                | -                | -         |     5.12 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     3164 | 2024-01-18 | NRG              | W   | 0.321      | -            | -                | -                | -         |     4.12 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     3166 | 2024-01-18 | MIGHT            | W   | 0.320      | -            | -                | -                | -         |     2.34 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3213 | 2024-01-17 | Mythic           | W   | 0.314      | -            | -                | -                | -         |     3.52 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3267 | 2024-01-16 | Liquid           | L   | 0.307      | -            | -                | -                | -         |    -0.12 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3318 | 2024-01-15 | ex-CatEvil       | W   | 0.301      | -            | -                | -                | -         |     0.58 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3361 | 2024-01-13 | M80              | W   | 0.289      | 0.143        | 0.135 (0.006)    | -                | -         |     8.20 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3408 | 2024-01-12 | BOSS             | W   | 0.282      | -            | -                | -                | -         |     4.06 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     3411 | 2024-01-12 | vagrants         | W   | 0.282      | -            | -                | -                | -         |     0.59 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     3653 | 2023-12-16 | FPL Friends      | L   | 0.101      | -            | -                | -                | -         |    -2.58 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     3721 | 2023-12-11 | NRG              | L   | 0.068      | -            | -                | -                | -         |    -1.24 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     3908 | 2023-12-02 | M80              | L   | 0.008      | -            | -                | -                | -         |    -0.02 | CLASIA, Infinite, JBa, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,588.94)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
