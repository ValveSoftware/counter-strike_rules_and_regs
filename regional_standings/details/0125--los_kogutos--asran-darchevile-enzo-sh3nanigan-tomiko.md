### Roster Details<br />
Team Name: los kogutos<br />
Roster: asran, darchevile, Enzo, sh3nanigan, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  747.1<br />
<br />
Final Rank Value (747.1) = Starting Rank Value (792.6) + Head To Head Adjustments (-45.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.6
- 400 + ( ( 0.192 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 792.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       56 | 2023-02-10 | Endpoint             | L   | 1.000      | -            | -                | -                | -         |    -7.46 | asran, darchevile, Enzo, sh3nanigan, tomiko   |
|           46 |       81 | 2023-02-08 | Tricked              | L   | 1.000      | -            | -                | -                | -         |   -11.26 | asran, darchevile, Enzo, maaryy, tomiko       |
|           45 |      106 | 2023-02-07 | HONORIS              | L   | 1.000      | -            | -                | -                | -         |   -12.81 | asran, darchevile, Enzo, maaryy, tomiko       |
|           44 |      559 | 2023-01-21 | ECSTATIC             | L   | 1.000      | -            | -                | -                | -         |   -13.38 | asran, darchevile, Enzo, maaryy, tomiko       |
|           43 |      601 | 2023-01-19 | Astralis Talent      | L   | 1.000      | -            | -                | -                | -         |   -11.37 | asran, darchevile, Enzo, maaryy, tomiko       |
|           42 |      646 | 2023-01-17 | IKLA                 | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.743 (0.275)    | 0 (0.000) |    21.92 | asran, darchevile, Enzo, maaryy, tomiko       |
|           41 |      703 | 2023-01-14 | EC Brugge            | L   | 1.000      | -            | -                | -                | -         |   -18.79 | asran, darchevile, Enzo, maaryy, tomiko       |
|           40 |      725 | 2023-01-10 | IKLA                 | W   | 0.978      | 0.371        | 0.017 (0.006)    | 0.743 (0.269)    | 0 (0.000) |    21.52 | asran, darchevile, Enzo, maaryy, tomiko       |
|           39 |      736 | 2022-12-30 | Nexus                | W   | 0.904      | 0.333        | -                | 0.542 (0.163)    | 0 (0.000) |    14.41 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           38 |      737 | 2022-12-29 | ALTERNATE aTTaX      | L   | 0.898      | -            | -                | -                | -         |   -17.79 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           37 |      771 | 2022-12-18 | 500                  | L   | 0.827      | -            | -                | -                | -         |    -4.00 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           36 |      833 | 2022-12-16 | Falcons              | L   | 0.814      | -            | -                | -                | -         |    -8.13 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           35 |      941 | 2022-12-11 | EYEBALLERS           | L   | 0.781      | -            | -                | -                | -         |    -9.15 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           34 |      952 | 2022-12-11 | MASONIC              | W   | 0.779      | 0.371        | 0.021 (0.006)    | 0.752 (0.218)    | 0 (0.000) |    14.88 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           33 |      984 | 2022-12-10 | Partizan             | W   | 0.773      | 0.371        | 0.005 (0.002)    | 0.653 (0.187)    | 0 (0.000) |    14.15 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           32 |     1017 | 2022-12-09 | Monte                | L   | 0.766      | -            | -                | -                | -         |    -6.32 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           31 |     1031 | 2022-12-08 | HONORIS              | W   | 0.761      | 0.371        | 0.011 (0.003)    | 0.748 (0.211)    | 0 (0.000) |    17.14 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           30 |     1044 | 2022-12-08 | IKLA                 | L   | 0.759      | -            | -                | -                | -         |    -5.65 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           29 |     1118 | 2022-12-06 | Leo                  | W   | 0.746      | -            | -                | -                | 0 (0.000) |     2.65 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           28 |     1379 | 2022-11-27 | ThunderFlash         | L   | 0.687      | -            | -                | -                | -         |   -12.57 | darchevile, Enzo, maaryy, mwlky, tomiko       |
|           27 |     1395 | 2022-11-27 | Nexus                | L   | 0.685      | -            | -                | -                | -         |   -12.31 | darchevile, Enzo, maaryy, tomiko, ultimate    |
|           26 |     1397 | 2022-11-27 | Nemiga               | W   | 0.685      | -            | -                | -                | 0 (0.000) |     4.75 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           25 |     1420 | 2022-11-26 | Nexus                | L   | 0.680      | -            | -                | -                | -         |   -12.49 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           24 |     1448 | 2022-11-25 | AVEZ                 | W   | 0.674      | -            | -                | -                | 0 (0.000) |     5.97 | darchevile, Enzo, maaryy, Markoś, tomiko      |
|           23 |     1798 | 2022-10-30 | HONORIS              | L   | 0.499      | -            | -                | -                | -         |    -5.62 | darchevile, Enzo, maaryy, sh3nanigan, tomiko  |
|           22 |     1801 | 2022-10-30 | PROSPECTS            | L   | 0.498      | -            | -                | -                | -         |    -4.63 | darchevile, Enzo, maaryy, sh3nanigan, tomiko  |
|           21 |     1813 | 2022-10-29 | Nexus                | W   | 0.491      | -            | -                | -                | 0 (0.000) |     6.18 | darchevile, Enzo, maaryy, sh3nanigan, tomiko  |
|           20 |     1829 | 2022-10-28 | ALTERNATE aTTaX      | W   | 0.485      | 0.300        | 0.008 (0.001)    | 0.486 (0.071)    | -         |     8.40 | darchevile, Enzo, maaryy, sh3nanigan, tomiko  |
|           19 |     2292 | 2022-10-10 | AVEZ                 | L   | 0.367      | -            | -                | -                | -         |    -8.33 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           18 |     2297 | 2022-10-10 | Beyond Possible      | W   | 0.366      | -            | -                | -                | -         |     2.02 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           17 |     2316 | 2022-10-09 | AVEZ                 | L   | 0.358      | -            | -                | -                | -         |    -8.23 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           16 |     2527 | 2022-09-29 | forZe                | L   | 0.292      | -            | -                | -                | -         |    -2.57 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           15 |     2635 | 2022-09-25 | 500                  | W   | 0.265      | 0.435        | 0.085 (0.010)    | 0.760 (0.088)    | -         |     6.76 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           14 |     2670 | 2022-09-24 | Illuminar            | L   | 0.258      | -            | -                | -                | -         |    -1.88 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           13 |     2789 | 2022-09-21 | Nexus                | W   | 0.239      | 0.435        | -                | 0.542 (0.056)    | -         |     3.84 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           12 |     2813 | 2022-09-20 | SINNERS              | L   | 0.233      | -            | -                | -                | -         |    -1.73 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           11 |     2859 | 2022-09-18 | BIG Academy          | W   | 0.220      | 0.435        | 0.020 (0.002)    | 0.434 (0.041)    | -         |     5.53 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|           10 |     2963 | 2022-09-15 | Young Ninjas         | W   | 0.198      | 0.143        | 0.076 (0.002)    | -                | -         |     4.40 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            9 |     2993 | 2022-09-14 | ex-TITANS            | W   | 0.193      | -            | -                | -                | -         |     1.83 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            8 |     2999 | 2022-09-14 | Eternal Fire Academy | W   | 0.192      | -            | -                | -                | -         |     1.21 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            7 |     3036 | 2022-09-13 | Nexus                | L   | 0.185      | -            | -                | -                | -         |    -2.82 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            6 |     3217 | 2022-09-08 | Websterz             | L   | 0.154      | -            | -                | -                | -         |    -4.08 | darchevile, Enzo, kRaSnaL, maaryy, sh3nanigan |
|            5 |     3516 | 2022-08-27 | Astralis             | L   | 0.073      | -            | -                | -                | -         |    -0.11 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            4 |     3590 | 2022-08-24 | ECSTATIC             | L   | 0.053      | -            | -                | -                | -         |    -0.62 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            3 |     3599 | 2022-08-23 | FANTASY              | L   | 0.047      | -            | -                | -                | -         |    -1.27 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            2 |     3611 | 2022-08-23 | INVSN                | W   | 0.046      | -            | -                | -                | -         |     1.00 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |
|            1 |     3620 | 2022-08-23 | Astralis             | W   | 0.046      | 0.143        | 0.149 (0.001)    | -                | -         |     1.37 | darchevile, Enzo, kRaSnaL, maaryy, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,232.76)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-30 |      0.905 | $1,500.00      | $1,357.81       |
| 2022-12-15 |      0.807 | $750.00        | $605.51         |
| 2022-11-25 |      0.674 | $1,100.00      | $740.96         |
| 2022-10-30 |      0.499 | $1,059.00      | $528.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
