### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1317.2<br />
<br />
Final Rank Value (1317.2) = Starting Rank Value (1325.2) + Head To Head Adjustments (-8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.809[<sup>1</sup>](#table2)
- Bounty Collected: 0.551[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.486<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1325.2
- 400 + ( ( 0.486 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1325.2


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
|           31 |       98 | 2024-05-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -27.47 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           30 |      127 | 2024-04-30 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -21.62 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           29 |      347 | 2024-04-20 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -5.29 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           28 |      365 | 2024-04-19 | 9z                | W   | 1.000      | 0.589        | 0.056 (0.033)    | 0.520 (0.306)    | 1 (1.000) |     4.61 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           27 |      375 | 2024-04-19 | Monte             | W   | 1.000      | 0.589        | 0.188 (0.111)    | 0.589 (0.347)    | 1 (1.000) |    11.98 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |      420 | 2024-04-18 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -5.96 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |      549 | 2024-04-14 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -11.36 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |      558 | 2024-04-13 | BetBoom           | W   | 1.000      | 0.684        | 0.563 (0.385)    | 1.000 (0.684)    | 0 (0.000) |    14.33 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |      567 | 2024-04-13 | BIG               | W   | 1.000      | 0.684        | 0.454 (0.310)    | 0.510 (0.349)    | 0 (0.000) |    16.52 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |      579 | 2024-04-12 | Ninjas in Pyjamas | W   | 1.000      | 0.684        | 0.236 (0.161)    | 0.346 (0.236)    | 0 (0.000) |     6.78 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |      650 | 2024-04-10 | ENCE              | W   | 1.000      | 0.684        | 0.360 (0.246)    | 0.450 (0.308)    | 0 (0.000) |    19.54 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |      730 | 2024-04-08 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.14 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     1352 | 2024-03-10 | SAW               | L   | 0.820      | -            | -                | -                | -         |    -8.96 | F1KU, k1to, Nexius, regali, s0und    |
|           18 |     1378 | 2024-03-09 | HEROIC            | W   | 0.812      | 0.535        | 0.347 (0.151)    | 0.712 (0.309)    | 0 (0.000) |    21.63 | F1KU, HeavyGod, k1to, Nexius, regali |
|           17 |     1417 | 2024-03-07 | Complexity        | W   | 0.800      | 0.535        | 0.262 (0.112)    | 0.374 (0.160)    | 0 (0.000) |    19.79 | F1KU, HeavyGod, k1to, Nexius, regali |
|           16 |     1761 | 2024-02-21 | GamerLegion       | L   | 0.699      | -            | -                | -                | -         |    -5.77 | F1KU, HeavyGod, k1to, Nexius, regali |
|           15 |     1794 | 2024-02-20 | Gaimin Gladiators | L   | 0.691      | -            | -                | -                | -         |   -10.77 | F1KU, HeavyGod, k1to, Nexius, regali |
|           14 |     1812 | 2024-02-19 | ex-Preasy         | W   | 0.686      | 0.143        | 0.173 (0.017)    | 0.700 (0.069)    | 1 (0.686) |     4.27 | F1KU, HeavyGod, k1to, Nexius, regali |
|           13 |     1819 | 2024-02-19 | Apeks             | L   | 0.685      | -            | -                | -                | -         |    -9.32 | F1KU, HeavyGod, k1to, Nexius, regali |
|           12 |     2321 | 2024-01-23 | Falcons           | L   | 0.507      | -            | -                | -                | -         |    -8.04 | F1KU, HeavyGod, k1to, Nexius, regali |
|           11 |     2353 | 2024-01-22 | Vitality          | L   | 0.499      | -            | -                | -                | -         |    -0.62 | F1KU, HeavyGod, k1to, Nexius, regali |
|           10 |     2415 | 2024-01-20 | Nexus             | W   | 0.487      | -            | -                | -                | 0 (0.000) |     1.54 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     2420 | 2024-01-20 | BetBoom           | L   | 0.486      | -            | -                | -                | -         |    -4.96 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     2482 | 2024-01-19 | 3DMAX             | W   | 0.479      | -            | -                | -                | -         |     5.14 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     2522 | 2024-01-18 | JANO              | W   | 0.473      | -            | -                | -                | -         |     0.50 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     2548 | 2024-01-18 | Cloud9            | L   | 0.472      | -            | -                | -                | -         |    -2.27 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     2727 | 2024-01-13 | Gaimin Gladiators | L   | 0.441      | -            | -                | -                | -         |    -6.94 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     2731 | 2024-01-13 | Permitta          | W   | 0.440      | 0.143        | -                | 0.979 (0.062)    | -         |     1.37 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     2733 | 2024-01-13 | ex-Anonymo        | W   | 0.440      | -            | -                | -                | -         |     0.54 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     2737 | 2024-01-13 | Nexus             | W   | 0.439      | -            | -                | -                | -         |     1.13 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     2780 | 2024-01-12 | Passion UA        | W   | 0.434      | 0.143        | 0.111 (0.007)    | -                | -         |     1.87 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($93,956.89)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.58) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-20 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-04-14 |      1.000 | $70,000.00     | $70,000.00      |
| 2024-03-10 |      0.821 | $12,500.00     | $10,257.33      |
| 2024-01-28 |      0.540 | $5,000.00      | $2,699.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
