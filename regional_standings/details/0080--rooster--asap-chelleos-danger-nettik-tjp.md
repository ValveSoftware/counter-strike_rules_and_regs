### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  941.0<br />
<br />
Final Rank Value (941.0) = Starting Rank Value (828.3) + Head To Head Adjustments (112.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.3
- 400 + ( ( 0.215 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 828.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       84 | 2024-06-09 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.28 | asap, chelleos, dangeR, nettik, TjP |
|           42 |      192 | 2024-06-07 | FlyQuest           | W   | 1.000      | 0.333        | 0.121 (0.040)    | 0.556 (0.185)    | 0 (0.000) |    29.53 | asap, chelleos, dangeR, nettik, TjP |
|           41 |      266 | 2024-06-06 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.033 (0.011)    | 0.262 (0.087)    | 0 (0.000) |    15.77 | asap, chelleos, dangeR, nettik, TjP |
|           40 |      674 | 2024-05-22 | Vantage            | W   | 1.000      | 0.333        | -                | 0.201 (0.067)    | 0 (0.000) |     6.93 | asap, chelleos, dangeR, nettik, TjP |
|           39 |      678 | 2024-05-22 | Vantage            | W   | 1.000      | 0.333        | -                | 0.201 (0.067)    | 0 (0.000) |     7.37 | asap, chelleos, dangeR, nettik, TjP |
|           38 |      934 | 2024-05-15 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.56 | asap, chelleos, dangeR, nettik, TjP |
|           37 |      937 | 2024-05-15 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.63 | asap, chelleos, dangeR, nettik, TjP |
|           36 |     1124 | 2024-05-08 | KZG                | W   | 0.978      | 0.333        | 0.010 (0.003)    | 0.168 (0.055)    | 0 (0.000) |     6.38 | asap, chelleos, dangeR, nettik, TjP |
|           35 |     1126 | 2024-05-08 | KZG                | W   | 0.977      | 0.333        | 0.010 (0.003)    | 0.168 (0.055)    | 0 (0.000) |     6.75 | asap, chelleos, dangeR, nettik, TjP |
|           34 |     1357 | 2024-04-27 | MIBR               | L   | 0.903      | -            | -                | -                | -         |    -0.54 | asap, chelleos, dangeR, nettik, TjP |
|           33 |     1378 | 2024-04-26 | KZG                | W   | 0.898      | 0.500        | 0.010 (0.004)    | 0.168 (0.075)    | 1 (0.898) |     6.57 | asap, chelleos, dangeR, nettik, TjP |
|           32 |     1381 | 2024-04-25 | Rebels             | L   | 0.896      | -            | -                | -                | -         |    -6.67 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1512 | 2024-04-20 | Bad News Kangaroos | L   | 0.857      | -            | -                | -                | -         |   -13.00 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1554 | 2024-04-19 | FlyQuest           | L   | 0.851      | -            | -                | -                | -         |    -1.28 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1560 | 2024-04-19 | Bad News Kangaroos | W   | 0.850      | 0.143        | 0.033 (0.004)    | -                | 0 (0.000) |    13.65 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1635 | 2024-04-17 | Arcade             | W   | 0.838      | -            | -                | -                | -         |     6.72 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1650 | 2024-04-17 | Canon Event        | W   | 0.838      | -            | -                | -                | -         |     2.49 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     1809 | 2024-04-10 | Bad News Kangaroos | L   | 0.791      | -            | -                | -                | -         |   -12.00 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     1819 | 2024-04-10 | Bad News Kangaroos | W   | 0.791      | 0.333        | 0.033 (0.009)    | 0.262 (0.069)    | -         |    13.13 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     2172 | 2024-03-27 | Arcade             | W   | 0.698      | 0.333        | 0.005 (0.001)    | -                | -         |     6.22 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     2175 | 2024-03-27 | Arcade             | W   | 0.698      | -            | -                | -                | -         |     6.55 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     2442 | 2024-03-13 | FlyQuest           | L   | 0.604      | -            | -                | -                | -         |    -0.83 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     2450 | 2024-03-13 | FlyQuest           | L   | 0.604      | -            | -                | -                | -         |    -0.83 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2616 | 2024-03-06 | Mindfreak          | W   | 0.558      | 0.333        | -                | 0.260 (0.048)    | -         |     6.01 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2623 | 2024-03-06 | Mindfreak          | W   | 0.558      | 0.333        | -                | 0.260 (0.048)    | -         |     6.28 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     2871 | 2024-02-23 | FlyQuest           | L   | 0.478      | -            | -                | -                | -         |    -0.59 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     2873 | 2024-02-22 | Bad News Kangaroos | W   | 0.477      | 0.143        | 0.033 (0.002)    | -                | -         |     8.53 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     2891 | 2024-02-22 | FlyQuest           | L   | 0.471      | -            | -                | -                | -         |    -0.56 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     2893 | 2024-02-21 | Vantage            | W   | 0.470      | -            | -                | -                | -         |     4.59 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     2921 | 2024-02-21 | DXA                | W   | 0.464      | -            | -                | -                | -         |     4.68 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     2926 | 2024-02-21 | DXA                | W   | 0.464      | -            | -                | -                | -         |     4.86 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     3329 | 2024-02-01 | M80                | L   | 0.333      | -            | -                | -                | -         |    -0.66 | asap, chelleos, nettik, Rackem, TjP |
|           11 |     3346 | 2024-01-31 | Virtus.pro         | L   | 0.327      | -            | -                | -                | -         |    -0.07 | asap, chelleos, nettik, Rackem, TjP |
|           10 |     3434 | 2024-01-26 | Bad News Kangaroos | L   | 0.291      | -            | -                | -                | -         |    -7.77 | asap, chelleos, nettik, Rackem, TjP |
|            9 |     3449 | 2024-01-25 | Mindfreak          | W   | 0.284      | -            | -                | -                | -         |     1.72 | asap, chelleos, nettik, Rackem, TjP |
|            8 |     3464 | 2024-01-24 | Blitz              | W   | 0.277      | -            | -                | -                | -         |     0.76 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     3488 | 2024-01-23 | Mindfreak          | L   | 0.270      | -            | -                | -                | -         |    -7.00 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3513 | 2024-01-22 | Bad News Kangaroos | W   | 0.265      | 0.143        | 0.033 (0.001)    | -                | -         |     4.87 | asap, chelleos, nettik, Rackem, TjP |
|            5 |     3516 | 2024-01-22 | Mindfreak          | L   | 0.264      | -            | -                | -                | -         |    -6.89 | asap, chelleos, nettik, Rackem, TjP |
|            4 |     3547 | 2024-01-20 | FlyQuest           | L   | 0.257      | -            | -                | -                | -         |    -0.31 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     3552 | 2024-01-20 | Bad News Kangaroos | L   | 0.256      | -            | -                | -                | -         |    -3.47 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     3649 | 2024-01-19 | Mindfreak          | W   | 0.244      | -            | -                | -                | -         |     1.28 | asap, jhd, nettik, Rackem, TjP      |
|            1 |     3657 | 2024-01-18 | iM Apartments      | W   | 0.243      | -            | -                | -                | -         |     0.62 | asap, jhd, nettik, Rackem, TjP      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,584.96)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-28 |      0.911 | $3,000.00      | $2,732.92       |
| 2024-02-02 |      0.341 | $2,500.00      | $852.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
