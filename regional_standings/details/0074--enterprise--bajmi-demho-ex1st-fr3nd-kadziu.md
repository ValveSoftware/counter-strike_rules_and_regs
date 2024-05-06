### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, kadziu<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  898.8<br />
<br />
Final Rank Value (898.8) = Starting Rank Value (941.3) + Head To Head Adjustments (-42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 941.3
- 400 + ( ( 0.284 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 941.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |        7 | 2024-05-06 | B8              | L   | 1.000      | -            | -                | -                | -         |   -11.71 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           44 |       35 | 2024-05-04 | MOUZ NXT        | W   | 1.000      | 0.435        | 0.210 (0.091)    | 1.000 (0.435)    | 0 (0.000) |    21.11 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           43 |       94 | 2024-05-01 | ENCE Academy    | W   | 1.000      | 0.435        | -                | 0.374 (0.163)    | 0 (0.000) |    12.12 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           42 |      123 | 2024-04-30 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |   -15.37 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           41 |      160 | 2024-04-29 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -16.88 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           40 |      201 | 2024-04-27 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -14.83 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           39 |      220 | 2024-04-26 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -13.67 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           38 |      293 | 2024-04-23 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -18.75 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           37 |      359 | 2024-04-20 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -18.83 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           36 |      433 | 2024-04-18 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -12.10 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           35 |      456 | 2024-04-18 | Nexus           | W   | 1.000      | 0.384        | 0.031 (0.012)    | 0.605 (0.232)    | 0 (0.000) |    13.79 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           34 |      481 | 2024-04-17 | ENCE            | L   | 1.000      | -            | -                | -                | -         |    -2.62 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           33 |      613 | 2024-04-11 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -14.25 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           32 |      657 | 2024-04-10 | AMKAL           | W   | 1.000      | 0.384        | 0.200 (0.077)    | 0.851 (0.327)    | 0 (0.000) |    22.94 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           31 |      786 | 2024-04-06 | Sampi           | L   | 0.998      | -            | -                | -                | -         |   -14.46 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           30 |      877 | 2024-04-03 | Permitta        | W   | 0.979      | 0.384        | 0.053 (0.020)    | 0.979 (0.368)    | 0 (0.000) |    14.02 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           29 |      937 | 2024-04-01 | BLEED           | W   | 0.965      | 0.384        | 0.400 (0.148)    | 1.000 (0.371)    | 0 (0.000) |    23.29 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           28 |     1375 | 2024-03-09 | ECF             | L   | 0.813      | -            | -                | -                | -         |   -21.93 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           27 |     1385 | 2024-03-09 | Sampi           | L   | 0.812      | -            | -                | -                | -         |   -13.32 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           26 |     1455 | 2024-03-06 | INGLORIOUS      | L   | 0.793      | -            | -                | -                | -         |   -22.94 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           25 |     1461 | 2024-03-06 | Permitta        | L   | 0.792      | -            | -                | -                | -         |   -14.41 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           24 |     1572 | 2024-03-02 | Sampi           | W   | 0.764      | 0.371        | 0.101 (0.029)    | 0.731 (0.207)    | 0 (0.000) |    10.89 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           23 |     1885 | 2024-02-16 | SAW             | L   | 0.666      | -            | -                | -                | -         |    -2.19 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           22 |     1919 | 2024-02-15 | BetBoom         | L   | 0.658      | -            | -                | -                | -         |    -2.04 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           21 |     1946 | 2024-02-14 | Natus Vincere   | L   | 0.654      | -            | -                | -                | -         |    -0.10 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           20 |     1958 | 2024-02-14 | AMKAL           | W   | 0.652      | 0.143        | 0.200 (0.019)    | 0.851 (0.079)    | 1 (0.652) |    15.44 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           19 |     2417 | 2024-01-20 | KOI             | W   | 0.486      | -            | -                | -                | 0 (0.000) |     8.96 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           18 |     2477 | 2024-01-19 | ex-sYnck        | W   | 0.479      | -            | -                | -                | -         |     2.90 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           17 |     2525 | 2024-01-18 | Aurora          | W   | 0.473      | 0.143        | 0.973 (0.066)    | 0.967 (0.065)    | -         |    14.39 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           16 |     2537 | 2024-01-18 | Astralis        | L   | 0.473      | -            | -                | -                | -         |    -0.50 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           15 |     2855 | 2024-01-09 | KOI             | W   | 0.415      | -            | -                | -                | -         |     7.79 | adamS, dav1g, JUST, mopoz, stadodo         |
|           14 |     2858 | 2024-01-09 | fnatic          | W   | 0.414      | 0.143        | 0.327 (0.019)    | -                | -         |    10.56 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           13 |     2864 | 2024-01-09 | Sashi           | W   | 0.414      | 0.143        | -                | 1.000 (0.059)    | -         |     8.35 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           12 |     2879 | 2024-01-09 | Johnny Speeds   | W   | 0.413      | -            | -                | -                | -         |     3.82 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           11 |     2889 | 2024-01-09 | Underrated      | W   | 0.413      | -            | -                | -                | -         |     0.61 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           10 |     3152 | 2023-12-07 | Lausanne SE     | L   | 0.194      | -            | -                | -                | -         |    -5.23 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            9 |     3175 | 2023-12-06 | Nemiga          | W   | 0.187      | 0.372        | 0.667 (0.046)    | -                | -         |     5.17 | 1eeR, almazer, FL4MUS, khaN, riskyb0b      |
|            8 |     3207 | 2023-12-05 | Endpoint        | L   | 0.180      | -            | -                | -                | -         |    -3.19 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            7 |     3258 | 2023-12-02 | PGE Turow       | W   | 0.161      | -            | -                | -                | 1 (0.161) |     1.15 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            6 |     3370 | 2023-11-25 | Rebels          | L   | 0.112      | -            | -                | -                | -         |    -0.91 | Flayy, kisserek, moonwalk, olimp, sNx      |
|            5 |     3464 | 2023-11-19 | brazylijski luz | W   | 0.073      | -            | -                | -                | -         |     0.75 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            4 |     3487 | 2023-11-18 | AGO             | W   | 0.067      | -            | -                | -                | -         |     0.29 | delle, Dementor, DEPRESHN, Svedjehed, tAk  |
|            3 |     3557 | 2023-11-16 | PACT            | W   | 0.053      | -            | -                | -                | -         |     0.14 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            2 |     3593 | 2023-11-15 | brazylijski luz | L   | 0.047      | -            | -                | -                | -         |    -0.99 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            1 |     3623 | 2023-11-14 | AGO             | W   | 0.040      | -            | -                | -                | -         |     0.17 | delle, Dementor, DEPRESHN, Svedjehed, tAk  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,566.97)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $500.00        | $500.00         |
| 2023-12-02 |      0.161 | $18,081.00     | $2,918.95       |
| 2023-11-26 |      0.120 | $1,238.00      | $148.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
