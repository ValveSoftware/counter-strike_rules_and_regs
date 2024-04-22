### Roster Details<br />
Team Name: TSM<br />
Roster: CYPHER, interz, JACKZ, MoDo, valde<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  735.0<br />
<br />
Final Rank Value (735.0) = Starting Rank Value (710.3) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.3
- 400 + ( ( 0.161 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 710.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     2677 | 2023-12-17 | ORKS            | W   | 0.353      | -            | -                | -                | 0 (0.000) |     2.27 | CYPHER, interz, JACKZ, MoDo, valde |
|           23 |     2709 | 2023-12-16 | RUSH B          | L   | 0.347      | -            | -                | -                | -         |    -4.91 | CYPHER, interz, JACKZ, MoDo, valde |
|           22 |     2740 | 2023-12-15 | Permitta        | W   | 0.340      | 0.143        | 0.031 (0.001)    | 0.970 (0.047)    | 0 (0.000) |     7.28 | CYPHER, interz, JACKZ, MoDo, valde |
|           21 |     2777 | 2023-12-11 | RUSH B          | L   | 0.314      | -            | -                | -                | -         |    -4.45 | CYPHER, interz, JACKZ, MoDo, valde |
|           20 |     2796 | 2023-12-10 | Preasy          | L   | 0.305      | -            | -                | -                | -         |    -1.53 | CYPHER, interz, JACKZ, MoDo, valde |
|           19 |     2825 | 2023-12-09 | Sprout          | W   | 0.297      | 0.371        | 0.010 (0.001)    | 0.221 (0.024)    | 0 (0.000) |     4.97 | CYPHER, interz, JACKZ, MoDo, valde |
|           18 |     2831 | 2023-12-08 | ALTERNATE aTTaX | L   | 0.294      | -            | -                | -                | -         |    -3.19 | CYPHER, interz, JACKZ, MoDo, valde |
|           17 |     2851 | 2023-12-07 | lajtbitexe      | W   | 0.287      | 0.372        | 0.003 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     3.76 | CYPHER, interz, JACKZ, MoDo, valde |
|           16 |     2871 | 2023-12-07 | IKLA            | W   | 0.284      | 0.371        | -                | 0.205 (0.022)    | 0 (0.000) |     2.74 | CYPHER, interz, JACKZ, MoDo, valde |
|           15 |     2882 | 2023-12-06 | Lausanne SE     | W   | 0.280      | 0.372        | 0.001 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     3.34 | CYPHER, interz, JACKZ, MoDo, valde |
|           14 |     2908 | 2023-12-05 | Zero Tenacity   | W   | 0.274      | 0.372        | 0.008 (0.001)    | 0.805 (0.082)    | 0 (0.000) |     5.16 | CYPHER, interz, JACKZ, MoDo, valde |
|           13 |     2925 | 2023-12-05 | GODSENT         | L   | 0.272      | -            | -                | -                | -         |    -3.31 | CYPHER, interz, JACKZ, MoDo, valde |
|           12 |     2956 | 2023-12-03 | Zero Tenacity   | W   | 0.257      | 0.371        | 0.008 (0.001)    | 0.805 (0.077)    | 0 (0.000) |     4.93 | CYPHER, interz, JACKZ, MoDo, valde |
|           11 |     2994 | 2023-12-01 | Legacy          | W   | 0.245      | 0.371        | 0.055 (0.005)    | 0.501 (0.045)    | 0 (0.000) |     6.72 | CYPHER, interz, JACKZ, MoDo, valde |
|           10 |     3044 | 2023-11-27 | Sprout          | L   | 0.218      | -            | -                | -                | -         |    -3.24 | CYPHER, interz, JACKZ, MoDo, valde |
|            9 |     3232 | 2023-11-17 | SINNERS         | L   | 0.152      | -            | -                | -                | -         |    -0.56 | CYPHER, interz, JACKZ, MoDo, valde |
|            8 |     3269 | 2023-11-16 | 3DMAX           | W   | 0.145      | 0.589        | 0.048 (0.004)    | 0.801 (0.069)    | 0 (0.000) |     3.91 | CYPHER, interz, JACKZ, MoDo, valde |
|            7 |     3325 | 2023-11-14 | Sprout          | W   | 0.134      | 0.589        | 0.010 (0.001)    | 0.221 (0.017)    | -         |     2.21 | CYPHER, interz, JACKZ, MoDo, valde |
|            6 |     3339 | 2023-11-13 | BIG             | L   | 0.127      | -            | -                | -                | -         |    -0.23 | CYPHER, interz, JACKZ, MoDo, valde |
|            5 |     3432 | 2023-11-09 | Entropiq        | L   | 0.100      | -            | -                | -                | -         |    -1.41 | CYPHER, interz, JACKZ, MoDo, valde |
|            4 |     3467 | 2023-11-08 | EYEBALLERS      | L   | 0.092      | -            | -                | -                | -         |    -0.79 | CYPHER, interz, JACKZ, MoDo, valde |
|            3 |     3615 | 2023-11-01 | ECLOT           | W   | 0.045      | 0.143        | 0.019 (0.000)    | -                | -         |     0.71 | CYPHER, interz, JACKZ, MoDo, valde |
|            2 |     3707 | 2023-10-29 | FreeESPI        | W   | 0.026      | -            | -                | -                | -         |     0.36 | CYPHER, interz, JACKZ, MoDo, valde |
|            1 |     3821 | 2023-10-26 | Aurora          | L   | 0.005      | -            | -                | -                | -         |    -0.00 | CYPHER, interz, JACKZ, MoDo, valde |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,309.75)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.326 | $3,300.00      | $1,076.70       |
| 2023-12-12 |      0.320 | $1,000.00      | $319.71         |
| 2023-11-19 |      0.167 | $5,000.00      | $834.74         |
| 2023-10-29 |      0.026 | $3,000.00      | $78.61          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
