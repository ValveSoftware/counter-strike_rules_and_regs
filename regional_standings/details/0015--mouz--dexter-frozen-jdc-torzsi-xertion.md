### Roster Details<br />
Team Name: MOUZ<br />
Roster: dexter, frozen, JDC, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1312.8<br />
<br />
Final Rank Value (1312.8) = Starting Rank Value (1260.1) + Head To Head Adjustments (52.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.552[<sup>1</sup>](#table2)
- Bounty Collected: 0.496[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.507[<sup>2</sup>](#table1)

The average of these factors is 0.420<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1260.1
- 400 + ( ( 0.420 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1260.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      121 | 2023-02-06 | Complexity      | L   | 1.000      | -            | -                | -                | -         |   -15.86 | dexter, frozen, JDC, torzsi, xertioN |
|           31 |      161 | 2023-02-04 | OG              | L   | 1.000      | -            | -                | -                | -         |    -8.27 | dexter, frozen, JDC, torzsi, xertioN |
|           30 |     1649 | 2022-11-12 | Outsiders       | L   | 0.587      | -            | -                | -                | -         |    -3.05 | dexter, frozen, JDC, torzsi, xertioN |
|           29 |     1660 | 2022-11-10 | Cloud9          | W   | 0.574      | 1.000        | 0.114 (0.065)    | 0.287 (0.165)    | 1 (0.574) |     9.27 | dexter, frozen, JDC, torzsi, xertioN |
|           28 |     1678 | 2022-11-08 | ENCE            | W   | 0.559      | 1.000        | 0.108 (0.061)    | 0.394 (0.220)    | 1 (0.559) |     7.95 | dexter, frozen, JDC, torzsi, xertioN |
|           27 |     1687 | 2022-11-07 | Outsiders       | L   | 0.552      | -            | -                | -                | -         |    -2.79 | dexter, frozen, JDC, torzsi, xertioN |
|           26 |     1702 | 2022-11-06 | Vitality        | W   | 0.545      | 1.000        | 0.352 (0.192)    | 0.437 (0.238)    | 1 (0.545) |    14.05 | dexter, frozen, JDC, torzsi, xertioN |
|           25 |     1715 | 2022-11-05 | BIG             | L   | 0.541      | -            | -                | -                | -         |    -7.19 | dexter, frozen, JDC, torzsi, xertioN |
|           24 |     1726 | 2022-11-05 | Liquid          | W   | 0.539      | 1.000        | 0.760 (0.409)    | 0.450 (0.242)    | 1 (0.539) |    16.01 | dexter, frozen, JDC, torzsi, xertioN |
|           23 |     1755 | 2022-11-01 | fnatic          | W   | 0.514      | 0.143        | 0.243 (0.018)    | 0.454 (0.033)    | 1 (0.514) |    11.83 | dexter, frozen, JDC, torzsi, xertioN |
|           22 |     1769 | 2022-10-31 | Evil Geniuses   | W   | 0.508      | -            | -                | -                | 1 (0.508) |     3.68 | dexter, frozen, JDC, torzsi, xertioN |
|           21 |     1784 | 2022-10-31 | Outsiders       | W   | 0.505      | 0.143        | 0.801 (0.058)    | -                | 1 (0.505) |    13.83 | dexter, frozen, JDC, torzsi, xertioN |
|           20 |     2126 | 2022-10-16 | Outsiders       | L   | 0.404      | -            | -                | -                | -         |    -1.65 | dexter, frozen, JDC, torzsi, xertioN |
|           19 |     2179 | 2022-10-14 | Movistar Riders | W   | 0.393      | -            | -                | -                | 1 (0.393) |     0.73 | dexter, frozen, JDC, torzsi, xertioN |
|           18 |     2195 | 2022-10-14 | Nixuh           | W   | 0.391      | -            | -                | -                | 1 (0.391) |     0.46 | dexter, frozen, JDC, torzsi, xertioN |
|           17 |     2309 | 2022-10-09 | Sangal          | W   | 0.359      | 0.143        | -                | 0.684 (0.035)    | 1 (0.359) |     1.71 | dexter, frozen, JDC, torzsi, xertioN |
|           16 |     2331 | 2022-10-08 | Vitality        | L   | 0.351      | -            | -                | -                | -         |    -1.45 | dexter, frozen, JDC, torzsi, xertioN |
|           15 |     2369 | 2022-10-06 | K23             | W   | 0.338      | -            | -                | -                | -         |     0.24 | dexter, frozen, JDC, torzsi, xertioN |
|           14 |     2384 | 2022-10-05 | Natus Vincere   | L   | 0.333      | -            | -                | -                | -         |    -0.94 | dexter, frozen, JDC, torzsi, xertioN |
|           13 |     2418 | 2022-10-04 | OG              | W   | 0.326      | 0.143        | 0.237 (0.011)    | -                | -         |     8.26 | dexter, frozen, JDC, torzsi, xertioN |
|           12 |     2523 | 2022-09-29 | Liquid          | L   | 0.292      | -            | -                | -                | -         |    -0.40 | dexter, frozen, JDC, torzsi, xertioN |
|           11 |     2633 | 2022-09-25 | Eternal Fire    | L   | 0.265      | -            | -                | -                | -         |    -7.18 | dexter, frozen, JDC, torzsi, xertioN |
|           10 |     2696 | 2022-09-23 | SINNERS         | W   | 0.253      | -            | -                | -                | -         |     1.49 | dexter, frozen, JDC, torzsi, xertioN |
|            9 |     2716 | 2022-09-23 | Rapid Ninjas    | W   | 0.252      | -            | -                | -                | -         |     0.15 | dexter, frozen, JDC, torzsi, xertioN |
|            8 |     2853 | 2022-09-18 | HEET            | W   | 0.220      | 0.922        | -                | 0.250 (0.051)    | -         |     0.98 | dexter, frozen, JDC, torzsi, xertioN |
|            7 |     2887 | 2022-09-17 | Complexity      | W   | 0.213      | 0.922        | 0.129 (0.025)    | 0.487 (0.095)    | -         |     4.40 | dexter, frozen, JDC, torzsi, xertioN |
|            6 |     2919 | 2022-09-16 | ENCE            | W   | 0.207      | 0.922        | 0.108 (0.021)    | 0.394 (0.075)    | -         |     3.45 | dexter, frozen, JDC, torzsi, xertioN |
|            5 |     2967 | 2022-09-15 | Astralis        | L   | 0.198      | -            | -                | -                | -         |    -2.66 | dexter, frozen, JDC, torzsi, xertioN |
|            4 |     3006 | 2022-09-14 | Heroic          | W   | 0.191      | 0.922        | 0.608 (0.107)    | 0.560 (0.099)    | -         |     5.75 | dexter, frozen, JDC, torzsi, xertioN |
|            3 |     3763 | 2022-08-17 | Aurora          | W   | 0.006      | -            | -                | -                | -         |     0.01 | Bymas, dexter, frozen, JDC, torzsi   |
|            2 |     3766 | 2022-08-17 | Sprout          | L   | 0.006      | -            | -                | -                | -         |    -0.12 | Bymas, dexter, frozen, JDC, torzsi   |
|            1 |     3793 | 2022-08-16 | GTZ             | W   | 0.000      | -            | -                | -                | -         |     0.00 | Bymas, dexter, frozen, JDC, torzsi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,323.72)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2022-11-13 |      0.594 | $80,000.00     | $47,485.90      |
| 2022-10-16 |      0.406 | $10,000.00     | $4,061.35       |
| 2022-10-02 |      0.314 | $37,500.00     | $11,776.48      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
