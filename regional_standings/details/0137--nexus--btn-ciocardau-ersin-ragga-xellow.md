### Roster Details<br />
Team Name: Nexus<br />
Roster: BTN, Ciocardau, ERSIN, ragga, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  734.9<br />
<br />
Final Rank Value (734.9) = Starting Rank Value (871.7) + Head To Head Adjustments (-136.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.7
- 400 + ( ( 0.237 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 871.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       75 | 2024-06-09 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |    -8.03 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           61 |      105 | 2024-06-08 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |    -9.23 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           60 |      178 | 2024-06-07 | Astralis Talent   | W   | 1.000      | 0.450        | 0.014 (0.006)    | -                | 0 (0.000) |    19.20 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           59 |      188 | 2024-06-07 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -21.65 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           58 |      210 | 2024-06-06 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -2.81 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           57 |      308 | 2024-06-05 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -1.60 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           56 |      550 | 2024-05-27 | The Prodigies     | L   | 1.000      | -            | -                | -                | -         |   -24.57 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           55 |      561 | 2024-05-27 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -4.86 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           54 |      595 | 2024-05-25 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -11.51 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           53 |      624 | 2024-05-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -9.36 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           52 |      736 | 2024-05-20 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.583 (0.253)    | 0 (0.000) |    20.93 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           51 |      742 | 2024-05-20 | PERA              | L   | 1.000      | -            | -                | -                | -         |    -9.79 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           50 |      839 | 2024-05-17 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -8.08 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |      930 | 2024-05-15 | Space             | L   | 1.000      | -            | -                | -                | -         |   -12.31 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |     1005 | 2024-05-13 | Sampi             | L   | 1.000      | -            | -                | -                | -         |    -8.70 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |     1215 | 2024-05-03 | ENCE Academy      | L   | 0.945      | -            | -                | -                | -         |   -17.33 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           46 |     1260 | 2024-05-01 | Insilio           | L   | 0.932      | -            | -                | -                | -         |    -9.66 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           45 |     1292 | 2024-04-30 | fnatic            | L   | 0.924      | -            | -                | -                | -         |    -2.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           44 |     1297 | 2024-04-29 | Endpoint          | L   | 0.920      | -            | -                | -                | -         |   -12.30 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           43 |     1300 | 2024-04-29 | VP.Prodigy        | L   | 0.919      | -            | -                | -                | -         |   -14.87 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           42 |     1307 | 2024-04-29 | LEON              | W   | 0.918      | -            | -                | -                | 0 (0.000) |     3.58 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           41 |     1311 | 2024-04-29 | Enterprise        | W   | 0.917      | 0.384        | -                | 0.647 (0.228)    | 0 (0.000) |    16.18 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           40 |     1328 | 2024-04-28 | brazylijski luz   | L   | 0.911      | -            | -                | -                | -         |   -14.42 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           39 |     1392 | 2024-04-25 | Metizport         | W   | 0.893      | 0.384        | 0.078 (0.027)    | 0.706 (0.242)    | 0 (0.000) |    20.81 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           38 |     1399 | 2024-04-25 | Grannys Knockers  | L   | 0.892      | -            | -                | -                | -         |   -17.16 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           37 |     1421 | 2024-04-24 | AMKAL             | L   | 0.885      | -            | -                | -                | -         |    -3.86 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           36 |     1442 | 2024-04-23 | Illuminar         | L   | 0.878      | -            | -                | -                | -         |   -21.18 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           35 |     1455 | 2024-04-22 | Zero Tenacity     | L   | 0.872      | -            | -                | -                | -         |    -8.77 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           34 |     1465 | 2024-04-21 | Young Ninjas      | W   | 0.867      | 0.500        | 0.033 (0.014)    | 0.166 (0.072)    | 0 (0.000) |    12.43 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           33 |     1468 | 2024-04-21 | PARIVISION        | L   | 0.866      | -            | -                | -                | -         |   -11.85 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     1504 | 2024-04-20 | Permitta          | W   | 0.859      | 0.500        | 0.022 (0.009)    | 0.972 (0.417)    | 0 (0.000) |    16.44 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     1573 | 2024-04-18 | Young Ninjas      | L   | 0.847      | -            | -                | -                | -         |   -14.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     1607 | 2024-04-18 | Enterprise        | L   | 0.845      | -            | -                | -                | -         |   -10.82 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     1804 | 2024-04-10 | B8                | W   | 0.792      | 0.384        | 0.160 (0.049)    | 1.000 (0.304)    | 0 (0.000) |    17.93 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     1947 | 2024-04-05 | SINNERS           | L   | 0.760      | -            | -                | -                | -         |    -5.81 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     2090 | 2024-04-01 | Sashi             | W   | 0.731      | 0.384        | 0.174 (0.049)    | 1.000 (0.281)    | 0 (0.000) |    17.01 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     2199 | 2024-03-25 | Sashi             | L   | 0.686      | -            | -                | -                | -         |    -5.28 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     2460 | 2024-03-12 | Nemiga            | W   | 0.600      | 0.372        | 0.335 (0.075)    | 0.638 (0.142)    | 0 (0.000) |    16.91 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     2482 | 2024-03-11 | RUBY              | W   | 0.593      | 0.372        | 0.022 (0.005)    | 0.555 (0.123)    | -         |    10.17 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2521 | 2024-03-09 | INGLORIOUS        | W   | 0.580      | -            | -                | -                | -         |     2.89 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2547 | 2024-03-08 | FAVBET            | W   | 0.573      | 0.372        | -                | 0.333 (0.071)    | -         |     6.63 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2694 | 2024-03-03 | TSM               | L   | 0.540      | -            | -                | -                | -         |   -11.08 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2940 | 2024-02-20 | M1X KS            | L   | 0.459      | -            | -                | -                | -         |    -3.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2962 | 2024-02-19 | Monte             | L   | 0.453      | -            | -                | -                | -         |    -1.08 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2967 | 2024-02-19 | Astralis          | L   | 0.452      | -            | -                | -                | -         |    -0.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     3267 | 2024-02-03 | 500               | L   | 0.346      | -            | -                | -                | -         |    -7.50 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     3269 | 2024-02-03 | Jake Bube         | W   | 0.346      | -            | -                | -                | -         |     0.69 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     3278 | 2024-02-03 | AIRLYA            | L   | 0.345      | -            | -                | -                | -         |    -9.75 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     3535 | 2024-01-21 | ex-sYnck          | W   | 0.259      | -            | -                | -                | -         |     0.95 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     3566 | 2024-01-20 | OG                | L   | 0.253      | -            | -                | -                | -         |    -1.21 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3578 | 2024-01-20 | BIG               | W   | 0.252      | 0.143        | 0.228 (0.008)    | -                | -         |     7.62 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3614 | 2024-01-19 | SINNERS           | W   | 0.247      | -            | -                | -                | -         |     6.19 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3671 | 2024-01-18 | Gaimin Gladiators | L   | 0.240      | -            | -                | -                | -         |    -0.94 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3693 | 2024-01-18 | 9 Pandas          | L   | 0.239      | -            | -                | -                | -         |    -1.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3766 | 2024-01-16 | Endpoint          | W   | 0.228      | -            | -                | -                | -         |     3.90 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3781 | 2024-01-16 | FAVBET            | W   | 0.227      | -            | -                | -                | -         |     2.49 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3792 | 2024-01-16 | Alliance          | W   | 0.227      | -            | -                | -                | -         |     3.83 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3888 | 2024-01-13 | OG                | L   | 0.206      | -            | -                | -                | -         |    -0.90 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     3923 | 2024-01-12 | Gucci Academy     | W   | 0.201      | -            | -                | -                | -         |     0.78 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4043 | 2024-01-09 | Fraud5            | L   | 0.180      | -            | -                | -                | -         |    -4.17 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4108 | 2023-12-18 | Astralis Talent   | L   | 0.031      | -            | -                | -                | -         |    -0.50 | BTN, ragga, s0und, smekk-, XELLOW    |
|            1 |     4132 | 2023-12-17 | brazylijski luz   | L   | 0.025      | -            | -                | -                | -         |    -0.49 | BTN, ragga, s0und, smekk-, XELLOW    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,891.42)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.940 | $1,000.00      | $939.79         |
| 2024-03-25 |      0.686 | $4,300.00      | $2,951.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
