### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  708.7<br />
<br />
Final Rank Value (708.7) = Starting Rank Value (666.1) + Head To Head Adjustments (42.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.1
- 400 + ( ( 0.137 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 666.1


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
|           15 |      272 | 2024-05-19 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -11.49 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |      299 | 2024-05-18 | Nemesis fe        | W   | 1.000      | 0.281        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.49 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |      985 | 2024-04-20 | Fearless Cheetahs | W   | 0.940      | 0.331        | 0.009 (0.003)    | 0.146 (0.045)    | 0 (0.000) |    14.86 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     1031 | 2024-04-19 | NIP Impact        | W   | 0.933      | 0.331        | 0.007 (0.002)    | 0.227 (0.070)    | 0 (0.000) |    15.27 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     1420 | 2024-04-07 | Pigeons           | L   | 0.851      | -            | -                | -                | -         |   -10.23 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     1435 | 2024-04-06 | Spirit fe         | W   | 0.844      | 0.262        | 0.005 (0.001)    | 0.079 (0.017)    | 0 (0.000) |    11.45 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     1485 | 2024-04-04 | ENCE Athena       | W   | 0.832      | 0.331        | 0.004 (0.001)    | 0.111 (0.031)    | 0 (0.000) |    11.94 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     1619 | 2024-03-28 | ex-GUILD fe       | L   | 0.786      | -            | -                | -                | -         |   -12.71 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     1894 | 2024-03-14 | Pigeons           | L   | 0.693      | -            | -                | -                | -         |    -9.13 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     2102 | 2024-03-06 | Astralis W        | W   | 0.639      | 0.331        | 0.003 (0.001)    | 0.058 (0.012)    | 0 (0.000) |     8.29 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     2178 | 2024-03-03 | ex-FORZE Ladies   | W   | 0.620      | 0.250        | 0.005 (0.001)    | 0.073 (0.011)    | 0 (0.000) |     8.47 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     2320 | 2024-02-25 | NAVI Javelins     | L   | 0.572      | -            | -                | -                | -         |    -6.83 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     2325 | 2024-02-25 | Let Her Cook      | W   | 0.571      | 0.238        | 0.000 (0.000)    | 0.163 (0.022)    | 0 (0.000) |     5.72 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     2356 | 2024-02-24 | ex-GUILD fe       | W   | 0.565      | 0.238        | 0.005 (0.001)    | 0.159 (0.021)    | 0 (0.000) |     8.91 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     2889 | 2024-01-28 | QM fe             | W   | 0.386      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.53 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($754.02)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-03 |      0.620 | $750.00        | $464.81         |
| 2024-01-28 |      0.386 | $750.00        | $289.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
