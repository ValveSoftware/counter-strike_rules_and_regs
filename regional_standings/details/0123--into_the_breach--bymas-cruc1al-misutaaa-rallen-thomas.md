### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  729.3<br />
<br />
Final Rank Value (729.3) = Starting Rank Value (695.6) + Head To Head Adjustments (33.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.6
- 400 + ( ( 0.152 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 695.6


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
|           14 |     2564 | 2024-02-15 | 3DMAX             | L   | 0.506      | -            | -                | -                | -         |    -1.60 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           13 |     2605 | 2024-02-14 | BetBoom           | L   | 0.499      | -            | -                | -                | -         |    -0.39 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           12 |     2616 | 2024-02-14 | G2                | L   | 0.497      | -            | -                | -                | -         |    -0.04 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           11 |     2708 | 2024-02-07 | ex-Preasy         | L   | 0.450      | -            | -                | -                | -         |    -3.61 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           10 |     2713 | 2024-02-06 | Metizport         | W   | 0.445      | 0.371        | 0.088 (0.015)    | 0.860 (0.142)    | 0 (0.000) |    11.14 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            9 |     2749 | 2024-02-04 | SINNERS           | W   | 0.431      | 0.371        | 0.009 (0.001)    | 0.728 (0.116)    | 0 (0.000) |    10.99 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            8 |     2810 | 2024-02-02 | Gaimin Gladiators | L   | 0.417      | -            | -                | -                | -         |    -0.75 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            7 |     2838 | 2024-02-01 | BLEED             | W   | 0.411      | 0.371        | 0.246 (0.037)    | 0.982 (0.150)    | 0 (0.000) |    12.12 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            6 |     2884 | 2024-01-29 | BIG Academy       | W   | 0.390      | 0.371        | 0.003 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     4.93 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            5 |     2948 | 2024-01-25 | BLEED             | L   | 0.363      | -            | -                | -                | -         |    -0.66 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            4 |     3222 | 2024-01-17 | ex-Guild Eagles   | L   | 0.314      | -            | -                | -                | -         |    -1.87 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            3 |     3226 | 2024-01-17 | Gucci Academy     | W   | 0.313      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     3.81 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            2 |     3880 | 2023-12-04 | ex-Anonymo        | L   | 0.020      | -            | -                | -                | -         |    -0.35 | Bymas, CRUC1AL, misutaaa, rallen, tomiko |
|            1 |     3891 | 2023-12-03 | 9 Pandas          | L   | 0.013      | -            | -                | -                | -         |    -0.03 | bevve, Bymas, CRUC1AL, misutaaa, tomiko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($464.36)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
