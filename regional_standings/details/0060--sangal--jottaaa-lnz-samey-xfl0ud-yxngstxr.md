### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  945.7<br />
<br />
Final Rank Value (945.7) = Starting Rank Value (766.9) + Head To Head Adjustments (178.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.328[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.9
- 400 + ( ( 0.193 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 766.9


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
|           47 |       83 | 2024-05-02 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -11.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |      116 | 2024-05-01 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -16.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |      128 | 2024-04-30 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.093 (0.047)    | 0.936 (0.468)    | 0 (0.000) |    15.11 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |      158 | 2024-04-29 | SINNERS           | W   | 1.000      | 0.500        | 0.033 (0.016)    | 0.749 (0.374)    | 0 (0.000) |    16.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |      165 | 2024-04-28 | 1WIN              | W   | 1.000      | 0.435        | -                | 0.480 (0.208)    | 0 (0.000) |     9.21 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |      190 | 2024-04-27 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -14.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |      221 | 2024-04-26 | Nemiga            | W   | 1.000      | 0.435        | 0.667 (0.290)    | 0.724 (0.315)    | 0 (0.000) |    26.86 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |      294 | 2024-04-23 | Grannys Knockers  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.83 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |      299 | 2024-04-22 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -4.51 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |      310 | 2024-04-22 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |   -11.74 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |      325 | 2024-04-21 | Alliance          | W   | 1.000      | 0.500        | -                | 0.815 (0.407)    | 0 (0.000) |    12.99 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |      341 | 2024-04-20 | brazylijski luz   | W   | 1.000      | 0.500        | -                | 0.373 (0.186)    | 0 (0.000) |    14.65 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |      360 | 2024-04-20 | JANO              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |      385 | 2024-04-19 | TSM               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.92 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |      391 | 2024-04-19 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -3.84 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |      489 | 2024-04-17 | 9 Pandas          | W   | 1.000      | 0.500        | 0.081 (0.040)    | 0.676 (0.338)    | 0 (0.000) |    23.78 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |      512 | 2024-04-16 | Zero Tenacity     | W   | 1.000      | 0.143        | 0.093 (0.013)    | -                | -         |    16.60 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |      532 | 2024-04-15 | B8                | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.851 (0.425)    | -         |    21.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |      535 | 2024-04-15 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | -         |    10.39 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |      577 | 2024-04-12 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -2.26 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |      831 | 2024-04-04 | EYEBALLERS        | W   | 0.987      | 0.500        | 0.045 (0.022)    | 0.599 (0.295)    | -         |    20.07 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |      910 | 2024-04-02 | 9 Pandas          | L   | 0.973      | -            | -                | -                | -         |    -3.87 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     1271 | 2024-03-13 | KOI               | L   | 0.841      | -            | -                | -                | -         |    -4.50 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           24 |     1376 | 2024-03-09 | Zero Tenacity     | L   | 0.812      | -            | -                | -                | -         |    -8.78 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           23 |     1428 | 2024-03-07 | 500               | L   | 0.799      | -            | -                | -                | -         |   -12.27 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           22 |     1450 | 2024-03-06 | TSM               | W   | 0.794      | -            | -                | -                | -         |    12.16 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           21 |     1519 | 2024-03-04 | Sampi             | W   | 0.778      | 0.143        | 0.101 (0.011)    | -                | -         |    17.33 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           20 |     1545 | 2024-03-03 | Rebels            | L   | 0.773      | -            | -                | -                | -         |    -3.77 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     1571 | 2024-03-02 | HAVU              | W   | 0.764      | -            | -                | -                | -         |    12.84 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     1592 | 2024-02-29 | Rebels            | L   | 0.753      | -            | -                | -                | -         |    -3.54 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     1613 | 2024-02-28 | Alliance          | L   | 0.745      | -            | -                | -                | -         |    -9.59 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     1620 | 2024-02-27 | 9INE              | W   | 0.740      | -            | -                | -                | -         |     4.25 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     1666 | 2024-02-25 | Sashi             | W   | 0.727      | 0.358        | 0.188 (0.049)    | 1.000 (0.261)    | -         |    18.23 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     1840 | 2024-02-18 | 500               | W   | 0.678      | -            | -                | -                | -         |    11.06 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     2047 | 2024-02-08 | AURA              | L   | 0.612      | -            | -                | -                | -         |   -15.74 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     2066 | 2024-02-06 | ex-Preasy         | L   | 0.598      | -            | -                | -                | -         |    -3.85 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     2100 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.584      | 0.371        | 0.104 (0.023)    | -                | -         |    12.90 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     2119 | 2024-02-03 | Entropiq          | L   | 0.579      | -            | -                | -                | -         |   -10.19 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     2129 | 2024-02-03 | Metizport         | L   | 0.578      | -            | -                | -                | -         |    -3.90 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     2181 | 2024-02-01 | Spirit Academy    | W   | 0.566      | -            | -                | -                | -         |     7.80 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     2189 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.565      | -            | -                | -                | -         |    13.13 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     2242 | 2024-01-28 | Gaimin Gladiators | L   | 0.538      | -            | -                | -                | -         |    -0.76 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     2306 | 2024-01-24 | Spirit Academy    | W   | 0.512      | -            | -                | -                | -         |     7.43 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     2888 | 2024-01-09 | BLEED             | L   | 0.413      | -            | -                | -                | -         |    -1.22 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     3249 | 2023-12-03 | IKLA              | L   | 0.165      | -            | -                | -                | -         |    -3.91 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     3279 | 2023-12-02 | Entropiq          | W   | 0.158      | -            | -                | -                | -         |     2.30 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     3331 | 2023-11-28 | ALTERNATE aTTaX   | L   | 0.132      | -            | -                | -                | -         |    -0.89 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
