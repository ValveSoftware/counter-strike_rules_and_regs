### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1298.1<br />
<br />
Final Rank Value (1298.1) = Starting Rank Value (1313.9) + Head To Head Adjustments (-15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.767[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.285[<sup>2</sup>](#table1)
- LAN Wins: 0.299[<sup>2</sup>](#table1)

The average of these factors is 0.473<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1313.9
- 400 + ( ( 0.473 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1313.9


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
|           29 |       51 | 2024-04-20 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -7.52 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           28 |       69 | 2024-04-19 | 9z                | W   | 1.000      | 0.589        | 0.047 (0.028)    | 0.554 (0.326)    | 1 (1.000) |     6.30 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           27 |       79 | 2024-04-19 | Monte             | W   | 1.000      | 0.589        | 0.236 (0.139)    | 0.598 (0.352)    | 1 (1.000) |     8.44 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           26 |      124 | 2024-04-18 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -9.33 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           25 |      253 | 2024-04-14 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -15.77 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           24 |      262 | 2024-04-13 | BetBoom           | W   | 1.000      | 0.684        | 0.457 (0.312)    | 0.898 (0.614)    | 0 (0.000) |    10.17 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           23 |      271 | 2024-04-13 | BIG               | W   | 1.000      | 0.684        | 0.471 (0.322)    | 0.529 (0.362)    | 0 (0.000) |    12.06 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |      283 | 2024-04-12 | Ninjas in Pyjamas | W   | 1.000      | 0.684        | 0.196 (0.134)    | 0.318 (0.217)    | 0 (0.000) |     4.37 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |      354 | 2024-04-10 | ENCE              | W   | 1.000      | 0.684        | 0.299 (0.205)    | 0.446 (0.305)    | 0 (0.000) |    16.84 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |      434 | 2024-04-08 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -16.10 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     1056 | 2024-03-10 | SAW               | L   | 0.913      | -            | -                | -                | -         |   -14.56 | F1KU, k1to, Nexius, regali, s0und    |
|           18 |     1082 | 2024-03-09 | HEROIC            | W   | 0.906      | 0.535        | 0.281 (0.136)    | 0.731 (0.354)    | 0 (0.000) |    23.56 | F1KU, HeavyGod, k1to, Nexius, regali |
|           17 |     1121 | 2024-03-07 | Complexity        | W   | 0.894      | 0.535        | 0.264 (0.126)    | 0.353 (0.169)    | 0 (0.000) |    17.29 | F1KU, HeavyGod, k1to, Nexius, regali |
|           16 |     1465 | 2024-02-21 | GamerLegion       | L   | 0.792      | -            | -                | -                | -         |    -9.74 | F1KU, HeavyGod, k1to, Nexius, regali |
|           15 |     1498 | 2024-02-20 | Gaimin Gladiators | L   | 0.784      | -            | -                | -                | -         |   -12.57 | F1KU, HeavyGod, k1to, Nexius, regali |
|           14 |     1516 | 2024-02-19 | Preasy            | W   | 0.780      | 0.143        | 0.205 (0.023)    | 0.723 (0.080)    | 1 (0.780) |     5.64 | F1KU, HeavyGod, k1to, Nexius, regali |
|           13 |     1523 | 2024-02-19 | Apeks             | L   | 0.778      | -            | -                | -                | -         |   -12.84 | F1KU, HeavyGod, k1to, Nexius, regali |
|           12 |     2025 | 2024-01-23 | Falcons           | L   | 0.600      | -            | -                | -                | -         |    -9.75 | F1KU, HeavyGod, k1to, Nexius, regali |
|           11 |     2057 | 2024-01-22 | Vitality          | L   | 0.593      | -            | -                | -                | -         |    -0.89 | F1KU, HeavyGod, k1to, Nexius, regali |
|           10 |     2119 | 2024-01-20 | Nexus             | W   | 0.580      | -            | -                | -                | 0 (0.000) |     1.55 | F1KU, HeavyGod, k1to, Nexius, regali |
|            9 |     2124 | 2024-01-20 | BetBoom           | L   | 0.579      | -            | -                | -                | -         |   -10.38 | F1KU, HeavyGod, k1to, Nexius, regali |
|            8 |     2186 | 2024-01-19 | 3DMAX             | W   | 0.572      | 0.143        | 0.048 (0.004)    | -                | -         |     3.19 | F1KU, HeavyGod, k1to, Nexius, regali |
|            7 |     2226 | 2024-01-18 | JANO              | W   | 0.567      | -            | -                | -                | -         |     0.48 | F1KU, HeavyGod, k1to, Nexius, regali |
|            6 |     2252 | 2024-01-18 | Cloud9            | L   | 0.566      | -            | -                | -                | -         |    -2.02 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     2431 | 2024-01-13 | Gaimin Gladiators | L   | 0.534      | -            | -                | -                | -         |    -8.76 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     2435 | 2024-01-13 | Permitta          | W   | 0.533      | 0.143        | -                | 0.970 (0.074)    | -         |     1.15 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     2437 | 2024-01-13 | ex-Anonymo        | W   | 0.533      | -            | -                | -                | -         |     0.81 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     2441 | 2024-01-13 | Nexus             | W   | 0.532      | -            | -                | -                | -         |     1.03 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     2484 | 2024-01-12 | Passion UA        | W   | 0.527      | -            | -                | -                | -         |     1.52 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94,589.75)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-04-14 |      1.000 | $70,000.00     | $70,000.00      |
| 2024-03-10 |      0.914 | $12,500.00     | $11,423.66      |
| 2024-01-28 |      0.633 | $5,000.00      | $3,166.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
