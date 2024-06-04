### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  978.4<br />
<br />
Final Rank Value (978.4) = Starting Rank Value (940.7) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.140[<sup>2</sup>](#table1)
- LAN Wins: 0.164[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.7
- 400 + ( ( 0.279 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 940.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      601 | 2024-05-09 | B8              | L   | 1.000      | -            | -                | -                | -         |   -13.46 | adamS, dav1g, JUST, mopoz, stadodo |
|           46 |      763 | 2024-05-01 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -16.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |     1083 | 2024-04-18 | ex-Guild Eagles | L   | 0.925      | -            | -                | -                | -         |   -16.84 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |     1092 | 2024-04-18 | fnatic          | W   | 0.925      | 0.143        | 0.148 (0.020)    | 0.565 (0.075)    | 0 (0.000) |    18.87 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |     1162 | 2024-04-16 | BLEED           | L   | 0.913      | -            | -                | -                | -         |    -7.43 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |     1295 | 2024-04-10 | RUSH B          | W   | 0.873      | 0.500        | -                | 0.242 (0.105)    | 0 (0.000) |     5.42 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |     1349 | 2024-04-09 | Aurora          | W   | 0.866      | 0.500        | 0.493 (0.214)    | 0.840 (0.364)    | 0 (0.000) |    24.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |     1355 | 2024-04-09 | Apeks           | L   | 0.865      | -            | -                | -                | -         |    -8.80 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     1383 | 2024-04-08 | GUN5            | W   | 0.859      | -            | -                | -                | 0 (0.000) |     1.30 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1388 | 2024-04-08 | fnatic          | L   | 0.858      | -            | -                | -                | -         |    -8.74 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1489 | 2024-04-04 | NOM             | W   | 0.832      | 0.384        | -                | 0.148 (0.047)    | 0 (0.000) |     1.90 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1523 | 2024-04-03 | 9INE            | W   | 0.826      | -            | -                | -                | 0 (0.000) |     0.88 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     1560 | 2024-04-02 | TSM             | W   | 0.819      | 0.500        | -                | 0.191 (0.078)    | 0 (0.000) |     5.42 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     1627 | 2024-03-28 | EYEBALLERS      | L   | 0.785      | -            | -                | -                | -         |   -16.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     1799 | 2024-03-18 | FURIA           | L   | 0.719      | -            | -                | -                | -         |    -3.16 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     1816 | 2024-03-17 | ENCE            | L   | 0.713      | -            | -                | -                | -         |    -2.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1831 | 2024-03-17 | SAW             | L   | 0.711      | -            | -                | -                | -         |    -2.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1922 | 2024-03-13 | Sangal          | W   | 0.686      | 0.500        | 0.166 (0.057)    | 0.911 (0.313)    | -         |    10.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1977 | 2024-03-11 | B8              | L   | 0.673      | -            | -                | -                | -         |    -8.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1983 | 2024-03-11 | Apeks           | L   | 0.672      | -            | -                | -                | -         |    -5.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2095 | 2024-03-06 | 9 Pandas        | W   | 0.640      | 0.500        | 0.108 (0.035)    | 0.798 (0.255)    | -         |    13.96 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2132 | 2024-03-05 | FORZE           | W   | 0.633      | 0.143        | 0.108 (0.010)    | -                | -         |    11.21 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2138 | 2024-03-05 | Nemiga          | W   | 0.632      | 0.143        | 0.363 (0.033)    | 0.647 (0.058)    | -         |    15.91 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2147 | 2024-03-05 | ex-Sprout       | W   | 0.632      | -            | -                | -                | -         |     2.14 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2188 | 2024-03-03 | The Chosen Few  | L   | 0.619      | -            | -                | -                | -         |   -16.55 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2240 | 2024-02-29 | Aurora          | L   | 0.600      | -            | -                | -                | -         |    -1.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2246 | 2024-02-29 | HAVU            | W   | 0.598      | -            | -                | -                | -         |     3.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2254 | 2024-02-28 | FORZE           | L   | 0.593      | -            | -                | -                | -         |    -9.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2258 | 2024-02-28 | ECF             | W   | 0.592      | -            | -                | -                | -         |     4.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2548 | 2024-02-16 | fnatic          | W   | 0.511      | 0.143        | 0.148 (0.011)    | -                | 1 (0.511) |    10.80 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     2575 | 2024-02-15 | 9 Pandas        | W   | 0.504      | 0.143        | 0.108 (0.008)    | 0.798 (0.057)    | 1 (0.504) |    11.64 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     2601 | 2024-02-14 | 3DMAX           | W   | 0.499      | 0.143        | -                | 0.669 (0.048)    | 1 (0.499) |    11.26 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     2614 | 2024-02-14 | Natus Vincere   | L   | 0.497      | -            | -                | -                | -         |    -0.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     2772 | 2024-02-03 | SAW             | L   | 0.425      | -            | -                | -                | -         |    -1.42 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     2802 | 2024-02-02 | Rhyno           | W   | 0.418      | -            | -                | -                | -         |     5.46 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     2808 | 2024-02-02 | ABT             | W   | 0.418      | -            | -                | -                | -         |     0.85 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3060 | 2024-01-20 | PERA            | W   | 0.333      | -            | -                | -                | -         |     4.26 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3068 | 2024-01-20 | Enterprise      | L   | 0.332      | -            | -                | -                | -         |    -5.96 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3126 | 2024-01-19 | HEROIC          | W   | 0.325      | 0.143        | 0.322 (0.015)    | -                | -         |    10.10 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3182 | 2024-01-18 | AMKAL           | L   | 0.319      | -            | -                | -                | -         |    -1.97 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3198 | 2024-01-18 | Spirit          | W   | 0.318      | 0.143        | 1.000 (0.045)    | -                | -         |     9.98 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3506 | 2024-01-09 | Enterprise      | L   | 0.261      | -            | -                | -                | -         |    -4.71 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     3508 | 2024-01-09 | Entropiq        | W   | 0.260      | -            | -                | -                | -         |     1.14 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     3512 | 2024-01-09 | 9INE            | W   | 0.260      | -            | -                | -                | -         |     0.76 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     3528 | 2024-01-09 | K10             | W   | 0.259      | -            | -                | -                | -         |     1.72 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     3551 | 2024-01-09 | Betera          | W   | 0.259      | -            | -                | -                | -         |     1.74 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     3856 | 2023-12-05 | FORZE           | L   | 0.027      | -            | -                | -                | -         |    -0.68 | adamS, bladE, dav1g, JUST, mopoz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,502.59)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |
| 2023-12-10 |      0.059 | $3,000.00      | $178.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
