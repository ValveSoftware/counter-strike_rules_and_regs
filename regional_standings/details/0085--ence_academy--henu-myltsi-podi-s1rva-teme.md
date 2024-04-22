### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: HENU, myltsi, podi, S1rva, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  839.9<br />
<br />
Final Rank Value (839.9) = Starting Rank Value (844.1) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.175[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.1
- 400 + ( ( 0.230 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 844.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |        9 | 2024-04-22 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -17.89 | HENU, myltsi, podi, S1rva, teme   |
|           17 |       56 | 2024-04-20 | SINNERS         | W   | 1.000      | 0.371        | 0.043 (0.016)    | 0.779 (0.289)    | 0 (0.000) |    23.18 | HENU, myltsi, podi, S1rva, teme   |
|           16 |      111 | 2024-04-19 | Viperio         | L   | 1.000      | -            | -                | -                | -         |   -23.66 | HENU, myltsi, podi, S1rva, teme   |
|           15 |      159 | 2024-04-18 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -12.75 | HENU, myltsi, podi, S1rva, teme   |
|           14 |      221 | 2024-04-16 | 1WIN            | L   | 1.000      | -            | -                | -                | -         |   -24.31 | HENU, myltsi, podi, S1rva, teme   |
|           13 |      240 | 2024-04-15 | Sampi           | W   | 1.000      | 0.371        | 0.084 (0.031)    | 0.698 (0.259)    | 0 (0.000) |    17.84 | HENU, myltsi, podi, S1rva, teme   |
|           12 |      243 | 2024-04-15 | Viperio         | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.093 (0.013)    | 0 (0.000) |     6.99 | HENU, myltsi, podi, S1rva, teme   |
|           11 |      316 | 2024-04-11 | Secret          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.210 (0.078)    | 0 (0.000) |     6.34 | HENU, myltsi, podi, S1rva, teme   |
|           10 |     1390 | 2024-02-24 | HAVU            | W   | 0.815      | 0.306        | 0.027 (0.007)    | 0.154 (0.038)    | 1 (0.815) |    12.10 | HENU, myltsi, podi, S1rva, teme   |
|            9 |     1412 | 2024-02-24 | ex-sYnck        | W   | 0.812      | 0.306        | 0.006 (0.002)    | 0.292 (0.072)    | 1 (0.812) |     9.29 | HENU, myltsi, podi, S1rva, teme   |
|            8 |     3518 | 2023-11-05 | Enterprise      | L   | 0.072      | -            | -                | -                | -         |    -0.94 | HENU, juissi, myltsi, podi, S1rva |
|            7 |     3559 | 2023-11-03 | Sampi           | W   | 0.059      | 0.435        | 0.084 (0.002)    | 0.698 (0.018)    | 0 (0.000) |     1.30 | HENU, juissi, myltsi, podi, S1rva |
|            6 |     3584 | 2023-11-02 | SINNERS         | L   | 0.052      | -            | -                | -                | -         |    -0.36 | HENU, juissi, myltsi, podi, S1rva |
|            5 |     3612 | 2023-11-01 | Zero Tenacity   | L   | 0.046      | -            | -                | -                | -         |    -0.81 | HENU, juissi, myltsi, podi, S1rva |
|            4 |     3635 | 2023-10-31 | Spirit Academy  | L   | 0.040      | -            | -                | -                | -         |    -0.79 | HENU, juissi, myltsi, podi, S1rva |
|            3 |     3641 | 2023-10-31 | Zero Tenacity   | W   | 0.039      | 0.143        | 0.008 (0.000)    | 0.805 (0.004)    | 0 (0.000) |     0.54 | HENU, juissi, myltsi, podi, S1rva |
|            2 |     3684 | 2023-10-30 | ALTERNATE aTTaX | W   | 0.031      | 0.435        | 0.026 (0.000)    | 0.327 (0.004)    | 0 (0.000) |     0.42 | HENU, juissi, myltsi, podi, S1rva |
|            1 |     3719 | 2023-10-29 | Permitta        | L   | 0.025      | -            | -                | -                | -         |    -0.62 | HENU, juissi, myltsi, podi, S1rva |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,053.33)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
