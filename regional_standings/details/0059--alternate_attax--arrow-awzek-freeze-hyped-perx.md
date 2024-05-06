### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  951.0<br />
<br />
Final Rank Value (951.0) = Starting Rank Value (1003.6) + Head To Head Adjustments (-52.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.504[<sup>1</sup>](#table2)
- Bounty Collected: 0.426[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.317<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1003.6
- 400 + ( ( 0.317 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1003.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           87 |        3 | 2024-05-06 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -5.20 | ArroW, awzek, FreeZe, hyped, PerX  |
|           86 |       88 | 2024-05-02 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -11.56 | ArroW, awzek, FreeZe, hyped, PerX  |
|           85 |      107 | 2024-05-01 | Sampi             | W   | 1.000      | 0.396        | 0.101 (0.040)    | 0.731 (0.290)    | 0 (0.000) |    17.17 | ArroW, awzek, FreeZe, hyped, PerX  |
|           84 |      116 | 2024-05-01 | Sangal            | W   | 1.000      | 0.500        | -                | 0.797 (0.399)    | 0 (0.000) |    16.80 | ArroW, awzek, FreeZe, hyped, PerX  |
|           83 |      125 | 2024-04-30 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -16.37 | ArroW, awzek, FreeZe, hyped, PerX  |
|           82 |      137 | 2024-04-30 | Sampi             | W   | 1.000      | 0.396        | 0.101 (0.040)    | 0.731 (0.290)    | 0 (0.000) |    17.99 | ArroW, awzek, FreeZe, hyped, PerX  |
|           81 |      166 | 2024-04-28 | Passion UA        | W   | 1.000      | 0.500        | 0.111 (0.055)    | 0.644 (0.322)    | 0 (0.000) |    15.62 | ArroW, awzek, FreeZe, hyped, PerX  |
|           80 |      225 | 2024-04-26 | Gaimin Gladiators | W   | 1.000      | 0.500        | 0.189 (0.094)    | 0.990 (0.495)    | 0 (0.000) |    28.40 | ArroW, awzek, FreeZe, hyped, skyye |
|           79 |      293 | 2024-04-23 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.75 | ArroW, FreeZe, hyped, PerX, skyye  |
|           78 |      295 | 2024-04-23 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -11.19 | ArroW, FreeZe, hyped, PerX, skyye  |
|           77 |      305 | 2024-04-22 | ENCE Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.70 | ArroW, FreeZe, hyped, PerX, skyye  |
|           76 |      318 | 2024-04-21 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -8.38 | ArroW, awzek, FreeZe, hyped, skyye |
|           75 |      328 | 2024-04-21 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -10.34 | ArroW, awzek, FreeZe, hyped, skyye |
|           74 |      335 | 2024-04-20 | Space             | L   | 1.000      | -            | -                | -                | -         |   -21.41 | ArroW, awzek, FreeZe, hyped, skyye |
|           73 |      359 | 2024-04-20 | Enterprise        | W   | 1.000      | 0.500        | -                | 0.459 (0.229)    | 0 (0.000) |    18.83 | ArroW, awzek, FreeZe, hyped, skyye |
|           72 |      395 | 2024-04-19 | Passion UA        | W   | 1.000      | 0.371        | 0.111 (0.041)    | 0.644 (0.239)    | 0 (0.000) |    18.90 | ArroW, awzek, FreeZe, hyped, skyye |
|           71 |      401 | 2024-04-19 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -15.47 | ArroW, awzek, FreeZe, hyped, skyye |
|           70 |      451 | 2024-04-18 | HAVU              | L   | 1.000      | -            | -                | -                | -         |   -20.82 | ArroW, awzek, FreeZe, hyped, skyye |
|           69 |      459 | 2024-04-18 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -5.88 | ArroW, awzek, FreeZe, hyped, skyye |
|           68 |      520 | 2024-04-16 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | -         |     7.16 | ArroW, awzek, FreeZe, hyped, skyye |
|           67 |      533 | 2024-04-15 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -17.28 | ArroW, awzek, FreeZe, hyped, skyye |
|           66 |      569 | 2024-04-13 | Alliance          | W   | 1.000      | 0.371        | -                | 0.815 (0.302)    | -         |    13.39 | ArroW, awzek, FreeZe, hyped, skyye |
|           65 |      712 | 2024-04-09 | ECLOT             | W   | 1.000      | 0.371        | 0.156 (0.058)    | 0.607 (0.225)    | -         |    21.51 | ArroW, awzek, FreeZe, hyped, skyye |
|           64 |      746 | 2024-04-08 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -8.72 | ArroW, awzek, FreeZe, hyped, skyye |
|           63 |      837 | 2024-04-04 | Rebels            | L   | 0.986      | -            | -                | -                | -         |    -8.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           62 |      928 | 2024-04-02 | AMKAL             | L   | 0.971      | -            | -                | -                | -         |    -6.07 | ArroW, awzek, FreeZe, hyped, skyye |
|           61 |     1005 | 2024-03-27 | Blessed           | L   | 0.934      | -            | -                | -                | -         |   -20.92 | ArroW, awzek, FreeZe, hyped, skyye |
|           60 |     1012 | 2024-03-27 | Guild Eagles      | W   | 0.933      | -            | -                | -                | -         |    18.21 | ArroW, awzek, FreeZe, hyped, skyye |
|           59 |     1045 | 2024-03-25 | ex-Sprout         | W   | 0.920      | -            | -                | -                | -         |     5.09 | ArroW, awzek, FreeZe, hyped, skyye |
|           58 |     1060 | 2024-03-23 | Aurora            | L   | 0.907      | -            | -                | -                | -         |    -1.08 | ArroW, awzek, FreeZe, hyped, skyye |
|           57 |     1249 | 2024-03-14 | Metizport         | W   | 0.846      | 0.143        | 0.183 (0.022)    | -                | -         |    20.24 | ArroW, awzek, FreeZe, hyped, skyye |
|           56 |     1277 | 2024-03-13 | SINNERS           | L   | 0.840      | -            | -                | -                | -         |    -9.20 | ArroW, awzek, FreeZe, hyped, skyye |
|           55 |     1359 | 2024-03-10 | Entropiq          | L   | 0.819      | -            | -                | -                | -         |   -18.02 | ArroW, awzek, FreeZe, hyped, skyye |
|           54 |     1362 | 2024-03-10 | MOUZ NXT          | L   | 0.818      | -            | -                | -                | -         |    -8.14 | ArroW, awzek, FreeZe, hyped, skyye |
|           53 |     1406 | 2024-03-08 | Sashi             | W   | 0.804      | 0.371        | 0.188 (0.056)    | 1.000 (0.298)    | -         |    15.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           52 |     1446 | 2024-03-06 | brazylijski luz   | W   | 0.794      | -            | -                | -                | -         |     9.26 | ArroW, awzek, FreeZe, hyped, skyye |
|           51 |     1505 | 2024-03-05 | Sashi             | W   | 0.784      | 0.143        | 0.188 (0.021)    | -                | -         |    15.87 | ArroW, awzek, FreeZe, hyped, skyye |
|           50 |     1518 | 2024-03-04 | Passion UA        | L   | 0.778      | -            | -                | -                | -         |    -8.63 | ArroW, awzek, FreeZe, hyped, skyye |
|           49 |     1558 | 2024-03-02 | 500               | L   | 0.766      | -            | -                | -                | -         |   -15.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           48 |     1585 | 2024-03-01 | fnatic            | L   | 0.759      | -            | -                | -                | -         |    -4.41 | ArroW, awzek, FreeZe, hyped, skyye |
|           47 |     1611 | 2024-02-28 | BetBoom           | L   | 0.746      | -            | -                | -                | -         |    -1.56 | ArroW, awzek, FreeZe, hyped, skyye |
|           46 |     1628 | 2024-02-27 | RUBY              | L   | 0.739      | -            | -                | -                | -         |   -15.23 | ArroW, awzek, FreeZe, hyped, skyye |
|           45 |     1651 | 2024-02-26 | Endpoint          | W   | 0.731      | -            | -                | -                | -         |    10.43 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     1668 | 2024-02-25 | Alliance          | L   | 0.726      | -            | -                | -                | -         |   -13.70 | ArroW, awzek, FreeZe, hyped, skyye |
|           43 |     1831 | 2024-02-18 | Young Ninjas      | L   | 0.680      | -            | -                | -                | -         |   -11.11 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           42 |     2003 | 2024-02-11 | Entropiq          | W   | 0.633      | -            | -                | -                | -         |     5.05 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           41 |     2063 | 2024-02-06 | 500               | W   | 0.599      | -            | -                | -                | -         |     6.17 | awzek, FreeZe, Goody, PANIX, PerX  |
|           40 |     2089 | 2024-02-04 | brazylijski luz   | W   | 0.586      | -            | -                | -                | -         |     6.60 | awzek, FreeZe, Goody, PANIX, PerX  |
|           39 |     2100 | 2024-02-04 | Sangal            | L   | 0.584      | -            | -                | -                | -         |   -12.90 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|           38 |     2128 | 2024-02-03 | TSM               | L   | 0.578      | -            | -                | -                | -         |   -12.61 | awzek, FreeZe, Goody, PANIX, PerX  |
|           37 |     2189 | 2024-02-01 | Sangal            | L   | 0.565      | -            | -                | -                | -         |   -13.13 | awzek, FreeZe, Goody, PANIX, PerX  |
|           36 |     2227 | 2024-01-30 | ex-Sprout         | W   | 0.552      | -            | -                | -                | -         |     2.04 | awzek, FreeZe, Goody, PANIX, PerX  |
|           35 |     2276 | 2024-01-26 | Entropiq          | W   | 0.525      | -            | -                | -                | -         |     3.96 | awzek, FreeZe, Goody, PANIX, PerX  |
|           34 |     2303 | 2024-01-24 | Guild Eagles      | L   | 0.513      | -            | -                | -                | -         |    -6.05 | awzek, FreeZe, Goody, PANIX, PerX  |
|           33 |     2323 | 2024-01-23 | PERA              | L   | 0.506      | -            | -                | -                | -         |    -8.76 | awzek, FreeZe, Goody, PANIX, PerX  |
|           32 |     2327 | 2024-01-23 | Guild Eagles      | L   | 0.506      | -            | -                | -                | -         |    -6.57 | awzek, FreeZe, Goody, PANIX, PerX  |
|           31 |     2347 | 2024-01-22 | Viperio           | W   | 0.500      | -            | -                | -                | -         |     1.10 | awzek, FreeZe, Goody, PANIX, PerX  |
|           30 |     2351 | 2024-01-22 | Rebels            | L   | 0.500      | -            | -                | -                | -         |    -4.96 | awzek, FreeZe, Goody, PANIX, PerX  |
|           29 |     2354 | 2024-01-22 | Sampi             | W   | 0.499      | -            | -                | -                | -         |     8.43 | awzek, FreeZe, Goody, PANIX, PerX  |
|           28 |     2709 | 2024-01-14 | Lilmix            | L   | 0.444      | -            | -                | -                | -         |   -12.83 | awzek, FreeZe, Goody, PANIX, PerX  |
|           27 |     2742 | 2024-01-13 | Astralis          | L   | 0.439      | -            | -                | -                | -         |    -0.51 | awzek, FreeZe, Goody, PANIX, PerX  |
|           26 |     3011 | 2023-12-16 | BIG Academy       | W   | 0.253      | -            | -                | -                | 1 (0.253) |     1.35 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           25 |     3063 | 2023-12-12 | ex-Preasy         | L   | 0.226      | -            | -                | -                | -         |    -3.18 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           24 |     3089 | 2023-12-10 | GODSENT           | W   | 0.212      | -            | -                | -                | -         |     1.53 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           23 |     3111 | 2023-12-09 | lajtbitexe        | L   | 0.206      | -            | -                | -                | -         |    -5.56 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           22 |     3126 | 2023-12-08 | Zero Tenacity     | W   | 0.200      | -            | -                | -                | -         |     2.79 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           21 |     3136 | 2023-12-08 | Sprout            | W   | 0.198      | -            | -                | -                | -         |     1.18 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           20 |     3148 | 2023-12-07 | TUSTE CHOPAKI     | W   | 0.194      | -            | -                | -                | -         |     0.22 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           19 |     3159 | 2023-12-07 | ex-Anonymo        | L   | 0.193      | -            | -                | -                | -         |    -4.90 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           18 |     3176 | 2023-12-06 | The Witchers      | W   | 0.187      | -            | -                | -                | -         |     1.15 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           17 |     3195 | 2023-12-06 | ex-sYnck          | W   | 0.185      | -            | -                | -                | -         |     1.04 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           16 |     3210 | 2023-12-05 | lajtbitexe        | L   | 0.180      | -            | -                | -                | -         |    -4.90 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           15 |     3232 | 2023-12-04 | Entropiq          | W   | 0.172      | -            | -                | -                | -         |     1.04 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           14 |     3234 | 2023-12-04 | Guild Eagles      | L   | 0.172      | -            | -                | -                | -         |    -2.54 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           13 |     3273 | 2023-12-02 | Space             | W   | 0.159      | -            | -                | -                | -         |     0.98 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           12 |     3284 | 2023-12-01 | Aurora            | L   | 0.154      | -            | -                | -                | -         |    -0.17 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           11 |     3319 | 2023-11-29 | Sprout            | L   | 0.139      | -            | -                | -                | -         |    -3.64 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           10 |     3331 | 2023-11-28 | Sangal            | W   | 0.132      | -            | -                | -                | -         |     0.89 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            9 |     3334 | 2023-11-27 | GHR               | W   | 0.127      | -            | -                | -                | -         |     0.27 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            8 |     3368 | 2023-11-25 | BIG Academy       | L   | 0.113      | -            | -                | -                | -         |    -3.04 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            7 |     3422 | 2023-11-22 | 9 Pandas          | L   | 0.092      | -            | -                | -                | -         |    -1.00 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            6 |     3534 | 2023-11-17 | Into the Breach   | L   | 0.058      | -            | -                | -                | -         |    -1.41 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            5 |     3549 | 2023-11-16 | Guild Eagles      | W   | 0.054      | -            | -                | -                | -         |     0.87 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            4 |     3571 | 2023-11-16 | IKLA              | W   | 0.052      | -            | -                | -                | -         |     0.13 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            3 |     3611 | 2023-11-15 | FORZE             | L   | 0.045      | -            | -                | -                | -         |    -1.14 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            2 |     3626 | 2023-11-14 | Aurora            | W   | 0.039      | 0.589        | 0.973 (0.022)    | -                | -         |     1.19 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            1 |     3645 | 2023-11-13 | SINNERS           | L   | 0.032      | -            | -                | -                | -         |    -0.43 | awzek, FreeZe, PANIX, PerX, Spiidi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,856.49)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-25 |      1.000 | $1,000.00      | $1,000.00       |
| 2023-12-16 |      0.253 | $6,188.00      | $1,565.05       |
| 2023-12-13 |      0.233 | $1,250.00      | $291.21         |
| 2023-12-12 |      0.226 | $5,000.00      | $1,132.03       |
| 2023-11-19 |      0.074 | $5,000.00      | $368.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
