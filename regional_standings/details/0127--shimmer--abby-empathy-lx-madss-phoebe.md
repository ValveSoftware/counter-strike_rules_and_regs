### Roster Details<br />
Team Name: Shimmer<br />
Roster: abby, empathy, Lx, madss, phoebe<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  746.2<br />
<br />
Final Rank Value (746.2) = Starting Rank Value (721.6) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.6
- 400 + ( ( 0.167 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 721.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       70 | 2024-04-19 | Limitless Angels | W   | 1.000      | 0.322        | 0.010 (0.003)    | 0.180 (0.058)    | 0 (0.000) |    13.16 | abby, empathy, Lx, madss, phoebe     |
|           20 |      248 | 2024-04-14 | FlyQuest RED     | L   | 1.000      | -            | -                | -                | -         |   -11.45 | abby, empathy, Lx, madss, phoebe     |
|           19 |      297 | 2024-04-11 | COVEN            | W   | 1.000      | 0.322        | 0.005 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     6.37 | abby, empathy, Lx, madss, phoebe     |
|           18 |      462 | 2024-04-07 | Limitless Angels | W   | 1.000      | 0.250        | 0.010 (0.003)    | 0.180 (0.045)    | 0 (0.000) |    13.42 | abby, empathy, Lx, madss, phoebe     |
|           17 |      561 | 2024-04-03 | WG Bandits       | W   | 1.000      | 0.322        | 0.006 (0.002)    | 0.081 (0.026)    | 0 (0.000) |    11.15 | abby, empathy, Lx, madss, phoebe     |
|           16 |      692 | 2024-03-27 | cleanup crew fe  | W   | 1.000      | 0.322        | 0.006 (0.002)    | 0.089 (0.029)    | 0 (0.000) |    13.44 | abby, empathy, Lx, madss, phoebe     |
|           15 |      789 | 2024-03-21 | Karma            | W   | 0.988      | 0.322        | 0.009 (0.003)    | 0.229 (0.073)    | 0 (0.000) |    14.96 | abby, empathy, Lx, madss, phoebe     |
|           14 |      929 | 2024-03-14 | Nouns fe         | W   | 0.942      | 0.322        | 0.007 (0.002)    | 0.134 (0.041)    | 0 (0.000) |    15.07 | abby, empathy, Lx, madss, phoebe     |
|           13 |     1138 | 2024-03-06 | FlyQuest RED     | L   | 0.889      | -            | -                | -                | -         |    -9.81 | abby, empathy, Lx, madss, phoebe     |
|           12 |     1226 | 2024-03-03 | FlyQuest RED     | L   | 0.868      | -            | -                | -                | -         |   -10.29 | abby, empathy, Lx, madss, phoebe     |
|           11 |     1368 | 2024-02-25 | FlyQuest RED     | L   | 0.821      | -            | -                | -                | -         |   -10.47 | abby, empathy, Lx, madss, phoebe     |
|           10 |     1783 | 2024-02-04 | FlyQuest RED     | L   | 0.681      | -            | -                | -                | -         |    -9.30 | abby, empathy, Lx, madss, phoebe     |
|            9 |     1938 | 2024-01-28 | FlyQuest RED     | L   | 0.635      | -            | -                | -                | -         |    -9.19 | abby, empathy, Lx, madss, phoebe     |
|            8 |     2075 | 2024-01-21 | NA savers        | W   | 0.588      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.56 | abby, empathy, Lx, phoebe, raynee    |
|            7 |     2364 | 2024-01-15 | NRG              | L   | 0.548      | -            | -                | -                | -         |    -6.72 | abby, chigen, empathy, Lx, phoebe    |
|            6 |     2669 | 2023-12-17 | Limitless Angels | W   | 0.355      | 0.250        | 0.010 (0.001)    | 0.180 (0.016)    | 0 (0.000) |     5.05 | chigen, empathy, Lx, phoebe, vanessa |
|            5 |     2832 | 2023-12-08 | FURIA fe         | L   | 0.294      | -            | -                | -                | -         |    -4.16 | Aidy, Bouchard, empathy, Lx, phoebe  |
|            4 |     2835 | 2023-12-08 | NAVI Javelins    | L   | 0.292      | -            | -                | -                | -         |    -3.08 | Aidy, Bouchard, empathy, Lx, phoebe  |
|            3 |     2941 | 2023-12-03 | Nouns fe         | W   | 0.262      | 0.250        | 0.000 (0.000)    | -                | 0 (0.000) |     1.91 | abby, Bouchard, empathy, Lx, phoebe  |
|            2 |     3688 | 2023-10-29 | EG Gold          | W   | 0.028      | 0.328        | -                | 0.000 (0.000)    | -         |     0.25 | abby, Bouchard, empathy, Lx, phoebe  |
|            1 |     3736 | 2023-10-28 | FlyQuest RED     | L   | 0.022      | -            | -                | -                | -         |    -0.31 | abby, Bouchard, empathy, Lx, phoebe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,878.71)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $250.00        | $250.00         |
| 2024-04-07 |      1.000 | $750.00        | $750.00         |
| 2024-03-03 |      0.868 | $250.00        | $217.01         |
| 2024-02-25 |      0.821 | $250.00        | $205.34         |
| 2024-02-04 |      0.681 | $250.00        | $170.34         |
| 2024-01-28 |      0.635 | $250.00        | $158.67         |
| 2024-01-21 |      0.588 | $750.00        | $441.01         |
| 2023-12-17 |      0.355 | $750.00        | $266.34         |
| 2023-12-10 |      0.306 | $4,000.00      | $1,223.70       |
| 2023-12-03 |      0.262 | $750.00        | $196.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
