### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, awzek, FreeZe, hyped, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  822.0<br />
<br />
Final Rank Value (822.0) = Starting Rank Value (955.7) + Head To Head Adjustments (-133.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 955.7
- 400 + ( ( 0.286 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 955.7


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
|           86 |      111 | 2024-05-24 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -12.91 | ArroW, awzek, FreeZe, hyped, PerX  |
|           85 |      128 | 2024-05-23 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.51 | ArroW, awzek, FreeZe, hyped, PerX  |
|           84 |      152 | 2024-05-22 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -21.56 | ArroW, awzek, FreeZe, hyped, PerX  |
|           83 |      236 | 2024-05-20 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -20.14 | ArroW, awzek, FreeZe, hyped, PerX  |
|           82 |      274 | 2024-05-19 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.88 | ArroW, awzek, FreeZe, hyped, PerX  |
|           81 |      309 | 2024-05-18 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -4.44 | ArroW, awzek, FreeZe, hyped, PerX  |
|           80 |      329 | 2024-05-17 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -17.56 | ArroW, awzek, FreeZe, hyped, PerX  |
|           79 |      366 | 2024-05-16 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -8.94 | ArroW, awzek, FreeZe, hyped, PerX  |
|           78 |      381 | 2024-05-16 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -14.18 | ArroW, awzek, FreeZe, hyped, PerX  |
|           77 |      471 | 2024-05-14 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -18.62 | ArroW, awzek, FreeZe, hyped, PerX  |
|           76 |      483 | 2024-05-14 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.627 (0.272)    | 0 (0.000) |    15.86 | ArroW, awzek, FreeZe, hyped, PerX  |
|           75 |      654 | 2024-05-06 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -5.83 | ArroW, awzek, FreeZe, hyped, PerX  |
|           74 |      739 | 2024-05-02 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -11.45 | ArroW, awzek, FreeZe, hyped, PerX  |
|           73 |      758 | 2024-05-01 | Sampi             | W   | 1.000      | 0.396        | 0.038 (0.015)    | 0.794 (0.315)    | 0 (0.000) |    15.93 | ArroW, awzek, FreeZe, hyped, PerX  |
|           72 |      767 | 2024-05-01 | Sangal            | W   | 1.000      | 0.500        | 0.166 (0.083)    | 0.911 (0.455)    | 0 (0.000) |    21.54 | ArroW, awzek, FreeZe, hyped, PerX  |
|           71 |      776 | 2024-04-30 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -16.22 | ArroW, awzek, FreeZe, hyped, PerX  |
|           70 |      788 | 2024-04-30 | Sampi             | W   | 1.000      | 0.396        | 0.038 (0.015)    | 0.794 (0.315)    | 0 (0.000) |    16.85 | ArroW, awzek, FreeZe, hyped, PerX  |
|           69 |      817 | 2024-04-28 | Passion UA        | W   | 0.992      | 0.500        | 0.056 (0.028)    | 0.759 (0.377)    | 0 (0.000) |    15.92 | ArroW, awzek, FreeZe, hyped, PerX  |
|           68 |      876 | 2024-04-26 | Gaimin Gladiators | W   | 0.977      | 0.500        | 0.090 (0.044)    | 0.809 (0.395)    | 0 (0.000) |    26.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           67 |      944 | 2024-04-23 | Enterprise        | W   | 0.957      | -            | -                | -                | 0 (0.000) |    16.31 | ArroW, FreeZe, hyped, PerX, skyye  |
|           66 |      946 | 2024-04-23 | Permitta          | L   | 0.956      | -            | -                | -                | -         |   -11.39 | ArroW, FreeZe, hyped, PerX, skyye  |
|           65 |      956 | 2024-04-22 | ENCE Academy      | W   | 0.951      | -            | -                | -                | 0 (0.000) |    13.54 | ArroW, FreeZe, hyped, PerX, skyye  |
|           64 |      969 | 2024-04-21 | MOUZ NXT          | L   | 0.945      | -            | -                | -                | -         |    -8.08 | ArroW, awzek, FreeZe, hyped, skyye |
|           63 |      979 | 2024-04-21 | Sampi             | L   | 0.943      | -            | -                | -                | -         |   -11.11 | ArroW, awzek, FreeZe, hyped, skyye |
|           62 |      986 | 2024-04-20 | Space             | L   | 0.939      | -            | -                | -                | -         |   -17.69 | ArroW, awzek, FreeZe, hyped, skyye |
|           61 |     1010 | 2024-04-20 | Enterprise        | W   | 0.937      | 0.500        | -                | 0.524 (0.246)    | -         |    15.87 | ArroW, awzek, FreeZe, hyped, skyye |
|           60 |     1046 | 2024-04-19 | Passion UA        | W   | 0.932      | 0.371        | 0.056 (0.019)    | 0.759 (0.262)    | -         |    17.82 | ArroW, awzek, FreeZe, hyped, skyye |
|           59 |     1052 | 2024-04-19 | Zero Tenacity     | L   | 0.931      | -            | -                | -                | -         |   -11.07 | ArroW, awzek, FreeZe, hyped, skyye |
|           58 |     1102 | 2024-04-18 | HAVU              | L   | 0.924      | -            | -                | -                | -         |   -21.09 | ArroW, awzek, FreeZe, hyped, skyye |
|           57 |     1110 | 2024-04-18 | BLEED             | L   | 0.923      | -            | -                | -                | -         |    -4.65 | ArroW, awzek, FreeZe, hyped, skyye |
|           56 |     1171 | 2024-04-16 | Aurora Young Blud | W   | 0.911      | -            | -                | -                | -         |     6.23 | ArroW, awzek, FreeZe, hyped, skyye |
|           55 |     1184 | 2024-04-15 | Zero Tenacity     | L   | 0.906      | -            | -                | -                | -         |   -12.10 | ArroW, awzek, FreeZe, hyped, skyye |
|           54 |     1220 | 2024-04-13 | Alliance          | W   | 0.891      | 0.371        | -                | 0.617 (0.203)    | -         |    12.16 | ArroW, awzek, FreeZe, hyped, skyye |
|           53 |     1363 | 2024-04-09 | ECLOT             | W   | 0.864      | 0.371        | 0.084 (0.027)    | -                | -         |    17.81 | ArroW, awzek, FreeZe, hyped, skyye |
|           52 |     1397 | 2024-04-08 | SINNERS           | L   | 0.857      | -            | -                | -                | -         |    -8.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           51 |     1488 | 2024-04-04 | Rebels            | L   | 0.832      | -            | -                | -                | -         |    -7.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           50 |     1579 | 2024-04-02 | AMKAL             | L   | 0.817      | -            | -                | -                | -         |    -4.90 | ArroW, awzek, FreeZe, hyped, skyye |
|           49 |     1656 | 2024-03-27 | FAVBET            | L   | 0.780      | -            | -                | -                | -         |   -17.61 | ArroW, awzek, FreeZe, hyped, skyye |
|           48 |     1663 | 2024-03-27 | ex-Guild Eagles   | W   | 0.779      | -            | -                | -                | -         |    13.70 | ArroW, awzek, FreeZe, hyped, skyye |
|           47 |     1696 | 2024-03-25 | ex-Sprout         | W   | 0.766      | -            | -                | -                | -         |     3.75 | ArroW, awzek, FreeZe, hyped, skyye |
|           46 |     1711 | 2024-03-23 | Aurora            | L   | 0.753      | -            | -                | -                | -         |    -1.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           45 |     1900 | 2024-03-14 | Metizport         | W   | 0.692      | 0.143        | 0.088 (0.009)    | -                | -         |    15.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           44 |     1928 | 2024-03-13 | SINNERS           | L   | 0.686      | -            | -                | -                | -         |    -8.90 | ArroW, awzek, FreeZe, hyped, skyye |
|           43 |     2010 | 2024-03-10 | Entropiq          | L   | 0.665      | -            | -                | -                | -         |   -16.76 | ArroW, awzek, FreeZe, hyped, skyye |
|           42 |     2013 | 2024-03-10 | MOUZ NXT          | L   | 0.664      | -            | -                | -                | -         |    -6.60 | ArroW, awzek, FreeZe, hyped, skyye |
|           41 |     2057 | 2024-03-08 | Sashi             | W   | 0.650      | 0.371        | 0.157 (0.038)    | 1.000 (0.241)    | -         |    12.52 | ArroW, awzek, FreeZe, hyped, skyye |
|           40 |     2097 | 2024-03-06 | brazylijski luz   | W   | 0.640      | -            | -                | -                | -         |     6.74 | ArroW, awzek, FreeZe, hyped, skyye |
|           39 |     2156 | 2024-03-05 | Sashi             | W   | 0.630      | 0.143        | 0.157 (0.014)    | -                | -         |    12.86 | ArroW, awzek, FreeZe, hyped, skyye |
|           38 |     2169 | 2024-03-04 | Passion UA        | L   | 0.624      | -            | -                | -                | -         |    -6.61 | ArroW, awzek, FreeZe, hyped, skyye |
|           37 |     2209 | 2024-03-02 | 500               | L   | 0.612      | -            | -                | -                | -         |   -12.76 | ArroW, awzek, FreeZe, hyped, skyye |
|           36 |     2236 | 2024-03-01 | fnatic            | L   | 0.605      | -            | -                | -                | -         |    -4.97 | ArroW, awzek, FreeZe, hyped, skyye |
|           35 |     2262 | 2024-02-28 | BetBoom           | L   | 0.592      | -            | -                | -                | -         |    -1.24 | ArroW, awzek, FreeZe, hyped, skyye |
|           34 |     2279 | 2024-02-27 | RUBY              | L   | 0.585      | -            | -                | -                | -         |   -10.96 | ArroW, awzek, FreeZe, hyped, skyye |
|           33 |     2302 | 2024-02-26 | Endpoint          | W   | 0.577      | -            | -                | -                | -         |     8.22 | ArroW, awzek, FreeZe, hyped, skyye |
|           32 |     2319 | 2024-02-25 | Alliance          | L   | 0.572      | -            | -                | -                | -         |   -11.49 | ArroW, awzek, FreeZe, hyped, skyye |
|           31 |     2482 | 2024-02-18 | Young Ninjas      | L   | 0.526      | -            | -                | -                | -         |   -10.13 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           30 |     2654 | 2024-02-11 | Entropiq          | W   | 0.479      | -            | -                | -                | -         |     2.35 | ArroW, awzek, FreeZe, PANIX, PerX  |
|           29 |     2714 | 2024-02-06 | 500               | W   | 0.445      | -            | -                | -                | -         |     4.08 | awzek, FreeZe, Goody, PANIX, PerX  |
|           28 |     2740 | 2024-02-04 | brazylijski luz   | W   | 0.432      | -            | -                | -                | -         |     4.29 | awzek, FreeZe, Goody, PANIX, PerX  |
|           27 |     2751 | 2024-02-04 | Sangal            | L   | 0.430      | -            | -                | -                | -         |    -4.27 | awzek, FreeZe, PANIX, PerX, S3NSEY |
|           26 |     2779 | 2024-02-03 | TSM               | L   | 0.424      | -            | -                | -                | -         |    -9.83 | awzek, FreeZe, Goody, PANIX, PerX  |
|           25 |     2840 | 2024-02-01 | Sangal            | L   | 0.411      | -            | -                | -                | -         |    -4.06 | awzek, FreeZe, Goody, PANIX, PerX  |
|           24 |     2878 | 2024-01-30 | ex-Sprout         | W   | 0.398      | -            | -                | -                | -         |     1.43 | awzek, FreeZe, Goody, PANIX, PerX  |
|           23 |     2927 | 2024-01-26 | Entropiq          | W   | 0.371      | -            | -                | -                | -         |     1.72 | awzek, FreeZe, Goody, PANIX, PerX  |
|           22 |     2954 | 2024-01-24 | ex-Guild Eagles   | L   | 0.359      | -            | -                | -                | -         |    -5.04 | awzek, FreeZe, Goody, PANIX, PerX  |
|           21 |     2974 | 2024-01-23 | PERA              | L   | 0.352      | -            | -                | -                | -         |    -6.26 | awzek, FreeZe, Goody, PANIX, PerX  |
|           20 |     2978 | 2024-01-23 | ex-Guild Eagles   | L   | 0.352      | -            | -                | -                | -         |    -5.27 | awzek, FreeZe, Goody, PANIX, PerX  |
|           19 |     2998 | 2024-01-22 | Viperio           | W   | 0.346      | -            | -                | -                | -         |     0.86 | awzek, FreeZe, Goody, PANIX, PerX  |
|           18 |     3002 | 2024-01-22 | Rebels            | L   | 0.346      | -            | -                | -                | -         |    -3.62 | awzek, FreeZe, Goody, PANIX, PerX  |
|           17 |     3005 | 2024-01-22 | Sampi             | W   | 0.345      | -            | -                | -                | -         |     5.05 | awzek, FreeZe, Goody, PANIX, PerX  |
|           16 |     3360 | 2024-01-14 | Lilmix            | L   | 0.290      | -            | -                | -                | -         |    -8.38 | awzek, FreeZe, Goody, PANIX, PerX  |
|           15 |     3393 | 2024-01-13 | Astralis          | L   | 0.285      | -            | -                | -                | -         |    -0.10 | awzek, FreeZe, Goody, PANIX, PerX  |
|           14 |     3662 | 2023-12-16 | BIG Academy       | W   | 0.099      | -            | -                | -                | 1 (0.099) |     0.44 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           13 |     3714 | 2023-12-12 | ex-Preasy         | L   | 0.072      | -            | -                | -                | -         |    -1.28 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           12 |     3740 | 2023-12-10 | GODSENT           | W   | 0.058      | -            | -                | -                | -         |     0.29 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           11 |     3762 | 2023-12-09 | lajtbitexe        | L   | 0.052      | -            | -                | -                | -         |    -1.42 | awzek, FreeZe, PANIX, PerX, Spiidi |
|           10 |     3777 | 2023-12-08 | Zero Tenacity     | W   | 0.046      | -            | -                | -                | -         |     0.94 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            9 |     3787 | 2023-12-08 | Sprout            | W   | 0.044      | -            | -                | -                | -         |     0.18 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            8 |     3799 | 2023-12-07 | TUSTE CHOPAKI     | W   | 0.040      | -            | -                | -                | -         |     0.05 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            7 |     3810 | 2023-12-07 | ex-Anonymo        | L   | 0.038      | -            | -                | -                | -         |    -1.02 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            6 |     3827 | 2023-12-06 | The Witchers      | W   | 0.033      | -            | -                | -                | -         |     0.19 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            5 |     3846 | 2023-12-06 | ex-sYnck          | W   | 0.031      | -            | -                | -                | -         |     0.12 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            4 |     3861 | 2023-12-05 | lajtbitexe        | L   | 0.026      | -            | -                | -                | -         |    -0.72 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            3 |     3883 | 2023-12-04 | Entropiq          | W   | 0.018      | -            | -                | -                | -         |     0.07 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            2 |     3885 | 2023-12-04 | ex-Guild Eagles   | L   | 0.018      | -            | -                | -                | -         |    -0.28 | awzek, FreeZe, PANIX, PerX, Spiidi |
|            1 |     3924 | 2023-12-02 | Space             | W   | 0.005      | -            | -                | -                | -         |     0.05 | awzek, FreeZe, PANIX, PerX, Spiidi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,542.27)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-25 |      0.971 | $1,000.00      | $970.59         |
| 2023-12-16 |      0.099 | $6,188.00      | $611.53         |
| 2023-12-13 |      0.079 | $1,250.00      | $98.59          |
| 2023-12-12 |      0.072 | $5,000.00      | $361.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
