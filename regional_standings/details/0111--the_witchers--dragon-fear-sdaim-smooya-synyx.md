### Roster Details<br />
Team Name: The Witchers<br />
Roster: Dragon, fear, Sdaim, smooya, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  774.7<br />
<br />
Final Rank Value (774.7) = Starting Rank Value (765.0) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.0
- 400 + ( ( 0.189 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 765.0


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
|           28 |     2316 | 2024-01-16 | EYEBALLERS        | L   | 0.555      | -            | -                | -                | -         |    -5.80 | Dragon, fear, Sdaim, smooya, synyx  |
|           27 |     2336 | 2024-01-16 | LL Madagaskar     | W   | 0.554      | -            | -                | -                | 0 (0.000) |     3.24 | Dragon, fear, Sdaim, smooya, synyx  |
|           26 |     2346 | 2024-01-16 | entropik ostrava  | W   | 0.553      | -            | -                | -                | 0 (0.000) |     1.87 | Dragon, fear, Sdaim, smooya, synyx  |
|           25 |     2478 | 2024-01-12 | Gaimin Gladiators | L   | 0.527      | -            | -                | -                | -         |    -0.86 | Dragon, fear, Sdaim, smooya, synyx  |
|           24 |     2614 | 2023-12-30 | Metizport         | W   | 0.439      | 0.371        | 0.136 (0.022)    | 1.000 (0.163)    | 0 (0.000) |    10.32 | Dragon, fear, Sdaim, smooya, synyx  |
|           23 |     2615 | 2023-12-30 | Alliance          | W   | 0.438      | 0.371        | 0.020 (0.003)    | 0.855 (0.139)    | 0 (0.000) |     9.57 | Dragon, fear, Sdaim, smooya, synyx  |
|           22 |     2621 | 2023-12-28 | Aurora Young Blud | W   | 0.426      | 0.371        | 0.002 (0.000)    | 0.133 (0.021)    | 0 (0.000) |     5.62 | Dragon, fear, Sdaim, smooya, synyx  |
|           21 |     2624 | 2023-12-27 | esmagaB           | W   | 0.420      | 0.371        | 0.015 (0.002)    | 0.342 (0.053)    | 0 (0.000) |     7.45 | Dragon, fear, Sdaim, smooya, synyx  |
|           20 |     2664 | 2023-12-18 | NOM               | L   | 0.358      | -            | -                | -                | -         |    -6.92 | Dragon, fear, Sdaim, smooya, synyx  |
|           19 |     2720 | 2023-12-16 | Spirit Academy    | L   | 0.345      | -            | -                | -                | -         |    -5.71 | Dragon, fear, Sdaim, smooya, synyx  |
|           18 |     2880 | 2023-12-06 | ALTERNATE aTTaX   | L   | 0.280      | -            | -                | -                | -         |    -3.94 | fear, Sdaim, smooya, soulfly, synyx |
|           17 |     2919 | 2023-12-05 | RUSH B            | L   | 0.273      | -            | -                | -                | -         |    -4.38 | fear, Sdaim, smooya, soulfly, synyx |
|           16 |     2937 | 2023-12-04 | Endpoint          | L   | 0.265      | -            | -                | -                | -         |    -3.58 | fear, Sdaim, smooya, soulfly, synyx |
|           15 |     3014 | 2023-11-30 | Into the Breach   | W   | 0.238      | 0.371        | 0.037 (0.003)    | 0.225 (0.020)    | 0 (0.000) |     4.37 | fear, Sdaim, smooya, soulfly, synyx |
|           14 |     3032 | 2023-11-28 | GODSENT           | L   | 0.226      | -            | -                | -                | -         |    -3.29 | fear, Sdaim, smooya, soulfly, synyx |
|           13 |     3165 | 2023-11-19 | GenOne            | W   | 0.167      | 0.294        | 0.001 (0.000)    | -                | 0 (0.000) |     1.49 | fear, Sdaim, smooya, soulfly, synyx |
|           12 |     3175 | 2023-11-19 | Spirit Academy    | W   | 0.166      | 0.294        | 0.020 (0.001)    | 0.245 (0.012)    | 0 (0.000) |     2.50 | fear, Sdaim, smooya, soulfly, synyx |
|           11 |     3353 | 2023-11-13 | Space             | L   | 0.125      | -            | -                | -                | -         |    -2.19 | fear, Sdaim, smooya, soulfly, synyx |
|           10 |     3377 | 2023-11-12 | FORZE             | L   | 0.119      | -            | -                | -                | -         |    -1.90 | fear, Sdaim, smooya, soulfly, synyx |
|            9 |     3435 | 2023-11-09 | Gaimin Gladiators | W   | 0.100      | 0.435        | 0.156 (0.007)    | 1.000 (0.043)    | 0 (0.000) |     3.01 | fear, Sdaim, smooya, soulfly, synyx |
|            8 |     3486 | 2023-11-07 | 500               | W   | 0.086      | 0.435        | -                | 0.622 (0.023)    | -         |     0.90 | fear, Sdaim, smooya, soulfly, synyx |
|            7 |     3521 | 2023-11-05 | Metizport         | L   | 0.071      | -            | -                | -                | -         |    -1.34 | fear, Sdaim, smooya, soulfly, synyx |
|            6 |     3524 | 2023-11-05 | 00NATION          | L   | 0.071      | -            | -                | -                | -         |    -1.44 | fear, Sdaim, smooya, soulfly, synyx |
|            5 |     3558 | 2023-11-03 | GODSENT           | L   | 0.060      | -            | -                | -                | -         |    -0.86 | fear, Sdaim, smooya, soulfly, synyx |
|            4 |     3608 | 2023-11-01 | Sprout            | W   | 0.046      | 0.371        | 0.010 (0.000)    | 0.221 (0.004)    | -         |     0.66 | fear, Sdaim, smooya, soulfly, synyx |
|            3 |     3681 | 2023-10-30 | Entropiq          | W   | 0.031      | 0.371        | -                | 0.403 (0.005)    | -         |     0.47 | fear, Sdaim, smooya, soulfly, synyx |
|            2 |     3764 | 2023-10-28 | Pompa             | W   | 0.018      | -            | -                | -                | -         |     0.11 | fear, Sdaim, smooya, soulfly, synyx |
|            1 |     3802 | 2023-10-27 | Sampi             | W   | 0.011      | 0.371        | 0.084 (0.000)    | -                | -         |     0.27 | fear, Sdaim, smooya, soulfly, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,321.40)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-30 |      0.439 | $15,000.00     | $6,586.55       |
| 2023-11-19 |      0.167 | $3,000.00      | $500.05         |
| 2023-11-06 |      0.078 | $3,000.00      | $234.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
