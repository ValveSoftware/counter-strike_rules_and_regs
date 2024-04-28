### Roster Details<br />
Team Name: AVANGAR<br />
Roster: ice, ICY, kade0, sorrow, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  825.2<br />
<br />
Final Rank Value (825.2) = Starting Rank Value (768.4) + Head To Head Adjustments (56.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.039[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.4
- 400 + ( ( 0.180 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 768.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     1034 | 2022-12-08 | Apeks           | W   | 0.760      | 0.371        | 0.024 (0.007)    | 0.671 (0.189)    | 0 (0.000) |    16.63 | ice, ICY, kade0, sorrow, w1nt3r |
|           27 |     1061 | 2022-12-07 | MOUZ NXT        | W   | 0.754      | 0.371        | 0.015 (0.004)    | 0.537 (0.151)    | 0 (0.000) |    11.53 | ice, ICY, kade0, sorrow, w1nt3r |
|           26 |     1082 | 2022-12-07 | sYnck           | L   | 0.753      | -            | -                | -                | -         |   -12.57 | ice, ICY, kade0, sorrow, w1nt3r |
|           25 |     1115 | 2022-12-06 | Looking For Org | W   | 0.747      | -            | -                | -                | 0 (0.000) |     2.16 | ice, ICY, kade0, sorrow, w1nt3r |
|           24 |     1149 | 2022-12-05 | Illuminar       | W   | 0.739      | 0.435        | 0.048 (0.015)    | 0.700 (0.225)    | 0 (0.000) |    17.13 | ice, ICY, kade0, sorrow, w1nt3r |
|           23 |     1184 | 2022-12-04 | HAVU            | L   | 0.732      | -            | -                | -                | -         |    -6.84 | ice, ICY, kade0, sorrow, w1nt3r |
|           22 |     1312 | 2022-11-30 | EYEBALLERS      | W   | 0.705      | 0.143        | 0.017 (0.002)    | 0.776 (0.078)    | 0 (0.000) |    14.41 | ice, ICY, kade0, sorrow, w1nt3r |
|           21 |     1418 | 2022-11-26 | 9 Pandas        | L   | 0.680      | -            | -                | -                | -         |   -11.58 | ice, ICY, kade0, sorrow, w1nt3r |
|           20 |     1428 | 2022-11-26 | EC Brugge       | W   | 0.679      | 0.143        | 0.007 (0.001)    | 0.507 (0.049)    | 0 (0.000) |     9.42 | ice, ICY, kade0, sorrow, w1nt3r |
|           19 |     1433 | 2022-11-26 | Cryptova        | W   | 0.678      | 0.143        | 0.005 (0.000)    | -                | 0 (0.000) |     8.39 | ice, ICY, kade0, sorrow, w1nt3r |
|           18 |     1456 | 2022-11-25 | Tricked         | W   | 0.673      | 0.303        | 0.034 (0.007)    | 0.954 (0.194)    | 0 (0.000) |    15.64 | ice, ICY, kade0, sorrow, w1nt3r |
|           17 |     1482 | 2022-11-24 | Monte           | L   | 0.665      | -            | -                | -                | -         |    -5.53 | ice, ICY, kade0, sorrow, w1nt3r |
|           16 |     1519 | 2022-11-22 | Websterz        | W   | 0.652      | 0.303        | 0.007 (0.001)    | 0.403 (0.080)    | -         |    13.22 | ice, ICY, kade0, sorrow, w1nt3r |
|           15 |     2293 | 2022-10-10 | Cryptova        | L   | 0.367      | -            | -                | -                | -         |    -6.44 | ice, ICY, kade0, sorrow, w1nt3r |
|           14 |     2296 | 2022-10-10 | Anonymo         | W   | 0.366      | 0.143        | -                | 0.388 (0.020)    | -         |     3.17 | ice, ICY, kade0, sorrow, w1nt3r |
|           13 |     2312 | 2022-10-09 | Cryptova        | L   | 0.359      | -            | -                | -                | -         |    -6.37 | ice, ICY, kade0, sorrow, w1nt3r |
|           12 |     2454 | 2022-10-02 | ex-TAG          | L   | 0.311      | -            | -                | -                | -         |    -5.51 | ice, ICY, kade0, sorrow, w1nt3r |
|           11 |     2969 | 2022-09-15 | Websterz        | L   | 0.198      | -            | -                | -                | -         |    -2.18 | ice, ICY, kade0, sorrow, w1nt3r |
|           10 |     3003 | 2022-09-14 | INVSN           | W   | 0.192      | 0.333        | 0.014 (0.001)    | 0.428 (0.027)    | 1 (0.192) |     4.28 | ice, ICY, kade0, sorrow, w1nt3r |
|            9 |     3027 | 2022-09-13 | Forward         | W   | 0.186      | 0.333        | -                | 0.231 (0.014)    | 1 (0.186) |     3.10 | ice, ICY, kade0, sorrow, w1nt3r |
|            8 |     3081 | 2022-09-11 | Believe         | L   | 0.173      | -            | -                | -                | -         |    -2.71 | ice, ICY, kade0, sorrow, w1nt3r |
|            7 |     3117 | 2022-09-10 | Budapest Five   | W   | 0.168      | -            | -                | -                | -         |     0.98 | ice, ICY, kade0, sorrow, w1nt3r |
|            6 |     3240 | 2022-09-07 | 9 Pandas        | L   | 0.145      | -            | -                | -                | -         |    -2.44 | ice, ICY, kade0, sorrow, w1nt3r |
|            5 |     3253 | 2022-09-06 | VP.Prodigy      | W   | 0.140      | 0.360        | 0.009 (0.000)    | -                | -         |     1.86 | ice, ICY, kade0, sorrow, w1nt3r |
|            4 |     3334 | 2022-09-03 | xDDDD           | W   | 0.118      | -            | -                | -                | -         |     0.61 | ice, ICY, kade0, sorrow, w1nt3r |
|            3 |     3393 | 2022-09-01 | Websterz        | L   | 0.106      | -            | -                | -                | -         |    -2.74 | ice, ICY, kade0, sorrow, w1nt3r |
|            2 |     3610 | 2022-08-23 | B8              | L   | 0.046      | -            | -                | -                | -         |    -1.07 | ice, ICY, kade0, sorrow, w1nt3r |
|            1 |     3616 | 2022-08-23 | Wolsung         | W   | 0.046      | -            | -                | -                | -         |     0.16 | ice, ICY, kade0, sorrow, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,452.67)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-15 |      0.807 | $1,250.00      | $1,009.19       |
| 2022-11-27 |      0.687 | $500.00        | $343.27         |
| 2022-09-15 |      0.200 | $500.00        | $100.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
