### Roster Details<br />
Team Name: GODSENT<br />
Roster: bobeksde, eraa, Golden, Plopski, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  631.4<br />
<br />
Final Rank Value (631.4) = Starting Rank Value (658.6) + Head To Head Adjustments (-27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.6
- 400 + ( ( 0.133 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 658.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     1964 | 2024-03-12 | MOUZ NXT          | L   | 0.679      | -            | -                | -                | -         |    -2.04 | bobeksde, eraa, Golden, Plopski, RuStY |
|           26 |     2001 | 2024-03-10 | FAVBET            | W   | 0.666      | 0.372        | 0.004 (0.001)    | 0.257 (0.064)    | 0 (0.000) |    13.04 | bobeksde, eraa, Golden, Plopski, RuStY |
|           25 |     2025 | 2024-03-09 | BLUDS             | L   | 0.659      | -            | -                | -                | -         |    -9.76 | bobeksde, eraa, Golden, Plopski, RuStY |
|           24 |     2032 | 2024-03-09 | Young Ninjas      | L   | 0.658      | -            | -                | -                | -         |    -4.38 | bobeksde, eraa, Golden, Plopski, RuStY |
|           23 |     2073 | 2024-03-07 | Passion UA        | L   | 0.646      | -            | -                | -                | -         |    -2.45 | bobeksde, eraa, Golden, Plopski, RuStY |
|           22 |     2108 | 2024-03-06 | Zero Tenacity     | L   | 0.639      | -            | -                | -                | -         |    -2.16 | bobeksde, eraa, Golden, Plopski, RuStY |
|           21 |     2121 | 2024-03-06 | Sampi             | L   | 0.637      | -            | -                | -                | -         |    -3.82 | bobeksde, eraa, Golden, Plopski, RuStY |
|           20 |     2151 | 2024-03-05 | Endpoint          | L   | 0.632      | -            | -                | -                | -         |    -4.57 | bobeksde, eraa, Golden, Plopski, RuStY |
|           19 |     2168 | 2024-03-04 | BLEED             | L   | 0.624      | -            | -                | -                | -         |    -0.88 | bobeksde, eraa, Golden, Plopski, RuStY |
|           18 |     2191 | 2024-03-03 | fnatic            | L   | 0.619      | -            | -                | -                | -         |    -1.49 | bobeksde, eraa, Golden, Plopski, RuStY |
|           17 |     2219 | 2024-03-02 | Permitta          | L   | 0.611      | -            | -                | -                | -         |    -3.92 | bobeksde, eraa, Golden, Plopski, RuStY |
|           16 |     2249 | 2024-02-29 | BLEED             | L   | 0.597      | -            | -                | -                | -         |    -0.88 | bobeksde, eraa, Golden, Plopski, RuStY |
|           15 |     2278 | 2024-02-27 | Lotus             | L   | 0.585      | -            | -                | -                | -         |   -13.06 | bobeksde, eraa, Golden, Plopski, RuStY |
|           14 |     2284 | 2024-02-27 | ECF               | L   | 0.585      | -            | -                | -                | -         |    -6.46 | bobeksde, eraa, Golden, Plopski, RuStY |
|           13 |     2698 | 2024-02-08 | Sangal            | W   | 0.458      | 0.143        | 0.166 (0.011)    | 0.911 (0.060)    | 0 (0.000) |    12.93 | bobeksde, eraa, Golden, Plopski, RuStY |
|           12 |     2859 | 2024-01-31 | TSM               | L   | 0.404      | -            | -                | -                | -         |    -5.07 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|           11 |     2879 | 2024-01-30 | 500               | W   | 0.397      | 0.143        | 0.002 (0.000)    | 0.436 (0.025)    | 0 (0.000) |     7.76 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|           10 |     2908 | 2024-01-27 | SINNERS           | L   | 0.377      | -            | -                | -                | -         |    -1.67 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            9 |     2984 | 2024-01-23 | TSM               | W   | 0.350      | 0.371        | 0.008 (0.001)    | 0.191 (0.025)    | 0 (0.000) |     6.72 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            8 |     3485 | 2024-01-10 | IKLA              | L   | 0.267      | -            | -                | -                | -         |    -5.39 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            7 |     3727 | 2023-12-11 | ex-Preasy         | L   | 0.064      | -            | -                | -                | -         |    -0.40 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            6 |     3740 | 2023-12-10 | ALTERNATE aTTaX   | L   | 0.058      | -            | -                | -                | -         |    -0.29 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            5 |     3790 | 2023-12-08 | ex-Preasy         | W   | 0.043      | 0.371        | 0.051 (0.001)    | 0.470 (0.008)    | 0 (0.000) |     1.10 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            4 |     3863 | 2023-12-05 | ex-Anonymo        | L   | 0.026      | -            | -                | -                | -         |    -0.41 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            3 |     3872 | 2023-12-05 | TSM               | W   | 0.024      | 0.371        | 0.001 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.35 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            2 |     3892 | 2023-12-03 | EYEBALLERS        | L   | 0.013      | -            | -                | -                | -         |    -0.09 | bobeksde, eraa, Golden, Plopski, Ro1f  |
|            1 |     3914 | 2023-12-02 | Ninjas in Pyjamas | W   | 0.006      | 0.427        | 0.011 (0.000)    | 0.027 (0.000)    | 1 (0.006) |     0.12 | bobeksde, eraa, Golden, Plopski, Ro1f  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($362.90)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-12 |      0.072 | $3,000.00      | $216.94         |
| 2023-12-03 |      0.013 | $11,432.00     | $145.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
