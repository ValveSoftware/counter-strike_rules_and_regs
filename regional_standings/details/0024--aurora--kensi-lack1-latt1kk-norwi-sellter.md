### Roster Details<br />
Team Name: Aurora<br />
Roster: KENSI, Lack1, latt1kk, Norwi, SELLTER<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1104.2<br />
<br />
Final Rank Value (1104.2) = Starting Rank Value (956.6) + Head To Head Adjustments (147.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.262[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.6
- 400 + ( ( 0.272 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 956.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      118 | 2023-02-06 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -6.94 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|           15 |      128 | 2023-02-06 | Illuminar       | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.700 (0.304)    | 0 (0.000) |    12.67 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|           14 |      158 | 2023-02-05 | MOUZ NXT        | W   | 1.000      | 0.435        | 0.015 (0.007)    | 0.537 (0.234)    | 0 (0.000) |     7.02 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|           13 |      197 | 2023-02-03 | Endpoint        | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.641 (0.279)    | 0 (0.000) |    10.44 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|           12 |      293 | 2023-01-30 | HAVU            | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.600 (0.261)    | 0 (0.000) |    13.79 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|           11 |      334 | 2023-01-28 | Let us cook     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.32 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|           10 |      401 | 2023-01-26 | Bad News Eagles | W   | 1.000      | 0.435        | 0.066 (0.029)    | 0.375 (0.163)    | 0 (0.000) |    19.74 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            9 |      416 | 2023-01-26 | GamerLegion     | W   | 1.000      | 0.435        | 0.105 (0.046)    | 0.469 (0.204)    | 0 (0.000) |    20.73 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            8 |      434 | 2023-01-25 | Sangal          | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.684 (0.297)    | 0 (0.000) |    11.88 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            7 |      453 | 2023-01-25 | Partizan        | W   | 1.000      | 0.435        | -                | 0.653 (0.284)    | 0 (0.000) |    12.07 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            6 |      502 | 2023-01-23 | Movistar Riders | W   | 1.000      | 0.435        | 0.010 (0.004)    | -                | 0 (0.000) |     7.08 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            5 |      587 | 2023-01-19 | GODSENT         | W   | 1.000      | -            | -                | -                | -         |     8.68 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            4 |      648 | 2023-01-17 | Tricked         | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | -         |    15.19 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            3 |      697 | 2023-01-14 | Websterz        | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.403 (0.175)    | -         |     9.78 | KENSI, Lack1, latt1kk, Norwi, SELLTER    |
|            2 |      946 | 2022-12-11 | LAKAKA          | W   | 0.780      | -            | -                | -                | -         |     2.17 | Get_Jeka, Lack1, latt1kk, Norwi, SELLTER |
|            1 |      955 | 2022-12-11 | mix123          | W   | 0.779      | -            | -                | -                | -         |     1.04 | Get_Jeka, Lack1, latt1kk, Norwi, SELLTER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,339.84)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-01-26 |      1.000 | $22,000.00     | $22,000.00      |
| 2022-12-11 |      0.780 | $3,000.00      | $2,339.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
