### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1208.1<br />
<br />
Final Rank Value (1208.1) = Starting Rank Value (1168.3) + Head To Head Adjustments (39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.715[<sup>1</sup>](#table2)
- Bounty Collected: 0.495[<sup>2</sup>](#table1)
- Opponent Network: 0.403[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.403<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1168.3
- 400 + ( ( 0.403 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1168.3


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
|           47 |        8 | 2024-05-06 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.84 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           46 |       74 | 2024-05-02 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -15.45 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           45 |      108 | 2024-05-01 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -22.68 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           44 |      140 | 2024-04-30 | Permitta          | W   | 1.000      | 0.384        | -                | 0.979 (0.376)    | 0 (0.000) |     4.92 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           43 |      163 | 2024-04-28 | B8                | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.851 (0.425)    | 0 (0.000) |     5.79 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           42 |      214 | 2024-04-26 | Guild Eagles      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.13 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           41 |      222 | 2024-04-26 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.81 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           40 |      262 | 2024-04-24 | Permitta          | W   | 1.000      | 0.435        | -                | 0.979 (0.425)    | 0 (0.000) |     6.69 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           39 |      265 | 2024-04-24 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -14.32 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           38 |      281 | 2024-04-23 | B8                | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.851 (0.425)    | 0 (0.000) |     5.80 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           37 |      290 | 2024-04-23 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -18.75 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           36 |      299 | 2024-04-22 | Sangal            | W   | 1.000      | 0.500        | -                | 0.797 (0.399)    | 0 (0.000) |     4.51 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           35 |      301 | 2024-04-22 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.189 (0.073)    | 0.990 (0.381)    | 0 (0.000) |    20.75 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           34 |      316 | 2024-04-21 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.93 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           33 |      322 | 2024-04-21 | BIG               | W   | 1.000      | 0.384        | 0.454 (0.174)    | -                | -         |    22.39 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           32 |      346 | 2024-04-20 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.210 (0.105)    | 1.000 (0.500)    | -         |    10.65 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           31 |      402 | 2024-04-19 | Sampi             | W   | 1.000      | -            | -                | -                | -         |     8.72 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           30 |      459 | 2024-04-18 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.104 (0.052)    | 0.779 (0.389)    | -         |     5.88 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           29 |      483 | 2024-04-17 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -16.44 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           28 |      511 | 2024-04-16 | KOI               | W   | 1.000      | -            | -                | -                | -         |    11.65 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           27 |      523 | 2024-04-16 | SINNERS           | W   | 1.000      | -            | -                | -                | -         |    13.34 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           26 |      701 | 2024-04-09 | Alliance          | W   | 1.000      | 0.384        | -                | 0.815 (0.313)    | -         |     4.83 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           25 |      714 | 2024-04-09 | HAVU              | W   | 1.000      | -            | -                | -                | -         |     3.65 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           24 |      795 | 2024-04-05 | BetBoom           | L   | 0.993      | -            | -                | -                | -         |    -8.34 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           23 |      798 | 2024-04-05 | Alliance          | W   | 0.992      | -            | -                | -                | -         |     5.22 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           22 |      839 | 2024-04-04 | Benched Heroes    | W   | 0.986      | -            | -                | -                | -         |     0.45 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           21 |      845 | 2024-04-04 | BetBoom           | L   | 0.985      | -            | -                | -                | -         |    -8.75 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           20 |      914 | 2024-04-02 | Passion UA        | W   | 0.973      | 0.384        | 0.111 (0.041)    | -                | -         |     5.72 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           19 |      937 | 2024-04-01 | Enterprise        | L   | 0.965      | -            | -                | -                | -         |   -23.29 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           18 |     1288 | 2024-03-13 | Sashi             | W   | 0.838      | -            | -                | -                | -         |     6.28 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           17 |     1389 | 2024-03-09 | Endpoint          | W   | 0.811      | -            | -                | -                | -         |     4.26 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           16 |     1456 | 2024-03-06 | fnatic            | L   | 0.793      | -            | -                | -                | -         |   -11.67 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           15 |     1502 | 2024-03-05 | BetBoom           | W   | 0.785      | 0.500        | 0.563 (0.221)    | 1.000 (0.393)    | -         |    18.70 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           14 |     1511 | 2024-03-04 | Rebels            | W   | 0.780      | 0.500        | 0.111 (0.043)    | -                | -         |    10.53 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           13 |     1517 | 2024-03-04 | AURA              | W   | 0.778      | -            | -                | -                | -         |     0.64 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           12 |     1583 | 2024-03-01 | Young Ninjas      | W   | 0.759      | -            | -                | -                | -         |     5.20 | CeRq, CYPHER, faveN, hampus, VLDN  |
|           11 |     1598 | 2024-02-29 | AURA              | W   | 0.752      | -            | -                | -                | -         |     0.65 | CeRq, CYPHER, faveN, hampus, lauNX |
|           10 |     1614 | 2024-02-28 | BIG               | W   | 0.745      | 0.500        | 0.454 (0.169)    | -                | -         |    19.09 | CeRq, CYPHER, faveN, hampus, VLDN  |
|            9 |     1649 | 2024-02-26 | MOUZ NXT          | L   | 0.732      | -            | -                | -                | -         |   -13.86 | CeRq, faveN, hampus, lauNX, VLDN   |
|            8 |     2049 | 2024-02-08 | Passion UA        | W   | 0.612      | -            | -                | -                | -         |     6.10 | CeRq, CYPHER, faveN, hampus, lauNX |
|            7 |     2187 | 2024-02-01 | Into the Breach   | L   | 0.565      | -            | -                | -                | -         |   -15.55 | CeRq, CYPHER, faveN, hampus, lauNX |
|            6 |     2206 | 2024-01-31 | 9INE              | W   | 0.558      | -            | -                | -                | -         |     0.58 | CeRq, CYPHER, faveN, hampus, lauNX |
|            5 |     2231 | 2024-01-29 | Metizport         | L   | 0.545      | -            | -                | -                | -         |   -12.39 | CeRq, CYPHER, faveN, hampus, lauNX |
|            4 |     2297 | 2024-01-25 | Into the Breach   | W   | 0.518      | -            | -                | -                | -         |     1.82 | CeRq, CYPHER, faveN, hampus, lauNX |
|            3 |     2867 | 2024-01-09 | Entropiq          | L   | 0.414      | -            | -                | -                | -         |   -11.91 | CeRq, CYPHER, faveN, hampus, lauNX |
|            2 |     2880 | 2024-01-09 | IKLA              | W   | 0.413      | -            | -                | -                | -         |     0.49 | CeRq, CYPHER, faveN, hampus, lauNX |
|            1 |     2888 | 2024-01-09 | Sangal            | W   | 0.413      | -            | -                | -                | -         |     1.22 | CeRq, CYPHER, faveN, hampus, lauNX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,826.14)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-24 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-04-22 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-06 |      0.793 | $25,000.00     | $19,826.14      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
