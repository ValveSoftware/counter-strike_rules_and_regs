### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1047.2<br />
<br />
Final Rank Value (1047.2) = Starting Rank Value (915.5) + Head To Head Adjustments (131.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.212[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.5
- 400 + ( ( 0.267 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 915.5


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
|           82 |       41 | 2024-04-20 | Eternal Fire      | W   | 1.000      | 0.143        | 0.338 (0.048)    | -                | 0 (0.000) |    30.62 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           81 |       55 | 2024-04-20 | Cloud9            | W   | 1.000      | 0.143        | 0.475 (0.068)    | -                | 0 (0.000) |    30.38 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           80 |       91 | 2024-04-19 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -0.64 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           79 |      100 | 2024-04-19 | Cloud9            | W   | 1.000      | 0.143        | 0.475 (0.068)    | -                | 0 (0.000) |    30.68 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           78 |      127 | 2024-04-18 | Guild Eagles      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.74 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           77 |      134 | 2024-04-18 | RUBY              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.81 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           76 |      142 | 2024-04-18 | GamerLegion       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.09 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           75 |      184 | 2024-04-17 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -19.31 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           74 |      220 | 2024-04-16 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |   -15.21 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           73 |      242 | 2024-04-15 | ex-Preasy         | W   | 1.000      | 0.384        | 0.064 (0.025)    | -                | 0 (0.000) |    11.70 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           72 |      259 | 2024-04-14 | UNiTY             | W   | 1.000      | 0.371        | 0.047 (0.018)    | -                | 0 (0.000) |    11.26 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           71 |      317 | 2024-04-11 | Enterprise        | W   | 1.000      | 0.384        | -                | 0.452 (0.174)    | 0 (0.000) |    16.05 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           70 |      359 | 2024-04-10 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -19.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           69 |      493 | 2024-04-06 | UNiTY             | W   | 1.000      | 0.333        | 0.047 (0.016)    | -                | 0 (0.000) |    12.39 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           68 |      550 | 2024-04-04 | UNiTY             | W   | 1.000      | 0.333        | 0.047 (0.016)    | -                | -         |    12.51 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           67 |      634 | 2024-04-02 | Permitta          | W   | 1.000      | 0.333        | -                | 0.970 (0.323)    | -         |    16.30 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           66 |      643 | 2024-04-01 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -17.47 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           65 |      718 | 2024-03-27 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -16.70 | casey, Flayy, innocent, kisserek, olimp   |
|           64 |      752 | 2024-03-25 | Nexus             | W   | 1.000      | 0.372        | -                | 0.544 (0.202)    | -         |    13.12 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           63 |      777 | 2024-03-22 | Nemiga            | W   | 0.993      | 0.372        | 0.044 (0.016)    | 0.607 (0.225)    | -         |    18.75 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           62 |      842 | 2024-03-19 | RUBY              | W   | 0.974      | 0.372        | -                | 0.369 (0.134)    | -         |    11.79 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           61 |      854 | 2024-03-18 | Insilio           | W   | 0.966      | 0.372        | -                | 0.483 (0.174)    | -         |    12.34 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           60 |      923 | 2024-03-15 | ECLOT             | W   | 0.944      | -            | -                | -                | -         |    19.07 | Blytz, Dytor, forsyy, kreaz, nbqq         |
|           59 |      992 | 2024-03-13 | BLEED             | L   | 0.931      | -            | -                | -                | -         |    -6.36 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           58 |     1040 | 2024-03-11 | Nemiga            | L   | 0.919      | -            | -                | -                | -         |    -9.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r      |
|           57 |     1065 | 2024-03-10 | Sampi             | L   | 0.912      | -            | -                | -                | -         |   -12.49 | Cabbi, IceBerg, Kristou, Lucky, MistR     |
|           56 |     1091 | 2024-03-09 | Permitta          | W   | 0.905      | 0.372        | -                | 0.970 (0.327)    | -         |    16.04 | Cabbi, IceBerg, larsen, Lucky, MistR      |
|           55 |     1110 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.897      | -            | -                | -                | -         |   -15.93 | ArroW, awzek, FreeZe, hyped, skyye        |
|           54 |     1122 | 2024-03-07 | Insilio           | W   | 0.894      | 0.372        | -                | 0.483 (0.161)    | -         |    10.62 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           53 |     1134 | 2024-03-07 | ex-sYnck          | W   | 0.892      | -            | -                | -                | -         |     9.16 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           52 |     1167 | 2024-03-06 | Alliance          | W   | 0.885      | -            | -                | -                | -         |    13.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           51 |     1201 | 2024-03-05 | Johnny Speeds     | L   | 0.879      | -            | -                | -                | -         |   -16.83 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           50 |     1209 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.878      | -            | -                | -                | -         |   -16.69 | ArroW, awzek, FreeZe, hyped, skyye        |
|           49 |     1225 | 2024-03-04 | Entropiq          | L   | 0.871      | -            | -                | -                | -         |   -18.96 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           48 |     1269 | 2024-03-02 | brazylijski luz   | W   | 0.859      | -            | -                | -                | -         |     9.64 | Furlan, phr, POLO, Prism, Qlocuu          |
|           47 |     1304 | 2024-02-29 | JANO              | W   | 0.844      | -            | -                | -                | -         |     5.72 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           46 |     1312 | 2024-02-28 | Sampi             | W   | 0.839      | -            | -                | -                | -         |    15.55 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           45 |     1329 | 2024-02-27 | V1dar             | L   | 0.833      | -            | -                | -                | -         |   -23.00 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           44 |     1370 | 2024-02-25 | Sangal            | L   | 0.820      | -            | -                | -                | -         |   -19.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           43 |     1376 | 2024-02-25 | PGE Turow         | L   | 0.818      | -            | -                | -                | -         |   -20.28 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           42 |     1416 | 2024-02-24 | MOUZ NXT          | L   | 0.811      | -            | -                | -                | -         |   -13.86 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           41 |     1468 | 2024-02-21 | Sampi             | W   | 0.792      | 0.333        | 0.084 (0.022)    | 0.698 (0.184)    | -         |    13.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO  |
|           40 |     1563 | 2024-02-17 | Zero Tenacity     | W   | 0.766      | 0.358        | -                | 0.805 (0.221)    | -         |     7.37 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           39 |     1712 | 2024-02-11 | ARCRED            | W   | 0.725      | -            | -                | -                | -         |     4.72 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           38 |     1714 | 2024-02-10 | Nemiga            | L   | 0.721      | -            | -                | -                | -         |    -9.52 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           37 |     1717 | 2024-02-10 | AMKAL             | W   | 0.720      | -            | -                | -                | -         |    14.74 | Forester, ICY, Krad, NickelBack, TRAVIS   |
|           36 |     1731 | 2024-02-09 | FORZE             | W   | 0.713      | -            | -                | -                | -         |    12.81 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           35 |     1736 | 2024-02-09 | Insilio           | W   | 0.712      | -            | -                | -                | -         |     7.80 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           34 |     1745 | 2024-02-08 | Nemiga            | L   | 0.707      | -            | -                | -                | -         |    -9.25 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           33 |     1748 | 2024-02-08 | FORZE             | W   | 0.706      | -            | -                | -                | -         |    12.66 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           32 |     1780 | 2024-02-05 | Entropiq          | W   | 0.685      | -            | -                | -                | -         |     6.56 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           31 |     1797 | 2024-02-04 | TMVG              | L   | 0.679      | -            | -                | -                | -         |   -18.98 | shaker, spargo, STOVVE, ykis, yolt        |
|           30 |     1813 | 2024-02-03 | showmakerz        | W   | 0.674      | -            | -                | -                | -         |     2.16 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           29 |     1819 | 2024-02-03 | Gaimin Gladiators | W   | 0.673      | 0.143        | 0.156 (0.015)    | -                | -         |    19.04 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           28 |     1830 | 2024-02-03 | Sampi             | L   | 0.672      | -            | -                | -                | -         |    -9.04 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           27 |     1850 | 2024-02-02 | EYEBALLERS        | L   | 0.666      | -            | -                | -                | -         |   -10.93 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|           26 |     1905 | 2024-01-31 | Permitta          | L   | 0.652      | -            | -                | -                | -         |   -11.84 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           25 |     1916 | 2024-01-30 | Insilio           | W   | 0.648      | -            | -                | -                | -         |     6.62 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           24 |     1918 | 2024-01-30 | FORZE             | W   | 0.647      | -            | -                | -                | -         |    11.84 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           23 |     1926 | 2024-01-30 | RUSH B            | W   | 0.646      | -            | -                | -                | -         |     6.59 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           22 |     2340 | 2024-01-16 | EYEBALLERS        | L   | 0.554      | -            | -                | -                | -         |    -8.81 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|           21 |     2354 | 2024-01-16 | ARCRED            | W   | 0.553      | -            | -                | -                | -         |     4.30 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           20 |     2568 | 2024-01-09 | Enterprise        | L   | 0.507      | -            | -                | -                | -         |    -7.85 | bajmi, Demho, ex1st, fr3nd, TOAO          |
|           19 |     2588 | 2024-01-09 | ECLOT             | W   | 0.506      | -            | -                | -                | -         |    11.85 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           18 |     2600 | 2024-01-09 | PERA              | W   | 0.506      | -            | -                | -                | -         |     6.11 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           17 |     2644 | 2023-12-20 | NOM               | L   | 0.371      | -            | -                | -                | -         |    -9.07 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           16 |     2649 | 2023-12-19 | ex-Anonymo        | L   | 0.365      | -            | -                | -                | -         |    -7.66 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           15 |     2687 | 2023-12-17 | PGE Turow         | W   | 0.352      | -            | -                | -                | -         |     2.95 | b1elany, darko, gRuChA, kadziu, Markoś    |
|           14 |     2924 | 2023-12-05 | EYEBALLERS        | L   | 0.272      | -            | -                | -                | -         |    -4.42 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           13 |     3021 | 2023-11-29 | Alliance          | L   | 0.232      | -            | -                | -                | -         |    -3.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3025 | 2023-11-29 | paiN              | L   | 0.231      | -            | -                | -                | -         |    -0.06 | biguzera, kauez, lux, n1ssim, nqz         |
|           11 |     3082 | 2023-11-25 | Preasy            | L   | 0.204      | -            | -                | -                | -         |    -2.18 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|           10 |     3110 | 2023-11-23 | SAW               | L   | 0.193      | -            | -                | -                | -         |    -0.80 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            9 |     3152 | 2023-11-20 | PERA              | L   | 0.173      | -            | -                | -                | -         |    -3.74 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            8 |     3178 | 2023-11-19 | ARCRED            | W   | 0.165      | -            | -                | -                | -         |     1.22 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg  |
|            7 |     3203 | 2023-11-18 | MOUZ NXT          | W   | 0.159      | -            | -                | -                | -         |     2.47 | Chr1zN, Neityu, Nexius, PR, sirah         |
|            6 |     3234 | 2023-11-17 | GenOne            | W   | 0.152      | -            | -                | -                | -         |     0.70 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            5 |     3280 | 2023-11-16 | Alliance          | L   | 0.144      | -            | -                | -                | -         |    -2.29 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            4 |     3331 | 2023-11-14 | Sprout            | W   | 0.132      | -            | -                | -                | -         |     1.09 | Anlelele, Cabbi, IceBerg, kwezz, Lucky    |
|            3 |     3404 | 2023-11-11 | B8                | L   | 0.113      | -            | -                | -                | -         |    -2.90 | amster, cptkurtka023, npl, OWNER, r1nkle  |
|            2 |     3586 | 2023-11-02 | IKLA              | W   | 0.052      | -            | -                | -                | -         |     0.21 | draken, Kvem, MICHU, Topa, xicoz          |
|            1 |     3817 | 2023-10-26 | ECLOT             | W   | 0.006      | -            | -                | -                | -         |     0.04 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,270.57)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-25 |      1.000 | $7,000.00      | $7,000.00       |
| 2023-11-21 |      0.180 | $1,500.00      | $270.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
