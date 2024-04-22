### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1155.1<br />
<br />
Final Rank Value (1155.1) = Starting Rank Value (1086.3) + Head To Head Adjustments (68.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.604[<sup>1</sup>](#table2)
- Bounty Collected: 0.476[<sup>2</sup>](#table1)
- Opponent Network: 0.341[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1086.3
- 400 + ( ( 0.355 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1086.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |        3 | 2024-04-22 | Sangal            | W   | 1.000      | 0.500        | -                | 0.685 (0.343)    | 0 (0.000) |     4.83 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           35 |        5 | 2024-04-22 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.156 (0.060)    | 1.000 (0.384)    | 0 (0.000) |    21.91 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           34 |       20 | 2024-04-21 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.28 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           33 |       26 | 2024-04-21 | BIG               | W   | 1.000      | 0.384        | 0.471 (0.181)    | -                | 0 (0.000) |    19.36 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           32 |       50 | 2024-04-20 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.054 (0.027)    | 0.970 (0.485)    | 0 (0.000) |     9.39 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           31 |      106 | 2024-04-19 | Sampi             | W   | 1.000      | 0.384        | 0.084 (0.032)    | 0.698 (0.268)    | 0 (0.000) |     9.35 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           30 |      163 | 2024-04-18 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | -                | 0.639 (0.320)    | 0 (0.000) |     6.13 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           29 |      187 | 2024-04-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -17.87 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           28 |      215 | 2024-04-16 | KOI               | W   | 1.000      | 0.384        | 0.058 (0.022)    | 0.902 (0.347)    | 0 (0.000) |    13.26 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           27 |      227 | 2024-04-16 | SINNERS           | W   | 1.000      | 0.384        | 0.043 (0.017)    | 0.779 (0.300)    | 0 (0.000) |    15.45 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           26 |      405 | 2024-04-09 | Alliance          | W   | 1.000      | 0.384        | -                | 0.855 (0.328)    | 0 (0.000) |     6.40 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           25 |      418 | 2024-04-09 | HAVU              | W   | 1.000      | -            | -                | -                | -         |     4.95 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           24 |      499 | 2024-04-05 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -11.22 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           23 |      502 | 2024-04-05 | Alliance          | W   | 1.000      | -            | -                | -                | -         |     7.04 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           22 |      543 | 2024-04-04 | Benched Heroes    | W   | 1.000      | -            | -                | -                | -         |     0.73 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           21 |      549 | 2024-04-04 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -12.05 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           20 |      618 | 2024-04-02 | Passion UA        | W   | 1.000      | 0.384        | -                | 0.625 (0.240)    | -         |     5.93 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           19 |      641 | 2024-04-01 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -22.70 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           18 |      992 | 2024-03-13 | Sashi             | W   | 0.931      | -            | -                | -                | -         |     6.36 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           17 |     1093 | 2024-03-09 | Endpoint          | W   | 0.904      | -            | -                | -                | -         |     5.26 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           16 |     1160 | 2024-03-06 | fnatic            | L   | 0.886      | -            | -                | -                | -         |   -14.02 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           15 |     1206 | 2024-03-05 | BetBoom           | W   | 0.879      | 0.500        | 0.457 (0.201)    | 0.898 (0.394)    | -         |    17.98 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           14 |     1215 | 2024-03-04 | Rebels            | W   | 0.874      | 0.500        | 0.050 (0.022)    | -                | -         |     8.22 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           13 |     1221 | 2024-03-04 | AURA              | W   | 0.872      | -            | -                | -                | -         |     1.09 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           12 |     1287 | 2024-03-01 | Young Ninjas      | W   | 0.853      | 0.500        | 0.082 (0.035)    | -                | -         |     8.26 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           11 |     1302 | 2024-02-29 | AURA              | W   | 0.845      | -            | -                | -                | -         |     1.15 | CeRq, CYPHER, faveN, hampus, lauNX |
|           10 |     1318 | 2024-02-28 | BIG               | W   | 0.838      | 0.500        | 0.471 (0.197)    | -                | -         |    19.37 | CeRq, CYPHER, faveN, hampus, VLDN  |
|            9 |     1353 | 2024-02-26 | MOUZ NXT          | L   | 0.826      | -            | -                | -                | -         |   -17.24 | CeRq, faveN, hampus, lauNX, VLDN   |
|            8 |     1753 | 2024-02-08 | Passion UA        | W   | 0.705      | -            | -                | -                | -         |     6.76 | CeRq, CYPHER, faveN, hampus, lauNX |
|            7 |     1891 | 2024-02-01 | Into the Breach   | L   | 0.658      | -            | -                | -                | -         |   -16.35 | CeRq, CYPHER, faveN, hampus, lauNX |
|            6 |     1910 | 2024-01-31 | 9INE              | W   | 0.651      | -            | -                | -                | -         |     1.04 | CeRq, CYPHER, faveN, hampus, lauNX |
|            5 |     1935 | 2024-01-29 | Metizport         | L   | 0.638      | -            | -                | -                | -         |   -13.58 | CeRq, CYPHER, faveN, hampus, lauNX |
|            4 |     2001 | 2024-01-25 | Into the Breach   | W   | 0.611      | -            | -                | -                | -         |     3.73 | CeRq, CYPHER, faveN, hampus, lauNX |
|            3 |     2571 | 2024-01-09 | Entropiq          | L   | 0.507      | -            | -                | -                | -         |   -13.86 | CeRq, CYPHER, faveN, hampus, lauNX |
|            2 |     2584 | 2024-01-09 | IKLA              | W   | 0.506      | -            | -                | -                | -         |     1.03 | CeRq, CYPHER, faveN, hampus, lauNX |
|            1 |     2592 | 2024-01-09 | Sangal            | W   | 0.506      | -            | -                | -                | -         |     1.48 | CeRq, CYPHER, faveN, hampus, lauNX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,158.80)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-22 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-06 |      0.886 | $25,000.00     | $22,158.80      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
