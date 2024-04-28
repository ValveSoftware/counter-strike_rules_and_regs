### Roster Details<br />
Team Name: Anonymo<br />
Roster: Demho, innocent, mwlky, SZPERO, Vegi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [116]( ../standings_europe.md)<br />
Final Rank Value:  656.8<br />
<br />
Final Rank Value (656.8) = Starting Rank Value (579.7) + Head To Head Adjustments (77.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.7
- 400 + ( ( 0.088 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 579.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |        1 | 2023-02-12 | Nexus                | L   | 1.000      | -            | -                | -                | -         |    -7.31 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           37 |        7 | 2023-02-12 | undefined            | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.259 (0.037)    | 0 (0.000) |    20.29 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           36 |       11 | 2023-02-12 | Eternal Fire Academy | W   | 1.000      | 0.143        | -                | 0.116 (0.017)    | 0 (0.000) |    13.07 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           35 |      213 | 2023-02-02 | NAVI Junior          | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.108 (0.015)    | 0 (0.000) |    19.32 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           34 |      292 | 2023-01-30 | JANO                 | L   | 1.000      | -            | -                | -                | -         |   -11.42 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           33 |      535 | 2023-01-22 | Goodfellas           | L   | 1.000      | -            | -                | -                | -         |   -14.36 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           32 |      555 | 2023-01-21 | ALTERNATE aTTaX      | L   | 1.000      | -            | -                | -                | -         |    -9.92 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           31 |      623 | 2023-01-18 | sYnck                | L   | 1.000      | -            | -                | -                | -         |    -9.83 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           30 |      680 | 2023-01-15 | Astralis Talent      | L   | 1.000      | -            | -                | -                | -         |    -5.82 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           29 |      722 | 2023-01-11 | sYnck                | W   | 0.985      | 0.371        | 0.002 (0.001)    | 0.397 (0.145)    | 0 (0.000) |    21.25 | Demho, innocent, mwlky, SZPERO, Vegi   |
|           28 |     1007 | 2022-12-09 | ex-Into the Breach   | L   | 0.768      | -            | -                | -                | -         |    -5.20 | Demho, innocent, mwlky, oskarish, Vegi |
|           27 |     1035 | 2022-12-08 | MOUZ NXT             | W   | 0.760      | 0.371        | 0.015 (0.004)    | 0.537 (0.152)    | 0 (0.000) |    16.48 | Demho, innocent, mwlky, oskarish, Vegi |
|           26 |     1070 | 2022-12-07 | allStars             | W   | 0.753      | 0.371        | 0.001 (0.000)    | 0.029 (0.008)    | 0 (0.000) |    11.40 | Demho, innocent, mwlky, oskarish, Vegi |
|           25 |     1119 | 2022-12-06 | LDLC                 | L   | 0.746      | -            | -                | -                | -         |    -7.97 | Demho, innocent, mwlky, oskarish, Vegi |
|           24 |     1303 | 2022-11-30 | Tricked              | L   | 0.707      | -            | -                | -                | -         |    -3.62 | Demho, innocent, mwlky, oskarish, Vegi |
|           23 |     1340 | 2022-11-29 | HAVU                 | L   | 0.698      | -            | -                | -                | -         |    -3.44 | Demho, innocent, mwlky, oskarish, Vegi |
|           22 |     1424 | 2022-11-26 | Falcons              | W   | 0.679      | 0.435        | 0.045 (0.013)    | 0.767 (0.226)    | 0 (0.000) |    18.07 | Demho, innocent, mwlky, oskarish, Vegi |
|           21 |     1473 | 2022-11-24 | forZe                | L   | 0.667      | -            | -                | -                | -         |    -2.32 | Demho, innocent, mwlky, oskarish, Vegi |
|           20 |     1524 | 2022-11-21 | SKADE X              | W   | 0.645      | -            | -                | -                | 0 (0.000) |    11.85 | Demho, innocent, mwlky, oskarish, Vegi |
|           19 |     1533 | 2022-11-20 |  180mgkoffein        | W   | 0.640      | -            | -                | -                | 0 (0.000) |     7.32 | Demho, innocent, mwlky, oskarish, Vegi |
|           18 |     1551 | 2022-11-19 | Websterz             | L   | 0.633      | -            | -                | -                | -         |    -3.51 | Demho, innocent, mwlky, oskarish, Vegi |
|           17 |     1556 | 2022-11-19 | GTZ                  | W   | 0.632      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |    10.64 | Demho, innocent, mwlky, oskarish, Vegi |
|           16 |     1686 | 2022-11-07 | Tricked              | L   | 0.553      | -            | -                | -                | -         |    -1.62 | Demho, innocent, mwlky, oskarish, Vegi |
|           15 |     1689 | 2022-11-07 | Believe              | W   | 0.551      | 0.426        | 0.006 (0.001)    | 0.344 (0.081)    | -         |    13.24 | Demho, innocent, mwlky, oskarish, Vegi |
|           14 |     1707 | 2022-11-06 | Tricked              | L   | 0.544      | -            | -                | -                | -         |    -1.45 | Demho, innocent, mwlky, oskarish, Vegi |
|           13 |     2296 | 2022-10-10 | AVANGAR              | L   | 0.366      | -            | -                | -                | -         |    -3.17 | Demho, innocent, mwlky, oskarish, Vegi |
|           12 |     2306 | 2022-10-09 | Entropiq Prague      | L   | 0.360      | -            | -                | -                | -         |    -3.41 | Demho, innocent, mwlky, oskarish, Vegi |
|           11 |     2519 | 2022-09-29 | BLUEJAYS             | L   | 0.293      | -            | -                | -                | -         |    -0.52 | Demho, Flayy, innocent, oskarish, Vegi |
|           10 |     2575 | 2022-09-27 | Iron Branch          | L   | 0.281      | -            | -                | -                | -         |    -3.31 | Demho, Flayy, innocent, oskarish, Vegi |
|            9 |     2612 | 2022-09-25 | ex-Into the Breach   | W   | 0.267      | 0.371        | 0.005 (0.001)    | 0.520 (0.052)    | -         |     6.90 | Demho, Flayy, innocent, oskarish, Vegi |
|            8 |     2741 | 2022-09-22 | Believe              | L   | 0.247      | -            | -                | -                | -         |    -2.04 | Demho, Flayy, innocent, oskarish, Vegi |
|            7 |     2785 | 2022-09-21 | NeedDOCTOR           | W   | 0.239      | -            | -                | -                | -         |     4.58 | Demho, Flayy, innocent, oskarish, Vegi |
|            6 |     3045 | 2022-09-12 | HONORIS              | L   | 0.180      | -            | -                | -                | -         |    -0.94 | Demho, Flayy, innocent, oskarish, Vegi |
|            5 |     3049 | 2022-09-12 | UNGENTIUM            | W   | 0.179      | 0.143        | 0.015 (0.000)    | 0.474 (0.012)    | -         |     4.51 | Demho, Flayy, innocent, oskarish, Vegi |
|            4 |     3086 | 2022-09-11 | Entropiq Prague      | L   | 0.172      | -            | -                | -                | -         |    -1.59 | Demho, Flayy, innocent, oskarish, Vegi |
|            3 |     3508 | 2022-08-27 | SAW                  | L   | 0.073      | -            | -                | -                | -         |    -0.10 | Demho, Flayy, innocent, oskarish, Vegi |
|            2 |     3519 | 2022-08-27 | ONYX                 | W   | 0.072      | -            | -                | -                | -         |     1.00 | Demho, Flayy, innocent, oskarish, Vegi |
|            1 |     3693 | 2022-08-21 | GamerLegion          | L   | 0.033      | -            | -                | -                | -         |    -0.04 | Demho, Flayy, innocent, oskarish, Vegi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
