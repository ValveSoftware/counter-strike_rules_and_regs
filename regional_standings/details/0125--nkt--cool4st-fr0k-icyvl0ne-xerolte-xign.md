### Roster Details<br />
Team Name: NKT<br />
Roster: cool4st, fr0k, icyvl0ne, xerolte, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  749.1<br />
<br />
Final Rank Value (749.1) = Starting Rank Value (761.3) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.133[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 761.3
- 400 + ( ( 0.187 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 761.3


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
|           12 |     1908 | 2024-01-31 | Rare Atom   | L   | 0.652      | -            | -                | -                | -         |   -10.88 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           11 |     1913 | 2024-01-31 | ATOX        | L   | 0.651      | -            | -                | -                | -         |    -9.54 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           10 |     1915 | 2024-01-31 | Lynn Vision | W   | 0.650      | 0.143        | 0.136 (0.013)    | 0.458 (0.043)    | 0 (0.000) |    18.74 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            9 |     1949 | 2024-01-28 | TheMongolz  | L   | 0.631      | -            | -                | -                | -         |    -0.77 | cool4st, dobu, MiQ, xerolte, XigN      |
|            8 |     1962 | 2024-01-27 | E9          | W   | 0.624      | 0.435        | 0.004 (0.001)    | 0.029 (0.008)    | 1 (0.624) |     7.74 | cool4st, dobu, MiQ, xerolte, XigN      |
|            7 |     1982 | 2024-01-26 | Lynn Vision | L   | 0.618      | -            | -                | -                | -         |    -1.50 | cool4st, dobu, MiQ, xerolte, XigN      |
|            6 |     1983 | 2024-01-26 | E9          | W   | 0.618      | 0.435        | 0.004 (0.001)    | 0.029 (0.008)    | 1 (0.618) |     7.86 | cool4st, dobu, MiQ, xerolte, XigN      |
|            5 |     2138 | 2024-01-20 | The Huns    | L   | 0.578      | -            | -                | -                | -         |   -14.01 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            4 |     2198 | 2024-01-19 | TheMongolz  | L   | 0.570      | -            | -                | -                | -         |    -0.65 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            3 |     2375 | 2024-01-15 | Memo        | W   | 0.546      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     2.13 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            2 |     2382 | 2024-01-15 | Tseg Taslal | W   | 0.545      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.04 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            1 |     2384 | 2024-01-15 | The Huns    | L   | 0.544      | -            | -                | -                | -         |   -13.38 | cool4st, fr0k, icyvl0ne, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,525.64)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
