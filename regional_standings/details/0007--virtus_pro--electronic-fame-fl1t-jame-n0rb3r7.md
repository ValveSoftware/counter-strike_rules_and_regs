### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1674.6<br />
<br />
Final Rank Value (1674.6) = Starting Rank Value (1729.6) + Head To Head Adjustments (-54.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.736[<sup>1</sup>](#table2)
- Bounty Collected: 0.616[<sup>2</sup>](#table1)
- Opponent Network: 0.461[<sup>2</sup>](#table1)
- LAN Wins: 0.979[<sup>2</sup>](#table1)

The average of these factors is 0.698<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1729.6
- 400 + ( ( 0.698 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1729.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      170 | 2024-04-28 | SAW           | W   | 1.000      | 0.889        | 0.248 (0.220)    | 0.774 (0.688)    | 1 (1.000) |     5.87 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           41 |      200 | 2024-04-27 | fnatic        | W   | 1.000      | 0.889        | 0.327 (0.291)    | 0.677 (0.602)    | 1 (1.000) |     2.23 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           40 |      242 | 2024-04-25 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -6.39 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      266 | 2024-04-24 | SAW           | W   | 1.000      | 0.889        | 0.248 (0.220)    | 0.774 (0.688)    | 1 (1.000) |     4.83 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      287 | 2024-04-23 | fnatic        | L   | 1.000      | -            | -                | -                | -         |   -29.41 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |      584 | 2024-04-12 | G2            | L   | 1.000      | -            | -                | -                | -         |   -10.43 | fame, FL1T, Jame, mir, n0rb3r7        |
|           36 |      665 | 2024-04-10 | Astralis      | L   | 1.000      | -            | -                | -                | -         |   -22.41 | fame, FL1T, Jame, mir, n0rb3r7        |
|           35 |      720 | 2024-04-09 | FlyQuest      | W   | 1.000      | 0.624        | -                | 0.705 (0.440)    | 1 (1.000) |     3.45 | fame, FL1T, Jame, mir, n0rb3r7        |
|           34 |      750 | 2024-04-08 | Wildcard      | W   | 1.000      | 0.624        | -                | 0.490 (0.306)    | 1 (1.000) |     0.38 | fame, FL1T, Jame, mir, n0rb3r7        |
|           33 |     1051 | 2024-03-24 | G2            | L   | 0.913      | -            | -                | -                | -         |   -10.36 | fame, FL1T, Jame, mir, n0rb3r7        |
|           32 |     1065 | 2024-03-23 | Eternal Fire  | L   | 0.905      | -            | -                | -                | -         |   -14.33 | fame, FL1T, Jame, mir, n0rb3r7        |
|           31 |     1083 | 2024-03-22 | HEROIC        | W   | 0.898      | 1.000        | 0.347 (0.312)    | 0.712 (0.639)    | 1 (0.898) |    10.31 | fame, FL1T, Jame, mir, n0rb3r7        |
|           30 |     1096 | 2024-03-21 | paiN          | W   | 0.893      | 1.000        | 0.786 (0.702)    | 0.869 (0.777)    | 1 (0.893) |    10.73 | fame, FL1T, Jame, mir, n0rb3r7        |
|           29 |     1107 | 2024-03-21 | Imperial      | L   | 0.892      | -            | -                | -                | -         |   -19.32 | fame, FL1T, Jame, mir, n0rb3r7        |
|           28 |     1308 | 2024-03-12 | HEROIC        | W   | 0.834      | -            | -                | -                | -         |     8.66 | fame, FL1T, Jame, mir, n0rb3r7        |
|           27 |     1323 | 2024-03-11 | Apeks         | W   | 0.827      | -            | -                | -                | -         |     2.84 | fame, FL1T, Jame, mir, n0rb3r7        |
|           26 |     1334 | 2024-03-11 | B8            | W   | 0.826      | -            | -                | -                | -         |     0.36 | fame, FL1T, Jame, mir, n0rb3r7        |
|           25 |     1916 | 2024-02-15 | Natus Vincere | W   | 0.659      | 0.143        | 1.000 (0.094)    | -                | 1 (0.659) |    16.10 | fame, FL1T, Jame, mir, n0rb3r7        |
|           24 |     1948 | 2024-02-14 | fnatic        | W   | 0.653      | -            | -                | -                | 1 (0.653) |     1.07 | fame, FL1T, Jame, mir, n0rb3r7        |
|           23 |     1966 | 2024-02-14 | SAW           | W   | 0.651      | -            | -                | -                | 1 (0.651) |     3.09 | fame, FL1T, Jame, mir, n0rb3r7        |
|           22 |     2147 | 2024-02-02 | Cloud9        | L   | 0.573      | -            | -                | -                | -         |   -11.71 | fame, FL1T, Jame, mir, n0rb3r7        |
|           21 |     2183 | 2024-02-01 | GamerLegion   | L   | 0.565      | -            | -                | -                | -         |   -14.38 | fame, FL1T, Jame, mir, n0rb3r7        |
|           20 |     2195 | 2024-01-31 | Rooster       | W   | 0.560      | -            | -                | -                | -         |     0.10 | fame, FL1T, Jame, mir, n0rb3r7        |
|           19 |     2248 | 2024-01-27 | BIG           | W   | 0.534      | 0.581        | 0.454 (0.141)    | 0.510 (0.158)    | -         |     2.31 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2289 | 2024-01-25 | Cloud9        | W   | 0.520      | 0.581        | 0.472 (0.143)    | 0.525 (0.159)    | -         |     6.06 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     2304 | 2024-01-24 | BIG           | W   | 0.513      | 0.581        | 0.454 (0.135)    | 0.510 (0.152)    | -         |     2.06 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     2418 | 2024-01-20 | fnatic        | W   | 0.486      | -            | -                | -                | -         |     0.81 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     2473 | 2024-01-19 | Natus Vincere | L   | 0.480      | -            | -                | -                | -         |    -3.26 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2528 | 2024-01-18 | SAW           | W   | 0.473      | -            | -                | -                | -         |     2.23 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     2544 | 2024-01-18 | SINNERS       | W   | 0.472      | -            | -                | -                | -         |     0.33 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     2968 | 2023-12-17 | Apeks         | W   | 0.261      | -            | -                | -                | -         |     0.87 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     2979 | 2023-12-17 | TheMongolz    | W   | 0.259      | -            | -                | -                | -         |     1.33 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3030 | 2023-12-15 | Monte         | W   | 0.247      | -            | -                | -                | -         |     0.97 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3040 | 2023-12-15 | M80           | W   | 0.246      | -            | -                | -                | -         |     0.55 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3087 | 2023-12-10 | Spirit        | L   | 0.212      | -            | -                | -                | -         |    -2.68 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3118 | 2023-12-09 | BetBoom       | W   | 0.204      | -            | -                | -                | -         |     1.14 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3166 | 2023-12-07 | Spirit        | W   | 0.191      | 0.657        | 1.000 (0.125)    | -                | -         |     3.64 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3198 | 2023-12-06 | Astralis      | W   | 0.185      | -            | -                | -                | -         |     1.74 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3354 | 2023-11-26 | Monte         | L   | 0.118      | -            | -                | -                | -         |    -3.25 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     3376 | 2023-11-25 | GamerLegion   | W   | 0.112      | -            | -                | -                | -         |     0.75 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     3386 | 2023-11-24 | MIBR          | L   | 0.106      | -            | -                | -                | -         |    -1.97 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     3395 | 2023-11-24 | 3DMAX         | W   | 0.105      | -            | -                | -                | -         |     0.16 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,932.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2024-02-02 |      0.574 | $4,500.00      | $2,583.37       |
| 2024-01-28 |      0.540 | $22,500.00     | $12,148.01      |
| 2023-12-17 |      0.261 | $50,000.00     | $13,050.13      |
| 2023-12-10 |      0.212 | $60,000.00     | $12,745.98      |
| 2023-11-26 |      0.120 | $10,000.00     | $1,199.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
