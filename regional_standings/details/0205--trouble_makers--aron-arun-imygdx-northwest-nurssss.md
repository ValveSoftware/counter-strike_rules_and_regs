### Roster Details<br />
Team Name: Trouble makers<br />
Roster: aRon, arun, imyGDx, Northwest, nursSSS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [205](../standings_global.md)<br />
Regional Rank: [30]( ../standings_asia.md)<br />
Final Rank Value:  502.9<br />
<br />
Final Rank Value (502.9) = Starting Rank Value (488.5) + Head To Head Adjustments (14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.5
- 400 + ( ( 0.044 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 488.5


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
|           10 |     3533 | 2024-01-21 | MAG          | W   | 0.260      | 0.143        | 0.000 (0.000)    | 0.096 (0.004)    | 0 (0.000) |     4.32 | aRon, arun, imyGDx, Northwest, nursSSS |
|            9 |     3537 | 2024-01-21 | Gods Reign   | W   | 0.259      | 0.143        | 0.003 (0.000)    | 0.061 (0.002)    | 0 (0.000) |     5.91 | aRon, arun, imyGDx, Northwest, nursSSS |
|            8 |     3544 | 2024-01-21 | Dewa United  | W   | 0.257      | 0.143        | 0.003 (0.000)    | 0.037 (0.001)    | 0 (0.000) |     4.67 | aRon, arun, imyGDx, Northwest, nursSSS |
|            7 |     3575 | 2024-01-20 | SR Nacague   | W   | 0.252      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     3.11 | aRon, arun, imyGDx, Northwest, nursSSS |
|            6 |     3589 | 2024-01-20 | Drippy Lab   | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     3.06 | aRon, arun, imyGDx, Northwest, nursSSS |
|            5 |     3644 | 2024-01-19 | Dewa United  | L   | 0.244      | -            | -                | -                | -         |    -3.22 | aRon, arun, imyGDx, Northwest, nursSSS |
|            4 |     3737 | 2024-01-17 | 2ez          | L   | 0.232      | -            | -                | -                | -         |    -4.50 | aRon, arun, imyGDx, Northwest, nursSSS |
|            3 |     3740 | 2024-01-17 | Drippy Lab   | W   | 0.232      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     2.80 | aRon, arun, imyGDx, Northwest, nursSSS |
|            2 |     3743 | 2024-01-17 | SR Nacague   | L   | 0.232      | -            | -                | -                | -         |    -4.52 | aRon, arun, imyGDx, Northwest, nursSSS |
|            1 |     3747 | 2024-01-17 | Mai Mee Tang | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.75 | aRon, arun, imyGDx, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
