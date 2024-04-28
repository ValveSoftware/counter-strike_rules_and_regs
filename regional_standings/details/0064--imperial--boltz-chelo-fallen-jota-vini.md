### Roster Details<br />
Team Name: Imperial<br />
Roster: boltz, chelo, FalleN, JOTA, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  906.0<br />
<br />
Final Rank Value (906.0) = Starting Rank Value (878.4) + Head To Head Adjustments (27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.258[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 878.4
- 400 + ( ( 0.234 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 878.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |        3 | 2023-02-12 | ODDIK          | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.236 (0.034)    | 0 (0.000) |     9.76 | boltz, chelo, FalleN, JOTA, VINI |
|           21 |       19 | 2023-02-11 | Selecao do bt0 | W   | 1.000      | -            | -                | -                | -         |     1.84 | boltz, chelo, FalleN, JOTA, VINI |
|           20 |      375 | 2023-01-27 | O PLANO        | L   | 1.000      | -            | -                | -                | -         |   -24.27 | boltz, chelo, FalleN, JOTA, VINI |
|           19 |      394 | 2023-01-26 | RED Canids     | W   | 1.000      | 0.143        | -                | 0.178 (0.025)    | -         |     7.79 | boltz, chelo, FalleN, JOTA, VINI |
|           18 |      583 | 2023-01-19 | 00NATION       | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.201 (0.029)    | -         |    15.44 | boltz, chelo, FalleN, JOTA, VINI |
|           17 |     1750 | 2022-11-01 | Cloud9         | L   | 0.515      | -            | -                | -                | -         |    -1.63 | boltz, chelo, FalleN, fer, VINI  |
|           16 |     1767 | 2022-10-31 | 9z             | L   | 0.508      | -            | -                | -                | -         |    -7.85 | boltz, chelo, FalleN, fer, VINI  |
|           15 |     1777 | 2022-10-31 | Vitality       | L   | 0.506      | -            | -                | -                | -         |    -0.32 | boltz, chelo, FalleN, fer, VINI  |
|           14 |     2116 | 2022-10-16 | paiN           | L   | 0.405      | -            | -                | -                | -         |    -3.53 | boltz, chelo, FalleN, fer, VINI  |
|           13 |     2170 | 2022-10-14 | ex-Isurus      | W   | 0.394      | 0.548        | 0.013 (0.003)    | 0.171 (0.037)    | 1 (0.394) |     5.51 | boltz, chelo, FalleN, fer, VINI  |
|           12 |     2303 | 2022-10-09 | Complexity     | W   | 0.361      | 0.143        | 0.129 (0.007)    | 0.487 (0.025)    | 1 (0.361) |    10.62 | boltz, chelo, FalleN, fer, VINI  |
|           11 |     2314 | 2022-10-09 | paiN           | W   | 0.358      | 0.143        | 0.101 (0.005)    | 0.402 (0.021)    | 1 (0.358) |     8.48 | boltz, chelo, FalleN, fer, VINI  |
|           10 |     2324 | 2022-10-08 | Nouns          | W   | 0.353      | 0.143        | 0.011 (0.001)    | -                | 1 (0.353) |     3.54 | boltz, chelo, FalleN, fer, VINI  |
|            9 |     2338 | 2022-10-07 | TeamOne        | W   | 0.347      | 0.143        | 0.028 (0.001)    | 0.445 (0.022)    | 1 (0.347) |     6.05 | boltz, chelo, FalleN, fer, VINI  |
|            8 |     2367 | 2022-10-06 | 00NATION       | L   | 0.338      | -            | -                | -                | -         |    -5.67 | boltz, chelo, FalleN, fer, VINI  |
|            7 |     2391 | 2022-10-05 | 9z             | L   | 0.333      | -            | -                | -                | -         |    -5.06 | boltz, chelo, FalleN, fer, VINI  |
|            6 |     2411 | 2022-10-05 | ex-Isurus      | W   | 0.331      | 0.143        | 0.013 (0.001)    | 0.171 (0.008)    | 1 (0.331) |     4.94 | boltz, chelo, FalleN, fer, VINI  |
|            5 |     3298 | 2022-09-04 | paiN           | L   | 0.124      | -            | -                | -                | -         |    -0.96 | boltz, chelo, FalleN, fer, VINI  |
|            4 |     3308 | 2022-09-03 | Entropiq       | W   | 0.121      | -            | -                | -                | 1 (0.121) |     1.13 | boltz, chelo, FalleN, fer, VINI  |
|            3 |     3337 | 2022-09-03 | Grayhound      | W   | 0.117      | 0.500        | 0.026 (0.002)    | 0.219 (0.013)    | 1 (0.117) |     1.60 | boltz, chelo, FalleN, fer, VINI  |
|            2 |     3366 | 2022-09-02 | paiN           | L   | 0.111      | -            | -                | -                | -         |    -0.86 | boltz, chelo, FalleN, fer, VINI  |
|            1 |     3369 | 2022-09-01 | VERTEX         | W   | 0.109      | 0.500        | 0.014 (0.001)    | 0.208 (0.011)    | 1 (0.109) |     1.02 | boltz, chelo, FalleN, fer, VINI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,601.83)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-16 |      0.407 | $7,000.00      | $2,851.90       |
| 2022-09-04 |      0.124 | $20,000.00     | $2,473.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
