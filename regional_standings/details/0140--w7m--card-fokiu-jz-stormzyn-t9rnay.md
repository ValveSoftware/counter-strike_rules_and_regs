### Roster Details<br />
Team Name: W7M<br />
Roster: card, fokiu, jz, stormzyn, t9rnay<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  732.6<br />
<br />
Final Rank Value (732.6) = Starting Rank Value (799.3) + Head To Head Adjustments (-66.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.3
- 400 + ( ( 0.200 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 799.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |        0 | 2024-06-10 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -8.85 | card, fokiu, jz, stormzyn, t9rnay      |
|           80 |       40 | 2024-06-09 | Solid          | W   | 1.000      | 0.450        | 0.055 (0.025)    | 0.604 (0.272)    | 0 (0.000) |    20.21 | card, fokiu, jz, stormzyn, t9rnay      |
|           79 |       90 | 2024-06-08 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -9.12 | card, fokiu, jz, stormzyn, t9rnay      |
|           78 |       98 | 2024-06-08 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -16.93 | card, fokiu, jz, stormzyn, t9rnay      |
|           77 |      181 | 2024-06-07 | Galorys        | W   | 1.000      | 0.450        | 0.025 (0.011)    | 0.596 (0.268)    | 0 (0.000) |    18.57 | card, fokiu, jz, stormzyn, t9rnay      |
|           76 |      233 | 2024-06-06 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |    -3.97 | card, fokiu, jz, stormzyn, t9rnay      |
|           75 |      362 | 2024-06-03 | Vikings KR     | W   | 1.000      | 0.384        | -                | 0.225 (0.086)    | 0 (0.000) |    15.44 | card, fokiu, jz, stormzyn, t9rnay      |
|           74 |      428 | 2024-06-01 | Corinthians    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.53 | card, fokiu, jz, stormzyn, t9rnay      |
|           73 |      471 | 2024-05-30 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -17.70 | card, fokiu, jz, stormzyn, t9rnay      |
|           72 |      524 | 2024-05-28 | Yawara         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.75 | card, fokiu, jz, stormzyn, t9rnay      |
|           71 |      645 | 2024-05-22 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -10.00 | card, fokiu, jz, stormzyn, t9rnay      |
|           70 |      651 | 2024-05-22 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -10.81 | card, fokiu, stormzyn, t9rnay, zede    |
|           69 |      728 | 2024-05-20 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -1.49 | card, fokiu, stormzyn, t9rnay, zede    |
|           68 |      732 | 2024-05-20 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -1.51 | card, fokiu, stormzyn, t9rnay, zede    |
|           67 |      853 | 2024-05-16 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -5.69 | card, fokiu, stormzyn, t9rnay, zede    |
|           66 |      856 | 2024-05-16 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -6.00 | card, fokiu, stormzyn, t9rnay, zede    |
|           65 |      950 | 2024-05-14 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -0.70 | card, fokiu, stormzyn, t9rnay, zede    |
|           64 |      953 | 2024-05-14 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -0.70 | card, fokiu, stormzyn, t9rnay, zede    |
|           63 |      966 | 2024-05-14 | Hype           | L   | 1.000      | -            | -                | -                | -         |   -21.34 | card, fokiu, stormzyn, t9rnay, zede    |
|           62 |     1000 | 2024-05-13 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -7.50 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           61 |     1049 | 2024-05-11 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -8.00 | card, fokiu, stormzyn, t9rnay, zede    |
|           60 |     1097 | 2024-05-09 | KRÜ            | L   | 0.986      | -            | -                | -                | -         |   -14.84 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           59 |     1131 | 2024-05-07 | paiN           | L   | 0.974      | -            | -                | -                | -         |    -0.50 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           58 |     1151 | 2024-05-06 | paiN           | L   | 0.967      | -            | -                | -                | -         |    -0.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           57 |     1152 | 2024-05-06 | paiN           | L   | 0.966      | -            | -                | -                | -         |    -0.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           56 |     1175 | 2024-05-05 | Galorys        | W   | 0.959      | 0.435        | 0.025 (0.010)    | 0.596 (0.248)    | 0 (0.000) |    17.77 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           55 |     1359 | 2024-04-26 | ODDIK          | L   | 0.901      | -            | -                | -                | -         |    -8.61 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           54 |     1361 | 2024-04-26 | ODDIK          | L   | 0.900      | -            | -                | -                | -         |    -9.22 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           53 |     1623 | 2024-04-17 | ODDIK          | L   | 0.841      | -            | -                | -                | -         |    -9.91 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           52 |     1656 | 2024-04-16 | Sharks         | W   | 0.835      | -            | -                | -                | 0 (0.000) |    11.71 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           51 |     1726 | 2024-04-12 | RED Canids     | L   | 0.807      | -            | -                | -                | -         |    -4.35 | fokiu, saadzin, stormzyn, t9rnay, zede |
|           50 |     1835 | 2024-04-09 | RED Canids     | L   | 0.788      | -            | -                | -                | -         |    -4.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           49 |     1840 | 2024-04-09 | RED Canids     | L   | 0.788      | -            | -                | -                | -         |    -4.70 | fokiu, jz, saadzin, stormzyn, zede     |
|           48 |     1873 | 2024-04-08 | MIBR           | L   | 0.781      | -            | -                | -                | -         |    -0.46 | fokiu, jz, saadzin, stormzyn, zede     |
|           47 |     1929 | 2024-04-06 | RED Canids     | W   | 0.767      | 0.435        | 0.112 (0.037)    | 0.756 (0.252)    | 0 (0.000) |    19.89 | fokiu, jz, saadzin, stormzyn, zede     |
|           46 |     2146 | 2024-03-27 | BESTIA         | W   | 0.701      | 0.450        | 0.031 (0.010)    | 0.631 (0.199)    | 0 (0.000) |    16.24 | fokiu, jz, saadzin, stormzyn, zede     |
|           45 |     2151 | 2024-03-27 | BESTIA         | L   | 0.701      | -            | -                | -                | -         |    -5.77 | fokiu, jz, saadzin, stormzyn, zede     |
|           44 |     2384 | 2024-03-14 | Galorys        | L   | 0.615      | -            | -                | -                | -         |    -8.97 | fokiu, jz, saadzin, stormzyn, zede     |
|           43 |     2387 | 2024-03-14 | Galorys        | L   | 0.615      | -            | -                | -                | -         |    -9.47 | fokiu, jz, saadzin, stormzyn, zede     |
|           42 |     2480 | 2024-03-11 | Solid          | L   | 0.593      | -            | -                | -                | -         |    -7.93 | fokiu, jz, saadzin, stormzyn, zede     |
|           41 |     2515 | 2024-03-09 | RED Canids     | L   | 0.582      | -            | -                | -                | -         |    -3.83 | fokiu, jz, saadzin, stormzyn, zede     |
|           40 |     2575 | 2024-03-07 | Solid          | W   | 0.567      | 0.435        | 0.055 (0.013)    | 0.604 (0.149)    | 0 (0.000) |    10.59 | fokiu, jz, saadzin, stormzyn, zede     |
|           39 |     2629 | 2024-03-05 | ex-2GAME       | L   | 0.555      | -            | -                | -                | -         |   -10.82 | fokiu, jz, saadzin, stormzyn, zede     |
|           38 |     2631 | 2024-03-05 | ex-2GAME       | L   | 0.555      | -            | -                | -                | -         |   -11.32 | fokiu, jz, saadzin, stormzyn, zede     |
|           37 |     2836 | 2024-02-24 | Corinthians    | W   | 0.488      | -            | -                | -                | -         |     4.11 | fokiu, jz, saadzin, stormzyn, zede     |
|           36 |     2845 | 2024-02-24 | Corinthians    | W   | 0.488      | -            | -                | -                | -         |     4.25 | fokiu, jz, saadzin, stormzyn, zede     |
|           35 |     2897 | 2024-02-21 | Fluxo          | W   | 0.468      | 0.450        | 0.064 (0.013)    | 0.670 (0.141)    | -         |    10.96 | fokiu, jz, saadzin, stormzyn, zede     |
|           34 |     2901 | 2024-02-21 | Fluxo          | L   | 0.468      | -            | -                | -                | -         |    -3.79 | fokiu, jz, saadzin, stormzyn, zede     |
|           33 |     2909 | 2024-02-21 | BESTIA         | L   | 0.466      | -            | -                | -                | -         |    -4.11 | fokiu, jz, saadzin, stormzyn, zede     |
|           32 |     2935 | 2024-02-20 | Case           | L   | 0.461      | -            | -                | -                | -         |    -5.98 | fokiu, jz, saadzin, stormzyn, zede     |
|           31 |     2999 | 2024-02-17 | Sharks         | W   | 0.442      | 0.435        | 0.037 (0.007)    | 0.486 (0.093)    | -         |     9.75 | fokiu, jz, saadzin, stormzyn, zede     |
|           30 |     3030 | 2024-02-16 | Solid          | L   | 0.434      | -            | -                | -                | -         |    -5.56 | fokiu, jz, saadzin, stormzyn, zede     |
|           29 |     3033 | 2024-02-16 | Sharks         | L   | 0.433      | -            | -                | -                | -         |    -4.05 | fokiu, jz, saadzin, stormzyn, zede     |
|           28 |     3059 | 2024-02-15 | Fluxo          | L   | 0.427      | -            | -                | -                | -         |    -3.83 | fokiu, jz, saadzin, stormzyn, zede     |
|           27 |     3090 | 2024-02-14 | Genei Ryodan   | W   | 0.421      | -            | -                | -                | -         |     1.07 | fokiu, jz, saadzin, stormzyn, zede     |
|           26 |     3129 | 2024-02-13 | Case           | L   | 0.415      | -            | -                | -                | -         |    -5.87 | fokiu, jz, saadzin, stormzyn, zede     |
|           25 |     3133 | 2024-02-13 | Case           | W   | 0.415      | 0.450        | -                | 0.656 (0.122)    | -         |     7.36 | fokiu, jz, saadzin, stormzyn, zede     |
|           24 |     3139 | 2024-02-13 | Corinthians    | W   | 0.413      | -            | -                | -                | -         |     3.87 | fokiu, jz, saadzin, stormzyn, zede     |
|           23 |     3150 | 2024-02-12 | Corinthians    | W   | 0.407      | -            | -                | -                | -         |     3.94 | fokiu, jz, saadzin, stormzyn, zede     |
|           22 |     3252 | 2024-02-03 | 9z             | L   | 0.349      | -            | -                | -                | -         |    -0.58 | fokiu, jz, saadzin, stormzyn, zede     |
|           21 |     3315 | 2024-02-01 | paiN           | W   | 0.335      | 0.143        | 0.437 (0.021)    | -                | -         |    10.42 | fokiu, jz, saadzin, stormzyn, zede     |
|           20 |     3317 | 2024-02-01 | RED Canids     | W   | 0.335      | 0.143        | 0.112 (0.005)    | -                | -         |     8.50 | fokiu, jz, saadzin, stormzyn, zede     |
|           19 |     3322 | 2024-02-01 | MIBR           | L   | 0.334      | -            | -                | -                | -         |    -0.14 | fokiu, jz, saadzin, stormzyn, zede     |
|           18 |     3470 | 2024-01-23 | paiN           | L   | 0.274      | -            | -                | -                | -         |    -0.10 | fokiu, jz, saadzin, stormzyn, zede     |
|           17 |     3493 | 2024-01-22 | RED Canids     | W   | 0.268      | -            | -                | -                | -         |     6.91 | fokiu, jz, saadzin, stormzyn, zede     |
|           16 |     3521 | 2024-01-21 | 9z             | L   | 0.262      | -            | -                | -                | -         |    -0.38 | fokiu, jz, saadzin, stormzyn, zede     |
|           15 |     3524 | 2024-01-21 | BESTIA         | L   | 0.261      | -            | -                | -                | -         |    -2.10 | fokiu, jz, saadzin, stormzyn, zede     |
|           14 |     3565 | 2024-01-20 | TIMACETA       | W   | 0.253      | -            | -                | -                | -         |     1.41 | fokiu, jz, saadzin, stormzyn, zede     |
|           13 |     3601 | 2024-01-19 | Case           | W   | 0.249      | -            | -                | -                | -         |     2.44 | fokiu, jz, saadzin, stormzyn, zede     |
|           12 |     3621 | 2024-01-19 | paiN           | L   | 0.247      | -            | -                | -                | -         |    -0.08 | fokiu, jz, saadzin, stormzyn, zede     |
|           11 |     3772 | 2024-01-16 | Legacy         | L   | 0.228      | -            | -                | -                | -         |    -1.61 | fokiu, jz, saadzin, stormzyn, zede     |
|           10 |     3779 | 2024-01-16 | TIMACETA       | W   | 0.227      | -            | -                | -                | -         |     1.25 | fokiu, jz, saadzin, stormzyn, zede     |
|            9 |     3815 | 2024-01-15 | inSanitY       | W   | 0.222      | -            | -                | -                | -         |     0.69 | fokiu, jz, saadzin, stormzyn, zede     |
|            8 |     3852 | 2024-01-14 | BESTIA         | L   | 0.214      | -            | -                | -                | -         |    -1.70 | fokiu, jz, saadzin, stormzyn, zede     |
|            7 |     3870 | 2024-01-13 | Case           | W   | 0.208      | -            | -                | -                | -         |     2.01 | fokiu, jz, saadzin, stormzyn, zede     |
|            6 |     4004 | 2024-01-09 | ODDIK          | L   | 0.182      | -            | -                | -                | -         |    -1.63 | fokiu, jz, saadzin, stormzyn, zede     |
|            5 |     4007 | 2024-01-09 | Legacy         | L   | 0.181      | -            | -                | -                | -         |    -1.30 | fokiu, jz, saadzin, stormzyn, zede     |
|            4 |     4011 | 2024-01-09 | Dusty Roots    | W   | 0.181      | -            | -                | -                | -         |     0.56 | fokiu, jz, saadzin, stormzyn, zede     |
|            3 |     4025 | 2024-01-09 | LA RUGONETA    | W   | 0.180      | -            | -                | -                | -         |     1.00 | fokiu, jz, saadzin, stormzyn, zede     |
|            2 |     4105 | 2023-12-18 | WINDINGO       | W   | 0.032      | -            | -                | -                | -         |     0.25 | fokiu, jz, saadzin, stormzyn, zede     |
|            1 |     4152 | 2023-12-16 | Case           | W   | 0.022      | -            | -                | -                | -         |     0.21 | fokiu, jz, saadzin, stormzyn, zede     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($474.84)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $300.00        | $300.00         |
| 2023-12-18 |      0.032 | $5,400.00      | $174.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
