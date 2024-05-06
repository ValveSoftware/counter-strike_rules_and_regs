### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  781.5<br />
<br />
Final Rank Value (781.5) = Starting Rank Value (740.7) + Head To Head Adjustments (40.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.7
- 400 + ( ( 0.179 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 740.7


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
|           21 |     1367 | 2024-03-09 | RUBY              | L   | 0.813      | -            | -                | -                | -         |   -11.77 | alpha, baz, keegaN, Magnojez, notineki    |
|           20 |     1399 | 2024-03-08 | Passion UA        | W   | 0.806      | 0.372        | 0.111 (0.033)    | 0.644 (0.193)    | 0 (0.000) |    19.12 | alpha, baz, keegaN, Magnojez, notineki    |
|           19 |     1594 | 2024-02-29 | Aurora            | L   | 0.752      | -            | -                | -                | -         |    -0.42 | alpha, baz, keegaN, Magnojez, notineki    |
|           18 |     1604 | 2024-02-28 | 9 Pandas          | L   | 0.747      | -            | -                | -                | -         |    -2.27 | alpha, baz, keegaN, Magnojez, notineki    |
|           17 |     1606 | 2024-02-28 | HAVU              | W   | 0.746      | 0.143        | 0.023 (0.002)    | 0.214 (0.023)    | 0 (0.000) |    14.03 | alpha, baz, keegaN, Magnojez, notineki    |
|           16 |     1624 | 2024-02-27 | RUBY              | W   | 0.740      | 0.143        | 0.011 (0.001)    | 0.460 (0.049)    | 0 (0.000) |    13.54 | alpha, baz, keegaN, Magnojez, notineki    |
|           15 |     1631 | 2024-02-27 | brazylijski luz   | W   | 0.739      | 0.143        | 0.017 (0.002)    | 0.373 (0.039)    | 0 (0.000) |    14.38 | alpha, baz, keegaN, Magnojez, notineki    |
|           14 |     2181 | 2024-02-01 | Sangal            | L   | 0.566      | -            | -                | -                | -         |    -7.80 | alpha, baz, keegaN, Magnojez, notineki    |
|           13 |     2244 | 2024-01-28 | Alliance          | W   | 0.538      | 0.371        | 0.016 (0.003)    | 0.815 (0.162)    | 0 (0.000) |    11.47 | alpha, baz, keegaN, Magnojez, notineki    |
|           12 |     2306 | 2024-01-24 | Sangal            | L   | 0.512      | -            | -                | -                | -         |    -7.43 | alpha, keegaN, Magnojez, notineki, S0tF1k |
|           11 |     2551 | 2024-01-18 | Permitta          | L   | 0.472      | -            | -                | -                | -         |    -3.70 | alpha, baz, keegaN, Magnojez, notineki    |
|           10 |     2675 | 2024-01-15 | Aurora Young Blud | L   | 0.452      | -            | -                | -                | -         |    -8.38 | alpha, baz, keegaN, Magnojez, notineki    |
|            9 |     2927 | 2023-12-23 | ex-Anonymo        | W   | 0.298      | 0.333        | 0.016 (0.002)    | 0.175 (0.017)    | 0 (0.000) |     4.73 | alpha, baz, keegaN, Magnojez, notineki    |
|            8 |     2931 | 2023-12-21 | ex-Anonymo        | W   | 0.285      | 0.333        | 0.016 (0.002)    | 0.175 (0.017)    | 0 (0.000) |     4.59 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     2950 | 2023-12-19 | NAVI Junior       | W   | 0.271      | 0.333        | 0.020 (0.002)    | 0.164 (0.015)    | 0 (0.000) |     4.28 | alpha, baz, keegaN, Magnojez, notineki    |
|            6 |     3016 | 2023-12-16 | The Witchers      | W   | 0.252      | 0.333        | 0.033 (0.003)    | 0.114 (0.010)    | 0 (0.000) |     4.00 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3155 | 2023-12-07 | FORZE             | L   | 0.193      | -            | -                | -                | -         |    -2.72 | baz, keegaN, Magnojez, notineki, robo     |
|            4 |     3177 | 2023-12-06 | SINNERS           | L   | 0.187      | -            | -                | -                | -         |    -0.83 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO     |
|            3 |     3243 | 2023-12-03 | ARCRED            | L   | 0.167      | -            | -                | -                | -         |    -2.78 | alpha, baz, keegaN, Magnojez, notineki    |
|            2 |     3471 | 2023-11-19 | The Witchers      | L   | 0.073      | -            | -                | -                | -         |    -1.14 | alpha, baz, keegaN, Magnojez, notineki    |
|            1 |     3739 | 2023-11-09 | Aurora Young Blud | L   | 0.004      | -            | -                | -                | -         |    -0.08 | alpha, baz, keegaN, Magnojez, notineki    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,721.57)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.298 | $5,000.00      | $1,487.66       |
| 2023-12-10 |      0.213 | $5,000.00      | $1,067.35       |
| 2023-12-03 |      0.167 | $1,000.00      | $166.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
