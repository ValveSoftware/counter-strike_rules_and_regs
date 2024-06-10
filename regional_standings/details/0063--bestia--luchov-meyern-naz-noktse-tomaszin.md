### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, meyern, naz, Noktse, tomaszin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  1035.6<br />
<br />
Final Rank Value (1035.6) = Starting Rank Value (994.3) + Head To Head Adjustments (41.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.315[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.298<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 994.3
- 400 + ( ( 0.298 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 994.3


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
|           77 |       28 | 2024-06-09 | RED Canids    | W   | 1.000      | 0.384        | 0.112 (0.043)    | 0.756 (0.291)    | 0 (0.000) |    22.18 | luchov, meyern, naz, Noktse, tomaszin  |
|           76 |       51 | 2024-06-09 | Sharks        | L   | 1.000      | -            | -                | -                | -         |   -14.47 | luchov, meyern, naz, Noktse, tomaszin  |
|           75 |       95 | 2024-06-08 | Solid         | W   | 1.000      | 0.384        | 0.055 (0.021)    | -                | 0 (0.000) |     8.62 | luchov, meyern, naz, Noktse, tomaszin  |
|           74 |      114 | 2024-06-08 | Vikings KR    | L   | 1.000      | -            | -                | -                | -         |   -26.85 | luchov, meyern, naz, Noktse, tomaszin  |
|           73 |      155 | 2024-06-07 | ODDIK         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.30 | luchov, meyern, naz, Noktse, tomaszin  |
|           72 |      215 | 2024-06-06 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |   -23.26 | luchov, meyern, naz, Noktse, tomaszin  |
|           71 |      278 | 2024-06-05 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -1.76 | luchov, meyern, naz, Noktse, tomaszin  |
|           70 |      328 | 2024-06-04 | Sharks        | L   | 1.000      | -            | -                | -                | -         |   -17.14 | luchov, meyern, naz, Noktse, tomaszin  |
|           69 |      646 | 2024-05-22 | Case          | W   | 1.000      | 0.450        | -                | 0.656 (0.295)    | 0 (0.000) |     8.33 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |      650 | 2024-05-22 | Case          | W   | 1.000      | 0.450        | -                | 0.656 (0.295)    | 0 (0.000) |     8.93 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |      656 | 2024-05-22 | Fluxo         | W   | 1.000      | 0.450        | 0.064 (0.029)    | 0.670 (0.302)    | 0 (0.000) |    17.49 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |      657 | 2024-05-22 | Fluxo         | W   | 1.000      | 0.450        | 0.064 (0.029)    | 0.670 (0.302)    | 0 (0.000) |    19.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |      691 | 2024-05-21 | ex-2GAME      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.42 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |      694 | 2024-05-21 | ex-2GAME      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.61 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |      700 | 2024-05-21 | Imperial      | W   | 1.000      | 0.450        | 0.415 (0.187)    | 0.799 (0.360)    | 0 (0.000) |    28.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |      702 | 2024-05-21 | Imperial      | W   | 1.000      | 0.450        | 0.415 (0.187)    | 0.799 (0.360)    | -         |    29.34 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |      730 | 2024-05-20 | Corinthians   | W   | 1.000      | -            | -                | -                | -         |     4.03 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |      735 | 2024-05-20 | 9z            | W   | 1.000      | 0.450        | 0.194 (0.087)    | 0.724 (0.326)    | -         |    27.69 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |      737 | 2024-05-20 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -3.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |      817 | 2024-05-17 | Solid         | L   | 1.000      | -            | -                | -                | -         |   -18.67 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |      819 | 2024-05-17 | Solid         | W   | 1.000      | 0.450        | 0.055 (0.025)    | 0.604 (0.272)    | -         |    12.57 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |      903 | 2024-05-15 | ODDIK         | W   | 1.000      | -            | -                | -                | -         |    15.44 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |      905 | 2024-05-15 | ODDIK         | W   | 1.000      | -            | -                | -                | -         |    16.86 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |      914 | 2024-05-15 | Hype          | L   | 1.000      | -            | -                | -                | -         |   -25.41 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |      962 | 2024-05-14 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -1.76 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |      975 | 2024-05-14 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -9.00 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |     1015 | 2024-05-12 | Solid         | W   | 1.000      | -            | -                | -                | -         |    13.51 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |     1022 | 2024-05-12 | O PLANO       | W   | 1.000      | -            | -                | -                | -         |     3.13 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |     1046 | 2024-05-11 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -1.21 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |     1072 | 2024-05-10 | Imperial      | W   | 0.994      | 0.435        | 0.415 (0.179)    | 0.799 (0.345)    | -         |    29.85 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |     1088 | 2024-05-09 | Sharks        | W   | 0.988      | -            | -                | -                | -         |    20.13 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |     1117 | 2024-05-08 | Vikings KR    | W   | 0.980      | -            | -                | -                | -         |     9.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |     1149 | 2024-05-06 | Sharks        | L   | 0.968      | -            | -                | -                | -         |    -9.88 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |     1387 | 2024-04-25 | RED Canids    | L   | 0.894      | -            | -                | -                | -         |    -6.15 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |     1389 | 2024-04-25 | RED Canids    | L   | 0.894      | -            | -                | -                | -         |    -6.50 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1654 | 2024-04-16 | O PLANO       | L   | 0.835      | -            | -                | -                | -         |   -23.52 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     1751 | 2024-04-11 | Galorys       | L   | 0.800      | -            | -                | -                | -         |   -14.31 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     1833 | 2024-04-09 | Galorys       | L   | 0.788      | -            | -                | -                | -         |   -15.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     1838 | 2024-04-09 | Galorys       | W   | 0.788      | -            | -                | -                | -         |     9.75 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     1874 | 2024-04-08 | RED Canids    | L   | 0.781      | -            | -                | -                | -         |    -7.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     1917 | 2024-04-07 | Sharks        | L   | 0.772      | -            | -                | -                | -         |   -17.69 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     1924 | 2024-04-06 | Fluxo         | W   | 0.768      | -            | -                | -                | -         |    15.63 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     1963 | 2024-04-04 | adalYamigos   | L   | 0.755      | -            | -                | -                | -         |   -18.09 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     1967 | 2024-04-04 | adalYamigos   | W   | 0.755      | -            | -                | -                | -         |     5.53 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     1979 | 2024-04-04 | Imperial      | L   | 0.754      | -            | -                | -                | -         |    -1.05 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     2016 | 2024-04-03 | Fluxo         | L   | 0.747      | -            | -                | -                | -         |    -9.41 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     2052 | 2024-04-02 | Sharks        | W   | 0.742      | -            | -                | -                | -         |     5.60 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     2057 | 2024-04-02 | Fluxo         | L   | 0.741      | -            | -                | -                | -         |    -9.72 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     2146 | 2024-03-27 | W7M           | L   | 0.701      | -            | -                | -                | -         |   -16.24 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     2151 | 2024-03-27 | W7M           | W   | 0.701      | -            | -                | -                | -         |     5.77 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     2461 | 2024-03-12 | RED Canids    | L   | 0.600      | -            | -                | -                | -         |    -7.21 | deco, luchov, meyern, Noktse, tomaszin |
|           26 |     2471 | 2024-03-11 | FURIA Academy | W   | 0.595      | -            | -                | -                | -         |     1.54 | deco, luchov, meyern, Noktse, tomaszin |
|           25 |     2494 | 2024-03-10 | adalYamigos   | L   | 0.588      | -            | -                | -                | -         |   -14.94 | deco, luchov, meyern, Noktse, tomaszin |
|           24 |     2542 | 2024-03-08 | FURIA Academy | W   | 0.575      | -            | -                | -                | -         |     1.36 | deco, luchov, meyern, Noktse, tomaszin |
|           23 |     2707 | 2024-03-02 | Wildcard      | L   | 0.533      | -            | -                | -                | -         |    -8.96 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     2724 | 2024-03-01 | Liquid        | L   | 0.528      | -            | -                | -                | -         |    -0.41 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     2848 | 2024-02-24 | Imperial      | L   | 0.487      | -            | -                | -                | -         |    -0.87 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     2867 | 2024-02-23 | 9z            | L   | 0.481      | -            | -                | -                | -         |    -2.29 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     2875 | 2024-02-22 | Imperial      | W   | 0.475      | 0.143        | 0.415 (0.028)    | -                | -         |    14.20 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     2884 | 2024-02-22 | 9z            | L   | 0.474      | -            | -                | -                | -         |    -2.14 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     2909 | 2024-02-21 | W7M           | W   | 0.466      | -            | -                | -                | -         |     4.11 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     2984 | 2024-02-18 | FURIA Academy | W   | 0.446      | -            | -                | -                | -         |     1.09 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     3024 | 2024-02-16 | Case          | L   | 0.435      | -            | -                | -                | -         |    -8.83 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     3146 | 2024-02-12 | FURIA Academy | W   | 0.408      | -            | -                | -                | -         |     0.91 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     3281 | 2024-02-02 | Imperial      | L   | 0.342      | -            | -                | -                | -         |    -0.55 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     3283 | 2024-02-02 | ODDIK         | W   | 0.342      | -            | -                | -                | -         |     4.96 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     3287 | 2024-02-02 | Imperial      | L   | 0.341      | -            | -                | -                | -         |    -0.51 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     3471 | 2024-01-23 | Imperial      | L   | 0.274      | -            | -                | -                | -         |    -0.42 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     3489 | 2024-01-22 | AJF           | W   | 0.268      | -            | -                | -                | -         |     0.49 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3524 | 2024-01-21 | W7M           | W   | 0.261      | -            | -                | -                | -         |     2.10 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3557 | 2024-01-20 | MIBR          | L   | 0.254      | -            | -                | -                | -         |    -0.28 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3607 | 2024-01-19 | Imperial      | W   | 0.248      | -            | -                | -                | -         |     7.46 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3611 | 2024-01-19 | Flamengo      | W   | 0.248      | -            | -                | -                | -         |     0.57 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     3817 | 2024-01-15 | TIMACETA      | L   | 0.222      | -            | -                | -                | -         |    -6.53 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     3847 | 2024-01-14 | Sharks        | L   | 0.214      | -            | -                | -                | -         |    -3.58 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     3852 | 2024-01-14 | W7M           | W   | 0.214      | -            | -                | -                | -         |     1.70 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     3875 | 2024-01-13 | Intense       | W   | 0.208      | -            | -                | -                | -         |     0.23 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,470.08)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-02-25 |      0.494 | $5,000.00      | $2,470.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
