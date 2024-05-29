### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1063.3<br />
<br />
Final Rank Value (1063.3) = Starting Rank Value (955.7) + Head To Head Adjustments (107.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.293[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 955.7
- 400 + ( ( 0.286 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 955.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       72 | 2024-05-26 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |   -14.24 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           27 |       93 | 2024-05-25 | FURIA           | W   | 1.000      | 0.435        | 0.138 (0.060)    | 0.402 (0.175)    | 0 (0.000) |    24.41 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           26 |      121 | 2024-05-23 | ECSTATIC        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.78 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           25 |      300 | 2024-05-18 | SINNERS         | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.728 (0.316)    | 0 (0.000) |    12.09 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           24 |      374 | 2024-05-16 | Zero Tenacity   | W   | 1.000      | 0.435        | 0.147 (0.064)    | 1.000 (0.435)    | 0 (0.000) |    15.43 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           23 |      498 | 2024-05-13 | Permitta        | W   | 1.000      | 0.435        | 0.025 (0.011)    | 1.000 (0.435)    | 0 (0.000) |     9.33 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           22 |      599 | 2024-05-09 | Sashi           | L   | 1.000      | -            | -                | -                | -         |    -7.66 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           21 |      623 | 2024-05-08 | Nemiga          | W   | 1.000      | 0.396        | 0.363 (0.144)    | 0.647 (0.257)    | 0 (0.000) |    23.84 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           20 |      635 | 2024-05-07 | BLEED           | W   | 1.000      | 0.396        | 0.246 (0.098)    | 0.982 (0.389)    | 0 (0.000) |    24.12 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           19 |      684 | 2024-05-05 | ex-Guild Eagles | W   | 1.000      | 0.396        | 0.014 (0.006)    | 0.552 (0.219)    | 0 (0.000) |    13.61 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |      728 | 2024-05-02 | Soda            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.30 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |      735 | 2024-05-02 | 500             | W   | 1.000      | 0.396        | -                | 0.436 (0.173)    | 0 (0.000) |     9.15 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |      799 | 2024-04-29 | ECLOT           | L   | 0.998      | -            | -                | -                | -         |   -12.13 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |      803 | 2024-04-29 | SINNERS         | L   | 0.998      | -            | -                | -                | -         |   -17.17 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |      816 | 2024-04-28 | Sangal          | L   | 0.992      | -            | -                | -                | -         |   -13.17 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |      848 | 2024-04-27 | Nemiga          | L   | 0.984      | -            | -                | -                | -         |    -7.15 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |      896 | 2024-04-25 | Permitta        | W   | 0.972      | 0.435        | 0.025 (0.010)    | 1.000 (0.422)    | -         |    13.13 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |      934 | 2024-04-23 | HAVU            | W   | 0.958      | -            | -                | -                | -         |     5.23 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |      974 | 2024-04-21 | Nemiga          | L   | 0.944      | -            | -                | -                | -         |    -6.98 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |      995 | 2024-04-20 | esmagaB         | W   | 0.939      | -            | -                | -                | -         |     5.95 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |     1168 | 2024-04-16 | ENCE Academy    | W   | 0.911      | -            | -                | -                | -         |     9.16 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |     1194 | 2024-04-15 | Lazer Cats      | W   | 0.903      | -            | -                | -                | -         |     1.81 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |     1359 | 2024-04-09 | Aurora          | L   | 0.865      | -            | -                | -                | -         |    -2.28 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |     1380 | 2024-04-08 | 9 Pandas        | W   | 0.859      | 0.143        | 0.108 (0.013)    | -                | -         |    19.62 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |     1394 | 2024-04-08 | Aurora          | W   | 0.858      | 0.143        | 0.493 (0.060)    | -                | -         |    25.09 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     1984 | 2024-03-11 | Insilio         | L   | 0.672      | -            | -                | -                | -         |   -11.84 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     2005 | 2024-03-10 | VP.Prodigy      | W   | 0.665      | 0.372        | -                | 0.433 (0.107)    | -         |     2.91 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     2133 | 2024-03-05 | ARCRED          | L   | 0.633      | -            | -                | -                | -         |   -16.74 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-09 |      1.000 | $8,000.00      | $8,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
