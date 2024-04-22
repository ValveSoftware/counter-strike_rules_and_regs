### Roster Details<br />
Team Name: Limitless Angels<br />
Roster: daria, Fawx, mira, PiggyKiki, rbn<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  673.9<br />
<br />
Final Rank Value (673.9) = Starting Rank Value (682.6) + Head To Head Adjustments (-8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.6
- 400 + ( ( 0.146 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 682.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       70 | 2024-04-19 | Shimmer         | L   | 1.000      | -            | -                | -                | -         |   -13.16 | daria, Fawx, mira, PiggyKiki, rbn    |
|           10 |      291 | 2024-04-11 | Nouns fe        | W   | 1.000      | 0.322        | 0.007 (0.002)    | 0.134 (0.043)    | 0 (0.000) |    15.55 | daria, Fawx, mira, PiggyKiki, rbn    |
|            9 |      462 | 2024-04-07 | Shimmer         | L   | 1.000      | -            | -                | -                | -         |   -13.42 | daria, Fawx, mira, PiggyKiki, rbn    |
|            8 |      559 | 2024-04-03 | Karma           | L   | 1.000      | -            | -                | -                | -         |   -15.68 | daria, Fawx, mira, PiggyKiki, rbn    |
|            7 |      667 | 2024-03-28 | COVEN           | W   | 1.000      | 0.322        | 0.005 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     8.13 | daria, Fawx, mira, PiggyKiki, rbn    |
|            6 |      817 | 2024-03-20 | FlyQuest RED    | L   | 0.982      | -            | -                | -                | -         |   -10.87 | daria, Fawx, mira, PiggyKiki, rbn    |
|            5 |      962 | 2024-03-13 | WG Bandits      | W   | 0.935      | 0.322        | 0.006 (0.002)    | 0.081 (0.024)    | 0 (0.000) |    12.67 | daria, Fawx, mira, PiggyKiki, rbn    |
|            4 |     1113 | 2024-03-07 | cleanup crew fe | W   | 0.895      | 0.322        | 0.006 (0.002)    | 0.089 (0.026)    | 0 (0.000) |    12.49 | daria, Fawx, mira, PiggyKiki, rbn    |
|            3 |     2669 | 2023-12-17 | Shimmer         | L   | 0.355      | -            | -                | -                | -         |    -5.05 | chigen, empathy, Lx, phoebe, vanessa |
|            2 |     3690 | 2023-10-29 | Hyperion        | W   | 0.028      | 0.328        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.23 | chigen, daria, Fawx, Kate, mira      |
|            1 |     3735 | 2023-10-28 | Karma           | W   | 0.022      | 0.328        | 0.009 (0.000)    | 0.229 (0.002)    | 0 (0.000) |     0.35 | Bungee, Ellie, EMUHLEET, olya, rain  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,906.32)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-19 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-07 |      1.000 | $250.00        | $250.00         |
| 2023-12-17 |      0.355 | $250.00        | $88.78          |
| 2023-10-29 |      0.028 | $2,400.00      | $67.54          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
