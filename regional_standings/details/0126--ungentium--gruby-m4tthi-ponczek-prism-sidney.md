### Roster Details<br />
Team Name: UNGENTIUM<br />
Roster: GruBy, m4tthi, ponczek, Prism, Sidney<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [126](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  746.1<br />
<br />
Final Rank Value (746.1) = Starting Rank Value (828.5) + Head To Head Adjustments (-82.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.352[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.5
- 400 + ( ( 0.209 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 828.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |       58 | 2023-02-10 | FTW                  | L   | 1.000      | -            | -                | -                | -         |   -13.98 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           48 |       90 | 2023-02-08 | Illuminar            | L   | 1.000      | -            | -                | -                | -         |    -6.36 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           47 |      100 | 2023-02-07 | Young Ninjas         | L   | 1.000      | -            | -                | -                | -         |    -9.79 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           46 |      109 | 2023-02-07 | VOYVODA              | L   | 1.000      | -            | -                | -                | -         |   -20.37 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           45 |      141 | 2023-02-05 | JANO                 | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.307 (0.044)    | 0 (0.000) |    11.82 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           44 |      221 | 2023-02-02 | ENCE Academy         | W   | 1.000      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |    11.04 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           43 |      276 | 2023-01-31 | Eternal Fire Academy | L   | 1.000      | -            | -                | -                | -         |   -24.09 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           42 |      306 | 2023-01-29 | MASONIC              | L   | 1.000      | -            | -                | -                | -         |   -14.29 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           41 |      443 | 2023-01-25 | Young Ninjas         | W   | 1.000      | 0.477        | 0.076 (0.036)    | 0.694 (0.331)    | 0 (0.000) |    22.69 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           40 |      483 | 2023-01-24 | IKLA                 | L   | 1.000      | -            | -                | -                | -         |    -9.90 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           39 |      501 | 2023-01-23 | MOUZ NXT             | L   | 1.000      | -            | -                | -                | -         |   -16.45 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           38 |      551 | 2023-01-21 | Into the Bin         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.93 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           37 |      590 | 2023-01-19 | MASONIC              | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.752 (0.107)    | 0 (0.000) |    17.61 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           36 |      603 | 2023-01-19 | undefined            | W   | 1.000      | 0.143        | -                | 0.259 (0.037)    | 0 (0.000) |    14.47 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           35 |      620 | 2023-01-18 | ECSTATIC             | L   | 1.000      | -            | -                | -                | -         |   -13.42 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           34 |      673 | 2023-01-16 | Nemiga               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.57 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           33 |      721 | 2023-01-12 | ECSTATIC             | L   | 0.991      | -            | -                | -                | -         |   -13.31 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           32 |      770 | 2022-12-18 | LDLC                 | L   | 0.827      | -            | -                | -                | -         |   -14.16 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           31 |      787 | 2022-12-18 | ex-Into the Breach   | L   | 0.826      | -            | -                | -                | -         |   -10.49 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           30 |      838 | 2022-12-16 | EYEBALLERS           | W   | 0.813      | 0.143        | 0.017 (0.002)    | 0.776 (0.090)    | 0 (0.000) |    15.40 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           29 |     1210 | 2022-12-03 | Illuminar            | L   | 0.727      | -            | -                | -                | -         |    -5.81 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           28 |     1472 | 2022-11-24 | PACT                 | W   | 0.667      | 0.417        | 0.016 (0.004)    | 0.188 (0.052)    | 1 (0.667) |     9.73 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           27 |     1513 | 2022-11-22 | Permitta             | L   | 0.653      | -            | -                | -                | -         |    -8.28 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           26 |     1598 | 2022-11-17 | K23                  | L   | 0.618      | -            | -                | -                | -         |    -7.09 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           25 |     1637 | 2022-11-15 | Sangal               | W   | 0.607      | 0.435        | 0.017 (0.004)    | 0.684 (0.180)    | 0 (0.000) |    13.16 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           24 |     1819 | 2022-10-28 | FTW                  | W   | 0.487      | 0.435        | 0.026 (0.006)    | 0.300 (0.063)    | -         |     9.35 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           23 |     1834 | 2022-10-28 | Nexus                | L   | 0.484      | -            | -                | -                | -         |    -9.31 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           22 |     1840 | 2022-10-27 | SINNERS              | L   | 0.480      | -            | -                | -                | -         |    -4.14 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           21 |     1885 | 2022-10-25 | Sprout               | L   | 0.466      | -            | -                | -                | -         |    -2.10 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           20 |     1902 | 2022-10-24 | ex-Into the Breach   | W   | 0.460      | 0.435        | -                | 0.520 (0.104)    | -         |     7.97 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           19 |     1971 | 2022-10-22 | Rapid Ninjas         | W   | 0.444      | 0.435        | -                | 0.180 (0.035)    | -         |     3.28 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           18 |     2020 | 2022-10-20 | Tricked              | L   | 0.432      | -            | -                | -                | -         |    -3.44 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           17 |     2060 | 2022-10-18 | Aurora               | W   | 0.420      | -            | -                | -                | -         |     4.79 | byali, GruBy, m4tthi, Prism, Sidney   |
|           16 |     2159 | 2022-10-15 | ECSTATIC             | L   | 0.397      | -            | -                | -                | -         |    -5.09 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           15 |     2175 | 2022-10-14 | AGO                  | L   | 0.393      | -            | -                | -                | -         |    -6.58 | GruBy, Luz, m4tthi, Prism, Sidney     |
|           14 |     2208 | 2022-10-13 | ECLOT                | W   | 0.387      | 0.143        | 0.046 (0.003)    | -                | -         |     8.98 | GruBy, Luz, m4tthi, Prism, Sidney     |
|           13 |     2226 | 2022-10-13 | HAVU                 | L   | 0.385      | -            | -                | -                | -         |    -3.68 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           12 |     2247 | 2022-10-12 | Aurora               | L   | 0.380      | -            | -                | -                | -         |    -7.78 | GruBy, Luz, m4tthi, Prism, Sidney     |
|           11 |     2286 | 2022-10-11 | 500                  | L   | 0.371      | -            | -                | -                | -         |    -2.45 | GruBy, m4tthi, ponczek, Prism, Sidney |
|           10 |     2630 | 2022-09-25 | DOGS                 | L   | 0.266      | -            | -                | -                | -         |    -6.04 | GruBy, m4tthi, ponczek, Prism, Sidney |
|            9 |     3024 | 2022-09-13 | ECSTATIC             | L   | 0.187      | -            | -                | -                | -         |    -2.45 | byali, GruBy, m4tthi, Prism, Sidney   |
|            8 |     3049 | 2022-09-12 | Anonymo              | L   | 0.179      | -            | -                | -                | -         |    -4.51 | byali, GruBy, m4tthi, Prism, Sidney   |
|            7 |     3090 | 2022-09-11 | HONORIS              | L   | 0.171      | -            | -                | -                | -         |    -2.38 | byali, GruBy, m4tthi, Prism, Sidney   |
|            6 |     3144 | 2022-09-10 | PACT                 | L   | 0.166      | -            | -                | -                | -         |    -3.01 | byali, GruBy, m4tthi, Prism, Sidney   |
|            5 |     3149 | 2022-09-10 | Illuminar            | W   | 0.165      | 0.143        | 0.048 (0.001)    | -                | -         |     3.89 | byali, GruBy, m4tthi, Prism, Sidney   |
|            4 |     3213 | 2022-09-08 | 500                  | L   | 0.154      | -            | -                | -                | -         |    -0.97 | byali, GruBy, m4tthi, Prism, Sidney   |
|            3 |     3237 | 2022-09-07 | Bad News Eagles      | L   | 0.146      | -            | -                | -                | -         |    -0.69 | byali, GruBy, m4tthi, Prism, Sidney   |
|            2 |     3677 | 2022-08-21 | forZe                | L   | 0.033      | -            | -                | -                | -         |    -0.31 | byali, GruBy, m4tthi, Prism, Sidney   |
|            1 |     3690 | 2022-08-21 | ECSTATIC             | W   | 0.033      | -            | -                | -                | -         |     0.59 | byali, GruBy, m4tthi, Prism, Sidney   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,878.13)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-03 |      0.727 | $7,737.00      | $5,624.25       |
| 2022-11-18 |      0.627 | $2,000.00      | $1,253.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
