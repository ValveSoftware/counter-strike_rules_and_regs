### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1188.6<br />
<br />
Final Rank Value (1188.6) = Starting Rank Value (1192.0) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.624[<sup>1</sup>](#table2)
- Bounty Collected: 0.503[<sup>2</sup>](#table1)
- Opponent Network: 0.232[<sup>2</sup>](#table1)
- LAN Wins: 0.231[<sup>2</sup>](#table1)

The average of these factors is 0.397<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1192.0
- 400 + ( ( 0.397 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1192.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      490 | 2024-05-30 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -29.16 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           34 |      518 | 2024-05-29 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -25.82 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           33 |      777 | 2024-05-19 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -6.51 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           32 |      785 | 2024-05-18 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.08 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           31 |     1249 | 2024-05-01 | Insilio           | L   | 0.933      | -            | -                | -                | -         |   -24.18 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           30 |     1278 | 2024-04-30 | Sashi             | L   | 0.926      | -            | -                | -                | -         |   -16.52 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           29 |     1498 | 2024-04-20 | MIBR              | L   | 0.859      | -            | -                | -                | -         |    -3.96 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           28 |     1516 | 2024-04-19 | 9z                | W   | 0.856      | 0.589        | 0.194 (0.098)    | 0.724 (0.365)    | 1 (0.856) |    15.16 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           27 |     1526 | 2024-04-19 | Monte             | W   | 0.854      | 0.589        | 0.179 (0.090)    | 0.686 (0.345)    | 1 (0.854) |    12.28 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |     1571 | 2024-04-18 | MIBR              | L   | 0.847      | -            | -                | -                | -         |    -4.13 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |     1700 | 2024-04-14 | Aurora            | L   | 0.820      | -            | -                | -                | -         |    -5.03 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |     1709 | 2024-04-13 | BetBoom           | W   | 0.814      | 0.684        | 0.427 (0.238)    | 0.917 (0.510)    | 0 (0.000) |    21.10 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |     1718 | 2024-04-13 | BIG               | W   | 0.812      | 0.684        | 0.228 (0.127)    | 0.459 (0.255)    | 0 (0.000) |    18.43 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1730 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.806      | 0.684        | 0.294 (0.162)    | 0.480 (0.264)    | 0 (0.000) |    22.08 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     1801 | 2024-04-10 | ENCE              | W   | 0.793      | 0.684        | 0.205 (0.111)    | 0.407 (0.220)    | 0 (0.000) |    18.91 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     1881 | 2024-04-08 | Aurora            | L   | 0.780      | -            | -                | -                | -         |    -3.63 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2503 | 2024-03-10 | SAW               | L   | 0.587      | -            | -                | -                | -         |    -5.36 | F1KU, k1to, Nexius, regali, s0und    |
|           18 |     2529 | 2024-03-09 | HEROIC            | W   | 0.579      | 0.535        | 0.362 (0.112)    | 0.635 (0.197)    | 0 (0.000) |    17.54 | F1KU, HeavyGod, k1to, Nexius, regali |
|           17 |     2568 | 2024-03-07 | Complexity        | W   | 0.567      | 0.535        | 0.271 (0.082)    | 0.351 (0.107)    | 0 (0.000) |    16.50 | F1KU, HeavyGod, k1to, Nexius, regali |
|           16 |     2912 | 2024-02-21 | GamerLegion       | L   | 0.466      | -            | -                | -                | -         |    -8.43 | F1KU, HeavyGod, k1to, Nexius, regali |
|           15 |     2945 | 2024-02-20 | Gaimin Gladiators | L   | 0.458      | -            | -                | -                | -         |    -6.52 | F1KU, HeavyGod, k1to, Nexius, regali |
|           14 |     2963 | 2024-02-19 | ex-Preasy         | W   | 0.453      | 0.143        | 0.041 (0.003)    | -                | 1 (0.453) |     2.75 | F1KU, HeavyGod, k1to, Nexius, regali |
|           13 |     2970 | 2024-02-19 | Apeks             | L   | 0.452      | -            | -                | -                | -         |    -8.03 | F1KU, HeavyGod, k1to, Nexius, regali |
|           12 |     3472 | 2024-01-23 | Falcons           | L   | 0.274      | -            | -                | -                | -         |    -1.78 | F1KU, HeavyGod, k1to, Nexius, regali |
|           11 |     3504 | 2024-01-22 | Vitality          | L   | 0.266      | -            | -                | -                | -         |    -0.13 | F1KU, HeavyGod, k1to, Nexius, regali |
|           10 |     3566 | 2024-01-20 | Nexus             | W   | 0.253      | -            | -                | -                | 0 (0.000) |     1.21 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     3571 | 2024-01-20 | BetBoom           | L   | 0.253      | -            | -                | -                | -         |    -0.47 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     3633 | 2024-01-19 | 3DMAX             | W   | 0.246      | 0.143        | 0.122 (0.004)    | 0.821 (0.029)    | -         |     4.19 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     3673 | 2024-01-18 | JANO              | W   | 0.240      | -            | -                | -                | -         |     0.16 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     3699 | 2024-01-18 | Cloud9            | L   | 0.239      | -            | -                | -                | -         |    -2.12 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3878 | 2024-01-13 | Gaimin Gladiators | L   | 0.208      | -            | -                | -                | -         |    -3.04 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     3882 | 2024-01-13 | Permitta          | W   | 0.207      | 0.143        | -                | 0.972 (0.029)    | -         |     1.18 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     3884 | 2024-01-13 | ex-Anonymo        | W   | 0.206      | -            | -                | -                | -         |     0.28 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     3888 | 2024-01-13 | Nexus             | W   | 0.206      | -            | -                | -                | -         |     0.90 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     3931 | 2024-01-12 | Passion UA        | W   | 0.200      | -            | -                | -                | -         |     1.91 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,802.08)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.940 | $1,000.00      | $939.79         |
| 2024-04-20 |      0.861 | $10,000.00     | $8,611.30       |
| 2024-04-14 |      0.820 | $70,000.00     | $57,376.24      |
| 2024-03-10 |      0.587 | $12,500.00     | $7,341.52       |
| 2024-01-28 |      0.307 | $5,000.00      | $1,533.23       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
