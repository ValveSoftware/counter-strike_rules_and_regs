### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, Jee, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1086.7<br />
<br />
Final Rank Value (1086.7) = Starting Rank Value (1199.1) + Head To Head Adjustments (-112.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.536[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.695[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1199.1
- 400 + ( ( 0.414 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1199.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      149 | 2024-04-18 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -29.91 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           36 |      161 | 2024-04-18 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |   -24.79 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           35 |      417 | 2024-04-09 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.71 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           34 |      446 | 2024-04-08 | TYLOO             | W   | 1.000      | 0.624        | 0.055 (0.034)    | 0.490 (0.306)    | 1 (1.000) |     6.02 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           33 |      457 | 2024-04-07 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -6.93 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           32 |      585 | 2024-04-03 | TheMongolz        | L   | 1.000      | -            | -                | -                | -         |    -9.05 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           31 |      626 | 2024-04-02 | LYG               | W   | 1.000      | -            | -                | -                | -         |     2.74 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           30 |      633 | 2024-04-02 | ATOX              | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.329 (0.047)    | -         |     4.13 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           29 |      849 | 2024-03-19 | TheMongolz        | L   | 0.972      | -            | -                | -                | -         |    -8.12 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           28 |      857 | 2024-03-18 | Gaimin Gladiators | L   | 0.965      | -            | -                | -                | -         |   -10.98 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           27 |      866 | 2024-03-17 | FURIA             | W   | 0.961      | 0.143        | 0.316 (0.043)    | 0.522 (0.072)    | 1 (0.961) |    23.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           26 |      887 | 2024-03-17 | HEROIC            | L   | 0.959      | -            | -                | -                | -         |    -2.69 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           25 |     1321 | 2024-02-28 | FlyQuest          | W   | 0.837      | 0.143        | 0.045 (0.005)    | 0.647 (0.077)    | 1 (0.837) |    13.63 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           24 |     1323 | 2024-02-27 | TheMongolz        | L   | 0.835      | -            | -                | -                | -         |    -6.21 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           23 |     1358 | 2024-02-26 | TYLOO             | W   | 0.823      | 0.143        | 0.055 (0.006)    | 0.490 (0.058)    | 1 (0.823) |     6.21 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           22 |     1362 | 2024-02-25 | Twisted Minds     | W   | 0.822      | -            | -                | -                | 1 (0.822) |     0.45 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           21 |     1568 | 2024-02-17 | Newhappy          | L   | 0.765      | -            | -                | -                | -         |   -22.04 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           20 |     1597 | 2024-02-16 | Newhappy          | W   | 0.759      | -            | -                | -                | -         |     1.83 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           19 |     1604 | 2024-02-16 | MAG               | W   | 0.757      | -            | -                | -                | -         |     0.84 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           18 |     1911 | 2024-01-31 | Rare Atom         | L   | 0.651      | -            | -                | -                | -         |   -18.94 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           17 |     1915 | 2024-01-31 | NKT               | L   | 0.650      | -            | -                | -                | -         |   -18.74 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           16 |     1947 | 2024-01-28 | TheMongolz        | L   | 0.631      | -            | -                | -                | -         |    -6.31 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           15 |     1950 | 2024-01-27 | TYLOO             | W   | 0.629      | 0.435        | 0.055 (0.015)    | 0.490 (0.134)    | 1 (0.629) |     3.85 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           14 |     1982 | 2024-01-26 | NKT               | W   | 0.618      | 0.435        | 0.013 (0.004)    | 0.110 (0.030)    | 1 (0.618) |     1.50 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           13 |     1986 | 2024-01-26 | NCTDK             | W   | 0.617      | 0.435        | 0.004 (0.001)    | -                | 1 (0.617) |     0.51 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           12 |     2101 | 2024-01-20 | TYLOO             | W   | 0.583      | 0.143        | 0.055 (0.005)    | 0.490 (0.041)    | -         |     3.19 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           11 |     2205 | 2024-01-19 | Wings Up          | W   | 0.570      | -            | -                | -                | -         |     0.96 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           10 |     2211 | 2024-01-18 | Nirvana           | W   | 0.569      | -            | -                | -                | -         |     0.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            9 |     2817 | 2023-12-09 | TheMongolz        | L   | 0.299      | -            | -                | -                | -         |    -2.90 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            8 |     2865 | 2023-12-07 | TYLOO             | L   | 0.285      | -            | -                | -                | -         |    -7.55 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            7 |     2897 | 2023-12-06 | GR                | W   | 0.279      | 0.416        | -                | 0.267 (0.031)    | -         |     0.45 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            6 |     3281 | 2023-11-16 | The Huns          | L   | 0.144      | -            | -                | -                | -         |    -4.44 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            5 |     3418 | 2023-11-10 | MOUZ              | L   | 0.109      | -            | -                | -                | -         |    -0.08 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            4 |     3465 | 2023-11-08 | TYLOO             | W   | 0.092      | 0.769        | 0.055 (0.004)    | 0.490 (0.035)    | 1 (0.092) |     0.45 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            3 |     3471 | 2023-11-07 | Astralis          | L   | 0.090      | -            | -                | -                | -         |    -2.61 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            2 |     3546 | 2023-11-04 | TYLOO             | W   | 0.065      | -            | -                | -                | 1 (0.065) |     0.31 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            1 |     3564 | 2023-11-03 | Wings Up          | W   | 0.058      | -            | -                | -                | -         |     0.02 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,865.37)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2024-01-28 |      0.631 | $12,000.00     | $7,576.92       |
| 2023-12-10 |      0.306 | $5,000.00      | $1,528.39       |
| 2023-11-12 |      0.119 | $16,500.00     | $1,961.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
