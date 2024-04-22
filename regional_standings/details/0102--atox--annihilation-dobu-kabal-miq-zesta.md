### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  805.4<br />
<br />
Final Rank Value (805.4) = Starting Rank Value (788.0) + Head To Head Adjustments (17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.211[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.0
- 400 + ( ( 0.201 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 788.0


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
|           26 |      627 | 2024-04-02 | TheMongolz  | L   | 1.000      | -            | -                | -                | -         |    -1.84 | Annihilation, dobu, kabal, MiQ, Zesta |
|           25 |      633 | 2024-04-02 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -4.13 | Annihilation, dobu, kabal, MiQ, Zesta |
|           24 |      990 | 2024-03-13 | -72c        | W   | 0.932      | 0.143        | 0.003 (0.000)    | 0.069 (0.009)    | 0 (0.000) |     7.63 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           23 |     1001 | 2024-03-13 | ROUX        | W   | 0.931      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.77 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           22 |     1322 | 2024-02-27 | FlyQuest    | L   | 0.836      | -            | -                | -                | -         |    -3.27 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           21 |     1346 | 2024-02-27 | TYLOO       | W   | 0.830      | 0.143        | 0.055 (0.006)    | 0.490 (0.058)    | 1 (0.830) |    17.37 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           20 |     1349 | 2024-02-26 | MAG         | W   | 0.829      | 0.143        | -                | 0.237 (0.028)    | 1 (0.829) |     5.86 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           19 |     1364 | 2024-02-25 | FlyQuest    | L   | 0.822      | -            | -                | -                | -         |    -2.87 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           18 |     1866 | 2024-02-02 | GR          | L   | 0.664      | -            | -                | -                | -         |   -13.98 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           17 |     1913 | 2024-01-31 | NKT         | W   | 0.651      | 0.143        | 0.013 (0.001)    | 0.110 (0.010)    | 0 (0.000) |     9.54 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           16 |     1914 | 2024-01-31 | Rare Atom   | W   | 0.651      | 0.143        | 0.024 (0.002)    | 0.233 (0.022)    | 0 (0.000) |     8.42 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           15 |     2038 | 2024-01-23 | The Huns    | L   | 0.598      | -            | -                | -                | -         |   -14.46 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           14 |     2065 | 2024-01-22 | Rare Atom   | W   | 0.592      | 0.143        | 0.024 (0.002)    | 0.233 (0.020)    | 0 (0.000) |     7.59 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           13 |     2091 | 2024-01-21 | The Huns    | W   | 0.585      | 0.143        | -                | 0.232 (0.019)    | 0 (0.000) |     4.15 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           12 |     2099 | 2024-01-21 | TheMongolz  | L   | 0.583      | -            | -                | -                | -         |    -0.79 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           11 |     2191 | 2024-01-19 | GR          | W   | 0.571      | 0.143        | 0.005 (0.000)    | 0.267 (0.022)    | -         |     6.30 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     2200 | 2024-01-19 | Fort Arena  | W   | 0.570      | 0.143        | -                | 0.025 (0.002)    | -         |     1.95 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     2900 | 2023-12-06 | -72c        | L   | 0.278      | -            | -                | -                | -         |    -6.02 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     2927 | 2023-12-05 | GR          | L   | 0.272      | -            | -                | -                | -         |    -5.68 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     2980 | 2023-12-02 | The Huns    | W   | 0.251      | 0.300        | 0.002 (0.000)    | -                | 1 (0.251) |     1.53 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3233 | 2023-11-17 | Newhappy    | L   | 0.152      | -            | -                | -                | -         |    -2.93 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3245 | 2023-11-17 | TYLOO       | L   | 0.150      | -            | -                | -                | -         |    -1.71 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3278 | 2023-11-16 | Eruption    | W   | 0.145      | 0.143        | 0.000 (0.000)    | 0.091 (0.002)    | -         |     1.17 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3284 | 2023-11-16 | Hyper5      | W   | 0.144      | -            | -                | -                | -         |     0.46 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3550 | 2023-11-04 | TheMongolz  | L   | 0.065      | -            | -                | -                | -         |    -0.09 | cool4st, dobu, kabal, MiQ, yAmi       |
|            1 |     3569 | 2023-11-03 | Eruption    | W   | 0.057      | 0.307        | 0.000 (0.000)    | -                | 1 (0.057) |     0.46 | cool4st, dobu, kabal, MiQ, yAmi       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,291.47)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.306 | $1,300.00      | $397.38         |
| 2023-12-02 |      0.251 | $3,186.00      | $800.55         |
| 2023-11-04 |      0.065 | $1,449.00      | $93.54          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
