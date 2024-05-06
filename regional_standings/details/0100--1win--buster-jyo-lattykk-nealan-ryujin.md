### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  807.0<br />
<br />
Final Rank Value (807.0) = Starting Rank Value (644.0) + Head To Head Adjustments (163.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.0
- 400 + ( ( 0.128 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 644.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       33 | 2024-05-05 | Guild Eagles | W   | 1.000      | 0.396        | 0.035 (0.014)    | 0.648 (0.257)    | 0 (0.000) |    22.34 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |       77 | 2024-05-02 | Soda         | W   | 1.000      | 0.396        | -                | 0.000 (0.000)    | 0 (0.000) |     3.27 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |       84 | 2024-05-02 | 500          | W   | 1.000      | 0.396        | 0.003 (0.001)    | 0.578 (0.229)    | 0 (0.000) |    18.17 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |      148 | 2024-04-29 | ECLOT        | L   | 1.000      | -            | -                | -                | -         |    -4.65 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |      152 | 2024-04-29 | SINNERS      | L   | 1.000      | -            | -                | -                | -         |    -7.84 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |      165 | 2024-04-28 | Sangal       | L   | 1.000      | -            | -                | -                | -         |    -9.21 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |      197 | 2024-04-27 | Nemiga       | L   | 1.000      | -            | -                | -                | -         |    -2.37 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |      245 | 2024-04-25 | Permitta     | W   | 1.000      | 0.435        | 0.053 (0.023)    | 0.979 (0.425)    | 0 (0.000) |    23.50 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |      283 | 2024-04-23 | HAVU         | W   | 1.000      | 0.435        | 0.023 (0.010)    | 0.214 (0.093)    | 0 (0.000) |    16.05 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |      323 | 2024-04-21 | Nemiga       | L   | 1.000      | -            | -                | -                | -         |    -1.98 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |      344 | 2024-04-20 | esmagaB      | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.293 (0.042)    | 0 (0.000) |    16.40 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |      517 | 2024-04-16 | ENCE Academy | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.374 (0.053)    | 0 (0.000) |    23.04 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |      543 | 2024-04-15 | Lazer Cats   | W   | 1.000      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     7.33 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |      708 | 2024-04-09 | Aurora       | L   | 1.000      | -            | -                | -                | -         |    -0.43 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |      729 | 2024-04-08 | 9 Pandas     | W   | 1.000      | 0.143        | 0.081 (0.012)    | 0.676 (0.097)    | 0 (0.000) |    29.06 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |      743 | 2024-04-08 | Aurora       | W   | 1.000      | 0.143        | 0.973 (0.139)    | 0.967 (0.138)    | 0 (0.000) |    31.16 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     1333 | 2024-03-11 | Insilio      | L   | 0.826      | -            | -                | -                | -         |    -4.40 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     1354 | 2024-03-10 | VP.Prodigy   | W   | 0.819      | 0.372        | 0.000 (0.000)    | 0.233 (0.071)    | -         |    14.05 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     1482 | 2024-03-05 | ARCRED       | L   | 0.787      | -            | -                | -                | -         |   -10.47 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
