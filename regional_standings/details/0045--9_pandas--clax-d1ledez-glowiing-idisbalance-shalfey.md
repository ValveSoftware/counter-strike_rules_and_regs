### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, shalfey<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1132.8<br />
<br />
Final Rank Value (1132.8) = Starting Rank Value (1153.9) + Head To Head Adjustments (-21.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.365[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.378<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1153.9
- 400 + ( ( 0.378 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1153.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |       13 | 2024-06-10 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.50 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           59 |       15 | 2024-06-10 | SINNERS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.35 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           58 |       20 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -16.31 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           57 |       54 | 2024-06-09 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -24.70 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           56 |       63 | 2024-06-09 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -20.64 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           55 |       69 | 2024-06-09 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    19.36 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           54 |       79 | 2024-06-09 | Monte             | W   | 1.000      | 0.143        | 0.179 (0.026)    | -                | 0 (0.000) |    18.21 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           53 |      342 | 2024-06-04 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -17.36 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey |
|           52 |      568 | 2024-05-26 | MOUZ NXT          | W   | 1.000      | 0.435        | 0.164 (0.071)    | 1.000 (0.435)    | 0 (0.000) |    12.60 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           51 |      572 | 2024-05-26 | 1WIN              | W   | 1.000      | 0.435        | -                | 0.672 (0.292)    | 0 (0.000) |    14.12 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           50 |      586 | 2024-05-25 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.00 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           49 |      612 | 2024-05-24 | SINNERS           | W   | 1.000      | 0.435        | -                | 0.844 (0.367)    | -         |    11.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           48 |      741 | 2024-05-20 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.94 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           47 |      794 | 2024-05-18 | Passion UA        | W   | 1.000      | 0.500        | 0.088 (0.044)    | 0.905 (0.452)    | -         |     9.85 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           46 |      866 | 2024-05-16 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.046 (0.023)    | 0.583 (0.292)    | -         |     9.45 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           45 |     1027 | 2024-05-12 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -3.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           44 |     1053 | 2024-05-11 | RUBY              | W   | 1.000      | -            | -                | -                | -         |     8.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           43 |     1100 | 2024-05-09 | Zero Tenacity     | W   | 0.985      | 0.435        | 0.154 (0.066)    | 1.000 (0.428)    | -         |    12.49 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           42 |     1140 | 2024-05-07 | Sashi             | L   | 0.972      | -            | -                | -                | -         |    -8.68 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           41 |     1185 | 2024-05-05 | ARCRED            | W   | 0.957      | -            | -                | -                | -         |     2.28 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           40 |     1194 | 2024-05-04 | BetBoom           | L   | 0.952      | -            | -                | -                | -         |    -2.83 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           39 |     1200 | 2024-05-03 | fnatic            | W   | 0.947      | 0.435        | 0.198 (0.081)    | -                | -         |    22.08 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           38 |     1244 | 2024-05-02 | MOUZ NXT          | W   | 0.937      | 0.435        | 0.164 (0.067)    | 1.000 (0.407)    | -         |    15.89 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           37 |     1290 | 2024-04-30 | Passion UA        | L   | 0.925      | -            | -                | -                | -         |   -19.27 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           36 |     1327 | 2024-04-28 | Gaimin Gladiators | W   | 0.911      | 0.500        | 0.081 (0.037)    | 0.749 (0.341)    | -         |    20.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           35 |     1367 | 2024-04-26 | Passion UA        | L   | 0.899      | -            | -                | -                | -         |   -18.91 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           34 |     1556 | 2024-04-19 | Alliance          | L   | 0.851      | -            | -                | -                | -         |   -20.23 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma    |
|           33 |     1640 | 2024-04-17 | Sangal            | L   | 0.838      | -            | -                | -                | -         |   -13.92 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           32 |     1790 | 2024-04-10 | SAW               | L   | 0.794      | -            | -                | -                | -         |    -5.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           31 |     1843 | 2024-04-09 | SINNERS           | L   | 0.787      | -            | -                | -                | -         |   -12.96 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           30 |     1866 | 2024-04-09 | Aurora            | L   | 0.785      | -            | -                | -                | -         |    -2.69 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           29 |     1880 | 2024-04-08 | 1WIN              | L   | 0.780      | -            | -                | -                | -         |   -17.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           28 |     1889 | 2024-04-08 | Metizport         | W   | 0.779      | -            | -                | -                | -         |     9.57 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           27 |     1950 | 2024-04-05 | Secret            | L   | 0.759      | -            | -                | -                | -         |   -23.01 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           26 |     1981 | 2024-04-04 | TSM               | W   | 0.753      | -            | -                | -                | -         |     2.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           25 |     2026 | 2024-04-03 | EYEBALLERS        | W   | 0.747      | 0.500        | -                | 0.722 (0.270)    | -         |     4.87 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           24 |     2034 | 2024-04-03 | 9INE              | W   | 0.745      | -            | -                | -                | -         |     0.31 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           23 |     2061 | 2024-04-02 | Sangal            | W   | 0.740      | 0.500        | 0.214 (0.079)    | 0.998 (0.369)    | -         |     8.72 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           22 |     2595 | 2024-03-06 | KOI               | L   | 0.561      | -            | -                | -                | -         |   -11.44 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           21 |     2735 | 2024-03-01 | Aurora            | L   | 0.526      | -            | -                | -                | -         |    -1.96 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           20 |     2741 | 2024-02-29 | FORZE             | L   | 0.520      | -            | -                | -                | -         |   -11.66 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           19 |     2755 | 2024-02-28 | Spirit Academy    | W   | 0.514      | -            | -                | -                | -         |     1.09 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           18 |     2761 | 2024-02-28 | Lotus             | W   | 0.512      | -            | -                | -                | -         |     0.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           17 |     2853 | 2024-02-24 | GamerLegion       | W   | 0.486      | -            | -                | -                | 1 (0.486) |     7.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           16 |     2870 | 2024-02-23 | Astralis          | W   | 0.478      | 0.143        | 0.474 (0.032)    | -                | 1 (0.478) |    14.77 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           15 |     3017 | 2024-02-17 | AMKAL             | L   | 0.438      | -            | -                | -                | -         |    -6.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           14 |     3039 | 2024-02-16 | 3DMAX             | W   | 0.433      | -            | -                | -                | 1 (0.433) |     7.15 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           13 |     3075 | 2024-02-15 | KOI               | L   | 0.425      | -            | -                | -                | -         |    -9.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           12 |     3106 | 2024-02-14 | SAW               | W   | 0.419      | -            | -                | -                | 1 (0.419) |     9.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           11 |     3118 | 2024-02-14 | FaZe              | L   | 0.418      | -            | -                | -                | -         |    -0.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|           10 |     3371 | 2024-01-30 | Nemiga            | L   | 0.320      | -            | -                | -                | -         |    -3.97 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            9 |     3390 | 2024-01-28 | Rebels            | W   | 0.306      | -            | -                | -                | -         |     3.74 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            8 |     3559 | 2024-01-20 | 3DMAX             | W   | 0.254      | -            | -                | -                | -         |     4.70 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            7 |     3572 | 2024-01-20 | SAW               | L   | 0.253      | -            | -                | -                | -         |    -2.13 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            6 |     3630 | 2024-01-19 | Gaimin Gladiators | W   | 0.246      | -            | -                | -                | -         |     4.62 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            5 |     3680 | 2024-01-18 | Natus Vincere     | L   | 0.240      | -            | -                | -                | -         |    -0.14 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            4 |     3693 | 2024-01-18 | Nexus             | W   | 0.239      | -            | -                | -                | -         |     1.32 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            3 |     4126 | 2023-12-17 | IKLA              | L   | 0.027      | -            | -                | -                | -         |    -0.81 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            2 |     4157 | 2023-12-16 | B8                | L   | 0.020      | -            | -                | -                | -         |    -0.63 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |
|            1 |     4183 | 2023-12-15 | ORKS              | W   | 0.014      | -            | -                | -                | -         |     0.01 | clax, d1Ledez, glowiing, iDISBALANCE, seized  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,764.47)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-05-26 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-05-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-04 |      0.953 | $5,000.00      | $4,764.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
