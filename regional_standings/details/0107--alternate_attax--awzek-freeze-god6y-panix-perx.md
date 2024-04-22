### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: awzek, FreeZe, God6y, PANIX, PerX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  785.8<br />
<br />
Final Rank Value (785.8) = Starting Rank Value (796.9) + Head To Head Adjustments (-11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.9
- 400 + ( ( 0.206 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 796.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |     1767 | 2024-02-06 | 500             | W   | 0.692      | 0.143        | -                | 0.622 (0.061)    | 0 (0.000) |     8.06 | awzek, FreeZe, God6y, PANIX, PerX   |
|           45 |     1793 | 2024-02-04 | brazylijski luz | W   | 0.680      | 0.358        | 0.019 (0.005)    | 0.356 (0.087)    | 0 (0.000) |    11.70 | awzek, FreeZe, God6y, PANIX, PerX   |
|           44 |     1804 | 2024-02-04 | Sangal          | L   | 0.678      | -            | -                | -                | -         |   -12.73 | awzek, FreeZe, PANIX, PerX, S3NSEY  |
|           43 |     1832 | 2024-02-03 | TSM             | L   | 0.672      | -            | -                | -                | -         |   -10.34 | awzek, FreeZe, God6y, PANIX, PerX   |
|           42 |     1893 | 2024-02-01 | Sangal          | L   | 0.658      | -            | -                | -                | -         |   -13.31 | awzek, FreeZe, God6y, PANIX, PerX   |
|           41 |     1931 | 2024-01-30 | ex-Sprout       | W   | 0.645      | -            | -                | -                | 0 (0.000) |     5.27 | awzek, FreeZe, God6y, PANIX, PerX   |
|           40 |     1980 | 2024-01-26 | Entropiq        | W   | 0.618      | 0.371        | -                | 0.403 (0.092)    | 0 (0.000) |     8.69 | awzek, FreeZe, God6y, PANIX, PerX   |
|           39 |     2007 | 2024-01-24 | Guild Eagles    | L   | 0.607      | -            | -                | -                | -         |    -3.64 | awzek, FreeZe, God6y, PANIX, PerX   |
|           38 |     2027 | 2024-01-23 | PERA            | L   | 0.600      | -            | -                | -                | -         |    -8.05 | awzek, FreeZe, God6y, PANIX, PerX   |
|           37 |     2031 | 2024-01-23 | Guild Eagles    | L   | 0.599      | -            | -                | -                | -         |    -3.99 | awzek, FreeZe, God6y, PANIX, PerX   |
|           36 |     2051 | 2024-01-22 | Viperio         | W   | 0.593      | -            | -                | -                | 0 (0.000) |     3.02 | awzek, FreeZe, God6y, PANIX, PerX   |
|           35 |     2055 | 2024-01-22 | Rebels          | L   | 0.593      | -            | -                | -                | -         |    -6.49 | awzek, FreeZe, God6y, PANIX, PerX   |
|           34 |     2058 | 2024-01-22 | Sampi           | W   | 0.593      | 0.143        | 0.084 (0.007)    | 0.698 (0.059)    | 0 (0.000) |    13.55 | awzek, FreeZe, God6y, PANIX, PerX   |
|           33 |     2413 | 2024-01-14 | Lilmix          | L   | 0.538      | -            | -                | -                | -         |   -13.62 | awzek, FreeZe, God6y, PANIX, PerX   |
|           32 |     2446 | 2024-01-13 | Astralis        | L   | 0.532      | -            | -                | -                | -         |    -0.60 | awzek, FreeZe, God6y, PANIX, PerX   |
|           31 |     2715 | 2023-12-16 | ALTERNATE aTTaX | W   | 0.346      | 0.333        | 0.019 (0.002)    | 0.639 (0.074)    | 1 (0.346) |     6.22 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           30 |     2767 | 2023-12-12 | Preasy          | L   | 0.320      | -            | -                | -                | -         |    -2.11 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           29 |     2793 | 2023-12-10 | GODSENT         | W   | 0.305      | 0.371        | 0.036 (0.004)    | -                | 0 (0.000) |     4.94 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           28 |     2815 | 2023-12-09 | lajtbitexe      | L   | 0.299      | -            | -                | -                | -         |    -6.43 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           27 |     2830 | 2023-12-08 | Zero Tenacity   | W   | 0.294      | 0.372        | 0.008 (0.001)    | 0.805 (0.088)    | 0 (0.000) |     4.53 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           26 |     2840 | 2023-12-08 | Sprout          | W   | 0.291      | 0.371        | 0.010 (0.001)    | -                | 0 (0.000) |     4.08 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           25 |     2852 | 2023-12-07 | TUSTE CHOPAKI   | W   | 0.287      | -            | -                | -                | -         |     0.90 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           24 |     2863 | 2023-12-07 | ex-Anonymo      | L   | 0.286      | -            | -                | -                | -         |    -4.88 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           23 |     2880 | 2023-12-06 | The Witchers    | W   | 0.280      | 0.372        | 0.038 (0.004)    | -                | -         |     3.94 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           22 |     2899 | 2023-12-06 | ex-sYnck        | W   | 0.278      | -            | -                | -                | -         |     3.91 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           21 |     2914 | 2023-12-05 | lajtbitexe      | L   | 0.274      | -            | -                | -                | -         |    -5.90 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           20 |     2936 | 2023-12-04 | Entropiq        | W   | 0.265      | 0.384        | -                | 0.403 (0.041)    | -         |     3.56 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           19 |     2938 | 2023-12-04 | Guild Eagles    | L   | 0.265      | -            | -                | -                | -         |    -1.86 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           18 |     2977 | 2023-12-02 | Space           | W   | 0.252      | 0.589        | 0.008 (0.001)    | -                | -         |     3.18 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           17 |     2988 | 2023-12-01 | Aurora          | L   | 0.247      | -            | -                | -                | -         |    -0.29 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           16 |     3023 | 2023-11-29 | Sprout          | L   | 0.232      | -            | -                | -                | -         |    -4.28 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           15 |     3035 | 2023-11-28 | Sangal          | W   | 0.225      | 0.371        | -                | 0.685 (0.057)    | -         |     2.46 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           14 |     3038 | 2023-11-27 | GHR             | W   | 0.220      | -            | -                | -                | -         |     1.33 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           13 |     3072 | 2023-11-25 | ALTERNATE aTTaX | L   | 0.206      | -            | -                | -                | -         |    -2.87 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           12 |     3126 | 2023-11-22 | 9 Pandas        | L   | 0.185      | -            | -                | -                | -         |    -0.91 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           11 |     3238 | 2023-11-17 | Into the Breach | L   | 0.151      | -            | -                | -                | -         |    -2.29 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|           10 |     3253 | 2023-11-16 | Guild Eagles    | W   | 0.147      | 0.589        | 0.046 (0.004)    | 0.727 (0.063)    | -         |     3.57 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|            9 |     3275 | 2023-11-16 | IKLA            | W   | 0.145      | -            | -                | -                | -         |     1.03 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|            8 |     3315 | 2023-11-15 | FORZE           | L   | 0.138      | -            | -                | -                | -         |    -2.40 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|            7 |     3330 | 2023-11-14 | Aurora          | W   | 0.132      | 0.589        | 0.763 (0.059)    | 1.000 (0.078)    | -         |     4.03 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|            6 |     3349 | 2023-11-13 | SINNERS         | L   | 0.126      | -            | -                | -                | -         |    -0.69 | awzek, FreeZe, PANIX, PerX, Spiidi  |
|            5 |     3614 | 2023-11-01 | PGE Turow       | L   | 0.045      | -            | -                | -                | -         |    -0.86 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|            4 |     3684 | 2023-10-30 | ENCE Academy    | L   | 0.031      | -            | -                | -                | -         |    -0.42 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|            3 |     3723 | 2023-10-29 | SINNERS         | L   | 0.025      | -            | -                | -                | -         |    -0.14 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|            2 |     3791 | 2023-10-27 | GenOne          | W   | 0.012      | -            | -                | -                | -         |     0.10 | awzek, FreeZe, PerX, slaxz-, Spiidi |
|            1 |     3830 | 2023-10-26 | ex-Anonymo      | L   | 0.004      | -            | -                | -                | -         |    -0.07 | awzek, FreeZe, PerX, slaxz-, Spiidi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,983.57)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.346 | $6,188.00      | $2,142.43       |
| 2023-12-13 |      0.326 | $1,250.00      | $407.84         |
| 2023-12-12 |      0.320 | $5,000.00      | $1,598.56       |
| 2023-11-19 |      0.167 | $5,000.00      | $834.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
