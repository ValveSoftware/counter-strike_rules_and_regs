### Roster Details<br />
Team Name: PGE Turow<br />
Roster: azizz, darko, kadziu, Markoś, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  679.7<br />
<br />
Final Rank Value (679.7) = Starting Rank Value (718.1) + Head To Head Adjustments (-38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.1
- 400 + ( ( 0.165 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 718.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      244 | 2024-04-15 | Secret          | L   | 1.000      | -            | -                | -                | -         |   -18.45 | azizz, darko, kadziu, Markoś, Sobol       |
|           28 |      318 | 2024-04-11 | Sampi           | L   | 1.000      | -            | -                | -                | -         |    -6.38 | azizz, darko, kadziu, Markoś, Sobol       |
|           27 |      505 | 2024-04-05 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -1.06 | azizz, darko, EXUS, kadziu, Markoś        |
|           26 |      552 | 2024-04-04 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -4.86 | darko, EXUS, kadziu, Markoś, Sobol        |
|           25 |      588 | 2024-04-03 | Illuminar       | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.139 (0.046)    | 0 (0.000) |     7.62 | darko, EXUS, kadziu, Markoś, Sobol        |
|           24 |     1357 | 2024-02-26 | ECLOT           | L   | 0.824      | -            | -                | -                | -         |    -3.79 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|           23 |     1376 | 2024-02-25 | Sashi           | W   | 0.818      | 0.333        | 0.064 (0.018)    | 1.000 (0.273)    | 0 (0.000) |    20.28 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|           22 |     1443 | 2024-02-22 | Permitta        | L   | 0.798      | -            | -                | -                | -         |    -6.79 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|           21 |     2348 | 2024-01-16 | 00NATION        | L   | 0.553      | -            | -                | -                | -         |    -9.80 | byali, darko, discoStar, kadziu, Markoś   |
|           20 |     2481 | 2024-01-12 | Betera          | L   | 0.527      | -            | -                | -                | -         |    -7.41 | byali, darko, discoStar, kadziu, Markoś   |
|           19 |     2607 | 2024-01-09 | fnatic          | L   | 0.506      | -            | -                | -                | -         |    -1.93 | darko, discoStar, gRuChA, kadziu, Markoś  |
|           18 |     2643 | 2023-12-20 | Sashi           | L   | 0.372      | -            | -                | -                | -         |    -5.98 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           17 |     2687 | 2023-12-17 | Sashi           | L   | 0.352      | -            | -                | -                | -         |    -2.95 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           16 |     2962 | 2023-12-02 | Enterprise      | L   | 0.255      | -            | -                | -                | -         |    -2.11 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           15 |     3200 | 2023-11-18 | brazylijski luz | W   | 0.159      | 0.343        | 0.019 (0.001)    | 0.356 (0.019)    | 0 (0.000) |     3.06 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           14 |     3309 | 2023-11-15 | ex-Anonymo      | W   | 0.139      | 0.343        | 0.027 (0.001)    | 0.276 (0.013)    | 0 (0.000) |     2.47 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           13 |     3441 | 2023-11-09 | 500             | W   | 0.098      | 0.435        | 0.000 (0.000)    | 0.622 (0.027)    | 0 (0.000) |     1.21 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           12 |     3491 | 2023-11-07 | ex-Anonymo      | L   | 0.085      | -            | -                | -                | -         |    -1.16 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           11 |     3507 | 2023-11-06 | MOUZ NXT        | L   | 0.077      | -            | -                | -                | -         |    -0.61 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           10 |     3543 | 2023-11-04 | brazylijski luz | L   | 0.066      | -            | -                | -                | -         |    -0.81 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            9 |     3563 | 2023-11-03 | FORZE           | L   | 0.058      | -            | -                | -                | -         |    -0.82 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            8 |     3582 | 2023-11-02 | brazylijski luz | W   | 0.052      | 0.143        | 0.019 (0.000)    | 0.356 (0.003)    | 0 (0.000) |     1.00 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            7 |     3614 | 2023-11-01 | ALTERNATE aTTaX | W   | 0.045      | 0.435        | 0.026 (0.001)    | 0.327 (0.006)    | 0 (0.000) |     0.86 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            6 |     3664 | 2023-10-30 | Enterprise      | L   | 0.033      | -            | -                | -                | -         |    -0.27 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            5 |     3705 | 2023-10-29 | Project G       | W   | 0.026      | 0.143        | -                | 0.017 (0.000)    | 0 (0.000) |     0.21 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            4 |     3716 | 2023-10-29 | JANO            | W   | 0.025      | 0.143        | 0.001 (0.000)    | 0.220 (0.001)    | 0 (0.000) |     0.32 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            3 |     3762 | 2023-10-28 | Sprout          | L   | 0.018      | -            | -                | -                | -         |    -0.45 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            2 |     3796 | 2023-10-27 | JANO            | W   | 0.011      | 0.143        | 0.001 (0.000)    | 0.220 (0.000)    | 0 (0.000) |     0.14 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            1 |     3832 | 2023-10-26 | Verdant         | W   | 0.004      | 0.143        | 0.021 (0.000)    | -                | -         |     0.07 | b1elany, darko, gRuChA, kadziu, Markoś    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,578.47)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      1.000 | $500.00        | $500.00         |
| 2024-02-28 |      0.838 | $500.00        | $418.93         |
| 2023-12-02 |      0.255 | $6,027.00      | $1,535.34       |
| 2023-11-05 |      0.073 | $1,697.00      | $124.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
