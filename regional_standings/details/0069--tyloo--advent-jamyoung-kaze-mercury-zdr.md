### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  879.9<br />
<br />
Final Rank Value (879.9) = Starting Rank Value (890.4) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 890.4
- 400 + ( ( 0.254 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 890.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      108 | 2024-04-19 | Rare Atom          | L   | 1.000      | -            | -                | -                | -         |   -26.23 | advent, JamYoung, kaze, Mercury, zdr     |
|           42 |      148 | 2024-04-18 | TheMongolz         | L   | 1.000      | -            | -                | -                | -         |    -2.90 | advent, JamYoung, kaze, Mercury, zdr     |
|           41 |      161 | 2024-04-18 | Lynn Vision        | W   | 1.000      | 0.143        | 0.136 (0.019)    | 0.458 (0.065)    | 0 (0.000) |    24.79 | advent, JamYoung, kaze, Mercury, zdr     |
|           40 |      192 | 2024-04-17 | Sheer Conquer      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.14 | advent, JamYoung, kaze, Mercury, zdr     |
|           39 |      198 | 2024-04-17 | The Huns           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.66 | advent, JamYoung, kaze, Mercury, zdr     |
|           38 |      446 | 2024-04-08 | Lynn Vision        | L   | 1.000      | -            | -                | -                | -         |    -6.02 | advent, JamYoung, kaze, Mercury, zdr     |
|           37 |      456 | 2024-04-08 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -0.15 | advent, JamYoung, kaze, Mercury, zdr     |
|           36 |      991 | 2024-03-13 | LYG                | L   | 0.932      | -            | -                | -                | -         |   -22.35 | advent, JamYoung, lyrics3, Mercury, zdr  |
|           35 |      997 | 2024-03-13 | padaem Holodnie    | W   | 0.931      | -            | -                | -                | 0 (0.000) |     1.57 | advent, JamYoung, lyrics3, Mercury, zdr  |
|           34 |     1346 | 2024-02-27 | ATOX               | L   | 0.830      | -            | -                | -                | -         |   -17.37 | advent, aumaN, JamYoung, kaze, Mercury   |
|           33 |     1358 | 2024-02-26 | Lynn Vision        | L   | 0.823      | -            | -                | -                | -         |    -6.21 | advent, aumaN, JamYoung, kaze, Mercury   |
|           32 |     1360 | 2024-02-25 | JiJieHao           | W   | 0.823      | 0.143        | -                | 0.161 (0.019)    | 1 (0.823) |     3.17 | advent, aumaN, JamYoung, kaze, Mercury   |
|           31 |     1864 | 2024-02-02 | Rare Atom          | L   | 0.665      | -            | -                | -                | -         |   -15.53 | advent, aumaN, JamYoung, kaze, Mercury   |
|           30 |     1894 | 2024-02-01 | Newhappy           | W   | 0.658      | 0.143        | -                | 0.238 (0.022)    | 0 (0.000) |     4.51 | advent, aumaN, JamYoung, kaze, Mercury   |
|           29 |     1896 | 2024-02-01 | GR                 | W   | 0.657      | 0.143        | 0.005 (0.000)    | 0.267 (0.025)    | 0 (0.000) |     3.38 | advent, aumaN, JamYoung, kaze, Mercury   |
|           28 |     1950 | 2024-01-27 | Lynn Vision        | L   | 0.629      | -            | -                | -                | -         |    -3.85 | advent, aumaN, JamYoung, kaze, Mercury   |
|           27 |     1959 | 2024-01-27 | TheMongolz         | W   | 0.625      | 0.143        | 0.247 (0.022)    | 0.587 (0.052)    | -         |    17.92 | advent, aumaN, JamYoung, kaze, Mercury   |
|           26 |     1963 | 2024-01-27 | The Huns           | W   | 0.624      | 0.143        | -                | 0.232 (0.021)    | -         |     2.97 | advent, aumaN, JamYoung, kaze, Mercury   |
|           25 |     1966 | 2024-01-26 | ACME               | W   | 0.623      | 0.435        | 0.004 (0.001)    | -                | 1 (0.623) |     4.12 | advent, aumaN, JamYoung, kaze, Mercury   |
|           24 |     1977 | 2024-01-26 | TheMongolz         | L   | 0.619      | -            | -                | -                | -         |    -1.62 | advent, aumaN, JamYoung, kaze, Mercury   |
|           23 |     1981 | 2024-01-26 | Wings Up           | W   | 0.618      | -            | -                | -                | -         |     4.19 | advent, aumaN, JamYoung, kaze, Mercury   |
|           22 |     1988 | 2024-01-26 | TheMongolz         | L   | 0.617      | -            | -                | -                | -         |    -1.61 | advent, aumaN, JamYoung, kaze, Mercury   |
|           21 |     1990 | 2024-01-25 | Incheon On Sla2ers | W   | 0.616      | 0.435        | 0.004 (0.001)    | -                | 1 (0.616) |     2.19 | advent, aumaN, JamYoung, kaze, Mercury   |
|           20 |     2092 | 2024-01-21 | Rare Atom          | W   | 0.585      | 0.143        | 0.024 (0.002)    | 0.233 (0.019)    | -         |     4.97 | advent, aumaN, JamYoung, kaze, Mercury   |
|           19 |     2101 | 2024-01-20 | Lynn Vision        | L   | 0.583      | -            | -                | -                | -         |    -3.19 | advent, aumaN, JamYoung, kaze, Mercury   |
|           18 |     2199 | 2024-01-19 | Newhappy           | W   | 0.570      | 0.143        | -                | 0.238 (0.019)    | -         |     4.82 | advent, aumaN, JamYoung, kaze, Mercury   |
|           17 |     2213 | 2024-01-18 | SHPL               | W   | 0.569      | -            | -                | -                | -         |     1.09 | advent, aumaN, JamYoung, kaze, Mercury   |
|           16 |     2792 | 2023-12-10 | TheMongolz         | L   | 0.306      | -            | -                | -                | -         |    -0.79 | advent, aumaN, JamYoung, kaze, Mercury   |
|           15 |     2865 | 2023-12-07 | Lynn Vision        | W   | 0.285      | 0.416        | 0.136 (0.016)    | 0.458 (0.054)    | -         |     7.55 | advent, aumaN, JamYoung, kaze, Mercury   |
|           14 |     2894 | 2023-12-06 | Newhappy           | W   | 0.279      | 0.416        | 0.005 (0.001)    | 0.238 (0.028)    | -         |     2.38 | advent, aumaN, JamYoung, kaze, Mercury   |
|           13 |     3081 | 2023-11-25 | Eternal Fire       | L   | 0.204      | -            | -                | -                | -         |    -0.11 | advent, JamYoung, kaze, Mercury, Moseyuh |
|           12 |     3102 | 2023-11-24 | Monte              | L   | 0.197      | -            | -                | -                | -         |    -0.96 | advent, JamYoung, kaze, Mercury, Moseyuh |
|           11 |     3204 | 2023-11-18 | TheMongolz         | L   | 0.159      | -            | -                | -                | -         |    -0.39 | advent, JamYoung, kaze, Mercury, Moseyuh |
|           10 |     3212 | 2023-11-18 | Newhappy           | W   | 0.157      | -            | -                | -                | -         |     1.30 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            9 |     3237 | 2023-11-17 | TheMongolz         | L   | 0.152      | -            | -                | -                | -         |    -0.37 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            8 |     3245 | 2023-11-17 | ATOX               | W   | 0.150      | -            | -                | -                | -         |     1.71 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            7 |     3465 | 2023-11-08 | Lynn Vision        | L   | 0.092      | -            | -                | -                | -         |    -0.45 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            6 |     3472 | 2023-11-07 | Falcons            | L   | 0.089      | -            | -                | -                | -         |    -0.27 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            5 |     3546 | 2023-11-04 | Lynn Vision        | L   | 0.065      | -            | -                | -                | -         |    -0.31 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            4 |     3568 | 2023-11-03 | Steel Helmet       | W   | 0.057      | -            | -                | -                | 1 (0.057) |     0.43 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            3 |     3717 | 2023-10-29 | TheMongolz         | W   | 0.025      | 0.143        | 0.247 (0.001)    | -                | -         |     0.74 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            2 |     3758 | 2023-10-28 | TheMongolz         | W   | 0.019      | 0.143        | 0.247 (0.001)    | -                | -         |     0.54 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            1 |     3770 | 2023-10-28 | Wings Up           | W   | 0.017      | -            | -                | -                | -         |     0.03 | advent, JamYoung, kaze, Mercury, Moseyuh |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,408.18)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-01-28 |      0.631 | $4,000.00      | $2,525.64       |
| 2023-12-10 |      0.306 | $8,000.00      | $2,445.43       |
| 2023-11-26 |      0.213 | $2,000.00      | $426.58         |
| 2023-11-12 |      0.119 | $8,500.00      | $1,010.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
