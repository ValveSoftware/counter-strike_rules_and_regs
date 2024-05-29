### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1067.9<br />
<br />
Final Rank Value (1067.9) = Starting Rank Value (1077.4) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.562[<sup>1</sup>](#table2)
- Bounty Collected: 0.457[<sup>2</sup>](#table1)
- Opponent Network: 0.378[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.349<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1077.4
- 400 + ( ( 0.349 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1077.4


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
|           56 |      164 | 2024-05-22 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.147 (0.073)    | 1.000 (0.500)    | 0 (0.000) |    16.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |      211 | 2024-05-21 | Monte             | W   | 1.000      | 0.500        | 0.181 (0.090)    | 0.611 (0.306)    | 0 (0.000) |    23.59 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           54 |      246 | 2024-05-20 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |      262 | 2024-05-19 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.118 (0.059)    | -                | 0 (0.000) |    17.36 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |      268 | 2024-05-19 | Endpoint          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.02 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |      304 | 2024-05-18 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |      343 | 2024-05-17 | Permitta          | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | 0 (0.000) |    10.03 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |      363 | 2024-05-16 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -12.09 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |      425 | 2024-05-15 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -24.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |      488 | 2024-05-14 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -26.70 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |      734 | 2024-05-02 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -17.29 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |      767 | 2024-05-01 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -21.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |      779 | 2024-04-30 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.147 (0.073)    | 1.000 (0.500)    | 0 (0.000) |    12.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |      809 | 2024-04-29 | SINNERS           | W   | 0.997      | 0.500        | -                | 0.728 (0.363)    | 0 (0.000) |    10.60 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |      816 | 2024-04-28 | 1WIN              | W   | 0.992      | 0.435        | 0.043 (0.019)    | 0.666 (0.287)    | 0 (0.000) |    13.17 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |      841 | 2024-04-27 | PARIVISION        | L   | 0.985      | -            | -                | -                | -         |   -18.98 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |      872 | 2024-04-26 | Nemiga            | W   | 0.978      | 0.435        | 0.363 (0.154)    | 0.647 (0.275)    | -         |    22.43 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |      945 | 2024-04-23 | Grannys Knockers  | W   | 0.957      | -            | -                | -                | -         |     5.85 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |      950 | 2024-04-22 | BLEED             | L   | 0.952      | -            | -                | -                | -         |    -6.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |      961 | 2024-04-22 | ex-Guild Eagles   | L   | 0.950      | -            | -                | -                | -         |   -18.17 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |      976 | 2024-04-21 | Alliance          | W   | 0.944      | 0.500        | -                | 0.617 (0.291)    | -         |     7.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |      992 | 2024-04-20 | brazylijski luz   | W   | 0.939      | -            | -                | -                | -         |     7.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1011 | 2024-04-20 | JANO              | W   | 0.937      | -            | -                | -                | -         |     3.65 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1036 | 2024-04-19 | TSM               | W   | 0.933      | -            | -                | -                | -         |     5.20 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1042 | 2024-04-19 | Nemiga            | L   | 0.932      | -            | -                | -                | -         |    -8.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1140 | 2024-04-17 | 9 Pandas          | W   | 0.917      | 0.500        | 0.108 (0.050)    | 0.798 (0.366)    | -         |    16.90 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1163 | 2024-04-16 | Zero Tenacity     | W   | 0.913      | 0.143        | 0.147 (0.019)    | -                | -         |    11.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1183 | 2024-04-15 | B8                | W   | 0.906      | 0.500        | 0.165 (0.075)    | 1.000 (0.453)    | -         |    15.01 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1186 | 2024-04-15 | Aurora Young Blud | W   | 0.905      | -            | -                | -                | -         |     3.95 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     1228 | 2024-04-12 | Monte             | L   | 0.885      | -            | -                | -                | -         |    -6.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     1482 | 2024-04-04 | EYEBALLERS        | W   | 0.833      | -            | -                | -                | -         |     8.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     1561 | 2024-04-02 | 9 Pandas          | L   | 0.819      | -            | -                | -                | -         |    -7.59 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     1922 | 2024-03-13 | KOI               | L   | 0.686      | -            | -                | -                | -         |   -10.61 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           23 |     2027 | 2024-03-09 | Zero Tenacity     | L   | 0.658      | -            | -                | -                | -         |   -10.25 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           22 |     2079 | 2024-03-07 | 500               | L   | 0.645      | -            | -                | -                | -         |   -16.02 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           21 |     2101 | 2024-03-06 | TSM               | W   | 0.639      | -            | -                | -                | -         |     3.61 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           20 |     2170 | 2024-03-04 | Sampi             | W   | 0.624      | -            | -                | -                | -         |     6.64 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     2196 | 2024-03-03 | Rebels            | L   | 0.619      | -            | -                | -                | -         |    -8.47 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     2222 | 2024-03-02 | HAVU              | W   | 0.610      | -            | -                | -                | -         |     3.06 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     2243 | 2024-02-29 | Rebels            | L   | 0.599      | -            | -                | -                | -         |    -8.50 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     2264 | 2024-02-28 | Alliance          | L   | 0.591      | -            | -                | -                | -         |   -14.43 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     2271 | 2024-02-27 | 9INE              | W   | 0.586      | -            | -                | -                | -         |     0.91 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     2317 | 2024-02-25 | Sashi             | W   | 0.573      | 0.358        | 0.157 (0.032)    | -                | -         |     8.42 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     2491 | 2024-02-18 | 500               | W   | 0.524      | -            | -                | -                | -         |     2.77 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     2698 | 2024-02-08 | GODSENT           | L   | 0.458      | -            | -                | -                | -         |   -12.93 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     2717 | 2024-02-06 | ex-Preasy         | L   | 0.444      | -            | -                | -                | -         |    -9.62 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     2751 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.430      | -            | -                | -                | -         |     4.27 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     2770 | 2024-02-03 | Entropiq          | L   | 0.425      | -            | -                | -                | -         |   -12.41 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     2780 | 2024-02-03 | Metizport         | L   | 0.424      | -            | -                | -                | -         |    -8.38 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     2832 | 2024-02-01 | Spirit Academy    | W   | 0.412      | -            | -                | -                | -         |     1.36 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     2840 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.411      | -            | -                | -                | -         |     4.06 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     2893 | 2024-01-28 | Gaimin Gladiators | L   | 0.384      | -            | -                | -                | -         |    -3.85 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     2957 | 2024-01-24 | Spirit Academy    | W   | 0.358      | -            | -                | -                | -         |     1.15 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     3539 | 2024-01-09 | BLEED             | L   | 0.259      | -            | -                | -                | -         |    -2.72 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     3900 | 2023-12-03 | IKLA              | L   | 0.011      | -            | -                | -                | -         |    -0.32 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     3930 | 2023-12-02 | Entropiq          | W   | 0.003      | -            | -                | -                | -         |     0.01 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
