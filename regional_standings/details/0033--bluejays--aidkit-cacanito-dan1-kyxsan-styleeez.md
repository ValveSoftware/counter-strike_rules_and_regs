### Roster Details<br />
Team Name: BLUEJAYS<br />
Roster: aidKiT, CacaNito, dan1, kyxsan, stYleEeZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1037.5<br />
<br />
Final Rank Value (1037.5) = Starting Rank Value (1103.3) + Head To Head Adjustments (-65.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.502[<sup>1</sup>](#table2)
- Bounty Collected: 0.343[<sup>2</sup>](#table1)
- Opponent Network: 0.132[<sup>2</sup>](#table1)
- LAN Wins: 0.397[<sup>2</sup>](#table1)

The average of these factors is 0.344<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1103.3
- 400 + ( ( 0.344 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1103.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      861 | 2022-12-15 | Sprout             | L   | 0.807      | -            | -                | -                | -         |    -9.04 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           53 |      911 | 2022-12-13 | SAW                | L   | 0.793      | -            | -                | -                | -         |   -10.45 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           52 |      962 | 2022-12-10 | IHC                | W   | 0.776      | 0.500        | 0.108 (0.042)    | 0.622 (0.241)    | 1 (0.776) |    19.47 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           51 |      992 | 2022-12-10 | farfaraway         | W   | 0.771      | 0.500        | 0.033 (0.013)    | 0.153 (0.059)    | 1 (0.771) |    10.03 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           50 |      995 | 2022-12-10 | BIG Academy        | W   | 0.770      | 0.500        | 0.020 (0.008)    | 0.434 (0.167)    | 1 (0.770) |    11.09 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           49 |     1022 | 2022-12-08 | Argentina          | W   | 0.763      | -            | -                | -                | 1 (0.763) |     0.96 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           48 |     1048 | 2022-12-08 | farfaraway         | L   | 0.758      | -            | -                | -                | -         |   -13.83 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           47 |     1098 | 2022-12-06 | Indonesia          | W   | 0.749      | -            | -                | -                | 1 (0.749) |     0.84 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           46 |     1355 | 2022-11-28 | Movistar Riders    | W   | 0.693      | -            | -                | -                | 0 (0.000) |     4.48 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           45 |     1419 | 2022-11-26 | iNation            | L   | 0.680      | -            | -                | -                | -         |   -10.41 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           44 |     1452 | 2022-11-25 | Strive in chaos    | W   | 0.673      | -            | -                | -                | 0 (0.000) |     2.14 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           43 |     1573 | 2022-11-18 | SINNERS            | L   | 0.625      | -            | -                | -                | -         |   -10.94 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           42 |     1576 | 2022-11-17 | ex-Finest          | L   | 0.621      | -            | -                | -                | -         |   -14.06 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           41 |     1613 | 2022-11-16 | Permitta           | W   | 0.613      | 0.435        | 0.034 (0.009)    | 0.387 (0.103)    | 0 (0.000) |     5.25 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           40 |     1622 | 2022-11-16 | Young Ninjas       | W   | 0.612      | 0.435        | 0.076 (0.020)    | 0.694 (0.185)    | 0 (0.000) |     7.40 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           39 |     1926 | 2022-10-23 | 9INE               | L   | 0.454      | -            | -                | -                | -         |    -9.31 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           38 |     1997 | 2022-10-21 | EPG Family         | L   | 0.438      | -            | -                | -                | -         |   -11.12 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           37 |     2008 | 2022-10-20 | 1WIN               | W   | 0.434      | 0.435        | 0.023 (0.004)    | -                | 0 (0.000) |     3.90 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           36 |     2044 | 2022-10-19 | 9INE               | W   | 0.426      | 0.435        | 0.045 (0.008)    | 1.000 (0.185)    | -         |     4.21 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           35 |     2062 | 2022-10-18 | Sprout             | W   | 0.420      | 0.435        | 0.067 (0.012)    | 0.446 (0.081)    | -         |     8.46 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           34 |     2087 | 2022-10-17 | ex-Into the Breach | W   | 0.412      | 0.435        | -                | 0.520 (0.093)    | -         |     3.25 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           33 |     2112 | 2022-10-16 | Monte              | L   | 0.406      | -            | -                | -                | -         |    -8.72 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           32 |     2125 | 2022-10-16 | IKLA               | W   | 0.404      | 0.435        | -                | 0.743 (0.130)    | -         |     3.85 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           31 |     2151 | 2022-10-15 | ALTERNATE aTTaX    | L   | 0.398      | -            | -                | -                | -         |    -9.96 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           30 |     2173 | 2022-10-14 | ex-TITANS          | W   | 0.394      | -            | -                | -                | -         |     1.12 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           29 |     2215 | 2022-10-13 | EYEBALLERS         | L   | 0.386      | -            | -                | -                | -         |    -8.58 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           28 |     2229 | 2022-10-13 | Copenhagen Flames  | L   | 0.385      | -            | -                | -                | -         |    -7.54 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           27 |     2261 | 2022-10-12 | Endpoint           | L   | 0.378      | -            | -                | -                | -         |    -8.69 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           26 |     2290 | 2022-10-11 | Copenhagen Flames  | L   | 0.371      | -            | -                | -                | -         |    -7.67 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           25 |     2294 | 2022-10-10 | WLG                | W   | 0.366      | -            | -                | -                | -         |     0.24 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           24 |     2519 | 2022-09-29 | Anonymo            | W   | 0.293      | -            | -                | -                | -         |     0.52 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           23 |     2528 | 2022-09-29 | SINNERS            | L   | 0.292      | -            | -                | -                | -         |    -5.72 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           22 |     2532 | 2022-09-29 | MASONIC            | L   | 0.291      | -            | -                | -                | -         |    -6.81 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           21 |     2551 | 2022-09-28 | ex-Finest          | W   | 0.286      | -            | -                | -                | -         |     1.81 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           20 |     2596 | 2022-09-26 | HEET               | W   | 0.272      | 0.435        | 0.028 (0.003)    | -                | -         |     2.61 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           19 |     2752 | 2022-09-22 | eSuba              | W   | 0.246      | 0.435        | 0.028 (0.003)    | -                | -         |     2.26 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           18 |     2761 | 2022-09-22 | ex-Into the Breach | W   | 0.244      | -            | -                | -                | -         |     1.59 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           17 |     2808 | 2022-09-20 | ex-Finest          | W   | 0.233      | -            | -                | -                | -         |     0.85 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           16 |     2818 | 2022-09-20 | HONORIS            | W   | 0.231      | 0.435        | -                | 0.748 (0.075)    | -         |     1.72 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           15 |     2885 | 2022-09-17 | Nexus              | W   | 0.213      | -            | -                | -                | -         |     1.13 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           14 |     3040 | 2022-09-13 | Sashi              | W   | 0.184      | -            | -                | -                | -         |     0.46 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           13 |     3083 | 2022-09-11 | HONORIS            | L   | 0.172      | -            | -                | -                | -         |    -4.21 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           12 |     3121 | 2022-09-10 | Beyond Possible    | W   | 0.167      | -            | -                | -                | -         |     0.21 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           11 |     3236 | 2022-09-07 | iNation            | L   | 0.146      | -            | -                | -                | -         |    -2.60 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|           10 |     3254 | 2022-09-06 | Partizan           | W   | 0.139      | -            | -                | -                | -         |     0.79 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            9 |     3267 | 2022-09-05 | X                  | W   | 0.132      | -            | -                | -                | -         |     0.14 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            8 |     3326 | 2022-09-03 | Juggernauts        | W   | 0.119      | -            | -                | -                | -         |     0.38 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            7 |     3365 | 2022-09-02 | Monte              | L   | 0.111      | -            | -                | -                | -         |    -2.55 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            6 |     3391 | 2022-09-01 | Strive in chaos    | L   | 0.106      | -            | -                | -                | -         |    -3.11 | aidKiT, CacaNito, dan1, Necrogenes1s, stYleEeZ |
|            5 |     3501 | 2022-08-27 | Astralis           | L   | 0.073      | -            | -                | -                | -         |    -0.52 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            4 |     3513 | 2022-08-27 | OneTap             | W   | 0.073      | -            | -                | -                | -         |     0.27 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            3 |     3629 | 2022-08-23 | Budapest Five      | L   | 0.046      | -            | -                | -                | -         |    -1.40 | aidKiT, CacaNito, dan1, kyxsan, stYleEeZ       |
|            2 |     3768 | 2022-08-17 | OG                 | L   | 0.006      | -            | -                | -                | -         |    -0.01 | 2high, CacaNito, dan1, kyxsan, stYleEeZ        |
|            1 |     3791 | 2022-08-16 | Aurora             | L   | 0.001      | -            | -                | -                | -         |    -0.02 | 2high, CacaNito, dan1, kyxsan, stYleEeZ        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,299.60)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-19 |      0.833 | $2,500.00      | $2,082.79       |
| 2022-12-10 |      0.776 | $50,000.00     | $38,792.82      |
| 2022-11-27 |      0.686 | $219.00        | $150.24         |
| 2022-11-20 |      0.640 | $1,250.00      | $800.34         |
| 2022-11-18 |      0.627 | $2,000.00      | $1,253.88       |
| 2022-10-23 |      0.454 | $11,500.00     | $5,219.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
