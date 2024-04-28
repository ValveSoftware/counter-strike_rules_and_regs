### Roster Details<br />
Team Name: Illuminar<br />
Roster: bnox, leman, mASKED, morelz, TOAO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1003.1<br />
<br />
Final Rank Value (1003.1) = Starting Rank Value (1028.2) + Head To Head Adjustments (-25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1028.2
- 400 + ( ( 0.307 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1028.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       28 | 2023-02-11 | HONORIS            | W   | 1.000      | 0.435        | -                | 0.748 (0.325)    | 0 (0.000) |     9.99 | bnox, leman, mASKED, morelz, TOAO  |
|           55 |       88 | 2023-02-08 | IKLA               | L   | 1.000      | -            | -                | -                | -         |   -18.57 | bnox, byali, mASKED, morelz, TOAO  |
|           54 |       90 | 2023-02-08 | UNGENTIUM          | W   | 1.000      | 0.435        | -                | 0.474 (0.206)    | 0 (0.000) |     6.36 | bnox, byali, mASKED, morelz, TOAO  |
|           53 |      103 | 2023-02-07 | Nexus              | L   | 1.000      | -            | -                | -                | -         |   -22.50 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           52 |      128 | 2023-02-06 | Aurora             | L   | 1.000      | -            | -                | -                | -         |   -12.67 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           51 |      154 | 2023-02-05 | forZe              | W   | 1.000      | 0.435        | 0.047 (0.021)    | 0.708 (0.308)    | 0 (0.000) |    16.92 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           50 |      175 | 2023-02-04 | Evil Geniuses      | W   | 1.000      | 0.435        | 0.062 (0.027)    | -                | 0 (0.000) |    17.53 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           49 |      287 | 2023-01-30 | 9INE               | W   | 1.000      | 0.435        | 0.045 (0.020)    | 1.000 (0.435)    | 0 (0.000) |    15.31 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           48 |      355 | 2023-01-28 | EYEBALLERS         | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.776 (0.337)    | 0 (0.000) |    13.24 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           47 |      455 | 2023-01-25 | BLUEJAYS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.32 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           46 |      494 | 2023-01-23 | Nexus              | W   | 1.000      | -            | -                | -                | -         |     9.68 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           45 |      547 | 2023-01-21 | MOUZ NXT           | W   | 1.000      | -            | -                | -                | -         |     8.22 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           44 |      556 | 2023-01-21 | Pepsilon           | W   | 1.000      | -            | -                | -                | -         |     1.33 | bnox, mASKED, morelz, TOAO, zaNNN  |
|           43 |     1087 | 2022-12-07 | PROSPECTS          | L   | 0.752      | -            | -                | -                | -         |   -12.98 | asran, mASKED, morelz, szejn, TOAO |
|           42 |     1149 | 2022-12-05 | AVANGAR            | L   | 0.739      | -            | -                | -                | -         |   -17.13 | byali, mASKED, morelz, szejn, TOAO |
|           41 |     1165 | 2022-12-04 | EC Brugge          | L   | 0.734      | -            | -                | -                | -         |   -18.17 | asran, byali, mASKED, morelz, TOAO |
|           40 |     1210 | 2022-12-03 | UNGENTIUM          | W   | 0.727      | 0.417        | -                | 0.474 (0.143)    | 1 (0.727) |     5.81 | EXUS, mASKED, morelz, reatz, TOAO  |
|           39 |     1259 | 2022-12-02 | ECLOT              | L   | 0.718      | -            | -                | -                | -         |   -12.11 | byali, mASKED, morelz, szejn, TOAO |
|           38 |     1313 | 2022-11-30 | MASONIC            | W   | 0.705      | 0.435        | 0.021 (0.007)    | 0.752 (0.230)    | -         |     7.60 | byali, mASKED, morelz, szejn, TOAO |
|           37 |     1353 | 2022-11-28 | eSuba              | L   | 0.694      | -            | -                | -                | -         |   -13.68 | byali, mASKED, morelz, szejn, TOAO |
|           36 |     1417 | 2022-11-26 | 777                | W   | 0.680      | -            | -                | -                | -         |     3.38 | byali, mASKED, morelz, szejn, TOAO |
|           35 |     1449 | 2022-11-25 | ex-Into the Breach | L   | 0.674      | -            | -                | -                | -         |   -15.91 | byali, mASKED, morelz, szejn, TOAO |
|           34 |     1481 | 2022-11-24 | ThunderFlash       | W   | 0.666      | -            | -                | -                | 1 (0.666) |     3.10 | EXUS, mASKED, morelz, reatz, TOAO  |
|           33 |     1522 | 2022-11-21 | GenOne             | W   | 0.647      | 0.143        | 0.300 (0.028)    | -                | -         |    12.80 | byali, mASKED, morelz, szejn, TOAO |
|           32 |     1543 | 2022-11-20 | K23                | L   | 0.638      | -            | -                | -                | -         |   -12.67 | byali, mASKED, morelz, szejn, TOAO |
|           31 |     1548 | 2022-11-19 | 777                | W   | 0.633      | -            | -                | -                | -         |     2.86 | byali, mASKED, morelz, szejn, TOAO |
|           30 |     1559 | 2022-11-19 | Apeks Rebels       | W   | 0.631      | -            | -                | -                | -         |     3.92 | byali, mASKED, morelz, szejn, TOAO |
|           29 |     1569 | 2022-11-18 | 9INE               | W   | 0.626      | 0.426        | 0.045 (0.012)    | 1.000 (0.267)    | -         |     8.06 | byali, mASKED, morelz, szejn, TOAO |
|           28 |     1619 | 2022-11-16 | Endpoint           | W   | 0.613      | 0.426        | 0.033 (0.009)    | 0.641 (0.167)    | -         |     7.40 | byali, mASKED, morelz, szejn, TOAO |
|           27 |     1704 | 2022-11-06 | Tricked            | W   | 0.545      | 0.426        | 0.034 (0.008)    | 0.954 (0.222)    | -         |     8.78 | byali, mASKED, morelz, szejn, TOAO |
|           26 |     1706 | 2022-11-06 | Believe            | W   | 0.545      | -            | -                | -                | -         |     4.34 | byali, mASKED, morelz, szejn, TOAO |
|           25 |     2222 | 2022-10-13 | Rapid Ninjas       | L   | 0.385      | -            | -                | -                | -         |   -11.09 | EXUS, mASKED, morelz, reatz, TOAO  |
|           24 |     2251 | 2022-10-12 | PACT               | W   | 0.380      | -            | -                | -                | -         |     2.74 | EXUS, mASKED, morelz, reatz, TOAO  |
|           23 |     2275 | 2022-10-11 | PACT               | L   | 0.373      | -            | -                | -                | -         |    -9.15 | EXUS, mASKED, morelz, reatz, TOAO  |
|           22 |     2328 | 2022-10-08 | Sangal             | L   | 0.352      | -            | -                | -                | -         |    -6.37 | EXUS, mASKED, morelz, reatz, TOAO  |
|           21 |     2350 | 2022-10-07 | FANTASY            | W   | 0.345      | -            | -                | -                | 1 (0.345) |     0.54 | EXUS, mASKED, morelz, reatz, TOAO  |
|           20 |     2401 | 2022-10-05 | OG                 | L   | 0.332      | -            | -                | -                | -         |    -0.60 | EXUS, mASKED, morelz, reatz, TOAO  |
|           19 |     2417 | 2022-10-04 | Natus Vincere      | L   | 0.327      | -            | -                | -                | -         |    -0.23 | EXUS, mASKED, morelz, reatz, TOAO  |
|           18 |     2548 | 2022-09-28 | Astralis Talent    | W   | 0.286      | -            | -                | -                | -         |     3.21 | EXUS, mASKED, morelz, reatz, TOAO  |
|           17 |     2559 | 2022-09-28 | Lilmix             | W   | 0.285      | -            | -                | -                | -         |     1.66 | EXUS, mASKED, morelz, reatz, TOAO  |
|           16 |     2564 | 2022-09-28 | ex-Finest          | L   | 0.284      | -            | -                | -                | -         |    -7.47 | EXUS, mASKED, morelz, reatz, TOAO  |
|           15 |     2670 | 2022-09-24 | los kogutos        | W   | 0.258      | -            | -                | -                | -         |     1.88 | EXUS, mASKED, morelz, reatz, TOAO  |
|           14 |     2782 | 2022-09-21 | 500                | W   | 0.240      | 0.435        | 0.085 (0.009)    | -                | -         |     4.34 | EXUS, mASKED, morelz, reatz, TOAO  |
|           13 |     2816 | 2022-09-20 | ex-Into the Breach | L   | 0.232      | -            | -                | -                | -         |    -5.18 | EXUS, mASKED, morelz, reatz, TOAO  |
|           12 |     3118 | 2022-09-10 | HONORIS            | L   | 0.167      | -            | -                | -                | -         |    -3.70 | EXUS, mASKED, morelz, reatz, TOAO  |
|           11 |     3149 | 2022-09-10 | UNGENTIUM          | L   | 0.165      | -            | -                | -                | -         |    -3.89 | EXUS, mASKED, morelz, reatz, TOAO  |
|           10 |     3437 | 2022-08-30 | Beyond Possible    | L   | 0.092      | -            | -                | -                | -         |    -2.75 | EXUS, mASKED, morelz, reatz, TOAO  |
|            9 |     3450 | 2022-08-29 | Monte              | L   | 0.086      | -            | -                | -                | -         |    -1.75 | EXUS, mASKED, morelz, reatz, TOAO  |
|            8 |     3458 | 2022-08-28 | Forward            | W   | 0.081      | -            | -                | -                | -         |     0.52 | EXUS, mASKED, morelz, reatz, TOAO  |
|            7 |     3464 | 2022-08-28 | Benched Heroes     | L   | 0.080      | -            | -                | -                | -         |    -2.39 | EXUS, mASKED, morelz, reatz, TOAO  |
|            6 |     3493 | 2022-08-27 | Astralis           | L   | 0.074      | -            | -                | -                | -         |    -0.38 | EXUS, mASKED, morelz, reatz, TOAO  |
|            5 |     3500 | 2022-08-27 | Websterz           | W   | 0.073      | -            | -                | -                | -         |     0.71 | EXUS, mASKED, morelz, reatz, TOAO  |
|            4 |     3515 | 2022-08-27 | 500                | W   | 0.073      | -            | -                | -                | -         |     1.30 | EXUS, mASKED, morelz, reatz, TOAO  |
|            3 |     3536 | 2022-08-27 | MASONIC            | W   | 0.072      | -            | -                | -                | -         |     0.78 | EXUS, mASKED, morelz, reatz, TOAO  |
|            2 |     3582 | 2022-08-25 | ECLOT              | L   | 0.057      | -            | -                | -                | -         |    -0.93 | EXUS, mASKED, morelz, reatz, TOAO  |
|            1 |     3636 | 2022-08-23 | EYEBALLERS         | W   | 0.044      | -            | -                | -                | -         |     0.52 | EXUS, mASKED, morelz, reatz, TOAO  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,663.62)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $5,000.00      | $5,000.00       |
| 2022-12-03 |      0.727 | $19,895.00     | $14,462.26      |
| 2022-11-20 |      0.640 | $5,000.00      | $3,201.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
