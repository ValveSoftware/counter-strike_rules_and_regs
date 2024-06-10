### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  548.4<br />
<br />
Final Rank Value (548.4) = Starting Rank Value (529.8) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.8
- 400 + ( ( 0.065 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 529.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      365 | 2024-06-03 | Verdant           | L   | 1.000      | -            | -                | -                | -         |    -5.44 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |      429 | 2024-06-01 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |    -8.98 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |      451 | 2024-05-31 | VP.Prodigy        | W   | 1.000      | 0.371        | 0.016 (0.006)    | 0.539 (0.200)    | 0 (0.000) |    28.07 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |      501 | 2024-05-29 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -21.34 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |      811 | 2024-05-18 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -2.89 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |      834 | 2024-05-17 | WOPA              | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.039 (0.006)    | 0 (0.000) |    14.44 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |      968 | 2024-05-14 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |    -4.26 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |      994 | 2024-05-13 | Secret            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.128 (0.018)    | 0 (0.000) |    18.36 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     1307 | 2024-04-29 | Nexus             | L   | 0.918      | -            | -                | -                | -         |    -3.58 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     1323 | 2024-04-28 | VP.Prodigy        | L   | 0.912      | -            | -                | -                | -         |    -3.80 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     1609 | 2024-04-18 | BIG               | L   | 0.844      | -            | -                | -                | -         |    -0.20 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2085 | 2024-04-01 | Lazer Cats        | W   | 0.733      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.70 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     3785 | 2024-01-16 | ex-Anonymo        | L   | 0.227      | -            | -                | -                | -         |    -2.50 | eightz999, facecrack, JIaYm, k0s, Z1W0W     |

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
