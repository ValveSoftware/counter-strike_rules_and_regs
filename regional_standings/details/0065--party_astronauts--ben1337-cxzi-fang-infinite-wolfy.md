### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  1028.4<br />
<br />
Final Rank Value (1028.4) = Starting Rank Value (981.7) + Head To Head Adjustments (46.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.292<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.7
- 400 + ( ( 0.292 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 981.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |       25 | 2024-06-09 | Legacy        | L   | 1.000      | -            | -                | -                | -         |   -14.36 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           71 |       96 | 2024-06-08 | Wildcard      | W   | 1.000      | 0.384        | 0.060 (0.023)    | 0.591 (0.227)    | 0 (0.000) |    14.85 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           70 |      103 | 2024-06-08 | NRG           | L   | 1.000      | -            | -                | -                | -         |   -18.98 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           69 |      143 | 2024-06-07 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -15.94 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           68 |      152 | 2024-06-07 | Legacy        | W   | 1.000      | 0.143        | 0.087 (0.012)    | -                | 0 (0.000) |    16.67 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |      159 | 2024-06-07 | NRG           | W   | 1.000      | 0.384        | -                | 0.578 (0.222)    | 0 (0.000) |    12.28 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      171 | 2024-06-07 | Nouns         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.07 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      202 | 2024-06-06 | NRG           | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.578 (0.276)    | 0 (0.000) |    14.14 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |      218 | 2024-06-06 | E-Xolos LAZER | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.98 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |      272 | 2024-06-05 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |   -14.93 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |      321 | 2024-06-04 | Elevate       | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.531 (0.253)    | 0 (0.000) |    15.31 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |      633 | 2024-05-22 | Nouns         | L   | 1.000      | -            | -                | -                | -         |   -14.65 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |      643 | 2024-05-22 | M80           | W   | 1.000      | 0.477        | 0.206 (0.098)    | 0.749 (0.357)    | 0 (0.000) |    25.73 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |      648 | 2024-05-22 | M80           | L   | 1.000      | -            | -                | -                | -         |    -5.28 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |      681 | 2024-05-21 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.87 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |      684 | 2024-05-21 | Limitless     | W   | 1.000      | -            | -                | -                | -         |     4.03 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |      717 | 2024-05-20 | OMiT          | W   | 1.000      | -            | -                | -                | -         |     7.42 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |      786 | 2024-05-18 | NRG           | L   | 1.000      | -            | -                | -                | -         |   -14.08 | ben1337, chop, cxzi, Infinite, WolfY |
|           54 |      818 | 2024-05-17 | Legacy        | W   | 1.000      | 0.303        | 0.087 (0.026)    | -                | -         |    19.91 | ben1337, chop, cxzi, Infinite, WolfY |
|           53 |      847 | 2024-05-16 | FLUFFY AIMERS | W   | 1.000      | -            | -                | -                | -         |     8.71 | ben1337, chop, cxzi, Infinite, WolfY |
|           52 |      850 | 2024-05-16 | FLUFFY AIMERS | W   | 1.000      | -            | -                | -                | -         |     9.36 | ben1337, chop, cxzi, Infinite, WolfY |
|           51 |      940 | 2024-05-14 | Mythic        | W   | 1.000      | -            | -                | -                | -         |    12.04 | ben1337, chop, cxzi, RUSH, WolfY     |
|           50 |      948 | 2024-05-14 | Mythic        | L   | 1.000      | -            | -                | -                | -         |   -19.79 | ben1337, chop, cxzi, RUSH, WolfY     |
|           49 |     1041 | 2024-05-11 | BOSS          | L   | 1.000      | -            | -                | -                | -         |   -20.87 | ben1337, chop, cxzi, RUSH, WolfY     |
|           48 |     1047 | 2024-05-11 | Take Flyte    | L   | 1.000      | -            | -                | -                | -         |   -24.29 | ben1337, chop, cxzi, RUSH, WolfY     |
|           47 |     1103 | 2024-05-08 | LAG           | W   | 0.982      | 0.477        | 0.021 (0.010)    | 0.484 (0.227)    | -         |    10.85 | ben1337, chop, cxzi, RUSH, WolfY     |
|           46 |     1108 | 2024-05-08 | LAG           | W   | 0.982      | 0.477        | -                | 0.484 (0.227)    | -         |    11.75 | ben1337, chop, cxzi, RUSH, WolfY     |
|           45 |     1128 | 2024-05-07 | Elevate       | L   | 0.976      | -            | -                | -                | -         |   -18.33 | ben1337, chop, cxzi, RUSH, WolfY     |
|           44 |     1129 | 2024-05-07 | Elevate       | W   | 0.975      | 0.477        | 0.024 (0.011)    | 0.531 (0.247)    | -         |    12.18 | ben1337, chop, cxzi, RUSH, WolfY     |
|           43 |     1147 | 2024-05-06 | NRG           | L   | 0.969      | -            | -                | -                | -         |   -18.63 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |     1148 | 2024-05-06 | NRG           | W   | 0.968      | 0.477        | 0.024 (0.011)    | 0.578 (0.267)    | -         |    11.64 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |     1219 | 2024-05-02 | Wildcard      | L   | 0.942      | -            | -                | -                | -         |   -16.19 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |     1220 | 2024-05-02 | Wildcard      | W   | 0.941      | 0.477        | 0.060 (0.027)    | 0.591 (0.265)    | -         |    13.43 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |     1356 | 2024-04-27 | Aurora        | L   | 0.904      | -            | -                | -                | -         |    -1.75 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |     1358 | 2024-04-26 | sunday school | W   | 0.902      | -            | -                | -                | 1 (0.902) |     3.81 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |     1384 | 2024-04-25 | Aurora        | L   | 0.895      | -            | -                | -                | -         |    -1.52 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     1823 | 2024-04-09 | One More      | W   | 0.789      | -            | -                | -                | -         |     3.99 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     1830 | 2024-04-09 | One More      | W   | 0.788      | -            | -                | -                | -         |     4.14 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     1954 | 2024-04-04 | MIGHT         | W   | 0.755      | -            | -                | -                | -         |     2.27 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     1962 | 2024-04-04 | MIGHT         | W   | 0.755      | -            | -                | -                | -         |     2.32 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     2051 | 2024-04-02 | Take Flyte    | W   | 0.742      | -            | -                | -                | -         |     5.26 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           31 |     2054 | 2024-04-02 | Nouns         | L   | 0.742      | -            | -                | -                | -         |   -11.02 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           30 |     2133 | 2024-03-27 | Carpe Diem    | W   | 0.702      | -            | -                | -                | -         |     5.00 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     2137 | 2024-03-27 | Carpe Diem    | W   | 0.702      | -            | -                | -                | -         |     5.23 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     2179 | 2024-03-26 | Nouns         | L   | 0.696      | -            | -                | -                | -         |   -10.48 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     2183 | 2024-03-26 | Nouns         | L   | 0.695      | -            | -                | -                | -         |   -11.15 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     2261 | 2024-03-20 | BOSS          | W   | 0.656      | -            | -                | -                | -         |     6.46 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     2265 | 2024-03-20 | BOSS          | W   | 0.655      | -            | -                | -                | -         |     6.80 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     2282 | 2024-03-19 | Take Flyte    | W   | 0.649      | -            | -                | -                | -         |     4.73 | ben1337, chop, cxzi, RUSH, WolfY     |
|           23 |     2285 | 2024-03-19 | Take Flyte    | W   | 0.649      | -            | -                | -                | -         |     4.93 | ben1337, chop, cxzi, RUSH, WolfY     |
|           22 |     2414 | 2024-03-13 | Carpe Diem    | W   | 0.608      | -            | -                | -                | -         |     5.04 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     2452 | 2024-03-12 | Elevate       | W   | 0.602      | -            | -                | -                | -         |     7.51 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     2832 | 2024-02-24 | Wildcard      | L   | 0.488      | -            | -                | -                | -         |    -7.46 | ben1337, chop, cxzi, Walco, WolfY    |
|           19 |     2839 | 2024-02-24 | ex-CatEvil    | W   | 0.488      | -            | -                | -                | -         |     0.59 | ben1337, chop, cxzi, Walco, WolfY    |
|           18 |     2874 | 2024-02-22 | Liquid        | L   | 0.476      | -            | -                | -                | -         |    -0.29 | ben1337, chop, cxzi, Walco, WolfY    |
|           17 |     2876 | 2024-02-22 | NRG           | W   | 0.475      | -            | -                | -                | -         |     6.02 | ben1337, chop, cxzi, Walco, WolfY    |
|           16 |     2881 | 2024-02-22 | One More      | W   | 0.475      | -            | -                | -                | -         |     3.07 | ben1337, chop, cxzi, Walco, WolfY    |
|           15 |     2928 | 2024-02-20 | NRG           | W   | 0.463      | -            | -                | -                | -         |     5.98 | ben1337, chop, cxzi, Walco, WolfY    |
|           14 |     2929 | 2024-02-20 | Mythic        | W   | 0.462      | -            | -                | -                | -         |     5.62 | ben1337, chop, cxzi, Walco, WolfY    |
|           13 |     2953 | 2024-02-19 | NRG           | L   | 0.456      | -            | -                | -                | -         |    -8.57 | ben1337, chop, cxzi, Walco, WolfY    |
|           12 |     2956 | 2024-02-19 | OMiT          | W   | 0.455      | -            | -                | -                | -         |     3.58 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     3282 | 2024-02-02 | NRG           | L   | 0.342      | -            | -                | -                | -         |    -6.61 | ben1337, chop, cxzi, viz, WolfY      |
|           10 |     3284 | 2024-02-02 | Carpe Diem    | W   | 0.342      | -            | -                | -                | -         |     2.79 | ben1337, chop, cxzi, viz, WolfY      |
|            9 |     3288 | 2024-02-02 | NRG           | L   | 0.341      | -            | -                | -                | -         |    -6.68 | ben1337, chop, cxzi, viz, WolfY      |
|            8 |     3716 | 2024-01-17 | MIGHT         | L   | 0.235      | -            | -                | -                | -         |    -6.73 | ben1337, chop, cxzi, viz, WolfY      |
|            7 |     3770 | 2024-01-16 | Elevate       | L   | 0.228      | -            | -                | -                | -         |    -4.58 | ben1337, chop, cxzi, viz, WolfY      |
|            6 |     3816 | 2024-01-15 | Zomblers      | W   | 0.222      | -            | -                | -                | -         |     0.52 | ben1337, chop, cxzi, viz, WolfY      |
|            5 |     3839 | 2024-01-14 | Elevate       | L   | 0.216      | -            | -                | -                | -         |    -4.46 | ben1337, chop, cxzi, viz, WolfY      |
|            4 |     3846 | 2024-01-14 | Liquid        | L   | 0.215      | -            | -                | -                | -         |    -0.14 | ben1337, chop, cxzi, viz, WolfY      |
|            3 |     3865 | 2024-01-13 | Complexity    | L   | 0.209      | -            | -                | -                | -         |    -0.16 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     3907 | 2024-01-12 | Carpe Diem    | W   | 0.203      | -            | -                | -                | -         |     1.65 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     3912 | 2024-01-12 | Akimbo        | W   | 0.202      | -            | -                | -                | -         |     1.12 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,732.92)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-09 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-28 |      0.911 | $3,000.00      | $2,732.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
