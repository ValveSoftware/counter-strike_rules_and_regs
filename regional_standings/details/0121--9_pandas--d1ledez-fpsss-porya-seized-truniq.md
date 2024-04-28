### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, FpSSS, Porya, seized, TruNiQ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  750.3<br />
<br />
Final Rank Value (750.3) = Starting Rank Value (745.3) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.3
- 400 + ( ( 0.169 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 745.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      309 | 2023-01-29 | iNation       | L   | 1.000      | -            | -                | -                | -         |    -5.32 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           27 |      685 | 2023-01-15 | INVSN         | L   | 1.000      | -            | -                | -                | -         |   -12.64 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           26 |      791 | 2022-12-18 | VP.Prodigy    | L   | 0.825      | -            | -                | -                | -         |   -15.04 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           25 |      825 | 2022-12-17 | Forward       | W   | 0.818      | 0.359        | 0.004 (0.001)    | 0.231 (0.068)    | 0 (0.000) |    13.70 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           24 |      843 | 2022-12-16 | LF0           | W   | 0.812      | -            | -                | -                | 0 (0.000) |     4.88 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           23 |      869 | 2022-12-15 | VP.Prodigy    | L   | 0.806      | -            | -                | -                | -         |   -14.93 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           22 |     1042 | 2022-12-08 | Partizan      | L   | 0.760      | -            | -                | -                | -         |   -10.25 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           21 |     1064 | 2022-12-07 | 500           | L   | 0.754      | -            | -                | -                | -         |    -3.12 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           20 |     1122 | 2022-12-06 | JANO          | W   | 0.746      | 0.371        | 0.008 (0.002)    | 0.307 (0.085)    | 0 (0.000) |     9.77 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           19 |     1257 | 2022-12-02 | ex-TAG        | W   | 0.719      | 0.360        | 0.010 (0.003)    | 0.081 (0.021)    | 0 (0.000) |    10.03 | d1Ledez, Porya, seized, TruNiQ, xsepower |
|           18 |     1383 | 2022-11-27 | Monte         | L   | 0.687      | -            | -                | -                | -         |    -5.75 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           17 |     1390 | 2022-11-27 | HOTU          | W   | 0.686      | 0.303        | 0.004 (0.001)    | 0.112 (0.023)    | 0 (0.000) |    10.18 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           16 |     1418 | 2022-11-26 | AVANGAR       | W   | 0.680      | 0.303        | 0.003 (0.001)    | 0.314 (0.065)    | 0 (0.000) |    11.58 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           15 |     1499 | 2022-11-23 | Websterz      | W   | 0.659      | 0.303        | 0.007 (0.001)    | 0.403 (0.080)    | 0 (0.000) |    13.25 | d1Ledez, FpSSS, Porya, seized, TruNiQ    |
|           14 |     1520 | 2022-11-22 | Monte         | L   | 0.651      | -            | -                | -                | -         |    -5.16 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|           13 |     2451 | 2022-10-02 | Zero Tenacity | L   | 0.312      | -            | -                | -                | -         |    -4.63 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|           12 |     2492 | 2022-09-30 | EC Brugge     | W   | 0.300      | 0.143        | 0.007 (0.000)    | 0.507 (0.022)    | 0 (0.000) |     5.42 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|           11 |     2504 | 2022-09-30 | Illyrians     | W   | 0.298      | -            | -                | -                | 0 (0.000) |     1.17 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|           10 |     2616 | 2022-09-25 | Iron Branch   | L   | 0.267      | -            | -                | -                | -         |    -5.05 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            9 |     2705 | 2022-09-23 | ECLOT         | L   | 0.253      | -            | -                | -                | -         |    -1.49 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            8 |     2809 | 2022-09-20 | Partizan      | W   | 0.233      | 0.371        | 0.005 (0.000)    | 0.653 (0.057)    | 0 (0.000) |     4.42 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            7 |     3226 | 2022-09-08 | INVSN         | W   | 0.152      | 0.360        | 0.014 (0.001)    | 0.428 (0.023)    | -         |     3.51 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            6 |     3240 | 2022-09-07 | AVANGAR       | W   | 0.145      | 0.360        | 0.003 (0.000)    | 0.314 (0.016)    | -         |     2.44 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            5 |     3270 | 2022-09-05 | Websterz      | W   | 0.132      | -            | -                | -                | -         |     0.83 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            4 |     3361 | 2022-09-02 | VP.Prodigy    | L   | 0.112      | -            | -                | -                | -         |    -1.94 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            3 |     3506 | 2022-08-27 | 1WIN          | L   | 0.073      | -            | -                | -                | -         |    -0.81 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            2 |     3517 | 2022-08-27 | LODIS         | W   | 0.073      | -            | -                | -                | -         |     0.29 | d1Ledez, p1ty, Porya, seized, TruNiQ     |
|            1 |     3700 | 2022-08-21 | eSuba         | L   | 0.032      | -            | -                | -                | -         |    -0.27 | d1Ledez, p1ty, Porya, seized, TruNiQ     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,736.62)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.826 | $3,286.00      | $2,712.90       |
| 2022-12-02 |      0.719 | $10,012.00     | $7,199.87       |
| 2022-11-27 |      0.687 | $1,200.00      | $823.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
