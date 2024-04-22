### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, Levi, M1key, NIO, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  827.3<br />
<br />
Final Rank Value (827.3) = Starting Rank Value (855.9) + Head To Head Adjustments (-28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.148[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 855.9
- 400 + ( ( 0.236 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 855.9


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
|           24 |      157 | 2024-04-18 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -16.48 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           23 |      194 | 2024-04-17 | Viperio           | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.093 (0.031)    | 0 (0.000) |     7.82 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           22 |      230 | 2024-04-16 | Lilmix            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.041 (0.014)    | 0 (0.000) |     5.46 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           21 |      259 | 2024-04-14 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -11.26 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           20 |      365 | 2024-04-10 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -7.48 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           19 |      493 | 2024-04-06 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -12.39 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           18 |      504 | 2024-04-05 | ECLOT             | W   | 1.000      | 0.333        | 0.083 (0.028)    | 0.623 (0.208)    | 0 (0.000) |    22.11 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           17 |      550 | 2024-04-04 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -12.51 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           16 |      629 | 2024-04-02 | Illuminar         | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.139 (0.046)    | 0 (0.000) |     4.06 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           15 |      882 | 2024-03-17 | SINNERS           | L   | 0.959      | -            | -                | -                | -         |    -9.61 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           14 |      897 | 2024-03-16 | ECLOT             | L   | 0.953      | -            | -                | -                | -         |   -10.35 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           13 |      913 | 2024-03-15 | SINNERS           | W   | 0.947      | 0.345        | 0.043 (0.014)    | 0.779 (0.254)    | 1 (0.947) |    19.91 | K1-FiDa, Levi, M1key, NIO, Pechyn |
|           12 |     2438 | 2024-01-13 | Gaimin Gladiators | L   | 0.532      | -            | -                | -                | -         |    -1.26 | Levi, luko, M1key, NIO, Pechyn    |
|           11 |     2482 | 2024-01-12 | Comedy Club       | W   | 0.527      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.25 | Levi, luko, M1key, NIO, Pechyn    |
|           10 |     2605 | 2024-01-09 | Johnny Speeds     | L   | 0.506      | -            | -                | -                | -         |    -9.76 | Levi, luko, M1key, NIO, Pechyn    |
|            9 |     3077 | 2023-11-25 | SINNERS           | W   | 0.205      | 0.470        | 0.043 (0.004)    | 0.779 (0.075)    | 1 (0.205) |     4.98 | Levi, luko, M1key, NIO, Pechyn    |
|            8 |     3088 | 2023-11-24 | ECLOT             | L   | 0.200      | -            | -                | -                | -         |    -4.39 | Levi, luko, M1key, NIO, Pechyn    |
|            7 |     3398 | 2023-11-11 | SINNERS           | W   | 0.114      | 0.143        | 0.043 (0.001)    | 0.779 (0.013)    | 1 (0.114) |     2.77 | Levi, luko, M1key, NIO, Pechyn    |
|            6 |     3405 | 2023-11-11 | entropik ostrava  | W   | 0.113      | 0.143        | 0.000 (0.000)    | -                | 1 (0.113) |     0.26 | Levi, luko, M1key, NIO, Pechyn    |
|            5 |     3589 | 2023-11-02 | Spirit Academy    | L   | 0.051      | -            | -                | -                | -         |    -1.03 | Levi, luko, M1key, NIO, Pechyn    |
|            4 |     3667 | 2023-10-30 | LODIS             | W   | 0.033      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.11 | Levi, luko, M1key, NIO, Pechyn    |
|            3 |     3702 | 2023-10-29 | Sangal            | L   | 0.027      | -            | -                | -                | -         |    -0.74 | Levi, luko, M1key, NIO, Pechyn    |
|            2 |     3722 | 2023-10-29 | LODIS             | W   | 0.025      | 0.143        | -                | 0.001 (0.000)    | -         |     0.08 | Levi, luko, M1key, NIO, Pechyn    |
|            1 |     3824 | 2023-10-26 | Sangal            | L   | 0.005      | -            | -                | -                | -         |    -0.14 | Levi, luko, M1key, NIO, Pechyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,016.60)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-18 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-04-06 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-03-17 |      0.960 | $1,279.00      | $1,228.00       |
| 2023-11-25 |      0.207 | $8,627.00      | $1,788.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
