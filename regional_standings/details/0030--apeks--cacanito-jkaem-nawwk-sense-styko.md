### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1246.1<br />
<br />
Final Rank Value (1246.1) = Starting Rank Value (1340.8) + Head To Head Adjustments (-94.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.616[<sup>1</sup>](#table2)
- Bounty Collected: 0.484[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.737[<sup>2</sup>](#table1)

The average of these factors is 0.494<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1340.8
- 400 + ( ( 0.494 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1340.8


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
|           61 |      180 | 2024-04-27 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -3.63 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           60 |      229 | 2024-04-25 | Aurora            | W   | 1.000      | 0.500        | 0.973 (0.486)    | 0.967 (0.483)    | 1 (1.000) |    23.64 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           59 |      235 | 2024-04-25 | sunday school     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.53 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           58 |      424 | 2024-04-18 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -10.96 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           57 |      427 | 2024-04-18 | DMS               | W   | 1.000      | -            | -                | -                | -         |     0.75 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           56 |      440 | 2024-04-18 | AMKAL             | W   | 1.000      | 0.143        | 0.200 (0.029)    | 0.851 (0.122)    | -         |    14.03 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           55 |      604 | 2024-04-11 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -7.55 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           54 |      643 | 2024-04-10 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -19.44 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           53 |      696 | 2024-04-09 | fnatic            | W   | 1.000      | 0.143        | 0.327 (0.047)    | 0.677 (0.097)    | -         |    15.13 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           52 |      704 | 2024-04-09 | KOI               | W   | 1.000      | 0.143        | -                | 0.772 (0.110)    | -         |     8.78 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           51 |      725 | 2024-04-08 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -16.03 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           50 |      741 | 2024-04-08 | GUN5              | W   | 1.000      | -            | -                | -                | -         |     0.85 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           49 |      882 | 2024-04-03 | Monte             | L   | 0.979      | -            | -                | -                | -         |   -13.47 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           48 |      911 | 2024-04-02 | Aurora            | L   | 0.973      | -            | -                | -                | -         |    -7.15 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           47 |      918 | 2024-04-02 | B8                | W   | 0.972      | 0.143        | -                | 0.851 (0.118)    | -         |     7.08 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           46 |      945 | 2024-03-31 | B8                | L   | 0.959      | -            | -                | -                | -         |   -23.76 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           45 |      977 | 2024-03-28 | 3DMAX             | L   | 0.939      | -            | -                | -                | -         |   -20.77 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           44 |     1042 | 2024-03-26 | FORZE             | L   | 0.925      | -            | -                | -                | -         |   -21.16 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           43 |     1143 | 2024-03-19 | Legacy            | L   | 0.879      | -            | -                | -                | -         |   -21.24 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           42 |     1155 | 2024-03-18 | Imperial          | L   | 0.871      | -            | -                | -                | -         |    -5.18 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           41 |     1172 | 2024-03-17 | AMKAL             | W   | 0.867      | 0.143        | 0.200 (0.025)    | 0.851 (0.105)    | 1 (0.867) |     7.31 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           40 |     1184 | 2024-03-17 | paiN              | L   | 0.865      | -            | -                | -                | -         |    -3.71 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           39 |     1314 | 2024-03-12 | Metizport         | L   | 0.833      | -            | -                | -                | -         |   -21.40 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           38 |     1323 | 2024-03-11 | Virtus.pro        | L   | 0.827      | -            | -                | -                | -         |    -2.84 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           37 |     1332 | 2024-03-11 | KOI               | W   | 0.826      | 0.143        | -                | 0.772 (0.091)    | -         |     5.04 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           36 |     1426 | 2024-03-07 | Space             | W   | 0.800      | -            | -                | -                | -         |     0.75 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           35 |     1453 | 2024-03-06 | PARIVISION        | L   | 0.793      | -            | -                | -                | -         |   -23.34 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           34 |     1763 | 2024-02-21 | Gaimin Gladiators | W   | 0.698      | 0.143        | -                | 0.990 (0.099)    | 1 (0.698) |     9.06 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           33 |     1795 | 2024-02-20 | Monte             | W   | 0.691      | -            | -                | -                | 1 (0.691) |    11.86 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           32 |     1808 | 2024-02-19 | Cloud9            | L   | 0.687      | -            | -                | -                | -         |    -4.42 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           31 |     1819 | 2024-02-19 | OG                | W   | 0.685      | 0.143        | 0.580 (0.057)    | -                | 1 (0.685) |     9.32 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           30 |     2002 | 2024-02-11 | Metizport         | L   | 0.634      | -            | -                | -                | -         |   -17.36 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           29 |     2005 | 2024-02-11 | 3DMAX             | W   | 0.633      | -            | -                | -                | -         |     4.77 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           28 |     2018 | 2024-02-10 | Metizport         | W   | 0.626      | 0.143        | -                | 1.000 (0.089)    | -         |     2.30 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           27 |     2021 | 2024-02-10 | ex-Anonymo        | W   | 0.625      | -            | -                | -                | -         |     0.59 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           26 |     2085 | 2024-02-04 | Natus Vincere     | L   | 0.587      | -            | -                | -                | -         |    -0.62 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           25 |     2110 | 2024-02-03 | Complexity        | L   | 0.580      | -            | -                | -                | -         |    -4.70 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           24 |     2138 | 2024-02-02 | BIG               | W   | 0.574      | 0.143        | 0.454 (0.037)    | -                | 1 (0.574) |    10.17 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           23 |     2173 | 2024-02-01 | FURIA             | W   | 0.567      | 0.143        | 0.371 (0.030)    | -                | 1 (0.567) |    13.02 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           22 |     2198 | 2024-01-31 | Spirit            | L   | 0.559      | -            | -                | -                | -         |    -1.44 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           21 |     2968 | 2023-12-17 | Virtus.pro        | L   | 0.261      | -            | -                | -                | -         |    -0.87 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           20 |     2972 | 2023-12-17 | Monte             | W   | 0.260      | 0.500        | -                | 0.589 (0.077)    | 1 (0.260) |     4.47 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           19 |     3027 | 2023-12-15 | TheMongolz        | W   | 0.248      | 0.500        | 0.253 (0.031)    | -                | 1 (0.248) |     4.93 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           18 |     3038 | 2023-12-15 | GamerLegion       | W   | 0.247      | -            | -                | -                | -         |     5.35 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           17 |     3125 | 2023-12-08 | FORZE             | L   | 0.200      | -            | -                | -                | -         |    -6.06 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           16 |     3153 | 2023-12-07 | EYEBALLERS        | W   | 0.193      | -            | -                | -                | -         |     0.54 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           15 |     3180 | 2023-12-06 | 3DMAX             | L   | 0.187      | -            | -                | -                | -         |    -4.08 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           14 |     3211 | 2023-12-05 | Space             | W   | 0.180      | -            | -                | -                | -         |     0.19 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           13 |     3242 | 2023-12-03 | FURIA             | L   | 0.167      | -            | -                | -                | -         |    -1.32 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           12 |     3272 | 2023-12-02 | ENCE              | W   | 0.159      | -            | -                | -                | -         |     0.19 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           11 |     3303 | 2023-11-30 | FURIA             | W   | 0.146      | 0.589        | 0.371 (0.032)    | -                | -         |     3.45 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           10 |     3309 | 2023-11-30 | MOUZ              | W   | 0.145      | 0.589        | 1.000 (0.085)    | -                | -         |     4.33 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            9 |     3450 | 2023-11-20 | ENCE              | L   | 0.079      | -            | -                | -                | -         |    -0.80 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            8 |     3484 | 2023-11-18 | FORZE             | W   | 0.067      | -            | -                | -                | -         |     0.08 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            7 |     3516 | 2023-11-17 | KOI               | W   | 0.061      | -            | -                | -                | -         |     0.29 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            6 |     3526 | 2023-11-17 | PERA              | W   | 0.059      | -            | -                | -                | -         |     0.14 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            5 |     3551 | 2023-11-16 | Pompa             | W   | 0.054      | -            | -                | -                | -         |     0.01 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            4 |     3562 | 2023-11-16 | FTW               | L   | 0.052      | -            | -                | -                | -         |    -1.62 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            3 |     3643 | 2023-11-13 | Aurora            | L   | 0.033      | -            | -                | -                | -         |    -0.20 | CacaNito, jkaem, kyxsan, sense, STYKO |
|            2 |     3666 | 2023-11-12 | BIG               | W   | 0.026      | -            | -                | -                | -         |     0.48 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            1 |     3755 | 2023-11-08 | Spirit            | L   | 0.000      | -            | -                | -                | -         |     0.00 | CacaNito, jkaem, kyxsan, nawwk, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,468.12)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |
| 2024-02-11 |      0.633 | $10,000.00     | $6,331.40       |
| 2023-12-17 |      0.261 | $20,000.00     | $5,220.05       |
| 2023-12-10 |      0.213 | $6,500.00      | $1,387.55       |
| 2023-12-03 |      0.167 | $40,000.00     | $6,663.74       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
