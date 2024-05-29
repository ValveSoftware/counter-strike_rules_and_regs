### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  991.4<br />
<br />
Final Rank Value (991.4) = Starting Rank Value (906.7) + Head To Head Adjustments (84.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.436[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.7
- 400 + ( ( 0.261 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 906.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |     1189 | 2024-04-15 | Sashi             | L   | 0.905      | -            | -                | -                | -         |   -13.44 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           48 |     1217 | 2024-04-13 | 3DMAX             | L   | 0.891      | -            | -                | -                | -         |    -9.83 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           47 |     1369 | 2024-04-09 | ECF               | W   | 0.863      | 0.384        | -                | 0.436 (0.145)    | 0 (0.000) |     6.19 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           46 |     1422 | 2024-04-07 | Zero Tenacity     | W   | 0.850      | 0.358        | 0.147 (0.045)    | 1.000 (0.305)    | 0 (0.000) |    13.50 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           45 |     1729 | 2024-03-22 | FORZE             | L   | 0.745      | -            | -                | -                | -         |   -10.95 | gokushima, r3salt, SELLTER, shalfey, tN1R      |
|           44 |     1808 | 2024-03-18 | Sampi             | W   | 0.717      | 0.371        | 0.038 (0.010)    | 0.794 (0.211)    | 0 (0.000) |     9.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO       |
|           43 |     1848 | 2024-03-16 | Passion UA        | W   | 0.704      | 0.371        | 0.056 (0.015)    | 0.759 (0.198)    | 0 (0.000) |    10.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX      |
|           42 |     1904 | 2024-03-14 | Entropiq          | W   | 0.690      | -            | -                | -                | 0 (0.000) |     3.31 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           41 |     1975 | 2024-03-11 | Metizport         | L   | 0.673      | -            | -                | -                | -         |    -9.72 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           40 |     1988 | 2024-03-11 | HEROIC            | L   | 0.672      | -            | -                | -                | -         |    -0.44 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           39 |     1991 | 2024-03-11 | Permitta          | W   | 0.671      | 0.371        | 0.025 (0.006)    | 1.000 (0.249)    | 0 (0.000) |     8.84 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           38 |     2041 | 2024-03-09 | K10               | W   | 0.657      | -            | -                | -                | 0 (0.000) |     3.67 | Rezst, shyyne, SLY, Tree60, yz0                |
|           37 |     2084 | 2024-03-07 | Secret            | W   | 0.644      | -            | -                | -                | 0 (0.000) |     2.04 | anarkez, innocent, Kind0, Maze, Tauson         |
|           36 |     2177 | 2024-03-03 | Gaimin Gladiators | W   | 0.620      | 0.143        | 0.090 (0.008)    | -                | 0 (0.000) |    15.70 | kraghen, Nodios, Patti, Queenix, salazar       |
|           35 |     2186 | 2024-03-03 | BetBoom           | W   | 0.619      | 0.143        | 0.392 (0.035)    | 0.951 (0.084)    | -         |    17.80 | danistzz, KaiR0N-, nafany, s1ren, zorte        |
|           34 |     2193 | 2024-03-03 | ECF               | W   | 0.619      | -            | -                | -                | -         |     5.79 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           33 |     2199 | 2024-03-03 | fnatic            | L   | 0.618      | -            | -                | -                | -         |    -5.93 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           32 |     2202 | 2024-03-03 | MOUZ NXT          | L   | 0.617      | -            | -                | -                | -         |    -6.96 | Burmylov, Chr1zN, Neityu, PR, sirah            |
|           31 |     2230 | 2024-03-01 | BetBoom           | L   | 0.606      | -            | -                | -                | -         |    -1.65 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           30 |     2252 | 2024-02-28 | fnatic            | W   | 0.593      | 0.500        | 0.148 (0.044)    | 0.565 (0.168)    | -         |    13.02 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           29 |     2406 | 2024-02-21 | ex-Guild Eagles   | L   | 0.546      | -            | -                | -                | -         |    -8.26 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           28 |     2437 | 2024-02-20 | PERA              | W   | 0.539      | -            | -                | -                | 1 (0.539) |     7.36 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           27 |     2463 | 2024-02-19 | OG                | L   | 0.532      | -            | -                | -                | -         |    -3.34 | F1KU, HeavyGod, k1to, Nexius, regali           |
|           26 |     2466 | 2024-02-19 | HEROIC            | L   | 0.531      | -            | -                | -                | -         |    -0.24 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS         |
|           25 |     2686 | 2024-02-09 | Gaimin Gladiators | W   | 0.464      | 0.371        | 0.090 (0.016)    | 0.809 (0.139)    | -         |    11.99 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           24 |     2702 | 2024-02-08 | TSM               | W   | 0.457      | -            | -                | -                | -         |     4.04 | joel, KWERTZZ, MoDo, valde, Zyphon             |
|           23 |     2708 | 2024-02-07 | Into the Breach   | W   | 0.450      | -            | -                | -                | -         |     3.61 | Bymas, CRUC1AL, misutaaa, rallen, Thomas       |
|           22 |     2717 | 2024-02-06 | Sangal            | W   | 0.444      | 0.371        | 0.166 (0.027)    | 0.911 (0.150)    | -         |     9.62 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           21 |     2728 | 2024-02-05 | Gaimin Gladiators | L   | 0.437      | -            | -                | -                | -         |    -2.29 | kraghen, Nodios, Patti, Queenix, salazar       |
|           20 |     2794 | 2024-02-02 | Metizport         | L   | 0.419      | -            | -                | -                | -         |    -5.71 | adamb, Jackinho, nilo, susp, ztr               |
|           19 |     2812 | 2024-02-02 | SINNERS           | W   | 0.417      | 0.371        | -                | 0.728 (0.112)    | -         |     7.75 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           18 |     2856 | 2024-01-31 | ex-Sprout         | W   | 0.404      | -            | -                | -                | -         |     1.67 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|           17 |     2880 | 2024-01-30 | Entropiq          | W   | 0.397      | -            | -                | -                | -         |     2.00 | c0llins, Marix, mwlky, oxygeN, tiziaN          |
|           16 |     2932 | 2024-01-26 | ex-Sprout         | L   | 0.370      | -            | -                | -                | -         |   -10.36 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|           15 |     3034 | 2024-01-21 | 3DMAX             | W   | 0.338      | 0.143        | 0.105 (0.005)    | -                | -         |     8.52 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           14 |     3058 | 2024-01-20 | MOUZ              | L   | 0.333      | -            | -                | -                | -         |    -0.03 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           13 |     3074 | 2024-01-20 | FORZE             | W   | 0.332      | -            | -                | -                | -         |     2.30 | gokushima, kelieN, r3salt, shalfey, tN1R       |
|           12 |     3127 | 2024-01-19 | Spirit            | L   | 0.325      | -            | -                | -                | -         |    -0.04 | chopper, donk, magixx, sh1ro, zont1x           |
|           11 |     3185 | 2024-01-18 | Astralis          | L   | 0.319      | -            | -                | -                | -         |    -0.09 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           10 |     3190 | 2024-01-18 | Entropiq          | W   | 0.318      | -            | -                | -                | -         |     1.62 | c0llins, Marix, mwlky, oxygeN, tiziaN          |
|            9 |     3714 | 2023-12-12 | ALTERNATE aTTaX   | W   | 0.072      | -            | -                | -                | -         |     1.28 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|            8 |     3716 | 2023-12-12 | BetBoom           | L   | 0.071      | -            | -                | -                | -         |    -0.11 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|            7 |     3723 | 2023-12-11 | 9 Pandas          | W   | 0.066      | -            | -                | -                | -         |     1.65 | clax, d1Ledez, glowiing, iDISBALANCE, seized   |
|            6 |     3727 | 2023-12-11 | GODSENT           | W   | 0.064      | -            | -                | -                | -         |     0.40 | bobeksde, eraa, Golden, Plopski, Ro1f          |
|            5 |     3743 | 2023-12-10 | TSM               | W   | 0.057      | -            | -                | -                | -         |     0.31 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|            4 |     3767 | 2023-12-09 | Endpoint          | W   | 0.051      | -            | -                | -                | -         |     0.75 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|            3 |     3790 | 2023-12-08 | GODSENT           | L   | 0.043      | -            | -                | -                | -         |    -1.10 | bobeksde, eraa, Golden, Plopski, Ro1f          |
|            2 |     3868 | 2023-12-05 | FORZE             | W   | 0.025      | -            | -                | -                | -         |     0.17 | gokushima, Krad, r3salt, shalfey, tN1R         |
|            1 |     3879 | 2023-12-05 | IKLA              | W   | 0.024      | -            | -                | -                | -         |     0.09 | forsyy, Kvem, Lekr0, MICHU, Topa               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,308.02)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.898 | $1,600.00      | $1,437.11       |
| 2024-03-18 |      0.717 | $11,000.00     | $7,888.13       |
| 2024-02-09 |      0.464 | $11,000.00     | $5,107.99       |
| 2023-12-13 |      0.079 | $1,000.00      | $79.36          |
| 2023-12-12 |      0.072 | $11,000.00     | $795.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
