### Roster Details<br />
Team Name: Sprout<br />
Roster: Anlelele, Buzz, cej0t, raalz, sL1m3<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  727.7<br />
<br />
Final Rank Value (727.7) = Starting Rank Value (705.2) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.2
- 400 + ( ( 0.160 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 705.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     1636 | 2024-02-27 | Permitta          | L   | 0.738      | -            | -                | -                | -         |    -5.04 | Anlelele, Buzz, cej0t, raalz, sL1m3   |
|           31 |     2554 | 2024-01-18 | Guild Eagles      | L   | 0.471      | -            | -                | -                | -         |    -2.32 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           30 |     2570 | 2024-01-17 | 500               | W   | 0.468      | 0.143        | -                | 0.578 (0.039)    | 0 (0.000) |     8.72 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           29 |     2580 | 2024-01-17 | GUN5              | W   | 0.467      | -            | -                | -                | 0 (0.000) |     5.12 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           28 |     2779 | 2024-01-12 | LOADING           | L   | 0.434      | -            | -                | -                | -         |   -10.84 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           27 |     2938 | 2023-12-20 | PERA              | L   | 0.278      | -            | -                | -                | -         |    -2.46 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           26 |     2956 | 2023-12-18 | ARCRED            | W   | 0.265      | 0.333        | -                | 0.198 (0.018)    | 0 (0.000) |     4.09 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           25 |     2959 | 2023-12-18 | showmakerz        | W   | 0.264      | -            | -                | -                | 0 (0.000) |     1.83 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           24 |     3064 | 2023-12-12 | BIG               | L   | 0.226      | -            | -                | -                | -         |    -0.15 | cej0t, fNk, raalz, sL1m3, spooke      |
|           23 |     3074 | 2023-12-11 | Alliance          | W   | 0.219      | 0.384        | 0.016 (0.001)    | 0.815 (0.069)    | 0 (0.000) |     4.99 | cej0t, fNk, raalz, sL1m3, spooke      |
|           22 |     3121 | 2023-12-09 | TSM               | L   | 0.204      | -            | -                | -                | -         |    -3.40 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           21 |     3136 | 2023-12-08 | ALTERNATE aTTaX   | L   | 0.198      | -            | -                | -                | -         |    -1.18 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           20 |     3154 | 2023-12-07 | Gaimin Gladiators | W   | 0.193      | 0.384        | 0.189 (0.014)    | 0.990 (0.074)    | 0 (0.000) |     5.90 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           19 |     3192 | 2023-12-06 | Alliance          | L   | 0.185      | -            | -                | -                | -         |    -1.63 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           18 |     3199 | 2023-12-06 | Endpoint          | W   | 0.184      | 0.371        | 0.020 (0.001)    | 0.694 (0.047)    | 0 (0.000) |     4.25 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           17 |     3230 | 2023-12-04 | RED Canids        | L   | 0.173      | -            | -                | -                | -         |    -1.08 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           16 |     3248 | 2023-12-03 | G2                | L   | 0.165      | -            | -                | -                | -         |    -0.01 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           15 |     3289 | 2023-12-01 | ex-Anonymo        | W   | 0.152      | 0.589        | 0.016 (0.001)    | 0.175 (0.016)    | 0 (0.000) |     2.46 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           14 |     3292 | 2023-12-01 | Zero Tenacity     | W   | 0.151      | 0.371        | 0.093 (0.005)    | 0.936 (0.052)    | 0 (0.000) |     3.77 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           13 |     3319 | 2023-11-29 | ALTERNATE aTTaX   | W   | 0.139      | 0.384        | 0.104 (0.006)    | 0.779 (0.041)    | 0 (0.000) |     3.64 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           12 |     3340 | 2023-11-27 | TSM               | W   | 0.124      | 0.371        | 0.008 (0.000)    | -                | -         |     1.87 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           11 |     3432 | 2023-11-21 | PERA              | W   | 0.087      | -            | -                | -                | -         |     1.07 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           10 |     3453 | 2023-11-20 | Entropiq          | W   | 0.078      | -            | -                | -                | -         |     1.36 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            9 |     3473 | 2023-11-19 | Metizport         | L   | 0.072      | -            | -                | -                | -         |    -0.34 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            8 |     3492 | 2023-11-18 | Into the Breach   | L   | 0.066      | -            | -                | -                | -         |    -0.81 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            7 |     3501 | 2023-11-18 | Metizport         | W   | 0.065      | 0.435        | 0.183 (0.005)    | 1.000 (0.028)    | -         |     1.75 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            6 |     3531 | 2023-11-17 | FORZE             | W   | 0.058      | 0.435        | 0.015 (0.000)    | -                | -         |     1.06 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            5 |     3595 | 2023-11-15 | MOUZ NXT          | W   | 0.047      | 0.435        | 0.210 (0.004)    | 1.000 (0.020)    | -         |     1.30 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            4 |     3621 | 2023-11-14 | TSM               | L   | 0.040      | -            | -                | -                | -         |    -0.66 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            3 |     3627 | 2023-11-14 | Sashi             | L   | 0.039      | -            | -                | -                | -         |    -0.15 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            2 |     3638 | 2023-11-13 | 00NATION          | L   | 0.033      | -            | -                | -                | -         |    -0.80 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            1 |     3659 | 2023-11-12 | ORKS              | W   | 0.027      | -            | -                | -                | -         |     0.19 | cej0t, raalz, sL1m3, spooke, Tauson   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($896.45)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.233 | $1,000.00      | $233.45         |
| 2023-11-18 |      0.066 | $10,000.00     | $663.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
