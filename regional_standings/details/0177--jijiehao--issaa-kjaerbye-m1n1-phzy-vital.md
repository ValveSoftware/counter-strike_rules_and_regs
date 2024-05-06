### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [25]( ../standings_asia.md)<br />
Final Rank Value:  592.3<br />
<br />
Final Rank Value (592.3) = Starting Rank Value (541.8) + Head To Head Adjustments (50.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.8
- 400 + ( ( 0.074 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 541.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      389 | 2024-04-19 | Onyx Ravens   | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.140 (0.020)    | 0 (0.000) |    18.30 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |      400 | 2024-04-19 | VC            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     8.86 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |      426 | 2024-04-18 | Onyx Ravens   | L   | 1.000      | -            | -                | -                | -         |   -12.59 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |      449 | 2024-04-18 | VC            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     8.50 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     1638 | 2024-02-27 | FlyQuest      | L   | 0.738      | -            | -                | -                | -         |    -0.31 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     1643 | 2024-02-26 | Twisted Minds | W   | 0.736      | 0.143        | 0.000 (0.000)    | 0.066 (0.007)    | 1 (0.736) |     6.72 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     1656 | 2024-02-25 | TYLOO         | L   | 0.730      | -            | -                | -                | -         |    -1.96 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     2235 | 2024-01-28 | Onyx Ravens   | W   | 0.541      | 0.143        | 0.007 (0.001)    | 0.140 (0.011)    | 0 (0.000) |    10.44 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     2236 | 2024-01-28 | Twisted Minds | W   | 0.540      | 0.143        | 0.000 (0.000)    | 0.066 (0.005)    | 0 (0.000) |     5.37 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     2249 | 2024-01-27 | Shush         | W   | 0.533      | 0.143        | 0.002 (0.000)    | 0.042 (0.003)    | 0 (0.000) |     8.00 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     2267 | 2024-01-26 | Onyx Ravens   | L   | 0.526      | -            | -                | -                | -         |    -5.95 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     2271 | 2024-01-26 | Twisted Minds | W   | 0.526      | 0.143        | 0.000 (0.000)    | 0.066 (0.005)    | 0 (0.000) |     5.14 | DavCost, El1an, ISSAA, m1N1, ViTaL |

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
