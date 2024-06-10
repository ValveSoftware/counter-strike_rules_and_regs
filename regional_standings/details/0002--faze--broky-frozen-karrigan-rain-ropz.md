### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1936.6<br />
<br />
Final Rank Value (1936.6) = Starting Rank Value (1983.6) + Head To Head Adjustments (-47.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.769[<sup>2</sup>](#table1)
- Opponent Network: 0.442[<sup>2</sup>](#table1)
- LAN Wins: 0.966[<sup>2</sup>](#table1)

The average of these factors is 0.794<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1983.6
- 400 + ( ( 0.794 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1983.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      446 | 2024-05-31 | G2            | L   | 1.000      | -            | -                | -                | -         |   -19.01 | broky, frozen, karrigan, rain, ropz |
|           42 |      502 | 2024-05-29 | Spirit        | L   | 1.000      | -            | -                | -                | -         |   -16.93 | broky, frozen, karrigan, rain, ropz |
|           41 |      523 | 2024-05-28 | Virtus.pro    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.11 | broky, frozen, karrigan, rain, ropz |
|           40 |      548 | 2024-05-27 | M80           | W   | 1.000      | 0.624        | -                | 0.749 (0.467)    | 1 (1.000) |     0.61 | broky, frozen, karrigan, rain, ropz |
|           39 |     1073 | 2024-05-10 | Vitality      | L   | 0.993      | -            | -                | -                | -         |   -17.50 | broky, frozen, karrigan, rain, ropz |
|           38 |     1115 | 2024-05-08 | Natus Vincere | W   | 0.980      | 0.889        | 1.000 (0.871)    | -                | 1 (0.980) |    10.78 | broky, frozen, karrigan, rain, ropz |
|           37 |     1132 | 2024-05-07 | Monte         | W   | 0.974      | 0.889        | -                | 0.686 (0.593)    | 1 (0.974) |     0.57 | broky, frozen, karrigan, rain, ropz |
|           36 |     1364 | 2024-04-26 | Eternal Fire  | W   | 0.900      | 0.889        | 1.000 (0.800)    | 0.560 (0.448)    | 1 (0.900) |     8.47 | broky, frozen, karrigan, rain, ropz |
|           35 |     1393 | 2024-04-25 | Virtus.pro    | W   | 0.893      | 0.889        | -                | 0.418 (0.332)    | 1 (0.893) |     4.71 | broky, frozen, karrigan, rain, ropz |
|           34 |     1412 | 2024-04-24 | Astralis      | L   | 0.887      | -            | -                | -                | -         |   -17.16 | broky, frozen, karrigan, rain, ropz |
|           33 |     1430 | 2024-04-23 | Imperial      | W   | 0.880      | 0.889        | 0.415 (0.325)    | 0.799 (0.625)    | 1 (0.880) |     1.66 | broky, frozen, karrigan, rain, ropz |
|           32 |     1705 | 2024-04-14 | MOUZ          | W   | 0.818      | 0.624        | 1.000 (0.511)    | -                | 1 (0.818) |    13.91 | broky, frozen, karrigan, rain, ropz |
|           31 |     1719 | 2024-04-13 | Astralis      | W   | 0.812      | -            | -                | -                | 1 (0.812) |     9.87 | broky, frozen, karrigan, rain, ropz |
|           30 |     1732 | 2024-04-12 | Liquid        | W   | 0.805      | 0.624        | -                | 0.732 (0.368)    | 1 (0.805) |     4.19 | broky, frozen, karrigan, rain, ropz |
|           29 |     1807 | 2024-04-10 | FlyQuest      | W   | 0.792      | -            | -                | -                | -         |     1.21 | broky, frozen, karrigan, rain, ropz |
|           28 |     1822 | 2024-04-10 | Cloud9        | W   | 0.790      | -            | -                | -                | -         |     1.35 | broky, frozen, karrigan, rain, ropz |
|           27 |     1868 | 2024-04-09 | Astralis      | L   | 0.784      | -            | -                | -                | -         |   -15.54 | broky, frozen, karrigan, rain, ropz |
|           26 |     1899 | 2024-04-08 | Nemiga        | W   | 0.777      | -            | -                | -                | -         |     0.43 | broky, frozen, karrigan, rain, ropz |
|           25 |     2092 | 2024-03-31 | Natus Vincere | L   | 0.727      | -            | -                | -                | -         |   -14.12 | broky, frozen, karrigan, rain, ropz |
|           24 |     2099 | 2024-03-30 | Vitality      | W   | 0.720      | 1.000        | 0.670 (0.483)    | 0.474 (0.341)    | -         |     9.73 | broky, frozen, karrigan, rain, ropz |
|           23 |     2117 | 2024-03-28 | Spirit        | W   | 0.708      | 1.000        | 1.000 (0.708)    | 0.454 (0.322)    | -         |     9.98 | broky, frozen, karrigan, rain, ropz |
|           22 |     2204 | 2024-03-24 | Complexity    | W   | 0.678      | -            | -                | -                | -         |     3.00 | broky, frozen, karrigan, rain, ropz |
|           21 |     2217 | 2024-03-23 | Imperial      | W   | 0.672      | 1.000        | 0.415 (0.279)    | 0.799 (0.537)    | -         |     1.59 | broky, frozen, karrigan, rain, ropz |
|           20 |     2231 | 2024-03-22 | Eternal Fire  | L   | 0.665      | -            | -                | -                | -         |   -13.74 | broky, frozen, karrigan, rain, ropz |
|           19 |     2242 | 2024-03-21 | FURIA         | W   | 0.660      | 1.000        | -                | 0.590 (0.390)    | -         |     2.55 | broky, frozen, karrigan, rain, ropz |
|           18 |     2254 | 2024-03-21 | HEROIC        | L   | 0.659      | -            | -                | -                | -         |   -15.63 | broky, frozen, karrigan, rain, ropz |
|           17 |     3042 | 2024-02-16 | Eternal Fire  | W   | 0.432      | -            | -                | -                | -         |     4.20 | broky, frozen, karrigan, rain, ropz |
|           16 |     3069 | 2024-02-15 | G2            | L   | 0.425      | -            | -                | -                | -         |    -7.95 | broky, frozen, karrigan, rain, ropz |
|           15 |     3103 | 2024-02-14 | Falcons       | W   | 0.420      | -            | -                | -                | -         |     0.70 | broky, frozen, karrigan, rain, ropz |
|           14 |     3118 | 2024-02-14 | 9 Pandas      | W   | 0.418      | -            | -                | -                | -         |     0.13 | broky, frozen, karrigan, rain, ropz |
|           13 |     3155 | 2024-02-11 | Spirit        | L   | 0.400      | -            | -                | -                | -         |    -7.83 | broky, frozen, karrigan, rain, ropz |
|           12 |     3167 | 2024-02-10 | MOUZ          | W   | 0.393      | 1.000        | 1.000 (0.393)    | -                | -         |     6.33 | broky, frozen, karrigan, rain, ropz |
|           11 |     3181 | 2024-02-09 | G2            | W   | 0.386      | 1.000        | 0.746 (0.288)    | -                | -         |     4.92 | broky, frozen, karrigan, rain, ropz |
|           10 |     3212 | 2024-02-06 | Spirit        | L   | 0.366      | -            | -                | -                | -         |    -7.24 | broky, frozen, karrigan, rain, ropz |
|            9 |     3231 | 2024-02-04 | Eternal Fire  | W   | 0.354      | 1.000        | 1.000 (0.354)    | -                | -         |     3.52 | broky, frozen, karrigan, rain, ropz |
|            8 |     3271 | 2024-02-03 | Rebels        | W   | 0.346      | -            | -                | -                | -         |     0.08 | broky, frozen, karrigan, rain, ropz |
|            7 |     3402 | 2024-01-27 | Liquid        | W   | 0.300      | -            | -                | -                | -         |     1.50 | broky, frozen, karrigan, rain, ropz |
|            6 |     3416 | 2024-01-26 | GamerLegion   | W   | 0.293      | -            | -                | -                | -         |     0.07 | broky, frozen, karrigan, rain, ropz |
|            5 |     3441 | 2024-01-25 | Spirit        | W   | 0.285      | -            | -                | -                | -         |     3.28 | broky, frozen, karrigan, rain, ropz |
|            4 |     3462 | 2024-01-24 | GamerLegion   | L   | 0.278      | -            | -                | -                | -         |    -8.71 | broky, frozen, karrigan, rain, ropz |
|            3 |     4131 | 2023-12-17 | Vitality      | L   | 0.026      | -            | -                | -                | -         |    -0.45 | broky, frozen, karrigan, rain, ropz |
|            2 |     4169 | 2023-12-16 | MOUZ          | W   | 0.018      | -            | -                | -                | -         |     0.30 | broky, frozen, karrigan, rain, ropz |
|            1 |     4196 | 2023-12-14 | G2            | W   | 0.006      | -            | -                | -                | -         |     0.08 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($332,678.24)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.818 | $100,000.00    | $81,806.20      |
| 2024-03-31 |      0.727 | $170,000.00    | $123,584.53     |
| 2024-02-11 |      0.400 | $180,000.00    | $71,977.50      |
| 2024-01-28 |      0.307 | $22,500.00     | $6,899.54       |
| 2023-12-17 |      0.026 | $250,000.00    | $6,410.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
