### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1192.3<br />
<br />
Final Rank Value (1192.3) = Starting Rank Value (1199.4) + Head To Head Adjustments (-7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.643[<sup>1</sup>](#table2)
- Bounty Collected: 0.492[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.261[<sup>2</sup>](#table1)

The average of these factors is 0.412<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1199.4
- 400 + ( ( 0.412 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1199.4


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
|           34 |       18 | 2024-05-29 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -27.21 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           33 |      277 | 2024-05-19 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -6.33 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           32 |      285 | 2024-05-18 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.25 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           31 |      749 | 2024-05-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -26.22 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           30 |      778 | 2024-04-30 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -19.50 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           29 |      998 | 2024-04-20 | MIBR              | L   | 0.938      | -            | -                | -                | -         |    -4.04 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           28 |     1016 | 2024-04-19 | 9z                | W   | 0.935      | 0.589        | 0.107 (0.059)    | 0.769 (0.423)    | 1 (0.935) |    14.65 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           27 |     1026 | 2024-04-19 | Monte             | W   | 0.933      | 0.589        | 0.181 (0.099)    | 0.611 (0.336)    | 1 (0.933) |    12.92 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |     1071 | 2024-04-18 | MIBR              | L   | 0.926      | -            | -                | -                | -         |    -4.08 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |     1200 | 2024-04-14 | Aurora            | L   | 0.899      | -            | -                | -                | -         |    -8.57 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |     1209 | 2024-04-13 | BetBoom           | W   | 0.893      | 0.684        | 0.392 (0.240)    | 0.951 (0.581)    | 0 (0.000) |    16.58 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |     1218 | 2024-04-13 | BIG               | W   | 0.891      | 0.684        | 0.215 (0.131)    | 0.496 (0.302)    | 0 (0.000) |    18.37 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1230 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.885      | 0.684        | 0.118 (0.072)    | 0.327 (0.198)    | 0 (0.000) |     8.35 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     1301 | 2024-04-10 | ENCE              | W   | 0.872      | 0.684        | 0.199 (0.119)    | 0.422 (0.251)    | 0 (0.000) |    18.73 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     1381 | 2024-04-08 | Aurora            | L   | 0.859      | -            | -                | -                | -         |    -7.19 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2003 | 2024-03-10 | SAW               | L   | 0.666      | -            | -                | -                | -         |    -5.97 | F1KU, k1to, Nexius, regali, s0und    |
|           18 |     2029 | 2024-03-09 | HEROIC            | W   | 0.658      | 0.535        | 0.322 (0.113)    | 0.662 (0.233)    | 0 (0.000) |    19.49 | F1KU, HeavyGod, k1to, Nexius, regali |
|           17 |     2068 | 2024-03-07 | Complexity        | W   | 0.646      | 0.535        | 0.260 (0.090)    | 0.329 (0.114)    | 0 (0.000) |    17.80 | F1KU, HeavyGod, k1to, Nexius, regali |
|           16 |     2412 | 2024-02-21 | GamerLegion       | L   | 0.545      | -            | -                | -                | -         |    -8.76 | F1KU, HeavyGod, k1to, Nexius, regali |
|           15 |     2445 | 2024-02-20 | Gaimin Gladiators | L   | 0.537      | -            | -                | -                | -         |    -8.06 | F1KU, HeavyGod, k1to, Nexius, regali |
|           14 |     2463 | 2024-02-19 | ex-Preasy         | W   | 0.532      | 0.143        | 0.051 (0.004)    | 0.470 (0.036)    | 1 (0.532) |     3.34 | F1KU, HeavyGod, k1to, Nexius, regali |
|           13 |     2470 | 2024-02-19 | Apeks             | L   | 0.531      | -            | -                | -                | -         |    -8.47 | F1KU, HeavyGod, k1to, Nexius, regali |
|           12 |     2972 | 2024-01-23 | Falcons           | L   | 0.353      | -            | -                | -                | -         |    -2.03 | F1KU, HeavyGod, k1to, Nexius, regali |
|           11 |     3004 | 2024-01-22 | Vitality          | L   | 0.345      | -            | -                | -                | -         |    -0.26 | F1KU, HeavyGod, k1to, Nexius, regali |
|           10 |     3066 | 2024-01-20 | Nexus             | W   | 0.333      | -            | -                | -                | 0 (0.000) |     1.59 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     3071 | 2024-01-20 | BetBoom           | L   | 0.332      | -            | -                | -                | -         |    -2.25 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     3133 | 2024-01-19 | 3DMAX             | W   | 0.325      | 0.143        | 0.105 (0.005)    | -                | -         |     4.71 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     3173 | 2024-01-18 | JANO              | W   | 0.319      | -            | -                | -                | -         |     0.20 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     3199 | 2024-01-18 | Cloud9            | L   | 0.318      | -            | -                | -                | -         |    -2.38 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3378 | 2024-01-13 | Gaimin Gladiators | L   | 0.287      | -            | -                | -                | -         |    -4.38 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     3382 | 2024-01-13 | Permitta          | W   | 0.286      | 0.143        | -                | 1.000 (0.041)    | -         |     1.36 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     3384 | 2024-01-13 | ex-Anonymo        | W   | 0.285      | -            | -                | -                | -         |     0.44 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     3388 | 2024-01-13 | Nexus             | W   | 0.285      | -            | -                | -                | -         |     1.21 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     3431 | 2024-01-12 | Passion UA        | W   | 0.280      | -            | -                | -                | -         |     2.20 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($83,581.59)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-20 |      0.940 | $10,000.00     | $9,403.02       |
| 2024-04-14 |      0.899 | $70,000.00     | $62,918.30      |
| 2024-03-10 |      0.666 | $12,500.00     | $8,331.17       |
| 2024-01-28 |      0.386 | $5,000.00      | $1,929.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
