### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: flusha, JW, Peppzor, Sapec, SHiNE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  928.4<br />
<br />
Final Rank Value (928.4) = Starting Rank Value (933.5) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.223[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 933.5
- 400 + ( ( 0.261 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 933.5


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
|           64 |       32 | 2023-02-11 | Young Ninjas       | L   | 1.000      | -            | -                | -                | -         |   -15.86 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           63 |       70 | 2023-02-09 | HONORIS            | W   | 1.000      | 0.435        | 0.011 (0.005)    | 0.748 (0.325)    | 0 (0.000) |    13.32 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           62 |      112 | 2023-02-07 | Spirit Academy     | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.447 (0.194)    | 0 (0.000) |    14.32 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           61 |      133 | 2023-02-06 | 500                | W   | 1.000      | 0.384        | 0.085 (0.033)    | 0.760 (0.292)    | 0 (0.000) |    18.57 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           60 |      169 | 2023-02-04 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -2.75 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           59 |      214 | 2023-02-02 | GTZ                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.22 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           58 |      222 | 2023-02-02 | BLUEJAYS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.36 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           57 |      249 | 2023-02-01 | Partizan           | L   | 1.000      | -            | -                | -                | -         |   -14.50 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           56 |      275 | 2023-01-31 | PROSPECTS          | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | 0 (0.000) |    13.90 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           55 |      313 | 2023-01-29 | forZe              | L   | 1.000      | -            | -                | -                | -         |   -10.22 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           54 |      345 | 2023-01-28 | HEET               | L   | 1.000      | -            | -                | -                | -         |   -22.29 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           53 |      355 | 2023-01-28 | Illuminar          | L   | 1.000      | -            | -                | -                | -         |   -13.24 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           52 |      411 | 2023-01-26 | Monte              | L   | 1.000      | -            | -                | -                | -         |   -12.55 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           51 |      440 | 2023-01-25 | Tricked            | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | 0 (0.000) |    14.40 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           50 |      503 | 2023-01-23 | ALTERNATE aTTaX    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.59 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           49 |      586 | 2023-01-19 | JANO               | W   | 1.000      | -            | -                | -                | -         |     9.20 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           48 |      599 | 2023-01-19 | nomix              | W   | 1.000      | -            | -                | -                | -         |     1.70 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           47 |      608 | 2023-01-19 | PROSPECTS          | W   | 1.000      | 0.143        | 0.032 (0.005)    | -                | -         |    16.20 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           46 |      641 | 2023-01-17 | ex-Finest          | L   | 1.000      | -            | -                | -                | -         |   -16.72 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           45 |      651 | 2023-01-17 | ECSTATIC           | W   | 1.000      | 0.143        | 0.030 (0.004)    | -                | -         |    12.14 | flusha, JW, Peppzor, Sapec, SHiNE   |
|           44 |      755 | 2022-12-19 | HEET               | W   | 0.833      | -            | -                | -                | -         |     8.25 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           43 |      766 | 2022-12-18 | IKLA               | W   | 0.827      | -            | -                | -                | -         |    15.82 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           42 |      838 | 2022-12-16 | UNGENTIUM          | L   | 0.813      | -            | -                | -                | -         |   -15.40 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           41 |      915 | 2022-12-13 | Apeks              | L   | 0.792      | -            | -                | -                | -         |    -9.11 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           40 |      941 | 2022-12-11 | los kogutos        | W   | 0.781      | -            | -                | -                | -         |     9.15 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           39 |      958 | 2022-12-11 | Nexus              | L   | 0.779      | -            | -                | -                | -         |   -16.80 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           38 |      991 | 2022-12-10 | ex-Into the Breach | W   | 0.772      | 0.371        | -                | 0.520 (0.149)    | -         |    11.31 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           37 |     1015 | 2022-12-09 | Falcons            | L   | 0.766      | -            | -                | -                | -         |   -11.56 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           36 |     1045 | 2022-12-08 | Monte              | L   | 0.759      | -            | -                | -                | -         |   -10.59 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           35 |     1083 | 2022-12-07 | LDLC               | W   | 0.753      | 0.371        | -                | 0.418 (0.117)    | -         |     6.66 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           34 |     1109 | 2022-12-06 | allStars           | W   | 0.747      | -            | -                | -                | -         |     3.83 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           33 |     1128 | 2022-12-06 | GenOne             | W   | 0.745      | 0.477        | 0.300 (0.107)    | 0.400 (0.142)    | -         |    17.39 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           32 |     1177 | 2022-12-04 | ex-Into the Breach | W   | 0.733      | 0.477        | -                | 0.520 (0.182)    | -         |    10.30 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           31 |     1213 | 2022-12-03 | PROSPECTS          | L   | 0.727      | -            | -                | -                | -         |    -9.06 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           30 |     1312 | 2022-11-30 | AVANGAR            | L   | 0.705      | -            | -                | -                | -         |   -14.41 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           29 |     1337 | 2022-11-29 | OnlineBOTS         | W   | 0.699      | -            | -                | -                | -         |     1.34 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           28 |     1341 | 2022-11-29 | ALTERNATE aTTaX    | L   | 0.698      | -            | -                | -                | -         |   -13.14 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           27 |     1356 | 2022-11-28 | OnlineBOTS         | W   | 0.693      | -            | -                | -                | -         |     1.16 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           26 |     1463 | 2022-11-25 | Young Ninjas       | L   | 0.672      | -            | -                | -                | -         |    -9.16 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           25 |     1905 | 2022-10-24 | Bad News Eagles    | L   | 0.459      | -            | -                | -                | -         |    -3.22 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           24 |     2113 | 2022-10-16 | Ninjas in Pyjamas  | L   | 0.406      | -            | -                | -                | -         |    -1.52 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           23 |     2149 | 2022-10-15 | ex-Finest          | W   | 0.398      | -            | -                | -                | 1 (0.398) |     3.24 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           22 |     2186 | 2022-10-14 | PROSPECTS          | W   | 0.393      | 0.429        | 0.032 (0.005)    | 0.689 (0.116)    | 1 (0.393) |     7.01 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           21 |     2215 | 2022-10-13 | BLUEJAYS           | W   | 0.386      | 0.384        | 0.102 (0.015)    | -                | -         |     8.58 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           20 |     2287 | 2022-10-11 | ECSTATIC           | W   | 0.371      | -            | -                | -                | -         |     5.46 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           19 |     2543 | 2022-09-28 | Iron Branch        | L   | 0.287      | -            | -                | -                | -         |    -7.01 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           18 |     2580 | 2022-09-27 | ECLOT              | L   | 0.278      | -            | -                | -                | -         |    -3.12 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           17 |     2595 | 2022-09-26 | Aurora             | L   | 0.273      | -            | -                | -                | -         |    -6.72 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           16 |     2713 | 2022-09-23 | OneTap             | W   | 0.252      | -            | -                | -                | -         |     2.12 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           15 |     2778 | 2022-09-21 | Iron Branch        | W   | 0.241      | -            | -                | -                | -         |     1.56 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           14 |     2795 | 2022-09-21 | Enterprise         | L   | 0.237      | -            | -                | -                | -         |    -4.12 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           13 |     2832 | 2022-09-19 | Nexus              | L   | 0.227      | -            | -                | -                | -         |    -4.72 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           12 |     2837 | 2022-09-19 | Hotspurs           | W   | 0.224      | -            | -                | -                | -         |     0.61 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           11 |     2895 | 2022-09-17 | SINNERS            | L   | 0.212      | -            | -                | -                | -         |    -2.50 | flusha, JW, Sapec, SHiNE, Svedjehed |
|           10 |     3032 | 2022-09-13 | SAW                | L   | 0.185      | -            | -                | -                | -         |    -1.46 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            9 |     3242 | 2022-09-07 | B8                 | W   | 0.145      | -            | -                | -                | -         |     0.61 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            8 |     3398 | 2022-09-01 | ex-Into the Breach | L   | 0.104      | -            | -                | -                | -         |    -2.01 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            7 |     3568 | 2022-08-26 | KOVA               | L   | 0.065      | -            | -                | -                | -         |    -1.75 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            6 |     3581 | 2022-08-25 | JANO               | W   | 0.058      | -            | -                | -                | -         |     0.46 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            5 |     3594 | 2022-08-24 | sYnck              | L   | 0.051      | -            | -                | -                | -         |    -1.17 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            4 |     3624 | 2022-08-23 | Eternal Fire       | L   | 0.046      | -            | -                | -                | -         |    -0.73 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            3 |     3636 | 2022-08-23 | Illuminar          | L   | 0.044      | -            | -                | -                | -         |    -0.52 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            2 |     3683 | 2022-08-21 | GamerLegion        | L   | 0.033      | -            | -                | -                | -         |    -0.22 | flusha, JW, Sapec, SHiNE, Svedjehed |
|            1 |     3689 | 2022-08-21 | ex-Finest          | W   | 0.033      | -            | -                | -                | -         |     0.25 | flusha, JW, Sapec, SHiNE, Svedjehed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,240.33)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-15 |      0.807 | $2,000.00      | $1,614.70       |
| 2022-11-26 |      0.679 | $2,356.00      | $1,599.17       |
| 2022-10-26 |      0.474 | $500.00        | $236.83         |
| 2022-10-16 |      0.406 | $11,800.00     | $4,789.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
