### Roster Details<br />
Team Name: Complexity<br />
Roster: FaNg, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1342.3<br />
<br />
Final Rank Value (1342.3) = Starting Rank Value (1380.7) + Head To Head Adjustments (-38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.529[<sup>1</sup>](#table2)
- Bounty Collected: 0.456[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.752[<sup>2</sup>](#table1)

The average of these factors is 0.479<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1380.7
- 400 + ( ( 0.479 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1380.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       97 | 2023-02-07 | Outsiders       | L   | 1.000      | -            | -                | -                | -         |    -5.34 | FaNg, floppy, Grim, hallzerk, JT |
|           43 |      108 | 2023-02-07 | fnatic          | W   | 1.000      | 1.000        | 0.243 (0.243)    | 0.454 (0.454)    | 1 (1.000) |    21.40 | FaNg, floppy, Grim, hallzerk, JT |
|           42 |      121 | 2023-02-06 | MOUZ            | W   | 1.000      | 1.000        | 0.155 (0.155)    | 0.276 (0.276)    | 1 (1.000) |    15.86 | FaNg, floppy, Grim, hallzerk, JT |
|           41 |      155 | 2023-02-05 | Heroic          | L   | 1.000      | -            | -                | -                | -         |    -2.95 | FaNg, floppy, Grim, hallzerk, JT |
|           40 |      185 | 2023-02-03 | ENCE            | W   | 1.000      | 0.143        | 0.108 (0.015)    | -                | 1 (1.000) |    14.90 | FaNg, floppy, Grim, hallzerk, JT |
|           39 |      211 | 2023-02-02 | Permitta        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.63 | FaNg, floppy, Grim, hallzerk, JT |
|           38 |      239 | 2023-02-01 | BIG             | L   | 1.000      | -            | -                | -                | -         |   -14.17 | FaNg, floppy, Grim, hallzerk, JT |
|           37 |      332 | 2023-01-28 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -4.43 | FaNg, floppy, Grim, hallzerk, JT |
|           36 |      383 | 2023-01-27 | Evil Geniuses   | W   | 1.000      | 0.571        | 0.062 (0.035)    | 0.234 (0.134)    | 1 (1.000) |     6.92 | FaNg, floppy, Grim, hallzerk, JT |
|           35 |      519 | 2023-01-22 | Liquid          | L   | 1.000      | -            | -                | -                | -         |    -2.33 | FaNg, floppy, Grim, hallzerk, JT |
|           34 |      576 | 2023-01-20 | FaZe            | L   | 1.000      | -            | -                | -                | -         |    -3.18 | FaNg, floppy, Grim, hallzerk, JT |
|           33 |      937 | 2022-12-11 | Nouns           | L   | 0.781      | -            | -                | -                | -         |   -22.39 | FaNg, floppy, Grim, hallzerk, JT |
|           32 |      968 | 2022-12-10 | TeamOne         | W   | 0.775      | 0.384        | -                | 0.445 (0.133)    | -         |     2.29 | FaNg, floppy, Grim, hallzerk, JT |
|           31 |     1026 | 2022-12-08 | Eclipse         | W   | 0.762      | -            | -                | -                | -         |     0.15 | FaNg, floppy, Grim, hallzerk, JT |
|           30 |     1157 | 2022-12-04 | Strife          | W   | 0.735      | -            | -                | -                | -         |     1.20 | FaNg, floppy, Grim, hallzerk, JT |
|           29 |     1162 | 2022-12-04 | Nouns           | W   | 0.734      | 0.354        | 0.059 (0.015)    | 0.589 (0.153)    | -         |     1.91 | FaNg, floppy, Grim, hallzerk, JT |
|           28 |     1369 | 2022-11-27 | ATK             | W   | 0.689      | 0.354        | 0.070 (0.017)    | 0.646 (0.158)    | -         |     2.65 | FaNg, floppy, Grim, hallzerk, JT |
|           27 |     1372 | 2022-11-27 | EG Black        | W   | 0.688      | 0.354        | -                | 0.362 (0.088)    | -         |     1.54 | FaNg, floppy, Grim, hallzerk, JT |
|           26 |     1407 | 2022-11-26 | timbermen       | W   | 0.682      | -            | -                | -                | -         |     1.24 | FaNg, floppy, Grim, hallzerk, JT |
|           25 |     1579 | 2022-11-17 | Astralis        | L   | 0.620      | -            | -                | -                | -         |   -10.60 | FaNg, floppy, Grim, hallzerk, JT |
|           24 |     1591 | 2022-11-17 | Bad News Eagles | W   | 0.619      | 0.589        | 0.066 (0.024)    | 0.375 (0.137)    | 1 (0.619) |     5.08 | FaNg, floppy, Grim, hallzerk, JT |
|           23 |     1594 | 2022-11-17 | SAW             | L   | 0.619      | -            | -                | -                | -         |   -15.19 | FaNg, floppy, Grim, hallzerk, JT |
|           22 |     1597 | 2022-11-17 | fnatic          | W   | 0.618      | 0.589        | 0.243 (0.088)    | 0.454 (0.165)    | 1 (0.618) |    13.11 | FaNg, floppy, Grim, hallzerk, JT |
|           21 |     1603 | 2022-11-17 | 500             | L   | 0.617      | -            | -                | -                | -         |   -16.24 | FaNg, floppy, Grim, hallzerk, JT |
|           20 |     2030 | 2022-10-19 | Sharks          | L   | 0.428      | -            | -                | -                | -         |   -12.97 | FaNg, floppy, Grim, hallzerk, JT |
|           19 |     2303 | 2022-10-09 | Imperial        | L   | 0.361      | -            | -                | -                | -         |   -10.62 | FaNg, floppy, Grim, hallzerk, JT |
|           18 |     2319 | 2022-10-08 | ex-Isurus       | W   | 0.354      | -            | -                | -                | 1 (0.354) |     0.62 | FaNg, floppy, Grim, hallzerk, JT |
|           17 |     2343 | 2022-10-07 | 00NATION        | L   | 0.346      | -            | -                | -                | -         |   -10.34 | FaNg, floppy, Grim, hallzerk, JT |
|           16 |     2361 | 2022-10-06 | Liquid          | L   | 0.339      | -            | -                | -                | -         |    -0.88 | FaNg, floppy, Grim, hallzerk, JT |
|           15 |     2389 | 2022-10-05 | paiN            | W   | 0.333      | -            | -                | -                | 1 (0.333) |     1.67 | FaNg, floppy, Grim, hallzerk, JT |
|           14 |     2403 | 2022-10-05 | ATK             | W   | 0.331      | -            | -                | -                | 1 (0.331) |     0.81 | FaNg, floppy, Grim, hallzerk, JT |
|           13 |     2576 | 2022-09-27 | FaZe            | L   | 0.280      | -            | -                | -                | -         |    -1.25 | FaNg, floppy, Grim, hallzerk, JT |
|           12 |     2858 | 2022-09-18 | ENCE            | W   | 0.220      | 0.922        | 0.108 (0.022)    | -                | -         |     2.51 | FaNg, floppy, Grim, hallzerk, JT |
|           11 |     2887 | 2022-09-17 | MOUZ            | L   | 0.213      | -            | -                | -                | -         |    -4.40 | FaNg, floppy, Grim, hallzerk, JT |
|           10 |     2926 | 2022-09-16 | Heroic          | L   | 0.206      | -            | -                | -                | -         |    -0.59 | FaNg, floppy, Grim, hallzerk, JT |
|            9 |     2958 | 2022-09-15 | HEET            | W   | 0.199      | -            | -                | -                | -         |     0.49 | FaNg, floppy, Grim, hallzerk, JT |
|            8 |     2996 | 2022-09-14 | Astralis        | W   | 0.193      | 0.922        | 0.149 (0.026)    | 0.538 (0.096)    | -         |     2.53 | FaNg, floppy, Grim, hallzerk, JT |
|            7 |     3579 | 2022-08-25 | OG              | L   | 0.058      | -            | -                | -                | -         |    -0.55 | FaNg, floppy, Grim, hallzerk, JT |
|            6 |     3720 | 2022-08-20 | Natus Vincere   | L   | 0.026      | -            | -                | -                | -         |    -0.12 | FaNg, floppy, Grim, hallzerk, JT |
|            5 |     3724 | 2022-08-20 | Liquid          | L   | 0.025      | -            | -                | -                | -         |    -0.06 | FaNg, floppy, Grim, hallzerk, JT |
|            4 |     3734 | 2022-08-20 | Natus Vincere   | W   | 0.024      | -            | -                | -                | -         |     0.66 | FaNg, floppy, Grim, hallzerk, JT |
|            3 |     3757 | 2022-08-17 | Nouns           | W   | 0.007      | -            | -                | -                | -         |     0.01 | FaNg, floppy, Grim, hallzerk, JT |
|            2 |     3776 | 2022-08-16 | Strife          | W   | 0.002      | -            | -                | -                | -         |     0.00 | FaNg, floppy, Grim, hallzerk, JT |
|            1 |     3789 | 2022-08-16 | ONET4P          | W   | 0.001      | -            | -                | -                | -         |     0.00 | FaNg, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($61,047.38)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $24,000.00     | $24,000.00      |
| 2023-01-29 |      1.000 | $8,500.00      | $8,500.00       |
| 2022-12-11 |      0.783 | $2,500.00      | $1,956.39       |
| 2022-12-04 |      0.735 | $9,000.00      | $6,618.54       |
| 2022-11-27 |      0.689 | $9,000.00      | $6,203.96       |
| 2022-11-20 |      0.640 | $4,000.00      | $2,558.48       |
| 2022-10-23 |      0.455 | $5,000.00      | $2,272.85       |
| 2022-10-02 |      0.314 | $27,000.00     | $8,479.06       |
| 2022-08-28 |      0.081 | $5,666.00      | $458.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
