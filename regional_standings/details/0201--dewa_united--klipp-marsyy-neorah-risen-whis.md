### Roster Details<br />
Team Name: Dewa United<br />
Roster: klipp, marsyy, neorah, RiseN, Whis<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [201](../standings_global.md)<br />
Regional Rank: [27]( ../standings_asia.md)<br />
Final Rank Value:  515.3<br />
<br />
Final Rank Value (515.3) = Starting Rank Value (539.5) + Head To Head Adjustments (-24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.5
- 400 + ( ( 0.070 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 539.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      354 | 2024-06-04 | The QUBE       | L   | 1.000      | -            | -                | -                | -         |    -9.43 | klipp, marsyy, neorah, RiseN, Whis |
|            9 |     1649 | 2024-04-17 | Sheer Conquer  | L   | 0.838      | -            | -                | -                | -         |   -14.53 | klipp, marsyy, neorah, RiseN, Whis |
|            8 |     3544 | 2024-01-21 | Trouble makers | L   | 0.257      | -            | -                | -                | -         |    -4.67 | Hatred, klipp, neorah, RiseN, Whis |
|            7 |     3583 | 2024-01-20 | 2ez            | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     2.56 | Hatred, klipp, neorah, RiseN, Whis |
|            6 |     3635 | 2024-01-19 | MAG            | L   | 0.245      | -            | -                | -                | -         |    -4.23 | Hatred, klipp, neorah, RiseN, Whis |
|            5 |     3644 | 2024-01-19 | Trouble makers | W   | 0.244      | 0.143        | 0.000 (0.000)    | 0.059 (0.002)    | 0 (0.000) |     3.22 | Hatred, klipp, neorah, RiseN, Whis |
|            4 |     3735 | 2024-01-17 | SR Nacague     | W   | 0.232      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     2.35 | Hatred, klipp, neorah, RiseN, Whis |
|            3 |     3744 | 2024-01-17 | MAG            | L   | 0.232      | -            | -                | -                | -         |    -4.03 | Hatred, klipp, neorah, RiseN, Whis |
|            2 |     3749 | 2024-01-17 | 2ez            | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     2.29 | Hatred, klipp, neorah, RiseN, Whis |
|            1 |     3754 | 2024-01-17 | Moon           | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.28 | Hatred, klipp, neorah, RiseN, Whis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
