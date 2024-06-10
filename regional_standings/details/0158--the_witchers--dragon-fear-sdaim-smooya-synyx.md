### Roster Details<br />
Team Name: The Witchers<br />
Roster: Dragon, fear, Sdaim, smooya, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  680.3<br />
<br />
Final Rank Value (680.3) = Starting Rank Value (670.4) + Head To Head Adjustments (9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.4
- 400 + ( ( 0.136 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 670.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3763 | 2024-01-16 | EYEBALLERS        | L   | 0.228      | -            | -                | -                | -         |    -1.41 | Dragon, fear, Sdaim, smooya, synyx |
|            9 |     3783 | 2024-01-16 | LL Madagaskar     | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.91 | Dragon, fear, Sdaim, smooya, synyx |
|            8 |     3793 | 2024-01-16 | entropik ostrava  | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.24 | Dragon, fear, Sdaim, smooya, synyx |
|            7 |     3925 | 2024-01-12 | Gaimin Gladiators | L   | 0.201      | -            | -                | -                | -         |    -0.29 | Dragon, fear, Sdaim, smooya, synyx |
|            6 |     4061 | 2023-12-30 | Metizport         | W   | 0.113      | 0.371        | 0.078 (0.003)    | 0.706 (0.029)    | 0 (0.000) |     2.99 | Dragon, fear, Sdaim, smooya, synyx |
|            5 |     4062 | 2023-12-30 | Alliance          | W   | 0.112      | 0.371        | 0.012 (0.000)    | 0.513 (0.021)    | 0 (0.000) |     2.75 | Dragon, fear, Sdaim, smooya, synyx |
|            4 |     4068 | 2023-12-28 | Aurora Young Blud | W   | 0.099      | 0.371        | 0.005 (0.000)    | 0.310 (0.011)    | 0 (0.000) |     1.85 | Dragon, fear, Sdaim, smooya, synyx |
|            3 |     4071 | 2023-12-27 | esmagaB           | W   | 0.093      | 0.371        | 0.008 (0.000)    | 0.211 (0.007)    | 0 (0.000) |     1.73 | Dragon, fear, Sdaim, smooya, synyx |
|            2 |     4111 | 2023-12-18 | NOM               | L   | 0.031      | -            | -                | -                | -         |    -0.57 | Dragon, fear, Sdaim, smooya, synyx |
|            1 |     4167 | 2023-12-16 | Spirit Academy    | L   | 0.019      | -            | -                | -                | -         |    -0.29 | Dragon, fear, Sdaim, smooya, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,687.98)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
