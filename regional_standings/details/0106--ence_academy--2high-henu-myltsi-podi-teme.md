### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  790.3<br />
<br />
Final Rank Value (790.3) = Starting Rank Value (861.0) + Head To Head Adjustments (-70.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.161[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 861.0
- 400 + ( ( 0.242 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 861.0


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
|           20 |        9 | 2024-05-06 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -11.26 | 2high, HENU, myltsi, podi, teme |
|           19 |       20 | 2024-05-05 | Heimo           | L   | 1.000      | -            | -                | -                | -         |   -18.85 | 2high, HENU, myltsi, podi, teme |
|           18 |       29 | 2024-05-05 | jefet           | W   | 1.000      | 0.306        | 0.003 (0.001)    | 0.044 (0.014)    | 0 (0.000) |     5.49 | 2high, HENU, myltsi, podi, teme |
|           17 |       46 | 2024-05-04 | TMVG            | W   | 1.000      | 0.306        | 0.000 (0.000)    | 0.026 (0.008)    | 0 (0.000) |     4.60 | 2high, HENU, myltsi, podi, teme |
|           16 |       64 | 2024-05-03 | Nexus           | W   | 1.000      | 0.435        | 0.031 (0.013)    | 0.605 (0.263)    | 0 (0.000) |    16.92 | 2high, HENU, myltsi, podi, teme |
|           15 |       94 | 2024-05-01 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -12.12 | 2high, HENU, myltsi, podi, teme |
|           14 |      114 | 2024-05-01 | Sampi           | L   | 1.000      | -            | -                | -                | -         |    -8.21 | HENU, myltsi, podi, S1rva, teme |
|           13 |      132 | 2024-04-30 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -11.68 | HENU, myltsi, podi, S1rva, teme |
|           12 |      142 | 2024-04-29 | RUSH B          | L   | 1.000      | -            | -                | -                | -         |   -16.56 | HENU, myltsi, podi, S1rva, teme |
|           11 |      173 | 2024-04-28 | Heimo           | L   | 1.000      | -            | -                | -                | -         |   -21.71 | HENU, myltsi, podi, S1rva, teme |
|           10 |      305 | 2024-04-22 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -15.70 | HENU, myltsi, podi, S1rva, teme |
|            9 |      352 | 2024-04-20 | SINNERS         | W   | 1.000      | 0.371        | 0.033 (0.012)    | 0.749 (0.277)    | 0 (0.000) |    23.75 | HENU, myltsi, podi, S1rva, teme |
|            8 |      407 | 2024-04-19 | Viperio         | L   | 1.000      | -            | -                | -                | -         |   -24.15 | HENU, myltsi, podi, S1rva, teme |
|            7 |      455 | 2024-04-18 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |    -8.72 | HENU, myltsi, podi, S1rva, teme |
|            6 |      517 | 2024-04-16 | 1WIN            | L   | 1.000      | -            | -                | -                | -         |   -23.04 | HENU, myltsi, podi, S1rva, teme |
|            5 |      536 | 2024-04-15 | Sampi           | W   | 1.000      | 0.371        | 0.101 (0.038)    | 0.731 (0.271)    | 0 (0.000) |    20.07 | HENU, myltsi, podi, S1rva, teme |
|            4 |      539 | 2024-04-15 | Viperio         | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.089 (0.013)    | 0 (0.000) |     6.73 | HENU, myltsi, podi, S1rva, teme |
|            3 |      612 | 2024-04-11 | Secret          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.192 (0.071)    | 0 (0.000) |     6.04 | HENU, myltsi, podi, S1rva, teme |
|            2 |     1686 | 2024-02-24 | HAVU            | W   | 0.721      | 0.306        | 0.023 (0.005)    | 0.214 (0.047)    | 1 (0.721) |    10.67 | HENU, myltsi, podi, S1rva, teme |
|            1 |     1708 | 2024-02-24 | ex-sYnck        | W   | 0.718      | 0.306        | 0.004 (0.001)    | 0.226 (0.050)    | 1 (0.718) |     7.05 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,311.62)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $1,608.00      | $1,608.00       |
| 2024-02-24 |      0.721 | $3,748.00      | $2,703.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
