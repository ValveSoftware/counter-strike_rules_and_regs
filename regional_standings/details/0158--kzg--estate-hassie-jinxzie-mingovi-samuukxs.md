### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  623.4<br />
<br />
Final Rank Value (623.4) = Starting Rank Value (730.7) + Head To Head Adjustments (-107.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.7
- 400 + ( ( 0.170 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 730.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      172 | 2024-05-22 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -5.67 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           31 |      177 | 2024-05-22 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -5.97 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           30 |      431 | 2024-05-15 | DXA                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.244 (0.081)    | 0 (0.000) |    14.36 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           29 |      435 | 2024-05-15 | DXA                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.244 (0.081)    | 0 (0.000) |    15.69 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           28 |      624 | 2024-05-08 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -6.48 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           27 |      626 | 2024-05-08 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -6.87 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           26 |      878 | 2024-04-26 | Rooster            | L   | 0.977      | -            | -                | -                | -         |    -7.12 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           25 |      882 | 2024-04-25 | MIBR               | L   | 0.975      | -            | -                | -                | -         |    -0.14 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           24 |     1143 | 2024-04-17 | Mindfreak          | L   | 0.917      | -            | -                | -                | -         |   -13.69 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs       |
|           23 |     1314 | 2024-04-10 | Canon Event        | W   | 0.870      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.81 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           22 |     1320 | 2024-04-10 | Canon Event        | W   | 0.870      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.22 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           21 |     1541 | 2024-04-03 | Vantage            | L   | 0.824      | -            | -                | -                | -         |   -14.35 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           20 |     1542 | 2024-04-03 | Vantage            | L   | 0.823      | -            | -                | -                | -         |   -15.41 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           19 |     1671 | 2024-03-27 | FlyQuest           | L   | 0.777      | -            | -                | -                | -         |    -0.40 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           18 |     1677 | 2024-03-27 | FlyQuest           | L   | 0.777      | -            | -                | -                | -         |    -0.40 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           17 |     1720 | 2024-03-23 | Arcade             | W   | 0.750      | 0.315        | 0.006 (0.001)    | 0.229 (0.054)    | 1 (0.750) |    13.52 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           16 |     1721 | 2024-03-23 | DXA                | L   | 0.750      | -            | -                | -                | -         |   -11.13 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           15 |     1941 | 2024-03-13 | RKON               | L   | 0.684      | -            | -                | -                | -         |   -14.87 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           14 |     1947 | 2024-03-13 | RKON               | W   | 0.683      | 0.333        | 0.000 (0.000)    | 0.107 (0.024)    | 0 (0.000) |     6.63 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           13 |     2115 | 2024-03-06 | Arcade             | L   | 0.637      | -            | -                | -                | -         |    -9.00 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           12 |     2122 | 2024-03-06 | Arcade             | L   | 0.637      | -            | -                | -                | -         |    -9.52 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           11 |     2418 | 2024-02-21 | Mindfreak          | L   | 0.544      | -            | -                | -                | -         |   -10.93 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           10 |     2425 | 2024-02-21 | Mindfreak          | L   | 0.543      | -            | -                | -                | -         |   -11.42 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            9 |     2451 | 2024-02-20 | Cringexe           | L   | 0.536      | -            | -                | -                | -         |   -12.96 | dpr, Estate, Hassie, Mingovi, Samuukxs        |
|            8 |     2495 | 2024-02-18 | Arcade             | L   | 0.523      | -            | -                | -                | -         |    -9.18 | dpr, Hassie, Lexon, Mingovi, Samuukxs         |
|            7 |     2549 | 2024-02-16 | sunday school      | L   | 0.510      | -            | -                | -                | -         |    -9.55 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            6 |     2574 | 2024-02-15 | sunday school      | W   | 0.504      | 0.143        | 0.007 (0.000)    | 0.063 (0.005)    | 0 (0.000) |     6.42 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            5 |     2578 | 2024-02-14 | Vantage            | W   | 0.503      | 0.143        | 0.000 (0.000)    | 0.247 (0.018)    | 0 (0.000) |     4.09 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            4 |     2619 | 2024-02-14 | Mindfreak          | W   | 0.496      | 0.143        | 0.000 (0.000)    | 0.287 (0.020)    | 0 (0.000) |     4.63 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            3 |     2644 | 2024-02-13 | RKON               | W   | 0.490      | 0.143        | 0.000 (0.000)    | 0.107 (0.007)    | 0 (0.000) |     3.74 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            2 |     2965 | 2024-01-24 | Vantage            | L   | 0.357      | -            | -                | -                | -         |    -8.29 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            1 |     3337 | 2024-01-15 | Mindfreak          | L   | 0.296      | -            | -                | -                | -         |    -7.13 | constantinos, Hassie, Mingovi, pain, Samuukxs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,174.45)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $450.00        | $450.00         |
| 2024-04-28 |      0.990 | $2,000.00      | $1,980.29       |
| 2024-03-23 |      0.750 | $992.00        | $744.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
