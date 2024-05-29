### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  570.3<br />
<br />
Final Rank Value (570.3) = Starting Rank Value (532.8) + Head To Head Adjustments (37.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 532.8
- 400 + ( ( 0.068 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 532.8


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
|           12 |        5 | 2024-05-29 | Grannys Knockers | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.042 (0.015)    | 0 (0.000) |    21.91 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           11 |      550 | 2024-05-11 | Verdant          | L   | 1.000      | -            | -                | -                | -         |    -6.57 | 1mpala, 4X1s, Alv, torox, xm1nd |
|           10 |      711 | 2024-05-03 | RUBY             | L   | 1.000      | -            | -                | -                | -         |    -5.15 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |      754 | 2024-05-01 | B8               | L   | 1.000      | -            | -                | -                | -         |    -2.36 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |      781 | 2024-04-30 | MOUZ NXT         | L   | 1.000      | -            | -                | -                | -         |    -2.32 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |      850 | 2024-04-27 | Viperio          | W   | 0.984      | 0.143        | 0.003 (0.000)    | 0.076 (0.011)    | 0 (0.000) |    18.51 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     2000 | 2024-03-10 | MOUZ NXT         | L   | 0.666      | -            | -                | -                | -         |    -1.27 | 1mpala, 4X1s, Alv, lom1k, torox |
|            5 |     2109 | 2024-03-06 | Endpoint         | L   | 0.638      | -            | -                | -                | -         |    -2.92 | 1mpala, 4X1s, Alv, lom1k, torox |
|            4 |     2274 | 2024-02-27 | FORZE            | L   | 0.586      | -            | -                | -                | -         |    -1.53 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     2276 | 2024-02-27 | Sashi            | W   | 0.586      | 0.143        | 0.157 (0.013)    | 1.000 (0.084)    | 0 (0.000) |    17.20 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     3473 | 2024-01-11 | SINNERS          | L   | 0.272      | -            | -                | -                | -         |    -0.65 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     3489 | 2024-01-10 | 1WIN Academy     | W   | 0.267      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.70 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
