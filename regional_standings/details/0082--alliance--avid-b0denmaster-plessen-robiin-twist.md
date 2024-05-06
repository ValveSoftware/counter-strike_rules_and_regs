### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  866.1<br />
<br />
Final Rank Value (866.1) = Starting Rank Value (896.5) + Head To Head Adjustments (-30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.190[<sup>2</sup>](#table1)
- LAN Wins: 0.132[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.5
- 400 + ( ( 0.261 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 896.5


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
|           67 |      134 | 2024-04-30 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.30 | avid, b0denmaster, PlesseN, robiin, twist |
|           66 |      159 | 2024-04-29 | Endpoint          | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.694 (0.267)    | 0 (0.000) |    17.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           65 |      171 | 2024-04-28 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.17 | avid, b0denmaster, PlesseN, robiin, twist |
|           64 |      211 | 2024-04-26 | B8                | L   | 1.000      | -            | -                | -                | -         |   -11.46 | avid, b0denmaster, PlesseN, robiin, twist |
|           63 |      285 | 2024-04-23 | Metizport         | L   | 1.000      | -            | -                | -                | -         |    -8.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           62 |      302 | 2024-04-22 | B8                | W   | 1.000      | 0.384        | 0.080 (0.031)    | 0.851 (0.327)    | 0 (0.000) |    19.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           61 |      325 | 2024-04-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -12.99 | avid, b0denmaster, PlesseN, robiin, twist |
|           60 |      405 | 2024-04-19 | 9 Pandas          | W   | 1.000      | 0.500        | 0.081 (0.040)    | 0.676 (0.338)    | -         |    23.66 | avid, b0denmaster, PlesseN, robiin, twist |
|           59 |      479 | 2024-04-17 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -3.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           58 |      486 | 2024-04-17 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -8.42 | avid, b0denmaster, PlesseN, robiin, twist |
|           57 |      537 | 2024-04-15 | HAVU              | W   | 1.000      | 0.384        | 0.023 (0.009)    | 0.214 (0.082)    | -         |    12.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           56 |      541 | 2024-04-15 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -7.77 | avid, b0denmaster, PlesseN, robiin, twist |
|           55 |      569 | 2024-04-13 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -13.39 | avid, b0denmaster, PlesseN, robiin, twist |
|           54 |      611 | 2024-04-11 | Zero Tenacity     | W   | 1.000      | 0.384        | 0.093 (0.036)    | 0.936 (0.360)    | -         |    17.65 | avid, b0denmaster, PlesseN, robiin, twist |
|           53 |      701 | 2024-04-09 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -4.83 | avid, b0denmaster, PlesseN, robiin, twist |
|           52 |      716 | 2024-04-09 | Astralis Talent   | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.194 (0.072)    | -         |    15.00 | avid, b0denmaster, PlesseN, robiin, twist |
|           51 |      764 | 2024-04-07 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -17.30 | avid, b0denmaster, PlesseN, robiin, twist |
|           50 |      767 | 2024-04-07 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -13.29 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |      776 | 2024-04-06 | Lilmix            | W   | 1.000      | -            | -                | -                | -         |     4.86 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |      781 | 2024-04-06 | BetBoom           | L   | 0.999      | -            | -                | -                | -         |    -2.06 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |      798 | 2024-04-05 | BLEED             | L   | 0.992      | -            | -                | -                | -         |    -5.22 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |      833 | 2024-04-04 | BetBoom           | L   | 0.987      | -            | -                | -                | -         |    -2.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |      843 | 2024-04-04 | Benched Heroes    | W   | 0.985      | -            | -                | -                | -         |     2.05 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |      886 | 2024-04-03 | AMKAL             | L   | 0.978      | -            | -                | -                | -         |    -5.48 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1285 | 2024-03-13 | MOUZ NXT          | L   | 0.839      | -            | -                | -                | -         |    -7.47 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1317 | 2024-03-12 | Passion UA        | L   | 0.832      | -            | -                | -                | -         |   -10.56 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1357 | 2024-03-10 | EYEBALLERS        | W   | 0.819      | 0.143        | 0.045 (0.005)    | -                | -         |    14.88 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1372 | 2024-03-09 | BLUDS             | W   | 0.813      | -            | -                | -                | -         |     7.26 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1383 | 2024-03-09 | Johnny Speeds     | W   | 0.812      | 0.143        | 0.043 (0.005)    | -                | -         |    10.59 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1388 | 2024-03-09 | Entropiq          | W   | 0.811      | 0.358        | -                | 0.315 (0.091)    | -         |     9.24 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1431 | 2024-03-07 | ex-Sprout         | W   | 0.798      | -            | -                | -                | -         |     6.00 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1463 | 2024-03-06 | Sashi             | L   | 0.791      | -            | -                | -                | -         |    -8.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     1506 | 2024-03-05 | Viperio           | W   | 0.784      | -            | -                | -                | -         |     3.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     1586 | 2024-03-01 | 9INE              | L   | 0.759      | -            | -                | -                | -         |   -20.59 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     1613 | 2024-02-28 | Sangal            | W   | 0.745      | 0.143        | -                | 0.797 (0.085)    | -         |     9.59 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     1668 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.726      | 0.358        | 0.104 (0.027)    | 0.779 (0.203)    | -         |    13.70 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     1838 | 2024-02-18 | esmagaB           | W   | 0.679      | 0.358        | -                | 0.293 (0.071)    | -         |     8.08 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     2067 | 2024-02-06 | 9INE              | W   | 0.598      | -            | -                | -                | -         |     3.00 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2092 | 2024-02-04 | Secret            | L   | 0.586      | -            | -                | -                | -         |   -15.04 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2230 | 2024-01-29 | Passion UA        | L   | 0.546      | -            | -                | -                | -         |    -5.42 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2244 | 2024-01-28 | Spirit Academy    | L   | 0.538      | -            | -                | -                | -         |   -11.47 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2312 | 2024-01-24 | Gaimin Gladiators | L   | 0.511      | -            | -                | -                | -         |    -1.22 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2641 | 2024-01-16 | Nexus             | L   | 0.460      | -            | -                | -                | -         |    -6.86 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2828 | 2024-01-11 | Betera            | L   | 0.425      | -            | -                | -                | -         |    -9.41 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2911 | 2023-12-30 | The Witchers      | L   | 0.345      | -            | -                | -                | -         |    -7.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2916 | 2023-12-29 | brazylijski luz   | W   | 0.338      | -            | -                | -                | -         |     4.19 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2918 | 2023-12-28 | Rhyno             | W   | 0.332      | -            | -                | -                | -         |     3.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2923 | 2023-12-26 | VP.Prodigy        | L   | 0.319      | -            | -                | -                | -         |    -7.87 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2970 | 2023-12-17 | BLUDS             | W   | 0.260      | -            | -                | -                | 1 (0.260) |     2.15 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2977 | 2023-12-17 | Lilmix            | W   | 0.259      | -            | -                | -                | 1 (0.259) |     1.08 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2982 | 2023-12-17 | Onliners5         | W   | 0.258      | -            | -                | -                | 1 (0.258) |     1.50 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     3074 | 2023-12-11 | Sprout            | L   | 0.219      | -            | -                | -                | -         |    -4.99 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     3120 | 2023-12-09 | Kappa Bar         | W   | 0.204      | -            | -                | -                | 1 (0.204) |     0.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     3192 | 2023-12-06 | Sprout            | W   | 0.185      | -            | -                | -                | -         |     1.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3245 | 2023-12-03 | Ninjas in Pyjamas | L   | 0.166      | -            | -                | -                | -         |    -3.15 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3270 | 2023-12-02 | EYEBALLERS        | L   | 0.159      | -            | -                | -                | -         |    -2.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3283 | 2023-12-01 | The Prodigies SE  | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.53 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3317 | 2023-11-29 | Sashi             | W   | 0.139      | 0.384        | 0.188 (0.010)    | -                | -         |     3.13 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3433 | 2023-11-21 | Lemondogs         | W   | 0.086      | -            | -                | -                | -         |     0.16 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3449 | 2023-11-20 | IKLA              | W   | 0.079      | -            | -                | -                | -         |     0.34 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3488 | 2023-11-18 | ARCRED            | L   | 0.067      | -            | -                | -                | -         |    -1.54 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3536 | 2023-11-17 | GODSENT           | L   | 0.058      | -            | -                | -                | -         |    -1.25 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     3576 | 2023-11-16 | Sashi             | W   | 0.051      | -            | -                | -                | -         |     1.16 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3630 | 2023-11-14 | 9 Pandas          | L   | 0.038      | -            | -                | -                | -         |    -0.28 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     3690 | 2023-11-11 | Lilmix            | W   | 0.022      | -            | -                | -                | 1 (0.022) |     0.11 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     3691 | 2023-11-11 | Kappa Bar         | W   | 0.021      | -            | -                | -                | 1 (0.021) |     0.10 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     3704 | 2023-11-11 | Gucci Academy     | L   | 0.019      | -            | -                | -                | -         |    -0.43 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,533.78)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-17 |      0.260 | $5,700.00      | $1,484.13       |
| 2023-12-13 |      0.233 | $500.00        | $116.73         |
| 2023-12-09 |      0.204 | $2,365.00      | $483.33         |
| 2023-12-03 |      0.167 | $2,286.00      | $381.44         |
| 2023-11-11 |      0.022 | $3,120.00      | $68.15          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
