### Roster Details<br />
Team Name: Preasy<br />
Roster: Equip, Griller, Maze, Skejs, VireZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  780.2<br />
<br />
Final Rank Value (780.2) = Starting Rank Value (791.8) + Head To Head Adjustments (-11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.8
- 400 + ( ( 0.197 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 791.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       83 | 2024-06-09 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -4.76 | Equip, Griller, Maze, Skejs, VireZ     |
|           10 |      535 | 2024-05-28 | Permitta        | L   | 1.000      | -            | -                | -                | -         |    -9.94 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |      575 | 2024-05-26 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -4.77 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |      669 | 2024-05-22 | ECLOT           | W   | 1.000      | 0.371        | 0.101 (0.038)    | 0.549 (0.203)    | 0 (0.000) |    27.53 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |      932 | 2024-05-15 | ECF             | L   | 1.000      | -            | -                | -                | -         |   -10.49 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |      982 | 2024-05-14 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -5.79 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     1032 | 2024-05-12 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.081 (0.027)    | 0.531 (0.177)    | 0 (0.000) |    27.16 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     1066 | 2024-05-11 | Passion UA      | L   | 0.997      | -            | -                | -                | -         |    -7.02 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     1345 | 2024-04-27 | 777             | L   | 0.906      | -            | -                | -                | -         |   -16.59 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     1477 | 2024-04-21 | Astralis Talent | L   | 0.864      | -            | -                | -                | -         |   -11.78 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     1484 | 2024-04-20 | Sashi Academy   | W   | 0.860      | 0.318        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.860) |     4.85 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,665.93)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,445.00      | $1,445.00       |
| 2024-05-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-27 |      0.907 | $795.00        | $720.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
