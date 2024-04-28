### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, karrigan, rain, ropz, Twistzz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1701.5<br />
<br />
Final Rank Value (1701.5) = Starting Rank Value (1700.9) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.733[<sup>1</sup>](#table2)
- Bounty Collected: 0.631[<sup>2</sup>](#table1)
- Opponent Network: 0.286[<sup>2</sup>](#table1)
- LAN Wins: 0.892[<sup>2</sup>](#table1)

The average of these factors is 0.636<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1700.9
- 400 + ( ( 0.636 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1700.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      102 | 2023-02-07 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -16.01 | broky, karrigan, rain, ropz, Twistzz   |
|           31 |      119 | 2023-02-06 | IHC               | W   | 1.000      | 1.000        | 0.108 (0.108)    | 0.622 (0.622)    | 1 (1.000) |     1.86 | broky, karrigan, rain, ropz, Twistzz   |
|           30 |      148 | 2023-02-05 | G2                | L   | 1.000      | -            | -                | -                | -         |    -6.88 | broky, karrigan, rain, ropz, Twistzz   |
|           29 |      172 | 2023-02-04 | Spirit            | W   | 1.000      | 1.000        | 0.211 (0.211)    | 0.350 (0.350)    | 1 (1.000) |     3.18 | broky, karrigan, rain, ropz, Twistzz   |
|           28 |      410 | 2023-01-26 | OG                | W   | 1.000      | 0.571        | 0.237 (0.136)    | 0.365 (0.209)    | 1 (1.000) |     8.01 | broky, es3tag, karrigan, ropz, Twistzz |
|           27 |      523 | 2023-01-22 | OG                | W   | 1.000      | 0.571        | 0.237 (0.136)    | 0.365 (0.209)    | 1 (1.000) |     7.71 | broky, es3tag, karrigan, ropz, Twistzz |
|           26 |      576 | 2023-01-20 | Complexity        | W   | 1.000      | 0.571        | 0.129 (0.074)    | 0.487 (0.278)    | 1 (1.000) |     3.18 | broky, es3tag, karrigan, ropz, Twistzz |
|           25 |      811 | 2022-12-17 | G2                | L   | 0.820      | -            | -                | -                | -         |    -5.94 | broky, karrigan, rain, ropz, Twistzz   |
|           24 |      880 | 2022-12-15 | Liquid            | W   | 0.804      | 1.000        | 0.760 (0.611)    | 0.450 (0.362)    | 1 (0.804) |    15.93 | broky, karrigan, rain, ropz, Twistzz   |
|           23 |      899 | 2022-12-14 | G2                | W   | 0.798      | 1.000        | 1.000 (0.798)    | 0.326 (0.261)    | 1 (0.798) |    20.03 | broky, karrigan, rain, ropz, Twistzz   |
|           22 |     1380 | 2022-11-27 | Heroic            | L   | 0.687      | -            | -                | -                | -         |    -7.29 | broky, karrigan, rain, ropz, Twistzz   |
|           21 |     1413 | 2022-11-26 | Ninjas in Pyjamas | W   | 0.681      | -            | -                | -                | 1 (0.681) |     2.32 | broky, karrigan, rain, ropz, Twistzz   |
|           20 |     1483 | 2022-11-24 | Heroic            | W   | 0.665      | 0.729        | 0.608 (0.295)    | 0.560 (0.271)    | 1 (0.665) |    13.62 | broky, karrigan, rain, ropz, Twistzz   |
|           19 |     1503 | 2022-11-23 | OG                | W   | 0.657      | 0.729        | 0.237 (0.114)    | 0.365 (0.175)    | 1 (0.657) |     5.87 | broky, karrigan, rain, ropz, Twistzz   |
|           18 |     1693 | 2022-11-06 | Bad News Eagles   | L   | 0.547      | -            | -                | -                | -         |   -16.35 | broky, karrigan, rain, ropz, Twistzz   |
|           17 |     1713 | 2022-11-05 | Vitality          | L   | 0.541      | -            | -                | -                | -         |   -10.86 | broky, karrigan, rain, ropz, Twistzz   |
|           16 |     1722 | 2022-11-05 | Cloud9            | L   | 0.539      | -            | -                | -                | -         |   -15.28 | broky, karrigan, rain, ropz, Twistzz   |
|           15 |     2366 | 2022-10-06 | Sprout            | W   | 0.339      | -            | -                | -                | -         |     0.54 | broky, karrigan, rain, ropz, Twistzz   |
|           14 |     2396 | 2022-10-05 | fnatic            | W   | 0.332      | -            | -                | -                | -         |     2.34 | broky, karrigan, rain, ropz, Twistzz   |
|           13 |     2427 | 2022-10-04 | GamerLegion       | W   | 0.325      | -            | -                | -                | -         |     0.49 | broky, karrigan, rain, ropz, Twistzz   |
|           12 |     2512 | 2022-09-29 | Cloud9            | L   | 0.293      | -            | -                | -                | -         |    -8.37 | broky, karrigan, rain, ropz, Twistzz   |
|           11 |     2576 | 2022-09-27 | Complexity        | W   | 0.280      | 0.922        | -                | 0.487 (0.126)    | -         |     1.25 | broky, karrigan, rain, ropz, Twistzz   |
|           10 |     3072 | 2022-09-11 | BIG               | W   | 0.173      | -            | -                | -                | -         |     0.79 | broky, karrigan, rain, ropz, Twistzz   |
|            9 |     3133 | 2022-09-10 | G2                | L   | 0.167      | -            | -                | -                | -         |    -0.84 | broky, karrigan, rain, ropz, Twistzz   |
|            8 |     3163 | 2022-09-09 | Outsiders         | W   | 0.160      | 0.922        | 0.801 (0.119)    | -                | -         |     2.07 | broky, karrigan, rain, ropz, Twistzz   |
|            7 |     3219 | 2022-09-08 | MIBR              | W   | 0.154      | -            | -                | -                | -         |     0.09 | broky, karrigan, rain, ropz, Twistzz   |
|            6 |     3244 | 2022-09-07 | FTW               | W   | 0.144      | -            | -                | -                | -         |     0.05 | broky, karrigan, rain, ropz, Twistzz   |
|            5 |     3481 | 2022-08-28 | Astralis          | W   | 0.079      | -            | -                | -                | -         |     0.27 | broky, karrigan, rain, ropz, Twistzz   |
|            4 |     3567 | 2022-08-26 | OG                | L   | 0.065      | -            | -                | -                | -         |    -1.47 | broky, karrigan, rain, ropz, Twistzz   |
|            3 |     3682 | 2022-08-21 | Heroic            | L   | 0.033      | -            | -                | -                | -         |    -0.37 | broky, karrigan, rain, ropz, Twistzz   |
|            2 |     3705 | 2022-08-21 | Heroic            | W   | 0.032      | -            | -                | -                | -         |     0.64 | broky, karrigan, rain, ropz, Twistzz   |
|            1 |     3710 | 2022-08-21 | Evil Geniuses     | W   | 0.031      | -            | -                | -                | -         |     0.03 | broky, karrigan, rain, ropz, Twistzz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($205,034.28)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $24,000.00     | $24,000.00      |
| 2023-01-29 |      1.000 | $27,500.00     | $27,500.00      |
| 2022-12-18 |      0.824 | $85,000.00     | $70,081.78      |
| 2022-11-27 |      0.687 | $85,000.00     | $58,389.67      |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-02 |      0.314 | $37,500.00     | $11,776.48      |
| 2022-08-28 |      0.081 | $17,500.00     | $1,414.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
