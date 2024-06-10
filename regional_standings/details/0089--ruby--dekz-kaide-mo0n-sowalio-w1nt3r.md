### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, Kaide, mo0N, sowalio, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  890.7<br />
<br />
Final Rank Value (890.7) = Starting Rank Value (889.5) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.394[<sup>2</sup>](#table1)
- Opponent Network: 0.212[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 889.5
- 400 + ( ( 0.246 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 889.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       45 | 2024-06-09 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -10.28 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           41 |      190 | 2024-06-07 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -11.74 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           40 |      299 | 2024-06-05 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |   -23.11 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           39 |      317 | 2024-06-05 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |   -26.82 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           38 |      368 | 2024-06-03 | Insilio         | W   | 1.000      | 0.371        | 0.009 (0.003)    | 0.625 (0.232)    | 0 (0.000) |    17.93 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           37 |      377 | 2024-06-03 | HAVU            | L   | 1.000      | -            | -                | -                | -         |   -23.66 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           36 |      415 | 2024-06-01 | Zero Tenacity   | W   | 1.000      | 0.371        | 0.154 (0.057)    | 1.000 (0.371)    | 0 (0.000) |    22.98 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           35 |      479 | 2024-05-30 | esmagaB         | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.211 (0.078)    | 0 (0.000) |     7.27 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           34 |      489 | 2024-05-30 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -1.51 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           33 |      533 | 2024-05-28 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |    -9.40 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           32 |      573 | 2024-05-26 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -8.61 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           31 |      584 | 2024-05-25 | B8              | L   | 1.000      | -            | -                | -                | -         |    -5.34 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           30 |      624 | 2024-05-23 | Nexus           | W   | 1.000      | 0.435        | 0.013 (0.006)    | 0.469 (0.204)    | 0 (0.000) |     9.36 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           29 |      714 | 2024-05-21 | Endpoint        | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.570 (0.248)    | 0 (0.000) |    16.01 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           28 |     1053 | 2024-05-11 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -8.58 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           27 |     1079 | 2024-05-10 | Nemiga          | W   | 0.991      | 0.435        | 0.335 (0.144)    | 0.638 (0.275)    | 0 (0.000) |    26.41 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           26 |     1136 | 2024-05-07 | Insilio         | W   | 0.973      | 0.435        | 0.009 (0.004)    | 0.625 (0.264)    | 0 (0.000) |    18.64 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           25 |     1179 | 2024-05-05 | HAVU            | W   | 0.959      | 0.435        | -                | 0.254 (0.106)    | 0 (0.000) |     8.68 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           24 |     1211 | 2024-05-03 | V1dar           | W   | 0.945      | -            | -                | -                | 0 (0.000) |     4.07 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           23 |     1266 | 2024-05-01 | GL Academy      | L   | 0.931      | -            | -                | -                | -         |   -18.77 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           22 |     1308 | 2024-04-29 | Permitta        | L   | 0.918      | -            | -                | -                | -         |   -12.54 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           21 |     1339 | 2024-04-27 | Astralis Talent | W   | 0.906      | -            | -                | -                | 0 (0.000) |     1.48 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           20 |     1501 | 2024-04-20 | Zero Tenacity   | L   | 0.859      | -            | -                | -                | -         |    -9.59 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           19 |     1581 | 2024-04-18 | Sashi           | L   | 0.846      | -            | -                | -                | -         |    -7.61 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           18 |     1590 | 2024-04-18 | Aurora          | W   | 0.846      | 0.143        | 0.513 (0.062)    | 0.918 (0.111)    | -         |    25.77 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           17 |     1597 | 2024-04-18 | NOM             | W   | 0.846      | -            | -                | -                | -         |     3.45 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           16 |     1644 | 2024-04-17 | JANO            | W   | 0.838      | -            | -                | -                | -         |     6.31 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           15 |     2289 | 2024-03-19 | Sashi           | L   | 0.647      | -            | -                | -                | -         |    -5.72 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           14 |     2346 | 2024-03-16 | Permitta        | W   | 0.626      | 0.372        | 0.022 (0.005)    | 0.972 (0.227)    | -         |    12.40 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           13 |     2482 | 2024-03-11 | Nexus           | L   | 0.593      | -            | -                | -                | -         |   -10.17 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           12 |     2518 | 2024-03-09 | Spirit Academy  | W   | 0.580      | -            | -                | -                | -         |     5.04 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           11 |     2545 | 2024-03-08 | ARCRED          | W   | 0.573      | -            | -                | -                | -         |     3.13 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           10 |     2775 | 2024-02-27 | Spirit Academy  | L   | 0.507      | -            | -                | -                | -         |   -12.16 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            9 |     2779 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.506      | 0.143        | 0.046 (0.003)    | -                | -         |     9.75 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            8 |     3180 | 2024-02-09 | FORZE           | L   | 0.386      | -            | -                | -                | -         |    -4.59 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            7 |     3194 | 2024-02-08 | AMKAL           | L   | 0.380      | -            | -                | -                | -         |    -1.75 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            6 |     3196 | 2024-02-08 | M1X KS          | W   | 0.379      | -            | -                | -                | -         |     9.33 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            5 |     3364 | 2024-01-30 | Nemiga          | L   | 0.321      | -            | -                | -                | -         |    -1.26 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            4 |     3369 | 2024-01-30 | Permitta        | W   | 0.320      | -            | -                | -                | -         |     5.60 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            3 |     3376 | 2024-01-30 | The Suspect     | W   | 0.320      | -            | -                | -                | -         |     4.02 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            2 |     3732 | 2024-01-17 | AMKAL           | L   | 0.234      | -            | -                | -                | -         |    -1.07 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            1 |     3797 | 2024-01-16 | Passion UA      | L   | 0.227      | -            | -                | -                | -         |    -2.14 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,672.85)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,300.00      | $3,300.00       |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-25 |      0.686 | $2,000.00      | $1,372.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
