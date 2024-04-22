### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, Rony4ka, tenweri, uulis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  604.3<br />
<br />
Final Rank Value (604.3) = Starting Rank Value (667.6) + Head To Head Adjustments (-63.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.6
- 400 + ( ( 0.139 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 667.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       88 | 2024-04-19 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -12.85 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           11 |      254 | 2024-04-14 | ex-FORZE Ladies   | L   | 1.000      | -            | -                | -                | -         |   -14.23 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           10 |      310 | 2024-04-11 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -7.11 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            9 |      407 | 2024-04-09 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -13.54 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            8 |      488 | 2024-04-06 | BIG EQUIPA        | L   | 1.000      | -            | -                | -                | -         |   -12.06 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            7 |      533 | 2024-04-04 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -7.76 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            6 |      712 | 2024-03-27 | Fearless Cheetahs | L   | 1.000      | -            | -                | -                | -         |   -10.88 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            5 |      826 | 2024-03-20 | VP.Angels         | W   | 0.980      | 0.331        | 0.006 (0.002)    | 0.082 (0.027)    | 0 (0.000) |    13.95 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     1124 | 2024-03-07 | 1WIN Gang         | W   | 0.894      | 0.331        | 0.006 (0.002)    | 0.046 (0.014)    | 0 (0.000) |    12.57 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            3 |     1407 | 2024-02-24 | ENCE Athena       | L   | 0.812      | -            | -                | -                | -         |   -12.13 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     1538 | 2024-02-18 | Astralis W        | W   | 0.773      | 0.143        | 0.005 (0.001)    | 0.082 (0.009)    | 0 (0.000) |    11.37 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     1647 | 2024-02-14 | GUILD fe          | L   | 0.748      | -            | -                | -                | -         |   -10.68 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,500.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-04-14 |      1.000 | $250.00        | $250.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
