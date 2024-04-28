### Roster Details<br />
Team Name: Nut-E<br />
Roster: cl0ver, Mr Shark, Sha, supar, tallaj<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [219](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  511.9<br />
<br />
Final Rank Value (511.9) = Starting Rank Value (522.8) + Head To Head Adjustments (-10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.8
- 400 + ( ( 0.060 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 522.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1287 | 2022-12-01 | Antic         | L   | 0.711      | -            | -                | -                | -         |    -8.81 | cl0ver, Mr Shark, Sha, supar, tallaj       |
|            9 |     1314 | 2022-11-30 | VERTEX        | L   | 0.704      | -            | -                | -                | -         |    -4.98 | bogeymanh, cl0ver, mega2f, Mr Shark, supar |
|            8 |     1502 | 2022-11-23 | Dynasty       | W   | 0.658      | 0.350        | 0.000 (0.000)    | 0.025 (0.006)    | 0 (0.000) |     7.03 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            7 |     1525 | 2022-11-21 | Stirlz Fans   | W   | 0.644      | 0.350        | 0.000 (0.000)    | 0.014 (0.003)    | 0 (0.000) |     6.92 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            6 |     1876 | 2022-10-26 | e-LEMON-ators | L   | 0.471      | -            | -                | -                | -         |    -5.05 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            5 |     2228 | 2022-10-13 | God's Work    | L   | 0.385      | -            | -                | -                | -         |    -6.64 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            4 |     2264 | 2022-10-12 | Stirlz Fans   | W   | 0.378      | 0.313        | 0.000 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     4.10 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            3 |     2291 | 2022-10-11 | VERTEX        | L   | 0.370      | -            | -                | -                | -         |    -2.71 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            2 |     2762 | 2022-09-22 | e-LEMON-ators | L   | 0.244      | -            | -                | -                | -         |    -2.79 | cl0ver, mega2f, Mr Shark, supar, Velocity  |
|            1 |     2970 | 2022-09-15 | yellow        | W   | 0.198      | 0.350        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     2.07 | cl0ver, mega2f, Mr Shark, supar, Velocity  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($307.85)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
