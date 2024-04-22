### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, julih, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  852.2<br />
<br />
Final Rank Value (852.2) = Starting Rank Value (779.6) + Head To Head Adjustments (72.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 779.6
- 400 + ( ( 0.197 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 779.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       76 | 2024-04-19 | FURIA fe        | W   | 1.000      | 0.332        | 0.030 (0.010)    | 0.293 (0.097)    | 0 (0.000) |    14.48 | annaEX, goddess, julih, poppins, yungher |
|           14 |      339 | 2024-04-10 | GENKID4M4       | W   | 1.000      | 0.332        | 0.007 (0.002)    | 0.077 (0.026)    | 0 (0.000) |     7.40 | annaEX, goddess, julih, poppins, yungher |
|           13 |      531 | 2024-04-04 | KG fe           | W   | 1.000      | 0.332        | 0.005 (0.002)    | 0.036 (0.012)    | 0 (0.000) |     5.92 | annaEX, goddess, julih, poppins, yungher |
|           12 |      705 | 2024-03-27 | Divina fe       | W   | 1.000      | 0.332        | 0.007 (0.002)    | 0.089 (0.030)    | 0 (0.000) |     9.75 | annaEX, goddess, julih, poppins, yungher |
|           11 |      822 | 2024-03-20 | MIBR fe         | W   | 0.981      | 0.332        | 0.014 (0.005)    | 0.188 (0.061)    | 0 (0.000) |    11.13 | annaEX, goddess, julih, poppins, yungher |
|           10 |      941 | 2024-03-14 | W7M fe          | W   | 0.941      | 0.332        | 0.008 (0.002)    | 0.127 (0.040)    | 0 (0.000) |     9.14 | annaEX, goddess, julih, poppins, yungher |
|            9 |     1145 | 2024-03-06 | Atrix           | W   | 0.888      | 0.332        | 0.008 (0.002)    | 0.185 (0.055)    | 0 (0.000) |     9.73 | annaEX, goddess, julih, poppins, yungher |
|            8 |     1807 | 2024-02-03 | Brasil Storm fe | W   | 0.675      | 0.250        | 0.001 (0.000)    | -                | 0 (0.000) |     3.94 | annaEX, goddess, josi, julih, yungher    |
|            7 |     2794 | 2023-12-10 | NAVI Javelins   | L   | 0.305      | -            | -                | -                | -         |    -3.97 | goddess, julih, nani, poppins, yungher   |
|            6 |     2834 | 2023-12-08 | Pigeons         | W   | 0.293      | 0.524        | 0.095 (0.015)    | 0.353 (0.054)    | 1 (0.293) |     5.98 | goddess, julih, nani, poppins, yungher   |
|            5 |     2842 | 2023-12-08 | FlyQuest RED    | W   | 0.291      | 0.524        | 0.022 (0.003)    | 0.323 (0.049)    | 1 (0.291) |     4.28 | goddess, julih, nani, poppins, yungher   |
|            4 |     3186 | 2023-11-18 | MIBR fe         | L   | 0.161      | -            | -                | -                | -         |    -3.05 | goddess, julih, nani, poppins, yungher   |
|            3 |     3248 | 2023-11-16 | FURIA fe        | L   | 0.149      | -            | -                | -                | -         |    -2.50 | goddess, julih, nani, poppins, yungher   |
|            2 |     3692 | 2023-10-29 | MIBR fe         | W   | 0.027      | 0.328        | -                | 0.188 (0.002)    | -         |     0.34 | goddess, julih, nani, poppins, yungher   |
|            1 |     3841 | 2023-10-25 | Kidisgraça      | W   | 0.001      | -            | -                | -                | -         |     0.00 | goddess, julih, nani, poppins, yungher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,677.31)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-03 |      0.675 | $750.00        | $506.15         |
| 2023-12-10 |      0.306 | $13,000.00     | $3,977.03       |
| 2023-11-18 |      0.162 | $1,200.00      | $194.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
