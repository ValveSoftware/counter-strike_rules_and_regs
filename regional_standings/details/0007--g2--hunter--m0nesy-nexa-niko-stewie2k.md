### Roster Details<br />
Team Name: G2<br />
Roster: huNter-, m0NESY, nexa, NiKo, Stewie2K<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1756.6<br />
<br />
Final Rank Value (1756.6) = Starting Rank Value (1796.4) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.753[<sup>1</sup>](#table2)
- Bounty Collected: 0.654[<sup>2</sup>](#table1)
- Opponent Network: 0.471[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.719<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1796.4
- 400 + ( ( 0.719 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1796.4


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
|           43 |       20 | 2024-05-28 | MOUZ              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.653 (0.408)    | 1 (1.000) |    24.38 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           42 |       44 | 2024-05-27 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -10.54 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           41 |       55 | 2024-05-27 | Falcons           | W   | 1.000      | 0.624        | 0.355 (0.222)    | -                | 1 (1.000) |     5.05 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           40 |      594 | 2024-05-09 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -7.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           39 |      620 | 2024-05-08 | 3DMAX             | W   | 1.000      | 0.889        | -                | 0.669 (0.595)    | 1 (1.000) |     1.36 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           38 |      639 | 2024-05-07 | BIG               | W   | 1.000      | 0.889        | 0.215 (0.192)    | 0.496 (0.441)    | 1 (1.000) |     3.27 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           37 |      815 | 2024-04-28 | M80               | W   | 0.993      | 0.889        | -                | 0.789 (0.697)    | 1 (0.993) |     1.55 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           36 |      849 | 2024-04-27 | Falcons           | W   | 0.984      | 0.889        | 0.355 (0.311)    | -                | 1 (0.984) |     4.60 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           35 |      870 | 2024-04-26 | M80               | L   | 0.978      | -            | -                | -                | -         |   -29.44 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           34 |      902 | 2024-04-25 | TheMongolz        | L   | 0.971      | -            | -                | -                | -         |   -26.35 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           33 |      922 | 2024-04-24 | TYLOO             | W   | 0.964      | -            | -                | -                | 1 (0.964) |     0.18 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           32 |     1222 | 2024-04-13 | MOUZ              | L   | 0.890      | -            | -                | -                | -         |    -7.71 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           31 |     1235 | 2024-04-12 | Virtus.pro        | W   | 0.883      | 0.624        | 0.271 (0.149)    | -                | 1 (0.883) |     9.56 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           30 |     1305 | 2024-04-10 | HEROIC            | W   | 0.871      | 0.624        | 0.322 (0.175)    | 0.662 (0.360)    | 1 (0.871) |     9.14 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           29 |     1364 | 2024-04-09 | Lynn Vision       | W   | 0.864      | -            | -                | -                | 1 (0.864) |     0.43 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     1395 | 2024-04-08 | Liquid            | L   | 0.857      | -            | -                | -                | -         |   -19.11 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     1405 | 2024-04-07 | 9z                | W   | 0.855      | 0.624        | -                | 0.769 (0.410)    | -         |     1.34 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     1598 | 2024-03-30 | Natus Vincere     | L   | 0.800      | -            | -                | -                | -         |   -10.45 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     1605 | 2024-03-29 | MOUZ              | W   | 0.793      | 1.000        | 1.000 (0.793)    | 0.653 (0.518)    | -         |    18.15 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     1702 | 2024-03-24 | Virtus.pro        | W   | 0.759      | 1.000        | 0.271 (0.205)    | 0.499 (0.379)    | -         |     9.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     1714 | 2024-03-23 | Gaimin Gladiators | W   | 0.752      | 1.000        | -                | 0.809 (0.608)    | -         |     1.16 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     1733 | 2024-03-22 | Cloud9            | L   | 0.744      | -            | -                | -                | -         |   -20.39 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     1743 | 2024-03-21 | Natus Vincere     | L   | 0.740      | -            | -                | -                | -         |    -9.59 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     1753 | 2024-03-21 | FURIA             | W   | 0.738      | 1.000        | -                | 0.402 (0.297)    | -         |     1.77 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2569 | 2024-02-15 | FaZe              | W   | 0.505      | -            | -                | -                | -         |    11.85 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2600 | 2024-02-14 | Eternal Fire      | W   | 0.499      | -            | -                | -                | -         |     8.75 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2616 | 2024-02-14 | Into the Breach   | W   | 0.497      | -            | -                | -                | -         |     0.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2681 | 2024-02-09 | FaZe              | L   | 0.465      | -            | -                | -                | -         |    -3.57 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     2709 | 2024-02-06 | HEROIC            | W   | 0.446      | 1.000        | 0.322 (0.144)    | -                | -         |     5.41 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     2715 | 2024-02-06 | Monte             | W   | 0.445      | -            | -                | -                | -         |     0.88 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     2721 | 2024-02-05 | ENCE              | L   | 0.439      | -            | -                | -                | -         |   -12.43 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     2774 | 2024-02-03 | HEROIC            | W   | 0.425      | 1.000        | 0.322 (0.137)    | -                | -         |     4.95 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     2888 | 2024-01-28 | Liquid            | W   | 0.386      | -            | -                | -                | -         |     4.20 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     2905 | 2024-01-27 | Natus Vincere     | L   | 0.378      | -            | -                | -                | -         |    -4.45 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     2921 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.372      | -            | -                | -                | -         |     0.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     2982 | 2024-01-23 | Natus Vincere     | L   | 0.351      | -            | -                | -                | -         |    -4.25 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     3014 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.344      | -            | -                | -                | -         |     0.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     3694 | 2023-12-15 | Natus Vincere     | L   | 0.091      | -            | -                | -                | -         |    -1.13 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     3696 | 2023-12-14 | FaZe              | L   | 0.085      | -            | -                | -                | -         |    -0.65 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     3706 | 2023-12-13 | MOUZ              | W   | 0.078      | -            | -                | -                | -         |     1.81 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     3839 | 2023-12-06 | ex-Guild Eagles   | L   | 0.032      | -            | -                | -                | -         |    -0.99 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     3867 | 2023-12-05 | Aurora            | L   | 0.025      | -            | -                | -                | -         |    -0.68 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     3899 | 2023-12-03 | Sprout            | W   | 0.011      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($141,238.58)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.897 | $20,000.00     | $17,944.69      |
| 2024-03-31 |      0.806 | $80,000.00     | $64,491.21      |
| 2024-02-11 |      0.479 | $40,000.00     | $19,161.89      |
| 2024-01-28 |      0.386 | $12,500.00     | $4,822.73       |
| 2023-12-17 |      0.105 | $25,000.00     | $2,620.35       |
| 2023-12-07 |      0.040 | $5,000.00      | $197.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
