### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  782.2<br />
<br />
Final Rank Value (782.2) = Starting Rank Value (784.0) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.197[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 784.0
- 400 + ( ( 0.199 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 784.0


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
|           17 |     1237 | 2024-03-03 | esmagaB         | L   | 0.866      | -            | -                | -                | -         |   -15.24 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1264 | 2024-03-02 | AL QATRAO       | W   | 0.859      | 0.314        | 0.004 (0.001)    | 0.031 (0.008)    | 1 (0.859) |     9.37 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1795 | 2024-02-04 | SAW             | L   | 0.679      | -            | -                | -                | -         |    -1.61 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1817 | 2024-02-03 | esmagaB         | W   | 0.673      | 0.143        | 0.015 (0.001)    | 0.342 (0.033)    | 0 (0.000) |    10.09 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1848 | 2024-02-02 | ABT             | W   | 0.666      | 0.143        | 0.000 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     3.64 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1855 | 2024-02-02 | KOI             | L   | 0.666      | -            | -                | -                | -         |    -3.71 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1857 | 2024-02-02 | OVERFRAG        | W   | 0.666      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.38 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2608 | 2024-01-09 | ECLOT           | L   | 0.506      | -            | -                | -                | -         |    -2.38 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2622 | 2023-12-28 | Alliance        | L   | 0.425      | -            | -                | -                | -         |    -4.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     2626 | 2023-12-27 | brazylijski luz | L   | 0.418      | -            | -                | -                | -         |    -6.24 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     2838 | 2023-12-08 | FALKE           | W   | 0.292      | 0.287        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.292) |     1.74 | DDias, Icarus, krazy, snapy, TMKj      |
|            6 |     3073 | 2023-11-25 | SAW             | L   | 0.206      | -            | -                | -                | -         |    -0.45 | DDias, Icarus, krazy, snapy, TMKj      |
|            5 |     3098 | 2023-11-24 | FTW             | W   | 0.198      | 0.344        | 0.004 (0.000)    | 0.035 (0.002)    | 1 (0.198) |     2.20 | DDias, Icarus, krazy, snapy, TMKj      |
|            4 |     3169 | 2023-11-19 | FTW             | W   | 0.166      | 0.337        | 0.004 (0.000)    | 0.035 (0.002)    | 1 (0.166) |     1.87 | DDias, Icarus, krazy, snapy, TMKj      |
|            3 |     3180 | 2023-11-19 | Los Alpacas     | W   | 0.165      | 0.337        | 0.003 (0.000)    | 0.007 (0.000)    | 1 (0.165) |     1.50 | DDias, Icarus, krazy, snapy, TMKj      |
|            2 |     3190 | 2023-11-18 | FTW             | L   | 0.160      | -            | -                | -                | -         |    -3.27 | DDias, Icarus, krazy, snapy, TMKj      |
|            1 |     3209 | 2023-11-18 | Agency          | W   | 0.158      | 0.337        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.158) |     0.92 | DDias, Icarus, krazy, snapy, TMKj      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,650.58)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-03 |      0.866 | $1,625.00      | $1,408.02       |
| 2023-12-08 |      0.292 | $2,187.00      | $637.64         |
| 2023-11-25 |      0.206 | $3,259.00      | $670.87         |
| 2023-11-19 |      0.166 | $5,621.00      | $934.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
