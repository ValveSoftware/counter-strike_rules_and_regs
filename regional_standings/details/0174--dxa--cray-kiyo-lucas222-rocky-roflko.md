### Roster Details<br />
Team Name: DXA<br />
Roster: cray, Kiyo, lucas222, rocky, Roflko<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  630.7<br />
<br />
Final Rank Value (630.7) = Starting Rank Value (709.7) + Head To Head Adjustments (-78.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.7
- 400 + ( ( 0.155 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 709.7


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
|           32 |      671 | 2024-05-22 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.02 | cray, Kiyo, lucas222, rocky, Roflko    |
|           31 |      676 | 2024-05-22 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.59 | cray, Kiyo, lucas222, rocky, Roflko    |
|           30 |      931 | 2024-05-15 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -14.27 | Kiyo, lucas222, motion, rocky, Roflko  |
|           29 |      935 | 2024-05-15 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -15.58 | Kiyo, lucas222, motion, rocky, Roflko  |
|           28 |     1143 | 2024-05-07 | Arcade             | W   | 0.971      | 0.333        | 0.005 (0.002)    | 0.189 (0.061)    | 0 (0.000) |    16.88 | Kiyo, lucas222, motion, rocky, Roflko  |
|           27 |     1145 | 2024-05-07 | Arcade             | L   | 0.971      | -            | -                | -                | -         |   -13.61 | Kiyo, lucas222, motion, rocky, Roflko  |
|           26 |     1613 | 2024-04-18 | Mindfreak          | L   | 0.844      | -            | -                | -                | -         |    -8.85 | Kiyo, lucas222, motion, rocky, Roflko  |
|           25 |     1652 | 2024-04-17 | Blitz              | W   | 0.837      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.08 | Kiyo, lucas222, motion, rocky, Roflko  |
|           24 |     1811 | 2024-04-10 | Mindfreak          | L   | 0.791      | -            | -                | -                | -         |    -9.02 | Kiyo, lucas222, motion, rocky, Roflko  |
|           23 |     1818 | 2024-04-10 | Mindfreak          | L   | 0.791      | -            | -                | -                | -         |    -9.63 | Kiyo, lucas222, motion, rocky, Roflko  |
|           22 |     2044 | 2024-04-03 | Bad News Kangaroos | L   | 0.744      | -            | -                | -                | -         |    -5.38 | Kiyo, lucas222, motion, rocky, Roflko  |
|           21 |     2048 | 2024-04-03 | Bad News Kangaroos | L   | 0.744      | -            | -                | -                | -         |    -5.64 | Kiyo, lucas222, motion, rocky, Roflko  |
|           20 |     2168 | 2024-03-27 | RKON               | L   | 0.698      | -            | -                | -                | -         |   -15.33 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     2173 | 2024-03-27 | RKON               | W   | 0.698      | 0.333        | 0.000 (0.000)    | 0.088 (0.020)    | 0 (0.000) |     6.60 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     2219 | 2024-03-23 | Bad News Kangaroos | L   | 0.671      | -            | -                | -                | -         |    -5.31 | gump, Kiyo, lucas222, motion, Roflko   |
|           17 |     2221 | 2024-03-23 | KZG                | W   | 0.670      | 0.315        | 0.010 (0.002)    | 0.168 (0.035)    | 1 (0.670) |    10.13 | gump, Kiyo, lucas222, motion, Roflko   |
|           16 |     2440 | 2024-03-13 | Vantage            | W   | 0.605      | 0.333        | 0.003 (0.001)    | 0.201 (0.041)    | 0 (0.000) |     9.35 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     2445 | 2024-03-13 | Vantage            | L   | 0.604      | -            | -                | -                | -         |    -9.91 | Kiyo, lucas222, motion, rocky, Roflko  |
|           14 |     2618 | 2024-03-06 | FlyQuest           | L   | 0.558      | -            | -                | -                | -         |    -0.31 | Kiyo, lucas222, motion, rocky, Roflko  |
|           13 |     2620 | 2024-03-06 | FlyQuest           | L   | 0.558      | -            | -                | -                | -         |    -0.31 | Kiyo, lucas222, motion, rocky, Roflko  |
|           12 |     2921 | 2024-02-21 | Rooster            | L   | 0.464      | -            | -                | -                | -         |    -4.68 | Falcon, Kiyo, lucas222, motion, Roflko |
|           11 |     2926 | 2024-02-21 | Rooster            | L   | 0.464      | -            | -                | -                | -         |    -4.86 | Falcon, Kiyo, lucas222, motion, Roflko |
|           10 |     3073 | 2024-02-15 | Vantage            | L   | 0.425      | -            | -                | -                | -         |   -10.18 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            9 |     3079 | 2024-02-14 | sunday school      | L   | 0.423      | -            | -                | -                | -         |    -7.57 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            8 |     3141 | 2024-02-13 | Arcade             | W   | 0.411      | 0.143        | 0.005 (0.000)    | 0.189 (0.011)    | 0 (0.000) |     6.07 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            7 |     3145 | 2024-02-13 | Underground        | W   | 0.410      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.04 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            6 |     3466 | 2024-01-24 | Mindfreak          | L   | 0.277      | -            | -                | -                | -         |    -6.07 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            5 |     3807 | 2024-01-16 | sunday school      | L   | 0.224      | -            | -                | -                | -         |    -5.46 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            4 |     3835 | 2024-01-15 | Vantage            | W   | 0.217      | 0.143        | 0.003 (0.000)    | 0.201 (0.006)    | 0 (0.000) |     3.13 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            3 |     3896 | 2024-01-13 | iM Apartments      | W   | 0.204      | -            | -                | -                | -         |     0.97 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            2 |     3898 | 2024-01-13 | RKON               | L   | 0.204      | -            | -                | -                | -         |    -4.78 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            1 |     3900 | 2024-01-13 | Blitz              | W   | 0.203      | -            | -                | -                | -         |     0.96 | Falcon, helix, Kiyo, lucas222, Roflko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,409.82)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $300.00        | $300.00         |
| 2024-03-23 |      0.671 | $1,654.00      | $1,109.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
