### Roster Details<br />
Team Name: ENCE<br />
Roster: dycha, gla1ve, Goofy, hades, Kylar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1348.2<br />
<br />
Final Rank Value (1348.2) = Starting Rank Value (1473.2) + Head To Head Adjustments (-125.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.692[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.812[<sup>2</sup>](#table1)

The average of these factors is 0.563<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1473.2
- 400 + ( ( 0.563 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1473.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       40 | 2024-05-04 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -14.37 | dycha, gla1ve, Goofy, hades, Kylar         |
|           40 |       56 | 2024-05-03 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |   -15.64 | dycha, gla1ve, Goofy, hades, Kylar         |
|           39 |       75 | 2024-05-02 | Monte              | W   | 1.000      | 0.889        | 0.188 (0.167)    | 0.589 (0.524)    | 1 (1.000) |    11.03 | dycha, gla1ve, Goofy, hades, Kylar         |
|           38 |      102 | 2024-05-01 | Bad News Kangaroos | W   | 1.000      | 0.889        | 0.068 (0.060)    | 0.359 (0.319)    | 1 (1.000) |     2.44 | dycha, gla1ve, Goofy, hades, Kylar         |
|           37 |      133 | 2024-04-30 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |   -16.73 | dycha, gla1ve, Goofy, hades, Kylar         |
|           36 |      398 | 2024-04-19 | AMKAL              | L   | 1.000      | -            | -                | -                | -         |   -23.77 | dycha, gla1ve, Goofy, hades, Kylar         |
|           35 |      481 | 2024-04-17 | Enterprise         | W   | 1.000      | 0.384        | -                | 0.459 (0.176)    | -         |     2.62 | dycha, gla1ve, Goofy, hades, Kylar         |
|           34 |      650 | 2024-04-10 | OG                 | L   | 1.000      | -            | -                | -                | -         |   -19.54 | dycha, gla1ve, Goofy, hades, Kylar         |
|           33 |      733 | 2024-04-08 | FORZE              | L   | 1.000      | -            | -                | -                | -         |   -26.52 | dycha, gla1ve, Goofy, hades, Kylar         |
|           32 |      844 | 2024-04-04 | Aurora Young Blud  | W   | 0.985      | -            | -                | -                | -         |     0.47 | dycha, gla1ve, Goofy, hades, Kylar         |
|           31 |     1140 | 2024-03-19 | FURIA              | L   | 0.880      | -            | -                | -                | -         |   -13.58 | dycha, gla1ve, Goofy, hades, Kylar         |
|           30 |     1156 | 2024-03-18 | paiN               | L   | 0.871      | -            | -                | -                | -         |    -6.85 | dycha, gla1ve, Goofy, hades, Kylar         |
|           29 |     1165 | 2024-03-17 | KOI                | W   | 0.867      | 0.143        | -                | 0.772 (0.096)    | 1 (0.867) |     2.91 | dycha, gla1ve, Goofy, hades, Kylar         |
|           28 |     1182 | 2024-03-17 | Imperial           | L   | 0.865      | -            | -                | -                | -         |    -8.59 | dycha, gla1ve, Goofy, hades, Kylar         |
|           27 |     1312 | 2024-03-12 | B8                 | L   | 0.833      | -            | -                | -                | -         |   -24.63 | dycha, gla1ve, Goofy, hades, Kylar         |
|           26 |     1325 | 2024-03-11 | HEROIC             | L   | 0.827      | -            | -                | -                | -         |    -9.07 | dycha, gla1ve, Goofy, hades, Kylar         |
|           25 |     1338 | 2024-03-11 | Metizport          | W   | 0.826      | 0.143        | 0.183 (0.022)    | 1.000 (0.118)    | -         |     2.04 | dycha, gla1ve, Goofy, hades, Kylar         |
|           24 |     1738 | 2024-02-22 | Astralis           | W   | 0.705      | 0.143        | 0.174 (0.018)    | -                | 1 (0.705) |    12.63 | dycha, gla1ve, Goofy, hades, Kylar         |
|           23 |     1760 | 2024-02-21 | Vitality           | L   | 0.699      | -            | -                | -                | -         |    -2.77 | dycha, gla1ve, Goofy, hades, Kylar         |
|           22 |     1792 | 2024-02-20 | GamerLegion        | W   | 0.691      | 0.143        | 0.187 (0.018)    | -                | 1 (0.691) |    10.81 | dycha, gla1ve, Goofy, hades, Kylar         |
|           21 |     1813 | 2024-02-19 | Guild Eagles       | W   | 0.686      | 0.143        | -                | 0.648 (0.063)    | 1 (0.686) |     1.48 | dycha, gla1ve, Goofy, hades, Kylar         |
|           20 |     1821 | 2024-02-19 | Spirit             | L   | 0.685      | -            | -                | -                | -         |    -2.69 | dycha, gla1ve, Goofy, hades, Kylar         |
|           19 |     2025 | 2024-02-09 | Falcons            | L   | 0.620      | -            | -                | -                | -         |   -13.25 | dycha, gla1ve, Goofy, hades, Kylar         |
|           18 |     2059 | 2024-02-06 | MOUZ               | L   | 0.600      | -            | -                | -                | -         |    -2.43 | dycha, gla1ve, Goofy, hades, Kylar         |
|           17 |     2070 | 2024-02-05 | G2                 | W   | 0.593      | 1.000        | 0.841 (0.499)    | 0.607 (0.360)    | 1 (0.593) |    16.46 | dycha, gla1ve, Goofy, hades, Kylar         |
|           16 |     2106 | 2024-02-03 | Vitality           | W   | 0.581      | 1.000        | 1.000 (0.581)    | 0.442 (0.257)    | 1 (0.581) |    16.56 | dycha, gla1ve, Goofy, hades, Kylar         |
|           15 |     2145 | 2024-02-02 | TheMongolz         | W   | 0.573      | 0.143        | 0.253 (0.021)    | 0.595 (0.049)    | 1 (0.573) |     8.35 | dycha, gla1ve, Goofy, hades, Kylar         |
|           14 |     2174 | 2024-02-01 | Astralis           | W   | 0.567      | 0.143        | 0.174 (0.014)    | -                | 1 (0.567) |    11.67 | dycha, gla1ve, Goofy, hades, Kylar         |
|           13 |     2200 | 2024-01-31 | BIG                | L   | 0.559      | -            | -                | -                | -         |    -9.95 | dycha, gla1ve, Goofy, hades, Kylar         |
|           12 |     3052 | 2023-12-13 | BIG                | L   | 0.233      | -            | -                | -                | -         |    -4.13 | Krimbo, mantuu, prosus, s1n, tabseN        |
|           11 |     3056 | 2023-12-13 | BetBoom            | W   | 0.232      | 0.384        | 0.563 (0.050)    | 1.000 (0.089)    | -         |     3.60 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|           10 |     3066 | 2023-12-12 | FORZE              | W   | 0.224      | -            | -                | -                | -         |     0.17 | gokushima, kelieN, r3salt, shalfey, tN1R   |
|            9 |     3179 | 2023-12-06 | EYEBALLERS         | L   | 0.187      | -            | -                | -                | -         |    -5.61 | Goofy, hades, KEi, Kylar, nawrot           |
|            8 |     3208 | 2023-12-05 | SINNERS            | L   | 0.180      | -            | -                | -                | -         |    -5.18 | Goofy, hades, KEi, Kylar, nawrot           |
|            7 |     3345 | 2023-11-26 | Rebels             | L   | 0.120      | -            | -                | -                | -         |    -3.28 | Goofy, hades, jcobbb, KEi, Kylar           |
|            6 |     3364 | 2023-11-25 | ex-Anonymo         | W   | 0.113      | -            | -                | -                | -         |     0.05 | lunAtic, reiko, SaMey, Sobol, virtuoso     |
|            5 |     3434 | 2023-11-21 | Spirit             | L   | 0.086      | -            | -                | -                | -         |    -0.37 | Goofy, hades, jcobbb, KEi, Kylar           |
|            4 |     3450 | 2023-11-20 | Apeks              | W   | 0.079      | -            | -                | -                | -         |     0.80 | Goofy, hades, jcobbb, KEi, Kylar           |
|            3 |     3472 | 2023-11-19 | FORZE              | W   | 0.072      | -            | -                | -                | -         |     0.04 | gokushima, Krad, r3salt, shalfey, tN1R     |
|            2 |     3567 | 2023-11-16 | Spirit             | L   | 0.052      | -            | -                | -                | -         |    -0.22 | ArtFr0st, chopper, donk, magixx, zont1x    |
|            1 |     3748 | 2023-11-08 | 3DMAX              | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,305.89)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |
| 2024-02-11 |      0.633 | $40,000.00     | $25,325.60      |
| 2023-12-13 |      0.233 | $3,500.00      | $817.09         |
| 2023-12-10 |      0.213 | $4,000.00      | $853.88         |
| 2023-11-26 |      0.120 | $3,713.00      | $443.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
