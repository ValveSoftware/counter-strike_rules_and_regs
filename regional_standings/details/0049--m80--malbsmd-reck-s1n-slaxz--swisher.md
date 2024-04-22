### Roster Details<br />
Team Name: M80<br />
Roster: malbsMd, reck, s1n, slaxz-, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  980.5<br />
<br />
Final Rank Value (980.5) = Starting Rank Value (963.4) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.292<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.4
- 400 + ( ( 0.292 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 963.4


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
|           53 |       68 | 2024-04-19 | Liquid           | W   | 1.000      | 0.143        | 0.111 (0.016)    | 0.728 (0.104)    | 0 (0.000) |    26.57 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           52 |       75 | 2024-04-19 | Legacy           | W   | 1.000      | 0.143        | 0.055 (0.008)    | 0.501 (0.072)    | 0 (0.000) |    22.73 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           51 |      118 | 2024-04-18 | Liquid           | L   | 1.000      | -            | -                | -                | -         |    -3.99 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           50 |      123 | 2024-04-18 | Elevate          | W   | 1.000      | 0.143        | 0.038 (0.005)    | -                | 0 (0.000) |    14.84 | malbsMd, reck, s1n, slaxz-, Swisher    |
|           49 |      693 | 2024-03-27 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.318 (0.152)    | 0 (0.000) |     7.22 | malbsMd, reck, s1n, stamina, Swisher   |
|           48 |      698 | 2024-03-27 | Take Flyte       | W   | 1.000      | 0.477        | -                | 0.318 (0.152)    | 0 (0.000) |     7.69 | malbsMd, reck, s1n, stamina, Swisher   |
|           47 |      836 | 2024-03-19 | Mythic           | L   | 0.976      | -            | -                | -                | -         |   -20.46 | dephh, malbsMd, reck, stamina, Swisher |
|           46 |      839 | 2024-03-19 | Mythic           | L   | 0.975      | -            | -                | -                | -         |   -22.02 | dephh, malbsMd, reck, stamina, Swisher |
|           45 |      927 | 2024-03-14 | Nouns            | L   | 0.942      | -            | -                | -                | -         |   -21.31 | dephh, malbsMd, reck, stamina, Swisher |
|           44 |      930 | 2024-03-14 | Nouns            | L   | 0.942      | -            | -                | -                | -         |   -22.71 | dephh, malbsMd, reck, stamina, Swisher |
|           43 |      959 | 2024-03-13 | Wildcard         | L   | 0.936      | -            | -                | -                | -         |   -20.20 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           42 |      961 | 2024-03-13 | Wildcard         | W   | 0.935      | 0.477        | 0.021 (0.009)    | 0.503 (0.225)    | 0 (0.000) |     8.95 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           41 |     1214 | 2024-03-04 | Legacy           | L   | 0.874      | -            | -                | -                | -         |   -10.65 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           40 |     1240 | 2024-03-03 | Wildcard         | W   | 0.866      | 0.143        | -                | 0.503 (0.062)    | 1 (0.866) |     9.22 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           39 |     1265 | 2024-03-02 | Imperial         | L   | 0.859      | -            | -                | -                | -         |    -0.92 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           38 |     1284 | 2024-03-01 | ODDIK            | W   | 0.854      | 0.143        | -                | 0.552 (0.067)    | 1 (0.854) |    10.04 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           37 |     1846 | 2024-02-02 | Rebels           | L   | 0.667      | -            | -                | -                | -         |   -13.31 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           36 |     1882 | 2024-02-01 | Rooster          | W   | 0.659      | -            | -                | -                | 1 (0.659) |     4.19 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           35 |     1901 | 2024-01-31 | GamerLegion      | L   | 0.653      | -            | -                | -                | -         |    -2.80 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           34 |     2103 | 2024-01-20 | Liquid           | W   | 0.583      | 0.143        | 0.111 (0.009)    | -                | 0 (0.000) |    14.34 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           33 |     2108 | 2024-01-20 | Wildcard         | W   | 0.582      | -            | -                | -                | -         |     6.60 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           32 |     2151 | 2024-01-19 | BOSS             | W   | 0.576      | -            | -                | -                | -         |     6.51 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           31 |     2157 | 2024-01-19 | Wildcard         | L   | 0.575      | -            | -                | -                | -         |   -11.68 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           30 |     2396 | 2024-01-14 | Nouns            | W   | 0.542      | -            | -                | -                | -         |     2.74 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           29 |     2414 | 2024-01-13 | Wildcard         | L   | 0.536      | -            | -                | -                | -         |   -11.83 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           28 |     2462 | 2024-01-12 | Liquid           | W   | 0.529      | 0.143        | 0.111 (0.008)    | -                | -         |    13.13 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           27 |     2470 | 2024-01-12 | Rocket           | W   | 0.529      | -            | -                | -                | -         |     2.60 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           26 |     2716 | 2023-12-16 | BESTIA           | L   | 0.346      | -            | -                | -                | -         |    -9.14 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           25 |     2744 | 2023-12-15 | Virtus.pro       | L   | 0.339      | -            | -                | -                | -         |    -0.28 | dephh, malbsMd, reck, slaxz-, Swisher  |
|           24 |     2755 | 2023-12-13 | Nouns            | W   | 0.329      | -            | -                | -                | -         |     2.08 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           23 |     2764 | 2023-12-12 | BOSS             | W   | 0.322      | 0.303        | 0.034 (0.003)    | -                | -         |     3.57 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           22 |     2773 | 2023-12-11 | Torqued          | W   | 0.316      | -            | -                | -                | -         |     0.35 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           21 |     2783 | 2023-12-10 | BOSS             | W   | 0.309      | 0.500        | 0.034 (0.005)    | 0.530 (0.082)    | -         |     3.46 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           20 |     2849 | 2023-12-07 | BOSS             | W   | 0.289      | 0.500        | 0.034 (0.005)    | 0.530 (0.076)    | -         |     3.32 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           19 |     2875 | 2023-12-06 | Party Astronauts | W   | 0.282      | 0.500        | -                | 0.554 (0.078)    | -         |     2.50 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           18 |     2940 | 2023-12-03 | Take Flyte       | W   | 0.262      | -            | -                | -                | -         |     1.63 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           17 |     2942 | 2023-12-03 | NRG              | W   | 0.262      | -            | -                | -                | -         |     2.17 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           16 |     2961 | 2023-12-02 | Wildcard         | W   | 0.255      | -            | -                | -                | -         |     2.66 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           15 |     3119 | 2023-11-22 | Rocket           | W   | 0.188      | -            | -                | -                | -         |     0.91 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           14 |     3162 | 2023-11-19 | BOSS             | W   | 0.169      | 0.500        | 0.034 (0.003)    | -                | -         |     2.03 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           13 |     3216 | 2023-11-17 | NRG              | W   | 0.155      | -            | -                | -                | -         |     1.32 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           12 |     3247 | 2023-11-16 | NRG              | W   | 0.149      | -            | -                | -                | -         |     1.28 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           11 |     3249 | 2023-11-16 | Party Astronauts | W   | 0.148      | -            | -                | -                | -         |     1.36 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|           10 |     3286 | 2023-11-15 | Wildcard         | W   | 0.142      | -            | -                | -                | -         |     1.54 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            9 |     3289 | 2023-11-15 | Party Astronauts | L   | 0.141      | -            | -                | -                | -         |    -3.16 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            8 |     3319 | 2023-11-14 | MIGHT            | W   | 0.135      | -            | -                | -                | -         |     0.85 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            7 |     3323 | 2023-11-14 | 5Fyctimz         | W   | 0.134      | -            | -                | -                | -         |     0.17 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            6 |     3391 | 2023-11-11 | FLUFFY AIMERS    | W   | 0.116      | -            | -                | -                | -         |     0.55 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            5 |     3393 | 2023-11-11 | Take Flyte       | W   | 0.115      | -            | -                | -                | -         |     0.77 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            4 |     3419 | 2023-11-10 | Elevate          | W   | 0.109      | -            | -                | -                | -         |     1.25 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            3 |     3446 | 2023-11-08 | Party Astronauts | W   | 0.095      | -            | -                | -                | -         |     0.52 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            2 |     3679 | 2023-10-30 | Complexity       | L   | 0.032      | -            | -                | -                | -         |    -0.08 | malbsMd, maNkz, reck, Swisher, WolfY   |
|            1 |     3711 | 2023-10-29 | MOUZ             | L   | 0.026      | -            | -                | -                | -         |    -0.01 | malbsMd, maNkz, reck, Swisher, WolfY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,620.48)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-02 |      0.667 | $4,500.00      | $3,003.25       |
| 2023-12-17 |      0.354 | $2,000.00      | $708.62         |
| 2023-12-13 |      0.329 | $4,000.00      | $1,314.64       |
| 2023-12-10 |      0.309 | $35,000.00     | $10,807.62      |
| 2023-12-03 |      0.262 | $3,000.00      | $786.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
