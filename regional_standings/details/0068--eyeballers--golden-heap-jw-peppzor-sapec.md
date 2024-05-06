### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: Golden, HEAP, JW, Peppzor, Sapec<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  928.2<br />
<br />
Final Rank Value (928.2) = Starting Rank Value (917.6) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.425[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.036[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.6
- 400 + ( ( 0.272 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 917.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |       52 | 2024-05-03 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.093 (0.040)    | 0.936 (0.407)    | 0 (0.000) |    17.20 | Golden, HEAP, JW, Peppzor, Sapec |
|           47 |       85 | 2024-05-02 | RUSH B            | W   | 1.000      | 0.435        | -                | 0.340 (0.148)    | 0 (0.000) |    11.97 | Golden, HEAP, JW, Peppzor, Sapec |
|           46 |      106 | 2024-05-01 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -2.38 | Golden, HEAP, JW, Peppzor, Sapec |
|           45 |      123 | 2024-04-30 | Enterprise        | W   | 1.000      | 0.435        | -                | 0.459 (0.199)    | 0 (0.000) |    15.37 | Golden, HEAP, JW, Peppzor, Sapec |
|           44 |      131 | 2024-04-30 | HAVU              | L   | 1.000      | -            | -                | -                | -         |   -21.43 | Golden, HEAP, JW, Peppzor, Sapec |
|           43 |      145 | 2024-04-29 | Guild Eagles      | W   | 1.000      | 0.435        | 0.035 (0.015)    | 0.648 (0.281)    | 0 (0.000) |    19.12 | Golden, HEAP, JW, Peppzor, Sapec |
|           42 |      203 | 2024-04-27 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.53 | Golden, HEAP, JW, Peppzor, Sapec |
|           41 |      243 | 2024-04-25 | HAVU              | W   | 1.000      | 0.435        | -                | 0.214 (0.093)    | 0 (0.000) |     9.63 | Golden, HEAP, JW, Peppzor, Sapec |
|           40 |      250 | 2024-04-25 | Zero Tenacity     | W   | 1.000      | 0.384        | 0.093 (0.036)    | 0.936 (0.360)    | 0 (0.000) |    17.90 | Golden, HEAP, JW, Peppzor, Sapec |
|           39 |      280 | 2024-04-23 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -12.02 | Golden, HEAP, JW, Peppzor, Sapec |
|           38 |      300 | 2024-04-22 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -8.46 | Golden, HEAP, JW, Peppzor, Sapec |
|           37 |      339 | 2024-04-20 | PERA              | W   | 1.000      | 0.500        | 0.062 (0.031)    | 0.365 (0.182)    | 0 (0.000) |    16.90 | Golden, HEAP, JW, Peppzor, Sapec |
|           36 |      436 | 2024-04-18 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -26.89 | Golden, HEAP, JW, Peppzor, Sapec |
|           35 |      500 | 2024-04-17 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -16.31 | Golden, HEAP, JW, Peppzor, Sapec |
|           34 |      662 | 2024-04-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -13.62 | Golden, HEAP, JW, Peppzor, Sapec |
|           33 |      763 | 2024-04-07 | Metizport         | L   | 1.000      | -            | -                | -                | -         |    -8.95 | Golden, HEAP, JW, Peppzor, Sapec |
|           32 |      767 | 2024-04-07 | Alliance          | W   | 1.000      | 0.330        | -                | 0.815 (0.269)    | -         |    13.29 | Golden, HEAP, JW, Peppzor, Sapec |
|           31 |      779 | 2024-04-06 | Onliners5         | W   | 0.999      | -            | -                | -                | -         |     5.23 | Golden, HEAP, JW, Peppzor, Sapec |
|           30 |      831 | 2024-04-04 | Sangal            | L   | 0.987      | -            | -                | -                | -         |   -20.07 | Golden, HEAP, JW, Peppzor, Sapec |
|           29 |      875 | 2024-04-03 | 9 Pandas          | L   | 0.980      | -            | -                | -                | -         |    -6.87 | Golden, HEAP, JW, Peppzor, Sapec |
|           28 |      885 | 2024-04-03 | BIG               | L   | 0.979      | -            | -                | -                | -         |    -2.33 | Golden, HEAP, JW, Peppzor, Sapec |
|           27 |      976 | 2024-03-28 | KOI               | W   | 0.939      | 0.500        | 0.059 (0.028)    | 0.772 (0.362)    | -         |    20.63 | Golden, HEAP, JW, Peppzor, Sapec |
|           26 |     1238 | 2024-03-14 | TSM               | L   | 0.848      | -            | -                | -                | -         |   -17.43 | flusha, HEAP, JW, Peppzor, Sapec |
|           25 |     1357 | 2024-03-10 | Alliance          | L   | 0.819      | -            | -                | -                | -         |   -14.88 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           24 |     1380 | 2024-03-09 | Metizport         | W   | 0.812      | 0.143        | 0.183 (0.021)    | 1.000 (0.116)    | -         |    16.92 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           23 |     1384 | 2024-03-09 | Onliners5         | W   | 0.812      | -            | -                | -                | -         |     3.98 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           22 |     1447 | 2024-03-06 | 9INE              | W   | 0.794      | -            | -                | -                | -         |     2.55 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           21 |     2141 | 2024-02-02 | Metizport         | L   | 0.574      | -            | -                | -                | -         |    -6.87 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           20 |     2146 | 2024-02-02 | Sashi             | W   | 0.573      | 0.143        | 0.188 (0.015)    | -                | -         |    11.71 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           19 |     2467 | 2024-01-19 | Entropiq          | L   | 0.480      | -            | -                | -                | -         |   -11.01 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           18 |     2526 | 2024-01-18 | PERA              | L   | 0.473      | -            | -                | -                | -         |    -8.05 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           17 |     2546 | 2024-01-18 | MOUZ              | L   | 0.472      | -            | -                | -                | -         |    -0.09 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           16 |     2612 | 2024-01-16 | The Witchers      | W   | 0.462      | -            | -                | -                | -         |     3.94 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           15 |     2636 | 2024-01-16 | Sashi             | W   | 0.460      | 0.143        | 0.188 (0.012)    | -                | -         |     9.49 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           14 |     2649 | 2024-01-16 | PARIVISION        | W   | 0.460      | -            | -                | -                | -         |     7.01 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           13 |     2769 | 2024-01-12 | Insilio           | L   | 0.434      | -            | -                | -                | -         |    -7.09 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           12 |     3153 | 2023-12-07 | Apeks             | L   | 0.193      | -            | -                | -                | -         |    -0.54 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           11 |     3162 | 2023-12-07 | FORZE             | L   | 0.192      | -            | -                | -                | -         |    -4.29 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           10 |     3179 | 2023-12-06 | ENCE              | W   | 0.187      | 0.500        | 0.360 (0.034)    | -                | -         |     5.61 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            9 |     3220 | 2023-12-05 | Sashi             | W   | 0.179      | 0.384        | 0.188 (0.013)    | -                | -         |     3.83 | flusha, HEAP, JW, Sapec, SHiNE   |
|            8 |     3241 | 2023-12-03 | GODSENT           | W   | 0.167      | -            | -                | -                | 1 (0.167) |     1.58 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            7 |     3270 | 2023-12-02 | Alliance          | W   | 0.159      | -            | -                | -                | 1 (0.159) |     2.38 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            6 |     3329 | 2023-11-28 | ex-Preasy         | L   | 0.132      | -            | -                | -                | -         |    -1.51 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            5 |     3436 | 2023-11-21 | 00NATION          | W   | 0.086      | -            | -                | -                | -         |     0.23 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            4 |     3563 | 2023-11-16 | Gaimin Gladiators | L   | 0.052      | -            | -                | -                | -         |    -0.14 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            3 |     3642 | 2023-11-13 | Guild Eagles      | L   | 0.033      | -            | -                | -                | -         |    -0.38 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            2 |     3696 | 2023-11-11 | FORZE             | W   | 0.020      | -            | -                | -                | -         |     0.18 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            1 |     3750 | 2023-11-08 | Betera            | W   | 0.000      | -            | -                | -                | -         |     0.00 | HEAP, JW, Peppzor, Sapec, SHiNE  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,232.46)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-07 |      1.000 | $2,350.00      | $2,350.00       |
| 2023-12-10 |      0.213 | $5,000.00      | $1,067.35       |
| 2023-12-03 |      0.167 | $22,864.00     | $3,815.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
