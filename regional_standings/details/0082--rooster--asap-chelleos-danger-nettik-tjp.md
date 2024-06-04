### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  869.2<br />
<br />
Final Rank Value (869.2) = Starting Rank Value (795.1) + Head To Head Adjustments (74.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.1
- 400 + ( ( 0.204 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 795.1


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
|           40 |      174 | 2024-05-22 | Vantage            | W   | 1.000      | 0.333        | -                | 0.247 (0.082)    | 0 (0.000) |     5.48 | asap, chelleos, dangeR, nettik, TjP |
|           39 |      178 | 2024-05-22 | Vantage            | W   | 1.000      | 0.333        | -                | 0.247 (0.082)    | 0 (0.000) |     5.77 | asap, chelleos, dangeR, nettik, TjP |
|           38 |      434 | 2024-05-15 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.61 | asap, chelleos, dangeR, nettik, TjP |
|           37 |      437 | 2024-05-15 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.68 | asap, chelleos, dangeR, nettik, TjP |
|           36 |      624 | 2024-05-08 | KZG                | W   | 1.000      | 0.333        | 0.011 (0.004)    | 0.199 (0.066)    | 0 (0.000) |     6.48 | asap, chelleos, dangeR, nettik, TjP |
|           35 |      626 | 2024-05-08 | KZG                | W   | 1.000      | 0.333        | 0.011 (0.004)    | 0.199 (0.066)    | 0 (0.000) |     6.87 | asap, chelleos, dangeR, nettik, TjP |
|           34 |      857 | 2024-04-27 | MIBR               | L   | 0.982      | -            | -                | -                | -         |    -0.53 | asap, chelleos, dangeR, nettik, TjP |
|           33 |      878 | 2024-04-26 | KZG                | W   | 0.977      | 0.500        | 0.011 (0.005)    | 0.199 (0.097)    | 1 (0.977) |     7.12 | asap, chelleos, dangeR, nettik, TjP |
|           32 |      881 | 2024-04-25 | Rebels             | L   | 0.975      | -            | -                | -                | -         |    -7.65 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1012 | 2024-04-20 | Bad News Kangaroos | L   | 0.936      | -            | -                | -                | -         |   -13.54 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1054 | 2024-04-19 | FlyQuest           | L   | 0.931      | -            | -                | -                | -         |    -1.26 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1060 | 2024-04-19 | Bad News Kangaroos | W   | 0.930      | 0.143        | 0.032 (0.004)    | -                | 0 (0.000) |    15.66 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1135 | 2024-04-17 | Arcade             | W   | 0.917      | -            | -                | -                | 0 (0.000) |     7.67 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1150 | 2024-04-17 | Canon Event        | W   | 0.917      | -            | -                | -                | 0 (0.000) |     2.81 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     1309 | 2024-04-10 | Bad News Kangaroos | L   | 0.870      | -            | -                | -                | -         |   -12.33 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     1319 | 2024-04-10 | Bad News Kangaroos | W   | 0.870      | 0.333        | 0.032 (0.009)    | 0.306 (0.089)    | -         |    15.32 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     1672 | 2024-03-27 | Arcade             | W   | 0.777      | 0.333        | 0.006 (0.002)    | 0.229 (0.059)    | -         |     7.62 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     1675 | 2024-03-27 | Arcade             | W   | 0.777      | 0.333        | 0.006 (0.002)    | 0.229 (0.059)    | -         |     8.09 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     1942 | 2024-03-13 | FlyQuest           | L   | 0.684      | -            | -                | -                | -         |    -0.82 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     1950 | 2024-03-13 | FlyQuest           | L   | 0.683      | -            | -                | -                | -         |    -0.82 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2116 | 2024-03-06 | Mindfreak          | W   | 0.637      | 0.333        | -                | 0.287 (0.061)    | -         |     4.52 | asap, chelleos, dangeR, nettik, TjP |
|           19 |     2123 | 2024-03-06 | Mindfreak          | W   | 0.637      | 0.333        | -                | 0.287 (0.061)    | -         |     4.71 | asap, chelleos, dangeR, nettik, TjP |
|           18 |     2371 | 2024-02-23 | FlyQuest           | L   | 0.557      | -            | -                | -                | -         |    -0.57 | asap, chelleos, dangeR, nettik, TjP |
|           17 |     2373 | 2024-02-22 | Bad News Kangaroos | W   | 0.556      | 0.143        | 0.032 (0.003)    | -                | -         |    10.83 | asap, chelleos, dangeR, nettik, TjP |
|           16 |     2391 | 2024-02-22 | FlyQuest           | L   | 0.550      | -            | -                | -                | -         |    -0.54 | asap, chelleos, dangeR, nettik, TjP |
|           15 |     2393 | 2024-02-21 | Vantage            | W   | 0.549      | -            | -                | -                | -         |     3.77 | asap, chelleos, dangeR, nettik, TjP |
|           14 |     2421 | 2024-02-21 | DXA                | W   | 0.544      | 0.333        | 0.005 (0.001)    | -                | -         |     6.05 | asap, chelleos, dangeR, nettik, TjP |
|           13 |     2426 | 2024-02-21 | DXA                | W   | 0.543      | -            | -                | -                | -         |     6.32 | asap, chelleos, dangeR, nettik, TjP |
|           12 |     2829 | 2024-02-01 | M80                | L   | 0.412      | -            | -                | -                | -         |    -0.80 | asap, chelleos, nettik, Rackem, TjP |
|           11 |     2846 | 2024-01-31 | Virtus.pro         | L   | 0.406      | -            | -                | -                | -         |    -0.07 | asap, chelleos, nettik, Rackem, TjP |
|           10 |     2934 | 2024-01-26 | Bad News Kangaroos | L   | 0.370      | -            | -                | -                | -         |    -9.62 | asap, chelleos, nettik, Rackem, TjP |
|            9 |     2949 | 2024-01-25 | Mindfreak          | W   | 0.363      | -            | -                | -                | -         |     2.66 | asap, chelleos, nettik, Rackem, TjP |
|            8 |     2964 | 2024-01-24 | Blitz              | W   | 0.357      | -            | -                | -                | -         |     1.14 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     2988 | 2024-01-23 | Mindfreak          | L   | 0.350      | -            | -                | -                | -         |    -8.66 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3013 | 2024-01-22 | Bad News Kangaroos | W   | 0.344      | 0.143        | 0.032 (0.002)    | -                | -         |     6.96 | asap, chelleos, nettik, Rackem, TjP |
|            5 |     3016 | 2024-01-22 | Mindfreak          | L   | 0.343      | -            | -                | -                | -         |    -8.60 | asap, chelleos, nettik, Rackem, TjP |
|            4 |     3047 | 2024-01-20 | FlyQuest           | L   | 0.336      | -            | -                | -                | -         |    -0.34 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     3052 | 2024-01-20 | Bad News Kangaroos | L   | 0.335      | -            | -                | -                | -         |    -3.94 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     3149 | 2024-01-19 | Mindfreak          | W   | 0.323      | -            | -                | -                | -         |     2.01 | asap, jhd, nettik, Rackem, TjP      |
|            1 |     3157 | 2024-01-18 | iM Apartments      | W   | 0.322      | -            | -                | -                | -         |     0.96 | asap, jhd, nettik, Rackem, TjP      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,020.41)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      0.990 | $3,000.00      | $2,970.44       |
| 2024-02-02 |      0.420 | $2,500.00      | $1,049.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
