### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, aumaN, JamYoung, kaze, Mercury<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  774.2<br />
<br />
Final Rank Value (774.2) = Starting Rank Value (755.3) + Head To Head Adjustments (18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.3
- 400 + ( ( 0.178 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 755.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2793 | 2024-02-27 | ATOX               | L   | 0.504      | -            | -                | -                | -         |    -4.43 | advent, aumaN, JamYoung, kaze, Mercury |
|           17 |     2805 | 2024-02-26 | Lynn Vision        | L   | 0.497      | -            | -                | -                | -         |    -1.50 | advent, aumaN, JamYoung, kaze, Mercury |
|           16 |     2807 | 2024-02-25 | JiJieHao           | W   | 0.496      | 0.143        | 0.000 (0.000)    | 0.097 (0.007)    | 1 (0.496) |     2.88 | advent, aumaN, JamYoung, kaze, Mercury |
|           15 |     3311 | 2024-02-02 | Rare Atom          | L   | 0.338      | -            | -                | -                | -         |    -6.64 | advent, aumaN, JamYoung, kaze, Mercury |
|           14 |     3341 | 2024-02-01 | Newhappy           | W   | 0.331      | 0.143        | 0.000 (0.000)    | 0.084 (0.004)    | 0 (0.000) |     2.08 | advent, aumaN, JamYoung, kaze, Mercury |
|           13 |     3343 | 2024-02-01 | GR                 | W   | 0.330      | 0.143        | 0.011 (0.000)    | 0.148 (0.007)    | 0 (0.000) |     3.63 | advent, aumaN, JamYoung, kaze, Mercury |
|           12 |     3397 | 2024-01-27 | Lynn Vision        | L   | 0.303      | -            | -                | -                | -         |    -0.78 | advent, aumaN, JamYoung, kaze, Mercury |
|           11 |     3406 | 2024-01-27 | The MongolZ        | W   | 0.299      | 0.143        | 0.978 (0.042)    | 0.738 (0.031)    | 0 (0.000) |     9.40 | advent, aumaN, JamYoung, kaze, Mercury |
|           10 |     3410 | 2024-01-27 | The Huns           | W   | 0.298      | 0.143        | 0.000 (0.000)    | 0.087 (0.004)    | 0 (0.000) |     2.08 | advent, aumaN, JamYoung, kaze, Mercury |
|            9 |     3413 | 2024-01-26 | ACME               | W   | 0.296      | 0.435        | 0.001 (0.000)    | 0.011 (0.001)    | 1 (0.296) |     3.01 | advent, aumaN, JamYoung, kaze, Mercury |
|            8 |     3424 | 2024-01-26 | The MongolZ        | L   | 0.292      | -            | -                | -                | -         |    -0.01 | advent, aumaN, JamYoung, kaze, Mercury |
|            7 |     3428 | 2024-01-26 | Wings Up           | W   | 0.291      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     1.89 | advent, aumaN, JamYoung, kaze, Mercury |
|            6 |     3435 | 2024-01-26 | The MongolZ        | L   | 0.290      | -            | -                | -                | -         |    -0.01 | advent, aumaN, JamYoung, kaze, Mercury |
|            5 |     3437 | 2024-01-25 | Incheon On Sla2ers | W   | 0.289      | 0.435        | 0.001 (0.000)    | -                | 1 (0.289) |     1.94 | advent, aumaN, JamYoung, kaze, Mercury |
|            4 |     3539 | 2024-01-21 | Rare Atom          | W   | 0.258      | 0.143        | 0.010 (0.000)    | 0.093 (0.003)    | 0 (0.000) |     3.25 | advent, aumaN, JamYoung, kaze, Mercury |
|            3 |     3548 | 2024-01-20 | Lynn Vision        | L   | 0.257      | -            | -                | -                | -         |    -0.60 | advent, aumaN, JamYoung, kaze, Mercury |
|            2 |     3646 | 2024-01-19 | Newhappy           | W   | 0.244      | 0.143        | 0.000 (0.000)    | 0.084 (0.003)    | 0 (0.000) |     1.70 | advent, aumaN, JamYoung, kaze, Mercury |
|            1 |     3660 | 2024-01-18 | SHPL               | W   | 0.243      | 0.143        | -                | 0.015 (0.001)    | -         |     0.94 | advent, aumaN, JamYoung, kaze, Mercury |

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
