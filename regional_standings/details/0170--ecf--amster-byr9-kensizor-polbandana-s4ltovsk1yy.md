### Roster Details<br />
Team Name: ECF<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  641.9<br />
<br />
Final Rank Value (641.9) = Starting Rank Value (556.3) + Head To Head Adjustments (85.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 556.3
- 400 + ( ( 0.081 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 556.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      422 | 2024-04-09 | ex-Preasy      | L   | 1.000      | -            | -                | -                | -         |    -6.99 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |      916 | 2024-03-15 | Metizport      | W   | 0.946      | 0.143        | 0.136 (0.018)    | 1.000 (0.135)    | 0 (0.000) |    27.02 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     1019 | 2024-03-12 | JANO           | W   | 0.926      | 0.143        | 0.001 (0.000)    | 0.220 (0.029)    | 0 (0.000) |    15.74 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           17 |     1031 | 2024-03-11 | CYBERSHOKE     | L   | 0.920      | -            | -                | -                | -         |   -12.00 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz       |
|           16 |     1079 | 2024-03-09 | Enterprise     | W   | 0.906      | 0.372        | 0.026 (0.009)    | 0.452 (0.152)    | 0 (0.000) |    24.28 | bajmi, Demho, ex1st, fr3nd, TOAO                |
|           15 |     1123 | 2024-03-07 | Endpoint       | L   | 0.894      | -            | -                | -                | -         |    -6.36 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher       |
|           14 |     1136 | 2024-03-07 | Permitta       | L   | 0.891      | -            | -                | -                | -         |    -4.06 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           13 |     1246 | 2024-03-03 | Preasy         | L   | 0.866      | -            | -                | -                | -         |    -2.33 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     1268 | 2024-03-02 | MOUZ NXT       | L   | 0.859      | -            | -                | -                | -         |    -3.82 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     1306 | 2024-02-28 | Aurora         | L   | 0.840      | -            | -                | -                | -         |    -0.64 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     1311 | 2024-02-28 | KOI            | L   | 0.839      | -            | -                | -                | -         |    -1.75 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     1326 | 2024-02-27 | DMS            | W   | 0.834      | 0.143        | 0.000 (0.000)    | 0.085 (0.010)    | 0 (0.000) |    10.76 | AW, h1te, kAlash, sFade8, sm3t                  |
|            8 |     1336 | 2024-02-27 | INGLORIOUS     | W   | 0.833      | 0.143        | 0.000 (0.000)    | 0.089 (0.011)    | 0 (0.000) |    11.67 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1           |
|            7 |     1337 | 2024-02-27 | AURA           | W   | 0.832      | 0.143        | 0.000 (0.000)    | 0.075 (0.009)    | 0 (0.000) |    10.96 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            6 |     1560 | 2024-02-17 | Aurora         | L   | 0.766      | -            | -                | -                | -         |    -0.41 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     1562 | 2024-02-17 | The Chosen Few | W   | 0.766      | 0.143        | 0.004 (0.000)    | 0.340 (0.037)    | 0 (0.000) |    16.94 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     1567 | 2024-02-17 | Aurora         | L   | 0.765      | -            | -                | -                | -         |    -0.34 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     2585 | 2024-01-09 | Entropiq       | L   | 0.506      | -            | -                | -                | -         |    -4.32 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     2597 | 2024-01-09 | ex-Anonymo     | W   | 0.506      | 0.143        | 0.027 (0.002)    | 0.276 (0.020)    | 0 (0.000) |    12.28 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     3305 | 2023-11-15 | FORZE          | L   | 0.140      | -            | -                | -                | -         |    -1.04 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
