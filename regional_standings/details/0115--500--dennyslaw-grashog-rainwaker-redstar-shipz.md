### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  767.2<br />
<br />
Final Rank Value (767.2) = Starting Rank Value (639.7) + Head To Head Adjustments (127.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.7
- 400 + ( ( 0.124 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 639.7


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
|           39 |      156 | 2024-04-18 | Secret            | L   | 1.000      | -            | -                | -                | -         |   -22.26 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           38 |      182 | 2024-04-17 | esmagaB           | L   | 1.000      | -            | -                | -                | -         |   -17.15 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           37 |      218 | 2024-04-16 | Passion UA        | W   | 1.000      | 0.384        | 0.031 (0.012)    | 0.625 (0.240)    | 0 (0.000) |    18.08 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           36 |      303 | 2024-04-11 | PARIVISION        | W   | 1.000      | 0.384        | -                | 0.358 (0.138)    | 0 (0.000) |    14.55 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           35 |      630 | 2024-04-02 | Guild Eagles      | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.727 (0.280)    | 0 (0.000) |    23.88 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           34 |      636 | 2024-04-01 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |    -7.11 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           33 |      711 | 2024-03-27 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -8.79 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           32 |      715 | 2024-03-27 | FORZE             | W   | 1.000      | 0.143        | 0.140 (0.020)    | 0.784 (0.112)    | 0 (0.000) |    26.03 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |     1059 | 2024-03-10 | Young Ninjas      | L   | 0.913      | -            | -                | -                | -         |    -7.20 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           30 |     1132 | 2024-03-07 | Sangal            | W   | 0.893      | 0.143        | -                | 0.685 (0.087)    | 0 (0.000) |    14.68 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           29 |     1208 | 2024-03-05 | Entropiq          | W   | 0.878      | -            | -                | -                | 0 (0.000) |    15.08 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     1262 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.860      | 0.358        | 0.019 (0.006)    | 0.639 (0.197)    | 0 (0.000) |    17.52 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     1356 | 2024-02-26 | Pigeons           | W   | 0.825      | 0.143        | 0.095 (0.011)    | -                | 0 (0.000) |    18.83 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     1404 | 2024-02-24 | esmagaB           | W   | 0.813      | 0.358        | 0.015 (0.004)    | 0.342 (0.100)    | 0 (0.000) |    15.40 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     1544 | 2024-02-18 | Sangal            | L   | 0.771      | -            | -                | -                | -         |   -11.27 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           24 |     1584 | 2024-02-16 | SINNERS           | L   | 0.760      | -            | -                | -                | -         |    -3.18 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           23 |     1594 | 2024-02-16 | B8                | L   | 0.759      | -            | -                | -                | -         |    -7.40 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           22 |     1596 | 2024-02-16 | SINNERS           | W   | 0.759      | 0.143        | 0.043 (0.005)    | 0.779 (0.084)    | 0 (0.000) |    20.86 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           21 |     1724 | 2024-02-10 | Secret            | L   | 0.718      | -            | -                | -                | -         |   -13.41 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           20 |     1767 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.692      | -            | -                | -                | -         |    -8.06 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           19 |     1786 | 2024-02-04 | Metizport         | W   | 0.681      | 0.358        | 0.136 (0.033)    | 1.000 (0.244)    | -         |    18.25 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           18 |     1799 | 2024-02-04 | Zero Tenacity     | W   | 0.679      | 0.143        | -                | 0.805 (0.078)    | -         |    14.78 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           17 |     1820 | 2024-02-03 | Nexus             | W   | 0.673      | 0.143        | 0.023 (0.002)    | -                | -         |    16.30 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           16 |     1826 | 2024-02-03 | AIRLYA            | L   | 0.672      | -            | -                | -                | -         |   -13.91 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           15 |     1828 | 2024-02-03 | Jake Bube         | W   | 0.672      | -            | -                | -                | -         |     4.16 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           14 |     1927 | 2024-01-30 | fnatic            | L   | 0.646      | -            | -                | -                | -         |    -1.48 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           13 |     1932 | 2024-01-30 | GODSENT           | L   | 0.645      | -            | -                | -                | -         |    -6.26 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     2274 | 2024-01-17 | Sprout            | L   | 0.561      | -            | -                | -                | -         |    -6.63 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     2278 | 2024-01-17 | Ninjas in Pyjamas | W   | 0.561      | 0.143        | 0.058 (0.005)    | -                | -         |    13.47 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     2433 | 2024-01-13 | Gaimin Gladiators | L   | 0.534      | -            | -                | -                | -         |    -0.43 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     2440 | 2024-01-13 | Space             | W   | 0.532      | -            | -                | -                | -         |    10.23 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     2477 | 2024-01-12 | NeedDOCTOR        | W   | 0.527      | -            | -                | -                | -         |     3.47 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     3441 | 2023-11-09 | PGE Turow         | L   | 0.098      | -            | -                | -                | -         |    -1.21 | dennyslaw, Grashog, Patrick, REDSTAR, SHiPZ   |
|            6 |     3486 | 2023-11-07 | The Witchers      | L   | 0.086      | -            | -                | -                | -         |    -0.90 | dennyslaw, Grashog, Patrick, REDSTAR, SHiPZ   |
|            5 |     3490 | 2023-11-07 | Sampi             | L   | 0.085      | -            | -                | -                | -         |    -0.33 | dennyslaw, Grashog, Patrick, REDSTAR, SHiPZ   |
|            4 |     3526 | 2023-11-05 | 9 Pandas          | L   | 0.071      | -            | -                | -                | -         |    -0.17 | dennyslaw, Grashog, Patrick, REDSTAR, SHiPZ   |
|            3 |     3541 | 2023-11-04 | B8                | L   | 0.066      | -            | -                | -                | -         |    -1.01 | dennyslaw, Grashog, Patrick, REDSTAR, SHiPZ   |
|            2 |     3610 | 2023-11-01 | Alliance          | L   | 0.046      | -            | -                | -                | -         |    -0.26 | dennyslaw, Grashog, KalubeR, REDSTAR, SHiPZ   |
|            1 |     3720 | 2023-10-29 | IKLA              | W   | 0.025      | -            | -                | -                | -         |     0.33 | dennyslaw, Grashog, KalubeR, REDSTAR, SHiPZ   |

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
