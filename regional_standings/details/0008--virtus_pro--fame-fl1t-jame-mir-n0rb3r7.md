### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: fame, FL1T, Jame, mir, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1619.6<br />
<br />
Final Rank Value (1619.6) = Starting Rank Value (1641.1) + Head To Head Adjustments (-21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.784[<sup>1</sup>](#table2)
- Bounty Collected: 0.584[<sup>2</sup>](#table1)
- Opponent Network: 0.331[<sup>2</sup>](#table1)
- LAN Wins: 0.872[<sup>2</sup>](#table1)

The average of these factors is 0.643<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1641.1
- 400 + ( ( 0.643 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1641.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      288 | 2024-04-12 | G2                | L   | 1.000      | -            | -                | -                | -         |    -7.70 | fame, FL1T, Jame, mir, n0rb3r7 |
|           47 |      369 | 2024-04-10 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -24.89 | fame, FL1T, Jame, mir, n0rb3r7 |
|           46 |      424 | 2024-04-09 | FlyQuest          | W   | 1.000      | 0.624        | -                | 0.647 (0.404)    | 1 (1.000) |     2.17 | fame, FL1T, Jame, mir, n0rb3r7 |
|           45 |      454 | 2024-04-08 | Wildcard          | W   | 1.000      | 0.624        | -                | 0.503 (0.314)    | 1 (1.000) |     0.51 | fame, FL1T, Jame, mir, n0rb3r7 |
|           44 |      755 | 2024-03-24 | G2                | L   | 1.000      | -            | -                | -                | -         |    -8.26 | fame, FL1T, Jame, mir, n0rb3r7 |
|           43 |      769 | 2024-03-23 | Eternal Fire      | L   | 0.999      | -            | -                | -                | -         |   -15.29 | fame, FL1T, Jame, mir, n0rb3r7 |
|           42 |      787 | 2024-03-22 | HEROIC            | W   | 0.991      | 1.000        | 0.281 (0.278)    | 0.731 (0.725)    | 1 (0.991) |    12.27 | fame, FL1T, Jame, mir, n0rb3r7 |
|           41 |      800 | 2024-03-21 | paiN              | W   | 0.987      | 1.000        | 0.698 (0.689)    | 0.854 (0.843)    | 1 (0.987) |    12.79 | fame, FL1T, Jame, mir, n0rb3r7 |
|           40 |      811 | 2024-03-21 | Imperial          | L   | 0.985      | -            | -                | -                | -         |   -18.97 | fame, FL1T, Jame, mir, n0rb3r7 |
|           39 |     1012 | 2024-03-12 | HEROIC            | W   | 0.927      | -            | -                | -                | -         |    10.56 | fame, FL1T, Jame, mir, n0rb3r7 |
|           38 |     1027 | 2024-03-11 | Apeks             | W   | 0.921      | -            | -                | -                | -         |     3.13 | fame, FL1T, Jame, mir, n0rb3r7 |
|           37 |     1038 | 2024-03-11 | B8                | W   | 0.919      | -            | -                | -                | -         |     0.27 | fame, FL1T, Jame, mir, n0rb3r7 |
|           36 |     1620 | 2024-02-15 | Natus Vincere     | W   | 0.753      | 0.143        | 1.000 (0.108)    | -                | 1 (0.753) |    19.61 | fame, FL1T, Jame, mir, n0rb3r7 |
|           35 |     1652 | 2024-02-14 | fnatic            | W   | 0.747      | -            | -                | -                | 1 (0.747) |     0.99 | fame, FL1T, Jame, mir, n0rb3r7 |
|           34 |     1670 | 2024-02-14 | SAW               | W   | 0.744      | -            | -                | -                | 1 (0.744) |     2.33 | fame, FL1T, Jame, mir, n0rb3r7 |
|           33 |     1851 | 2024-02-02 | Cloud9            | L   | 0.666      | -            | -                | -                | -         |   -10.29 | fame, FL1T, Jame, mir, n0rb3r7 |
|           32 |     1887 | 2024-02-01 | GamerLegion       | L   | 0.659      | -            | -                | -                | -         |   -17.61 | fame, FL1T, Jame, mir, n0rb3r7 |
|           31 |     1899 | 2024-01-31 | Rooster           | W   | 0.653      | -            | -                | -                | 1 (0.653) |     0.14 | fame, FL1T, Jame, mir, n0rb3r7 |
|           30 |     1952 | 2024-01-27 | BIG               | W   | 0.627      | 0.581        | 0.471 (0.171)    | 0.529 (0.193)    | 1 (0.627) |     1.77 | fame, FL1T, Jame, mir, n0rb3r7 |
|           29 |     1993 | 2024-01-25 | Cloud9            | W   | 0.613      | 0.581        | 0.475 (0.169)    | 0.623 (0.222)    | 1 (0.613) |    10.60 | fame, FL1T, Jame, mir, n0rb3r7 |
|           28 |     2008 | 2024-01-24 | BIG               | W   | 0.606      | 0.581        | 0.471 (0.166)    | 0.529 (0.186)    | -         |     1.54 | fame, FL1T, Jame, mir, n0rb3r7 |
|           27 |     2122 | 2024-01-20 | fnatic            | W   | 0.579      | -            | -                | -                | -         |     0.79 | fame, FL1T, Jame, mir, n0rb3r7 |
|           26 |     2177 | 2024-01-19 | Natus Vincere     | L   | 0.573      | -            | -                | -                | -         |    -2.91 | fame, FL1T, Jame, mir, n0rb3r7 |
|           25 |     2232 | 2024-01-18 | SAW               | W   | 0.566      | -            | -                | -                | -         |     1.71 | fame, FL1T, Jame, mir, n0rb3r7 |
|           24 |     2248 | 2024-01-18 | SINNERS           | W   | 0.566      | -            | -                | -                | -         |     0.67 | fame, FL1T, Jame, mir, n0rb3r7 |
|           23 |     2672 | 2023-12-17 | Apeks             | W   | 0.354      | 0.500        | -                | 0.687 (0.122)    | -         |     1.18 | fame, FL1T, Jame, mir, n0rb3r7 |
|           22 |     2683 | 2023-12-17 | TheMongolz        | W   | 0.352      | 0.500        | 0.247 (0.044)    | -                | -         |     1.72 | fame, FL1T, Jame, mir, n0rb3r7 |
|           21 |     2734 | 2023-12-15 | Monte             | W   | 0.341      | 0.500        | 0.236 (0.040)    | -                | -         |     0.89 | fame, FL1T, Jame, mir, n0rb3r7 |
|           20 |     2744 | 2023-12-15 | M80               | W   | 0.339      | -            | -                | -                | -         |     0.28 | fame, FL1T, Jame, mir, n0rb3r7 |
|           19 |     2791 | 2023-12-10 | Spirit            | L   | 0.306      | -            | -                | -                | -         |    -1.89 | fame, FL1T, Jame, mir, n0rb3r7 |
|           18 |     2822 | 2023-12-09 | BetBoom           | W   | 0.298      | 0.657        | 0.457 (0.089)    | 0.898 (0.175)    | -         |     0.94 | fame, FL1T, Jame, mir, n0rb3r7 |
|           17 |     2870 | 2023-12-07 | Spirit            | W   | 0.284      | 0.657        | 1.000 (0.187)    | 0.661 (0.123)    | -         |     7.29 | fame, FL1T, Jame, mir, n0rb3r7 |
|           16 |     2902 | 2023-12-06 | Astralis          | W   | 0.278      | -            | -                | -                | -         |     1.89 | fame, FL1T, Jame, mir, n0rb3r7 |
|           15 |     3058 | 2023-11-26 | Monte             | L   | 0.211      | -            | -                | -                | -         |    -6.12 | fame, FL1T, Jame, mir, n0rb3r7 |
|           14 |     3080 | 2023-11-25 | GamerLegion       | W   | 0.205      | -            | -                | -                | -         |     1.15 | fame, FL1T, Jame, mir, n0rb3r7 |
|           13 |     3090 | 2023-11-24 | MIBR              | L   | 0.200      | -            | -                | -                | -         |    -4.94 | fame, FL1T, Jame, mir, n0rb3r7 |
|           12 |     3099 | 2023-11-24 | 3DMAX             | W   | 0.198      | -            | -                | -                | -         |     0.19 | fame, FL1T, Jame, mir, n0rb3r7 |
|           11 |     3509 | 2023-11-05 | FaZe              | L   | 0.074      | -            | -                | -                | -         |    -0.27 | fame, FL1T, Jame, mir, n0rb3r7 |
|           10 |     3534 | 2023-11-04 | Monte             | W   | 0.067      | -            | -                | -                | -         |     0.17 | fame, FL1T, Jame, mir, n0rb3r7 |
|            9 |     3549 | 2023-11-04 | HEROIC            | W   | 0.065      | -            | -                | -                | -         |     0.01 | fame, FL1T, Jame, mir, n0rb3r7 |
|            8 |     3578 | 2023-11-02 | Monte             | W   | 0.053      | -            | -                | -                | -         |     0.13 | fame, FL1T, Jame, mir, n0rb3r7 |
|            7 |     3602 | 2023-11-01 | FURIA             | W   | 0.047      | -            | -                | -                | -         |     0.36 | fame, FL1T, Jame, mir, n0rb3r7 |
|            6 |     3634 | 2023-10-31 | OG                | W   | 0.040      | -            | -                | -                | -         |     0.00 | fame, FL1T, Jame, mir, n0rb3r7 |
|            5 |     3724 | 2023-10-29 | fnatic            | W   | 0.025      | -            | -                | -                | -         |     0.00 | fame, FL1T, Jame, mir, n0rb3r7 |
|            4 |     3760 | 2023-10-28 | Cloud9            | L   | 0.018      | -            | -                | -                | -         |    -0.24 | fame, FL1T, Jame, mir, n0rb3r7 |
|            3 |     3789 | 2023-10-27 | Ninjas in Pyjamas | W   | 0.013      | -            | -                | -                | -         |     0.01 | fame, FL1T, Jame, mir, n0rb3r7 |
|            2 |     3795 | 2023-10-27 | KOI               | W   | 0.012      | -            | -                | -                | -         |     0.01 | fame, FL1T, Jame, mir, n0rb3r7 |
|            1 |     3808 | 2023-10-26 | Gaimin Gladiators | L   | 0.007      | -            | -                | -                | -         |    -0.19 | fame, FL1T, Jame, mir, n0rb3r7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100,862.55)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.53) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-02-02 |      0.667 | $4,500.00      | $3,003.25       |
| 2024-01-28 |      0.633 | $22,500.00     | $14,247.40      |
| 2023-12-17 |      0.354 | $50,000.00     | $17,715.44      |
| 2023-12-10 |      0.306 | $60,000.00     | $18,344.35      |
| 2023-11-26 |      0.213 | $10,000.00     | $2,132.92       |
| 2023-11-05 |      0.074 | $100,000.00    | $7,370.79       |
| 2023-11-02 |      0.053 | $150,000.00    | $8,022.07       |
| 2023-10-27 |      0.013 | $2,000.00      | $26.34          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
