### Roster Details<br />
Team Name: Stirlzs Angels<br />
Roster: callum_murray, Drox, ObZen, swede, toM<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [28]( ../standings_asia.md)<br />
Final Rank Value:  571.6<br />
<br />
Final Rank Value (571.6) = Starting Rank Value (572.7) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.202[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.089<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.7
- 400 + ( ( 0.089 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 572.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3243 | 2023-11-17 | sunday school      | L   | 0.151      | -            | -                | -                | -         |    -2.04 | callum_murray, Drox, ObZen, swede, toM   |
|            9 |     3337 | 2023-11-14 | Bad News Kangaroos | L   | 0.130      | -            | -                | -                | -         |    -0.48 | callum_murray, Drox, kyson, ObZen, toM   |
|            8 |     3389 | 2023-11-11 | Cobro's Cobros     | W   | 0.116      | 0.313        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.01 | callum_murray, Drox, ObZen, swede, toM   |
|            7 |     3415 | 2023-11-11 | Mindfreak          | L   | 0.110      | -            | -                | -                | -         |    -1.50 | callum_murray, Drox, ObZen, swede, toM   |
|            6 |     3506 | 2023-11-06 | sunday school      | W   | 0.078      | 0.301        | 0.001 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.28 | callum_murray, dpr, Drox, ObZen, vision  |
|            5 |     3554 | 2023-11-03 | Vantage            | L   | 0.063      | -            | -                | -                | -         |    -0.88 | callum_murray, dpr, Drox, ObZen, toM     |
|            4 |     3566 | 2023-11-03 | sunday school      | W   | 0.058      | 0.312        | 0.001 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.96 | callum_murray, dpr, Drox, toM, vision    |
|            3 |     3653 | 2023-10-31 | Antic              | W   | 0.037      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.32 | callum_murray, dpr, Drox, ObZen, toM     |
|            2 |     3731 | 2023-10-29 | Bad News Kangaroos | L   | 0.024      | -            | -                | -                | -         |    -0.09 | callum_murray, dpr, Drox, toM, vision    |
|            1 |     3771 | 2023-10-28 | Mindfreak          | W   | 0.017      | 0.312        | 0.000 (0.000)    | 0.273 (0.001)    | 0 (0.000) |     0.31 | callum_murray, dpr, Drox, toM, vision    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21.85)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
