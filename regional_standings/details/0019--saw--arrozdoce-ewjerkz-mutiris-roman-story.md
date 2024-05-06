### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1405.6<br />
<br />
Final Rank Value (1405.6) = Starting Rank Value (1434.2) + Head To Head Adjustments (-28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.623[<sup>1</sup>](#table2)
- Bounty Collected: 0.561[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.679[<sup>2</sup>](#table1)

The average of these factors is 0.543<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1434.2
- 400 + ( ( 0.543 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1434.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      170 | 2024-04-28 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -5.87 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           52 |      185 | 2024-04-27 | Eternal Fire      | W   | 1.000      | 0.889        | 0.397 (0.353)    | 0.579 (0.515)    | 1 (1.000) |    26.27 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           51 |      217 | 2024-04-26 | Imperial          | W   | 1.000      | 0.889        | 0.656 (0.583)    | 0.965 (0.858)    | 1 (1.000) |    22.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           50 |      266 | 2024-04-24 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -4.83 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           49 |      288 | 2024-04-23 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -23.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           48 |      521 | 2024-04-16 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -28.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           47 |      639 | 2024-04-10 | 9 Pandas          | W   | 1.000      | 0.500        | 0.081 (0.040)    | 0.676 (0.338)    | -         |     4.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           46 |      691 | 2024-04-09 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -25.32 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           45 |      801 | 2024-04-05 | PGE Turow         | W   | 0.991      | -            | -                | -                | -         |     0.52 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           44 |      835 | 2024-04-04 | Betera            | W   | 0.986      | 0.500        | -                | 0.199 (0.098)    | -         |     0.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           43 |      878 | 2024-04-03 | PERA              | W   | 0.979      | 0.500        | 0.062 (0.031)    | 0.365 (0.179)    | -         |     1.46 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           42 |     1124 | 2024-03-20 | FURIA             | L   | 0.887      | -            | -                | -                | -         |   -12.76 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           41 |     1141 | 2024-03-19 | paiN              | L   | 0.879      | -            | -                | -                | -         |    -6.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           40 |     1149 | 2024-03-18 | Cloud9            | L   | 0.873      | -            | -                | -                | -         |    -8.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           39 |     1163 | 2024-03-17 | GamerLegion       | W   | 0.867      | 0.143        | 0.187 (0.023)    | -                | 1 (0.867) |    13.27 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           38 |     1180 | 2024-03-17 | KOI               | W   | 0.866      | -            | -                | -                | 1 (0.866) |     3.21 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           37 |     1268 | 2024-03-13 | System5           | W   | 0.841      | -            | -                | -                | -         |     0.18 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           36 |     1352 | 2024-03-10 | OG                | W   | 0.820      | 0.535        | 0.580 (0.254)    | 0.490 (0.215)    | -         |     8.96 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           35 |     1393 | 2024-03-08 | Cloud9            | W   | 0.807      | 0.535        | 0.472 (0.204)    | 0.525 (0.227)    | -         |    18.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           34 |     1427 | 2024-03-07 | Liquid            | W   | 0.799      | 0.535        | 0.122 (0.052)    | 0.726 (0.310)    | -         |    10.47 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           33 |     1483 | 2024-03-05 | Monte             | W   | 0.787      | 0.500        | 0.188 (0.074)    | 0.589 (0.232)    | -         |    10.49 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           32 |     1647 | 2024-02-26 | RUSH B            | W   | 0.734      | 0.500        | -                | 0.340 (0.125)    | -         |     0.62 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           31 |     1861 | 2024-02-17 | fnatic            | W   | 0.672      | 0.143        | 0.327 (0.031)    | -                | 1 (0.672) |     5.19 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           30 |     1885 | 2024-02-16 | Enterprise        | W   | 0.666      | -            | -                | -                | 1 (0.666) |     2.19 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           29 |     1917 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.659      | -            | -                | -                | 1 (0.659) |     0.86 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           28 |     1955 | 2024-02-14 | 9 Pandas          | L   | 0.652      | -            | -                | -                | -         |   -16.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           27 |     1966 | 2024-02-14 | Virtus.pro        | L   | 0.651      | -            | -                | -                | -         |    -3.09 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           26 |     2091 | 2024-02-04 | Rhyno             | W   | 0.586      | -            | -                | -                | -         |     0.45 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           25 |     2121 | 2024-02-03 | KOI               | W   | 0.579      | -            | -                | -                | -         |     2.17 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           24 |     2176 | 2024-02-01 | AL QATRAO         | W   | 0.566      | -            | -                | -                | -         |     0.30 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           23 |     2177 | 2024-02-01 | Agency            | W   | 0.566      | -            | -                | -                | -         |     0.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           22 |     2182 | 2024-02-01 | AL QATRAO         | L   | 0.566      | -            | -                | -                | -         |   -17.55 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           21 |     2421 | 2024-01-20 | 9 Pandas          | W   | 0.486      | -            | -                | -                | -         |     2.36 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           20 |     2478 | 2024-01-19 | Zero Tenacity     | W   | 0.479      | -            | -                | -                | -         |     0.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           19 |     2528 | 2024-01-18 | Virtus.pro        | L   | 0.473      | -            | -                | -                | -         |    -2.23 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           18 |     2535 | 2024-01-18 | fnatic            | W   | 0.473      | -            | -                | -                | -         |     3.39 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           17 |     3075 | 2023-12-11 | FORZE             | L   | 0.219      | -            | -                | -                | -         |    -6.70 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           16 |     3197 | 2023-12-06 | 9 Pandas          | L   | 0.185      | -            | -                | -                | -         |    -4.96 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           15 |     3227 | 2023-12-05 | RED Canids        | W   | 0.178      | -            | -                | -                | -         |     0.39 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           14 |     3231 | 2023-12-04 | Zero Tenacity     | W   | 0.172      | -            | -                | -                | -         |     0.34 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           13 |     3246 | 2023-12-03 | Aurora            | L   | 0.166      | -            | -                | -                | -         |    -1.51 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           12 |     3286 | 2023-12-01 | Space             | W   | 0.153      | -            | -                | -                | -         |     0.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           11 |     3306 | 2023-11-30 | 9 Pandas          | W   | 0.145      | -            | -                | -                | -         |     0.67 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|           10 |     3347 | 2023-11-26 | Legacy            | W   | 0.119      | -            | -                | -                | 1 (0.119) |     0.38 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            9 |     3369 | 2023-11-25 | Rhyno             | W   | 0.113      | -            | -                | -                | 1 (0.113) |     0.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            8 |     3389 | 2023-11-24 | Los Alpacas       | W   | 0.106      | -            | -                | -                | 1 (0.106) |     0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            7 |     3406 | 2023-11-23 | Sashi             | W   | 0.099      | -            | -                | -                | -         |     0.35 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            6 |     3538 | 2023-11-17 | Metizport         | L   | 0.057      | -            | -                | -                | -         |    -1.65 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            5 |     3558 | 2023-11-16 | Entropiq          | W   | 0.052      | -            | -                | -                | -         |     0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            4 |     3606 | 2023-11-15 | Pompa             | W   | 0.046      | -            | -                | -                | -         |     0.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story  |
|            3 |     3658 | 2023-11-12 | KOI               | L   | 0.027      | -            | -                | -                | -         |    -0.77 | aragornN, arrozdoce, ewjerkz, roman, story |
|            2 |     3698 | 2023-11-11 | PARIVISION        | W   | 0.020      | -            | -                | -                | -         |     0.01 | aragornN, arrozdoce, ewjerkz, roman, story |
|            1 |     3752 | 2023-11-08 | FORZE             | L   | 0.000      | -            | -                | -                | -         |    -0.01 | aragornN, arrozdoce, ewjerkz, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,197.32)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |
| 2024-03-10 |      0.821 | $20,000.00     | $16,411.73      |
| 2023-12-13 |      0.233 | $500.00        | $116.73         |
| 2023-12-10 |      0.213 | $1,500.00      | $320.20         |
| 2023-12-07 |      0.194 | $5,000.00      | $968.17         |
| 2023-11-26 |      0.119 | $5,443.00      | $648.93         |
| 2023-11-25 |      0.113 | $6,518.00      | $733.57         |
| 2023-11-18 |      0.066 | $2,000.00      | $132.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
