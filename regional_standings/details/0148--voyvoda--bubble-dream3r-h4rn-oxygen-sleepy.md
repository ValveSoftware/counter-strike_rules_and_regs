### Roster Details<br />
Team Name: VOYVODA<br />
Roster: bubble, dream3r, h4rn, oxygeN, sleepy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  715.4<br />
<br />
Final Rank Value (715.4) = Starting Rank Value (589.7) + Head To Head Adjustments (125.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 589.7
- 400 + ( ( 0.093 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 589.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       47 | 2023-02-10 | Ultimate Power  | W   | 1.000      | 0.351        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.60 | bubble, dream3r, h4rn, oxygeN, sleepy  |
|           10 |      104 | 2023-02-07 | MOUZ NXT        | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.537 (0.077)    | 0 (0.000) |    21.81 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            9 |      109 | 2023-02-07 | UNGENTIUM       | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.474 (0.068)    | 0 (0.000) |    20.37 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            8 |      130 | 2023-02-06 | GTZ             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.195 (0.028)    | 0 (0.000) |    18.17 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            7 |      206 | 2023-02-02 | ECSTATIC        | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.556 (0.079)    | 0 (0.000) |    24.59 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            6 |      245 | 2023-02-01 | Forward         | L   | 1.000      | -            | -                | -                | -         |    -8.99 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            5 |      257 | 2023-01-31 | HONORIS         | L   | 1.000      | -            | -                | -                | -         |    -6.99 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            4 |      261 | 2023-01-31 | Eternal Fire    | W   | 1.000      | 0.143        | 0.034 (0.005)    | 0.496 (0.071)    | 0 (0.000) |    26.93 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            3 |      266 | 2023-01-31 | Movistar Riders | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.082 (0.012)    | 0 (0.000) |    21.78 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            2 |     1186 | 2022-12-04 | BIG Academy     | L   | 0.731      | -            | -                | -                | -         |    -2.34 | bubble, dream3r, h4rn, oxygeN, REDSTAR |
|            1 |     1205 | 2022-12-03 | Wales           | W   | 0.728      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.728) |     5.79 | eMy, kyzer, m0g, trouzzyy, Walli       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
