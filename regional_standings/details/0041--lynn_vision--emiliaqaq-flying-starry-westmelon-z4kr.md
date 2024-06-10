### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, flying, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1163.4<br />
<br />
Final Rank Value (1163.4) = Starting Rank Value (1209.3) + Head To Head Adjustments (-45.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.529[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.618[<sup>2</sup>](#table1)

The average of these factors is 0.406<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1209.3
- 400 + ( ( 0.406 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1209.3


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
|           36 |       55 | 2024-06-09 | ATOX              | W   | 1.000      | 0.416        | 0.026 (0.011)    | 0.315 (0.131)    | -         |     8.72 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           35 |      129 | 2024-06-08 | TYLOO             | W   | 1.000      | 0.416        | 0.050 (0.021)    | 0.273 (0.113)    | -         |     4.99 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           34 |      248 | 2024-06-06 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -23.13 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           33 |      305 | 2024-06-05 | TYLOO             | W   | 1.000      | 0.416        | 0.050 (0.021)    | 0.273 (0.113)    | -         |     4.29 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           32 |      432 | 2024-06-01 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.75 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           31 |      442 | 2024-05-31 | ATOX              | W   | 1.000      | 0.500        | 0.026 (0.013)    | 0.315 (0.157)    | 1 (1.000) |     7.58 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           30 |      493 | 2024-05-30 | Gaimin Gladiators | W   | 1.000      | 0.500        | 0.081 (0.041)    | 0.749 (0.375)    | 1 (1.000) |    15.25 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           29 |      539 | 2024-05-28 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.38 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           28 |     1596 | 2024-04-18 | Rare Atom         | L   | 0.846      | -            | -                | -                | -         |   -25.49 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           27 |     1608 | 2024-04-18 | TYLOO             | L   | 0.845      | -            | -                | -                | -         |   -23.57 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           26 |     1864 | 2024-04-09 | G2                | L   | 0.785      | -            | -                | -                | -         |    -0.56 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           25 |     1893 | 2024-04-08 | TYLOO             | W   | 0.779      | 0.624        | 0.050 (0.024)    | 0.273 (0.132)    | 1 (0.779) |     2.47 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           24 |     1904 | 2024-04-07 | FURIA             | L   | 0.776      | -            | -                | -                | -         |    -2.53 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           23 |     2032 | 2024-04-03 | The MongolZ       | L   | 0.745      | -            | -                | -                | -         |    -0.74 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           22 |     2073 | 2024-04-02 | LYG               | W   | 0.739      | 0.143        | 0.005 (0.001)    | -                | -         |     1.68 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           21 |     2080 | 2024-04-02 | ATOX              | W   | 0.737      | 0.143        | 0.026 (0.003)    | 0.315 (0.033)    | -         |     4.52 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           20 |     2296 | 2024-03-19 | The MongolZ       | L   | 0.645      | -            | -                | -                | -         |    -0.45 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           19 |     2304 | 2024-03-18 | Gaimin Gladiators | L   | 0.638      | -            | -                | -                | -         |    -9.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           18 |     2313 | 2024-03-17 | FURIA             | W   | 0.634      | 0.143        | 0.249 (0.023)    | 0.590 (0.053)    | 1 (0.634) |    18.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           17 |     2334 | 2024-03-17 | HEROIC            | L   | 0.632      | -            | -                | -                | -         |    -0.84 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     2768 | 2024-02-28 | FlyQuest          | W   | 0.511      | 0.143        | 0.121 (0.009)    | 0.556 (0.041)    | 1 (0.511) |    12.46 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     2770 | 2024-02-27 | The MongolZ       | L   | 0.509      | -            | -                | -                | -         |    -0.27 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     2805 | 2024-02-26 | TYLOO             | W   | 0.497      | -            | -                | -                | 1 (0.497) |     1.50 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     2809 | 2024-02-25 | Twisted Minds     | W   | 0.496      | -            | -                | -                | 1 (0.496) |     0.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     3015 | 2024-02-17 | Newhappy          | L   | 0.439      | -            | -                | -                | -         |   -13.45 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     3044 | 2024-02-16 | Newhappy          | W   | 0.432      | -            | -                | -                | -         |     0.34 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     3051 | 2024-02-16 | MAG               | W   | 0.431      | -            | -                | -                | -         |     0.32 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     3358 | 2024-01-31 | Rare Atom         | L   | 0.325      | -            | -                | -                | -         |    -9.71 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     3362 | 2024-01-31 | NKT               | L   | 0.324      | -            | -                | -                | -         |    -9.65 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     3394 | 2024-01-28 | The MongolZ       | L   | 0.305      | -            | -                | -                | -         |    -0.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3397 | 2024-01-27 | TYLOO             | W   | 0.303      | 0.435        | -                | 0.122 (0.016)    | 1 (0.303) |     0.78 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     3429 | 2024-01-26 | NKT               | W   | 0.291      | -            | -                | -                | 1 (0.291) |     0.48 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     3433 | 2024-01-26 | NCTDK             | W   | 0.291      | -            | -                | -                | 1 (0.291) |     0.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     3548 | 2024-01-20 | TYLOO             | W   | 0.257      | -            | -                | -                | -         |     0.60 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     3652 | 2024-01-19 | Wings Up          | W   | 0.244      | -            | -                | -                | -         |     0.15 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     3658 | 2024-01-18 | Nirvana           | W   | 0.243      | -            | -                | -                | -         |     0.08 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,281.10)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-04-14 |      0.818 | $5,000.00      | $4,090.31       |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |
| 2024-01-28 |      0.305 | $12,000.00     | $3,658.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
