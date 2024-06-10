### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  703.0<br />
<br />
Final Rank Value (703.0) = Starting Rank Value (687.0) + Head To Head Adjustments (16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.0
- 400 + ( ( 0.144 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 687.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2610 | 2024-03-06 | Cloud9       | L   | 0.559      | -            | -                | -                | -         |    -0.36 | expro, kory, phzy, somebody, Summer |
|           16 |     3306 | 2024-02-02 | GR           | W   | 0.339      | 0.143        | 0.011 (0.001)    | 0.148 (0.007)    | 0 (0.000) |     5.05 | expro, kory, phzy, somebody, Summer |
|           15 |     3311 | 2024-02-02 | TYLOO        | W   | 0.338      | 0.143        | 0.004 (0.000)    | 0.122 (0.006)    | 0 (0.000) |     6.64 | expro, kory, phzy, somebody, Summer |
|           14 |     3355 | 2024-01-31 | NKT          | W   | 0.325      | 0.143        | 0.004 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     5.34 | expro, kory, phzy, somebody, Summer |
|           13 |     3358 | 2024-01-31 | Lynn Vision  | W   | 0.325      | 0.143        | 0.129 (0.006)    | 0.303 (0.014)    | 0 (0.000) |     9.71 | expro, kory, phzy, somebody, Summer |
|           12 |     3361 | 2024-01-31 | ATOX         | L   | 0.324      | -            | -                | -                | -         |    -1.82 | expro, kory, phzy, somebody, Summer |
|           11 |     3442 | 2024-01-25 | Wings Up     | L   | 0.285      | -            | -                | -                | -         |    -6.45 | expro, kory, phzy, somebody, Summer |
|           10 |     3446 | 2024-01-25 | Newhappy     | W   | 0.284      | 0.143        | 0.000 (0.000)    | 0.084 (0.003)    | 0 (0.000) |     2.67 | expro, kory, phzy, somebody, Summer |
|            9 |     3460 | 2024-01-24 | Eruption     | W   | 0.279      | 0.143        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     1.57 | expro, kory, phzy, somebody, Summer |
|            8 |     3512 | 2024-01-22 | ATOX         | L   | 0.265      | -            | -                | -                | -         |    -1.47 | expro, kory, phzy, somebody, Summer |
|            7 |     3539 | 2024-01-21 | TYLOO        | L   | 0.258      | -            | -                | -                | -         |    -3.25 | expro, kory, phzy, somebody, Summer |
|            6 |     3545 | 2024-01-21 | Newhappy     | W   | 0.257      | 0.143        | 0.000 (0.000)    | 0.084 (0.003)    | 0 (0.000) |     2.46 | expro, kory, phzy, somebody, Summer |
|            5 |     3587 | 2024-01-20 | Wings Up     | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     2.18 | expro, kory, phzy, somebody, Summer |
|            4 |     3596 | 2024-01-19 | SHPL         | W   | 0.250      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     1.39 | expro, kory, phzy, somebody, Summer |
|            3 |     3655 | 2024-01-18 | Newhappy     | L   | 0.243      | -            | -                | -                | -         |    -5.41 | expro, kory, phzy, somebody, Summer |
|            2 |     3933 | 2024-01-12 | Steel Helmet | L   | 0.198      | -            | -                | -                | -         |    -3.30 | expro, kory, phzy, somebody, Summer |
|            1 |     3936 | 2024-01-12 | SHPL         | W   | 0.198      | 0.143        | 0.000 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     1.05 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,936.61)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
