### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  750.8<br />
<br />
Final Rank Value (750.8) = Starting Rank Value (802.7) + Head To Head Adjustments (-51.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.123[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.7
- 400 + ( ( 0.207 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 802.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      660 | 2024-05-06 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -10.42 | 2high, HENU, myltsi, podi, teme |
|           19 |      671 | 2024-05-05 | Heimo           | L   | 1.000      | -            | -                | -                | -         |   -17.94 | 2high, HENU, myltsi, podi, teme |
|           18 |      680 | 2024-05-05 | jefet           | W   | 1.000      | 0.306        | 0.002 (0.001)    | 0.041 (0.013)    | 0 (0.000) |     6.39 | 2high, HENU, myltsi, podi, teme |
|           17 |      697 | 2024-05-04 | TMVG            | W   | 1.000      | 0.306        | 0.000 (0.000)    | 0.018 (0.005)    | 0 (0.000) |     5.36 | 2high, HENU, myltsi, podi, teme |
|           16 |      715 | 2024-05-03 | Nexus           | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.518 (0.225)    | 0 (0.000) |    17.64 | 2high, HENU, myltsi, podi, teme |
|           15 |      745 | 2024-05-01 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -12.35 | 2high, HENU, myltsi, podi, teme |
|           14 |      765 | 2024-05-01 | Sampi           | L   | 1.000      | -            | -                | -                | -         |    -8.22 | HENU, myltsi, podi, S1rva, teme |
|           13 |      783 | 2024-04-30 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -10.52 | HENU, myltsi, podi, S1rva, teme |
|           12 |      793 | 2024-04-29 | RUSH B          | L   | 1.000      | -            | -                | -                | -         |   -16.82 | HENU, myltsi, podi, S1rva, teme |
|           11 |      824 | 2024-04-28 | Heimo           | L   | 0.991      | -            | -                | -                | -         |   -20.51 | HENU, myltsi, podi, S1rva, teme |
|           10 |      956 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.951      | -            | -                | -                | -         |   -13.54 | HENU, myltsi, podi, S1rva, teme |
|            9 |     1003 | 2024-04-20 | SINNERS         | W   | 0.938      | 0.371        | 0.009 (0.003)    | 0.728 (0.253)    | 0 (0.000) |    22.08 | HENU, myltsi, podi, S1rva, teme |
|            8 |     1058 | 2024-04-19 | Viperio         | L   | 0.930      | -            | -                | -                | -         |   -21.48 | HENU, myltsi, podi, S1rva, teme |
|            7 |     1106 | 2024-04-18 | MOUZ NXT        | L   | 0.924      | -            | -                | -                | -         |    -6.98 | HENU, myltsi, podi, S1rva, teme |
|            6 |     1168 | 2024-04-16 | 1WIN            | L   | 0.911      | -            | -                | -                | -         |    -9.16 | HENU, myltsi, podi, S1rva, teme |
|            5 |     1187 | 2024-04-15 | Sampi           | W   | 0.905      | 0.371        | 0.038 (0.013)    | 0.794 (0.266)    | 0 (0.000) |    18.72 | HENU, myltsi, podi, S1rva, teme |
|            4 |     1190 | 2024-04-15 | Viperio         | W   | 0.904      | 0.143        | 0.003 (0.000)    | 0.076 (0.010)    | 0 (0.000) |     7.43 | HENU, myltsi, podi, S1rva, teme |
|            3 |     1263 | 2024-04-11 | Secret          | W   | 0.877      | 0.371        | 0.000 (0.000)    | 0.153 (0.050)    | 0 (0.000) |     6.40 | HENU, myltsi, podi, S1rva, teme |
|            2 |     2337 | 2024-02-24 | HAVU            | W   | 0.567      | 0.306        | 0.004 (0.001)    | 0.166 (0.029)    | 1 (0.567) |     7.50 | HENU, myltsi, podi, S1rva, teme |
|            1 |     2359 | 2024-02-24 | ex-sYnck        | W   | 0.564      | 0.306        | 0.000 (0.000)    | 0.139 (0.024)    | 1 (0.564) |     4.49 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,734.08)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $1,608.00      | $1,608.00       |
| 2024-02-24 |      0.567 | $3,748.00      | $2,126.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
