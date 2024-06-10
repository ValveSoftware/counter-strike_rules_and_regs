### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  949.8<br />
<br />
Final Rank Value (949.8) = Starting Rank Value (914.6) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.6
- 400 + ( ( 0.258 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 914.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      180 | 2024-06-07 | B8                | L   | 1.000      | -            | -                | -                | -         |    -6.94 | Aaron, Bibu, DGL, kory, Porya      |
|           48 |      184 | 2024-06-07 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.42 | Aaron, Bibu, DGL, kory, Porya      |
|           47 |      284 | 2024-06-05 | The Prodigies     | W   | 1.000      | 0.379        | -                | 0.078 (0.029)    | 0 (0.000) |     3.45 | Aaron, Bibu, DGL, kory, Porya      |
|           46 |      367 | 2024-06-03 | GL Academy        | W   | 1.000      | 0.379        | 0.014 (0.005)    | 0.165 (0.063)    | 0 (0.000) |     9.45 | Aaron, Bibu, DGL, kory, Porya      |
|           45 |      475 | 2024-05-30 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -10.43 | Aaron, Bibu, DGL, kory, Porya      |
|           44 |      655 | 2024-05-22 | System5           | W   | 1.000      | 0.500        | -                | 0.092 (0.046)    | 0 (0.000) |     2.82 | Aaron, Bibu, DGL, kory, Porya      |
|           43 |      703 | 2024-05-21 | EYEBALLERS        | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.722 (0.361)    | 0 (0.000) |    13.38 | Aaron, Bibu, DGL, kory, Porya      |
|           42 |      742 | 2024-05-20 | Nexus             | W   | 1.000      | 0.379        | 0.013 (0.005)    | 0.469 (0.178)    | 0 (0.000) |     9.79 | Aaron, Bibu, DGL, kory, Porya      |
|           41 |      912 | 2024-05-15 | Apeks             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.46 | Aaron, Bibu, DGL, kory, Porya      |
|           40 |      971 | 2024-05-14 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.046 (0.023)    | 0.583 (0.292)    | 0 (0.000) |    19.18 | Aaron, Bibu, DGL, kory, Porya      |
|           39 |     1195 | 2024-05-04 | FlyQuest          | L   | 0.952      | -            | -                | -                | -         |    -1.70 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           38 |     1210 | 2024-05-03 | BIG               | L   | 0.945      | -            | -                | -                | -         |    -1.84 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           37 |     1230 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.940      | 0.889        | 0.294 (0.246)    | 0.480 (0.401)    | 1 (0.940) |    28.65 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           36 |     1280 | 2024-04-30 | Complexity        | L   | 0.926      | -            | -                | -                | -         |    -0.45 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           35 |     1490 | 2024-04-20 | EYEBALLERS        | L   | 0.860      | -            | -                | -                | -         |   -13.49 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           34 |     2029 | 2024-04-03 | SAW               | L   | 0.746      | -            | -                | -                | -         |    -1.66 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           33 |     2084 | 2024-04-01 | RUSH B            | W   | 0.733      | 0.500        | 0.016 (0.006)    | 0.357 (0.131)    | 0 (0.000) |    10.46 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           32 |     2362 | 2024-03-15 | Betera            | L   | 0.620      | -            | -                | -                | -         |   -14.57 | Aaron, DGL, Kamion, msN, Porya     |
|           31 |     2420 | 2024-03-13 | Monte             | L   | 0.607      | -            | -                | -                | -         |    -2.10 | Aaron, DGL, Kamion, msN, Porya     |
|           30 |     2799 | 2024-02-26 | System5           | L   | 0.500      | -            | -                | -                | -         |   -14.17 | Aaron, DGL, Kamion, msN, Porya     |
|           29 |     2937 | 2024-02-20 | ex-Preasy         | L   | 0.460      | -            | -                | -                | -         |    -7.16 | Aaron, DGL, Kamion, msN, Porya     |
|           28 |     2965 | 2024-02-19 | GamerLegion       | L   | 0.453      | -            | -                | -                | -         |    -3.61 | Aaron, DGL, Kamion, msN, Porya     |
|           27 |     2968 | 2024-02-19 | Cloud9            | L   | 0.452      | -            | -                | -                | -         |    -1.09 | Aaron, DGL, Kamion, msN, Porya     |
|           26 |     3038 | 2024-02-16 | SINNERS           | L   | 0.433      | -            | -                | -                | -         |    -4.10 | Aaron, DGL, Kamion, msN, Porya     |
|           25 |     3439 | 2024-01-25 | M1X KS            | W   | 0.287      | 0.143        | 0.028 (0.001)    | -                | 0 (0.000) |     6.82 | Aaron, DGL, Kamion, msN, Porya     |
|           24 |     3452 | 2024-01-24 | Viperio           | W   | 0.281      | -            | -                | -                | -         |     0.83 | Aaron, DGL, Kamion, msN, Porya     |
|           23 |     3474 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.273      | 0.143        | 0.046 (0.002)    | -                | -         |     5.33 | Aaron, DGL, Kamion, msN, Porya     |
|           22 |     3477 | 2024-01-23 | Rebels            | W   | 0.273      | 0.143        | 0.053 (0.002)    | -                | -         |     6.25 | Aaron, DGL, Kamion, msN, Porya     |
|           21 |     3499 | 2024-01-22 | M1X KS            | W   | 0.267      | -            | -                | -                | -         |     6.49 | Aaron, DGL, Kamion, msN, Porya     |
|           20 |     3503 | 2024-01-22 | Sampi             | L   | 0.266      | -            | -                | -                | -         |    -4.03 | Aaron, DGL, Kamion, msN, Porya     |
|           19 |     3507 | 2024-01-22 | Viperio           | W   | 0.266      | -            | -                | -                | -         |     0.79 | Aaron, DGL, Kamion, msN, Porya     |
|           18 |     3531 | 2024-01-21 | ex-sYnck          | W   | 0.260      | -            | -                | -                | -         |     0.83 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     3536 | 2024-01-21 | Gaimin Gladiators | L   | 0.259      | -            | -                | -                | -         |    -1.25 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     3560 | 2024-01-20 | KOI               | L   | 0.254      | -            | -                | -                | -         |    -2.92 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     3570 | 2024-01-20 | Astralis          | L   | 0.253      | -            | -                | -                | -         |    -0.03 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     3631 | 2024-01-19 | IKLA              | W   | 0.246      | -            | -                | -                | -         |     0.95 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     3677 | 2024-01-18 | EYEBALLERS        | W   | 0.240      | 0.143        | -                | 0.722 (0.025)    | -         |     4.01 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     3700 | 2024-01-18 | Eternal Fire      | L   | 0.239      | -            | -                | -                | -         |    -0.04 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     3951 | 2024-01-11 | IKLA              | L   | 0.194      | -            | -                | -                | -         |    -5.42 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     3957 | 2024-01-11 | SINNERS           | L   | 0.194      | -            | -                | -                | -         |    -1.51 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     3967 | 2024-01-11 | ex-Anonymo        | W   | 0.193      | -            | -                | -                | -         |     1.03 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3971 | 2024-01-11 | Permitta          | W   | 0.192      | 0.143        | -                | 0.972 (0.027)    | -         |     3.12 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3992 | 2024-01-10 | esmagaB           | W   | 0.187      | -            | -                | -                | -         |     1.57 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     4047 | 2024-01-09 | Sashi             | L   | 0.179      | -            | -                | -                | -         |    -1.24 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     4086 | 2023-12-20 | Metizport         | W   | 0.046      | 0.333        | 0.078 (0.001)    | -                | -         |     0.86 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     4089 | 2023-12-20 | Sprout            | W   | 0.045      | -            | -                | -                | -         |     0.12 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     4094 | 2023-12-19 | GUN5              | W   | 0.039      | -            | -                | -                | -         |     0.07 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     4095 | 2023-12-19 | Gucci Academy     | W   | 0.038      | -            | -                | -                | -         |     0.12 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4100 | 2023-12-19 | Metizport         | L   | 0.038      | -            | -                | -                | -         |    -0.49 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,371.43)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2023-12-20 |      0.046 | $8,000.00      | $371.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
