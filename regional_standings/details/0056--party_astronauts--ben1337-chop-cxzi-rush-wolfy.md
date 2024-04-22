### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, chop, cxzi, RUSH, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  925.4<br />
<br />
Final Rank Value (925.4) = Starting Rank Value (805.8) + Head To Head Adjustments (119.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.152[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.8
- 400 + ( ( 0.210 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 805.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      376 | 2024-04-09 | One More        | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.216 (0.103)    | 0 (0.000) |     6.74 | ben1337, chop, cxzi, RUSH, WolfY   |
|           50 |      383 | 2024-04-09 | One More        | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.216 (0.103)    | 0 (0.000) |     7.16 | ben1337, chop, cxzi, RUSH, WolfY   |
|           49 |      507 | 2024-04-04 | MIGHT           | W   | 1.000      | 0.477        | -                | 0.233 (0.111)    | 0 (0.000) |     7.25 | ben1337, chop, cxzi, RUSH, WolfY   |
|           48 |      515 | 2024-04-04 | MIGHT           | W   | 1.000      | 0.477        | -                | 0.233 (0.111)    | 0 (0.000) |     7.73 | ben1337, chop, cxzi, RUSH, WolfY   |
|           47 |      553 | 2024-04-03 | Nouns           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.55 | ben1337, chop, CLASIA, cxzi, RUSH  |
|           46 |      560 | 2024-04-03 | BOSS            | W   | 1.000      | 0.143        | 0.034 (0.005)    | -                | 0 (0.000) |    12.41 | ben1337, chop, CLASIA, cxzi, RUSH  |
|           45 |      604 | 2024-04-02 | Take Flyte      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.30 | ben1337, chop, CLASIA, cxzi, WolfY |
|           44 |      607 | 2024-04-02 | Nouns           | L   | 1.000      | -            | -                | -                | -         |   -16.73 | ben1337, chop, CLASIA, cxzi, WolfY |
|           43 |      686 | 2024-03-27 | Carpe Diem      | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.315 (0.150)    | 0 (0.000) |     8.71 | ben1337, chop, cxzi, RUSH, WolfY   |
|           42 |      690 | 2024-03-27 | Carpe Diem      | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.315 (0.150)    | 0 (0.000) |     9.36 | ben1337, chop, cxzi, RUSH, WolfY   |
|           41 |      732 | 2024-03-26 | Nouns           | L   | 1.000      | -            | -                | -                | -         |   -17.43 | ben1337, chop, cxzi, RUSH, WolfY   |
|           40 |      736 | 2024-03-26 | Nouns           | L   | 1.000      | -            | -                | -                | -         |   -19.00 | ben1337, chop, cxzi, RUSH, WolfY   |
|           39 |      814 | 2024-03-20 | BOSS            | W   | 0.982      | 0.477        | 0.034 (0.016)    | 0.530 (0.248)    | 0 (0.000) |    13.72 | ben1337, chop, cxzi, RUSH, WolfY   |
|           38 |      818 | 2024-03-20 | BOSS            | W   | 0.982      | 0.477        | 0.034 (0.016)    | 0.530 (0.248)    | -         |    14.95 | ben1337, chop, cxzi, RUSH, WolfY   |
|           37 |      835 | 2024-03-19 | Take Flyte      | W   | 0.976      | 0.477        | -                | 0.318 (0.148)    | -         |     8.73 | ben1337, chop, cxzi, RUSH, WolfY   |
|           36 |      838 | 2024-03-19 | Take Flyte      | W   | 0.975      | 0.477        | -                | 0.318 (0.148)    | -         |     9.38 | ben1337, chop, cxzi, RUSH, WolfY   |
|           35 |      967 | 2024-03-13 | Carpe Diem      | W   | 0.934      | -            | -                | -                | -         |    10.51 | ben1337, chop, cxzi, RUSH, WolfY   |
|           34 |     1005 | 2024-03-12 | Elevate         | W   | 0.928      | 0.143        | 0.038 (0.005)    | -                | -         |    16.62 | ben1337, chop, cxzi, RUSH, WolfY   |
|           33 |     1385 | 2024-02-24 | Wildcard        | L   | 0.815      | -            | -                | -                | -         |   -10.69 | ben1337, chop, cxzi, Walco, WolfY  |
|           32 |     1392 | 2024-02-24 | ex-CatEvil      | W   | 0.815      | -            | -                | -                | -         |     2.03 | ben1337, chop, cxzi, Walco, WolfY  |
|           31 |     1427 | 2024-02-22 | Liquid          | L   | 0.802      | -            | -                | -                | -         |    -2.26 | ben1337, chop, cxzi, Walco, WolfY  |
|           30 |     1429 | 2024-02-22 | NRG             | W   | 0.801      | -            | -                | -                | -         |    12.68 | ben1337, chop, cxzi, Walco, WolfY  |
|           29 |     1434 | 2024-02-22 | One More        | W   | 0.801      | -            | -                | -                | -         |    10.03 | ben1337, chop, cxzi, Walco, WolfY  |
|           28 |     1481 | 2024-02-20 | NRG             | W   | 0.789      | -            | -                | -                | -         |    13.23 | ben1337, chop, cxzi, Walco, WolfY  |
|           27 |     1482 | 2024-02-20 | Mythic          | W   | 0.788      | -            | -                | -                | -         |    11.97 | ben1337, chop, cxzi, Walco, WolfY  |
|           26 |     1506 | 2024-02-19 | NRG             | L   | 0.783      | -            | -                | -                | -         |   -11.24 | ben1337, chop, cxzi, Walco, WolfY  |
|           25 |     1509 | 2024-02-19 | G3              | W   | 0.781      | -            | -                | -                | -         |    11.57 | ben1337, chop, cxzi, Walco, WolfY  |
|           24 |     1835 | 2024-02-02 | NRG             | L   | 0.668      | -            | -                | -                | -         |    -9.99 | ben1337, chop, cxzi, viz, WolfY    |
|           23 |     1837 | 2024-02-02 | Carpe Diem      | W   | 0.668      | -            | -                | -                | -         |     8.44 | ben1337, chop, cxzi, viz, WolfY    |
|           22 |     1841 | 2024-02-02 | NRG             | L   | 0.668      | -            | -                | -                | -         |   -10.07 | ben1337, chop, cxzi, viz, WolfY    |
|           21 |     2269 | 2024-01-17 | MIGHT           | L   | 0.562      | -            | -                | -                | -         |   -10.83 | ben1337, chop, cxzi, viz, WolfY    |
|           20 |     2323 | 2024-01-16 | Elevate         | L   | 0.555      | -            | -                | -                | -         |    -7.18 | ben1337, chop, cxzi, viz, WolfY    |
|           19 |     2369 | 2024-01-15 | Zomblers        | W   | 0.548      | -            | -                | -                | -         |     2.43 | ben1337, chop, cxzi, viz, WolfY    |
|           18 |     2392 | 2024-01-14 | Elevate         | L   | 0.543      | -            | -                | -                | -         |    -7.46 | ben1337, chop, cxzi, viz, WolfY    |
|           17 |     2399 | 2024-01-14 | Liquid          | L   | 0.542      | -            | -                | -                | -         |    -1.67 | ben1337, chop, cxzi, viz, WolfY    |
|           16 |     2418 | 2024-01-13 | Complexity      | L   | 0.535      | -            | -                | -                | -         |    -0.69 | ben1337, chop, cxzi, viz, WolfY    |
|           15 |     2460 | 2024-01-12 | Carpe Diem      | W   | 0.530      | -            | -                | -                | -         |     7.01 | ben1337, chop, cxzi, viz, WolfY    |
|           14 |     2465 | 2024-01-12 | my life be like | W   | 0.529      | -            | -                | -                | -         |     6.53 | ben1337, chop, cxzi, viz, WolfY    |
|           13 |     2771 | 2023-12-11 | BOSS            | L   | 0.316      | -            | -                | -                | -         |    -4.08 | ben1337, chop, cxzi, PwnAlone, viz |
|           12 |     2800 | 2023-12-09 | BOSS            | L   | 0.302      | -            | -                | -                | -         |    -3.95 | ben1337, chop, cxzi, PwnAlone, viz |
|           11 |     2827 | 2023-12-08 | Nouns           | W   | 0.295      | 0.500        | 0.019 (0.003)    | -                | -         |     3.75 | ben1337, chop, cxzi, PwnAlone, viz |
|           10 |     2846 | 2023-12-07 | Evil Geniuses   | W   | 0.289      | -            | -                | -                | -         |     2.88 | ben1337, chop, cxzi, PwnAlone, viz |
|            9 |     2875 | 2023-12-06 | M80             | L   | 0.282      | -            | -                | -                | -         |    -2.50 | ben1337, chop, cxzi, PwnAlone, viz |
|            8 |     2907 | 2023-12-05 | Carpe Diem      | W   | 0.275      | -            | -                | -                | -         |     3.71 | ben1337, chop, cxzi, PwnAlone, viz |
|            7 |     2960 | 2023-12-02 | NRG             | L   | 0.255      | -            | -                | -                | -         |    -4.29 | ben1337, chop, cxzi, PwnAlone, viz |
|            6 |     3116 | 2023-11-22 | BOSS            | W   | 0.189      | 0.500        | 0.034 (0.003)    | -                | -         |     3.60 | ben1337, chop, cxzi, PwnAlone, viz |
|            5 |     3133 | 2023-11-21 | Mythic          | W   | 0.181      | -            | -                | -                | -         |     2.57 | ben1337, chop, cxzi, PwnAlone, viz |
|            4 |     3249 | 2023-11-16 | M80             | L   | 0.148      | -            | -                | -                | -         |    -1.36 | ben1337, chop, cxzi, PwnAlone, viz |
|            3 |     3288 | 2023-11-15 | NRG             | L   | 0.142      | -            | -                | -                | -         |    -2.36 | ben1337, chop, cxzi, PwnAlone, viz |
|            2 |     3289 | 2023-11-15 | M80             | W   | 0.141      | -            | -                | -                | -         |     3.16 | ben1337, chop, cxzi, PwnAlone, viz |
|            1 |     3338 | 2023-11-13 | Take Flyte      | W   | 0.129      | -            | -                | -                | -         |     1.61 | ben1337, chop, cxzi, PwnAlone, viz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,859.86)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
