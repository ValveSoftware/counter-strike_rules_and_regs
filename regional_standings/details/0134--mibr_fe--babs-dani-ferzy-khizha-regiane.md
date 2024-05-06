### Roster Details<br />
Team Name: MIBR fe<br />
Roster: Babs, Dani, ferzy, khizha, REGIANE<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  726.8<br />
<br />
Final Rank Value (726.8) = Starting Rank Value (695.0) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.0
- 400 + ( ( 0.155 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 695.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      594 | 2024-04-11 | W7M fe       | W   | 1.000      | 0.332        | 0.008 (0.003)    | 0.113 (0.037)    | 0 (0.000) |    12.23 | Babs, Dani, ferzy, khizha, REGIANE  |
|            9 |      826 | 2024-04-04 | Atrix        | W   | 0.987      | 0.332        | 0.009 (0.003)    | 0.168 (0.055)    | 0 (0.000) |    14.33 | Babs, Dani, ferzy, khizha, REGIANE  |
|            8 |      965 | 2024-03-28 | KG fe        | W   | 0.941      | 0.332        | 0.006 (0.002)    | 0.030 (0.009)    | 0 (0.000) |     7.97 | Babs, Dani, ferzy, khizha, REGIANE  |
|            7 |     1118 | 2024-03-20 | Fluxo Demons | L   | 0.888      | -            | -                | -                | -         |   -10.76 | Babs, Dani, ferzy, khizha, REGIANE  |
|            6 |     1262 | 2024-03-13 | FURIA fe     | L   | 0.841      | -            | -                | -                | -         |   -11.70 | Babs, Dani, ferzy, khizha, REGIANE  |
|            5 |     1413 | 2024-03-07 | Divina fe    | W   | 0.801      | 0.332        | 0.008 (0.002)    | 0.077 (0.020)    | 0 (0.000) |    10.95 | Babs, Dani, ferzy, khizha, REGIANE  |
|            4 |     2247 | 2024-01-27 | Divina fe    | W   | 0.535      | 0.250        | 0.008 (0.001)    | 0.077 (0.010)    | 0 (0.000) |     7.62 | Babs, Dani, ferzy, khizha, REGIANE  |
|            3 |     3480 | 2023-11-18 | FURIA fe     | L   | 0.068      | -            | -                | -                | -         |    -0.95 | Babs, chjna, Dani, ferzy, khizha    |
|            2 |     3482 | 2023-11-18 | Fluxo Demons | W   | 0.068      | 0.338        | 0.020 (0.000)    | 0.329 (0.008)    | 0 (0.000) |     1.23 | Babs, chjna, ferzy, khizha, REGIANE |
|            1 |     3511 | 2023-11-17 | W7M fe       | W   | 0.062      | 0.338        | 0.008 (0.000)    | 0.113 (0.002)    | 0 (0.000) |     0.90 | Babs, chjna, ferzy, khizha, REGIANE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,292.92)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      1.000 | $1,700.00      | $1,700.00       |
| 2024-01-27 |      0.535 | $750.00        | $401.23         |
| 2023-11-18 |      0.068 | $2,800.00      | $191.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
