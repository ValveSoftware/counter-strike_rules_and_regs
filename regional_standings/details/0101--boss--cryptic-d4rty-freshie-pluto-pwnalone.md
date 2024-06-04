### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, Pluto, PwnAlone<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [101](../standings_global.md)<br />
Regional Rank: [25]( ../standings_americas.md)<br />
Final Rank Value:  786.5<br />
<br />
Final Rank Value (786.5) = Starting Rank Value (842.4) + Head To Head Adjustments (-56.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.4
- 400 + ( ( 0.228 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 842.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      137 | 2024-05-22 | Take Flyte        | W   | 1.000      | 0.477        | 0.006 (0.003)    | 0.392 (0.187)    | 0 (0.000) |    15.97 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           60 |      140 | 2024-05-22 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -15.51 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           59 |      222 | 2024-05-20 | Carpe Diem        | L   | 1.000      | -            | -                | -                | -         |   -19.24 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           58 |      226 | 2024-05-20 | Carpe Diem        | W   | 1.000      | 0.477        | -                | 0.369 (0.176)    | 0 (0.000) |    11.97 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           57 |      257 | 2024-05-19 | M80               | L   | 1.000      | -            | -                | -                | -         |    -2.77 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           56 |      259 | 2024-05-19 | M80               | L   | 1.000      | -            | -                | -                | -         |    -2.85 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           55 |      320 | 2024-05-17 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -8.98 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           54 |      383 | 2024-05-15 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |   -10.11 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           53 |      394 | 2024-05-15 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |   -10.93 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           52 |      445 | 2024-05-14 | MIGHT             | W   | 1.000      | 0.477        | -                | 0.167 (0.080)    | 0 (0.000) |     7.73 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           51 |      451 | 2024-05-14 | MIGHT             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           50 |      539 | 2024-05-11 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -18.32 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           49 |      541 | 2024-05-11 | Party Astronauts  | W   | 1.000      | 0.270        | 0.010 (0.003)    | 0.670 (0.181)    | 0 (0.000) |    19.78 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           48 |      545 | 2024-05-11 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -12.74 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           47 |      582 | 2024-05-09 | Nouns             | L   | 1.000      | -            | -                | -                | -         |    -9.46 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           46 |      587 | 2024-05-09 | Nouns             | L   | 1.000      | -            | -                | -                | -         |   -10.21 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           45 |      702 | 2024-05-03 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -8.52 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           44 |      741 | 2024-05-02 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -1.34 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           43 |      762 | 2024-05-01 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -2.05 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           42 |      907 | 2024-04-24 | Mythic            | L   | 0.968      | -            | -                | -                | -         |   -19.88 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           41 |      908 | 2024-04-24 | Mythic            | W   | 0.968      | 0.477        | -                | 0.439 (0.203)    | 0 (0.000) |    10.29 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |     1237 | 2024-04-11 | Limitless         | W   | 0.881      | -            | -                | -                | 0 (0.000) |     6.57 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |     1241 | 2024-04-11 | Limitless         | W   | 0.881      | -            | -                | -                | 0 (0.000) |     6.96 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |     1267 | 2024-04-10 | NRG               | L   | 0.875      | -            | -                | -                | -         |   -13.56 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1272 | 2024-04-10 | NRG               | W   | 0.874      | 0.477        | 0.010 (0.004)    | 0.605 (0.252)    | -         |    14.13 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1325 | 2024-04-09 | LAG               | W   | 0.868      | 0.477        | 0.014 (0.006)    | 0.440 (0.182)    | -         |    14.49 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1328 | 2024-04-09 | LAG               | W   | 0.868      | 0.477        | 0.014 (0.006)    | 0.440 (0.182)    | -         |    15.63 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1458 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.834      | 0.477        | 0.018 (0.007)    | 0.315 (0.125)    | -         |    12.99 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     1464 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.834      | 0.477        | 0.018 (0.007)    | 0.315 (0.125)    | -         |    13.99 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     1507 | 2024-04-03 | Party Astronauts  | L   | 0.827      | -            | -                | -                | -         |   -17.95 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     1550 | 2024-04-02 | Nouns             | L   | 0.821      | -            | -                | -                | -         |    -7.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     1555 | 2024-04-02 | Take Flyte        | W   | 0.820      | -            | -                | -                | -         |    10.55 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     1632 | 2024-03-27 | One More          | W   | 0.782      | 0.477        | 0.005 (0.002)    | -                | -         |     9.01 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           28 |     1636 | 2024-03-27 | One More          | L   | 0.781      | -            | -                | -                | -         |   -16.00 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           27 |     1678 | 2024-03-26 | Elevate           | L   | 0.775      | -            | -                | -                | -         |   -10.26 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           26 |     1685 | 2024-03-26 | Elevate           | L   | 0.775      | -            | -                | -                | -         |   -10.97 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           25 |     1761 | 2024-03-20 | Party Astronauts  | L   | 0.735      | -            | -                | -                | -         |    -8.99 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           24 |     1765 | 2024-03-20 | Party Astronauts  | L   | 0.735      | -            | -                | -                | -         |    -9.57 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           23 |     2197 | 2024-03-03 | Liquid            | L   | 0.619      | -            | -                | -                | -         |    -0.24 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           22 |     2214 | 2024-03-02 | Complexity        | L   | 0.612      | -            | -                | -                | -         |    -0.42 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           21 |     2229 | 2024-03-01 | MIBR              | W   | 0.606      | 0.143        | 0.308 (0.027)    | -                | 1 (0.606) |    18.79 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           20 |     2297 | 2024-02-26 | Liquid            | L   | 0.580      | -            | -                | -                | -         |    -0.19 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           19 |     2310 | 2024-02-25 | Nouns             | L   | 0.575      | -            | -                | -                | -         |    -7.36 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           18 |     2313 | 2024-02-25 | Wildcard          | W   | 0.574      | 0.143        | 0.012 (0.001)    | -                | -         |    11.15 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           17 |     2814 | 2024-02-01 | Nouns             | L   | 0.415      | -            | -                | -                | -         |    -5.54 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           16 |     2816 | 2024-02-01 | Rocket            | W   | 0.414      | -            | -                | -                | -         |     2.19 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           15 |     2821 | 2024-02-01 | Elevate           | L   | 0.414      | -            | -                | -                | -         |    -6.37 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           14 |     3098 | 2024-01-19 | M80               | L   | 0.328      | -            | -                | -                | -         |    -0.92 | brett, Cryptic, cynic, d4rty, freshie    |
|           13 |     3109 | 2024-01-19 | Liquid            | L   | 0.327      | -            | -                | -                | -         |    -0.10 | brett, Cryptic, cynic, d4rty, freshie    |
|           12 |     3345 | 2024-01-14 | Rocket            | W   | 0.294      | -            | -                | -                | -         |     1.42 | brett, Cryptic, cynic, d4rty, freshie    |
|           11 |     3368 | 2024-01-13 | my life be like   | W   | 0.287      | -            | -                | -                | -         |     2.72 | brett, Cryptic, cynic, d4rty, freshie    |
|           10 |     3408 | 2024-01-12 | Wildcard          | L   | 0.282      | -            | -                | -                | -         |    -4.06 | brett, Cryptic, cynic, d4rty, freshie    |
|            9 |     3410 | 2024-01-12 | For Fun           | W   | 0.282      | -            | -                | -                | -         |     2.66 | brett, Cryptic, cynic, d4rty, freshie    |
|            8 |     3711 | 2023-12-12 | M80               | L   | 0.075      | -            | -                | -                | -         |    -0.20 | brett, Cryptic, d4rty, freshie, WolfY    |
|            7 |     3718 | 2023-12-11 | Party Astronauts  | W   | 0.069      | -            | -                | -                | -         |     0.57 | brett, Cryptic, d4rty, freshie, WolfY    |
|            6 |     3730 | 2023-12-10 | M80               | L   | 0.061      | -            | -                | -                | -         |    -0.16 | brett, Cryptic, d4rty, freshie, WolfY    |
|            5 |     3747 | 2023-12-09 | Party Astronauts  | W   | 0.055      | -            | -                | -                | -         |     0.45 | brett, Cryptic, d4rty, freshie, WolfY    |
|            4 |     3750 | 2023-12-09 | Elevate           | L   | 0.054      | -            | -                | -                | -         |    -0.87 | brett, Cryptic, d4rty, dea, freshie      |
|            3 |     3754 | 2023-12-09 | Supernova         | W   | 0.054      | -            | -                | -                | 1 (0.054) |     0.13 | brett, Cryptic, d4rty, dea, freshie      |
|            2 |     3796 | 2023-12-07 | M80               | L   | 0.041      | -            | -                | -                | -         |    -0.11 | brett, Cryptic, d4rty, freshie, WolfY    |
|            1 |     3821 | 2023-12-06 | Nouns             | W   | 0.035      | -            | -                | -                | -         |     0.24 | brett, Cryptic, d4rty, freshie, WolfY    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,782.28)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2023-12-10 |      0.061 | $20,000.00     | $1,227.80       |
| 2023-12-09 |      0.054 | $1,000.00      | $54.47          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
