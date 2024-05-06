### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, seized<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1064.1<br />
<br />
Final Rank Value (1064.1) = Starting Rank Value (1108.3) + Head To Head Adjustments (-44.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.478[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.337[<sup>2</sup>](#table1)

The average of these factors is 0.372<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1108.3
- 400 + ( ( 0.372 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1108.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |       34 | 2024-05-05 | ARCRED            | W   | 1.000      | 0.396        | -                | 0.198 (0.079)    | 0 (0.000) |     4.34 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           63 |       43 | 2024-05-04 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -5.11 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           62 |       49 | 2024-05-03 | fnatic            | W   | 1.000      | 0.435        | 0.327 (0.142)    | 0.677 (0.294)    | 0 (0.000) |    22.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           61 |       93 | 2024-05-02 | MOUZ NXT          | W   | 1.000      | 0.435        | 0.210 (0.091)    | 1.000 (0.435)    | -         |    16.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           60 |      139 | 2024-04-30 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -20.56 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           59 |      176 | 2024-04-28 | Gaimin Gladiators | W   | 1.000      | 0.500        | 0.189 (0.094)    | 0.990 (0.495)    | -         |    24.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           58 |      216 | 2024-04-26 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -20.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           57 |      405 | 2024-04-19 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -23.66 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma   |
|           56 |      489 | 2024-04-17 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -23.78 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           55 |      639 | 2024-04-10 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -4.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           54 |      692 | 2024-04-09 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -17.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           53 |      715 | 2024-04-09 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.88 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           52 |      729 | 2024-04-08 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -29.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           51 |      738 | 2024-04-08 | Metizport         | W   | 1.000      | 0.143        | 0.183 (0.026)    | 1.000 (0.143)    | -         |    13.37 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           50 |      799 | 2024-04-05 | Secret            | L   | 0.992      | -            | -                | -                | -         |   -29.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           49 |      830 | 2024-04-04 | TSM               | W   | 0.987      | 0.500        | -                | 0.258 (0.127)    | -         |     3.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           48 |      875 | 2024-04-03 | EYEBALLERS        | W   | 0.980      | 0.500        | 0.045 (0.022)    | 0.599 (0.293)    | -         |     6.87 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           47 |      883 | 2024-04-03 | 9INE              | W   | 0.979      | -            | -                | -                | -         |     0.46 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           46 |      910 | 2024-04-02 | Sangal            | W   | 0.973      | 0.500        | -                | 0.797 (0.388)    | -         |     3.87 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           45 |     1444 | 2024-03-06 | KOI               | L   | 0.794      | -            | -                | -                | -         |   -14.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           44 |     1584 | 2024-03-01 | Aurora            | L   | 0.759      | -            | -                | -                | -         |    -3.17 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           43 |     1590 | 2024-02-29 | FORZE             | L   | 0.754      | -            | -                | -                | -         |   -14.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           42 |     1604 | 2024-02-28 | Spirit Academy    | W   | 0.747      | -            | -                | -                | -         |     2.27 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           41 |     1610 | 2024-02-28 | Lotus             | W   | 0.746      | -            | -                | -                | -         |     0.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           40 |     1702 | 2024-02-24 | GamerLegion       | W   | 0.719      | 0.143        | 0.187 (0.019)    | -                | 1 (0.719) |    19.35 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           39 |     1719 | 2024-02-23 | Astralis          | W   | 0.711      | 0.143        | 0.174 (0.018)    | -                | 1 (0.711) |    20.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           38 |     1866 | 2024-02-17 | AMKAL             | L   | 0.672      | -            | -                | -                | -         |    -8.86 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           37 |     1888 | 2024-02-16 | 3DMAX             | W   | 0.666      | 0.143        | -                | 0.810 (0.077)    | 1 (0.666) |    10.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           36 |     1924 | 2024-02-15 | KOI               | L   | 0.658      | -            | -                | -                | -         |   -12.50 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           35 |     1955 | 2024-02-14 | SAW               | W   | 0.652      | 0.143        | 0.248 (0.023)    | -                | 1 (0.652) |    16.82 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           34 |     1967 | 2024-02-14 | FaZe              | L   | 0.651      | -            | -                | -                | -         |    -0.18 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           33 |     2220 | 2024-01-30 | Nemiga            | L   | 0.553      | -            | -                | -                | -         |    -5.76 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           32 |     2239 | 2024-01-28 | Rebels            | W   | 0.540      | -            | -                | -                | -         |     7.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           31 |     2408 | 2024-01-20 | 3DMAX             | W   | 0.487      | -            | -                | -                | -         |     9.39 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           30 |     2421 | 2024-01-20 | SAW               | L   | 0.486      | -            | -                | -                | -         |    -2.36 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           29 |     2479 | 2024-01-19 | Gaimin Gladiators | W   | 0.479      | -            | -                | -                | -         |    11.70 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           28 |     2529 | 2024-01-18 | Natus Vincere     | L   | 0.473      | -            | -                | -                | -         |    -0.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           27 |     2542 | 2024-01-18 | Nexus             | W   | 0.473      | -            | -                | -                | -         |     3.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           26 |     2975 | 2023-12-17 | IKLA              | L   | 0.260      | -            | -                | -                | -         |    -7.81 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           25 |     3006 | 2023-12-16 | B8                | L   | 0.254      | -            | -                | -                | -         |    -7.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           24 |     3032 | 2023-12-15 | ORKS              | W   | 0.247      | -            | -                | -                | -         |     0.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           23 |     3072 | 2023-12-11 | ex-Preasy         | L   | 0.220      | -            | -                | -                | -         |    -4.43 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           22 |     3173 | 2023-12-06 | Guild Eagles      | L   | 0.187      | -            | -                | -                | -         |    -3.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           21 |     3186 | 2023-12-06 | Gaimin Gladiators | W   | 0.186      | -            | -                | -                | -         |     4.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           20 |     3197 | 2023-12-06 | SAW               | W   | 0.185      | 0.589        | 0.248 (0.027)    | 0.774 (0.084)    | -         |     4.96 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           19 |     3206 | 2023-12-05 | BIG               | L   | 0.180      | -            | -                | -                | -         |    -0.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           18 |     3240 | 2023-12-03 | Into the Breach   | W   | 0.167      | -            | -                | -                | -         |     0.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           17 |     3299 | 2023-11-30 | Legacy            | W   | 0.147      | -            | -                | -                | -         |     1.82 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           16 |     3306 | 2023-11-30 | SAW               | L   | 0.145      | -            | -                | -                | -         |    -0.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           15 |     3422 | 2023-11-22 | ALTERNATE aTTaX   | W   | 0.092      | -            | -                | -                | -         |     1.00 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           14 |     3447 | 2023-11-20 | Eternal Fire      | W   | 0.080      | -            | -                | -                | 1 (0.080) |     2.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           13 |     3470 | 2023-11-19 | FURIA             | W   | 0.073      | -            | -                | -                | 1 (0.073) |     2.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           12 |     3525 | 2023-11-17 | Gaimin Gladiators | L   | 0.059      | -            | -                | -                | -         |    -0.39 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           11 |     3535 | 2023-11-17 | MIBR              | W   | 0.058      | 0.500        | 0.638 (0.018)    | -                | 1 (0.058) |     1.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           10 |     3554 | 2023-11-16 | Legacy            | W   | 0.053      | -            | -                | -                | -         |     0.68 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            9 |     3564 | 2023-11-16 | BetBoom           | W   | 0.052      | -            | -                | -                | 1 (0.052) |     1.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            8 |     3607 | 2023-11-15 | Entropiq          | W   | 0.046      | -            | -                | -                | -         |     0.17 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            7 |     3612 | 2023-11-15 | ECLOT             | W   | 0.045      | -            | -                | -                | -         |     0.11 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            6 |     3630 | 2023-11-14 | Alliance          | W   | 0.038      | -            | -                | -                | -         |     0.28 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            5 |     3646 | 2023-11-13 | Legacy            | W   | 0.032      | -            | -                | -                | -         |     0.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            4 |     3660 | 2023-11-12 | Pompa             | W   | 0.027      | -            | -                | -                | -         |     0.03 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            3 |     3681 | 2023-11-12 | Entropiq          | L   | 0.024      | -            | -                | -                | -         |    -0.68 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            2 |     3721 | 2023-11-10 | Space             | W   | 0.012      | -            | -                | -                | -         |     0.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            1 |     3734 | 2023-11-09 | SINNERS           | L   | 0.005      | -            | -                | -                | -         |    -0.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,063.92)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-12-13 |      0.233 | $500.00        | $116.73         |
| 2023-12-07 |      0.194 | $15,000.00     | $2,904.52       |
| 2023-11-21 |      0.087 | $1,000.00      | $87.08          |
| 2023-11-20 |      0.080 | $60,000.00     | $4,789.10       |
| 2023-11-18 |      0.066 | $2,000.00      | $132.60         |
| 2023-11-09 |      0.007 | $5,000.00      | $33.90          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
