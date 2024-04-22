### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  830.5<br />
<br />
Final Rank Value (830.5) = Starting Rank Value (912.2) + Head To Head Adjustments (-81.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.197[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 912.2
- 400 + ( ( 0.265 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 912.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |        6 | 2024-04-22 | B8                | W   | 1.000      | 0.384        | -                | 0.655 (0.252)    | 0 (0.000) |    16.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           64 |       29 | 2024-04-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -14.30 | avid, b0denmaster, PlesseN, robiin, twist |
|           63 |      109 | 2024-04-19 | 9 Pandas          | W   | 1.000      | 0.500        | 0.083 (0.042)    | 0.656 (0.328)    | 0 (0.000) |    23.18 | avid, b0denmaster, PlesseN, robiin, twist |
|           62 |      183 | 2024-04-17 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.69 | avid, b0denmaster, PlesseN, robiin, twist |
|           61 |      190 | 2024-04-17 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -8.98 | avid, b0denmaster, PlesseN, robiin, twist |
|           60 |      241 | 2024-04-15 | HAVU              | W   | 1.000      | 0.384        | 0.027 (0.011)    | 0.154 (0.059)    | 0 (0.000) |    13.04 | avid, b0denmaster, PlesseN, robiin, twist |
|           59 |      245 | 2024-04-15 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -10.26 | avid, b0denmaster, PlesseN, robiin, twist |
|           58 |      273 | 2024-04-13 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -15.34 | avid, b0denmaster, PlesseN, robiin, twist |
|           57 |      315 | 2024-04-11 | Zero Tenacity     | W   | 1.000      | 0.384        | -                | 0.805 (0.309)    | -         |    13.55 | avid, b0denmaster, PlesseN, robiin, twist |
|           56 |      405 | 2024-04-09 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -6.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           55 |      420 | 2024-04-09 | Astralis Talent   | W   | 1.000      | 0.371        | 0.028 (0.010)    | 0.224 (0.083)    | -         |    15.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           54 |      468 | 2024-04-07 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -17.01 | avid, b0denmaster, PlesseN, robiin, twist |
|           53 |      471 | 2024-04-07 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -13.77 | avid, b0denmaster, PlesseN, robiin, twist |
|           52 |      480 | 2024-04-06 | Lilmix            | W   | 1.000      | -            | -                | -                | -         |     5.39 | avid, b0denmaster, PlesseN, robiin, twist |
|           51 |      485 | 2024-04-06 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -4.10 | avid, b0denmaster, PlesseN, robiin, twist |
|           50 |      502 | 2024-04-05 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -7.04 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |      537 | 2024-04-04 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -4.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |      547 | 2024-04-04 | Benched Heroes    | W   | 1.000      | -            | -                | -                | -         |     2.29 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |      590 | 2024-04-03 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -9.70 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |      989 | 2024-03-13 | MOUZ NXT          | L   | 0.932      | -            | -                | -                | -         |   -11.77 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |     1021 | 2024-03-12 | Passion UA        | L   | 0.925      | -            | -                | -                | -         |   -14.84 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1061 | 2024-03-10 | EYEBALLERS        | W   | 0.913      | 0.143        | 0.052 (0.007)    | -                | -         |    15.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1076 | 2024-03-09 | BLUDS             | W   | 0.906      | -            | -                | -                | -         |     8.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1087 | 2024-03-09 | Johnny Speeds     | W   | 0.905      | 0.143        | 0.036 (0.005)    | -                | -         |    11.53 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1092 | 2024-03-09 | Entropiq          | W   | 0.905      | 0.358        | -                | 0.403 (0.131)    | -         |     9.92 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1135 | 2024-03-07 | ex-Sprout         | W   | 0.892      | -            | -                | -                | -         |     7.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1167 | 2024-03-06 | Sashi             | L   | 0.885      | -            | -                | -                | -         |   -13.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1210 | 2024-03-05 | Viperio           | W   | 0.877      | -            | -                | -                | -         |     3.98 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1290 | 2024-03-01 | 9INE              | L   | 0.852      | -            | -                | -                | -         |   -23.07 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1317 | 2024-02-28 | Sangal            | W   | 0.838      | 0.143        | -                | 0.685 (0.082)    | -         |     8.43 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     1372 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.820      | 0.358        | 0.019 (0.006)    | 0.639 (0.188)    | -         |    12.56 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     1542 | 2024-02-18 | esmagaB           | W   | 0.772      | 0.358        | 0.015 (0.004)    | 0.342 (0.095)    | -         |     9.37 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     1771 | 2024-02-06 | 9INE              | W   | 0.691      | -            | -                | -                | -         |     3.51 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     1796 | 2024-02-04 | Secret            | L   | 0.679      | -            | -                | -                | -         |   -17.22 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     1934 | 2024-01-29 | Passion UA        | L   | 0.639      | -            | -                | -                | -         |    -8.83 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     1948 | 2024-01-28 | Spirit Academy    | L   | 0.631      | -            | -                | -                | -         |   -13.45 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2016 | 2024-01-24 | Gaimin Gladiators | L   | 0.605      | -            | -                | -                | -         |    -1.74 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2345 | 2024-01-16 | Nexus             | L   | 0.553      | -            | -                | -                | -         |    -9.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2532 | 2024-01-11 | Betera            | L   | 0.519      | -            | -                | -                | -         |   -11.39 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2615 | 2023-12-30 | The Witchers      | L   | 0.438      | -            | -                | -                | -         |    -9.57 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2620 | 2023-12-29 | brazylijski luz   | W   | 0.431      | -            | -                | -                | -         |     4.92 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2622 | 2023-12-28 | Rhyno             | W   | 0.425      | 0.371        | 0.019 (0.003)    | -                | -         |     4.59 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2627 | 2023-12-26 | VP.Prodigy        | L   | 0.412      | -            | -                | -                | -         |   -10.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2674 | 2023-12-17 | BLUDS             | W   | 0.354      | -            | -                | -                | 1 (0.354) |     3.03 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2681 | 2023-12-17 | Lilmix            | W   | 0.353      | -            | -                | -                | 1 (0.353) |     1.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2686 | 2023-12-17 | Onliners5         | W   | 0.352      | -            | -                | -                | 1 (0.352) |     2.01 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2778 | 2023-12-11 | Sprout            | L   | 0.313      | -            | -                | -                | -         |    -6.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2824 | 2023-12-09 | Kappa Bar         | W   | 0.298      | -            | -                | -                | 1 (0.298) |     1.43 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2896 | 2023-12-06 | Sprout            | W   | 0.279      | -            | -                | -                | -         |     2.64 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     2949 | 2023-12-03 | Ninjas in Pyjamas | L   | 0.259      | -            | -                | -                | -         |    -4.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     2974 | 2023-12-02 | EYEBALLERS        | L   | 0.252      | -            | -                | -                | -         |    -4.25 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     2987 | 2023-12-01 | The Prodigies SE  | W   | 0.247      | -            | -                | -                | 1 (0.247) |     0.82 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3021 | 2023-11-29 | Sashi             | W   | 0.232      | 0.384        | 0.064 (0.006)    | 1.000 (0.089)    | -         |     3.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3137 | 2023-11-21 | Lemondogs         | W   | 0.180      | -            | -                | -                | -         |     0.31 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3153 | 2023-11-20 | IKLA              | W   | 0.173      | -            | -                | -                | -         |     0.74 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3192 | 2023-11-18 | ARCRED            | L   | 0.160      | -            | -                | -                | -         |    -3.85 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3240 | 2023-11-17 | GODSENT           | L   | 0.151      | -            | -                | -                | -         |    -3.13 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3280 | 2023-11-16 | Sashi             | W   | 0.144      | 0.384        | 0.064 (0.004)    | -                | -         |     2.29 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3334 | 2023-11-14 | 9 Pandas          | L   | 0.132      | -            | -                | -                | -         |    -1.17 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3394 | 2023-11-11 | Lilmix            | W   | 0.115      | -            | -                | -                | 1 (0.115) |     0.56 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     3395 | 2023-11-11 | Kappa Bar         | W   | 0.114      | -            | -                | -                | 1 (0.114) |     0.53 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3408 | 2023-11-11 | Gucci Academy     | L   | 0.112      | -            | -                | -                | -         |    -2.49 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     3463 | 2023-11-08 | ex-Anonymo        | W   | 0.093      | -            | -                | -                | -         |     0.89 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     3610 | 2023-11-01 | 500               | W   | 0.046      | -            | -                | -                | -         |     0.26 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     3755 | 2023-10-28 | ex-Anonymo        | W   | 0.019      | -            | -                | -                | -         |     0.18 | avid, b0denmaster, PlesseN, robiin, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,837.36)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-17 |      0.354 | $5,700.00      | $2,015.97       |
| 2023-12-13 |      0.327 | $500.00        | $163.38         |
| 2023-12-09 |      0.298 | $2,365.00      | $704.00         |
| 2023-12-03 |      0.260 | $2,286.00      | $594.74         |
| 2023-11-11 |      0.115 | $3,120.00      | $359.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
