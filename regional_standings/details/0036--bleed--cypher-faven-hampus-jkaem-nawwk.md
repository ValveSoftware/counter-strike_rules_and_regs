### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, faveN, hampus, jkaem, nawwk<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1155.1<br />
<br />
Final Rank Value (1155.1) = Starting Rank Value (1200.1) + Head To Head Adjustments (-45.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.622[<sup>1</sup>](#table2)
- Bounty Collected: 0.476[<sup>2</sup>](#table1)
- Opponent Network: 0.443[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.412<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1200.1
- 400 + ( ( 0.412 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1200.1


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
|           56 |       19 | 2024-05-28 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.93 | CYPHER, faveN, hampus, jkaem, nawwk |
|           55 |      208 | 2024-05-21 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -20.05 | CYPHER, faveN, hampus, jkaem, nawwk |
|           54 |      241 | 2024-05-20 | 9 Pandas          | W   | 1.000      | 0.500        | 0.108 (0.054)    | 0.798 (0.399)    | 0 (0.000) |    12.22 | CYPHER, faveN, hampus, jkaem, nawwk |
|           53 |      279 | 2024-05-19 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.157 (0.079)    | 1.000 (0.500)    | 0 (0.000) |    10.59 | CYPHER, faveN, hampus, jkaem, nawwk |
|           52 |      332 | 2024-05-17 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.08 | CYPHER, faveN, hampus, jkaem, nawwk |
|           51 |      421 | 2024-05-15 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -17.23 | CYPHER, faveN, hampus, jkaem, nawwk |
|           50 |      429 | 2024-05-15 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.157 (0.079)    | 1.000 (0.500)    | 0 (0.000) |     9.61 | CYPHER, faveN, hampus, jkaem, nawwk |
|           49 |      565 | 2024-05-11 | B8                | L   | 1.000      | -            | -                | -                | -         |   -21.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           48 |      593 | 2024-05-09 | Sampi             | W   | 1.000      | 0.435        | -                | 0.794 (0.345)    | 0 (0.000) |     6.37 | CYPHER, draken, faveN, hampus, VLDN |
|           47 |      635 | 2024-05-07 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -24.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           46 |      659 | 2024-05-06 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           45 |      725 | 2024-05-02 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -16.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           44 |      759 | 2024-05-01 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -23.34 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           43 |      791 | 2024-04-30 | Permitta          | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | 0 (0.000) |     4.37 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |      814 | 2024-04-28 | B8                | W   | 0.993      | 0.500        | 0.165 (0.082)    | 1.000 (0.497)    | 0 (0.000) |     6.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |      865 | 2024-04-26 | ex-Guild Eagles   | W   | 0.979      | -            | -                | -                | 0 (0.000) |     5.67 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |      873 | 2024-04-26 | DMS               | W   | 0.978      | -            | -                | -                | 0 (0.000) |     1.46 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |      913 | 2024-04-24 | Permitta          | W   | 0.966      | 0.435        | -                | 1.000 (0.420)    | -         |     5.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |      916 | 2024-04-24 | Nemiga            | L   | 0.965      | -            | -                | -                | -         |   -15.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |      932 | 2024-04-23 | B8                | W   | 0.959      | 0.500        | 0.165 (0.079)    | 1.000 (0.479)    | -         |     6.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |      941 | 2024-04-23 | Sashi             | L   | 0.957      | -            | -                | -                | -         |   -19.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |      950 | 2024-04-22 | Sangal            | W   | 0.952      | 0.500        | 0.166 (0.079)    | 0.911 (0.433)    | -         |     6.97 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |      952 | 2024-04-22 | Gaimin Gladiators | W   | 0.951      | -            | -                | -                | -         |    15.85 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |      967 | 2024-04-21 | Illuminar         | W   | 0.946      | -            | -                | -                | -         |     0.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |      973 | 2024-04-21 | BIG               | W   | 0.944      | 0.384        | 0.215 (0.078)    | -                | -         |    19.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |      997 | 2024-04-20 | MOUZ NXT          | W   | 0.939      | 0.500        | 0.157 (0.074)    | 1.000 (0.469)    | -         |     8.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     1053 | 2024-04-19 | Sampi             | W   | 0.931      | -            | -                | -                | -         |     6.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     1110 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.923      | -            | -                | -                | -         |     4.65 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     1134 | 2024-04-17 | 3DMAX             | L   | 0.918      | -            | -                | -                | -         |   -17.17 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     1162 | 2024-04-16 | KOI               | W   | 0.913      | -            | -                | -                | -         |     7.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     1174 | 2024-04-16 | SINNERS           | W   | 0.910      | -            | -                | -                | -         |     9.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     1352 | 2024-04-09 | Alliance          | W   | 0.866      | -            | -                | -                | -         |     3.35 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     1365 | 2024-04-09 | HAVU              | W   | 0.864      | -            | -                | -                | -         |     1.85 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     1446 | 2024-04-05 | BetBoom           | L   | 0.839      | -            | -                | -                | -         |    -8.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     1449 | 2024-04-05 | Alliance          | W   | 0.838      | -            | -                | -                | -         |     3.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     1490 | 2024-04-04 | Benched Heroes    | W   | 0.832      | -            | -                | -                | -         |     0.32 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     1496 | 2024-04-04 | BetBoom           | L   | 0.831      | -            | -                | -                | -         |    -8.59 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     1565 | 2024-04-02 | Passion UA        | W   | 0.819      | -            | -                | -                | -         |     4.31 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     1588 | 2024-04-01 | Enterprise        | L   | 0.811      | -            | -                | -                | -         |   -21.79 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     1939 | 2024-03-13 | Sashi             | W   | 0.684      | -            | -                | -                | -         |     4.37 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2040 | 2024-03-09 | Endpoint          | W   | 0.657      | -            | -                | -                | -         |     2.81 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     2107 | 2024-03-06 | fnatic            | L   | 0.639      | -            | -                | -                | -         |   -12.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     2153 | 2024-03-05 | BetBoom           | W   | 0.631      | 0.500        | 0.392 (0.124)    | -                | -         |    13.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     2162 | 2024-03-04 | Rebels            | W   | 0.626      | -            | -                | -                | -         |     6.67 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     2168 | 2024-03-04 | GODSENT           | W   | 0.624      | -            | -                | -                | -         |     0.88 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     2234 | 2024-03-01 | Young Ninjas      | W   | 0.605      | -            | -                | -                | -         |     2.36 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     2249 | 2024-02-29 | GODSENT           | W   | 0.597      | -            | -                | -                | -         |     0.88 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            9 |     2265 | 2024-02-28 | BIG               | W   | 0.591      | 0.500        | 0.215 (0.064)    | -                | -         |    14.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     2700 | 2024-02-08 | Passion UA        | W   | 0.458      | -            | -                | -                | -         |     3.99 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            7 |     2838 | 2024-02-01 | Into the Breach   | L   | 0.411      | -            | -                | -                | -         |   -12.12 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            6 |     2857 | 2024-01-31 | 9INE              | W   | 0.404      | -            | -                | -                | -         |     0.32 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            5 |     2882 | 2024-01-29 | Metizport         | L   | 0.391      | -            | -                | -                | -         |    -9.74 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            4 |     2948 | 2024-01-25 | Into the Breach   | W   | 0.363      | -            | -                | -                | -         |     0.66 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     3518 | 2024-01-09 | Entropiq          | L   | 0.260      | -            | -                | -                | -         |    -7.89 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     3531 | 2024-01-09 | IKLA              | W   | 0.259      | -            | -                | -                | -         |     0.21 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            1 |     3539 | 2024-01-09 | Sangal            | W   | 0.259      | -            | -                | -                | -         |     2.72 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($74,121.59)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-24 |      0.965 | $25,000.00     | $24,125.95      |
| 2024-04-22 |      0.951 | $20,000.00     | $19,021.82      |
| 2024-03-06 |      0.639 | $25,000.00     | $15,973.83      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
