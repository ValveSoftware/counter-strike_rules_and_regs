### Roster Details<br />
Team Name: NIP Impact<br />
Roster: Nayomy, Qiyarah, ramziiN, spike, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  685.3<br />
<br />
Final Rank Value (685.3) = Starting Rank Value (695.0) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 695.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       66 | 2024-05-26 | Crescent fe       | L   | 1.000      | -            | -                | -                | -         |   -19.86 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |      276 | 2024-05-19 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -9.37 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |      295 | 2024-05-18 | ex-GUILD fe       | W   | 1.000      | 0.281        | 0.005 (0.001)    | 0.159 (0.045)    | 0 (0.000) |    13.85 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |      843 | 2024-04-27 | Pigeons           | L   | 0.985      | -            | -                | -                | -         |    -9.88 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |      847 | 2024-04-27 | ENCE Athena       | W   | 0.984      | 0.252        | 0.004 (0.001)    | 0.111 (0.028)    | 0 (0.000) |    12.06 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     1031 | 2024-04-19 | BIG EQUIPA        | L   | 0.933      | -            | -                | -                | -         |   -15.27 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     1185 | 2024-04-15 | NAVI Javelins     | L   | 0.906      | -            | -                | -                | -         |   -12.27 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     1198 | 2024-04-14 | Pigeons           | L   | 0.899      | -            | -                | -                | -         |   -10.27 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     1212 | 2024-04-13 | Astralis W        | W   | 0.892      | 0.303        | 0.003 (0.001)    | 0.058 (0.016)    | 0 (0.000) |     9.18 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     1254 | 2024-04-11 | Let Her Cook      | W   | 0.879      | 0.303        | 0.000 (0.000)    | 0.163 (0.044)    | 0 (0.000) |     7.80 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     1296 | 2024-04-10 | ex-GUILD fe       | L   | 0.873      | -            | -                | -                | -         |   -15.84 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     1358 | 2024-04-09 | NAVI Javelins     | W   | 0.865      | 0.303        | 0.024 (0.006)    | 0.341 (0.089)    | 0 (0.000) |    15.24 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     1416 | 2024-04-07 | Pigeons           | L   | 0.852      | -            | -                | -                | -         |   -11.11 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     1421 | 2024-04-07 | Fearless Cheetahs | W   | 0.851      | 0.262        | 0.009 (0.002)    | 0.146 (0.032)    | 0 (0.000) |    12.70 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     1434 | 2024-04-06 | ex-GUILD fe       | W   | 0.844      | 0.262        | 0.005 (0.001)    | 0.159 (0.035)    | 0 (0.000) |    11.88 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     1525 | 2024-04-03 | Astralis W        | W   | 0.826      | 0.331        | 0.003 (0.001)    | 0.058 (0.016)    | 0 (0.000) |     9.59 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     1774 | 2024-03-20 | ENCE Athena       | W   | 0.733      | 0.331        | 0.004 (0.001)    | 0.111 (0.027)    | 0 (0.000) |    10.76 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     2072 | 2024-03-07 | Pigeons           | L   | 0.646      | -            | -                | -                | -         |    -8.79 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,961.53)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $250.00        | $250.00         |
| 2024-04-27 |      0.985 | $321.00        | $316.16         |
| 2024-04-21 |      0.946 | $1,250.00      | $1,182.48       |
| 2024-04-07 |      0.852 | $250.00        | $212.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
