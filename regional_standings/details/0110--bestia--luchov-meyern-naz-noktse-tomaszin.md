### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, meyern, naz, Noktse, tomaszin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  780.5<br />
<br />
Final Rank Value (780.5) = Starting Rank Value (809.5) + Head To Head Adjustments (-29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 809.5
- 400 + ( ( 0.215 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 809.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      236 | 2024-04-25 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -5.66 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |      238 | 2024-04-25 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -5.97 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |      503 | 2024-04-16 | O PLANO       | L   | 1.000      | -            | -                | -                | -         |   -26.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |      600 | 2024-04-11 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -15.15 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |      682 | 2024-04-09 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -16.51 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |      687 | 2024-04-09 | Galorys       | W   | 1.000      | 0.450        | 0.047 (0.021)    | 0.510 (0.230)    | 0 (0.000) |    14.92 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |      723 | 2024-04-08 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -8.46 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |      766 | 2024-04-07 | Sharks        | L   | 1.000      | -            | -                | -                | -         |   -11.22 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |      773 | 2024-04-06 | Fluxo         | W   | 1.000      | 0.143        | 0.148 (0.021)    | 0.569 (0.081)    | 0 (0.000) |    24.34 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |      812 | 2024-04-04 | adalYamigos   | L   | 0.988      | -            | -                | -                | -         |   -17.72 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |      816 | 2024-04-04 | adalYamigos   | W   | 0.988      | 0.450        | -                | 0.373 (0.166)    | 0 (0.000) |    13.23 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |      828 | 2024-04-04 | Imperial      | L   | 0.987      | -            | -                | -                | -         |    -0.43 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |      865 | 2024-04-03 | Fluxo         | L   | 0.980      | -            | -                | -                | -         |    -7.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |      901 | 2024-04-02 | Sharks        | W   | 0.975      | 0.143        | 0.060 (0.008)    | 0.453 (0.063)    | 0 (0.000) |    19.74 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |      906 | 2024-04-02 | Fluxo         | L   | 0.974      | -            | -                | -                | -         |    -7.12 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |      995 | 2024-03-27 | W7M           | L   | 0.935      | -            | -                | -                | -         |   -17.38 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     1000 | 2024-03-27 | W7M           | W   | 0.934      | 0.450        | 0.009 (0.004)    | 0.476 (0.200)    | 0 (0.000) |    11.93 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     1310 | 2024-03-12 | RED Canids    | L   | 0.833      | -            | -                | -                | -         |    -7.88 | deco, luchov, meyern, Noktse, tomaszin |
|           31 |     1320 | 2024-03-11 | FURIA Academy | W   | 0.828      | 0.435        | -                | 0.103 (0.037)    | 0 (0.000) |     4.21 | deco, luchov, meyern, Noktse, tomaszin |
|           30 |     1343 | 2024-03-10 | adalYamigos   | L   | 0.822      | -            | -                | -                | -         |   -14.76 | deco, luchov, meyern, Noktse, tomaszin |
|           29 |     1391 | 2024-03-08 | FURIA Academy | W   | 0.808      | -            | -                | -                | 0 (0.000) |     3.84 | deco, luchov, meyern, Noktse, tomaszin |
|           28 |     1556 | 2024-03-02 | Wildcard      | L   | 0.767      | -            | -                | -                | -         |   -10.35 | deco, luchov, meyern, Noktse, tomaszin |
|           27 |     1573 | 2024-03-01 | Liquid        | L   | 0.761      | -            | -                | -                | -         |    -1.31 | deco, luchov, meyern, Noktse, tomaszin |
|           26 |     1697 | 2024-02-24 | Imperial      | L   | 0.720      | -            | -                | -                | -         |    -0.30 | deco, luchov, meyern, Noktse, tomaszin |
|           25 |     1716 | 2024-02-23 | 9z            | L   | 0.714      | -            | -                | -                | -         |    -7.07 | deco, luchov, meyern, Noktse, tomaszin |
|           24 |     1724 | 2024-02-22 | Imperial      | W   | 0.708      | 0.143        | 0.656 (0.066)    | 0.965 (0.098)    | 0 (0.000) |    22.05 | deco, luchov, meyern, Noktse, tomaszin |
|           23 |     1733 | 2024-02-22 | 9z            | L   | 0.707      | -            | -                | -                | -         |    -6.75 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     1758 | 2024-02-21 | W7M           | W   | 0.700      | 0.435        | 0.009 (0.003)    | 0.476 (0.145)    | 0 (0.000) |    10.62 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     1833 | 2024-02-18 | FURIA Academy | W   | 0.680      | -            | -                | -                | 0 (0.000) |     3.46 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     1873 | 2024-02-16 | Case          | L   | 0.668      | -            | -                | -                | -         |    -9.78 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     1995 | 2024-02-12 | FURIA Academy | W   | 0.642      | -            | -                | -                | -         |     3.12 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     2130 | 2024-02-02 | Imperial      | L   | 0.575      | -            | -                | -                | -         |    -0.17 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     2132 | 2024-02-02 | ODDIK         | W   | 0.575      | 0.143        | 0.015 (0.001)    | 0.547 (0.045)    | -         |    11.88 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     2136 | 2024-02-02 | Imperial      | L   | 0.574      | -            | -                | -                | -         |    -0.14 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     2320 | 2024-01-23 | Imperial      | L   | 0.508      | -            | -                | -                | -         |    -0.13 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     2338 | 2024-01-22 | AJF           | W   | 0.502      | -            | -                | -                | -         |     3.72 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     2373 | 2024-01-21 | W7M           | W   | 0.494      | 0.143        | 0.009 (0.001)    | -                | -         |     7.75 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     2406 | 2024-01-20 | MIBR          | L   | 0.488      | -            | -                | -                | -         |    -0.16 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     2456 | 2024-01-19 | Imperial      | W   | 0.481      | 0.143        | 0.656 (0.045)    | 0.965 (0.066)    | -         |    15.06 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     2460 | 2024-01-19 | Flamengo      | W   | 0.481      | -            | -                | -                | -         |     3.10 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     2666 | 2024-01-15 | TIMACETA      | L   | 0.455      | -            | -                | -                | -         |   -12.01 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     2696 | 2024-01-14 | Sharks        | L   | 0.448      | -            | -                | -                | -         |    -5.67 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     2701 | 2024-01-14 | W7M           | W   | 0.447      | -            | -                | -                | -         |     7.14 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     2724 | 2024-01-13 | Intense       | W   | 0.441      | -            | -                | -                | -         |     1.24 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3312 | 2023-11-29 | W7M           | W   | 0.141      | -            | -                | -                | -         |     2.26 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     3327 | 2023-11-28 | LOS           | W   | 0.135      | -            | -                | -                | -         |     0.38 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     3359 | 2023-11-25 | Fluxo         | L   | 0.115      | -            | -                | -                | -         |    -0.77 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     3379 | 2023-11-24 | 9z            | W   | 0.109      | 0.435        | 0.056 (0.003)    | -                | -         |     2.25 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     3400 | 2023-11-23 | Case          | W   | 0.101      | -            | -                | -                | -         |     1.19 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,088.41)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-25 |      0.727 | $5,000.00      | $3,636.40       |
| 2023-11-26 |      0.121 | $3,750.00      | $452.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
