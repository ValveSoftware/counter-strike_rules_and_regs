### Roster Details<br />
Team Name: M80<br />
Roster: malbsMd, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1217.9<br />
<br />
Final Rank Value (1217.9) = Starting Rank Value (1270.7) + Head To Head Adjustments (-52.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.535[<sup>1</sup>](#table2)
- Bounty Collected: 0.452[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.497[<sup>2</sup>](#table1)

The average of these factors is 0.449<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1270.7
- 400 + ( ( 0.449 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1270.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |       30 | 2024-05-28 | HEROIC           | L   | 1.000      | -            | -                | -                | -         |    -3.46 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           65 |       48 | 2024-05-27 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -0.53 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           64 |      103 | 2024-05-24 | Nouns            | W   | 1.000      | 0.384        | 0.030 (0.011)    | 0.601 (0.231)    | 0 (0.000) |     7.27 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           63 |      118 | 2024-05-23 | Wildcard         | W   | 1.000      | 0.384        | -                | 0.615 (0.236)    | 0 (0.000) |     6.42 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           62 |      143 | 2024-05-22 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -25.89 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           61 |      148 | 2024-05-22 | Party Astronauts | W   | 1.000      | 0.477        | -                | 0.670 (0.319)    | 0 (0.000) |     5.12 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           60 |      154 | 2024-05-22 | Mythic           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.90 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           59 |      218 | 2024-05-20 | NRG              | W   | 1.000      | 0.477        | -                | 0.605 (0.288)    | -         |     5.86 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           58 |      223 | 2024-05-20 | NRG              | W   | 1.000      | 0.477        | -                | 0.605 (0.288)    | -         |     6.19 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           57 |      233 | 2024-05-20 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | -         |     0.32 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           56 |      257 | 2024-05-19 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | -                | -         |     2.77 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           55 |      259 | 2024-05-19 | BOSS             | W   | 1.000      | 0.477        | 0.016 (0.008)    | -                | -         |     2.85 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           54 |      282 | 2024-05-18 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -26.39 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           53 |      316 | 2024-05-17 | regain           | W   | 1.000      | -            | -                | -                | -         |     0.44 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           52 |      389 | 2024-05-15 | One More         | W   | 1.000      | -            | -                | -                | -         |     1.51 | malbsMd, reck, slaxz-, stamina, Swisher |
|           51 |      395 | 2024-05-15 | One More         | W   | 1.000      | -            | -                | -                | -         |     1.53 | malbsMd, reck, slaxz-, stamina, Swisher |
|           50 |      438 | 2024-05-14 | Elevate          | W   | 1.000      | 0.477        | -                | 0.528 (0.252)    | -         |     4.82 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           49 |      444 | 2024-05-14 | Elevate          | W   | 1.000      | 0.477        | -                | 0.528 (0.252)    | -         |     5.05 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           48 |      567 | 2024-05-10 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     1.19 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           47 |      569 | 2024-05-10 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     1.20 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |      584 | 2024-05-09 | LAG              | W   | 1.000      | 0.477        | 0.014 (0.006)    | -                | -         |     3.54 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |      589 | 2024-05-09 | LAG              | W   | 1.000      | -            | -                | -                | -         |     3.67 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |      815 | 2024-04-28 | G2               | L   | 0.993      | -            | -                | -                | -         |    -1.55 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           43 |      840 | 2024-04-27 | TYLOO            | W   | 0.985      | 0.889        | 0.042 (0.037)    | 0.330 (0.289)    | 1 (0.985) |     4.30 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           42 |      860 | 2024-04-26 | BetBoom          | L   | 0.980      | -            | -                | -                | -         |    -9.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |      870 | 2024-04-26 | G2               | W   | 0.978      | 0.889        | 0.469 (0.408)    | 0.565 (0.491)    | 1 (0.978) |    29.44 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           40 |      895 | 2024-04-25 | Sharks           | W   | 0.972      | 0.889        | 0.031 (0.027)    | 0.530 (0.458)    | 1 (0.972) |     5.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           39 |      929 | 2024-04-23 | BetBoom          | L   | 0.959      | -            | -                | -                | -         |    -9.76 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     1015 | 2024-04-19 | Liquid           | W   | 0.935      | 0.143        | 0.493 (0.066)    | -                | -         |    27.22 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     1022 | 2024-04-19 | Legacy           | W   | 0.934      | -            | -                | -                | -         |    10.15 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1065 | 2024-04-18 | Liquid           | L   | 0.928      | -            | -                | -                | -         |    -1.87 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1070 | 2024-04-18 | Elevate          | W   | 0.927      | -            | -                | -                | -         |     5.61 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1640 | 2024-03-27 | Take Flyte       | W   | 0.781      | -            | -                | -                | -         |     2.40 | malbsMd, reck, s1n, stamina, Swisher    |
|           33 |     1645 | 2024-03-27 | Take Flyte       | W   | 0.781      | -            | -                | -                | -         |     2.46 | malbsMd, reck, s1n, stamina, Swisher    |
|           32 |     1783 | 2024-03-19 | Mythic           | L   | 0.728      | -            | -                | -                | -         |   -20.00 | dephh, malbsMd, reck, stamina, Swisher  |
|           31 |     1786 | 2024-03-19 | Mythic           | L   | 0.728      | -            | -                | -                | -         |   -20.53 | dephh, malbsMd, reck, stamina, Swisher  |
|           30 |     1874 | 2024-03-14 | Nouns            | L   | 0.695      | -            | -                | -                | -         |   -17.90 | dephh, malbsMd, reck, stamina, Swisher  |
|           29 |     1877 | 2024-03-14 | Nouns            | L   | 0.695      | -            | -                | -                | -         |   -18.52 | dephh, malbsMd, reck, stamina, Swisher  |
|           28 |     1906 | 2024-03-13 | Wildcard         | L   | 0.688      | -            | -                | -                | -         |   -18.75 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           27 |     1908 | 2024-03-13 | Wildcard         | W   | 0.688      | -            | -                | -                | -         |     2.80 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           26 |     2161 | 2024-03-04 | Legacy           | L   | 0.626      | -            | -                | -                | -         |   -15.70 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           25 |     2187 | 2024-03-03 | Wildcard         | W   | 0.619      | -            | -                | -                | 1 (0.619) |     2.58 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           24 |     2212 | 2024-03-02 | Imperial         | L   | 0.612      | -            | -                | -                | -         |    -4.04 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           23 |     2231 | 2024-03-01 | ODDIK            | W   | 0.606      | -            | -                | -                | 1 (0.606) |     2.99 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           22 |     2793 | 2024-02-02 | Rebels           | L   | 0.419      | -            | -                | -                | -         |   -10.00 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           21 |     2829 | 2024-02-01 | Rooster          | W   | 0.412      | -            | -                | -                | 1 (0.412) |     0.80 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           20 |     2848 | 2024-01-31 | GamerLegion      | L   | 0.405      | -            | -                | -                | -         |    -8.49 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           19 |     3050 | 2024-01-20 | Liquid           | W   | 0.335      | 0.143        | 0.493 (0.024)    | -                | -         |     9.60 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           18 |     3055 | 2024-01-20 | Wildcard         | W   | 0.334      | -            | -                | -                | -         |     1.30 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           17 |     3098 | 2024-01-19 | BOSS             | W   | 0.328      | -            | -                | -                | -         |     0.92 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           16 |     3104 | 2024-01-19 | Wildcard         | L   | 0.328      | -            | -                | -                | -         |    -9.13 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           15 |     3343 | 2024-01-14 | Nouns            | W   | 0.295      | -            | -                | -                | -         |     1.04 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           14 |     3361 | 2024-01-13 | Wildcard         | L   | 0.289      | -            | -                | -                | -         |    -8.20 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           13 |     3409 | 2024-01-12 | Liquid           | W   | 0.282      | 0.143        | 0.493 (0.020)    | -                | -         |     8.08 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           12 |     3417 | 2024-01-12 | Rocket           | W   | 0.281      | -            | -                | -                | -         |     0.14 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|           11 |     3663 | 2023-12-16 | BESTIA           | L   | 0.098      | -            | -                | -                | -         |    -3.01 | dephh, malbsMd, reck, slaxz-, Swisher   |
|           10 |     3691 | 2023-12-15 | Virtus.pro       | L   | 0.092      | -            | -                | -                | -         |    -0.25 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            9 |     3702 | 2023-12-13 | Nouns            | W   | 0.081      | -            | -                | -                | -         |     0.07 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            8 |     3711 | 2023-12-12 | BOSS             | W   | 0.075      | -            | -                | -                | -         |     0.20 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            7 |     3720 | 2023-12-11 | Torqued          | W   | 0.068      | -            | -                | -                | -         |     0.02 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            6 |     3730 | 2023-12-10 | BOSS             | W   | 0.061      | -            | -                | -                | -         |     0.16 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            5 |     3796 | 2023-12-07 | BOSS             | W   | 0.041      | -            | -                | -                | -         |     0.11 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            4 |     3822 | 2023-12-06 | Party Astronauts | W   | 0.035      | -            | -                | -                | -         |     0.03 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            3 |     3887 | 2023-12-03 | Take Flyte       | W   | 0.015      | -            | -                | -                | -         |     0.03 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            2 |     3889 | 2023-12-03 | NRG              | W   | 0.014      | -            | -                | -                | -         |     0.03 | malbsMd, maNkz, reck, slaxz-, Swisher   |
|            1 |     3908 | 2023-12-02 | Wildcard         | W   | 0.008      | -            | -                | -                | -         |     0.02 | malbsMd, maNkz, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,621.63)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-24 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-02-02 |      0.420 | $4,500.00      | $1,889.95       |
| 2023-12-17 |      0.107 | $2,000.00      | $213.82         |
| 2023-12-13 |      0.081 | $4,000.00      | $325.04         |
| 2023-12-10 |      0.061 | $35,000.00     | $2,148.66       |
| 2023-12-03 |      0.015 | $3,000.00      | $44.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
