### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  793.3<br />
<br />
Final Rank Value (793.3) = Starting Rank Value (762.3) + Head To Head Adjustments (31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.182[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.3
- 400 + ( ( 0.190 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 762.3


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
|           24 |      923 | 2024-04-02 | TheMongolz  | L   | 0.972      | -            | -                | -                | -         |    -1.03 | Annihilation, dobu, kabal, MiQ, Zesta |
|           23 |      929 | 2024-04-02 | Lynn Vision | L   | 0.971      | -            | -                | -                | -         |    -3.82 | Annihilation, dobu, kabal, MiQ, Zesta |
|           22 |     1286 | 2024-03-13 | -72c        | W   | 0.838      | 0.143        | 0.003 (0.000)    | 0.053 (0.006)    | 0 (0.000) |     6.92 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           21 |     1297 | 2024-03-13 | ROUX        | W   | 0.838      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     2.66 | dobu, FlyNN, kabal, MiQ, Zesta        |
|           20 |     1618 | 2024-02-27 | FlyQuest    | L   | 0.743      | -            | -                | -                | -         |    -1.03 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           19 |     1642 | 2024-02-27 | TYLOO       | W   | 0.737      | 0.143        | 0.093 (0.010)    | 0.436 (0.046)    | 1 (0.737) |    17.42 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           18 |     1645 | 2024-02-26 | MAG         | W   | 0.735      | 0.143        | 0.000 (0.000)    | 0.193 (0.020)    | 1 (0.735) |     5.26 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           17 |     1660 | 2024-02-25 | FlyQuest    | L   | 0.729      | -            | -                | -                | -         |    -0.86 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           16 |     2162 | 2024-02-02 | GR          | L   | 0.571      | -            | -                | -                | -         |   -11.88 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           15 |     2209 | 2024-01-31 | NKT         | W   | 0.558      | 0.143        | 0.013 (0.001)    | 0.088 (0.007)    | 0 (0.000) |     8.34 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           14 |     2210 | 2024-01-31 | Rare Atom   | W   | 0.557      | 0.143        | 0.025 (0.002)    | 0.189 (0.015)    | 0 (0.000) |     7.45 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           13 |     2334 | 2024-01-23 | The Huns    | L   | 0.504      | -            | -                | -                | -         |   -10.40 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           12 |     2361 | 2024-01-22 | Rare Atom   | W   | 0.498      | 0.143        | 0.025 (0.002)    | 0.189 (0.013)    | 0 (0.000) |     6.71 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           11 |     2387 | 2024-01-21 | The Huns    | W   | 0.492      | 0.143        | 0.001 (0.000)    | 0.184 (0.013)    | 0 (0.000) |     5.39 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|           10 |     2395 | 2024-01-21 | TheMongolz  | L   | 0.490      | -            | -                | -                | -         |    -0.34 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            9 |     2487 | 2024-01-19 | GR          | W   | 0.478      | 0.143        | 0.005 (0.000)    | 0.217 (0.015)    | 0 (0.000) |     5.42 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            8 |     2496 | 2024-01-19 | Fort Arena  | W   | 0.477      | 0.143        | -                | 0.020 (0.001)    | -         |     1.81 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            7 |     3196 | 2023-12-06 | -72c        | L   | 0.185      | -            | -                | -                | -         |    -3.96 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            6 |     3223 | 2023-12-05 | GR          | L   | 0.178      | -            | -                | -                | -         |    -3.64 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            5 |     3276 | 2023-12-02 | The Huns    | W   | 0.158      | 0.300        | 0.001 (0.000)    | 0.184 (0.009)    | 1 (0.158) |     1.67 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            4 |     3529 | 2023-11-17 | Newhappy    | L   | 0.059      | -            | -                | -                | -         |    -1.11 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3541 | 2023-11-17 | TYLOO       | L   | 0.057      | -            | -                | -                | -         |    -0.42 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3574 | 2023-11-16 | Eruption    | W   | 0.051      | -            | -                | -                | -         |     0.28 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     3580 | 2023-11-16 | Hyper5      | W   | 0.051      | -            | -                | -                | -         |     0.19 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($779.36)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.212 | $1,300.00      | $276.08         |
| 2023-12-02 |      0.158 | $3,186.00      | $503.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
