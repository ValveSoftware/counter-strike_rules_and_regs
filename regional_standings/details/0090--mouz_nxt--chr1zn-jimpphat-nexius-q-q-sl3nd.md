### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  833.4<br />
<br />
Final Rank Value (833.4) = Starting Rank Value (822.5) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.152[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.5
- 400 + ( ( 0.206 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 822.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      104 | 2023-02-07 | VOYVODA              | L   | 1.000      | -            | -                | -                | -         |   -21.81 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           42 |      136 | 2023-02-05 | Atlantic             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.11 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           41 |      149 | 2023-02-05 | Forward              | L   | 1.000      | -            | -                | -                | -         |   -17.46 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           40 |      158 | 2023-02-05 | Aurora               | L   | 1.000      | -            | -                | -                | -         |    -7.02 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           39 |      165 | 2023-02-04 | GODSENT              | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.330 (0.143)    | 0 (0.000) |    15.50 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           38 |      176 | 2023-02-04 | Eternal Fire Academy | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.64 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           37 |      207 | 2023-02-02 | Tricked              | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | 0 (0.000) |    18.11 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           36 |      227 | 2023-02-01 | ONYX                 | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.92 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           35 |      233 | 2023-02-01 | HAVU                 | L   | 1.000      | -            | -                | -                | -         |    -8.04 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           34 |      263 | 2023-01-31 | ENCE Academy         | W   | 1.000      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |     9.29 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           33 |      285 | 2023-01-30 | PROSPECTS            | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | 0 (0.000) |    18.45 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           32 |      371 | 2023-01-27 | Young Ninjas         | W   | 1.000      | 0.435        | 0.076 (0.033)    | 0.694 (0.302)    | 0 (0.000) |    21.41 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           31 |      451 | 2023-01-25 | 9INE                 | L   | 1.000      | -            | -                | -                | -         |    -9.61 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           30 |      501 | 2023-01-23 | UNGENTIUM            | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.474 (0.068)    | 0 (0.000) |    16.45 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           29 |      515 | 2023-01-22 | EC Brugge            | W   | 1.000      | 0.143        | -                | 0.507 (0.072)    | 0 (0.000) |    11.98 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           28 |      547 | 2023-01-21 | Illuminar            | L   | 1.000      | -            | -                | -                | -         |    -8.22 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           27 |      553 | 2023-01-21 | EC Brugge            | W   | 1.000      | 0.143        | -                | 0.507 (0.072)    | -         |    12.45 | Chr1zN, Jimpphat, Nexius, Q-Q, sl3nd  |
|           26 |     1035 | 2022-12-08 | Anonymo              | L   | 0.760      | -            | -                | -                | -         |   -16.48 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           25 |     1061 | 2022-12-07 | AVANGAR              | L   | 0.754      | -            | -                | -                | -         |   -11.53 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           24 |     1105 | 2022-12-06 | RedPack              | W   | 0.747      | -            | -                | -                | -         |     2.33 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           23 |     1552 | 2022-11-19 | NAVI Junior          | L   | 0.633      | -            | -                | -                | -         |   -10.71 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           22 |     1567 | 2022-11-18 | Spirit Academy       | L   | 0.626      | -            | -                | -                | -         |    -7.82 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           21 |     1700 | 2022-11-06 | Believe              | L   | 0.546      | -            | -                | -                | -         |    -9.07 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           20 |     1724 | 2022-11-05 | Eternal Fire Academy | W   | 0.539      | -            | -                | -                | -         |     3.15 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           19 |     1728 | 2022-11-04 | OG Academy           | W   | 0.534      | -            | -                | -                | -         |     6.83 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           18 |     1735 | 2022-11-03 | Believe              | L   | 0.526      | -            | -                | -                | -         |    -8.61 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           17 |     1773 | 2022-10-31 | Flames Ascent        | W   | 0.507      | -            | -                | -                | -         |     4.13 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           16 |     1776 | 2022-10-31 | OG Academy           | W   | 0.507      | 0.500        | 0.005 (0.001)    | 0.161 (0.041)    | -         |     6.72 | Chr1zN, Jimpphat, Nexius, Q-Q, shield |
|           15 |     1831 | 2022-10-28 | FURIA Academy        | L   | 0.485      | -            | -                | -                | -         |    -9.51 | Chr1zN, Jimpphat, Nexius, Q-Q, TOBIZ  |
|           14 |     1833 | 2022-10-28 | OG Academy           | W   | 0.485      | 0.500        | 0.005 (0.001)    | 0.161 (0.039)    | -         |     6.08 | Chr1zN, Jimpphat, Nexius, Q-Q, TOBIZ  |
|           13 |     1863 | 2022-10-26 | Believe              | L   | 0.473      | -            | -                | -                | -         |    -7.81 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|           12 |     1896 | 2022-10-25 | Apeks Rebels         | L   | 0.465      | -            | -                | -                | -         |    -8.98 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|           11 |     1914 | 2022-10-24 | Flames Ascent        | W   | 0.458      | -            | -                | -                | -         |     3.88 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|           10 |     2075 | 2022-10-18 | Apeks Rebels         | W   | 0.418      | 0.500        | 0.010 (0.002)    | -                | -         |     5.36 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            9 |     2082 | 2022-10-17 | FURIA Academy        | W   | 0.413      | -            | -                | -                | -         |     3.34 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            8 |     2090 | 2022-10-17 | NAVI Junior          | L   | 0.412      | -            | -                | -                | -         |    -7.37 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            7 |     2107 | 2022-10-16 | Believe              | W   | 0.406      | 0.500        | 0.006 (0.001)    | 0.344 (0.070)    | -         |     6.69 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            6 |     2121 | 2022-10-16 | NAVI Junior          | L   | 0.405      | -            | -                | -                | -         |    -7.29 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            5 |     2153 | 2022-10-15 | OG Academy           | W   | 0.398      | -            | -                | -                | -         |     4.45 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            4 |     2252 | 2022-10-12 | Flames Ascent        | W   | 0.380      | -            | -                | -                | -         |     3.34 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q   |
|            3 |     2792 | 2022-09-21 | BIG Academy          | L   | 0.239      | -            | -                | -                | -         |    -1.77 | Chr1zN, Jimpphat, Nexius, Q-Q, zyyx   |
|            2 |     2836 | 2022-09-19 | 500                  | L   | 0.225      | -            | -                | -                | -         |    -1.43 | Chr1zN, Jimpphat, Nexius, Q-Q, zyyx   |
|            1 |     2863 | 2022-09-18 | ex-Into the Breach   | L   | 0.219      | -            | -                | -                | -         |    -3.15 | Chr1zN, Jimpphat, Nexius, Q-Q, zyyx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,121.74)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-11-20 |      0.640 | $8,000.00      | $5,121.74       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
