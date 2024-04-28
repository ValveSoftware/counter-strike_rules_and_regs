### Roster Details<br />
Team Name: Falcons<br />
Roster: bodyy, kennyS, misutaaa, NBK-, Python<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1024.9<br />
<br />
Final Rank Value (1024.9) = Starting Rank Value (981.4) + Head To Head Adjustments (43.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.261[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.4
- 400 + ( ( 0.284 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 981.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |       37 | 2023-02-11 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -12.74 | bodyy, kennyS, misutaaa, NBK-, Python |
|           57 |      123 | 2023-02-06 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -13.06 | bodyy, kennyS, misutaaa, NBK-, Python |
|           56 |      137 | 2023-02-05 | GODSENT           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.87 | bodyy, kennyS, misutaaa, NBK-, Python |
|           55 |      156 | 2023-02-05 | GamerLegion       | W   | 1.000      | 0.477        | 0.105 (0.050)    | 0.469 (0.224)    | 0 (0.000) |    18.34 | bodyy, kennyS, misutaaa, NBK-, Python |
|           54 |      193 | 2023-02-03 | Nexus             | W   | 1.000      | 0.477        | -                | 0.542 (0.259)    | 0 (0.000) |     9.07 | bodyy, kennyS, misutaaa, NBK-, Python |
|           53 |      199 | 2023-02-03 | MASONIC           | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.752 (0.359)    | 0 (0.000) |     9.34 | bodyy, kennyS, misutaaa, NBK-, Python |
|           52 |      208 | 2023-02-02 | Sangal            | W   | 1.000      | 0.477        | -                | 0.684 (0.326)    | 0 (0.000) |    13.37 | bodyy, kennyS, misutaaa, NBK-, Python |
|           51 |      265 | 2023-01-31 | HONORIS           | L   | 1.000      | -            | -                | -                | -         |   -22.24 | bodyy, kennyS, misutaaa, NBK-, Python |
|           50 |      272 | 2023-01-31 | GamerLegion       | W   | 1.000      | 0.143        | 0.105 (0.015)    | -                | 0 (0.000) |    21.11 | bodyy, kennyS, misutaaa, NBK-, Python |
|           49 |      280 | 2023-01-31 | IKLA              | L   | 1.000      | -            | -                | -                | -         |   -18.11 | bodyy, kennyS, misutaaa, NBK-, Python |
|           48 |      305 | 2023-01-29 | Copenhagen Flames | W   | 1.000      | 0.358        | 0.133 (0.048)    | 0.722 (0.258)    | 0 (0.000) |    16.66 | bodyy, kennyS, misutaaa, NBK-, Python |
|           47 |      417 | 2023-01-26 | Rapid Ninjas      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.07 | bodyy, kennyS, misutaaa, NBK-, Python |
|           46 |      422 | 2023-01-26 | Eternal Fire      | W   | 1.000      | 0.358        | 0.034 (0.012)    | 0.496 (0.177)    | -         |    15.19 | bodyy, kennyS, misutaaa, NBK-, Python |
|           45 |      432 | 2023-01-25 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -17.51 | bodyy, kennyS, misutaaa, NBK-, Python |
|           44 |      450 | 2023-01-25 | PROSPECTS         | W   | 1.000      | -            | -                | -                | -         |    11.52 | bodyy, kennyS, misutaaa, NBK-, Python |
|           43 |      514 | 2023-01-22 | Permitta          | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.387 (0.185)    | -         |    13.52 | bodyy, hAdji, kennyS, misutaaa, NBK-  |
|           42 |      563 | 2023-01-20 | forZe             | L   | 1.000      | -            | -                | -                | -         |   -14.55 | hAdji, kennyS, misutaaa, NBK-, Python |
|           41 |      582 | 2023-01-19 | Partizan          | W   | 1.000      | -            | -                | -                | -         |    11.40 | hAdji, kennyS, misutaaa, NBK-, Python |
|           40 |      602 | 2023-01-19 | BIG Academy       | W   | 1.000      | 0.477        | -                | 0.434 (0.207)    | -         |    16.76 | hAdji, kennyS, misutaaa, NBK-, Python |
|           39 |      614 | 2023-01-18 | Permitta          | W   | 1.000      | -            | -                | -                | -         |    14.74 | hAdji, kennyS, misutaaa, NBK-, Python |
|           38 |      627 | 2023-01-18 | PGE Turow         | W   | 1.000      | -            | -                | -                | -         |     2.46 | hAdji, kennyS, misutaaa, NBK-, Python |
|           37 |      645 | 2023-01-17 | Sprout            | L   | 1.000      | -            | -                | -                | -         |    -7.00 | hAdji, kennyS, misutaaa, NBK-, Python |
|           36 |      654 | 2023-01-17 | Partizan          | L   | 1.000      | -            | -                | -                | -         |   -19.11 | hAdji, kennyS, misutaaa, NBK-, Python |
|           35 |      663 | 2023-01-16 | SINNERS           | W   | 1.000      | 0.143        | 0.068 (0.010)    | -                | -         |    16.01 | hAdji, kennyS, misutaaa, NBK-, Python |
|           34 |      807 | 2022-12-17 | SINNERS           | W   | 0.820      | -            | -                | -                | -         |    15.08 | hAdji, kennyS, misutaaa, NBK-, Python |
|           33 |      833 | 2022-12-16 | los kogutos       | W   | 0.814      | -            | -                | -                | -         |     8.13 | hAdji, kennyS, misutaaa, NBK-, Python |
|           32 |     1015 | 2022-12-09 | EYEBALLERS        | W   | 0.766      | 0.477        | -                | 0.776 (0.283)    | -         |    11.56 | hAdji, kennyS, misutaaa, NBK-, Python |
|           31 |     1086 | 2022-12-07 | Tricked           | L   | 0.752      | -            | -                | -                | -         |    -9.75 | hAdji, kennyS, misutaaa, NBK-, Python |
|           30 |     1173 | 2022-12-04 | Monte             | W   | 0.733      | 0.477        | 0.029 (0.010)    | 0.945 (0.330)    | -         |    13.12 | hAdji, kennyS, misutaaa, NBK-, Python |
|           29 |     1217 | 2022-12-03 | Permitta          | W   | 0.726      | 0.477        | 0.034 (0.012)    | -                | -         |    10.65 | hAdji, kennyS, misutaaa, NBK-, Python |
|           28 |     1363 | 2022-11-28 | ECSTATIC          | L   | 0.692      | -            | -                | -                | -         |   -12.97 | hAdji, kennyS, misutaaa, NBK-, Python |
|           27 |     1424 | 2022-11-26 | Anonymo           | L   | 0.679      | -            | -                | -                | -         |   -18.07 | hAdji, kennyS, misutaaa, NBK-, Python |
|           26 |     1484 | 2022-11-24 | ECLOT             | L   | 0.665      | -            | -                | -                | -         |    -9.52 | hAdji, kennyS, misutaaa, NBK-, Python |
|           25 |     1511 | 2022-11-22 | 9INE              | L   | 0.654      | -            | -                | -                | -         |   -10.31 | hAdji, kennyS, misutaaa, NBK-, Python |
|           24 |     1557 | 2022-11-19 | Copenhagen Flames | L   | 0.632      | -            | -                | -                | -         |    -8.05 | hAdji, kennyS, misutaaa, NBK-, Python |
|           23 |     1612 | 2022-11-16 | LDLC              | W   | 0.613      | -            | -                | -                | -         |     4.88 | hAdji, kennyS, misutaaa, NBK-, Python |
|           22 |     1756 | 2022-11-01 | AGO               | L   | 0.513      | -            | -                | -                | -         |   -11.55 | hAdji, Kyojin, misutaaa, NBK-, Python |
|           21 |     1862 | 2022-10-26 | HEET              | L   | 0.473      | -            | -                | -                | -         |    -8.00 | hAdji, Kyojin, misutaaa, NBK-, Python |
|           20 |     1880 | 2022-10-25 | GenOne            | W   | 0.467      | 0.333        | 0.300 (0.047)    | -                | -         |    10.55 | hAdji, Kyojin, misutaaa, NBK-, Python |
|           19 |     2021 | 2022-10-20 | HAVU              | L   | 0.432      | -            | -                | -                | -         |    -7.23 | hAdji, Maka, misutaaa, NBK-, Python   |
|           18 |     2038 | 2022-10-19 | HEET              | L   | 0.427      | -            | -                | -                | -         |    -7.38 | hAdji, Maka, misutaaa, NBK-, Python   |
|           17 |     2057 | 2022-10-18 | EPG Family        | L   | 0.420      | -            | -                | -                | -         |    -9.65 | hAdji, Maka, misutaaa, NBK-, Python   |
|           16 |     2305 | 2022-10-09 | Outsiders         | L   | 0.360      | -            | -                | -                | -         |    -0.31 | hAdji, Maka, misutaaa, NBK-, Python   |
|           15 |     2326 | 2022-10-08 | HEET              | W   | 0.352      | -            | -                | -                | 1 (0.352) |     5.05 | hAdji, Maka, misutaaa, NBK-, Python   |
|           14 |     2370 | 2022-10-06 | OG                | L   | 0.338      | -            | -                | -                | -         |    -0.52 | hAdji, Maka, misutaaa, NBK-, Python   |
|           13 |     2392 | 2022-10-05 | ENCE              | L   | 0.333      | -            | -                | -                | -         |    -1.80 | hAdji, Maka, misutaaa, NBK-, Python   |
|           12 |     2422 | 2022-10-04 | K23               | W   | 0.326      | -            | -                | -                | 1 (0.326) |     1.05 | hAdji, Maka, misutaaa, NBK-, Python   |
|           11 |     2990 | 2022-09-14 | ECSTATIC          | W   | 0.194      | -            | -                | -                | -         |     2.21 | hAdji, Maka, misutaaa, NBK-, Python   |
|           10 |     3025 | 2022-09-13 | Bad News Eagles   | L   | 0.187      | -            | -                | -                | -         |    -1.71 | hAdji, Maka, misutaaa, NBK-, Python   |
|            9 |     3233 | 2022-09-07 | ECSTATIC          | W   | 0.147      | -            | -                | -                | -         |     1.72 | hAdji, Maka, misutaaa, NBK-, Python   |
|            8 |     3297 | 2022-09-04 | 1WIN              | L   | 0.124      | -            | -                | -                | -         |    -2.58 | hAdji, Maka, misutaaa, NBK-, Python   |
|            7 |     3332 | 2022-09-03 | ECLOT             | W   | 0.118      | -            | -                | -                | -         |     2.06 | hAdji, Maka, misutaaa, NBK-, Python   |
|            6 |     3386 | 2022-09-01 | 500               | W   | 0.106      | -            | -                | -                | -         |     2.12 | hAdji, Maka, misutaaa, NBK-, Python   |
|            5 |     3416 | 2022-08-31 | LDLC              | L   | 0.099      | -            | -                | -                | -         |    -2.53 | hAdji, Maka, misutaaa, NBK-, Python   |
|            4 |     3440 | 2022-08-30 | Ambush            | W   | 0.092      | -            | -                | -                | -         |     0.11 | hAdji, Maka, misutaaa, NBK-, Python   |
|            3 |     3762 | 2022-08-17 | Sprout            | L   | 0.006      | -            | -                | -                | -         |    -0.05 | hAdji, Maka, misutaaa, NBK-, Python   |
|            2 |     3765 | 2022-08-17 | Aurora            | W   | 0.006      | -            | -                | -                | -         |     0.03 | hAdji, Maka, misutaaa, NBK-, Python   |
|            1 |     3788 | 2022-08-16 | OG                | W   | 0.001      | -            | -                | -                | -         |     0.03 | hAdji, Maka, misutaaa, NBK-, Python   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,367.15)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-11 |      1.000 | $3,201.00      | $3,201.00       |
| 2023-02-06 |      1.000 | $15,000.00     | $15,000.00      |
| 2022-11-20 |      0.640 | $1,250.00      | $800.34         |
| 2022-10-26 |      0.473 | $2,468.00      | $1,167.68       |
| 2022-10-23 |      0.454 | $1,250.00      | $567.34         |
| 2022-09-04 |      0.126 | $5,000.00      | $630.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
