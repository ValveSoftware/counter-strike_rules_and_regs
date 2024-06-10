### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  1054.5<br />
<br />
Final Rank Value (1054.5) = Starting Rank Value (986.2) + Head To Head Adjustments (68.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.453[<sup>2</sup>](#table1)
- Opponent Network: 0.370[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 986.2
- 400 + ( ( 0.294 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 986.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       11 | 2024-06-10 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |       16 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -11.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |       22 | 2024-06-10 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -17.16 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |       56 | 2024-06-09 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -6.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |       63 | 2024-06-09 | 9 Pandas          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    20.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |       72 | 2024-06-09 | Monte             | W   | 1.000      | 0.143        | 0.179 (0.026)    | -                | 0 (0.000) |    22.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |       77 | 2024-06-09 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -6.71 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |      287 | 2024-06-05 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |      337 | 2024-06-04 | Monte             | W   | 1.000      | 0.500        | 0.179 (0.089)    | 0.686 (0.343)    | 0 (0.000) |    24.13 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |      746 | 2024-05-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -12.42 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           34 |      824 | 2024-05-17 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.154 (0.077)    | 1.000 (0.500)    | 0 (0.000) |    17.82 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           33 |      855 | 2024-05-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.98 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |      873 | 2024-05-16 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -0.43 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |      913 | 2024-05-15 | B8                | W   | 1.000      | 0.500        | 0.160 (0.080)    | 1.000 (0.500)    | 0 (0.000) |    22.12 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |     1096 | 2024-05-09 | Endpoint          | L   | 0.986      | -            | -                | -                | -         |   -16.29 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     1255 | 2024-05-01 | Passion UA        | L   | 0.932      | -            | -                | -                | -         |   -16.44 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     1269 | 2024-05-01 | fnatic            | L   | 0.931      | -            | -                | -                | -         |    -5.47 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     1294 | 2024-04-29 | 3DMAX             | L   | 0.920      | -            | -                | -                | -         |    -6.99 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     1304 | 2024-04-29 | Zero Tenacity     | W   | 0.919      | 0.500        | 0.154 (0.071)    | 1.000 (0.459)    | 0 (0.000) |    14.93 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     1341 | 2024-04-27 | Sangal            | W   | 0.906      | 0.500        | 0.214 (0.097)    | 0.998 (0.452)    | 0 (0.000) |    17.95 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     1369 | 2024-04-26 | SINNERS           | W   | 0.899      | 0.435        | -                | 0.844 (0.330)    | 0 (0.000) |    17.32 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     1397 | 2024-04-25 | M1X KS            | W   | 0.892      | -            | -                | -                | 0 (0.000) |    17.81 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     1419 | 2024-04-24 | MOUZ NXT          | W   | 0.886      | 0.435        | 0.164 (0.063)    | 1.000 (0.385)    | -         |    18.39 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     1468 | 2024-04-21 | Nexus             | W   | 0.866      | -            | -                | -                | -         |    11.85 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     1471 | 2024-04-21 | B8                | L   | 0.865      | -            | -                | -                | -         |    -9.99 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     1528 | 2024-04-19 | Zero Tenacity     | L   | 0.854      | -            | -                | -                | -         |   -11.26 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     1627 | 2024-04-17 | HAVU              | W   | 0.840      | -            | -                | -                | -         |     5.47 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     1628 | 2024-04-17 | Permitta          | L   | 0.839      | -            | -                | -                | -         |   -12.43 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           16 |     1750 | 2024-04-11 | 500               | L   | 0.800      | -            | -                | -                | -         |   -17.37 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           15 |     1789 | 2024-04-10 | Aurora            | L   | 0.794      | -            | -                | -                | -         |    -1.44 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           14 |     1848 | 2024-04-09 | RUSH B            | L   | 0.787      | -            | -                | -                | -         |   -17.09 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           13 |     2020 | 2024-04-03 | MOUZ NXT          | L   | 0.747      | -            | -                | -                | -         |    -9.98 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     2031 | 2024-04-03 | Space             | W   | 0.746      | -            | -                | -                | -         |     6.91 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     2066 | 2024-04-02 | AMKAL             | L   | 0.740      | -            | -                | -                | -         |    -7.28 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     2075 | 2024-04-02 | Insilio           | L   | 0.738      | -            | -                | -                | -         |   -14.41 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     2086 | 2024-04-01 | Metizport         | W   | 0.733      | 0.384        | -                | 0.706 (0.199)    | -         |    11.73 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     2250 | 2024-03-21 | FORZE             | W   | 0.660      | 0.500        | 0.100 (0.033)    | -                | -         |    11.18 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     2432 | 2024-03-13 | 3DMAX             | W   | 0.606      | 0.500        | 0.122 (0.037)    | 0.821 (0.249)    | -         |    13.80 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     2549 | 2024-03-08 | B8                | W   | 0.573      | 0.500        | 0.160 (0.046)    | 1.000 (0.286)    | -         |    12.16 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     2604 | 2024-03-06 | Apeks             | W   | 0.560      | -            | -                | -                | -         |    13.10 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     2717 | 2024-03-02 | Gaimin Gladiators | L   | 0.532      | -            | -                | -                | -         |    -3.46 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     2748 | 2024-02-29 | Monte             | L   | 0.519      | -            | -                | -                | -         |    -2.21 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     3730 | 2024-01-17 | Insilio           | L   | 0.234      | -            | -                | -                | -         |    -4.46 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     3800 | 2024-01-16 | EYEBALLERS        | L   | 0.227      | -            | -                | -                | -         |    -4.18 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,469.89)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-02 |      0.940 | $500.00        | $469.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
