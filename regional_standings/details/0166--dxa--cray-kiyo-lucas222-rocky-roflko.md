### Roster Details<br />
Team Name: DXA<br />
Roster: cray, Kiyo, lucas222, rocky, Roflko<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  606.0<br />
<br />
Final Rank Value (606.0) = Starting Rank Value (711.5) + Head To Head Adjustments (-105.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.5
- 400 + ( ( 0.160 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 711.5


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
|           32 |      171 | 2024-05-22 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.11 | cray, Kiyo, lucas222, rocky, Roflko    |
|           31 |      176 | 2024-05-22 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.69 | cray, Kiyo, lucas222, rocky, Roflko    |
|           30 |      431 | 2024-05-15 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -14.36 | Kiyo, lucas222, motion, rocky, Roflko  |
|           29 |      435 | 2024-05-15 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -15.69 | Kiyo, lucas222, motion, rocky, Roflko  |
|           28 |      643 | 2024-05-07 | Arcade             | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.229 (0.076)    | 0 (0.000) |    17.68 | Kiyo, lucas222, motion, rocky, Roflko  |
|           27 |      645 | 2024-05-07 | Arcade             | L   | 1.000      | -            | -                | -                | -         |   -13.64 | Kiyo, lucas222, motion, rocky, Roflko  |
|           26 |     1113 | 2024-04-18 | Mindfreak          | L   | 0.923      | -            | -                | -                | -         |   -12.80 | Kiyo, lucas222, motion, rocky, Roflko  |
|           25 |     1152 | 2024-04-17 | Blitz              | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.01 | Kiyo, lucas222, motion, rocky, Roflko  |
|           24 |     1311 | 2024-04-10 | Mindfreak          | L   | 0.870      | -            | -                | -                | -         |   -13.38 | Kiyo, lucas222, motion, rocky, Roflko  |
|           23 |     1318 | 2024-04-10 | Mindfreak          | L   | 0.870      | -            | -                | -                | -         |   -14.45 | Kiyo, lucas222, motion, rocky, Roflko  |
|           22 |     1544 | 2024-04-03 | Bad News Kangaroos | L   | 0.823      | -            | -                | -                | -         |    -5.72 | Kiyo, lucas222, motion, rocky, Roflko  |
|           21 |     1548 | 2024-04-03 | Bad News Kangaroos | L   | 0.823      | -            | -                | -                | -         |    -6.02 | Kiyo, lucas222, motion, rocky, Roflko  |
|           20 |     1668 | 2024-03-27 | RKON               | L   | 0.777      | -            | -                | -                | -         |   -16.90 | Kiyo, lucas222, motion, rocky, Roflko  |
|           19 |     1673 | 2024-03-27 | RKON               | W   | 0.777      | 0.333        | 0.000 (0.000)    | 0.107 (0.028)    | 0 (0.000) |     7.46 | Kiyo, lucas222, motion, rocky, Roflko  |
|           18 |     1719 | 2024-03-23 | Bad News Kangaroos | L   | 0.750      | -            | -                | -                | -         |    -5.60 | gump, Kiyo, lucas222, motion, Roflko   |
|           17 |     1721 | 2024-03-23 | KZG                | W   | 0.750      | 0.315        | 0.011 (0.002)    | 0.199 (0.047)    | 1 (0.750) |    11.13 | gump, Kiyo, lucas222, motion, Roflko   |
|           16 |     1940 | 2024-03-13 | Vantage            | W   | 0.684      | 0.333        | 0.000 (0.000)    | 0.247 (0.056)    | 0 (0.000) |     7.85 | Kiyo, lucas222, motion, rocky, Roflko  |
|           15 |     1945 | 2024-03-13 | Vantage            | L   | 0.683      | -            | -                | -                | -         |   -14.04 | Kiyo, lucas222, motion, rocky, Roflko  |
|           14 |     2118 | 2024-03-06 | FlyQuest           | L   | 0.637      | -            | -                | -                | -         |    -0.36 | Kiyo, lucas222, motion, rocky, Roflko  |
|           13 |     2120 | 2024-03-06 | FlyQuest           | L   | 0.637      | -            | -                | -                | -         |    -0.36 | Kiyo, lucas222, motion, rocky, Roflko  |
|           12 |     2421 | 2024-02-21 | Rooster            | L   | 0.544      | -            | -                | -                | -         |    -6.05 | Falcon, Kiyo, lucas222, motion, Roflko |
|           11 |     2426 | 2024-02-21 | Rooster            | L   | 0.543      | -            | -                | -                | -         |    -6.32 | Falcon, Kiyo, lucas222, motion, Roflko |
|           10 |     2573 | 2024-02-15 | Vantage            | L   | 0.504      | -            | -                | -                | -         |   -11.21 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            9 |     2579 | 2024-02-14 | sunday school      | L   | 0.502      | -            | -                | -                | -         |    -8.95 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            8 |     2641 | 2024-02-13 | Arcade             | W   | 0.491      | 0.143        | 0.006 (0.000)    | 0.229 (0.016)    | 0 (0.000) |     7.24 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            7 |     2645 | 2024-02-13 | Underground        | W   | 0.490      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.46 | HUGH, Kiyo, lucas222, motion, Roflko   |
|            6 |     2966 | 2024-01-24 | Mindfreak          | L   | 0.356      | -            | -                | -                | -         |    -7.64 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            5 |     3307 | 2024-01-16 | sunday school      | L   | 0.303      | -            | -                | -                | -         |    -7.37 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            4 |     3335 | 2024-01-15 | Vantage            | W   | 0.297      | 0.143        | 0.000 (0.000)    | 0.247 (0.010)    | 0 (0.000) |     2.64 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            3 |     3396 | 2024-01-13 | iM Apartments      | W   | 0.283      | -            | -                | -                | -         |     1.34 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            2 |     3398 | 2024-01-13 | RKON               | L   | 0.283      | -            | -                | -                | -         |    -6.65 | Falcon, helix, Kiyo, lucas222, Roflko  |
|            1 |     3400 | 2024-01-13 | Blitz              | W   | 0.283      | -            | -                | -                | -         |     1.32 | Falcon, helix, Kiyo, lucas222, Roflko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,540.77)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $300.00        | $300.00         |
| 2024-03-23 |      0.750 | $1,654.00      | $1,240.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
