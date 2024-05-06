### Roster Details<br />
Team Name: NKT<br />
Roster: cool4st, fr0k, icyvl0ne, xerolte, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  740.1<br />
<br />
Final Rank Value (740.1) = Starting Rank Value (745.9) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.9
- 400 + ( ( 0.182 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 745.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2204 | 2024-01-31 | Rare Atom   | L   | 0.558      | -            | -                | -                | -         |    -9.34 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           11 |     2209 | 2024-01-31 | ATOX        | L   | 0.558      | -            | -                | -                | -         |    -8.34 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           10 |     2211 | 2024-01-31 | Lynn Vision | W   | 0.557      | 0.143        | 0.135 (0.011)    | 0.390 (0.031)    | 0 (0.000) |    15.93 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            9 |     2245 | 2024-01-28 | TheMongolz  | L   | 0.537      | -            | -                | -                | -         |    -0.36 | cool4st, dobu, MiQ, xerolte, XigN      |
|            8 |     2258 | 2024-01-27 | E9          | W   | 0.531      | 0.435        | 0.004 (0.001)    | 0.024 (0.005)    | 1 (0.531) |     6.61 | cool4st, dobu, MiQ, xerolte, XigN      |
|            7 |     2278 | 2024-01-26 | Lynn Vision | L   | 0.525      | -            | -                | -                | -         |    -1.44 | cool4st, dobu, MiQ, xerolte, XigN      |
|            6 |     2279 | 2024-01-26 | E9          | W   | 0.524      | 0.435        | 0.004 (0.001)    | 0.024 (0.005)    | 1 (0.524) |     6.66 | cool4st, dobu, MiQ, xerolte, XigN      |
|            5 |     2434 | 2024-01-20 | The Huns    | L   | 0.484      | -            | -                | -                | -         |    -9.81 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            4 |     2494 | 2024-01-19 | TheMongolz  | L   | 0.477      | -            | -                | -                | -         |    -0.30 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            3 |     2671 | 2024-01-15 | Memo        | W   | 0.452      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.87 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            2 |     2678 | 2024-01-15 | Tseg Taslal | W   | 0.451      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.80 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            1 |     2680 | 2024-01-15 | The Huns    | L   | 0.451      | -            | -                | -                | -         |    -9.11 | cool4st, fr0k, icyvl0ne, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,152.41)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
