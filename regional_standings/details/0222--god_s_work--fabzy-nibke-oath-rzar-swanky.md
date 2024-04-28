### Roster Details<br />
Team Name: God's Work<br />
Roster: Fabzy, nibke, Oath, rzar, SWANKY<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [222](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  484.3<br />
<br />
Final Rank Value (484.3) = Starting Rank Value (485.4) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 485.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      655 | 2023-01-17 | Hello Kitten  | L   | 1.000      | -            | -                | -                | -         |   -14.11 | Fabzy, nibke, Oath, rzar, SWANKY   |
|            9 |      675 | 2023-01-16 | maxed out     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.51 | DannyG, Fabzy, nibke, Oath, SWANKY |
|            8 |     1291 | 2022-12-01 | e-LEMON-ators | L   | 0.710      | -            | -                | -                | -         |    -7.09 | Fabzy, Oath, rzar, SWANKY, vanilla |
|            7 |     1315 | 2022-11-30 | Grayhound     | L   | 0.704      | -            | -                | -                | -         |    -2.60 | Fabzy, nibke, Oath, rzar, SWANKY   |
|            6 |     1487 | 2022-11-24 | Frontier      | W   | 0.664      | 0.350        | 0.000 (0.000)    | 0.041 (0.010)    | 0 (0.000) |     8.05 | Fabzy, nibke, Oath, rzar, SWANKY   |
|            5 |     1632 | 2022-11-16 | Rooster       | L   | 0.610      | -            | -                | -                | -         |    -4.97 | Fabzy, nibke, Oath, rzar, vanilla  |
|            4 |     2228 | 2022-10-13 | Nut-E         | W   | 0.385      | 0.350        | 0.001 (0.000)    | 0.062 (0.008)    | 0 (0.000) |     6.64 | Fabzy, nibke, Oath, rzar, SWANKY   |
|            3 |     2533 | 2022-09-29 | Meat Grinders | W   | 0.291      | 0.350        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.51 | Fabzy, nibke, Oath, rzar, SWANKY   |
|            2 |     3041 | 2022-09-13 | Encore        | L   | 0.184      | -            | -                | -                | -         |    -1.77 | Fabzy, nibke, Oath, rzar, slipary  |
|            1 |     3650 | 2022-08-22 | VERTEX        | L   | 0.038      | -            | -                | -                | -         |    -0.25 | ADDICT, BL1TZ, BRACE, malta, pz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
