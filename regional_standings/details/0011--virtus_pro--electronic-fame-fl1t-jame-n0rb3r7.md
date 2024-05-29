### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1604.6<br />
<br />
Final Rank Value (1604.6) = Starting Rank Value (1692.5) + Head To Head Adjustments (-87.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.638[<sup>1</sup>](#table2)
- Bounty Collected: 0.574[<sup>2</sup>](#table1)
- Opponent Network: 0.452[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.666<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1692.5
- 400 + ( ( 0.666 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1692.5


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
|           47 |        8 | 2024-05-29 | BIG           | L   | 1.000      | -            | -                | -                | -         |   -25.14 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           46 |       23 | 2024-05-28 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -4.54 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           45 |       46 | 2024-05-27 | HEROIC        | W   | 1.000      | 0.624        | 0.322 (0.201)    | 0.662 (0.413)    | 1 (1.000) |    14.50 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           44 |      336 | 2024-05-17 | Falcons       | L   | 1.000      | -            | -                | -                | -         |   -23.59 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           43 |      376 | 2024-05-16 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -4.09 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           42 |      476 | 2024-05-14 | Falcons       | W   | 1.000      | 0.769        | 0.355 (0.273)    | -                | 1 (1.000) |     6.94 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           41 |      598 | 2024-05-09 | Complexity    | L   | 1.000      | -            | -                | -                | -         |   -18.10 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           40 |      614 | 2024-05-08 | TheMongolz    | W   | 1.000      | 0.889        | 0.176 (0.157)    | 0.583 (0.518)    | 1 (1.000) |     7.84 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      633 | 2024-05-07 | GamerLegion   | W   | 1.000      | 0.889        | 0.224 (0.199)    | 0.278 (0.247)    | 1 (1.000) |     2.71 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      821 | 2024-04-28 | SAW           | W   | 0.992      | 0.889        | 0.109 (0.096)    | 0.611 (0.539)    | 1 (0.992) |     4.92 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |      851 | 2024-04-27 | fnatic        | W   | 0.984      | 0.889        | 0.148 (0.129)    | 0.565 (0.494)    | 1 (0.984) |     1.63 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |      893 | 2024-04-25 | FaZe          | L   | 0.972      | -            | -                | -                | -         |    -4.78 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |      917 | 2024-04-24 | SAW           | W   | 0.965      | 0.889        | 0.109 (0.094)    | 0.611 (0.524)    | 1 (0.965) |     3.87 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |      938 | 2024-04-23 | fnatic        | L   | 0.958      | -            | -                | -                | -         |   -28.72 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1235 | 2024-04-12 | G2            | L   | 0.883      | -            | -                | -                | -         |    -9.56 | fame, FL1T, Jame, mir, n0rb3r7        |
|           32 |     1316 | 2024-04-10 | Astralis      | L   | 0.870      | -            | -                | -                | -         |   -12.76 | fame, FL1T, Jame, mir, n0rb3r7        |
|           31 |     1371 | 2024-04-09 | FlyQuest      | W   | 0.863      | 0.624        | -                | 0.648 (0.349)    | 1 (0.863) |     4.55 | fame, FL1T, Jame, mir, n0rb3r7        |
|           30 |     1401 | 2024-04-08 | Wildcard      | W   | 0.856      | 0.624        | -                | 0.615 (0.329)    | 1 (0.856) |     0.41 | fame, FL1T, Jame, mir, n0rb3r7        |
|           29 |     1702 | 2024-03-24 | G2            | L   | 0.759      | -            | -                | -                | -         |    -9.05 | fame, FL1T, Jame, mir, n0rb3r7        |
|           28 |     1716 | 2024-03-23 | Eternal Fire  | L   | 0.751      | -            | -                | -                | -         |    -7.58 | fame, FL1T, Jame, mir, n0rb3r7        |
|           27 |     1734 | 2024-03-22 | HEROIC        | W   | 0.744      | 1.000        | 0.322 (0.240)    | 0.662 (0.493)    | 1 (0.744) |    11.59 | fame, FL1T, Jame, mir, n0rb3r7        |
|           26 |     1747 | 2024-03-21 | paiN          | W   | 0.739      | 1.000        | 0.464 (0.343)    | 0.829 (0.613)    | -         |     7.65 | fame, FL1T, Jame, mir, n0rb3r7        |
|           25 |     1758 | 2024-03-21 | Imperial      | L   | 0.738      | -            | -                | -                | -         |   -17.71 | fame, FL1T, Jame, mir, n0rb3r7        |
|           24 |     1959 | 2024-03-12 | HEROIC        | W   | 0.679      | -            | -                | -                | -         |    10.20 | fame, FL1T, Jame, mir, n0rb3r7        |
|           23 |     1974 | 2024-03-11 | Apeks         | W   | 0.673      | -            | -                | -                | -         |     1.30 | fame, FL1T, Jame, mir, n0rb3r7        |
|           22 |     1985 | 2024-03-11 | B8            | W   | 0.672      | -            | -                | -                | -         |     0.66 | fame, FL1T, Jame, mir, n0rb3r7        |
|           21 |     2567 | 2024-02-15 | Natus Vincere | W   | 0.505      | 0.143        | 1.000 (0.072)    | -                | -         |    11.79 | fame, FL1T, Jame, mir, n0rb3r7        |
|           20 |     2599 | 2024-02-14 | fnatic        | W   | 0.499      | -            | -                | -                | -         |     0.62 | fame, FL1T, Jame, mir, n0rb3r7        |
|           19 |     2617 | 2024-02-14 | SAW           | W   | 0.497      | -            | -                | -                | -         |     2.11 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2798 | 2024-02-02 | Cloud9        | L   | 0.419      | -            | -                | -                | -         |   -10.80 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     2834 | 2024-02-01 | GamerLegion   | L   | 0.411      | -            | -                | -                | -         |   -12.36 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     2846 | 2024-01-31 | Rooster       | W   | 0.406      | -            | -                | -                | -         |     0.07 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     2899 | 2024-01-27 | BIG           | W   | 0.380      | -            | -                | -                | -         |     1.87 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2940 | 2024-01-25 | Cloud9        | W   | 0.366      | -            | -                | -                | -         |     2.08 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     2955 | 2024-01-24 | BIG           | W   | 0.359      | -            | -                | -                | -         |     1.69 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     3069 | 2024-01-20 | fnatic        | W   | 0.332      | -            | -                | -                | -         |     0.39 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3124 | 2024-01-19 | Natus Vincere | L   | 0.326      | -            | -                | -                | -         |    -2.78 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3179 | 2024-01-18 | SAW           | W   | 0.319      | -            | -                | -                | -         |     1.29 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3195 | 2024-01-18 | SINNERS       | W   | 0.318      | -            | -                | -                | -         |     0.18 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3619 | 2023-12-17 | Apeks         | W   | 0.107      | -            | -                | -                | -         |     0.17 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3630 | 2023-12-17 | TheMongolz    | W   | 0.105      | -            | -                | -                | -         |     0.74 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3681 | 2023-12-15 | Monte         | W   | 0.093      | -            | -                | -                | -         |     0.30 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3691 | 2023-12-15 | M80           | W   | 0.092      | -            | -                | -                | -         |     0.25 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3738 | 2023-12-10 | Spirit        | L   | 0.058      | -            | -                | -                | -         |    -0.42 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     3769 | 2023-12-09 | BetBoom       | W   | 0.050      | -            | -                | -                | -         |     0.30 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     3817 | 2023-12-07 | Spirit        | W   | 0.037      | -            | -                | -                | -         |     0.90 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     3849 | 2023-12-06 | Astralis      | W   | 0.031      | -            | -                | -                | -         |     0.56 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($81,511.92)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.897 | $10,000.00     | $8,972.34       |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-02-02 |      0.420 | $4,500.00      | $1,889.95       |
| 2024-01-28 |      0.386 | $22,500.00     | $8,680.92       |
| 2023-12-17 |      0.107 | $50,000.00     | $5,345.49       |
| 2023-12-10 |      0.058 | $60,000.00     | $3,500.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
