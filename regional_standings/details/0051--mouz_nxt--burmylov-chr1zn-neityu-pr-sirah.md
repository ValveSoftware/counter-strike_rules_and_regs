### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1023.0<br />
<br />
Final Rank Value (1023.0) = Starting Rank Value (1064.5) + Head To Head Adjustments (-41.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.596[<sup>1</sup>](#table2)
- Bounty Collected: 0.461[<sup>2</sup>](#table1)
- Opponent Network: 0.339[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.349<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1064.5
- 400 + ( ( 0.349 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1064.5


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
|           67 |       32 | 2024-05-05 | GL Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           66 |       35 | 2024-05-04 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -21.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |       55 | 2024-05-03 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |       72 | 2024-05-02 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -20.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |       88 | 2024-05-02 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.104 (0.052)    | 0.779 (0.389)    | 0 (0.000) |    11.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |       93 | 2024-05-02 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -16.97 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |      108 | 2024-05-01 | BLEED             | W   | 1.000      | 0.500        | 0.400 (0.200)    | 1.000 (0.500)    | 0 (0.000) |    22.68 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |      120 | 2024-04-30 | ECLOT             | W   | 1.000      | 0.500        | 0.156 (0.078)    | 0.607 (0.303)    | 0 (0.000) |    17.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |      130 | 2024-04-30 | V1dar             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.25 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           58 |      144 | 2024-04-29 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |      154 | 2024-04-29 | Grannys Knockers  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.52 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |      184 | 2024-04-27 | ECLOT             | W   | 1.000      | 0.500        | 0.156 (0.078)    | 0.607 (0.303)    | 0 (0.000) |    18.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |      254 | 2024-04-25 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -18.44 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |      268 | 2024-04-24 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -21.35 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |      300 | 2024-04-22 | EYEBALLERS        | W   | 1.000      | 0.435        | -                | 0.599 (0.260)    | 0 (0.000) |     8.46 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |      307 | 2024-04-22 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |      318 | 2024-04-21 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.104 (0.052)    | 0.779 (0.389)    | 0 (0.000) |     8.38 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           50 |      324 | 2024-04-21 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -15.37 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |      346 | 2024-04-20 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -10.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |      433 | 2024-04-18 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.10 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |      455 | 2024-04-18 | ENCE Academy      | W   | 1.000      | -            | -                | -                | -         |     8.72 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |      502 | 2024-04-17 | JANO              | W   | 1.000      | -            | -                | -                | -         |     3.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |      515 | 2024-04-16 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -4.22 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           44 |      541 | 2024-04-15 | Alliance          | W   | 1.000      | 0.384        | -                | 0.815 (0.313)    | -         |     7.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |      582 | 2024-04-12 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -19.21 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |      709 | 2024-04-09 | Zero Tenacity     | W   | 1.000      | 0.371        | 0.093 (0.035)    | 0.936 (0.347)    | -         |     9.70 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |      739 | 2024-04-08 | B8                | W   | 1.000      | 0.384        | -                | 0.851 (0.327)    | -         |    14.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |      869 | 2024-04-03 | PARIVISION        | W   | 0.980      | -            | -                | -                | -         |    12.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     1199 | 2024-03-16 | Sampi             | L   | 0.858      | -            | -                | -                | -         |   -15.18 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     1216 | 2024-03-15 | Entropiq          | W   | 0.852      | -            | -                | -                | -         |     5.17 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1265 | 2024-03-13 | Permitta          | L   | 0.841      | -            | -                | -                | -         |   -14.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           36 |     1285 | 2024-03-13 | Alliance          | W   | 0.839      | 0.371        | -                | 0.815 (0.253)    | -         |     7.47 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     1313 | 2024-03-12 | AURA              | W   | 0.833      | -            | -                | -                | -         |     1.24 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1319 | 2024-03-12 | Sampi             | L   | 0.831      | -            | -                | -                | -         |   -15.42 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           33 |     1339 | 2024-03-11 | Passion UA        | W   | 0.825      | -            | -                | -                | -         |     9.77 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     1341 | 2024-03-11 | NOM               | W   | 0.824      | -            | -                | -                | -         |     1.58 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     1349 | 2024-03-10 | V1dar             | W   | 0.820      | -            | -                | -                | -         |     1.55 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     1358 | 2024-03-10 | Passion UA        | L   | 0.819      | -            | -                | -                | -         |   -16.38 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     1362 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.818      | -            | -                | -                | -         |     8.14 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     1400 | 2024-03-08 | K10               | W   | 0.806      | -            | -                | -                | -         |     4.54 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     1416 | 2024-03-07 | INGLORIOUS        | L   | 0.801      | -            | -                | -                | -         |   -23.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     1551 | 2024-03-03 | ex-Preasy         | W   | 0.771      | 0.371        | 0.173 (0.049)    | -                | -         |    11.87 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           25 |     1564 | 2024-03-02 | ECF               | W   | 0.765      | -            | -                | -                | -         |     2.13 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     1634 | 2024-02-27 | ECLOT             | L   | 0.739      | -            | -                | -                | -         |   -11.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     1649 | 2024-02-26 | BLEED             | W   | 0.732      | 0.143        | 0.400 (0.042)    | -                | -         |    13.86 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     1712 | 2024-02-24 | Sashi             | W   | 0.718      | 0.333        | 0.188 (0.045)    | -                | -         |    11.84 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     1766 | 2024-02-21 | Entropiq          | W   | 0.698      | -            | -                | -                | -         |     3.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2260 | 2024-01-27 | TSM               | L   | 0.531      | -            | -                | -                | -         |   -13.73 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     2330 | 2024-01-23 | SINNERS           | L   | 0.505      | -            | -                | -                | -         |    -8.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     2392 | 2024-01-21 | Astralis Talent   | W   | 0.491      | -            | -                | -                | -         |     4.06 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           17 |     2435 | 2024-01-20 | Monte Gen         | W   | 0.484      | -            | -                | -                | -         |     1.34 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           16 |     2483 | 2024-01-19 | Astralis Talent   | W   | 0.478      | -            | -                | -                | -         |     3.97 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           15 |     2491 | 2024-01-19 | CEPTER            | W   | 0.477      | -            | -                | -                | -         |     1.17 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           14 |     2557 | 2024-01-18 | Passion UA        | W   | 0.471      | -            | -                | -                | -         |     6.42 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           13 |     2597 | 2024-01-17 | Aurora Young Blud | W   | 0.464      | -            | -                | -                | -         |     1.81 | Chr1zN, Kristou, Neityu, PR, sirah     |
|           12 |     2681 | 2024-01-15 | The Prodigies     | L   | 0.451      | -            | -                | -                | -         |   -13.43 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           11 |     3149 | 2023-12-07 | Zero Tenacity     | L   | 0.194      | -            | -                | -                | -         |    -4.01 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           10 |     3172 | 2023-12-06 | Endpoint          | L   | 0.187      | -            | -                | -                | -         |    -4.25 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|            9 |     3191 | 2023-12-06 | Nemiga            | W   | 0.186      | 0.372        | 0.667 (0.046)    | -                | -         |     4.59 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|            8 |     3499 | 2023-11-18 | Sashi             | L   | 0.066      | -            | -                | -                | -         |    -1.03 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            7 |     3521 | 2023-11-17 | paiN              | L   | 0.060      | -            | -                | -                | -         |    -0.03 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            6 |     3566 | 2023-11-16 | ARCRED            | W   | 0.052      | -            | -                | -                | -         |     0.21 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            5 |     3595 | 2023-11-15 | Sprout            | L   | 0.047      | -            | -                | -                | -         |    -1.30 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            4 |     3631 | 2023-11-14 | Into the Breach   | L   | 0.038      | -            | -                | -                | -         |    -1.00 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            3 |     3650 | 2023-11-13 | ex-Anonymo        | L   | 0.031      | -            | -                | -                | -         |    -0.86 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            2 |     3679 | 2023-11-12 | Sampi             | W   | 0.025      | -            | -                | -                | -         |     0.33 | Chr1zN, Neityu, Nexius, PR, sirah      |
|            1 |     3719 | 2023-11-10 | Metizport         | L   | 0.013      | -            | -                | -                | -         |    -0.23 | Chr1zN, Neityu, Nexius, PR, sirah      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,025.14)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-03 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-03-18 |      0.871 | $1,000.00      | $871.20         |
| 2024-03-11 |      0.825 | $3,500.00      | $2,888.52       |
| 2024-02-28 |      0.745 | $1,500.00      | $1,116.82       |
| 2024-01-21 |      0.491 | $5,000.00      | $2,453.78       |
| 2024-01-20 |      0.484 | $3,500.00      | $1,694.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
