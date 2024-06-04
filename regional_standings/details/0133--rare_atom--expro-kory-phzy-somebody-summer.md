### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  707.0<br />
<br />
Final Rank Value (707.0) = Starting Rank Value (682.6) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.6
- 400 + ( ( 0.146 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 682.6


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
|           17 |     2110 | 2024-03-06 | Cloud9       | L   | 0.638      | -            | -                | -                | -         |    -0.34 | expro, kory, phzy, somebody, Summer |
|           16 |     2806 | 2024-02-02 | GR           | W   | 0.418      | 0.143        | 0.001 (0.000)    | 0.146 (0.009)    | 0 (0.000) |     5.24 | expro, kory, phzy, somebody, Summer |
|           15 |     2811 | 2024-02-02 | TYLOO        | W   | 0.417      | 0.143        | 0.042 (0.002)    | 0.330 (0.020)    | 0 (0.000) |    10.20 | expro, kory, phzy, somebody, Summer |
|           14 |     2855 | 2024-01-31 | NKT          | W   | 0.404      | 0.143        | 0.005 (0.000)    | 0.057 (0.003)    | 0 (0.000) |     6.63 | expro, kory, phzy, somebody, Summer |
|           13 |     2858 | 2024-01-31 | Lynn Vision  | W   | 0.404      | 0.143        | 0.056 (0.003)    | 0.282 (0.016)    | 0 (0.000) |    11.07 | expro, kory, phzy, somebody, Summer |
|           12 |     2861 | 2024-01-31 | ATOX         | L   | 0.403      | -            | -                | -                | -         |    -3.41 | expro, kory, phzy, somebody, Summer |
|           11 |     2942 | 2024-01-25 | Wings Up     | L   | 0.364      | -            | -                | -                | -         |    -8.25 | expro, kory, phzy, somebody, Summer |
|           10 |     2946 | 2024-01-25 | Newhappy     | W   | 0.363      | 0.143        | 0.001 (0.000)    | 0.112 (0.006)    | 0 (0.000) |     4.98 | expro, kory, phzy, somebody, Summer |
|            9 |     2960 | 2024-01-24 | Eruption     | W   | 0.358      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     2.81 | expro, kory, phzy, somebody, Summer |
|            8 |     3012 | 2024-01-22 | ATOX         | L   | 0.344      | -            | -                | -                | -         |    -2.88 | expro, kory, phzy, somebody, Summer |
|            7 |     3039 | 2024-01-21 | TYLOO        | L   | 0.338      | -            | -                | -                | -         |    -2.44 | expro, kory, phzy, somebody, Summer |
|            6 |     3045 | 2024-01-21 | Newhappy     | W   | 0.336      | 0.143        | 0.001 (0.000)    | 0.112 (0.005)    | 0 (0.000) |     4.79 | expro, kory, phzy, somebody, Summer |
|            5 |     3087 | 2024-01-20 | Wings Up     | W   | 0.330      | 0.143        | 0.000 (0.000)    | 0.058 (0.003)    | 0 (0.000) |     2.90 | expro, kory, phzy, somebody, Summer |
|            4 |     3096 | 2024-01-19 | SHPL         | W   | 0.329      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.89 | expro, kory, phzy, somebody, Summer |
|            3 |     3155 | 2024-01-18 | Newhappy     | L   | 0.322      | -            | -                | -                | -         |    -5.66 | expro, kory, phzy, somebody, Summer |
|            2 |     3433 | 2024-01-12 | Steel Helmet | L   | 0.277      | -            | -                | -                | -         |    -4.63 | expro, kory, phzy, somebody, Summer |
|            1 |     3436 | 2024-01-12 | SHPL         | W   | 0.277      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.51 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,332.47)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
