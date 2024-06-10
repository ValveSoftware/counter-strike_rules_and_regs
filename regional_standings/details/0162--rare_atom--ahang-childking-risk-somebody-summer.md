### Roster Details<br />
Team Name: Rare Atom<br />
Roster: AhaNg, ChildKing, Risk, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  677.5<br />
<br />
Final Rank Value (677.5) = Starting Rank Value (586.4) + Head To Head Adjustments (91.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 586.4
- 400 + ( ( 0.093 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 586.4


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
|           16 |       24 | 2024-06-10 | SINNERS     | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.844 (0.367)    | 0 (0.000) |    28.06 | AhaNg, ChildKing, Risk, somebody, Summer |
|           15 |      176 | 2024-06-07 | Passion UA  | L   | 1.000      | -            | -                | -                | -         |    -2.94 | AhaNg, ChildKing, Risk, somebody, Summer |
|           14 |      317 | 2024-06-05 | RUBY        | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.555 (0.241)    | 0 (0.000) |    26.82 | AhaNg, ChildKing, Risk, somebody, Summer |
|           13 |      381 | 2024-06-03 | Sampi       | L   | 1.000      | -            | -                | -                | -         |    -5.19 | AhaNg, ChildKing, Risk, somebody, Summer |
|           12 |      627 | 2024-05-23 | MOUZ NXT    | L   | 1.000      | -            | -                | -                | -         |    -2.74 | AhaNg, ChildKing, Risk, somebody, Summer |
|           11 |      804 | 2024-05-18 | Sangal      | L   | 1.000      | -            | -                | -                | -         |    -2.69 | AhaNg, ChildKing, Risk, somebody, Summer |
|           10 |      826 | 2024-05-17 | NOM         | L   | 1.000      | -            | -                | -                | -         |   -18.74 | AhaNg, ChildKing, Risk, somebody, Summer |
|            9 |      875 | 2024-05-16 | Metizport   | L   | 1.000      | -            | -                | -                | -         |    -2.77 | AhaNg, ChildKing, Risk, somebody, Summer |
|            8 |      977 | 2024-05-14 | DMS         | L   | 1.000      | -            | -                | -                | -         |    -6.19 | AhaNg, ChildKing, Risk, somebody, Summer |
|            7 |     1007 | 2024-05-13 | NOM         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.133 (0.019)    | 0 (0.000) |    11.16 | AhaNg, ChildKing, Risk, somebody, Summer |
|            6 |     1545 | 2024-04-19 | The MongolZ | L   | 0.853      | -            | -                | -                | -         |    -0.04 | AhaNg, ChildKing, Risk, somebody, Summer |
|            5 |     1555 | 2024-04-19 | TYLOO       | W   | 0.851      | 0.143        | 0.050 (0.006)    | 0.273 (0.033)    | 0 (0.000) |    20.08 | AhaNg, ChildKing, Risk, somebody, Summer |
|            4 |     1596 | 2024-04-18 | Lynn Vision | W   | 0.846      | 0.143        | 0.129 (0.016)    | 0.303 (0.037)    | 0 (0.000) |    25.49 | AhaNg, ChildKing, Risk, somebody, Summer |
|            3 |     1605 | 2024-04-18 | The MongolZ | L   | 0.845      | -            | -                | -                | -         |    -0.03 | AhaNg, ChildKing, Risk, somebody, Summer |
|            2 |     1638 | 2024-04-17 | NKT         | W   | 0.838      | 0.143        | 0.000 (0.000)    | 0.032 (0.004)    | 0 (0.000) |     9.98 | AhaNg, ChildKing, Risk, somebody, Summer |
|            1 |     1646 | 2024-04-17 | MIRAI       | W   | 0.838      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.86 | AhaNg, ChildKing, Risk, somebody, Summer |

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
