### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, KAISER, piriajr, reix, SHOOWTiME<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  734.0<br />
<br />
Final Rank Value (734.0) = Starting Rank Value (632.5) + Head To Head Adjustments (101.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.118[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.5
- 400 + ( ( 0.117 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 632.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       31 | 2024-06-09 | inSanitY      | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.270 (0.104)    | 0 (0.000) |    22.21 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           13 |       39 | 2024-06-09 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |    -8.82 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           12 |       98 | 2024-06-08 | W7M           | W   | 1.000      | 0.450        | 0.002 (0.001)    | 0.426 (0.192)    | 0 (0.000) |    16.93 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           11 |      147 | 2024-06-07 | MIBR          | W   | 1.000      | 0.384        | 0.284 (0.109)    | 0.750 (0.288)    | 0 (0.000) |    31.22 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           10 |      170 | 2024-06-07 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -2.94 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            9 |      203 | 2024-06-06 | Case          | W   | 1.000      | 0.384        | 0.027 (0.010)    | 0.656 (0.252)    | 0 (0.000) |    22.50 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            8 |      241 | 2024-06-06 | Case          | W   | 1.000      | 0.450        | 0.027 (0.012)    | 0.656 (0.295)    | 0 (0.000) |    24.09 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            7 |      387 | 2024-06-02 | Hawks         | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.039 (0.015)    | 0 (0.000) |    12.36 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            6 |      444 | 2024-05-31 | Intense       | L   | 1.000      | -            | -                | -                | -         |   -18.50 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            5 |      509 | 2024-05-29 | FURIA Academy | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.102 (0.039)    | 0 (0.000) |    12.43 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            4 |      545 | 2024-05-27 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |    -7.76 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            3 |     1661 | 2024-04-16 | MIBR          | L   | 0.835      | -            | -                | -                | -         |    -0.13 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            2 |     1882 | 2024-04-08 | RED Canids    | L   | 0.780      | -            | -                | -                | -         |    -1.89 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            1 |     1925 | 2024-04-06 | MIBR          | L   | 0.768      | -            | -                | -                | -         |    -0.17 | bnc, KAISER, reix, SHOOWTiME, Tomate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
