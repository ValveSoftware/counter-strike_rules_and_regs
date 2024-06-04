### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  733.1<br />
<br />
Final Rank Value (733.1) = Starting Rank Value (686.9) + Head To Head Adjustments (46.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.9
- 400 + ( ( 0.148 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 686.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     2018 | 2024-03-09 | RUBY              | L   | 0.659      | -            | -                | -                | -         |    -7.38 | alpha, baz, keegaN, Magnojez, notineki    |
|           18 |     2050 | 2024-03-08 | Passion UA        | W   | 0.652      | 0.372        | 0.056 (0.014)    | 0.759 (0.184)    | 0 (0.000) |    16.67 | alpha, baz, keegaN, Magnojez, notineki    |
|           17 |     2245 | 2024-02-29 | Aurora            | L   | 0.598      | -            | -                | -                | -         |    -0.38 | alpha, baz, keegaN, Magnojez, notineki    |
|           16 |     2255 | 2024-02-28 | 9 Pandas          | L   | 0.593      | -            | -                | -                | -         |    -1.39 | alpha, baz, keegaN, Magnojez, notineki    |
|           15 |     2257 | 2024-02-28 | HAVU              | W   | 0.592      | 0.143        | 0.004 (0.000)    | 0.166 (0.014)    | 0 (0.000) |     9.97 | alpha, baz, keegaN, Magnojez, notineki    |
|           14 |     2275 | 2024-02-27 | RUBY              | W   | 0.586      | 0.143        | 0.012 (0.001)    | 0.547 (0.046)    | 0 (0.000) |    12.64 | alpha, baz, keegaN, Magnojez, notineki    |
|           13 |     2282 | 2024-02-27 | brazylijski luz   | W   | 0.585      | 0.143        | 0.006 (0.001)    | 0.374 (0.031)    | 0 (0.000) |    11.45 | alpha, baz, keegaN, Magnojez, notineki    |
|           12 |     2832 | 2024-02-01 | Sangal            | L   | 0.412      | -            | -                | -                | -         |    -1.36 | alpha, baz, keegaN, Magnojez, notineki    |
|           11 |     2895 | 2024-01-28 | Alliance          | W   | 0.383      | 0.371        | 0.004 (0.001)    | 0.617 (0.088)    | 0 (0.000) |     8.21 | alpha, baz, keegaN, Magnojez, notineki    |
|           10 |     2957 | 2024-01-24 | Sangal            | L   | 0.358      | -            | -                | -                | -         |    -1.15 | alpha, keegaN, Magnojez, notineki, S0tF1k |
|            9 |     3202 | 2024-01-18 | Permitta          | L   | 0.318      | -            | -                | -                | -         |    -2.38 | alpha, baz, keegaN, Magnojez, notineki    |
|            8 |     3326 | 2024-01-15 | Aurora Young Blud | L   | 0.298      | -            | -                | -                | -         |    -5.15 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     3578 | 2023-12-23 | ex-Anonymo        | W   | 0.143      | 0.333        | 0.002 (0.000)    | 0.077 (0.004)    | 0 (0.000) |     2.07 | alpha, baz, keegaN, Magnojez, notineki    |
|            6 |     3582 | 2023-12-21 | ex-Anonymo        | W   | 0.131      | 0.333        | 0.002 (0.000)    | 0.077 (0.003)    | 0 (0.000) |     1.90 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3601 | 2023-12-19 | NAVI Junior       | W   | 0.117      | 0.333        | 0.009 (0.000)    | 0.115 (0.004)    | 0 (0.000) |     1.92 | alpha, baz, keegaN, Magnojez, notineki    |
|            4 |     3667 | 2023-12-16 | The Witchers      | W   | 0.098      | 0.333        | 0.010 (0.000)    | 0.056 (0.002)    | 0 (0.000) |     1.53 | alpha, baz, keegaN, Magnojez, notineki    |
|            3 |     3806 | 2023-12-07 | FORZE             | L   | 0.039      | -            | -                | -                | -         |    -0.63 | baz, keegaN, Magnojez, notineki, robo     |
|            2 |     3828 | 2023-12-06 | SINNERS           | L   | 0.033      | -            | -                | -                | -         |    -0.17 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO     |
|            1 |     3894 | 2023-12-03 | ARCRED            | L   | 0.012      | -            | -                | -                | -         |    -0.21 | alpha, baz, keegaN, Magnojez, notineki    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,026.54)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.143 | $5,000.00      | $717.20         |
| 2023-12-10 |      0.059 | $5,000.00      | $296.88         |
| 2023-12-03 |      0.012 | $1,000.00      | $12.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
