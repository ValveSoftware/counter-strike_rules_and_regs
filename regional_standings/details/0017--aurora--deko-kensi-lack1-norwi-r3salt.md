### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1420.2<br />
<br />
Final Rank Value (1420.2) = Starting Rank Value (1600.2) + Head To Head Adjustments (-180.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.988[<sup>1</sup>](#table2)
- Bounty Collected: 0.567[<sup>2</sup>](#table1)
- Opponent Network: 0.338[<sup>2</sup>](#table1)
- LAN Wins: 0.628[<sup>2</sup>](#table1)

The average of these factors is 0.630<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1600.2
- 400 + ( ( 0.630 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1600.2


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
|           72 |      178 | 2024-04-28 | MIBR               | L   | 1.000      | -            | -                | -                | -         |    -7.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |      179 | 2024-04-28 | Rebels             | W   | 1.000      | 0.500        | 0.111 (0.056)    | 0.375 (0.187)    | 1 (1.000) |     4.01 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |      205 | 2024-04-27 | Party Astronauts   | W   | 1.000      | 0.500        | -                | 0.570 (0.285)    | 1 (1.000) |     2.04 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      229 | 2024-04-25 | Apeks              | L   | 1.000      | -            | -                | -                | -         |   -23.64 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      233 | 2024-04-25 | Party Astronauts   | W   | 1.000      | 0.500        | -                | 0.570 (0.285)    | 1 (1.000) |     1.78 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      439 | 2024-04-18 | RUBY               | L   | 1.000      | -            | -                | -                | -         |   -30.47 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      549 | 2024-04-14 | OG                 | W   | 1.000      | 0.684        | 0.580 (0.396)    | 0.490 (0.335)    | 0 (0.000) |    11.36 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      563 | 2024-04-13 | BetBoom            | W   | 1.000      | 0.684        | 0.563 (0.385)    | 1.000 (0.684)    | 0 (0.000) |    10.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      574 | 2024-04-12 | AMKAL              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.79 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      597 | 2024-04-11 | BetBoom            | W   | 1.000      | 0.143        | 0.563 (0.080)    | -                | -         |    11.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      604 | 2024-04-11 | Apeks              | W   | 1.000      | -            | -                | -                | -         |     7.55 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      609 | 2024-04-11 | FORZE              | W   | 1.000      | 0.684        | 0.205 (0.140)    | 0.682 (0.467)    | -         |     5.77 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      638 | 2024-04-10 | PARIVISION         | W   | 1.000      | 0.500        | -                | 0.544 (0.272)    | -         |     1.95 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      651 | 2024-04-10 | BetBoom            | L   | 1.000      | -            | -                | -                | -         |   -18.45 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |      698 | 2024-04-09 | KOI                | L   | 1.000      | -            | -                | -                | -         |   -28.23 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |      708 | 2024-04-09 | 1WIN               | W   | 1.000      | -            | -                | -                | -         |     0.43 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |      715 | 2024-04-09 | 9 Pandas           | W   | 1.000      | -            | -                | -                | -         |     3.88 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |      726 | 2024-04-08 | Metizport          | W   | 1.000      | -            | -                | -                | -         |     3.26 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |      730 | 2024-04-08 | OG                 | W   | 1.000      | 0.684        | 0.580 (0.396)    | 0.490 (0.335)    | -         |    10.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |      743 | 2024-04-08 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -31.16 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |      832 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.987      | -            | -                | -                | -         |     3.51 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |      873 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.980      | -            | -                | -                | -         |     3.36 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |      911 | 2024-04-02 | Apeks              | W   | 0.973      | -            | -                | -                | -         |     7.15 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |      919 | 2024-04-02 | Metizport          | W   | 0.972      | -            | -                | -                | -         |     2.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |      931 | 2024-04-01 | SINNERS            | L   | 0.967      | -            | -                | -                | -         |   -28.36 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           47 |      972 | 2024-03-28 | brazylijski luz    | W   | 0.940      | 0.500        | -                | 0.373 (0.175)    | -         |     0.76 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           46 |     1003 | 2024-03-27 | Metizport          | W   | 0.934      | -            | -                | -                | -         |     2.53 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           45 |     1010 | 2024-03-27 | AURA               | W   | 0.933      | -            | -                | -                | -         |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           44 |     1044 | 2024-03-25 | Rebels             | W   | 0.920      | 0.500        | 0.111 (0.051)    | -                | -         |     2.62 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           43 |     1060 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.907      | 0.500        | -                | 0.779 (0.353)    | -         |     1.08 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           42 |     1075 | 2024-03-22 | ex-Sprout          | W   | 0.900      | -            | -                | -                | -         |     0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           41 |     1198 | 2024-03-16 | Gods Reign         | W   | 0.858      | 0.432        | 0.169 (0.063)    | -                | 1 (0.858) |     1.17 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           40 |     1220 | 2024-03-15 | Gods Reign         | W   | 0.851      | 0.432        | 0.169 (0.062)    | -                | 1 (0.851) |     1.09 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           39 |     1254 | 2024-03-14 | Bad News Kangaroos | W   | 0.844      | -            | -                | -                | 1 (0.844) |     1.18 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           38 |     1512 | 2024-03-04 | Young Ninjas       | L   | 0.779      | -            | -                | -                | -         |   -23.47 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           37 |     1557 | 2024-03-02 | Rebels             | W   | 0.766      | -            | -                | -                | -         |     2.35 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           36 |     1576 | 2024-03-01 | FORZE              | W   | 0.761      | -            | -                | -                | -         |     2.44 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           35 |     1584 | 2024-03-01 | 9 Pandas           | W   | 0.759      | -            | -                | -                | -         |     3.17 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           34 |     1589 | 2024-02-29 | KOI                | W   | 0.754      | -            | -                | -                | -         |     2.16 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           33 |     1594 | 2024-02-29 | Spirit Academy     | W   | 0.752      | -            | -                | -                | -         |     0.42 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           32 |     1599 | 2024-02-29 | HAVU               | W   | 0.751      | -            | -                | -                | -         |     0.56 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           31 |     1602 | 2024-02-28 | ECF                | W   | 0.747      | -            | -                | -                | -         |     0.20 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           30 |     1609 | 2024-02-28 | FORZE              | L   | 0.746      | -            | -                | -                | -         |   -21.59 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           29 |     1829 | 2024-02-18 | Monte              | L   | 0.681      | -            | -                | -                | -         |   -14.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           28 |     1839 | 2024-02-18 | B8                 | W   | 0.679      | -            | -                | -                | -         |     1.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           27 |     1856 | 2024-02-17 | ECF                | W   | 0.673      | -            | -                | -                | -         |     0.13 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           26 |     1860 | 2024-02-17 | Monte              | L   | 0.672      | -            | -                | -                | -         |   -14.74 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           25 |     1863 | 2024-02-17 | ECF                | W   | 0.672      | -            | -                | -                | -         |     0.11 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           24 |     2462 | 2024-01-19 | FORZE              | L   | 0.480      | -            | -                | -                | -         |   -14.93 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           23 |     2525 | 2024-01-18 | Enterprise         | L   | 0.473      | -            | -                | -                | -         |   -14.39 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           22 |     2536 | 2024-01-18 | IKLA               | L   | 0.473      | -            | -                | -                | -         |   -14.82 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           21 |     3054 | 2023-12-13 | BIG                | L   | 0.233      | -            | -                | -                | -         |    -5.34 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           20 |     3062 | 2023-12-12 | Guild Eagles       | W   | 0.227      | -            | -                | -                | -         |     0.30 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           19 |     3151 | 2023-12-07 | BIG                | L   | 0.194      | -            | -                | -                | -         |    -4.51 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           18 |     3158 | 2023-12-07 | Guild Eagles       | W   | 0.193      | -            | -                | -                | -         |     0.25 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           17 |     3185 | 2023-12-06 | BIG                | L   | 0.186      | -            | -                | -                | -         |    -4.39 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           16 |     3216 | 2023-12-05 | G2                 | W   | 0.180      | 0.589        | 0.841 (0.089)    | -                | -         |     4.66 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           15 |     3246 | 2023-12-03 | SAW                | W   | 0.166      | -            | -                | -                | -         |     1.51 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           14 |     3284 | 2023-12-01 | ALTERNATE aTTaX    | W   | 0.154      | -            | -                | -                | -         |     0.17 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           13 |     3446 | 2023-11-20 | MIBR               | L   | 0.080      | -            | -                | -                | -         |    -1.02 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           12 |     3495 | 2023-11-18 | FURIA              | L   | 0.066      | -            | -                | -                | -         |    -1.20 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           11 |     3514 | 2023-11-17 | PARIVISION         | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.01 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           10 |     3524 | 2023-11-17 | KOI                | L   | 0.059      | -            | -                | -                | -         |    -1.80 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            9 |     3547 | 2023-11-16 | FURIA              | L   | 0.054      | -            | -                | -                | -         |    -0.99 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            8 |     3560 | 2023-11-16 | Pompa              | W   | 0.052      | -            | -                | -                | -         |     0.00 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            7 |     3591 | 2023-11-15 | PERA               | L   | 0.047      | -            | -                | -                | -         |    -1.45 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            6 |     3599 | 2023-11-15 | ex-sYnck           | W   | 0.046      | -            | -                | -                | -         |     0.01 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            5 |     3626 | 2023-11-14 | ALTERNATE aTTaX    | L   | 0.039      | -            | -                | -                | -         |    -1.19 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            4 |     3643 | 2023-11-13 | Apeks              | W   | 0.033      | -            | -                | -                | -         |     0.20 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            3 |     3670 | 2023-11-12 | paiN               | L   | 0.026      | -            | -                | -                | -         |    -0.21 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            2 |     3702 | 2023-11-11 | Eternal Fire       | W   | 0.019      | -            | -                | -                | -         |     0.39 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            1 |     3749 | 2023-11-08 | PARIVISION         | L   | 0.000      | -            | -                | -                | -         |    -0.01 | deko, KENSI, Lack1, Norwi, SELLTER    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($157,662.21)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.97) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-04-14 |      1.000 | $105,000.00    | $105,000.00     |
| 2024-03-16 |      0.858 | $28,500.00     | $24,459.92      |
| 2023-12-13 |      0.233 | $1,500.00      | $350.18         |
| 2023-12-10 |      0.213 | $500.00        | $106.73         |
| 2023-12-07 |      0.194 | $40,000.00     | $7,745.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
