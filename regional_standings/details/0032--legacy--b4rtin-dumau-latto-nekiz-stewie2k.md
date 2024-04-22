### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, Stewie2K<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1100.6<br />
<br />
Final Rank Value (1100.6) = Starting Rank Value (1070.7) + Head To Head Adjustments (29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.487[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1070.7
- 400 + ( ( 0.347 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1070.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       75 | 2024-04-19 | M80           | L   | 1.000      | -            | -                | -                | -         |   -22.73 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           46 |      115 | 2024-04-18 | Elevate       | W   | 1.000      | 0.143        | 0.038 (0.005)    | 0.431 (0.062)    | 0 (0.000) |     7.00 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           45 |      122 | 2024-04-18 | Liquid        | L   | 1.000      | -            | -                | -                | -         |    -9.49 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           44 |      832 | 2024-03-20 | TheMongolz    | L   | 0.978      | -            | -                | -                | -         |    -7.28 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           43 |      847 | 2024-03-19 | Apeks         | W   | 0.972      | 0.143        | 0.193 (0.027)    | 0.687 (0.095)    | 1 (0.972) |    20.28 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           42 |      858 | 2024-03-18 | GamerLegion   | L   | 0.965      | -            | -                | -                | -         |    -7.68 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           41 |      871 | 2024-03-17 | Cloud9        | L   | 0.960      | -            | -                | -                | -         |    -1.70 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           40 |      881 | 2024-03-17 | FURIA         | W   | 0.959      | 0.143        | 0.316 (0.043)    | 0.522 (0.072)    | 1 (0.959) |    25.02 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           39 |     1214 | 2024-03-04 | M80           | W   | 0.874      | 0.143        | 0.087 (0.011)    | 0.454 (0.057)    | 1 (0.874) |    10.65 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           38 |     1227 | 2024-03-03 | MIBR          | W   | 0.868      | 0.143        | 0.305 (0.038)    | 0.853 (0.106)    | 1 (0.868) |    22.67 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           37 |     1257 | 2024-03-02 | Nouns         | W   | 0.861      | 0.143        | -                | 0.632 (0.078)    | 1 (0.861) |     4.28 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           36 |     1279 | 2024-03-01 | paiN          | L   | 0.854      | -            | -                | -                | -         |    -1.03 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           35 |     2047 | 2024-01-22 | Sharks        | L   | 0.595      | -            | -                | -                | -         |   -12.90 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           34 |     2109 | 2024-01-20 | RED Canids    | W   | 0.581      | 0.143        | 0.110 (0.009)    | 0.842 (0.070)    | 0 (0.000) |     7.94 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           33 |     2159 | 2024-01-19 | paiN          | W   | 0.575      | 0.143        | 0.698 (0.057)    | 0.854 (0.070)    | 0 (0.000) |    17.66 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           32 |     2165 | 2024-01-19 | 9z            | W   | 0.574      | 0.143        | 0.047 (0.004)    | 0.554 (0.045)    | 0 (0.000) |     6.63 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           31 |     2314 | 2024-01-16 | RED Canids    | L   | 0.555      | -            | -                | -                | -         |    -9.35 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           30 |     2325 | 2024-01-16 | W7M           | W   | 0.554      | -            | -                | -                | 0 (0.000) |     4.21 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           29 |     2327 | 2024-01-16 | Imperial      | W   | 0.554      | 0.143        | 0.569 (0.045)    | 1.000 (0.079)    | -         |    17.11 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           28 |     2366 | 2024-01-15 | Galorys       | W   | 0.548      | -            | -                | -                | -         |     5.04 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           27 |     2407 | 2024-01-14 | RED Canids    | L   | 0.541      | -            | -                | -                | -         |    -9.16 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           26 |     2426 | 2024-01-13 | inSanitY      | W   | 0.535      | -            | -                | -                | -         |     0.50 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           25 |     2556 | 2024-01-09 | Flamengo      | L   | 0.508      | -            | -                | -                | -         |   -14.88 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           24 |     2560 | 2024-01-09 | W7M           | W   | 0.508      | -            | -                | -                | -         |     4.00 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           23 |     2570 | 2024-01-09 | blockkstar    | W   | 0.507      | -            | -                | -                | -         |     0.87 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           22 |     2574 | 2024-01-09 | adalYamigos   | W   | 0.507      | -            | -                | -                | -         |     2.01 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           21 |     2970 | 2023-12-02 | RED Canids    | L   | 0.253      | -            | -                | -                | -         |    -4.52 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           20 |     2994 | 2023-12-01 | TSM           | L   | 0.245      | -            | -                | -                | -         |    -6.72 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           19 |     3003 | 2023-11-30 | 9 Pandas      | L   | 0.240      | -            | -                | -                | -         |    -3.32 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           18 |     3040 | 2023-11-27 | Zero Tenacity | L   | 0.218      | -            | -                | -                | -         |    -5.63 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           17 |     3051 | 2023-11-26 | SAW           | L   | 0.213      | -            | -                | -                | -         |    -1.74 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           16 |     3258 | 2023-11-16 | 9 Pandas      | L   | 0.147      | -            | -                | -                | -         |    -2.18 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           15 |     3277 | 2023-11-16 | SINNERS       | L   | 0.145      | -            | -                | -                | -         |    -2.24 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           14 |     3328 | 2023-11-14 | Endpoint      | W   | 0.133      | -            | -                | -                | -         |     0.83 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           13 |     3350 | 2023-11-13 | 9 Pandas      | L   | 0.126      | -            | -                | -                | -         |    -1.92 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     3378 | 2023-11-12 | Endpoint      | L   | 0.119      | -            | -                | -                | -         |    -3.03 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     3382 | 2023-11-12 | Guild Eagles  | L   | 0.118      | -            | -                | -                | -         |    -2.15 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     3533 | 2023-11-04 | paiN          | W   | 0.067      | 0.371        | 0.698 (0.017)    | -                | -         |     2.08 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     3538 | 2023-11-04 | Sharks        | W   | 0.066      | -            | -                | -                | -         |     0.59 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3576 | 2023-11-02 | BESTIA        | W   | 0.054      | -            | -                | -                | -         |     0.36 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3623 | 2023-10-31 | paiN          | L   | 0.042      | -            | -                | -                | -         |    -0.02 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     3658 | 2023-10-30 | paiN          | L   | 0.034      | -            | -                | -                | -         |    -0.02 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     3663 | 2023-10-30 | MIBR Academy  | W   | 0.034      | -            | -                | -                | -         |     0.08 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     3697 | 2023-10-29 | paiN          | L   | 0.027      | -            | -                | -                | -         |    -0.01 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     3776 | 2023-10-27 | Solid         | W   | 0.014      | -            | -                | -                | -         |     0.14 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     3788 | 2023-10-27 | Flamengo      | L   | 0.013      | -            | -                | -                | -         |    -0.39 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     3816 | 2023-10-26 | O PLANO       | W   | 0.006      | -            | -                | -                | -         |     0.00 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,472.71)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2023-11-04 |      0.067 | $10,000.00     | $674.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
