### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, freakazoid, hate, Trucklover86<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  743.6<br />
<br />
Final Rank Value (743.6) = Starting Rank Value (776.7) + Head To Head Adjustments (-33.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.7
- 400 + ( ( 0.198 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 776.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      256 | 2024-04-24 | BOSS             | W   | 1.000      | 0.477        | 0.049 (0.024)    | 0.507 (0.242)    | 0 (0.000) |    21.91 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           36 |      257 | 2024-04-24 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -9.13 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           35 |      529 | 2024-04-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -9.73 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           34 |      530 | 2024-04-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -10.51 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           33 |      585 | 2024-04-11 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |   -20.76 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           32 |      588 | 2024-04-11 | Carpe Diem       | W   | 1.000      | 0.477        | 0.009 (0.004)    | 0.253 (0.121)    | 0 (0.000) |    10.34 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           31 |      619 | 2024-04-10 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -10.89 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           30 |      624 | 2024-04-10 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -11.81 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           29 |      990 | 2024-03-27 | Wildcard         | L   | 0.935      | -            | -                | -                | -         |    -8.93 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           28 |      993 | 2024-03-27 | Wildcard         | L   | 0.935      | -            | -                | -                | -         |    -9.58 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           27 |     1030 | 2024-03-26 | Limitless        | W   | 0.929      | 0.477        | 0.001 (0.001)    | 0.173 (0.076)    | 0 (0.000) |     8.95 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           26 |     1035 | 2024-03-26 | Limitless        | L   | 0.929      | -            | -                | -                | -         |   -20.80 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           25 |     1111 | 2024-03-20 | Nouns            | W   | 0.889      | 0.477        | -                | 0.609 (0.258)    | 0 (0.000) |    13.96 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           24 |     1116 | 2024-03-20 | Nouns            | L   | 0.889      | -            | -                | -                | -         |   -14.16 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           23 |     1132 | 2024-03-19 | M80              | W   | 0.882      | 0.477        | 0.149 (0.063)    | 0.505 (0.213)    | 0 (0.000) |    23.94 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           22 |     1135 | 2024-03-19 | M80              | W   | 0.882      | 0.477        | 0.149 (0.063)    | 0.505 (0.212)    | 0 (0.000) |    24.76 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           21 |     1224 | 2024-03-14 | One More         | W   | 0.849      | 0.477        | 0.010 (0.004)    | 0.231 (0.093)    | 0 (0.000) |    11.35 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           20 |     1228 | 2024-03-14 | One More         | W   | 0.849      | 0.477        | 0.010 (0.004)    | 0.231 (0.093)    | 0 (0.000) |    12.22 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           19 |     1261 | 2024-03-13 | Take Flyte       | L   | 0.841      | -            | -                | -                | -         |   -14.86 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           18 |     1303 | 2024-03-12 | Wildcard         | W   | 0.835      | 0.143        | 0.025 (0.003)    | 0.490 (0.058)    | 0 (0.000) |    18.58 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           17 |     1474 | 2024-03-05 | MIGHT            | L   | 0.789      | -            | -                | -                | -         |   -13.15 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           16 |     1476 | 2024-03-05 | MIGHT            | L   | 0.789      | -            | -                | -                | -         |   -14.09 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           15 |     1689 | 2024-02-24 | NRG              | L   | 0.721      | -            | -                | -                | -         |    -9.83 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           14 |     1778 | 2024-02-20 | Party Astronauts | L   | 0.695      | -            | -                | -                | -         |    -9.24 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           13 |     1803 | 2024-02-19 | G3               | W   | 0.689      | 0.143        | 0.013 (0.001)    | -                | 0 (0.000) |     9.98 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           12 |     1804 | 2024-02-19 | NRG              | L   | 0.688      | -            | -                | -                | -         |   -10.14 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           11 |     1871 | 2024-02-16 | FLUFFY AIMERS    | W   | 0.669      | -            | -                | -                | -         |     3.83 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|           10 |     1874 | 2024-02-16 | E-Xolos LAZER    | W   | 0.668      | -            | -                | -                | -         |     2.23 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            9 |     1929 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.656      | -            | -                | -                | -         |     3.59 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            8 |     1931 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.655      | -            | -                | -                | -         |     3.71 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            7 |     1970 | 2024-02-13 | Elevate          | W   | 0.649      | 0.477        | 0.036 (0.011)    | 0.361 (0.112)    | -         |    14.03 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            6 |     1972 | 2024-02-13 | Elevate          | L   | 0.649      | -            | -                | -                | -         |    -6.40 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            5 |     2562 | 2024-01-17 | Wildcard         | L   | 0.468      | -            | -                | -                | -         |    -5.04 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            4 |     2661 | 2024-01-15 | Elevate          | L   | 0.455      | -            | -                | -                | -         |    -5.45 | Cooper, fl0m, freakazoid, hate, Trucklover86     |
|            3 |     3202 | 2023-12-05 | Elevate          | L   | 0.182      | -            | -                | -                | -         |    -2.25 | Cooper, fl0m, freakazoid, Stewie2K, Trucklover86 |
|            2 |     3413 | 2023-11-22 | Carpe Diem       | W   | 0.095      | -            | -                | -                | -         |     1.29 | Cooper, fl0m, freakazoid, Stewie2K, Trucklover86 |
|            1 |     3429 | 2023-11-21 | Party Astronauts | L   | 0.088      | -            | -                | -                | -         |    -1.02 | Cooper, fl0m, GeT_RiGhT, Stewie2K, Trucklover86  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($430.97)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
