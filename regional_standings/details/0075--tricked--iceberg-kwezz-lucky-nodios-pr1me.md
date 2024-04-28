### Roster Details<br />
Team Name: Tricked<br />
Roster: IceBerg, kwezz, Lucky, Nodios, PR1mE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  875.4<br />
<br />
Final Rank Value (875.4) = Starting Rank Value (1001.3) + Head To Head Adjustments (-125.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.394[<sup>2</sup>](#table1)
- Opponent Network: 0.208[<sup>2</sup>](#table1)
- LAN Wins: 0.168[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.3
- 400 + ( ( 0.294 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1001.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           91 |       36 | 2023-02-11 | BLUEJAYS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.90 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           90 |       81 | 2023-02-08 | los kogutos            | W   | 1.000      | 0.435        | -                | 0.364 (0.158)    | 0 (0.000) |    11.26 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           89 |      111 | 2023-02-07 | Monte                  | L   | 1.000      | -            | -                | -                | -         |    -7.46 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           88 |      120 | 2023-02-06 | Into the Breach        | L   | 1.000      | -            | -                | -                | -         |   -23.41 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           87 |      207 | 2023-02-02 | MOUZ NXT               | L   | 1.000      | -            | -                | -                | -         |   -18.11 | IceBerg, kwezz, larsen, Lucky, Nodios |
|           86 |      262 | 2023-01-31 | forZe                  | L   | 1.000      | -            | -                | -                | -         |   -10.62 | IceBerg, kwezz, larsen, Lucky, Nodios |
|           85 |      303 | 2023-01-29 | SINNERS                | W   | 1.000      | 0.435        | 0.068 (0.030)    | 0.549 (0.238)    | 0 (0.000) |    16.61 | IceBerg, kwezz, larsen, Lucky, Nodios |
|           84 |      315 | 2023-01-29 | Sangal                 | L   | 1.000      | -            | -                | -                | -         |   -14.84 | IceBerg, kwezz, larsen, Lucky, Nodios |
|           83 |      385 | 2023-01-27 | Sangal                 | W   | 1.000      | 0.435        | -                | 0.684 (0.297)    | 0 (0.000) |    16.01 | IceBerg, kwezz, larsen, Lucky, Nodios |
|           82 |      440 | 2023-01-25 | EYEBALLERS             | L   | 1.000      | -            | -                | -                | -         |   -14.40 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           81 |      524 | 2023-01-22 | Nexus                  | L   | 1.000      | -            | -                | -                | -         |   -20.28 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           80 |      548 | 2023-01-21 | farfaraway             | W   | 1.000      | 0.477        | 0.033 (0.016)    | -                | 0 (0.000) |    16.92 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           79 |      552 | 2023-01-21 | INVSN                  | L   | 1.000      | -            | -                | -                | -         |   -19.08 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           78 |      605 | 2023-01-19 | Partizan               | L   | 1.000      | -            | -                | -                | -         |   -19.02 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           77 |      648 | 2023-01-17 | Aurora                 | L   | 1.000      | -            | -                | -                | -         |   -15.19 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           76 |      689 | 2023-01-15 | INVSN                  | W   | 1.000      | 0.435        | -                | 0.428 (0.186)    | -         |    10.06 | kwezz, larsen, Lucky, Nodios, PR1mE   |
|           75 |      908 | 2022-12-13 | Astralis Talent        | L   | 0.794      | -            | -                | -                | -         |   -14.14 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           74 |      917 | 2022-12-13 | Atlantic               | W   | 0.792      | -            | -                | -                | -         |     1.57 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           73 |     1010 | 2022-12-09 | JANO                   | L   | 0.767      | -            | -                | -                | -         |   -19.55 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           72 |     1037 | 2022-12-08 | ARCRED                 | W   | 0.760      | -            | -                | -                | -         |     4.48 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           71 |     1074 | 2022-12-07 | Leo                    | W   | 0.753      | -            | -                | -                | -         |     0.83 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           70 |     1086 | 2022-12-07 | Falcons                | W   | 0.752      | 0.477        | 0.045 (0.016)    | 0.767 (0.275)    | -         |     9.75 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           69 |     1104 | 2022-12-06 | IKLA                   | L   | 0.748      | -            | -                | -                | -         |   -12.77 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           68 |     1148 | 2022-12-05 | ECLOT                  | W   | 0.739      | 0.477        | 0.046 (0.016)    | 0.584 (0.206)    | -         |    11.78 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           67 |     1174 | 2022-12-04 | Astralis               | L   | 0.733      | -            | -                | -                | -         |    -3.12 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           66 |     1180 | 2022-12-04 | 500                    | L   | 0.732      | -            | -                | -                | -         |    -7.52 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           65 |     1209 | 2022-12-03 | ECLOT                  | W   | 0.727      | 0.435        | 0.046 (0.015)    | 0.584 (0.185)    | -         |    11.47 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           64 |     1226 | 2022-12-03 | PROSPECTS              | W   | 0.725      | 0.435        | 0.032 (0.010)    | 0.689 (0.217)    | -         |    11.19 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           63 |     1235 | 2022-12-03 | Sashi                  | W   | 0.724      | -            | -                | -                | -         |     3.29 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           62 |     1247 | 2022-12-02 | GenOne                 | W   | 0.720      | 0.477        | 0.300 (0.103)    | -                | -         |    15.63 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           61 |     1250 | 2022-12-02 | eSuba                  | W   | 0.720      | -            | -                | -                | -         |    10.46 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           60 |     1258 | 2022-12-02 | Websterz               | W   | 0.719      | -            | -                | -                | -         |     9.03 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           59 |     1283 | 2022-12-01 | Invictus International | W   | 0.712      | -            | -                | -                | -         |     5.42 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           58 |     1303 | 2022-11-30 | Anonymo                | W   | 0.707      | -            | -                | -                | -         |     3.62 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           57 |     1334 | 2022-11-29 | ECLOT                  | L   | 0.700      | -            | -                | -                | -         |   -10.28 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           56 |     1366 | 2022-11-28 | 777                    | W   | 0.691      | -            | -                | -                | -         |     5.00 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           55 |     1436 | 2022-11-26 | AGO                    | L   | 0.678      | -            | -                | -                | -         |   -14.59 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           54 |     1456 | 2022-11-25 | AVANGAR                | L   | 0.673      | -            | -                | -                | -         |   -15.64 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           53 |     1476 | 2022-11-24 | EC Brugge              | W   | 0.666      | -            | -                | -                | -         |     5.05 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           52 |     1486 | 2022-11-24 | MASONIC                | L   | 0.664      | -            | -                | -                | -         |   -12.11 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           51 |     1501 | 2022-11-23 | HOTU                   | L   | 0.658      | -            | -                | -                | -         |   -16.15 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           50 |     1628 | 2022-11-16 | Endpoint               | L   | 0.611      | -            | -                | -                | -         |   -11.54 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           49 |     1634 | 2022-11-15 | forZe                  | L   | 0.607      | -            | -                | -                | -         |    -9.65 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           48 |     1686 | 2022-11-07 | Anonymo                | W   | 0.553      | -            | -                | -                | -         |     1.62 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           47 |     1704 | 2022-11-06 | Illuminar              | L   | 0.545      | -            | -                | -                | -         |    -8.78 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           46 |     1707 | 2022-11-06 | Anonymo                | W   | 0.544      | -            | -                | -                | -         |     1.45 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           45 |     1809 | 2022-10-29 | 500                    | L   | 0.493      | -            | -                | -                | -         |    -7.24 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           44 |     1821 | 2022-10-28 | Copenhagen Flames      | W   | 0.486      | 0.435        | 0.133 (0.028)    | 0.722 (0.153)    | -         |     7.25 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           43 |     1851 | 2022-10-27 | mew                    | W   | 0.478      | -            | -                | -                | -         |     0.49 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           42 |     1871 | 2022-10-26 | Nemiga                 | L   | 0.472      | -            | -                | -                | -         |   -11.83 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           41 |     1891 | 2022-10-25 | AGO                    | W   | 0.466      | -            | -                | -                | -         |     3.50 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           40 |     1915 | 2022-10-24 | Monte                  | L   | 0.458      | -            | -                | -                | -         |    -8.82 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           39 |     1918 | 2022-10-24 | 1WIN                   | L   | 0.457      | -            | -                | -                | -         |    -9.57 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           38 |     1934 | 2022-10-23 | PROSPECTS              | W   | 0.452      | -            | -                | -                | -         |     5.45 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           37 |     1940 | 2022-10-23 | ECLOT                  | W   | 0.451      | -            | -                | -                | -         |     6.47 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           36 |     1953 | 2022-10-22 | Spirit                 | W   | 0.447      | 0.435        | 0.211 (0.041)    | -                | -         |    12.43 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           35 |     1965 | 2022-10-22 | forZe                  | W   | 0.446      | -            | -                | -                | -         |     6.88 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           34 |     1991 | 2022-10-21 | Endpoint               | W   | 0.439      | -            | -                | -                | -         |     5.29 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           33 |     2020 | 2022-10-20 | UNGENTIUM              | W   | 0.432      | -            | -                | -                | -         |     3.44 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           32 |     2040 | 2022-10-19 | Sangal                 | W   | 0.427      | -            | -                | -                | -         |     6.19 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           31 |     2058 | 2022-10-18 | Copenhagen Flames      | L   | 0.420      | -            | -                | -                | -         |    -6.86 | IceBerg, kwezz, Lucky, Nodios, PR1mE  |
|           30 |     2111 | 2022-10-16 | 500                    | W   | 0.406      | 0.435        | 0.085 (0.015)    | -                | -         |     7.45 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           29 |     2127 | 2022-10-15 | Astralis Talent        | L   | 0.402      | -            | -                | -                | -         |    -7.74 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           28 |     2135 | 2022-10-15 | CEPTER                 | W   | 0.400      | -            | -                | -                | 1 (0.400) |     0.93 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           27 |     2148 | 2022-10-15 | Atlantic               | W   | 0.399      | -            | -                | -                | 1 (0.399) |     1.89 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           26 |     2150 | 2022-10-15 | Sashi                  | W   | 0.398      | -            | -                | -                | 1 (0.398) |     1.64 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           25 |     2156 | 2022-10-15 | Astralis Talent        | L   | 0.398      | -            | -                | -                | -         |    -8.02 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           24 |     2171 | 2022-10-14 | Brøndby                | W   | 0.394      | -            | -                | -                | 1 (0.394) |     0.74 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           23 |     2183 | 2022-10-14 | IKLA                   | W   | 0.393      | -            | -                | -                | -         |     4.71 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           22 |     2219 | 2022-10-13 | sYnck                  | L   | 0.386      | -            | -                | -                | -         |    -9.53 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           21 |     2234 | 2022-10-13 | ALTERNATE aTTaX        | W   | 0.384      | -            | -                | -                | -         |     3.23 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           20 |     2282 | 2022-10-11 | 9INE                   | W   | 0.372      | 0.435        | -                | 1.000 (0.162)    | -         |     4.72 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           19 |     2295 | 2022-10-10 | NeedDOCTOR             | W   | 0.366      | -            | -                | -                | -         |     1.58 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           18 |     2893 | 2022-09-17 | 1WIN                   | L   | 0.212      | -            | -                | -                | -         |    -4.47 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           17 |     2916 | 2022-09-16 | Believe                | W   | 0.207      | -            | -                | -                | -         |     1.43 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           16 |     2928 | 2022-09-16 | Sprout                 | L   | 0.206      | -            | -                | -                | -         |    -1.75 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           15 |     3167 | 2022-09-09 | Monte                  | W   | 0.160      | -            | -                | -                | -         |     0.84 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           14 |     3178 | 2022-09-09 | ex-Into the Breach     | W   | 0.159      | -            | -                | -                | -         |     1.55 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           13 |     3214 | 2022-09-08 | Sashi                  | W   | 0.154      | -            | -                | -                | -         |     0.63 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           12 |     3225 | 2022-09-08 | SKADE X                | L   | 0.152      | -            | -                | -                | -         |    -4.17 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           11 |     3258 | 2022-09-06 | 777                    | W   | 0.137      | -            | -                | -                | -         |     0.69 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|           10 |     3392 | 2022-09-01 | MIBR                   | L   | 0.106      | -            | -                | -                | -         |    -1.74 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            9 |     3420 | 2022-08-31 | B8                     | L   | 0.097      | -            | -                | -                | -         |    -2.79 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            8 |     3446 | 2022-08-29 | 500                    | W   | 0.086      | -            | -                | -                | -         |     1.66 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            7 |     3503 | 2022-08-27 | ECLOT                  | L   | 0.073      | -            | -                | -                | -         |    -1.09 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            6 |     3571 | 2022-08-25 | Monte                  | W   | 0.060      | -            | -                | -                | -         |     0.74 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            5 |     3593 | 2022-08-24 | MASONIC                | L   | 0.052      | -            | -                | -                | -         |    -1.02 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            4 |     3605 | 2022-08-23 | X                      | W   | 0.046      | -            | -                | -                | -         |     0.08 | IceBerg, kiR, kwezz, Lucky, PR1mE     |
|            3 |     3712 | 2022-08-20 | MASONIC                | L   | 0.027      | -            | -                | -                | -         |    -0.52 | IceBerg, kiR, Lucky, PR1mE, scott     |
|            2 |     3719 | 2022-08-20 | Sashi                  | W   | 0.026      | -            | -                | -                | 1 (0.026) |     0.10 | IceBerg, kiR, Lucky, PR1mE, scott     |
|            1 |     3751 | 2022-08-18 | schadE halt            | W   | 0.011      | -            | -                | -                | -         |     0.02 | IceBerg, kiR, kwezz, Lucky, PR1mE     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,314.74)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-13 |      0.794 | $354.00        | $280.90         |
| 2022-12-04 |      0.732 | $12,500.00     | $9,151.05       |
| 2022-10-30 |      0.500 | $3,000.00      | $1,499.73       |
| 2022-10-24 |      0.460 | $5,000.00      | $2,301.39       |
| 2022-10-24 |      0.460 | $5,000.00      | $2,298.18       |
| 2022-10-15 |      0.402 | $1,950.00      | $783.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
