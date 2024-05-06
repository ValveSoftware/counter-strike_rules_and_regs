### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  962.0<br />
<br />
Final Rank Value (962.0) = Starting Rank Value (896.1) + Head To Head Adjustments (65.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.225[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.1
- 400 + ( ( 0.260 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 896.1


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
|           47 |       26 | 2024-05-05 | SINNERS              | L   | 1.000      | -            | -                | -                | -         |   -16.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           46 |       47 | 2024-05-04 | Sampi                | W   | 1.000      | 0.435        | 0.101 (0.044)    | 0.731 (0.318)    | 0 (0.000) |    16.50 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal   |
|           45 |       72 | 2024-05-02 | MOUZ NXT             | W   | 1.000      | 0.435        | 0.210 (0.091)    | 1.000 (0.435)    | 0 (0.000) |    20.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           44 |       87 | 2024-05-02 | Grannys Knockers     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           43 |      125 | 2024-04-30 | ALTERNATE aTTaX      | W   | 1.000      | 0.396        | 0.104 (0.041)    | 0.779 (0.309)    | 0 (0.000) |    16.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           42 |      132 | 2024-04-30 | ENCE Academy         | W   | 1.000      | 0.396        | 0.027 (0.011)    | 0.374 (0.148)    | 0 (0.000) |    11.68 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           41 |      146 | 2024-04-29 | Nexus                | W   | 1.000      | 0.435        | 0.031 (0.013)    | 0.605 (0.263)    | 0 (0.000) |    13.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           40 |      159 | 2024-04-29 | Alliance             | L   | 1.000      | -            | -                | -                | -         |   -17.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           39 |      267 | 2024-04-24 | SINNERS              | W   | 1.000      | 0.384        | 0.033 (0.013)    | 0.749 (0.288)    | 0 (0.000) |    21.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           38 |      500 | 2024-04-17 | EYEBALLERS           | W   | 1.000      | 0.384        | 0.045 (0.017)    | 0.599 (0.230)    | 0 (0.000) |    16.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           37 |     1217 | 2024-03-15 | ex-sYnck             | W   | 0.852      | -            | -                | -                | -         |     8.45 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           36 |     1245 | 2024-03-14 | The Chosen Few       | L   | 0.847      | -            | -                | -                | -         |   -17.28 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           35 |     1318 | 2024-03-12 | Secret               | W   | 0.832      | -            | -                | -                | -         |     4.55 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           34 |     1353 | 2024-03-10 | Nemiga               | L   | 0.820      | -            | -                | -                | -         |    -2.47 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           33 |     1389 | 2024-03-09 | BLEED                | L   | 0.811      | -            | -                | -                | -         |    -4.26 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           32 |     1419 | 2024-03-07 | ECF                  | W   | 0.800      | 0.372        | -                | 0.346 (0.103)    | -         |     5.03 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           31 |     1458 | 2024-03-06 | V1dar                | W   | 0.792      | -            | -                | -                | -         |     3.57 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           30 |     1500 | 2024-03-05 | AURA                 | W   | 0.786      | -            | -                | -                | -         |     2.73 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           29 |     1593 | 2024-02-29 | Metizport            | L   | 0.752      | -            | -                | -                | -         |    -6.90 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           28 |     1651 | 2024-02-26 | ALTERNATE aTTaX      | L   | 0.731      | -            | -                | -                | -         |   -10.43 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           27 |     2031 | 2024-02-09 | 3DMAX                | L   | 0.619      | -            | -                | -                | -         |    -3.69 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           26 |     2036 | 2024-02-09 | fnatic               | L   | 0.618      | -            | -                | -                | -         |    -2.81 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           25 |     2056 | 2024-02-07 | Permitta             | W   | 0.605      | 0.143        | 0.053 (0.005)    | 0.979 (0.085)    | -         |    10.84 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           24 |     2226 | 2024-01-30 | Entropiq             | W   | 0.552      | -            | -                | -                | -         |     5.48 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           23 |     2615 | 2024-01-16 | Nexus                | L   | 0.461      | -            | -                | -                | -         |    -6.84 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           22 |     2629 | 2024-01-16 | 00NATION             | W   | 0.461      | -            | -                | -                | -         |     1.53 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           21 |     2638 | 2024-01-16 | GUN5                 | W   | 0.460      | -            | -                | -                | -         |     2.62 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           20 |     2821 | 2024-01-11 | ILIN                 | L   | 0.426      | -            | -                | -                | -         |   -11.96 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           19 |     2836 | 2024-01-10 | GRGECHI              | W   | 0.421      | -            | -                | -                | -         |     0.78 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           18 |     3014 | 2023-12-16 | Eternal Fire Academy | W   | 0.252      | -            | -                | -                | 1 (0.252) |     1.72 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           17 |     3039 | 2023-12-15 | Onyx Ravens          | W   | 0.246      | -            | -                | -                | 1 (0.246) |     1.57 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           16 |     3109 | 2023-12-09 | RUSH B               | L   | 0.207      | -            | -                | -                | -         |    -4.42 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           15 |     3116 | 2023-12-09 | ex-Preasy            | L   | 0.205      | -            | -                | -                | -         |    -2.18 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           14 |     3156 | 2023-12-07 | BIG Academy          | L   | 0.193      | -            | -                | -                | -         |    -4.67 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           13 |     3165 | 2023-12-07 | ex-sYnck             | W   | 0.192      | -            | -                | -                | -         |     1.58 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           12 |     3172 | 2023-12-06 | MOUZ NXT             | W   | 0.187      | 0.372        | 0.210 (0.015)    | 1.000 (0.070)    | -         |     4.25 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           11 |     3199 | 2023-12-06 | Sprout               | L   | 0.184      | -            | -                | -                | -         |    -4.25 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           10 |     3207 | 2023-12-05 | Enterprise           | W   | 0.180      | -            | -                | -                | -         |     3.19 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            9 |     3233 | 2023-12-04 | The Witchers         | W   | 0.172      | -            | -                | -                | -         |     1.61 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            8 |     3308 | 2023-11-30 | GODSENT              | L   | 0.145      | -            | -                | -                | -         |    -3.14 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            7 |     3355 | 2023-11-26 | Into the Breach      | W   | 0.117      | -            | -                | -                | -         |     1.31 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            6 |     3430 | 2023-11-21 | PERA                 | L   | 0.087      | -            | -                | -                | -         |    -1.37 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            5 |     3435 | 2023-11-21 | paiN                 | W   | 0.086      | 0.384        | 0.786 (0.026)    | -                | -         |     2.70 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            4 |     3624 | 2023-11-14 | Legacy               | L   | 0.040      | -            | -                | -                | -         |    -0.38 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            3 |     3648 | 2023-11-13 | Entropiq             | W   | 0.032      | -            | -                | -                | -         |     0.30 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            2 |     3656 | 2023-11-12 | ex-Preasy            | L   | 0.027      | -            | -                | -                | -         |    -0.30 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            1 |     3674 | 2023-11-12 | Legacy               | W   | 0.025      | -            | -                | -                | -         |     0.56 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,250.82)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.252 | $10,000.00     | $2,524.23       |
| 2023-12-13 |      0.233 | $1,250.00      | $291.21         |
| 2023-11-21 |      0.087 | $5,000.00      | $435.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
