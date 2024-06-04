### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, flying, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  989.4<br />
<br />
Final Rank Value (989.4) = Starting Rank Value (1020.3) + Head To Head Adjustments (-30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.482[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1020.3
- 400 + ( ( 0.320 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1020.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       39 | 2024-05-28 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -4.03 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           31 |     1096 | 2024-04-18 | Rare Atom         | L   | 0.925      | -            | -                | -                | -         |   -26.91 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           30 |     1108 | 2024-04-18 | TYLOO             | L   | 0.924      | -            | -                | -                | -         |   -20.16 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           29 |     1364 | 2024-04-09 | G2                | L   | 0.864      | -            | -                | -                | -         |    -0.43 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           28 |     1393 | 2024-04-08 | TYLOO             | W   | 0.858      | 0.624        | 0.042 (0.022)    | 0.330 (0.177)    | 1 (0.858) |     7.76 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           27 |     1404 | 2024-04-07 | FURIA             | L   | 0.856      | -            | -                | -                | -         |    -4.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           26 |     1532 | 2024-04-03 | TheMongolz        | L   | 0.825      | -            | -                | -                | -         |    -2.77 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           25 |     1573 | 2024-04-02 | LYG               | W   | 0.818      | 0.143        | 0.001 (0.000)    | 0.091 (0.011)    | 0 (0.000) |     3.33 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           24 |     1580 | 2024-04-02 | ATOX              | W   | 0.817      | 0.143        | -                | 0.248 (0.029)    | 0 (0.000) |     7.25 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           23 |     1796 | 2024-03-19 | TheMongolz        | L   | 0.724      | -            | -                | -                | -         |    -1.98 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           22 |     1804 | 2024-03-18 | Gaimin Gladiators | L   | 0.718      | -            | -                | -                | -         |    -5.99 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           21 |     1813 | 2024-03-17 | FURIA             | W   | 0.713      | 0.143        | 0.138 (0.014)    | 0.402 (0.041)    | 1 (0.713) |    19.29 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           20 |     1834 | 2024-03-17 | HEROIC            | L   | 0.711      | -            | -                | -                | -         |    -0.56 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           19 |     2268 | 2024-02-28 | FlyQuest          | W   | 0.590      | 0.143        | 0.114 (0.010)    | 0.648 (0.055)    | 1 (0.590) |    16.72 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           18 |     2270 | 2024-02-27 | TheMongolz        | L   | 0.588      | -            | -                | -                | -         |    -1.28 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           17 |     2305 | 2024-02-26 | TYLOO             | W   | 0.576      | 0.143        | 0.042 (0.003)    | 0.330 (0.027)    | 1 (0.576) |     6.83 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     2309 | 2024-02-25 | Twisted Minds     | W   | 0.575      | -            | -                | -                | 1 (0.575) |     0.64 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     2515 | 2024-02-17 | Newhappy          | L   | 0.518      | -            | -                | -                | -         |   -14.41 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     2544 | 2024-02-16 | Newhappy          | W   | 0.511      | 0.143        | 0.001 (0.000)    | -                | -         |     1.78 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     2551 | 2024-02-16 | MAG               | W   | 0.510      | 0.143        | -                | 0.129 (0.009)    | -         |     0.99 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     2858 | 2024-01-31 | Rare Atom         | L   | 0.404      | -            | -                | -                | -         |   -11.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     2862 | 2024-01-31 | NKT               | L   | 0.403      | -            | -                | -                | -         |   -10.96 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     2894 | 2024-01-28 | TheMongolz        | L   | 0.384      | -            | -                | -                | -         |    -0.99 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     2897 | 2024-01-27 | TYLOO             | W   | 0.382      | 0.435        | 0.042 (0.007)    | 0.330 (0.055)    | 1 (0.382) |     4.23 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     2929 | 2024-01-26 | NKT               | W   | 0.371      | 0.435        | 0.005 (0.001)    | 0.057 (0.009)    | 1 (0.371) |     1.57 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     2933 | 2024-01-26 | NCTDK             | W   | 0.370      | 0.435        | 0.002 (0.000)    | -                | 1 (0.370) |     0.68 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3048 | 2024-01-20 | TYLOO             | W   | 0.336      | 0.143        | 0.042 (0.002)    | 0.330 (0.016)    | -         |     3.59 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     3152 | 2024-01-19 | Wings Up          | W   | 0.323      | -            | -                | -                | -         |     0.55 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     3158 | 2024-01-18 | Nirvana           | W   | 0.322      | -            | -                | -                | -         |     0.30 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     3764 | 2023-12-09 | TheMongolz        | L   | 0.051      | -            | -                | -                | -         |    -0.12 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     3812 | 2023-12-07 | TYLOO             | L   | 0.038      | -            | -                | -                | -         |    -0.80 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     3844 | 2023-12-06 | GR                | W   | 0.031      | -            | -                | -                | -         |     0.10 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,710.15)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.897 | $5,000.00      | $4,486.17       |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |
| 2024-01-28 |      0.384 | $12,000.00     | $4,608.13       |
| 2023-12-10 |      0.058 | $5,000.00      | $291.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
