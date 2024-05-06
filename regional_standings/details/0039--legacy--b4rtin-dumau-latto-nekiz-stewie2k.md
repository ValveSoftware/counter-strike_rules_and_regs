### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, Stewie2K<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1111.5<br />
<br />
Final Rank Value (1111.5) = Starting Rank Value (1043.9) + Head To Head Adjustments (67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.455[<sup>2</sup>](#table1)

The average of these factors is 0.338<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1043.9
- 400 + ( ( 0.338 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1043.9


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
|           37 |      371 | 2024-04-19 | M80           | L   | 1.000      | -            | -                | -                | -         |   -15.34 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           36 |      411 | 2024-04-18 | Elevate       | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.361 (0.052)    | 0 (0.000) |     7.04 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           35 |      418 | 2024-04-18 | Liquid        | L   | 1.000      | -            | -                | -                | -         |    -5.45 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           34 |     1128 | 2024-03-20 | TheMongolz    | L   | 0.885      | -            | -                | -                | -         |    -4.32 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           33 |     1143 | 2024-03-19 | Apeks         | W   | 0.879      | 0.143        | 0.237 (0.030)    | 0.667 (0.084)    | 1 (0.879) |    21.24 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           32 |     1154 | 2024-03-18 | GamerLegion   | L   | 0.872      | -            | -                | -                | -         |    -3.71 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           31 |     1167 | 2024-03-17 | Cloud9        | L   | 0.867      | -            | -                | -                | -         |    -1.56 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           30 |     1177 | 2024-03-17 | FURIA         | W   | 0.866      | 0.143        | 0.371 (0.046)    | 0.484 (0.060)    | 1 (0.866) |    24.55 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           29 |     1510 | 2024-03-04 | M80           | W   | 0.780      | 0.143        | 0.149 (0.017)    | 0.505 (0.056)    | 1 (0.780) |    17.54 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           28 |     1523 | 2024-03-03 | MIBR          | W   | 0.774      | 0.143        | 0.638 (0.071)    | 0.940 (0.104)    | 1 (0.774) |    23.25 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           27 |     1553 | 2024-03-02 | Nouns         | W   | 0.768      | 0.143        | -                | 0.609 (0.067)    | 1 (0.768) |     3.90 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           26 |     1575 | 2024-03-01 | paiN          | L   | 0.761      | -            | -                | -                | -         |    -0.66 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           25 |     2343 | 2024-01-22 | Sharks        | L   | 0.501      | -            | -                | -                | -         |   -10.94 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           24 |     2405 | 2024-01-20 | RED Canids    | W   | 0.488      | 0.143        | 0.105 (0.007)    | 0.808 (0.056)    | 0 (0.000) |     6.32 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           23 |     2455 | 2024-01-19 | paiN          | W   | 0.481      | 0.143        | 0.786 (0.054)    | 0.869 (0.060)    | 0 (0.000) |    14.88 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           22 |     2461 | 2024-01-19 | 9z            | W   | 0.481      | 0.143        | 0.056 (0.004)    | 0.520 (0.036)    | 0 (0.000) |     6.08 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           21 |     2610 | 2024-01-16 | RED Canids    | L   | 0.462      | -            | -                | -                | -         |    -8.23 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           20 |     2621 | 2024-01-16 | W7M           | W   | 0.461      | -            | -                | -                | 0 (0.000) |     3.36 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           19 |     2623 | 2024-01-16 | Imperial      | W   | 0.461      | 0.143        | 0.656 (0.043)    | 0.965 (0.064)    | -         |    14.22 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           18 |     2662 | 2024-01-15 | Galorys       | W   | 0.455      | 0.143        | 0.047 (0.003)    | -                | -         |     4.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           17 |     2703 | 2024-01-14 | RED Canids    | L   | 0.447      | -            | -                | -                | -         |    -7.99 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           16 |     2722 | 2024-01-13 | inSanitY      | W   | 0.441      | -            | -                | -                | -         |     0.43 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           15 |     2852 | 2024-01-09 | Flamengo      | L   | 0.415      | -            | -                | -                | -         |   -12.23 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           14 |     2856 | 2024-01-09 | W7M           | W   | 0.415      | -            | -                | -                | -         |     3.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           13 |     2866 | 2024-01-09 | blockkstar    | W   | 0.414      | -            | -                | -                | -         |     0.72 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     2870 | 2024-01-09 | adalYamigos   | W   | 0.413      | -            | -                | -                | -         |     1.47 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     3266 | 2023-12-02 | RED Canids    | L   | 0.160      | -            | -                | -                | -         |    -2.97 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     3290 | 2023-12-01 | TSM           | L   | 0.152      | -            | -                | -                | -         |    -4.18 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     3299 | 2023-11-30 | 9 Pandas      | L   | 0.147      | -            | -                | -                | -         |    -1.82 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3336 | 2023-11-27 | Zero Tenacity | L   | 0.125      | -            | -                | -                | -         |    -2.45 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3347 | 2023-11-26 | SAW           | L   | 0.119      | -            | -                | -                | -         |    -0.38 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     3554 | 2023-11-16 | 9 Pandas      | L   | 0.053      | -            | -                | -                | -         |    -0.68 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     3573 | 2023-11-16 | SINNERS       | L   | 0.051      | -            | -                | -                | -         |    -0.78 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     3624 | 2023-11-14 | Endpoint      | W   | 0.040      | -            | -                | -                | -         |     0.38 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     3646 | 2023-11-13 | 9 Pandas      | L   | 0.032      | -            | -                | -                | -         |    -0.42 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     3674 | 2023-11-12 | Endpoint      | L   | 0.025      | -            | -                | -                | -         |    -0.56 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     3678 | 2023-11-12 | Guild Eagles  | L   | 0.025      | -            | -                | -                | -         |    -0.42 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,865.38)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
