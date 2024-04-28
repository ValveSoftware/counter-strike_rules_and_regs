### Roster Details<br />
Team Name: 1WIN<br />
Roster: deko, flamie, glowiing, NickelBack, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [48](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  940.2<br />
<br />
Final Rank Value (940.2) = Starting Rank Value (854.9) + Head To Head Adjustments (85.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.9
- 400 + ( ( 0.222 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 854.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      615 | 2023-01-18 | Believe            | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.344 (0.150)    | 0 (0.000) |     9.92 | deko, flamie, glowiing, NickelBack, TRAVIS  |
|           40 |      800 | 2022-12-17 | Astralis           | L   | 0.821      | -            | -                | -                | -         |    -2.95 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           39 |      808 | 2022-12-17 | IKLA               | W   | 0.820      | 0.143        | -                | 0.743 (0.087)    | 0 (0.000) |    14.69 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           38 |      832 | 2022-12-16 | LDLC               | W   | 0.814      | 0.143        | -                | 0.418 (0.049)    | 0 (0.000) |     7.47 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           37 |      840 | 2022-12-16 | HONORIS            | W   | 0.813      | 0.435        | 0.011 (0.004)    | 0.748 (0.264)    | 0 (0.000) |    12.68 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           36 |     1492 | 2022-11-23 | Bad News Eagles    | L   | 0.661      | -            | -                | -                | -         |    -4.32 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           35 |     1512 | 2022-11-22 | Sprout             | L   | 0.653      | -            | -                | -                | -         |    -4.01 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           34 |     1904 | 2022-10-24 | EPG Family         | L   | 0.460      | -            | -                | -                | -         |    -8.76 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           33 |     1918 | 2022-10-24 | Tricked            | W   | 0.457      | 0.435        | 0.034 (0.007)    | 0.954 (0.190)    | 0 (0.000) |     9.57 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           32 |     1938 | 2022-10-23 | SAW                | W   | 0.452      | 0.435        | 0.093 (0.018)    | 0.642 (0.126)    | 0 (0.000) |    10.96 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           31 |     1954 | 2022-10-22 | 9INE               | L   | 0.447      | -            | -                | -                | -         |    -6.25 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           30 |     1970 | 2022-10-22 | ex-Into the Breach | W   | 0.445      | 0.435        | -                | 0.520 (0.101)    | 0 (0.000) |     5.96 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           29 |     2008 | 2022-10-20 | BLUEJAYS           | L   | 0.434      | -            | -                | -                | -         |    -3.90 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           28 |     2041 | 2022-10-19 | EPG Family         | W   | 0.427      | 0.435        | 0.025 (0.005)    | -                | 0 (0.000) |     5.22 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           27 |     2061 | 2022-10-18 | HEET               | W   | 0.420      | 0.435        | 0.028 (0.005)    | 0.250 (0.046)    | -         |     7.65 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           26 |     2323 | 2022-10-08 | fnatic             | L   | 0.353      | -            | -                | -                | -         |    -0.43 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           25 |     2347 | 2022-10-07 | Cloud9             | L   | 0.345      | -            | -                | -                | -         |    -0.93 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           24 |     2374 | 2022-10-06 | G2                 | W   | 0.338      | 0.143        | 1.000 (0.048)    | -                | 1 (0.338) |    10.61 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           23 |     2414 | 2022-10-05 | forZe              | W   | 0.331      | -            | -                | -                | 1 (0.331) |     6.84 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           22 |     2428 | 2022-10-04 | Spirit             | L   | 0.325      | -            | -                | -                | -         |    -0.60 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           21 |     2882 | 2022-09-17 | Eternal Fire       | L   | 0.213      | -            | -                | -                | -         |    -2.77 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           20 |     2893 | 2022-09-17 | Tricked            | W   | 0.212      | -            | -                | -                | -         |     4.47 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           19 |     2917 | 2022-09-16 | Iron Branch        | L   | 0.207      | -            | -                | -                | -         |    -4.72 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           18 |     2925 | 2022-09-16 | Eternal Fire       | W   | 0.206      | -            | -                | -                | -         |     3.79 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           17 |     3169 | 2022-09-09 | 500                | W   | 0.160      | -            | -                | -                | -         |     3.85 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           16 |     3179 | 2022-09-09 | Looking For Org    | W   | 0.159      | -            | -                | -                | -         |     0.55 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           15 |     3211 | 2022-09-08 | ex-TITANS          | W   | 0.154      | -            | -                | -                | -         |     1.06 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           14 |     3290 | 2022-09-04 | MIBR               | L   | 0.126      | -            | -                | -                | -         |    -1.34 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           13 |     3297 | 2022-09-04 | Falcons            | W   | 0.124      | 0.435        | 0.045 (0.002)    | 0.767 (0.041)    | -         |     2.58 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           12 |     3315 | 2022-09-03 | forZe              | W   | 0.120      | 0.435        | 0.047 (0.002)    | -                | -         |     2.52 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           11 |     3355 | 2022-09-02 | Aurora             | W   | 0.113      | -            | -                | -                | -         |     0.96 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|           10 |     3410 | 2022-08-31 | 9INE               | W   | 0.100      | 0.435        | -                | 1.000 (0.044)    | -         |     1.90 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            9 |     3429 | 2022-08-30 | SAW                | W   | 0.093      | 0.435        | 0.093 (0.004)    | -                | -         |     2.41 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            8 |     3471 | 2022-08-28 | HEET               | L   | 0.080      | -            | -                | -                | -         |    -0.95 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            7 |     3476 | 2022-08-28 | SAW                | L   | 0.079      | -            | -                | -                | -         |    -0.45 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            6 |     3496 | 2022-08-27 | Forward            | W   | 0.073      | -            | -                | -                | -         |     0.93 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            5 |     3506 | 2022-08-27 | 9 Pandas           | W   | 0.073      | -            | -                | -                | -         |     0.81 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            4 |     3522 | 2022-08-27 | premghouls         | W   | 0.072      | -            | -                | -                | -         |     0.17 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            3 |     3672 | 2022-08-21 | K23                | L   | 0.034      | -            | -                | -                | -         |    -0.88 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            2 |     3675 | 2022-08-21 | SAW                | W   | 0.033      | -            | -                | -                | -         |     0.85 | deko, flamie, glowiing, lollipop21k, TRAVIS |
|            1 |     3688 | 2022-08-21 | GRGECHI            | W   | 0.033      | -            | -                | -                | -         |     0.12 | deko, flamie, glowiing, lollipop21k, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,689.10)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.827 | $2,000.00      | $1,654.07       |
| 2022-10-24 |      0.460 | $10,000.00     | $4,596.36       |
| 2022-10-23 |      0.454 | $7,000.00      | $3,177.11       |
| 2022-09-04 |      0.126 | $10,000.00     | $1,261.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
