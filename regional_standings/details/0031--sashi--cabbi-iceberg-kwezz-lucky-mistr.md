### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1263.7<br />
<br />
Final Rank Value (1263.7) = Starting Rank Value (1143.4) + Head To Head Adjustments (120.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.503[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.373<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1143.4
- 400 + ( ( 0.373 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1143.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           96 |      228 | 2024-06-06 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -6.67 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           95 |      260 | 2024-06-06 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -3.31 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           94 |      293 | 2024-06-05 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -15.36 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           93 |      307 | 2024-06-05 | Astralis          | W   | 1.000      | 0.715        | 0.474 (0.339)    | 0.537 (0.384)    | 1 (1.000) |    30.40 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           92 |      315 | 2024-06-05 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           91 |      750 | 2024-05-20 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -15.19 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           90 |      765 | 2024-05-19 | Passion UA        | W   | 1.000      | 0.500        | 0.088 (0.044)    | 0.905 (0.452)    | 0 (0.000) |     5.55 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           89 |      792 | 2024-05-18 | B8                | L   | 1.000      | -            | -                | -                | -         |   -18.95 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           88 |      803 | 2024-05-18 | Monte             | W   | 1.000      | 0.384        | 0.179 (0.069)    | 0.686 (0.263)    | 0 (0.000) |    15.74 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           87 |      809 | 2024-05-18 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | -                | 0.583 (0.292)    | 0 (0.000) |     4.41 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           86 |      842 | 2024-05-17 | M1X KS            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.11 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           85 |      879 | 2024-05-16 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -26.60 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           84 |      927 | 2024-05-15 | Endpoint          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.55 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           83 |     1099 | 2024-05-09 | 1WIN              | W   | 0.985      | 0.396        | -                | 0.672 (0.262)    | 0 (0.000) |     6.91 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           82 |     1122 | 2024-05-08 | Grannys Knockers  | W   | 0.979      | -            | -                | -                | 0 (0.000) |     2.62 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           81 |     1140 | 2024-05-07 | 9 Pandas          | W   | 0.972      | 0.396        | 0.114 (0.044)    | 0.758 (0.292)    | 0 (0.000) |     8.68 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           80 |     1154 | 2024-05-06 | ALTERNATE aTTaX   | W   | 0.966      | -            | -                | -                | 0 (0.000) |     5.57 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           79 |     1168 | 2024-05-05 | Gaimin Gladiators | L   | 0.960      | -            | -                | -                | -         |   -18.49 | Cabbi, IceBerg, kwezz, Lucky, PR1mE       |
|           78 |     1178 | 2024-05-05 | Come on now dawg  | W   | 0.959      | -            | -                | -                | -         |     0.22 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           77 |     1227 | 2024-05-02 | fnatic            | W   | 0.940      | 0.384        | 0.198 (0.071)    | -                | -         |    16.16 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           76 |     1261 | 2024-05-01 | 3DMAX             | W   | 0.932      | 0.384        | 0.122 (0.044)    | 0.821 (0.294)    | -         |    15.11 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           75 |     1278 | 2024-04-30 | OG                | W   | 0.926      | 0.384        | 0.249 (0.089)    | -                | -         |    16.52 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           74 |     1306 | 2024-04-29 | 500               | W   | 0.918      | -            | -                | -                | -         |     2.69 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           73 |     1334 | 2024-04-27 | 777               | W   | 0.907      | -            | -                | -                | -         |     1.63 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           72 |     1338 | 2024-04-27 | JANO              | W   | 0.906      | -            | -                | -                | -         |     1.41 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           71 |     1403 | 2024-04-25 | Passion UA        | W   | 0.891      | 0.384        | -                | 0.905 (0.310)    | -         |     5.04 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           70 |     1437 | 2024-04-23 | Gaimin Gladiators | W   | 0.879      | 0.384        | -                | 0.749 (0.253)    | -         |    16.28 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           69 |     1441 | 2024-04-23 | BLEED             | W   | 0.878      | 0.384        | 0.349 (0.118)    | 1.000 (0.338)    | -         |    20.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           68 |     1488 | 2024-04-20 | Eternal Fire      | W   | 0.860      | 0.143        | 1.000 (0.123)    | -                | -         |    26.49 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           67 |     1502 | 2024-04-20 | Cloud9            | W   | 0.859      | -            | -                | -                | -         |    22.27 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           66 |     1538 | 2024-04-19 | Eternal Fire      | L   | 0.853      | -            | -                | -                | -         |    -0.47 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           65 |     1547 | 2024-04-19 | Cloud9            | W   | 0.853      | -            | -                | -                | -         |    22.68 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           64 |     1574 | 2024-04-18 | M1X KS            | W   | 0.847      | -            | -                | -                | -         |    12.30 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           63 |     1581 | 2024-04-18 | RUBY              | W   | 0.846      | -            | -                | -                | -         |     7.61 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           62 |     1589 | 2024-04-18 | GamerLegion       | W   | 0.846      | -            | -                | -                | -         |    19.08 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           61 |     1631 | 2024-04-17 | Passion UA        | L   | 0.839      | -            | -                | -                | -         |   -17.18 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           60 |     1667 | 2024-04-16 | M1X KS            | L   | 0.832      | -            | -                | -                | -         |   -14.20 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           59 |     1689 | 2024-04-15 | ex-Preasy         | W   | 0.825      | -            | -                | -                | -         |     9.58 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           58 |     1706 | 2024-04-14 | UNiTY             | W   | 0.818      | -            | -                | -                | -         |     8.87 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           57 |     1764 | 2024-04-11 | Enterprise        | W   | 0.798      | -            | -                | -                | -         |     9.18 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           56 |     1806 | 2024-04-10 | Passion UA        | L   | 0.792      | -            | -                | -                | -         |   -16.70 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           55 |     1940 | 2024-04-06 | UNiTY             | W   | 0.764      | -            | -                | -                | -         |     8.85 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           54 |     1997 | 2024-04-04 | UNiTY             | W   | 0.751      | -            | -                | -                | -         |     8.70 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           53 |     2081 | 2024-04-02 | Permitta          | W   | 0.737      | -            | -                | -                | -         |     8.69 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           52 |     2090 | 2024-04-01 | Nexus             | L   | 0.731      | -            | -                | -                | -         |   -17.01 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           51 |     2165 | 2024-03-27 | Rebels            | L   | 0.700      | -            | -                | -                | -         |   -11.07 | casey, Flayy, innocent, kisserek, olimp   |
|           50 |     2199 | 2024-03-25 | Nexus             | W   | 0.686      | -            | -                | -                | -         |     5.28 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           49 |     2224 | 2024-03-22 | Nemiga            | W   | 0.667      | 0.372        | 0.335 (0.083)    | -                | -         |    15.02 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           48 |     2289 | 2024-03-19 | RUBY              | W   | 0.647      | -            | -                | -                | -         |     5.72 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           47 |     2301 | 2024-03-18 | Insilio           | W   | 0.639      | -            | -                | -                | -         |     6.69 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           46 |     2370 | 2024-03-15 | ECLOT             | W   | 0.618      | -            | -                | -                | -         |    12.46 | Blytz, Dytor, forsyy, kreaz, nbqq         |
|           45 |     2439 | 2024-03-13 | BLEED             | L   | 0.605      | -            | -                | -                | -         |    -2.73 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           44 |     2487 | 2024-03-11 | Nemiga            | L   | 0.593      | -            | -                | -                | -         |    -4.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r      |
|           43 |     2512 | 2024-03-10 | Sampi             | L   | 0.585      | -            | -                | -                | -         |   -12.27 | Cabbi, IceBerg, Kristou, Lucky, MistR     |
|           42 |     2538 | 2024-03-09 | Permitta          | W   | 0.578      | -            | -                | -                | -         |     6.85 | Cabbi, IceBerg, larsen, Lucky, MistR      |
|           41 |     2557 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.571      | -            | -                | -                | -         |   -11.44 | ArroW, awzek, FreeZe, hyped, skyye        |
|           40 |     2569 | 2024-03-07 | Insilio           | W   | 0.567      | -            | -                | -                | -         |     5.50 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           39 |     2581 | 2024-03-07 | ex-sYnck          | W   | 0.566      | -            | -                | -                | -         |     0.83 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           38 |     2614 | 2024-03-06 | Alliance          | W   | 0.558      | -            | -                | -                | -         |     4.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     2648 | 2024-03-05 | Johnny Speeds     | L   | 0.553      | -            | -                | -                | -         |    -7.67 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           36 |     2656 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.551      | -            | -                | -                | -         |   -11.60 | ArroW, awzek, FreeZe, hyped, skyye        |
|           35 |     2672 | 2024-03-04 | Entropiq          | L   | 0.544      | -            | -                | -                | -         |   -15.92 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           34 |     2716 | 2024-03-02 | brazylijski luz   | W   | 0.532      | -            | -                | -                | -         |     2.58 | Furlan, phr, POLO, Prism, Qlocuu          |
|           33 |     2751 | 2024-02-29 | JANO              | W   | 0.518      | -            | -                | -                | -         |     1.63 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           32 |     2759 | 2024-02-28 | Sampi             | W   | 0.513      | -            | -                | -                | -         |     4.92 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           31 |     2776 | 2024-02-27 | V1dar             | L   | 0.506      | -            | -                | -                | -         |   -15.28 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           30 |     2817 | 2024-02-25 | Sangal            | L   | 0.494      | -            | -                | -                | -         |    -7.47 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           29 |     2823 | 2024-02-25 | PGE Turow         | L   | 0.492      | -            | -                | -                | -         |   -14.30 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           28 |     2863 | 2024-02-24 | MOUZ NXT          | L   | 0.484      | -            | -                | -                | -         |    -8.37 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           27 |     2915 | 2024-02-21 | Sampi             | W   | 0.465      | -            | -                | -                | -         |     3.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO  |
|           26 |     3010 | 2024-02-17 | Zero Tenacity     | W   | 0.439      | -            | -                | -                | -         |     5.92 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           25 |     3159 | 2024-02-11 | ARCRED            | W   | 0.399      | -            | -                | -                | -         |     0.66 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           24 |     3161 | 2024-02-10 | Nemiga            | L   | 0.394      | -            | -                | -                | -         |    -3.92 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           23 |     3164 | 2024-02-10 | AMKAL             | W   | 0.393      | -            | -                | -                | -         |     7.73 | Forester, ICY, Krad, NickelBack, TRAVIS   |
|           22 |     3178 | 2024-02-09 | FORZE             | W   | 0.387      | -            | -                | -                | -         |     4.06 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           21 |     3183 | 2024-02-09 | Insilio           | W   | 0.386      | -            | -                | -                | -         |     3.15 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           20 |     3192 | 2024-02-08 | Nemiga            | L   | 0.381      | -            | -                | -                | -         |    -3.76 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           19 |     3195 | 2024-02-08 | FORZE             | W   | 0.379      | -            | -                | -                | -         |     3.85 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           18 |     3227 | 2024-02-05 | Entropiq          | W   | 0.358      | -            | -                | -                | -         |     0.66 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           17 |     3244 | 2024-02-04 | TMVG              | L   | 0.352      | -            | -                | -                | -         |   -10.72 | shaker, spargo, STOVVE, ykis, yolt        |
|           16 |     3260 | 2024-02-03 | showmakerz        | W   | 0.347      | -            | -                | -                | -         |     0.19 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           15 |     3266 | 2024-02-03 | Gaimin Gladiators | W   | 0.346      | -            | -                | -                | -         |     7.04 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           14 |     3277 | 2024-02-03 | Sampi             | L   | 0.345      | -            | -                | -                | -         |    -8.18 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           13 |     3297 | 2024-02-02 | EYEBALLERS        | L   | 0.340      | -            | -                | -                | -         |    -8.13 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|           12 |     3352 | 2024-01-31 | Permitta          | L   | 0.326      | -            | -                | -                | -         |    -7.86 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           11 |     3363 | 2024-01-30 | Insilio           | W   | 0.321      | -            | -                | -                | -         |     2.32 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           10 |     3365 | 2024-01-30 | FORZE             | W   | 0.320      | -            | -                | -                | -         |     0.34 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|            9 |     3373 | 2024-01-30 | RUSH B            | W   | 0.320      | -            | -                | -                | -         |     1.61 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            8 |     3787 | 2024-01-16 | EYEBALLERS        | L   | 0.227      | -            | -                | -                | -         |    -5.48 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|            7 |     3801 | 2024-01-16 | ARCRED            | W   | 0.227      | -            | -                | -                | -         |     0.35 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            6 |     4015 | 2024-01-09 | Enterprise        | L   | 0.181      | -            | -                | -                | -         |    -4.23 | bajmi, Demho, ex1st, fr3nd, TOAO          |
|            5 |     4035 | 2024-01-09 | ECLOT             | W   | 0.180      | -            | -                | -                | -         |     3.64 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            4 |     4047 | 2024-01-09 | PERA              | W   | 0.179      | -            | -                | -                | -         |     1.24 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            3 |     4091 | 2023-12-20 | NOM               | L   | 0.044      | -            | -                | -                | -         |    -1.33 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            2 |     4096 | 2023-12-19 | ex-Anonymo        | L   | 0.038      | -            | -                | -                | -         |    -1.15 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            1 |     4134 | 2023-12-17 | PGE Turow         | W   | 0.025      | -            | -                | -                | -         |     0.06 | b1elany, darko, gRuChA, kadziu, Markoś    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,944.96)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-05-18 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-09 |      0.985 | $14,000.00     | $13,790.59      |
| 2024-05-02 |      0.940 | $12,500.00     | $11,747.32      |
| 2024-04-27 |      0.907 | $6,375.00      | $5,781.04       |
| 2024-04-06 |      0.764 | $5,000.00      | $3,821.01       |
| 2024-03-25 |      0.686 | $7,000.00      | $4,804.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
