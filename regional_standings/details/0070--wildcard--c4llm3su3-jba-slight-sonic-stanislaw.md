### Roster Details<br />
Team Name: Wildcard<br />
Roster: C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  922.5<br />
<br />
Final Rank Value (922.5) = Starting Rank Value (874.3) + Head To Head Adjustments (48.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 874.3
- 400 + ( ( 0.249 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 874.3


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
|           50 |       68 | 2024-05-02 | Party Astronauts | W   | 1.000      | 0.477        | 0.035 (0.017)    | 0.570 (0.272)    | 0 (0.000) |    17.36 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           49 |       69 | 2024-05-02 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -14.00 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           48 |      232 | 2024-04-25 | NRG              | W   | 1.000      | 0.477        | 0.006 (0.003)    | 0.539 (0.257)    | 0 (0.000) |    14.07 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           47 |      234 | 2024-04-25 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -17.59 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           46 |      274 | 2024-04-23 | Elevate          | W   | 1.000      | 0.477        | 0.036 (0.017)    | 0.361 (0.172)    | 0 (0.000) |    15.35 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           45 |      276 | 2024-04-23 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.18 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           44 |      468 | 2024-04-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -17.76 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           43 |      721 | 2024-04-08 | Cloud9           | L   | 1.000      | -            | -                | -                | -         |    -0.65 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           42 |      750 | 2024-04-08 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |    -0.38 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           41 |      990 | 2024-03-27 | Mythic           | W   | 0.935      | 0.477        | -                | 0.402 (0.179)    | 0 (0.000) |     8.93 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           40 |      993 | 2024-03-27 | Mythic           | W   | 0.935      | 0.477        | -                | 0.402 (0.179)    | 0 (0.000) |     9.58 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           39 |     1029 | 2024-03-26 | LAG              | W   | 0.929      | 0.477        | 0.033 (0.014)    | 0.484 (0.214)    | 0 (0.000) |    14.30 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           38 |     1033 | 2024-03-26 | LAG              | L   | 0.929      | -            | -                | -                | -         |   -15.08 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           37 |     1229 | 2024-03-14 | Take Flyte       | W   | 0.848      | 0.477        | -                | 0.282 (0.114)    | 0 (0.000) |     6.20 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           36 |     1231 | 2024-03-14 | Take Flyte       | W   | 0.848      | 0.477        | -                | 0.282 (0.114)    | 0 (0.000) |     6.54 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           35 |     1255 | 2024-03-13 | M80              | W   | 0.842      | 0.477        | 0.149 (0.060)    | 0.505 (0.203)    | 0 (0.000) |    22.86 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           34 |     1257 | 2024-03-13 | M80              | L   | 0.842      | -            | -                | -                | -         |    -3.42 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           33 |     1303 | 2024-03-12 | Mythic           | L   | 0.835      | -            | -                | -                | -         |   -18.58 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           32 |     1536 | 2024-03-03 | M80              | L   | 0.773      | -            | -                | -                | -         |    -3.27 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           31 |     1556 | 2024-03-02 | BESTIA           | W   | 0.767      | 0.143        | 0.025 (0.003)    | -                | 1 (0.767) |    10.35 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           30 |     1577 | 2024-03-01 | RED Canids       | L   | 0.760      | -            | -                | -                | -         |    -9.57 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           29 |     1657 | 2024-02-25 | Liquid           | L   | 0.729      | -            | -                | -                | -         |    -1.69 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           28 |     1662 | 2024-02-25 | BOSS             | L   | 0.728      | -            | -                | -                | -         |   -12.84 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           27 |     1680 | 2024-02-24 | NRG              | W   | 0.722      | -            | -                | -                | -         |     8.51 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           26 |     1681 | 2024-02-24 | Party Astronauts | W   | 0.721      | 0.143        | 0.035 (0.004)    | 0.570 (0.059)    | -         |     9.95 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           25 |     1692 | 2024-02-24 | G3               | W   | 0.721      | -            | -                | -                | -         |     6.46 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           24 |     1729 | 2024-02-22 | NRG              | L   | 0.708      | -            | -                | -                | -         |   -14.03 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           23 |     2078 | 2024-02-04 | Elevate          | L   | 0.588      | -            | -                | -                | -         |   -10.07 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           22 |     2102 | 2024-02-03 | Nouns            | W   | 0.582      | -            | -                | -                | -         |     4.42 | Infinite, JBa, motm, SLIGHT, stanislaw   |
|           21 |     2135 | 2024-02-02 | NRG              | W   | 0.575      | -            | -                | -                | -         |     6.21 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           20 |     2140 | 2024-02-02 | Carpe Diem       | W   | 0.574      | -            | -                | -                | -         |     4.22 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           19 |     2404 | 2024-01-20 | M80              | L   | 0.488      | -            | -                | -                | -         |    -2.06 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           18 |     2448 | 2024-01-19 | Liquid           | L   | 0.482      | -            | -                | -                | -         |    -1.09 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           17 |     2453 | 2024-01-19 | M80              | W   | 0.482      | 0.143        | 0.149 (0.010)    | -                | -         |    13.30 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           16 |     2510 | 2024-01-18 | Nouns            | W   | 0.476      | -            | -                | -                | -         |     3.80 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           15 |     2513 | 2024-01-18 | NRG              | W   | 0.475      | -            | -                | -                | -         |     5.51 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           14 |     2515 | 2024-01-18 | MIGHT            | W   | 0.474      | -            | -                | -                | -         |     4.00 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     2562 | 2024-01-17 | Mythic           | W   | 0.468      | -            | -                | -                | -         |     5.04 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     2616 | 2024-01-16 | Liquid           | L   | 0.461      | -            | -                | -                | -         |    -0.90 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     2667 | 2024-01-15 | ex-CatEvil       | W   | 0.455      | -            | -                | -                | -         |     0.88 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     2710 | 2024-01-13 | M80              | W   | 0.443      | 0.143        | 0.149 (0.009)    | -                | -         |    12.56 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     2757 | 2024-01-12 | BOSS             | W   | 0.436      | 0.143        | 0.049 (0.003)    | -                | -         |     7.45 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     2760 | 2024-01-12 | vagrants         | W   | 0.436      | -            | -                | -                | -         |     0.99 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3002 | 2023-12-16 | FPL Friends      | L   | 0.255      | -            | -                | -                | -         |    -6.15 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3070 | 2023-12-11 | NRG              | L   | 0.222      | -            | -                | -                | -         |    -4.37 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3257 | 2023-12-02 | M80              | L   | 0.162      | -            | -                | -                | -         |    -0.51 | CLASIA, Infinite, JBa, SLIGHT, stanislaw |
|            4 |     3582 | 2023-11-15 | M80              | L   | 0.049      | -            | -                | -                | -         |    -0.16 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     3587 | 2023-11-15 | NRG              | L   | 0.048      | -            | -                | -                | -         |    -0.95 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     3616 | 2023-11-14 | Limitless        | W   | 0.042      | -            | -                | -                | -         |     0.31 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     3618 | 2023-11-14 | Carpe Diem       | W   | 0.041      | -            | -                | -                | -         |     0.39 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,000.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
