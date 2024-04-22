### Roster Details<br />
Team Name: Sprout<br />
Roster: Anlelele, Buzz, cej0t, raalz, sL1m3<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [128](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  746.0<br />
<br />
Final Rank Value (746.0) = Starting Rank Value (728.8) + Head To Head Adjustments (17.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.8
- 400 + ( ( 0.170 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 728.8


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
|           40 |     1340 | 2024-02-27 | Permitta          | L   | 0.831      | -            | -                | -                | -         |    -8.14 | Anlelele, Buzz, cej0t, raalz, sL1m3   |
|           39 |     2258 | 2024-01-18 | Guild Eagles      | L   | 0.565      | -            | -                | -                | -         |    -2.99 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           38 |     2274 | 2024-01-17 | 500               | W   | 0.561      | 0.143        | -                | 0.622 (0.050)    | 0 (0.000) |     6.63 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           37 |     2284 | 2024-01-17 | GUN5              | W   | 0.561      | -            | -                | -                | 0 (0.000) |     6.30 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           36 |     2483 | 2024-01-12 | LOADING           | L   | 0.527      | -            | -                | -                | -         |   -13.40 | Anlelele, cej0t, raalz, sL1m3, Zyphon |
|           35 |     2642 | 2023-12-20 | PERA              | L   | 0.372      | -            | -                | -                | -         |    -5.36 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           34 |     2660 | 2023-12-18 | ARCRED            | W   | 0.359      | 0.333        | -                | 0.164 (0.020)    | 0 (0.000) |     4.91 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           33 |     2663 | 2023-12-18 | showmakerz        | W   | 0.358      | -            | -                | -                | 0 (0.000) |     2.26 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           32 |     2768 | 2023-12-12 | BIG               | L   | 0.319      | -            | -                | -                | -         |    -0.66 | cej0t, fNk, raalz, sL1m3, spooke      |
|           31 |     2778 | 2023-12-11 | Alliance          | W   | 0.313      | 0.384        | 0.020 (0.002)    | 0.855 (0.103)    | 0 (0.000) |     6.94 | cej0t, fNk, raalz, sL1m3, spooke      |
|           30 |     2825 | 2023-12-09 | TSM               | L   | 0.297      | -            | -                | -                | -         |    -4.97 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           29 |     2840 | 2023-12-08 | ALTERNATE aTTaX   | L   | 0.291      | -            | -                | -                | -         |    -4.08 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           28 |     2858 | 2023-12-07 | Gaimin Gladiators | W   | 0.287      | 0.384        | 0.156 (0.017)    | 1.000 (0.110)    | 0 (0.000) |     8.66 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           27 |     2896 | 2023-12-06 | Alliance          | L   | 0.279      | -            | -                | -                | -         |    -2.64 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           26 |     2903 | 2023-12-06 | Endpoint          | W   | 0.277      | 0.371        | 0.025 (0.003)    | 0.488 (0.050)    | 0 (0.000) |     5.31 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           25 |     2934 | 2023-12-04 | RED Canids        | L   | 0.266      | -            | -                | -                | -         |    -1.64 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           24 |     2952 | 2023-12-03 | G2                | L   | 0.258      | -            | -                | -                | -         |    -0.01 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           23 |     2993 | 2023-12-01 | ex-Anonymo        | W   | 0.245      | 0.589        | 0.027 (0.004)    | 0.276 (0.040)    | 0 (0.000) |     4.01 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           22 |     2996 | 2023-12-01 | Zero Tenacity     | W   | 0.244      | 0.371        | -                | 0.805 (0.073)    | 0 (0.000) |     4.44 | Anlelele, cej0t, raalz, sL1m3, spooke |
|           21 |     3023 | 2023-11-29 | ALTERNATE aTTaX   | W   | 0.232      | 0.384        | 0.026 (0.002)    | 0.327 (0.029)    | 0 (0.000) |     4.28 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           20 |     3044 | 2023-11-27 | TSM               | W   | 0.218      | 0.371        | 0.012 (0.001)    | -                | -         |     3.24 | AJTT, cej0t, raalz, sL1m3, spooke     |
|           19 |     3136 | 2023-11-21 | PERA              | W   | 0.180      | -            | -                | -                | -         |     2.29 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           18 |     3157 | 2023-11-20 | Entropiq          | W   | 0.172      | 0.384        | -                | 0.403 (0.027)    | -         |     2.90 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           17 |     3177 | 2023-11-19 | Metizport         | L   | 0.165      | -            | -                | -                | -         |    -2.80 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           16 |     3196 | 2023-11-18 | Into the Breach   | L   | 0.160      | -            | -                | -                | -         |    -1.87 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           15 |     3205 | 2023-11-18 | Metizport         | W   | 0.159      | -            | -                | -                | -         |     2.33 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           14 |     3235 | 2023-11-17 | FORZE             | W   | 0.152      | 0.435        | 0.019 (0.001)    | -                | -         |     2.68 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           13 |     3299 | 2023-11-15 | MOUZ NXT          | W   | 0.140      | 0.435        | 0.054 (0.003)    | 0.970 (0.059)    | -         |     3.26 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           12 |     3325 | 2023-11-14 | TSM               | L   | 0.134      | -            | -                | -                | -         |    -2.21 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           11 |     3331 | 2023-11-14 | Sashi             | L   | 0.132      | -            | -                | -                | -         |    -1.09 | cej0t, raalz, sL1m3, spooke, Tauson   |
|           10 |     3342 | 2023-11-13 | 00NATION          | L   | 0.127      | -            | -                | -                | -         |    -2.34 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            9 |     3363 | 2023-11-12 | ORKS              | W   | 0.120      | -            | -                | -                | -         |     0.76 | cej0t, raalz, sL1m3, spooke, Tauson   |
|            8 |     3504 | 2023-11-06 | Guild Eagles      | L   | 0.078      | -            | -                | -                | -         |    -0.40 | cej0t, raalz, sL1m3, Tauson, Zyphon   |
|            7 |     3542 | 2023-11-04 | EYEBALLERS        | W   | 0.066      | 0.435        | 0.052 (0.001)    | -                | -         |     1.47 | cej0t, raalz, sL1m3, spooke, Zyphon   |
|            6 |     3562 | 2023-11-03 | 00NATION          | L   | 0.059      | -            | -                | -                | -         |    -1.10 | cej0t, raalz, sL1m3, spooke, Zyphon   |
|            5 |     3581 | 2023-11-02 | B8                | L   | 0.053      | -            | -                | -                | -         |    -1.02 | cej0t, raalz, sL1m3, spooke, Zyphon   |
|            4 |     3608 | 2023-11-01 | The Witchers      | L   | 0.046      | -            | -                | -                | -         |    -0.66 | cej0t, raalz, sL1m3, spooke, Zyphon   |
|            3 |     3628 | 2023-10-31 | Sangal            | W   | 0.040      | -            | -                | -                | -         |     0.27 | cej0t, raalz, sL1m3, spooke, Zyphon   |
|            2 |     3646 | 2023-10-31 | Sampi             | W   | 0.039      | 0.435        | 0.084 (0.001)    | -                | -         |     0.99 | cej0t, raalz, sL1m3, spooke, Zyphon   |
|            1 |     3674 | 2023-10-30 | ALTERNATE aTTaX   | W   | 0.032      | -            | -                | -                | -         |     0.66 | cej0t, raalz, sL1m3, spooke, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,922.82)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.327 | $1,000.00      | $326.76         |
| 2023-11-18 |      0.160 | $10,000.00     | $1,596.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
