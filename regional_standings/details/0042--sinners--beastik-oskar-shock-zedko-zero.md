### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, oskar, SHOCK, ZEDKO, Zero<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  967.4<br />
<br />
Final Rank Value (967.4) = Starting Rank Value (1024.3) + Head To Head Adjustments (-56.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1024.3
- 400 + ( ( 0.305 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1024.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      143 | 2023-02-05 | Copenhagen Flames  | L   | 1.000      | -            | -                | -                | -         |   -13.12 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           63 |      200 | 2023-02-03 | 500                | W   | 1.000      | 0.435        | 0.085 (0.037)    | 0.760 (0.330)    | 0 (0.000) |    16.50 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           62 |      218 | 2023-02-02 | Sangal             | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.684 (0.297)    | 0 (0.000) |    15.91 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           61 |      243 | 2023-02-01 | Let us cook        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.83 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           60 |      258 | 2023-01-31 | 9INE               | L   | 1.000      | -            | -                | -                | -         |   -13.27 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           59 |      260 | 2023-01-31 | Sangal             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.12 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           58 |      267 | 2023-01-31 | 500                | W   | 1.000      | 0.143        | 0.085 (0.012)    | -                | 0 (0.000) |    19.81 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           57 |      303 | 2023-01-29 | Tricked            | L   | 1.000      | -            | -                | -                | -         |   -16.61 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           56 |      337 | 2023-01-28 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |   -14.89 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           55 |      343 | 2023-01-28 | ECLOT              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.11 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           54 |      352 | 2023-01-28 | HAVU               | L   | 1.000      | -            | -                | -                | -         |   -11.35 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           53 |      407 | 2023-01-26 | HONORIS            | W   | 1.000      | 0.435        | -                | 0.748 (0.325)    | -         |    12.51 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           52 |      619 | 2023-01-18 | 9INE               | L   | 1.000      | -            | -                | -                | -         |   -15.79 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           51 |      663 | 2023-01-16 | Falcons            | L   | 1.000      | -            | -                | -                | -         |   -16.01 | beastik, oskar, SHOCK, ZEDKO, Zero     |
|           50 |      769 | 2022-12-18 | HEET               | L   | 0.827      | -            | -                | -                | -         |   -20.57 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           49 |      807 | 2022-12-17 | Falcons            | L   | 0.820      | -            | -                | -                | -         |   -15.08 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           48 |     1474 | 2022-11-24 | Enterprise         | W   | 0.667      | 0.333        | 0.042 (0.009)    | -                | -         |     7.23 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           47 |     1496 | 2022-11-23 | ECLOT              | W   | 0.660      | 0.333        | 0.046 (0.010)    | 0.584 (0.128)    | -         |     9.83 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           46 |     1514 | 2022-11-22 | K23                | L   | 0.653      | -            | -                | -                | -         |   -12.12 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           45 |     1518 | 2022-11-22 | Sampi              | W   | 0.653      | -            | -                | -                | -         |     2.41 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           44 |     1536 | 2022-11-20 | Copenhagen Flames  | L   | 0.639      | -            | -                | -                | -         |    -9.27 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           43 |     1573 | 2022-11-18 | BLUEJAYS           | W   | 0.625      | 0.426        | 0.102 (0.027)    | 0.490 (0.130)    | -         |    10.94 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           42 |     1610 | 2022-11-16 | ex-Finest          | L   | 0.614      | -            | -                | -                | -         |   -13.12 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           41 |     1623 | 2022-11-16 | PROSPECTS          | W   | 0.612      | 0.426        | 0.032 (0.008)    | 0.689 (0.180)    | -         |     8.34 | beastik, forsyy, SHOCK, Tomkeejs, Zero |
|           40 |     1635 | 2022-11-15 | Movistar Riders    | L   | 0.607      | -            | -                | -                | -         |   -15.06 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           39 |     1651 | 2022-11-12 | Nemiga             | W   | 0.586      | -            | -                | -                | -         |     1.32 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           38 |     1652 | 2022-11-12 | MASONIC            | W   | 0.585      | 0.426        | -                | 0.752 (0.188)    | -         |     6.92 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           37 |     1692 | 2022-11-06 | eSuba              | W   | 0.547      | 0.473        | 0.028 (0.007)    | -                | 1 (0.547) |     6.90 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           36 |     1727 | 2022-11-05 | ECLOT              | W   | 0.538      | 0.473        | 0.046 (0.012)    | 0.584 (0.149)    | 1 (0.538) |     7.70 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           35 |     1731 | 2022-11-04 | Cryptova           | W   | 0.532      | -            | -                | -                | 1 (0.532) |     2.96 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           34 |     1754 | 2022-11-01 | Sangal             | W   | 0.514      | 0.435        | -                | 0.684 (0.153)    | -         |     7.47 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           33 |     1840 | 2022-10-27 | UNGENTIUM          | W   | 0.480      | -            | -                | -                | -         |     4.14 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           32 |     1866 | 2022-10-26 | 500                | L   | 0.473      | -            | -                | -                | -         |    -6.60 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           31 |     1893 | 2022-10-25 | HONORIS            | W   | 0.465      | 0.435        | -                | 0.748 (0.151)    | -         |     5.49 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           30 |     1899 | 2022-10-24 | MASONIC            | L   | 0.461      | -            | -                | -                | -         |    -8.64 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           29 |     1907 | 2022-10-24 | Enterprise         | L   | 0.459      | -            | -                | -                | -         |    -9.33 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           28 |     1930 | 2022-10-23 | AGO                | L   | 0.453      | -            | -                | -                | -         |   -10.86 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           27 |     2018 | 2022-10-20 | Wolsung            | W   | 0.432      | -            | -                | -                | -         |     0.97 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           26 |     2298 | 2022-10-10 | Sashi              | W   | 0.365      | -            | -                | -                | -         |     1.41 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           25 |     2332 | 2022-10-08 | Entropiq Prague    | W   | 0.351      | -            | -                | -                | 1 (0.351) |     2.04 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           24 |     2353 | 2022-10-07 | eSuba              | L   | 0.345      | -            | -                | -                | -         |    -6.59 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           23 |     2495 | 2022-09-30 | OG                 | L   | 0.299      | -            | -                | -                | -         |    -0.49 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           22 |     2528 | 2022-09-29 | BLUEJAYS           | W   | 0.292      | 0.435        | 0.102 (0.013)    | -                | -         |     5.72 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           21 |     2578 | 2022-09-27 | HEET               | L   | 0.280      | -            | -                | -                | -         |    -5.15 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           20 |     2592 | 2022-09-26 | ex-Finest          | W   | 0.273      | -            | -                | -                | -         |     1.47 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           19 |     2599 | 2022-09-26 | Hotspurs           | W   | 0.271      | -            | -                | -                | -         |     0.47 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           18 |     2611 | 2022-09-25 | Eternal Fire       | L   | 0.268      | -            | -                | -                | -         |    -4.84 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           17 |     2639 | 2022-09-25 | 500                | W   | 0.264      | -            | -                | -                | -         |     4.79 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           16 |     2691 | 2022-09-23 | Rapid Ninjas       | W   | 0.254      | -            | -                | -                | -         |     0.64 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           15 |     2696 | 2022-09-23 | MOUZ               | L   | 0.253      | -            | -                | -                | -         |    -1.49 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           14 |     2710 | 2022-09-23 | Nexus              | W   | 0.253      | -            | -                | -                | -         |     1.85 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           13 |     2746 | 2022-09-22 | ex-Into the Breach | W   | 0.246      | -            | -                | -                | -         |     2.32 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           12 |     2781 | 2022-09-21 | HEET               | L   | 0.240      | -            | -                | -                | -         |    -4.42 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           11 |     2813 | 2022-09-20 | los kogutos        | W   | 0.233      | -            | -                | -                | -         |     1.73 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|           10 |     2817 | 2022-09-20 | IKLA               | L   | 0.231      | -            | -                | -                | -         |    -4.80 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            9 |     2861 | 2022-09-18 | Enterprise         | L   | 0.219      | -            | -                | -                | -         |    -4.70 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            8 |     2881 | 2022-09-17 | Bad News Eagles    | L   | 0.213      | -            | -                | -                | -         |    -2.24 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            7 |     2895 | 2022-09-17 | EYEBALLERS         | W   | 0.212      | -            | -                | -                | -         |     2.50 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            6 |     2966 | 2022-09-15 | MASONIC            | L   | 0.198      | -            | -                | -                | -         |    -4.00 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            5 |     3281 | 2022-09-04 | ex-TITANS          | W   | 0.127      | -            | -                | -                | -         |     0.42 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            4 |     3293 | 2022-09-04 | Cryptova           | W   | 0.125      | -            | -                | -                | -         |     0.62 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            3 |     3412 | 2022-08-31 | MASONIC            | L   | 0.100      | -            | -                | -                | -         |    -2.05 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            2 |     3617 | 2022-08-23 | Nemiga             | L   | 0.046      | -            | -                | -                | -         |    -1.19 | beastik, forsyy, SHOCK, ZEDKO, Zero    |
|            1 |     3696 | 2022-08-21 | HAVU               | L   | 0.033      | -            | -                | -                | -         |    -0.60 | beastik, forsyy, SHOCK, ZEDKO, Zero    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,216.27)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-11-24 |      0.667 | $4,350.00      | $2,901.26       |
| 2022-11-20 |      0.640 | $5,000.00      | $3,201.37       |
| 2022-11-06 |      0.547 | $40,000.00     | $21,877.30      |
| 2022-10-26 |      0.474 | $500.00        | $236.83         |
| 2022-10-08 |      0.352 | $2,381.00      | $839.28         |
| 2022-10-01 |      0.307 | $2,000.00      | $614.52         |
| 2022-09-18 |      0.220 | $2,480.00      | $545.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
