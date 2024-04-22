### Roster Details<br />
Team Name: Nexus<br />
Roster: BTN, ERSIN, ragga, s0und, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  852.8<br />
<br />
Final Rank Value (852.8) = Starting Rank Value (844.7) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.190[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.7
- 400 + ( ( 0.230 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 844.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |        8 | 2024-04-22 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -17.73 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           38 |       18 | 2024-04-21 | Young Ninjas      | W   | 1.000      | 0.500        | 0.082 (0.041)    | 0.313 (0.156)    | 0 (0.000) |    18.17 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           37 |       21 | 2024-04-21 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -21.02 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           36 |       57 | 2024-04-20 | Permitta          | W   | 1.000      | 0.500        | 0.031 (0.015)    | 0.970 (0.485)    | 0 (0.000) |    17.32 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           35 |      126 | 2024-04-18 | Young Ninjas      | L   | 1.000      | -            | -                | -                | -         |   -12.43 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           34 |      160 | 2024-04-18 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -13.39 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           33 |      357 | 2024-04-10 | B8                | W   | 1.000      | 0.384        | -                | 0.655 (0.252)    | 0 (0.000) |    15.25 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           32 |      500 | 2024-04-05 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.47 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           31 |      643 | 2024-04-01 | Sashi             | W   | 1.000      | 0.384        | 0.064 (0.025)    | 1.000 (0.384)    | 0 (0.000) |    17.47 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           30 |      752 | 2024-03-25 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.12 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           29 |     1013 | 2024-03-12 | Nemiga            | W   | 0.927      | 0.372        | 0.044 (0.015)    | 0.607 (0.210)    | 0 (0.000) |    20.06 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           28 |     1035 | 2024-03-11 | RUBY              | W   | 0.920      | 0.372        | 0.011 (0.004)    | 0.369 (0.126)    | 0 (0.000) |    12.76 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           27 |     1074 | 2024-03-09 | INGLORIOUS        | W   | 0.906      | -            | -                | -                | 0 (0.000) |     5.40 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           26 |     1100 | 2024-03-08 | Blessed           | W   | 0.900      | 0.372        | 0.007 (0.002)    | 0.324 (0.108)    | 0 (0.000) |    10.33 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           25 |     1247 | 2024-03-03 | TSM               | L   | 0.866      | -            | -                | -                | -         |   -14.23 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           24 |     1493 | 2024-02-20 | Guild Eagles      | L   | 0.786      | -            | -                | -                | -         |    -7.17 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           23 |     1515 | 2024-02-19 | Monte             | L   | 0.780      | -            | -                | -                | -         |    -2.40 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           22 |     1520 | 2024-02-19 | Astralis          | L   | 0.778      | -            | -                | -                | -         |    -1.10 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           21 |     1820 | 2024-02-03 | 500               | L   | 0.673      | -            | -                | -                | -         |   -16.30 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           20 |     1822 | 2024-02-03 | Jake Bube         | W   | 0.673      | -            | -                | -                | 0 (0.000) |     1.44 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           19 |     1831 | 2024-02-03 | AIRLYA            | L   | 0.672      | -            | -                | -                | -         |   -18.68 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           18 |     2088 | 2024-01-21 | ex-sYnck          | W   | 0.585      | -            | -                | -                | 0 (0.000) |     6.44 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           17 |     2119 | 2024-01-20 | OG                | L   | 0.580      | -            | -                | -                | -         |    -1.55 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           16 |     2131 | 2024-01-20 | BIG               | W   | 0.578      | 0.143        | 0.471 (0.039)    | 0.529 (0.044)    | -         |    16.04 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           15 |     2167 | 2024-01-19 | SINNERS           | W   | 0.574      | 0.143        | 0.043 (0.004)    | 0.779 (0.064)    | -         |    13.65 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           14 |     2224 | 2024-01-18 | Gaimin Gladiators | L   | 0.567      | -            | -                | -                | -         |    -1.26 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           13 |     2246 | 2024-01-18 | 9 Pandas          | L   | 0.566      | -            | -                | -                | -         |    -3.82 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           12 |     2319 | 2024-01-16 | Endpoint          | W   | 0.555      | 0.143        | 0.025 (0.002)    | -                | -         |     8.11 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           11 |     2334 | 2024-01-16 | Blessed           | W   | 0.554      | -            | -                | -                | -         |     6.05 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           10 |     2345 | 2024-01-16 | Alliance          | W   | 0.553      | 0.143        | 0.020 (0.002)    | 0.855 (0.068)    | -         |     9.96 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            9 |     2441 | 2024-01-13 | OG                | L   | 0.532      | -            | -                | -                | -         |    -1.03 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            8 |     2476 | 2024-01-12 | Gucci Academy     | W   | 0.527      | -            | -                | -                | -         |     6.92 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            7 |     2596 | 2024-01-09 | K10               | L   | 0.506      | -            | -                | -                | -         |    -8.65 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            6 |     2661 | 2023-12-18 | Astralis Talent   | L   | 0.358      | -            | -                | -                | -         |    -5.46 | BTN, ragga, s0und, smekk-, XELLOW |
|            5 |     2685 | 2023-12-17 | brazylijski luz   | L   | 0.352      | -            | -                | -                | -         |    -6.29 | BTN, ragga, s0und, smekk-, XELLOW |
|            4 |     3548 | 2023-11-04 | Enterprise        | L   | 0.065      | -            | -                | -                | -         |    -0.84 | BTN, ragga, s0und, smekk-, XELLOW |
|            3 |     3678 | 2023-10-30 | FORZE             | L   | 0.032      | -            | -                | -                | -         |    -0.62 | BTN, ragga, ReuS, s0und, XELLOW   |
|            2 |     3745 | 2023-10-28 | B8                | L   | 0.020      | -            | -                | -                | -         |    -0.47 | BTN, ragga, s0und, smekk-, XELLOW |
|            1 |     3767 | 2023-10-28 | HAVU              | L   | 0.017      | -            | -                | -                | -         |    -0.29 | BTN, ragga, s0und, smekk-, XELLOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,300.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
