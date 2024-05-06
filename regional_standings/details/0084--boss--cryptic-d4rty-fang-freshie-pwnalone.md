### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, FaNg, freshie, PwnAlone<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  857.2<br />
<br />
Final Rank Value (857.2) = Starting Rank Value (891.6) + Head To Head Adjustments (-34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 891.6
- 400 + ( ( 0.258 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 891.6


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
|           52 |       51 | 2024-05-03 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -7.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           51 |       90 | 2024-05-02 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -1.79 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           50 |      111 | 2024-05-01 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -1.96 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           49 |      256 | 2024-04-24 | Mythic            | L   | 1.000      | -            | -                | -                | -         |   -21.91 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           48 |      257 | 2024-04-24 | Mythic            | W   | 1.000      | 0.477        | -                | 0.402 (0.192)    | 0 (0.000) |     9.13 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           47 |      586 | 2024-04-11 | Limitless         | W   | 1.000      | 0.477        | -                | 0.173 (0.082)    | 0 (0.000) |     6.70 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           46 |      590 | 2024-04-11 | Limitless         | W   | 1.000      | 0.477        | -                | 0.173 (0.082)    | 0 (0.000) |     7.11 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           45 |      616 | 2024-04-10 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -16.65 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           44 |      621 | 2024-04-10 | NRG               | W   | 1.000      | 0.477        | 0.006 (0.003)    | 0.539 (0.257)    | 0 (0.000) |    14.77 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           43 |      674 | 2024-04-09 | LAG               | W   | 1.000      | 0.477        | 0.033 (0.016)    | 0.484 (0.231)    | 0 (0.000) |    16.20 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           42 |      677 | 2024-04-09 | LAG               | W   | 1.000      | 0.477        | 0.033 (0.016)    | 0.484 (0.231)    | 0 (0.000) |    17.68 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           41 |      807 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.988      | -            | -                | -                | 0 (0.000) |     4.36 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |      813 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.988      | 0.477        | 0.027 (0.013)    | 0.207 (0.097)    | 0 (0.000) |    16.36 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |      856 | 2024-04-03 | Party Astronauts  | L   | 0.981      | -            | -                | -                | -         |   -12.22 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |      899 | 2024-04-02 | Nouns             | L   | 0.976      | -            | -                | -                | -         |   -14.33 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |      904 | 2024-04-02 | Take Flyte        | W   | 0.974      | -            | -                | -                | -         |     9.56 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |      981 | 2024-03-27 | One More          | W   | 0.936      | 0.477        | 0.010 (0.005)    | 0.231 (0.103)    | -         |    10.22 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           35 |      985 | 2024-03-27 | One More          | L   | 0.935      | -            | -                | -                | -         |   -19.67 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           34 |     1027 | 2024-03-26 | Elevate           | L   | 0.929      | -            | -                | -                | -         |   -12.41 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           33 |     1034 | 2024-03-26 | Elevate           | L   | 0.929      | -            | -                | -                | -         |   -13.45 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           32 |     1110 | 2024-03-20 | Party Astronauts  | L   | 0.889      | -            | -                | -                | -         |   -12.36 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           31 |     1114 | 2024-03-20 | Party Astronauts  | L   | 0.889      | -            | -                | -                | -         |   -13.37 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           30 |     1546 | 2024-03-03 | Liquid            | L   | 0.773      | -            | -                | -                | -         |    -1.64 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           29 |     1563 | 2024-03-02 | Complexity        | L   | 0.766      | -            | -                | -                | -         |    -0.61 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           28 |     1578 | 2024-03-01 | MIBR              | W   | 0.760      | 0.143        | 0.638 (0.069)    | 0.940 (0.102)    | 1 (0.760) |    23.57 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           27 |     1646 | 2024-02-26 | Liquid            | L   | 0.734      | -            | -                | -                | -         |    -1.35 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           26 |     1659 | 2024-02-25 | Nouns             | L   | 0.729      | -            | -                | -                | -         |   -15.74 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           25 |     1662 | 2024-02-25 | Wildcard          | W   | 0.728      | 0.143        | 0.025 (0.003)    | -                | -         |    12.84 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           24 |     2163 | 2024-02-01 | Nouns             | L   | 0.569      | -            | -                | -                | -         |   -13.01 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           23 |     2165 | 2024-02-01 | Rocket            | W   | 0.568      | -            | -                | -                | -         |     4.38 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           22 |     2170 | 2024-02-01 | Elevate           | L   | 0.568      | -            | -                | -                | -         |    -9.44 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           21 |     2447 | 2024-01-19 | M80               | L   | 0.482      | -            | -                | -                | -         |    -1.88 | brett, Cryptic, cynic, d4rty, freshie    |
|           20 |     2458 | 2024-01-19 | Liquid            | L   | 0.481      | -            | -                | -                | -         |    -0.99 | brett, Cryptic, cynic, d4rty, freshie    |
|           19 |     2694 | 2024-01-14 | Rocket            | W   | 0.448      | -            | -                | -                | -         |     3.32 | brett, Cryptic, cynic, d4rty, freshie    |
|           18 |     2717 | 2024-01-13 | my life be like   | W   | 0.441      | -            | -                | -                | -         |     3.92 | brett, Cryptic, cynic, d4rty, freshie    |
|           17 |     2757 | 2024-01-12 | Wildcard          | L   | 0.436      | -            | -                | -                | -         |    -7.45 | brett, Cryptic, cynic, d4rty, freshie    |
|           16 |     2759 | 2024-01-12 | For Fun           | W   | 0.436      | -            | -                | -                | -         |     3.59 | brett, Cryptic, cynic, d4rty, freshie    |
|           15 |     3060 | 2023-12-12 | M80               | L   | 0.229      | -            | -                | -                | -         |    -0.79 | brett, Cryptic, d4rty, freshie, WolfY    |
|           14 |     3067 | 2023-12-11 | Party Astronauts  | W   | 0.223      | 0.303        | 0.035 (0.002)    | -                | -         |     3.33 | brett, Cryptic, d4rty, freshie, WolfY    |
|           13 |     3079 | 2023-12-10 | M80               | L   | 0.215      | -            | -                | -                | -         |    -0.74 | brett, Cryptic, d4rty, freshie, WolfY    |
|           12 |     3096 | 2023-12-09 | Party Astronauts  | W   | 0.209      | 0.500        | 0.035 (0.004)    | 0.570 (0.059)    | -         |     3.17 | brett, Cryptic, d4rty, freshie, WolfY    |
|           11 |     3099 | 2023-12-09 | Elevate           | L   | 0.209      | -            | -                | -                | -         |    -3.62 | brett, Cryptic, d4rty, dea, freshie      |
|           10 |     3103 | 2023-12-09 | Supernova         | W   | 0.208      | -            | -                | -                | 1 (0.208) |     0.39 | brett, Cryptic, d4rty, dea, freshie      |
|            9 |     3145 | 2023-12-07 | M80               | L   | 0.195      | -            | -                | -                | -         |    -0.67 | brett, Cryptic, d4rty, freshie, WolfY    |
|            8 |     3170 | 2023-12-06 | Nouns             | W   | 0.189      | 0.500        | 0.015 (0.001)    | -                | -         |     1.62 | brett, Cryptic, d4rty, freshie, WolfY    |
|            7 |     3412 | 2023-11-22 | Party Astronauts  | L   | 0.096      | -            | -                | -                | -         |    -1.59 | brett, Cryptic, d4rty, freshie, WolfY    |
|            6 |     3428 | 2023-11-21 | NRG               | W   | 0.089      | -            | -                | -                | -         |     0.97 | brett, Cryptic, d4rty, freshie, WolfY    |
|            5 |     3443 | 2023-11-20 | Rocket            | W   | 0.082      | -            | -                | -                | -         |     0.54 | brett, Cryptic, d4rty, freshie, WolfY    |
|            4 |     3458 | 2023-11-19 | M80               | L   | 0.076      | -            | -                | -                | -         |    -0.26 | brett, Cryptic, d4rty, freshie, WolfY    |
|            3 |     3510 | 2023-11-17 | Take Flyte        | W   | 0.062      | -            | -                | -                | -         |     0.53 | brett, Cryptic, d4rty, freshie, WolfY    |
|            2 |     3617 | 2023-11-14 | MIGHT             | L   | 0.041      | -            | -                | -                | -         |    -0.97 | CLASIA, djay, Nifty, scar, stamina       |
|            1 |     3744 | 2023-11-08 | Eros              | W   | 0.002      | -            | -                | -                | -         |     0.01 | brett, Cryptic, d4rty, freshie, SLIGHT   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,018.23)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $3,500.00      | $3,500.00       |
| 2023-12-10 |      0.215 | $20,000.00     | $4,309.66       |
| 2023-12-09 |      0.209 | $1,000.00      | $208.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
