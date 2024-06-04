### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, meyern, naz, Noktse, tomaszin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1057.3<br />
<br />
Final Rank Value (1057.3) = Starting Rank Value (974.1) + Head To Head Adjustments (83.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.465[<sup>2</sup>](#table1)
- Opponent Network: 0.331[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 974.1
- 400 + ( ( 0.296 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 974.1


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
|           69 |      146 | 2024-05-22 | Case          | W   | 1.000      | 0.450        | -                | 0.693 (0.312)    | 0 (0.000) |     8.27 | luchov, meyern, naz, Noktse, tomaszin  |
|           68 |      150 | 2024-05-22 | Case          | W   | 1.000      | 0.450        | -                | 0.693 (0.312)    | 0 (0.000) |     8.87 | luchov, meyern, naz, Noktse, tomaszin  |
|           67 |      156 | 2024-05-22 | Fluxo         | W   | 1.000      | 0.450        | 0.066 (0.030)    | 0.647 (0.291)    | 0 (0.000) |    17.87 | luchov, meyern, naz, Noktse, tomaszin  |
|           66 |      157 | 2024-05-22 | Fluxo         | W   | 1.000      | 0.450        | 0.066 (0.030)    | 0.647 (0.291)    | 0 (0.000) |    19.47 | luchov, meyern, naz, Noktse, tomaszin  |
|           65 |      191 | 2024-05-21 | ex-2GAME      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.69 | luchov, meyern, naz, Noktse, tomaszin  |
|           64 |      194 | 2024-05-21 | ex-2GAME      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           63 |      200 | 2024-05-21 | Imperial      | W   | 1.000      | 0.450        | 0.373 (0.168)    | 0.889 (0.400)    | 0 (0.000) |    28.70 | luchov, meyern, naz, Noktse, tomaszin  |
|           62 |      202 | 2024-05-21 | Imperial      | W   | 1.000      | 0.450        | 0.373 (0.168)    | 0.889 (0.400)    | 0 (0.000) |    29.43 | luchov, meyern, naz, Noktse, tomaszin  |
|           61 |      230 | 2024-05-20 | Corinthians   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.64 | luchov, meyern, naz, Noktse, tomaszin  |
|           60 |      235 | 2024-05-20 | 9z            | W   | 1.000      | 0.450        | 0.107 (0.048)    | 0.769 (0.346)    | 0 (0.000) |    27.07 | luchov, meyern, naz, Noktse, tomaszin  |
|           59 |      237 | 2024-05-20 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -3.99 | luchov, meyern, naz, Noktse, tomaszin  |
|           58 |      317 | 2024-05-17 | Solid         | L   | 1.000      | -            | -                | -                | -         |   -18.36 | luchov, meyern, naz, Noktse, tomaszin  |
|           57 |      319 | 2024-05-17 | Solid         | W   | 1.000      | 0.450        | 0.062 (0.028)    | -                | -         |    12.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           56 |      403 | 2024-05-15 | ODDIK         | W   | 1.000      | 0.450        | -                | 0.638 (0.287)    | -         |    16.13 | luchov, meyern, naz, Noktse, tomaszin  |
|           55 |      405 | 2024-05-15 | ODDIK         | W   | 1.000      | 0.450        | -                | 0.638 (0.287)    | -         |    17.62 | luchov, meyern, naz, Noktse, tomaszin  |
|           54 |      414 | 2024-05-15 | Hype          | L   | 1.000      | -            | -                | -                | -         |   -25.96 | luchov, meyern, naz, Noktse, tomaszin  |
|           53 |      462 | 2024-05-14 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -1.68 | luchov, meyern, naz, Noktse, tomaszin  |
|           52 |      475 | 2024-05-14 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |    -9.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           51 |      515 | 2024-05-12 | Solid         | W   | 1.000      | 0.384        | 0.062 (0.024)    | -                | -         |    13.86 | luchov, meyern, naz, Noktse, tomaszin  |
|           50 |      522 | 2024-05-12 | O PLANO       | W   | 1.000      | -            | -                | -                | -         |     3.44 | luchov, meyern, naz, Noktse, tomaszin  |
|           49 |      546 | 2024-05-11 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -1.16 | luchov, meyern, naz, Noktse, tomaszin  |
|           48 |      572 | 2024-05-10 | Imperial      | W   | 1.000      | 0.435        | 0.373 (0.162)    | 0.889 (0.386)    | -         |    30.11 | luchov, meyern, naz, Noktse, tomaszin  |
|           47 |      588 | 2024-05-09 | Sharks        | W   | 1.000      | -            | -                | -                | -         |    17.84 | luchov, meyern, naz, Noktse, tomaszin  |
|           46 |      617 | 2024-05-08 | Vikings KR    | W   | 1.000      | -            | -                | -                | -         |     8.77 | luchov, meyern, naz, Noktse, tomaszin  |
|           45 |      649 | 2024-05-06 | Sharks        | L   | 1.000      | -            | -                | -                | -         |   -12.90 | luchov, meyern, naz, Noktse, tomaszin  |
|           44 |      887 | 2024-04-25 | RED Canids    | L   | 0.974      | -            | -                | -                | -         |    -7.17 | luchov, meyern, naz, Noktse, tomaszin  |
|           43 |      889 | 2024-04-25 | RED Canids    | L   | 0.973      | -            | -                | -                | -         |    -7.64 | luchov, meyern, naz, Noktse, tomaszin  |
|           42 |     1154 | 2024-04-16 | O PLANO       | L   | 0.914      | -            | -                | -                | -         |   -25.59 | luchov, meyern, naz, Noktse, tomaszin  |
|           41 |     1251 | 2024-04-11 | Galorys       | L   | 0.879      | -            | -                | -                | -         |   -15.85 | luchov, meyern, naz, Noktse, tomaszin  |
|           40 |     1333 | 2024-04-09 | Galorys       | L   | 0.867      | -            | -                | -                | -         |   -16.81 | luchov, meyern, naz, Noktse, tomaszin  |
|           39 |     1338 | 2024-04-09 | Galorys       | W   | 0.867      | -            | -                | -                | -         |    10.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           38 |     1374 | 2024-04-08 | RED Canids    | L   | 0.861      | -            | -                | -                | -         |    -9.40 | luchov, meyern, naz, Noktse, tomaszin  |
|           37 |     1417 | 2024-04-07 | Sharks        | L   | 0.851      | -            | -                | -                | -         |   -12.11 | luchov, meyern, naz, Noktse, tomaszin  |
|           36 |     1424 | 2024-04-06 | Fluxo         | W   | 0.847      | -            | -                | -                | -         |    17.58 | luchov, meyern, naz, Noktse, tomaszin  |
|           35 |     1463 | 2024-04-04 | adalYamigos   | L   | 0.834      | -            | -                | -                | -         |   -19.00 | luchov, meyern, naz, Noktse, tomaszin  |
|           34 |     1467 | 2024-04-04 | adalYamigos   | W   | 0.834      | -            | -                | -                | -         |     7.06 | luchov, meyern, naz, Noktse, tomaszin  |
|           33 |     1479 | 2024-04-04 | Imperial      | L   | 0.833      | -            | -                | -                | -         |    -1.10 | luchov, meyern, naz, Noktse, tomaszin  |
|           32 |     1516 | 2024-04-03 | Fluxo         | L   | 0.826      | -            | -                | -                | -         |    -9.94 | luchov, meyern, naz, Noktse, tomaszin  |
|           31 |     1552 | 2024-04-02 | Sharks        | W   | 0.821      | -            | -                | -                | -         |    13.45 | luchov, meyern, naz, Noktse, tomaszin  |
|           30 |     1557 | 2024-04-02 | Fluxo         | L   | 0.820      | -            | -                | -                | -         |   -10.04 | luchov, meyern, naz, Noktse, tomaszin  |
|           29 |     1646 | 2024-03-27 | W7M           | L   | 0.781      | -            | -                | -                | -         |   -17.91 | luchov, meyern, naz, Noktse, tomaszin  |
|           28 |     1651 | 2024-03-27 | W7M           | W   | 0.780      | -            | -                | -                | -         |     6.52 | luchov, meyern, naz, Noktse, tomaszin  |
|           27 |     1961 | 2024-03-12 | RED Canids    | L   | 0.679      | -            | -                | -                | -         |    -9.03 | deco, luchov, meyern, Noktse, tomaszin |
|           26 |     1971 | 2024-03-11 | FURIA Academy | W   | 0.674      | -            | -                | -                | -         |     1.87 | deco, luchov, meyern, Noktse, tomaszin |
|           25 |     1994 | 2024-03-10 | adalYamigos   | L   | 0.668      | -            | -                | -                | -         |   -16.12 | deco, luchov, meyern, Noktse, tomaszin |
|           24 |     2042 | 2024-03-08 | FURIA Academy | W   | 0.654      | -            | -                | -                | -         |     1.65 | deco, luchov, meyern, Noktse, tomaszin |
|           23 |     2207 | 2024-03-02 | Wildcard      | L   | 0.613      | -            | -                | -                | -         |   -11.61 | deco, luchov, meyern, Noktse, tomaszin |
|           22 |     2224 | 2024-03-01 | Liquid        | L   | 0.607      | -            | -                | -                | -         |    -0.45 | deco, luchov, meyern, Noktse, tomaszin |
|           21 |     2348 | 2024-02-24 | Imperial      | L   | 0.566      | -            | -                | -                | -         |    -0.93 | deco, luchov, meyern, Noktse, tomaszin |
|           20 |     2367 | 2024-02-23 | 9z            | L   | 0.560      | -            | -                | -                | -         |    -3.26 | deco, luchov, meyern, Noktse, tomaszin |
|           19 |     2375 | 2024-02-22 | Imperial      | W   | 0.554      | 0.143        | 0.373 (0.030)    | -                | -         |    16.64 | deco, luchov, meyern, Noktse, tomaszin |
|           18 |     2384 | 2024-02-22 | 9z            | L   | 0.553      | -            | -                | -                | -         |    -2.97 | deco, luchov, meyern, Noktse, tomaszin |
|           17 |     2409 | 2024-02-21 | W7M           | W   | 0.546      | -            | -                | -                | -         |     4.92 | deco, luchov, meyern, Noktse, tomaszin |
|           16 |     2484 | 2024-02-18 | FURIA Academy | W   | 0.526      | -            | -                | -                | -         |     1.36 | deco, luchov, meyern, Noktse, tomaszin |
|           15 |     2524 | 2024-02-16 | Case          | L   | 0.514      | -            | -                | -                | -         |   -10.15 | deco, luchov, meyern, Noktse, tomaszin |
|           14 |     2646 | 2024-02-12 | FURIA Academy | W   | 0.488      | -            | -                | -                | -         |     1.18 | deco, luchov, meyern, Noktse, tomaszin |
|           13 |     2781 | 2024-02-02 | Imperial      | L   | 0.421      | -            | -                | -                | -         |    -0.58 | deco, luchov, meyern, Noktse, tomaszin |
|           12 |     2783 | 2024-02-02 | ODDIK         | W   | 0.421      | -            | -                | -                | -         |     6.32 | deco, luchov, meyern, Noktse, tomaszin |
|           11 |     2787 | 2024-02-02 | Imperial      | L   | 0.420      | -            | -                | -                | -         |    -0.53 | deco, luchov, meyern, Noktse, tomaszin |
|           10 |     2971 | 2024-01-23 | Imperial      | L   | 0.353      | -            | -                | -                | -         |    -0.45 | deco, luchov, meyern, Noktse, tomaszin |
|            9 |     2989 | 2024-01-22 | AJF           | W   | 0.348      | -            | -                | -                | -         |     0.73 | deco, luchov, meyern, Noktse, tomaszin |
|            8 |     3024 | 2024-01-21 | W7M           | W   | 0.340      | -            | -                | -                | -         |     2.79 | deco, luchov, meyern, Noktse, tomaszin |
|            7 |     3057 | 2024-01-20 | MIBR          | L   | 0.333      | -            | -                | -                | -         |    -0.31 | deco, luchov, meyern, Noktse, tomaszin |
|            6 |     3107 | 2024-01-19 | Imperial      | W   | 0.327      | 0.143        | 0.373 (0.017)    | -                | -         |     9.92 | deco, luchov, meyern, Noktse, tomaszin |
|            5 |     3111 | 2024-01-19 | Flamengo      | W   | 0.327      | -            | -                | -                | -         |     0.85 | deco, luchov, meyern, Noktse, tomaszin |
|            4 |     3317 | 2024-01-15 | TIMACETA      | L   | 0.301      | -            | -                | -                | -         |    -8.78 | deco, luchov, meyern, Noktse, tomaszin |
|            3 |     3347 | 2024-01-14 | Sharks        | L   | 0.294      | -            | -                | -                | -         |    -5.25 | deco, luchov, meyern, Noktse, tomaszin |
|            2 |     3352 | 2024-01-14 | W7M           | W   | 0.293      | -            | -                | -                | -         |     2.36 | deco, luchov, meyern, Noktse, tomaszin |
|            1 |     3375 | 2024-01-13 | Intense       | W   | 0.287      | -            | -                | -                | -         |     0.35 | deco, luchov, meyern, Noktse, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,865.94)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-02-25 |      0.573 | $5,000.00      | $2,865.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
