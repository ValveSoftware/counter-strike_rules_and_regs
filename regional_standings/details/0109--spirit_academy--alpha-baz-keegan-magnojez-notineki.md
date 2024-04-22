### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  779.8<br />
<br />
Final Rank Value (779.8) = Starting Rank Value (749.0) + Head To Head Adjustments (30.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 749.0
- 400 + ( ( 0.181 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 749.0


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
|           26 |     1071 | 2024-03-09 | RUBY              | L   | 0.907      | -            | -                | -                | -         |   -13.76 | alpha, baz, keegaN, Magnojez, notineki    |
|           25 |     1103 | 2024-03-08 | Passion UA        | W   | 0.899      | 0.372        | 0.031 (0.010)    | 0.625 (0.209)    | 0 (0.000) |    18.38 | alpha, baz, keegaN, Magnojez, notineki    |
|           24 |     1298 | 2024-02-29 | Aurora            | L   | 0.846      | -            | -                | -                | -         |    -1.54 | alpha, baz, keegaN, Magnojez, notineki    |
|           23 |     1308 | 2024-02-28 | 9 Pandas          | L   | 0.840      | -            | -                | -                | -         |    -3.21 | alpha, baz, keegaN, Magnojez, notineki    |
|           22 |     1310 | 2024-02-28 | HAVU              | W   | 0.839      | 0.143        | 0.027 (0.003)    | 0.154 (0.018)    | 0 (0.000) |    15.13 | alpha, baz, keegaN, Magnojez, notineki    |
|           21 |     1328 | 2024-02-27 | RUBY              | W   | 0.833      | 0.143        | 0.011 (0.001)    | 0.369 (0.044)    | 0 (0.000) |    14.46 | alpha, baz, keegaN, Magnojez, notineki    |
|           20 |     1335 | 2024-02-27 | brazylijski luz   | W   | 0.833      | 0.143        | 0.019 (0.002)    | 0.356 (0.042)    | 0 (0.000) |    15.48 | alpha, baz, keegaN, Magnojez, notineki    |
|           19 |     1885 | 2024-02-01 | Sangal            | L   | 0.659      | -            | -                | -                | -         |   -11.43 | alpha, baz, keegaN, Magnojez, notineki    |
|           18 |     1948 | 2024-01-28 | Alliance          | W   | 0.631      | 0.371        | 0.020 (0.005)    | 0.855 (0.200)    | 0 (0.000) |    13.45 | alpha, baz, keegaN, Magnojez, notineki    |
|           17 |     2010 | 2024-01-24 | Sangal            | L   | 0.606      | -            | -                | -                | -         |   -11.09 | alpha, keegaN, Magnojez, notineki, S0tF1k |
|           16 |     2255 | 2024-01-18 | Permitta          | L   | 0.565      | -            | -                | -                | -         |    -6.14 | alpha, baz, keegaN, Magnojez, notineki    |
|           15 |     2379 | 2024-01-15 | Aurora Young Blud | L   | 0.545      | -            | -                | -                | -         |   -10.20 | alpha, baz, keegaN, Magnojez, notineki    |
|           14 |     2631 | 2023-12-23 | ex-Anonymo        | W   | 0.391      | 0.333        | 0.027 (0.004)    | 0.276 (0.036)    | 0 (0.000) |     6.64 | alpha, baz, keegaN, Magnojez, notineki    |
|           13 |     2635 | 2023-12-21 | ex-Anonymo        | W   | 0.378      | 0.333        | 0.027 (0.003)    | 0.276 (0.035)    | 0 (0.000) |     6.55 | alpha, baz, keegaN, Magnojez, notineki    |
|           12 |     2654 | 2023-12-19 | NAVI Junior       | W   | 0.364      | 0.333        | 0.019 (0.002)    | 0.195 (0.024)    | 0 (0.000) |     5.58 | alpha, baz, keegaN, Magnojez, notineki    |
|           11 |     2720 | 2023-12-16 | The Witchers      | W   | 0.345      | 0.333        | 0.038 (0.004)    | 0.172 (0.020)    | 0 (0.000) |     5.71 | alpha, baz, keegaN, Magnojez, notineki    |
|           10 |     2859 | 2023-12-07 | FORZE             | L   | 0.287      | -            | -                | -                | -         |    -3.92 | baz, keegaN, Magnojez, notineki, robo     |
|            9 |     2881 | 2023-12-06 | SINNERS           | L   | 0.280      | -            | -                | -                | -         |    -1.20 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO     |
|            8 |     2947 | 2023-12-03 | ARCRED            | L   | 0.260      | -            | -                | -                | -         |    -4.57 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     3175 | 2023-11-19 | The Witchers      | L   | 0.166      | -            | -                | -                | -         |    -2.50 | alpha, baz, keegaN, Magnojez, notineki    |
|            6 |     3443 | 2023-11-09 | Aurora Young Blud | L   | 0.097      | -            | -                | -                | -         |    -1.82 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3493 | 2023-11-07 | Zero Tenacity     | L   | 0.084      | -            | -                | -                | -         |    -1.16 | alpha, baz, keegaN, Magnojez, notineki    |
|            4 |     3517 | 2023-11-05 | Gaimin Gladiators | L   | 0.073      | -            | -                | -                | -         |    -0.08 | alpha, baz, keegaN, Magnojez, notineki    |
|            3 |     3589 | 2023-11-02 | UNiTY             | W   | 0.051      | 0.143        | 0.047 (0.000)    | 0.261 (0.002)    | 0 (0.000) |     1.03 | alpha, baz, keegaN, Magnojez, notineki    |
|            2 |     3635 | 2023-10-31 | ENCE Academy      | W   | 0.040      | -            | -                | -                | -         |     0.79 | alpha, baz, keegaN, Magnojez, notineki    |
|            1 |     3647 | 2023-10-31 | Viperio           | W   | 0.038      | -            | -                | -                | -         |     0.27 | alpha, baz, keegaN, Magnojez, notineki    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,747.93)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.391 | $5,000.00      | $1,954.19       |
| 2023-12-10 |      0.307 | $5,000.00      | $1,533.88       |
| 2023-12-03 |      0.260 | $1,000.00      | $259.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
