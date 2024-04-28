### Roster Details<br />
Team Name: Websterz<br />
Roster: boX, lollipop21k, mds, tN1R, znxxX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  823.4<br />
<br />
Final Rank Value (823.4) = Starting Rank Value (883.7) + Head To Head Adjustments (-60.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.115[<sup>2</sup>](#table1)
- LAN Wins: 0.227[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 883.7
- 400 + ( ( 0.236 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 883.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      342 | 2023-01-28 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |   -10.50 | boX, lollipop21k, mds, tN1R, znxxX            |
|           37 |      464 | 2023-01-24 | Bad News Eagles    | L   | 1.000      | -            | -                | -                | -         |    -5.15 | boX, lollipop21k, mds, tN1R, znxxX            |
|           36 |      532 | 2023-01-22 | Juggernauts        | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.190 (0.083)    | 0 (0.000) |    10.84 | boX, lollipop21k, mds, tN1R, znxxX            |
|           35 |      565 | 2023-01-20 | MASONIC            | W   | 1.000      | 0.435        | 0.021 (0.009)    | 0.752 (0.327)    | 0 (0.000) |    15.16 | boX, lollipop21k, mds, tN1R, znxxX            |
|           34 |      621 | 2023-01-18 | BLINK              | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.081 (0.035)    | 0 (0.000) |     7.48 | boX, lollipop21k, mds, tN1R, znxxX            |
|           33 |      662 | 2023-01-16 | PROSPECTS          | L   | 1.000      | -            | -                | -                | -         |   -11.92 | boX, lollipop21k, mds, tN1R, znxxX            |
|           32 |      697 | 2023-01-14 | Aurora             | L   | 1.000      | -            | -                | -                | -         |    -9.78 | boX, lollipop21k, mds, tN1R, znxxX            |
|           31 |     1043 | 2022-12-08 | ex-Into the Breach | L   | 0.759      | -            | -                | -                | -         |   -11.33 | boX, mds, speed4k, tN1R, znxxX                |
|           30 |     1080 | 2022-12-07 | Fourteen           | W   | 0.753      | -            | -                | -                | 0 (0.000) |     3.40 | boX, mds, speed4k, tN1R, znxxX                |
|           29 |     1121 | 2022-12-06 | Spirit Academy     | L   | 0.746      | -            | -                | -                | -         |    -9.38 | boX, mds, speed4k, tN1R, znxxX                |
|           28 |     1188 | 2022-12-04 | INVSN              | L   | 0.731      | -            | -                | -                | -         |    -9.32 | boX, mds, speed4k, tN1R, znxxX                |
|           27 |     1258 | 2022-12-02 | Tricked            | L   | 0.719      | -            | -                | -                | -         |    -9.03 | boX, mds, speed4k, tN1R, znxxX                |
|           26 |     1279 | 2022-12-01 | 500                | L   | 0.713      | -            | -                | -                | -         |    -4.68 | boX, mds, speed4k, tN1R, znxxX                |
|           25 |     1280 | 2022-12-01 | Boston crab        | W   | 0.713      | 0.333        | 0.016 (0.004)    | 0.162 (0.039)    | 1 (0.713) |    11.75 | boX, mds, speed4k, tN1R, znxxX                |
|           24 |     1286 | 2022-12-01 | POLET              | W   | 0.712      | -            | -                | -                | 1 (0.712) |     1.62 | boX, mds, speed4k, tN1R, znxxX                |
|           23 |     1327 | 2022-11-29 | Sangal             | W   | 0.701      | 0.435        | 0.017 (0.005)    | 0.684 (0.208)    | -         |    13.48 | boX, mds, speed4k, tN1R, znxxX                |
|           22 |     1499 | 2022-11-23 | 9 Pandas           | L   | 0.659      | -            | -                | -                | -         |   -13.25 | boX, mds, speed4k, tN1R, znxxX                |
|           21 |     1519 | 2022-11-22 | AVANGAR            | L   | 0.652      | -            | -                | -                | -         |   -13.22 | boX, mds, speed4k, tN1R, znxxX                |
|           20 |     1526 | 2022-11-21 | AGO                | L   | 0.644      | -            | -                | -                | -         |   -12.18 | boX, mds, speed4k, tN1R, znxxX                |
|           19 |     1551 | 2022-11-19 | Anonymo            | W   | 0.633      | 0.143        | -                | 0.388 (0.035)    | -         |     3.51 | boX, mds, speed4k, tN1R, znxxX                |
|           18 |     1560 | 2022-11-19 |  180mgkoffein      | W   | 0.631      | -            | -                | -                | -         |     2.08 | boX, mds, speed4k, tN1R, znxxX                |
|           17 |     1658 | 2022-11-11 | HONORIS            | L   | 0.579      | -            | -                | -                | -         |    -8.30 | boX, mds, speed4k, tN1R, znxxX                |
|           16 |     1662 | 2022-11-10 | LDLC               | L   | 0.573      | -            | -                | -                | -         |   -12.33 | boX, mds, speed4k, tN1R, znxxX                |
|           15 |     1663 | 2022-11-10 | HONORIS            | W   | 0.572      | 0.426        | 0.011 (0.003)    | 0.748 (0.182)    | -         |     9.52 | boX, mds, speed4k, tN1R, znxxX                |
|           14 |     1969 | 2022-10-22 | Copenhagen Flames  | L   | 0.445      | -            | -                | -                | -         |    -5.07 | boX, mds, speed4k, tN1R, znxxX                |
|           13 |     2024 | 2022-10-20 | Eternal Fire       | W   | 0.431      | 0.435        | 0.034 (0.006)    | 0.496 (0.093)    | -         |     8.08 | boX, mds, speed4k, tN1R, znxxX                |
|           12 |     2068 | 2022-10-18 | Partizan           | W   | 0.419      | 0.435        | 0.005 (0.001)    | 0.653 (0.119)    | -         |     5.50 | boX, mds, speed4k, tN1R, znxxX                |
|           11 |     2104 | 2022-10-16 | BLINK              | W   | 0.407      | -            | -                | -                | -         |     2.50 | BledarD, Caleyy, gulito, krabeni, vAloN       |
|           10 |     2189 | 2022-10-14 | Zero Tenacity      | L   | 0.392      | -            | -                | -                | -         |    -8.01 | boX, mds, speed4k, tN1R, znxxX                |
|            9 |     2220 | 2022-10-13 | IKLA               | L   | 0.386      | -            | -                | -                | -         |    -5.82 | boX, mds, speed4k, tN1R, znxxX                |
|            8 |     2300 | 2022-10-10 | X                  | W   | 0.365      | -            | -                | -                | -         |     1.21 | arbnorz, cerber, deb0, gejmzilla, HYPERI1     |
|            7 |     2945 | 2022-09-15 | INVSN              | W   | 0.200      | 0.333        | 0.014 (0.001)    | 0.428 (0.029)    | 1 (0.200) |     3.52 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN |
|            6 |     2969 | 2022-09-15 | AVANGAR            | W   | 0.198      | 0.333        | 0.003 (0.000)    | -                | 1 (0.198) |     2.18 | boX, mds, speed4k, tN1R, znxxX                |
|            5 |     3039 | 2022-09-13 | BEBRA              | W   | 0.184      | -            | -                | -                | 1 (0.184) |     0.39 | ANASTAZE, Boombl4, Buster, fANDER, poka       |
|            4 |     3046 | 2022-09-12 | Websterz           | W   | 0.180      | -            | -                | -                | 1 (0.180) |     0.58 | dukefissura, killmatic, Magnojez, Polt, Re1GN |
|            3 |     3055 | 2022-09-12 | ex-TAG             | L   | 0.178      | -            | -                | -                | -         |    -4.00 | boX, mds, speed4k, tN1R, znxxX                |
|            2 |     3500 | 2022-08-27 | Illuminar          | L   | 0.073      | -            | -                | -                | -         |    -0.71 | EXUS, mASKED, morelz, reatz, TOAO             |
|            1 |     3524 | 2022-08-27 | EC Brugge          | W   | 0.072      | -            | -                | -                | -         |     0.92 | boX, mds, T4RG3T, tN1R, znxxX                 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,422.39)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-04 |      0.733 | $500.00        | $366.67         |
| 2022-12-04 |      0.732 | $1,000.00      | $732.08         |
| 2022-10-24 |      0.460 | $2,000.00      | $920.55         |
| 2022-09-15 |      0.200 | $7,000.00      | $1,403.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
