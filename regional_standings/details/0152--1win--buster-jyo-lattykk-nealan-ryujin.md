### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [152](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  692.3<br />
<br />
Final Rank Value (692.3) = Starting Rank Value (585.1) + Head To Head Adjustments (107.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 585.1
- 400 + ( ( 0.096 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 585.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       27 | 2024-04-21 | Nemiga       | L   | 1.000      | -            | -                | -                | -         |    -4.93 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |       48 | 2024-04-20 | esmagaB      | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.342 (0.049)    | 0 (0.000) |    18.52 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |      221 | 2024-04-16 | ENCE Academy | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.265 (0.038)    | 0 (0.000) |    24.31 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |      247 | 2024-04-15 | Lazer Cats   | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.16 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |      412 | 2024-04-09 | Aurora       | L   | 1.000      | -            | -                | -                | -         |    -0.81 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |      433 | 2024-04-08 | 9 Pandas     | W   | 1.000      | 0.143        | 0.083 (0.012)    | 0.656 (0.094)    | 0 (0.000) |    29.14 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |      447 | 2024-04-08 | Aurora       | W   | 1.000      | 0.143        | 0.763 (0.109)    | 1.000 (0.143)    | 0 (0.000) |    30.82 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     1037 | 2024-03-11 | Insilio      | L   | 0.919      | -            | -                | -                | -         |    -6.81 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     1058 | 2024-03-10 | VP.Prodigy   | W   | 0.913      | 0.372        | 0.001 (0.000)    | 0.182 (0.062)    | 0 (0.000) |    18.08 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     1186 | 2024-03-05 | ARCRED       | L   | 0.881      | -            | -                | -                | -         |   -10.30 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
