### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  822.0<br />
<br />
Final Rank Value (822.0) = Starting Rank Value (730.2) + Head To Head Adjustments (91.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.2
- 400 + ( ( 0.171 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 730.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       33 | 2024-04-21 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -12.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |      571 | 2024-04-03 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |    -8.28 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |      612 | 2024-04-02 | Guild Eagles    | W   | 1.000      | 0.143        | 0.046 (0.007)    | 0.727 (0.104)    | 0 (0.000) |    21.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |      628 | 2024-04-02 | PARIVISION      | W   | 1.000      | 0.143        | -                | 0.358 (0.051)    | 0 (0.000) |    14.61 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |      854 | 2024-03-18 | Sashi           | L   | 0.966      | -            | -                | -                | -         |   -12.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |      912 | 2024-03-15 | CYBERSHOKE      | W   | 0.947      | 0.372        | 0.004 (0.001)    | -                | 0 (0.000) |     9.42 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |      986 | 2024-03-13 | INGLORIOUS      | W   | 0.933      | 0.372        | -                | 0.089 (0.031)    | 0 (0.000) |     6.17 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     1037 | 2024-03-11 | 1WIN            | W   | 0.919      | 0.372        | -                | 0.275 (0.094)    | 0 (0.000) |     6.81 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     1081 | 2024-03-09 | K10             | W   | 0.906      | 0.372        | 0.015 (0.005)    | 0.189 (0.064)    | 0 (0.000) |    13.88 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     1122 | 2024-03-07 | Sashi           | L   | 0.894      | -            | -                | -                | -         |   -10.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     1153 | 2024-03-06 | The Chosen Few  | W   | 0.887      | 0.372        | 0.004 (0.001)    | 0.340 (0.112)    | 0 (0.000) |    11.47 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     1194 | 2024-03-05 | Johnny Speeds   | L   | 0.880      | -            | -                | -                | -         |   -13.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     1202 | 2024-03-05 | Betera          | W   | 0.879      | 0.143        | 0.004 (0.001)    | 0.240 (0.030)    | 0 (0.000) |    12.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     1736 | 2024-02-09 | Sashi           | L   | 0.712      | -            | -                | -                | -         |    -7.80 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     1746 | 2024-02-08 | Guild Eagles    | W   | 0.707      | 0.143        | 0.046 (0.005)    | 0.727 (0.073)    | 0 (0.000) |    17.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     1752 | 2024-02-08 | AMKAL           | L   | 0.706      | -            | -                | -                | -         |    -4.01 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     1916 | 2024-01-30 | Sashi           | L   | 0.648      | -            | -                | -                | -         |    -6.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     1921 | 2024-01-30 | fnatic          | W   | 0.646      | 0.143        | 0.240 (0.022)    | 0.624 (0.058)    | 0 (0.000) |    17.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     1923 | 2024-01-30 | The Neighbours  | W   | 0.646      | 0.143        | 0.030 (0.003)    | -                | -         |    12.85 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     2257 | 2024-01-18 | AMKAL           | L   | 0.565      | -            | -                | -                | -         |    -3.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     2277 | 2024-01-17 | esmagaB         | W   | 0.561      | 0.143        | 0.015 (0.001)    | -                | -         |     9.14 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     2283 | 2024-01-17 | PARIVISION      | W   | 0.561      | -            | -                | -                | -         |     7.38 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     2436 | 2024-01-13 | Permitta        | L   | 0.533      | -            | -                | -                | -         |    -6.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     2445 | 2024-01-13 | B8              | W   | 0.532      | -            | -                | -                | -         |     6.59 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     2473 | 2024-01-12 | EYEBALLERS      | W   | 0.528      | 0.143        | 0.052 (0.004)    | 0.406 (0.031)    | -         |    11.91 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3515 | 2023-11-05 | f4ceit4contract | L   | 0.073      | -            | -                | -                | -         |    -1.54 | FpSSS, k4sl-, Pipw, Polt, Xant3r  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,323.08)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-25 |      1.000 | $1,250.00      | $1,250.00       |
| 2023-11-05 |      0.073 | $1,000.00      | $73.08          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
