### Roster Details<br />
Team Name: Nouns<br />
Roster: cJ dA K1nG, Jeorge, junior, nosraC, RUSH<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [13]( ../standings_americas.md)<br />
Final Rank Value:  999.8<br />
<br />
Final Rank Value (999.8) = Starting Rank Value (895.3) + Head To Head Adjustments (104.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.3
- 400 + ( ( 0.255 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 895.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      103 | 2024-05-24 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.27 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           60 |      117 | 2024-05-23 | NRG              | W   | 1.000      | 0.384        | -                | 0.605 (0.232)    | 0 (0.000) |    12.35 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           59 |      133 | 2024-05-22 | Party Astronauts | W   | 1.000      | 0.384        | -                | 0.670 (0.257)    | 0 (0.000) |    14.32 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           58 |      180 | 2024-05-21 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | 0 (0.000) |     6.60 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           57 |      183 | 2024-05-21 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.018 (0.008)    | -                | 0 (0.000) |     7.00 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           56 |      260 | 2024-05-19 | FLUFFY AIMERS    | W   | 1.000      | 0.384        | 0.018 (0.007)    | -                | 0 (0.000) |     7.37 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           55 |      281 | 2024-05-18 | NRG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.91 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           54 |      282 | 2024-05-18 | M80              | W   | 1.000      | 0.303        | 0.135 (0.041)    | 0.789 (0.239)    | 0 (0.000) |    26.39 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           53 |      313 | 2024-05-17 | Wildcard         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.32 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           52 |      386 | 2024-05-15 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -24.89 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           51 |      391 | 2024-05-15 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -26.27 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           50 |      489 | 2024-05-13 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -18.28 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           49 |      491 | 2024-05-13 | Wildcard         | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.615 (0.293)    | 0 (0.000) |    13.00 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           48 |      533 | 2024-05-11 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -17.75 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           47 |      535 | 2024-05-11 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -23.31 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           46 |      537 | 2024-05-11 | Elevate          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.82 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           45 |      582 | 2024-05-09 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.477 (0.228)    | -         |     9.46 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           44 |      587 | 2024-05-09 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | 0.477 (0.228)    | -         |    10.21 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           43 |      607 | 2024-05-08 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     7.22 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           42 |      609 | 2024-05-08 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     7.69 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           41 |      926 | 2024-04-23 | One More         | L   | 0.961      | -            | -                | -                | -         |   -24.58 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           40 |      928 | 2024-04-23 | One More         | W   | 0.961      | -            | -                | -                | -         |     5.26 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           39 |     1114 | 2024-04-17 | Elevate          | L   | 0.921      | -            | -                | -                | -         |   -18.02 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           38 |     1118 | 2024-04-17 | Take Flyte       | W   | 0.920      | -            | -                | -                | -         |     6.42 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           37 |     1178 | 2024-04-15 | Limitless        | W   | 0.908      | -            | -                | -                | -         |     3.79 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           36 |     1179 | 2024-04-15 | Limitless        | W   | 0.908      | -            | -                | -                | -         |     3.93 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           35 |     1268 | 2024-04-10 | Elevate          | W   | 0.875      | -            | -                | -                | -         |    10.16 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           34 |     1274 | 2024-04-10 | Elevate          | W   | 0.874      | -            | -                | -                | -         |    10.93 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           33 |     1324 | 2024-04-09 | MIGHT            | W   | 0.868      | -            | -                | -                | -         |     4.36 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           32 |     1327 | 2024-04-09 | MIGHT            | W   | 0.868      | -            | -                | -                | -         |     4.54 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           31 |     1456 | 2024-04-04 | LAG              | L   | 0.834      | -            | -                | -                | -         |   -15.87 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           30 |     1461 | 2024-04-04 | LAG              | W   | 0.834      | -            | -                | -                | -         |    10.37 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           29 |     1500 | 2024-04-03 | Party Astronauts | L   | 0.828      | -            | -                | -                | -         |   -21.57 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           28 |     1550 | 2024-04-02 | BOSS             | W   | 0.821      | -            | -                | -                | -         |     7.83 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           27 |     1554 | 2024-04-02 | Party Astronauts | W   | 0.821      | -            | -                | -                | -         |    11.34 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           26 |     1630 | 2024-03-27 | NRG              | L   | 0.782      | -            | -                | -                | -         |   -15.93 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           25 |     1635 | 2024-03-27 | NRG              | W   | 0.781      | -            | -                | -                | -         |     8.63 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           24 |     1679 | 2024-03-26 | Party Astronauts | W   | 0.775      | 0.477        | -                | 0.670 (0.247)    | -         |    10.92 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           23 |     1683 | 2024-03-26 | Party Astronauts | W   | 0.775      | 0.477        | -                | 0.670 (0.247)    | -         |    11.69 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           22 |     1762 | 2024-03-20 | Mythic           | L   | 0.735      | -            | -                | -                | -         |   -15.25 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           21 |     1767 | 2024-03-20 | Mythic           | W   | 0.734      | -            | -                | -                | -         |     7.86 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           20 |     1874 | 2024-03-14 | M80              | W   | 0.695      | 0.477        | 0.135 (0.045)    | 0.789 (0.262)    | -         |    17.90 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           19 |     1877 | 2024-03-14 | M80              | W   | 0.695      | 0.477        | 0.135 (0.045)    | 0.789 (0.261)    | -         |    18.52 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           18 |     2204 | 2024-03-02 | Legacy           | L   | 0.613      | -            | -                | -                | -         |    -7.88 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           17 |     2232 | 2024-03-01 | FURIA            | L   | 0.606      | -            | -                | -                | -         |    -1.61 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           16 |     2295 | 2024-02-26 | Liquid           | L   | 0.582      | -            | -                | -                | -         |    -0.29 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           15 |     2310 | 2024-02-25 | BOSS             | W   | 0.575      | -            | -                | -                | -         |     7.36 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           14 |     2314 | 2024-02-25 | Liquid           | W   | 0.574      | 0.143        | 0.493 (0.040)    | -                | -         |    17.84 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           13 |     2753 | 2024-02-03 | Wildcard         | L   | 0.428      | -            | -                | -                | -         |    -6.32 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           12 |     2814 | 2024-02-01 | BOSS             | W   | 0.415      | -            | -                | -                | -         |     5.54 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           11 |     2818 | 2024-02-01 | Elevate          | L   | 0.414      | -            | -                | -                | -         |    -7.26 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           10 |     2823 | 2024-02-01 | Rocket           | W   | 0.413      | -            | -                | -                | -         |     1.66 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            9 |     3161 | 2024-01-18 | Wildcard         | L   | 0.321      | -            | -                | -                | -         |    -5.12 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            8 |     3163 | 2024-01-18 | Rocket           | W   | 0.321      | -            | -                | -                | -         |     1.27 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            7 |     3165 | 2024-01-18 | Zomblers         | W   | 0.320      | -            | -                | -                | -         |     0.89 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            6 |     3220 | 2024-01-17 | Snakes Den       | W   | 0.314      | -            | -                | -                | -         |     0.57 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            5 |     3341 | 2024-01-14 | Carpe Diem       | W   | 0.295      | -            | -                | -                | -         |     1.68 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            4 |     3343 | 2024-01-14 | M80              | L   | 0.295      | -            | -                | -                | -         |    -1.04 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            3 |     3366 | 2024-01-13 | NRG              | W   | 0.287      | -            | -                | -                | -         |     3.71 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            2 |     3402 | 2024-01-12 | vagrants         | W   | 0.282      | -            | -                | -                | -         |     0.53 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            1 |     3415 | 2024-01-12 | Liquid           | L   | 0.281      | -            | -                | -                | -         |    -0.11 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-18 |      1.000 | $4,000.00      | $4,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
