### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  749.2<br />
<br />
Final Rank Value (749.2) = Starting Rank Value (743.2) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.143[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.2
- 400 + ( ( 0.180 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 743.2


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
|           17 |     1533 | 2024-03-03 | esmagaB         | L   | 0.773      | -            | -                | -                | -         |   -12.43 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1560 | 2024-03-02 | AL QATRAO       | W   | 0.766      | 0.314        | 0.004 (0.001)    | 0.025 (0.006)    | 1 (0.766) |     9.47 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     2091 | 2024-02-04 | SAW             | L   | 0.586      | -            | -                | -                | -         |    -0.45 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     2113 | 2024-02-03 | esmagaB         | W   | 0.580      | 0.143        | 0.016 (0.001)    | 0.293 (0.024)    | 0 (0.000) |     9.55 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     2144 | 2024-02-02 | ABT             | W   | 0.573      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     3.64 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     2151 | 2024-02-02 | KOI             | L   | 0.573      | -            | -                | -                | -         |    -2.72 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     2153 | 2024-02-02 | OVERFRAG        | W   | 0.572      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.42 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2904 | 2024-01-09 | ECLOT           | L   | 0.413      | -            | -                | -                | -         |    -1.35 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2918 | 2023-12-28 | Alliance        | L   | 0.332      | -            | -                | -                | -         |    -3.20 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     2922 | 2023-12-27 | brazylijski luz | L   | 0.325      | -            | -                | -                | -         |    -4.08 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     3134 | 2023-12-08 | FALKE           | W   | 0.198      | 0.287        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.198) |     1.40 | DDias, Icarus, krazy, snapy, TMKj      |
|            6 |     3369 | 2023-11-25 | SAW             | L   | 0.113      | -            | -                | -                | -         |    -0.07 | DDias, Icarus, krazy, snapy, TMKj      |
|            5 |     3394 | 2023-11-24 | FTW             | W   | 0.105      | 0.344        | 0.002 (0.000)    | 0.012 (0.000)    | 1 (0.105) |     1.19 | DDias, Icarus, krazy, snapy, TMKj      |
|            4 |     3465 | 2023-11-19 | FTW             | W   | 0.073      | 0.337        | 0.002 (0.000)    | 0.012 (0.000)    | 1 (0.073) |     0.83 | DDias, Icarus, krazy, snapy, TMKj      |
|            3 |     3476 | 2023-11-19 | Los Alpacas     | W   | 0.071      | 0.337        | 0.002 (0.000)    | 0.003 (0.000)    | 1 (0.071) |     0.69 | DDias, Icarus, krazy, snapy, TMKj      |
|            2 |     3486 | 2023-11-18 | FTW             | L   | 0.067      | -            | -                | -                | -         |    -1.35 | DDias, Icarus, krazy, snapy, TMKj      |
|            1 |     3505 | 2023-11-18 | Agency          | W   | 0.064      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.064) |     0.43 | DDias, Icarus, krazy, snapy, TMKj      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,466.34)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-03 |      0.773 | $1,625.00      | $1,256.39       |
| 2023-12-08 |      0.198 | $2,187.00      | $433.58         |
| 2023-11-25 |      0.113 | $3,259.00      | $366.79         |
| 2023-11-19 |      0.073 | $5,621.00      | $409.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
