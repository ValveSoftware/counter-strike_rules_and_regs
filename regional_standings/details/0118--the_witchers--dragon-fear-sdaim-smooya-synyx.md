### Roster Details<br />
Team Name: The Witchers<br />
Roster: Dragon, fear, Sdaim, smooya, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  755.4<br />
<br />
Final Rank Value (755.4) = Starting Rank Value (741.2) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.2
- 400 + ( ( 0.179 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 741.2


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
|           20 |     2612 | 2024-01-16 | EYEBALLERS        | L   | 0.462      | -            | -                | -                | -         |    -3.94 | Dragon, fear, Sdaim, smooya, synyx  |
|           19 |     2632 | 2024-01-16 | LL Madagaskar     | W   | 0.461      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.90 | Dragon, fear, Sdaim, smooya, synyx  |
|           18 |     2642 | 2024-01-16 | entropik ostrava  | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.74 | Dragon, fear, Sdaim, smooya, synyx  |
|           17 |     2774 | 2024-01-12 | Gaimin Gladiators | L   | 0.434      | -            | -                | -                | -         |    -0.54 | Dragon, fear, Sdaim, smooya, synyx  |
|           16 |     2910 | 2023-12-30 | Metizport         | W   | 0.346      | 0.371        | 0.183 (0.023)    | 1.000 (0.128)    | 0 (0.000) |     8.75 | Dragon, fear, Sdaim, smooya, synyx  |
|           15 |     2911 | 2023-12-30 | Alliance          | W   | 0.345      | 0.371        | 0.016 (0.002)    | 0.815 (0.104)    | 0 (0.000) |     7.63 | Dragon, fear, Sdaim, smooya, synyx  |
|           14 |     2917 | 2023-12-28 | Aurora Young Blud | W   | 0.333      | 0.371        | 0.002 (0.000)    | 0.098 (0.012)    | 0 (0.000) |     4.55 | Dragon, fear, Sdaim, smooya, synyx  |
|           13 |     2920 | 2023-12-27 | esmagaB           | W   | 0.326      | 0.371        | 0.016 (0.002)    | 0.293 (0.035)    | 0 (0.000) |     5.80 | Dragon, fear, Sdaim, smooya, synyx  |
|           12 |     2960 | 2023-12-18 | NOM               | L   | 0.264      | -            | -                | -                | -         |    -4.98 | Dragon, fear, Sdaim, smooya, synyx  |
|           11 |     3016 | 2023-12-16 | Spirit Academy    | L   | 0.252      | -            | -                | -                | -         |    -4.00 | Dragon, fear, Sdaim, smooya, synyx  |
|           10 |     3176 | 2023-12-06 | ALTERNATE aTTaX   | L   | 0.187      | -            | -                | -                | -         |    -1.15 | fear, Sdaim, smooya, soulfly, synyx |
|            9 |     3215 | 2023-12-05 | RUSH B            | L   | 0.180      | -            | -                | -                | -         |    -2.69 | fear, Sdaim, smooya, soulfly, synyx |
|            8 |     3233 | 2023-12-04 | Endpoint          | L   | 0.172      | -            | -                | -                | -         |    -1.61 | fear, Sdaim, smooya, soulfly, synyx |
|            7 |     3310 | 2023-11-30 | Into the Breach   | W   | 0.144      | 0.371        | 0.021 (0.001)    | 0.152 (0.008)    | 0 (0.000) |     2.58 | fear, Sdaim, smooya, soulfly, synyx |
|            6 |     3328 | 2023-11-28 | GODSENT           | L   | 0.133      | -            | -                | -                | -         |    -2.02 | fear, Sdaim, smooya, soulfly, synyx |
|            5 |     3461 | 2023-11-19 | GenOne            | W   | 0.073      | 0.294        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.67 | fear, Sdaim, smooya, soulfly, synyx |
|            4 |     3471 | 2023-11-19 | Spirit Academy    | W   | 0.073      | 0.294        | 0.017 (0.000)    | 0.195 (0.004)    | 0 (0.000) |     1.14 | fear, Sdaim, smooya, soulfly, synyx |
|            3 |     3649 | 2023-11-13 | Space             | L   | 0.031      | -            | -                | -                | -         |    -0.49 | fear, Sdaim, smooya, soulfly, synyx |
|            2 |     3673 | 2023-11-12 | FORZE             | L   | 0.025      | -            | -                | -                | -         |    -0.39 | fear, Sdaim, smooya, soulfly, synyx |
|            1 |     3731 | 2023-11-09 | Gaimin Gladiators | W   | 0.006      | 0.435        | 0.189 (0.001)    | 0.990 (0.003)    | 0 (0.000) |     0.19 | fear, Sdaim, smooya, soulfly, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,407.08)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-30 |      0.346 | $15,000.00     | $5,186.96       |
| 2023-11-19 |      0.073 | $3,000.00      | $220.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
