### Roster Details<br />
Team Name: Sprout<br />
Roster: lauNX, Maze, refrezh, Staehr, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1079.0<br />
<br />
Final Rank Value (1079.0) = Starting Rank Value (1177.5) + Head To Head Adjustments (-98.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.518[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1177.5
- 400 + ( ( 0.380 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1177.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       76 | 2023-02-08 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -6.56 | lauNX, Maze, refrezh, Staehr, XELLOW   |
|           49 |       85 | 2023-02-08 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -17.18 | lauNX, Maze, refrezh, Staehr, XELLOW   |
|           48 |      183 | 2023-02-03 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -7.04 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           47 |      209 | 2023-02-02 | Evil Geniuses     | W   | 1.000      | 0.143        | 0.062 (0.009)    | -                | 1 (1.000) |    14.37 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           46 |      242 | 2023-02-01 | OG                | L   | 1.000      | -            | -                | -                | -         |    -3.03 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           45 |      468 | 2023-01-24 | Partizan          | L   | 1.000      | -            | -                | -                | -         |   -23.59 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           44 |      567 | 2023-01-20 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -22.55 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           43 |      616 | 2023-01-18 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |   -23.73 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           42 |      645 | 2023-01-17 | Falcons           | W   | 1.000      | 0.143        | -                | 0.767 (0.110)    | 0 (0.000) |     7.00 | lauNX, refrezh, Staehr, XELLOW, Zyphon |
|           41 |      834 | 2022-12-16 | forZe             | W   | 0.814      | 0.435        | 0.047 (0.017)    | 0.708 (0.250)    | -         |     7.10 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           40 |      861 | 2022-12-15 | BLUEJAYS          | W   | 0.807      | 0.435        | 0.102 (0.036)    | 0.490 (0.172)    | -         |     9.04 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           39 |      913 | 2022-12-13 | Permitta          | W   | 0.793      | 0.435        | 0.034 (0.012)    | 0.387 (0.133)    | -         |     5.87 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           38 |      927 | 2022-12-12 | Spirit            | L   | 0.787      | -            | -                | -                | -         |    -5.30 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           37 |     1181 | 2022-12-04 | ECLOT             | L   | 0.732      | -            | -                | -                | -         |   -16.70 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           36 |     1512 | 2022-11-22 | 1WIN              | W   | 0.653      | -            | -                | -                | -         |     4.01 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           35 |     1550 | 2022-11-19 | BIG               | L   | 0.633      | -            | -                | -                | -         |    -5.21 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           34 |     1609 | 2022-11-16 | GamerLegion       | W   | 0.614      | 0.589        | 0.105 (0.038)    | 0.469 (0.169)    | 1 (0.614) |     9.75 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           33 |     1614 | 2022-11-16 | HAVU              | W   | 0.613      | 0.589        | 0.041 (0.015)    | 0.600 (0.217)    | 1 (0.613) |     4.54 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           32 |     1617 | 2022-11-16 | ENCE              | W   | 0.613      | 0.589        | 0.108 (0.039)    | 0.394 (0.142)    | 1 (0.613) |    13.48 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           31 |     1624 | 2022-11-16 | BIG               | L   | 0.612      | -            | -                | -                | -         |    -4.27 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           30 |     1626 | 2022-11-16 | HEET              | W   | 0.611      | 0.589        | 0.028 (0.010)    | -                | 1 (0.611) |     5.02 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           29 |     1683 | 2022-11-07 | Spirit            | L   | 0.554      | -            | -                | -                | -         |    -4.00 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           28 |     1690 | 2022-11-06 | Ninjas in Pyjamas | W   | 0.548      | 1.000        | 0.136 (0.075)    | 0.253 (0.139)    | 1 (0.548) |    11.97 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           27 |     1714 | 2022-11-05 | Liquid            | L   | 0.541      | -            | -                | -                | -         |    -0.39 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           26 |     1723 | 2022-11-05 | BIG               | L   | 0.539      | -            | -                | -                | -         |    -3.52 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           25 |     1885 | 2022-10-25 | UNGENTIUM         | W   | 0.466      | 0.435        | -                | 0.474 (0.096)    | -         |     2.10 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           24 |     1912 | 2022-10-24 | ex-Finest         | L   | 0.459      | -            | -                | -                | -         |   -11.71 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           23 |     2036 | 2022-10-19 | Bad News Eagles   | L   | 0.427      | -            | -                | -                | -         |    -6.59 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           22 |     2062 | 2022-10-18 | BLUEJAYS          | L   | 0.420      | -            | -                | -                | -         |    -8.46 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           21 |     2131 | 2022-10-15 | K23               | W   | 0.400      | -            | -                | -                | -         |     0.59 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           20 |     2172 | 2022-10-14 | Entropiq          | L   | 0.394      | -            | -                | -                | -         |   -11.36 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           19 |     2225 | 2022-10-13 | IKLA              | W   | 0.385      | 0.384        | -                | 0.743 (0.110)    | -         |     2.29 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           18 |     2281 | 2022-10-11 | ex-Finest         | L   | 0.372      | -            | -                | -                | -         |   -10.02 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           17 |     2346 | 2022-10-07 | B8                | W   | 0.346      | -            | -                | -                | 1 (0.346) |     0.45 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           16 |     2366 | 2022-10-06 | FaZe              | L   | 0.339      | -            | -                | -                | -         |    -0.54 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           15 |     2397 | 2022-10-05 | Spirit            | W   | 0.332      | 0.143        | 0.211 (0.010)    | -                | 1 (0.332) |     7.88 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           14 |     2433 | 2022-10-04 | forZe             | W   | 0.324      | -            | -                | -                | 1 (0.324) |     2.82 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           13 |     2581 | 2022-09-27 | Bad News Eagles   | L   | 0.278      | -            | -                | -                | -         |    -4.58 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           12 |     2790 | 2022-09-21 | SAW               | W   | 0.239      | -            | -                | -                | -         |     3.35 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           11 |     2891 | 2022-09-17 | Eternal Fire      | L   | 0.212      | -            | -                | -                | -         |    -5.29 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|           10 |     2908 | 2022-09-16 | Entropiq          | L   | 0.207      | -            | -                | -                | -         |    -6.04 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            9 |     2928 | 2022-09-16 | Tricked           | W   | 0.206      | -            | -                | -                | -         |     1.75 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            8 |     3057 | 2022-09-12 | Hotspurs          | W   | 0.178      | -            | -                | -                | -         |     0.13 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            7 |     3318 | 2022-09-03 | SAW               | L   | 0.120      | -            | -                | -                | -         |    -2.15 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            6 |     3379 | 2022-09-01 | Gravity 0         | W   | 0.107      | -            | -                | -                | -         |     0.04 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            5 |     3411 | 2022-08-31 | Sangal            | L   | 0.100      | -            | -                | -                | -         |    -2.49 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            4 |     3439 | 2022-08-30 | schadE halt       | W   | 0.092      | -            | -                | -                | -         |     0.06 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            3 |     3762 | 2022-08-17 | Falcons           | W   | 0.006      | -            | -                | -                | -         |     0.05 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            2 |     3766 | 2022-08-17 | MOUZ              | W   | 0.006      | -            | -                | -                | -         |     0.12 | lauNX, refrezh, slaxz-, Staehr, Zyphon |
|            1 |     3792 | 2022-08-16 | ECSTATIC          | W   | 0.000      | -            | -                | -                | -         |     0.00 | lauNX, refrezh, slaxz-, Staehr, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,962.15)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $4,500.00      | $4,500.00       |
| 2022-12-19 |      0.833 | $7,000.00      | $5,831.83       |
| 2022-11-20 |      0.640 | $14,000.00     | $8,954.68       |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-26 |      0.474 | $500.00        | $236.83         |
| 2022-10-23 |      0.454 | $1,250.00      | $567.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
