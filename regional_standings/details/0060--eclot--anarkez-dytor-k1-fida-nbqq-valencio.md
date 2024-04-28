### Roster Details<br />
Team Name: ECLOT<br />
Roster: anarkez, Dytor, K1-FiDa, nbqq, Valencio<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  918.9<br />
<br />
Final Rank Value (918.9) = Starting Rank Value (1020.0) + Head To Head Adjustments (-101.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.241[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1020.0
- 400 + ( ( 0.303 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1020.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |       69 | 2023-02-09 | Copenhagen Flames  | L   | 1.000      | -            | -                | -                | -         |   -10.78 | anarkez, Dytor, K1-FiDa, nbqq, Valencio |
|           80 |      220 | 2023-02-02 | ECSTATIC           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.01 | anarkez, Dytor, K1-FiDa, nbqq, Valencio |
|           79 |      281 | 2023-01-31 | PROSPECTS          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.90 | Dytor, K1-FiDa, nbqq, twist, Valencio   |
|           78 |      343 | 2023-01-28 | SINNERS            | L   | 1.000      | -            | -                | -                | -         |   -14.11 | Dytor, K1-FiDa, nbqq, twist, Valencio   |
|           77 |      474 | 2023-01-24 | Partizan           | L   | 1.000      | -            | -                | -                | -         |   -17.02 | anarkez, Dytor, K1-FiDa, nbqq, Valencio |
|           76 |      596 | 2023-01-19 | Young Ninjas       | L   | 1.000      | -            | -                | -                | -         |   -14.10 | anarkez, Dytor, K1-FiDa, nbqq, Valencio |
|           75 |      649 | 2023-01-17 | GODSENT            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.54 | anarkez, Dytor, K1-FiDa, nbqq, Valencio |
|           74 |      810 | 2022-12-17 | Copenhagen Flames  | L   | 0.820      | -            | -                | -                | -         |    -8.98 | Dytor, Happyy, K1-FiDa, nbqq, Valencio  |
|           73 |      879 | 2022-12-15 | Movistar Riders    | W   | 0.805      | -            | -                | -                | 0 (0.000) |     6.86 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           72 |      928 | 2022-12-12 | ex-Into the Breach | L   | 0.786      | -            | -                | -                | -         |   -15.26 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           71 |      978 | 2022-12-10 | K23                | W   | 0.774      | 0.435        | 0.020 (0.007)    | -                | -         |    11.31 | Dytor, Happyy, K1-FiDa, nbqq, Valencio  |
|           70 |     1040 | 2022-12-08 | HONORIS            | L   | 0.760      | -            | -                | -                | -         |   -12.58 | Dytor, Happyy, K1-FiDa, nbqq, Valencio  |
|           69 |     1084 | 2022-12-07 | Permitta           | L   | 0.752      | -            | -                | -                | -         |   -14.00 | Dytor, Happyy, K1-FiDa, nbqq, Valencio  |
|           68 |     1085 | 2022-12-07 | ex-Into the Breach | L   | 0.752      | -            | -                | -                | -         |   -15.73 | Dytor, K1-FiDa, nbqq, ono, Valencio     |
|           67 |     1116 | 2022-12-06 | GamerLegion        | L   | 0.747      | -            | -                | -                | -         |    -6.54 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           66 |     1130 | 2022-12-06 | Apeks              | W   | 0.744      | 0.435        | 0.024 (0.008)    | 0.671 (0.217)    | -         |    10.79 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           65 |     1148 | 2022-12-05 | Tricked            | L   | 0.739      | -            | -                | -                | -         |   -11.78 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           64 |     1181 | 2022-12-04 | Sprout             | W   | 0.732      | 0.435        | 0.067 (0.021)    | 0.446 (0.142)    | -         |    16.70 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           63 |     1209 | 2022-12-03 | Tricked            | L   | 0.727      | -            | -                | -                | -         |   -11.47 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           62 |     1218 | 2022-12-03 | ALTERNATE aTTaX    | W   | 0.726      | 0.477        | -                | 0.486 (0.168)    | -         |     6.83 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           61 |     1245 | 2022-12-02 | 500                | L   | 0.721      | -            | -                | -                | -         |    -7.57 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           60 |     1259 | 2022-12-02 | Illuminar          | W   | 0.718      | 0.435        | 0.048 (0.015)    | 0.700 (0.219)    | -         |    12.11 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           59 |     1285 | 2022-12-01 | PROSPECTS          | W   | 0.712      | 0.435        | 0.032 (0.010)    | 0.689 (0.213)    | -         |    11.10 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           58 |     1309 | 2022-11-30 | ECSTATIC           | W   | 0.706      | 0.435        | 0.030 (0.009)    | 0.556 (0.170)    | -         |     7.62 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           57 |     1334 | 2022-11-29 | Tricked            | W   | 0.700      | 0.435        | 0.034 (0.010)    | 0.954 (0.290)    | -         |    10.28 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           56 |     1358 | 2022-11-28 | AGO                | L   | 0.693      | -            | -                | -                | -         |   -15.10 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           55 |     1381 | 2022-11-27 | ex-Finest          | L   | 0.687      | -            | -                | -                | -         |   -12.34 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           54 |     1484 | 2022-11-24 | Falcons            | W   | 0.665      | 0.435        | 0.045 (0.013)    | 0.767 (0.222)    | -         |     9.52 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           53 |     1496 | 2022-11-23 | SINNERS            | L   | 0.660      | -            | -                | -                | -         |    -9.83 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           52 |     1515 | 2022-11-22 | eSuba              | W   | 0.653      | -            | -                | -                | -         |     8.96 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           51 |     1640 | 2022-11-15 | K23                | L   | 0.605      | -            | -                | -                | -         |   -11.70 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           50 |     1679 | 2022-11-08 | Copenhagen Flames  | W   | 0.559      | 0.426        | 0.133 (0.032)    | 0.722 (0.172)    | -         |     9.12 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           49 |     1680 | 2022-11-08 | ex-Into the Breach | W   | 0.558      | 0.426        | -                | 0.520 (0.124)    | -         |     5.50 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           48 |     1705 | 2022-11-06 | Enterprise         | W   | 0.545      | 0.473        | 0.042 (0.011)    | -                | 1 (0.545) |     6.81 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           47 |     1727 | 2022-11-05 | SINNERS            | L   | 0.538      | -            | -                | -                | -         |    -7.70 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           46 |     1832 | 2022-10-28 | HONORIS            | L   | 0.485      | -            | -                | -                | -         |    -9.28 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           45 |     1845 | 2022-10-27 | Young Ninjas       | L   | 0.479      | -            | -                | -                | -         |    -8.51 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           44 |     1908 | 2022-10-24 | FTW                | W   | 0.459      | -            | -                | -                | -         |     5.17 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           43 |     1932 | 2022-10-23 | IKLA               | L   | 0.453      | -            | -                | -                | -         |    -8.06 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           42 |     1940 | 2022-10-23 | Tricked            | L   | 0.451      | -            | -                | -                | -         |    -6.47 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           41 |     1981 | 2022-10-21 | Believe            | W   | 0.440      | -            | -                | -                | -         |     3.87 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           40 |     2120 | 2022-10-16 | eSuba              | W   | 0.405      | -            | -                | -                | 1 (0.405) |     5.34 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           39 |     2178 | 2022-10-14 | eSuba              | W   | 0.393      | -            | -                | -                | 1 (0.393) |     5.31 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           38 |     2208 | 2022-10-13 | UNGENTIUM          | L   | 0.387      | -            | -                | -                | -         |    -8.98 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           37 |     2223 | 2022-10-13 | Enterprise         | W   | 0.385      | -            | -                | -                | 1 (0.385) |     4.67 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           36 |     2240 | 2022-10-12 | GLORE              | W   | 0.381      | -            | -                | -                | 1 (0.381) |     0.45 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           35 |     2244 | 2022-10-12 | ex-Finest          | L   | 0.380      | -            | -                | -                | -         |    -7.97 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           34 |     2267 | 2022-10-12 | SAW                | L   | 0.378      | -            | -                | -                | -         |    -4.09 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           33 |     2313 | 2022-10-09 | Believe            | L   | 0.359      | -            | -                | -                | -         |    -8.80 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           32 |     2444 | 2022-10-02 | Iron Branch        | L   | 0.313      | -            | -                | -                | -         |    -8.38 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           31 |     2477 | 2022-10-01 | eSuba              | L   | 0.305      | -            | -                | -                | -         |    -5.91 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           30 |     2493 | 2022-09-30 | Sangal             | L   | 0.300      | -            | -                | -                | -         |    -5.53 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           29 |     2580 | 2022-09-27 | EYEBALLERS         | W   | 0.278      | -            | -                | -                | -         |     3.12 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           28 |     2591 | 2022-09-26 | Believe            | W   | 0.273      | -            | -                | -                | -         |     1.75 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           27 |     2705 | 2022-09-23 | 9 Pandas           | W   | 0.253      | -            | -                | -                | -         |     1.49 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           26 |     2814 | 2022-09-20 | X                  | W   | 0.233      | -            | -                | -                | -         |     0.39 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           25 |     2835 | 2022-09-19 | SKADE X            | W   | 0.225      | -            | -                | -                | -         |     0.85 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           24 |     2857 | 2022-09-18 | Bad News Eagles    | L   | 0.220      | -            | -                | -                | -         |    -2.26 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           23 |     2892 | 2022-09-17 | Enterprise         | W   | 0.212      | -            | -                | -                | 1 (0.212) |     2.18 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           22 |     2956 | 2022-09-15 | HONORIS            | L   | 0.199      | -            | -                | -                | -         |    -4.33 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           21 |     3005 | 2022-09-14 | eSuba              | W   | 0.191      | -            | -                | -                | -         |     2.31 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           20 |     3026 | 2022-09-13 | 9INE               | W   | 0.186      | -            | -                | -                | -         |     2.24 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           19 |     3053 | 2022-09-12 | Bad News Eagles    | L   | 0.179      | -            | -                | -                | -         |    -1.87 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           18 |     3220 | 2022-09-08 | sYnck              | L   | 0.153      | -            | -                | -                | -         |    -3.90 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           17 |     3223 | 2022-09-08 | Movistar Riders    | W   | 0.153      | -            | -                | -                | -         |     0.98 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           16 |     3228 | 2022-09-08 | PROSPECTS          | W   | 0.151      | -            | -                | -                | -         |     1.99 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           15 |     3241 | 2022-09-07 | fnatic             | L   | 0.145      | -            | -                | -                | -         |    -0.31 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           14 |     3261 | 2022-09-05 | ex-TITANS          | W   | 0.134      | -            | -                | -                | -         |     0.45 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           13 |     3265 | 2022-09-05 | sYnck              | W   | 0.133      | -            | -                | -                | -         |     0.80 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           12 |     3269 | 2022-09-05 | ex-TITANS          | W   | 0.132      | -            | -                | -                | -         |     0.45 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           11 |     3271 | 2022-09-05 | JANO               | W   | 0.131      | -            | -                | -                | -         |     0.71 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|           10 |     3289 | 2022-09-04 | Cryptova           | W   | 0.126      | -            | -                | -                | -         |     0.64 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            9 |     3296 | 2022-09-04 | ex-TITANS          | L   | 0.125      | -            | -                | -                | -         |    -3.52 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            8 |     3332 | 2022-09-03 | Falcons            | L   | 0.118      | -            | -                | -                | -         |    -2.06 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            7 |     3380 | 2022-09-01 | Copenhagen Flames  | W   | 0.107      | -            | -                | -                | -         |     1.50 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            6 |     3442 | 2022-08-30 | Hotspurs           | L   | 0.091      | -            | -                | -                | -         |    -2.72 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            5 |     3503 | 2022-08-27 | Tricked            | W   | 0.073      | -            | -                | -                | -         |     1.09 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            4 |     3582 | 2022-08-25 | Illuminar          | W   | 0.057      | -            | -                | -                | -         |     0.93 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            3 |     3595 | 2022-08-24 | EC Kyiv            | L   | 0.051      | -            | -                | -                | -         |    -1.44 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            2 |     3633 | 2022-08-23 | sYnck              | W   | 0.045      | -            | -                | -                | -         |     0.26 | capseN, Dytor, K1-FiDa, nbqq, Valencio  |
|            1 |     3769 | 2022-08-17 | SKADE X            | W   | 0.005      | -            | -                | -                | -         |     0.02 | capseN, Dytor, nbqq, twist, Valencio    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,928.58)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.827 | $2,000.00      | $1,654.07       |
| 2022-12-07 |      0.754 | $2,000.00      | $1,507.48       |
| 2022-12-04 |      0.732 | $7,500.00      | $5,490.63       |
| 2022-11-24 |      0.667 | $870.00        | $580.25         |
| 2022-11-06 |      0.547 | $9,200.00      | $5,031.78       |
| 2022-10-24 |      0.460 | $2,000.00      | $919.27         |
| 2022-10-16 |      0.405 | $9,875.00      | $4,000.13       |
| 2022-10-09 |      0.359 | $1,250.00      | $448.38         |
| 2022-09-18 |      0.220 | $9,290.00      | $2,044.27       |
| 2022-09-04 |      0.126 | $2,000.00      | $252.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
