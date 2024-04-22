### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  890.8<br />
<br />
Final Rank Value (890.8) = Starting Rank Value (917.6) + Head To Head Adjustments (-26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.142[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.6
- 400 + ( ( 0.268 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 917.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |       87 | 2024-04-19 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -18.09 | casey, Flayy, innocent, kisserek, olimp |
|           28 |      266 | 2024-04-13 | Monte           | L   | 1.000      | -            | -                | -                | -         |    -7.55 | casey, Flayy, innocent, kisserek, olimp |
|           27 |      398 | 2024-04-09 | B8              | W   | 1.000      | 0.500        | 0.003 (0.001)    | 0.655 (0.328)    | 0 (0.000) |    14.36 | casey, Flayy, innocent, kisserek, olimp |
|           26 |      541 | 2024-04-04 | ALTERNATE aTTaX | W   | 1.000      | 0.500        | 0.019 (0.010)    | 0.639 (0.320)    | 0 (0.000) |    12.46 | casey, Flayy, innocent, kisserek, olimp |
|           25 |      591 | 2024-04-03 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -10.77 | casey, Flayy, innocent, kisserek, olimp |
|           24 |      675 | 2024-03-28 | ex-Sprout       | W   | 1.000      | 0.500        | 0.000 (0.000)    | 0.155 (0.077)    | 0 (0.000) |     5.67 | casey, Flayy, innocent, kisserek, olimp |
|           23 |      708 | 2024-03-27 | B8              | L   | 1.000      | -            | -                | -                | -         |   -15.61 | casey, Flayy, innocent, kisserek, olimp |
|           22 |      718 | 2024-03-27 | Sashi           | W   | 1.000      | 0.143        | 0.064 (0.009)    | 1.000 (0.143)    | 0 (0.000) |    16.70 | casey, Flayy, innocent, kisserek, olimp |
|           21 |      748 | 2024-03-25 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -3.15 | casey, Flayy, innocent, kisserek, olimp |
|           20 |      943 | 2024-03-14 | brazylijski luz | L   | 0.941      | -            | -                | -                | -         |   -18.90 | casey, Flayy, kisserek, olimp, SZPERO   |
|           19 |     1215 | 2024-03-04 | BLEED           | L   | 0.874      | -            | -                | -                | -         |    -8.22 | casey, Flayy, kisserek, olimp, sNx      |
|           18 |     1249 | 2024-03-03 | Sangal          | W   | 0.866      | 0.500        | -                | 0.685 (0.297)    | 0 (0.000) |     6.98 | casey, Flayy, kisserek, olimp, sNx      |
|           17 |     1261 | 2024-03-02 | Aurora          | L   | 0.860      | -            | -                | -                | -         |    -2.94 | casey, Flayy, kisserek, olimp, sNx      |
|           16 |     1296 | 2024-02-29 | Sangal          | W   | 0.846      | 0.500        | -                | 0.685 (0.290)    | 0 (0.000) |     6.66 | casey, Flayy, kisserek, olimp, sNx      |
|           15 |     1787 | 2024-02-04 | Falcons         | L   | 0.680      | -            | -                | -                | -         |    -2.32 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     1824 | 2024-02-03 | FaZe            | L   | 0.673      | -            | -                | -                | -         |    -0.05 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     1846 | 2024-02-02 | M80             | W   | 0.667      | 0.143        | 0.087 (0.008)    | 0.454 (0.043)    | 1 (0.667) |    13.31 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     1898 | 2024-01-31 | Eternal Fire    | L   | 0.654      | -            | -                | -                | -         |    -0.35 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     1903 | 2024-01-31 | Cloud9          | W   | 0.652      | 0.143        | 0.475 (0.044)    | 0.623 (0.058)    | 1 (0.652) |    20.27 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     1943 | 2024-01-28 | 9 Pandas        | L   | 0.633      | -            | -                | -                | -         |    -4.55 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     2029 | 2024-01-23 | Viperio         | L   | 0.600      | -            | -                | -                | -         |   -16.78 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     2030 | 2024-01-23 | PERA            | L   | 0.599      | -            | -                | -                | -         |   -11.29 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     2050 | 2024-01-22 | Sampi           | L   | 0.593      | -            | -                | -                | -         |    -8.04 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     2055 | 2024-01-22 | ALTERNATE aTTaX | W   | 0.593      | 0.143        | 0.026 (0.002)    | -                | 0 (0.000) |     6.49 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     2059 | 2024-01-22 | Guild Eagles    | L   | 0.593      | -            | -                | -                | -         |    -6.19 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     2331 | 2024-01-16 | Passion UA      | L   | 0.554      | -            | -                | -                | -         |    -9.14 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     2341 | 2024-01-16 | Gucci Academy   | W   | 0.554      | 0.143        | 0.013 (0.001)    | -                | 0 (0.000) |     4.84 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     3049 | 2023-11-26 | ENCE            | W   | 0.213      | 0.344        | 0.299 (0.022)    | 0.446 (0.033)    | -         |     6.17 | Goofy, hades, jcobbb, KEi, Kylar        |
|            1 |     3074 | 2023-11-25 | Enterprise      | W   | 0.206      | 0.344        | 0.026 (0.002)    | 0.452 (0.032)    | -         |     3.17 | Flayy, kisserek, moonwalk, olimp, sNx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,581.69)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-11 |      0.726 | $10,000.00     | $7,264.46       |
| 2023-11-26 |      0.213 | $6,188.00      | $1,317.23       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
