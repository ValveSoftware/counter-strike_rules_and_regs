### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1326.2<br />
<br />
Final Rank Value (1326.2) = Starting Rank Value (1484.4) + Head To Head Adjustments (-158.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.765[<sup>1</sup>](#table2)
- Bounty Collected: 0.486[<sup>2</sup>](#table1)
- Opponent Network: 0.327[<sup>2</sup>](#table1)
- LAN Wins: 0.656[<sup>2</sup>](#table1)

The average of these factors is 0.559<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1484.4
- 400 + ( ( 0.559 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1484.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |       16 | 2024-05-29 | TheMongolz         | L   | 1.000      | -            | -                | -                | -         |   -10.16 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |       39 | 2024-05-28 | Lynn Vision        | W   | 1.000      | 0.500        | 0.056 (0.028)    | -                | 1 (1.000) |     4.03 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      210 | 2024-05-21 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -2.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      340 | 2024-05-17 | SAW                | W   | 1.000      | 0.769        | 0.109 (0.084)    | 0.611 (0.470)    | 0 (0.000) |    16.66 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      355 | 2024-05-16 | PARIVISION         | W   | 1.000      | 0.769        | -                | 0.475 (0.365)    | 0 (0.000) |     3.80 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      364 | 2024-05-16 | MIBR               | L   | 1.000      | -            | -                | -                | -         |    -6.42 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      377 | 2024-05-16 | SAW                | L   | 1.000      | -            | -                | -                | -         |   -14.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      428 | 2024-05-15 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -1.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      571 | 2024-05-10 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |   -27.07 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |      829 | 2024-04-28 | MIBR               | L   | 0.990      | -            | -                | -                | -         |    -7.64 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |      830 | 2024-04-28 | Rebels             | W   | 0.989      | 0.500        | 0.059 (0.029)    | -                | 1 (0.989) |     4.79 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |      856 | 2024-04-27 | Party Astronauts   | W   | 0.983      | 0.500        | -                | 0.670 (0.329)    | 1 (0.983) |     2.56 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |      880 | 2024-04-25 | Apeks              | L   | 0.976      | -            | -                | -                | -         |   -24.16 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |      884 | 2024-04-25 | Party Astronauts   | W   | 0.974      | 0.500        | -                | 0.670 (0.326)    | 1 (0.974) |     2.23 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     1090 | 2024-04-18 | RUBY               | L   | 0.925      | -            | -                | -                | -         |   -27.72 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1200 | 2024-04-14 | OG                 | W   | 0.899      | 0.684        | 0.278 (0.171)    | 0.376 (0.231)    | 0 (0.000) |     8.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1214 | 2024-04-13 | BetBoom            | W   | 0.892      | 0.684        | 0.392 (0.239)    | 0.951 (0.580)    | -         |    11.49 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1225 | 2024-04-12 | AMKAL              | W   | 0.886      | -            | -                | -                | -         |     6.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     1248 | 2024-04-11 | BetBoom            | W   | 0.880      | 0.143        | 0.392 (0.049)    | -                | -         |    12.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     1255 | 2024-04-11 | Apeks              | W   | 0.879      | -            | -                | -                | -         |     5.51 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     1260 | 2024-04-11 | FORZE              | W   | 0.878      | 0.684        | 0.108 (0.065)    | 0.499 (0.299)    | -         |     4.42 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     1289 | 2024-04-10 | PARIVISION         | W   | 0.873      | 0.500        | -                | 0.475 (0.207)    | -         |     2.29 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     1302 | 2024-04-10 | BetBoom            | L   | 0.872      | -            | -                | -                | -         |   -14.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     1349 | 2024-04-09 | KOI                | L   | 0.866      | -            | -                | -                | -         |   -24.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     1359 | 2024-04-09 | 1WIN               | W   | 0.865      | -            | -                | -                | -         |     2.28 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     1366 | 2024-04-09 | 9 Pandas           | W   | 0.864      | -            | -                | -                | -         |     4.83 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     1377 | 2024-04-08 | Metizport          | W   | 0.860      | -            | -                | -                | -         |     3.26 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     1381 | 2024-04-08 | OG                 | W   | 0.859      | 0.684        | 0.278 (0.163)    | 0.376 (0.221)    | -         |     7.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     1394 | 2024-04-08 | 1WIN               | L   | 0.858      | -            | -                | -                | -         |   -25.09 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     1483 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.833      | -            | -                | -                | -         |     3.56 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     1524 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.826      | -            | -                | -                | -         |     3.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     1562 | 2024-04-02 | Apeks              | W   | 0.819      | -            | -                | -                | -         |     4.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     1570 | 2024-04-02 | Metizport          | W   | 0.818      | -            | -                | -                | -         |     2.59 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     1582 | 2024-04-01 | SINNERS            | L   | 0.813      | -            | -                | -                | -         |   -23.74 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           33 |     1623 | 2024-03-28 | brazylijski luz    | W   | 0.786      | -            | -                | -                | -         |     0.74 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           32 |     1654 | 2024-03-27 | Metizport          | W   | 0.780      | -            | -                | -                | -         |     2.42 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           31 |     1661 | 2024-03-27 | AURA               | W   | 0.779      | -            | -                | -                | -         |     0.40 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           30 |     1695 | 2024-03-25 | Rebels             | W   | 0.766      | -            | -                | -                | -         |     2.85 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           29 |     1711 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.753      | 0.500        | -                | 0.650 (0.245)    | -         |     1.22 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           28 |     1726 | 2024-03-22 | ex-Sprout          | W   | 0.746      | -            | -                | -                | -         |     0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           27 |     1849 | 2024-03-16 | Gods Reign         | W   | 0.704      | 0.432        | 0.082 (0.025)    | -                | 1 (0.704) |     1.00 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           26 |     1871 | 2024-03-15 | Gods Reign         | W   | 0.697      | 0.432        | 0.082 (0.025)    | -                | 1 (0.697) |     0.94 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           25 |     1905 | 2024-03-14 | Bad News Kangaroos | W   | 0.690      | -            | -                | -                | 1 (0.690) |     1.07 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           24 |     2163 | 2024-03-04 | Young Ninjas       | L   | 0.625      | -            | -                | -                | -         |   -18.85 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     2208 | 2024-03-02 | Rebels             | W   | 0.612      | -            | -                | -                | -         |     2.37 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     2227 | 2024-03-01 | FORZE              | W   | 0.606      | -            | -                | -                | -         |     1.81 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     2235 | 2024-03-01 | 9 Pandas           | W   | 0.605      | -            | -                | -                | -         |     3.63 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     2240 | 2024-02-29 | KOI                | W   | 0.600      | -            | -                | -                | -         |     1.61 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     2245 | 2024-02-29 | Spirit Academy     | W   | 0.598      | -            | -                | -                | -         |     0.38 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     2250 | 2024-02-29 | HAVU               | W   | 0.597      | -            | -                | -                | -         |     0.41 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     2253 | 2024-02-28 | ECF                | W   | 0.593      | -            | -                | -                | -         |     0.55 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     2260 | 2024-02-28 | FORZE              | L   | 0.592      | -            | -                | -                | -         |   -17.19 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     2480 | 2024-02-18 | Monte              | L   | 0.527      | -            | -                | -                | -         |   -11.07 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     2490 | 2024-02-18 | B8                 | W   | 0.525      | -            | -                | -                | -         |     2.07 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     2507 | 2024-02-17 | ECF                | W   | 0.519      | -            | -                | -                | -         |     0.39 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     2511 | 2024-02-17 | Monte              | L   | 0.518      | -            | -                | -                | -         |   -11.34 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     2514 | 2024-02-17 | ECF                | W   | 0.518      | -            | -                | -                | -         |     0.36 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     3113 | 2024-01-19 | FORZE              | L   | 0.326      | -            | -                | -                | -         |   -10.15 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            9 |     3176 | 2024-01-18 | Enterprise         | L   | 0.319      | -            | -                | -                | -         |    -9.67 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            8 |     3187 | 2024-01-18 | IKLA               | L   | 0.319      | -            | -                | -                | -         |    -9.97 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            7 |     3705 | 2023-12-13 | BIG                | L   | 0.078      | -            | -                | -                | -         |    -1.51 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            6 |     3713 | 2023-12-12 | ex-Guild Eagles    | W   | 0.073      | -            | -                | -                | -         |     0.11 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            5 |     3802 | 2023-12-07 | BIG                | L   | 0.040      | -            | -                | -                | -         |    -0.76 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            4 |     3809 | 2023-12-07 | ex-Guild Eagles    | W   | 0.039      | -            | -                | -                | -         |     0.06 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            3 |     3836 | 2023-12-06 | BIG                | L   | 0.032      | -            | -                | -                | -         |    -0.62 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            2 |     3867 | 2023-12-05 | G2                 | W   | 0.025      | -            | -                | -                | -         |     0.68 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            1 |     3897 | 2023-12-03 | SAW                | W   | 0.012      | -            | -                | -                | -         |     0.12 | deko, KENSI, Lack1, Norwi, SELLTER    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($148,449.34)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-28 |      0.990 | $20,000.00     | $19,802.91      |
| 2024-04-14 |      0.899 | $105,000.00    | $94,377.45      |
| 2024-03-16 |      0.704 | $28,500.00     | $20,068.27      |
| 2023-12-13 |      0.079 | $1,500.00      | $119.04         |
| 2023-12-07 |      0.040 | $40,000.00     | $1,581.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
