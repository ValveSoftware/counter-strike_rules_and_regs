### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, TOAO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  901.1<br />
<br />
Final Rank Value (901.1) = Starting Rank Value (910.8) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.180[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.8
- 400 + ( ( 0.264 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 910.8


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
|           47 |       63 | 2024-04-20 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -19.64 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           46 |      137 | 2024-04-18 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -14.90 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           45 |      160 | 2024-04-18 | Nexus           | W   | 1.000      | 0.384        | 0.023 (0.009)    | 0.544 (0.209)    | 0 (0.000) |    13.39 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           44 |      185 | 2024-04-17 | ENCE            | L   | 1.000      | -            | -                | -                | -         |    -3.44 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           43 |      317 | 2024-04-11 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -16.05 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           42 |      361 | 2024-04-10 | AMKAL           | W   | 1.000      | 0.384        | 0.051 (0.020)    | 0.703 (0.270)    | 0 (0.000) |    19.46 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           41 |      490 | 2024-04-06 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -15.53 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           40 |      581 | 2024-04-03 | Permitta        | W   | 1.000      | 0.384        | 0.031 (0.012)    | 0.970 (0.373)    | 0 (0.000) |    13.56 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           39 |      641 | 2024-04-01 | BLEED           | W   | 1.000      | 0.384        | 0.221 (0.085)    | 0.933 (0.359)    | 0 (0.000) |    22.70 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           38 |     1079 | 2024-03-09 | ECF             | L   | 0.906      | -            | -                | -                | -         |   -24.28 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           37 |     1089 | 2024-03-09 | Sampi           | L   | 0.905      | -            | -                | -                | -         |   -15.14 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           36 |     1159 | 2024-03-06 | INGLORIOUS      | L   | 0.886      | -            | -                | -                | -         |   -25.30 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           35 |     1165 | 2024-03-06 | Permitta        | L   | 0.885      | -            | -                | -                | -         |   -17.03 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           34 |     1276 | 2024-03-02 | Sampi           | W   | 0.857      | 0.371        | 0.084 (0.027)    | 0.698 (0.222)    | 0 (0.000) |    11.72 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           33 |     1589 | 2024-02-16 | SAW             | L   | 0.760      | -            | -                | -                | -         |    -4.74 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           32 |     1623 | 2024-02-15 | BetBoom         | L   | 0.751      | -            | -                | -                | -         |    -5.05 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           31 |     1650 | 2024-02-14 | Natus Vincere   | L   | 0.747      | -            | -                | -                | -         |    -0.12 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           30 |     1662 | 2024-02-14 | AMKAL           | W   | 0.745      | 0.143        | 0.051 (0.005)    | 0.703 (0.075)    | 1 (0.745) |    13.29 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           29 |     2121 | 2024-01-20 | KOI             | W   | 0.580      | 0.143        | 0.058 (0.005)    | 0.902 (0.075)    | 0 (0.000) |    11.50 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           28 |     2181 | 2024-01-19 | ex-sYnck        | W   | 0.572      | -            | -                | -                | 0 (0.000) |     4.60 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           27 |     2229 | 2024-01-18 | Aurora          | W   | 0.567      | 0.143        | 0.763 (0.062)    | 1.000 (0.081)    | 0 (0.000) |    16.20 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           26 |     2241 | 2024-01-18 | Astralis        | L   | 0.566      | -            | -                | -                | -         |    -1.26 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           25 |     2559 | 2024-01-09 | KOI             | W   | 0.508      | 0.143        | -                | 0.902 (0.065)    | -         |    10.42 | adamS, dav1g, JUST, mopoz, stadodo         |
|           24 |     2562 | 2024-01-09 | fnatic          | W   | 0.508      | 0.143        | 0.240 (0.017)    | -                | -         |    11.40 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           23 |     2568 | 2024-01-09 | Sashi           | W   | 0.507      | 0.143        | 0.064 (0.005)    | 1.000 (0.072)    | -         |     7.85 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           22 |     2583 | 2024-01-09 | Johnny Speeds   | W   | 0.506      | -            | -                | -                | -         |     5.32 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           21 |     2593 | 2024-01-09 | Underrated      | W   | 0.506      | -            | -                | -                | -         |     0.91 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           20 |     2856 | 2023-12-07 | Lausanne SE     | L   | 0.287      | -            | -                | -                | -         |    -7.43 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|           19 |     2879 | 2023-12-06 | Nemiga          | W   | 0.281      | -            | -                | -                | -         |     4.99 | 1eeR, almazer, FL4MUS, khaN, riskyb0b      |
|           18 |     2911 | 2023-12-05 | Endpoint        | L   | 0.274      | -            | -                | -                | -         |    -5.33 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|           17 |     2962 | 2023-12-02 | PGE Turow       | W   | 0.255      | -            | -                | -                | 1 (0.255) |     2.11 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|           16 |     3074 | 2023-11-25 | Rebels          | L   | 0.206      | -            | -                | -                | -         |    -3.17 | Flayy, kisserek, moonwalk, olimp, sNx      |
|           15 |     3168 | 2023-11-19 | brazylijski luz | W   | 0.166      | -            | -                | -                | -         |     1.83 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|           14 |     3191 | 2023-11-18 | AGO             | W   | 0.160      | -            | -                | -                | -         |     0.92 | delle, Dementor, DEPRESHN, Svedjehed, tAk  |
|           13 |     3261 | 2023-11-16 | PACT            | W   | 0.146      | -            | -                | -                | -         |     0.51 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|           12 |     3297 | 2023-11-15 | brazylijski luz | L   | 0.140      | -            | -                | -                | -         |    -2.88 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|           11 |     3327 | 2023-11-14 | AGO             | W   | 0.133      | -            | -                | -                | -         |     0.75 | delle, Dementor, DEPRESHN, Svedjehed, tAk  |
|           10 |     3502 | 2023-11-06 | Aurora          | L   | 0.078      | -            | -                | -                | -         |    -0.15 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            9 |     3518 | 2023-11-05 | ENCE Academy    | W   | 0.072      | -            | -                | -                | -         |     0.94 | HENU, juissi, myltsi, podi, S1rva          |
|            8 |     3548 | 2023-11-04 | Nexus           | W   | 0.065      | -            | -                | -                | -         |     0.84 | BTN, ragga, s0und, smekk-, XELLOW          |
|            7 |     3557 | 2023-11-03 | brazylijski luz | L   | 0.060      | -            | -                | -                | -         |    -1.23 | Furlan, phr, POLO, Prism, Qlocuu           |
|            6 |     3579 | 2023-11-02 | Project G       | L   | 0.053      | -            | -                | -                | -         |    -1.51 | dav1g, Dragon, Lekr0, mwlky, xfl0ud        |
|            5 |     3601 | 2023-11-01 | The Chosen Few  | L   | 0.047      | -            | -                | -                | -         |    -1.11 | hybrid, Libido, shaiK, Skrimo, SPELLAN     |
|            4 |     3633 | 2023-10-31 | brazylijski luz | W   | 0.040      | -            | -                | -                | -         |     0.44 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            3 |     3640 | 2023-10-31 | BIG Academy     | W   | 0.039      | -            | -                | -                | -         |     0.07 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            2 |     3664 | 2023-10-30 | PGE Turow       | W   | 0.033      | -            | -                | -                | -         |     0.27 | b1elany, darko, gRuChA, kadziu, Markoś     |
|            1 |     3698 | 2023-10-29 | Sampi           | L   | 0.027      | -            | -                | -                | -         |    -0.33 | bajmi, Demho, ex1st, fr3nd, Klameczka      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,968.95)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-02 |      0.255 | $18,081.00     | $4,606.02       |
| 2023-11-26 |      0.213 | $1,238.00      | $263.53         |
| 2023-11-05 |      0.073 | $1,358.00      | $99.39          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
