### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  641.6<br />
<br />
Final Rank Value (641.6) = Starting Rank Value (658.3) + Head To Head Adjustments (-16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.3
- 400 + ( ( 0.133 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 658.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1370 | 2024-04-09 | Nemiga    | L   | 0.863      | -            | -                | -                | -         |    -1.15 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           12 |     1400 | 2024-04-08 | Astralis  | L   | 0.856      | -            | -                | -                | -         |    -0.08 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           11 |     2839 | 2024-02-01 | GR        | L   | 0.411      | -            | -                | -                | -         |    -7.21 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           10 |     2842 | 2024-02-01 | Newhappy  | L   | 0.410      | -            | -                | -                | -         |    -6.88 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            9 |     2983 | 2024-01-23 | The Huns  | L   | 0.351      | -            | -                | -                | -         |    -6.34 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            8 |     2987 | 2024-01-23 | Eruption  | W   | 0.350      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     3.00 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            7 |     3010 | 2024-01-22 | GR        | W   | 0.344      | 0.143        | 0.001 (0.000)    | 0.146 (0.007)    | 0 (0.000) |     4.79 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            6 |     3093 | 2024-01-20 | Newhappy  | L   | 0.330      | -            | -                | -                | -         |    -5.47 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            5 |     3097 | 2024-01-19 | Nirvana   | W   | 0.329      | 0.143        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     1.94 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            4 |     3156 | 2024-01-18 | Wings Up  | L   | 0.322      | -            | -                | -                | -         |    -7.25 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            3 |     3433 | 2024-01-12 | Rare Atom | W   | 0.277      | 0.143        | 0.011 (0.000)    | 0.125 (0.005)    | 0 (0.000) |     4.63 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            2 |     3435 | 2024-01-12 | Nirvana   | W   | 0.277      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.68 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            1 |     3438 | 2024-01-12 | WDNMD     | W   | 0.276      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.66 | 18yM, AE, captainMo, DD, xiaosaGe       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,588.94)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
