### Roster Details<br />
Team Name: EC Brugge<br />
Roster: Markoś, n0tice, simix, Stev0se, swiiffter<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  695.4<br />
<br />
Final Rank Value (695.4) = Starting Rank Value (814.3) + Head To Head Adjustments (-118.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.3
- 400 + ( ( 0.202 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 814.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       49 | 2023-02-10 | Rapid Ninjas      | W   | 1.000      | 0.351        | -                | 0.180 (0.063)    | 0 (0.000) |    13.56 | Markoś, n0tice, simix, Stev0se, swiiffter |
|           51 |      319 | 2023-01-29 | Mixfits           | L   | 1.000      | -            | -                | -                | -         |   -15.24 | Markoś, n0tice, simix, Stev0se, swiiffter |
|           50 |      330 | 2023-01-28 | JANO              | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.307 (0.044)    | 0 (0.000) |    17.17 | Markoś, n0tice, simix, Stev0se, swiiffter |
|           49 |      351 | 2023-01-28 | GTZ               | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.195 (0.028)    | 0 (0.000) |    17.38 | Markoś, n0tice, simix, Stev0se, swiiffter |
|           48 |      390 | 2023-01-27 | EPIC DUDES        | L   | 1.000      | -            | -                | -                | -         |   -21.91 | Markoś, n0tice, simix, Stev0se, swiiffter |
|           47 |      515 | 2023-01-22 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -11.98 | jedqr, Markoś, n0tice, simix, Stev0se     |
|           46 |      521 | 2023-01-22 | Pepsilon          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.00 | jedqr, Markoś, n0tice, simix, Stev0se     |
|           45 |      553 | 2023-01-21 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -12.45 | ERSIN, Markoś, n0tice, simix, Stev0se     |
|           44 |      557 | 2023-01-21 | 777               | L   | 1.000      | -            | -                | -                | -         |   -14.47 | ERSIN, Markoś, n0tice, simix, Stev0se     |
|           43 |      580 | 2023-01-20 | sYnck             | L   | 1.000      | -            | -                | -                | -         |   -12.29 | ERSIN, Markoś, n0tice, simix, Stev0se     |
|           42 |      703 | 2023-01-14 | los kogutos       | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.364 (0.135)    | 0 (0.000) |    18.79 | ERSIN, Markoś, n0tice, simix, Stev0se     |
|           41 |      716 | 2023-01-12 | FTW               | L   | 0.992      | -            | -                | -                | -         |    -9.24 | Banjo, Markoś, n0tice, simix, Stev0se     |
|           40 |      720 | 2023-01-12 | onLiNeRsX         | L   | 0.991      | -            | -                | -                | -         |   -23.91 | Banjo, Markoś, n0tice, simix, Stev0se     |
|           39 |      724 | 2023-01-10 | Case              | W   | 0.978      | 0.371        | 0.009 (0.003)    | 0.100 (0.036)    | 0 (0.000) |    13.25 | ERSIN, Markoś, n0tice, simix, Stev0se     |
|           38 |      815 | 2022-12-17 | BLINK             | L   | 0.819      | -            | -                | -                | -         |   -16.96 | jkXy, n0tice, SADDYX, simix, Stev0se      |
|           37 |      826 | 2022-12-17 | Beyond Possible   | L   | 0.818      | -            | -                | -                | -         |   -19.93 | jkXy, n0tice, SADDYX, simix, Stev0se      |
|           36 |      844 | 2022-12-16 | Velez Mostar      | W   | 0.812      | -            | -                | -                | 0 (0.000) |     9.92 | jkXy, n0tice, SADDYX, simix, Stev0se      |
|           35 |     1014 | 2022-12-09 | Young Ninjas      | L   | 0.766      | -            | -                | -                | -         |    -6.37 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           34 |     1047 | 2022-12-08 | Apeks             | L   | 0.759      | -            | -                | -                | -         |    -6.01 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           33 |     1127 | 2022-12-06 | HAVU              | L   | 0.745      | -            | -                | -                | -         |    -5.44 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           32 |     1165 | 2022-12-04 | Illuminar         | W   | 0.734      | 0.435        | 0.048 (0.015)    | 0.700 (0.223)    | -         |    18.17 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           31 |     1304 | 2022-11-30 | ALTERNATE aTTaX   | W   | 0.707      | 0.143        | 0.008 (0.001)    | 0.486 (0.049)    | -         |    13.98 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           30 |     1384 | 2022-11-27 | Infinite          | W   | 0.686      | -            | -                | -                | -         |     5.12 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           29 |     1428 | 2022-11-26 | AVANGAR           | L   | 0.679      | -            | -                | -                | -         |    -9.42 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           28 |     1435 | 2022-11-26 | Infinite          | W   | 0.678      | -            | -                | -                | -         |     4.73 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           27 |     1476 | 2022-11-24 | Tricked           | L   | 0.666      | -            | -                | -                | -         |    -5.05 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           26 |     1517 | 2022-11-22 | Spirit Academy    | L   | 0.653      | -            | -                | -                | -         |    -6.41 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           25 |     1572 | 2022-11-18 | Conquer           | L   | 0.625      | -            | -                | -                | -         |   -12.52 | jkXy, matty, n0tice, simix, Stev0se       |
|           24 |     1587 | 2022-11-17 | SKADE X           | L   | 0.619      | -            | -                | -                | -         |   -13.05 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           23 |     1694 | 2022-11-06 | GenOne            | L   | 0.547      | -            | -                | -                | -         |    -2.21 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           22 |     1697 | 2022-11-06 | Homyno            | W   | 0.546      | -            | -                | -                | 1 (0.546) |     3.37 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           21 |     1758 | 2022-11-01 | ROYALS            | L   | 0.513      | -            | -                | -                | -         |   -10.62 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           20 |     1799 | 2022-10-30 | Nexus             | L   | 0.499      | -            | -                | -                | -         |    -9.47 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           19 |     1810 | 2022-10-29 | PROSPECTS         | L   | 0.492      | -            | -                | -                | -         |    -4.68 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           18 |     1853 | 2022-10-27 | Permitta          | W   | 0.478      | 0.300        | 0.034 (0.005)    | 0.387 (0.056)    | -         |     9.36 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           17 |     1962 | 2022-10-22 | Genk              | L   | 0.446      | -            | -                | -                | -         |    -8.57 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           16 |     1972 | 2022-10-22 | High Space Tigers | W   | 0.444      | -            | -                | -                | 1 (0.444) |     2.50 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           15 |     2449 | 2022-10-02 | Genk              | W   | 0.312      | 0.307        | 0.007 (0.001)    | -                | 1 (0.312) |     3.86 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           14 |     2492 | 2022-09-30 | 9 Pandas          | L   | 0.300      | -            | -                | -                | -         |    -5.42 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           13 |     2498 | 2022-09-30 | ToA               | W   | 0.299      | -            | -                | -                | -         |     0.90 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           12 |     2514 | 2022-09-29 | Young Ninjas      | L   | 0.293      | -            | -                | -                | -         |    -2.98 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           11 |     2525 | 2022-09-29 | CENTER            | W   | 0.292      | -            | -                | -                | -         |     0.86 | matty, n0tice, ritchiEE, simix, Stev0se   |
|           10 |     2557 | 2022-09-28 | Copenhagen Flames | L   | 0.285      | -            | -                | -                | -         |    -2.63 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            9 |     2593 | 2022-09-26 | HOTU              | L   | 0.273      | -            | -                | -                | -         |    -5.10 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            8 |     2622 | 2022-09-25 | DOGS              | L   | 0.267      | -            | -                | -                | -         |    -6.00 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            7 |     2632 | 2022-09-25 | Nemiga            | W   | 0.266      | 0.294        | 0.008 (0.001)    | 0.115 (0.009)    | -         |     3.40 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            6 |     2658 | 2022-09-24 | LeeK              | W   | 0.259      | -            | -                | -                | -         |     1.32 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            5 |     2721 | 2022-09-23 | Sangal            | L   | 0.251      | -            | -                | -                | -         |    -2.50 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            4 |     2749 | 2022-09-22 | JoinTheForce      | W   | 0.246      | -            | -                | -                | -         |     1.78 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            3 |     2812 | 2022-09-20 | HONORIS           | W   | 0.233      | 0.371        | 0.011 (0.001)    | 0.748 (0.065)    | -         |     4.39 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            2 |     2953 | 2022-09-15 | Genk              | L   | 0.200      | -            | -                | -                | -         |    -3.94 | matty, n0tice, ritchiEE, simix, Stev0se   |
|            1 |     3524 | 2022-08-27 | Websterz          | L   | 0.072      | -            | -                | -                | -         |    -0.92 | jkXy, n0tice, ritchiEE, simix, Stev0se    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,547.21)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-06 |      0.547 | $1,960.00      | $1,071.85       |
| 2022-10-22 |      0.446 | $2,500.00      | $1,115.26       |
| 2022-10-02 |      0.312 | $3,503.00      | $1,093.51       |
| 2022-09-25 |      0.267 | $1,000.00      | $266.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
