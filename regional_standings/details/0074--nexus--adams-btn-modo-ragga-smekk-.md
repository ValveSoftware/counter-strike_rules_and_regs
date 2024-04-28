### Roster Details<br />
Team Name: Nexus<br />
Roster: adamS, BTN, MoDo, ragga, smekk-<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  877.7<br />
<br />
Final Rank Value (877.7) = Starting Rank Value (795.3) + Head To Head Adjustments (82.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.3
- 400 + ( ( 0.193 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 795.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |        1 | 2023-02-12 | Anonymo         | W   | 1.000      | 0.143        | -                | 0.388 (0.055)    | 0 (0.000) |     7.31 | adamS, BTN, MoDo, ragga, smekk-     |
|           33 |       34 | 2023-02-11 | TENSTAR         | W   | 1.000      | 0.351        | -                | 0.184 (0.065)    | 0 (0.000) |     4.79 | adamS, BTN, MoDo, ragga, smekk-     |
|           32 |       50 | 2023-02-10 | Mixfits         | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.165 (0.072)    | 0 (0.000) |     8.48 | adamS, BTN, MoDo, ragga, smekk-     |
|           31 |       68 | 2023-02-09 | iNation         | L   | 1.000      | -            | -                | -                | -         |    -7.73 | adamS, BTN, MoDo, ragga, smekk-     |
|           30 |      103 | 2023-02-07 | Illuminar       | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.700 (0.304)    | 0 (0.000) |    22.50 | adamS, BTN, MoDo, ragga, smekk-     |
|           29 |      115 | 2023-02-06 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |   -21.70 | adamS, BTN, MoDo, ragga, smekk-     |
|           28 |      188 | 2023-02-03 | GTZ             | W   | 1.000      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |    10.26 | adamS, BTN, MoDo, ragga, smekk-     |
|           27 |      193 | 2023-02-03 | Falcons         | L   | 1.000      | -            | -                | -                | -         |    -9.07 | adamS, BTN, MoDo, ragga, smekk-     |
|           26 |      216 | 2023-02-02 | IKLA            | L   | 1.000      | -            | -                | -                | -         |   -12.17 | adamS, BTN, MoDo, ragga, smekk-     |
|           25 |      288 | 2023-01-30 | FTW             | W   | 1.000      | 0.143        | 0.026 (0.004)    | -                | 0 (0.000) |    14.85 | adamS, BTN, MoDo, ragga, smekk-     |
|           24 |      314 | 2023-01-29 | undefined       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.15 | adamS, BTN, MoDo, ragga, smekk-     |
|           23 |      438 | 2023-01-25 | Coalesce        | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.315 (0.045)    | 0 (0.000) |    10.31 | adamS, BTN, MoDo, ragga, smekk-     |
|           22 |      487 | 2023-01-23 | HONORIS         | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.748 (0.356)    | 0 (0.000) |    18.18 | BTN, ERSIN, MoDo, ragga, smekk-     |
|           21 |      494 | 2023-01-23 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |    -9.68 | adamS, BTN, MoDo, ragga, smekk-     |
|           20 |      524 | 2023-01-22 | Tricked         | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.954 (0.455)    | 0 (0.000) |    20.28 | BTN, ERSIN, MoDo, ragga, smekk-     |
|           19 |      573 | 2023-01-20 | MASONIC         | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.752 (0.107)    | -         |    16.70 | BTN, MoDo, ragga, smekk-, swiiffter |
|           18 |      579 | 2023-01-20 | undefined       | W   | 1.000      | -            | -                | -                | -         |    13.67 | BTN, MoDo, ragga, smekk-, swiiffter |
|           17 |      589 | 2023-01-19 | Young Ninjas    | W   | 1.000      | 0.477        | 0.076 (0.036)    | 0.694 (0.331)    | -         |    23.94 | BTN, ERSIN, MoDo, ragga, smekk-     |
|           16 |      606 | 2023-01-19 | MASONIC         | L   | 1.000      | -            | -                | -                | -         |   -11.59 | BTN, MoDo, ragga, smekk-, swiiffter |
|           15 |      736 | 2022-12-30 | los kogutos     | L   | 0.904      | -            | -                | -                | -         |   -14.41 | BTN, MoDo, ragga, smekk-, swiiffter |
|           14 |      738 | 2022-12-29 | iNation         | L   | 0.897      | -            | -                | -                | -         |    -5.72 | BTN, MoDo, ragga, smekk-, swiiffter |
|           13 |     2703 | 2022-09-23 | Rapid Ninjas    | L   | 0.253      | -            | -                | -                | -         |    -6.23 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|           12 |     2710 | 2022-09-23 | SINNERS         | L   | 0.253      | -            | -                | -                | -         |    -1.85 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|           11 |     2720 | 2022-09-23 | 500             | L   | 0.251      | -            | -                | -                | -         |    -1.50 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|           10 |     2744 | 2022-09-22 | HOTU            | L   | 0.247      | -            | -                | -                | -         |    -4.59 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            9 |     2789 | 2022-09-21 | los kogutos     | L   | 0.239      | -            | -                | -                | -         |    -3.84 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            8 |     2803 | 2022-09-20 | ex-TAG          | L   | 0.234      | -            | -                | -                | -         |    -4.55 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            7 |     2832 | 2022-09-19 | EYEBALLERS      | W   | 0.227      | 0.435        | 0.017 (0.002)    | 0.776 (0.076)    | -         |     4.72 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            6 |     2885 | 2022-09-17 | BLUEJAYS        | L   | 0.213      | -            | -                | -                | -         |    -1.13 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            5 |     2972 | 2022-09-15 | sYnck           | W   | 0.197      | -            | -                | -                | -         |     2.79 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            4 |     3022 | 2022-09-13 | ex-TITANS       | W   | 0.187      | -            | -                | -                | -         |     1.68 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            3 |     3036 | 2022-09-13 | los kogutos     | W   | 0.185      | -            | -                | -                | -         |     2.82 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            2 |     3070 | 2022-09-11 | allStars        | W   | 0.174      | -            | -                | -                | -         |     1.47 | adamS, BTN, ragga, SEMINTE, XELLOW  |
|            1 |     3089 | 2022-09-11 | OneTap          | W   | 0.172      | -            | -                | -                | -         |     2.28 | adamS, BTN, ragga, SEMINTE, XELLOW  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($626.11)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-30 |      0.905 | $500.00        | $452.60         |
| 2022-09-11 |      0.174 | $1,000.00      | $173.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
