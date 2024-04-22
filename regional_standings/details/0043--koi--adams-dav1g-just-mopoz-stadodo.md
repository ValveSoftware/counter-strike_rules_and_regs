### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1030.2<br />
<br />
Final Rank Value (1030.2) = Starting Rank Value (1041.0) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.455[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1041.0
- 400 + ( ( 0.332 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1041.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |      136 | 2024-04-18 | Guild Eagles   | L   | 1.000      | -            | -                | -                | -         |   -18.83 | adamS, dav1g, JUST, mopoz, stadodo         |
|           58 |      145 | 2024-04-18 | fnatic         | W   | 1.000      | 0.143        | 0.240 (0.034)    | 0.624 (0.089)    | 0 (0.000) |    18.38 | adamS, dav1g, JUST, mopoz, stadodo         |
|           57 |      215 | 2024-04-16 | BLEED          | L   | 1.000      | -            | -                | -                | -         |   -13.26 | adamS, dav1g, JUST, mopoz, stadodo         |
|           56 |      348 | 2024-04-10 | RUSH B         | W   | 1.000      | 0.500        | -                | 0.307 (0.153)    | 0 (0.000) |     6.42 | adamS, dav1g, JUST, mopoz, stadodo         |
|           55 |      402 | 2024-04-09 | Aurora         | W   | 1.000      | 0.500        | 0.763 (0.381)    | 1.000 (0.500)    | 0 (0.000) |    25.48 | adamS, dav1g, JUST, mopoz, stadodo         |
|           54 |      408 | 2024-04-09 | Apeks          | L   | 1.000      | -            | -                | -                | -         |   -11.00 | adamS, dav1g, JUST, mopoz, stadodo         |
|           53 |      436 | 2024-04-08 | GUN5           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.79 | adamS, dav1g, JUST, mopoz, stadodo         |
|           52 |      441 | 2024-04-08 | fnatic         | L   | 1.000      | -            | -                | -                | -         |   -12.51 | adamS, dav1g, JUST, mopoz, stadodo         |
|           51 |      542 | 2024-04-04 | NOM            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.07 | adamS, dav1g, JUST, mopoz, stadodo         |
|           50 |      576 | 2024-04-03 | 9INE           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.89 | adamS, dav1g, JUST, mopoz, stadodo         |
|           49 |      613 | 2024-04-02 | TSM            | W   | 1.000      | 0.500        | -                | 0.299 (0.150)    | 0 (0.000) |     6.66 | adamS, dav1g, JUST, mopoz, stadodo         |
|           48 |      680 | 2024-03-28 | EYEBALLERS     | L   | 1.000      | -            | -                | -                | -         |   -21.74 | adamS, dav1g, JUST, mopoz, stadodo         |
|           47 |      852 | 2024-03-18 | FURIA          | L   | 0.966      | -            | -                | -                | -         |    -4.62 | adamS, dav1g, JUST, mopoz, stadodo         |
|           46 |      869 | 2024-03-17 | ENCE           | L   | 0.960      | -            | -                | -                | -         |    -4.61 | adamS, dav1g, JUST, mopoz, stadodo         |
|           45 |      884 | 2024-03-17 | SAW            | L   | 0.959      | -            | -                | -                | -         |    -6.08 | adamS, dav1g, JUST, mopoz, stadodo         |
|           44 |      975 | 2024-03-13 | Sangal         | W   | 0.934      | 0.500        | -                | 0.685 (0.320)    | -         |     4.10 | adamS, dav1g, JUST, mopoz, stadodo         |
|           43 |     1030 | 2024-03-11 | B8             | L   | 0.920      | -            | -                | -                | -         |   -22.90 | adamS, dav1g, JUST, mopoz, stadodo         |
|           42 |     1036 | 2024-03-11 | Apeks          | L   | 0.919      | -            | -                | -                | -         |    -7.36 | adamS, dav1g, JUST, mopoz, stadodo         |
|           41 |     1148 | 2024-03-06 | 9 Pandas       | W   | 0.887      | 0.500        | 0.083 (0.037)    | 0.656 (0.291)    | -         |    14.92 | adamS, dav1g, JUST, mopoz, stadodo         |
|           40 |     1185 | 2024-03-05 | FORZE          | W   | 0.881      | 0.143        | 0.140 (0.018)    | 0.784 (0.099)    | -         |    12.68 | adamS, dav1g, JUST, mopoz, stadodo         |
|           39 |     1191 | 2024-03-05 | Nemiga         | W   | 0.880      | 0.143        | -                | 0.607 (0.076)    | -         |    11.57 | adamS, dav1g, JUST, mopoz, stadodo         |
|           38 |     1200 | 2024-03-05 | ex-Sprout      | W   | 0.879      | -            | -                | -                | -         |     2.78 | adamS, dav1g, JUST, mopoz, stadodo         |
|           37 |     1241 | 2024-03-03 | The Chosen Few | L   | 0.866      | -            | -                | -                | -         |   -24.03 | adamS, dav1g, JUST, mopoz, stadodo         |
|           36 |     1293 | 2024-02-29 | Aurora         | L   | 0.847      | -            | -                | -                | -         |    -6.41 | adamS, dav1g, JUST, mopoz, stadodo         |
|           35 |     1299 | 2024-02-29 | HAVU           | W   | 0.846      | -            | -                | -                | -         |     5.00 | adamS, dav1g, JUST, mopoz, stadodo         |
|           34 |     1307 | 2024-02-28 | FORZE          | L   | 0.840      | -            | -                | -                | -         |   -16.50 | adamS, dav1g, JUST, mopoz, stadodo         |
|           33 |     1311 | 2024-02-28 | ECF            | W   | 0.839      | -            | -                | -                | -         |     1.75 | adamS, dav1g, JUST, mopoz, stadodo         |
|           32 |     1601 | 2024-02-16 | fnatic         | W   | 0.758      | 0.143        | 0.240 (0.026)    | -                | 1 (0.758) |    11.99 | adamS, dav1g, JUST, mopoz, stadodo         |
|           31 |     1628 | 2024-02-15 | 9 Pandas       | W   | 0.751      | 0.143        | 0.083 (0.009)    | 0.656 (0.070)    | 1 (0.751) |    13.08 | adamS, dav1g, JUST, mopoz, stadodo         |
|           30 |     1654 | 2024-02-14 | 3DMAX          | W   | 0.746      | 0.143        | -                | 0.801 (0.085)    | 1 (0.746) |     9.94 | adamS, dav1g, JUST, mopoz, stadodo         |
|           29 |     1667 | 2024-02-14 | Natus Vincere  | L   | 0.745      | -            | -                | -                | -         |    -0.17 | adamS, dav1g, JUST, mopoz, stadodo         |
|           28 |     1825 | 2024-02-03 | SAW            | L   | 0.673      | -            | -                | -                | -         |    -5.68 | adamS, dav1g, JUST, mopoz, stadodo         |
|           27 |     1855 | 2024-02-02 | Rhyno          | W   | 0.666      | -            | -                | -                | -         |     3.71 | adamS, dav1g, JUST, mopoz, stadodo         |
|           26 |     1861 | 2024-02-02 | ABT            | W   | 0.665      | -            | -                | -                | -         |     0.86 | adamS, dav1g, JUST, mopoz, stadodo         |
|           25 |     2113 | 2024-01-20 | PERA           | W   | 0.580      | -            | -                | -                | -         |     4.03 | adamS, dav1g, JUST, mopoz, stadodo         |
|           24 |     2121 | 2024-01-20 | Enterprise     | L   | 0.580      | -            | -                | -                | -         |   -11.50 | adamS, dav1g, JUST, mopoz, stadodo         |
|           23 |     2179 | 2024-01-19 | HEROIC         | W   | 0.572      | 0.143        | 0.281 (0.023)    | -                | -         |    17.19 | adamS, dav1g, JUST, mopoz, stadodo         |
|           22 |     2235 | 2024-01-18 | AMKAL          | L   | 0.566      | -            | -                | -                | -         |    -9.55 | adamS, dav1g, JUST, mopoz, stadodo         |
|           21 |     2251 | 2024-01-18 | Spirit         | W   | 0.566      | 0.143        | 1.000 (0.081)    | -                | -         |    17.67 | adamS, dav1g, JUST, mopoz, stadodo         |
|           20 |     2559 | 2024-01-09 | Enterprise     | L   | 0.508      | -            | -                | -                | -         |   -10.42 | adamS, dav1g, JUST, mopoz, stadodo         |
|           19 |     2561 | 2024-01-09 | Entropiq       | W   | 0.508      | -            | -                | -                | -         |     2.74 | adamS, dav1g, JUST, mopoz, stadodo         |
|           18 |     2565 | 2024-01-09 | 9INE           | W   | 0.507      | -            | -                | -                | -         |     0.96 | adamS, dav1g, JUST, mopoz, stadodo         |
|           17 |     2581 | 2024-01-09 | K10            | W   | 0.507      | -            | -                | -                | -         |     3.40 | adamS, dav1g, JUST, mopoz, stadodo         |
|           16 |     2604 | 2024-01-09 | Betera         | W   | 0.506      | -            | -                | -                | -         |     2.59 | adamS, dav1g, JUST, mopoz, stadodo         |
|           15 |     2909 | 2023-12-05 | FORZE          | L   | 0.274      | -            | -                | -                | -         |    -7.02 | adamS, bladE, dav1g, JUST, mopoz           |
|           14 |     3220 | 2023-11-17 | Apeks          | L   | 0.154      | -            | -                | -                | -         |    -1.17 | CacaNito, jkaem, kyxsan, nawwk, sense      |
|           13 |     3228 | 2023-11-17 | Aurora         | W   | 0.153      | 0.143        | 0.763 (0.017)    | -                | -         |     4.21 | adamS, dav1g, JUST, MartinezSa, mopoz      |
|           12 |     3236 | 2023-11-17 | BetBoom        | L   | 0.152      | -            | -                | -                | -         |    -1.15 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           11 |     3252 | 2023-11-16 | Space          | W   | 0.147      | -            | -                | -                | -         |     0.69 | enzero, fozil, leri511, TruNiQ, Vert       |
|           10 |     3265 | 2023-11-16 | PERA           | L   | 0.146      | -            | -                | -                | -         |    -3.75 | Aaron, DGL, Kamion, msN, Porya             |
|            9 |     3274 | 2023-11-16 | MIBR           | L   | 0.145      | -            | -                | -                | -         |    -0.52 | brnz4n, drop, exit, insani, saffee         |
|            8 |     3362 | 2023-11-12 | SAW            | W   | 0.120      | 0.500        | 0.173 (0.010)    | -                | -         |     2.92 | aragornN, arrozdoce, ewjerkz, roman, story |
|            7 |     3399 | 2023-11-11 | Betera         | W   | 0.114      | -            | -                | -                | -         |     0.57 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |
|            6 |     3460 | 2023-11-08 | The Prodigies  | W   | 0.093      | -            | -                | -                | -         |     0.15 | adamS, dav1g, JUST, MartinezSa, mopoz      |
|            5 |     3479 | 2023-11-07 | FORZE          | L   | 0.087      | -            | -                | -                | -         |    -2.28 | adamS, dav1g, JUST, MartinezSa, mopoz      |
|            4 |     3600 | 2023-11-01 | IKLA           | W   | 0.047      | -            | -                | -                | -         |     0.10 | draken, kensizor, Kvem, MICHU, Topa        |
|            3 |     3675 | 2023-10-30 | Monte          | L   | 0.032      | -            | -                | -                | -         |    -0.30 | adamS, alex, JUST, MartinezSa, mopoz       |
|            2 |     3712 | 2023-10-29 | 9z             | W   | 0.026      | -            | -                | -                | -         |     0.26 | buda, dgt, HUASOPEEK, max, tge             |
|            1 |     3795 | 2023-10-27 | Virtus.pro     | L   | 0.012      | -            | -                | -                | -         |    -0.01 | fame, FL1T, Jame, mir, n0rb3r7             |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,986.17)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2023-12-10 |      0.307 | $3,000.00      | $920.33         |
| 2023-11-02 |      0.053 | $5,000.00      | $267.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
