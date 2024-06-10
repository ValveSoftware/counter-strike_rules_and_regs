### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  812.7<br />
<br />
Final Rank Value (812.7) = Starting Rank Value (752.4) + Head To Head Adjustments (60.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 752.4
- 400 + ( ( 0.177 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 752.4


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
|           37 |     1156 | 2024-05-06 | Gaimin Gladiators | L   | 0.966      | -            | -                | -                | -         |    -3.14 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           36 |     1212 | 2024-05-03 | Soda              | W   | 0.945      | -            | -                | -                | 0 (0.000) |     2.63 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           35 |     1235 | 2024-05-02 | 1WIN              | L   | 0.939      | -            | -                | -                | -         |    -8.13 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           34 |     1306 | 2024-04-29 | Sashi             | L   | 0.918      | -            | -                | -                | -         |    -2.69 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           33 |     1332 | 2024-04-27 | Zero Tenacity     | L   | 0.907      | -            | -                | -                | -         |    -6.81 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           32 |     1603 | 2024-04-18 | Secret            | L   | 0.845      | -            | -                | -                | -         |   -21.05 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |     1629 | 2024-04-17 | esmagaB           | L   | 0.839      | -            | -                | -                | -         |   -17.43 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           30 |     1665 | 2024-04-16 | Passion UA        | W   | 0.833      | 0.384        | 0.088 (0.028)    | 0.905 (0.290)    | 0 (0.000) |    17.28 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           29 |     1750 | 2024-04-11 | PARIVISION        | W   | 0.800      | 0.384        | 0.015 (0.005)    | 0.527 (0.162)    | 0 (0.000) |    17.37 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     2077 | 2024-04-02 | M1X KS            | W   | 0.738      | 0.384        | 0.028 (0.008)    | 0.537 (0.152)    | 0 (0.000) |    18.61 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     2083 | 2024-04-01 | M1X KS            | L   | 0.734      | -            | -                | -                | -         |    -4.44 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     2158 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.700      | -            | -                | -                | -         |    -0.23 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     2162 | 2024-03-27 | FORZE             | W   | 0.700      | 0.143        | 0.100 (0.010)    | 0.415 (0.042)    | 0 (0.000) |    17.85 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2506 | 2024-03-10 | Young Ninjas      | L   | 0.586      | -            | -                | -                | -         |    -7.68 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2579 | 2024-03-07 | Sangal            | W   | 0.566      | 0.143        | 0.214 (0.017)    | 0.998 (0.081)    | 0 (0.000) |    15.11 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2655 | 2024-03-05 | Entropiq          | W   | 0.551      | -            | -                | -                | 0 (0.000) |     5.38 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     2709 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.533      | 0.358        | 0.046 (0.009)    | 0.583 (0.111)    | 0 (0.000) |    12.43 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     2803 | 2024-02-26 | Imperial fe       | W   | 0.498      | 0.143        | 0.178 (0.013)    | -                | 0 (0.000) |    13.47 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     2851 | 2024-02-24 | esmagaB           | W   | 0.486      | 0.358        | -                | 0.211 (0.037)    | 0 (0.000) |     6.93 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     2991 | 2024-02-18 | Sangal            | L   | 0.444      | -            | -                | -                | -         |    -1.62 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           17 |     3031 | 2024-02-16 | SINNERS           | L   | 0.433      | -            | -                | -                | -         |    -1.86 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           16 |     3041 | 2024-02-16 | B8                | L   | 0.433      | -            | -                | -                | -         |    -1.64 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3043 | 2024-02-16 | SINNERS           | W   | 0.432      | 0.143        | 0.045 (0.003)    | 0.844 (0.052)    | -         |    11.87 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           14 |     3171 | 2024-02-10 | Secret            | L   | 0.392      | -            | -                | -                | -         |    -9.01 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           13 |     3214 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.366      | -            | -                | -                | -         |    -2.47 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     3233 | 2024-02-04 | Metizport         | W   | 0.354      | 0.358        | 0.078 (0.010)    | 0.706 (0.090)    | -         |     8.90 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     3246 | 2024-02-04 | Zero Tenacity     | W   | 0.352      | 0.143        | 0.154 (0.008)    | 1.000 (0.050)    | -         |     9.71 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     3267 | 2024-02-03 | Nexus             | W   | 0.346      | -            | -                | -                | -         |     7.50 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     3273 | 2024-02-03 | AIRLYA            | L   | 0.346      | -            | -                | -                | -         |    -8.57 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     3275 | 2024-02-03 | Jake Bube         | W   | 0.345      | -            | -                | -                | -         |     1.39 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     3374 | 2024-01-30 | fnatic            | L   | 0.320      | -            | -                | -                | -         |    -0.31 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     3379 | 2024-01-30 | GODSENT           | L   | 0.318      | -            | -                | -                | -         |    -7.64 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     3721 | 2024-01-17 | Sprout            | L   | 0.235      | -            | -                | -                | -         |    -6.09 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     3725 | 2024-01-17 | Ninjas in Pyjamas | W   | 0.234      | -            | -                | -                | -         |     3.54 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     3880 | 2024-01-13 | Gaimin Gladiators | L   | 0.207      | -            | -                | -                | -         |    -0.45 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     3887 | 2024-01-13 | Space             | W   | 0.206      | -            | -                | -                | -         |     0.83 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     3924 | 2024-01-12 | NeedDOCTOR        | W   | 0.201      | -            | -                | -                | -         |     0.77 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($469.89)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
