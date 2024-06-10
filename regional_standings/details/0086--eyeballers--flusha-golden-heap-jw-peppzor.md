### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: flusha, Golden, HEAP, JW, Peppzor<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  896.7<br />
<br />
Final Rank Value (896.7) = Starting Rank Value (927.6) + Head To Head Adjustments (-30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.6
- 400 + ( ( 0.265 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 927.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |        2 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.69 | flusha, Golden, HEAP, JW, Peppzor |
|           58 |       14 | 2024-06-10 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -11.10 | flusha, Golden, HEAP, JW, Peppzor |
|           57 |       50 | 2024-06-09 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -20.84 | flusha, Golden, HEAP, JW, Peppzor |
|           56 |       75 | 2024-06-09 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.03 | flusha, Golden, HEAP, JW, Peppzor |
|           55 |      117 | 2024-06-08 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -7.60 | flusha, Golden, HEAP, JW, Peppzor |
|           54 |      134 | 2024-06-08 | VP.Prodigy        | W   | 1.000      | 0.435        | -                | 0.539 (0.234)    | 0 (0.000) |    15.72 | flusha, Golden, HEAP, JW, Peppzor |
|           53 |      173 | 2024-06-07 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.154 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    23.20 | flusha, Golden, HEAP, JW, Peppzor |
|           52 |      187 | 2024-06-07 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -24.79 | flusha, Golden, HEAP, JW, Peppzor |
|           51 |      246 | 2024-06-06 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.45 | flusha, Golden, HEAP, JW, Peppzor |
|           50 |      298 | 2024-06-05 | SINNERS           | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.844 (0.367)    | 0 (0.000) |    20.13 | flusha, Golden, HEAP, JW, Peppzor |
|           49 |      316 | 2024-06-05 | Passion UA        | W   | 1.000      | 0.500        | 0.088 (0.044)    | 0.905 (0.452)    | 0 (0.000) |    22.74 | flusha, Golden, HEAP, JW, Peppzor |
|           48 |      371 | 2024-06-03 | Space             | L   | 1.000      | -            | -                | -                | -         |   -13.88 | flusha, Golden, HEAP, JW, Peppzor |
|           47 |      703 | 2024-05-21 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -13.38 | Golden, HEAP, JW, Peppzor, Sapec  |
|           46 |      706 | 2024-05-21 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -14.40 | Golden, HEAP, JW, Peppzor, Sapec  |
|           45 |      745 | 2024-05-20 | B8                | L   | 1.000      | -            | -                | -                | -         |    -5.44 | Golden, HEAP, JW, Peppzor, Sapec  |
|           44 |      829 | 2024-05-17 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.583 (0.253)    | 0 (0.000) |    17.81 | Golden, HEAP, JW, Peppzor, Sapec  |
|           43 |      878 | 2024-05-16 | MASONIC           | L   | 1.000      | -            | -                | -                | -         |   -18.64 | Golden, HEAP, JW, Peppzor, Sapec  |
|           42 |      909 | 2024-05-15 | Permitta          | W   | 1.000      | 0.435        | 0.022 (0.009)    | 0.972 (0.422)    | 0 (0.000) |    15.22 | Golden, HEAP, JW, Peppzor, Sapec  |
|           41 |      922 | 2024-05-15 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.67 | Golden, HEAP, JW, Peppzor, Sapec  |
|           40 |      926 | 2024-05-15 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -13.78 | Golden, HEAP, JW, Peppzor, Sapec  |
|           39 |      967 | 2024-05-14 | Space             | L   | 1.000      | -            | -                | -                | -         |   -17.94 | Golden, HEAP, JW, Peppzor, Sapec  |
|           38 |     1001 | 2024-05-13 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.36 | Golden, HEAP, JW, Peppzor, Sapec  |
|           37 |     1074 | 2024-05-10 | Metizport         | L   | 0.993      | -            | -                | -                | -         |   -10.64 | Golden, HEAP, JW, Peppzor, Sapec  |
|           36 |     1203 | 2024-05-03 | Zero Tenacity     | W   | 0.947      | 0.435        | 0.154 (0.064)    | 1.000 (0.411)    | 0 (0.000) |    18.62 | Golden, HEAP, JW, Peppzor, Sapec  |
|           35 |     1236 | 2024-05-02 | RUSH B            | W   | 0.939      | -            | -                | -                | -         |    12.25 | Golden, HEAP, JW, Peppzor, Sapec  |
|           34 |     1257 | 2024-05-01 | BetBoom           | L   | 0.932      | -            | -                | -                | -         |    -1.09 | Golden, HEAP, JW, Peppzor, Sapec  |
|           33 |     1274 | 2024-04-30 | Enterprise        | W   | 0.927      | 0.435        | -                | 0.647 (0.261)    | -         |    13.75 | Golden, HEAP, JW, Peppzor, Sapec  |
|           32 |     1282 | 2024-04-30 | HAVU              | L   | 0.925      | -            | -                | -                | -         |   -21.41 | Golden, HEAP, JW, Peppzor, Sapec  |
|           31 |     1296 | 2024-04-29 | M1X KS            | W   | 0.920      | 0.435        | 0.028 (0.011)    | 0.537 (0.215)    | -         |    19.02 | Golden, HEAP, JW, Peppzor, Sapec  |
|           30 |     1354 | 2024-04-27 | Illuminar         | W   | 0.904      | -            | -                | -                | -         |     6.21 | Golden, HEAP, JW, Peppzor, Sapec  |
|           29 |     1394 | 2024-04-25 | HAVU              | W   | 0.893      | -            | -                | -                | -         |     7.17 | Golden, HEAP, JW, Peppzor, Sapec  |
|           28 |     1401 | 2024-04-25 | Zero Tenacity     | W   | 0.892      | 0.384        | 0.154 (0.053)    | 1.000 (0.343)    | -         |    18.97 | Golden, HEAP, JW, Peppzor, Sapec  |
|           27 |     1431 | 2024-04-23 | Insilio           | L   | 0.880      | -            | -                | -                | -         |   -11.46 | Golden, HEAP, JW, Peppzor, Sapec  |
|           26 |     1451 | 2024-04-22 | MOUZ NXT          | L   | 0.872      | -            | -                | -                | -         |    -7.13 | Golden, HEAP, JW, Peppzor, Sapec  |
|           25 |     1490 | 2024-04-20 | PERA              | W   | 0.860      | 0.500        | 0.024 (0.010)    | -                | -         |    13.49 | Golden, HEAP, JW, Peppzor, Sapec  |
|           24 |     1587 | 2024-04-18 | DMS               | L   | 0.846      | -            | -                | -                | -         |   -14.13 | Golden, HEAP, JW, Peppzor, Sapec  |
|           23 |     1651 | 2024-04-17 | Endpoint          | L   | 0.838      | -            | -                | -                | -         |   -13.69 | Golden, HEAP, JW, Peppzor, Sapec  |
|           22 |     1813 | 2024-04-10 | Permitta          | L   | 0.791      | -            | -                | -                | -         |   -10.99 | Golden, HEAP, JW, Peppzor, Sapec  |
|           21 |     1914 | 2024-04-07 | Metizport         | L   | 0.773      | -            | -                | -                | -         |    -7.51 | Golden, HEAP, JW, Peppzor, Sapec  |
|           20 |     1918 | 2024-04-07 | Alliance          | W   | 0.772      | -            | -                | -                | -         |    11.15 | Golden, HEAP, JW, Peppzor, Sapec  |
|           19 |     1930 | 2024-04-06 | Onliners5         | W   | 0.766      | -            | -                | -                | -         |     3.24 | Golden, HEAP, JW, Peppzor, Sapec  |
|           18 |     1982 | 2024-04-04 | Sangal            | L   | 0.753      | -            | -                | -                | -         |    -7.34 | Golden, HEAP, JW, Peppzor, Sapec  |
|           17 |     2026 | 2024-04-03 | 9 Pandas          | L   | 0.747      | -            | -                | -                | -         |    -4.87 | Golden, HEAP, JW, Peppzor, Sapec  |
|           16 |     2036 | 2024-04-03 | BIG               | L   | 0.745      | -            | -                | -                | -         |    -1.40 | Golden, HEAP, JW, Peppzor, Sapec  |
|           15 |     2127 | 2024-03-28 | KOI               | W   | 0.706      | 0.500        | 0.054 (0.019)    | -                | -         |    14.93 | Golden, HEAP, JW, Peppzor, Sapec  |
|           14 |     2389 | 2024-03-14 | TSM               | L   | 0.614      | -            | -                | -                | -         |   -14.10 | flusha, HEAP, JW, Peppzor, Sapec  |
|           13 |     2508 | 2024-03-10 | Alliance          | L   | 0.586      | -            | -                | -                | -         |   -10.10 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           12 |     2531 | 2024-03-09 | Metizport         | W   | 0.579      | -            | -                | -                | -         |    11.38 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           11 |     2535 | 2024-03-09 | Onliners5         | W   | 0.579      | -            | -                | -                | -         |     2.38 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           10 |     2598 | 2024-03-06 | 9INE              | W   | 0.561      | -            | -                | -                | -         |     1.68 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            9 |     3292 | 2024-02-02 | Metizport         | L   | 0.341      | -            | -                | -                | -         |    -4.53 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            8 |     3297 | 2024-02-02 | Sashi             | W   | 0.340      | -            | -                | -                | -         |     8.13 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            7 |     3618 | 2024-01-19 | Entropiq          | L   | 0.247      | -            | -                | -                | -         |    -6.67 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            6 |     3677 | 2024-01-18 | PERA              | L   | 0.240      | -            | -                | -                | -         |    -4.01 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            5 |     3697 | 2024-01-18 | MOUZ              | L   | 0.239      | -            | -                | -                | -         |    -0.02 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            4 |     3763 | 2024-01-16 | The Witchers      | W   | 0.228      | -            | -                | -                | -         |     1.41 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            3 |     3787 | 2024-01-16 | Sashi             | W   | 0.227      | -            | -                | -                | -         |     5.48 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            2 |     3800 | 2024-01-16 | PARIVISION        | W   | 0.227      | -            | -                | -                | -         |     4.18 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            1 |     3920 | 2024-01-12 | Insilio           | L   | 0.201      | -            | -                | -                | -         |    -3.37 | HEAP, JW, Peppzor, Sapec, SHiNE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,816.80)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
