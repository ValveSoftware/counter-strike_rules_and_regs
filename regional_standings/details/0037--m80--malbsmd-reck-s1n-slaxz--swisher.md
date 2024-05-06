### Roster Details<br />
Team Name: M80<br />
Roster: malbsMd, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1186.7<br />
<br />
Final Rank Value (1186.7) = Starting Rank Value (1265.1) + Head To Head Adjustments (-78.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.547[<sup>1</sup>](#table2)
- Bounty Collected: 0.494[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.570[<sup>2</sup>](#table1)

The average of these factors is 0.454<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1265.1
- 400 + ( ( 0.454 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1265.1


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
|           57 |      164 | 2024-04-28 | G2               | L   | 1.000      | -            | -                | -                | -         |    -1.20 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           56 |      189 | 2024-04-27 | TYLOO            | W   | 1.000      | 0.889        | 0.093 (0.083)    | 0.436 (0.387)    | 1 (1.000) |     6.47 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           55 |      209 | 2024-04-26 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -8.49 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           54 |      219 | 2024-04-26 | G2               | W   | 1.000      | 0.889        | 0.841 (0.748)    | 0.607 (0.539)    | 1 (1.000) |    30.46 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           53 |      244 | 2024-04-25 | Sharks           | W   | 1.000      | 0.889        | 0.060 (0.053)    | 0.453 (0.402)    | 1 (1.000) |     6.28 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           52 |      278 | 2024-04-23 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -8.23 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           51 |      364 | 2024-04-19 | Liquid           | W   | 1.000      | 0.143        | 0.122 (0.017)    | 0.726 (0.104)    | 0 (0.000) |    25.25 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           50 |      371 | 2024-04-19 | Legacy           | W   | 1.000      | 0.143        | 0.055 (0.008)    | 0.408 (0.058)    | 0 (0.000) |    15.34 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           49 |      414 | 2024-04-18 | Liquid           | L   | 1.000      | -            | -                | -                | -         |    -5.34 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           48 |      419 | 2024-04-18 | Elevate          | W   | 1.000      | 0.143        | 0.036 (0.005)    | -                | 0 (0.000) |     7.29 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           47 |      989 | 2024-03-27 | Take Flyte       | W   | 0.935      | 0.477        | -                | 0.282 (0.126)    | 0 (0.000) |     2.61 | malbsMd, reck, s1n, stamina, Swisher   |
|           46 |      994 | 2024-03-27 | Take Flyte       | W   | 0.935      | 0.477        | -                | 0.282 (0.126)    | -         |     2.68 | malbsMd, reck, s1n, stamina, Swisher   |
|           45 |     1132 | 2024-03-19 | Mythic           | L   | 0.882      | -            | -                | -                | -         |   -23.94 | dephh, malbsMd, reck, stamina, Swisher |
|           44 |     1135 | 2024-03-19 | Mythic           | L   | 0.882      | -            | -                | -                | -         |   -24.76 | dephh, malbsMd, reck, stamina, Swisher |
|           43 |     1223 | 2024-03-14 | Nouns            | L   | 0.849      | -            | -                | -                | -         |   -24.07 | dephh, malbsMd, reck, stamina, Swisher |
|           42 |     1226 | 2024-03-14 | Nouns            | L   | 0.849      | -            | -                | -                | -         |   -24.66 | dephh, malbsMd, reck, stamina, Swisher |
|           41 |     1255 | 2024-03-13 | Wildcard         | L   | 0.842      | -            | -                | -                | -         |   -22.86 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           40 |     1257 | 2024-03-13 | Wildcard         | W   | 0.842      | 0.477        | 0.025 (0.010)    | 0.490 (0.197)    | -         |     3.42 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           39 |     1510 | 2024-03-04 | Legacy           | L   | 0.780      | -            | -                | -                | -         |   -17.54 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           38 |     1536 | 2024-03-03 | Wildcard         | W   | 0.773      | -            | -                | -                | 1 (0.773) |     3.27 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           37 |     1561 | 2024-03-02 | Imperial         | L   | 0.766      | -            | -                | -                | -         |    -2.79 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           36 |     1580 | 2024-03-01 | ODDIK            | W   | 0.760      | 0.143        | -                | 0.547 (0.059)    | 1 (0.760) |     3.73 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           35 |     2142 | 2024-02-02 | Rebels           | L   | 0.573      | -            | -                | -                | -         |   -12.73 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           34 |     2178 | 2024-02-01 | Rooster          | W   | 0.566      | -            | -                | -                | 1 (0.566) |     1.41 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           33 |     2197 | 2024-01-31 | GamerLegion      | L   | 0.559      | -            | -                | -                | -         |    -4.00 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           32 |     2399 | 2024-01-20 | Liquid           | W   | 0.490      | 0.143        | 0.122 (0.009)    | -                | -         |    10.20 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           31 |     2404 | 2024-01-20 | Wildcard         | W   | 0.488      | -            | -                | -                | -         |     2.06 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           30 |     2447 | 2024-01-19 | BOSS             | W   | 0.482      | -            | -                | -                | -         |     1.88 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           29 |     2453 | 2024-01-19 | Wildcard         | L   | 0.482      | -            | -                | -                | -         |   -13.30 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           28 |     2692 | 2024-01-14 | Nouns            | W   | 0.449      | -            | -                | -                | -         |     0.56 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           27 |     2710 | 2024-01-13 | Wildcard         | L   | 0.443      | -            | -                | -                | -         |   -12.56 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           26 |     2758 | 2024-01-12 | Liquid           | W   | 0.436      | 0.143        | 0.122 (0.008)    | -                | -         |     8.95 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           25 |     2766 | 2024-01-12 | Rocket           | W   | 0.435      | -            | -                | -                | -         |     0.48 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           24 |     3012 | 2023-12-16 | BESTIA           | L   | 0.253      | -            | -                | -                | -         |    -7.66 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           23 |     3040 | 2023-12-15 | Virtus.pro       | L   | 0.246      | -            | -                | -                | -         |    -0.55 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           22 |     3051 | 2023-12-13 | Nouns            | W   | 0.235      | -            | -                | -                | -         |     0.33 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           21 |     3060 | 2023-12-12 | BOSS             | W   | 0.229      | -            | -                | -                | -         |     0.79 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           20 |     3069 | 2023-12-11 | Torqued          | W   | 0.222      | -            | -                | -                | -         |     0.05 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           19 |     3079 | 2023-12-10 | BOSS             | W   | 0.215      | 0.500        | 0.049 (0.005)    | 0.507 (0.055)    | -         |     0.74 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           18 |     3145 | 2023-12-07 | BOSS             | W   | 0.195      | -            | -                | -                | -         |     0.67 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           17 |     3171 | 2023-12-06 | Party Astronauts | W   | 0.189      | -            | -                | -                | -         |     0.59 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           16 |     3236 | 2023-12-03 | Take Flyte       | W   | 0.169      | -            | -                | -                | -         |     0.23 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           15 |     3238 | 2023-12-03 | NRG              | W   | 0.168      | -            | -                | -                | -         |     0.33 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           14 |     3257 | 2023-12-02 | Wildcard         | W   | 0.162      | -            | -                | -                | -         |     0.51 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           13 |     3415 | 2023-11-22 | Rocket           | W   | 0.095      | -            | -                | -                | -         |     0.10 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           12 |     3458 | 2023-11-19 | BOSS             | W   | 0.076      | -            | -                | -                | -         |     0.26 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           11 |     3512 | 2023-11-17 | NRG              | W   | 0.062      | -            | -                | -                | -         |     0.12 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           10 |     3543 | 2023-11-16 | NRG              | W   | 0.056      | -            | -                | -                | -         |     0.11 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            9 |     3545 | 2023-11-16 | Party Astronauts | W   | 0.054      | -            | -                | -                | -         |     0.17 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            8 |     3582 | 2023-11-15 | Wildcard         | W   | 0.049      | -            | -                | -                | -         |     0.16 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            7 |     3585 | 2023-11-15 | Party Astronauts | L   | 0.048      | -            | -                | -                | -         |    -1.36 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            6 |     3615 | 2023-11-14 | MIGHT            | W   | 0.042      | -            | -                | -                | -         |     0.05 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            5 |     3619 | 2023-11-14 | 5Fyctimz         | W   | 0.041      | -            | -                | -                | -         |     0.01 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            4 |     3687 | 2023-11-11 | FLUFFY AIMERS    | W   | 0.023      | -            | -                | -                | -         |     0.02 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            3 |     3689 | 2023-11-11 | Take Flyte       | W   | 0.022      | -            | -                | -                | -         |     0.03 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            2 |     3715 | 2023-11-10 | Elevate          | W   | 0.015      | -            | -                | -                | -         |     0.04 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            1 |     3742 | 2023-11-08 | Party Astronauts | W   | 0.002      | -            | -                | -                | -         |     0.00 | malbsMd, maNkz, reck, Swisher, WolfY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,095.13)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-02-02 |      0.574 | $4,500.00      | $2,583.37       |
| 2023-12-17 |      0.261 | $2,000.00      | $522.01         |
| 2023-12-13 |      0.235 | $4,000.00      | $941.41         |
| 2023-12-10 |      0.215 | $35,000.00     | $7,541.90       |
| 2023-12-03 |      0.169 | $3,000.00      | $506.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
