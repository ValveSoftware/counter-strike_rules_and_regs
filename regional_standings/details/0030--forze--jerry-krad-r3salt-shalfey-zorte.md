### Roster Details<br />
Team Name: forZe<br />
Roster: Jerry, Krad, r3salt, shalfey, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1050.2<br />
<br />
Final Rank Value (1050.2) = Starting Rank Value (983.1) + Head To Head Adjustments (67.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.247[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 983.1
- 400 + ( ( 0.285 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 983.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      154 | 2023-02-05 | Illuminar          | L   | 1.000      | -            | -                | -                | -         |   -16.92 | Jerry, Krad, r3salt, shalfey, zorte   |
|           54 |      191 | 2023-02-03 | GamerLegion        | W   | 1.000      | 0.435        | 0.105 (0.046)    | 0.469 (0.204)    | 0 (0.000) |    18.07 | Jerry, Krad, r3salt, shalfey, zorte   |
|           53 |      229 | 2023-02-01 | ECSTATIC           | W   | 1.000      | 0.435        | 0.030 (0.013)    | 0.556 (0.241)    | 0 (0.000) |     9.52 | Jerry, Krad, r3salt, shalfey, zorte   |
|           52 |      262 | 2023-01-31 | Tricked            | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | 0 (0.000) |    10.62 | Jerry, Krad, r3salt, shalfey, zorte   |
|           51 |      313 | 2023-01-29 | EYEBALLERS         | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.776 (0.337)    | 0 (0.000) |    10.22 | Jerry, Krad, r3salt, shalfey, zorte   |
|           50 |      380 | 2023-01-27 | GenOne             | W   | 1.000      | 0.435        | 0.300 (0.130)    | 0.400 (0.174)    | 0 (0.000) |    15.36 | Jerry, Krad, r3salt, shalfey, zorte   |
|           49 |      415 | 2023-01-26 | PROSPECTS          | L   | 1.000      | -            | -                | -                | -         |   -20.85 | Jerry, Krad, r3salt, shalfey, zorte   |
|           48 |      544 | 2023-01-21 | Endpoint           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.81 | Jerry, Krad, r3salt, shalfey, zorte   |
|           47 |      563 | 2023-01-20 | Falcons            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.55 | Forester, Jerry, Krad, shalfey, zorte |
|           46 |      617 | 2023-01-18 | SAW                | L   | 1.000      | -            | -                | -                | -         |    -8.71 | Forester, Jerry, Krad, shalfey, zorte |
|           45 |      634 | 2023-01-17 | 9INE               | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 0 (0.000) |    13.38 | Forester, Jerry, Krad, shalfey, zorte |
|           44 |      785 | 2022-12-18 | VP.Prodigy         | W   | 0.826      | -            | -                | -                | -         |     4.89 | Jerry, Krad, shalfey, sugaR, zorte    |
|           43 |      817 | 2022-12-17 | VP.Prodigy         | W   | 0.819      | -            | -                | -                | -         |     4.74 | Jerry, Krad, shalfey, sugaR, zorte    |
|           42 |      834 | 2022-12-16 | Sprout             | L   | 0.814      | -            | -                | -                | -         |    -7.10 | Jerry, Krad, shalfey, sugaR, zorte    |
|           41 |      860 | 2022-12-15 | FTW                | W   | 0.807      | 0.435        | 0.026 (0.009)    | -                | -         |     9.62 | Jerry, Krad, shalfey, sugaR, zorte    |
|           40 |      871 | 2022-12-15 | HAVU               | L   | 0.806      | -            | -                | -                | -         |   -11.75 | Jerry, Krad, shalfey, sugaR, zorte    |
|           39 |      875 | 2022-12-15 | Forward            | W   | 0.805      | -            | -                | -                | -         |     6.58 | Jerry, Krad, shalfey, sugaR, zorte    |
|           38 |      889 | 2022-12-14 | Sangal             | W   | 0.800      | 0.435        | -                | 0.684 (0.238)    | -         |    11.31 | Jerry, Krad, shalfey, sugaR, zorte    |
|           37 |      910 | 2022-12-13 | Believe            | W   | 0.793      | -            | -                | -                | -         |     7.17 | Jerry, Krad, shalfey, sugaR, zorte    |
|           36 |     1129 | 2022-12-06 | HAVU               | L   | 0.745      | -            | -                | -                | -         |   -11.53 | clax, Jerry, Krad, shalfey, zorte     |
|           35 |     1152 | 2022-12-05 | Movistar Riders    | W   | 0.738      | -            | -                | -                | -         |     5.84 | clax, Jerry, Krad, shalfey, zorte     |
|           34 |     1254 | 2022-12-02 | ex-Finest          | W   | 0.719      | -            | -                | -                | -         |     9.40 | clax, Jerry, Krad, shalfey, zorte     |
|           33 |     1278 | 2022-12-01 | AGO                | L   | 0.714      | -            | -                | -                | -         |   -15.53 | anarkez, clax, Jerry, Krad, shalfey   |
|           32 |     1301 | 2022-11-30 | SAW                | L   | 0.707      | -            | -                | -                | -         |    -7.42 | clax, Jerry, Krad, shalfey, zorte     |
|           31 |     1338 | 2022-11-29 | MASONIC            | W   | 0.698      | 0.435        | -                | 0.752 (0.228)    | -         |     8.52 | clax, Jerry, Krad, shalfey, zorte     |
|           30 |     1396 | 2022-11-27 | ex-Into the Breach | L   | 0.685      | -            | -                | -                | -         |   -14.89 | Aunkere, Jerry, Krad, shalfey, zorte  |
|           29 |     1473 | 2022-11-24 | Anonymo            | W   | 0.667      | -            | -                | -                | -         |     2.32 | Aunkere, Jerry, Krad, shalfey, zorte  |
|           28 |     1553 | 2022-11-19 | K23                | L   | 0.633      | -            | -                | -                | -         |   -12.23 | almazer, Jerry, Krad, shalfey, zorte  |
|           27 |     1634 | 2022-11-15 | Tricked            | W   | 0.607      | 0.426        | 0.034 (0.009)    | 0.954 (0.247)    | -         |     9.65 | Aunkere, Jerry, shalfey, sugaR, zorte |
|           26 |     1641 | 2022-11-15 | HAVU               | L   | 0.605      | -            | -                | -                | -         |   -11.06 | Aunkere, Jerry, shalfey, sugaR, zorte |
|           25 |     1675 | 2022-11-08 | 9INE               | W   | 0.560      | 0.435        | 0.045 (0.011)    | 1.000 (0.244)    | -         |     7.81 | Aunkere, Jerry, shalfey, sugaR, zorte |
|           24 |     1743 | 2022-11-02 | Believe            | W   | 0.520      | -            | -                | -                | -         |     4.24 | Aunkere, Jerry, shalfey, sugaR, zorte |
|           23 |     1965 | 2022-10-22 | Tricked            | L   | 0.446      | -            | -                | -                | -         |    -6.88 | Jerry, Magnojez, mizu, shalfey, zorte |
|           22 |     2006 | 2022-10-20 | IKLA               | W   | 0.434      | -            | -                | -                | -         |     5.42 | Jerry, Magnojez, mizu, shalfey, zorte |
|           21 |     2320 | 2022-10-08 | Bad News Eagles    | L   | 0.353      | -            | -                | -                | -         |    -3.18 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           20 |     2340 | 2022-10-07 | Astralis           | W   | 0.347      | 0.143        | 0.149 (0.007)    | -                | 1 (0.347) |     9.33 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           19 |     2362 | 2022-10-06 | ECSTATIC           | W   | 0.339      | -            | -                | -                | 1 (0.339) |     3.91 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           18 |     2414 | 2022-10-05 | 1WIN               | L   | 0.331      | -            | -                | -                | -         |    -6.84 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           17 |     2433 | 2022-10-04 | Sprout             | L   | 0.324      | -            | -                | -                | -         |    -2.82 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           16 |     2463 | 2022-10-01 | OG                 | W   | 0.307      | 0.435        | 0.237 (0.032)    | -                | -         |     9.24 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           15 |     2479 | 2022-10-01 | ex-Into the Breach | W   | 0.305      | -            | -                | -                | -         |     3.14 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           14 |     2500 | 2022-09-30 | ex-Finest          | W   | 0.299      | -            | -                | -                | -         |     1.96 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           13 |     2527 | 2022-09-29 | los kogutos        | W   | 0.292      | -            | -                | -                | -         |     2.57 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           12 |     2913 | 2022-09-16 | Eternal Fire       | L   | 0.207      | -            | -                | -                | -         |    -3.71 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           11 |     2924 | 2022-09-16 | Iron Branch        | L   | 0.206      | -            | -                | -                | -         |    -5.41 | Jerry, KENSI, Norwi, shalfey, zorte   |
|           10 |     3250 | 2022-09-06 | 9INE               | W   | 0.140      | -            | -                | -                | -         |     1.89 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            9 |     3315 | 2022-09-03 | 1WIN               | L   | 0.120      | -            | -                | -                | -         |    -2.52 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            8 |     3362 | 2022-09-02 | Beyond Possible    | W   | 0.111      | -            | -                | -                | -         |     0.25 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            7 |     3413 | 2022-08-31 | SAW                | W   | 0.100      | -            | -                | -                | -         |     2.18 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            6 |     3428 | 2022-08-30 | 9INE               | L   | 0.093      | -            | -                | -                | -         |    -1.69 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            5 |     3643 | 2022-08-22 | Monte              | W   | 0.039      | -            | -                | -                | -         |     0.51 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            4 |     3644 | 2022-08-22 | K23                | L   | 0.039      | -            | -                | -                | -         |    -1.12 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            3 |     3671 | 2022-08-21 | GamerLegion        | W   | 0.034      | -            | -                | -                | -         |     0.78 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            2 |     3677 | 2022-08-21 | UNGENTIUM          | W   | 0.033      | -            | -                | -                | -         |     0.31 | Jerry, KENSI, Norwi, shalfey, zorte   |
|            1 |     3694 | 2022-08-21 | LF0                | W   | 0.033      | -            | -                | -                | -         |     0.07 | Jerry, KENSI, Norwi, shalfey, zorte   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,380.33)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-19 |      0.833 | $4,000.00      | $3,332.47       |
| 2022-12-18 |      0.826 | $6,573.00      | $5,426.63       |
| 2022-12-07 |      0.754 | $2,000.00      | $1,507.48       |
| 2022-11-20 |      0.640 | $1,250.00      | $800.34         |
| 2022-10-24 |      0.460 | $5,000.00      | $2,301.39       |
| 2022-10-01 |      0.307 | $22,000.00     | $6,759.70       |
| 2022-09-04 |      0.126 | $2,000.00      | $252.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
