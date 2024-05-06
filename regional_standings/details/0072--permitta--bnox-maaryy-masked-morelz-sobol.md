### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, morelz, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  906.3<br />
<br />
Final Rank Value (906.3) = Starting Rank Value (933.0) + Head To Head Adjustments (-26.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.440[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 933.0
- 400 + ( ( 0.280 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 933.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |        9 | 2024-05-06 | ENCE Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.26 | bnox, maaryy, mASKED, morelz, Sobol |
|           71 |       54 | 2024-05-03 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -11.26 | bnox, maaryy, mASKED, Sidney, Sobol |
|           70 |       81 | 2024-05-02 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -12.43 | bnox, maaryy, mASKED, Sidney, Sobol |
|           69 |       92 | 2024-05-02 | B8                | L   | 1.000      | -            | -                | -                | -         |   -13.50 | bnox, maaryy, mASKED, morelz, Sobol |
|           68 |      140 | 2024-04-30 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -4.92 | bnox, maaryy, mASKED, morelz, Vegi  |
|           67 |      147 | 2024-04-29 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -5.87 | bnox, maaryy, mASKED, morelz, Vegi  |
|           66 |      157 | 2024-04-29 | RUBY              | W   | 1.000      | 0.435        | -                | 0.460 (0.200)    | 0 (0.000) |    12.31 | bnox, maaryy, mASKED, Sidney, Vegi  |
|           65 |      193 | 2024-04-27 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -14.45 | bnox, maaryy, mASKED, morelz, Vegi  |
|           64 |      201 | 2024-04-27 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.83 | bnox, maaryy, mASKED, morelz, Vegi  |
|           63 |      224 | 2024-04-26 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -25.13 | bnox, maaryy, mASKED, morelz, Vegi  |
|           62 |      245 | 2024-04-25 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -23.50 | bnox, maaryy, mASKED, morelz, Vegi  |
|           61 |      262 | 2024-04-24 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -6.69 | bnox, maaryy, mASKED, morelz, Vegi  |
|           60 |      264 | 2024-04-24 | Passion UA        | W   | 1.000      | 0.384        | 0.111 (0.043)    | 0.644 (0.248)    | 0 (0.000) |    13.18 | bnox, maaryy, mASKED, morelz, Vegi  |
|           59 |      273 | 2024-04-24 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -14.59 | bnox, maaryy, mASKED, morelz, Vegi  |
|           58 |      295 | 2024-04-23 | ALTERNATE aTTaX   | W   | 1.000      | 0.371        | 0.104 (0.039)    | 0.779 (0.289)    | 0 (0.000) |    11.19 | bnox, maaryy, mASKED, morelz, Vegi  |
|           57 |      308 | 2024-04-22 | Grannys Knockers  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.86 | bnox, maaryy, mASKED, morelz, Vegi  |
|           56 |      329 | 2024-04-21 | Insilio           | W   | 1.000      | 0.435        | -                | 0.660 (0.287)    | 0 (0.000) |    15.06 | bnox, maaryy, mASKED, morelz, Vegi  |
|           55 |      353 | 2024-04-20 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -17.60 | bnox, maaryy, mASKED, morelz, Vegi  |
|           54 |      358 | 2024-04-20 | Passion UA        | W   | 1.000      | 0.371        | 0.111 (0.041)    | 0.644 (0.239)    | 0 (0.000) |    14.21 | bnox, maaryy, mASKED, morelz, Vegi  |
|           53 |      447 | 2024-04-18 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -16.57 | bnox, maaryy, mASKED, morelz, Vegi  |
|           52 |      461 | 2024-04-18 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -14.96 | bnox, maaryy, mASKED, morelz, Vegi  |
|           51 |      477 | 2024-04-17 | PARIVISION        | W   | 1.000      | 0.384        | -                | 0.544 (0.209)    | 0 (0.000) |    12.42 | bnox, maaryy, mASKED, morelz, Vegi  |
|           50 |      519 | 2024-04-16 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -4.05 | bnox, maaryy, mASKED, morelz, Vegi  |
|           49 |      582 | 2024-04-12 | MOUZ NXT          | W   | 1.000      | 0.371        | 0.210 (0.078)    | 1.000 (0.371)    | 0 (0.000) |    19.21 | bnox, maaryy, mASKED, morelz, Vegi  |
|           48 |      662 | 2024-04-10 | EYEBALLERS        | W   | 1.000      | 0.384        | -                | 0.599 (0.230)    | -         |    13.62 | bnox, maaryy, mASKED, morelz, Vegi  |
|           47 |      740 | 2024-04-08 | HAVU              | W   | 1.000      | -            | -                | -                | -         |     9.46 | bnox, maaryy, mASKED, morelz, Vegi  |
|           46 |      747 | 2024-04-08 | JANO              | W   | 1.000      | -            | -                | -                | -         |     5.84 | bnox, maaryy, mASKED, morelz, Vegi  |
|           45 |      877 | 2024-04-03 | Enterprise        | L   | 0.979      | -            | -                | -                | -         |   -14.02 | bnox, maaryy, mASKED, morelz, Vegi  |
|           44 |      889 | 2024-04-03 | ECLOT             | L   | 0.978      | -            | -                | -                | -         |   -11.12 | bnox, maaryy, mASKED, morelz, Vegi  |
|           43 |      921 | 2024-04-02 | 3DMAX             | L   | 0.972      | -            | -                | -                | -         |    -8.01 | bnox, maaryy, mASKED, morelz, Vegi  |
|           42 |      930 | 2024-04-02 | Sashi             | L   | 0.971      | -            | -                | -                | -         |   -13.95 | bnox, maaryy, mASKED, morelz, Vegi  |
|           41 |     1195 | 2024-03-16 | RUBY              | L   | 0.860      | -            | -                | -                | -         |   -19.57 | bnox, maaryy, mASKED, morelz, Vegi  |
|           40 |     1215 | 2024-03-15 | The Chosen Few    | W   | 0.853      | -            | -                | -                | -         |     5.93 | bnox, maaryy, mASKED, morelz, Vegi  |
|           39 |     1218 | 2024-03-15 | Sampi             | L   | 0.851      | -            | -                | -                | -         |   -14.00 | bnox, maaryy, mASKED, morelz, Vegi  |
|           38 |     1265 | 2024-03-13 | MOUZ NXT          | W   | 0.841      | 0.372        | 0.210 (0.066)    | 1.000 (0.313)    | -         |    14.86 | bnox, maaryy, mASKED, morelz, Vegi  |
|           37 |     1284 | 2024-03-13 | ECLOT             | W   | 0.839      | 0.143        | 0.156 (0.019)    | -                | -         |    15.36 | bnox, maaryy, mASKED, morelz, Vegi  |
|           36 |     1298 | 2024-03-13 | ECLOT             | W   | 0.838      | 0.371        | 0.156 (0.048)    | 0.607 (0.188)    | -         |    16.47 | bnox, maaryy, mASKED, morelz, Vegi  |
|           35 |     1340 | 2024-03-11 | ex-Preasy         | L   | 0.825      | -            | -                | -                | -         |    -8.62 | bnox, maaryy, mASKED, morelz, Vegi  |
|           34 |     1387 | 2024-03-09 | Sashi             | L   | 0.812      | -            | -                | -                | -         |   -12.81 | bnox, maaryy, mASKED, morelz, Vegi  |
|           33 |     1423 | 2024-03-07 | VP.Prodigy        | W   | 0.800      | -            | -                | -                | -         |     3.90 | bnox, maaryy, mASKED, morelz, Vegi  |
|           32 |     1432 | 2024-03-07 | ECF               | W   | 0.798      | -            | -                | -                | -         |     3.23 | bnox, maaryy, mASKED, morelz, Vegi  |
|           31 |     1460 | 2024-03-06 | Passion UA        | W   | 0.792      | -            | -                | -                | -         |    13.15 | bnox, maaryy, mASKED, morelz, Vegi  |
|           30 |     1461 | 2024-03-06 | Enterprise        | W   | 0.792      | -            | -                | -                | -         |    14.41 | bnox, maaryy, mASKED, morelz, Vegi  |
|           29 |     1501 | 2024-03-05 | Young Ninjas      | W   | 0.786      | -            | -                | -                | -         |    12.82 | bnox, maaryy, mASKED, morelz, Vegi  |
|           28 |     1568 | 2024-03-02 | AURA              | W   | 0.765      | -            | -                | -                | -         |     1.98 | bnox, maaryy, mASKED, morelz, Vegi  |
|           27 |     1612 | 2024-02-28 | Secret            | L   | 0.745      | -            | -                | -                | -         |   -20.45 | bnox, maaryy, mASKED, morelz, Vegi  |
|           26 |     1615 | 2024-02-28 | ECLOT             | L   | 0.745      | -            | -                | -                | -         |    -7.62 | bnox, maaryy, mASKED, morelz, Vegi  |
|           25 |     1636 | 2024-02-27 | Sprout            | W   | 0.738      | -            | -                | -                | -         |     5.04 | bnox, maaryy, mASKED, morelz, Vegi  |
|           24 |     1710 | 2024-02-24 | ECLOT             | W   | 0.718      | 0.333        | 0.156 (0.037)    | -                | -         |    15.08 | bnox, maaryy, mASKED, morelz, Vegi  |
|           23 |     1739 | 2024-02-22 | PGE Turow         | W   | 0.704      | -            | -                | -                | -         |     4.47 | bnox, maaryy, mASKED, morelz, reiko |
|           22 |     1771 | 2024-02-21 | ECLOT             | L   | 0.698      | -            | -                | -                | -         |    -7.23 | bnox, maaryy, mASKED, morelz, Vegi  |
|           21 |     1818 | 2024-02-19 | ECLOT             | W   | 0.685      | 0.303        | 0.156 (0.032)    | -                | -         |    14.78 | bnox, maaryy, mASKED, morelz, Vegi  |
|           20 |     2056 | 2024-02-07 | Endpoint          | L   | 0.605      | -            | -                | -                | -         |   -10.84 | bnox, maaryy, mASKED, morelz, Vegi  |
|           19 |     2201 | 2024-01-31 | Sashi             | W   | 0.559      | -            | -                | -                | -         |    11.43 | bnox, maaryy, mASKED, morelz, Vegi  |
|           18 |     2218 | 2024-01-30 | RUBY              | L   | 0.553      | -            | -                | -                | -         |   -12.28 | bnox, maaryy, mASKED, morelz, Vegi  |
|           17 |     2221 | 2024-01-30 | 3DMAX             | W   | 0.553      | -            | -                | -                | -         |    13.93 | bnox, maaryy, mASKED, morelz, Vegi  |
|           16 |     2429 | 2024-01-20 | Gaimin Gladiators | L   | 0.485      | -            | -                | -                | -         |    -1.52 | bnox, maaryy, mASKED, morelz, Vegi  |
|           15 |     2433 | 2024-01-20 | Astralis Talent   | L   | 0.484      | -            | -                | -                | -         |    -9.07 | bnox, maaryy, mASKED, morelz, Vegi  |
|           14 |     2466 | 2024-01-19 | JANO              | W   | 0.480      | -            | -                | -                | -         |     3.45 | bnox, maaryy, mASKED, morelz, Vegi  |
|           13 |     2489 | 2024-01-19 | Aurora Young Blud | W   | 0.477      | -            | -                | -                | -         |     3.26 | bnox, maaryy, mASKED, morelz, Vegi  |
|           12 |     2524 | 2024-01-18 | Zero Tenacity     | L   | 0.473      | -            | -                | -                | -         |    -7.69 | bnox, maaryy, mASKED, morelz, Vegi  |
|           11 |     2543 | 2024-01-18 | BIG               | L   | 0.472      | -            | -                | -                | -         |    -0.94 | bnox, maaryy, mASKED, morelz, Vegi  |
|           10 |     2551 | 2024-01-18 | Spirit Academy    | W   | 0.472      | -            | -                | -                | -         |     3.70 | bnox, maaryy, mASKED, morelz, Vegi  |
|            9 |     2591 | 2024-01-17 | Astralis Talent   | L   | 0.465      | -            | -                | -                | -         |    -8.95 | bnox, maaryy, mASKED, morelz, Vegi  |
|            8 |     2707 | 2024-01-14 | ECLOT             | W   | 0.445      | 0.333        | 0.156 (0.023)    | -                | -         |    10.21 | bnox, maaryy, mASKED, morelz, Vegi  |
|            7 |     2726 | 2024-01-13 | ex-sYnck          | W   | 0.441      | -            | -                | -                | -         |     3.39 | bnox, maaryy, mASKED, morelz, Vegi  |
|            6 |     2731 | 2024-01-13 | OG                | L   | 0.440      | -            | -                | -                | -         |    -1.37 | bnox, maaryy, mASKED, morelz, Vegi  |
|            5 |     2732 | 2024-01-13 | Insilio           | W   | 0.440      | -            | -                | -                | -         |     6.65 | bnox, maaryy, mASKED, morelz, Vegi  |
|            4 |     2739 | 2024-01-13 | INFINITE          | W   | 0.439      | -            | -                | -                | -         |     0.72 | bnox, maaryy, mASKED, morelz, Vegi  |
|            3 |     2770 | 2024-01-12 | Clоwnfiesta       | W   | 0.434      | -            | -                | -                | -         |     0.68 | bnox, maaryy, mASKED, morelz, Vegi  |
|            2 |     2820 | 2024-01-11 | PERA              | L   | 0.426      | -            | -                | -                | -         |    -7.09 | bnox, maaryy, mASKED, morelz, Vegi  |
|            1 |     2832 | 2024-01-10 | Illyrians         | W   | 0.421      | -            | -                | -                | -         |     0.64 | bnox, maaryy, mASKED, morelz, Vegi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,665.80)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $500.00        | $500.00         |
| 2024-04-25 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-03-25 |      0.920 | $1,250.00      | $1,149.62       |
| 2024-02-28 |      0.745 | $3,000.00      | $2,233.64       |
| 2024-02-21 |      0.698 | $1,500.00      | $1,046.40       |
| 2024-01-21 |      0.491 | $1,500.00      | $736.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
