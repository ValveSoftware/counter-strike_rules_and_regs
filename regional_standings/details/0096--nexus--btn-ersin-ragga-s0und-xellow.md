### Roster Details<br />
Team Name: Nexus<br />
Roster: BTN, ERSIN, ragga, s0und, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  819.9<br />
<br />
Final Rank Value (819.9) = Starting Rank Value (909.5) + Head To Head Adjustments (-89.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.398[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 909.5
- 400 + ( ( 0.267 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 909.5


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
|           47 |       64 | 2024-05-03 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -16.92 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           46 |      109 | 2024-05-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -10.29 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           45 |      141 | 2024-04-30 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -3.71 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           44 |      146 | 2024-04-29 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -13.85 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           43 |      149 | 2024-04-29 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -22.44 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           42 |      156 | 2024-04-29 | LEON              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.10 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           41 |      160 | 2024-04-29 | Enterprise        | W   | 1.000      | 0.384        | 0.022 (0.008)    | 0.459 (0.176)    | 0 (0.000) |    16.88 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           40 |      177 | 2024-04-28 | brazylijski luz   | L   | 1.000      | -            | -                | -                | -         |   -15.19 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           39 |      241 | 2024-04-25 | Metizport         | W   | 1.000      | 0.384        | 0.183 (0.070)    | 1.000 (0.384)    | 0 (0.000) |    22.92 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           38 |      248 | 2024-04-25 | Grannys Knockers  | L   | 1.000      | -            | -                | -                | -         |   -25.25 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           37 |      270 | 2024-04-24 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -4.70 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           36 |      291 | 2024-04-23 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -26.55 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           35 |      304 | 2024-04-22 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -15.64 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           34 |      314 | 2024-04-21 | Young Ninjas      | W   | 1.000      | 0.500        | 0.086 (0.043)    | 0.269 (0.135)    | 0 (0.000) |    16.28 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           33 |      317 | 2024-04-21 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -17.14 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           32 |      353 | 2024-04-20 | Permitta          | W   | 1.000      | 0.500        | 0.053 (0.027)    | 0.979 (0.489)    | 0 (0.000) |    17.60 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           31 |      422 | 2024-04-18 | Young Ninjas      | L   | 1.000      | -            | -                | -                | -         |   -14.39 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           30 |      456 | 2024-04-18 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -13.79 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           29 |      653 | 2024-04-10 | B8                | W   | 1.000      | 0.384        | 0.080 (0.031)    | 0.851 (0.327)    | 0 (0.000) |    18.09 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           28 |      796 | 2024-04-05 | SINNERS           | L   | 0.993      | -            | -                | -                | -         |   -10.56 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           27 |      939 | 2024-04-01 | Sashi             | W   | 0.965      | 0.384        | 0.188 (0.070)    | 1.000 (0.371)    | 0 (0.000) |    18.72 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           26 |     1048 | 2024-03-25 | Sashi             | L   | 0.920      | -            | -                | -                | -         |   -10.39 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           25 |     1309 | 2024-03-12 | Nemiga            | W   | 0.833      | 0.372        | 0.667 (0.207)    | 0.724 (0.225)    | 0 (0.000) |    23.21 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           24 |     1331 | 2024-03-11 | RUBY              | W   | 0.826      | 0.372        | 0.011 (0.003)    | 0.460 (0.142)    | 0 (0.000) |    10.23 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           23 |     1370 | 2024-03-09 | INGLORIOUS        | W   | 0.813      | -            | -                | -                | 0 (0.000) |     3.99 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           22 |     1396 | 2024-03-08 | Blessed           | W   | 0.806      | 0.372        | 0.008 (0.002)    | 0.285 (0.086)    | -         |     7.99 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           21 |     1543 | 2024-03-03 | TSM               | L   | 0.773      | -            | -                | -                | -         |   -14.43 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           20 |     1789 | 2024-02-20 | Guild Eagles      | L   | 0.692      | -            | -                | -                | -         |    -7.41 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           19 |     1811 | 2024-02-19 | Monte             | L   | 0.686      | -            | -                | -                | -         |    -1.26 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           18 |     1816 | 2024-02-19 | Astralis          | L   | 0.685      | -            | -                | -                | -         |    -0.55 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           17 |     2116 | 2024-02-03 | 500               | L   | 0.580      | -            | -                | -                | -         |   -12.67 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           16 |     2118 | 2024-02-03 | Jake Bube         | W   | 0.579      | -            | -                | -                | -         |     0.94 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           15 |     2127 | 2024-02-03 | AIRLYA            | L   | 0.578      | -            | -                | -                | -         |   -16.59 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           14 |     2384 | 2024-01-21 | ex-sYnck          | W   | 0.492      | -            | -                | -                | -         |     3.84 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           13 |     2415 | 2024-01-20 | OG                | L   | 0.487      | -            | -                | -                | -         |    -1.54 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           12 |     2427 | 2024-01-20 | BIG               | W   | 0.485      | 0.143        | 0.454 (0.031)    | -                | -         |    14.31 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           11 |     2463 | 2024-01-19 | SINNERS           | W   | 0.480      | -            | -                | -                | -         |    10.42 | BTN, ERSIN, ragga, s0und, XELLOW  |
|           10 |     2520 | 2024-01-18 | Gaimin Gladiators | L   | 0.473      | -            | -                | -                | -         |    -1.25 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            9 |     2542 | 2024-01-18 | 9 Pandas          | L   | 0.473      | -            | -                | -                | -         |    -3.75 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            8 |     2615 | 2024-01-16 | Endpoint          | W   | 0.461      | -            | -                | -                | -         |     6.84 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            7 |     2630 | 2024-01-16 | Blessed           | W   | 0.461      | -            | -                | -                | -         |     4.21 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            6 |     2641 | 2024-01-16 | Alliance          | W   | 0.460      | 0.143        | -                | 0.815 (0.054)    | -         |     6.86 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            5 |     2737 | 2024-01-13 | OG                | L   | 0.439      | -            | -                | -                | -         |    -1.13 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            4 |     2772 | 2024-01-12 | Gucci Academy     | W   | 0.434      | -            | -                | -                | -         |     4.02 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            3 |     2892 | 2024-01-09 | K10               | L   | 0.413      | -            | -                | -                | -         |    -8.70 | BTN, ERSIN, ragga, s0und, XELLOW  |
|            2 |     2957 | 2023-12-18 | Astralis Talent   | L   | 0.265      | -            | -                | -                | -         |    -4.74 | BTN, ragga, s0und, smekk-, XELLOW |
|            1 |     2981 | 2023-12-17 | brazylijski luz   | L   | 0.259      | -            | -                | -                | -         |    -5.18 | BTN, ragga, s0und, smekk-, XELLOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,954.68)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-25 |      0.920 | $4,300.00      | $3,954.68       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
