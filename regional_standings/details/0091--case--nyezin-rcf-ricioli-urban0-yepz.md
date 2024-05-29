### Roster Details<br />
Team Name: Case<br />
Roster: nyezin, RCF, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  838.0<br />
<br />
Final Rank Value (838.0) = Starting Rank Value (867.8) + Head To Head Adjustments (-29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.8
- 400 + ( ( 0.241 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 867.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |       51 | 2024-05-27 | Hawks         | L   | 1.000      | -            | -                | -                | -         |   -26.64 | nyezin, RCF, RICIOLI, urban0, yepz |
|           75 |      146 | 2024-05-22 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |    -8.27 | nyezin, RCF, RICIOLI, urban0, yepz |
|           74 |      150 | 2024-05-22 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |    -8.87 | nyezin, RCF, RICIOLI, urban0, yepz |
|           73 |      189 | 2024-05-21 | Sharks        | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.530 (0.238)    | 0 (0.000) |    19.35 | nyezin, RCF, RICIOLI, urban0, yepz |
|           72 |      190 | 2024-05-21 | Sharks        | L   | 1.000      | -            | -                | -                | -         |   -11.84 | nyezin, RCF, RICIOLI, urban0, yepz |
|           71 |      199 | 2024-05-21 | ODDIK         | W   | 1.000      | 0.303        | -                | 0.638 (0.193)    | 0 (0.000) |    17.95 | nyezin, RCF, RICIOLI, urban0, yepz |
|           70 |      238 | 2024-05-20 | Galorys       | W   | 1.000      | 0.303        | -                | 0.577 (0.175)    | 0 (0.000) |    15.12 | nyezin, RCF, RICIOLI, urban0, yepz |
|           69 |      256 | 2024-05-19 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -12.68 | nyezin, RCF, RICIOLI, urban0, yepz |
|           68 |      284 | 2024-05-18 | Solid         | W   | 1.000      | 0.303        | 0.062 (0.019)    | 0.627 (0.190)    | 0 (0.000) |    16.34 | nyezin, RCF, RICIOLI, urban0, yepz |
|           67 |      321 | 2024-05-17 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -5.68 | nyezin, RCF, RICIOLI, urban0, yepz |
|           66 |      327 | 2024-05-17 | Hype          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.99 | nyezin, RCF, RICIOLI, urban0, yepz |
|           65 |      360 | 2024-05-16 | KRÜ           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.62 | nyezin, RCF, RICIOLI, urban0, yepz |
|           64 |      368 | 2024-05-16 | Yawara        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.39 | nyezin, RCF, RICIOLI, urban0, yepz |
|           63 |      406 | 2024-05-15 | Corinthians   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.54 | nyezin, RCF, RICIOLI, urban0, yepz |
|           62 |      408 | 2024-05-15 | Corinthians   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.94 | nyezin, RCF, RICIOLI, urban0, yepz |
|           61 |      415 | 2024-05-15 | Galorys       | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.577 (0.214)    | 0 (0.000) |    17.71 | nyezin, RCF, RICIOLI, urban0, yepz |
|           60 |      456 | 2024-05-14 | Galorys       | W   | 1.000      | 0.450        | 0.022 (0.010)    | 0.577 (0.260)    | -         |    19.29 | nyezin, RCF, RICIOLI, urban0, yepz |
|           59 |      460 | 2024-05-14 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -11.91 | nyezin, RCF, RICIOLI, urban0, yepz |
|           58 |      473 | 2024-05-14 | Hype          | L   | 1.000      | -            | -                | -                | -         |   -24.42 | nyezin, RCF, RICIOLI, urban0, yepz |
|           57 |      495 | 2024-05-13 | Intense       | W   | 1.000      | -            | -                | -                | -         |     3.28 | nyezin, RCF, RICIOLI, urban0, yepz |
|           56 |      523 | 2024-05-12 | Solid         | L   | 1.000      | -            | -                | -                | -         |   -13.07 | nyezin, RCF, RICIOLI, urban0, yepz |
|           55 |      556 | 2024-05-11 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -15.06 | nyezin, RCF, RICIOLI, urban0, yepz |
|           54 |      634 | 2024-05-07 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |   -25.80 | nyezin, RCF, RICIOLI, urban0, yepz |
|           53 |      662 | 2024-05-05 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -11.67 | nyezin, RCF, RICIOLI, urban0, yepz |
|           52 |      721 | 2024-05-02 | ODDIK         | W   | 1.000      | 0.450        | 0.017 (0.008)    | 0.638 (0.287)    | -         |    20.19 | nyezin, RCF, RICIOLI, urban0, yepz |
|           51 |      722 | 2024-05-02 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -10.95 | nyezin, RCF, RICIOLI, urban0, yepz |
|           50 |      746 | 2024-05-01 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -2.90 | nyezin, RCF, RICIOLI, urban0, yepz |
|           49 |      748 | 2024-05-01 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -2.99 | nyezin, RCF, RICIOLI, urban0, yepz |
|           48 |     1122 | 2024-04-17 | MIBR          | L   | 0.920      | -            | -                | -                | -         |    -0.53 | RCF, RICIOLI, snow, urban0, yepz   |
|           47 |     1159 | 2024-04-16 | Galorys       | W   | 0.914      | -            | -                | -                | -         |    15.23 | RCF, RICIOLI, snow, urban0, yepz   |
|           46 |     1210 | 2024-04-13 | MIBR          | L   | 0.892      | -            | -                | -                | -         |    -0.51 | pr1sma, RCF, RICIOLI, urban0, yepz |
|           45 |     1223 | 2024-04-12 | adalYamigos   | W   | 0.888      | -            | -                | -                | -         |    11.54 | RCF, RICIOLI, snow, urban0, yepz   |
|           44 |     1258 | 2024-04-11 | FURIA Academy | W   | 0.878      | -            | -                | -                | -         |     4.83 | RCF, RICIOLI, snow, urban0, yepz   |
|           43 |     1331 | 2024-04-09 | paiN          | L   | 0.867      | -            | -                | -                | -         |    -0.48 | RCF, RICIOLI, snow, urban0, yepz   |
|           42 |     1337 | 2024-04-09 | paiN          | L   | 0.867      | -            | -                | -                | -         |    -0.48 | RCF, RICIOLI, snow, urban0, yepz   |
|           41 |     1408 | 2024-04-07 | adalYamigos   | L   | 0.854      | -            | -                | -                | -         |   -15.90 | RCF, RICIOLI, snow, urban0, yepz   |
|           40 |     1470 | 2024-04-04 | RED Canids    | W   | 0.834      | 0.450        | 0.077 (0.029)    | 0.840 (0.315)    | -         |    20.65 | RCF, RICIOLI, snow, urban0, yepz   |
|           39 |     1473 | 2024-04-04 | RED Canids    | L   | 0.834      | -            | -                | -                | -         |    -5.35 | RCF, RICIOLI, snow, urban0, yepz   |
|           38 |     1509 | 2024-04-03 | Imperial      | L   | 0.827      | -            | -                | -                | -         |    -0.63 | RCF, RICIOLI, snow, urban0, yepz   |
|           37 |     1512 | 2024-04-03 | Imperial      | L   | 0.827      | -            | -                | -                | -         |    -0.63 | RCF, RICIOLI, snow, urban0, yepz   |
|           36 |     1643 | 2024-03-27 | MIBR          | L   | 0.781      | -            | -                | -                | -         |    -0.48 | RCF, RICIOLI, snow, urban0, yepz   |
|           35 |     1649 | 2024-03-27 | MIBR          | L   | 0.780      | -            | -                | -                | -         |    -0.49 | RCF, RICIOLI, snow, urban0, yepz   |
|           34 |     1819 | 2024-03-17 | ODDIK         | L   | 0.713      | -            | -                | -                | -         |    -7.89 | RCF, RICIOLI, snow, urban0, yepz   |
|           33 |     1843 | 2024-03-16 | MIBR Academy  | W   | 0.706      | -            | -                | -                | -         |     4.73 | RCF, RICIOLI, snow, urban0, yepz   |
|           32 |     1858 | 2024-03-15 | RED Canids    | L   | 0.700      | -            | -                | -                | -         |    -5.93 | RCF, RICIOLI, snow, urban0, yepz   |
|           31 |     1898 | 2024-03-14 | FURIA Academy | W   | 0.693      | -            | -                | -                | -         |     3.75 | RCF, RICIOLI, snow, urban0, yepz   |
|           30 |     1917 | 2024-03-13 | RED Canids    | L   | 0.687      | -            | -                | -                | -         |    -5.67 | RCF, RICIOLI, snow, urban0, yepz   |
|           29 |     1927 | 2024-03-13 | Yawara        | L   | 0.686      | -            | -                | -                | -         |   -18.88 | RCF, RICIOLI, snow, urban0, yepz   |
|           28 |     1931 | 2024-03-13 | ODDIK         | L   | 0.686      | -            | -                | -                | -         |    -8.51 | RCF, RICIOLI, snow, urban0, yepz   |
|           27 |     1967 | 2024-03-12 | LA RUGONETA   | W   | 0.678      | -            | -                | -                | -         |     3.73 | RCF, RICIOLI, snow, urban0, yepz   |
|           26 |     1996 | 2024-03-10 | FURIA Academy | W   | 0.667      | -            | -                | -                | -         |     3.00 | RCF, RICIOLI, snow, urban0, yepz   |
|           25 |     2016 | 2024-03-09 | Sharks        | W   | 0.660      | 0.435        | 0.031 (0.009)    | -                | -         |    13.47 | RCF, RICIOLI, snow, urban0, yepz   |
|           24 |     2066 | 2024-03-07 | Fluxo         | W   | 0.647      | 0.435        | 0.066 (0.018)    | 0.647 (0.182)    | -         |    14.92 | RCF, RICIOLI, snow, urban0, yepz   |
|           23 |     2128 | 2024-03-05 | adalYamigos   | L   | 0.634      | -            | -                | -                | -         |   -12.85 | RCF, RICIOLI, snow, urban0, yepz   |
|           22 |     2130 | 2024-03-05 | adalYamigos   | L   | 0.634      | -            | -                | -                | -         |   -13.51 | RCF, RICIOLI, snow, urban0, yepz   |
|           21 |     2158 | 2024-03-04 | Fluxo         | L   | 0.627      | -            | -                | -                | -         |    -5.63 | RCF, RICIOLI, snow, urban0, yepz   |
|           20 |     2159 | 2024-03-04 | Fluxo         | L   | 0.627      | -            | -                | -                | -         |    -5.89 | RCF, RICIOLI, snow, urban0, yepz   |
|           19 |     2335 | 2024-02-24 | ex-2GAME      | W   | 0.567      | -            | -                | -                | -         |     5.39 | RCF, RICIOLI, snow, urban0, yepz   |
|           18 |     2342 | 2024-02-24 | ex-2GAME      | L   | 0.567      | -            | -                | -                | -         |   -12.79 | RCF, RICIOLI, snow, urban0, yepz   |
|           17 |     2395 | 2024-02-21 | Solid         | W   | 0.548      | 0.450        | 0.062 (0.015)    | 0.627 (0.155)    | -         |     8.78 | RCF, RICIOLI, snow, urban0, yepz   |
|           16 |     2396 | 2024-02-21 | Solid         | L   | 0.547      | -            | -                | -                | -         |    -8.66 | RCF, RICIOLI, snow, urban0, yepz   |
|           15 |     2403 | 2024-02-21 | Sharks        | L   | 0.547      | -            | -                | -                | -         |    -7.33 | RCF, RICIOLI, snow, urban0, yepz   |
|           14 |     2432 | 2024-02-20 | 9z            | L   | 0.540      | -            | -                | -                | -         |    -1.96 | RCF, RICIOLI, snow, urban0, yepz   |
|           13 |     2435 | 2024-02-20 | W7M           | W   | 0.540      | -            | -                | -                | -         |     6.88 | RCF, RICIOLI, snow, urban0, yepz   |
|           12 |     2439 | 2024-02-20 | Sharks        | L   | 0.539      | -            | -                | -                | -         |    -7.22 | RCF, RICIOLI, snow, urban0, yepz   |
|           11 |     2479 | 2024-02-18 | Galorys       | L   | 0.527      | -            | -                | -                | -         |    -9.65 | RCF, RICIOLI, snow, urban0, yepz   |
|           10 |     2500 | 2024-02-17 | Solid         | W   | 0.521      | 0.303        | 0.062 (0.010)    | -                | -         |     7.80 | RCF, RICIOLI, snow, urban0, yepz   |
|            9 |     2524 | 2024-02-16 | BESTIA        | W   | 0.514      | -            | -                | -                | -         |    10.15 | RCF, RICIOLI, snow, urban0, yepz   |
|            8 |     2557 | 2024-02-15 | 9z            | L   | 0.507      | -            | -                | -                | -         |    -1.53 | RCF, RICIOLI, snow, urban0, yepz   |
|            7 |     2558 | 2024-02-15 | Sharks        | W   | 0.507      | -            | -                | -                | -         |     9.60 | RCF, RICIOLI, snow, urban0, yepz   |
|            6 |     2565 | 2024-02-15 | Flamengo      | W   | 0.505      | -            | -                | -                | -         |     1.85 | RCF, RICIOLI, snow, urban0, yepz   |
|            5 |     2586 | 2024-02-14 | O PLANO C     | W   | 0.501      | -            | -                | -                | -         |     1.03 | RCF, RICIOLI, snow, urban0, yepz   |
|            4 |     2629 | 2024-02-13 | W7M           | W   | 0.494      | -            | -                | -                | -         |     6.94 | RCF, RICIOLI, snow, urban0, yepz   |
|            3 |     2633 | 2024-02-13 | W7M           | L   | 0.494      | -            | -                | -                | -         |    -8.83 | RCF, RICIOLI, snow, urban0, yepz   |
|            2 |     2638 | 2024-02-13 | Galorys       | W   | 0.493      | -            | -                | -                | -         |     7.07 | RCF, RICIOLI, snow, urban0, yepz   |
|            1 |     2651 | 2024-02-12 | Dusty Roots   | W   | 0.486      | -            | -                | -                | -         |     1.03 | RCF, RICIOLI, snow, urban0, yepz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,567.15)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $600.00        | $600.00         |
| 2024-05-21 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-05-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-14 |      0.693 | $5,000.00      | $3,467.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
