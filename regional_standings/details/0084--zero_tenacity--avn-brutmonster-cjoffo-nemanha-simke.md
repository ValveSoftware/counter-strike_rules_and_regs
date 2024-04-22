### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  841.1<br />
<br />
Final Rank Value (841.1) = Starting Rank Value (797.5) + Head To Head Adjustments (43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.5
- 400 + ( ( 0.206 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 797.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |        1 | 2024-04-22 | ex-Preasy          | W   | 1.000      | 0.435        | 0.064 (0.028)    | 0.226 (0.098)    | 0 (0.000) |    15.68 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           70 |        8 | 2024-04-22 | Nexus              | W   | 1.000      | 0.500        | 0.023 (0.011)    | 0.544 (0.272)    | 0 (0.000) |    17.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           69 |       54 | 2024-04-20 | RUBY               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           68 |       81 | 2024-04-19 | PARIVISION         | W   | 1.000      | 0.500        | -                | 0.358 (0.179)    | 0 (0.000) |    14.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           67 |      105 | 2024-04-19 | ALTERNATE aTTaX    | W   | 1.000      | 0.143        | 0.019 (0.003)    | 0.639 (0.091)    | 0 (0.000) |    17.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           66 |      164 | 2024-04-18 | B8                 | L   | 1.000      | -            | -                | -                | -         |   -13.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           65 |      189 | 2024-04-17 | B8                 | W   | 1.000      | 0.500        | -                | 0.655 (0.328)    | 0 (0.000) |    18.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           64 |      216 | 2024-04-16 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -14.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           63 |      237 | 2024-04-15 | ALTERNATE aTTaX    | W   | 1.000      | 0.143        | 0.019 (0.003)    | 0.639 (0.091)    | 0 (0.000) |    19.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           62 |      287 | 2024-04-12 | JANO               | L   | 1.000      | -            | -                | -                | -         |   -21.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           61 |      315 | 2024-04-11 | Alliance           | L   | 1.000      | -            | -                | -                | -         |   -13.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           60 |      413 | 2024-04-09 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -9.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           59 |      475 | 2024-04-07 | ex-Preasy          | L   | 1.000      | -            | -                | -                | -         |   -13.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           58 |      644 | 2024-04-01 | Nemiga             | L   | 1.000      | -            | -                | -                | -         |    -8.98 | aVN, brutmonster, Cjoffo, kdaN, simke    |
|           57 |     1052 | 2024-03-10 | CYBERSHOKE         | L   | 0.914      | -            | -                | -                | -         |   -20.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           56 |     1064 | 2024-03-10 | ECLOT              | W   | 0.912      | 0.143        | 0.083 (0.011)    | -                | 0 (0.000) |    22.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           55 |     1080 | 2024-03-09 | Sangal             | W   | 0.906      | 0.358        | -                | 0.685 (0.222)    | 0 (0.000) |    11.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           54 |     1129 | 2024-03-07 | Nemiga             | L   | 0.893      | -            | -                | -                | -         |    -7.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           53 |     1161 | 2024-03-06 | AURA               | W   | 0.886      | -            | -                | -                | -         |     4.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           52 |     1196 | 2024-03-05 | AMKAL              | L   | 0.880      | -            | -                | -                | -         |    -6.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           51 |     1254 | 2024-03-03 | Secret             | W   | 0.864      | -            | -                | -                | -         |     6.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |     1274 | 2024-03-02 | Secret             | W   | 0.858      | -            | -                | -                | -         |     7.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |     1300 | 2024-02-29 | Young Ninjas       | W   | 0.845      | 0.143        | 0.082 (0.010)    | -                | -         |    18.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |     1563 | 2024-02-17 | Sashi              | L   | 0.766      | -            | -                | -                | -         |    -7.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |     1718 | 2024-02-10 | Sampi              | L   | 0.720      | -            | -                | -                | -         |    -6.33 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |     1799 | 2024-02-04 | 500                | L   | 0.679      | -            | -                | -                | -         |   -14.78 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |     1812 | 2024-02-03 | The Chosen Few     | W   | 0.674      | 0.358        | -                | 0.340 (0.082)    | -         |     8.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |     1858 | 2024-02-02 | NAVI Junior        | W   | 0.666      | -            | -                | -                | -         |     8.66 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |     1862 | 2024-02-02 | Juggernauts        | W   | 0.665      | -            | -                | -                | -         |     2.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |     2132 | 2024-01-20 | 3DMAX              | L   | 0.578      | -            | -                | -                | -         |    -3.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |     2182 | 2024-01-19 | SAW                | L   | 0.572      | -            | -                | -                | -         |    -1.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |     2228 | 2024-01-18 | Permitta           | W   | 0.567      | -            | -                | -                | -         |    10.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     2245 | 2024-01-18 | BetBoom            | L   | 0.566      | -            | -                | -                | -         |    -1.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     2259 | 2024-01-18 | Aurora Young Blud  | L   | 0.564      | -            | -                | -                | -         |   -11.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     2315 | 2024-01-16 | Passion UA         | W   | 0.555      | -            | -                | -                | -         |    11.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     2326 | 2024-01-16 | samaloyod          | W   | 0.554      | -            | -                | -                | -         |     3.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     2349 | 2024-01-16 | premghouls         | W   | 0.553      | -            | -                | -                | -         |     1.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     2358 | 2024-01-16 | ECLOT              | W   | 0.551      | 0.333        | 0.083 (0.015)    | 0.623 (0.114)    | -         |    14.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     2412 | 2024-01-14 | Astralis Talent    | L   | 0.538      | -            | -                | -                | -         |    -6.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     2534 | 2024-01-10 | Gucci Academy      | L   | 0.514      | -            | -                | -                | -         |    -8.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     2587 | 2024-01-09 | 9INE               | L   | 0.506      | -            | -                | -                | -         |   -12.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     2606 | 2024-01-09 | The Prodigies      | W   | 0.506      | -            | -                | -                | -         |     2.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     2830 | 2023-12-08 | ALTERNATE aTTaX    | L   | 0.294      | -            | -                | -                | -         |    -4.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     2853 | 2023-12-07 | MOUZ NXT           | W   | 0.287      | 0.372        | 0.054 (0.006)    | 0.970 (0.104)    | -         |     5.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     2891 | 2023-12-06 | GenOne             | W   | 0.279      | -            | -                | -                | -         |     2.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     2908 | 2023-12-05 | TSM                | L   | 0.274      | -            | -                | -                | -         |    -5.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     2935 | 2023-12-04 | SAW                | L   | 0.266      | -            | -                | -                | -         |    -0.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     2956 | 2023-12-03 | TSM                | L   | 0.257      | -            | -                | -                | -         |    -4.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     2966 | 2023-12-02 | Bad News Kangaroos | W   | 0.254      | 0.589        | 0.046 (0.007)    | -                | -         |     5.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2996 | 2023-12-01 | Sprout             | L   | 0.244      | -            | -                | -                | -         |    -4.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     3005 | 2023-11-30 | BIG                | L   | 0.240      | -            | -                | -                | -         |    -0.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     3040 | 2023-11-27 | Legacy             | W   | 0.218      | 0.371        | 0.055 (0.004)    | -                | -         |     5.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     3046 | 2023-11-26 | Guild Eagles       | L   | 0.214      | -            | -                | -                | -         |    -1.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     3048 | 2023-11-26 | Illyrians          | W   | 0.213      | -            | -                | -                | -         |     1.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     3067 | 2023-11-25 | Guild Eagles       | L   | 0.207      | -            | -                | -                | -         |    -1.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     3100 | 2023-11-24 | ex-sYnck           | L   | 0.198      | -            | -                | -                | -         |    -3.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     3111 | 2023-11-23 | Amigosi            | W   | 0.193      | -            | -                | -                | -         |     0.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     3114 | 2023-11-23 | Lazer Cats         | W   | 0.191      | -            | -                | -                | -         |     1.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     3127 | 2023-11-22 | JANO               | W   | 0.185      | -            | -                | -                | -         |     1.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     3142 | 2023-11-21 | Permitta           | W   | 0.178      | -            | -                | -                | -         |     3.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     3160 | 2023-11-20 | ex-sYnck           | L   | 0.171      | -            | -                | -                | -         |    -3.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     3372 | 2023-11-12 | Sangal             | L   | 0.119      | -            | -                | -                | -         |    -3.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     3401 | 2023-11-11 | The Suspect        | W   | 0.114      | -            | -                | -                | 1 (0.114) |     0.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     3431 | 2023-11-09 | FORZE              | L   | 0.100      | -            | -                | -                | -         |    -1.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3493 | 2023-11-07 | Spirit Academy     | W   | 0.084      | -            | -                | -                | -         |     1.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3501 | 2023-11-06 | Pompa              | L   | 0.079      | -            | -                | -                | -         |    -2.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3585 | 2023-11-02 | Sangal             | W   | 0.052      | -            | -                | -                | -         |     0.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3612 | 2023-11-01 | ENCE Academy       | W   | 0.046      | -            | -                | -                | -         |     0.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3619 | 2023-11-01 | Viperio            | W   | 0.044      | -            | -                | -                | -         |     0.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     3641 | 2023-10-31 | ENCE Academy       | L   | 0.039      | -            | -                | -                | -         |    -0.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     3759 | 2023-10-28 | Sangal             | W   | 0.018      | -            | -                | -                | -         |     0.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,444.28)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.326 | $750.00        | $244.70         |
| 2023-11-24 |      0.198 | $3,000.00      | $593.54         |
| 2023-11-11 |      0.114 | $5,332.00      | $606.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
