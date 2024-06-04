### Roster Details<br />
Team Name: Rare Atom<br />
Roster: AhaNg, ChildKing, Risk, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  579.6<br />
<br />
Final Rank Value (579.6) = Starting Rank Value (530.0) + Head To Head Adjustments (49.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.0
- 400 + ( ( 0.067 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 530.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      127 | 2024-05-23 | MOUZ NXT    | L   | 1.000      | -            | -                | -                | -         |    -2.94 | AhaNg, ChildKing, Risk, somebody, Summer |
|           11 |      304 | 2024-05-18 | Sangal      | L   | 1.000      | -            | -                | -                | -         |    -3.05 | AhaNg, ChildKing, Risk, somebody, Summer |
|           10 |      326 | 2024-05-17 | NOM         | L   | 1.000      | -            | -                | -                | -         |   -16.75 | AhaNg, ChildKing, Risk, somebody, Summer |
|            9 |      375 | 2024-05-16 | Metizport   | L   | 1.000      | -            | -                | -                | -         |    -2.66 | AhaNg, ChildKing, Risk, somebody, Summer |
|            8 |      477 | 2024-05-14 | DMS         | L   | 1.000      | -            | -                | -                | -         |   -10.47 | AhaNg, ChildKing, Risk, somebody, Summer |
|            7 |      507 | 2024-05-13 | NOM         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.148 (0.021)    | 0 (0.000) |    13.06 | AhaNg, ChildKing, Risk, somebody, Summer |
|            6 |     1045 | 2024-04-19 | TheMongolz  | L   | 0.932      | -            | -                | -                | -         |    -0.29 | AhaNg, ChildKing, Risk, somebody, Summer |
|            5 |     1055 | 2024-04-19 | TYLOO       | W   | 0.931      | 0.143        | 0.042 (0.006)    | 0.330 (0.044)    | 0 (0.000) |    24.61 | AhaNg, ChildKing, Risk, somebody, Summer |
|            4 |     1096 | 2024-04-18 | Lynn Vision | W   | 0.925      | 0.143        | 0.056 (0.007)    | 0.282 (0.037)    | 0 (0.000) |    26.91 | AhaNg, ChildKing, Risk, somebody, Summer |
|            3 |     1105 | 2024-04-18 | TheMongolz  | L   | 0.924      | -            | -                | -                | -         |    -0.22 | AhaNg, ChildKing, Risk, somebody, Summer |
|            2 |     1138 | 2024-04-17 | NKT         | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |    12.63 | AhaNg, ChildKing, Risk, somebody, Summer |
|            1 |     1146 | 2024-04-17 | MIRAI       | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.85 | AhaNg, ChildKing, Risk, somebody, Summer |

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
