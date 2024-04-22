### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, meyern, naz, Noktse, tomaszin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [98](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  810.6<br />
<br />
Final Rank Value (810.6) = Starting Rank Value (831.0) + Head To Head Adjustments (-20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 831.0
- 400 + ( ( 0.223 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 831.0


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
|           61 |      207 | 2024-04-16 | O PLANO           | L   | 1.000      | -            | -                | -                | -         |   -26.52 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |      304 | 2024-04-11 | Galorys           | L   | 1.000      | -            | -                | -                | -         |   -15.57 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |      386 | 2024-04-09 | Galorys           | L   | 1.000      | -            | -                | -                | -         |   -16.88 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |      391 | 2024-04-09 | Galorys           | W   | 1.000      | 0.450        | 0.042 (0.019)    | 0.557 (0.251)    | 0 (0.000) |    14.52 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |      427 | 2024-04-08 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -8.55 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |      470 | 2024-04-07 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -11.71 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |      477 | 2024-04-06 | Fluxo             | W   | 1.000      | 0.143        | 0.147 (0.021)    | 0.633 (0.090)    | 0 (0.000) |    23.48 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |      516 | 2024-04-04 | adalYamigos       | L   | 1.000      | -            | -                | -                | -         |   -17.21 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |      520 | 2024-04-04 | adalYamigos       | W   | 1.000      | 0.450        | -                | 0.423 (0.191)    | 0 (0.000) |    14.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |      532 | 2024-04-04 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -0.56 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |      569 | 2024-04-03 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -8.11 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |      605 | 2024-04-02 | Sharks            | W   | 1.000      | 0.143        | 0.040 (0.006)    | 0.532 (0.076)    | 0 (0.000) |    19.78 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |      610 | 2024-04-02 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -7.82 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |      699 | 2024-03-27 | W7M               | L   | 1.000      | -            | -                | -                | -         |   -18.89 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |      704 | 2024-03-27 | W7M               | W   | 1.000      | 0.450        | 0.010 (0.005)    | 0.490 (0.220)    | 0 (0.000) |    12.34 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1014 | 2024-03-12 | RED Canids        | L   | 0.927      | -            | -                | -                | -         |    -8.68 | deco, luchov, meyern, Noktse, tomaszin |
|           45 |     1024 | 2024-03-11 | FURIA Academy     | W   | 0.921      | -            | -                | -                | 0 (0.000) |     4.31 | deco, luchov, meyern, Noktse, tomaszin |
|           44 |     1047 | 2024-03-10 | adalYamigos       | L   | 0.915      | -            | -                | -                | -         |   -15.70 | deco, luchov, meyern, Noktse, tomaszin |
|           43 |     1095 | 2024-03-08 | FURIA Academy     | W   | 0.901      | -            | -                | -                | 0 (0.000) |     3.90 | deco, luchov, meyern, Noktse, tomaszin |
|           42 |     1260 | 2024-03-02 | Wildcard          | L   | 0.860      | -            | -                | -                | -         |   -13.43 | deco, luchov, meyern, Noktse, tomaszin |
|           41 |     1277 | 2024-03-01 | Liquid            | L   | 0.854      | -            | -                | -                | -         |    -3.43 | deco, luchov, meyern, Noktse, tomaszin |
|           40 |     1401 | 2024-02-24 | Imperial          | L   | 0.813      | -            | -                | -                | -         |    -0.41 | deco, luchov, meyern, Noktse, tomaszin |
|           39 |     1420 | 2024-02-23 | 9z                | L   | 0.807      | -            | -                | -                | -         |    -8.88 | deco, luchov, meyern, Noktse, tomaszin |
|           38 |     1428 | 2024-02-22 | Imperial          | W   | 0.802      | 0.143        | 0.569 (0.065)    | 1.000 (0.115)    | 0 (0.000) |    24.89 | deco, luchov, meyern, Noktse, tomaszin |
|           37 |     1437 | 2024-02-22 | 9z                | L   | 0.801      | -            | -                | -                | -         |    -8.49 | deco, luchov, meyern, Noktse, tomaszin |
|           36 |     1462 | 2024-02-21 | W7M               | W   | 0.793      | 0.435        | -                | 0.490 (0.169)    | 0 (0.000) |    11.76 | deco, luchov, meyern, Noktse, tomaszin |
|           35 |     1537 | 2024-02-18 | FURIA Academy     | W   | 0.773      | -            | -                | -                | 0 (0.000) |     3.51 | deco, luchov, meyern, Noktse, tomaszin |
|           34 |     1577 | 2024-02-16 | Case              | L   | 0.761      | -            | -                | -                | -         |   -11.40 | deco, luchov, meyern, Noktse, tomaszin |
|           33 |     1699 | 2024-02-12 | FURIA Academy     | W   | 0.735      | -            | -                | -                | -         |     3.15 | deco, luchov, meyern, Noktse, tomaszin |
|           32 |     1834 | 2024-02-02 | Imperial          | L   | 0.669      | -            | -                | -                | -         |    -0.22 | deco, luchov, meyern, Noktse, tomaszin |
|           31 |     1836 | 2024-02-02 | ODDIK             | W   | 0.668      | 0.143        | -                | 0.552 (0.053)    | -         |    12.01 | deco, luchov, meyern, Noktse, tomaszin |
|           30 |     1840 | 2024-02-02 | Imperial          | L   | 0.668      | -            | -                | -                | -         |    -0.18 | deco, luchov, meyern, Noktse, tomaszin |
|           29 |     2024 | 2024-01-23 | Imperial          | L   | 0.601      | -            | -                | -                | -         |    -0.17 | deco, luchov, meyern, Noktse, tomaszin |
|           28 |     2042 | 2024-01-22 | AJF               | W   | 0.595      | -            | -                | -                | -         |     4.09 | deco, luchov, meyern, Noktse, tomaszin |
|           27 |     2077 | 2024-01-21 | W7M               | W   | 0.588      | -            | -                | -                | -         |     9.10 | deco, luchov, meyern, Noktse, tomaszin |
|           26 |     2110 | 2024-01-20 | MIBR              | L   | 0.581      | -            | -                | -                | -         |    -0.85 | deco, luchov, meyern, Noktse, tomaszin |
|           25 |     2160 | 2024-01-19 | Imperial          | W   | 0.575      | 0.143        | 0.569 (0.047)    | 1.000 (0.082)    | -         |    17.97 | deco, luchov, meyern, Noktse, tomaszin |
|           24 |     2164 | 2024-01-19 | Flamengo          | W   | 0.574      | -            | -                | -                | -         |     3.76 | deco, luchov, meyern, Noktse, tomaszin |
|           23 |     2370 | 2024-01-15 | TIMACETA          | L   | 0.548      | -            | -                | -                | -         |   -14.75 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     2400 | 2024-01-14 | Sharks            | L   | 0.541      | -            | -                | -                | -         |    -7.09 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     2405 | 2024-01-14 | W7M               | W   | 0.541      | -            | -                | -                | -         |     8.49 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     2428 | 2024-01-13 | Intense           | W   | 0.535      | -            | -                | -                | -         |     1.29 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     3016 | 2023-11-29 | W7M               | W   | 0.234      | -            | -                | -                | -         |     3.69 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     3031 | 2023-11-28 | LOS               | W   | 0.228      | -            | -                | -                | -         |     0.57 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     3063 | 2023-11-25 | Fluxo             | L   | 0.208      | -            | -                | -                | -         |    -1.53 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     3083 | 2023-11-24 | 9z                | W   | 0.202      | 0.435        | 0.047 (0.004)    | -                | -         |     3.82 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3104 | 2023-11-23 | Case              | W   | 0.194      | 0.435        | -                | 0.767 (0.065)    | -         |     3.39 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3530 | 2023-11-04 | RED Canids        | L   | 0.068      | -            | -                | -                | -         |    -0.59 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3532 | 2023-11-04 | Sharks            | W   | 0.068      | -            | -                | -                | -         |     1.27 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3576 | 2023-11-02 | Legacy            | L   | 0.054      | -            | -                | -                | -         |    -0.36 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3597 | 2023-11-01 | RED Canids        | L   | 0.048      | -            | -                | -                | -         |    -0.41 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3620 | 2023-10-31 | Imperial          | W   | 0.042      | 0.417        | 0.569 (0.010)    | -                | -         |     1.31 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3632 | 2023-10-31 | ODDIK             | L   | 0.040      | -            | -                | -                | -         |    -0.49 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3657 | 2023-10-30 | Sharks Youngsters | W   | 0.034      | -            | -                | -                | -         |     0.09 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3687 | 2023-10-29 | paiN              | W   | 0.028      | 0.417        | 0.698 (0.008)    | -                | -         |     0.89 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3703 | 2023-10-29 | Imperial          | W   | 0.026      | 0.371        | 0.569 (0.006)    | -                | -         |     0.83 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3742 | 2023-10-28 | Flamengo          | W   | 0.020      | -            | -                | -                | -         |     0.10 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     3775 | 2023-10-27 | Corinthians       | W   | 0.015      | -            | -                | -                | -         |     0.14 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     3805 | 2023-10-26 | Solid             | L   | 0.008      | -            | -                | -                | -         |    -0.08 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     3813 | 2023-10-26 | Sharks            | L   | 0.006      | -            | -                | -                | -         |    -0.08 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     3839 | 2023-10-25 | Filhos de D10S    | W   | 0.001      | -            | -                | -                | -         |     0.00 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,520.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-25 |      0.821 | $5,000.00      | $4,102.94       |
| 2023-11-26 |      0.214 | $3,750.00      | $801.90         |
| 2023-11-04 |      0.068 | $8,000.00      | $547.74         |
| 2023-11-04 |      0.067 | $1,000.00      | $67.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
