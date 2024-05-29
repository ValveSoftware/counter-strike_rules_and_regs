### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, yourwombat<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  899.9<br />
<br />
Final Rank Value (899.9) = Starting Rank Value (878.9) + Head To Head Adjustments (21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.400[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.239[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 878.9
- 400 + ( ( 0.247 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 878.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      172 | 2024-05-22 | KZG           | W   | 1.000      | 0.333        | 0.011 (0.004)    | 0.199 (0.066)    | 0 (0.000) |     5.67 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           37 |      177 | 2024-05-22 | KZG           | W   | 1.000      | 0.333        | 0.011 (0.004)    | 0.199 (0.066)    | 0 (0.000) |     5.97 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           36 |      433 | 2024-05-15 | Arcade        | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.229 (0.076)    | 0 (0.000) |     5.58 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           35 |      436 | 2024-05-15 | Arcade        | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.229 (0.076)    | 0 (0.000) |     5.88 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           34 |      708 | 2024-05-03 | FURIA         | L   | 1.000      | -            | -                | -                | -         |    -2.77 | ADDICT, BRACE, damyo, hazr, pz         |
|           33 |      753 | 2024-05-01 | ENCE          | L   | 1.000      | -            | -                | -                | -         |    -2.78 | ADDICT, BRACE, damyo, hazr, pz         |
|           32 |      786 | 2024-04-30 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -0.08 | ADDICT, BRACE, damyo, hazr, pz         |
|           31 |     1008 | 2024-04-20 | FlyQuest      | L   | 0.937      | -            | -                | -                | -         |    -1.47 | ADDICT, BRACE, damyo, hazr, pz         |
|           30 |     1012 | 2024-04-20 | Rooster       | W   | 0.936      | 0.143        | 0.013 (0.002)    | -                | 0 (0.000) |    13.54 | ADDICT, BRACE, damyo, hazr, pz         |
|           29 |     1057 | 2024-04-19 | Mindfreak     | W   | 0.930      | -            | -                | -                | 0 (0.000) |     7.26 | ADDICT, BRACE, damyo, hazr, pz         |
|           28 |     1060 | 2024-04-19 | Rooster       | L   | 0.930      | -            | -                | -                | -         |   -15.66 | ADDICT, BRACE, damyo, hazr, pz         |
|           27 |     1309 | 2024-04-10 | Rooster       | W   | 0.870      | 0.333        | 0.013 (0.004)    | 0.293 (0.085)    | 0 (0.000) |    12.33 | ADDICT, BRACE, damyo, hazr, pz         |
|           26 |     1319 | 2024-04-10 | Rooster       | L   | 0.870      | -            | -                | -                | -         |   -15.32 | ADDICT, BRACE, damyo, hazr, pz         |
|           25 |     1544 | 2024-04-03 | DXA           | W   | 0.823      | 0.333        | 0.005 (0.001)    | 0.244 (0.067)    | -         |     5.72 | ADDICT, BRACE, damyo, hazr, pz         |
|           24 |     1548 | 2024-04-03 | DXA           | W   | 0.823      | 0.333        | 0.005 (0.001)    | 0.244 (0.067)    | -         |     6.02 | ADDICT, BRACE, damyo, hazr, pz         |
|           23 |     1669 | 2024-03-27 | Mindfreak     | L   | 0.777      | -            | -                | -                | -         |   -20.51 | ADDICT, BRACE, damyo, hazr, pz         |
|           22 |     1676 | 2024-03-27 | Mindfreak     | W   | 0.777      | 0.333        | -                | 0.287 (0.074)    | -         |     3.77 | ADDICT, BRACE, damyo, hazr, pz         |
|           21 |     1719 | 2024-03-23 | DXA           | W   | 0.750      | 0.315        | -                | 0.244 (0.058)    | 1 (0.750) |     5.60 | ADDICT, BRACE, damyo, hazr, pz         |
|           20 |     1722 | 2024-03-23 | Arcade        | W   | 0.750      | 0.315        | -                | 0.229 (0.054)    | 1 (0.750) |     6.61 | ADDICT, BRACE, damyo, hazr, pz         |
|           19 |     1780 | 2024-03-20 | Canon Event   | W   | 0.729      | -            | -                | -                | -         |     2.33 | ADDICT, BRACE, damyo, hazr, pz         |
|           18 |     1781 | 2024-03-20 | Canon Event   | W   | 0.729      | -            | -                | -                | -         |     2.38 | ADDICT, BRACE, damyo, hazr, pz         |
|           17 |     1851 | 2024-03-16 | Gods Reign    | L   | 0.703      | -            | -                | -                | -         |   -11.67 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           16 |     1872 | 2024-03-15 | GRDX          | W   | 0.696      | 0.432        | 0.006 (0.002)    | -                | 1 (0.696) |     2.93 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           15 |     1905 | 2024-03-14 | Aurora        | L   | 0.690      | -            | -                | -                | -         |    -1.07 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           14 |     2117 | 2024-03-06 | Vantage       | W   | 0.637      | -            | -                | -                | -         |     2.78 | ADDICT, BRACE, damyo, hazr, pz         |
|           13 |     2119 | 2024-03-06 | Vantage       | W   | 0.637      | -            | -                | -                | -         |     2.86 | ADDICT, BRACE, damyo, hazr, pz         |
|           12 |     2373 | 2024-02-22 | Rooster       | L   | 0.556      | -            | -                | -                | -         |   -10.83 | ADDICT, BRACE, Hatz, hazr, pz          |
|           11 |     2392 | 2024-02-22 | Vantage       | W   | 0.550      | -            | -                | -                | -         |     2.42 | ADDICT, BRACE, Hatz, hazr, pz          |
|           10 |     2394 | 2024-02-21 | FlyQuest      | L   | 0.549      | -            | -                | -                | -         |    -0.87 | ADDICT, BRACE, Hatz, hazr, pz          |
|            9 |     2419 | 2024-02-21 | FlyQuest      | L   | 0.544      | -            | -                | -                | -         |    -0.87 | ADDICT, BRACE, Hatz, hazr, pz          |
|            8 |     2423 | 2024-02-21 | FlyQuest      | L   | 0.543      | -            | -                | -                | -         |    -0.88 | ADDICT, BRACE, Hatz, hazr, pz          |
|            7 |     3013 | 2024-01-22 | Rooster       | L   | 0.344      | -            | -                | -                | -         |    -6.96 | ADDICT, BRACE, Hatz, hazr, pz          |
|            6 |     3017 | 2024-01-22 | FlyQuest      | L   | 0.343      | -            | -                | -                | -         |    -0.58 | ADDICT, BRACE, Hatz, hazr, pz          |
|            5 |     3042 | 2024-01-21 | FlyQuest      | L   | 0.337      | -            | -                | -                | -         |    -0.58 | ADDICT, BRACE, Hatz, hazr, pz          |
|            4 |     3052 | 2024-01-20 | Rooster       | W   | 0.335      | -            | -                | -                | -         |     3.94 | ADDICT, BRACE, Hatz, hazr, pz          |
|            3 |     3148 | 2024-01-19 | FlyQuest      | W   | 0.323      | 0.143        | 0.114 (0.005)    | -                | -         |     9.67 | ADDICT, BRACE, Hatz, hazr, pz          |
|            2 |     3154 | 2024-01-18 | DXA           | W   | 0.322      | -            | -                | -                | -         |     0.65 | ADDICT, BRACE, Hatz, hazr, pz          |
|            1 |     3913 | 2023-12-02 | Zero Tenacity | L   | 0.006      | -            | -                | -                | -         |    -0.05 | ADDICT, BRACE, hazr, pz, Valiance      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,502.29)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-03-23 |      0.750 | $3,308.00      | $2,481.54       |
| 2024-03-16 |      0.704 | $5,000.00      | $3,520.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
