### Roster Details<br />
Team Name: Trouble makers<br />
Roster: aRon, arun, imyGDx, Northwest, nursSSS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [28]( ../standings_asia.md)<br />
Final Rank Value:  501.4<br />
<br />
Final Rank Value (501.4) = Starting Rank Value (486.0) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.0
- 400 + ( ( 0.044 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 486.0


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
|           10 |     3033 | 2024-01-21 | MAG          | W   | 0.339      | 0.143        | 0.000 (0.000)    | 0.129 (0.006)    | 0 (0.000) |     5.57 | aRon, arun, imyGDx, Northwest, nursSSS |
|            9 |     3037 | 2024-01-21 | Gods Reign   | W   | 0.338      | 0.143        | 0.004 (0.000)    | 0.088 (0.004)    | 0 (0.000) |     7.82 | aRon, arun, imyGDx, Northwest, nursSSS |
|            8 |     3044 | 2024-01-21 | Dewa United  | W   | 0.337      | 0.143        | 0.000 (0.000)    | 0.053 (0.003)    | 0 (0.000) |     4.33 | aRon, arun, imyGDx, Northwest, nursSSS |
|            7 |     3075 | 2024-01-20 | SR Nacague   | W   | 0.331      | 0.143        | 0.000 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     4.16 | aRon, arun, imyGDx, Northwest, nursSSS |
|            6 |     3089 | 2024-01-20 | Drippy Lab   | W   | 0.330      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     4.10 | aRon, arun, imyGDx, Northwest, nursSSS |
|            5 |     3144 | 2024-01-19 | Dewa United  | L   | 0.323      | -            | -                | -                | -         |    -6.05 | aRon, arun, imyGDx, Northwest, nursSSS |
|            4 |     3237 | 2024-01-17 | 2ez          | L   | 0.311      | -            | -                | -                | -         |    -5.99 | aRon, arun, imyGDx, Northwest, nursSSS |
|            3 |     3240 | 2024-01-17 | Drippy Lab   | W   | 0.311      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     3.80 | aRon, arun, imyGDx, Northwest, nursSSS |
|            2 |     3243 | 2024-01-17 | SR Nacague   | L   | 0.311      | -            | -                | -                | -         |    -6.01 | aRon, arun, imyGDx, Northwest, nursSSS |
|            1 |     3247 | 2024-01-17 | Mai Mee Tang | W   | 0.310      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.72 | aRon, arun, imyGDx, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
