### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, Jee, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1092.1<br />
<br />
Final Rank Value (1092.1) = Starting Rank Value (1156.9) + Head To Head Adjustments (-64.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.534[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.633[<sup>2</sup>](#table1)

The average of these factors is 0.397<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1156.9
- 400 + ( ( 0.397 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1156.9


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
|           33 |      445 | 2024-04-18 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -29.95 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           32 |      457 | 2024-04-18 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |   -23.08 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           31 |      713 | 2024-04-09 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.72 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           30 |      742 | 2024-04-08 | TYLOO             | W   | 1.000      | 0.624        | 0.093 (0.058)    | 0.436 (0.272)    | 1 (1.000) |     7.67 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           29 |      753 | 2024-04-07 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -4.48 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           28 |      881 | 2024-04-03 | TheMongolz        | L   | 0.979      | -            | -                | -                | -         |    -6.06 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           27 |      922 | 2024-04-02 | LYG               | W   | 0.972      | 0.143        | 0.004 (0.001)    | 0.125 (0.017)    | 0 (0.000) |     2.75 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           26 |      929 | 2024-04-02 | ATOX              | W   | 0.971      | 0.143        | 0.005 (0.001)    | 0.258 (0.036)    | 0 (0.000) |     3.82 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           25 |     1145 | 2024-03-19 | TheMongolz        | L   | 0.878      | -            | -                | -                | -         |    -4.74 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           24 |     1153 | 2024-03-18 | Gaimin Gladiators | L   | 0.872      | -            | -                | -                | -         |    -7.95 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           23 |     1162 | 2024-03-17 | FURIA             | W   | 0.867      | 0.143        | 0.371 (0.046)    | 0.484 (0.060)    | 1 (0.867) |    23.54 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           22 |     1183 | 2024-03-17 | HEROIC            | L   | 0.865      | -            | -                | -                | -         |    -1.71 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           21 |     1617 | 2024-02-28 | FlyQuest          | W   | 0.744      | 0.143        | 0.050 (0.005)    | 0.705 (0.075)    | 1 (0.744) |    17.95 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           20 |     1619 | 2024-02-27 | TheMongolz        | L   | 0.742      | -            | -                | -                | -         |    -3.29 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           19 |     1654 | 2024-02-26 | TYLOO             | W   | 0.730      | 0.143        | 0.093 (0.010)    | 0.436 (0.045)    | 1 (0.730) |     7.57 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           18 |     1658 | 2024-02-25 | Twisted Minds     | W   | 0.729      | -            | -                | -                | 1 (0.729) |     0.44 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           17 |     1864 | 2024-02-17 | Newhappy          | L   | 0.672      | -            | -                | -                | -         |   -19.34 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           16 |     1893 | 2024-02-16 | Newhappy          | W   | 0.665      | -            | -                | -                | -         |     1.65 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           15 |     1900 | 2024-02-16 | MAG               | W   | 0.664      | 0.143        | -                | 0.193 (0.018)    | -         |     0.78 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           14 |     2207 | 2024-01-31 | Rare Atom         | L   | 0.558      | -            | -                | -                | -         |   -16.12 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           13 |     2211 | 2024-01-31 | NKT               | L   | 0.557      | -            | -                | -                | -         |   -15.93 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           12 |     2243 | 2024-01-28 | TheMongolz        | L   | 0.538      | -            | -                | -                | -         |    -3.12 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           11 |     2246 | 2024-01-27 | TYLOO             | W   | 0.536      | 0.435        | 0.093 (0.022)    | 0.436 (0.102)    | 1 (0.536) |     4.93 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|           10 |     2278 | 2024-01-26 | NKT               | W   | 0.525      | 0.435        | 0.013 (0.003)    | 0.088 (0.020)    | 1 (0.525) |     1.44 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            9 |     2282 | 2024-01-26 | NCTDK             | W   | 0.524      | 0.435        | 0.004 (0.001)    | -                | 1 (0.524) |     0.51 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            8 |     2397 | 2024-01-20 | TYLOO             | W   | 0.490      | 0.143        | 0.093 (0.007)    | 0.436 (0.030)    | -         |     4.27 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            7 |     2501 | 2024-01-19 | Wings Up          | W   | 0.477      | -            | -                | -                | -         |     0.82 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            6 |     2507 | 2024-01-18 | Nirvana           | W   | 0.476      | -            | -                | -                | -         |     0.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            5 |     3113 | 2023-12-09 | TheMongolz        | L   | 0.205      | -            | -                | -                | -         |    -1.11 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            4 |     3161 | 2023-12-07 | TYLOO             | L   | 0.192      | -            | -                | -                | -         |    -4.44 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            3 |     3193 | 2023-12-06 | GR                | W   | 0.185      | -            | -                | -                | -         |     0.34 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            2 |     3577 | 2023-11-16 | The Huns          | L   | 0.051      | -            | -                | -                | -         |    -1.52 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |
|            1 |     3714 | 2023-11-10 | MOUZ              | L   | 0.016      | -            | -                | -                | -         |    -0.01 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,806.55)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |
| 2024-01-28 |      0.538 | $12,000.00     | $6,457.24       |
| 2023-12-10 |      0.212 | $5,000.00      | $1,061.86       |
| 2023-11-12 |      0.026 | $16,500.00     | $422.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
