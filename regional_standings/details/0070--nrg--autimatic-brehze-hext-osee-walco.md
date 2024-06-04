### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, oSee, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  916.6<br />
<br />
Final Rank Value (916.6) = Starting Rank Value (821.7) + Head To Head Adjustments (94.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.7
- 400 + ( ( 0.217 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 821.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |      117 | 2024-05-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -12.35 | autimatic, Brehze, HexT, oSee, Walco |
|           73 |      134 | 2024-05-22 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -14.64 | autimatic, Brehze, HexT, oSee, Walco |
|           72 |      139 | 2024-05-22 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.00 | autimatic, Brehze, HexT, oSee, Walco |
|           71 |      162 | 2024-05-22 | Legacy           | W   | 1.000      | 0.384        | 0.024 (0.009)    | -                | 0 (0.000) |    18.62 | autimatic, Brehze, HexT, oSee, Walco |
|           70 |      185 | 2024-05-21 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -23.39 | autimatic, Brehze, HexT, oSee, Walco |
|           69 |      187 | 2024-05-21 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.392 (0.187)    | 0 (0.000) |     7.61 | autimatic, Brehze, HexT, oSee, Walco |
|           68 |      218 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.86 | autimatic, Brehze, HexT, oSee, Walco |
|           67 |      223 | 2024-05-20 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.19 | autimatic, Brehze, HexT, oSee, Walco |
|           66 |      281 | 2024-05-18 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -16.91 | autimatic, Brehze, HexT, oSee, Walco |
|           65 |      286 | 2024-05-18 | Party Astronauts | W   | 1.000      | 0.303        | -                | 0.670 (0.203)    | 0 (0.000) |    13.66 | autimatic, Brehze, HexT, oSee, Walco |
|           64 |      320 | 2024-05-17 | BOSS             | W   | 1.000      | 0.303        | 0.016 (0.005)    | -                | 0 (0.000) |     8.98 | autimatic, Brehze, HexT, oSee, Walco |
|           63 |      388 | 2024-05-15 | LAG              | W   | 1.000      | 0.477        | 0.014 (0.006)    | 0.440 (0.210)    | 0 (0.000) |     9.75 | autimatic, Brehze, HexT, oSee, Walco |
|           62 |      396 | 2024-05-15 | LAG              | W   | 1.000      | 0.477        | 0.014 (0.006)    | 0.440 (0.210)    | 0 (0.000) |    10.53 | autimatic, Brehze, HexT, oSee, Walco |
|           61 |      441 | 2024-05-14 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.67 | autimatic, Brehze, HexT, oSee, Walco |
|           60 |      447 | 2024-05-14 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.08 | autimatic, Brehze, HexT, oSee, Walco |
|           59 |      511 | 2024-05-12 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.88 | autimatic, Brehze, HexT, oSee, Walco |
|           58 |      513 | 2024-05-12 | Elevate          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.12 | autimatic, Brehze, HexT, oSee, Walco |
|           57 |      543 | 2024-05-11 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     9.91 | autimatic, Brehze, HexT, oSee, Walco |
|           56 |      545 | 2024-05-11 | BOSS             | W   | 1.000      | 0.270        | 0.016 (0.004)    | -                | -         |    12.74 | autimatic, Brehze, HexT, oSee, Walco |
|           55 |      647 | 2024-05-06 | Party Astronauts | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.670 (0.319)    | -         |    18.58 | autimatic, Brehze, HexT, oSee, Walco |
|           54 |      648 | 2024-05-06 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -12.67 | autimatic, Brehze, HexT, oSee, Walco |
|           53 |      883 | 2024-04-25 | Wildcard         | L   | 0.975      | -            | -                | -                | -         |   -13.96 | autimatic, Brehze, HexT, oSee, Walco |
|           52 |      885 | 2024-04-25 | Wildcard         | W   | 0.974      | 0.477        | 0.012 (0.006)    | 0.615 (0.286)    | -         |    16.89 | autimatic, Brehze, HexT, oSee, Walco |
|           51 |     1121 | 2024-04-17 | G3               | L   | 0.920      | -            | -                | -                | -         |   -20.50 | autimatic, Brehze, HexT, oSee, Walco |
|           50 |     1180 | 2024-04-15 | Mythic           | W   | 0.907      | 0.477        | -                | 0.439 (0.190)    | -         |     9.42 | autimatic, Brehze, HexT, oSee, Walco |
|           49 |     1181 | 2024-04-15 | Mythic           | W   | 0.907      | 0.477        | -                | 0.439 (0.190)    | -         |    10.13 | autimatic, Brehze, HexT, oSee, Walco |
|           48 |     1267 | 2024-04-10 | BOSS             | W   | 0.875      | 0.477        | 0.016 (0.007)    | 0.477 (0.199)    | -         |    13.56 | autimatic, Brehze, HexT, oSee, Walco |
|           47 |     1272 | 2024-04-10 | BOSS             | L   | 0.874      | -            | -                | -                | -         |   -14.13 | autimatic, Brehze, HexT, oSee, Walco |
|           46 |     1326 | 2024-04-09 | Carpe Diem       | W   | 0.868      | -            | -                | -                | -         |     5.20 | autimatic, Brehze, HexT, oSee, Walco |
|           45 |     1329 | 2024-04-09 | Carpe Diem       | W   | 0.868      | -            | -                | -                | -         |     5.45 | autimatic, Brehze, HexT, oSee, Walco |
|           44 |     1630 | 2024-03-27 | Nouns            | W   | 0.782      | 0.477        | 0.030 (0.011)    | 0.601 (0.224)    | -         |    15.93 | autimatic, Brehze, HexT, oSee, Walco |
|           43 |     1635 | 2024-03-27 | Nouns            | L   | 0.781      | -            | -                | -                | -         |    -8.63 | autimatic, Brehze, HexT, oSee, Walco |
|           42 |     1682 | 2024-03-26 | MIGHT            | W   | 0.775      | -            | -                | -                | -         |     7.32 | autimatic, Brehze, HexT, oSee, Walco |
|           41 |     1687 | 2024-03-26 | MIGHT            | W   | 0.775      | -            | -                | -                | -         |     7.76 | autimatic, Brehze, HexT, oSee, Walco |
|           40 |     1853 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.701      | 0.477        | 0.018 (0.006)    | -                | -         |    11.15 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     1855 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.701      | -            | -                | -                | -         |   -11.14 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     1873 | 2024-03-14 | Limitless        | W   | 0.695      | -            | -                | -                | -         |     5.67 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     1878 | 2024-03-14 | Limitless        | W   | 0.695      | -            | -                | -                | -         |     5.95 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     1951 | 2024-03-12 | Carpe Diem       | L   | 0.681      | -            | -                | -                | -         |   -15.95 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     2206 | 2024-03-02 | MIBR             | L   | 0.613      | -            | -                | -                | -         |    -0.33 | Brehze, daps, FaNg, HexT, oSee       |
|           34 |     2225 | 2024-03-01 | Imperial         | L   | 0.607      | -            | -                | -                | -         |    -0.50 | Brehze, daps, FaNg, HexT, oSee       |
|           33 |     2331 | 2024-02-24 | Wildcard         | L   | 0.568      | -            | -                | -                | -         |    -7.21 | Brehze, daps, FaNg, HexT, oSee       |
|           32 |     2334 | 2024-02-24 | Limitless        | W   | 0.567      | -            | -                | -                | -         |     5.05 | Brehze, daps, FaNg, HexT, oSee       |
|           31 |     2340 | 2024-02-24 | Mythic           | W   | 0.567      | -            | -                | -                | -         |     7.89 | Brehze, daps, FaNg, HexT, oSee       |
|           30 |     2376 | 2024-02-22 | Party Astronauts | L   | 0.554      | -            | -                | -                | -         |    -7.76 | Brehze, daps, FaNg, HexT, oSee       |
|           29 |     2380 | 2024-02-22 | Wildcard         | W   | 0.554      | -            | -                | -                | -         |    10.49 | Brehze, daps, FaNg, HexT, oSee       |
|           28 |     2428 | 2024-02-20 | Party Astronauts | L   | 0.542      | -            | -                | -                | -         |    -7.83 | Brehze, daps, FaNg, HexT, oSee       |
|           27 |     2453 | 2024-02-19 | Party Astronauts | W   | 0.536      | -            | -                | -                | -         |     9.17 | Brehze, daps, FaNg, HexT, oSee       |
|           26 |     2455 | 2024-02-19 | Mythic           | W   | 0.534      | -            | -                | -                | -         |     7.92 | Brehze, daps, FaNg, HexT, oSee       |
|           25 |     2756 | 2024-02-03 | Elevate          | L   | 0.427      | -            | -                | -                | -         |    -6.13 | Brehze, daps, FaNg, HexT, oSee       |
|           24 |     2782 | 2024-02-02 | Party Astronauts | W   | 0.421      | -            | -                | -                | -         |     7.46 | Brehze, daps, FaNg, HexT, oSee       |
|           23 |     2786 | 2024-02-02 | Wildcard         | L   | 0.420      | -            | -                | -                | -         |    -5.11 | Brehze, daps, FaNg, HexT, oSee       |
|           22 |     2788 | 2024-02-02 | Party Astronauts | W   | 0.420      | -            | -                | -                | -         |     7.58 | Brehze, daps, FaNg, HexT, oSee       |
|           21 |     3164 | 2024-01-18 | Wildcard         | L   | 0.321      | -            | -                | -                | -         |    -4.12 | Brehze, daps, FaNg, HexT, oSee       |
|           20 |     3168 | 2024-01-18 | Elevate          | W   | 0.320      | -            | -                | -                | -         |     5.48 | Brehze, daps, FaNg, HexT, oSee       |
|           19 |     3214 | 2024-01-17 | squids           | W   | 0.314      | -            | -                | -                | -         |     0.85 | Brehze, daps, FaNg, HexT, oSee       |
|           18 |     3265 | 2024-01-16 | Elevate          | L   | 0.307      | -            | -                | -                | -         |    -4.51 | Brehze, daps, FaNg, HexT, oSee       |
|           17 |     3271 | 2024-01-16 | regain           | W   | 0.307      | -            | -                | -                | -         |     1.21 | Brehze, daps, FaNg, HexT, oSee       |
|           16 |     3311 | 2024-01-15 | TSM Shimmer      | W   | 0.301      | -            | -                | -                | -         |     3.20 | Brehze, daps, FaNg, HexT, oSee       |
|           15 |     3340 | 2024-01-14 | Rocket           | L   | 0.295      | -            | -                | -                | -         |    -7.78 | Brehze, daps, FaNg, HexT, oSee       |
|           14 |     3350 | 2024-01-14 | LOS              | W   | 0.293      | -            | -                | -                | -         |     1.12 | Brehze, daps, FaNg, HexT, oSee       |
|           13 |     3366 | 2024-01-13 | Nouns            | L   | 0.287      | -            | -                | -                | -         |    -3.71 | Brehze, daps, FaNg, HexT, oSee       |
|           12 |     3405 | 2024-01-12 | Complexity       | L   | 0.282      | -            | -                | -                | -         |    -0.15 | Brehze, daps, FaNg, HexT, oSee       |
|           11 |     3414 | 2024-01-12 | Elevate          | W   | 0.281      | -            | -                | -                | -         |     4.51 | Brehze, daps, FaNg, HexT, oSee       |
|           10 |     3496 | 2024-01-09 | Liquid           | L   | 0.262      | -            | -                | -                | -         |    -0.07 | Brehze, daps, FaNg, HexT, oSee       |
|            9 |     3497 | 2024-01-09 | my life be like  | W   | 0.262      | -            | -                | -                | -         |     2.65 | Brehze, daps, FaNg, HexT, oSee       |
|            8 |     3500 | 2024-01-09 | MagicLight       | W   | 0.262      | -            | -                | -                | -         |     0.70 | Brehze, daps, FaNg, HexT, oSee       |
|            7 |     3648 | 2023-12-16 | LAG              | W   | 0.101      | -            | -                | -                | -         |     1.94 | Brehze, daps, FaNg, HexT, oSee       |
|            6 |     3676 | 2023-12-15 | Revenge Nation   | W   | 0.094      | -            | -                | -                | -         |     0.98 | Brehze, daps, FaNg, HexT, oSee       |
|            5 |     3712 | 2023-12-12 | Nouns            | L   | 0.074      | -            | -                | -                | -         |    -1.77 | Brehze, daps, FaNg, HexT, oSee       |
|            4 |     3721 | 2023-12-11 | Wildcard         | W   | 0.068      | -            | -                | -                | -         |     1.24 | Brehze, daps, FaNg, HexT, oSee       |
|            3 |     3731 | 2023-12-10 | huge sweaty      | W   | 0.060      | -            | -                | -                | -         |     0.16 | Brehze, daps, FaNg, HexT, oSee       |
|            2 |     3889 | 2023-12-03 | M80              | L   | 0.014      | -            | -                | -                | -         |    -0.03 | Brehze, daps, FaNg, HexT, oSee       |
|            1 |     3907 | 2023-12-02 | Party Astronauts | W   | 0.008      | -            | -                | -                | -         |     0.07 | Brehze, daps, FaNg, HexT, oSee       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
