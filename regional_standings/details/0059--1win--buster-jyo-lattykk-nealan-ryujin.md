### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  1049.8<br />
<br />
Final Rank Value (1049.8) = Starting Rank Value (977.9) + Head To Head Adjustments (72.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.294[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.290<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 977.9
- 400 + ( ( 0.290 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 977.9


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
|           34 |      118 | 2024-06-08 | Monte         | L   | 1.000      | -            | -                | -                | -         |    -8.74 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           33 |      125 | 2024-06-08 | Quixal        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.77 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           32 |      133 | 2024-06-08 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |    -6.90 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           31 |      244 | 2024-06-06 | FAVBET        | L   | 1.000      | -            | -                | -                | -         |   -25.42 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           30 |      427 | 2024-06-01 | Insilio       | L   | 1.000      | -            | -                | -                | -         |   -19.98 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           29 |      485 | 2024-05-30 | V1dar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.52 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           28 |      572 | 2024-05-26 | 9 Pandas      | L   | 1.000      | -            | -                | -                | -         |   -14.12 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           27 |      593 | 2024-05-25 | FURIA         | W   | 1.000      | 0.435        | 0.249 (0.108)    | 0.590 (0.257)    | 0 (0.000) |    28.12 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           26 |      621 | 2024-05-23 | ECSTATIC      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.63 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           25 |      800 | 2024-05-18 | SINNERS       | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.844 (0.367)    | 0 (0.000) |    14.01 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           24 |      874 | 2024-05-16 | Zero Tenacity | W   | 1.000      | 0.435        | 0.154 (0.067)    | 1.000 (0.435)    | 0 (0.000) |    16.02 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           23 |      998 | 2024-05-13 | Permitta      | W   | 1.000      | 0.435        | 0.022 (0.009)    | 0.972 (0.422)    | 0 (0.000) |     9.65 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           22 |     1099 | 2024-05-09 | Sashi         | L   | 0.985      | -            | -                | -                | -         |    -6.91 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           21 |     1123 | 2024-05-08 | Nemiga        | W   | 0.978      | 0.396        | 0.335 (0.130)    | 0.638 (0.247)    | 0 (0.000) |    23.61 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           20 |     1135 | 2024-05-07 | BLEED         | W   | 0.973      | 0.396        | 0.349 (0.135)    | 1.000 (0.386)    | 0 (0.000) |    25.66 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           19 |     1184 | 2024-05-05 | M1X KS        | W   | 0.958      | 0.396        | 0.028 (0.011)    | 0.537 (0.204)    | 0 (0.000) |    15.88 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |     1228 | 2024-05-02 | Soda          | W   | 0.940      | -            | -                | -                | -         |     1.01 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |     1235 | 2024-05-02 | 500           | W   | 0.939      | 0.396        | -                | 0.354 (0.132)    | -         |     8.13 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |     1299 | 2024-04-29 | ECLOT         | L   | 0.919      | -            | -                | -                | -         |    -7.74 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |     1303 | 2024-04-29 | SINNERS       | L   | 0.919      | -            | -                | -                | -         |   -13.06 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |     1316 | 2024-04-28 | Sangal        | L   | 0.913      | -            | -                | -                | -         |   -10.68 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |     1348 | 2024-04-27 | Nemiga        | L   | 0.905      | -            | -                | -                | -         |    -6.04 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |     1396 | 2024-04-25 | Permitta      | W   | 0.893      | 0.435        | 0.022 (0.008)    | 0.972 (0.377)    | -         |    12.94 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |     1434 | 2024-04-23 | HAVU          | W   | 0.879      | -            | -                | -                | -         |     4.83 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |     1474 | 2024-04-21 | Nemiga        | L   | 0.865      | -            | -                | -                | -         |    -5.94 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |     1495 | 2024-04-20 | esmagaB       | W   | 0.860      | -            | -                | -                | -         |     4.99 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |     1668 | 2024-04-16 | ENCE Academy  | W   | 0.832      | -            | -                | -                | -         |     7.57 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |     1694 | 2024-04-15 | Lazer Cats    | W   | 0.824      | -            | -                | -                | -         |     1.48 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |     1859 | 2024-04-09 | Aurora        | L   | 0.786      | -            | -                | -                | -         |    -1.26 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |     1880 | 2024-04-08 | 9 Pandas      | W   | 0.780      | 0.143        | 0.114 (0.013)    | -                | -         |    17.64 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |     1894 | 2024-04-08 | Aurora        | W   | 0.778      | 0.143        | 0.513 (0.057)    | -                | -         |    23.50 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     2484 | 2024-03-11 | Insilio       | L   | 0.593      | -            | -                | -                | -         |   -10.29 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     2505 | 2024-03-10 | VP.Prodigy    | W   | 0.586      | 0.372        | -                | 0.539 (0.118)    | -         |     6.53 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     2633 | 2024-03-05 | ARCRED        | L   | 0.554      | -            | -                | -                | -         |   -15.47 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,880.34)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-09 |      0.985 | $8,000.00      | $7,880.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
