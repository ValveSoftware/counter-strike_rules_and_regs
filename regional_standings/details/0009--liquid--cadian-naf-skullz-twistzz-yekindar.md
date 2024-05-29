### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1627.4<br />
<br />
Final Rank Value (1627.4) = Starting Rank Value (1682.6) + Head To Head Adjustments (-55.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.765[<sup>1</sup>](#table2)
- Bounty Collected: 0.586[<sup>2</sup>](#table1)
- Opponent Network: 0.390[<sup>2</sup>](#table1)
- LAN Wins: 0.902[<sup>2</sup>](#table1)

The average of these factors is 0.661<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1682.6
- 400 + ( ( 0.661 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1682.6


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
|           52 |       22 | 2024-05-28 | Falcons          | W   | 1.000      | 0.624        | 0.355 (0.222)    | -                | 1 (1.000) |     8.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           51 |       40 | 2024-05-27 | 9z               | L   | 1.000      | -            | -                | -                | -         |   -28.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           50 |       53 | 2024-05-27 | Complexity       | W   | 1.000      | 0.624        | 0.260 (0.163)    | 0.329 (0.206)    | 1 (1.000) |    13.75 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           49 |      122 | 2024-05-23 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -10.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           48 |      168 | 2024-05-22 | Astralis         | W   | 1.000      | 0.769        | 0.395 (0.303)    | 0.495 (0.380)    | -         |    20.82 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           47 |      215 | 2024-05-21 | ENCE             | W   | 1.000      | 0.769        | 0.199 (0.153)    | 0.422 (0.324)    | -         |     3.92 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           46 |      271 | 2024-05-19 | AMKAL            | W   | 1.000      | 0.769        | -                | 0.736 (0.566)    | -         |     3.70 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           45 |      285 | 2024-05-18 | OG               | W   | 1.000      | 0.769        | 0.278 (0.213)    | 0.376 (0.289)    | -         |     3.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           44 |      576 | 2024-05-10 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -9.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           43 |      619 | 2024-05-08 | FlyQuest         | W   | 1.000      | 0.889        | -                | 0.648 (0.576)    | 1 (1.000) |     7.69 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           42 |      687 | 2024-05-04 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -4.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           41 |      747 | 2024-05-01 | Monte            | W   | 1.000      | 0.889        | 0.181 (0.161)    | 0.611 (0.543)    | 1 (1.000) |     3.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           40 |      772 | 2024-04-30 | FURIA            | W   | 1.000      | 0.889        | 0.138 (0.123)    | 0.402 (0.358)    | 1 (1.000) |     5.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           39 |     1015 | 2024-04-19 | M80              | L   | 0.935      | -            | -                | -                | -         |   -27.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |     1065 | 2024-04-18 | M80              | W   | 0.928      | -            | -                | -                | -         |     1.87 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |     1069 | 2024-04-18 | Legacy           | W   | 0.927      | -            | -                | -                | -         |     1.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |     1117 | 2024-04-17 | G3               | W   | 0.920      | -            | -                | -                | -         |     0.19 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |     1120 | 2024-04-17 | straykids        | W   | 0.920      | -            | -                | -                | -         |     0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1232 | 2024-04-12 | FaZe             | L   | 0.884      | -            | -                | -                | -         |    -4.27 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     1315 | 2024-04-10 | MOUZ             | L   | 0.870      | -            | -                | -                | -         |    -3.90 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     1395 | 2024-04-08 | G2               | W   | 0.857      | 0.624        | 0.469 (0.251)    | 0.565 (0.302)    | 1 (0.857) |    19.11 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     1406 | 2024-04-07 | HEROIC           | W   | 0.855      | 0.624        | 0.322 (0.172)    | 0.662 (0.354)    | 1 (0.855) |    15.37 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     2078 | 2024-03-07 | SAW              | L   | 0.645      | -            | -                | -                | -         |   -16.61 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     2160 | 2024-03-04 | Complexity       | L   | 0.627      | -            | -                | -                | -         |   -12.73 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     2197 | 2024-03-03 | BOSS             | W   | 0.619      | -            | -                | -                | 1 (0.619) |     0.24 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     2210 | 2024-03-02 | FURIA            | L   | 0.612      | -            | -                | -                | -         |   -16.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2224 | 2024-03-01 | BESTIA           | W   | 0.607      | -            | -                | -                | 1 (0.607) |     0.45 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2295 | 2024-02-26 | Nouns            | W   | 0.582      | -            | -                | -                | -         |     0.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2297 | 2024-02-26 | BOSS             | W   | 0.580      | -            | -                | -                | -         |     0.19 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     2308 | 2024-02-25 | Wildcard         | W   | 0.575      | -            | -                | -                | -         |     0.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     2314 | 2024-02-25 | Nouns            | L   | 0.574      | -            | -                | -                | -         |   -17.84 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     2374 | 2024-02-22 | Party Astronauts | W   | 0.555      | -            | -                | -                | -         |     0.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     2378 | 2024-02-22 | MIGHT            | W   | 0.554      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     2382 | 2024-02-22 | ex-CatEvil       | W   | 0.554      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     2888 | 2024-01-28 | G2               | L   | 0.386      | -            | -                | -                | -         |    -4.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     2902 | 2024-01-27 | FaZe             | L   | 0.379      | -            | -                | -                | -         |    -1.72 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     2944 | 2024-01-25 | GamerLegion      | W   | 0.364      | -            | -                | -                | 1 (0.364) |     0.57 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     2956 | 2024-01-24 | Spirit           | W   | 0.358      | 0.581        | 1.000 (0.208)    | -                | -         |     8.93 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3050 | 2024-01-20 | M80              | L   | 0.335      | -            | -                | -                | -         |    -9.60 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3099 | 2024-01-19 | Wildcard         | W   | 0.328      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3109 | 2024-01-19 | BOSS             | W   | 0.327      | -            | -                | -                | -         |     0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3260 | 2024-01-16 | Elevate          | W   | 0.308      | -            | -                | -                | -         |     0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3264 | 2024-01-16 | huge sweaty      | W   | 0.308      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3267 | 2024-01-16 | Wildcard         | W   | 0.307      | -            | -                | -                | -         |     0.12 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     3309 | 2024-01-15 | LOS              | W   | 0.301      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     3346 | 2024-01-14 | Party Astronauts | W   | 0.294      | -            | -                | -                | -         |     0.12 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     3367 | 2024-01-13 | Elevate          | W   | 0.287      | -            | -                | -                | -         |     0.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     3409 | 2024-01-12 | M80              | L   | 0.282      | -            | -                | -                | -         |    -8.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     3415 | 2024-01-12 | Nouns            | W   | 0.281      | -            | -                | -                | -         |     0.11 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     3496 | 2024-01-09 | NRG              | W   | 0.262      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     3498 | 2024-01-09 | vagrants         | W   | 0.262      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     3501 | 2024-01-09 | LOS              | W   | 0.262      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($148,355.91)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-23 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.897 | $10,000.00     | $8,972.34       |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2024-01-28 |      0.386 | $10,500.00     | $4,051.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
