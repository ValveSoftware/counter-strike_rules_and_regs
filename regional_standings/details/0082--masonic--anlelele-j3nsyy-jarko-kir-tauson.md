### Roster Details<br />
Team Name: MASONIC<br />
Roster: Anlelele, J3nsyy, jarko, kiR, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  858.7<br />
<br />
Final Rank Value (858.7) = Starting Rank Value (911.7) + Head To Head Adjustments (-53.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.090[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 911.7
- 400 + ( ( 0.250 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 911.7


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
|           67 |      157 | 2023-02-05 | 7AM                    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.57 | Anlelele, J3nsyy, jarko, kiR, Tauson  |
|           66 |      192 | 2023-02-03 | Bitfix                 | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.30 | Anlelele, J3nsyy, jarko, kiR, Tauson  |
|           65 |      199 | 2023-02-03 | Falcons                | L   | 1.000      | -            | -                | -                | -         |    -9.34 | Anlelele, J3nsyy, jarko, kiR, Tauson  |
|           64 |      236 | 2023-02-01 | HONORIS                | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.748 (0.356)    | 0 (0.000) |    15.96 | Anlelele, J3nsyy, jarko, kiR, Tauson  |
|           63 |      306 | 2023-01-29 | UNGENTIUM              | W   | 1.000      | 0.477        | 0.015 (0.007)    | 0.474 (0.226)    | 0 (0.000) |    14.29 | Anlelele, J3nsyy, jarko, kiR, Tauson  |
|           62 |      477 | 2023-01-24 | Permitta               | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.387 (0.185)    | 0 (0.000) |    19.51 | Anlelele, J3nsyy, jarko, kiR, Tauson  |
|           61 |      538 | 2023-01-22 | Invictus International | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.74 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           60 |      565 | 2023-01-20 | Websterz               | L   | 1.000      | -            | -                | -                | -         |   -15.16 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           59 |      573 | 2023-01-20 | Nexus                  | L   | 1.000      | -            | -                | -                | -         |   -16.70 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           58 |      590 | 2023-01-19 | UNGENTIUM              | L   | 1.000      | -            | -                | -                | -         |   -17.61 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           57 |      598 | 2023-01-19 | HONORIS                | L   | 1.000      | -            | -                | -                | -         |   -14.69 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           56 |      606 | 2023-01-19 | Nexus                  | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.59 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           55 |      626 | 2023-01-18 | BLUEJAYS               | W   | 1.000      | -            | -                | -                | -         |     4.44 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           54 |      670 | 2023-01-16 | INVSN                  | L   | 1.000      | -            | -                | -                | -         |   -15.74 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           53 |      683 | 2023-01-15 | Partizan               | L   | 1.000      | -            | -                | -                | -         |   -16.29 | Anlelele, J3nsyy, kiR, Tauson, vester |
|           52 |      802 | 2022-12-17 | Astralis Talent        | W   | 0.821      | 0.336        | 0.021 (0.006)    | 0.522 (0.144)    | 1 (0.821) |    14.89 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           51 |      842 | 2022-12-16 | GamerLegion            | L   | 0.812      | -            | -                | -                | -         |    -4.20 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           50 |      863 | 2022-12-15 | ex-Into the Breach     | L   | 0.807      | -            | -                | -                | -         |   -12.05 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           49 |      914 | 2022-12-13 | Flames Ascent          | W   | 0.793      | -            | -                | -                | -         |     4.89 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           48 |      930 | 2022-12-12 | PROSPECTS              | W   | 0.785      | 0.477        | 0.032 (0.012)    | 0.689 (0.258)    | -         |    13.95 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           47 |      952 | 2022-12-11 | los kogutos            | L   | 0.779      | -            | -                | -                | -         |   -14.88 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           46 |      959 | 2022-12-11 | ex-Finest              | W   | 0.779      | 0.435        | -                | 0.357 (0.121)    | -         |    12.62 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           45 |      990 | 2022-12-10 | sYnck                  | L   | 0.772      | -            | -                | -                | -         |   -14.74 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           44 |     1019 | 2022-12-09 | ALTERNATE aTTaX        | L   | 0.765      | -            | -                | -                | -         |   -13.80 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           43 |     1046 | 2022-12-08 | Permitta               | L   | 0.759      | -            | -                | -                | -         |   -11.54 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           42 |     1049 | 2022-12-08 | ex-Into the Breach     | W   | 0.758      | 0.435        | -                | 0.520 (0.171)    | -         |    10.51 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           41 |     1060 | 2022-12-07 | Coalesce               | W   | 0.754      | -            | -                | -                | -         |     6.79 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           40 |     1075 | 2022-12-07 | IKLA                   | L   | 0.753      | -            | -                | -                | -         |    -9.40 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           39 |     1107 | 2022-12-06 | Partizan               | W   | 0.747      | 0.371        | -                | 0.653 (0.181)    | -         |    10.01 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           38 |     1117 | 2022-12-06 | HONORIS                | L   | 0.746      | -            | -                | -                | -         |   -10.86 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           37 |     1146 | 2022-12-05 | Invictus International | W   | 0.739      | -            | -                | -                | -         |     6.75 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           36 |     1172 | 2022-12-04 | Astralis Talent        | L   | 0.733      | -            | -                | -                | -         |   -11.13 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           35 |     1182 | 2022-12-04 | ECSTATIC               | W   | 0.732      | 0.336        | 0.030 (0.007)    | 0.556 (0.137)    | -         |     9.49 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           34 |     1216 | 2022-12-03 | Rombus                 | W   | 0.726      | -            | -                | -                | -         |     1.37 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           33 |     1221 | 2022-12-03 | Nexus                  | W   | 0.726      | -            | -                | -                | -         |     6.90 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           32 |     1313 | 2022-11-30 | Illuminar              | L   | 0.705      | -            | -                | -                | -         |    -7.60 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           31 |     1338 | 2022-11-29 | forZe                  | L   | 0.698      | -            | -                | -                | -         |    -8.52 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           30 |     1387 | 2022-11-27 | Endpoint               | L   | 0.686      | -            | -                | -                | -         |   -10.14 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           29 |     1486 | 2022-11-24 | Tricked                | W   | 0.664      | 0.435        | 0.034 (0.010)    | 0.954 (0.275)    | -         |    12.11 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           28 |     1647 | 2022-11-13 | B8                     | L   | 0.592      | -            | -                | -                | -         |   -15.79 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           27 |     1652 | 2022-11-12 | SINNERS                | L   | 0.585      | -            | -                | -                | -         |    -6.92 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           26 |     1890 | 2022-10-25 | GamerLegion            | L   | 0.466      | -            | -                | -                | -         |    -2.94 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           25 |     1899 | 2022-10-24 | SINNERS                | W   | 0.461      | 0.384        | 0.068 (0.012)    | -                | -         |     8.64 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           24 |     2180 | 2022-10-14 | paiN                   | L   | 0.393      | -            | -                | -                | -         |    -3.61 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           23 |     2532 | 2022-09-29 | BLUEJAYS               | W   | 0.291      | 0.384        | 0.102 (0.011)    | -                | -         |     6.81 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           22 |     2619 | 2022-09-25 | ECSTATIC               | L   | 0.267      | -            | -                | -                | -         |    -4.48 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           21 |     2634 | 2022-09-25 | HAVU                   | W   | 0.265      | -            | -                | -                | -         |     4.85 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           20 |     2693 | 2022-09-23 | LeeK                   | L   | 0.254      | -            | -                | -                | -         |    -7.24 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           19 |     2712 | 2022-09-23 | Lilmix                 | W   | 0.252      | -            | -                | -                | -         |     2.21 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           18 |     2718 | 2022-09-23 | ECSTATIC               | L   | 0.252      | -            | -                | -                | -         |    -4.41 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           17 |     2723 | 2022-09-23 | Lilmix                 | W   | 0.251      | -            | -                | -                | -         |     2.19 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           16 |     2756 | 2022-09-22 | ex-Finest              | W   | 0.245      | -            | -                | -                | -         |     2.00 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           15 |     2806 | 2022-09-20 | Permitta               | L   | 0.233      | -            | -                | -                | -         |    -4.32 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           14 |     2966 | 2022-09-15 | SINNERS                | W   | 0.198      | 0.384        | 0.068 (0.005)    | -                | -         |     4.00 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           13 |     3245 | 2022-09-07 | SKADE X                | W   | 0.144      | -            | -                | -                | -         |     0.86 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           12 |     3284 | 2022-09-04 | SAW                    | W   | 0.127      | -            | -                | -                | -         |     3.06 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           11 |     3353 | 2022-09-02 | Bad News Eagles        | W   | 0.113      | -            | -                | -                | -         |     2.80 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|           10 |     3394 | 2022-09-01 | IKLA                   | L   | 0.105      | -            | -                | -                | -         |    -1.73 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            9 |     3412 | 2022-08-31 | SINNERS                | W   | 0.100      | -            | -                | -                | -         |     2.05 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            8 |     3465 | 2022-08-28 | Beyond Possible        | L   | 0.080      | -            | -                | -                | -         |    -2.26 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            7 |     3536 | 2022-08-27 | Illuminar              | L   | 0.072      | -            | -                | -                | -         |    -0.78 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            6 |     3585 | 2022-08-24 | KOVA                   | W   | 0.054      | -            | -                | -                | -         |     0.27 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            5 |     3593 | 2022-08-24 | Tricked                | W   | 0.052      | -            | -                | -                | -         |     1.02 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            4 |     3655 | 2022-08-22 | 500                    | L   | 0.037      | -            | -                | -                | -         |    -0.33 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            3 |     3712 | 2022-08-20 | Tricked                | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.52 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            2 |     3733 | 2022-08-20 | Flames Ascent          | W   | 0.025      | -            | -                | -                | 1 (0.025) |     0.14 | Anlelele, Buzz, J3nsyy, notaN, Tauson |
|            1 |     3770 | 2022-08-17 | PROSPECTS              | W   | 0.005      | -            | -                | -                | -         |     0.08 | Anlelele, Buzz, J3nsyy, notaN, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,177.66)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-17 |      0.821 | $9,204.00      | $7,553.54       |
| 2022-12-04 |      0.733 | $2,100.00      | $1,539.33       |
| 2022-10-26 |      0.474 | $1,000.00      | $473.67         |
| 2022-10-16 |      0.407 | $1,500.00      | $611.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
