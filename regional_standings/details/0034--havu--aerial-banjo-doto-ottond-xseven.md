### Roster Details<br />
Team Name: HAVU<br />
Roster: Aerial, Banjo, doto, ottoNd, xseveN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1026.0<br />
<br />
Final Rank Value (1026.0) = Starting Rank Value (960.5) + Head To Head Adjustments (65.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.220[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.274<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.5
- 400 + ( ( 0.274 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 960.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      126 | 2023-02-06 | Young Ninjas       | W   | 1.000      | 0.384        | 0.076 (0.029)    | 0.694 (0.267)    | 0 (0.000) |    11.20 | Aerial, Banjo, doto, ottoNd, xseveN |
|           52 |      179 | 2023-02-04 | Copenhagen Flames  | L   | 1.000      | -            | -                | -                | -         |   -15.89 | Aerial, Banjo, doto, ottoNd, xseveN |
|           51 |      233 | 2023-02-01 | MOUZ NXT           | W   | 1.000      | 0.435        | -                | 0.537 (0.234)    | 0 (0.000) |     8.04 | Aerial, Banjo, doto, ottoNd, xseveN |
|           50 |      293 | 2023-01-30 | Aurora             | L   | 1.000      | -            | -                | -                | -         |   -13.79 | Aerial, doto, spargo, xseveN, zehN  |
|           49 |      347 | 2023-01-28 | Monte              | L   | 1.000      | -            | -                | -                | -         |   -16.50 | Aerial, doto, spargo, xseveN, zehN  |
|           48 |      352 | 2023-01-28 | SINNERS            | W   | 1.000      | 0.435        | 0.068 (0.030)    | 0.549 (0.238)    | 0 (0.000) |    11.35 | Aerial, doto, spargo, xseveN, zehN  |
|           47 |      402 | 2023-01-26 | Young Ninjas       | W   | 1.000      | 0.435        | 0.076 (0.033)    | 0.694 (0.302)    | 0 (0.000) |    12.12 | Aerial, doto, spargo, xseveN, zehN  |
|           46 |      789 | 2022-12-18 | Copenhagen Flames  | L   | 0.825      | -            | -                | -                | -         |   -11.95 | Aerial, doto, spargo, xseveN, zehN  |
|           45 |      818 | 2022-12-17 | BIG                | W   | 0.819      | 0.435        | 0.124 (0.044)    | 0.520 (0.185)    | 0 (0.000) |    21.92 | Aerial, doto, spargo, xseveN, zehN  |
|           44 |      871 | 2022-12-15 | forZe              | W   | 0.806      | 0.435        | 0.047 (0.017)    | 0.708 (0.248)    | 0 (0.000) |    11.75 | Aerial, doto, spargo, xseveN, zehN  |
|           43 |     1032 | 2022-12-08 | ex-Finest          | W   | 0.761      | -            | -                | -                | 0 (0.000) |     8.64 | Aerial, doto, spargo, xseveN, zehN  |
|           42 |     1067 | 2022-12-07 | ENCE               | L   | 0.754      | -            | -                | -                | -         |    -3.79 | Aerial, doto, spargo, xseveN, zehN  |
|           41 |     1089 | 2022-12-07 | HEET               | W   | 0.751      | 0.435        | 0.028 (0.009)    | -                | 0 (0.000) |    11.10 | Aerial, doto, spargo, xseveN, zehN  |
|           40 |     1127 | 2022-12-06 | EC Brugge          | W   | 0.745      | 0.435        | -                | 0.507 (0.164)    | 0 (0.000) |     5.44 | Aerial, doto, spargo, xseveN, zehN  |
|           39 |     1129 | 2022-12-06 | forZe              | W   | 0.745      | 0.435        | 0.047 (0.015)    | 0.708 (0.229)    | -         |    11.53 | Aerial, doto, spargo, xseveN, zehN  |
|           38 |     1167 | 2022-12-04 | OG                 | W   | 0.733      | 0.435        | 0.237 (0.076)    | -                | -         |    21.81 | Aerial, doto, spargo, xseveN, zehN  |
|           37 |     1184 | 2022-12-04 | AVANGAR            | W   | 0.732      | -            | -                | -                | -         |     6.84 | Aerial, doto, spargo, xseveN, zehN  |
|           36 |     1282 | 2022-12-01 | ex-Finest          | W   | 0.712      | -            | -                | -                | -         |    10.43 | Aerial, doto, spargo, xseveN, zehN  |
|           35 |     1340 | 2022-11-29 | Anonymo            | W   | 0.698      | -            | -                | -                | -         |     3.44 | Aerial, doto, spargo, xseveN, zehN  |
|           34 |     1479 | 2022-11-24 | AGO                | W   | 0.666      | -            | -                | -                | -         |     6.83 | Aerial, doto, xartE, xseveN, zehN   |
|           33 |     1544 | 2022-11-20 | ENCE Academy       | W   | 0.638      | -            | -                | -                | 1 (0.638) |     6.27 | Aerial, doto, spargo, xseveN, zehN  |
|           32 |     1592 | 2022-11-17 | Copenhagen Flames  | L   | 0.619      | -            | -                | -                | -         |    -7.87 | Aerial, doto, spargo, xseveN, zehN  |
|           31 |     1608 | 2022-11-16 | HEET               | L   | 0.614      | -            | -                | -                | -         |    -8.94 | Aerial, doto, spargo, xseveN, zehN  |
|           30 |     1614 | 2022-11-16 | Sprout             | L   | 0.613      | -            | -                | -                | -         |    -4.54 | Aerial, doto, spargo, xseveN, zehN  |
|           29 |     1620 | 2022-11-16 | BIG                | L   | 0.612      | -            | -                | -                | -         |    -1.64 | Aerial, doto, spargo, xseveN, zehN  |
|           28 |     1627 | 2022-11-16 | ENCE               | L   | 0.611      | -            | -                | -                | -         |    -2.48 | Aerial, doto, spargo, xseveN, zehN  |
|           27 |     1631 | 2022-11-16 | GamerLegion        | L   | 0.611      | -            | -                | -                | -         |    -4.39 | Aerial, doto, spargo, xseveN, zehN  |
|           26 |     1641 | 2022-11-15 | forZe              | W   | 0.605      | 0.435        | 0.047 (0.012)    | 0.708 (0.186)    | -         |    11.06 | Aerial, doto, spargo, xseveN, zehN  |
|           25 |     1806 | 2022-10-29 | JANO               | W   | 0.493      | -            | -                | -                | -         |     3.61 | Aerial, doto, spargo, xseveN, zehN  |
|           24 |     1824 | 2022-10-28 | AGO                | W   | 0.486      | -            | -                | -                | -         |     4.95 | Aerial, doto, spargo, xseveN, zehN  |
|           23 |     1856 | 2022-10-26 | Wolsung            | W   | 0.474      | -            | -                | -                | -         |     1.64 | Aerial, doto, spargo, xseveN, zehN  |
|           22 |     1916 | 2022-10-24 | sYnck              | W   | 0.458      | -            | -                | -                | -         |     3.98 | Aerial, doto, spargo, xseveN, zehN  |
|           21 |     1948 | 2022-10-22 | forZe              | L   | 0.447      | -            | -                | -                | -         |   -11.24 | Aerial, doto, spargo, xseveN, zehN  |
|           20 |     1961 | 2022-10-22 | Enterprise         | L   | 0.446      | -            | -                | -                | -         |    -8.21 | Aerial, doto, spargo, xseveN, zehN  |
|           19 |     1988 | 2022-10-21 | IKLA               | L   | 0.440      | -            | -                | -                | -         |    -7.58 | Aerial, doto, spargo, xseveN, zehN  |
|           18 |     2021 | 2022-10-20 | Falcons            | W   | 0.432      | 0.435        | 0.045 (0.008)    | 0.767 (0.144)    | -         |     7.23 | Aerial, doto, spargo, xseveN, zehN  |
|           17 |     2089 | 2022-10-17 | Zero Tenacity      | W   | 0.412      | -            | -                | -                | -         |     3.71 | Aerial, doto, spargo, xseveN, zehN  |
|           16 |     2092 | 2022-10-17 | IKLA               | L   | 0.412      | -            | -                | -                | -         |    -7.32 | Aerial, doto, spargo, xseveN, zehN  |
|           15 |     2133 | 2022-10-15 | NeedDOCTOR         | W   | 0.400      | -            | -                | -                | -         |     2.34 | Aerial, doto, spargo, xseveN, zehN  |
|           14 |     2154 | 2022-10-15 | ex-Into the Breach | L   | 0.398      | -            | -                | -                | -         |    -8.11 | Aerial, doto, spargo, xseveN, zehN  |
|           13 |     2226 | 2022-10-13 | UNGENTIUM          | W   | 0.385      | -            | -                | -                | -         |     3.68 | Aerial, doto, spargo, xseveN, zehN  |
|           12 |     2241 | 2022-10-12 | WLG                | W   | 0.381      | -            | -                | -                | -         |     0.53 | Aerial, doto, spargo, xseveN, zehN  |
|           11 |     2276 | 2022-10-11 | sYnck              | L   | 0.373      | -            | -                | -                | -         |    -8.81 | Aerial, doto, spargo, xseveN, zehN  |
|           10 |     2289 | 2022-10-11 | ALTERNATE aTTaX    | L   | 0.371      | -            | -                | -                | -         |    -8.19 | Aerial, doto, spargo, xseveN, zehN  |
|            9 |     2634 | 2022-09-25 | MASONIC            | L   | 0.265      | -            | -                | -                | -         |    -4.85 | Aerial, doto, spargo, xseveN, zehN  |
|            8 |     2665 | 2022-09-24 | ENCE               | W   | 0.258      | -            | -                | -                | -         |     6.92 | Aerial, doto, spargo, xseveN, zehN  |
|            7 |     2668 | 2022-09-24 | Copenhagen Flames  | W   | 0.258      | -            | -                | -                | -         |     4.23 | Aerial, doto, spargo, xseveN, zehN  |
|            6 |     2856 | 2022-09-18 | JANO               | W   | 0.220      | -            | -                | -                | -         |     1.55 | Aerial, doto, spargo, xseveN, zehN  |
|            5 |     2867 | 2022-09-18 | KOVA               | W   | 0.218      | -            | -                | -                | -         |     0.88 | Aerial, doto, spargo, xseveN, zehN  |
|            4 |     3115 | 2022-09-10 | Iron Branch        | L   | 0.168      | -            | -                | -                | -         |    -4.36 | Aerial, doto, spargo, xseveN, zehN  |
|            3 |     3670 | 2022-08-21 | fnatic             | L   | 0.034      | -            | -                | -                | -         |    -0.05 | Aerial, doto, spargo, xseveN, zehN  |
|            2 |     3674 | 2022-08-21 | ex-Into the Breach | W   | 0.033      | -            | -                | -                | -         |     0.36 | Aerial, doto, spargo, xseveN, zehN  |
|            1 |     3696 | 2022-08-21 | SINNERS            | W   | 0.033      | -            | -                | -                | -         |     0.60 | Aerial, doto, spargo, xseveN, zehN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,597.15)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.827 | $5,000.00      | $4,135.17       |
| 2022-12-07 |      0.754 | $10,000.00     | $7,537.42       |
| 2022-11-20 |      0.640 | $4,000.00      | $2,558.48       |
| 2022-11-20 |      0.638 | $5,000.00      | $3,191.64       |
| 2022-11-18 |      0.627 | $2,000.00      | $1,253.88       |
| 2022-10-24 |      0.460 | $2,000.00      | $920.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
