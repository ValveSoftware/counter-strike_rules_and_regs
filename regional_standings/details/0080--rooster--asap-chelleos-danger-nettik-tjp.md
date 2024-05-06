### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  877.8<br />
<br />
Final Rank Value (877.8) = Starting Rank Value (825.8) + Head To Head Adjustments (52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.8
- 400 + ( ( 0.224 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 825.8


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
|           42 |      206 | 2024-04-27 | MIBR               | L   | 1.000      | -            | -                | -                | -         |    -0.52 | asap, chelleos, dangeR, nettik, TjP |
|           41 |      227 | 2024-04-26 | KZG                | W   | 1.000      | 0.500        | 0.018 (0.009)    | 0.216 (0.108)    | 1 (1.000) |     5.78 | asap, chelleos, dangeR, nettik, TjP |
|           40 |      230 | 2024-04-25 | Rebels             | L   | 1.000      | -            | -                | -                | -         |    -8.66 | asap, chelleos, dangeR, nettik, TjP |
|           39 |      361 | 2024-04-20 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -14.34 | asap, chelleos, dangeR, nettik, TjP |
|           38 |      403 | 2024-04-19 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.15 | asap, chelleos, dangeR, nettik, TjP |
|           37 |      409 | 2024-04-19 | Bad News Kangaroos | W   | 1.000      | 0.143        | 0.068 (0.010)    | 0.359 (0.051)    | 0 (0.000) |    16.87 | asap, chelleos, dangeR, nettik, TjP |
|           36 |      484 | 2024-04-17 | VexX               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.19 | asap, chelleos, dangeR, nettik, TjP |
|           35 |      499 | 2024-04-17 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.51 | asap, chelleos, dangeR, nettik, TjP |
|           34 |      658 | 2024-04-10 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -14.13 | asap, chelleos, dangeR, nettik, TjP |
|           33 |      668 | 2024-04-10 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.068 (0.023)    | 0.359 (0.120)    | 0 (0.000) |    17.52 | asap, chelleos, dangeR, nettik, TjP |
|           32 |     1021 | 2024-03-27 | VexX               | W   | 0.931      | 0.333        | 0.009 (0.003)    | 0.252 (0.078)    | 0 (0.000) |     7.93 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1024 | 2024-03-27 | VexX               | W   | 0.931      | 0.333        | 0.009 (0.003)    | 0.252 (0.078)    | 0 (0.000) |     8.47 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1291 | 2024-03-13 | FlyQuest           | L   | 0.838      | -            | -                | -                | -         |    -1.75 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1299 | 2024-03-13 | FlyQuest           | L   | 0.837      | -            | -                | -                | -         |    -1.78 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1465 | 2024-03-06 | Mindfreak          | W   | 0.791      | 0.333        | -                | 0.307 (0.081)    | 0 (0.000) |     4.98 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1472 | 2024-03-06 | Mindfreak          | W   | 0.791      | 0.333        | -                | 0.307 (0.081)    | 0 (0.000) |     5.21 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     1720 | 2024-02-23 | FlyQuest           | L   | 0.711      | -            | -                | -                | -         |    -1.29 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     1722 | 2024-02-22 | Bad News Kangaroos | W   | 0.710      | 0.143        | 0.068 (0.007)    | 0.359 (0.036)    | 0 (0.000) |    14.20 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     1740 | 2024-02-22 | FlyQuest           | L   | 0.704      | -            | -                | -                | -         |    -1.20 | asap, chelleos, dangeR, nettik, TjP |
|           23 |     1742 | 2024-02-21 | Vantage            | W   | 0.703      | -            | -                | -                | -         |     4.50 | asap, chelleos, dangeR, nettik, TjP |
|           22 |     1770 | 2024-02-21 | DXA                | W   | 0.698      | 0.333        | 0.009 (0.002)    | 0.239 (0.056)    | -         |     6.76 | asap, chelleos, dangeR, nettik, TjP |
|           21 |     1775 | 2024-02-21 | DXA                | W   | 0.697      | 0.333        | 0.009 (0.002)    | 0.239 (0.056)    | -         |     7.14 | asap, chelleos, dangeR, nettik, TjP |
|           20 |     2178 | 2024-02-01 | M80                | L   | 0.566      | -            | -                | -                | -         |    -1.41 | asap, chelleos, nettik, Rackem, TjP |
|           19 |     2195 | 2024-01-31 | Virtus.pro         | L   | 0.560      | -            | -                | -                | -         |    -0.10 | asap, chelleos, nettik, Rackem, TjP |
|           18 |     2283 | 2024-01-26 | Bad News Kangaroos | L   | 0.524      | -            | -                | -                | -         |    -5.58 | asap, chelleos, nettik, Rackem, TjP |
|           17 |     2298 | 2024-01-25 | Mindfreak          | W   | 0.517      | -            | -                | -                | -         |     5.32 | asap, chelleos, nettik, Rackem, TjP |
|           16 |     2313 | 2024-01-24 | Blitz              | W   | 0.511      | -            | -                | -                | -         |     1.37 | asap, chelleos, nettik, Rackem, TjP |
|           15 |     2337 | 2024-01-23 | Mindfreak          | L   | 0.504      | -            | -                | -                | -         |   -11.08 | asap, chelleos, nettik, Rackem, TjP |
|           14 |     2362 | 2024-01-22 | Bad News Kangaroos | W   | 0.498      | 0.143        | 0.068 (0.005)    | -                | -         |    10.51 | asap, chelleos, nettik, Rackem, TjP |
|           13 |     2365 | 2024-01-22 | Mindfreak          | L   | 0.497      | -            | -                | -                | -         |   -11.14 | asap, chelleos, nettik, Rackem, TjP |
|           12 |     2396 | 2024-01-20 | FlyQuest           | L   | 0.490      | -            | -                | -                | -         |    -0.87 | asap, chelleos, nettik, Rackem, TjP |
|           11 |     2401 | 2024-01-20 | Bad News Kangaroos | L   | 0.489      | -            | -                | -                | -         |    -5.31 | asap, chelleos, nettik, Rackem, TjP |
|           10 |     2498 | 2024-01-19 | Mindfreak          | W   | 0.477      | -            | -                | -                | -         |     4.20 | asap, jhd, nettik, Rackem, TjP      |
|            9 |     2506 | 2024-01-18 | iM Apartments      | W   | 0.476      | -            | -                | -                | -         |     1.18 | asap, jhd, nettik, Rackem, TjP      |
|            8 |     3325 | 2023-11-29 | MANTRA             | W   | 0.137      | -            | -                | -                | -         |     0.36 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     3442 | 2023-11-21 | Bad News Kangaroos | L   | 0.084      | -            | -                | -                | -         |    -0.94 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3457 | 2023-11-20 | FlyQuest           | L   | 0.077      | -            | -                | -                | -         |    -0.13 | asap, chelleos, nettik, Rackem, TjP |
|            5 |     3478 | 2023-11-18 | Bad News Kangaroos | W   | 0.070      | 0.313        | 0.068 (0.001)    | -                | -         |     1.42 | asap, chelleos, nettik, Rackem, TjP |
|            4 |     3540 | 2023-11-17 | Bad News Kangaroos | W   | 0.057      | -            | -                | -                | -         |     1.17 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     3651 | 2023-11-13 | Bad News Kangaroos | W   | 0.031      | -            | -                | -                | -         |     0.64 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     3683 | 2023-11-11 | Mindfreak          | W   | 0.023      | -            | -                | -                | -         |     0.18 | asap, chelleos, MC, nettik, Rackem  |
|            1 |     3713 | 2023-11-10 | Cobro's Cobros     | W   | 0.016      | -            | -                | -                | -         |     0.04 | asap, chelleos, MC, nettik, Rackem  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,726.96)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-02-02 |      0.574 | $2,500.00      | $1,435.21       |
| 2023-11-21 |      0.085 | $802.00        | $67.94          |
| 2023-11-18 |      0.070 | $3,212.00      | $223.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
