### Roster Details<br />
Team Name: K10<br />
Roster: Kisynergy, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  694.0<br />
<br />
Final Rank Value (694.0) = Starting Rank Value (698.6) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.6
- 400 + ( ( 0.154 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 698.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1604 | 2024-03-29 | EXO             | L   | 0.793      | -            | -                | -                | -         |    -8.83 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|           14 |     1787 | 2024-03-19 | RAPTORS EC      | W   | 0.726      | 0.143        | 0.000 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     3.75 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|           13 |     2028 | 2024-03-09 | Insilio         | L   | 0.658      | -            | -                | -                | -         |    -5.43 | Rezst, shyyne, SLY, Tree60, yz0       |
|           12 |     2041 | 2024-03-09 | ex-Preasy       | L   | 0.657      | -            | -                | -                | -         |    -3.67 | Rezst, shyyne, SLY, Tree60, yz0       |
|           11 |     2051 | 2024-03-08 | MOUZ NXT        | L   | 0.652      | -            | -                | -                | -         |    -2.79 | Rezst, shyyne, SLY, Tree60, yz0       |
|           10 |     2113 | 2024-03-06 | Passion UA      | L   | 0.637      | -            | -                | -                | -         |    -3.35 | Rezst, shyyne, SLY, Tree60, yz0       |
|            9 |     2165 | 2024-03-04 | Secret          | W   | 0.625      | 0.371        | 0.000 (0.000)    | 0.153 (0.035)    | 0 (0.000) |     6.73 | Rezst, shyyne, SLY, Tree60, yz0       |
|            8 |     2321 | 2024-02-25 | EXO             | L   | 0.572      | -            | -                | -                | -         |    -7.33 | Rezst, shyyne, SLY, Tree60, yz0       |
|            7 |     2349 | 2024-02-24 | EXO             | W   | 0.566      | 0.307        | 0.013 (0.002)    | 0.109 (0.019)    | 1 (0.566) |    10.70 | Rezst, shyyne, SLY, Tree60, yz0       |
|            6 |     3528 | 2024-01-09 | KOI             | L   | 0.259      | -            | -                | -                | -         |    -1.72 | dox, Rezst, shyyne, Tree60, yz0       |
|            5 |     3543 | 2024-01-09 | Nexus           | W   | 0.259      | 0.143        | 0.014 (0.001)    | 0.518 (0.019)    | 0 (0.000) |     5.90 | dox, Rezst, shyyne, Tree60, yz0       |
|            4 |     3733 | 2023-12-10 | Verdant         | W   | 0.060      | 0.302        | 0.013 (0.000)    | 0.162 (0.003)    | 1 (0.060) |     1.23 | dox, Rezst, shyyne, Tree60, yz0       |
|            3 |     3736 | 2023-12-10 | Duck Duck Goose | W   | 0.059      | 0.302        | 0.000 (0.000)    | 0.002 (0.000)    | 1 (0.059) |     0.46 | dox, Rezst, shyyne, Tree60, yz0       |
|            2 |     3742 | 2023-12-10 | Verdant         | L   | 0.057      | -            | -                | -                | -         |    -0.63 | dox, Rezst, shyyne, Tree60, yz0       |
|            1 |     3763 | 2023-12-09 | Viperio         | W   | 0.052      | 0.302        | 0.000 (0.000)    | 0.029 (0.000)    | 1 (0.052) |     0.43 | dox, Rezst, shyyne, Tree60, yz0       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,612.99)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-29 |      0.793 | $951.00        | $754.56         |
| 2024-02-25 |      0.572 | $1,197.00      | $684.35         |
| 2023-12-10 |      0.060 | $2,925.00      | $174.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
