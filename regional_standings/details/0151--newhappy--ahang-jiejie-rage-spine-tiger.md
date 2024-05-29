### Roster Details<br />
Team Name: Newhappy<br />
Roster: AhaNg, jiejie, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  655.1<br />
<br />
Final Rank Value (655.1) = Starting Rank Value (635.5) + Head To Head Adjustments (19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 635.5
- 400 + ( ( 0.121 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 635.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2515 | 2024-02-17 | Lynn Vision        | W   | 0.518      | 0.143        | 0.056 (0.004)    | 0.282 (0.021)    | 0 (0.000) |    14.41 | AhaNg, jiejie, rage, SPine, Tiger |
|           17 |     2519 | 2024-02-17 | MAG                | W   | 0.517      | 0.143        | 0.000 (0.000)    | 0.129 (0.010)    | 0 (0.000) |     5.79 | AhaNg, jiejie, rage, SPine, Tiger |
|           16 |     2544 | 2024-02-16 | Lynn Vision        | L   | 0.511      | -            | -                | -                | -         |    -1.78 | AhaNg, jiejie, karl, rage, SPine  |
|           15 |     2550 | 2024-02-16 | GR                 | W   | 0.510      | 0.143        | 0.001 (0.000)    | 0.146 (0.011)    | 0 (0.000) |     8.12 | AhaNg, jiejie, karl, rage, SPine  |
|           14 |     2837 | 2024-02-01 | GR                 | L   | 0.411      | -            | -                | -                | -         |    -6.82 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           13 |     2841 | 2024-02-01 | TYLOO              | L   | 0.410      | -            | -                | -                | -         |    -2.23 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           12 |     2842 | 2024-02-01 | Steel Helmet       | W   | 0.410      | 0.143        | 0.012 (0.001)    | 0.065 (0.004)    | 0 (0.000) |     6.88 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           11 |     2946 | 2024-01-25 | Rare Atom          | L   | 0.363      | -            | -                | -                | -         |    -4.98 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           10 |     2959 | 2024-01-24 | Noobs But Diligent | W   | 0.358      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.39 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            9 |     3011 | 2024-01-22 | Eruption           | L   | 0.344      | -            | -                | -                | -         |    -7.71 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            8 |     3045 | 2024-01-21 | Rare Atom          | L   | 0.336      | -            | -                | -                | -         |    -4.79 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            7 |     3093 | 2024-01-20 | Steel Helmet       | W   | 0.330      | 0.143        | 0.012 (0.001)    | 0.065 (0.003)    | 0 (0.000) |     5.47 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            6 |     3146 | 2024-01-19 | TYLOO              | L   | 0.323      | -            | -                | -                | -         |    -1.93 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            5 |     3155 | 2024-01-18 | Rare Atom          | W   | 0.322      | 0.143        | 0.011 (0.001)    | 0.125 (0.006)    | 0 (0.000) |     5.66 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            4 |     3784 | 2023-12-08 | TheMongolz         | L   | 0.044      | -            | -                | -                | -         |    -0.01 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            3 |     3815 | 2023-12-07 | -72c               | W   | 0.038      | 0.416        | 0.000 (0.000)    | 0.031 (0.000)    | 0 (0.000) |     0.50 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            2 |     3841 | 2023-12-06 | TYLOO              | L   | 0.032      | -            | -                | -                | -         |    -0.18 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            1 |     3873 | 2023-12-05 | TheMongolz         | W   | 0.024      | 0.416        | 0.176 (0.002)    | 0.583 (0.006)    | 0 (0.000) |     0.76 | 2x2x, AhaNg, SPine, Tiger, tutu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($174.84)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
