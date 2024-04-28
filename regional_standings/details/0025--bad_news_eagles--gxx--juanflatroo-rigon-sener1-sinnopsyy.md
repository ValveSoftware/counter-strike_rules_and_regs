### Roster Details<br />
Team Name: Bad News Eagles<br />
Roster: gxx-, juanflatroo, rigoN, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1083.3<br />
<br />
Final Rank Value (1083.3) = Starting Rank Value (1143.5) + Head To Head Adjustments (-60.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.429[<sup>2</sup>](#table1)

The average of these factors is 0.363<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1143.5
- 400 + ( ( 0.363 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1143.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       78 | 2023-02-08 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -8.87 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           44 |       86 | 2023-02-08 | HEET              | L   | 1.000      | -            | -                | -                | -         |   -25.70 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           43 |      101 | 2023-02-07 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -19.41 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           42 |      401 | 2023-01-26 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -19.74 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           41 |      408 | 2023-01-26 | SAW               | W   | 1.000      | 0.435        | 0.093 (0.041)    | 0.642 (0.279)    | -         |    17.26 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           40 |      433 | 2023-01-25 | Eternal Fire      | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.496 (0.216)    | -         |     9.42 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           39 |      464 | 2023-01-24 | Websterz          | W   | 1.000      | 0.435        | -                | 0.403 (0.175)    | -         |     5.15 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           38 |     1063 | 2022-12-07 | Sangal            | L   | 0.754      | -            | -                | -                | -         |   -18.15 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           37 |     1492 | 2022-11-23 | 1WIN              | W   | 0.661      | 0.435        | 0.023 (0.006)    | 0.313 (0.090)    | -         |     4.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           36 |     1580 | 2022-11-17 | fnatic            | L   | 0.620      | -            | -                | -                | -         |    -2.73 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           35 |     1591 | 2022-11-17 | Complexity        | L   | 0.619      | -            | -                | -                | -         |    -5.08 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           34 |     1593 | 2022-11-17 | 500               | L   | 0.619      | -            | -                | -                | -         |   -12.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           33 |     1596 | 2022-11-17 | Astralis          | L   | 0.618      | -            | -                | -                | -         |    -5.82 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           32 |     1604 | 2022-11-17 | SAW               | W   | 0.617      | 0.589        | 0.093 (0.034)    | 0.642 (0.233)    | 1 (0.617) |     8.71 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           31 |     1688 | 2022-11-07 | Natus Vincere     | L   | 0.552      | -            | -                | -                | -         |    -0.89 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           30 |     1693 | 2022-11-06 | FaZe              | W   | 0.547      | 1.000        | 0.433 (0.237)    | 0.358 (0.196)    | 1 (0.547) |    16.35 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           29 |     1710 | 2022-11-05 | ENCE              | L   | 0.541      | -            | -                | -                | -         |    -5.48 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           28 |     1725 | 2022-11-05 | Spirit            | L   | 0.539      | -            | -                | -                | -         |    -3.93 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           27 |     1751 | 2022-11-01 | GamerLegion       | W   | 0.514      | 0.143        | 0.105 (0.008)    | -                | 1 (0.514) |     8.97 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           26 |     1768 | 2022-10-31 | BIG               | W   | 0.508      | 0.143        | 0.124 (0.009)    | -                | 1 (0.508) |    12.73 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           25 |     1782 | 2022-10-31 | 00NATION          | W   | 0.506      | -            | -                | -                | 1 (0.506) |     3.05 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           24 |     1860 | 2022-10-26 | Permitta          | L   | 0.473      | -            | -                | -                | -         |   -12.03 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           23 |     1898 | 2022-10-25 | TYLOO             | L   | 0.464      | -            | -                | -                | -         |   -13.54 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           22 |     1905 | 2022-10-24 | EYEBALLERS        | W   | 0.459      | 0.384        | -                | 0.776 (0.137)    | -         |     3.22 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           21 |     1985 | 2022-10-21 | 9INE              | L   | 0.440      | -            | -                | -                | -         |   -10.81 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           20 |     2015 | 2022-10-20 | EPG Family        | W   | 0.433      | -            | -                | -                | -         |     1.68 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           19 |     2036 | 2022-10-19 | Sprout            | W   | 0.427      | 0.435        | 0.067 (0.013)    | 0.446 (0.083)    | -         |     6.59 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           18 |     2056 | 2022-10-18 | 9INE              | L   | 0.420      | -            | -                | -                | -         |   -10.60 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           17 |     2320 | 2022-10-08 | forZe             | W   | 0.353      | -            | -                | -                | 1 (0.353) |     3.18 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           16 |     2348 | 2022-10-07 | Spirit            | L   | 0.345      | -            | -                | -                | -         |    -2.65 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           15 |     2378 | 2022-10-06 | Astralis          | W   | 0.337      | 0.143        | 0.149 (0.007)    | -                | 1 (0.337) |     7.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           14 |     2395 | 2022-10-05 | Ninjas in Pyjamas | L   | 0.332      | -            | -                | -                | -         |    -3.56 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           13 |     2434 | 2022-10-04 | Eternal Fire      | W   | 0.324      | -            | -                | -                | 1 (0.324) |     2.61 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           12 |     2581 | 2022-09-27 | Sprout            | W   | 0.278      | 0.384        | 0.067 (0.007)    | -                | -         |     4.58 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           11 |     2794 | 2022-09-21 | Endpoint          | W   | 0.238      | 0.384        | -                | 0.641 (0.059)    | -         |     1.47 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           10 |     2857 | 2022-09-18 | ECLOT             | W   | 0.220      | -            | -                | -                | 1 (0.220) |     2.26 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            9 |     2881 | 2022-09-17 | SINNERS           | W   | 0.213      | -            | -                | -                | 1 (0.213) |     2.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            8 |     3025 | 2022-09-13 | Falcons           | W   | 0.187      | 0.435        | -                | 0.767 (0.062)    | -         |     1.71 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            7 |     3053 | 2022-09-12 | ECLOT             | W   | 0.179      | -            | -                | -                | -         |     1.87 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            6 |     3237 | 2022-09-07 | UNGENTIUM         | W   | 0.146      | -            | -                | -                | -         |     0.69 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            5 |     3264 | 2022-09-05 | Entropiq Prague   | W   | 0.133      | -            | -                | -                | -         |     0.40 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            4 |     3313 | 2022-09-03 | Enterprise        | L   | 0.120      | -            | -                | -                | -         |    -3.08 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            3 |     3333 | 2022-09-03 | Sampi             | W   | 0.118      | -            | -                | -                | -         |     0.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            2 |     3353 | 2022-09-02 | MASONIC           | L   | 0.113      | -            | -                | -                | -         |    -2.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            1 |     3408 | 2022-08-31 | FTW               | W   | 0.101      | -            | -                | -                | -         |     0.61 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,263.14)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-26 |      1.000 | $10,000.00     | $10,000.00      |
| 2022-11-20 |      0.640 | $4,000.00      | $2,558.48       |
| 2022-11-13 |      0.594 | $20,000.00     | $11,871.47      |
| 2022-10-26 |      0.474 | $1,000.00      | $473.67         |
| 2022-10-23 |      0.454 | $4,000.00      | $1,815.49       |
| 2022-09-18 |      0.220 | $20,650.00     | $4,544.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
