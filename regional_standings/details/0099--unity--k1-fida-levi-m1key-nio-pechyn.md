### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, M1key, NIO, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  801.5<br />
<br />
Final Rank Value (801.5) = Starting Rank Value (806.3) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.3
- 400 + ( ( 0.209 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 806.3


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
|           21 |       15 | 2024-05-29 | Rebels            | W   | 1.000      | 0.371        | 0.059 (0.022)    | 0.413 (0.153)    | 0 (0.000) |    25.30 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           20 |       27 | 2024-05-28 | GL Academy        | L   | 1.000      | -            | -                | -                | -         |   -16.06 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           19 |       97 | 2024-05-25 | iNation           | L   | 1.000      | -            | -                | -                | -         |   -24.82 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           18 |      123 | 2024-05-23 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -10.28 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           17 |      216 | 2024-05-21 | Rebels            | W   | 1.000      | 0.371        | 0.059 (0.022)    | 0.413 (0.153)    | 0 (0.000) |    25.06 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           16 |      502 | 2024-05-13 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -8.79 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           15 |     1104 | 2024-04-18 | Johnny Speeds     | L   | 0.924      | -            | -                | -                | -         |    -9.47 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           14 |     1141 | 2024-04-17 | Viperio           | W   | 0.917      | 0.333        | 0.003 (0.001)    | 0.076 (0.023)    | 0 (0.000) |     7.68 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           13 |     1177 | 2024-04-16 | Lilmix            | W   | 0.910      | 0.333        | 0.006 (0.002)    | 0.041 (0.013)    | 0 (0.000) |     9.73 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           12 |     1206 | 2024-04-14 | Sashi             | L   | 0.897      | -            | -                | -                | -         |    -6.88 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           11 |     1312 | 2024-04-10 | SINNERS           | L   | 0.870      | -            | -                | -                | -         |    -6.44 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           10 |     1440 | 2024-04-06 | Sashi             | L   | 0.843      | -            | -                | -                | -         |    -6.87 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            9 |     1451 | 2024-04-05 | ECLOT             | W   | 0.837      | 0.333        | 0.084 (0.023)    | 0.530 (0.148)    | 0 (0.000) |    19.83 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            8 |     1497 | 2024-04-04 | Sashi             | L   | 0.831      | -            | -                | -                | -         |    -6.59 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            7 |     1576 | 2024-04-02 | Illuminar         | W   | 0.818      | 0.333        | 0.000 (0.000)    | 0.155 (0.042)    | 0 (0.000) |     4.48 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            6 |     1829 | 2024-03-17 | SINNERS           | L   | 0.712      | -            | -                | -                | -         |    -7.03 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            5 |     1844 | 2024-03-16 | ECLOT             | L   | 0.706      | -            | -                | -                | -         |    -6.08 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            4 |     1860 | 2024-03-15 | SINNERS           | W   | 0.700      | 0.345        | 0.009 (0.002)    | 0.728 (0.176)    | 1 (0.700) |    15.06 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            3 |     3385 | 2024-01-13 | Gaimin Gladiators | L   | 0.285      | -            | -                | -                | -         |    -0.83 | Levi, luko, M1key, NIO, Pechyn    |
|            2 |     3429 | 2024-01-12 | Comedy Club       | W   | 0.280      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.83 | Levi, luko, M1key, NIO, Pechyn    |
|            1 |     3552 | 2024-01-09 | Johnny Speeds     | L   | 0.259      | -            | -                | -                | -         |    -2.66 | Levi, luko, M1key, NIO, Pechyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,213.75)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-18 |      0.924 | $3,000.00      | $2,772.04       |
| 2024-04-06 |      0.843 | $3,000.00      | $2,530.13       |
| 2024-03-17 |      0.713 | $1,279.00      | $911.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
