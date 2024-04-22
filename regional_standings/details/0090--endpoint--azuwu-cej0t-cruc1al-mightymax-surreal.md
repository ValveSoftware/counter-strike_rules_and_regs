### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  827.2<br />
<br />
Final Rank Value (827.2) = Starting Rank Value (813.5) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.5
- 400 + ( ( 0.214 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 813.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      204 | 2024-04-17 | EYEBALLERS           | W   | 1.000      | 0.384        | 0.052 (0.020)    | 0.406 (0.156)    | 0 (0.000) |    17.39 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           37 |      921 | 2024-03-15 | ex-sYnck             | W   | 0.945      | 0.143        | -                | 0.292 (0.039)    | 0 (0.000) |    11.96 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           36 |      949 | 2024-03-14 | The Chosen Few       | L   | 0.940      | -            | -                | -                | -         |   -16.90 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           35 |     1022 | 2024-03-12 | Secret               | W   | 0.925      | 0.143        | -                | 0.210 (0.028)    | 0 (0.000) |     6.79 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           34 |     1057 | 2024-03-10 | Nemiga               | L   | 0.913      | -            | -                | -                | -         |    -7.53 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           33 |     1093 | 2024-03-09 | BLEED                | L   | 0.904      | -            | -                | -                | -         |    -5.26 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           32 |     1123 | 2024-03-07 | ECF                  | W   | 0.894      | 0.372        | -                | 0.304 (0.101)    | 0 (0.000) |     6.36 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           31 |     1162 | 2024-03-06 | V1dar                | W   | 0.886      | -            | -                | -                | 0 (0.000) |     5.14 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           30 |     1204 | 2024-03-05 | AURA                 | W   | 0.879      | -            | -                | -                | 0 (0.000) |     4.16 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           29 |     1297 | 2024-02-29 | Metizport            | L   | 0.846      | -            | -                | -                | -         |    -6.75 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           28 |     1355 | 2024-02-26 | ALTERNATE aTTaX      | L   | 0.825      | -            | -                | -                | -         |   -12.24 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           27 |     1735 | 2024-02-09 | 3DMAX                | L   | 0.713      | -            | -                | -                | -         |    -6.43 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           26 |     1740 | 2024-02-09 | fnatic               | L   | 0.712      | -            | -                | -                | -         |    -4.32 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           25 |     1760 | 2024-02-07 | Permitta             | W   | 0.698      | 0.143        | 0.031 (0.003)    | 0.970 (0.097)    | 0 (0.000) |    12.10 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           24 |     1930 | 2024-01-30 | Entropiq             | W   | 0.645      | 0.143        | -                | 0.403 (0.037)    | 0 (0.000) |     8.02 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           23 |     2319 | 2024-01-16 | Nexus                | L   | 0.555      | -            | -                | -                | -         |    -8.11 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           22 |     2333 | 2024-01-16 | 00NATION             | W   | 0.554      | -            | -                | -                | -         |     5.10 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           21 |     2342 | 2024-01-16 | GUN5                 | W   | 0.554      | -            | -                | -                | -         |     4.89 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           20 |     2525 | 2024-01-11 | ILIN                 | L   | 0.519      | -            | -                | -                | -         |   -13.76 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           19 |     2540 | 2024-01-10 | GRGECHI              | W   | 0.514      | -            | -                | -                | -         |     1.36 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           18 |     2718 | 2023-12-16 | Eternal Fire Academy | W   | 0.346      | 0.373        | 0.011 (0.001)    | -                | 1 (0.346) |     3.37 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           17 |     2743 | 2023-12-15 | Onyx Ravens          | W   | 0.340      | 0.373        | 0.008 (0.001)    | -                | 1 (0.340) |     3.14 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           16 |     2813 | 2023-12-09 | RUSH B               | L   | 0.300      | -            | -                | -                | -         |    -5.55 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           15 |     2820 | 2023-12-09 | Preasy               | L   | 0.299      | -            | -                | -                | -         |    -2.27 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           14 |     2860 | 2023-12-07 | ALTERNATE aTTaX      | L   | 0.287      | -            | -                | -                | -         |    -4.34 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           13 |     2869 | 2023-12-07 | ex-sYnck             | W   | 0.285      | 0.371        | -                | 0.292 (0.031)    | -         |     3.54 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           12 |     2876 | 2023-12-06 | MOUZ NXT             | W   | 0.281      | 0.372        | 0.054 (0.006)    | 0.970 (0.101)    | -         |     5.49 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           11 |     2903 | 2023-12-06 | Sprout               | L   | 0.277      | -            | -                | -                | -         |    -5.31 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           10 |     2911 | 2023-12-05 | Enterprise           | W   | 0.274      | 0.372        | 0.026 (0.003)    | 0.452 (0.046)    | -         |     5.33 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            9 |     2937 | 2023-12-04 | The Witchers         | W   | 0.265      | 0.371        | 0.038 (0.004)    | -                | -         |     3.58 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            8 |     3012 | 2023-11-30 | GODSENT              | L   | 0.238      | -            | -                | -                | -         |    -4.01 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            7 |     3059 | 2023-11-26 | Into the Breach      | W   | 0.211      | 0.371        | 0.037 (0.003)    | -                | -         |     3.40 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            6 |     3134 | 2023-11-21 | PERA                 | L   | 0.180      | -            | -                | -                | -         |    -3.15 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            5 |     3139 | 2023-11-21 | paiN                 | W   | 0.180      | 0.384        | 0.698 (0.048)    | 0.854 (0.059)    | -         |     5.63 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            4 |     3328 | 2023-11-14 | Legacy               | L   | 0.133      | -            | -                | -                | -         |    -0.83 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            3 |     3352 | 2023-11-13 | Entropiq             | W   | 0.125      | -            | -                | -                | -         |     1.63 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            2 |     3360 | 2023-11-12 | Preasy               | L   | 0.121      | -            | -                | -                | -         |    -0.95 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            1 |     3378 | 2023-11-12 | Legacy               | W   | 0.119      | 0.384        | 0.055 (0.003)    | -                | -         |     3.03 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,767.05)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.346 | $10,000.00     | $3,457.29       |
| 2023-12-13 |      0.326 | $1,250.00      | $407.84         |
| 2023-11-21 |      0.180 | $5,000.00      | $901.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
