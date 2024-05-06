### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1245.6<br />
<br />
Final Rank Value (1245.6) = Starting Rank Value (1062.5) + Head To Head Adjustments (183.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.579[<sup>1</sup>](#table2)
- Bounty Collected: 0.510[<sup>2</sup>](#table1)
- Opponent Network: 0.302[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.348<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1062.5
- 400 + ( ( 0.348 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1062.5


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
|           92 |        3 | 2024-05-06 | ALTERNATE aTTaX   | W   | 1.000      | 0.396        | -                | 0.779 (0.309)    | 0 (0.000) |     5.20 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           91 |       17 | 2024-05-05 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -17.32 | Cabbi, IceBerg, kwezz, Lucky, PR1mE       |
|           90 |       27 | 2024-05-05 | Come on now dawg  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.25 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           89 |       76 | 2024-05-02 | fnatic            | W   | 1.000      | 0.384        | 0.327 (0.126)    | 0.677 (0.260)    | 0 (0.000) |    14.65 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           88 |      110 | 2024-05-01 | 3DMAX             | W   | 1.000      | 0.384        | -                | 0.810 (0.311)    | 0 (0.000) |    15.69 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           87 |      127 | 2024-04-30 | OG                | W   | 1.000      | 0.384        | 0.580 (0.223)    | -                | 0 (0.000) |    21.62 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           86 |      155 | 2024-04-29 | 500               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.60 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           85 |      183 | 2024-04-27 | 777               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.71 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           84 |      187 | 2024-04-27 | JANO              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.67 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           83 |      252 | 2024-04-25 | Passion UA        | W   | 1.000      | 0.384        | 0.111 (0.043)    | 0.644 (0.248)    | 0 (0.000) |     5.32 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           82 |      286 | 2024-04-23 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.189 (0.073)    | 0.990 (0.381)    | 0 (0.000) |    21.60 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           81 |      290 | 2024-04-23 | BLEED             | W   | 1.000      | 0.384        | 0.400 (0.154)    | 1.000 (0.384)    | -         |    18.75 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           80 |      337 | 2024-04-20 | Eternal Fire      | W   | 1.000      | 0.143        | 0.397 (0.057)    | -                | -         |    30.42 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           79 |      351 | 2024-04-20 | Cloud9            | W   | 1.000      | 0.143        | 0.472 (0.067)    | -                | -         |    29.52 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           78 |      387 | 2024-04-19 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -0.79 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           77 |      396 | 2024-04-19 | Cloud9            | W   | 1.000      | 0.143        | 0.472 (0.067)    | -                | -         |    30.00 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           76 |      423 | 2024-04-18 | Guild Eagles      | W   | 1.000      | -            | -                | -                | -         |    14.17 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           75 |      430 | 2024-04-18 | RUBY              | W   | 1.000      | -            | -                | -                | -         |     8.51 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           74 |      438 | 2024-04-18 | GamerLegion       | W   | 1.000      | -            | -                | -                | -         |    27.52 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           73 |      480 | 2024-04-17 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -19.71 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           72 |      516 | 2024-04-16 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |   -17.25 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           71 |      538 | 2024-04-15 | ex-Preasy         | W   | 1.000      | 0.384        | 0.173 (0.067)    | 0.700 (0.269)    | -         |    17.54 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           70 |      555 | 2024-04-14 | UNiTY             | W   | 1.000      | -            | -                | -                | -         |     7.99 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           69 |      613 | 2024-04-11 | Enterprise        | W   | 1.000      | -            | -                | -                | -         |    14.25 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           68 |      655 | 2024-04-10 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -20.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           67 |      789 | 2024-04-06 | UNiTY             | W   | 0.997      | -            | -                | -                | -         |     8.55 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           66 |      846 | 2024-04-04 | UNiTY             | W   | 0.985      | -            | -                | -                | -         |     8.20 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           65 |      930 | 2024-04-02 | Permitta          | W   | 0.971      | 0.333        | -                | 0.979 (0.317)    | -         |    13.95 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           64 |      939 | 2024-04-01 | Nexus             | L   | 0.965      | -            | -                | -                | -         |   -18.72 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           63 |     1014 | 2024-03-27 | Rebels            | L   | 0.933      | -            | -                | -                | -         |   -12.55 | casey, Flayy, innocent, kisserek, olimp   |
|           62 |     1048 | 2024-03-25 | Nexus             | W   | 0.920      | -            | -                | -                | -         |    10.39 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           61 |     1073 | 2024-03-22 | Nemiga            | W   | 0.900      | 0.372        | 0.667 (0.223)    | 0.724 (0.243)    | -         |    22.59 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           60 |     1138 | 2024-03-19 | RUBY              | W   | 0.880      | -            | -                | -                | -         |     7.92 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           59 |     1150 | 2024-03-18 | Insilio           | W   | 0.873      | -            | -                | -                | -         |    11.92 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           58 |     1219 | 2024-03-15 | ECLOT             | W   | 0.851      | -            | -                | -                | -         |    15.62 | Blytz, Dytor, forsyy, kreaz, nbqq         |
|           57 |     1288 | 2024-03-13 | BLEED             | L   | 0.838      | -            | -                | -                | -         |    -6.28 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           56 |     1336 | 2024-03-11 | Nemiga            | L   | 0.826      | -            | -                | -                | -         |    -3.87 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r      |
|           55 |     1361 | 2024-03-10 | Sampi             | L   | 0.818      | -            | -                | -                | -         |   -13.17 | Cabbi, IceBerg, Kristou, Lucky, MistR     |
|           54 |     1387 | 2024-03-09 | Permitta          | W   | 0.812      | 0.372        | -                | 0.979 (0.296)    | -         |    12.81 | Cabbi, IceBerg, larsen, Lucky, MistR      |
|           53 |     1406 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.804      | -            | -                | -                | -         |   -15.10 | ArroW, awzek, FreeZe, hyped, skyye        |
|           52 |     1418 | 2024-03-07 | Insilio           | W   | 0.800      | -            | -                | -                | -         |    10.67 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           51 |     1430 | 2024-03-07 | ex-sYnck          | W   | 0.799      | -            | -                | -                | -         |     4.86 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           50 |     1463 | 2024-03-06 | Alliance          | W   | 0.791      | -            | -                | -                | -         |     8.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |     1497 | 2024-03-05 | Johnny Speeds     | L   | 0.786      | -            | -                | -                | -         |   -18.38 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           48 |     1505 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.784      | -            | -                | -                | -         |   -15.87 | ArroW, awzek, FreeZe, hyped, skyye        |
|           47 |     1521 | 2024-03-04 | Entropiq          | L   | 0.778      | -            | -                | -                | -         |   -19.62 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           46 |     1565 | 2024-03-02 | brazylijski luz   | W   | 0.765      | -            | -                | -                | -         |     5.91 | Furlan, phr, POLO, Prism, Qlocuu          |
|           45 |     1600 | 2024-02-29 | JANO              | W   | 0.751      | -            | -                | -                | -         |     3.80 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           44 |     1608 | 2024-02-28 | Sampi             | W   | 0.746      | -            | -                | -                | -         |    11.30 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           43 |     1625 | 2024-02-27 | V1dar             | L   | 0.740      | -            | -                | -                | -         |   -21.70 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           42 |     1666 | 2024-02-25 | Sangal            | L   | 0.727      | -            | -                | -                | -         |   -18.23 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           41 |     1672 | 2024-02-25 | PGE Turow         | L   | 0.725      | -            | -                | -                | -         |   -20.04 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           40 |     1712 | 2024-02-24 | MOUZ NXT          | L   | 0.718      | -            | -                | -                | -         |   -11.84 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           39 |     1764 | 2024-02-21 | Sampi             | W   | 0.698      | -            | -                | -                | -         |     9.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO  |
|           38 |     1859 | 2024-02-17 | Zero Tenacity     | W   | 0.673      | -            | -                | -                | -         |     6.66 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           37 |     2008 | 2024-02-11 | ARCRED            | W   | 0.632      | -            | -                | -                | -         |     2.48 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           36 |     2010 | 2024-02-10 | Nemiga            | L   | 0.627      | -            | -                | -                | -         |    -4.13 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           35 |     2013 | 2024-02-10 | AMKAL             | W   | 0.626      | -            | -                | -                | -         |    14.19 | Forester, ICY, Krad, NickelBack, TRAVIS   |
|           34 |     2027 | 2024-02-09 | FORZE             | W   | 0.620      | -            | -                | -                | -         |    10.71 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           33 |     2032 | 2024-02-09 | Insilio           | W   | 0.619      | -            | -                | -                | -         |     7.49 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           32 |     2041 | 2024-02-08 | Nemiga            | L   | 0.614      | -            | -                | -                | -         |    -3.75 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           31 |     2044 | 2024-02-08 | FORZE             | W   | 0.613      | -            | -                | -                | -         |    10.70 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           30 |     2076 | 2024-02-05 | Entropiq          | W   | 0.591      | -            | -                | -                | -         |     3.44 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           29 |     2093 | 2024-02-04 | TMVG              | L   | 0.586      | -            | -                | -                | -         |   -17.34 | shaker, spargo, STOVVE, ykis, yolt        |
|           28 |     2109 | 2024-02-03 | showmakerz        | W   | 0.580      | -            | -                | -                | -         |     0.94 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           27 |     2115 | 2024-02-03 | Gaimin Gladiators | W   | 0.580      | -            | -                | -                | -         |    15.35 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           26 |     2126 | 2024-02-03 | Sampi             | L   | 0.578      | -            | -                | -                | -         |   -10.05 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           25 |     2146 | 2024-02-02 | EYEBALLERS        | L   | 0.573      | -            | -                | -                | -         |   -11.71 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|           24 |     2201 | 2024-01-31 | Permitta          | L   | 0.559      | -            | -                | -                | -         |   -11.43 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           23 |     2212 | 2024-01-30 | Insilio           | W   | 0.554      | -            | -                | -                | -         |     6.27 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           22 |     2214 | 2024-01-30 | FORZE             | W   | 0.554      | -            | -                | -                | -         |     3.63 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           21 |     2222 | 2024-01-30 | RUSH B            | W   | 0.553      | -            | -                | -                | -         |     3.10 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           20 |     2636 | 2024-01-16 | EYEBALLERS        | L   | 0.460      | -            | -                | -                | -         |    -9.49 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|           19 |     2650 | 2024-01-16 | ARCRED            | W   | 0.460      | -            | -                | -                | -         |     1.99 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           18 |     2864 | 2024-01-09 | Enterprise        | L   | 0.414      | -            | -                | -                | -         |    -8.35 | bajmi, Demho, ex1st, fr3nd, TOAO          |
|           17 |     2884 | 2024-01-09 | ECLOT             | W   | 0.413      | -            | -                | -                | -         |     7.95 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           16 |     2896 | 2024-01-09 | PERA              | W   | 0.413      | -            | -                | -                | -         |     4.25 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           15 |     2940 | 2023-12-20 | NOM               | L   | 0.278      | -            | -                | -                | -         |    -7.80 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           14 |     2945 | 2023-12-19 | ex-Anonymo        | L   | 0.272      | -            | -                | -                | -         |    -7.26 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           13 |     2983 | 2023-12-17 | PGE Turow         | W   | 0.258      | -            | -                | -                | -         |     1.10 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           12 |     3220 | 2023-12-05 | EYEBALLERS        | L   | 0.179      | -            | -                | -                | -         |    -3.83 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           11 |     3317 | 2023-11-29 | Alliance          | L   | 0.139      | -            | -                | -                | -         |    -3.13 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3321 | 2023-11-29 | paiN              | L   | 0.138      | -            | -                | -                | -         |    -0.07 | biguzera, kauez, lux, n1ssim, nqz         |
|            9 |     3378 | 2023-11-25 | ex-Preasy         | L   | 0.111      | -            | -                | -                | -         |    -1.96 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            8 |     3406 | 2023-11-23 | SAW               | L   | 0.099      | -            | -                | -                | -         |    -0.35 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            7 |     3448 | 2023-11-20 | PERA              | L   | 0.080      | -            | -                | -                | -         |    -1.80 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            6 |     3474 | 2023-11-19 | ARCRED            | W   | 0.072      | -            | -                | -                | -         |     0.29 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg  |
|            5 |     3499 | 2023-11-18 | MOUZ NXT          | W   | 0.066      | -            | -                | -                | -         |     1.03 | Chr1zN, Neityu, Nexius, PR, sirah         |
|            4 |     3530 | 2023-11-17 | GenOne            | W   | 0.059      | -            | -                | -                | -         |     0.12 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            3 |     3576 | 2023-11-16 | Alliance          | L   | 0.051      | -            | -                | -                | -         |    -1.16 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            2 |     3627 | 2023-11-14 | Sprout            | W   | 0.039      | -            | -                | -                | -         |     0.15 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            1 |     3700 | 2023-11-11 | B8                | L   | 0.020      | -            | -                | -                | -         |    -0.59 | amster, cptkurtka023, npl, OWNER, r1nkle  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,430.80)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-27 |      1.000 | $6,375.00      | $6,375.00       |
| 2024-04-06 |      0.997 | $5,000.00      | $4,987.34       |
| 2024-03-25 |      0.920 | $7,000.00      | $6,437.85       |
| 2023-11-21 |      0.087 | $1,500.00      | $130.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
