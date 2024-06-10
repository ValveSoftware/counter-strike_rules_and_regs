### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, faveN, hampus, jkaem, nawwk<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1251.0<br />
<br />
Final Rank Value (1251.0) = Starting Rank Value (1373.9) + Head To Head Adjustments (-122.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.686[<sup>1</sup>](#table2)
- Bounty Collected: 0.500[<sup>2</sup>](#table1)
- Opponent Network: 0.448[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.489<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1373.9
- 400 + ( ( 0.489 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1373.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |       10 | 2024-06-10 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -18.45 | CYPHER, faveN, hampus, jkaem, nawwk |
|           64 |       59 | 2024-06-09 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.164 (0.082)    | 1.000 (0.500)    | 0 (0.000) |     9.99 | CYPHER, faveN, hampus, jkaem, nawwk |
|           63 |      109 | 2024-06-08 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.95 | CYPHER, faveN, hampus, jkaem, nawwk |
|           62 |      163 | 2024-06-07 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -22.91 | CYPHER, faveN, hampus, jkaem, nawwk |
|           61 |      308 | 2024-06-05 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.60 | CYPHER, faveN, hampus, jkaem, nawwk |
|           60 |      397 | 2024-06-02 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.51 | CYPHER, faveN, hampus, jkaem, nawwk |
|           59 |      407 | 2024-06-02 | Aurora            | W   | 1.000      | 0.500        | 0.513 (0.257)    | 0.918 (0.459)    | 1 (1.000) |    22.42 | CYPHER, faveN, hampus, jkaem, nawwk |
|           58 |      437 | 2024-06-01 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.36 | CYPHER, faveN, hampus, jkaem, nawwk |
|           57 |      495 | 2024-05-29 | ATOX              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.28 | CYPHER, faveN, hampus, jkaem, nawwk |
|           56 |      519 | 2024-05-28 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.69 | CYPHER, faveN, hampus, jkaem, nawwk |
|           55 |      708 | 2024-05-21 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -21.90 | CYPHER, faveN, hampus, jkaem, nawwk |
|           54 |      741 | 2024-05-20 | 9 Pandas          | W   | 1.000      | 0.500        | -                | 0.758 (0.379)    | 0 (0.000) |     9.94 | CYPHER, faveN, hampus, jkaem, nawwk |
|           53 |      779 | 2024-05-19 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.164 (0.082)    | 1.000 (0.500)    | 0 (0.000) |     8.99 | CYPHER, faveN, hampus, jkaem, nawwk |
|           52 |      832 | 2024-05-17 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -14.99 | CYPHER, faveN, hampus, jkaem, nawwk |
|           51 |      921 | 2024-05-15 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -19.89 | CYPHER, faveN, hampus, jkaem, nawwk |
|           50 |      929 | 2024-05-15 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.164 (0.082)    | 1.000 (0.500)    | 0 (0.000) |     7.71 | CYPHER, faveN, hampus, jkaem, nawwk |
|           49 |     1065 | 2024-05-11 | B8                | L   | 0.998      | -            | -                | -                | -         |   -23.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           48 |     1093 | 2024-05-09 | Sampi             | W   | 0.987      | 0.435        | -                | 0.883 (0.379)    | 0 (0.000) |     4.62 | CYPHER, draken, faveN, hampus, VLDN |
|           47 |     1135 | 2024-05-07 | 1WIN              | L   | 0.973      | -            | -                | -                | -         |   -25.66 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           46 |     1159 | 2024-05-06 | Insilio           | W   | 0.965      | -            | -                | -                | -         |     4.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           45 |     1225 | 2024-05-02 | AMKAL             | L   | 0.940      | -            | -                | -                | -         |   -19.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           44 |     1259 | 2024-05-01 | MOUZ NXT          | L   | 0.932      | -            | -                | -                | -         |   -23.68 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           43 |     1291 | 2024-04-30 | Permitta          | W   | 0.924      | -            | -                | -                | -         |     2.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |     1314 | 2024-04-28 | B8                | W   | 0.914      | 0.500        | 0.160 (0.073)    | 1.000 (0.457)    | -         |     4.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     1365 | 2024-04-26 | M1X KS            | W   | 0.900      | -            | -                | -                | -         |     4.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |     1373 | 2024-04-26 | DMS               | W   | 0.898      | -            | -                | -                | -         |     1.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     1413 | 2024-04-24 | Permitta          | W   | 0.887      | -            | -                | -                | -         |     3.37 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     1416 | 2024-04-24 | Nemiga            | L   | 0.886      | -            | -                | -                | -         |   -17.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     1432 | 2024-04-23 | B8                | W   | 0.879      | 0.500        | 0.160 (0.070)    | 1.000 (0.440)    | -         |     3.96 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     1441 | 2024-04-23 | Sashi             | L   | 0.878      | -            | -                | -                | -         |   -20.34 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     1450 | 2024-04-22 | Sangal            | W   | 0.873      | 0.500        | 0.214 (0.093)    | 0.998 (0.436)    | -         |     4.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     1452 | 2024-04-22 | Gaimin Gladiators | W   | 0.872      | -            | -                | -                | -         |    10.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     1467 | 2024-04-21 | Illuminar         | W   | 0.867      | -            | -                | -                | -         |     0.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     1473 | 2024-04-21 | BIG               | W   | 0.865      | 0.384        | 0.228 (0.076)    | -                | -         |    15.42 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     1497 | 2024-04-20 | MOUZ NXT          | W   | 0.859      | 0.500        | 0.164 (0.070)    | 1.000 (0.430)    | -         |     5.31 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     1553 | 2024-04-19 | Sampi             | W   | 0.852      | -            | -                | -                | -         |     3.32 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     1610 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.844      | -            | -                | -                | -         |     2.87 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     1634 | 2024-04-17 | 3DMAX             | L   | 0.839      | -            | -                | -                | -         |   -18.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     1662 | 2024-04-16 | KOI               | W   | 0.834      | -            | -                | -                | -         |     4.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     1674 | 2024-04-16 | SINNERS           | W   | 0.831      | -            | -                | -                | -         |     6.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     1852 | 2024-04-09 | Alliance          | W   | 0.787      | -            | -                | -                | -         |     1.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     1865 | 2024-04-09 | HAVU              | W   | 0.785      | -            | -                | -                | -         |     0.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     1946 | 2024-04-05 | BetBoom           | L   | 0.760      | -            | -                | -                | -         |    -5.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     1949 | 2024-04-05 | Alliance          | W   | 0.759      | -            | -                | -                | -         |     1.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     1990 | 2024-04-04 | Benched Heroes    | W   | 0.753      | -            | -                | -                | -         |     0.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     1996 | 2024-04-04 | BetBoom           | L   | 0.752      | -            | -                | -                | -         |    -5.65 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2065 | 2024-04-02 | Passion UA        | W   | 0.740      | -            | -                | -                | -         |     2.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     2088 | 2024-04-01 | Enterprise        | L   | 0.732      | -            | -                | -                | -         |   -20.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     2439 | 2024-03-13 | Sashi             | W   | 0.605      | -            | -                | -                | -         |     2.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2540 | 2024-03-09 | Endpoint          | W   | 0.578      | -            | -                | -                | -         |     1.24 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     2607 | 2024-03-06 | fnatic            | L   | 0.560      | -            | -                | -                | -         |   -10.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     2653 | 2024-03-05 | BetBoom           | W   | 0.552      | 0.500        | 0.427 (0.118)    | -                | -         |    13.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     2662 | 2024-03-04 | Rebels            | W   | 0.547      | -            | -                | -                | -         |     3.29 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     2668 | 2024-03-04 | GODSENT           | W   | 0.545      | -            | -                | -                | -         |     0.17 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     2734 | 2024-03-01 | Young Ninjas      | W   | 0.526      | -            | -                | -                | -         |     0.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     2749 | 2024-02-29 | GODSENT           | W   | 0.518      | -            | -                | -                | -         |     0.17 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            9 |     2765 | 2024-02-28 | BIG               | W   | 0.511      | -            | -                | -                | -         |    10.02 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3200 | 2024-02-08 | Passion UA        | W   | 0.379      | -            | -                | -                | -         |     1.80 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            7 |     3338 | 2024-02-01 | Into the Breach   | L   | 0.332      | -            | -                | -                | -         |   -10.19 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            6 |     3357 | 2024-01-31 | 9INE              | W   | 0.325      | -            | -                | -                | -         |     0.10 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            5 |     3382 | 2024-01-29 | Metizport         | L   | 0.312      | -            | -                | -                | -         |    -8.87 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            4 |     3448 | 2024-01-25 | Into the Breach   | W   | 0.284      | -            | -                | -                | -         |     0.21 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     4018 | 2024-01-09 | Entropiq          | L   | 0.181      | -            | -                | -                | -         |    -5.61 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     4031 | 2024-01-09 | IKLA              | W   | 0.180      | -            | -                | -                | -         |     0.05 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            1 |     4039 | 2024-01-09 | Sangal            | W   | 0.180      | -            | -                | -                | -         |     1.30 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,079.53)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-02 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-05-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-24 |      0.886 | $25,000.00     | $22,146.64      |
| 2024-04-22 |      0.872 | $20,000.00     | $17,438.37      |
| 2024-03-06 |      0.560 | $25,000.00     | $13,994.52      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
