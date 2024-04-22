### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1253.3<br />
<br />
Final Rank Value (1253.3) = Starting Rank Value (1225.8) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.512[<sup>1</sup>](#table2)
- Bounty Collected: 0.512[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.531[<sup>2</sup>](#table1)

The average of these factors is 0.428<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1225.8
- 400 + ( ( 0.428 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1225.8


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
|           39 |       68 | 2024-04-19 | M80              | L   | 1.000      | -            | -                | -                | -         |   -26.57 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |      118 | 2024-04-18 | M80              | W   | 1.000      | 0.143        | 0.087 (0.012)    | 0.454 (0.065)    | 0 (0.000) |     3.99 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |      122 | 2024-04-18 | Legacy           | W   | 1.000      | 0.143        | 0.055 (0.008)    | 0.501 (0.072)    | 0 (0.000) |     9.49 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |      170 | 2024-04-17 | G3               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.81 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |      173 | 2024-04-17 | straykids        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |      285 | 2024-04-12 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -0.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |      368 | 2024-04-10 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -1.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |      448 | 2024-04-08 | G2               | W   | 1.000      | 0.624        | 0.773 (0.482)    | 0.542 (0.338)    | 1 (1.000) |    30.33 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |      459 | 2024-04-07 | HEROIC           | W   | 1.000      | 0.624        | 0.281 (0.175)    | 0.731 (0.456)    | 1 (1.000) |    27.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     1131 | 2024-03-07 | SAW              | L   | 0.893      | -            | -                | -                | -         |   -12.58 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     1213 | 2024-03-04 | Complexity       | L   | 0.874      | -            | -                | -                | -         |    -8.99 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     1250 | 2024-03-03 | BOSS             | W   | 0.866      | 0.143        | 0.034 (0.004)    | 0.530 (0.066)    | 1 (0.866) |     3.27 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     1263 | 2024-03-02 | FURIA            | L   | 0.859      | -            | -                | -                | -         |    -8.09 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     1277 | 2024-03-01 | BESTIA           | W   | 0.854      | 0.143        | 0.029 (0.004)    | -                | 1 (0.854) |     3.43 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     1348 | 2024-02-26 | Nouns            | W   | 0.829      | 0.143        | -                | 0.632 (0.075)    | -         |     1.80 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     1350 | 2024-02-26 | BOSS             | W   | 0.828      | 0.143        | 0.034 (0.004)    | 0.530 (0.063)    | -         |     2.82 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     1361 | 2024-02-25 | Wildcard         | W   | 0.823      | -            | -                | -                | -         |     3.44 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     1367 | 2024-02-25 | Nouns            | L   | 0.821      | -            | -                | -                | -         |   -24.42 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     1427 | 2024-02-22 | Party Astronauts | W   | 0.802      | 0.143        | -                | 0.554 (0.063)    | -         |     2.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     1431 | 2024-02-22 | MIGHT            | W   | 0.801      | -            | -                | -                | -         |     1.30 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     1435 | 2024-02-22 | ex-CatEvil       | W   | 0.801      | -            | -                | -                | -         |     0.21 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     1941 | 2024-01-28 | G2               | L   | 0.633      | -            | -                | -                | -         |    -0.59 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     1955 | 2024-01-27 | FaZe             | L   | 0.626      | -            | -                | -                | -         |    -0.30 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     1997 | 2024-01-25 | GamerLegion      | W   | 0.611      | 0.581        | 0.185 (0.066)    | 0.368 (0.131)    | 1 (0.611) |    12.46 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     2009 | 2024-01-24 | Spirit           | W   | 0.606      | 0.581        | 1.000 (0.352)    | 0.661 (0.233)    | 1 (0.606) |    18.62 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     2103 | 2024-01-20 | M80              | L   | 0.583      | -            | -                | -                | -         |   -14.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     2152 | 2024-01-19 | Wildcard         | W   | 0.576      | -            | -                | -                | -         |     2.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     2162 | 2024-01-19 | BOSS             | W   | 0.575      | -            | -                | -                | -         |     2.32 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     2313 | 2024-01-16 | Elevate          | W   | 0.555      | 0.143        | 0.038 (0.003)    | -                | -         |     2.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     2317 | 2024-01-16 | huge sweaty      | W   | 0.555      | -            | -                | -                | -         |     0.30 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     2320 | 2024-01-16 | Wildcard         | W   | 0.555      | -            | -                | -                | -         |     2.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     2362 | 2024-01-15 | LOS              | W   | 0.549      | -            | -                | -                | -         |     0.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     2399 | 2024-01-14 | Party Astronauts | W   | 0.542      | -            | -                | -                | -         |     1.67 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     2420 | 2024-01-13 | Elevate          | W   | 0.535      | -            | -                | -                | -         |     2.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     2462 | 2024-01-12 | M80              | L   | 0.529      | -            | -                | -                | -         |   -13.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     2468 | 2024-01-12 | Nouns            | W   | 0.529      | -            | -                | -                | -         |     0.75 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     2549 | 2024-01-09 | NRG              | W   | 0.510      | -            | -                | -                | -         |     1.43 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     2551 | 2024-01-09 | vagrants         | W   | 0.509      | -            | -                | -                | -         |     0.16 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     2554 | 2024-01-09 | LOS              | W   | 0.509      | -            | -                | -                | -         |     0.16 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,218.25)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2024-01-28 |      0.633 | $10,500.00     | $6,648.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
