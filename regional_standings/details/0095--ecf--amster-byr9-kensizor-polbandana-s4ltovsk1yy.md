### Roster Details<br />
Team Name: ECF<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  867.2<br />
<br />
Final Rank Value (867.2) = Starting Rank Value (788.7) + Head To Head Adjustments (78.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.7
- 400 + ( ( 0.195 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 788.7


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
|           29 |      602 | 2024-05-25 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -7.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |      712 | 2024-05-21 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -20.32 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |      871 | 2024-05-16 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -3.43 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |      882 | 2024-05-16 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -8.44 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |      932 | 2024-05-15 | Preasy            | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.111 (0.037)    | 0 (0.000) |    10.49 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |      979 | 2024-05-14 | Alliance          | W   | 1.000      | 0.384        | 0.012 (0.004)    | 0.513 (0.197)    | 0 (0.000) |    16.97 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |      986 | 2024-05-14 | Johnny Speeds     | W   | 1.000      | 0.333        | 0.081 (0.027)    | 0.531 (0.177)    | 0 (0.000) |    25.06 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     1006 | 2024-05-13 | Verdant           | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.261 (0.087)    | 0 (0.000) |    14.50 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     1302 | 2024-04-29 | Gaimin Gladiators | W   | 0.919      | 0.384        | 0.081 (0.029)    | 0.749 (0.265)    | 0 (0.000) |    25.94 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     1406 | 2024-04-25 | HAVU              | W   | 0.891      | 0.384        | 0.003 (0.001)    | 0.254 (0.087)    | 0 (0.000) |    10.79 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     1869 | 2024-04-09 | ex-Preasy         | L   | 0.784      | -            | -                | -                | -         |    -5.96 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     2363 | 2024-03-15 | Metizport         | W   | 0.620      | 0.143        | 0.078 (0.007)    | 0.706 (0.062)    | 0 (0.000) |    15.62 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     2466 | 2024-03-12 | JANO              | W   | 0.599      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     6.95 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           16 |     2478 | 2024-03-11 | CYBERSHOKE        | L   | 0.594      | -            | -                | -                | -         |   -11.72 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz       |
|           15 |     2526 | 2024-03-09 | Enterprise        | W   | 0.579      | 0.372        | 0.011 (0.002)    | 0.647 (0.140)    | 0 (0.000) |    13.11 | bajmi, Demho, ex1st, fr3nd, TOAO                |
|           14 |     2570 | 2024-03-07 | Endpoint          | L   | 0.567      | -            | -                | -                | -         |    -6.26 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher       |
|           13 |     2583 | 2024-03-07 | Permitta          | L   | 0.565      | -            | -                | -                | -         |    -4.91 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     2693 | 2024-03-03 | ex-Preasy         | L   | 0.540      | -            | -                | -                | -         |    -5.31 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     2715 | 2024-03-02 | MOUZ NXT          | L   | 0.532      | -            | -                | -                | -         |    -2.67 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     2753 | 2024-02-28 | Aurora            | L   | 0.514      | -            | -                | -                | -         |    -0.27 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     2758 | 2024-02-28 | KOI               | L   | 0.513      | -            | -                | -                | -         |    -3.25 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            8 |     2773 | 2024-02-27 | DMS               | W   | 0.507      | 0.143        | 0.004 (0.000)    | 0.524 (0.038)    | 0 (0.000) |     9.67 | AW, h1te, kAlash, sFade8, sm3t                  |
|            7 |     2783 | 2024-02-27 | INGLORIOUS        | W   | 0.506      | -            | -                | -                | -         |     3.39 | Drobnyy, Esphirion, Jad0R1x, LAYM, V1           |
|            6 |     2784 | 2024-02-27 | GODSENT           | W   | 0.506      | -            | -                | -                | -         |     3.35 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     3007 | 2024-02-17 | Aurora            | L   | 0.440      | -            | -                | -                | -         |    -0.19 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     3009 | 2024-02-17 | The Chosen Few    | W   | 0.439      | 0.143        | -                | 0.167 (0.010)    | -         |     5.29 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     3014 | 2024-02-17 | Aurora            | L   | 0.439      | -            | -                | -                | -         |    -0.17 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     4032 | 2024-01-09 | Entropiq          | L   | 0.180      | -            | -                | -                | -         |    -4.20 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     4044 | 2024-01-09 | ex-Anonymo        | W   | 0.180      | -            | -                | -                | -         |     1.65 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-16 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
