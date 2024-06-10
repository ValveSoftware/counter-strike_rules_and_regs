### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  769.9<br />
<br />
Final Rank Value (769.9) = Starting Rank Value (805.0) + Head To Head Adjustments (-35.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.0
- 400 + ( ( 0.203 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 805.0


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
|           20 |     1160 | 2024-05-06 | Permitta        | L   | 0.964      | -            | -                | -                | -         |    -9.00 | 2high, HENU, myltsi, podi, teme |
|           19 |     1171 | 2024-05-05 | Heimo           | L   | 0.960      | -            | -                | -                | -         |   -17.88 | 2high, HENU, myltsi, podi, teme |
|           18 |     1180 | 2024-05-05 | jefet           | W   | 0.958      | 0.306        | 0.002 (0.000)    | 0.035 (0.010)    | 0 (0.000) |     5.71 | 2high, HENU, myltsi, podi, teme |
|           17 |     1197 | 2024-05-04 | TMVG            | W   | 0.952      | 0.306        | 0.000 (0.000)    | 0.013 (0.004)    | 0 (0.000) |     4.68 | 2high, HENU, myltsi, podi, teme |
|           16 |     1215 | 2024-05-03 | Nexus           | W   | 0.945      | 0.435        | 0.013 (0.005)    | 0.469 (0.192)    | 0 (0.000) |    17.33 | 2high, HENU, myltsi, podi, teme |
|           15 |     1245 | 2024-05-01 | Enterprise      | L   | 0.934      | -            | -                | -                | -         |    -9.86 | 2high, HENU, myltsi, podi, teme |
|           14 |     1265 | 2024-05-01 | Sampi           | L   | 0.931      | -            | -                | -                | -         |    -6.74 | HENU, myltsi, podi, S1rva, teme |
|           13 |     1283 | 2024-04-30 | Endpoint        | L   | 0.925      | -            | -                | -                | -         |    -9.21 | HENU, myltsi, podi, S1rva, teme |
|           12 |     1293 | 2024-04-29 | RUSH B          | L   | 0.920      | -            | -                | -                | -         |   -11.75 | HENU, myltsi, podi, S1rva, teme |
|           11 |     1324 | 2024-04-28 | Heimo           | L   | 0.912      | -            | -                | -                | -         |   -19.09 | HENU, myltsi, podi, S1rva, teme |
|           10 |     1456 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.871      | -            | -                | -                | -         |   -10.07 | HENU, myltsi, podi, S1rva, teme |
|            9 |     1503 | 2024-04-20 | SINNERS         | W   | 0.859      | 0.371        | 0.045 (0.014)    | 0.844 (0.269)    | 0 (0.000) |    22.76 | HENU, myltsi, podi, S1rva, teme |
|            8 |     1558 | 2024-04-19 | Viperio         | L   | 0.851      | -            | -                | -                | -         |   -19.52 | HENU, myltsi, podi, S1rva, teme |
|            7 |     1606 | 2024-04-18 | MOUZ NXT        | L   | 0.845      | -            | -                | -                | -         |    -5.22 | HENU, myltsi, podi, S1rva, teme |
|            6 |     1668 | 2024-04-16 | 1WIN            | L   | 0.832      | -            | -                | -                | -         |    -7.57 | HENU, myltsi, podi, S1rva, teme |
|            5 |     1687 | 2024-04-15 | Sampi           | W   | 0.826      | 0.371        | 0.036 (0.011)    | 0.883 (0.270)    | 0 (0.000) |    18.43 | HENU, myltsi, podi, S1rva, teme |
|            4 |     1690 | 2024-04-15 | Viperio         | W   | 0.825      | 0.143        | 0.003 (0.000)    | 0.065 (0.008)    | 0 (0.000) |     6.91 | HENU, myltsi, podi, S1rva, teme |
|            3 |     1763 | 2024-04-11 | Secret          | W   | 0.798      | 0.371        | 0.000 (0.000)    | 0.128 (0.038)    | 0 (0.000) |     5.75 | HENU, myltsi, podi, S1rva, teme |
|            2 |     2837 | 2024-02-24 | HAVU            | W   | 0.488      | 0.306        | 0.003 (0.000)    | 0.254 (0.038)    | 1 (0.488) |     6.71 | HENU, myltsi, podi, S1rva, teme |
|            1 |     2859 | 2024-02-24 | ex-sYnck        | W   | 0.485      | 0.306        | 0.000 (0.000)    | 0.102 (0.015)    | 1 (0.485) |     2.60 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,372.34)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      0.960 | $1,608.00      | $1,543.00       |
| 2024-02-24 |      0.488 | $3,748.00      | $1,829.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
