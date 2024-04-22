### Roster Details<br />
Team Name: K10<br />
Roster: Kisynergy, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  766.2<br />
<br />
Final Rank Value (766.2) = Starting Rank Value (790.9) + Head To Head Adjustments (-24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.185[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.9
- 400 + ( ( 0.202 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 790.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      657 | 2024-03-29 | The Neighbours | L   | 1.000      | -            | -                | -                | -         |   -11.17 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|           14 |      840 | 2024-03-19 | RAPTORS EC     | W   | 0.974      | 0.143        | 0.000 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     5.11 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|           13 |     1081 | 2024-03-09 | Insilio        | L   | 0.906      | -            | -                | -                | -         |   -13.88 | Rezst, shyyne, SLY, Tree60, yz0       |
|           12 |     1094 | 2024-03-09 | Preasy         | L   | 0.904      | -            | -                | -                | -         |    -4.78 | Rezst, shyyne, SLY, Tree60, yz0       |
|           11 |     1104 | 2024-03-08 | MOUZ NXT       | L   | 0.899      | -            | -                | -                | -         |    -9.08 | Rezst, shyyne, SLY, Tree60, yz0       |
|           10 |     1166 | 2024-03-06 | Passion UA     | L   | 0.885      | -            | -                | -                | -         |   -10.43 | Rezst, shyyne, SLY, Tree60, yz0       |
|            9 |     1218 | 2024-03-04 | Secret         | W   | 0.872      | 0.371        | 0.000 (0.000)    | 0.210 (0.068)    | 0 (0.000) |     6.85 | Rezst, shyyne, SLY, Tree60, yz0       |
|            8 |     1374 | 2024-02-25 | The Neighbours | L   | 0.819      | -            | -                | -                | -         |   -11.57 | Rezst, shyyne, SLY, Tree60, yz0       |
|            7 |     1402 | 2024-02-24 | The Neighbours | W   | 0.813      | 0.307        | 0.030 (0.007)    | 0.166 (0.041)    | 1 (0.813) |    14.11 | Rezst, shyyne, SLY, Tree60, yz0       |
|            6 |     2581 | 2024-01-09 | KOI            | L   | 0.507      | -            | -                | -                | -         |    -3.40 | dox, Rezst, shyyne, Tree60, yz0       |
|            5 |     2596 | 2024-01-09 | Nexus          | W   | 0.506      | 0.143        | 0.023 (0.002)    | 0.544 (0.039)    | 0 (0.000) |     8.65 | dox, Rezst, shyyne, Tree60, yz0       |
|            4 |     2786 | 2023-12-10 | Verdant        | W   | 0.307      | 0.302        | 0.021 (0.002)    | 0.074 (0.007)    | 1 (0.307) |     4.67 | dox, Rezst, shyyne, Tree60, yz0       |
|            3 |     2789 | 2023-12-10 | Coalesce       | W   | 0.306      | 0.302        | 0.004 (0.000)    | 0.052 (0.005)    | 1 (0.306) |     3.55 | dox, Rezst, shyyne, Tree60, yz0       |
|            2 |     2795 | 2023-12-10 | Verdant        | L   | 0.305      | -            | -                | -                | -         |    -5.01 | dox, Rezst, shyyne, Tree60, yz0       |
|            1 |     2816 | 2023-12-09 | Viperio        | W   | 0.299      | 0.302        | 0.000 (0.000)    | 0.056 (0.005)    | 1 (0.299) |     1.70 | dox, Rezst, shyyne, Tree60, yz0       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,829.21)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-29 |      1.000 | $951.00        | $951.00         |
| 2024-02-25 |      0.819 | $1,197.00      | $980.49         |
| 2023-12-10 |      0.307 | $2,925.00      | $897.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
