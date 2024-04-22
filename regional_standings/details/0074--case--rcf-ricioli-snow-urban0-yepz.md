### Roster Details<br />
Team Name: Case<br />
Roster: RCF, RICIOLI, snow, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  854.8<br />
<br />
Final Rank Value (854.8) = Starting Rank Value (877.7) + Head To Head Adjustments (-22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.7
- 400 + ( ( 0.247 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 877.7


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
|           84 |      175 | 2024-04-17 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -1.14 | RCF, RICIOLI, snow, urban0, yepz   |
|           83 |      212 | 2024-04-16 | Galorys       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.72 | RCF, RICIOLI, snow, urban0, yepz   |
|           82 |      263 | 2024-04-13 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -1.19 | pr1sma, RCF, RICIOLI, urban0, yepz |
|           81 |      276 | 2024-04-12 | adalYamigos   | W   | 1.000      | 0.435        | -                | 0.423 (0.184)    | 0 (0.000) |    15.40 | RCF, RICIOLI, snow, urban0, yepz   |
|           80 |      311 | 2024-04-11 | FURIA Academy | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.06 | RCF, RICIOLI, snow, urban0, yepz   |
|           79 |      384 | 2024-04-09 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.48 | RCF, RICIOLI, snow, urban0, yepz   |
|           78 |      390 | 2024-04-09 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.48 | RCF, RICIOLI, snow, urban0, yepz   |
|           77 |      461 | 2024-04-07 | adalYamigos   | L   | 1.000      | -            | -                | -                | -         |   -15.73 | RCF, RICIOLI, snow, urban0, yepz   |
|           76 |      523 | 2024-04-04 | RED Canids    | W   | 1.000      | 0.450        | 0.110 (0.049)    | 0.842 (0.379)    | 0 (0.000) |    25.19 | RCF, RICIOLI, snow, urban0, yepz   |
|           75 |      526 | 2024-04-04 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -5.80 | RCF, RICIOLI, snow, urban0, yepz   |
|           74 |      562 | 2024-04-03 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.46 | RCF, RICIOLI, snow, urban0, yepz   |
|           73 |      565 | 2024-04-03 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.46 | RCF, RICIOLI, snow, urban0, yepz   |
|           72 |      696 | 2024-03-27 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -1.65 | RCF, RICIOLI, snow, urban0, yepz   |
|           71 |      702 | 2024-03-27 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -1.68 | RCF, RICIOLI, snow, urban0, yepz   |
|           70 |      872 | 2024-03-17 | ODDIK         | L   | 0.960      | -            | -                | -                | -         |   -11.55 | RCF, RICIOLI, snow, urban0, yepz   |
|           69 |      896 | 2024-03-16 | MIBR Academy  | W   | 0.954      | -            | -                | -                | 0 (0.000) |     7.34 | RCF, RICIOLI, snow, urban0, yepz   |
|           68 |      911 | 2024-03-15 | RED Canids    | L   | 0.948      | -            | -                | -                | -         |    -7.65 | RCF, RICIOLI, snow, urban0, yepz   |
|           67 |      951 | 2024-03-14 | FURIA Academy | W   | 0.940      | -            | -                | -                | 0 (0.000) |     5.66 | RCF, RICIOLI, snow, urban0, yepz   |
|           66 |      970 | 2024-03-13 | RED Canids    | L   | 0.934      | -            | -                | -                | -         |    -7.25 | RCF, RICIOLI, snow, urban0, yepz   |
|           65 |      980 | 2024-03-13 | Yawara        | L   | 0.933      | -            | -                | -                | -         |   -25.25 | RCF, RICIOLI, snow, urban0, yepz   |
|           64 |      984 | 2024-03-13 | ODDIK         | L   | 0.933      | -            | -                | -                | -         |   -13.08 | RCF, RICIOLI, snow, urban0, yepz   |
|           63 |     1020 | 2024-03-12 | LA RUGONETA   | W   | 0.926      | -            | -                | -                | 0 (0.000) |     5.51 | RCF, RICIOLI, snow, urban0, yepz   |
|           62 |     1049 | 2024-03-10 | FURIA Academy | W   | 0.914      | -            | -                | -                | 0 (0.000) |     4.37 | RCF, RICIOLI, snow, urban0, yepz   |
|           61 |     1069 | 2024-03-09 | Sharks        | W   | 0.907      | 0.435        | 0.040 (0.016)    | 0.532 (0.210)    | 0 (0.000) |    18.96 | RCF, RICIOLI, snow, urban0, yepz   |
|           60 |     1119 | 2024-03-07 | Fluxo         | W   | 0.894      | 0.435        | 0.147 (0.057)    | 0.633 (0.246)    | 0 (0.000) |    21.97 | RCF, RICIOLI, snow, urban0, yepz   |
|           59 |     1181 | 2024-03-05 | adalYamigos   | L   | 0.881      | -            | -                | -                | -         |   -14.27 | RCF, RICIOLI, snow, urban0, yepz   |
|           58 |     1183 | 2024-03-05 | adalYamigos   | L   | 0.881      | -            | -                | -                | -         |   -15.42 | RCF, RICIOLI, snow, urban0, yepz   |
|           57 |     1211 | 2024-03-04 | Fluxo         | L   | 0.875      | -            | -                | -                | -         |    -6.10 | RCF, RICIOLI, snow, urban0, yepz   |
|           56 |     1212 | 2024-03-04 | Fluxo         | L   | 0.874      | -            | -                | -                | -         |    -6.44 | RCF, RICIOLI, snow, urban0, yepz   |
|           55 |     1388 | 2024-02-24 | 2GAME         | W   | 0.815      | 0.450        | -                | 0.217 (0.080)    | -         |     5.57 | RCF, RICIOLI, snow, urban0, yepz   |
|           54 |     1395 | 2024-02-24 | 2GAME         | L   | 0.814      | -            | -                | -                | -         |   -20.57 | RCF, RICIOLI, snow, urban0, yepz   |
|           53 |     1448 | 2024-02-21 | Solid         | W   | 0.795      | 0.450        | 0.126 (0.045)    | 0.584 (0.209)    | -         |    12.76 | RCF, RICIOLI, snow, urban0, yepz   |
|           52 |     1449 | 2024-02-21 | Solid         | L   | 0.795      | -            | -                | -                | -         |   -12.46 | RCF, RICIOLI, snow, urban0, yepz   |
|           51 |     1456 | 2024-02-21 | Sharks        | L   | 0.794      | -            | -                | -                | -         |   -10.46 | RCF, RICIOLI, snow, urban0, yepz   |
|           50 |     1485 | 2024-02-20 | 9z            | L   | 0.787      | -            | -                | -                | -         |    -9.36 | RCF, RICIOLI, snow, urban0, yepz   |
|           49 |     1488 | 2024-02-20 | W7M           | W   | 0.787      | -            | -                | -                | -         |    11.58 | RCF, RICIOLI, snow, urban0, yepz   |
|           48 |     1492 | 2024-02-20 | Sharks        | L   | 0.786      | -            | -                | -                | -         |   -10.53 | RCF, RICIOLI, snow, urban0, yepz   |
|           47 |     1532 | 2024-02-18 | Galorys       | L   | 0.774      | -            | -                | -                | -         |   -14.36 | RCF, RICIOLI, snow, urban0, yepz   |
|           46 |     1553 | 2024-02-17 | Solid         | W   | 0.768      | 0.303        | 0.126 (0.029)    | 0.584 (0.136)    | -         |    11.01 | RCF, RICIOLI, snow, urban0, yepz   |
|           45 |     1577 | 2024-02-16 | BESTIA        | W   | 0.761      | 0.435        | 0.029 (0.010)    | 0.455 (0.151)    | -         |    11.40 | RCF, RICIOLI, snow, urban0, yepz   |
|           44 |     1610 | 2024-02-15 | 9z            | L   | 0.754      | -            | -                | -                | -         |    -8.24 | RCF, RICIOLI, snow, urban0, yepz   |
|           43 |     1611 | 2024-02-15 | Sharks        | W   | 0.754      | -            | -                | -                | -         |    13.98 | RCF, RICIOLI, snow, urban0, yepz   |
|           42 |     1618 | 2024-02-15 | Flamengo      | W   | 0.753      | -            | -                | -                | -         |     2.81 | RCF, RICIOLI, snow, urban0, yepz   |
|           41 |     1639 | 2024-02-14 | O PLANO C     | W   | 0.748      | -            | -                | -                | -         |     1.50 | RCF, RICIOLI, snow, urban0, yepz   |
|           40 |     1682 | 2024-02-13 | W7M           | W   | 0.741      | 0.450        | -                | 0.490 (0.163)    | -         |    12.37 | RCF, RICIOLI, snow, urban0, yepz   |
|           39 |     1686 | 2024-02-13 | W7M           | L   | 0.741      | -            | -                | -                | -         |   -11.14 | RCF, RICIOLI, snow, urban0, yepz   |
|           38 |     1691 | 2024-02-13 | Galorys       | W   | 0.740      | 0.303        | -                | 0.557 (0.125)    | -         |    10.41 | RCF, RICIOLI, snow, urban0, yepz   |
|           37 |     1704 | 2024-02-12 | Dusty Roots   | W   | 0.733      | -            | -                | -                | -         |     1.63 | RCF, RICIOLI, snow, urban0, yepz   |
|           36 |     2073 | 2024-01-21 | paiN          | L   | 0.588      | -            | -                | -                | -         |    -0.18 | RCF, snow, souz4h, yepz, zmb       |
|           35 |     2080 | 2024-01-21 | Fluxo         | W   | 0.587      | 0.143        | 0.147 (0.012)    | -                | -         |    13.52 | RCF, snow, souz4h, yepz, zmb       |
|           34 |     2106 | 2024-01-20 | adalYamigos   | W   | 0.582      | -            | -                | -                | -         |     6.04 | RCF, snow, souz4h, yepz, zmb       |
|           33 |     2154 | 2024-01-19 | W7M           | L   | 0.575      | -            | -                | -                | -         |    -9.33 | RCF, snow, souz4h, yepz, zmb       |
|           32 |     2175 | 2024-01-19 | RED Canids    | L   | 0.573      | -            | -                | -                | -         |    -5.46 | RCF, snow, souz4h, yepz, zmb       |
|           31 |     2328 | 2024-01-16 | RED Canids    | L   | 0.554      | -            | -                | -                | -         |    -5.23 | RCF, snow, souz4h, yepz, zmb       |
|           30 |     2330 | 2024-01-16 | paiN          | W   | 0.554      | 0.143        | 0.698 (0.055)    | -                | -         |    17.32 | RCF, snow, souz4h, yepz, zmb       |
|           29 |     2347 | 2024-01-16 | Hype          | W   | 0.553      | -            | -                | -                | -         |     1.29 | RCF, snow, souz4h, yepz, zmb       |
|           28 |     2423 | 2024-01-13 | W7M           | L   | 0.535      | -            | -                | -                | -         |    -8.71 | RCF, snow, souz4h, yepz, zmb       |
|           27 |     2501 | 2024-01-11 | Galorys       | L   | 0.521      | -            | -                | -                | -         |    -7.74 | RCF, snow, souz4h, yepz, zmb       |
|           26 |     2508 | 2024-01-11 | AJF           | W   | 0.521      | -            | -                | -                | -         |     3.69 | RCF, snow, souz4h, yepz, zmb       |
|           25 |     2512 | 2024-01-11 | Hype          | W   | 0.520      | -            | -                | -                | -         |     1.15 | RCF, snow, souz4h, yepz, zmb       |
|           24 |     2567 | 2024-01-09 | Flamengo      | L   | 0.507      | -            | -                | -                | -         |   -13.63 | RCF, snow, souz4h, yepz, zmb       |
|           23 |     2579 | 2024-01-09 | Yawara        | W   | 0.507      | -            | -                | -                | -         |     1.91 | RCF, snow, souz4h, yepz, zmb       |
|           22 |     2629 | 2023-12-23 | ODDIK         | L   | 0.394      | -            | -                | -                | -         |    -5.37 | RCF, snow, souz4h, yepz, zmb       |
|           21 |     2630 | 2023-12-23 | Solid         | W   | 0.393      | 0.303        | 0.126 (0.015)    | -                | -         |     6.96 | RCF, snow, souz4h, yepz, zmb       |
|           20 |     2634 | 2023-12-21 | Flamengo      | W   | 0.380      | -            | -                | -                | -         |     1.72 | RCF, snow, souz4h, yepz, zmb       |
|           19 |     2638 | 2023-12-20 | ODDIK         | L   | 0.373      | -            | -                | -                | -         |    -5.22 | RCF, snow, souz4h, yepz, zmb       |
|           18 |     2673 | 2023-12-17 | VELOX         | W   | 0.354      | -            | -                | -                | -         |     2.33 | RCF, snow, souz4h, yepz, zmb       |
|           17 |     2705 | 2023-12-16 | W7M           | L   | 0.348      | -            | -                | -                | -         |    -6.07 | RCF, snow, souz4h, yepz, zmb       |
|           16 |     2730 | 2023-12-15 | Corinthians   | W   | 0.342      | -            | -                | -                | -         |     2.46 | RCF, snow, souz4h, yepz, zmb       |
|           15 |     2739 | 2023-12-15 | Flamengo      | W   | 0.340      | -            | -                | -                | -         |     1.44 | RCF, snow, souz4h, yepz, zmb       |
|           14 |     2986 | 2023-12-01 | adalYamigos   | L   | 0.248      | -            | -                | -                | -         |    -5.78 | RCF, snow, souz4h, yepz, zmb       |
|           13 |     3002 | 2023-11-30 | Corinthians   | W   | 0.241      | -            | -                | -                | -         |     1.73 | RCF, snow, souz4h, yepz, zmb       |
|           12 |     3062 | 2023-11-25 | Imperial      | L   | 0.208      | -            | -                | -                | -         |    -0.05 | RCF, snow, souz4h, yepz, zmb       |
|           11 |     3066 | 2023-11-25 | 9z            | W   | 0.207      | -            | -                | -                | -         |     3.55 | RCF, snow, souz4h, yepz, zmb       |
|           10 |     3092 | 2023-11-24 | RED Canids    | W   | 0.199      | 0.435        | 0.110 (0.010)    | -                | -         |     4.29 | RCF, snow, souz4h, yepz, zmb       |
|            9 |     3104 | 2023-11-23 | BESTIA        | L   | 0.194      | -            | -                | -                | -         |    -3.39 | RCF, snow, souz4h, yepz, zmb       |
|            8 |     3257 | 2023-11-16 | Flamengo      | L   | 0.147      | -            | -                | -                | -         |    -4.02 | RCF, snow, souz4h, yepz, zmb       |
|            7 |     3326 | 2023-11-14 | Corinthians   | W   | 0.133      | -            | -                | -                | -         |     0.98 | RCF, snow, souz4h, yepz, zmb       |
|            6 |     3361 | 2023-11-12 | RED Canids    | L   | 0.120      | -            | -                | -                | -         |    -1.23 | RCF, snow, souz4h, yepz, zmb       |
|            5 |     3607 | 2023-11-01 | ODDIK         | L   | 0.046      | -            | -                | -                | -         |    -0.65 | RCF, snow, souz4h, yepz, zmb       |
|            4 |     3669 | 2023-10-30 | Corinthians   | W   | 0.033      | -            | -                | -                | -         |     0.24 | RCF, snow, souz4h, yepz, zmb       |
|            3 |     3743 | 2023-10-28 | Sharks        | L   | 0.020      | -            | -                | -                | -         |    -0.30 | RCF, snow, souz4h, yepz, zmb       |
|            2 |     3747 | 2023-10-28 | RED Canids    | L   | 0.020      | -            | -                | -                | -         |    -0.20 | RCF, snow, souz4h, yepz, zmb       |
|            1 |     3786 | 2023-10-27 | O PLANO       | W   | 0.013      | -            | -                | -                | -         |     0.03 | RCF, snow, souz4h, yepz, zmb       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,484.33)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-14 |      0.941 | $5,000.00      | $4,704.14       |
| 2023-12-23 |      0.394 | $1,500.00      | $590.62         |
| 2023-12-18 |      0.359 | $1,080.00      | $387.66         |
| 2023-11-26 |      0.214 | $3,750.00      | $801.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
