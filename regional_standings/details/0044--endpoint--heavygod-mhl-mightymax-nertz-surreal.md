### Roster Details<br />
Team Name: Endpoint<br />
Roster: HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  963.5<br />
<br />
Final Rank Value (963.5) = Starting Rank Value (895.4) + Head To Head Adjustments (68.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.403[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.4
- 400 + ( ( 0.242 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 895.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       56 | 2023-02-10 | los kogutos            | W   | 1.000      | 0.435        | -                | 0.364 (0.158)    | 0 (0.000) |     7.46 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           46 |       66 | 2023-02-09 | BIG Academy            | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.434 (0.167)    | 0 (0.000) |    13.84 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           45 |       82 | 2023-02-08 | LDLC                   | W   | 1.000      | 0.435        | -                | 0.418 (0.182)    | 0 (0.000) |    10.41 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           44 |      131 | 2023-02-06 | Coalesce               | L   | 1.000      | -            | -                | -                | -         |   -24.03 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           43 |      197 | 2023-02-03 | Aurora                 | L   | 1.000      | -            | -                | -                | -         |   -10.44 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           42 |      544 | 2023-01-21 | forZe                  | L   | 1.000      | -            | -                | -                | -         |   -13.81 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           41 |      567 | 2023-01-20 | Sprout                 | W   | 1.000      | 0.143        | 0.067 (0.010)    | -                | 0 (0.000) |    22.55 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           40 |      588 | 2023-01-19 | 9INE                   | W   | 1.000      | 0.143        | 0.045 (0.006)    | 1.000 (0.143)    | 0 (0.000) |    15.54 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           39 |      611 | 2023-01-18 | Genk                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.79 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           38 |      639 | 2023-01-17 | SAW                    | L   | 1.000      | -            | -                | -                | -         |    -6.98 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           37 |      661 | 2023-01-16 | Case                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.74 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           36 |      907 | 2022-12-13 | 9INE                   | W   | 0.794      | 0.435        | 0.045 (0.016)    | 1.000 (0.345)    | 0 (0.000) |    13.31 | KWERTZZ, mhL, MiGHTYMAX, Nertz, Surreal      |
|           35 |     1008 | 2022-12-09 | PROSPECTS              | L   | 0.768      | -            | -                | -                | -         |   -12.79 | KWERTZZ, mhL, MiGHTYMAX, Nertz, Surreal      |
|           34 |     1103 | 2022-12-06 | ENCE                   | L   | 0.748      | -            | -                | -                | -         |    -2.93 | KWERTZZ, mhL, MiGHTYMAX, Nertz, Surreal      |
|           33 |     1126 | 2022-12-06 | ENCE Academy           | W   | 0.746      | -            | -                | -                | 0 (0.000) |     6.66 | KWERTZZ, mhL, MiGHTYMAX, Nertz, Surreal      |
|           32 |     1142 | 2022-12-05 | SAW                    | W   | 0.740      | 0.435        | 0.093 (0.030)    | 0.642 (0.206)    | -         |    17.43 | KWERTZZ, mhL, MiGHTYMAX, Nertz, Surreal      |
|           31 |     1151 | 2022-12-05 | Nexus                  | L   | 0.738      | -            | -                | -                | -         |   -17.23 | KWERTZZ, mhL, MiGHTYMAX, Nertz, Surreal      |
|           30 |     1164 | 2022-12-04 | Viperio                | W   | 0.734      | -            | -                | -                | -         |     5.46 | mhL, MiGHTYMAX, Nertz, Surreal, Thomas       |
|           29 |     1212 | 2022-12-03 | ex-Into the Breach     | W   | 0.727      | 0.353        | -                | 0.520 (0.134)    | -         |     9.32 | mhL, MiGHTYMAX, Nertz, Surreal, Thomas       |
|           28 |     1224 | 2022-12-03 | Invictus International | L   | 0.726      | -            | -                | -                | -         |   -17.34 | mhL, MiGHTYMAX, Nertz, Surreal, Thomas       |
|           27 |     1330 | 2022-11-29 | FTW                    | L   | 0.700      | -            | -                | -                | -         |   -12.69 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           26 |     1333 | 2022-11-29 | ex-Finest              | W   | 0.700      | -            | -                | -                | -         |    10.50 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           25 |     1351 | 2022-11-28 | Arctic Raptors         | W   | 0.694      | -            | -                | -                | -         |     2.09 | mhL, MiGHTYMAX, Nertz, Surreal, Thomas       |
|           24 |     1387 | 2022-11-27 | MASONIC                | W   | 0.686      | 0.435        | -                | 0.752 (0.224)    | -         |    10.14 | CRUC1AL, HeavyGod, MiGHTYMAX, Nertz, Surreal |
|           23 |     1466 | 2022-11-25 | eSuba                  | W   | 0.671      | 0.435        | 0.028 (0.008)    | -                | -         |    10.42 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           22 |     1574 | 2022-11-18 | ex-Finest              | L   | 0.625      | -            | -                | -                | -         |   -10.50 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           21 |     1582 | 2022-11-17 | HONORIS                | W   | 0.620      | 0.435        | -                | 0.748 (0.201)    | -         |     9.69 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           20 |     1619 | 2022-11-16 | Illuminar              | L   | 0.613      | -            | -                | -                | -         |    -7.40 | HeavyGod, k0nfig, mhL, MiGHTYMAX, Surreal    |
|           19 |     1628 | 2022-11-16 | Tricked                | W   | 0.611      | 0.435        | 0.034 (0.009)    | 0.954 (0.253)    | -         |    11.54 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           18 |     1636 | 2022-11-15 | EPG Family             | W   | 0.607      | 0.435        | 0.025 (0.007)    | -                | -         |     8.08 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           17 |     1919 | 2022-10-24 | SAW                    | L   | 0.457      | -            | -                | -                | -         |    -3.55 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           16 |     1991 | 2022-10-21 | Tricked                | L   | 0.439      | -            | -                | -                | -         |    -5.29 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           15 |     2261 | 2022-10-12 | BLUEJAYS               | W   | 0.378      | 0.384        | 0.102 (0.015)    | -                | -         |     8.69 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           14 |     2471 | 2022-10-01 | OG                     | L   | 0.306      | -            | -                | -                | -         |    -0.28 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           13 |     2489 | 2022-09-30 | HONORIS                | W   | 0.300      | -            | -                | -                | -         |     4.41 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           12 |     2563 | 2022-09-28 | IKLA                   | W   | 0.284      | -            | -                | -                | -         |     4.52 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal     |
|           11 |     2794 | 2022-09-21 | Bad News Eagles        | L   | 0.238      | -            | -                | -                | -         |    -1.47 | HeavyGod, MiGHTYMAX, mwlky, Nertz, Surreal   |
|           10 |     2957 | 2022-09-15 | SKADE X                | W   | 0.199      | -            | -                | -                | -         |     1.32 | Kjaerbye, MiGHTYMAX, mwlky, Nertz, Surreal   |
|            9 |     3285 | 2022-09-04 | fnatic                 | L   | 0.127      | -            | -                | -                | -         |    -0.14 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            8 |     3335 | 2022-09-03 | Ninjas in Pyjamas      | L   | 0.118      | -            | -                | -                | -         |    -2.46 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            7 |     3364 | 2022-09-02 | Natus Vincere          | W   | 0.111      | 0.922        | 0.358 (0.037)    | -                | 1 (0.111) |     3.47 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            6 |     3395 | 2022-09-01 | Spirit                 | L   | 0.105      | -            | -                | -                | -         |    -0.22 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            5 |     3417 | 2022-08-31 | Vitality               | L   | 0.099      | -            | -                | -                | -         |    -0.06 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            4 |     3619 | 2022-08-23 | GRGECHI                | L   | 0.046      | -            | -                | -                | -         |    -1.31 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            3 |     3673 | 2022-08-21 | Monte                  | L   | 0.034      | -            | -                | -                | -         |    -0.49 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            2 |     3681 | 2022-08-21 | 9INE                   | W   | 0.033      | -            | -                | -                | -         |     0.57 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |
|            1 |     3701 | 2022-08-21 | INVSN                  | W   | 0.032      | -            | -                | -                | -         |     0.57 | CRUC1AL, Kjaerbye, MiGHTYMAX, Nertz, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,667.36)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-19 |      0.833 | $1,250.00      | $1,041.40       |
| 2022-12-07 |      0.754 | $2,000.00      | $1,507.48       |
| 2022-12-04 |      0.734 | $6,480.00      | $4,756.22       |
| 2022-11-18 |      0.627 | $5,000.00      | $3,134.69       |
| 2022-10-26 |      0.474 | $500.00        | $236.83         |
| 2022-10-02 |      0.314 | $11,000.00     | $3,454.43       |
| 2022-10-01 |      0.307 | $5,000.00      | $1,536.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
