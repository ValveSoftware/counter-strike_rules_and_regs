### Roster Details<br />
Team Name: Vikings KR<br />
Roster: honda, ksloks, realz1n, remix, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  712.3<br />
<br />
Final Rank Value (712.3) = Starting Rank Value (724.3) + Head To Head Adjustments (-12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.3
- 400 + ( ( 0.163 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 724.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |        6 | 2024-06-10 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -4.06 | honda, ksloks, realz1n, remix, zmb |
|           16 |       53 | 2024-06-09 | Corinthians | L   | 1.000      | -            | -                | -                | -         |   -18.22 | honda, ksloks, realz1n, remix, zmb |
|           15 |      114 | 2024-06-08 | BESTIA      | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.631 (0.284)    | 0 (0.000) |    26.85 | honda, ksloks, realz1n, remix, zmb |
|           14 |      169 | 2024-06-07 | Case        | W   | 1.000      | 0.450        | 0.027 (0.012)    | 0.656 (0.295)    | 0 (0.000) |    20.40 | honda, ksloks, realz1n, remix, zmb |
|           13 |      220 | 2024-06-06 | Dusty Roots | L   | 1.000      | -            | -                | -                | -         |   -14.54 | honda, ksloks, realz1n, remix, zmb |
|           12 |      240 | 2024-06-06 | Solid       | L   | 1.000      | -            | -                | -                | -         |    -8.49 | honda, ksloks, realz1n, remix, zmb |
|           11 |      362 | 2024-06-03 | W7M         | L   | 1.000      | -            | -                | -                | -         |   -15.44 | honda, ksloks, realz1n, remix, zmb |
|           10 |      448 | 2024-05-31 | Hawks       | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.039 (0.015)    | 0 (0.000) |     8.90 | honda, ksloks, realz1n, remix, zmb |
|            9 |      497 | 2024-05-29 | Yawara      | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.024 (0.009)    | 0 (0.000) |     6.96 | honda, ksloks, realz1n, remix, zmb |
|            8 |      542 | 2024-05-27 | ex-2GAME    | L   | 1.000      | -            | -                | -                | -         |   -16.32 | honda, ksloks, realz1n, remix, zmb |
|            7 |      898 | 2024-05-15 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -5.54 | honda, ksloks, realz1n, remix, zmb |
|            6 |      954 | 2024-05-14 | O PLANO     | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.032 (0.012)    | 0 (0.000) |     7.68 | honda, ksloks, realz1n, remix, zmb |
|            5 |     1012 | 2024-05-12 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -3.23 | honda, ksloks, realz1n, remix, zmb |
|            4 |     1025 | 2024-05-12 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |    -3.37 | honda, ksloks, realz1n, remix, zmb |
|            3 |     1117 | 2024-05-08 | BESTIA      | L   | 0.980      | -            | -                | -                | -         |    -9.91 | honda, JLK, ksloks, realz1n, remix |
|            2 |     1153 | 2024-05-06 | 9z          | L   | 0.966      | -            | -                | -                | -         |    -1.08 | honda, JLK, ksloks, realz1n, remix |
|            1 |     1742 | 2024-04-11 | Galorys     | W   | 0.802      | 0.270        | 0.025 (0.005)    | 0.596 (0.129)    | 0 (0.000) |    17.36 | honda, JLK, ksloks, realz1n, remix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,107.84)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
