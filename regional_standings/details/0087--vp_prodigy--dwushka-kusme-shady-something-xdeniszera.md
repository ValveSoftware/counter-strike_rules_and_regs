### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: dwushka, KusMe, shady, Something, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  894.4<br />
<br />
Final Rank Value (894.4) = Starting Rank Value (862.2) + Head To Head Adjustments (32.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.220[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.2
- 400 + ( ( 0.232 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 862.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       81 | 2024-06-09 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |   -23.02 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           30 |      134 | 2024-06-08 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |   -15.72 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           29 |      232 | 2024-06-06 | Space           | L   | 1.000      | -            | -                | -                | -         |   -15.94 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           28 |      356 | 2024-06-04 | SINNERS         | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.844 (0.367)    | 0 (0.000) |    19.54 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           27 |      404 | 2024-06-02 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -13.77 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           26 |      423 | 2024-06-01 | 3DMAX           | W   | 1.000      | 0.435        | 0.122 (0.053)    | 0.821 (0.357)    | 0 (0.000) |    25.75 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           25 |      436 | 2024-06-01 | 777             | W   | 1.000      | 0.143        | 0.024 (0.003)    | -                | 0 (0.000) |     9.18 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           24 |      451 | 2024-05-31 | LEON            | L   | 1.000      | -            | -                | -                | -         |   -28.07 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           23 |      469 | 2024-05-31 | Alliance        | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.513 (0.223)    | 0 (0.000) |    14.23 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           22 |      478 | 2024-05-30 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -13.26 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           21 |      526 | 2024-05-28 | CYBERSHOKE      | W   | 1.000      | 0.371        | 0.041 (0.015)    | 0.194 (0.072)    | 0 (0.000) |     9.64 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           20 |      556 | 2024-05-27 | Permitta        | W   | 1.000      | 0.435        | 0.022 (0.009)    | 0.972 (0.422)    | 0 (0.000) |    15.59 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           19 |      607 | 2024-05-24 | DMS             | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.524 (0.228)    | 0 (0.000) |    16.95 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           18 |      652 | 2024-05-22 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.583 (0.253)    | 0 (0.000) |    16.49 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           17 |      747 | 2024-05-20 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -9.00 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           16 |      805 | 2024-05-18 | CPH Wolves      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.62 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           15 |      968 | 2024-05-14 | LEON            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.26 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           14 |      999 | 2024-05-13 | WOPA            | W   | 1.000      | -            | -                | -                | -         |     3.67 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           13 |     1166 | 2024-05-05 | Nemiga          | L   | 0.960      | -            | -                | -                | -         |    -3.05 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           12 |     1300 | 2024-04-29 | Nexus           | W   | 0.919      | 0.396        | 0.013 (0.005)    | 0.469 (0.171)    | -         |    14.87 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |     1319 | 2024-04-28 | brazylijski luz | L   | 0.913      | -            | -                | -                | -         |   -13.71 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |     1323 | 2024-04-28 | LEON            | W   | 0.912      | 0.396        | -                | 0.145 (0.052)    | -         |     3.80 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     2215 | 2024-03-23 | FORZE           | L   | 0.672      | -            | -                | -                | -         |    -5.86 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     2232 | 2024-03-22 | M1X KS          | W   | 0.665      | 0.143        | 0.028 (0.003)    | 0.537 (0.051)    | -         |    16.49 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     2278 | 2024-03-20 | TSM             | W   | 0.652      | -            | -                | -                | -         |     7.61 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     2505 | 2024-03-10 | 1WIN            | L   | 0.586      | -            | -                | -                | -         |    -6.53 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     2574 | 2024-03-07 | Permitta        | L   | 0.567      | -            | -                | -                | -         |    -6.28 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     2644 | 2024-03-05 | FORZE YNG       | W   | 0.553      | -            | -                | -                | -         |     1.20 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     4063 | 2023-12-30 | Metizport       | L   | 0.111      | -            | -                | -                | -         |    -1.22 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     4070 | 2023-12-28 | brazylijski luz | W   | 0.098      | -            | -                | -                | -         |     1.25 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     4074 | 2023-12-26 | Alliance        | W   | 0.085      | -            | -                | -                | -         |     1.48 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
