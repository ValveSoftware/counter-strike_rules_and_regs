### Roster Details<br />
Team Name: JiJieHao<br />
Roster: ISSAA, Kjaerbye, m1N1, phzy, ViTaL<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [24]( ../standings_asia.md)<br />
Final Rank Value:  602.3<br />
<br />
Final Rank Value (602.3) = Starting Rank Value (550.2) + Head To Head Adjustments (52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 550.2
- 400 + ( ( 0.078 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 550.2


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
|           12 |       93 | 2024-04-19 | Onyx Ravens   | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.160 (0.023)    | 0 (0.000) |    18.33 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           11 |      104 | 2024-04-19 | VC            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.046 (0.007)    | 0 (0.000) |     8.53 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|           10 |      130 | 2024-04-18 | Onyx Ravens   | L   | 1.000      | -            | -                | -                | -         |   -12.57 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            9 |      153 | 2024-04-18 | VC            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.046 (0.007)    | 0 (0.000) |     8.15 | ISSAA, Kjaerbye, m1N1, phzy, ViTaL |
|            8 |     1342 | 2024-02-27 | FlyQuest      | L   | 0.831      | -            | -                | -                | -         |    -1.04 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            7 |     1347 | 2024-02-26 | Twisted Minds | W   | 0.829      | 0.143        | 0.000 (0.000)    | 0.082 (0.010)    | 1 (0.829) |     7.28 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            6 |     1360 | 2024-02-25 | TYLOO         | L   | 0.823      | -            | -                | -                | -         |    -3.17 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            5 |     1939 | 2024-01-28 | Onyx Ravens   | W   | 0.634      | 0.143        | 0.008 (0.001)    | 0.160 (0.014)    | 0 (0.000) |    12.25 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            4 |     1940 | 2024-01-28 | Twisted Minds | W   | 0.633      | 0.143        | 0.000 (0.000)    | 0.082 (0.007)    | 0 (0.000) |     6.11 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            3 |     1953 | 2024-01-27 | Shush         | W   | 0.627      | 0.143        | 0.003 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     9.25 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            2 |     1971 | 2024-01-26 | Onyx Ravens   | L   | 0.620      | -            | -                | -                | -         |    -6.85 | DavCost, El1an, ISSAA, m1N1, ViTaL |
|            1 |     1975 | 2024-01-26 | Twisted Minds | W   | 0.619      | 0.143        | 0.000 (0.000)    | 0.082 (0.007)    | 0 (0.000) |     5.85 | DavCost, El1an, ISSAA, m1N1, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
