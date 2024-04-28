### Roster Details<br />
Team Name: Copenhagen Flames<br />
Roster: b0RUP, birdfromsky, raalz, regali, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1046.2<br />
<br />
Final Rank Value (1046.2) = Starting Rank Value (976.6) + Head To Head Adjustments (69.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 976.6
- 400 + ( ( 0.282 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 976.6


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
|           52 |       69 | 2023-02-09 | ECLOT              | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.584 (0.224)    | 0 (0.000) |    10.78 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           51 |      124 | 2023-02-06 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -5.20 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           50 |      143 | 2023-02-05 | SINNERS            | W   | 1.000      | 0.435        | 0.068 (0.030)    | 0.549 (0.238)    | 0 (0.000) |    13.12 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           49 |      179 | 2023-02-04 | HAVU               | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.600 (0.261)    | 0 (0.000) |    15.89 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           48 |      264 | 2023-01-31 | 9INE               | L   | 1.000      | -            | -                | -                | -         |   -16.97 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           47 |      269 | 2023-01-31 | IKLA               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.68 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           46 |      305 | 2023-01-29 | Falcons            | L   | 1.000      | -            | -                | -                | -         |   -16.66 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           45 |      335 | 2023-01-28 | Spirit Academy     | L   | 1.000      | -            | -                | -                | -         |   -21.88 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           44 |      341 | 2023-01-28 | Insilio            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.79 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           43 |      488 | 2023-01-23 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -21.61 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           42 |      512 | 2023-01-22 | Movistar Riders    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.17 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           41 |      525 | 2023-01-22 | GTZ                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.45 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           40 |      537 | 2023-01-22 | Movistar Riders    | L   | 1.000      | -            | -                | -                | -         |   -26.69 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           39 |      768 | 2022-12-18 | Astralis           | W   | 0.827      | 0.435        | 0.149 (0.054)    | 0.538 (0.194)    | 0 (0.000) |    20.07 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           38 |      789 | 2022-12-18 | HAVU               | W   | 0.825      | 0.435        | 0.041 (0.015)    | 0.600 (0.215)    | 0 (0.000) |    11.95 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           37 |      810 | 2022-12-17 | ECLOT              | W   | 0.820      | 0.435        | 0.046 (0.016)    | 0.584 (0.208)    | 0 (0.000) |     8.98 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           36 |      866 | 2022-12-15 | sYnck              | W   | 0.806      | -            | -                | -                | -         |     5.15 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           35 |     1530 | 2022-11-20 | K23                | W   | 0.640      | -            | -                | -                | -         |     7.12 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           34 |     1536 | 2022-11-20 | SINNERS            | W   | 0.639      | 0.426        | 0.068 (0.019)    | -                | -         |     9.27 | birdfromsky, buNNy, Inspire, regali, TMB |
|           33 |     1557 | 2022-11-19 | Falcons            | W   | 0.632      | 0.426        | -                | 0.767 (0.206)    | -         |     8.05 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           32 |     1565 | 2022-11-18 | ex-Finest          | W   | 0.627      | -            | -                | -                | -         |     6.83 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           31 |     1571 | 2022-11-18 | K23                | W   | 0.626      | -            | -                | -                | -         |     7.31 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           30 |     1585 | 2022-11-17 | Sangal             | W   | 0.620      | 0.426        | -                | 0.684 (0.181)    | -         |     7.98 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           29 |     1592 | 2022-11-17 | HAVU               | W   | 0.619      | -            | -                | -                | -         |     7.87 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           28 |     1642 | 2022-11-15 | 9INE               | W   | 0.605      | 0.435        | -                | 1.000 (0.263)    | -         |     8.51 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           27 |     1668 | 2022-11-09 | ex-Into the Breach | W   | 0.566      | -            | -                | -                | -         |     5.31 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           26 |     1679 | 2022-11-08 | ECLOT              | L   | 0.559      | -            | -                | -                | -         |    -9.12 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           25 |     1681 | 2022-11-08 | sYnck              | W   | 0.557      | -            | -                | -                | -         |     3.69 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           24 |     1821 | 2022-10-28 | Tricked            | L   | 0.486      | -            | -                | -                | -         |    -7.25 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           23 |     1843 | 2022-10-27 | Enterprise         | L   | 0.480      | -            | -                | -                | -         |    -9.87 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           22 |     1889 | 2022-10-25 | 500                | W   | 0.466      | 0.435        | 0.085 (0.017)    | -                | -         |     8.05 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           21 |     1900 | 2022-10-24 | Monte              | W   | 0.460      | 0.435        | -                | 0.945 (0.189)    | -         |     6.40 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           20 |     1910 | 2022-10-24 | forZe              | W   | 0.459      | -            | -                | -                | -         |     2.40 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           19 |     1939 | 2022-10-23 | EPG Family         | L   | 0.451      | -            | -                | -                | -         |   -10.31 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           18 |     1969 | 2022-10-22 | Websterz           | W   | 0.445      | -            | -                | -                | -         |     5.07 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           17 |     1989 | 2022-10-21 | K23                | W   | 0.439      | -            | -                | -                | -         |     1.54 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           16 |     2017 | 2022-10-20 | EPG Family         | W   | 0.433      | -            | -                | -                | -         |     3.71 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           15 |     2058 | 2022-10-18 | Tricked            | W   | 0.420      | -            | -                | -                | -         |     6.86 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           14 |     2076 | 2022-10-18 | Zero Tenacity      | W   | 0.418      | -            | -                | -                | -         |     3.22 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           13 |     2083 | 2022-10-17 | IKLA               | L   | 0.413      | -            | -                | -                | -         |    -7.82 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           12 |     2129 | 2022-10-15 | Sangal             | W   | 0.400      | -            | -                | -                | -         |     5.96 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           11 |     2143 | 2022-10-15 | 500                | L   | 0.399      | -            | -                | -                | -         |    -5.16 | b0RUP, birdfromsky, raalz, regali, TMB   |
|           10 |     2187 | 2022-10-14 | Nemiga             | L   | 0.392      | -            | -                | -                | -         |    -9.71 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            9 |     2229 | 2022-10-13 | BLUEJAYS           | W   | 0.385      | 0.435        | 0.102 (0.017)    | -                | -         |     7.54 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            8 |     2280 | 2022-10-11 | NAVI Junior        | W   | 0.372      | -            | -                | -                | -         |     2.69 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            7 |     2290 | 2022-10-11 | BLUEJAYS           | W   | 0.371      | 0.435        | 0.102 (0.016)    | -                | -         |     7.67 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            6 |     2453 | 2022-10-02 | SKADE X            | W   | 0.311      | -            | -                | -                | -         |     1.44 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            5 |     2546 | 2022-09-28 | Young Ninjas       | W   | 0.286      | -            | -                | -                | -         |     4.16 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            4 |     2557 | 2022-09-28 | EC Brugge          | W   | 0.285      | -            | -                | -                | -         |     2.63 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            3 |     2664 | 2022-09-24 | 777                | L   | 0.259      | -            | -                | -                | -         |    -6.67 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            2 |     2668 | 2022-09-24 | HAVU               | L   | 0.258      | -            | -                | -                | -         |    -4.23 | b0RUP, birdfromsky, raalz, regali, TMB   |
|            1 |     3380 | 2022-09-01 | ECLOT              | L   | 0.107      | -            | -                | -                | -         |    -1.50 | b0RUP, birdfromsky, raalz, regali, TMB   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,938.16)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-11 |      1.000 | $1,600.00      | $1,600.00       |
| 2023-02-06 |      1.000 | $5,000.00      | $5,000.00       |
| 2022-12-18 |      0.827 | $22,000.00     | $18,194.76      |
| 2022-11-20 |      0.640 | $20,000.00     | $12,805.47      |
| 2022-11-18 |      0.627 | $22,000.00     | $13,792.65      |
| 2022-10-30 |      0.500 | $1,000.00      | $499.91         |
| 2022-10-24 |      0.460 | $22,000.00     | $10,126.10      |
| 2022-10-24 |      0.460 | $2,000.00      | $919.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
