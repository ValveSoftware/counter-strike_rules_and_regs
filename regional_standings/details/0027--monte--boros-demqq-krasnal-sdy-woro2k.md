### Roster Details<br />
Team Name: Monte<br />
Roster: BOROS, DemQQ, kRaSnaL, sdy, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1076.0<br />
<br />
Final Rank Value (1076.0) = Starting Rank Value (918.9) + Head To Head Adjustments (157.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 918.9
- 400 + ( ( 0.254 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 918.9


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
|           53 |       65 | 2023-02-09 | ENCE               | L   | 1.000      | -            | -                | -                | -         |    -8.30 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           52 |       79 | 2023-02-08 | 9INE               | L   | 1.000      | -            | -                | -                | -         |   -16.37 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           51 |       87 | 2023-02-08 | BIG                | W   | 1.000      | 0.143        | 0.124 (0.018)    | -                | 0 (0.000) |    25.07 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           50 |      111 | 2023-02-07 | Tricked            | W   | 1.000      | 0.384        | 0.034 (0.013)    | 0.954 (0.367)    | 0 (0.000) |     7.46 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           49 |      231 | 2023-02-01 | SAW                | W   | 1.000      | 0.435        | 0.093 (0.041)    | 0.642 (0.279)    | 0 (0.000) |    19.35 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           48 |      331 | 2023-01-28 | Spirit Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.85 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           47 |      339 | 2023-01-28 | B8                 | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.89 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           46 |      347 | 2023-01-28 | HAVU               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.50 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           45 |      411 | 2023-01-26 | EYEBALLERS         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.55 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           44 |      454 | 2023-01-25 | ECSTATIC           | L   | 1.000      | -            | -                | -                | -         |   -20.57 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           43 |      482 | 2023-01-24 | iNation            | L   | 1.000      | -            | -                | -                | -         |   -15.18 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           42 |      539 | 2023-01-22 | Astralis Talent    | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.522 (0.194)    | 0 (0.000) |     9.97 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           41 |      600 | 2023-01-19 | BIG Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.34 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           40 |      607 | 2023-01-19 | ECSTATIC           | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.556 (0.206)    | 0 (0.000) |     8.48 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           39 |      640 | 2023-01-17 | Apeks              | W   | 1.000      | 0.435        | 0.024 (0.011)    | 0.671 (0.292)    | -         |    17.75 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           38 |      667 | 2023-01-16 | Enhanced           | W   | 1.000      | -            | -                | -                | -         |     2.79 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           37 |      714 | 2023-01-13 | Viperio            | W   | 0.997      | -            | -                | -                | -         |     5.75 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k     |
|           36 |      727 | 2023-01-09 | iNation            | W   | 0.971      | 0.371        | 0.042 (0.015)    | 0.684 (0.246)    | -         |    17.53 | BOROS, DemQQ, kRaSnaL, rallen, Woro2k  |
|           35 |      779 | 2022-12-18 | PACT               | W   | 0.826      | -            | -                | -                | -         |     6.66 | DemQQ, Fessor, kRaSnaL, Thomas, Woro2k |
|           34 |      805 | 2022-12-17 | Permitta           | L   | 0.820      | -            | -                | -                | -         |   -14.21 | DemQQ, Fessor, kRaSnaL, Thomas, Woro2k |
|           33 |      864 | 2022-12-15 | Apeks              | L   | 0.807      | -            | -                | -                | -         |   -11.48 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           32 |      906 | 2022-12-13 | IKLA               | W   | 0.794      | 0.371        | -                | 0.743 (0.219)    | -         |    12.96 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           31 |      916 | 2022-12-13 | ex-Into the Breach | L   | 0.792      | -            | -                | -                | -         |   -15.97 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           30 |      947 | 2022-12-11 | ALTERNATE aTTaX    | W   | 0.780      | -            | -                | -                | -         |     7.61 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           29 |      982 | 2022-12-10 | GenOne             | W   | 0.773      | 0.477        | 0.300 (0.111)    | 0.400 (0.147)    | -         |    14.16 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           28 |     1017 | 2022-12-09 | los kogutos        | W   | 0.766      | -            | -                | -                | -         |     6.32 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           27 |     1045 | 2022-12-08 | EYEBALLERS         | W   | 0.759      | 0.371        | -                | 0.776 (0.219)    | -         |    10.59 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           26 |     1078 | 2022-12-07 | Spirit Academy     | W   | 0.753      | 0.371        | 0.032 (0.009)    | -                | -         |    10.94 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           25 |     1123 | 2022-12-06 | Nexus              | L   | 0.746      | -            | -                | -                | -         |   -17.58 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           24 |     1125 | 2022-12-06 | Fourteen           | W   | 0.746      | -            | -                | -                | -         |     1.88 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           23 |     1173 | 2022-12-04 | Falcons            | L   | 0.733      | -            | -                | -                | -         |   -13.12 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           22 |     1231 | 2022-12-03 | ENCE Academy       | W   | 0.725      | -            | -                | -                | -         |     5.99 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           21 |     1383 | 2022-11-27 | 9 Pandas           | W   | 0.687      | -            | -                | -                | -         |     5.75 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           20 |     1414 | 2022-11-26 | HOTU               | W   | 0.680      | -            | -                | -                | -         |     5.40 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           19 |     1482 | 2022-11-24 | AVANGAR            | W   | 0.665      | -            | -                | -                | -         |     5.53 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           18 |     1520 | 2022-11-22 | 9 Pandas           | W   | 0.651      | -            | -                | -                | -         |     5.16 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           17 |     1900 | 2022-10-24 | Copenhagen Flames  | L   | 0.460      | -            | -                | -                | -         |    -6.40 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           16 |     1915 | 2022-10-24 | Tricked            | W   | 0.458      | 0.435        | -                | 0.954 (0.190)    | -         |     8.82 | BOROS, Fessor, kRaSnaL, suNny, Woro2k  |
|           15 |     1964 | 2022-10-22 | ALTERNATE aTTaX    | W   | 0.446      | -            | -                | -                | -         |     5.07 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           14 |     1998 | 2022-10-21 | Sangal             | W   | 0.437      | -            | -                | -                | -         |     7.62 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           13 |     2064 | 2022-10-18 | NeedDOCTOR         | W   | 0.420      | -            | -                | -                | -         |     2.67 | BOROS, DemQQ, Fessor, kRaSnaL, Woro2k  |
|           12 |     2112 | 2022-10-16 | BLUEJAYS           | W   | 0.406      | 0.435        | 0.102 (0.018)    | -                | -         |     8.72 | BOROS, DemQQ, Fessor, REDSTAR, Woro2k  |
|           11 |     2198 | 2022-10-14 | Partizan           | L   | 0.391      | -            | -                | -                | -         |    -7.86 | BOROS, DemQQ, Fessor, REDSTAR, Woro2k  |
|           10 |     3323 | 2022-09-03 | MIBR               | L   | 0.119      | -            | -                | -                | -         |    -1.57 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            9 |     3365 | 2022-09-02 | BLUEJAYS           | W   | 0.111      | -            | -                | -                | -         |     2.55 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            8 |     3450 | 2022-08-29 | Illuminar          | W   | 0.086      | -            | -                | -                | -         |     1.75 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            7 |     3571 | 2022-08-25 | Tricked            | L   | 0.060      | -            | -                | -                | -         |    -0.74 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            6 |     3632 | 2022-08-23 | EC Kyiv            | W   | 0.045      | -            | -                | -                | -         |     0.23 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            5 |     3643 | 2022-08-22 | forZe              | L   | 0.039      | -            | -                | -                | -         |    -0.51 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            4 |     3645 | 2022-08-22 | fnatic             | L   | 0.039      | -            | -                | -                | -         |    -0.05 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            3 |     3673 | 2022-08-21 | Endpoint           | W   | 0.034      | -            | -                | -                | -         |     0.49 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            2 |     3678 | 2022-08-21 | eSuba              | W   | 0.033      | -            | -                | -                | -         |     0.54 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |
|            1 |     3697 | 2022-08-21 | LDLC               | W   | 0.033      | -            | -                | -                | -         |     0.26 | BOROS, DemQQ, joel, REDSTAR, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,568.25)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-25 |      1.000 | $3,000.00      | $3,000.00       |
| 2022-12-18 |      0.827 | $635.00        | $525.22         |
| 2022-12-15 |      0.807 | $4,300.00      | $3,471.60       |
| 2022-11-27 |      0.687 | $2,500.00      | $1,716.35       |
| 2022-10-24 |      0.460 | $10,000.00     | $4,602.77       |
| 2022-09-04 |      0.126 | $2,000.00      | $252.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
