### Roster Details<br />
Team Name: Eruption<br />
Roster: fury5k, MagnumZ, NEUZ, ROUX, tamir<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [26]( ../standings_asia.md)<br />
Final Rank Value:  590.7<br />
<br />
Final Rank Value (590.7) = Starting Rank Value (597.1) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.1
- 400 + ( ( 0.102 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 597.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2013 | 2024-01-24 | Rare Atom    | L   | 0.605      | -            | -                | -                | -         |    -6.36 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|           10 |     2040 | 2024-01-23 | Steel Helmet | L   | 0.598      | -            | -                | -                | -         |    -6.99 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|            9 |     2064 | 2024-01-22 | Newhappy     | W   | 0.592      | 0.143        | 0.005 (0.000)    | 0.238 (0.020)    | 0 (0.000) |    12.37 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|            8 |     2093 | 2024-01-21 | The Huns     | L   | 0.584      | -            | -                | -                | -         |   -10.28 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|            7 |     2135 | 2024-01-20 | MungYu       | W   | 0.578      | 0.143        | 0.000 (0.000)    | 0.077 (0.006)    | 0 (0.000) |     7.36 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|            6 |     2144 | 2024-01-20 | Fort Arena   | W   | 0.577      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     4.57 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|            5 |     2196 | 2024-01-19 | GR           | L   | 0.571      | -            | -                | -                | -         |    -7.25 | fury5k, MagnumZ, NEUZ, ROUX, tamir   |
|            4 |     3278 | 2023-11-16 | ATOX         | L   | 0.145      | -            | -                | -                | -         |    -1.17 | ariucle, fury5k, MagnumZ, NEUZ, ROUX |
|            3 |     3283 | 2023-11-16 | MIRAI        | W   | 0.144      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.13 | ariucle, fury5k, MagnumZ, NEUZ, ROUX |
|            2 |     3569 | 2023-11-03 | ATOX         | L   | 0.057      | -            | -                | -                | -         |    -0.46 | ariucle, fury5k, MagnumZ, NEUZ, ROUX |
|            1 |     3572 | 2023-11-03 | The Huns     | W   | 0.057      | 0.307        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.057) |     0.73 | ariucle, fury5k, MagnumZ, NEUZ, ROUX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37.38)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
