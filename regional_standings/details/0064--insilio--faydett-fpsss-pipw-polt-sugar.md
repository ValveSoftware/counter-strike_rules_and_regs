### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  1030.4<br />
<br />
Final Rank Value (1030.4) = Starting Rank Value (904.1) + Head To Head Adjustments (126.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.288[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 904.1
- 400 + ( ( 0.253 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 904.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       45 | 2024-06-09 | RUBY              | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.555 (0.206)    | 0 (0.000) |    10.28 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |       99 | 2024-06-08 | Zero Tenacity     | W   | 1.000      | 0.371        | 0.154 (0.057)    | 1.000 (0.371)    | 0 (0.000) |    19.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      166 | 2024-06-07 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      368 | 2024-06-03 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -17.93 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      427 | 2024-06-01 | 1WIN              | W   | 1.000      | 0.371        | 0.042 (0.016)    | 0.672 (0.250)    | 0 (0.000) |    19.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      478 | 2024-05-30 | VP.Prodigy        | W   | 1.000      | 0.371        | -                | 0.539 (0.200)    | 0 (0.000) |    13.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |     1136 | 2024-05-07 | RUBY              | L   | 0.973      | -            | -                | -                | -         |   -18.64 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |     1155 | 2024-05-06 | Zero Tenacity     | L   | 0.966      | -            | -                | -                | -         |   -13.94 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     1159 | 2024-05-06 | BLEED             | L   | 0.965      | -            | -                | -                | -         |    -4.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     1205 | 2024-05-03 | Permitta          | W   | 0.946      | 0.435        | 0.022 (0.009)    | 0.972 (0.400)    | 0 (0.000) |    11.64 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     1217 | 2024-05-03 | BetBoom           | L   | 0.944      | -            | -                | -                | -         |    -1.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     1249 | 2024-05-01 | OG                | W   | 0.933      | 0.435        | 0.249 (0.101)    | -                | 0 (0.000) |    24.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1260 | 2024-05-01 | Nexus             | W   | 0.932      | -            | -                | -                | 0 (0.000) |     9.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1301 | 2024-04-29 | HAVU              | L   | 0.919      | -            | -                | -                | -         |   -23.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1337 | 2024-04-27 | M1X KS            | W   | 0.906      | 0.435        | 0.028 (0.011)    | 0.537 (0.212)    | 0 (0.000) |    17.11 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     1344 | 2024-04-27 | Permitta          | W   | 0.906      | 0.396        | 0.022 (0.008)    | 0.972 (0.349)    | 0 (0.000) |    13.96 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     1366 | 2024-04-26 | ARCRED            | L   | 0.900      | -            | -                | -                | -         |   -24.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     1371 | 2024-04-26 | Enterprise        | W   | 0.899      | 0.396        | -                | 0.647 (0.231)    | -         |    12.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     1405 | 2024-04-25 | MOUZ NXT          | W   | 0.891      | 0.435        | 0.164 (0.063)    | 1.000 (0.387)    | -         |    17.78 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     1431 | 2024-04-23 | EYEBALLERS        | W   | 0.880      | 0.435        | -                | 0.722 (0.276)    | -         |    11.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     1480 | 2024-04-21 | Permitta          | L   | 0.864      | -            | -                | -                | -         |   -12.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2018 | 2024-04-03 | AMKAL             | L   | 0.747      | -            | -                | -                | -         |    -5.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2059 | 2024-04-02 | M1X KS            | W   | 0.740      | -            | -                | -                | -         |    15.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2075 | 2024-04-02 | PARIVISION        | W   | 0.738      | -            | -                | -                | -         |    14.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2301 | 2024-03-18 | Sashi             | L   | 0.639      | -            | -                | -                | -         |    -6.69 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2359 | 2024-03-15 | CYBERSHOKE        | W   | 0.620      | -            | -                | -                | -         |     4.20 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2433 | 2024-03-13 | INGLORIOUS        | W   | 0.606      | -            | -                | -                | -         |     2.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2484 | 2024-03-11 | 1WIN              | W   | 0.593      | 0.372        | 0.042 (0.009)    | -                | -         |    10.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2528 | 2024-03-09 | Fraud5            | W   | 0.579      | -            | -                | -                | -         |     3.88 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2569 | 2024-03-07 | Sashi             | L   | 0.567      | -            | -                | -                | -         |    -5.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     2600 | 2024-03-06 | The Chosen Few    | W   | 0.560      | -            | -                | -                | -         |     3.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     2641 | 2024-03-05 | Johnny Speeds     | L   | 0.553      | -            | -                | -                | -         |    -4.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     2649 | 2024-03-05 | Betera            | W   | 0.553      | -            | -                | -                | -         |     4.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3183 | 2024-02-09 | Sashi             | L   | 0.386      | -            | -                | -                | -         |    -3.15 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3193 | 2024-02-08 | M1X KS            | W   | 0.380      | -            | -                | -                | -         |     8.96 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3199 | 2024-02-08 | AMKAL             | L   | 0.379      | -            | -                | -                | -         |    -1.91 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3363 | 2024-01-30 | Sashi             | L   | 0.321      | -            | -                | -                | -         |    -2.32 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3368 | 2024-01-30 | fnatic            | W   | 0.320      | 0.143        | 0.198 (0.009)    | -                | -         |     9.31 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3370 | 2024-01-30 | EXO               | W   | 0.320      | -            | -                | -                | -         |     3.36 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3704 | 2024-01-18 | AMKAL             | L   | 0.238      | -            | -                | -                | -         |    -1.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3724 | 2024-01-17 | esmagaB           | W   | 0.234      | -            | -                | -                | -         |     1.97 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3730 | 2024-01-17 | PARIVISION        | W   | 0.234      | -            | -                | -                | -         |     4.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3883 | 2024-01-13 | Permitta          | L   | 0.206      | -            | -                | -                | -         |    -3.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     3892 | 2024-01-13 | B8                | W   | 0.206      | -            | -                | -                | -         |     0.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3920 | 2024-01-12 | EYEBALLERS        | W   | 0.201      | -            | -                | -                | -         |     3.37 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,763.82)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      0.953 | $2,000.00      | $1,905.79       |
| 2024-03-25 |      0.686 | $1,250.00      | $858.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
