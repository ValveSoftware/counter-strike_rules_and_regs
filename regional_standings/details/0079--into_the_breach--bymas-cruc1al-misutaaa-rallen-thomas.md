### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  849.0<br />
<br />
Final Rank Value (849.0) = Starting Rank Value (816.7) + Head To Head Adjustments (32.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.411[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 816.7
- 400 + ( ( 0.216 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 816.7


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
|           31 |     1617 | 2024-02-15 | 3DMAX             | L   | 0.753      | -            | -                | -                | -         |    -7.42 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           30 |     1658 | 2024-02-14 | BetBoom           | L   | 0.746      | -            | -                | -                | -         |    -2.90 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           29 |     1669 | 2024-02-14 | G2                | L   | 0.745      | -            | -                | -                | -         |    -0.09 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           28 |     1761 | 2024-02-07 | Preasy            | L   | 0.698      | -            | -                | -                | -         |    -5.87 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           27 |     1766 | 2024-02-06 | Metizport         | W   | 0.693      | 0.371        | 0.136 (0.035)    | 1.000 (0.257)    | 0 (0.000) |    13.85 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           26 |     1802 | 2024-02-04 | SINNERS           | W   | 0.678      | 0.371        | 0.043 (0.011)    | 0.779 (0.196)    | 0 (0.000) |    16.01 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           25 |     1863 | 2024-02-02 | Gaimin Gladiators | L   | 0.665      | -            | -                | -                | -         |    -1.56 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           24 |     1891 | 2024-02-01 | BLEED             | W   | 0.658      | 0.371        | 0.221 (0.054)    | 0.933 (0.228)    | 0 (0.000) |    16.35 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           23 |     1937 | 2024-01-29 | BIG Academy       | W   | 0.638      | -            | -                | -                | 0 (0.000) |     1.74 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           22 |     2001 | 2024-01-25 | BLEED             | L   | 0.611      | -            | -                | -                | -         |    -3.73 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           21 |     2275 | 2024-01-17 | Guild Eagles      | L   | 0.561      | -            | -                | -                | -         |    -4.12 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           20 |     2279 | 2024-01-17 | Gucci Academy     | W   | 0.561      | 0.143        | 0.013 (0.001)    | -                | 0 (0.000) |     7.13 | Bymas, CRUC1AL, misutaaa, rallen, Thomas  |
|           19 |     2933 | 2023-12-04 | ex-Anonymo        | L   | 0.267      | -            | -                | -                | -         |    -4.92 | Bymas, CRUC1AL, misutaaa, rallen, tomiko  |
|           18 |     2944 | 2023-12-03 | 9 Pandas          | L   | 0.261      | -            | -                | -                | -         |    -1.44 | bevve, Bymas, CRUC1AL, misutaaa, tomiko   |
|           17 |     3008 | 2023-11-30 | RED Canids        | W   | 0.239      | 0.589        | 0.110 (0.015)    | 0.842 (0.118)    | 0 (0.000) |     5.51 | Bymas, CRUC1AL, misutaaa, rallen, tomiko  |
|           16 |     3014 | 2023-11-30 | The Witchers      | L   | 0.238      | -            | -                | -                | -         |    -4.37 | Bymas, CRUC1AL, misutaaa, rallen, tomiko  |
|           15 |     3059 | 2023-11-26 | Endpoint          | L   | 0.211      | -            | -                | -                | -         |    -3.40 | Bymas, CRUC1AL, maxster, misutaaa, rallen |
|           14 |     3079 | 2023-11-25 | BetBoom           | L   | 0.205      | -            | -                | -                | -         |    -0.58 | Bymas, CRUC1AL, maxster, misutaaa, rallen |
|           13 |     3171 | 2023-11-19 | B8                | W   | 0.166      | -            | -                | -                | 0 (0.000) |     1.45 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|           12 |     3187 | 2023-11-18 | BIG               | L   | 0.161      | -            | -                | -                | -         |    -0.52 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|           11 |     3196 | 2023-11-18 | Sprout            | W   | 0.160      | 0.435        | 0.010 (0.001)    | 0.221 (0.015)    | 0 (0.000) |     1.87 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|           10 |     3202 | 2023-11-18 | ex-Anonymo        | W   | 0.159      | 0.589        | 0.027 (0.003)    | 0.276 (0.026)    | 0 (0.000) |     2.07 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            9 |     3210 | 2023-11-18 | Gaimin Gladiators | W   | 0.158      | 0.435        | 0.156 (0.011)    | 1.000 (0.069)    | 0 (0.000) |     4.70 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            8 |     3224 | 2023-11-17 | Space             | W   | 0.153      | 0.435        | -                | 0.190 (0.013)    | -         |     1.80 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            7 |     3238 | 2023-11-17 | ALTERNATE aTTaX   | W   | 0.151      | 0.589        | 0.026 (0.002)    | 0.327 (0.029)    | -         |     2.29 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            6 |     3259 | 2023-11-16 | 00NATION          | W   | 0.146      | -            | -                | -                | -         |     1.42 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            5 |     3273 | 2023-11-16 | Project G         | W   | 0.145      | -            | -                | -                | -         |     0.77 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            4 |     3306 | 2023-11-15 | INGLORIOUS        | L   | 0.140      | -            | -                | -                | -         |    -3.56 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            3 |     3335 | 2023-11-14 | MOUZ NXT          | W   | 0.132      | 0.589        | 0.054 (0.004)    | 0.970 (0.075)    | -         |     2.63 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            2 |     3369 | 2023-11-12 | 3DMAX             | L   | 0.120      | -            | -                | -                | -         |    -0.88 | bodyy, Bymas, CRUC1AL, misutaaa, rallen   |
|            1 |     3477 | 2023-11-07 | B8                | L   | 0.087      | -            | -                | -                | -         |    -1.97 | Bymas, CRUC1AL, misutaaa, Qikert, rallen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,066.71)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-09 |      0.712 | $1,000.00      | $711.76         |
| 2023-11-26 |      0.212 | $1,600.00      | $339.41         |
| 2023-11-19 |      0.167 | $15,000.00     | $2,504.21       |
| 2023-11-18 |      0.160 | $22,000.00     | $3,511.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
