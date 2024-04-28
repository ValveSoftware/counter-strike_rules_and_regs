### Roster Details<br />
Team Name: ENCE<br />
Roster: dycha, Maden, Snappi, SunPayus, valde<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1255.0<br />
<br />
Final Rank Value (1255.0) = Starting Rank Value (1284.5) + Head To Head Adjustments (-29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.182[<sup>2</sup>](#table1)
- LAN Wins: 0.594[<sup>2</sup>](#table1)

The average of these factors is 0.432<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1284.5
- 400 + ( ( 0.432 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1284.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       63 | 2023-02-09 | BIG             | L   | 1.000      | -            | -                | -                | -         |   -12.66 | dycha, Maden, Snappi, SunPayus, valde |
|           37 |       65 | 2023-02-09 | Monte           | W   | 1.000      | 0.143        | -                | 0.945 (0.135)    | -         |     8.30 | dycha, Maden, Snappi, SunPayus, valde |
|           36 |       78 | 2023-02-08 | Bad News Eagles | W   | 1.000      | -            | -                | -                | -         |     8.87 | dycha, Maden, Snappi, SunPayus, valde |
|           35 |       83 | 2023-02-08 | HONORIS         | L   | 1.000      | -            | -                | -                | -         |   -28.56 | dycha, Maden, Snappi, SunPayus, valde |
|           34 |      185 | 2023-02-03 | Complexity      | L   | 1.000      | -            | -                | -                | -         |   -14.90 | dycha, Maden, Snappi, SunPayus, valde |
|           33 |      230 | 2023-02-01 | Cloud9          | L   | 1.000      | -            | -                | -                | -         |   -13.53 | dycha, Maden, Snappi, SunPayus, valde |
|           32 |      250 | 2023-02-01 | paiN            | W   | 1.000      | 0.143        | 0.101 (0.014)    | -                | 1 (1.000) |     7.01 | dycha, Maden, Snappi, SunPayus, valde |
|           31 |     1067 | 2022-12-07 | HAVU            | W   | 0.754      | 0.435        | 0.041 (0.014)    | 0.600 (0.197)    | -         |     3.79 | dycha, Maden, Snappi, SunPayus, valde |
|           30 |     1077 | 2022-12-07 | GamerLegion     | W   | 0.753      | 0.435        | 0.105 (0.034)    | 0.469 (0.153)    | -         |     7.71 | dycha, Maden, Snappi, SunPayus, valde |
|           29 |     1103 | 2022-12-06 | Endpoint        | W   | 0.748      | 0.435        | 0.033 (0.011)    | 0.641 (0.208)    | -         |     2.93 | dycha, Maden, Snappi, SunPayus, valde |
|           28 |     1140 | 2022-12-05 | AGO             | W   | 0.740      | 0.435        | -                | 0.328 (0.106)    | -         |     1.76 | dycha, Maden, Snappi, SunPayus, valde |
|           27 |     1562 | 2022-11-18 | Astralis        | L   | 0.627      | -            | -                | -                | -         |    -9.30 | dycha, Maden, Snappi, SunPayus, valde |
|           26 |     1611 | 2022-11-16 | BIG             | W   | 0.614      | 0.589        | 0.124 (0.045)    | 0.520 (0.188)    | 1 (0.614) |    11.34 | dycha, Maden, Snappi, SunPayus, valde |
|           25 |     1615 | 2022-11-16 | HEET            | W   | 0.613      | -            | -                | -                | 1 (0.613) |     2.75 | dycha, Maden, Snappi, SunPayus, valde |
|           24 |     1617 | 2022-11-16 | Sprout          | L   | 0.613      | -            | -                | -                | -         |   -13.48 | dycha, Maden, Snappi, SunPayus, valde |
|           23 |     1625 | 2022-11-16 | GamerLegion     | W   | 0.612      | 0.589        | 0.105 (0.038)    | 0.469 (0.169)    | 1 (0.612) |     6.46 | dycha, Maden, Snappi, SunPayus, valde |
|           22 |     1627 | 2022-11-16 | HAVU            | W   | 0.611      | 0.589        | 0.041 (0.015)    | 0.600 (0.216)    | 1 (0.611) |     2.48 | dycha, Maden, Snappi, SunPayus, valde |
|           21 |     1678 | 2022-11-08 | MOUZ            | L   | 0.559      | -            | -                | -                | -         |    -7.95 | dycha, Maden, Snappi, SunPayus, valde |
|           20 |     1684 | 2022-11-07 | Vitality        | W   | 0.553      | 1.000        | 0.352 (0.195)    | 0.437 (0.242)    | 1 (0.553) |    14.53 | dycha, Maden, Snappi, SunPayus, valde |
|           19 |     1699 | 2022-11-06 | fnatic          | L   | 0.546      | -            | -                | -                | -         |    -4.55 | dycha, Maden, Snappi, SunPayus, valde |
|           18 |     1710 | 2022-11-05 | Bad News Eagles | W   | 0.541      | 1.000        | 0.066 (0.036)    | 0.375 (0.203)    | 1 (0.541) |     5.48 | dycha, Maden, Snappi, SunPayus, valde |
|           17 |     1716 | 2022-11-05 | FURIA           | L   | 0.540      | -            | -                | -                | -         |    -8.54 | dycha, Maden, Snappi, SunPayus, valde |
|           16 |     2109 | 2022-10-16 | Outsiders       | L   | 0.406      | -            | -                | -                | -         |    -1.74 | dycha, Maden, Snappi, SunPayus, valde |
|           15 |     2118 | 2022-10-16 | Eternal Fire    | W   | 0.405      | -            | -                | -                | 1 (0.405) |     1.75 | dycha, Maden, Snappi, SunPayus, valde |
|           14 |     2184 | 2022-10-14 | Outsiders       | W   | 0.393      | 0.500        | 0.801 (0.157)    | -                | 1 (0.393) |    10.81 | dycha, Maden, Snappi, SunPayus, valde |
|           13 |     2201 | 2022-10-14 | TeamOne         | W   | 0.390      | -            | -                | -                | 1 (0.390) |     1.41 | dycha, Maden, Snappi, SunPayus, valde |
|           12 |     2354 | 2022-10-07 | BIG             | W   | 0.344      | -            | -                | -                | -         |     7.25 | dycha, Maden, Snappi, SunPayus, valde |
|           11 |     2392 | 2022-10-05 | Falcons         | W   | 0.333      | -            | -                | -                | -         |     1.80 | dycha, Maden, Snappi, SunPayus, valde |
|           10 |     2420 | 2022-10-04 | HEET            | W   | 0.326      | -            | -                | -                | -         |     1.55 | dycha, Maden, Snappi, SunPayus, valde |
|            9 |     2638 | 2022-09-25 | ECSTATIC        | L   | 0.264      | -            | -                | -                | -         |    -7.46 | dycha, Maden, Snappi, SunPayus, valde |
|            8 |     2660 | 2022-09-24 | 777             | W   | 0.259      | -            | -                | -                | -         |     0.34 | dycha, Maden, Snappi, SunPayus, valde |
|            7 |     2665 | 2022-09-24 | HAVU            | L   | 0.258      | -            | -                | -                | -         |    -6.92 | dycha, Maden, Snappi, SunPayus, valde |
|            6 |     2672 | 2022-09-24 | 777             | W   | 0.257      | -            | -                | -                | -         |     0.31 | dycha, Maden, Snappi, SunPayus, valde |
|            5 |     2858 | 2022-09-18 | Complexity      | L   | 0.220      | -            | -                | -                | -         |    -2.51 | dycha, Maden, Snappi, SunPayus, valde |
|            4 |     2883 | 2022-09-17 | Astralis        | L   | 0.213      | -            | -                | -                | -         |    -3.04 | dycha, Maden, Snappi, SunPayus, valde |
|            3 |     2919 | 2022-09-16 | MOUZ            | L   | 0.207      | -            | -                | -                | -         |    -3.45 | dycha, Maden, Snappi, SunPayus, valde |
|            2 |     2949 | 2022-09-15 | Heroic          | L   | 0.200      | -            | -                | -                | -         |    -0.34 | dycha, Maden, Snappi, SunPayus, valde |
|            1 |     2991 | 2022-09-14 | HEET            | W   | 0.193      | -            | -                | -                | -         |     0.79 | dycha, Maden, Snappi, SunPayus, valde |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($51,398.18)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $4,500.00      | $4,500.00       |
| 2022-12-07 |      0.754 | $22,000.00     | $16,582.33      |
| 2022-11-20 |      0.640 | $10,000.00     | $6,396.20       |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-16 |      0.406 | $20,000.00     | $8,122.69       |
| 2022-10-02 |      0.314 | $12,500.00     | $3,925.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
