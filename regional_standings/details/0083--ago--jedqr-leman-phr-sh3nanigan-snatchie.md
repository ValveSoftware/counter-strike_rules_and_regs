### Roster Details<br />
Team Name: AGO<br />
Roster: jedqr, leman, phr, sh3nanigan, snatchie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  856.4<br />
<br />
Final Rank Value (856.4) = Starting Rank Value (781.7) + Head To Head Adjustments (74.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.7
- 400 + ( ( 0.187 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 781.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      806 | 2022-12-17 | 500                | W   | 0.820      | 0.143        | 0.085 (0.010)    | 0.760 (0.089)    | 0 (0.000) |    20.88 | jedqr, leman, phr, sh3nanigan, snatchie  |
|           28 |      836 | 2022-12-16 | ALTERNATE aTTaX    | W   | 0.814      | 0.143        | 0.008 (0.001)    | 0.486 (0.057)    | 0 (0.000) |    12.68 | Furlan, jedqr, leman, phr, snatchie      |
|           27 |      983 | 2022-12-10 | PACT               | L   | 0.773      | -            | -                | -                | -         |   -13.97 | Furlan, jedqr, leman, phr, snatchie      |
|           26 |     1140 | 2022-12-05 | ENCE               | L   | 0.740      | -            | -                | -                | -         |    -1.76 | Furlan, jedqr, leman, phr, snatchie      |
|           25 |     1278 | 2022-12-01 | forZe              | W   | 0.714      | 0.435        | 0.047 (0.015)    | 0.708 (0.219)    | 0 (0.000) |    15.53 | Furlan, jedqr, leman, phr, snatchie      |
|           24 |     1358 | 2022-11-28 | ECLOT              | W   | 0.693      | 0.435        | 0.046 (0.014)    | 0.584 (0.176)    | 0 (0.000) |    15.10 | Furlan, jedqr, leman, phr, snatchie      |
|           23 |     1436 | 2022-11-26 | Tricked            | W   | 0.678      | 0.435        | 0.034 (0.010)    | 0.954 (0.281)    | 0 (0.000) |    14.59 | Furlan, jedqr, phr, sh3nanigan, snatchie |
|           22 |     1479 | 2022-11-24 | HAVU               | L   | 0.666      | -            | -                | -                | -         |    -6.83 | Furlan, jedqr, leman, phr, snatchie      |
|           21 |     1493 | 2022-11-23 | Believe            | L   | 0.661      | -            | -                | -                | -         |   -11.04 | Furlan, jedqr, leman, phr, snatchie      |
|           20 |     1526 | 2022-11-21 | Websterz           | W   | 0.644      | 0.143        | -                | 0.403 (0.037)    | 0 (0.000) |    12.18 | Furlan, jedqr, leman, phr, snatchie      |
|           19 |     1566 | 2022-11-18 | Conquer            | W   | 0.627      | -            | -                | -                | 0 (0.000) |     6.60 | Furlan, jedqr, leman, phr, snatchie      |
|           18 |     1583 | 2022-11-17 | SKADE X            | L   | 0.620      | -            | -                | -                | -         |   -13.35 | Furlan, jedqr, leman, phr, snatchie      |
|           17 |     1595 | 2022-11-17 | Conquer            | W   | 0.618      | -            | -                | -                | 0 (0.000) |     6.19 | Furlan, jedqr, leman, phr, snatchie      |
|           16 |     1674 | 2022-11-08 | FTW                | L   | 0.560      | -            | -                | -                | -         |    -7.23 | Furlan, jedqr, leman, phr, snatchie      |
|           15 |     1756 | 2022-11-01 | Falcons            | W   | 0.513      | 0.435        | 0.045 (0.010)    | 0.767 (0.171)    | 0 (0.000) |    11.55 | Furlan, jedqr, leman, phr, snatchie      |
|           14 |     1824 | 2022-10-28 | HAVU               | L   | 0.486      | -            | -                | -                | -         |    -4.95 | Furlan, jedqr, leman, phr, snatchie      |
|           13 |     1850 | 2022-10-27 | 9INE               | L   | 0.478      | -            | -                | -                | -         |    -4.53 | Furlan, jedqr, leman, phr, snatchie      |
|           12 |     1891 | 2022-10-25 | Tricked            | L   | 0.466      | -            | -                | -                | -         |    -3.50 | Furlan, jedqr, leman, phr, snatchie      |
|           11 |     1930 | 2022-10-23 | SINNERS            | W   | 0.453      | 0.435        | 0.068 (0.013)    | 0.549 (0.108)    | 0 (0.000) |    10.86 | Furlan, jedqr, leman, phr, snatchie      |
|           10 |     1996 | 2022-10-21 | ex-Into the Breach | W   | 0.438      | 0.435        | 0.005 (0.001)    | 0.520 (0.099)    | -         |     8.02 | Furlan, jedqr, leman, phr, snatchie      |
|            9 |     2175 | 2022-10-14 | UNGENTIUM          | W   | 0.393      | 0.143        | 0.015 (0.001)    | 0.474 (0.027)    | -         |     6.58 | Furlan, jedqr, leman, phr, snatchie      |
|            8 |     2213 | 2022-10-13 | SAW                | L   | 0.386      | -            | -                | -                | -         |    -1.67 | Furlan, jedqr, leman, phr, snatchie      |
|            7 |     2235 | 2022-10-13 | AVEZ               | W   | 0.384      | -            | -                | -                | -         |     3.66 | Furlan, jedqr, leman, phr, snatchie      |
|            6 |     2245 | 2022-10-12 | Iron Branch        | W   | 0.380      | -            | -                | -                | -         |     4.73 | Furlan, jedqr, leman, phr, snatchie      |
|            5 |     2263 | 2022-10-12 | PACT               | W   | 0.378      | 0.143        | 0.016 (0.001)    | -                | -         |     6.25 | Furlan, jedqr, leman, phr, snatchie      |
|            4 |     2358 | 2022-10-06 | K23                | L   | 0.340      | -            | -                | -                | -         |    -7.75 | AxEcHo, Furlan, leman, phr, snatchie     |
|            3 |     2547 | 2022-09-28 | EPG Family         | L   | 0.286      | -            | -                | -                | -         |    -4.20 | AxEcHo, Furlan, leman, phr, snatchie     |
|            2 |     3676 | 2022-08-21 | fnatic             | L   | 0.033      | -            | -                | -                | -         |    -0.02 | Furlan, jedqr, leman, phr, snatchie      |
|            1 |     3685 | 2022-08-21 | premghouls         | W   | 0.033      | -            | -                | -                | -         |     0.11 | Furlan, jedqr, leman, phr, snatchie      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,156.19)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
