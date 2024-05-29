### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
Final Rank Value:  575.9<br />
<br />
Final Rank Value (575.9) = Starting Rank Value (626.3) + Head To Head Adjustments (-50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.3
- 400 + ( ( 0.117 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 626.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1032 | 2024-04-19 | ENCE Athena     | L   | 0.933      | -            | -                | -                | -         |   -13.06 | anja, aurora, Ismo, josefine, marie |
|           11 |     1203 | 2024-04-14 | NAVI Javelins   | L   | 0.898      | -            | -                | -                | -         |    -7.96 | anja, aurora, Ismo, josefine, marie |
|           10 |     1212 | 2024-04-13 | NIP Impact      | L   | 0.892      | -            | -                | -                | -         |    -9.18 | anja, aurora, Ismo, josefine, marie |
|            9 |     1231 | 2024-04-12 | Permitta W      | W   | 0.885      | 0.303        | 0.000 (0.000)    | 0.036 (0.010)    | 0 (0.000) |    10.39 | anja, aurora, Ismo, josefine, marie |
|            8 |     1252 | 2024-04-11 | Pigeons         | L   | 0.879      | -            | -                | -                | -         |    -6.45 | anja, aurora, Ismo, josefine, marie |
|            7 |     1299 | 2024-04-10 | Pigeons         | L   | 0.872      | -            | -                | -                | -         |    -6.77 | anja, aurora, Ismo, josefine, marie |
|            6 |     1379 | 2024-04-08 | Permitta W      | W   | 0.859      | 0.303        | 0.000 (0.000)    | 0.036 (0.009)    | 0 (0.000) |     9.68 | anja, aurora, Ismo, josefine, marie |
|            5 |     1525 | 2024-04-03 | NIP Impact      | L   | 0.826      | -            | -                | -                | -         |    -9.59 | anja, aurora, Ismo, josefine, marie |
|            4 |     1745 | 2024-03-21 | ex-GUILD fe     | L   | 0.739      | -            | -                | -                | -         |   -10.22 | anja, aurora, Ismo, josefine, marie |
|            3 |     2102 | 2024-03-06 | BIG EQUIPA      | L   | 0.639      | -            | -                | -                | -         |    -8.29 | anja, aurora, Ismo, josefine, marie |
|            2 |     2481 | 2024-02-18 | ex-FORZE Ladies | W   | 0.527      | 0.143        | 0.005 (0.000)    | 0.073 (0.005)    | 0 (0.000) |     8.78 | anja, aurora, Ismo, josefine, marie |
|            1 |     2485 | 2024-02-18 | Spirit fe       | L   | 0.526      | -            | -                | -                | -         |    -7.71 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($804.09)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
