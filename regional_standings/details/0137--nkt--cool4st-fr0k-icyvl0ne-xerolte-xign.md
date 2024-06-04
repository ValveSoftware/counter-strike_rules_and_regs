### Roster Details<br />
Team Name: NKT<br />
Roster: cool4st, fr0k, icyvl0ne, xerolte, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  696.2<br />
<br />
Final Rank Value (696.2) = Starting Rank Value (697.4) + Head To Head Adjustments (-1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.4
- 400 + ( ( 0.153 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 697.4


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
|           12 |     2855 | 2024-01-31 | Rare Atom   | L   | 0.404      | -            | -                | -                | -         |    -6.63 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           11 |     2860 | 2024-01-31 | ATOX        | L   | 0.404      | -            | -                | -                | -         |    -3.78 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           10 |     2862 | 2024-01-31 | Lynn Vision | W   | 0.403      | 0.143        | 0.056 (0.003)    | 0.282 (0.016)    | 0 (0.000) |    10.96 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            9 |     2896 | 2024-01-28 | TheMongolz  | L   | 0.383      | -            | -                | -                | -         |    -0.16 | cool4st, dobu, MiQ, xerolte, XigN      |
|            8 |     2909 | 2024-01-27 | E9          | W   | 0.377      | 0.435        | 0.002 (0.000)    | 0.016 (0.003)    | 1 (0.377) |     4.97 | cool4st, dobu, MiQ, xerolte, XigN      |
|            7 |     2929 | 2024-01-26 | Lynn Vision | L   | 0.371      | -            | -                | -                | -         |    -1.57 | cool4st, dobu, MiQ, xerolte, XigN      |
|            6 |     2930 | 2024-01-26 | E9          | W   | 0.370      | 0.435        | 0.002 (0.000)    | 0.016 (0.003)    | 1 (0.370) |     4.95 | cool4st, dobu, MiQ, xerolte, XigN      |
|            5 |     3085 | 2024-01-20 | The Huns    | L   | 0.330      | -            | -                | -                | -         |    -6.77 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            4 |     3145 | 2024-01-19 | TheMongolz  | L   | 0.323      | -            | -                | -                | -         |    -0.13 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            3 |     3322 | 2024-01-15 | Memo        | W   | 0.298      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.53 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            2 |     3329 | 2024-01-15 | Tseg Taslal | W   | 0.297      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.50 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            1 |     3331 | 2024-01-15 | The Huns    | L   | 0.297      | -            | -                | -                | -         |    -6.09 | cool4st, fr0k, icyvl0ne, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,536.04)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
