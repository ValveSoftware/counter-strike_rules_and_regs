### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  891.2<br />
<br />
Final Rank Value (891.2) = Starting Rank Value (858.2) + Head To Head Adjustments (33.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.344[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.2
- 400 + ( ( 0.236 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 858.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       18 | 2024-05-29 | OG          | W   | 1.000      | 0.500        | 0.278 (0.139)    | 0.376 (0.188)    | 1 (1.000) |    27.21 | Annihilation, dobu, kabal, MiQ, Zesta |
|           22 |      310 | 2024-05-18 | TheMongolz  | L   | 1.000      | -            | -                | -                | -         |    -1.12 | Annihilation, dobu, kabal, MiQ, Zesta |
|           21 |      341 | 2024-05-17 | The Huns    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.119 (0.017)    | 1 (1.000) |     5.29 | Annihilation, dobu, kabal, MiQ, Zesta |
|           20 |     1574 | 2024-04-02 | TheMongolz  | L   | 0.818      | -            | -                | -                | -         |    -1.10 | Annihilation, dobu, kabal, MiQ, Zesta |
|           19 |     1580 | 2024-04-02 | Lynn Vision | L   | 0.817      | -            | -                | -                | -         |    -7.25 | Annihilation, dobu, kabal, MiQ, Zesta |
|           18 |     1937 | 2024-03-13 | -72c        | W   | 0.684      | 0.143        | 0.000 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     3.42 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           17 |     1948 | 2024-03-13 | ROUX        | W   | 0.683      | -            | -                | -                | 0 (0.000) |     1.49 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           16 |     2269 | 2024-02-27 | FlyQuest    | L   | 0.589      | -            | -                | -                | -         |    -0.87 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           15 |     2293 | 2024-02-27 | TYLOO       | W   | 0.583      | 0.143        | 0.042 (0.003)    | 0.330 (0.027)    | 1 (0.583) |    10.29 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           14 |     2296 | 2024-02-26 | MAG         | W   | 0.581      | 0.143        | -                | 0.129 (0.011)    | 1 (0.581) |     2.53 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           13 |     2311 | 2024-02-25 | FlyQuest    | L   | 0.575      | -            | -                | -                | -         |    -0.77 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           12 |     2813 | 2024-02-02 | GR          | L   | 0.417      | -            | -                | -                | -         |   -10.39 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           11 |     2860 | 2024-01-31 | NKT         | W   | 0.404      | 0.143        | 0.005 (0.000)    | 0.057 (0.003)    | 0 (0.000) |     3.78 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     2861 | 2024-01-31 | Rare Atom   | W   | 0.403      | 0.143        | 0.011 (0.001)    | 0.125 (0.007)    | 0 (0.000) |     3.41 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     2985 | 2024-01-23 | The Huns    | L   | 0.350      | -            | -                | -                | -         |    -8.97 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     3012 | 2024-01-22 | Rare Atom   | W   | 0.344      | 0.143        | 0.011 (0.001)    | 0.125 (0.006)    | 0 (0.000) |     2.88 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     3038 | 2024-01-21 | The Huns    | W   | 0.338      | 0.143        | 0.000 (0.000)    | 0.119 (0.006)    | -         |     1.98 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3046 | 2024-01-21 | TheMongolz  | L   | 0.336      | -            | -                | -                | -         |    -0.33 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3138 | 2024-01-19 | GR          | W   | 0.324      | 0.143        | 0.001 (0.000)    | 0.146 (0.007)    | -         |     2.15 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3147 | 2024-01-19 | Fort Arena  | W   | 0.323      | -            | -                | -                | -         |     0.73 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3847 | 2023-12-06 | -72c        | L   | 0.031      | -            | -                | -                | -         |    -0.81 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3874 | 2023-12-05 | GR          | L   | 0.024      | -            | -                | -                | -         |    -0.61 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     3927 | 2023-12-02 | The Huns    | W   | 0.004      | 0.300        | 0.000 (0.000)    | -                | 1 (0.004) |     0.02 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($88.10)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.058 | $1,300.00      | $75.76          |
| 2023-12-02 |      0.004 | $3,186.00      | $12.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
