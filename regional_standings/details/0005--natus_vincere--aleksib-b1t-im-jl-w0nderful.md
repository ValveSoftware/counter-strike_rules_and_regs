### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1816.4<br />
<br />
Final Rank Value (1816.4) = Starting Rank Value (1874.1) + Head To Head Adjustments (-57.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.697[<sup>2</sup>](#table1)
- Opponent Network: 0.456[<sup>2</sup>](#table1)
- LAN Wins: 0.885[<sup>2</sup>](#table1)

The average of these factors is 0.759<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1874.1
- 400 + ( ( 0.759 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1874.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       10 | 2024-05-29 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -24.46 | Aleksib, b1t, iM, jL, w0nderful |
|           32 |       31 | 2024-05-28 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -12.21 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |       49 | 2024-05-27 | BIG               | W   | 1.000      | 0.624        | 0.215 (0.134)    | 0.496 (0.310)    | 1 (1.000) |     1.72 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      615 | 2024-05-08 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -11.22 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      665 | 2024-05-05 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -26.63 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      737 | 2024-05-02 | BIG               | W   | 1.000      | 0.889        | 0.215 (0.192)    | 0.496 (0.441)    | 1 (1.000) |     1.33 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      764 | 2024-05-01 | FlyQuest          | W   | 1.000      | 0.889        | -                | 0.648 (0.576)    | 1 (1.000) |     2.03 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1592 | 2024-03-31 | FaZe              | W   | 0.806      | 1.000        | 1.000 (0.806)    | 0.688 (0.555)    | 1 (0.806) |    15.88 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1598 | 2024-03-30 | G2                | W   | 0.800      | 1.000        | 0.469 (0.376)    | 0.565 (0.452)    | 1 (0.800) |    10.45 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1608 | 2024-03-29 | Eternal Fire      | W   | 0.792      | 1.000        | 1.000 (0.792)    | 0.605 (0.480)    | 1 (0.792) |    11.93 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1701 | 2024-03-24 | paiN              | W   | 0.759      | 1.000        | 0.464 (0.352)    | 0.829 (0.630)    | 1 (0.759) |     4.39 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1709 | 2024-03-23 | Cloud9            | L   | 0.753      | -            | -                | -                | -         |   -21.25 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1725 | 2024-03-22 | Spirit            | L   | 0.746      | -            | -                | -                | -         |    -9.76 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     1743 | 2024-03-21 | G2                | W   | 0.740      | 1.000        | 0.469 (0.347)    | 0.565 (0.418)    | 1 (0.740) |     9.59 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     1760 | 2024-03-21 | TheMongolz        | W   | 0.737      | 1.000        | 0.176 (0.130)    | 0.583 (0.430)    | 1 (0.737) |     2.13 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2532 | 2024-02-16 | BetBoom           | W   | 0.512      | -            | -                | -                | 1 (0.512) |     1.07 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2567 | 2024-02-15 | Virtus.pro        | L   | 0.505      | -            | -                | -                | -         |   -11.79 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2597 | 2024-02-14 | Enterprise        | W   | 0.500      | -            | -                | -                | -         |     0.08 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2614 | 2024-02-14 | KOI               | W   | 0.497      | -            | -                | -                | -         |     0.10 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     2711 | 2024-02-06 | Falcons           | L   | 0.445      | -            | -                | -                | -         |   -12.69 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     2719 | 2024-02-05 | Eternal Fire      | W   | 0.440      | 1.000        | 1.000 (0.440)    | 0.605 (0.266)    | -         |     6.04 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     2736 | 2024-02-04 | Apeks             | W   | 0.433      | -            | -                | -                | -         |     0.28 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     2762 | 2024-02-03 | Spirit            | L   | 0.426      | -            | -                | -                | -         |    -6.49 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     2905 | 2024-01-27 | G2                | W   | 0.378      | 0.581        | 0.469 (0.103)    | -                | -         |     4.45 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     2982 | 2024-01-23 | G2                | W   | 0.351      | -            | -                | -                | -         |     4.25 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3008 | 2024-01-22 | Complexity        | W   | 0.345      | -            | -                | -                | -         |     1.56 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3124 | 2024-01-19 | Virtus.pro        | W   | 0.326      | -            | -                | -                | -         |     2.78 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3180 | 2024-01-18 | 9 Pandas          | W   | 0.319      | -            | -                | -                | -         |     0.16 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3196 | 2024-01-18 | Gaimin Gladiators | W   | 0.318      | -            | -                | -                | -         |     0.25 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3666 | 2023-12-16 | Vitality          | L   | 0.098      | -            | -                | -                | -         |    -1.60 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     3694 | 2023-12-15 | G2                | W   | 0.091      | -            | -                | -                | -         |     1.13 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     3699 | 2023-12-14 | ENCE              | W   | 0.083      | -            | -                | -                | -         |     0.00 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     3709 | 2023-12-13 | Vitality          | L   | 0.077      | -            | -                | -                | -         |    -1.25 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($460,657.32)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-03-31 |      0.806 | $500,000.00    | $403,070.06     |
| 2024-02-11 |      0.479 | $24,000.00     | $11,497.14      |
| 2024-01-28 |      0.386 | $22,500.00     | $8,680.92       |
| 2023-12-17 |      0.105 | $85,000.00     | $8,909.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
