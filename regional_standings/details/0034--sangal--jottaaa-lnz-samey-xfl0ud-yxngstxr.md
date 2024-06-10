### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1214.6<br />
<br />
Final Rank Value (1214.6) = Starting Rank Value (1157.6) + Head To Head Adjustments (57.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.599[<sup>1</sup>](#table2)
- Bounty Collected: 0.501[<sup>2</sup>](#table1)
- Opponent Network: 0.420[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1157.6
- 400 + ( ( 0.380 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1157.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |       36 | 2024-06-09 | KOI               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.24 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           63 |      100 | 2024-06-08 | SINNERS           | W   | 1.000      | 0.500        | -                | 0.844 (0.422)    | 0 (0.000) |     7.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           62 |      165 | 2024-06-07 | Aurora            | W   | 1.000      | 0.500        | 0.513 (0.257)    | 0.918 (0.459)    | 0 (0.000) |    24.00 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           61 |      223 | 2024-06-06 | 3DMAX             | W   | 1.000      | 0.500        | 0.122 (0.061)    | 0.821 (0.410)    | 0 (0.000) |    16.29 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           60 |      286 | 2024-06-05 | SAW               | W   | 1.000      | 0.500        | 0.113 (0.056)    | -                | 0 (0.000) |    21.38 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           59 |      342 | 2024-06-04 | 9 Pandas          | W   | 1.000      | 0.500        | 0.114 (0.057)    | 0.758 (0.379)    | 0 (0.000) |    17.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           58 |      459 | 2024-05-31 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -7.20 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           57 |      462 | 2024-05-31 | FAVBET            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.39 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           56 |      467 | 2024-05-31 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -9.82 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |      492 | 2024-05-30 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -17.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           54 |      664 | 2024-05-22 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.154 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    14.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |      711 | 2024-05-21 | Monte             | W   | 1.000      | 0.500        | 0.179 (0.089)    | 0.686 (0.343)    | 0 (0.000) |    22.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |      746 | 2024-05-20 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |      762 | 2024-05-19 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.294 (0.147)    | -                | -         |    28.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |      768 | 2024-05-19 | Endpoint          | W   | 1.000      | -            | -                | -                | -         |    11.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |      804 | 2024-05-18 | Rare Atom         | W   | 1.000      | -            | -                | -                | -         |     2.69 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |      843 | 2024-05-17 | Permitta          | W   | 1.000      | 0.435        | -                | 0.972 (0.422)    | -         |     9.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |      863 | 2024-05-16 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -2.37 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |      925 | 2024-05-15 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -25.08 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |      988 | 2024-05-14 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -23.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |     1234 | 2024-05-02 | Metizport         | L   | 0.939      | -            | -                | -                | -         |   -17.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |     1267 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.931      | -            | -                | -                | -         |   -20.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |     1279 | 2024-04-30 | Zero Tenacity     | W   | 0.926      | 0.500        | 0.154 (0.072)    | 1.000 (0.463)    | -         |    11.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |     1309 | 2024-04-29 | SINNERS           | W   | 0.918      | 0.500        | -                | 0.844 (0.387)    | -         |    11.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |     1316 | 2024-04-28 | 1WIN              | W   | 0.913      | -            | -                | -                | -         |    10.68 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |     1341 | 2024-04-27 | PARIVISION        | L   | 0.906      | -            | -                | -                | -         |   -17.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |     1372 | 2024-04-26 | Nemiga            | W   | 0.899      | 0.435        | 0.335 (0.131)    | -                | -         |    19.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |     1445 | 2024-04-23 | Grannys Knockers  | W   | 0.878      | -            | -                | -                | -         |     4.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1450 | 2024-04-22 | BLEED             | L   | 0.873      | -            | -                | -                | -         |    -4.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1461 | 2024-04-22 | M1X KS            | L   | 0.871      | -            | -                | -                | -         |   -14.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1476 | 2024-04-21 | Alliance          | W   | 0.864      | -            | -                | -                | -         |     6.63 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1492 | 2024-04-20 | brazylijski luz   | W   | 0.860      | -            | -                | -                | -         |     5.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1511 | 2024-04-20 | JANO              | W   | 0.857      | -            | -                | -                | -         |     2.56 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1536 | 2024-04-19 | TSM               | W   | 0.853      | -            | -                | -                | -         |     3.50 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1542 | 2024-04-19 | Nemiga            | L   | 0.853      | -            | -                | -                | -         |    -8.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1640 | 2024-04-17 | 9 Pandas          | W   | 0.838      | -            | -                | -                | -         |    13.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1663 | 2024-04-16 | Zero Tenacity     | W   | 0.833      | -            | -                | -                | -         |    10.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     1683 | 2024-04-15 | B8                | W   | 0.827      | 0.500        | 0.160 (0.066)    | 1.000 (0.414)    | -         |    12.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     1686 | 2024-04-15 | Aurora Young Blud | W   | 0.826      | -            | -                | -                | -         |     3.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     1728 | 2024-04-12 | Monte             | L   | 0.806      | -            | -                | -                | -         |    -7.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     1982 | 2024-04-04 | EYEBALLERS        | W   | 0.753      | -            | -                | -                | -         |     7.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2061 | 2024-04-02 | 9 Pandas          | L   | 0.740      | -            | -                | -                | -         |    -8.72 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2422 | 2024-03-13 | KOI               | L   | 0.607      | -            | -                | -                | -         |   -10.26 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           21 |     2527 | 2024-03-09 | Zero Tenacity     | L   | 0.579      | -            | -                | -                | -         |    -9.71 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           20 |     2579 | 2024-03-07 | 500               | L   | 0.566      | -            | -                | -                | -         |   -15.11 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     2601 | 2024-03-06 | TSM               | W   | 0.560      | -            | -                | -                | -         |     2.09 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     2670 | 2024-03-04 | Sampi             | W   | 0.545      | -            | -                | -                | -         |     4.74 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     2696 | 2024-03-03 | Rebels            | L   | 0.539      | -            | -                | -                | -         |    -8.68 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     2722 | 2024-03-02 | HAVU              | W   | 0.531      | -            | -                | -                | -         |     1.92 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     2743 | 2024-02-29 | Rebels            | L   | 0.520      | -            | -                | -                | -         |    -8.69 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     2764 | 2024-02-28 | Alliance          | L   | 0.512      | -            | -                | -                | -         |   -12.78 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     2771 | 2024-02-27 | 9INE              | W   | 0.507      | -            | -                | -                | -         |     0.51 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     2817 | 2024-02-25 | Sashi             | W   | 0.494      | -            | -                | -                | -         |     7.47 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     2991 | 2024-02-18 | 500               | W   | 0.444      | -            | -                | -                | -         |     1.62 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     3198 | 2024-02-08 | GODSENT           | L   | 0.379      | -            | -                | -                | -         |   -11.51 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     3217 | 2024-02-06 | ex-Preasy         | L   | 0.365      | -            | -                | -                | -         |    -9.04 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     3251 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.351      | -            | -                | -                | -         |     3.39 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     3270 | 2024-02-03 | Entropiq          | L   | 0.346      | -            | -                | -                | -         |   -10.39 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     3280 | 2024-02-03 | Metizport         | L   | 0.344      | -            | -                | -                | -         |    -7.73 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     3332 | 2024-02-01 | Spirit Academy    | W   | 0.332      | -            | -                | -                | -         |     0.69 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     3340 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.331      | -            | -                | -                | -         |     3.17 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     3393 | 2024-01-28 | Gaimin Gladiators | L   | 0.305      | -            | -                | -                | -         |    -3.93 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     3457 | 2024-01-24 | Spirit Academy    | W   | 0.279      | -            | -                | -                | -         |     0.56 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     4039 | 2024-01-09 | BLEED             | L   | 0.180      | -            | -                | -                | -         |    -1.30 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-05-22 |      1.000 | $50,000.00     | $50,000.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
