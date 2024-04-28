### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  704.0<br />
<br />
Final Rank Value (704.0) = Starting Rank Value (720.8) + Head To Head Adjustments (-16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.8
- 400 + ( ( 0.157 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 720.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      741 | 2022-12-25 | BakS            | L   | 0.872      | -            | -                | -                | -         |   -14.92 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, sm3t |
|            9 |      742 | 2022-12-25 | Boston crab     | L   | 0.871      | -            | -                | -                | -         |    -7.39 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, sm3t |
|            8 |     1037 | 2022-12-08 | Tricked         | L   | 0.760      | -            | -                | -                | -         |    -4.48 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            7 |     1081 | 2022-12-07 | ALTERNATE aTTaX | L   | 0.753      | -            | -                | -                | -         |    -8.97 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            6 |     1108 | 2022-12-06 | GenOne          | W   | 0.747      | 0.371        | 0.300 (0.083)    | 0.400 (0.111)    | 0 (0.000) |    20.47 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            5 |     1359 | 2022-11-28 | Spirit Academy  | L   | 0.692      | -            | -                | -                | -         |    -5.74 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            4 |     1455 | 2022-11-25 | Juggernauts     | W   | 0.673      | 0.304        | 0.004 (0.001)    | 0.190 (0.039)    | 0 (0.000) |     9.69 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            3 |     2651 | 2022-09-24 | B8              | L   | 0.260      | -            | -                | -                | -         |    -5.53 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            2 |     2708 | 2022-09-23 | NeedDOCTOR      | W   | 0.253      | 0.371        | 0.002 (0.000)    | 0.089 (0.008)    | 0 (0.000) |     3.30 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |
|            1 |     2786 | 2022-09-21 | Believe         | L   | 0.239      | -            | -                | -                | -         |    -3.27 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,514.48)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-25 |      0.873 | $500.00        | $436.43         |
| 2022-11-28 |      0.692 | $1,557.00      | $1,078.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
