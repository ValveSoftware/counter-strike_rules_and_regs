### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [25]( ../standings_asia.md)<br />
Final Rank Value:  561.8<br />
<br />
Final Rank Value (561.8) = Starting Rank Value (519.1) + Head To Head Adjustments (42.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.1
- 400 + ( ( 0.061 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 519.1


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
|           12 |     1040 | 2024-04-19 | Onyx Ravens   | W   | 0.932      | 0.143        | 0.001 (0.000)    | 0.105 (0.014)    | 0 (0.000) |    16.62 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |     1051 | 2024-04-19 | VC            | W   | 0.931      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     9.21 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |     1077 | 2024-04-18 | Onyx Ravens   | L   | 0.926      | -            | -                | -                | -         |   -12.19 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |     1100 | 2024-04-18 | VC            | W   | 0.925      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     8.87 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     2289 | 2024-02-27 | FlyQuest      | L   | 0.583      | -            | -                | -                | -         |    -0.15 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     2294 | 2024-02-26 | Twisted Minds | W   | 0.582      | 0.143        | 0.000 (0.000)    | 0.042 (0.004)    | 1 (0.582) |     5.91 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     2307 | 2024-02-25 | TYLOO         | L   | 0.575      | -            | -                | -                | -         |    -1.99 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     2886 | 2024-01-28 | Onyx Ravens   | W   | 0.387      | 0.143        | 0.001 (0.000)    | 0.105 (0.006)    | 0 (0.000) |     7.18 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     2887 | 2024-01-28 | Twisted Minds | W   | 0.386      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     4.16 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     2900 | 2024-01-27 | Shush         | W   | 0.379      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     5.77 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     2918 | 2024-01-26 | Onyx Ravens   | L   | 0.372      | -            | -                | -                | -         |    -4.61 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     2922 | 2024-01-26 | Twisted Minds | W   | 0.372      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     3.96 | DavCost, El1an, ISSAA, m1N1, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
