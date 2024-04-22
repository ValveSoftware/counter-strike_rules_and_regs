### Roster Details<br />
Team Name: Trouble makers<br />
Roster: aRon, arun, imyGDx, Northwest, nursSSS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [31]( ../standings_asia.md)<br />
Final Rank Value:  524.7<br />
<br />
Final Rank Value (524.7) = Starting Rank Value (498.3) + Head To Head Adjustments (26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.3
- 400 + ( ( 0.051 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 498.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2086 | 2024-01-21 | MAG          | W   | 0.586      | 0.143        | 0.000 (0.000)    | 0.237 (0.020)    | 0 (0.000) |     9.89 | aRon, arun, imyGDx, Northwest, nursSSS |
|            9 |     2090 | 2024-01-21 | Gods Reign   | W   | 0.585      | 0.143        | 0.010 (0.001)    | 0.180 (0.015)    | 0 (0.000) |    14.03 | aRon, arun, imyGDx, Northwest, nursSSS |
|            8 |     2097 | 2024-01-21 | Dewa United  | W   | 0.584      | 0.143        | 0.000 (0.000)    | 0.105 (0.009)    | 0 (0.000) |     7.58 | aRon, arun, imyGDx, Northwest, nursSSS |
|            7 |     2128 | 2024-01-20 | SR Nacague   | W   | 0.579      | 0.143        | 0.000 (0.000)    | 0.078 (0.006)    | 0 (0.000) |     7.23 | aRon, arun, imyGDx, Northwest, nursSSS |
|            6 |     2142 | 2024-01-20 | Drippy Lab   | W   | 0.577      | 0.143        | 0.000 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     7.06 | aRon, arun, imyGDx, Northwest, nursSSS |
|            5 |     2197 | 2024-01-19 | Dewa United  | L   | 0.571      | -            | -                | -                | -         |   -10.54 | aRon, arun, imyGDx, Northwest, nursSSS |
|            4 |     2290 | 2024-01-17 | 2ez          | L   | 0.559      | -            | -                | -                | -         |   -10.85 | aRon, arun, imyGDx, Northwest, nursSSS |
|            3 |     2293 | 2024-01-17 | Drippy Lab   | W   | 0.559      | 0.143        | 0.000 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     6.60 | aRon, arun, imyGDx, Northwest, nursSSS |
|            2 |     2296 | 2024-01-17 | SR Nacague   | L   | 0.558      | -            | -                | -                | -         |   -10.94 | aRon, arun, imyGDx, Northwest, nursSSS |
|            1 |     2300 | 2024-01-17 | Mai Mee Tang | W   | 0.558      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.35 | aRon, arun, imyGDx, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
