### Roster Details<br />
Team Name: MAG<br />
Roster: ariucle, Derek, lan, Tugu, WasteOfAmmo<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [27]( ../standings_asia.md)<br />
Final Rank Value:  523.2<br />
<br />
Final Rank Value (523.2) = Starting Rank Value (489.5) + Head To Head Adjustments (33.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.5
- 400 + ( ( 0.046 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 489.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2296 | 2024-02-26 | ATOX           | L   | 0.581      | -            | -                | -                | -         |    -2.53 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           14 |     2312 | 2024-02-25 | TheMongolz     | L   | 0.574      | -            | -                | -                | -         |    -0.10 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           13 |     2519 | 2024-02-17 | Newhappy       | L   | 0.517      | -            | -                | -                | -         |    -5.79 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           12 |     2545 | 2024-02-16 | GR             | W   | 0.511      | 0.143        | 0.001 (0.000)    | 0.146 (0.011)    | 0 (0.000) |    10.28 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           11 |     2551 | 2024-02-16 | Lynn Vision    | L   | 0.510      | -            | -                | -                | -         |    -0.99 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           10 |     2576 | 2024-02-15 | SEAW           | W   | 0.504      | 0.143        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     5.53 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            9 |     2612 | 2024-02-14 | -72c           | W   | 0.497      | 0.143        | 0.000 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     9.14 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            8 |     3033 | 2024-01-21 | Trouble makers | L   | 0.339      | -            | -                | -                | -         |    -5.57 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            7 |     3049 | 2024-01-20 | Gods Reign     | W   | 0.336      | 0.143        | 0.004 (0.000)    | 0.088 (0.004)    | 0 (0.000) |     7.66 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            6 |     3135 | 2024-01-19 | Dewa United    | W   | 0.324      | 0.143        | 0.000 (0.000)    | 0.053 (0.002)    | 0 (0.000) |     3.90 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            5 |     3150 | 2024-01-19 | Drippy Lab     | W   | 0.323      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     3.77 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            4 |     3236 | 2024-01-17 | Gods Reign     | L   | 0.312      | -            | -                | -                | -         |    -2.69 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            3 |     3244 | 2024-01-17 | Dewa United    | W   | 0.311      | 0.143        | 0.000 (0.000)    | 0.053 (0.002)    | 0 (0.000) |     3.71 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            2 |     3246 | 2024-01-17 | RESILIENCE     | W   | 0.310      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     3.69 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            1 |     3251 | 2024-01-17 | Enigma         | W   | 0.310      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.67 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |

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
