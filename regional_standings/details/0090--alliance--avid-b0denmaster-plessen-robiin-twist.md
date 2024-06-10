### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  888.7<br />
<br />
Final Rank Value (888.7) = Starting Rank Value (898.9) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.9
- 400 + ( ( 0.250 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 898.9


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
|           56 |       44 | 2024-06-09 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -7.60 | avid, b0denmaster, PlesseN, robiin, twist |
|           55 |       68 | 2024-06-09 | Lilmix            | W   | 1.000      | 0.347        | 0.011 (0.004)    | -                | 1 (1.000) |     8.57 | avid, b0denmaster, PlesseN, robiin, twist |
|           54 |      469 | 2024-05-31 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -14.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           53 |      606 | 2024-05-24 | B8                | L   | 1.000      | -            | -                | -                | -         |    -4.72 | avid, b0denmaster, PlesseN, robiin, twist |
|           52 |      979 | 2024-05-14 | ECF               | L   | 1.000      | -            | -                | -                | -         |   -16.97 | avid, b0denmaster, PlesseN, robiin, twist |
|           51 |     1285 | 2024-04-30 | B8                | L   | 0.925      | -            | -                | -                | -         |   -10.27 | avid, b0denmaster, PlesseN, robiin, twist |
|           50 |     1310 | 2024-04-29 | Endpoint          | W   | 0.918      | 0.384        | 0.009 (0.003)    | 0.570 (0.201)    | 0 (0.000) |    14.18 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |     1322 | 2024-04-28 | DMS               | W   | 0.912      | 0.500        | -                | 0.524 (0.239)    | 0 (0.000) |    12.69 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |     1362 | 2024-04-26 | B8                | L   | 0.900      | -            | -                | -                | -         |    -9.07 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |     1436 | 2024-04-23 | Metizport         | L   | 0.879      | -            | -                | -                | -         |    -8.81 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |     1453 | 2024-04-22 | B8                | W   | 0.872      | 0.384        | 0.160 (0.054)    | 1.000 (0.335)    | 0 (0.000) |    18.58 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |     1476 | 2024-04-21 | Sangal            | L   | 0.864      | -            | -                | -                | -         |    -6.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1556 | 2024-04-19 | 9 Pandas          | W   | 0.851      | 0.500        | 0.114 (0.049)    | 0.758 (0.323)    | 0 (0.000) |    20.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1630 | 2024-04-17 | Nemiga            | L   | 0.839      | -            | -                | -                | -         |    -3.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1637 | 2024-04-17 | ECLOT             | L   | 0.838      | -            | -                | -                | -         |    -5.34 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1688 | 2024-04-15 | HAVU              | W   | 0.826      | 0.384        | -                | 0.254 (0.081)    | 0 (0.000) |     7.31 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1692 | 2024-04-15 | MOUZ NXT          | L   | 0.824      | -            | -                | -                | -         |    -6.72 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1720 | 2024-04-13 | ALTERNATE aTTaX   | L   | 0.811      | -            | -                | -                | -         |   -10.72 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1762 | 2024-04-11 | Zero Tenacity     | W   | 0.799      | 0.384        | 0.154 (0.047)    | 1.000 (0.307)    | 0 (0.000) |    17.04 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1852 | 2024-04-09 | BLEED             | L   | 0.787      | -            | -                | -                | -         |    -1.82 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1867 | 2024-04-09 | Astralis Talent   | W   | 0.784      | 0.371        | 0.014 (0.004)    | 0.152 (0.044)    | -         |    10.75 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     1915 | 2024-04-07 | Johnny Speeds     | L   | 0.773      | -            | -                | -                | -         |    -5.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     1918 | 2024-04-07 | EYEBALLERS        | L   | 0.772      | -            | -                | -                | -         |   -11.15 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     1927 | 2024-04-06 | Lilmix            | W   | 0.767      | 0.330        | 0.011 (0.003)    | -                | -         |     6.46 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     1932 | 2024-04-06 | BetBoom           | L   | 0.765      | -            | -                | -                | -         |    -0.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     1949 | 2024-04-05 | BLEED             | L   | 0.759      | -            | -                | -                | -         |    -1.75 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     1984 | 2024-04-04 | BetBoom           | L   | 0.753      | -            | -                | -                | -         |    -0.56 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     1994 | 2024-04-04 | Benched Heroes    | W   | 0.752      | -            | -                | -                | -         |     1.37 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2037 | 2024-04-03 | AMKAL             | L   | 0.745      | -            | -                | -                | -         |    -4.37 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2436 | 2024-03-13 | MOUZ NXT          | L   | 0.605      | -            | -                | -                | -         |    -5.10 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2468 | 2024-03-12 | Passion UA        | L   | 0.599      | -            | -                | -                | -         |    -6.89 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2508 | 2024-03-10 | EYEBALLERS        | W   | 0.586      | 0.143        | -                | 0.722 (0.060)    | -         |    10.10 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2523 | 2024-03-09 | BLUDS             | W   | 0.580      | -            | -                | -                | -         |     3.05 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2534 | 2024-03-09 | Johnny Speeds     | W   | 0.579      | 0.143        | 0.081 (0.007)    | -                | -         |    14.08 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2539 | 2024-03-09 | Entropiq          | W   | 0.578      | -            | -                | -                | -         |     3.72 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2582 | 2024-03-07 | ex-Sprout         | W   | 0.565      | -            | -                | -                | -         |     3.00 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2614 | 2024-03-06 | Sashi             | L   | 0.558      | -            | -                | -                | -         |    -4.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2657 | 2024-03-05 | Viperio           | W   | 0.551      | -            | -                | -                | -         |     2.01 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2737 | 2024-03-01 | 9INE              | L   | 0.525      | -            | -                | -                | -         |   -14.68 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2764 | 2024-02-28 | Sangal            | W   | 0.512      | 0.143        | 0.214 (0.016)    | 0.998 (0.073)    | -         |    12.78 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     2819 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.493      | 0.358        | 0.046 (0.008)    | 0.583 (0.103)    | -         |    10.04 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     2989 | 2024-02-18 | esmagaB           | W   | 0.445      | -            | -                | -                | -         |     4.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     3218 | 2024-02-06 | 9INE              | W   | 0.365      | -            | -                | -                | -         |     1.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3243 | 2024-02-04 | Secret            | L   | 0.353      | -            | -                | -                | -         |    -9.41 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3381 | 2024-01-29 | Passion UA        | L   | 0.312      | -            | -                | -                | -         |    -2.85 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3395 | 2024-01-28 | Spirit Academy    | L   | 0.304      | -            | -                | -                | -         |    -7.32 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3463 | 2024-01-24 | Gaimin Gladiators | L   | 0.278      | -            | -                | -                | -         |    -1.19 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3792 | 2024-01-16 | Nexus             | L   | 0.227      | -            | -                | -                | -         |    -3.83 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3979 | 2024-01-11 | Betera            | L   | 0.192      | -            | -                | -                | -         |    -4.47 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     4062 | 2023-12-30 | The Witchers      | L   | 0.112      | -            | -                | -                | -         |    -2.75 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     4067 | 2023-12-29 | brazylijski luz   | W   | 0.104      | -            | -                | -                | -         |     1.17 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     4069 | 2023-12-28 | Rhyno             | W   | 0.098      | -            | -                | -                | -         |     1.78 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     4074 | 2023-12-26 | VP.Prodigy        | L   | 0.085      | -            | -                | -                | -         |    -1.48 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     4121 | 2023-12-17 | BLUDS             | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.14 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     4128 | 2023-12-17 | Lilmix            | W   | 0.026      | -            | -                | -                | 1 (0.026) |     0.09 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     4133 | 2023-12-17 | Onliners5         | W   | 0.025      | -            | -                | -                | 1 (0.025) |     0.12 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,543.52)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,889.00      | $2,889.00       |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2023-12-17 |      0.027 | $5,700.00      | $154.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
