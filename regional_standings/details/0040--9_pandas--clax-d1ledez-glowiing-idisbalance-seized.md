### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: clax, d1Ledez, glowiing, iDISBALANCE, seized<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1123.7<br />
<br />
Final Rank Value (1123.7) = Starting Rank Value (1145.4) + Head To Head Adjustments (-21.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.364[<sup>2</sup>](#table1)
- LAN Wins: 0.232[<sup>2</sup>](#table1)

The average of these factors is 0.384<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1145.4
- 400 + ( ( 0.384 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1145.4


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
|           58 |       68 | 2024-05-26 | MOUZ NXT          | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | 0 (0.000) |    11.93 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           57 |       72 | 2024-05-26 | 1WIN              | W   | 1.000      | 0.435        | 0.043 (0.019)    | 0.666 (0.290)    | 0 (0.000) |    14.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           56 |       86 | 2024-05-25 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.79 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           55 |      112 | 2024-05-24 | SINNERS           | W   | 1.000      | 0.435        | -                | 0.728 (0.316)    | 0 (0.000) |    10.10 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           54 |      241 | 2024-05-20 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -12.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           53 |      294 | 2024-05-18 | Passion UA        | W   | 1.000      | 0.500        | 0.056 (0.028)    | 0.759 (0.380)    | 0 (0.000) |     9.75 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           52 |      366 | 2024-05-16 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.650 (0.325)    | 0 (0.000) |     8.94 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           51 |      527 | 2024-05-12 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -6.38 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           50 |      553 | 2024-05-11 | RUBY              | W   | 1.000      | -            | -                | -                | -         |     8.62 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           49 |      600 | 2024-05-09 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.147 (0.064)    | 1.000 (0.435)    | -         |    12.06 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           48 |      640 | 2024-05-07 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -9.67 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           47 |      685 | 2024-05-05 | ARCRED            | W   | 1.000      | -            | -                | -                | -         |     3.63 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           46 |      694 | 2024-05-04 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -5.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           45 |      700 | 2024-05-03 | fnatic            | W   | 1.000      | 0.435        | 0.148 (0.064)    | -                | -         |    18.90 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           44 |      744 | 2024-05-02 | MOUZ NXT          | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | -         |    15.93 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           43 |      790 | 2024-04-30 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -21.34 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           42 |      827 | 2024-04-28 | Gaimin Gladiators | W   | 0.991      | 0.500        | 0.090 (0.045)    | 0.809 (0.401)    | -         |    21.52 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           41 |      867 | 2024-04-26 | Passion UA        | L   | 0.979      | -            | -                | -                | -         |   -21.09 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           40 |     1056 | 2024-04-19 | Alliance          | L   | 0.930      | -            | -                | -                | -         |   -23.02 | clax, d1Ledez, glowiing, iDISBALANCE, Xoma   |
|           39 |     1140 | 2024-04-17 | Sangal            | L   | 0.917      | -            | -                | -                | -         |   -16.90 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           38 |     1290 | 2024-04-10 | SAW               | L   | 0.873      | -            | -                | -                | -         |    -5.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           37 |     1343 | 2024-04-09 | SINNERS           | L   | 0.866      | -            | -                | -                | -         |   -17.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           36 |     1366 | 2024-04-09 | Aurora            | L   | 0.864      | -            | -                | -                | -         |    -4.83 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           35 |     1380 | 2024-04-08 | 1WIN              | L   | 0.859      | -            | -                | -                | -         |   -19.62 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           34 |     1389 | 2024-04-08 | Metizport         | W   | 0.858      | -            | -                | -                | -         |    10.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           33 |     1450 | 2024-04-05 | Secret            | L   | 0.838      | -            | -                | -                | -         |   -25.29 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           32 |     1481 | 2024-04-04 | TSM               | W   | 0.833      | -            | -                | -                | -         |     2.45 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           31 |     1526 | 2024-04-03 | EYEBALLERS        | W   | 0.826      | 0.500        | -                | 0.611 (0.252)    | -         |     4.58 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           30 |     1534 | 2024-04-03 | 9INE              | W   | 0.825      | -            | -                | -                | -         |     0.38 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           29 |     1561 | 2024-04-02 | Sangal            | W   | 0.819      | 0.500        | 0.166 (0.068)    | 0.911 (0.373)    | -         |     7.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           28 |     2095 | 2024-03-06 | KOI               | L   | 0.640      | -            | -                | -                | -         |   -13.96 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           27 |     2235 | 2024-03-01 | Aurora            | L   | 0.605      | -            | -                | -                | -         |    -3.63 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           26 |     2241 | 2024-02-29 | FORZE             | L   | 0.600      | -            | -                | -                | -         |   -13.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           25 |     2255 | 2024-02-28 | Spirit Academy    | W   | 0.593      | -            | -                | -                | -         |     1.39 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           24 |     2261 | 2024-02-28 | Lotus             | W   | 0.592      | -            | -                | -                | -         |     0.50 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           23 |     2353 | 2024-02-24 | GamerLegion       | W   | 0.565      | -            | -                | -                | 1 (0.565) |     9.47 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           22 |     2370 | 2024-02-23 | Astralis          | W   | 0.557      | 0.143        | 0.395 (0.031)    | -                | 1 (0.557) |    16.76 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           21 |     2517 | 2024-02-17 | AMKAL             | L   | 0.518      | -            | -                | -                | -         |    -7.24 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           20 |     2539 | 2024-02-16 | 3DMAX             | W   | 0.512      | -            | -                | -                | 1 (0.512) |     7.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           19 |     2575 | 2024-02-15 | KOI               | L   | 0.504      | -            | -                | -                | -         |   -11.64 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           18 |     2606 | 2024-02-14 | SAW               | W   | 0.498      | -            | -                | -                | 1 (0.498) |    11.68 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           17 |     2618 | 2024-02-14 | FaZe              | L   | 0.497      | -            | -                | -                | -         |    -0.14 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           16 |     2871 | 2024-01-30 | Nemiga            | L   | 0.399      | -            | -                | -                | -         |    -5.41 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           15 |     2890 | 2024-01-28 | Rebels            | W   | 0.386      | -            | -                | -                | -         |     4.42 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           14 |     3059 | 2024-01-20 | 3DMAX             | W   | 0.333      | -            | -                | -                | -         |     5.61 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           13 |     3072 | 2024-01-20 | SAW               | L   | 0.332      | -            | -                | -                | -         |    -2.48 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           12 |     3130 | 2024-01-19 | Gaimin Gladiators | W   | 0.325      | -            | -                | -                | -         |     6.21 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           11 |     3180 | 2024-01-18 | Natus Vincere     | L   | 0.319      | -            | -                | -                | -         |    -0.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           10 |     3193 | 2024-01-18 | Nexus             | W   | 0.318      | -            | -                | -                | -         |     1.91 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            9 |     3626 | 2023-12-17 | IKLA              | L   | 0.106      | -            | -                | -                | -         |    -3.22 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            8 |     3657 | 2023-12-16 | B8                | L   | 0.099      | -            | -                | -                | -         |    -3.05 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            7 |     3683 | 2023-12-15 | ORKS              | W   | 0.093      | -            | -                | -                | -         |     0.07 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            6 |     3723 | 2023-12-11 | ex-Preasy         | L   | 0.066      | -            | -                | -                | -         |    -1.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            5 |     3824 | 2023-12-06 | ex-Guild Eagles   | L   | 0.033      | -            | -                | -                | -         |    -0.78 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            4 |     3837 | 2023-12-06 | Gaimin Gladiators | W   | 0.032      | -            | -                | -                | -         |     0.61 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            3 |     3848 | 2023-12-06 | SAW               | W   | 0.031      | -            | -                | -                | -         |     0.74 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            2 |     3857 | 2023-12-05 | BIG               | L   | 0.026      | -            | -                | -                | -         |    -0.16 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            1 |     3891 | 2023-12-03 | Into the Breach   | W   | 0.013      | -            | -                | -                | -         |     0.03 | clax, d1Ledez, glowiing, iDISBALANCE, seized |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,632.80)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-05-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-12-13 |      0.079 | $500.00        | $39.68          |
| 2023-12-07 |      0.040 | $15,000.00     | $593.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
