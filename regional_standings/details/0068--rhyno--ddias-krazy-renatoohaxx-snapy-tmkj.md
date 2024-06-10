### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  1004.1<br />
<br />
Final Rank Value (1004.1) = Starting Rank Value (952.7) + Head To Head Adjustments (51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.151[<sup>2</sup>](#table1)
- LAN Wins: 0.270[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.7
- 400 + ( ( 0.277 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 952.7


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
|           25 |        7 | 2024-06-10 | CYBERSHOKE      | W   | 1.000      | 0.500        | 0.041 (0.021)    | 0.194 (0.097)    | 0 (0.000) |     8.11 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           24 |       38 | 2024-06-09 | Rebels          | W   | 1.000      | 0.500        | 0.053 (0.026)    | 0.472 (0.236)    | 0 (0.000) |    20.51 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           23 |      132 | 2024-06-08 | NAVI Junior     | W   | 1.000      | 0.500        | -                | 0.116 (0.058)    | 0 (0.000) |     3.16 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           22 |      224 | 2024-06-06 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |    -8.78 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           21 |      335 | 2024-06-04 | Endpoint        | W   | 1.000      | 0.500        | 0.009 (0.004)    | 0.570 (0.285)    | 0 (0.000) |    13.31 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           20 |      536 | 2024-05-28 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -17.05 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |      559 | 2024-05-27 | Endpoint        | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.570 (0.248)    | 0 (0.000) |    13.74 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |      601 | 2024-05-25 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -10.45 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |      667 | 2024-05-22 | MOUZ NXT        | W   | 1.000      | 0.435        | 0.164 (0.071)    | 1.000 (0.435)    | 0 (0.000) |    19.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |      704 | 2024-05-21 | B8              | L   | 1.000      | -            | -                | -                | -         |    -6.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |      811 | 2024-05-18 | LEON            | W   | 1.000      | 0.143        | -                | 0.145 (0.021)    | 0 (0.000) |     2.89 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |      867 | 2024-05-16 | CPH Wolves      | W   | 1.000      | -            | -                | -                | -         |     3.45 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |      926 | 2024-05-15 | EYEBALLERS      | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.722 (0.103)    | -         |    13.78 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1026 | 2024-05-12 | AL QATRAO       | W   | 1.000      | 0.306        | 0.007 (0.002)    | 0.052 (0.016)    | 1 (1.000) |     7.86 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1064 | 2024-05-11 | ALL-IN          | W   | 0.998      | 0.306        | 0.002 (0.001)    | -                | 1 (0.998) |     2.91 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2684 | 2024-03-03 | esmagaB         | L   | 0.540      | -            | -                | -                | -         |   -13.16 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2711 | 2024-03-02 | AL QATRAO       | W   | 0.533      | 0.314        | 0.007 (0.001)    | -                | 1 (0.533) |     3.98 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     3242 | 2024-02-04 | SAW             | L   | 0.353      | -            | -                | -                | -         |    -1.16 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     3264 | 2024-02-03 | esmagaB         | W   | 0.347      | 0.143        | 0.008 (0.000)    | 0.211 (0.010)    | -         |     2.56 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     3295 | 2024-02-02 | ABT             | W   | 0.340      | -            | -                | -                | -         |     0.76 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     3302 | 2024-02-02 | KOI             | L   | 0.339      | -            | -                | -                | -         |    -4.28 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3304 | 2024-02-02 | OVERFRAG        | W   | 0.339      | -            | -                | -                | -         |     0.94 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     4055 | 2024-01-09 | ECLOT           | L   | 0.179      | -            | -                | -                | -         |    -0.90 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     4069 | 2023-12-28 | Alliance        | L   | 0.098      | -            | -                | -                | -         |    -1.78 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     4073 | 2023-12-27 | brazylijski luz | L   | 0.091      | -            | -                | -                | -         |    -2.04 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,570.34)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $2,693.00      | $2,693.00       |
| 2024-03-03 |      0.540 | $1,625.00      | $877.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
