### Roster Details<br />
Team Name: The Witchers<br />
Roster: Dragon, fear, Sdaim, smooya, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  695.5<br />
<br />
Final Rank Value (695.5) = Starting Rank Value (683.8) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.8
- 400 + ( ( 0.146 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 683.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     3263 | 2024-01-16 | EYEBALLERS        | L   | 0.308      | -            | -                | -                | -         |    -2.58 | Dragon, fear, Sdaim, smooya, synyx  |
|           12 |     3283 | 2024-01-16 | LL Madagaskar     | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.42 | Dragon, fear, Sdaim, smooya, synyx  |
|           11 |     3293 | 2024-01-16 | entropik ostrava  | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.55 | Dragon, fear, Sdaim, smooya, synyx  |
|           10 |     3425 | 2024-01-12 | Gaimin Gladiators | L   | 0.280      | -            | -                | -                | -         |    -0.46 | Dragon, fear, Sdaim, smooya, synyx  |
|            9 |     3561 | 2023-12-30 | Metizport         | W   | 0.192      | 0.371        | 0.088 (0.006)    | 0.860 (0.061)    | 0 (0.000) |     4.97 | Dragon, fear, Sdaim, smooya, synyx  |
|            8 |     3562 | 2023-12-30 | Alliance          | W   | 0.191      | 0.371        | 0.004 (0.000)    | 0.617 (0.044)    | 0 (0.000) |     4.21 | Dragon, fear, Sdaim, smooya, synyx  |
|            7 |     3568 | 2023-12-28 | Aurora Young Blud | W   | 0.178      | 0.371        | 0.001 (0.000)    | 0.058 (0.004)    | 0 (0.000) |     2.63 | Dragon, fear, Sdaim, smooya, synyx  |
|            6 |     3571 | 2023-12-27 | esmagaB           | W   | 0.172      | 0.371        | 0.008 (0.001)    | 0.258 (0.016)    | 0 (0.000) |     3.17 | Dragon, fear, Sdaim, smooya, synyx  |
|            5 |     3611 | 2023-12-18 | NOM               | L   | 0.110      | -            | -                | -                | -         |    -2.02 | Dragon, fear, Sdaim, smooya, synyx  |
|            4 |     3667 | 2023-12-16 | Spirit Academy    | L   | 0.098      | -            | -                | -                | -         |    -1.53 | Dragon, fear, Sdaim, smooya, synyx  |
|            3 |     3827 | 2023-12-06 | ALTERNATE aTTaX   | L   | 0.033      | -            | -                | -                | -         |    -0.19 | fear, Sdaim, smooya, soulfly, synyx |
|            2 |     3866 | 2023-12-05 | RUSH B            | L   | 0.026      | -            | -                | -                | -         |    -0.37 | fear, Sdaim, smooya, soulfly, synyx |
|            1 |     3884 | 2023-12-04 | Endpoint          | L   | 0.018      | -            | -                | -                | -         |    -0.14 | fear, Sdaim, smooya, soulfly, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,875.56)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
