### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1408.8<br />
<br />
Final Rank Value (1408.8) = Starting Rank Value (1376.1) + Head To Head Adjustments (32.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.560[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.734[<sup>2</sup>](#table1)

The average of these factors is 0.512<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1376.1
- 400 + ( ( 0.512 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1376.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       36 | 2024-05-04 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -2.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           41 |       96 | 2024-05-01 | Monte            | W   | 1.000      | 0.889        | 0.188 (0.167)    | 0.589 (0.524)    | 1 (1.000) |    10.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           40 |      121 | 2024-04-30 | FURIA            | W   | 1.000      | 0.889        | 0.371 (0.330)    | 0.484 (0.430)    | 1 (1.000) |    16.53 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           39 |      364 | 2024-04-19 | M80              | L   | 1.000      | -            | -                | -                | -         |   -25.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |      414 | 2024-04-18 | M80              | W   | 1.000      | 0.143        | 0.149 (0.021)    | 0.505 (0.072)    | 0 (0.000) |     5.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |      418 | 2024-04-18 | Legacy           | W   | 1.000      | 0.143        | 0.055 (0.008)    | 0.408 (0.058)    | 0 (0.000) |     5.45 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |      466 | 2024-04-17 | G3               | W   | 1.000      | -            | -                | -                | -         |     0.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |      469 | 2024-04-17 | straykids        | W   | 1.000      | -            | -                | -                | -         |     0.12 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |      581 | 2024-04-12 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -1.64 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |      664 | 2024-04-10 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -2.30 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |      744 | 2024-04-08 | G2               | W   | 1.000      | 0.624        | 0.841 (0.525)    | 0.607 (0.379)    | 1 (1.000) |    29.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |      755 | 2024-04-07 | HEROIC           | W   | 1.000      | 0.624        | 0.347 (0.217)    | 0.712 (0.444)    | 1 (1.000) |    25.42 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     1427 | 2024-03-07 | SAW              | L   | 0.799      | -            | -                | -                | -         |   -10.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     1509 | 2024-03-04 | Complexity       | L   | 0.781      | -            | -                | -                | -         |    -6.76 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     1546 | 2024-03-03 | BOSS             | W   | 0.773      | 0.143        | 0.049 (0.005)    | -                | 1 (0.773) |     1.64 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     1559 | 2024-03-02 | FURIA            | L   | 0.766      | -            | -                | -                | -         |    -8.31 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     1573 | 2024-03-01 | BESTIA           | W   | 0.761      | -            | -                | -                | 1 (0.761) |     1.31 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     1644 | 2024-02-26 | Nouns            | W   | 0.736      | 0.143        | -                | 0.609 (0.064)    | -         |     0.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     1646 | 2024-02-26 | BOSS             | W   | 0.734      | 0.143        | 0.049 (0.005)    | -                | -         |     1.35 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     1657 | 2024-02-25 | Wildcard         | W   | 0.729      | -            | -                | -                | -         |     1.69 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     1663 | 2024-02-25 | Nouns            | L   | 0.728      | -            | -                | -                | -         |   -22.37 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     1723 | 2024-02-22 | Party Astronauts | W   | 0.709      | 0.143        | -                | 0.570 (0.058)    | -         |     1.17 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     1727 | 2024-02-22 | MIGHT            | W   | 0.708      | -            | -                | -                | -         |     0.48 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     1731 | 2024-02-22 | ex-CatEvil       | W   | 0.708      | -            | -                | -                | -         |     0.09 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     2237 | 2024-01-28 | G2               | L   | 0.540      | -            | -                | -                | -         |    -1.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     2251 | 2024-01-27 | FaZe             | L   | 0.533      | -            | -                | -                | -         |    -0.57 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     2293 | 2024-01-25 | GamerLegion      | W   | 0.518      | 0.581        | 0.187 (0.056)    | 0.481 (0.145)    | 1 (0.518) |    10.46 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     2305 | 2024-01-24 | Spirit           | W   | 0.513      | 0.581        | 1.000 (0.298)    | 0.542 (0.161)    | 1 (0.513) |    14.81 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     2399 | 2024-01-20 | M80              | L   | 0.490      | -            | -                | -                | -         |   -10.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     2448 | 2024-01-19 | Wildcard         | W   | 0.482      | -            | -                | -                | -         |     1.09 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     2458 | 2024-01-19 | BOSS             | W   | 0.481      | -            | -                | -                | -         |     0.99 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     2609 | 2024-01-16 | Elevate          | W   | 0.462      | -            | -                | -                | -         |     0.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     2613 | 2024-01-16 | huge sweaty      | W   | 0.462      | -            | -                | -                | -         |     0.11 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     2616 | 2024-01-16 | Wildcard         | W   | 0.461      | -            | -                | -                | -         |     0.90 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     2658 | 2024-01-15 | LOS              | W   | 0.455      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     2695 | 2024-01-14 | Party Astronauts | W   | 0.448      | -            | -                | -                | -         |     0.85 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     2716 | 2024-01-13 | Elevate          | W   | 0.441      | -            | -                | -                | -         |     0.72 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     2758 | 2024-01-12 | M80              | L   | 0.436      | -            | -                | -                | -         |    -8.95 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     2764 | 2024-01-12 | Nouns            | W   | 0.435      | -            | -                | -                | -         |     0.27 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     2845 | 2024-01-09 | NRG              | W   | 0.416      | -            | -                | -                | -         |     0.49 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     2847 | 2024-01-09 | vagrants         | W   | 0.416      | -            | -                | -                | -         |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     2850 | 2024-01-09 | LOS              | W   | 0.416      | -            | -                | -                | -         |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,772.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2024-01-28 |      0.540 | $10,500.00     | $5,669.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
