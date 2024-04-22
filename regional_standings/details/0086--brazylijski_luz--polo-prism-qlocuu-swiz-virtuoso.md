### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  839.4<br />
<br />
Final Rank Value (839.4) = Starting Rank Value (796.2) + Head To Head Adjustments (43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.115[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.2
- 400 + ( ( 0.205 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 796.2


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
|           34 |       45 | 2024-04-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -16.13 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           33 |       87 | 2024-04-19 | Rebels            | W   | 1.000      | 0.500        | 0.050 (0.025)    | 0.360 (0.180)    | 0 (0.000) |    18.09 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           32 |      133 | 2024-04-18 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -3.96 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           31 |      139 | 2024-04-18 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | 0.196 (0.028)    | 0.318 (0.045)    | 0 (0.000) |    20.95 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           30 |      344 | 2024-04-10 | Betera            | W   | 1.000      | 0.500        | 0.004 (0.002)    | 0.240 (0.120)    | 0 (0.000) |    13.30 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           29 |      397 | 2024-04-09 | FORZE             | L   | 1.000      | -            | -                | -                | -         |    -6.92 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           28 |      676 | 2024-03-28 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -1.99 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           27 |      943 | 2024-03-14 | Rebels            | W   | 0.941      | 0.500        | 0.050 (0.024)    | 0.360 (0.169)    | 0 (0.000) |    18.90 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           26 |     1034 | 2024-03-11 | SINNERS           | W   | 0.920      | 0.500        | 0.043 (0.020)    | 0.779 (0.358)    | 0 (0.000) |    22.15 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           25 |     1150 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.887      | -            | -                | -                | -         |   -12.58 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           24 |     1269 | 2024-03-02 | Sashi             | L   | 0.859      | -            | -                | -                | -         |    -9.64 | Furlan, phr, POLO, Prism, Qlocuu          |
|           23 |     1335 | 2024-02-27 | Spirit Academy    | L   | 0.833      | -            | -                | -                | -         |   -15.48 | POLO, Prism, Qlocuu, swiz, virtuoso       |
|           22 |     1410 | 2024-02-24 | The Chosen Few    | W   | 0.812      | 0.358        | -                | 0.340 (0.099)    | 0 (0.000) |     8.95 | Furlan, phr, POLO, Prism, Qlocuu          |
|           21 |     1540 | 2024-02-18 | ARCRED            | W   | 0.773      | 0.358        | 0.008 (0.002)    | 0.164 (0.045)    | 0 (0.000) |     8.26 | Furlan, phr, POLO, Prism, Qlocuu          |
|           20 |     1793 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.680      | -            | -                | -                | -         |   -11.70 | Furlan, phr, POLO, Prism, Qlocuu          |
|           19 |     2582 | 2024-01-09 | Gaimin Gladiators | L   | 0.506      | -            | -                | -                | -         |    -0.92 | Furlan, phr, POLO, Prism, Qlocuu          |
|           18 |     2595 | 2024-01-09 | Nemiga            | W   | 0.506      | 0.143        | 0.044 (0.003)    | 0.607 (0.044)    | 0 (0.000) |    11.02 | Furlan, phr, POLO, Prism, Qlocuu          |
|           17 |     2620 | 2023-12-29 | Alliance          | L   | 0.431      | -            | -                | -                | -         |    -4.92 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     2623 | 2023-12-28 | VP.Prodigy        | L   | 0.425      | -            | -                | -                | -         |    -8.97 | Furlan, phr, POLO, Qlocuu, swiz           |
|           15 |     2626 | 2023-12-27 | Rhyno             | W   | 0.418      | 0.371        | 0.019 (0.003)    | 0.171 (0.026)    | 0 (0.000) |     6.24 | Furlan, phr, POLO, Qlocuu, swiz           |
|           14 |     2651 | 2023-12-19 | Astralis Talent   | W   | 0.365      | 0.303        | 0.028 (0.003)    | -                | 0 (0.000) |     6.55 | ANSG1, JBOEN, kiR, kroK, tOPZ             |
|           13 |     2685 | 2023-12-17 | Nexus             | W   | 0.352      | 0.303        | 0.023 (0.002)    | 0.544 (0.058)    | -         |     6.29 | Furlan, phr, POLO, Prism, Qlocuu          |
|           12 |     3036 | 2023-11-28 | Sashi             | L   | 0.225      | -            | -                | -                | -         |    -4.35 | Furlan, phr, POLO, Prism, Qlocuu          |
|           11 |     3042 | 2023-11-27 | The Prodigies SE  | W   | 0.218      | -            | -                | -                | -         |     1.27 | jayzaR, jocab, pupcake, TIMhehe, upE      |
|           10 |     3168 | 2023-11-19 | Enterprise        | L   | 0.166      | -            | -                | -                | -         |    -1.83 | bajmi, Demho, ex1st, fr3nd, Klameczka     |
|            9 |     3200 | 2023-11-18 | PGE Turow         | L   | 0.159      | -            | -                | -                | -         |    -3.06 | Furlan, phr, POLO, Prism, Qlocuu          |
|            8 |     3297 | 2023-11-15 | Enterprise        | W   | 0.140      | -            | -                | -                | -         |     2.88 | bajmi, Demho, ex1st, fr3nd, Klameczka     |
|            7 |     3513 | 2023-11-05 | ex-Anonymo        | L   | 0.073      | -            | -                | -                | -         |    -1.26 | lunAtic, reiko, SaMey, Sobol, virtuoso    |
|            6 |     3543 | 2023-11-04 | PGE Turow         | W   | 0.066      | -            | -                | -                | -         |     0.81 | Furlan, phr, POLO, Prism, Qlocuu          |
|            5 |     3557 | 2023-11-03 | Enterprise        | W   | 0.060      | -            | -                | -                | -         |     1.23 | Furlan, phr, POLO, Prism, Qlocuu          |
|            4 |     3582 | 2023-11-02 | PGE Turow         | L   | 0.052      | -            | -                | -                | -         |    -1.00 | Furlan, phr, POLO, Prism, Qlocuu          |
|            3 |     3599 | 2023-11-01 | ALTERNATE aTTaX   | W   | 0.047      | -            | -                | -                | -         |     0.83 | ArroW, hyped, MRC9, pr1metapz, skyye      |
|            2 |     3633 | 2023-10-31 | Enterprise        | L   | 0.040      | -            | -                | -                | -         |    -0.44 | bajmi, Demho, ex1st, fr3nd, Klameczka     |
|            1 |     3648 | 2023-10-31 | HAVU              | W   | 0.038      | -            | -                | -                | -         |     0.64 | Airax, Banjo, ottoNd, sLowi, uli          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,577.04)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $1,500.00      | $1,500.00       |
| 2023-12-19 |      0.365 | $3,500.00      | $1,276.52       |
| 2023-11-19 |      0.166 | $3,616.00      | $601.74         |
| 2023-11-05 |      0.073 | $2,716.00      | $198.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
