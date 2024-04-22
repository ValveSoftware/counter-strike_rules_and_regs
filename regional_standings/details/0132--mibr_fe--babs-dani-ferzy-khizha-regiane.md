### Roster Details<br />
Team Name: MIBR fe<br />
Roster: Babs, Dani, ferzy, khizha, REGIANE<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  737.1<br />
<br />
Final Rank Value (737.1) = Starting Rank Value (701.2) + Head To Head Adjustments (35.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.2
- 400 + ( ( 0.156 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 701.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      298 | 2024-04-11 | W7M fe       | W   | 1.000      | 0.332        | 0.008 (0.003)    | 0.127 (0.042)    | 0 (0.000) |    11.88 | Babs, Dani, ferzy, khizha, REGIANE     |
|           11 |      530 | 2024-04-04 | Atrix        | W   | 1.000      | 0.332        | 0.008 (0.003)    | 0.185 (0.062)    | 0 (0.000) |    14.18 | Babs, Dani, ferzy, khizha, REGIANE     |
|           10 |      669 | 2024-03-28 | KG fe        | W   | 1.000      | 0.332        | 0.005 (0.002)    | 0.036 (0.012)    | 0 (0.000) |    10.19 | Babs, Dani, ferzy, khizha, REGIANE     |
|            9 |      822 | 2024-03-20 | Fluxo Demons | L   | 0.981      | -            | -                | -                | -         |   -11.13 | Babs, Dani, ferzy, khizha, REGIANE     |
|            8 |      966 | 2024-03-13 | FURIA fe     | L   | 0.935      | -            | -                | -                | -         |   -12.54 | Babs, Dani, ferzy, khizha, REGIANE     |
|            7 |     1117 | 2024-03-07 | Divina fe    | W   | 0.894      | 0.332        | 0.007 (0.002)    | 0.089 (0.026)    | 0 (0.000) |    11.88 | Babs, Dani, ferzy, khizha, REGIANE     |
|            6 |     1951 | 2024-01-27 | Divina fe    | W   | 0.628      | 0.250        | 0.007 (0.001)    | 0.089 (0.014)    | 0 (0.000) |     8.68 | Babs, Dani, ferzy, khizha, REGIANE     |
|            5 |     3184 | 2023-11-18 | FURIA fe     | L   | 0.162      | -            | -                | -                | -         |    -2.18 | Babs, chjna, Dani, ferzy, khizha       |
|            4 |     3186 | 2023-11-18 | Fluxo Demons | W   | 0.161      | 0.338        | 0.025 (0.001)    | 0.375 (0.020)    | 0 (0.000) |     3.05 | Babs, chjna, ferzy, khizha, REGIANE    |
|            3 |     3215 | 2023-11-17 | W7M fe       | W   | 0.155      | 0.338        | 0.008 (0.000)    | 0.127 (0.007)    | 0 (0.000) |     2.21 | Babs, chjna, ferzy, khizha, REGIANE    |
|            2 |     3692 | 2023-10-29 | Fluxo Demons | L   | 0.027      | -            | -                | -                | -         |    -0.34 | bizinha, chjna, ferzy, khizha, REGIANE |
|            1 |     3842 | 2023-10-25 | KAOS fe      | W   | 0.001      | 0.328        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.00 | bizinha, chjna, ferzy, khizha, REGIANE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,665.22)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      1.000 | $1,700.00      | $1,700.00       |
| 2024-01-27 |      0.628 | $750.00        | $471.21         |
| 2023-11-18 |      0.162 | $2,800.00      | $452.95         |
| 2023-10-29 |      0.027 | $1,500.00      | $41.07          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
