### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, M1key, NIO, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  830.0<br />
<br />
Final Rank Value (830.0) = Starting Rank Value (836.5) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 836.5
- 400 + ( ( 0.229 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 836.5


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
|           19 |      453 | 2024-04-18 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -15.80 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           18 |      490 | 2024-04-17 | Viperio           | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.089 (0.030)    | 0 (0.000) |     7.96 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           17 |      526 | 2024-04-16 | Lilmix            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.031 (0.010)    | 0 (0.000) |     5.49 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           16 |      555 | 2024-04-14 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -7.99 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           15 |      661 | 2024-04-10 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -6.48 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           14 |      789 | 2024-04-06 | Sashi             | L   | 0.997      | -            | -                | -                | -         |    -8.55 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           13 |      800 | 2024-04-05 | ECLOT             | W   | 0.991      | 0.333        | 0.156 (0.052)    | 0.607 (0.200)    | 0 (0.000) |    23.93 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           12 |      846 | 2024-04-04 | Sashi             | L   | 0.985      | -            | -                | -                | -         |    -8.20 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           11 |      925 | 2024-04-02 | Illuminar         | W   | 0.972      | 0.333        | 0.000 (0.000)    | 0.177 (0.057)    | 0 (0.000) |     4.87 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           10 |     1178 | 2024-03-17 | SINNERS           | L   | 0.866      | -            | -                | -                | -         |    -7.65 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            9 |     1193 | 2024-03-16 | ECLOT             | L   | 0.860      | -            | -                | -                | -         |    -6.97 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            8 |     1209 | 2024-03-15 | SINNERS           | W   | 0.854      | 0.345        | 0.033 (0.010)    | 0.749 (0.220)    | 1 (0.854) |    19.20 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|            7 |     2734 | 2024-01-13 | Gaimin Gladiators | L   | 0.439      | -            | -                | -                | -         |    -0.82 | Levi, luko, M1key, NIO, Pechyn    |
|            6 |     2778 | 2024-01-12 | Comedy Club       | W   | 0.434      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.13 | Levi, luko, M1key, NIO, Pechyn    |
|            5 |     2901 | 2024-01-09 | Johnny Speeds     | L   | 0.413      | -            | -                | -                | -         |    -7.54 | Levi, luko, M1key, NIO, Pechyn    |
|            4 |     3373 | 2023-11-25 | SINNERS           | W   | 0.112      | 0.470        | 0.033 (0.002)    | 0.749 (0.039)    | 1 (0.112) |     2.74 | Levi, luko, M1key, NIO, Pechyn    |
|            3 |     3384 | 2023-11-24 | ECLOT             | L   | 0.107      | -            | -                | -                | -         |    -2.40 | Levi, luko, M1key, NIO, Pechyn    |
|            2 |     3694 | 2023-11-11 | SINNERS           | W   | 0.020      | 0.143        | 0.033 (0.000)    | 0.749 (0.002)    | 1 (0.020) |     0.50 | Levi, luko, M1key, NIO, Pechyn    |
|            1 |     3701 | 2023-11-11 | entropik ostrava  | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.019) |     0.05 | Levi, luko, M1key, NIO, Pechyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,084.71)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-18 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-04-06 |      0.997 | $3,000.00      | $2,992.40       |
| 2024-03-17 |      0.867 | $1,279.00      | $1,108.66       |
| 2023-11-25 |      0.114 | $8,627.00      | $983.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
