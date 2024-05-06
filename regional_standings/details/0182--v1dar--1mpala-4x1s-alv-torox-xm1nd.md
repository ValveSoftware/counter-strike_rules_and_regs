### Roster Details<br />
Team Name: V1dar<br />
Roster: 1mpala, 4X1s, Alv, torox, xm1nd<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  561.9<br />
<br />
Final Rank Value (561.9) = Starting Rank Value (534.9) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.9
- 400 + ( ( 0.071 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 534.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       60 | 2024-05-03 | RUBY         | L   | 1.000      | -            | -                | -                | -         |    -5.62 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            9 |      103 | 2024-05-01 | B8           | L   | 1.000      | -            | -                | -                | -         |    -2.94 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            8 |      130 | 2024-04-30 | MOUZ NXT     | L   | 1.000      | -            | -                | -                | -         |    -2.25 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            7 |      199 | 2024-04-27 | Viperio      | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.089 (0.013)    | 0 (0.000) |    19.08 | 1mpala, 4X1s, Alv, torox, xm1nd |
|            6 |     1349 | 2024-03-10 | MOUZ NXT     | L   | 0.820      | -            | -                | -                | -         |    -1.55 | 1mpala, 4X1s, Alv, lom1k, torox |
|            5 |     1458 | 2024-03-06 | Endpoint     | L   | 0.792      | -            | -                | -                | -         |    -3.57 | 1mpala, 4X1s, Alv, lom1k, torox |
|            4 |     1623 | 2024-02-27 | FORZE        | L   | 0.740      | -            | -                | -                | -         |    -1.31 | 1mpala, 4X1s, Alv, lom1k, torox |
|            3 |     1625 | 2024-02-27 | Sashi        | W   | 0.740      | 0.143        | 0.188 (0.020)    | 1.000 (0.106)    | 0 (0.000) |    21.70 | 1mpala, 4X1s, Alv, lom1k, torox |
|            2 |     2822 | 2024-01-11 | SINNERS      | L   | 0.426      | -            | -                | -                | -         |    -0.71 | 1mpala, 4X1s, Alv, lom1k, torox |
|            1 |     2838 | 2024-01-10 | 1WIN Academy | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.21 | 1mpala, 4X1s, Alv, lom1k, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
