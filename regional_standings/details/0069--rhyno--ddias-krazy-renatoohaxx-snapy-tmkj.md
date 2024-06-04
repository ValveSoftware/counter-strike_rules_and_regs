### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  919.6<br />
<br />
Final Rank Value (919.6) = Starting Rank Value (906.1) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.289[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.1
- 400 + ( ( 0.261 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 906.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       36 | 2024-05-28 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -17.62 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           20 |       59 | 2024-05-27 | Endpoint        | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.627 (0.272)    | 0 (0.000) |    14.11 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |      101 | 2024-05-25 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -10.96 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |      167 | 2024-05-22 | MOUZ NXT        | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | 0 (0.000) |    18.83 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |      204 | 2024-05-21 | B8              | L   | 1.000      | -            | -                | -                | -         |    -6.82 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |      311 | 2024-05-18 | LEON            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.116 (0.017)    | 0 (0.000) |     2.93 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |      367 | 2024-05-16 | CPH Wolves      | W   | 1.000      | 0.143        | -                | 0.080 (0.011)    | 0 (0.000) |     4.38 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |      426 | 2024-05-15 | EYEBALLERS      | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.611 (0.087)    | 0 (0.000) |    13.44 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |      526 | 2024-05-12 | AL QATRAO       | W   | 1.000      | 0.306        | 0.007 (0.002)    | 0.058 (0.018)    | 1 (1.000) |     9.35 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |      564 | 2024-05-11 | ALL-IN          | W   | 1.000      | 0.306        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     3.66 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     2184 | 2024-03-03 | esmagaB         | L   | 0.619      | -            | -                | -                | -         |   -14.10 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2211 | 2024-03-02 | AL QATRAO       | W   | 0.612      | 0.314        | 0.007 (0.001)    | 0.058 (0.011)    | 1 (0.612) |     5.53 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2742 | 2024-02-04 | SAW             | L   | 0.432      | -            | -                | -                | -         |    -1.02 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     2764 | 2024-02-03 | esmagaB         | W   | 0.426      | 0.143        | 0.008 (0.001)    | 0.258 (0.016)    | 0 (0.000) |     3.90 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     2795 | 2024-02-02 | ABT             | W   | 0.419      | 0.143        | -                | 0.017 (0.001)    | -         |     1.23 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     2802 | 2024-02-02 | KOI             | L   | 0.418      | -            | -                | -                | -         |    -5.46 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     2804 | 2024-02-02 | OVERFRAG        | W   | 0.418      | 0.143        | 0.002 (0.000)    | -                | -         |     1.48 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3555 | 2024-01-09 | ECLOT           | L   | 0.258      | -            | -                | -                | -         |    -2.49 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     3569 | 2023-12-28 | Alliance        | L   | 0.178      | -            | -                | -                | -         |    -3.34 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     3573 | 2023-12-27 | brazylijski luz | L   | 0.171      | -            | -                | -                | -         |    -3.63 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     3785 | 2023-12-08 | FALKE           | W   | 0.044      | 0.287        | 0.000 (0.000)    | -                | 1 (0.044) |     0.13 | DDias, Icarus, krazy, snapy, TMKj      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,795.57)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $2,693.00      | $2,693.00       |
| 2024-03-03 |      0.619 | $1,625.00      | $1,005.99       |
| 2023-12-08 |      0.044 | $2,187.00      | $96.58          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
