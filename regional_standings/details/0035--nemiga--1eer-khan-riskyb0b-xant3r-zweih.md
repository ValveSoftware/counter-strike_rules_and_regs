### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1207.7<br />
<br />
Final Rank Value (1207.7) = Starting Rank Value (1252.1) + Head To Head Adjustments (-44.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.678[<sup>1</sup>](#table2)
- Bounty Collected: 0.490[<sup>2</sup>](#table1)
- Opponent Network: 0.458[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.427<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1252.1
- 400 + ( ( 0.427 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1252.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       10 | 2024-06-10 | BLEED             | W   | 1.000      | 0.500        | 0.349 (0.174)    | 1.000 (0.500)    | 0 (0.000) |    18.45 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           44 |       76 | 2024-06-09 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.154 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    11.16 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           43 |      239 | 2024-06-06 | Sampi             | W   | 1.000      | 0.500        | -                | 0.883 (0.441)    | 0 (0.000) |     6.92 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           42 |      346 | 2024-06-04 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.24 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           41 |      392 | 2024-06-02 | Grannys Knockers  | L   | 1.000      | -            | -                | -                | -         |   -28.27 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           40 |      488 | 2024-05-30 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -26.05 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           39 |     1079 | 2024-05-10 | RUBY              | L   | 0.991      | -            | -                | -                | -         |   -26.41 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           38 |     1123 | 2024-05-08 | 1WIN              | L   | 0.978      | -            | -                | -                | -         |   -23.61 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           37 |     1142 | 2024-05-07 | SINNERS           | W   | 0.971      | -            | -                | -                | 0 (0.000) |     6.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           36 |     1166 | 2024-05-05 | VP.Prodigy        | W   | 0.960      | -            | -                | -                | 0 (0.000) |     3.05 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           35 |     1206 | 2024-05-03 | MOUZ NXT          | W   | 0.946      | 0.500        | 0.164 (0.077)    | 1.000 (0.473)    | 0 (0.000) |     8.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           34 |     1229 | 2024-05-02 | Passion UA        | W   | 0.940      | -            | -                | -                | 0 (0.000) |     5.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           33 |     1250 | 2024-05-01 | B8                | W   | 0.933      | 0.500        | 0.160 (0.075)    | 1.000 (0.467)    | 0 (0.000) |     7.56 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           32 |     1295 | 2024-04-29 | MOUZ NXT          | W   | 0.920      | 0.500        | 0.164 (0.075)    | 1.000 (0.460)    | -         |     8.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           31 |     1326 | 2024-04-28 | Grannys Knockers  | L   | 0.911      | -            | -                | -                | -         |   -26.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           30 |     1348 | 2024-04-27 | 1WIN              | W   | 0.905      | -            | -                | -                | -         |     6.04 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           29 |     1372 | 2024-04-26 | Sangal            | L   | 0.899      | -            | -                | -                | -         |   -19.95 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           28 |     1416 | 2024-04-24 | BLEED             | W   | 0.886      | 0.500        | 0.349 (0.155)    | 1.000 (0.443)    | -         |    17.60 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           27 |     1440 | 2024-04-23 | Zero Tenacity     | W   | 0.878      | 0.500        | 0.154 (0.068)    | 1.000 (0.439)    | -         |     6.66 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           26 |     1458 | 2024-04-22 | MOUZ NXT          | W   | 0.871      | 0.500        | 0.164 (0.071)    | 1.000 (0.436)    | -         |     8.05 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           25 |     1474 | 2024-04-21 | 1WIN              | W   | 0.865      | -            | -                | -                | -         |     5.94 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           24 |     1507 | 2024-04-20 | Gaimin Gladiators | L   | 0.858      | -            | -                | -                | -         |   -12.30 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     1542 | 2024-04-19 | Sangal            | W   | 0.853      | 0.500        | 0.214 (0.091)    | 0.998 (0.426)    | -         |     8.42 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     1588 | 2024-04-18 | Secret            | W   | 0.846      | -            | -                | -                | -         |     0.80 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     1630 | 2024-04-17 | Alliance          | W   | 0.839      | -            | -                | -                | -         |     3.40 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     1821 | 2024-04-10 | FlyQuest          | L   | 0.790      | -            | -                | -                | -         |    -6.89 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     1870 | 2024-04-09 | Steel Helmet      | W   | 0.784      | -            | -                | -                | 1 (0.784) |     0.86 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     1899 | 2024-04-08 | FaZe              | L   | 0.777      | -            | -                | -                | -         |    -0.43 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     2091 | 2024-04-01 | Zero Tenacity     | W   | 0.731      | 0.384        | 0.154 (0.043)    | -                | -         |     6.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     2224 | 2024-03-22 | Sashi             | L   | 0.667      | -            | -                | -                | -         |   -15.02 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     2460 | 2024-03-12 | Nexus             | L   | 0.600      | -            | -                | -                | -         |   -16.91 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     2487 | 2024-03-11 | Sashi             | W   | 0.593      | -            | -                | -                | -         |     4.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     2504 | 2024-03-10 | Endpoint          | W   | 0.586      | -            | -                | -                | -         |     2.18 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     2576 | 2024-03-07 | Zero Tenacity     | W   | 0.567      | -            | -                | -                | -         |     4.63 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     2638 | 2024-03-05 | KOI               | L   | 0.553      | -            | -                | -                | -         |   -13.62 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     2646 | 2024-03-05 | GUN5              | W   | 0.553      | -            | -                | -                | -         |     0.13 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     3161 | 2024-02-10 | Sashi             | W   | 0.394      | -            | -                | -                | -         |     3.92 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     3177 | 2024-02-09 | AMKAL             | W   | 0.387      | -            | -                | -                | -         |     5.38 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     3192 | 2024-02-08 | Sashi             | W   | 0.381      | -            | -                | -                | -         |     3.76 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     3197 | 2024-02-08 | BetBoom           | W   | 0.379      | -            | -                | -                | -         |    10.95 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     3364 | 2024-01-30 | RUBY              | W   | 0.321      | -            | -                | -                | -         |     1.26 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     3367 | 2024-01-30 | ex-Sprout         | W   | 0.320      | -            | -                | -                | -         |     0.24 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     3371 | 2024-01-30 | 9 Pandas          | W   | 0.320      | -            | -                | -                | -         |     3.97 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     3786 | 2024-01-16 | samaloyod         | L   | 0.227      | -            | -                | -                | -         |    -7.03 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     4042 | 2024-01-09 | brazylijski luz   | L   | 0.180      | -            | -                | -                | -         |    -5.25 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($101,882.61)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-09 |      0.985 | $4,000.00      | $3,940.17       |
| 2024-05-03 |      0.946 | $50,000.00     | $47,293.63      |
| 2024-04-24 |      0.886 | $50,000.00     | $44,293.29      |
| 2024-04-14 |      0.818 | $5,000.00      | $4,090.31       |
| 2024-03-25 |      0.686 | $3,300.00      | $2,265.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
