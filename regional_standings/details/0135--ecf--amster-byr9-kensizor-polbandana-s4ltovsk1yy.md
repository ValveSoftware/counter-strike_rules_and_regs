### Roster Details<br />
Team Name: ECF<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  726.1<br />
<br />
Final Rank Value (726.1) = Starting Rank Value (599.8) + Head To Head Adjustments (126.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.8
- 400 + ( ( 0.105 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 599.8


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
|           22 |      151 | 2024-04-29 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.189 (0.073)    | 0.990 (0.381)    | 0 (0.000) |    29.98 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |      255 | 2024-04-25 | HAVU              | W   | 1.000      | 0.384        | 0.023 (0.009)    | 0.214 (0.082)    | 0 (0.000) |    18.31 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |      718 | 2024-04-09 | ex-Preasy         | L   | 1.000      | -            | -                | -                | -         |    -2.69 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     1212 | 2024-03-15 | Metizport         | W   | 0.853      | 0.143        | 0.183 (0.022)    | 1.000 (0.122)    | 0 (0.000) |    24.45 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     1315 | 2024-03-12 | JANO              | W   | 0.832      | 0.143        | 0.005 (0.001)    | 0.189 (0.023)    | 0 (0.000) |    14.93 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           17 |     1327 | 2024-03-11 | CYBERSHOKE        | L   | 0.827      | -            | -                | -                | -         |   -11.00 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz       |
|           16 |     1375 | 2024-03-09 | Enterprise        | W   | 0.813      | 0.372        | 0.022 (0.007)    | 0.459 (0.139)    | 0 (0.000) |    21.93 | bajmi, Demho, ex1st, fr3nd, TOAO                |
|           15 |     1419 | 2024-03-07 | Endpoint          | L   | 0.800      | -            | -                | -                | -         |    -5.03 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher       |
|           14 |     1432 | 2024-03-07 | Permitta          | L   | 0.798      | -            | -                | -                | -         |    -3.23 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           13 |     1542 | 2024-03-03 | ex-Preasy         | L   | 0.773      | -            | -                | -                | -         |    -2.31 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     1564 | 2024-03-02 | MOUZ NXT          | L   | 0.765      | -            | -                | -                | -         |    -2.13 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     1602 | 2024-02-28 | Aurora            | L   | 0.747      | -            | -                | -                | -         |    -0.20 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     1607 | 2024-02-28 | KOI               | L   | 0.746      | -            | -                | -                | -         |    -1.79 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     1622 | 2024-02-27 | DMS               | W   | 0.740      | 0.143        | 0.000 (0.000)    | 0.077 (0.008)    | 0 (0.000) |     8.83 | AW, h1te, kAlash, sFade8, sm3t                  |
|            8 |     1632 | 2024-02-27 | INGLORIOUS        | W   | 0.739      | 0.143        | 0.000 (0.000)    | 0.073 (0.008)    | 0 (0.000) |     9.65 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1           |
|            7 |     1633 | 2024-02-27 | AURA              | W   | 0.739      | 0.143        | 0.000 (0.000)    | 0.064 (0.007)    | 0 (0.000) |     8.52 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            6 |     1856 | 2024-02-17 | Aurora            | L   | 0.673      | -            | -                | -                | -         |    -0.13 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     1858 | 2024-02-17 | The Chosen Few    | W   | 0.673      | 0.143        | 0.004 (0.000)    | 0.284 (0.027)    | 0 (0.000) |    13.99 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     1863 | 2024-02-17 | Aurora            | L   | 0.672      | -            | -                | -                | -         |    -0.11 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     2881 | 2024-01-09 | Entropiq          | L   | 0.413      | -            | -                | -                | -         |    -4.20 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     2893 | 2024-01-09 | ex-Anonymo        | W   | 0.413      | 0.143        | 0.016 (0.001)    | 0.175 (0.010)    | 0 (0.000) |     8.97 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     3601 | 2023-11-15 | FORZE             | L   | 0.046      | -            | -                | -                | -         |    -0.43 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
