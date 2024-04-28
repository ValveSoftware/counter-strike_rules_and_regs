### Roster Details<br />
Team Name: FTW<br />
Roster: Ag1l, arrozdoce, DDias, NOPEEJ, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  811.5<br />
<br />
Final Rank Value (811.5) = Starting Rank Value (887.1) + Head To Head Adjustments (-75.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.1
- 400 + ( ( 0.238 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 887.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       10 | 2023-02-12 | Into the Breach | W   | 1.000      | 0.435        | -                | 0.289 (0.125)    | 0 (0.000) |    11.26 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           38 |       58 | 2023-02-10 | UNGENTIUM       | W   | 1.000      | 0.435        | 0.015 (0.006)    | 0.474 (0.206)    | 0 (0.000) |    13.98 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           37 |       80 | 2023-02-08 | K23             | L   | 1.000      | -            | -                | -                | -         |   -10.53 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           36 |       89 | 2023-02-08 | Spirit Academy  | L   | 1.000      | -            | -                | -                | -         |   -11.97 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           35 |      116 | 2023-02-06 | iNation         | L   | 1.000      | -            | -                | -                | -         |    -6.44 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           34 |      198 | 2023-02-03 | Astralis Talent | L   | 1.000      | -            | -                | -                | -         |   -14.29 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           33 |      268 | 2023-01-31 | Sangal          | L   | 1.000      | -            | -                | -                | -         |   -10.41 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           32 |      288 | 2023-01-30 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -14.85 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           31 |      715 | 2023-01-12 | GTZ             | L   | 0.993      | -            | -                | -                | -         |   -21.34 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           30 |      716 | 2023-01-12 | EC Brugge       | W   | 0.992      | 0.143        | 0.007 (0.001)    | 0.507 (0.072)    | 0 (0.000) |     9.24 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           29 |      719 | 2023-01-12 | GTZ             | L   | 0.991      | -            | -                | -                | -         |   -21.70 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|           28 |      860 | 2022-12-15 | forZe           | L   | 0.807      | -            | -                | -                | -         |    -9.62 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           27 |      912 | 2022-12-13 | Spirit          | L   | 0.793      | -            | -                | -                | -         |    -1.59 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           26 |     1169 | 2022-12-04 | SAW             | L   | 0.733      | -            | -                | -                | -         |    -5.30 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           25 |     1185 | 2022-12-04 | GTZ             | W   | 0.731      | 0.342        | 0.002 (0.001)    | 0.195 (0.049)    | 1 (0.731) |     6.25 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           24 |     1208 | 2022-12-03 | SAW             | L   | 0.727      | -            | -                | -                | -         |    -5.36 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           23 |     1233 | 2022-12-03 | GTZ             | W   | 0.724      | 0.342        | -                | 0.195 (0.048)    | 1 (0.724) |     6.18 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           22 |     1330 | 2022-11-29 | Endpoint        | W   | 0.700      | 0.435        | 0.033 (0.010)    | 0.641 (0.195)    | 0 (0.000) |    12.69 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           21 |     1377 | 2022-11-27 | SAW             | W   | 0.687      | 0.350        | 0.093 (0.022)    | 0.642 (0.154)    | 0 (0.000) |    17.20 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           20 |     1393 | 2022-11-27 | Case            | W   | 0.686      | 0.350        | 0.009 (0.002)    | -                | 0 (0.000) |     6.18 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           19 |     1416 | 2022-11-26 | SAW             | L   | 0.680      | -            | -                | -                | -         |    -4.17 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           18 |     1430 | 2022-11-26 | Case            | W   | 0.679      | 0.350        | 0.009 (0.002)    | -                | 0 (0.000) |     6.12 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           17 |     1471 | 2022-11-24 | Case            | L   | 0.667      | -            | -                | -                | -         |   -15.38 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           16 |     1674 | 2022-11-08 | AGO             | W   | 0.560      | 0.435        | 0.005 (0.001)    | 0.328 (0.080)    | 0 (0.000) |     7.23 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           15 |     1819 | 2022-10-28 | UNGENTIUM       | L   | 0.487      | -            | -                | -                | -         |    -9.35 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           14 |     1870 | 2022-10-26 | Enterprise      | W   | 0.472      | 0.435        | 0.042 (0.009)    | 0.193 (0.039)    | -         |     7.79 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           13 |     1908 | 2022-10-24 | ECLOT           | L   | 0.459      | -            | -                | -                | -         |    -5.17 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           12 |     1952 | 2022-10-22 | sYnck           | W   | 0.447      | 0.435        | -                | 0.397 (0.077)    | -         |     4.86 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           11 |     2025 | 2022-10-20 | 9INE            | L   | 0.431      | -            | -                | -                | -         |    -6.00 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|           10 |     2711 | 2022-09-23 | BIG Academy     | L   | 0.253      | -            | -                | -                | -         |    -2.38 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|            9 |     2763 | 2022-09-22 | K23             | L   | 0.244      | -            | -                | -                | -         |    -6.49 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|            8 |     2834 | 2022-09-19 | Enterprise      | W   | 0.226      | 0.435        | 0.042 (0.004)    | -                | -         |     3.59 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|            7 |     2899 | 2022-09-17 | Apeks           | L   | 0.211      | -            | -                | -                | -         |    -2.85 | Ag1l, arrozdoce, DDias, stadodo, suka   |
|            6 |     3071 | 2022-09-11 | MIBR            | L   | 0.173      | -            | -                | -                | -         |    -1.98 | Ag1l, arrozdoce, DDias, kst, stadodo    |
|            5 |     3147 | 2022-09-10 | BIG             | L   | 0.165      | -            | -                | -                | -         |    -0.30 | Ag1l, arrozdoce, DDias, kst, stadodo    |
|            4 |     3187 | 2022-09-09 | G2              | L   | 0.158      | -            | -                | -                | -         |    -0.01 | Ag1l, arrozdoce, DDias, kst, stadodo    |
|            3 |     3227 | 2022-09-08 | Outsiders       | L   | 0.151      | -            | -                | -                | -         |    -0.07 | Ag1l, arrozdoce, DDias, kst, stadodo    |
|            2 |     3244 | 2022-09-07 | FaZe            | L   | 0.144      | -            | -                | -                | -         |    -0.05 | Ag1l, arrozdoce, DDias, kst, stadodo    |
|            1 |     3408 | 2022-08-31 | Bad News Eagles | L   | 0.101      | -            | -                | -                | -         |    -0.61 | Ag1l, arrozdoce, DDias, kst, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,411.43)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-19 |      0.833 | $2,500.00      | $2,082.79       |
| 2022-12-04 |      0.733 | $3,081.00      | $2,259.03       |
| 2022-11-27 |      0.687 | $7,529.00      | $5,174.80       |
| 2022-11-25 |      0.674 | $1,500.00      | $1,010.57       |
| 2022-10-02 |      0.314 | $6,000.00      | $1,884.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
