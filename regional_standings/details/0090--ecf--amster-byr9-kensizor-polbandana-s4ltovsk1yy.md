### Roster Details<br />
Team Name: ECF<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [90](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  839.4<br />
<br />
Final Rank Value (839.4) = Starting Rank Value (778.3) + Head To Head Adjustments (61.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.3
- 400 + ( ( 0.195 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 778.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      102 | 2024-05-25 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -7.60 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |      212 | 2024-05-21 | iNation           | L   | 1.000      | -            | -                | -                | -         |   -26.84 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |      371 | 2024-05-16 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -3.73 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |      382 | 2024-05-16 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -9.66 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |      432 | 2024-05-15 | Preasy            | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.122 (0.041)    | 0 (0.000) |    10.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |      479 | 2024-05-14 | Alliance          | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.617 (0.237)    | 0 (0.000) |    15.08 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |      486 | 2024-05-14 | Johnny Speeds     | W   | 1.000      | 0.333        | 0.057 (0.019)    | 0.492 (0.164)    | 0 (0.000) |    20.80 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |      506 | 2024-05-13 | Verdant           | W   | 1.000      | 0.333        | 0.013 (0.004)    | 0.162 (0.054)    | 0 (0.000) |    12.91 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |      802 | 2024-04-29 | Gaimin Gladiators | W   | 0.998      | 0.384        | 0.090 (0.035)    | 0.809 (0.310)    | 0 (0.000) |    27.59 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |      906 | 2024-04-25 | HAVU              | W   | 0.970      | 0.384        | 0.004 (0.001)    | 0.166 (0.062)    | 0 (0.000) |    11.21 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     1369 | 2024-04-09 | ex-Preasy         | L   | 0.863      | -            | -                | -                | -         |    -6.19 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     1863 | 2024-03-15 | Metizport         | W   | 0.699      | 0.143        | 0.088 (0.009)    | 0.860 (0.086)    | 0 (0.000) |    17.59 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     1966 | 2024-03-12 | JANO              | W   | 0.678      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     8.12 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           16 |     1978 | 2024-03-11 | CYBERSHOKE        | L   | 0.673      | -            | -                | -                | -         |   -12.90 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz       |
|           15 |     2026 | 2024-03-09 | Enterprise        | W   | 0.658      | 0.372        | 0.002 (0.001)    | 0.524 (0.128)    | 0 (0.000) |    13.62 | bajmi, Demho, ex1st, fr3nd, TOAO                |
|           14 |     2070 | 2024-03-07 | Endpoint          | L   | 0.646      | -            | -                | -                | -         |    -7.50 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher       |
|           13 |     2083 | 2024-03-07 | Permitta          | L   | 0.644      | -            | -                | -                | -         |    -6.07 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     2193 | 2024-03-03 | ex-Preasy         | L   | 0.619      | -            | -                | -                | -         |    -5.79 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     2215 | 2024-03-02 | MOUZ NXT          | L   | 0.611      | -            | -                | -                | -         |    -3.68 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     2253 | 2024-02-28 | Aurora            | L   | 0.593      | -            | -                | -                | -         |    -0.55 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     2258 | 2024-02-28 | KOI               | L   | 0.592      | -            | -                | -                | -         |    -4.57 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            8 |     2273 | 2024-02-27 | DMS               | W   | 0.586      | 0.143        | -                | 0.397 (0.033)    | 0 (0.000) |     6.33 | AW, h1te, kAlash, sFade8, sm3t                  |
|            7 |     2283 | 2024-02-27 | INGLORIOUS        | W   | 0.585      | -            | -                | -                | -         |     3.99 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1           |
|            6 |     2284 | 2024-02-27 | GODSENT           | W   | 0.585      | -            | -                | -                | -         |     6.46 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     2507 | 2024-02-17 | Aurora            | L   | 0.519      | -            | -                | -                | -         |    -0.39 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     2509 | 2024-02-17 | The Chosen Few    | W   | 0.518      | 0.143        | 0.002 (0.000)    | 0.207 (0.015)    | -         |     6.33 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     2514 | 2024-02-17 | Aurora            | L   | 0.518      | -            | -                | -                | -         |    -0.36 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     3532 | 2024-01-09 | Entropiq          | L   | 0.259      | -            | -                | -                | -         |    -5.93 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     3544 | 2024-01-09 | ex-Anonymo        | W   | 0.259      | -            | -                | -                | -         |     2.76 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-16 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
