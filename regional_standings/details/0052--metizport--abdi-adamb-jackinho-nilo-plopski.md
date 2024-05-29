### Roster Details<br />
Team Name: Metizport<br />
Roster: abdi, adamb, Jackinho, nilo, Plopski<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  1009.2<br />
<br />
Final Rank Value (1009.2) = Starting Rank Value (969.6) + Head To Head Adjustments (39.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.487[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.6
- 400 + ( ( 0.293 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 969.6


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
|           76 |      129 | 2024-05-23 | Space             | L   | 1.000      | -            | -                | -                | -         |   -22.56 | abdi, adamb, Jackinho, nilo, Plopski |
|           75 |      234 | 2024-05-20 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -15.70 | adamb, Jackinho, nilo, Plopski, ztr  |
|           74 |      288 | 2024-05-18 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.118 (0.059)    | 0.327 (0.163)    | 0 (0.000) |    16.65 | adamb, Jackinho, nilo, Plopski, ztr  |
|           73 |      375 | 2024-05-16 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.66 | adamb, Jackinho, nilo, Plopski, ztr  |
|           72 |      559 | 2024-05-11 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -5.30 | adamb, Jackinho, nilo, Plopski, ztr  |
|           71 |      574 | 2024-05-10 | EYEBALLERS        | W   | 1.000      | 0.435        | -                | 0.611 (0.265)    | 0 (0.000) |    10.16 | adamb, Jackinho, nilo, Plopski, ztr  |
|           70 |      699 | 2024-05-04 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -8.34 | adamb, Jackinho, nilo, susp, ztr     |
|           69 |      714 | 2024-05-03 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.147 (0.064)    | 1.000 (0.435)    | 0 (0.000) |    14.62 | adamb, Jackinho, nilo, susp, ztr     |
|           68 |      734 | 2024-05-02 | Sangal            | W   | 1.000      | 0.435        | 0.166 (0.072)    | 0.911 (0.396)    | 0 (0.000) |    17.29 | adamb, Jackinho, nilo, susp, ztr     |
|           67 |      892 | 2024-04-25 | Nexus             | L   | 0.973      | -            | -                | -                | -         |   -21.89 | adamb, Jackinho, nilo, susp, ztr     |
|           66 |      936 | 2024-04-23 | Alliance          | W   | 0.958      | 0.384        | -                | 0.617 (0.227)    | 0 (0.000) |     8.88 | adamb, Jackinho, nilo, p1ke, susp    |
|           65 |     1041 | 2024-04-19 | FURIA             | L   | 0.932      | -            | -                | -                | -         |    -4.33 | adamb, Jackinho, Plopski, susp, ztr  |
|           64 |     1079 | 2024-04-18 | Imperial          | L   | 0.925      | -            | -                | -                | -         |    -2.04 | adamb, Jackinho, Plopski, susp, ztr  |
|           63 |     1361 | 2024-04-09 | ex-Guild Eagles   | L   | 0.865      | -            | -                | -                | -         |   -17.24 | adamb, Jackinho, nilo, susp, ztr     |
|           62 |     1377 | 2024-04-08 | Aurora            | L   | 0.860      | -            | -                | -                | -         |    -3.26 | adamb, Jackinho, nilo, susp, ztr     |
|           61 |     1389 | 2024-04-08 | 9 Pandas          | L   | 0.858      | -            | -                | -                | -         |   -10.04 | adamb, Jackinho, nilo, susp, ztr     |
|           60 |     1414 | 2024-04-07 | EYEBALLERS        | W   | 0.852      | 0.330        | -                | 0.611 (0.172)    | 0 (0.000) |     7.66 | adamb, Jackinho, nilo, susp, ztr     |
|           59 |     1423 | 2024-04-07 | Johnny Speeds     | W   | 0.850      | 0.330        | -                | 0.492 (0.138)    | 0 (0.000) |     9.63 | adamb, Jackinho, nilo, susp, ztr     |
|           58 |     1439 | 2024-04-06 | Young Gods        | W   | 0.844      | -            | -                | -                | -         |     0.75 | adamb, Jackinho, nilo, susp, ztr     |
|           57 |     1491 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.832      | -            | -                | -                | -         |   -11.90 | adamb, Jackinho, nilo, susp, ztr     |
|           56 |     1517 | 2024-04-03 | Monte             | W   | 0.826      | 0.143        | 0.181 (0.021)    | -                | -         |    19.33 | adamb, Jackinho, nilo, susp, ztr     |
|           55 |     1530 | 2024-04-03 | FAVBET            | W   | 0.825      | -            | -                | -                | -         |     5.51 | adamb, Jackinho, nilo, susp, ztr     |
|           54 |     1564 | 2024-04-02 | B8                | W   | 0.819      | 0.143        | 0.165 (0.019)    | -                | -         |    15.51 | adamb, Jackinho, nilo, susp, ztr     |
|           53 |     1570 | 2024-04-02 | Aurora            | L   | 0.818      | -            | -                | -                | -         |    -2.59 | adamb, Jackinho, nilo, susp, ztr     |
|           52 |     1586 | 2024-04-01 | PARIVISION        | L   | 0.812      | -            | -                | -                | -         |   -14.21 | adamb, Jackinho, nilo, susp, ztr     |
|           51 |     1654 | 2024-03-27 | Aurora            | L   | 0.780      | -            | -                | -                | -         |    -2.42 | adamb, Jackinho, nilo, susp, ztr     |
|           50 |     1660 | 2024-03-27 | NAVI Junior       | W   | 0.779      | -            | -                | -                | -         |     3.43 | adamb, Jackinho, nilo, susp, ztr     |
|           49 |     1863 | 2024-03-15 | ECF               | L   | 0.699      | -            | -                | -                | -         |   -17.59 | adamb, Jackinho, nilo, susp, ztr     |
|           48 |     1900 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.692      | -            | -                | -                | -         |   -15.60 | adamb, Jackinho, nilo, susp, ztr     |
|           47 |     1934 | 2024-03-13 | HEROIC            | L   | 0.685      | -            | -                | -                | -         |    -0.65 | adamb, Jackinho, nilo, susp, ztr     |
|           46 |     1957 | 2024-03-12 | B8                | W   | 0.680      | 0.143        | 0.165 (0.016)    | -                | -         |    12.33 | adamb, Jackinho, nilo, susp, ztr     |
|           45 |     1965 | 2024-03-12 | Apeks             | W   | 0.679      | -            | -                | -                | -         |    15.39 | adamb, Jackinho, nilo, susp, ztr     |
|           44 |     1975 | 2024-03-11 | ex-Preasy         | W   | 0.673      | -            | -                | -                | -         |     9.72 | adamb, Jackinho, nilo, susp, ztr     |
|           43 |     1989 | 2024-03-11 | ENCE              | L   | 0.672      | -            | -                | -                | -         |    -1.97 | adamb, Jackinho, nilo, susp, ztr     |
|           42 |     1997 | 2024-03-10 | Spirit            | L   | 0.666      | -            | -                | -                | -         |    -0.13 | adamb, Jackinho, nilo, susp, ztr     |
|           41 |     2024 | 2024-03-09 | Monte             | W   | 0.659      | 0.535        | 0.181 (0.064)    | 0.611 (0.215)    | -         |    17.09 | adamb, Jackinho, nilo, susp, ztr     |
|           40 |     2031 | 2024-03-09 | EYEBALLERS        | L   | 0.658      | -            | -                | -                | -         |   -13.90 | adamb, Jackinho, nilo, susp, ztr     |
|           39 |     2037 | 2024-03-09 | Lemondogs         | W   | 0.658      | -            | -                | -                | -         |     0.64 | adamb, Jackinho, nilo, susp, ztr     |
|           38 |     2055 | 2024-03-08 | Secret            | W   | 0.651      | -            | -                | -                | -         |     1.72 | adamb, Jackinho, nilo, susp, ztr     |
|           37 |     2096 | 2024-03-06 | Falcons           | W   | 0.640      | 0.535        | 0.355 (0.122)    | -                | -         |    18.84 | adamb, Jackinho, nilo, susp, ztr     |
|           36 |     2176 | 2024-03-03 | The Chosen Few    | W   | 0.620      | -            | -                | -                | -         |     3.23 | adamb, Jackinho, nilo, susp, ztr     |
|           35 |     2185 | 2024-03-03 | ILIN              | W   | 0.619      | -            | -                | -                | -         |     1.30 | adamb, Jackinho, nilo, susp, ztr     |
|           34 |     2189 | 2024-03-03 | RUSH B            | W   | 0.619      | -            | -                | -                | -         |     3.45 | adamb, Jackinho, nilo, susp, ztr     |
|           33 |     2198 | 2024-03-03 | ECLOT             | L   | 0.618      | -            | -                | -                | -         |    -8.42 | adamb, Jackinho, nilo, susp, ztr     |
|           32 |     2244 | 2024-02-29 | Endpoint          | W   | 0.598      | -            | -                | -                | -         |     6.27 | adamb, Jackinho, nilo, susp, ztr     |
|           31 |     2281 | 2024-02-27 | ex-Guild Eagles   | L   | 0.585      | -            | -                | -                | -         |    -9.65 | adamb, Jackinho, nilo, susp, ztr     |
|           30 |     2653 | 2024-02-11 | Apeks             | W   | 0.480      | -            | -                | -                | -         |    11.57 | adamb, Jackinho, nilo, susp, ztr     |
|           29 |     2658 | 2024-02-11 | ex-Sprout         | W   | 0.478      | -            | -                | -                | -         |     1.58 | adamb, Jackinho, nilo, susp, ztr     |
|           28 |     2666 | 2024-02-10 | FURIA             | W   | 0.472      | -            | -                | -                | -         |    13.19 | adamb, Jackinho, nilo, susp, ztr     |
|           27 |     2669 | 2024-02-10 | Apeks             | L   | 0.471      | -            | -                | -                | -         |    -3.35 | adamb, Jackinho, nilo, susp, ztr     |
|           26 |     2670 | 2024-02-10 | FURIA             | W   | 0.471      | -            | -                | -                | -         |    13.35 | adamb, Jackinho, nilo, susp, ztr     |
|           25 |     2705 | 2024-02-07 | ex-Sprout         | W   | 0.452      | -            | -                | -                | -         |     1.48 | adamb, Jackinho, nilo, susp, ztr     |
|           24 |     2713 | 2024-02-06 | Into the Breach   | L   | 0.445      | -            | -                | -                | -         |   -11.14 | adamb, Jackinho, nilo, susp, ztr     |
|           23 |     2726 | 2024-02-05 | TSM               | L   | 0.438      | -            | -                | -                | -         |   -10.72 | adamb, Jackinho, nilo, susp, ztr     |
|           22 |     2733 | 2024-02-04 | 500               | L   | 0.433      | -            | -                | -                | -         |   -10.76 | adamb, Jackinho, nilo, susp, ztr     |
|           21 |     2739 | 2024-02-04 | TMVG              | W   | 0.432      | -            | -                | -                | -         |     0.99 | adamb, Jackinho, nilo, susp, ztr     |
|           20 |     2750 | 2024-02-04 | DUSTY             | W   | 0.431      | -            | -                | -                | -         |     2.08 | adamb, Jackinho, nilo, susp, ztr     |
|           19 |     2780 | 2024-02-03 | Sangal            | W   | 0.424      | 0.371        | 0.166 (0.026)    | 0.911 (0.143)    | -         |     8.38 | adamb, Jackinho, nilo, susp, ztr     |
|           18 |     2792 | 2024-02-02 | EYEBALLERS        | W   | 0.420      | -            | -                | -                | -         |     4.80 | adamb, Jackinho, nilo, susp, ztr     |
|           17 |     2794 | 2024-02-02 | ex-Preasy         | W   | 0.419      | -            | -                | -                | -         |     5.71 | adamb, Jackinho, nilo, susp, ztr     |
|           16 |     2831 | 2024-02-01 | Sampi             | W   | 0.412      | -            | -                | -                | -         |     5.53 | adamb, Jackinho, nilo, susp, ztr     |
|           15 |     2882 | 2024-01-29 | BLEED             | W   | 0.391      | 0.371        | 0.246 (0.036)    | 0.982 (0.142)    | -         |     9.74 | adamb, Jackinho, nilo, susp, ztr     |
|           14 |     2943 | 2024-01-25 | BIG Academy       | W   | 0.364      | -            | -                | -                | -         |     1.60 | adamb, Jackinho, nilo, susp, ztr     |
|           13 |     3541 | 2024-01-09 | IKLA              | L   | 0.259      | -            | -                | -                | -         |    -7.41 | adamb, Jackinho, nilo, susp, ztr     |
|           12 |     3561 | 2023-12-30 | The Witchers      | L   | 0.192      | -            | -                | -                | -         |    -4.97 | adamb, Jackinho, nilo, susp, ztr     |
|           11 |     3563 | 2023-12-30 | VP.Prodigy        | W   | 0.190      | -            | -                | -                | -         |     0.74 | adamb, Jackinho, nilo, susp, ztr     |
|           10 |     3565 | 2023-12-29 | Aurora Young Blud | W   | 0.185      | -            | -                | -                | -         |     0.89 | adamb, Jackinho, nilo, susp, ztr     |
|            9 |     3566 | 2023-12-29 | esmagaB           | W   | 0.185      | -            | -                | -                | -         |     1.29 | adamb, Jackinho, nilo, susp, ztr     |
|            8 |     3572 | 2023-12-27 | Aurora Young Blud | L   | 0.172      | -            | -                | -                | -         |    -4.60 | adamb, Jackinho, nilo, susp, ztr     |
|            7 |     3586 | 2023-12-20 | PERA              | L   | 0.126      | -            | -                | -                | -         |    -2.45 | adamb, Jackinho, nilo, susp, ztr     |
|            6 |     3588 | 2023-12-20 | ARCRED            | W   | 0.125      | -            | -                | -                | -         |     0.62 | adamb, Jackinho, nilo, susp, ztr     |
|            5 |     3597 | 2023-12-19 | GUN5              | W   | 0.118      | -            | -                | -                | -         |     0.21 | adamb, Jackinho, nilo, susp, ztr     |
|            4 |     3600 | 2023-12-19 | PERA              | W   | 0.117      | -            | -                | -                | -         |     1.41 | adamb, Jackinho, nilo, susp, ztr     |
|            3 |     3622 | 2023-12-17 | Lilmix            | W   | 0.106      | -            | -                | -                | 1 (0.106) |     0.26 | adamb, Jackinho, nilo, susp, ztr     |
|            2 |     3629 | 2023-12-17 | BLUDS             | L   | 0.105      | -            | -                | -                | -         |    -2.85 | adamb, Jackinho, nilo, susp, ztr     |
|            1 |     3637 | 2023-12-17 | latch gibb        | W   | 0.104      | -            | -                | -                | 1 (0.104) |     0.13 | adamb, Jackinho, nilo, susp, ztr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,550.81)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-20 |      0.940 | $5,000.00      | $4,701.51       |
| 2024-04-07 |      0.852 | $6,110.00      | $5,207.43       |
| 2024-03-10 |      0.666 | $12,500.00     | $8,331.17       |
| 2023-12-30 |      0.192 | $5,000.00      | $958.52         |
| 2023-12-20 |      0.126 | $2,000.00      | $251.20         |
| 2023-12-17 |      0.106 | $950.00        | $100.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
