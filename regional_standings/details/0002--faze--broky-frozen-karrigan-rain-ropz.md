### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1924.3<br />
<br />
Final Rank Value (1924.3) = Starting Rank Value (2000.0) + Head To Head Adjustments (-75.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.818[<sup>2</sup>](#table1)
- Opponent Network: 0.542[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.840<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.840 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      213 | 2024-04-26 | Eternal Fire      | W   | 1.000      | 0.889        | 0.397 (0.353)    | 0.579 (0.515)    | 1 (1.000) |     7.16 | broky, frozen, karrigan, rain, ropz  |
|           44 |      242 | 2024-04-25 | Virtus.pro        | W   | 1.000      | 0.889        | 0.438 (0.389)    | 0.520 (0.463)    | 1 (1.000) |     6.39 | broky, frozen, karrigan, rain, ropz  |
|           43 |      261 | 2024-04-24 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -27.11 | broky, frozen, karrigan, rain, ropz  |
|           42 |      279 | 2024-04-23 | Imperial          | W   | 1.000      | 0.889        | 0.656 (0.583)    | 0.965 (0.858)    | 1 (1.000) |     3.20 | broky, frozen, karrigan, rain, ropz  |
|           41 |      554 | 2024-04-14 | MOUZ              | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    12.92 | broky, frozen, karrigan, rain, ropz  |
|           40 |      568 | 2024-04-13 | Astralis          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.85 | broky, frozen, karrigan, rain, ropz  |
|           39 |      581 | 2024-04-12 | Liquid            | W   | 1.000      | 0.624        | -                | 0.726 (0.453)    | 1 (1.000) |     1.64 | broky, frozen, karrigan, rain, ropz  |
|           38 |      656 | 2024-04-10 | FlyQuest          | W   | 1.000      | 0.624        | -                | 0.705 (0.440)    | 1 (1.000) |     1.36 | broky, frozen, karrigan, rain, ropz  |
|           37 |      671 | 2024-04-10 | Cloud9            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.36 | broky, frozen, karrigan, rain, ropz  |
|           36 |      717 | 2024-04-09 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -28.34 | broky, frozen, karrigan, rain, ropz  |
|           35 |      748 | 2024-04-08 | Nemiga            | W   | 1.000      | 0.624        | 0.667 (0.416)    | 0.724 (0.452)    | 1 (1.000) |     0.63 | broky, frozen, karrigan, rain, ropz  |
|           34 |      941 | 2024-03-31 | Natus Vincere     | L   | 0.960      | -            | -                | -                | -         |   -15.26 | broky, frozen, karrigan, rain, ropz  |
|           33 |      948 | 2024-03-30 | Vitality          | W   | 0.953      | 1.000        | 1.000 (0.953)    | 0.442 (0.422)    | 1 (0.953) |    10.69 | broky, frozen, karrigan, rain, ropz  |
|           32 |      966 | 2024-03-28 | Spirit            | W   | 0.941      | 1.000        | 1.000 (0.941)    | 0.542 (0.510)    | -         |    11.73 | broky, frozen, karrigan, rain, ropz  |
|           31 |     1053 | 2024-03-24 | Complexity        | W   | 0.912      | -            | -                | -                | -         |     3.03 | broky, frozen, karrigan, rain, ropz  |
|           30 |     1066 | 2024-03-23 | Imperial          | W   | 0.905      | 1.000        | 0.656 (0.594)    | 0.965 (0.873)    | -         |     3.92 | broky, frozen, karrigan, rain, ropz  |
|           29 |     1080 | 2024-03-22 | Eternal Fire      | L   | 0.898      | -            | -                | -                | -         |   -21.66 | broky, frozen, karrigan, rain, ropz  |
|           28 |     1091 | 2024-03-21 | FURIA             | W   | 0.894      | 1.000        | -                | 0.484 (0.432)    | -         |     1.95 | broky, frozen, karrigan, rain, ropz  |
|           27 |     1103 | 2024-03-21 | HEROIC            | L   | 0.892      | -            | -                | -                | -         |   -23.70 | broky, frozen, karrigan, rain, ropz  |
|           26 |     1891 | 2024-02-16 | Eternal Fire      | W   | 0.666      | -            | -                | -                | -         |     3.86 | broky, frozen, karrigan, rain, ropz  |
|           25 |     1918 | 2024-02-15 | G2                | L   | 0.659      | -            | -                | -                | -         |   -13.85 | broky, frozen, karrigan, rain, ropz  |
|           24 |     1952 | 2024-02-14 | Falcons           | W   | 0.653      | -            | -                | -                | -         |     0.69 | broky, frozen, karrigan, rain, ropz  |
|           23 |     1967 | 2024-02-14 | 9 Pandas          | W   | 0.651      | -            | -                | -                | -         |     0.18 | broky, frozen, karrigan, rain, ropz  |
|           22 |     2004 | 2024-02-11 | Spirit            | L   | 0.633      | -            | -                | -                | -         |   -14.23 | broky, frozen, karrigan, rain, ropz  |
|           21 |     2016 | 2024-02-10 | MOUZ              | W   | 0.626      | 1.000        | 1.000 (0.626)    | -                | -         |     6.12 | broky, frozen, karrigan, rain, ropz  |
|           20 |     2030 | 2024-02-09 | G2                | W   | 0.619      | 1.000        | 0.841 (0.521)    | -                | -         |     6.15 | broky, frozen, karrigan, rain, ropz  |
|           19 |     2061 | 2024-02-06 | Spirit            | L   | 0.599      | -            | -                | -                | -         |   -13.84 | broky, frozen, karrigan, rain, ropz  |
|           18 |     2080 | 2024-02-04 | Eternal Fire      | W   | 0.588      | -            | -                | -                | -         |     3.19 | broky, frozen, karrigan, rain, ropz  |
|           17 |     2120 | 2024-02-03 | Rebels            | W   | 0.579      | -            | -                | -                | -         |     0.13 | broky, frozen, karrigan, rain, ropz  |
|           16 |     2251 | 2024-01-27 | Liquid            | W   | 0.533      | -            | -                | -                | -         |     0.57 | broky, frozen, karrigan, rain, ropz  |
|           15 |     2265 | 2024-01-26 | GamerLegion       | W   | 0.527      | -            | -                | -                | -         |     0.90 | broky, frozen, karrigan, rain, ropz  |
|           14 |     2290 | 2024-01-25 | Spirit            | W   | 0.518      | -            | -                | -                | -         |     4.03 | broky, frozen, karrigan, rain, ropz  |
|           13 |     2311 | 2024-01-24 | GamerLegion       | L   | 0.512      | -            | -                | -                | -         |   -15.28 | broky, frozen, karrigan, rain, ropz  |
|           12 |     2980 | 2023-12-17 | Vitality          | L   | 0.259      | -            | -                | -                | -         |    -5.35 | broky, frozen, karrigan, rain, ropz  |
|           11 |     3018 | 2023-12-16 | MOUZ              | W   | 0.252      | -            | -                | -                | -         |     2.41 | broky, frozen, karrigan, rain, ropz  |
|           10 |     3045 | 2023-12-14 | G2                | W   | 0.239      | -            | -                | -                | -         |     2.41 | broky, frozen, karrigan, rain, ropz  |
|            9 |     3057 | 2023-12-13 | HEROIC            | W   | 0.231      | -            | -                | -                | -         |     0.01 | broky, frozen, karrigan, rain, ropz  |
|            8 |     3346 | 2023-11-26 | Vitality          | L   | 0.119      | -            | -                | -                | -         |    -2.53 | broky, karrigan, rain, ropz, Twistzz |
|            7 |     3361 | 2023-11-25 | Complexity        | W   | 0.114      | -            | -                | -                | -         |     0.32 | broky, karrigan, rain, ropz, Twistzz |
|            6 |     3408 | 2023-11-23 | Cloud9            | W   | 0.099      | -            | -                | -                | -         |     0.36 | broky, karrigan, rain, ropz, Twistzz |
|            5 |     3426 | 2023-11-22 | Ninjas in Pyjamas | W   | 0.091      | -            | -                | -                | -         |     0.00 | broky, karrigan, rain, ropz, Twistzz |
|            4 |     3672 | 2023-11-12 | MOUZ              | W   | 0.026      | -            | -                | -                | -         |     0.26 | broky, karrigan, rain, ropz, Twistzz |
|            3 |     3680 | 2023-11-12 | Falcons           | W   | 0.025      | -            | -                | -                | -         |     0.02 | broky, karrigan, rain, ropz, Twistzz |
|            2 |     3738 | 2023-11-09 | MOUZ              | W   | 0.005      | -            | -                | -                | -         |     0.05 | broky, karrigan, rain, ropz, Twistzz |
|            1 |     3740 | 2023-11-09 | Ninjas in Pyjamas | W   | 0.003      | -            | -                | -                | -         |     0.00 | broky, karrigan, rain, ropz, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($470,628.87)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-03-31 |      0.960 | $170,000.00    | $163,239.59     |
| 2024-02-11 |      0.633 | $180,000.00    | $113,965.21     |
| 2024-01-28 |      0.540 | $22,500.00     | $12,148.01      |
| 2023-12-17 |      0.259 | $250,000.00    | $64,726.74      |
| 2023-11-26 |      0.119 | $85,000.00     | $10,154.44      |
| 2023-11-12 |      0.026 | $250,000.00    | $6,394.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
