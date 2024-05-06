### Roster Details<br />
Team Name: Galorys<br />
Roster: detr0ittJ, happ, hoax, koala, ninjaZ<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  834.9<br />
<br />
Final Rank Value (834.9) = Starting Rank Value (880.7) + Head To Head Adjustments (-45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.193[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 880.7
- 400 + ( ( 0.252 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 880.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       24 | 2024-05-05 | W7M          | L   | 1.000      | -            | -                | -                | -         |   -18.25 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           55 |      330 | 2024-04-20 | Solid        | W   | 1.000      | 0.450        | 0.132 (0.060)    | 0.503 (0.227)    | 0 (0.000) |    15.81 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           54 |      332 | 2024-04-20 | Solid        | L   | 1.000      | -            | -                | -                | -         |   -15.69 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           53 |      508 | 2024-04-16 | Case         | L   | 1.000      | -            | -                | -                | -         |   -16.80 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           52 |      545 | 2024-04-14 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -0.52 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           51 |      564 | 2024-04-13 | Fluxo        | W   | 1.000      | 0.435        | 0.148 (0.064)    | 0.569 (0.247)    | 0 (0.000) |    24.75 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           50 |      573 | 2024-04-12 | Sharks       | W   | 1.000      | 0.435        | 0.060 (0.026)    | 0.453 (0.197)    | 0 (0.000) |    20.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           49 |      591 | 2024-04-11 | Vikings KR   | L   | 1.000      | -            | -                | -                | -         |   -21.70 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           48 |      600 | 2024-04-11 | BESTIA       | W   | 1.000      | 0.435        | 0.025 (0.011)    | 0.389 (0.169)    | 0 (0.000) |    15.15 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           47 |      631 | 2024-04-10 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -0.47 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           46 |      632 | 2024-04-10 | MIBR         | L   | 1.000      | -            | -                | -                | -         |    -0.47 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           45 |      682 | 2024-04-09 | BESTIA       | W   | 1.000      | 0.450        | 0.025 (0.011)    | 0.389 (0.175)    | 0 (0.000) |    16.51 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           44 |      687 | 2024-04-09 | BESTIA       | L   | 1.000      | -            | -                | -                | -         |   -14.92 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           43 |      760 | 2024-04-07 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.30 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           42 |      991 | 2024-03-27 | Fluxo        | W   | 0.935      | 0.450        | 0.148 (0.062)    | 0.569 (0.239)    | 0 (0.000) |    23.09 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           41 |      997 | 2024-03-27 | Fluxo        | L   | 0.935      | -            | -                | -                | -         |    -5.96 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           40 |     1037 | 2024-03-26 | 2GAME        | W   | 0.928      | -            | -                | -                | 0 (0.000) |     8.21 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           39 |     1039 | 2024-03-26 | 2GAME        | W   | 0.928      | -            | -                | -                | 0 (0.000) |     8.78 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           38 |     1233 | 2024-03-14 | W7M          | W   | 0.848      | 0.450        | 0.009 (0.003)    | 0.476 (0.182)    | 0 (0.000) |    13.21 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           37 |     1236 | 2024-03-14 | W7M          | W   | 0.848      | 0.450        | -                | 0.476 (0.181)    | 0 (0.000) |    14.24 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           36 |     1279 | 2024-03-13 | RED Canids   | L   | 0.840      | -            | -                | -                | -         |    -5.84 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           35 |     1322 | 2024-03-11 | LA RUGONETA  | L   | 0.828      | -            | -                | -                | -         |   -19.60 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           34 |     1344 | 2024-03-10 | MIBR         | L   | 0.821      | -            | -                | -                | -         |    -0.31 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           33 |     1402 | 2024-03-08 | ODDIK        | W   | 0.806      | 0.435        | 0.015 (0.005)    | 0.547 (0.192)    | -         |    18.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           32 |     1682 | 2024-02-24 | Sharks       | L   | 0.721      | -            | -                | -                | -         |    -6.77 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           31 |     1693 | 2024-02-24 | Sharks       | L   | 0.721      | -            | -                | -                | -         |    -7.15 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           30 |     1714 | 2024-02-23 | Corinthians  | L   | 0.715      | -            | -                | -                | -         |   -16.78 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           29 |     1715 | 2024-02-23 | Corinthians  | W   | 0.714      | -            | -                | -                | -         |     5.62 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           28 |     1732 | 2024-02-22 | MIBR Academy | W   | 0.707      | -            | -                | -                | -         |     6.21 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           27 |     1747 | 2024-02-21 | adalYamigos  | L   | 0.701      | -            | -                | -                | -         |   -12.71 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           26 |     1751 | 2024-02-21 | adalYamigos  | L   | 0.701      | -            | -                | -                | -         |   -13.50 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           25 |     1754 | 2024-02-21 | Sharks       | L   | 0.700      | -            | -                | -                | -         |    -8.38 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           24 |     1826 | 2024-02-18 | Sharks       | L   | 0.682      | -            | -                | -                | -         |    -8.61 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           23 |     1828 | 2024-02-18 | Case         | W   | 0.681      | 0.303        | 0.026 (0.005)    | 0.578 (0.119)    | -         |    12.29 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           22 |     1852 | 2024-02-17 | Sharks       | W   | 0.674      | 0.303        | 0.060 (0.012)    | -                | -         |    13.77 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           21 |     1855 | 2024-02-17 | Corinthians  | W   | 0.673      | -            | -                | -                | -         |     5.37 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           20 |     1877 | 2024-02-16 | Flamengo     | W   | 0.668      | -            | -                | -                | -         |     3.38 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           19 |     1883 | 2024-02-16 | Imperial     | L   | 0.666      | -            | -                | -                | -         |    -0.17 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           18 |     1886 | 2024-02-16 | Imperial     | L   | 0.666      | -            | -                | -                | -         |    -0.17 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           17 |     1911 | 2024-02-15 | 9z Academy   | W   | 0.660      | -            | -                | -                | -         |     1.89 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           16 |     1938 | 2024-02-14 | Solid        | L   | 0.655      | -            | -                | -                | -         |    -9.19 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           15 |     1951 | 2024-02-14 | Sharks       | L   | 0.653      | -            | -                | -                | -         |    -6.70 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           14 |     1987 | 2024-02-13 | Case         | L   | 0.647      | -            | -                | -                | -         |    -9.44 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           13 |     1997 | 2024-02-12 | inSanitY     | W   | 0.641      | -            | -                | -                | -         |     1.74 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           12 |     2341 | 2024-01-22 | 9z           | L   | 0.502      | -            | -                | -                | -         |    -5.25 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           11 |     2403 | 2024-01-20 | Flamengo     | L   | 0.488      | -            | -                | -                | -         |   -12.71 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|           10 |     2452 | 2024-01-19 | Sharks       | L   | 0.482      | -            | -                | -                | -         |    -6.36 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            9 |     2465 | 2024-01-19 | Imperial     | L   | 0.480      | -            | -                | -                | -         |    -0.13 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            8 |     2662 | 2024-01-15 | Legacy       | L   | 0.455      | -            | -                | -                | -         |    -4.12 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            7 |     2718 | 2024-01-13 | Sharks       | L   | 0.441      | -            | -                | -                | -         |    -6.50 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            6 |     2796 | 2024-01-11 | adalYamigos  | L   | 0.428      | -            | -                | -                | -         |   -10.10 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            5 |     2797 | 2024-01-11 | Case         | W   | 0.428      | -            | -                | -                | -         |     4.26 | detr0ittJ, happ, hoax, koala, ninjaZ     |
|            4 |     2799 | 2024-01-11 | inSanitY     | W   | 0.428      | -            | -                | -                | -         |     0.96 | antonini, iDk, Maluk3, pesadelo, prt     |
|            3 |     2813 | 2024-01-11 | Vex Dragons  | W   | 0.427      | -            | -                | -                | -         |     0.92 | duzzy, mrcn, pac, spider, Tineu          |
|            2 |     2871 | 2024-01-09 | blockkstar   | L   | 0.413      | -            | -                | -                | -         |   -11.48 | Demonos, drummond, fREQ, proSHOW, suNday |
|            1 |     3295 | 2023-11-30 | adalYamigos  | L   | 0.148      | -            | -                | -                | -         |    -3.63 | detr0ittJ, happ, hoax, koala, ninjaZ     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,644.74)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-11 |      1.000 | $592.00        | $592.00         |
| 2024-02-22 |      0.707 | $1,417.00      | $1,002.44       |
| 2024-02-21 |      0.700 | $1,500.00      | $1,050.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
