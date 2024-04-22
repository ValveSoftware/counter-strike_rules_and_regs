### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, miLo, Waldee, xia<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  652.0<br />
<br />
Final Rank Value (652.0) = Starting Rank Value (672.7) + Head To Head Adjustments (-20.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 672.7
- 400 + ( ( 0.141 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 672.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       85 | 2024-04-19 | Astralis W      | W   | 1.000      | 0.331        | 0.005 (0.002)    | 0.082 (0.027)    | 0 (0.000) |    13.72 | Aida, Emmsan, miLo, Waldee, xia  |
|           10 |      465 | 2024-04-07 | ex-FORZE Ladies | L   | 1.000      | -            | -                | -                | -         |   -15.87 | Aida, Emmsan, miLo, Waldee, xia  |
|            9 |      489 | 2024-04-06 | Pigeons         | L   | 1.000      | -            | -                | -                | -         |    -7.02 | Aida, Emmsan, miLo, Waldee, xia  |
|            8 |      538 | 2024-04-04 | BIG EQUIPA      | L   | 1.000      | -            | -                | -                | -         |   -13.00 | Aida, Emmsan, miLo, Waldee, xia  |
|            7 |      710 | 2024-03-27 | Pigeons         | L   | 1.000      | -            | -                | -                | -         |    -7.91 | Aida, Emmsan, miLo, Waldee, xia  |
|            6 |      827 | 2024-03-20 | NIP Impact      | L   | 0.980      | -            | -                | -                | -         |   -14.34 | Aida, Emmsan, miLo, Waldee, xia  |
|            5 |      979 | 2024-03-13 | GUILD fe        | W   | 0.934      | 0.331        | 0.009 (0.003)    | 0.220 (0.068)    | 0 (0.000) |    14.55 | Aida, Emmsan, miLo, Waldee, xia  |
|            4 |     1377 | 2024-02-25 | NAVI Javelins   | L   | 0.818      | -            | -                | -                | -         |    -7.10 | Aida, Emmsan, miLo, Waldee, xia  |
|            3 |     1407 | 2024-02-24 | Spirit fe       | W   | 0.812      | 0.238        | 0.008 (0.002)    | 0.123 (0.024)    | 0 (0.000) |    12.13 | Aida, Emmsan, miLo, Waldee, xia  |
|            2 |     1649 | 2024-02-14 | more whiskey    | W   | 0.747      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.14 | Aida, Emmsan, miLo, Waldee, xia  |
|            1 |     3845 | 2023-10-25 | VP.Angels       | W   | 0.000      | 0.329        | 0.006 (0.000)    | 0.082 (0.000)    | 0 (0.000) |     0.00 | manka, miLo, oxycet, Waldee, xia |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,314.85)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,050.00      | $1,050.00       |
| 2024-04-07 |      1.000 | $250.00        | $250.00         |
| 2023-10-28 |      0.020 | $750.00        | $14.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
