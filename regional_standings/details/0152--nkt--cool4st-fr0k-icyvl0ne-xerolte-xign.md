### Roster Details<br />
Team Name: NKT<br />
Roster: cool4st, fr0k, icyvl0ne, xerolte, XigN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  698.2<br />
<br />
Final Rank Value (698.2) = Starting Rank Value (697.5) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.5
- 400 + ( ( 0.149 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 697.5


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
|           12 |     3355 | 2024-01-31 | Rare Atom   | L   | 0.325      | -            | -                | -                | -         |    -5.34 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           11 |     3360 | 2024-01-31 | ATOX        | L   | 0.324      | -            | -                | -                | -         |    -2.05 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|           10 |     3362 | 2024-01-31 | Lynn Vision | W   | 0.324      | 0.143        | 0.129 (0.006)    | 0.303 (0.014)    | 0 (0.000) |     9.65 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            9 |     3396 | 2024-01-28 | The MongolZ | L   | 0.304      | -            | -                | -                | -         |    -0.01 | cool4st, dobu, MiQ, xerolte, XigN      |
|            8 |     3409 | 2024-01-27 | E9          | W   | 0.298      | 0.435        | 0.001 (0.000)    | 0.012 (0.001)    | 1 (0.298) |     3.86 | cool4st, dobu, MiQ, xerolte, XigN      |
|            7 |     3429 | 2024-01-26 | Lynn Vision | L   | 0.291      | -            | -                | -                | -         |    -0.48 | cool4st, dobu, MiQ, xerolte, XigN      |
|            6 |     3430 | 2024-01-26 | E9          | W   | 0.291      | 0.435        | 0.001 (0.000)    | 0.012 (0.001)    | 1 (0.291) |     3.82 | cool4st, dobu, MiQ, xerolte, XigN      |
|            5 |     3585 | 2024-01-20 | The Huns    | L   | 0.251      | -            | -                | -                | -         |    -5.84 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            4 |     3645 | 2024-01-19 | The MongolZ | L   | 0.244      | -            | -                | -                | -         |    -0.01 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            3 |     3822 | 2024-01-15 | Memo        | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.12 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            2 |     3829 | 2024-01-15 | Tseg Taslal | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.10 | cool4st, fr0k, icyvl0ne, xerolte, XigN |
|            1 |     3831 | 2024-01-15 | The Huns    | L   | 0.218      | -            | -                | -                | -         |    -5.09 | cool4st, fr0k, icyvl0ne, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,219.35)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
