### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [196](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  492.8<br />
<br />
Final Rank Value (492.8) = Starting Rank Value (488.0) + Head To Head Adjustments (4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.0
- 400 + ( ( 0.045 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 488.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        1 | 2024-05-29 | HOTU       | L   | 1.000      | -            | -                | -                | -         |   -19.68 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |      311 | 2024-05-18 | Rhyno      | L   | 1.000      | -            | -                | -                | -         |    -2.93 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |      334 | 2024-05-17 | WOPA       | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.042 (0.006)    | 0 (0.000) |    17.93 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |      468 | 2024-05-14 | VP.Prodigy | L   | 1.000      | -            | -                | -                | -         |    -8.33 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |      494 | 2024-05-13 | Secret     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.153 (0.022)    | 0 (0.000) |    20.10 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |      807 | 2024-04-29 | Nexus      | L   | 0.997      | -            | -                | -                | -         |    -3.46 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |      823 | 2024-04-28 | VP.Prodigy | L   | 0.991      | -            | -                | -                | -         |    -9.17 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     1109 | 2024-04-18 | BIG        | L   | 0.924      | -            | -                | -                | -         |    -0.26 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     1585 | 2024-04-01 | Lazer Cats | W   | 0.812      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.17 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     3285 | 2024-01-16 | ex-Anonymo | L   | 0.306      | -            | -                | -                | -         |    -2.53 | eightz999, facecrack, JIaYm, k0s, Z1W0W     |

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
