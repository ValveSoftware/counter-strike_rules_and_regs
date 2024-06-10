### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, M1key, NIO, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  956.7<br />
<br />
Final Rank Value (956.7) = Starting Rank Value (987.8) + Head To Head Adjustments (-31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.8
- 400 + ( ( 0.295 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 987.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      380 | 2024-06-03 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -17.08 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           27 |      391 | 2024-06-02 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -9.94 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           26 |      398 | 2024-06-02 | SINNERS           | W   | 1.000      | 0.346        | 0.045 (0.016)    | 0.844 (0.292)    | 1 (1.000) |    18.88 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           25 |      405 | 2024-06-02 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.35 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           24 |      424 | 2024-06-01 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -10.47 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           23 |      461 | 2024-05-31 | SINNERS           | W   | 1.000      | 0.346        | 0.045 (0.016)    | 0.844 (0.292)    | 1 (1.000) |    19.99 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           22 |      470 | 2024-05-31 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.081 (0.030)    | 0.531 (0.197)    | 0 (0.000) |    21.63 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           21 |      515 | 2024-05-29 | Rebels            | W   | 1.000      | 0.371        | 0.053 (0.020)    | 0.472 (0.175)    | 0 (0.000) |    21.93 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           20 |      527 | 2024-05-28 | GL Academy        | L   | 1.000      | -            | -                | -                | -         |   -21.70 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           19 |      597 | 2024-05-25 | ex-iNation        | L   | 1.000      | -            | -                | -                | -         |   -22.55 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           18 |      623 | 2024-05-23 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -12.95 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           17 |      716 | 2024-05-21 | Rebels            | W   | 1.000      | 0.371        | 0.053 (0.020)    | 0.472 (0.175)    | 0 (0.000) |    21.12 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           16 |     1002 | 2024-05-13 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -9.46 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           15 |     1604 | 2024-04-18 | Johnny Speeds     | L   | 0.845      | -            | -                | -                | -         |    -8.82 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           14 |     1641 | 2024-04-17 | Viperio           | W   | 0.838      | 0.333        | 0.003 (0.001)    | 0.065 (0.018)    | 0 (0.000) |     3.52 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           13 |     1677 | 2024-04-16 | Lilmix            | W   | 0.831      | 0.333        | 0.011 (0.003)    | 0.039 (0.011)    | 0 (0.000) |     4.96 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           12 |     1706 | 2024-04-14 | Sashi             | L   | 0.818      | -            | -                | -                | -         |    -8.87 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           11 |     1812 | 2024-04-10 | SINNERS           | L   | 0.791      | -            | -                | -                | -         |    -7.56 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           10 |     1940 | 2024-04-06 | Sashi             | L   | 0.764      | -            | -                | -                | -         |    -8.85 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            9 |     1951 | 2024-04-05 | ECLOT             | W   | 0.758      | 0.333        | 0.101 (0.026)    | 0.549 (0.139)    | 0 (0.000) |    17.59 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            8 |     1997 | 2024-04-04 | Sashi             | L   | 0.751      | -            | -                | -                | -         |    -8.70 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            7 |     2076 | 2024-04-02 | Illuminar         | W   | 0.738      | 0.333        | 0.000 (0.000)    | 0.366 (0.090)    | 0 (0.000) |     2.95 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            6 |     2329 | 2024-03-17 | SINNERS           | L   | 0.632      | -            | -                | -                | -         |    -7.67 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            5 |     2344 | 2024-03-16 | ECLOT             | L   | 0.627      | -            | -                | -                | -         |    -5.71 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            4 |     2360 | 2024-03-15 | SINNERS           | W   | 0.620      | 0.345        | 0.045 (0.010)    | 0.844 (0.181)    | 1 (0.620) |    11.98 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            3 |     3885 | 2024-01-13 | Gaimin Gladiators | L   | 0.206      | -            | -                | -                | -         |    -1.38 | Levi, luko, M1key, NIO, Pechyn    |
|            2 |     3929 | 2024-01-12 | Comedy Club       | W   | 0.201      | -            | -                | -                | -         |     0.23 | Levi, luko, M1key, NIO, Pechyn    |
|            1 |     4052 | 2024-01-09 | Johnny Speeds     | L   | 0.179      | -            | -                | -                | -         |    -1.88 | Levi, luko, M1key, NIO, Pechyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,685.45)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $3,048.00      | $3,048.00       |
| 2024-04-18 |      0.845 | $3,000.00      | $2,534.52       |
| 2024-04-06 |      0.764 | $3,000.00      | $2,292.61       |
| 2024-03-17 |      0.634 | $1,279.00      | $810.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
