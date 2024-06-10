### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  570.6<br />
<br />
Final Rank Value (570.6) = Starting Rank Value (536.4) + Head To Head Adjustments (34.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.4
- 400 + ( ( 0.068 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 536.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      419 | 2024-06-01 | Verdant          | L   | 1.000      | -            | -                | -                | -         |    -6.20 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           13 |      485 | 2024-05-30 | 1WIN             | L   | 1.000      | -            | -                | -                | -         |    -1.52 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           12 |      505 | 2024-05-29 | Grannys Knockers | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.116 (0.043)    | 0 (0.000) |    24.68 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |     1050 | 2024-05-11 | Verdant          | L   | 1.000      | -            | -                | -                | -         |    -5.42 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |     1211 | 2024-05-03 | RUBY             | L   | 0.945      | -            | -                | -                | -         |    -4.07 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |     1254 | 2024-05-01 | B8               | L   | 0.933      | -            | -                | -                | -         |    -1.74 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |     1281 | 2024-04-30 | MOUZ NXT         | L   | 0.926      | -            | -                | -                | -         |    -1.62 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |     1350 | 2024-04-27 | Viperio          | W   | 0.905      | 0.143        | 0.003 (0.000)    | 0.065 (0.008)    | 0 (0.000) |    17.46 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     2500 | 2024-03-10 | MOUZ NXT         | L   | 0.587      | -            | -                | -                | -         |    -0.87 | 1mpala, 4X1s, Alv, lom1k, torox |
|            5 |     2609 | 2024-03-06 | Endpoint         | L   | 0.559      | -            | -                | -                | -         |    -2.23 | 1mpala, 4X1s, Alv, lom1k, torox |
|            4 |     2774 | 2024-02-27 | FORZE            | L   | 0.507      | -            | -                | -                | -         |    -1.25 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     2776 | 2024-02-27 | Sashi            | W   | 0.506      | 0.143        | 0.174 (0.013)    | 1.000 (0.072)    | 0 (0.000) |    15.28 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     3973 | 2024-01-11 | SINNERS          | L   | 0.192      | -            | -                | -                | -         |    -0.23 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     3989 | 2024-01-10 | 1WIN Academy     | W   | 0.187      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.87 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
