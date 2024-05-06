### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  827.6<br />
<br />
Final Rank Value (827.6) = Starting Rank Value (783.8) + Head To Head Adjustments (43.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.8
- 400 + ( ( 0.202 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 783.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1913 | 2024-02-15 | 3DMAX             | L   | 0.660      | -            | -                | -                | -         |    -3.04 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           29 |     1954 | 2024-02-14 | BetBoom           | L   | 0.653      | -            | -                | -                | -         |    -0.80 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           28 |     1965 | 2024-02-14 | G2                | L   | 0.651      | -            | -                | -                | -         |    -0.07 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           27 |     2057 | 2024-02-07 | ex-Preasy         | L   | 0.604      | -            | -                | -                | -         |    -4.67 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           26 |     2062 | 2024-02-06 | Metizport         | W   | 0.599      | 0.371        | 0.183 (0.041)    | 1.000 (0.222)    | 0 (0.000) |    13.61 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           25 |     2098 | 2024-02-04 | SINNERS           | W   | 0.585      | 0.371        | 0.033 (0.007)    | 0.749 (0.162)    | 0 (0.000) |    14.40 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           24 |     2159 | 2024-02-02 | Gaimin Gladiators | L   | 0.572      | -            | -                | -                | -         |    -0.98 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           23 |     2187 | 2024-02-01 | BLEED             | W   | 0.565      | 0.371        | 0.400 (0.084)    | 1.000 (0.209)    | 0 (0.000) |    15.55 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           22 |     2233 | 2024-01-29 | BIG Academy       | W   | 0.544      | 0.371        | 0.016 (0.003)    | 0.049 (0.010)    | 0 (0.000) |     6.38 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           21 |     2297 | 2024-01-25 | BLEED             | L   | 0.518      | -            | -                | -                | -         |    -1.82 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           20 |     2571 | 2024-01-17 | Guild Eagles      | L   | 0.468      | -            | -                | -                | -         |    -3.02 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           19 |     2575 | 2024-01-17 | Gucci Academy     | W   | 0.468      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |     6.18 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           18 |     3229 | 2023-12-04 | ex-Anonymo        | L   | 0.174      | -            | -                | -                | -         |    -3.18 | Bymas, CRUC1AL, misutaaa, rallen, tomiko  |
|           17 |     3240 | 2023-12-03 | 9 Pandas          | L   | 0.167      | -            | -                | -                | -         |    -0.72 | bevve, Bymas, CRUC1AL, misutaaa, tomiko   |
|           16 |     3304 | 2023-11-30 | RED Canids        | W   | 0.145      | 0.589        | 0.105 (0.009)    | 0.808 (0.069)    | 0 (0.000) |     3.38 | Bymas, CRUC1AL, misutaaa, rallen, tomiko  |
|           15 |     3310 | 2023-11-30 | The Witchers      | L   | 0.144      | -            | -                | -                | -         |    -2.58 | Bymas, CRUC1AL, misutaaa, rallen, tomiko  |
|           14 |     3355 | 2023-11-26 | Endpoint          | L   | 0.117      | -            | -                | -                | -         |    -1.31 | Bymas, CRUC1AL, maxster, misutaaa, rallen |
|           13 |     3375 | 2023-11-25 | BetBoom           | L   | 0.112      | -            | -                | -                | -         |    -0.08 | Bymas, CRUC1AL, maxster, misutaaa, rallen |
|           12 |     3467 | 2023-11-19 | B8                | W   | 0.073      | -            | -                | -                | 0 (0.000) |     0.40 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|           11 |     3483 | 2023-11-18 | BIG               | L   | 0.067      | -            | -                | -                | -         |    -0.07 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|           10 |     3492 | 2023-11-18 | Sprout            | W   | 0.066      | -            | -                | -                | 0 (0.000) |     0.81 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            9 |     3498 | 2023-11-18 | ex-Anonymo        | W   | 0.066      | 0.589        | 0.016 (0.001)    | 0.175 (0.007)    | 0 (0.000) |     0.87 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            8 |     3506 | 2023-11-18 | Gaimin Gladiators | W   | 0.064      | 0.435        | 0.189 (0.005)    | 0.990 (0.028)    | 0 (0.000) |     1.95 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            7 |     3520 | 2023-11-17 | Space             | W   | 0.060      | 0.435        | -                | 0.149 (0.004)    | -         |     0.84 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            6 |     3534 | 2023-11-17 | ALTERNATE aTTaX   | W   | 0.058      | 0.589        | 0.104 (0.004)    | 0.779 (0.027)    | -         |     1.41 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            5 |     3555 | 2023-11-16 | 00NATION          | W   | 0.053      | -            | -                | -                | -         |     0.28 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            4 |     3569 | 2023-11-16 | Project G         | W   | 0.052      | -            | -                | -                | -         |     0.24 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            3 |     3602 | 2023-11-15 | INGLORIOUS        | L   | 0.046      | -            | -                | -                | -         |    -1.12 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            2 |     3631 | 2023-11-14 | MOUZ NXT          | W   | 0.038      | 0.589        | 0.210 (0.005)    | 1.000 (0.023)    | -         |     1.00 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            1 |     3665 | 2023-11-12 | 3DMAX             | L   | 0.026      | -            | -                | -                | -         |    -0.07 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,371.79)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-09 |      0.618 | $1,000.00      | $618.46         |
| 2023-11-26 |      0.119 | $1,600.00      | $190.12         |
| 2023-11-19 |      0.074 | $15,000.00     | $1,104.61       |
| 2023-11-18 |      0.066 | $22,000.00     | $1,458.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
