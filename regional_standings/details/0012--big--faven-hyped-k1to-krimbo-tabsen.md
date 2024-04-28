### Roster Details<br />
Team Name: BIG<br />
Roster: faveN, hyped, k1to, Krimbo, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1340.7<br />
<br />
Final Rank Value (1340.7) = Starting Rank Value (1385.1) + Head To Head Adjustments (-44.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.524[<sup>1</sup>](#table2)
- Bounty Collected: 0.466[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.744[<sup>2</sup>](#table1)

The average of these factors is 0.481<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1385.1
- 400 + ( ( 0.481 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1385.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       52 | 2023-02-10 | HONORIS           | W   | 1.000      | 0.143        | -                | 0.748 (0.107)    | -         |     2.09 | faveN, hyped, k1to, Krimbo, tabseN  |
|           46 |       63 | 2023-02-09 | ENCE              | W   | 1.000      | -            | -                | -                | -         |    12.66 | faveN, hyped, k1to, Krimbo, tabseN  |
|           45 |       67 | 2023-02-09 | HEET              | W   | 1.000      | -            | -                | -                | -         |     1.93 | faveN, hyped, k1to, Krimbo, tabseN  |
|           44 |       76 | 2023-02-08 | Sprout            | W   | 1.000      | -            | -                | -                | -         |     6.56 | faveN, hyped, k1to, Krimbo, tabseN  |
|           43 |       87 | 2023-02-08 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -25.07 | faveN, hyped, k1to, Krimbo, tabseN  |
|           42 |      146 | 2023-02-05 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -16.35 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           41 |      178 | 2023-02-04 | G2                | L   | 1.000      | -            | -                | -                | -         |    -1.16 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           40 |      226 | 2023-02-01 | FURIA             | W   | 1.000      | 0.143        | 0.131 (0.019)    | -                | 1 (1.000) |    14.22 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           39 |      239 | 2023-02-01 | Complexity        | W   | 1.000      | 0.143        | 0.129 (0.018)    | -                | 1 (1.000) |    14.17 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           38 |      311 | 2023-01-29 | Heroic            | L   | 1.000      | -            | -                | -                | -         |    -3.34 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           37 |      379 | 2023-01-27 | Liquid            | W   | 1.000      | 0.571        | 0.760 (0.434)    | 0.450 (0.257)    | 1 (1.000) |    28.52 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           36 |      490 | 2023-01-23 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -16.31 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           35 |      566 | 2023-01-20 | G2                | L   | 1.000      | -            | -                | -                | -         |    -1.01 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           34 |      818 | 2022-12-17 | HAVU              | L   | 0.819      | -            | -                | -                | -         |   -21.92 | faveN, gob b, k1to, syrsoN, tabseN  |
|           33 |      835 | 2022-12-16 | Young Ninjas      | W   | 0.814      | 0.435        | 0.076 (0.027)    | 0.694 (0.246)    | -         |     2.65 | faveN, k1to, Krimbo, syrsoN, tabseN |
|           32 |     1534 | 2022-11-20 | fnatic            | L   | 0.640      | -            | -                | -                | -         |    -6.61 | faveN, k1to, Krimbo, s1n, tabseN    |
|           31 |     1550 | 2022-11-19 | Sprout            | W   | 0.633      | 0.589        | 0.067 (0.025)    | 0.446 (0.166)    | 1 (0.633) |     5.21 | faveN, k1to, Krimbo, s1n, tabseN    |
|           30 |     1568 | 2022-11-18 | 500               | W   | 0.626      | 0.589        | 0.085 (0.031)    | 0.760 (0.280)    | 1 (0.626) |     4.04 | faveN, k1to, Krimbo, s1n, tabseN    |
|           29 |     1611 | 2022-11-16 | ENCE              | L   | 0.614      | -            | -                | -                | -         |   -11.34 | faveN, k1to, Krimbo, s1n, tabseN    |
|           28 |     1618 | 2022-11-16 | GamerLegion       | L   | 0.613      | -            | -                | -                | -         |   -14.76 | faveN, k1to, Krimbo, s1n, tabseN    |
|           27 |     1620 | 2022-11-16 | HAVU              | W   | 0.612      | 0.589        | -                | 0.600 (0.216)    | 1 (0.612) |     1.64 | faveN, k1to, Krimbo, s1n, tabseN    |
|           26 |     1624 | 2022-11-16 | Sprout            | W   | 0.612      | 0.589        | 0.067 (0.024)    | 0.446 (0.161)    | 1 (0.612) |     4.27 | faveN, k1to, Krimbo, s1n, tabseN    |
|           25 |     1630 | 2022-11-16 | HEET              | W   | 0.611      | 0.589        | -                | 0.250 (0.090)    | 1 (0.611) |     1.78 | faveN, k1to, Krimbo, s1n, tabseN    |
|           24 |     1676 | 2022-11-08 | Natus Vincere     | L   | 0.560      | -            | -                | -                | -         |    -2.54 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           23 |     1685 | 2022-11-07 | fnatic            | L   | 0.553      | -            | -                | -                | -         |    -6.28 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           22 |     1691 | 2022-11-06 | FURIA             | L   | 0.547      | -            | -                | -                | -         |   -10.40 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           21 |     1715 | 2022-11-05 | MOUZ              | W   | 0.541      | 1.000        | 0.155 (0.084)    | 0.276 (0.149)    | 1 (0.541) |     7.19 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           20 |     1723 | 2022-11-05 | Sprout            | W   | 0.539      | 1.000        | 0.067 (0.036)    | 0.446 (0.241)    | 1 (0.539) |     3.52 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           19 |     1749 | 2022-11-02 | 9z                | W   | 0.519      | -            | -                | -                | -         |     1.28 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           18 |     1761 | 2022-11-01 | Grayhound         | W   | 0.512      | -            | -                | -                | -         |     0.88 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           17 |     1768 | 2022-10-31 | Bad News Eagles   | L   | 0.508      | -            | -                | -                | -         |   -12.73 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           16 |     1780 | 2022-10-31 | FURIA             | W   | 0.506      | -            | -                | -                | -         |     5.56 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           15 |     2016 | 2022-10-20 | Sangal            | L   | 0.433      | -            | -                | -                | -         |   -12.48 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           14 |     2315 | 2022-10-09 | K23               | W   | 0.358      | -            | -                | -                | -         |     0.15 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           13 |     2333 | 2022-10-08 | Heroic            | L   | 0.351      | -            | -                | -                | -         |    -1.08 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           12 |     2354 | 2022-10-07 | ENCE              | L   | 0.344      | -            | -                | -                | -         |    -7.25 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           11 |     2390 | 2022-10-05 | Vitality          | W   | 0.333      | 0.143        | 0.352 (0.017)    | -                | -         |     8.23 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|           10 |     2419 | 2022-10-04 | Sangal            | W   | 0.326      | -            | -                | -                | -         |     0.89 | k1to, Krimbo, s1n, syrsoN, tabseN   |
|            9 |     3072 | 2022-09-11 | FaZe              | L   | 0.173      | -            | -                | -                | -         |    -0.79 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            8 |     3147 | 2022-09-10 | FTW               | W   | 0.165      | -            | -                | -                | -         |     0.30 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            7 |     3172 | 2022-09-09 | MIBR              | W   | 0.159      | -            | -                | -                | -         |     0.49 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            6 |     3224 | 2022-09-08 | G2                | L   | 0.152      | -            | -                | -                | -         |    -0.15 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            5 |     3238 | 2022-09-07 | Outsiders         | L   | 0.146      | -            | -                | -                | -         |    -0.91 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            4 |     3573 | 2022-08-25 | G2                | L   | 0.060      | -            | -                | -                | -         |    -0.06 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            3 |     3699 | 2022-08-21 | Heroic            | L   | 0.032      | -            | -                | -                | -         |    -0.09 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            2 |     3703 | 2022-08-21 | Evil Geniuses     | W   | 0.032      | -            | -                | -                | -         |     0.14 | faveN, k1to, Krimbo, syrsoN, tabseN |
|            1 |     3708 | 2022-08-21 | Heroic            | L   | 0.031      | -            | -                | -                | -         |    -0.09 | faveN, k1to, Krimbo, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,626.60)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-01-29 |      1.000 | $8,500.00      | $8,500.00       |
| 2022-12-18 |      0.827 | $2,000.00      | $1,654.07       |
| 2022-11-20 |      0.640 | $28,000.00     | $17,909.36      |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-23 |      0.453 | $5,000.00      | $2,266.86       |
| 2022-10-02 |      0.314 | $19,000.00     | $5,966.75       |
| 2022-08-28 |      0.081 | $5,666.00      | $458.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
