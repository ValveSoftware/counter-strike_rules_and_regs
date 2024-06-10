### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1097.5<br />
<br />
Final Rank Value (1097.5) = Starting Rank Value (1106.7) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.560[<sup>1</sup>](#table2)
- Bounty Collected: 0.483[<sup>2</sup>](#table1)
- Opponent Network: 0.375[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1106.7
- 400 + ( ( 0.354 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1106.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           88 |        8 | 2024-06-10 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -25.57 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           87 |       47 | 2024-06-09 | GhoulsW           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           86 |       59 | 2024-06-09 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.99 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           85 |      123 | 2024-06-08 | Sampi             | W   | 1.000      | 0.435        | -                | 0.883 (0.384)    | 0 (0.000) |     7.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           84 |      131 | 2024-06-08 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -16.25 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           83 |      158 | 2024-06-07 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -9.41 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           82 |      224 | 2024-06-06 | Rhyno             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           81 |      249 | 2024-06-06 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.49 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           80 |      353 | 2024-06-04 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           79 |      359 | 2024-06-04 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.01 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           78 |      399 | 2024-06-02 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -4.09 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |      431 | 2024-06-01 | AMKAL             | W   | 1.000      | 0.435        | 0.143 (0.062)    | 0.711 (0.309)    | 0 (0.000) |    22.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |      492 | 2024-05-30 | Sangal            | W   | 1.000      | 0.435        | 0.214 (0.093)    | 0.998 (0.434)    | 0 (0.000) |    17.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |      533 | 2024-05-28 | RUBY              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.40 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |      561 | 2024-05-27 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |      568 | 2024-05-26 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -12.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |      576 | 2024-05-26 | B8                | W   | 1.000      | 0.435        | 0.160 (0.069)    | 1.000 (0.435)    | -         |    21.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |      600 | 2024-05-25 | 3DMAX             | W   | 1.000      | 0.435        | 0.122 (0.053)    | 0.821 (0.357)    | -         |    21.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |      615 | 2024-05-24 | Illuminar         | W   | 1.000      | -            | -                | -                | -         |     2.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |      627 | 2024-05-23 | Rare Atom         | W   | 1.000      | -            | -                | -                | -         |     2.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |      667 | 2024-05-22 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -19.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |      709 | 2024-05-21 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -22.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |      779 | 2024-05-19 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -8.99 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |      845 | 2024-05-17 | DMS               | W   | 1.000      | -            | -                | -                | -         |     7.88 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |      869 | 2024-05-16 | Sampi             | W   | 1.000      | 0.435        | -                | 0.883 (0.384)    | -         |    11.31 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           63 |      929 | 2024-05-15 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -7.71 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |      985 | 2024-05-14 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |     1009 | 2024-05-13 | Space             | W   | 1.000      | -            | -                | -                | -         |     6.85 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |     1031 | 2024-05-12 | B8                | L   | 1.000      | -            | -                | -                | -         |   -14.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |     1042 | 2024-05-11 | Endpoint          | W   | 1.000      | -            | -                | -                | -         |    10.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |     1071 | 2024-05-10 | Aurora            | W   | 0.994      | 0.435        | 0.513 (0.222)    | 0.918 (0.397)    | -         |    27.99 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |     1141 | 2024-05-07 | RUSH B            | W   | 0.972      | -            | -                | -                | -         |     7.27 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |     1183 | 2024-05-05 | GL Academy        | W   | 0.958      | -            | -                | -                | -         |     5.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |     1186 | 2024-05-04 | Enterprise        | L   | 0.954      | -            | -                | -                | -         |   -21.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |     1206 | 2024-05-03 | Nemiga            | L   | 0.946      | -            | -                | -                | -         |    -8.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |     1223 | 2024-05-02 | Endpoint          | L   | 0.940      | -            | -                | -                | -         |   -20.02 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |     1239 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.938      | -            | -                | -                | -         |    10.80 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |     1244 | 2024-05-02 | 9 Pandas          | L   | 0.937      | -            | -                | -                | -         |   -15.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |     1259 | 2024-05-01 | BLEED             | W   | 0.932      | 0.500        | 0.349 (0.163)    | 1.000 (0.466)    | -         |    23.68 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |     1271 | 2024-04-30 | ECLOT             | W   | 0.927      | 0.500        | 0.101 (0.047)    | -                | -         |    18.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |     1281 | 2024-04-30 | V1dar             | W   | 0.926      | -            | -                | -                | -         |     1.62 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           47 |     1295 | 2024-04-29 | Nemiga            | L   | 0.920      | -            | -                | -                | -         |    -8.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |     1305 | 2024-04-29 | Grannys Knockers  | W   | 0.918      | -            | -                | -                | -         |     5.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |     1335 | 2024-04-27 | ECLOT             | W   | 0.907      | 0.500        | 0.101 (0.046)    | -                | -         |    18.73 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |     1405 | 2024-04-25 | Insilio           | L   | 0.891      | -            | -                | -                | -         |   -17.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |     1419 | 2024-04-24 | PARIVISION        | L   | 0.886      | -            | -                | -                | -         |   -18.39 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |     1451 | 2024-04-22 | EYEBALLERS        | W   | 0.872      | -            | -                | -                | -         |     7.13 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |     1458 | 2024-04-22 | Nemiga            | L   | 0.871      | -            | -                | -                | -         |    -8.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     1469 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.866      | -            | -                | -                | -         |     7.97 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     1475 | 2024-04-21 | ECLOT             | L   | 0.865      | -            | -                | -                | -         |   -10.79 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     1497 | 2024-04-20 | BLEED             | L   | 0.859      | -            | -                | -                | -         |    -5.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1584 | 2024-04-18 | Enterprise        | W   | 0.846      | -            | -                | -                | -         |     9.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     1606 | 2024-04-18 | ENCE Academy      | W   | 0.845      | -            | -                | -                | -         |     5.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     1653 | 2024-04-17 | JANO              | W   | 0.837      | -            | -                | -                | -         |     2.76 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1666 | 2024-04-16 | GamerLegion       | L   | 0.832      | -            | -                | -                | -         |    -7.50 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           33 |     1692 | 2024-04-15 | Alliance          | W   | 0.824      | -            | -                | -                | -         |     6.72 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     1733 | 2024-04-12 | Permitta          | L   | 0.805      | -            | -                | -                | -         |   -16.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     1860 | 2024-04-09 | Zero Tenacity     | W   | 0.786      | 0.371        | 0.154 (0.045)    | 1.000 (0.291)    | -         |    10.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     1890 | 2024-04-08 | B8                | W   | 0.779      | 0.384        | 0.160 (0.048)    | 1.000 (0.299)    | -         |    12.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     2020 | 2024-04-03 | PARIVISION        | W   | 0.747      | -            | -                | -                | -         |     9.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     2350 | 2024-03-16 | Sampi             | L   | 0.625      | -            | -                | -                | -         |   -12.73 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     2367 | 2024-03-15 | Entropiq          | W   | 0.619      | -            | -                | -                | -         |     1.80 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     2416 | 2024-03-13 | Permitta          | L   | 0.608      | -            | -                | -                | -         |   -11.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     2436 | 2024-03-13 | Alliance          | W   | 0.605      | -            | -                | -                | -         |     5.10 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     2464 | 2024-03-12 | GODSENT           | W   | 0.599      | -            | -                | -                | -         |     0.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2470 | 2024-03-12 | Sampi             | L   | 0.598      | -            | -                | -                | -         |   -12.83 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           22 |     2490 | 2024-03-11 | Passion UA        | W   | 0.592      | -            | -                | -                | -         |     7.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2492 | 2024-03-11 | NOM               | W   | 0.591      | -            | -                | -                | -         |     0.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2500 | 2024-03-10 | V1dar             | W   | 0.587      | -            | -                | -                | -         |     0.87 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     2509 | 2024-03-10 | Passion UA        | L   | 0.586      | -            | -                | -                | -         |   -11.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     2513 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.585      | -            | -                | -                | -         |     6.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     2551 | 2024-03-08 | Fraud5            | W   | 0.573      | -            | -                | -                | -         |     1.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     2567 | 2024-03-07 | INGLORIOUS        | L   | 0.567      | -            | -                | -                | -         |   -17.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     2702 | 2024-03-03 | ex-Preasy         | W   | 0.538      | -            | -                | -                | -         |     4.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     2715 | 2024-03-02 | ECF               | W   | 0.532      | -            | -                | -                | -         |     2.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           13 |     2785 | 2024-02-27 | ECLOT             | L   | 0.505      | -            | -                | -                | -         |    -5.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     2800 | 2024-02-26 | BLEED             | W   | 0.499      | -            | -                | -                | -         |     0.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     2863 | 2024-02-24 | Sashi             | W   | 0.484      | -            | -                | -                | -         |     8.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     2917 | 2024-02-21 | Entropiq          | W   | 0.465      | -            | -                | -                | -         |     0.97 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            9 |     3411 | 2024-01-27 | TSM               | L   | 0.298      | -            | -                | -                | -         |    -8.36 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            8 |     3481 | 2024-01-23 | SINNERS           | L   | 0.272      | -            | -                | -                | -         |    -4.23 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|            7 |     3543 | 2024-01-21 | Astralis Talent   | W   | 0.257      | -            | -                | -                | -         |     1.76 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            6 |     3586 | 2024-01-20 | Monte Gen         | W   | 0.251      | -            | -                | -                | -         |     0.46 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            5 |     3634 | 2024-01-19 | Astralis Talent   | W   | 0.245      | -            | -                | -                | -         |     1.67 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            4 |     3642 | 2024-01-19 | WOPA              | W   | 0.244      | -            | -                | -                | -         |     0.28 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            3 |     3708 | 2024-01-18 | Passion UA        | W   | 0.238      | -            | -                | -                | -         |     3.14 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            2 |     3748 | 2024-01-17 | Aurora Young Blud | W   | 0.231      | -            | -                | -                | -         |     0.84 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            1 |     3832 | 2024-01-15 | The Prodigies     | L   | 0.218      | -            | -                | -                | -         |    -6.60 | Chr1zN, Neityu, PR, sirah, TOBIZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49,789.62)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-26 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2024-05-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-03 |      0.946 | $25,000.00     | $23,646.82      |
| 2024-03-18 |      0.638 | $1,000.00      | $637.93         |
| 2024-03-11 |      0.592 | $3,500.00      | $2,072.09       |
| 2024-02-28 |      0.511 | $1,500.00      | $766.92         |
| 2024-01-21 |      0.257 | $5,000.00      | $1,287.46       |
| 2024-01-20 |      0.251 | $3,500.00      | $878.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
