### Roster Details<br />
Team Name: Newhappy<br />
Roster: AhaNg, jiejie, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  714.6<br />
<br />
Final Rank Value (714.6) = Starting Rank Value (686.4) + Head To Head Adjustments (28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.4
- 400 + ( ( 0.150 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 686.4


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
|           23 |     1864 | 2024-02-17 | Lynn Vision        | W   | 0.672      | 0.143        | 0.135 (0.013)    | 0.390 (0.037)    | 0 (0.000) |    19.34 | AhaNg, jiejie, rage, SPine, Tiger |
|           22 |     1868 | 2024-02-17 | MAG                | W   | 0.671      | 0.143        | -                | 0.193 (0.018)    | 0 (0.000) |     6.78 | AhaNg, jiejie, rage, SPine, Tiger |
|           21 |     1893 | 2024-02-16 | Lynn Vision        | L   | 0.665      | -            | -                | -                | -         |    -1.65 | AhaNg, jiejie, karl, rage, SPine  |
|           20 |     1899 | 2024-02-16 | GR                 | W   | 0.664      | 0.143        | 0.005 (0.000)    | 0.217 (0.021)    | 0 (0.000) |    10.07 | AhaNg, jiejie, karl, rage, SPine  |
|           19 |     2186 | 2024-02-01 | GR                 | L   | 0.565      | -            | -                | -                | -         |    -9.90 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           18 |     2190 | 2024-02-01 | TYLOO              | L   | 0.564      | -            | -                | -                | -         |    -2.69 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           17 |     2191 | 2024-02-01 | Steel Helmet       | W   | 0.564      | 0.143        | 0.025 (0.002)    | 0.104 (0.008)    | 0 (0.000) |     8.81 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           16 |     2295 | 2024-01-25 | Rare Atom          | L   | 0.518      | -            | -                | -                | -         |    -7.51 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           15 |     2308 | 2024-01-24 | Noobs But Diligent | W   | 0.512      | -            | -                | -                | 0 (0.000) |     2.65 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           14 |     2360 | 2024-01-22 | Eruption           | L   | 0.498      | -            | -                | -                | -         |   -11.88 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           13 |     2394 | 2024-01-21 | Rare Atom          | L   | 0.490      | -            | -                | -                | -         |    -7.51 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           12 |     2442 | 2024-01-20 | Steel Helmet       | W   | 0.484      | 0.143        | 0.025 (0.002)    | 0.104 (0.007)    | 0 (0.000) |     7.33 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           11 |     2495 | 2024-01-19 | TYLOO              | L   | 0.477      | -            | -                | -                | -         |    -2.63 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|           10 |     2504 | 2024-01-18 | Rare Atom          | W   | 0.476      | 0.143        | 0.025 (0.002)    | 0.189 (0.013)    | 0 (0.000) |     7.80 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            9 |     3133 | 2023-12-08 | TheMongolz         | L   | 0.198      | -            | -                | -                | -         |    -0.10 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            8 |     3164 | 2023-12-07 | -72c               | W   | 0.192      | 0.416        | 0.003 (0.000)    | 0.053 (0.004)    | 0 (0.000) |     2.48 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            7 |     3190 | 2023-12-06 | TYLOO              | L   | 0.186      | -            | -                | -                | -         |    -1.01 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            6 |     3222 | 2023-12-05 | TheMongolz         | W   | 0.178      | 0.416        | 0.253 (0.019)    | 0.595 (0.044)    | 0 (0.000) |     5.54 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            5 |     3508 | 2023-11-18 | TYLOO              | L   | 0.064      | -            | -                | -                | -         |    -0.34 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            4 |     3529 | 2023-11-17 | ATOX               | W   | 0.059      | 0.143        | 0.005 (0.000)    | 0.258 (0.002)    | 0 (0.000) |     1.11 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            3 |     3542 | 2023-11-17 | TheMongolz         | L   | 0.057      | -            | -                | -                | -         |    -0.03 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            2 |     3568 | 2023-11-16 | The Huns           | W   | 0.052      | 0.143        | 0.001 (0.000)    | 0.184 (0.001)    | -         |     0.71 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            1 |     3581 | 2023-11-16 | LYG                | W   | 0.051      | 0.143        | 0.004 (0.000)    | -                | -         |     0.81 | 2x2x, AhaNg, SPine, Tiger, tutu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($637.12)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
