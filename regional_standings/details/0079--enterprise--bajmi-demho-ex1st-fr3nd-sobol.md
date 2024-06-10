### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  944.7<br />
<br />
Final Rank Value (944.7) = Starting Rank Value (951.6) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.316[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.6
- 400 + ( ( 0.277 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 951.6


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
|           56 |        5 | 2024-06-10 | SINNERS           | W   | 1.000      | 0.379        | 0.045 (0.017)    | 0.844 (0.320)    | 0 (0.000) |    18.98 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           55 |       19 | 2024-06-10 | Gaimin Gladiators | W   | 1.000      | 0.450        | 0.081 (0.037)    | 0.749 (0.337)    | 0 (0.000) |    23.23 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           54 |       61 | 2024-06-09 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -6.88 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           53 |      105 | 2024-06-08 | Nexus             | W   | 1.000      | 0.450        | -                | 0.469 (0.211)    | 0 (0.000) |     9.23 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           52 |      185 | 2024-06-07 | Entropiq          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.80 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           51 |      234 | 2024-06-06 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -26.18 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           50 |      285 | 2024-06-05 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -20.40 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           49 |      297 | 2024-06-05 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -20.63 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           48 |      357 | 2024-06-04 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.081 (0.030)    | -                | 0 (0.000) |    21.82 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           47 |      380 | 2024-06-03 | UNiTY             | W   | 1.000      | 0.371        | 0.029 (0.011)    | -                | 0 (0.000) |    17.08 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           46 |      425 | 2024-06-01 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -25.17 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           45 |      439 | 2024-06-01 | Permitta          | W   | 1.000      | 0.371        | -                | 0.972 (0.360)    | 0 (0.000) |    14.05 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           44 |      480 | 2024-05-30 | RUSTEC            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.48 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           43 |      494 | 2024-05-30 | brazylijski luz   | L   | 1.000      | -            | -                | -                | -         |   -18.51 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           42 |      504 | 2024-05-29 | FLuffy Gangsters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.45 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           41 |      532 | 2024-05-28 | Sampi             | W   | 1.000      | 0.379        | 0.036 (0.014)    | 0.883 (0.334)    | -         |    15.89 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           40 |      613 | 2024-05-24 | Illuminar         | W   | 1.000      | -            | -                | -                | -         |     5.26 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           39 |      660 | 2024-05-22 | Entropiq          | W   | 1.000      | -            | -                | -                | -         |     1.53 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           38 |      748 | 2024-05-20 | ECSTATIC          | W   | 1.000      | -            | -                | -                | -         |     1.54 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           37 |     1077 | 2024-05-10 | BetBoom           | L   | 0.992      | -            | -                | -                | -         |    -1.41 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           36 |     1144 | 2024-05-07 | Permitta          | W   | 0.971      | 0.435        | 0.022 (0.009)    | 0.972 (0.410)    | -         |    15.49 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           35 |     1158 | 2024-05-06 | B8                | L   | 0.965      | -            | -                | -                | -         |    -9.04 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           34 |     1186 | 2024-05-04 | MOUZ NXT          | W   | 0.954      | 0.435        | 0.164 (0.068)    | 1.000 (0.414)    | -         |    21.29 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           33 |     1245 | 2024-05-01 | ENCE Academy      | W   | 0.934      | -            | -                | -                | -         |     9.86 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           32 |     1274 | 2024-04-30 | EYEBALLERS        | L   | 0.927      | -            | -                | -                | -         |   -13.75 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           31 |     1311 | 2024-04-29 | Nexus             | L   | 0.917      | -            | -                | -                | -         |   -16.18 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           30 |     1352 | 2024-04-27 | Permitta          | L   | 0.905      | -            | -                | -                | -         |   -12.91 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           29 |     1371 | 2024-04-26 | Insilio           | L   | 0.899      | -            | -                | -                | -         |   -12.55 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           28 |     1444 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.878      | -            | -                | -                | -         |   -14.83 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           27 |     1510 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.858      | -            | -                | -                | -         |   -14.17 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           26 |     1584 | 2024-04-18 | MOUZ NXT          | L   | 0.846      | -            | -                | -                | -         |    -9.26 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           25 |     1607 | 2024-04-18 | Nexus             | W   | 0.845      | -            | -                | -                | -         |    10.82 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           24 |     1632 | 2024-04-17 | ENCE              | L   | 0.839      | -            | -                | -                | -         |    -2.26 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           23 |     1764 | 2024-04-11 | Sashi             | L   | 0.798      | -            | -                | -                | -         |    -9.18 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           22 |     1808 | 2024-04-10 | AMKAL             | W   | 0.791      | 0.384        | 0.143 (0.043)    | 0.711 (0.216)    | -         |    18.75 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           21 |     1937 | 2024-04-06 | Sampi             | L   | 0.765      | -            | -                | -                | -         |   -11.50 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           20 |     2028 | 2024-04-03 | Permitta          | W   | 0.746      | 0.384        | -                | 0.972 (0.279)    | -         |    11.31 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           19 |     2088 | 2024-04-01 | BLEED             | W   | 0.732      | 0.384        | 0.349 (0.098)    | 1.000 (0.281)    | -         |    20.98 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           18 |     2526 | 2024-03-09 | ECF               | L   | 0.579      | -            | -                | -                | -         |   -13.11 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           17 |     2536 | 2024-03-09 | Sampi             | L   | 0.578      | -            | -                | -                | -         |    -9.97 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           16 |     2606 | 2024-03-06 | INGLORIOUS        | L   | 0.560      | -            | -                | -                | -         |   -16.24 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           15 |     2612 | 2024-03-06 | Permitta          | L   | 0.558      | -            | -                | -                | -         |    -9.91 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           14 |     2723 | 2024-03-02 | Sampi             | W   | 0.531      | -            | -                | -                | -         |     7.15 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           13 |     3036 | 2024-02-16 | SAW               | L   | 0.433      | -            | -                | -                | -         |    -1.83 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           12 |     3070 | 2024-02-15 | BetBoom           | L   | 0.425      | -            | -                | -                | -         |    -0.34 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           11 |     3097 | 2024-02-14 | Natus Vincere     | L   | 0.420      | -            | -                | -                | -         |    -0.10 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           10 |     3109 | 2024-02-14 | AMKAL             | W   | 0.418      | -            | -                | -                | 1 (0.418) |    10.23 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            9 |     3568 | 2024-01-20 | KOI               | W   | 0.253      | -            | -                | -                | -         |     4.46 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            8 |     3628 | 2024-01-19 | ex-sYnck          | W   | 0.246      | -            | -                | -                | -         |     0.56 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            7 |     3676 | 2024-01-18 | Aurora            | W   | 0.240      | 0.143        | 0.513 (0.018)    | -                | -         |     7.32 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            6 |     3688 | 2024-01-18 | Astralis          | L   | 0.239      | -            | -                | -                | -         |    -0.04 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            5 |     4006 | 2024-01-09 | KOI               | W   | 0.182      | -            | -                | -                | -         |     3.21 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4009 | 2024-01-09 | fnatic            | W   | 0.181      | -            | -                | -                | -         |     5.16 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            3 |     4015 | 2024-01-09 | Sashi             | W   | 0.181      | -            | -                | -                | -         |     4.23 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            2 |     4030 | 2024-01-09 | Johnny Speeds     | W   | 0.180      | -            | -                | -                | -         |     4.03 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            1 |     4040 | 2024-01-09 | Underrated        | W   | 0.180      | -            | -                | -                | -         |     0.25 | bajmi, Demho, ex1st, fr3nd, TOAO   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,469.89)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-06 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-05-02 |      0.940 | $500.00        | $469.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
