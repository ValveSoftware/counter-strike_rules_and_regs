### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, SpavaQu, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  958.2<br />
<br />
Final Rank Value (958.2) = Starting Rank Value (925.9) + Head To Head Adjustments (32.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 925.9
- 400 + ( ( 0.264 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 925.9


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
|           92 |      104 | 2024-06-08 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.16 | bnox, maaryy, mASKED, SpavaQu, tomiko |
|           91 |      245 | 2024-06-06 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.154 (0.067)    | 1.000 (0.435)    | 0 (0.000) |    23.98 | bnox, Markoś, mASKED, SpavaQu, tomiko |
|           90 |      379 | 2024-06-03 | GUN5              | W   | 1.000      | 0.435        | 0.079 (0.034)    | -                | 0 (0.000) |    20.01 | bnox, Markoś, mASKED, morelz, tomiko  |
|           89 |      439 | 2024-06-01 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -14.05 | bnox, mASKED, morelz, SpavaQu, tomiko |
|           88 |      449 | 2024-05-31 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -3.17 | bnox, mASKED, morelz, Sidney, tomiko  |
|           87 |      483 | 2024-05-30 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.70 | bnox, maaryy, mASKED, morelz, tomiko  |
|           86 |      491 | 2024-05-30 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -20.61 | bnox, maaryy, mASKED, morelz, tomiko  |
|           85 |      535 | 2024-05-28 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.94 | bnox, maaryy, mASKED, morelz, tomiko  |
|           84 |      538 | 2024-05-28 | GUN5              | W   | 1.000      | 0.435        | 0.079 (0.034)    | -                | 0 (0.000) |    16.64 | bnox, maaryy, mASKED, morelz, tomiko  |
|           83 |      556 | 2024-05-27 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -15.59 | bnox, maaryy, mASKED, morelz, tomiko  |
|           82 |      579 | 2024-05-26 | ECLOT             | W   | 1.000      | 0.371        | 0.101 (0.038)    | -                | 0 (0.000) |    23.58 | bnox, maaryy, mASKED, morelz, tomiko  |
|           81 |      595 | 2024-05-25 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.51 | bnox, maaryy, mASKED, morelz, tomiko  |
|           80 |      665 | 2024-05-22 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.570 (0.248)    | 0 (0.000) |    18.22 | bnox, maaryy, mASKED, morelz, tomiko  |
|           79 |      673 | 2024-05-22 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -6.91 | bnox, maaryy, mASKED, morelz, Vegi    |
|           78 |      695 | 2024-05-21 | INFINITE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.16 | bnox, maaryy, mASKED, morelz, Vegi    |
|           77 |      751 | 2024-05-20 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -10.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|           76 |      843 | 2024-05-17 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -9.01 | bnox, maaryy, mASKED, morelz, Vegi    |
|           75 |      909 | 2024-05-15 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -15.22 | bnox, maaryy, mASKED, morelz, Vegi    |
|           74 |      998 | 2024-05-13 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |    -9.65 | bnox, maaryy, mASKED, morelz, Vegi    |
|           73 |     1144 | 2024-05-07 | Enterprise        | L   | 0.971      | -            | -                | -                | -         |   -15.49 | bnox, maaryy, mASKED, morelz, Sobol   |
|           72 |     1160 | 2024-05-06 | ENCE Academy      | W   | 0.964      | -            | -                | -                | -         |     9.00 | bnox, maaryy, mASKED, morelz, Sobol   |
|           71 |     1205 | 2024-05-03 | Insilio           | L   | 0.946      | -            | -                | -                | -         |   -11.64 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           70 |     1232 | 2024-05-02 | Sampi             | L   | 0.939      | -            | -                | -                | -         |   -12.71 | bnox, maaryy, mASKED, Sidney, Sobol   |
|           69 |     1243 | 2024-05-02 | B8                | L   | 0.938      | -            | -                | -                | -         |   -10.66 | bnox, maaryy, mASKED, morelz, Sobol   |
|           68 |     1291 | 2024-04-30 | BLEED             | L   | 0.924      | -            | -                | -                | -         |    -2.75 | bnox, maaryy, mASKED, morelz, Vegi    |
|           67 |     1298 | 2024-04-29 | AMKAL             | L   | 0.919      | -            | -                | -                | -         |    -5.92 | bnox, maaryy, mASKED, morelz, Vegi    |
|           66 |     1308 | 2024-04-29 | RUBY              | W   | 0.918      | 0.435        | -                | 0.555 (0.222)    | -         |    12.54 | bnox, maaryy, mASKED, Sidney, Vegi    |
|           65 |     1344 | 2024-04-27 | Insilio           | L   | 0.906      | -            | -                | -                | -         |   -13.96 | bnox, maaryy, mASKED, morelz, Vegi    |
|           64 |     1352 | 2024-04-27 | Enterprise        | W   | 0.905      | 0.396        | -                | 0.647 (0.232)    | -         |    12.91 | bnox, maaryy, mASKED, morelz, Vegi    |
|           63 |     1375 | 2024-04-26 | ARCRED            | L   | 0.898      | -            | -                | -                | -         |   -24.76 | bnox, maaryy, mASKED, morelz, Vegi    |
|           62 |     1396 | 2024-04-25 | 1WIN              | L   | 0.893      | -            | -                | -                | -         |   -12.94 | bnox, maaryy, mASKED, morelz, Vegi    |
|           61 |     1413 | 2024-04-24 | BLEED             | L   | 0.887      | -            | -                | -                | -         |    -3.37 | bnox, maaryy, mASKED, morelz, Vegi    |
|           60 |     1415 | 2024-04-24 | Passion UA        | W   | 0.886      | 0.384        | 0.088 (0.030)    | 0.905 (0.308)    | -         |    12.78 | bnox, maaryy, mASKED, morelz, Vegi    |
|           59 |     1424 | 2024-04-24 | Sampi             | L   | 0.884      | -            | -                | -                | -         |   -13.51 | bnox, maaryy, mASKED, morelz, Vegi    |
|           58 |     1446 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.877      | -            | -                | -                | -         |    11.41 | bnox, maaryy, mASKED, morelz, Vegi    |
|           57 |     1459 | 2024-04-22 | Grannys Knockers  | W   | 0.871      | -            | -                | -                | -         |     7.01 | bnox, maaryy, mASKED, morelz, Vegi    |
|           56 |     1480 | 2024-04-21 | Insilio           | W   | 0.864      | 0.435        | -                | 0.625 (0.235)    | -         |    12.92 | bnox, maaryy, mASKED, morelz, Vegi    |
|           55 |     1504 | 2024-04-20 | Nexus             | L   | 0.859      | -            | -                | -                | -         |   -16.44 | bnox, maaryy, mASKED, morelz, Vegi    |
|           54 |     1509 | 2024-04-20 | Passion UA        | W   | 0.858      | 0.371        | 0.088 (0.028)    | 0.905 (0.288)    | -         |    13.48 | bnox, maaryy, mASKED, morelz, Vegi    |
|           53 |     1598 | 2024-04-18 | Passion UA        | L   | 0.845      | -            | -                | -                | -         |   -12.90 | bnox, maaryy, mASKED, morelz, Vegi    |
|           52 |     1612 | 2024-04-18 | Sampi             | L   | 0.844      | -            | -                | -                | -         |   -13.36 | bnox, maaryy, mASKED, morelz, Vegi    |
|           51 |     1628 | 2024-04-17 | PARIVISION        | W   | 0.839      | -            | -                | -                | -         |    12.43 | bnox, maaryy, mASKED, morelz, Vegi    |
|           50 |     1670 | 2024-04-16 | Gaimin Gladiators | L   | 0.832      | -            | -                | -                | -         |    -4.72 | bnox, maaryy, mASKED, morelz, Vegi    |
|           49 |     1733 | 2024-04-12 | MOUZ NXT          | W   | 0.805      | 0.371        | 0.164 (0.049)    | 1.000 (0.298)    | -         |    16.61 | bnox, maaryy, mASKED, morelz, Vegi    |
|           48 |     1813 | 2024-04-10 | EYEBALLERS        | W   | 0.791      | 0.384        | -                | 0.722 (0.220)    | -         |    10.99 | bnox, maaryy, mASKED, morelz, Vegi    |
|           47 |     1891 | 2024-04-08 | HAVU              | W   | 0.779      | -            | -                | -                | -         |     5.51 | bnox, maaryy, mASKED, morelz, Vegi    |
|           46 |     1898 | 2024-04-08 | JANO              | W   | 0.777      | -            | -                | -                | -         |     4.41 | bnox, maaryy, mASKED, morelz, Vegi    |
|           45 |     2028 | 2024-04-03 | Enterprise        | L   | 0.746      | -            | -                | -                | -         |   -11.31 | bnox, maaryy, mASKED, morelz, Vegi    |
|           44 |     2040 | 2024-04-03 | ECLOT             | L   | 0.745      | -            | -                | -                | -         |    -5.69 | bnox, maaryy, mASKED, morelz, Vegi    |
|           43 |     2072 | 2024-04-02 | 3DMAX             | L   | 0.739      | -            | -                | -                | -         |    -5.60 | bnox, maaryy, mASKED, morelz, Vegi    |
|           42 |     2081 | 2024-04-02 | Sashi             | L   | 0.737      | -            | -                | -                | -         |    -8.69 | bnox, maaryy, mASKED, morelz, Vegi    |
|           41 |     2346 | 2024-03-16 | RUBY              | L   | 0.626      | -            | -                | -                | -         |   -12.40 | bnox, maaryy, mASKED, morelz, Vegi    |
|           40 |     2366 | 2024-03-15 | The Chosen Few    | W   | 0.619      | -            | -                | -                | -         |     3.76 | bnox, maaryy, mASKED, morelz, Vegi    |
|           39 |     2369 | 2024-03-15 | Sampi             | L   | 0.618      | -            | -                | -                | -         |   -10.77 | bnox, maaryy, mASKED, morelz, Vegi    |
|           38 |     2416 | 2024-03-13 | MOUZ NXT          | W   | 0.608      | 0.372        | 0.164 (0.037)    | 1.000 (0.226)    | -         |    11.98 | bnox, maaryy, mASKED, morelz, Vegi    |
|           37 |     2435 | 2024-03-13 | ECLOT             | W   | 0.605      | -            | -                | -                | -         |    14.20 | bnox, maaryy, mASKED, morelz, Vegi    |
|           36 |     2449 | 2024-03-13 | ECLOT             | W   | 0.604      | 0.371        | 0.101 (0.023)    | -                | -         |    14.74 | bnox, maaryy, mASKED, morelz, Vegi    |
|           35 |     2491 | 2024-03-11 | ex-Preasy         | L   | 0.592      | -            | -                | -                | -         |    -8.92 | bnox, maaryy, mASKED, morelz, Vegi    |
|           34 |     2538 | 2024-03-09 | Sashi             | L   | 0.578      | -            | -                | -                | -         |    -6.85 | bnox, maaryy, mASKED, morelz, Vegi    |
|           33 |     2574 | 2024-03-07 | VP.Prodigy        | W   | 0.567      | -            | -                | -                | -         |     6.28 | bnox, maaryy, mASKED, morelz, Vegi    |
|           32 |     2583 | 2024-03-07 | ECF               | W   | 0.565      | -            | -                | -                | -         |     4.91 | bnox, maaryy, mASKED, morelz, Vegi    |
|           31 |     2611 | 2024-03-06 | Passion UA        | W   | 0.559      | -            | -                | -                | -         |    10.81 | bnox, maaryy, mASKED, morelz, Vegi    |
|           30 |     2612 | 2024-03-06 | Enterprise        | W   | 0.558      | -            | -                | -                | -         |     9.91 | bnox, maaryy, mASKED, morelz, Vegi    |
|           29 |     2652 | 2024-03-05 | Young Ninjas      | W   | 0.552      | -            | -                | -                | -         |     7.04 | bnox, maaryy, mASKED, morelz, Vegi    |
|           28 |     2719 | 2024-03-02 | GODSENT           | W   | 0.532      | -            | -                | -                | -         |     1.67 | bnox, maaryy, mASKED, morelz, Vegi    |
|           27 |     2763 | 2024-02-28 | Secret            | L   | 0.512      | -            | -                | -                | -         |   -14.28 | bnox, maaryy, mASKED, morelz, Vegi    |
|           26 |     2766 | 2024-02-28 | ECLOT             | L   | 0.511      | -            | -                | -                | -         |    -3.03 | bnox, maaryy, mASKED, morelz, Vegi    |
|           25 |     2787 | 2024-02-27 | Sprout            | W   | 0.505      | -            | -                | -                | -         |     1.08 | bnox, maaryy, mASKED, morelz, Vegi    |
|           24 |     2861 | 2024-02-24 | ECLOT             | W   | 0.485      | 0.333        | 0.101 (0.016)    | -                | -         |    12.51 | bnox, maaryy, mASKED, morelz, Vegi    |
|           23 |     2890 | 2024-02-22 | PGE Turow         | W   | 0.471      | -            | -                | -                | -         |     2.82 | bnox, maaryy, mASKED, morelz, reiko   |
|           22 |     2922 | 2024-02-21 | ECLOT             | L   | 0.464      | -            | -                | -                | -         |    -2.59 | bnox, maaryy, mASKED, morelz, Vegi    |
|           21 |     2969 | 2024-02-19 | ECLOT             | W   | 0.452      | -            | -                | -                | -         |    11.90 | bnox, maaryy, mASKED, morelz, Vegi    |
|           20 |     3207 | 2024-02-07 | Endpoint          | L   | 0.371      | -            | -                | -                | -         |    -6.33 | bnox, maaryy, mASKED, morelz, Vegi    |
|           19 |     3352 | 2024-01-31 | Sashi             | W   | 0.326      | -            | -                | -                | -         |     7.86 | bnox, maaryy, mASKED, morelz, Vegi    |
|           18 |     3369 | 2024-01-30 | RUBY              | L   | 0.320      | -            | -                | -                | -         |    -5.60 | bnox, maaryy, mASKED, morelz, Vegi    |
|           17 |     3372 | 2024-01-30 | 3DMAX             | W   | 0.320      | -            | -                | -                | -         |     8.35 | bnox, maaryy, mASKED, morelz, Vegi    |
|           16 |     3580 | 2024-01-20 | Gaimin Gladiators | L   | 0.252      | -            | -                | -                | -         |    -1.27 | bnox, maaryy, mASKED, morelz, Vegi    |
|           15 |     3584 | 2024-01-20 | Astralis Talent   | L   | 0.251      | -            | -                | -                | -         |    -4.57 | bnox, maaryy, mASKED, morelz, Vegi    |
|           14 |     3617 | 2024-01-19 | JANO              | W   | 0.247      | -            | -                | -                | -         |     0.65 | bnox, maaryy, mASKED, morelz, Vegi    |
|           13 |     3640 | 2024-01-19 | Aurora Young Blud | W   | 0.244      | -            | -                | -                | -         |     2.01 | bnox, maaryy, mASKED, morelz, Vegi    |
|           12 |     3675 | 2024-01-18 | Zero Tenacity     | L   | 0.240      | -            | -                | -                | -         |    -2.14 | bnox, maaryy, mASKED, morelz, Vegi    |
|           11 |     3694 | 2024-01-18 | BIG               | L   | 0.239      | -            | -                | -                | -         |    -0.37 | bnox, maaryy, mASKED, morelz, Vegi    |
|           10 |     3702 | 2024-01-18 | Spirit Academy    | W   | 0.238      | -            | -                | -                | -         |     1.49 | bnox, maaryy, mASKED, morelz, Vegi    |
|            9 |     3742 | 2024-01-17 | Astralis Talent   | L   | 0.232      | -            | -                | -                | -         |    -4.27 | bnox, maaryy, mASKED, morelz, Vegi    |
|            8 |     3858 | 2024-01-14 | ECLOT             | W   | 0.212      | -            | -                | -                | -         |     5.71 | bnox, maaryy, mASKED, morelz, Vegi    |
|            7 |     3877 | 2024-01-13 | ex-sYnck          | W   | 0.208      | -            | -                | -                | -         |     0.62 | bnox, maaryy, mASKED, morelz, Vegi    |
|            6 |     3882 | 2024-01-13 | OG                | L   | 0.207      | -            | -                | -                | -         |    -1.18 | bnox, maaryy, mASKED, morelz, Vegi    |
|            5 |     3883 | 2024-01-13 | Insilio           | W   | 0.206      | -            | -                | -                | -         |     3.10 | bnox, maaryy, mASKED, morelz, Vegi    |
|            4 |     3890 | 2024-01-13 | INFINITE          | W   | 0.206      | -            | -                | -                | -         |     0.35 | bnox, maaryy, mASKED, morelz, Vegi    |
|            3 |     3921 | 2024-01-12 | Clоwnfiesta       | W   | 0.201      | -            | -                | -                | -         |     0.32 | bnox, maaryy, mASKED, morelz, Vegi    |
|            2 |     3971 | 2024-01-11 | PERA              | L   | 0.192      | -            | -                | -                | -         |    -3.12 | bnox, maaryy, mASKED, morelz, Vegi    |
|            1 |     3983 | 2024-01-10 | Illyrians         | W   | 0.187      | -            | -                | -                | -         |     0.29 | bnox, maaryy, mASKED, morelz, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,618.76)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.940 | $500.00        | $469.89         |
| 2024-04-25 |      0.891 | $3,000.00      | $2,674.24       |
| 2024-03-25 |      0.686 | $1,250.00      | $858.03         |
| 2024-02-28 |      0.511 | $3,000.00      | $1,533.85       |
| 2024-02-21 |      0.464 | $1,500.00      | $696.51         |
| 2024-01-21 |      0.257 | $1,500.00      | $386.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
