### Roster Details<br />
Team Name: HONORIS<br />
Roster: lunAtic, reiko, SaMey, Sobol, TaZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [80](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  864.5<br />
<br />
Final Rank Value (864.5) = Starting Rank Value (866.0) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.200[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.0
- 400 + ( ( 0.228 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 866.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |        5 | 2023-02-12 | Mixfits                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.23 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           66 |       28 | 2023-02-11 | Illuminar              | L   | 1.000      | -            | -                | -                | -         |    -9.99 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           65 |       52 | 2023-02-10 | BIG                    | L   | 1.000      | -            | -                | -                | -         |    -2.09 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           64 |       62 | 2023-02-09 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |    -7.16 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           63 |       70 | 2023-02-09 | EYEBALLERS             | L   | 1.000      | -            | -                | -                | -         |   -13.32 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           62 |       77 | 2023-02-08 | HEET                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.18 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           61 |       83 | 2023-02-08 | ENCE                   | W   | 1.000      | 0.143        | 0.108 (0.015)    | -                | 0 (0.000) |    28.56 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           60 |      106 | 2023-02-07 | los kogutos            | W   | 1.000      | 0.435        | -                | 0.364 (0.158)    | 0 (0.000) |    12.81 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           59 |      142 | 2023-02-05 | HEET                   | L   | 1.000      | -            | -                | -                | -         |   -16.74 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           58 |      236 | 2023-02-01 | MASONIC                | L   | 1.000      | -            | -                | -                | -         |   -15.96 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           57 |      257 | 2023-01-31 | VOYVODA                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.99 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           56 |      265 | 2023-01-31 | Falcons                | W   | 1.000      | 0.143        | -                | 0.767 (0.110)    | 0 (0.000) |    22.24 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           55 |      271 | 2023-01-31 | Lazer Cats             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.10 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           54 |      318 | 2023-01-29 | GenOne                 | L   | 1.000      | -            | -                | -                | -         |    -8.88 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           53 |      391 | 2023-01-27 | BLUEJAYS               | L   | 1.000      | -            | -                | -                | -         |   -26.89 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           52 |      407 | 2023-01-26 | SINNERS                | L   | 1.000      | -            | -                | -                | -         |   -12.51 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           51 |      487 | 2023-01-23 | Nexus                  | L   | 1.000      | -            | -                | -                | -         |   -18.18 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           50 |      520 | 2023-01-22 | ALTERNATE aTTaX        | L   | 1.000      | -            | -                | -                | -         |   -20.22 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           49 |      558 | 2023-01-21 | TENSTAR                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.95 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           48 |      578 | 2023-01-20 | 500                    | W   | 1.000      | 0.477        | 0.085 (0.041)    | 0.760 (0.362)    | 0 (0.000) |    22.51 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           47 |      598 | 2023-01-19 | MASONIC                | W   | 1.000      | 0.477        | 0.021 (0.010)    | 0.752 (0.359)    | 0 (0.000) |    14.69 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           46 |      618 | 2023-01-18 | PROSPECTS              | L   | 1.000      | -            | -                | -                | -         |   -14.30 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           45 |      652 | 2023-01-17 | Apeks                  | L   | 1.000      | -            | -                | -                | -         |    -9.14 | lunAtic, reiko, SaMey, Sobol, TaZ     |
|           44 |      693 | 2023-01-15 | TENSTAR                | W   | 1.000      | -            | -                | -                | -         |     4.11 | discoStar, lunAtic, reiko, SaMey, TaZ |
|           43 |      840 | 2022-12-16 | 1WIN                   | L   | 0.813      | -            | -                | -                | -         |   -12.68 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           42 |     1011 | 2022-12-09 | Iron Branch            | L   | 0.767      | -            | -                | -                | -         |   -18.47 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           41 |     1031 | 2022-12-08 | los kogutos            | L   | 0.761      | -            | -                | -                | -         |   -17.14 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           40 |     1040 | 2022-12-08 | ECLOT                  | W   | 0.760      | 0.435        | 0.046 (0.015)    | 0.584 (0.193)    | -         |    12.58 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           39 |     1062 | 2022-12-07 | GenOne                 | W   | 0.754      | 0.371        | 0.300 (0.084)    | 0.400 (0.112)    | -         |    15.96 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           38 |     1101 | 2022-12-06 | ALTERNATE aTTaX        | L   | 0.748      | -            | -                | -                | -         |   -15.29 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           37 |     1117 | 2022-12-06 | MASONIC                | W   | 0.746      | 0.435        | -                | 0.752 (0.244)    | -         |    10.86 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           36 |     1192 | 2022-12-04 | eSuba                  | W   | 0.731      | 0.435        | 0.028 (0.009)    | -                | -         |    11.33 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           35 |     1251 | 2022-12-02 | PROSPECTS              | L   | 0.720      | -            | -                | -                | -         |    -9.73 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           34 |     1310 | 2022-11-30 | Sangal                 | W   | 0.705      | 0.435        | -                | 0.684 (0.210)    | -         |    11.28 | darko, Grashog, reiko, SaMey, TaZ     |
|           33 |     1357 | 2022-11-28 | 500                    | L   | 0.693      | -            | -                | -                | -         |    -5.56 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           32 |     1582 | 2022-11-17 | Endpoint               | L   | 0.620      | -            | -                | -                | -         |    -9.69 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           31 |     1616 | 2022-11-16 | Eternal Fire           | W   | 0.613      | 0.435        | 0.034 (0.009)    | 0.496 (0.132)    | -         |    10.07 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           30 |     1638 | 2022-11-15 | 9INE                   | L   | 0.606      | -            | -                | -                | -         |    -8.77 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           29 |     1658 | 2022-11-11 | Websterz               | W   | 0.579      | -            | -                | -                | -         |     8.30 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           28 |     1659 | 2022-11-11 | ex-Finest              | W   | 0.579      | -            | -                | -                | -         |     8.35 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           27 |     1663 | 2022-11-10 | Websterz               | L   | 0.572      | -            | -                | -                | -         |    -9.52 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           26 |     1792 | 2022-10-30 | Invictus International | W   | 0.500      | -            | -                | -                | -         |     4.29 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           25 |     1798 | 2022-10-30 | los kogutos            | W   | 0.499      | -            | -                | -                | -         |     5.62 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           24 |     1832 | 2022-10-28 | ECLOT                  | W   | 0.485      | 0.435        | 0.046 (0.010)    | 0.584 (0.123)    | -         |     9.28 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           23 |     1864 | 2022-10-26 | ex-Into the Breach     | W   | 0.473      | -            | -                | -                | -         |     6.30 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           22 |     1893 | 2022-10-25 | SINNERS                | L   | 0.465      | -            | -                | -                | -         |    -5.49 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           21 |     1933 | 2022-10-23 | IKLA                   | L   | 0.452      | -            | -                | -                | -         |    -6.43 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           20 |     1982 | 2022-10-21 | Enterprise             | W   | 0.440      | 0.435        | 0.042 (0.008)    | -                | -         |     6.79 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           19 |     2115 | 2022-10-16 | GenOne                 | L   | 0.406      | -            | -                | -                | -         |    -2.70 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           18 |     2230 | 2022-10-13 | Cryptova               | W   | 0.385      | -            | -                | -                | -         |     3.29 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           17 |     2277 | 2022-10-11 | eSuba                  | W   | 0.373      | -            | -                | -                | -         |     6.64 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           16 |     2283 | 2022-10-11 | Nigma Galaxy           | W   | 0.372      | 0.143        | 0.178 (0.009)    | -                | -         |    10.38 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           15 |     2489 | 2022-09-30 | Endpoint               | L   | 0.300      | -            | -                | -                | -         |    -4.41 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           14 |     2517 | 2022-09-29 | 9z                     | W   | 0.293      | -            | -                | -                | -         |     4.90 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           13 |     2627 | 2022-09-25 | Enterprise             | W   | 0.266      | -            | -                | -                | -         |     4.45 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           12 |     2659 | 2022-09-24 | K23                    | L   | 0.259      | -            | -                | -                | -         |    -6.79 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           11 |     2750 | 2022-09-22 | LF0                    | L   | 0.246      | -            | -                | -                | -         |    -6.91 | Grashog, reiko, SaMey, Sobol, TaZ     |
|           10 |     2757 | 2022-09-22 | Apeks                  | W   | 0.245      | -            | -                | -                | -         |     4.47 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            9 |     2812 | 2022-09-20 | EC Brugge              | L   | 0.233      | -            | -                | -                | -         |    -4.39 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            8 |     2818 | 2022-09-20 | BLUEJAYS               | L   | 0.231      | -            | -                | -                | -         |    -1.72 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            7 |     2890 | 2022-09-17 | 500                    | W   | 0.212      | -            | -                | -                | -         |     4.98 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            6 |     2956 | 2022-09-15 | ECLOT                  | W   | 0.199      | -            | -                | -                | -         |     4.33 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            5 |     3045 | 2022-09-12 | Anonymo                | W   | 0.180      | -            | -                | -                | -         |     0.94 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            4 |     3069 | 2022-09-11 | Believe                | L   | 0.174      | -            | -                | -                | -         |    -3.53 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            3 |     3083 | 2022-09-11 | BLUEJAYS               | W   | 0.172      | -            | -                | -                | -         |     4.21 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            2 |     3090 | 2022-09-11 | UNGENTIUM              | W   | 0.171      | -            | -                | -                | -         |     2.38 | Grashog, reiko, SaMey, Sobol, TaZ     |
|            1 |     3118 | 2022-09-10 | Illuminar              | W   | 0.167      | -            | -                | -                | -         |     3.70 | Grashog, reiko, SaMey, Sobol, TaZ     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,100.27)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-05 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-04 |      0.732 | $1,000.00      | $732.08         |
| 2022-11-18 |      0.627 | $2,000.00      | $1,253.88       |
| 2022-10-30 |      0.500 | $3,000.00      | $1,499.79       |
| 2022-10-01 |      0.307 | $2,000.00      | $614.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
