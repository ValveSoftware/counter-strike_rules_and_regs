### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dangeR, nettik, TjP<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  835.7<br />
<br />
Final Rank Value (835.7) = Starting Rank Value (753.2) + Head To Head Adjustments (82.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.2
- 400 + ( ( 0.183 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 753.2


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
|           43 |       65 | 2024-04-20 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -13.59 | asap, chelleos, dangeR, nettik, TjP |
|           42 |      107 | 2024-04-19 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -4.00 | asap, chelleos, dangeR, nettik, TjP |
|           41 |      113 | 2024-04-19 | Bad News Kangaroos | W   | 1.000      | 0.143        | 0.046 (0.007)    | 0.429 (0.061)    | 0 (0.000) |    17.57 | asap, chelleos, dangeR, nettik, TjP |
|           40 |      188 | 2024-04-17 | VexX               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.21 | asap, chelleos, dangeR, nettik, TjP |
|           39 |      203 | 2024-04-17 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.87 | asap, chelleos, dangeR, nettik, TjP |
|           38 |      362 | 2024-04-10 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -13.31 | asap, chelleos, dangeR, nettik, TjP |
|           37 |      372 | 2024-04-10 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.429 (0.143)    | 0 (0.000) |    18.41 | asap, chelleos, dangeR, nettik, TjP |
|           36 |      725 | 2024-03-27 | VexX               | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.295 (0.098)    | 0 (0.000) |     9.85 | asap, chelleos, dangeR, nettik, TjP |
|           35 |      728 | 2024-03-27 | VexX               | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.295 (0.098)    | 0 (0.000) |    10.64 | asap, chelleos, dangeR, nettik, TjP |
|           34 |      995 | 2024-03-13 | FlyQuest           | L   | 0.931      | -            | -                | -                | -         |    -3.68 | asap, chelleos, dangeR, nettik, TjP |
|           33 |     1003 | 2024-03-13 | FlyQuest           | L   | 0.931      | -            | -                | -                | -         |    -3.81 | asap, chelleos, dangeR, nettik, TjP |
|           32 |     1169 | 2024-03-06 | Mindfreak          | W   | 0.884      | 0.333        | -                | 0.339 (0.100)    | 0 (0.000) |     6.90 | asap, chelleos, dangeR, nettik, TjP |
|           31 |     1176 | 2024-03-06 | Mindfreak          | W   | 0.884      | 0.333        | -                | 0.339 (0.100)    | 0 (0.000) |     7.32 | asap, chelleos, dangeR, nettik, TjP |
|           30 |     1424 | 2024-02-23 | FlyQuest           | L   | 0.804      | -            | -                | -                | -         |    -3.03 | asap, chelleos, dangeR, nettik, TjP |
|           29 |     1426 | 2024-02-22 | Bad News Kangaroos | W   | 0.803      | 0.143        | 0.046 (0.005)    | 0.429 (0.049)    | 0 (0.000) |    16.76 | asap, chelleos, dangeR, nettik, TjP |
|           28 |     1444 | 2024-02-22 | FlyQuest           | L   | 0.798      | -            | -                | -                | -         |    -2.85 | asap, chelleos, dangeR, nettik, TjP |
|           27 |     1446 | 2024-02-21 | Vantage            | W   | 0.797      | 0.143        | -                | 0.383 (0.044)    | 0 (0.000) |     6.41 | asap, chelleos, dangeR, nettik, TjP |
|           26 |     1474 | 2024-02-21 | DXA                | W   | 0.791      | 0.333        | 0.009 (0.002)    | 0.277 (0.073)    | -         |     8.95 | asap, chelleos, dangeR, nettik, TjP |
|           25 |     1479 | 2024-02-21 | DXA                | W   | 0.791      | 0.333        | 0.009 (0.002)    | 0.277 (0.073)    | -         |     9.55 | asap, chelleos, dangeR, nettik, TjP |
|           24 |     1882 | 2024-02-01 | M80                | L   | 0.659      | -            | -                | -                | -         |    -4.19 | asap, chelleos, nettik, Rackem, TjP |
|           23 |     1899 | 2024-01-31 | Virtus.pro         | L   | 0.653      | -            | -                | -                | -         |    -0.14 | asap, chelleos, nettik, Rackem, TjP |
|           22 |     1987 | 2024-01-26 | Bad News Kangaroos | L   | 0.617      | -            | -                | -                | -         |    -5.70 | asap, chelleos, nettik, Rackem, TjP |
|           21 |     2002 | 2024-01-25 | Mindfreak          | W   | 0.611      | -            | -                | -                | -         |     7.81 | asap, chelleos, nettik, Rackem, TjP |
|           20 |     2017 | 2024-01-24 | Blitz              | W   | 0.604      | -            | -                | -                | -         |     2.15 | asap, chelleos, nettik, Rackem, TjP |
|           19 |     2041 | 2024-01-23 | Mindfreak          | L   | 0.597      | -            | -                | -                | -         |   -11.61 | asap, chelleos, nettik, Rackem, TjP |
|           18 |     2066 | 2024-01-22 | Bad News Kangaroos | W   | 0.591      | 0.143        | 0.046 (0.004)    | -                | -         |    13.39 | asap, chelleos, nettik, Rackem, TjP |
|           17 |     2069 | 2024-01-22 | Mindfreak          | L   | 0.590      | -            | -                | -                | -         |   -11.69 | asap, chelleos, nettik, Rackem, TjP |
|           16 |     2100 | 2024-01-20 | FlyQuest           | L   | 0.583      | -            | -                | -                | -         |    -2.39 | asap, chelleos, nettik, Rackem, TjP |
|           15 |     2105 | 2024-01-20 | Bad News Kangaroos | L   | 0.582      | -            | -                | -                | -         |    -5.23 | asap, chelleos, nettik, Rackem, TjP |
|           14 |     2202 | 2024-01-19 | Mindfreak          | W   | 0.570      | -            | -                | -                | -         |     6.50 | asap, jhd, nettik, Rackem, TjP      |
|           13 |     2210 | 2024-01-18 | iM Apartments      | W   | 0.570      | -            | -                | -                | -         |     1.91 | asap, jhd, nettik, Rackem, TjP      |
|           12 |     3029 | 2023-11-29 | MANTRA             | W   | 0.230      | -            | -                | -                | -         |     0.83 | asap, chelleos, nettik, Rackem, TjP |
|           11 |     3146 | 2023-11-21 | Bad News Kangaroos | L   | 0.177      | -            | -                | -                | -         |    -1.60 | asap, chelleos, nettik, Rackem, TjP |
|           10 |     3161 | 2023-11-20 | FlyQuest           | L   | 0.171      | -            | -                | -                | -         |    -0.68 | asap, chelleos, nettik, Rackem, TjP |
|            9 |     3182 | 2023-11-18 | Bad News Kangaroos | W   | 0.163      | 0.313        | 0.046 (0.002)    | -                | -         |     3.69 | asap, chelleos, nettik, Rackem, TjP |
|            8 |     3244 | 2023-11-17 | Bad News Kangaroos | W   | 0.150      | 0.313        | 0.046 (0.002)    | -                | -         |     3.44 | asap, chelleos, nettik, Rackem, TjP |
|            7 |     3355 | 2023-11-13 | Bad News Kangaroos | W   | 0.124      | -            | -                | -                | -         |     2.87 | asap, chelleos, nettik, Rackem, TjP |
|            6 |     3387 | 2023-11-11 | Mindfreak          | W   | 0.117      | -            | -                | -                | -         |     1.19 | asap, chelleos, MC, nettik, Rackem  |
|            5 |     3417 | 2023-11-10 | Cobro's Cobros     | W   | 0.110      | -            | -                | -                | -         |     0.41 | asap, chelleos, MC, nettik, Rackem  |
|            4 |     3529 | 2023-11-04 | Bad News Kangaroos | W   | 0.070      | -            | -                | -                | -         |     1.61 | asap, chelleos, nettik, Rackem, TjP |
|            3 |     3571 | 2023-11-03 | Bad News Kangaroos | W   | 0.057      | -            | -                | -                | -         |     1.33 | asap, chelleos, nettik, Rackem, TjP |
|            2 |     3733 | 2023-10-28 | Vantage            | W   | 0.023      | -            | -                | -                | -         |     0.23 | asap, chelleos, MC, nettik, Rackem  |
|            1 |     3774 | 2023-10-27 | sunday school      | W   | 0.016      | -            | -                | -                | -         |     0.17 | asap, chelleos, MC, nettik, Rackem  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,553.60)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-02 |      0.667 | $2,500.00      | $1,668.47       |
| 2023-11-21 |      0.178 | $802.00        | $142.77         |
| 2023-11-18 |      0.163 | $3,212.00      | $523.52         |
| 2023-11-04 |      0.070 | $3,145.00      | $218.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
