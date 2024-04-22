### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  772.6<br />
<br />
Final Rank Value (772.6) = Starting Rank Value (710.5) + Head To Head Adjustments (62.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.5
- 400 + ( ( 0.161 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 710.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       38 | 2024-04-20 | Fearless Cheetahs | W   | 1.000      | 0.331        | 0.033 (0.011)    | 0.214 (0.071)    | 0 (0.000) |    17.26 | JennyR, juliano, kyossa, pauliiee, Zana |
|           16 |       84 | 2024-04-19 | NIP Impact        | W   | 1.000      | 0.331        | 0.008 (0.003)    | 0.278 (0.092)    | 0 (0.000) |    15.83 | JennyR, juliano, kyossa, pauliiee, Zana |
|           15 |      473 | 2024-04-07 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -9.69 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |      488 | 2024-04-06 | Spirit fe         | W   | 1.000      | 0.262        | 0.008 (0.002)    | 0.123 (0.032)    | 0 (0.000) |    12.06 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |      538 | 2024-04-04 | ENCE Athena       | W   | 1.000      | 0.331        | 0.007 (0.002)    | 0.162 (0.054)    | 0 (0.000) |    13.00 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |      672 | 2024-03-28 | GUILD fe          | L   | 1.000      | -            | -                | -                | -         |   -17.24 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |      947 | 2024-03-14 | Pigeons           | L   | 0.940      | -            | -                | -                | -         |   -10.12 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     1155 | 2024-03-06 | Astralis W        | W   | 0.887      | 0.331        | 0.005 (0.001)    | 0.082 (0.024)    | 0 (0.000) |     9.90 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     1231 | 2024-03-03 | ex-FORZE Ladies   | W   | 0.867      | 0.250        | 0.009 (0.002)    | 0.093 (0.020)    | 0 (0.000) |    10.13 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     1373 | 2024-02-25 | NAVI Javelins     | L   | 0.819      | -            | -                | -                | -         |    -8.41 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     1378 | 2024-02-25 | Let Her Cook      | W   | 0.818      | 0.238        | 0.001 (0.000)    | 0.228 (0.044)    | 0 (0.000) |    11.00 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     1409 | 2024-02-24 | GUILD fe          | W   | 0.812      | 0.238        | 0.009 (0.002)    | 0.220 (0.043)    | 0 (0.000) |    11.97 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     1942 | 2024-01-28 | QM fe             | W   | 0.633      | 0.250        | 0.001 (0.000)    | -                | -         |     4.97 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     3512 | 2023-11-05 | woofwoof          | W   | 0.074      | 0.273        | -                | 0.003 (0.000)    | 1 (0.074) |     0.72 | Aida, D7, JennyR, pauliiee, Zana        |
|            3 |     3523 | 2023-11-05 | Astralis W        | W   | 0.071      | 0.273        | 0.005 (0.000)    | 0.082 (0.002)    | 1 (0.071) |     0.91 | Aida, D7, JennyR, pauliiee, Zana        |
|            2 |     3746 | 2023-10-28 | Fearless Cheetahs | L   | 0.020      | -            | -                | -                | -         |    -0.26 | Aida, D7, JennyR, pauliiee, Zana        |
|            1 |     3846 | 2023-10-25 | NIP Impact        | W   | 0.000      | -            | -                | -                | -         |     0.00 | Aida, D7, JennyR, pauliiee, Zana        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,249.34)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-03 |      0.867 | $750.00        | $650.36         |
| 2024-01-28 |      0.633 | $750.00        | $474.75         |
| 2023-11-05 |      0.074 | $1,097.00      | $80.67          |
| 2023-10-28 |      0.020 | $2,200.00      | $43.56          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
