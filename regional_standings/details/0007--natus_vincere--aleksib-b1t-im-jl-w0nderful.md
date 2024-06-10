### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1829.2<br />
<br />
Final Rank Value (1829.2) = Starting Rank Value (1859.2) + Head To Head Adjustments (-30.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.728[<sup>2</sup>](#table1)
- Opponent Network: 0.404[<sup>2</sup>](#table1)
- LAN Wins: 0.795[<sup>2</sup>](#table1)

The average of these factors is 0.732<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1859.2
- 400 + ( ( 0.732 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1859.2


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
|           32 |      510 | 2024-05-29 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -22.26 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      531 | 2024-05-28 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -12.93 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      549 | 2024-05-27 | BIG               | W   | 1.000      | 0.624        | 0.228 (0.142)    | 0.459 (0.286)    | 1 (1.000) |     2.29 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |     1115 | 2024-05-08 | FaZe              | L   | 0.980      | -            | -                | -                | -         |   -10.78 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |     1165 | 2024-05-05 | Complexity        | L   | 0.960      | -            | -                | -                | -         |   -23.68 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |     1237 | 2024-05-02 | BIG               | W   | 0.939      | 0.889        | 0.228 (0.190)    | 0.459 (0.383)    | 1 (0.939) |     1.72 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1264 | 2024-05-01 | FlyQuest          | W   | 0.932      | 0.889        | -                | 0.556 (0.461)    | 1 (0.932) |     1.89 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     2092 | 2024-03-31 | FaZe              | W   | 0.727      | 1.000        | 1.000 (0.727)    | 0.588 (0.427)    | 1 (0.727) |    14.12 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     2098 | 2024-03-30 | G2                | W   | 0.721      | 1.000        | 0.746 (0.538)    | 0.580 (0.418)    | 1 (0.721) |    12.45 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     2108 | 2024-03-29 | Eternal Fire      | W   | 0.713      | 1.000        | 1.000 (0.713)    | 0.560 (0.399)    | 1 (0.713) |    11.12 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     2201 | 2024-03-24 | paiN              | W   | 0.680      | 1.000        | 0.437 (0.297)    | 0.877 (0.597)    | 1 (0.680) |     4.09 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     2209 | 2024-03-23 | Cloud9            | L   | 0.674      | -            | -                | -                | -         |   -19.48 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2225 | 2024-03-22 | Spirit            | L   | 0.667      | -            | -                | -                | -         |    -9.30 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2243 | 2024-03-21 | G2                | W   | 0.660      | 1.000        | 0.746 (0.493)    | 0.580 (0.383)    | 1 (0.660) |    11.70 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2260 | 2024-03-21 | The MongolZ       | W   | 0.658      | 1.000        | 0.978 (0.644)    | 0.738 (0.485)    | 1 (0.658) |    10.81 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     3032 | 2024-02-16 | BetBoom           | W   | 0.433      | -            | -                | -                | 1 (0.433) |     3.20 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     3067 | 2024-02-15 | Virtus.pro        | L   | 0.426      | -            | -                | -                | -         |    -9.58 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     3097 | 2024-02-14 | Enterprise        | W   | 0.420      | -            | -                | -                | -         |     0.10 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     3114 | 2024-02-14 | KOI               | W   | 0.418      | -            | -                | -                | -         |     0.12 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     3211 | 2024-02-06 | Falcons           | L   | 0.366      | -            | -                | -                | -         |   -10.55 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3219 | 2024-02-05 | Eternal Fire      | W   | 0.361      | 1.000        | 1.000 (0.361)    | 0.560 (0.202)    | -         |     5.17 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3236 | 2024-02-04 | Apeks             | W   | 0.353      | -            | -                | -                | -         |     0.19 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3262 | 2024-02-03 | Spirit            | L   | 0.347      | -            | -                | -                | -         |    -5.35 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3405 | 2024-01-27 | G2                | W   | 0.299      | 0.581        | 0.746 (0.130)    | -                | -         |     5.30 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3482 | 2024-01-23 | G2                | W   | 0.272      | -            | -                | -                | -         |     4.94 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3508 | 2024-01-22 | Complexity        | W   | 0.265      | -            | -                | -                | -         |     1.93 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3624 | 2024-01-19 | Virtus.pro        | W   | 0.247      | -            | -                | -                | -         |     2.34 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3680 | 2024-01-18 | 9 Pandas          | W   | 0.240      | -            | -                | -                | -         |     0.14 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3696 | 2024-01-18 | Gaimin Gladiators | W   | 0.239      | -            | -                | -                | -         |     0.21 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     4166 | 2023-12-16 | Vitality          | L   | 0.019      | -            | -                | -                | -         |    -0.23 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4194 | 2023-12-15 | G2                | W   | 0.012      | -            | -                | -                | -         |     0.22 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4199 | 2023-12-14 | ENCE              | W   | 0.004      | -            | -                | -                | -         |     0.00 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($410,660.02)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-03-31 |      0.727 | $500,000.00    | $363,483.91     |
| 2024-02-11 |      0.400 | $24,000.00     | $9,597.00       |
| 2024-01-28 |      0.307 | $22,500.00     | $6,899.54       |
| 2023-12-17 |      0.026 | $85,000.00     | $2,179.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
