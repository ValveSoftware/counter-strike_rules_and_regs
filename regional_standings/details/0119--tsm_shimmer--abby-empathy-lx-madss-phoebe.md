### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: abby, empathy, Lx, madss, phoebe<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  736.6<br />
<br />
Final Rank Value (736.6) = Starting Rank Value (702.1) + Head To Head Adjustments (34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.1
- 400 + ( ( 0.156 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 702.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       63 | 2024-05-26 | FlyQuest RED     | L   | 1.000      | -            | -                | -                | -         |   -12.11 | abby, empathy, Lx, madss, phoebe            |
|           21 |       65 | 2024-05-26 | Karma            | W   | 1.000      | 0.303        | 0.007 (0.002)    | 0.168 (0.051)    | 0 (0.000) |    13.81 | abby, empathy, Lx, madss, phoebe            |
|           20 |      663 | 2024-05-05 | Limitless Angels | W   | 1.000      | 0.250        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.74 | Bungee, Celia, erin, Fawx, mira             |
|           19 |     1017 | 2024-04-19 | Limitless Angels | W   | 0.934      | 0.322        | 0.005 (0.002)    | 0.124 (0.037)    | 0 (0.000) |    12.24 | abby, empathy, Lx, madss, phoebe            |
|           18 |     1195 | 2024-04-14 | FlyQuest RED     | L   | 0.901      | -            | -                | -                | -         |   -11.06 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|           17 |     1244 | 2024-04-11 | COVEN            | W   | 0.881      | 0.322        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.12 | abby, empathy, Lx, madss, phoebe            |
|           16 |     1409 | 2024-04-07 | Limitless Angels | W   | 0.854      | 0.250        | 0.005 (0.001)    | 0.124 (0.027)    | 0 (0.000) |    11.40 | daria, Fawx, mira, PiggyKiki, rbn           |
|           15 |     1508 | 2024-04-03 | WG Bandits       | W   | 0.827      | 0.322        | 0.003 (0.001)    | 0.059 (0.016)    | 0 (0.000) |     9.55 | abby, empathy, Lx, madss, phoebe            |
|           14 |     1639 | 2024-03-27 | cleanup crew fe  | W   | 0.781      | 0.322        | 0.004 (0.001)    | 0.059 (0.015)    | 0 (0.000) |    10.52 | ARIANARCHIST, Bubzy, gadfly, paula, Shelby  |
|           13 |     1736 | 2024-03-21 | Karma            | W   | 0.741      | 0.322        | 0.007 (0.002)    | 0.168 (0.040)    | 0 (0.000) |    11.15 | artStar, Ellie, EMUHLEET, olya, rain        |
|           12 |     1876 | 2024-03-14 | Nouns fe         | W   | 0.695      | 0.322        | 0.004 (0.001)    | 0.092 (0.021)    | 0 (0.000) |    10.68 | ashe, jesscas, katalyyst, lunari, Rice      |
|           11 |     2085 | 2024-03-06 | FlyQuest RED     | L   | 0.642      | -            | -                | -                | -         |    -7.80 | abby, empathy, Lx, madss, phoebe            |
|           10 |     2173 | 2024-03-03 | FlyQuest RED     | L   | 0.621      | -            | -                | -                | -         |    -7.96 | abby, empathy, Lx, madss, phoebe            |
|            9 |     2315 | 2024-02-25 | FlyQuest RED     | L   | 0.574      | -            | -                | -                | -         |    -7.75 | abby, empathy, Lx, madss, phoebe            |
|            8 |     2730 | 2024-02-04 | FlyQuest RED     | L   | 0.434      | -            | -                | -                | -         |    -6.13 | abby, empathy, Lx, madss, phoebe            |
|            7 |     2885 | 2024-01-28 | FlyQuest RED     | L   | 0.387      | -            | -                | -                | -         |    -5.67 | abby, empathy, Lx, madss, phoebe            |
|            6 |     3022 | 2024-01-21 | NA savers        | W   | 0.341      | -            | -                | -                | 0 (0.000) |     2.71 | abby, empathy, Lx, phoebe, raynee           |
|            5 |     3311 | 2024-01-15 | NRG              | L   | 0.301      | -            | -                | -                | -         |    -3.20 | abby, chigen, empathy, Lx, phoebe           |
|            4 |     3616 | 2023-12-17 | Limitless Angels | W   | 0.108      | 0.250        | 0.005 (0.000)    | 0.124 (0.003)    | -         |     1.50 | chigen, empathy, Lx, phoebe, vanessa        |
|            3 |     3779 | 2023-12-08 | FURIA fe         | L   | 0.046      | -            | -                | -                | -         |    -0.76 | Aidy, Bouchard, empathy, Lx, phoebe         |
|            2 |     3782 | 2023-12-08 | NAVI Javelins    | L   | 0.045      | -            | -                | -                | -         |    -0.61 | Aidy, Bouchard, empathy, Lx, phoebe         |
|            1 |     3888 | 2023-12-03 | Nouns fe         | W   | 0.014      | -            | -                | -                | -         |     0.10 | ARIANARCHIST, ashe, lunari, raynee, Rice    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,109.13)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-05-05 |      1.000 | $750.00        | $750.00         |
| 2024-04-14 |      0.901 | $250.00        | $225.14         |
| 2024-04-07 |      0.854 | $750.00        | $640.44         |
| 2024-03-03 |      0.621 | $250.00        | $155.16         |
| 2024-02-25 |      0.574 | $250.00        | $143.49         |
| 2024-02-04 |      0.434 | $250.00        | $108.49         |
| 2024-01-28 |      0.387 | $250.00        | $96.82          |
| 2024-01-21 |      0.341 | $750.00        | $255.46         |
| 2023-12-10 |      0.059 | $4,000.00      | $234.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
