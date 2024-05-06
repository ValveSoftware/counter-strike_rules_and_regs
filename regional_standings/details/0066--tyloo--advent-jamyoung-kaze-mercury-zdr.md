### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [66](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  939.9<br />
<br />
Final Rank Value (939.9) = Starting Rank Value (973.2) + Head To Head Adjustments (-33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.492[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.311[<sup>2</sup>](#table1)

The average of these factors is 0.301<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 973.2
- 400 + ( ( 0.301 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 973.2


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
|           40 |      189 | 2024-04-27 | M80                | L   | 1.000      | -            | -                | -                | -         |    -6.47 | advent, JamYoung, kaze, Mercury, zdr     |
|           39 |      212 | 2024-04-26 | Sharks             | W   | 1.000      | 0.889        | 0.060 (0.053)    | 0.453 (0.402)    | 1 (1.000) |    13.94 | advent, JamYoung, kaze, Mercury, zdr     |
|           38 |      249 | 2024-04-25 | Falcons            | L   | 1.000      | -            | -                | -                | -         |    -3.18 | advent, JamYoung, kaze, Mercury, zdr     |
|           37 |      271 | 2024-04-24 | G2                 | L   | 1.000      | -            | -                | -                | -         |    -0.22 | advent, JamYoung, kaze, Mercury, zdr     |
|           36 |      404 | 2024-04-19 | Rare Atom          | L   | 1.000      | -            | -                | -                | -         |   -27.47 | advent, JamYoung, kaze, Mercury, zdr     |
|           35 |      444 | 2024-04-18 | TheMongolz         | L   | 1.000      | -            | -                | -                | -         |    -2.51 | advent, JamYoung, kaze, Mercury, zdr     |
|           34 |      457 | 2024-04-18 | Lynn Vision        | W   | 1.000      | 0.143        | 0.135 (0.019)    | 0.390 (0.056)    | 0 (0.000) |    23.08 | advent, JamYoung, kaze, Mercury, zdr     |
|           33 |      488 | 2024-04-17 | Sheer Conquer      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.57 | advent, JamYoung, kaze, Mercury, zdr     |
|           32 |      494 | 2024-04-17 | The Huns           | W   | 1.000      | 0.143        | -                | 0.184 (0.026)    | 0 (0.000) |     5.37 | advent, JamYoung, kaze, Mercury, zdr     |
|           31 |      742 | 2024-04-08 | Lynn Vision        | L   | 1.000      | -            | -                | -                | -         |    -7.67 | advent, JamYoung, kaze, Mercury, zdr     |
|           30 |      752 | 2024-04-08 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -0.20 | advent, JamYoung, kaze, Mercury, zdr     |
|           29 |     1287 | 2024-03-13 | LYG                | L   | 0.838      | -            | -                | -                | -         |   -21.52 | advent, JamYoung, lyrics3, Mercury, zdr  |
|           28 |     1293 | 2024-03-13 | padaem Holodnie    | W   | 0.838      | -            | -                | -                | 0 (0.000) |     1.05 | advent, JamYoung, lyrics3, Mercury, zdr  |
|           27 |     1642 | 2024-02-27 | ATOX               | L   | 0.737      | -            | -                | -                | -         |   -17.42 | advent, aumaN, JamYoung, kaze, Mercury   |
|           26 |     1654 | 2024-02-26 | Lynn Vision        | L   | 0.730      | -            | -                | -                | -         |    -7.57 | advent, aumaN, JamYoung, kaze, Mercury   |
|           25 |     1656 | 2024-02-25 | JiJieHao           | W   | 0.730      | 0.143        | -                | 0.145 (0.015)    | 1 (0.730) |     1.96 | advent, aumaN, JamYoung, kaze, Mercury   |
|           24 |     2160 | 2024-02-02 | Rare Atom          | L   | 0.571      | -            | -                | -                | -         |   -14.62 | advent, aumaN, JamYoung, kaze, Mercury   |
|           23 |     2190 | 2024-02-01 | Newhappy           | W   | 0.564      | 0.143        | 0.004 (0.000)    | 0.181 (0.015)    | 0 (0.000) |     2.69 | advent, aumaN, JamYoung, kaze, Mercury   |
|           22 |     2192 | 2024-02-01 | GR                 | W   | 0.564      | 0.143        | 0.005 (0.000)    | 0.217 (0.018)    | 0 (0.000) |     2.07 | advent, aumaN, JamYoung, kaze, Mercury   |
|           21 |     2246 | 2024-01-27 | Lynn Vision        | L   | 0.536      | -            | -                | -                | -         |    -4.93 | advent, aumaN, JamYoung, kaze, Mercury   |
|           20 |     2255 | 2024-01-27 | TheMongolz         | W   | 0.532      | 0.143        | 0.253 (0.019)    | 0.595 (0.045)    | -         |    15.49 | advent, aumaN, JamYoung, kaze, Mercury   |
|           19 |     2259 | 2024-01-27 | The Huns           | W   | 0.531      | 0.143        | -                | 0.184 (0.014)    | -         |     2.58 | advent, aumaN, JamYoung, kaze, Mercury   |
|           18 |     2262 | 2024-01-26 | ACME               | W   | 0.530      | 0.435        | 0.004 (0.001)    | -                | 1 (0.530) |     2.46 | advent, aumaN, JamYoung, kaze, Mercury   |
|           17 |     2273 | 2024-01-26 | TheMongolz         | L   | 0.526      | -            | -                | -                | -         |    -1.18 | advent, aumaN, JamYoung, kaze, Mercury   |
|           16 |     2277 | 2024-01-26 | Wings Up           | W   | 0.525      | -            | -                | -                | -         |     2.29 | advent, aumaN, JamYoung, kaze, Mercury   |
|           15 |     2284 | 2024-01-26 | TheMongolz         | L   | 0.524      | -            | -                | -                | -         |    -1.18 | advent, aumaN, JamYoung, kaze, Mercury   |
|           14 |     2286 | 2024-01-25 | Incheon On Sla2ers | W   | 0.522      | 0.435        | 0.004 (0.001)    | -                | 1 (0.522) |     1.29 | advent, aumaN, JamYoung, kaze, Mercury   |
|           13 |     2388 | 2024-01-21 | Rare Atom          | W   | 0.492      | 0.143        | 0.025 (0.002)    | -                | -         |     2.97 | advent, aumaN, JamYoung, kaze, Mercury   |
|           12 |     2397 | 2024-01-20 | Lynn Vision        | L   | 0.490      | -            | -                | -                | -         |    -4.27 | advent, aumaN, JamYoung, kaze, Mercury   |
|           11 |     2495 | 2024-01-19 | Newhappy           | W   | 0.477      | -            | -                | -                | -         |     2.63 | advent, aumaN, JamYoung, kaze, Mercury   |
|           10 |     2509 | 2024-01-18 | SHPL               | W   | 0.476      | -            | -                | -                | -         |     0.60 | advent, aumaN, JamYoung, kaze, Mercury   |
|            9 |     3088 | 2023-12-10 | TheMongolz         | L   | 0.212      | -            | -                | -                | -         |    -0.49 | advent, aumaN, JamYoung, kaze, Mercury   |
|            8 |     3161 | 2023-12-07 | Lynn Vision        | W   | 0.192      | 0.416        | 0.135 (0.011)    | 0.390 (0.031)    | -         |     4.44 | advent, aumaN, JamYoung, kaze, Mercury   |
|            7 |     3190 | 2023-12-06 | Newhappy           | W   | 0.186      | 0.416        | 0.004 (0.000)    | 0.181 (0.014)    | -         |     1.01 | advent, aumaN, JamYoung, kaze, Mercury   |
|            6 |     3377 | 2023-11-25 | Eternal Fire       | L   | 0.111      | -            | -                | -                | -         |    -0.06 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            5 |     3398 | 2023-11-24 | Monte              | L   | 0.104      | -            | -                | -                | -         |    -0.31 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            4 |     3500 | 2023-11-18 | TheMongolz         | L   | 0.065      | -            | -                | -                | -         |    -0.14 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            3 |     3508 | 2023-11-18 | Newhappy           | W   | 0.064      | -            | -                | -                | -         |     0.34 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            2 |     3533 | 2023-11-17 | TheMongolz         | L   | 0.058      | -            | -                | -                | -         |    -0.13 | advent, JamYoung, kaze, Mercury, Moseyuh |
|            1 |     3541 | 2023-11-17 | ATOX               | W   | 0.057      | -            | -                | -                | -         |     0.42 | advent, JamYoung, kaze, Mercury, Moseyuh |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,091.36)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-01-28 |      0.538 | $4,000.00      | $2,152.41       |
| 2023-12-10 |      0.212 | $8,000.00      | $1,698.98       |
| 2023-11-26 |      0.120 | $2,000.00      | $239.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
