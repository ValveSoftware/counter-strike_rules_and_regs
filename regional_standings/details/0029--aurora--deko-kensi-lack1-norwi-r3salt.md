### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1292.1<br />
<br />
Final Rank Value (1292.1) = Starting Rank Value (1588.0) + Head To Head Adjustments (-295.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.775[<sup>1</sup>](#table2)
- Bounty Collected: 0.488[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.806[<sup>2</sup>](#table1)

The average of these factors is 0.596<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1588.0
- 400 + ( ( 0.596 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1588.0


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
|           77 |       13 | 2024-06-10 | 9 Pandas           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |       17 | 2024-06-10 | Monte              | W   | 1.000      | -            | -                | -                | -         |    11.16 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |       21 | 2024-06-10 | SAW                | L   | 1.000      | -            | -                | -                | -         |   -16.95 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |       49 | 2024-06-09 | Monte              | L   | 1.000      | -            | -                | -                | -         |   -19.95 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |       56 | 2024-06-09 | PARIVISION         | W   | 1.000      | -            | -                | -                | -         |     6.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |       65 | 2024-06-09 | RUSH B             | L   | 1.000      | -            | -                | -                | -         |   -28.68 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |       71 | 2024-06-09 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -22.68 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |       78 | 2024-06-09 | SINNERS            | L   | 1.000      | -            | -                | -                | -         |   -27.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      165 | 2024-06-07 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -24.00 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      182 | 2024-06-07 | Verdant            | W   | 1.000      | -            | -                | -                | -         |     1.32 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      184 | 2024-06-07 | PERA               | W   | 1.000      | -            | -                | -                | -         |     2.42 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      222 | 2024-06-06 | RUSH B             | W   | 1.000      | -            | -                | -                | -         |     1.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      287 | 2024-06-05 | PARIVISION         | W   | 1.000      | 0.500        | -                | 0.527 (0.264)    | -         |     3.83 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      338 | 2024-06-04 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -24.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      407 | 2024-06-02 | BLEED              | L   | 1.000      | -            | -                | -                | -         |   -22.42 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      432 | 2024-06-01 | Lynn Vision        | W   | 1.000      | 0.500        | 0.129 (0.065)    | -                | 1 (1.000) |     5.75 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      441 | 2024-06-01 | Chinggis Warriors  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.73 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      516 | 2024-05-29 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -3.47 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      539 | 2024-05-28 | Lynn Vision        | W   | 1.000      | 0.500        | 0.129 (0.065)    | -                | 1 (1.000) |     5.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |      710 | 2024-05-21 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -2.23 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |      840 | 2024-05-17 | SAW                | W   | 1.000      | 0.769        | 0.113 (0.087)    | 0.660 (0.507)    | -         |    12.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |      855 | 2024-05-16 | PARIVISION         | W   | 1.000      | 0.769        | -                | 0.527 (0.405)    | -         |     2.98 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |      864 | 2024-05-16 | MIBR               | L   | 1.000      | -            | -                | -                | -         |    -9.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |      877 | 2024-05-16 | SAW                | L   | 1.000      | -            | -                | -                | -         |   -19.25 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |      928 | 2024-05-15 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -2.17 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1071 | 2024-05-10 | MOUZ NXT           | L   | 0.994      | -            | -                | -                | -         |   -27.99 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1329 | 2024-04-28 | MIBR               | L   | 0.911      | -            | -                | -                | -         |   -10.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1330 | 2024-04-28 | Rebels             | W   | 0.910      | 0.500        | -                | 0.472 (0.215)    | 1 (0.910) |     2.95 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     1356 | 2024-04-27 | Party Astronauts   | W   | 0.904      | 0.500        | -                | 0.677 (0.306)    | 1 (0.904) |     1.75 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     1380 | 2024-04-25 | Apeks              | L   | 0.896      | -            | -                | -                | -         |   -24.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     1384 | 2024-04-25 | Party Astronauts   | W   | 0.895      | 0.500        | -                | 0.677 (0.303)    | 1 (0.895) |     1.52 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     1590 | 2024-04-18 | RUBY               | L   | 0.846      | -            | -                | -                | -         |   -25.77 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     1700 | 2024-04-14 | OG                 | W   | 0.820      | 0.684        | 0.249 (0.140)    | -                | -         |     5.03 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     1714 | 2024-04-13 | BetBoom            | W   | 0.813      | 0.684        | 0.427 (0.237)    | 0.917 (0.510)    | -         |    14.15 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     1725 | 2024-04-12 | AMKAL              | W   | 0.807      | -            | -                | -                | -         |     3.66 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     1748 | 2024-04-11 | BetBoom            | W   | 0.801      | 0.143        | 0.427 (0.049)    | -                | -         |    15.05 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     1755 | 2024-04-11 | Apeks              | W   | 0.800      | -            | -                | -                | -         |     2.79 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     1760 | 2024-04-11 | FORZE              | W   | 0.799      | 0.684        | 0.100 (0.055)    | 0.415 (0.227)    | -         |     2.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     1789 | 2024-04-10 | PARIVISION         | W   | 0.794      | 0.500        | -                | 0.527 (0.209)    | -         |     1.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     1802 | 2024-04-10 | BetBoom            | L   | 0.793      | -            | -                | -                | -         |    -9.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     1849 | 2024-04-09 | KOI                | L   | 0.787      | -            | -                | -                | -         |   -23.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     1859 | 2024-04-09 | 1WIN               | W   | 0.786      | -            | -                | -                | -         |     1.26 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     1866 | 2024-04-09 | 9 Pandas           | W   | 0.785      | -            | -                | -                | -         |     2.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     1877 | 2024-04-08 | Metizport          | W   | 0.780      | -            | -                | -                | -         |     1.87 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     1881 | 2024-04-08 | OG                 | W   | 0.780      | 0.684        | 0.249 (0.133)    | -                | -         |     3.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     1894 | 2024-04-08 | 1WIN               | L   | 0.778      | -            | -                | -                | -         |   -23.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     1983 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.753      | 0.143        | 0.294 (0.032)    | -                | -         |    14.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     2024 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.747      | 0.143        | 0.294 (0.031)    | -                | -         |    14.89 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     2062 | 2024-04-02 | Apeks              | W   | 0.740      | -            | -                | -                | -         |     2.42 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     2070 | 2024-04-02 | Metizport          | W   | 0.739      | -            | -                | -                | -         |     1.49 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     2082 | 2024-04-01 | SINNERS            | L   | 0.734      | -            | -                | -                | -         |   -21.29 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           26 |     2123 | 2024-03-28 | brazylijski luz    | W   | 0.707      | -            | -                | -                | -         |     0.42 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           25 |     2154 | 2024-03-27 | Metizport          | W   | 0.701      | -            | -                | -                | -         |     1.36 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           24 |     2161 | 2024-03-27 | AURA               | W   | 0.700      | -            | -                | -                | -         |     0.20 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     2195 | 2024-03-25 | Rebels             | W   | 0.687      | -            | -                | -                | -         |     1.75 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     2211 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.674      | 0.500        | -                | 0.583 (0.196)    | -         |     0.90 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     2226 | 2024-03-22 | ex-Sprout          | W   | 0.667      | -            | -                | -                | -         |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     2349 | 2024-03-16 | Gods Reign         | W   | 0.625      | -            | -                | -                | 1 (0.625) |     0.47 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     2371 | 2024-03-15 | Gods Reign         | W   | 0.618      | -            | -                | -                | 1 (0.618) |     0.44 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     2405 | 2024-03-14 | Bad News Kangaroos | W   | 0.610      | -            | -                | -                | 1 (0.610) |     0.52 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     2663 | 2024-03-04 | Young Ninjas       | L   | 0.546      | -            | -                | -                | -         |   -16.81 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     2708 | 2024-03-02 | Rebels             | W   | 0.533      | -            | -                | -                | -         |     1.36 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     2727 | 2024-03-01 | FORZE              | W   | 0.527      | -            | -                | -                | -         |     0.93 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     2735 | 2024-03-01 | 9 Pandas           | W   | 0.526      | -            | -                | -                | -         |     1.96 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     2740 | 2024-02-29 | KOI                | W   | 0.521      | -            | -                | -                | -         |     1.04 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     2745 | 2024-02-29 | Spirit Academy     | W   | 0.519      | -            | -                | -                | -         |     0.17 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     2750 | 2024-02-29 | HAVU               | W   | 0.518      | -            | -                | -                | -         |     0.20 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     2753 | 2024-02-28 | ECF                | W   | 0.514      | -            | -                | -                | -         |     0.27 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     2760 | 2024-02-28 | FORZE              | L   | 0.513      | -            | -                | -                | -         |   -15.41 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     2980 | 2024-02-18 | Monte              | L   | 0.447      | -            | -                | -                | -         |   -11.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     2990 | 2024-02-18 | B8                 | W   | 0.445      | -            | -                | -                | -         |     1.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     3007 | 2024-02-17 | ECF                | W   | 0.440      | -            | -                | -                | -         |     0.19 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     3011 | 2024-02-17 | Monte              | L   | 0.439      | -            | -                | -                | -         |   -11.21 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     3014 | 2024-02-17 | ECF                | W   | 0.439      | -            | -                | -                | -         |     0.17 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     3613 | 2024-01-19 | FORZE              | L   | 0.247      | -            | -                | -                | -         |    -7.76 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            2 |     3676 | 2024-01-18 | Enterprise         | L   | 0.240      | -            | -                | -                | -         |    -7.32 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            1 |     3687 | 2024-01-18 | IKLA               | L   | 0.239      | -            | -                | -                | -         |    -7.52 | deko, KENSI, Lack1, Norwi, SELLTER    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($156,095.69)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.51) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $6,500.00      | $6,500.00       |
| 2024-06-02 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-28 |      0.911 | $20,000.00     | $18,219.47      |
| 2024-04-14 |      0.820 | $105,000.00    | $86,064.36      |
| 2024-03-16 |      0.625 | $28,500.00     | $17,811.86      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
