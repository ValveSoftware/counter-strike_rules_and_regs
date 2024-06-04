### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1299.4<br />
<br />
Final Rank Value (1299.4) = Starting Rank Value (1279.1) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.554[<sup>2</sup>](#table1)
- Opponent Network: 0.323[<sup>2</sup>](#table1)
- LAN Wins: 0.427[<sup>2</sup>](#table1)

The average of these factors is 0.453<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1279.1
- 400 + ( ( 0.453 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1279.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |        0 | 2024-05-29 | Vitality       | W   | 1.000      | 0.624        | 0.699 (0.436)    | 0.481 (0.300)    | 1 (1.000) |    30.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           62 |       40 | 2024-05-27 | Liquid         | W   | 1.000      | 0.624        | 0.493 (0.308)    | 0.854 (0.533)    | 1 (1.000) |    28.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |       52 | 2024-05-27 | MOUZ           | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.653 (0.408)    | 1 (1.000) |    31.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      147 | 2024-05-22 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -9.41 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |      149 | 2024-05-22 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -10.15 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |      228 | 2024-05-20 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.77 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |      232 | 2024-05-20 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.80 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |      235 | 2024-05-20 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -27.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |      237 | 2024-05-20 | BESTIA         | W   | 1.000      | 0.450        | -                | 0.626 (0.282)    | 0 (0.000) |     3.99 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |      258 | 2024-05-19 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -21.50 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           53 |      287 | 2024-05-18 | Fluxo          | W   | 1.000      | 0.371        | 0.066 (0.024)    | 0.647 (0.240)    | 0 (0.000) |     9.23 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           52 |      351 | 2024-05-16 | ODDIK          | W   | 1.000      | 0.371        | -                | 0.638 (0.236)    | 0 (0.000) |     3.48 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |      359 | 2024-05-16 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -8.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |      397 | 2024-05-15 | RED Canids     | W   | 1.000      | 0.450        | 0.077 (0.035)    | 0.840 (0.378)    | 0 (0.000) |     8.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |      399 | 2024-05-15 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -23.25 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |      401 | 2024-05-15 | Sharks         | W   | 1.000      | -            | -                | -                | -         |     3.94 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |      458 | 2024-05-14 | ex-2GAME       | W   | 1.000      | -            | -                | -                | -         |     1.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |      463 | 2024-05-14 | ex-2GAME       | W   | 1.000      | -            | -                | -                | -         |     1.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |      472 | 2024-05-14 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     2.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |      490 | 2024-05-13 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     2.87 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |      510 | 2024-05-12 | inSanitY       | W   | 1.000      | -            | -                | -                | -         |     0.78 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |      514 | 2024-05-12 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -7.26 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |      540 | 2024-05-11 | KRÜ            | W   | 1.000      | -            | -                | -                | -         |     2.27 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |      568 | 2024-05-10 | inSanitY       | W   | 1.000      | -            | -                | -                | -         |     0.76 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |      611 | 2024-05-08 | Sharks         | W   | 1.000      | 0.435        | 0.031 (0.013)    | 0.530 (0.230)    | -         |     3.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |      653 | 2024-05-06 | Vikings KR     | W   | 1.000      | -            | -                | -                | -         |     1.15 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |      746 | 2024-05-01 | Case           | W   | 1.000      | 0.450        | -                | 0.693 (0.312)    | -         |     2.90 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |      748 | 2024-05-01 | Case           | W   | 1.000      | 0.450        | -                | 0.693 (0.312)    | -         |     2.99 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1016 | 2024-04-19 | OG             | L   | 0.935      | -            | -                | -                | -         |   -14.65 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1067 | 2024-04-18 | Imperial       | L   | 0.927      | -            | -                | -                | -         |    -6.96 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1076 | 2024-04-18 | FURIA          | W   | 0.926      | 0.589        | 0.138 (0.075)    | -                | 1 (0.926) |    17.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     1396 | 2024-04-08 | HEROIC         | L   | 0.857      | -            | -                | -                | -         |    -2.74 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     1405 | 2024-04-07 | G2             | L   | 0.855      | -            | -                | -                | -         |    -1.34 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     2364 | 2024-02-23 | FURIA          | W   | 0.561      | -            | -                | -                | -         |    10.94 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     2367 | 2024-02-23 | BESTIA         | W   | 0.560      | -            | -                | -                | -         |     3.26 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     2377 | 2024-02-22 | FURIA          | L   | 0.554      | -            | -                | -                | -         |    -6.66 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     2384 | 2024-02-22 | BESTIA         | W   | 0.553      | -            | -                | -                | -         |     2.97 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     2430 | 2024-02-20 | Solid          | W   | 0.541      | -            | -                | -                | -         |     1.87 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     2432 | 2024-02-20 | Case           | W   | 0.540      | -            | -                | -                | -         |     1.96 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     2436 | 2024-02-20 | Salao do Corte | W   | 0.540      | -            | -                | -                | -         |     0.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     2488 | 2024-02-18 | LA RUGONETA    | L   | 0.525      | -            | -                | -                | -         |   -16.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     2529 | 2024-02-16 | Fluxo          | L   | 0.513      | -            | -                | -                | -         |   -13.32 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     2554 | 2024-02-15 | Imperial       | L   | 0.507      | -            | -                | -                | -         |    -3.22 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     2557 | 2024-02-15 | Case           | W   | 0.507      | -            | -                | -                | -         |     1.53 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     2560 | 2024-02-15 | KRÜ            | W   | 0.506      | -            | -                | -                | -         |     0.83 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     2585 | 2024-02-14 | ex-2GAME       | W   | 0.501      | -            | -                | -                | -         |     0.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     2649 | 2024-02-12 | LA RUGONETA    | W   | 0.486      | -            | -                | -                | -         |     0.25 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     2732 | 2024-02-04 | Imperial       | L   | 0.433      | -            | -                | -                | -         |    -2.63 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     2752 | 2024-02-03 | W7M            | W   | 0.428      | -            | -                | -                | -         |     0.90 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     2785 | 2024-02-02 | Imperial       | W   | 0.421      | 0.143        | 0.373 (0.022)    | -                | -         |    10.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     2790 | 2024-02-02 | ODDIK          | W   | 0.420      | -            | -                | -                | -         |     1.97 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     2951 | 2024-01-24 | Imperial       | L   | 0.361      | -            | -                | -                | -         |    -2.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     2969 | 2024-01-23 | Fluxo          | W   | 0.354      | -            | -                | -                | -         |     1.82 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     2992 | 2024-01-22 | Galorys        | W   | 0.347      | -            | -                | -                | -         |     0.89 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     3018 | 2024-01-21 | RED Canids     | L   | 0.342      | -            | -                | -                | -         |    -8.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     3021 | 2024-01-21 | W7M            | W   | 0.341      | -            | -                | -                | -         |     0.63 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3028 | 2024-01-21 | Sharks         | W   | 0.339      | -            | -                | -                | -         |     1.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     3063 | 2024-01-20 | ODDIK          | L   | 0.333      | -            | -                | -                | -         |    -9.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     3100 | 2024-01-19 | adalYamigos    | W   | 0.328      | -            | -                | -                | -         |     0.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     3112 | 2024-01-19 | Legacy         | L   | 0.327      | -            | -                | -                | -         |    -8.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     3162 | 2024-01-18 | MIBR           | W   | 0.321      | 0.143        | 0.308 (0.014)    | -                | -         |     8.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     3211 | 2024-01-17 | MIBR           | W   | 0.314      | 0.143        | 0.308 (0.014)    | -                | -         |     8.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     3229 | 2024-01-17 | RED Canids     | W   | 0.313      | -            | -                | -                | -         |     1.86 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,290.45)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-19 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-04-20 |      0.940 | $5,000.00      | $4,701.51       |
| 2024-04-14 |      0.897 | $4,000.00      | $3,588.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
