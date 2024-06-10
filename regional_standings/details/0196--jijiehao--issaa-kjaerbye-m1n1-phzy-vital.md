### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [196](../standings_global.md)<br />
Regional Rank: [25]( ../standings_asia.md)<br />
Final Rank Value:  533.7<br />
<br />
Final Rank Value (533.7) = Starting Rank Value (502.7) + Head To Head Adjustments (31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.7
- 400 + ( ( 0.052 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 502.7


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
|           12 |     1540 | 2024-04-19 | Onyx Ravens   | W   | 0.853      | 0.143        | 0.000 (0.000)    | 0.084 (0.010)    | 0 (0.000) |    13.18 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |     1551 | 2024-04-19 | VC            | W   | 0.852      | 0.143        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     9.23 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |     1577 | 2024-04-18 | Onyx Ravens   | L   | 0.846      | -            | -                | -                | -         |   -13.40 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |     1600 | 2024-04-18 | VC            | W   | 0.845      | 0.143        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     8.89 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     2789 | 2024-02-27 | FlyQuest      | L   | 0.504      | -            | -                | -                | -         |    -0.11 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     2794 | 2024-02-26 | Twisted Minds | W   | 0.503      | 0.143        | 0.000 (0.000)    | 0.030 (0.002)    | 1 (0.503) |     5.55 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     2807 | 2024-02-25 | TYLOO         | L   | 0.496      | -            | -                | -                | -         |    -2.88 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     3386 | 2024-01-28 | Onyx Ravens   | W   | 0.308      | 0.143        | 0.000 (0.000)    | 0.084 (0.004)    | 0 (0.000) |     4.81 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     3387 | 2024-01-28 | Twisted Minds | W   | 0.307      | 0.143        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     3.52 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     3400 | 2024-01-27 | Shush         | W   | 0.300      | 0.143        | 0.000 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     3.45 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     3418 | 2024-01-26 | Onyx Ravens   | L   | 0.293      | -            | -                | -                | -         |    -4.58 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     3422 | 2024-01-26 | Twisted Minds | W   | 0.292      | 0.143        | 0.000 (0.000)    | 0.030 (0.001)    | 0 (0.000) |     3.31 | DavCost, El1an, ISSAA, m1N1, ViTaL |

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
