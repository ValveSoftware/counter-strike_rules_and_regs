### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  757.4<br />
<br />
Final Rank Value (757.4) = Starting Rank Value (695.8) + Head To Head Adjustments (61.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.8
- 400 + ( ( 0.155 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 695.8


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
|           13 |      334 | 2024-04-20 | Fearless Cheetahs | W   | 1.000      | 0.331        | 0.030 (0.010)    | 0.192 (0.064)    | 0 (0.000) |    17.01 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |      380 | 2024-04-19 | NIP Impact        | W   | 1.000      | 0.331        | 0.011 (0.004)    | 0.266 (0.088)    | 0 (0.000) |    16.33 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |      769 | 2024-04-07 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -9.93 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |      784 | 2024-04-06 | Spirit fe         | W   | 0.998      | 0.262        | 0.010 (0.003)    | 0.105 (0.027)    | 0 (0.000) |    12.67 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |      834 | 2024-04-04 | ENCE Athena       | W   | 0.986      | 0.331        | 0.009 (0.003)    | 0.142 (0.047)    | 0 (0.000) |    13.47 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |      968 | 2024-03-28 | GUILD fe          | L   | 0.940      | -            | -                | -                | -         |   -15.63 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     1243 | 2024-03-14 | Pigeons           | L   | 0.847      | -            | -                | -                | -         |    -9.27 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     1451 | 2024-03-06 | Astralis W        | W   | 0.793      | 0.331        | 0.005 (0.001)    | 0.075 (0.020)    | 0 (0.000) |     9.50 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     1527 | 2024-03-03 | ex-FORZE Ladies   | W   | 0.774      | 0.250        | 0.010 (0.002)    | 0.089 (0.017)    | 0 (0.000) |     9.81 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     1669 | 2024-02-25 | NAVI Javelins     | L   | 0.726      | -            | -                | -                | -         |    -7.75 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     1674 | 2024-02-25 | Let Her Cook      | W   | 0.725      | 0.238        | 0.000 (0.000)    | 0.204 (0.035)    | 0 (0.000) |     9.83 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     1705 | 2024-02-24 | GUILD fe          | W   | 0.719      | 0.238        | 0.011 (0.002)    | 0.199 (0.034)    | 0 (0.000) |    11.10 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     2238 | 2024-01-28 | QM fe             | W   | 0.540      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.52 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($985.15)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-03 |      0.774 | $750.00        | $580.38         |
| 2024-01-28 |      0.540 | $750.00        | $404.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
