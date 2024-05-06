### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  818.1<br />
<br />
Final Rank Value (818.1) = Starting Rank Value (781.6) + Head To Head Adjustments (36.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.6
- 400 + ( ( 0.200 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 781.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |        5 | 2024-05-06 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -2.97 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           37 |       61 | 2024-05-03 | Soda              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.68 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           36 |       84 | 2024-05-02 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -18.17 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           35 |      155 | 2024-04-29 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -3.60 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           34 |      181 | 2024-04-27 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.90 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           33 |      452 | 2024-04-18 | Secret            | L   | 1.000      | -            | -                | -                | -         |   -24.86 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           32 |      478 | 2024-04-17 | esmagaB           | L   | 1.000      | -            | -                | -                | -         |   -20.86 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |      514 | 2024-04-16 | Passion UA        | W   | 1.000      | 0.384        | 0.111 (0.043)    | 0.644 (0.248)    | 0 (0.000) |    17.60 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           30 |      599 | 2024-04-11 | PARIVISION        | W   | 1.000      | 0.384        | -                | 0.544 (0.209)    | 0 (0.000) |    18.08 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           29 |      926 | 2024-04-02 | Guild Eagles      | W   | 0.971      | 0.384        | 0.035 (0.013)    | 0.648 (0.242)    | 0 (0.000) |    21.17 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |      932 | 2024-04-01 | Guild Eagles      | L   | 0.967      | -            | -                | -                | -         |    -8.99 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     1007 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.934      | -            | -                | -                | -         |    -6.16 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     1011 | 2024-03-27 | FORZE             | W   | 0.933      | 0.143        | 0.205 (0.027)    | 0.682 (0.091)    | 0 (0.000) |    24.62 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     1355 | 2024-03-10 | Young Ninjas      | L   | 0.819      | -            | -                | -                | -         |    -9.02 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     1428 | 2024-03-07 | Sangal            | W   | 0.799      | 0.143        | -                | 0.797 (0.091)    | 0 (0.000) |    12.27 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     1504 | 2024-03-05 | Entropiq          | W   | 0.785      | -            | -                | -                | 0 (0.000) |    10.61 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     1558 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.766      | 0.358        | 0.104 (0.029)    | 0.779 (0.214)    | 0 (0.000) |    15.10 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     1652 | 2024-02-26 | Pigeons           | W   | 0.731      | 0.143        | 0.090 (0.009)    | -                | 0 (0.000) |    12.89 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     1700 | 2024-02-24 | esmagaB           | W   | 0.719      | 0.358        | 0.016 (0.004)    | 0.293 (0.076)    | 0 (0.000) |    10.15 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     1840 | 2024-02-18 | Sangal            | L   | 0.678      | -            | -                | -                | -         |   -11.06 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           18 |     1880 | 2024-02-16 | SINNERS           | L   | 0.667      | -            | -                | -                | -         |    -4.54 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           17 |     1890 | 2024-02-16 | B8                | L   | 0.666      | -            | -                | -                | -         |    -5.41 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           16 |     1892 | 2024-02-16 | SINNERS           | W   | 0.666      | 0.143        | 0.033 (0.003)    | 0.749 (0.071)    | -         |    16.54 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           15 |     2020 | 2024-02-10 | Secret            | L   | 0.625      | -            | -                | -                | -         |   -14.75 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           14 |     2063 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.599      | -            | -                | -                | -         |    -6.17 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           13 |     2082 | 2024-02-04 | Metizport         | W   | 0.587      | 0.358        | 0.183 (0.039)    | 1.000 (0.210)    | -         |    14.50 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     2095 | 2024-02-04 | Zero Tenacity     | W   | 0.585      | 0.143        | 0.093 (0.008)    | 0.936 (0.078)    | -         |    12.98 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     2116 | 2024-02-03 | Nexus             | W   | 0.580      | -            | -                | -                | -         |    12.67 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     2122 | 2024-02-03 | AIRLYA            | L   | 0.579      | -            | -                | -                | -         |   -14.55 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     2124 | 2024-02-03 | Jake Bube         | W   | 0.579      | -            | -                | -                | -         |     1.96 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     2223 | 2024-01-30 | fnatic            | L   | 0.553      | -            | -                | -                | -         |    -1.31 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     2228 | 2024-01-30 | GODSENT           | L   | 0.551      | -            | -                | -                | -         |    -9.16 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     2570 | 2024-01-17 | Sprout            | L   | 0.468      | -            | -                | -                | -         |    -8.72 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     2574 | 2024-01-17 | Ninjas in Pyjamas | W   | 0.468      | 0.143        | 0.045 (0.003)    | -                | -         |     8.06 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     2729 | 2024-01-13 | Gaimin Gladiators | L   | 0.440      | -            | -                | -                | -         |    -0.65 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     2736 | 2024-01-13 | Space             | W   | 0.439      | -            | -                | -                | -         |     6.13 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     2773 | 2024-01-12 | NeedDOCTOR        | W   | 0.434      | -            | -                | -                | -         |     1.44 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     3737 | 2023-11-09 | PGE Turow         | L   | 0.005      | -            | -                | -                | -         |    -0.09 | dennyslaw, Grashog, Patrick, REDSTAR, SHiPZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
