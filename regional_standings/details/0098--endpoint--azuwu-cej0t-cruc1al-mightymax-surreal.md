### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  863.2<br />
<br />
Final Rank Value (863.2) = Starting Rank Value (908.4) + Head To Head Adjustments (-45.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.302[<sup>2</sup>](#table1)
- LAN Wins: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 908.4
- 400 + ( ( 0.255 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 908.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |        8 | 2024-06-10 | MOUZ NXT             | W   | 1.000      | 0.450        | 0.164 (0.074)    | 1.000 (0.450)    | 0 (0.000) |    25.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |      137 | 2024-06-08 | Entropiq             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |      164 | 2024-06-07 | 9INE                 | L   | 1.000      | -            | -                | -                | -         |   -24.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |      251 | 2024-06-06 | NAVI Junior          | L   | 1.000      | -            | -                | -                | -         |   -26.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |      263 | 2024-06-06 | 5W                   | L   | 1.000      | -            | -                | -                | -         |   -25.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |      335 | 2024-06-04 | Rhyno                | L   | 1.000      | -            | -                | -                | -         |   -13.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |      559 | 2024-05-27 | Rhyno                | L   | 1.000      | -            | -                | -                | -         |   -13.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |      611 | 2024-05-24 | ALTERNATE aTTaX      | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.583 (0.253)    | 0 (0.000) |    13.83 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |      665 | 2024-05-22 | Permitta             | L   | 1.000      | -            | -                | -                | -         |   -18.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |      714 | 2024-05-21 | RUBY                 | L   | 1.000      | -            | -                | -                | -         |   -16.01 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |      768 | 2024-05-19 | Sangal               | L   | 1.000      | -            | -                | -                | -         |   -11.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |      833 | 2024-05-17 | Zero Tenacity        | L   | 1.000      | -            | -                | -                | -         |   -11.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |      919 | 2024-05-15 | Passion UA           | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.905 (0.393)    | 0 (0.000) |    15.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |      927 | 2024-05-15 | Sashi                | L   | 1.000      | -            | -                | -                | -         |    -4.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |      983 | 2024-05-14 | ALTERNATE aTTaX      | L   | 1.000      | -            | -                | -                | -         |   -14.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     1042 | 2024-05-11 | MOUZ NXT             | L   | 1.000      | -            | -                | -                | -         |   -10.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     1096 | 2024-05-09 | PARIVISION           | W   | 0.986      | 0.435        | 0.015 (0.006)    | 0.527 (0.226)    | 0 (0.000) |    16.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1177 | 2024-05-05 | SINNERS              | L   | 0.959      | -            | -                | -                | -         |   -13.44 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1198 | 2024-05-04 | Sampi                | W   | 0.951      | 0.435        | 0.036 (0.015)    | 0.883 (0.365)    | 0 (0.000) |    15.27 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal  |
|           29 |     1223 | 2024-05-02 | MOUZ NXT             | W   | 0.940      | 0.435        | 0.164 (0.067)    | 1.000 (0.409)    | 0 (0.000) |    20.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1238 | 2024-05-02 | Grannys Knockers     | W   | 0.938      | 0.384        | 0.013 (0.005)    | -                | 0 (0.000) |     9.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     1276 | 2024-04-30 | ALTERNATE aTTaX      | W   | 0.926      | 0.396        | 0.046 (0.017)    | 0.583 (0.214)    | -         |    16.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     1283 | 2024-04-30 | ENCE Academy         | W   | 0.925      | -            | -                | -                | -         |     9.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     1297 | 2024-04-29 | Nexus                | W   | 0.920      | 0.435        | 0.013 (0.005)    | 0.469 (0.187)    | -         |    12.30 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     1310 | 2024-04-29 | Alliance             | L   | 0.918      | -            | -                | -                | -         |   -14.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     1418 | 2024-04-24 | SINNERS              | W   | 0.886      | 0.384        | 0.045 (0.015)    | 0.844 (0.287)    | -         |    20.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     1651 | 2024-04-17 | EYEBALLERS           | W   | 0.838      | 0.384        | -                | 0.722 (0.233)    | -         |    13.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     2368 | 2024-03-15 | ex-sYnck             | W   | 0.619      | -            | -                | -                | -         |     2.44 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           20 |     2396 | 2024-03-14 | The Chosen Few       | L   | 0.613      | -            | -                | -                | -         |   -13.96 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           19 |     2469 | 2024-03-12 | Secret               | W   | 0.598      | -            | -                | -                | -         |     2.68 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           18 |     2504 | 2024-03-10 | Nemiga               | L   | 0.586      | -            | -                | -                | -         |    -2.18 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           17 |     2540 | 2024-03-09 | BLEED                | L   | 0.578      | -            | -                | -                | -         |    -1.24 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           16 |     2570 | 2024-03-07 | ECF                  | W   | 0.567      | -            | -                | -                | -         |     6.26 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           15 |     2609 | 2024-03-06 | V1dar                | W   | 0.559      | -            | -                | -                | -         |     2.23 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           14 |     2651 | 2024-03-05 | GODSENT              | W   | 0.553      | -            | -                | -                | -         |     2.12 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           13 |     2744 | 2024-02-29 | Metizport            | L   | 0.519      | -            | -                | -                | -         |    -5.85 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           12 |     2802 | 2024-02-26 | ALTERNATE aTTaX      | L   | 0.498      | -            | -                | -                | -         |    -6.22 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           11 |     3182 | 2024-02-09 | 3DMAX                | L   | 0.386      | -            | -                | -                | -         |    -2.08 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|           10 |     3187 | 2024-02-09 | fnatic               | L   | 0.385      | -            | -                | -                | -         |    -0.93 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            9 |     3207 | 2024-02-07 | Permitta             | W   | 0.371      | -            | -                | -                | -         |     6.33 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            8 |     3377 | 2024-01-30 | Entropiq             | W   | 0.319      | -            | -                | -                | -         |     1.64 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            7 |     3766 | 2024-01-16 | Nexus                | L   | 0.228      | -            | -                | -                | -         |    -3.90 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            6 |     3780 | 2024-01-16 | 00NATION             | W   | 0.227      | -            | -                | -                | -         |     0.62 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            5 |     3789 | 2024-01-16 | GUN5                 | W   | 0.227      | -            | -                | -                | -         |     0.40 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            4 |     3972 | 2024-01-11 | ILIN                 | L   | 0.192      | -            | -                | -                | -         |    -5.49 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            3 |     3987 | 2024-01-10 | GRGECHI              | W   | 0.187      | -            | -                | -                | -         |     0.32 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            2 |     4165 | 2023-12-16 | Eternal Fire Academy | W   | 0.019      | -            | -                | -                | 1 (0.019) |     0.08 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |
|            1 |     4190 | 2023-12-15 | Onyx Ravens          | W   | 0.013      | -            | -                | -                | 1 (0.013) |     0.04 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,691.58)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2023-12-16 |      0.019 | $10,000.00     | $191.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
