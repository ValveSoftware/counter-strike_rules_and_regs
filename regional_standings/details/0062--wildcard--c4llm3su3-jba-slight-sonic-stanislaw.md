### Roster Details<br />
Team Name: Wildcard<br />
Roster: C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  898.2<br />
<br />
Final Rank Value (898.2) = Starting Rank Value (849.4) + Head To Head Adjustments (48.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 849.4
- 400 + ( ( 0.233 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 849.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      172 | 2024-04-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -16.47 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           43 |      425 | 2024-04-08 | Cloud9           | L   | 1.000      | -            | -                | -                | -         |    -0.54 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           42 |      454 | 2024-04-08 | Virtus.pro       | L   | 1.000      | -            | -                | -                | -         |    -0.51 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           41 |      694 | 2024-03-27 | Mythic           | W   | 1.000      | 0.477        | 0.003 (0.002)    | 0.413 (0.197)    | 0 (0.000) |    10.13 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           40 |      697 | 2024-03-27 | Mythic           | W   | 1.000      | 0.477        | -                | 0.413 (0.197)    | 0 (0.000) |    10.96 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           39 |      733 | 2024-03-26 | LAG              | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.560 (0.267)    | 0 (0.000) |    17.13 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           38 |      737 | 2024-03-26 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -14.25 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           37 |      933 | 2024-03-14 | Take Flyte       | W   | 0.942      | 0.477        | 0.005 (0.002)    | 0.318 (0.143)    | 0 (0.000) |     8.22 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           36 |      935 | 2024-03-14 | Take Flyte       | W   | 0.941      | 0.477        | 0.005 (0.002)    | 0.318 (0.143)    | 0 (0.000) |     8.79 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           35 |      959 | 2024-03-13 | M80              | W   | 0.936      | 0.477        | 0.087 (0.039)    | 0.454 (0.202)    | 0 (0.000) |    20.20 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           34 |      961 | 2024-03-13 | M80              | L   | 0.935      | -            | -                | -                | -         |    -8.95 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           33 |     1007 | 2024-03-12 | Mythic           | L   | 0.928      | -            | -                | -                | -         |   -19.87 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           32 |     1240 | 2024-03-03 | M80              | L   | 0.866      | -            | -                | -                | -         |    -9.22 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           31 |     1260 | 2024-03-02 | BESTIA           | W   | 0.860      | 0.143        | 0.029 (0.004)    | -                | 1 (0.860) |    13.43 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           30 |     1281 | 2024-03-01 | RED Canids       | L   | 0.854      | -            | -                | -                | -         |    -8.87 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           29 |     1361 | 2024-02-25 | Liquid           | L   | 0.823      | -            | -                | -                | -         |    -3.44 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           28 |     1366 | 2024-02-25 | BOSS             | L   | 0.822      | -            | -                | -                | -         |   -14.35 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           27 |     1384 | 2024-02-24 | NRG              | W   | 0.815      | 0.143        | -                | 0.633 (0.074)    | 0 (0.000) |    10.51 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           26 |     1385 | 2024-02-24 | Party Astronauts | W   | 0.815      | 0.143        | 0.020 (0.002)    | 0.554 (0.064)    | 0 (0.000) |    10.69 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           25 |     1396 | 2024-02-24 | G3               | W   | 0.814      | -            | -                | -                | 0 (0.000) |     8.24 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           24 |     1433 | 2024-02-22 | NRG              | L   | 0.801      | -            | -                | -                | -         |   -14.78 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           23 |     1782 | 2024-02-04 | Elevate          | L   | 0.682      | -            | -                | -                | -         |   -10.54 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           22 |     1806 | 2024-02-03 | Nouns            | W   | 0.676      | 0.143        | -                | 0.632 (0.061)    | -         |     5.98 | Infinite, JBa, motm, SLIGHT, stanislaw   |
|           21 |     1839 | 2024-02-02 | NRG              | W   | 0.668      | 0.143        | -                | 0.633 (0.060)    | -         |     8.26 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           20 |     1844 | 2024-02-02 | Carpe Diem       | W   | 0.667      | -            | -                | -                | -         |     6.13 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           19 |     2108 | 2024-01-20 | M80              | L   | 0.582      | -            | -                | -                | -         |    -6.60 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           18 |     2152 | 2024-01-19 | Liquid           | L   | 0.576      | -            | -                | -                | -         |    -2.38 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           17 |     2157 | 2024-01-19 | M80              | W   | 0.575      | 0.143        | 0.087 (0.007)    | -                | -         |    11.68 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           16 |     2214 | 2024-01-18 | Nouns            | W   | 0.569      | -            | -                | -                | -         |     5.24 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           15 |     2217 | 2024-01-18 | NRG              | W   | 0.568      | -            | -                | -                | -         |     7.51 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           14 |     2219 | 2024-01-18 | MIGHT            | W   | 0.568      | -            | -                | -                | -         |     5.77 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     2266 | 2024-01-17 | Mythic           | W   | 0.562      | -            | -                | -                | -         |     6.55 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     2320 | 2024-01-16 | Liquid           | L   | 0.555      | -            | -                | -                | -         |    -2.01 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     2371 | 2024-01-15 | ex-CatEvil       | W   | 0.548      | -            | -                | -                | -         |     1.23 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     2414 | 2024-01-13 | M80              | W   | 0.536      | 0.143        | 0.087 (0.007)    | -                | -         |    11.83 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     2461 | 2024-01-12 | BOSS             | W   | 0.530      | 0.143        | 0.034 (0.003)    | -                | -         |     9.36 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     2464 | 2024-01-12 | vagrants         | W   | 0.529      | -            | -                | -                | -         |     1.41 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     2706 | 2023-12-16 | FPL Friends      | L   | 0.348      | -            | -                | -                | -         |    -7.91 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     2774 | 2023-12-11 | NRG              | L   | 0.315      | -            | -                | -                | -         |    -5.69 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     2961 | 2023-12-02 | M80              | L   | 0.255      | -            | -                | -                | -         |    -2.66 | CLASIA, Infinite, JBa, SLIGHT, stanislaw |
|            4 |     3286 | 2023-11-15 | M80              | L   | 0.142      | -            | -                | -                | -         |    -1.54 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     3291 | 2023-11-15 | NRG              | L   | 0.141      | -            | -                | -                | -         |    -2.62 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     3320 | 2023-11-14 | Limitless        | W   | 0.135      | -            | -                | -                | -         |     1.17 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     3322 | 2023-11-14 | Carpe Diem       | W   | 0.134      | -            | -                | -                | -         |     1.60 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,000.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
