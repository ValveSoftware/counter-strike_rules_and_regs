### Roster Details<br />
Team Name: SINNERS<br />
Roster: beastik, majky, MoriiSko, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  999.8<br />
<br />
Final Rank Value (999.8) = Starting Rank Value (1117.2) + Head To Head Adjustments (-117.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.327[<sup>2</sup>](#table1)
- LAN Wins: 0.241[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1117.2
- 400 + ( ( 0.360 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1117.2


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
|           77 |        5 | 2024-06-10 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -18.98 | beastik, majky, MoriiSko, oskar, SHOCK |
|           76 |       12 | 2024-06-10 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -9.66 | beastik, majky, MoriiSko, oskar, SHOCK |
|           75 |       15 | 2024-06-10 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.35 | beastik, majky, MoriiSko, oskar, SHOCK |
|           74 |       22 | 2024-06-10 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.16 | beastik, majky, MoriiSko, oskar, SHOCK |
|           73 |       24 | 2024-06-10 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -28.06 | beastik, majky, MoriiSko, oskar, SHOCK |
|           72 |       57 | 2024-06-09 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    24.35 | beastik, majky, MoriiSko, oskar, SHOCK |
|           71 |       66 | 2024-06-09 | 3DMAX             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    22.33 | beastik, majky, MoriiSko, oskar, SHOCK |
|           70 |       70 | 2024-06-09 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -21.50 | beastik, majky, MoriiSko, oskar, SHOCK |
|           69 |       78 | 2024-06-09 | Aurora            | W   | 1.000      | 0.143        | 0.513 (0.073)    | -                | 0 (0.000) |    27.74 | beastik, majky, MoriiSko, oskar, SHOCK |
|           68 |      100 | 2024-06-08 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -7.75 | beastik, majky, MoriiSko, oskar, SHOCK |
|           67 |      190 | 2024-06-07 | RUBY              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.74 | beastik, majky, MoriiSko, oskar, SHOCK |
|           66 |      230 | 2024-06-06 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -13.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|           65 |      291 | 2024-06-05 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.56 | beastik, majky, MoriiSko, oskar, SHOCK |
|           64 |      298 | 2024-06-05 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -20.13 | beastik, majky, MoriiSko, oskar, SHOCK |
|           63 |      356 | 2024-06-04 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -19.54 | beastik, majky, MoriiSko, oskar, SHOCK |
|           62 |      398 | 2024-06-02 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -18.88 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           61 |      414 | 2024-06-01 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -20.09 | AJTT, beastik, MoriiSko, oskar, SHOCK  |
|           60 |      433 | 2024-06-01 | Sampi             | W   | 1.000      | 0.346        | -                | 0.883 (0.305)    | 1 (1.000) |     9.48 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           59 |      461 | 2024-05-31 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -19.99 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           58 |      484 | 2024-05-30 | B8                | W   | 1.000      | 0.435        | 0.160 (0.069)    | 1.000 (0.435)    | 0 (0.000) |    21.59 | beastik, majky, MoriiSko, oskar, SHOCK |
|           57 |      512 | 2024-05-29 | brazylijski luz   | W   | 1.000      | -            | -                | -                | -         |     8.32 | beastik, majky, MoriiSko, oskar, SHOCK |
|           56 |      571 | 2024-05-26 | Sampi             | W   | 1.000      | 0.435        | -                | 0.883 (0.384)    | -         |    11.18 | beastik, majky, MoriiSko, oskar, SHOCK |
|           55 |      604 | 2024-05-24 | GUN5              | W   | 1.000      | 0.435        | 0.079 (0.034)    | -                | -         |    11.25 | AJTT, beastik, majky, MoriiSko, oskar  |
|           54 |      612 | 2024-05-24 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.72 | AJTT, beastik, majky, oskar, SHOCK     |
|           53 |      623 | 2024-05-23 | UNiTY             | W   | 1.000      | -            | -                | -                | -         |    12.95 | AJTT, beastik, majky, MoriiSko, oskar  |
|           52 |      630 | 2024-05-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -16.97 | AJTT, beastik, majky, MoriiSko, oskar  |
|           51 |      747 | 2024-05-20 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | -         |     9.00 | AJTT, beastik, majky, MoriiSko, oskar  |
|           50 |      800 | 2024-05-18 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -14.01 | AJTT, beastik, oskar, SHOCK, Tomkeejs  |
|           49 |      881 | 2024-05-16 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.583 (0.253)    | -         |    12.88 | AJTT, beastik, majky, oskar, SHOCK     |
|           48 |      974 | 2024-05-14 | Passion UA        | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.905 (0.393)    | -         |    13.52 | AJTT, beastik, majky, oskar, SHOCK     |
|           47 |     1142 | 2024-05-07 | Nemiga            | L   | 0.971      | -            | -                | -                | -         |    -6.39 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           46 |     1177 | 2024-05-05 | Endpoint          | W   | 0.959      | -            | -                | -                | -         |    13.44 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           45 |     1240 | 2024-05-02 | Gaimin Gladiators | L   | 0.938      | -            | -                | -                | -         |    -8.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           44 |     1268 | 2024-05-01 | B8                | L   | 0.931      | -            | -                | -                | -         |   -14.13 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           43 |     1303 | 2024-04-29 | 1WIN              | W   | 0.919      | 0.435        | -                | 0.672 (0.268)    | -         |    13.06 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           42 |     1309 | 2024-04-29 | Sangal            | L   | 0.918      | -            | -                | -                | -         |   -11.19 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           41 |     1320 | 2024-04-28 | Zero Tenacity     | L   | 0.913      | -            | -                | -                | -         |   -14.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           40 |     1353 | 2024-04-27 | Zero Tenacity     | L   | 0.905      | -            | -                | -                | -         |   -15.90 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           39 |     1369 | 2024-04-26 | PARIVISION        | L   | 0.899      | -            | -                | -                | -         |   -17.32 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           38 |     1418 | 2024-04-24 | Endpoint          | L   | 0.886      | -            | -                | -                | -         |   -20.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           37 |     1454 | 2024-04-22 | HAVU              | W   | 0.872      | -            | -                | -                | -         |     3.02 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           36 |     1503 | 2024-04-20 | ENCE Academy      | L   | 0.859      | -            | -                | -                | -         |   -22.76 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           35 |     1559 | 2024-04-19 | ECLOT             | L   | 0.851      | -            | -                | -                | -         |   -12.81 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           34 |     1642 | 2024-04-17 | Gaimin Gladiators | L   | 0.838      | -            | -                | -                | -         |    -9.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           33 |     1674 | 2024-04-16 | BLEED             | L   | 0.831      | -            | -                | -                | -         |    -6.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           32 |     1704 | 2024-04-14 | Passion UA        | W   | 0.818      | 0.371        | 0.088 (0.027)    | 0.905 (0.274)    | -         |     7.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           31 |     1793 | 2024-04-10 | 3DMAX             | W   | 0.794      | 0.500        | 0.122 (0.049)    | 0.821 (0.326)    | -         |    14.63 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           30 |     1812 | 2024-04-10 | UNiTY             | W   | 0.791      | -            | -                | -                | -         |     7.56 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           29 |     1843 | 2024-04-09 | 9 Pandas          | W   | 0.787      | 0.500        | 0.114 (0.045)    | 0.758 (0.298)    | -         |    12.96 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           28 |     1897 | 2024-04-08 | ALTERNATE aTTaX   | W   | 0.778      | -            | -                | -                | -         |     6.96 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           27 |     1947 | 2024-04-05 | Nexus             | W   | 0.760      | -            | -                | -                | -         |     5.81 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           26 |     2038 | 2024-04-03 | Rebels            | W   | 0.745      | 0.500        | 0.053 (0.020)    | -                | -         |    11.37 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           25 |     2082 | 2024-04-01 | Aurora            | W   | 0.734      | 0.500        | 0.513 (0.188)    | 0.918 (0.337)    | -         |    21.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           24 |     2107 | 2024-03-29 | ex-Sprout         | W   | 0.713      | -            | -                | -                | -         |     0.52 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           23 |     2322 | 2024-03-17 | ECLOT             | L   | 0.634      | -            | -                | -                | -         |    -7.59 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           22 |     2329 | 2024-03-17 | UNiTY             | W   | 0.632      | -            | -                | -                | 1 (0.632) |     7.67 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           21 |     2347 | 2024-03-16 | Sampi             | W   | 0.626      | -            | -                | -                | 1 (0.626) |     7.39 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           20 |     2360 | 2024-03-15 | UNiTY             | L   | 0.620      | -            | -                | -                | -         |   -11.98 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           19 |     2428 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.607      | -            | -                | -                | -         |     6.60 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           18 |     2481 | 2024-03-11 | brazylijski luz   | L   | 0.593      | -            | -                | -                | -         |   -15.57 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           17 |     2695 | 2024-03-03 | Gaimin Gladiators | L   | 0.540      | -            | -                | -                | -         |    -5.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           16 |     2983 | 2024-02-18 | Monte             | L   | 0.447      | -            | -                | -                | -         |    -3.15 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           15 |     3031 | 2024-02-16 | 500               | W   | 0.433      | -            | -                | -                | -         |     1.86 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           14 |     3038 | 2024-02-16 | PERA              | W   | 0.433      | -            | -                | -                | -         |     4.10 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           13 |     3043 | 2024-02-16 | 500               | L   | 0.432      | -            | -                | -                | -         |   -11.87 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           12 |     3249 | 2024-02-04 | Into the Breach   | L   | 0.352      | -            | -                | -                | -         |    -9.97 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           11 |     3312 | 2024-02-02 | ex-Preasy         | L   | 0.338      | -            | -                | -                | -         |    -8.12 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|           10 |     3408 | 2024-01-27 | GODSENT           | W   | 0.298      | -            | -                | -                | -         |     0.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            9 |     3481 | 2024-01-23 | MOUZ NXT          | W   | 0.272      | -            | -                | -                | -         |     4.23 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            8 |     3614 | 2024-01-19 | Nexus             | L   | 0.247      | -            | -                | -                | -         |    -6.19 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            7 |     3674 | 2024-01-18 | fnatic            | L   | 0.240      | -            | -                | -                | -         |    -1.60 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            6 |     3695 | 2024-01-18 | Virtus.pro        | L   | 0.239      | -            | -                | -                | -         |    -0.27 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            5 |     3952 | 2024-01-11 | HEROIC            | L   | 0.194      | -            | -                | -                | -         |    -0.14 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            4 |     3957 | 2024-01-11 | PERA              | W   | 0.194      | -            | -                | -                | -         |     1.51 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            3 |     3968 | 2024-01-11 | ILIN              | W   | 0.193      | -            | -                | -                | -         |     0.19 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            2 |     3973 | 2024-01-11 | V1dar             | W   | 0.192      | -            | -                | -                | -         |     0.23 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |
|            1 |     3988 | 2024-01-10 | The Prodigies     | W   | 0.187      | -            | -                | -                | -         |     0.21 | AJTT, beastik, NEOFRAG, oskar, SHOCK   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,741.53)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $545.00        | $545.00         |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $1,306.00      | $1,306.00       |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-17 |      0.634 | $2,984.00      | $1,890.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
