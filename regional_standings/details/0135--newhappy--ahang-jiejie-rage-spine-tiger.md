### Roster Details<br />
Team Name: Newhappy<br />
Roster: AhaNg, jiejie, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  734.2<br />
<br />
Final Rank Value (734.2) = Starting Rank Value (702.9) + Head To Head Adjustments (31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 702.9


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
|           23 |     1568 | 2024-02-17 | Lynn Vision        | W   | 0.765      | 0.143        | 0.136 (0.015)    | 0.458 (0.050)    | 0 (0.000) |    22.04 | AhaNg, jiejie, rage, SPine, Tiger |
|           22 |     1572 | 2024-02-17 | MAG                | W   | 0.764      | 0.143        | 0.000 (0.000)    | 0.237 (0.026)    | 0 (0.000) |     7.61 | AhaNg, jiejie, rage, SPine, Tiger |
|           21 |     1597 | 2024-02-16 | Lynn Vision        | L   | 0.759      | -            | -                | -                | -         |    -1.83 | AhaNg, jiejie, karl, rage, SPine  |
|           20 |     1603 | 2024-02-16 | GR                 | W   | 0.758      | 0.143        | 0.005 (0.001)    | 0.267 (0.029)    | 0 (0.000) |    11.26 | AhaNg, jiejie, karl, rage, SPine  |
|           19 |     1890 | 2024-02-01 | GR                 | L   | 0.658      | -            | -                | -                | -         |   -11.73 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           18 |     1894 | 2024-02-01 | TYLOO              | L   | 0.658      | -            | -                | -                | -         |    -4.51 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           17 |     1895 | 2024-02-01 | Steel Helmet       | W   | 0.657      | 0.143        | 0.021 (0.002)    | 0.131 (0.012)    | 0 (0.000) |     9.80 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           16 |     1999 | 2024-01-25 | Rare Atom          | L   | 0.611      | -            | -                | -                | -         |    -9.14 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           15 |     2012 | 2024-01-24 | Noobs But Diligent | W   | 0.605      | -            | -                | -                | 0 (0.000) |     2.86 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           14 |     2064 | 2024-01-22 | Eruption           | L   | 0.592      | -            | -                | -                | -         |   -12.37 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           13 |     2098 | 2024-01-21 | Rare Atom          | L   | 0.584      | -            | -                | -                | -         |    -9.30 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           12 |     2146 | 2024-01-20 | Steel Helmet       | W   | 0.577      | 0.143        | 0.021 (0.002)    | 0.131 (0.011)    | 0 (0.000) |     8.28 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           11 |     2199 | 2024-01-19 | TYLOO              | L   | 0.570      | -            | -                | -                | -         |    -4.82 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           10 |     2208 | 2024-01-18 | Rare Atom          | W   | 0.570      | 0.143        | 0.024 (0.002)    | 0.233 (0.019)    | 0 (0.000) |     8.87 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            9 |     2837 | 2023-12-08 | TheMongolz         | L   | 0.292      | -            | -                | -                | -         |    -0.29 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            8 |     2868 | 2023-12-07 | -72c               | W   | 0.285      | 0.416        | 0.003 (0.000)    | 0.069 (0.008)    | 0 (0.000) |     3.62 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            7 |     2894 | 2023-12-06 | TYLOO              | L   | 0.279      | -            | -                | -                | -         |    -2.38 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            6 |     2926 | 2023-12-05 | TheMongolz         | W   | 0.272      | 0.416        | 0.247 (0.028)    | 0.587 (0.066)    | 0 (0.000) |     8.31 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            5 |     3212 | 2023-11-18 | TYLOO              | L   | 0.157      | -            | -                | -                | -         |    -1.30 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            4 |     3233 | 2023-11-17 | ATOX               | W   | 0.152      | 0.143        | 0.007 (0.000)    | 0.329 (0.007)    | 0 (0.000) |     2.93 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            3 |     3246 | 2023-11-17 | TheMongolz         | L   | 0.150      | -            | -                | -                | -         |    -0.14 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            2 |     3272 | 2023-11-16 | The Huns           | W   | 0.145      | 0.143        | -                | 0.232 (0.005)    | -         |     1.24 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            1 |     3285 | 2023-11-16 | LYG                | W   | 0.144      | 0.143        | 0.004 (0.000)    | -                | -         |     2.21 | 2x2x, AhaNg, SPine, Tiger, tutu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($917.04)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
