### Roster Details<br />
Team Name: Sashi<br />
Roster: Cabbi, IceBerg, kwezz, Lucky, MistR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1203.2<br />
<br />
Final Rank Value (1203.2) = Starting Rank Value (1040.9) + Head To Head Adjustments (162.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.465[<sup>2</sup>](#table1)
- Opponent Network: 0.301[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.330<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1040.9
- 400 + ( ( 0.330 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1040.9


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
|           92 |      250 | 2024-05-20 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -14.50 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           91 |      265 | 2024-05-19 | Passion UA        | W   | 1.000      | 0.500        | -                | 0.759 (0.380)    | 0 (0.000) |     5.82 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           90 |      292 | 2024-05-18 | B8                | L   | 1.000      | -            | -                | -                | -         |   -18.82 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           89 |      303 | 2024-05-18 | Monte             | W   | 1.000      | 0.384        | 0.181 (0.070)    | -                | 0 (0.000) |    16.52 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           88 |      309 | 2024-05-18 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | -                | 0.650 (0.325)    | 0 (0.000) |     4.44 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           87 |      342 | 2024-05-17 | ex-Guild Eagles   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.02 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           86 |      379 | 2024-05-16 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -26.34 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           85 |      427 | 2024-05-15 | Endpoint          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.09 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           84 |      599 | 2024-05-09 | 1WIN              | W   | 1.000      | 0.396        | -                | 0.666 (0.264)    | 0 (0.000) |     7.66 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           83 |      622 | 2024-05-08 | Grannys Knockers  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.48 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           82 |      640 | 2024-05-07 | 9 Pandas          | W   | 1.000      | 0.396        | 0.108 (0.043)    | 0.798 (0.316)    | 0 (0.000) |     9.67 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           81 |      654 | 2024-05-06 | ALTERNATE aTTaX   | W   | 1.000      | 0.396        | -                | 0.650 (0.258)    | 0 (0.000) |     5.83 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           80 |      668 | 2024-05-05 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -18.59 | Cabbi, IceBerg, kwezz, Lucky, PR1mE       |
|           79 |      678 | 2024-05-05 | Come on now dawg  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.32 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           78 |      727 | 2024-05-02 | fnatic            | W   | 1.000      | 0.384        | 0.148 (0.057)    | -                | -         |    13.10 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           77 |      761 | 2024-05-01 | 3DMAX             | W   | 1.000      | 0.384        | 0.105 (0.040)    | 0.669 (0.257)    | -         |    15.91 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           76 |      778 | 2024-04-30 | OG                | W   | 1.000      | 0.384        | 0.278 (0.107)    | -                | -         |    19.50 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           75 |      806 | 2024-04-29 | 500               | W   | 0.997      | -            | -                | -                | -         |     3.61 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           74 |      834 | 2024-04-27 | 777               | W   | 0.986      | -            | -                | -                | -         |     2.38 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           73 |      838 | 2024-04-27 | JANO              | W   | 0.985      | -            | -                | -                | -         |     2.00 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           72 |      903 | 2024-04-25 | Passion UA        | W   | 0.971      | 0.384        | -                | 0.759 (0.283)    | -         |     5.90 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           71 |      937 | 2024-04-23 | Gaimin Gladiators | W   | 0.958      | 0.384        | 0.090 (0.033)    | 0.809 (0.298)    | -         |    18.87 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           70 |      941 | 2024-04-23 | BLEED             | W   | 0.957      | 0.384        | 0.246 (0.091)    | 0.982 (0.361)    | -         |    19.71 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           69 |      988 | 2024-04-20 | Eternal Fire      | W   | 0.939      | 0.143        | 1.000 (0.134)    | -                | -         |    29.07 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           68 |     1002 | 2024-04-20 | Cloud9            | W   | 0.938      | -            | -                | -                | -         |    26.15 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           67 |     1038 | 2024-04-19 | Eternal Fire      | L   | 0.932      | -            | -                | -                | -         |    -0.39 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           66 |     1047 | 2024-04-19 | Cloud9            | W   | 0.932      | -            | -                | -                | -         |    26.63 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           65 |     1074 | 2024-04-18 | ex-Guild Eagles   | W   | 0.926      | -            | -                | -                | -         |    11.99 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           64 |     1081 | 2024-04-18 | RUBY              | W   | 0.925      | -            | -                | -                | -         |     9.30 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           63 |     1089 | 2024-04-18 | GamerLegion       | W   | 0.925      | 0.143        | 0.224 (0.030)    | -                | -         |    21.90 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           62 |     1131 | 2024-04-17 | Passion UA        | L   | 0.918      | -            | -                | -                | -         |   -17.44 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           61 |     1167 | 2024-04-16 | ex-Guild Eagles   | L   | 0.912      | -            | -                | -                | -         |   -17.11 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           60 |     1189 | 2024-04-15 | ex-Preasy         | W   | 0.905      | -            | -                | -                | -         |    13.44 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           59 |     1206 | 2024-04-14 | UNiTY             | W   | 0.897      | -            | -                | -                | -         |     6.88 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           58 |     1264 | 2024-04-11 | Enterprise        | W   | 0.877      | -            | -                | -                | -         |    10.77 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           57 |     1306 | 2024-04-10 | Passion UA        | L   | 0.871      | -            | -                | -                | -         |   -17.06 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           56 |     1440 | 2024-04-06 | UNiTY             | W   | 0.843      | -            | -                | -                | -         |     6.87 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           55 |     1497 | 2024-04-04 | UNiTY             | W   | 0.831      | -            | -                | -                | -         |     6.59 | K1-FiDa, Levi, M1key, NIO, Pechyn         |
|           54 |     1581 | 2024-04-02 | Permitta          | W   | 0.816      | 0.333        | -                | 1.000 (0.272)    | -         |    10.82 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           53 |     1590 | 2024-04-01 | Nexus             | L   | 0.811      | -            | -                | -                | -         |   -16.52 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           52 |     1665 | 2024-03-27 | Rebels            | L   | 0.779      | -            | -                | -                | -         |   -10.70 | casey, Flayy, innocent, kisserek, olimp   |
|           51 |     1699 | 2024-03-25 | Nexus             | W   | 0.766      | -            | -                | -                | -         |     8.09 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           50 |     1724 | 2024-03-22 | Nemiga            | W   | 0.746      | 0.372        | 0.363 (0.101)    | -                | -         |    17.92 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           49 |     1789 | 2024-03-19 | RUBY              | W   | 0.726      | -            | -                | -                | -         |     7.35 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           48 |     1801 | 2024-03-18 | Insilio           | W   | 0.719      | -            | -                | -                | -         |     9.18 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           47 |     1870 | 2024-03-15 | ECLOT             | W   | 0.697      | -            | -                | -                | -         |    11.63 | Blytz, Dytor, forsyy, kreaz, nbqq         |
|           46 |     1939 | 2024-03-13 | BLEED             | L   | 0.684      | -            | -                | -                | -         |    -4.37 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           45 |     1987 | 2024-03-11 | Nemiga            | L   | 0.672      | -            | -                | -                | -         |    -4.02 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r      |
|           44 |     2012 | 2024-03-10 | Sampi             | L   | 0.664      | -            | -                | -                | -         |   -12.22 | Cabbi, IceBerg, Kristou, Lucky, MistR     |
|           43 |     2038 | 2024-03-09 | Permitta          | W   | 0.658      | -            | -                | -                | -         |     9.23 | Cabbi, IceBerg, larsen, Lucky, MistR      |
|           42 |     2057 | 2024-03-08 | ALTERNATE aTTaX   | L   | 0.650      | -            | -                | -                | -         |   -12.52 | ArroW, awzek, FreeZe, hyped, skyye        |
|           41 |     2069 | 2024-03-07 | Insilio           | W   | 0.646      | -            | -                | -                | -         |     7.70 | faydett, FpSSS, Pipw, Polt, sugaR         |
|           40 |     2081 | 2024-03-07 | ex-sYnck          | W   | 0.645      | -            | -                | -                | -         |     2.35 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           39 |     2114 | 2024-03-06 | Alliance          | W   | 0.637      | -            | -                | -                | -         |     6.03 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     2148 | 2024-03-05 | Johnny Speeds     | L   | 0.632      | -            | -                | -                | -         |   -11.08 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           37 |     2156 | 2024-03-05 | ALTERNATE aTTaX   | L   | 0.630      | -            | -                | -                | -         |   -12.86 | ArroW, awzek, FreeZe, hyped, skyye        |
|           36 |     2172 | 2024-03-04 | Entropiq          | L   | 0.624      | -            | -                | -                | -         |   -17.33 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           35 |     2216 | 2024-03-02 | brazylijski luz   | W   | 0.611      | -            | -                | -                | -         |     4.09 | Furlan, phr, POLO, Prism, Qlocuu          |
|           34 |     2251 | 2024-02-29 | JANO              | W   | 0.597      | -            | -                | -                | -         |     2.87 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           33 |     2259 | 2024-02-28 | Sampi             | W   | 0.592      | -            | -                | -                | -         |     7.31 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           32 |     2276 | 2024-02-27 | V1dar             | L   | 0.586      | -            | -                | -                | -         |   -17.20 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           31 |     2317 | 2024-02-25 | Sangal            | L   | 0.573      | -            | -                | -                | -         |    -8.42 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           30 |     2323 | 2024-02-25 | PGE Turow         | L   | 0.571      | -            | -                | -                | -         |   -15.91 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           29 |     2363 | 2024-02-24 | MOUZ NXT          | L   | 0.563      | -            | -                | -                | -         |    -8.69 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           28 |     2415 | 2024-02-21 | Sampi             | W   | 0.544      | -            | -                | -                | -         |     5.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO  |
|           27 |     2510 | 2024-02-17 | Zero Tenacity     | W   | 0.518      | -            | -                | -                | -         |     7.81 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           26 |     2659 | 2024-02-11 | ARCRED            | W   | 0.478      | -            | -                | -                | -         |     1.67 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           25 |     2661 | 2024-02-10 | Nemiga            | L   | 0.473      | -            | -                | -                | -         |    -3.71 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           24 |     2664 | 2024-02-10 | AMKAL             | W   | 0.472      | -            | -                | -                | -         |    10.93 | Forester, ICY, Krad, NickelBack, TRAVIS   |
|           23 |     2678 | 2024-02-09 | FORZE             | W   | 0.466      | -            | -                | -                | -         |     6.60 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           22 |     2683 | 2024-02-09 | Insilio           | W   | 0.465      | -            | -                | -                | -         |     5.00 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           21 |     2692 | 2024-02-08 | Nemiga            | L   | 0.460      | -            | -                | -                | -         |    -3.48 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           20 |     2695 | 2024-02-08 | FORZE             | W   | 0.459      | -            | -                | -                | -         |     6.42 | gokushima, r3salt, SELLTER, shalfey, tN1R |
|           19 |     2727 | 2024-02-05 | Entropiq          | W   | 0.437      | -            | -                | -                | -         |     1.44 | c0llins, Marix, mwlky, oxygeN, tiziaN     |
|           18 |     2744 | 2024-02-04 | TMVG              | L   | 0.432      | -            | -                | -                | -         |   -12.78 | shaker, spargo, STOVVE, ykis, yolt        |
|           17 |     2760 | 2024-02-03 | showmakerz        | W   | 0.426      | -            | -                | -                | -         |     0.61 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           16 |     2766 | 2024-02-03 | Gaimin Gladiators | W   | 0.426      | -            | -                | -                | -         |    10.12 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           15 |     2777 | 2024-02-03 | Sampi             | L   | 0.424      | -            | -                | -                | -         |    -8.62 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           14 |     2797 | 2024-02-02 | EYEBALLERS        | L   | 0.419      | -            | -                | -                | -         |    -9.31 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|           13 |     2852 | 2024-01-31 | Permitta          | L   | 0.405      | -            | -                | -                | -         |    -8.76 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           12 |     2863 | 2024-01-30 | Insilio           | W   | 0.400      | -            | -                | -                | -         |     3.95 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|           11 |     2865 | 2024-01-30 | FORZE             | W   | 0.400      | -            | -                | -                | -         |     1.60 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           10 |     2873 | 2024-01-30 | RUSH B            | W   | 0.399      | -            | -                | -                | -         |     1.84 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            9 |     3287 | 2024-01-16 | EYEBALLERS        | L   | 0.306      | -            | -                | -                | -         |    -6.87 | HEAP, JW, Peppzor, Sapec, SHiNE           |
|            8 |     3301 | 2024-01-16 | ARCRED            | W   | 0.306      | -            | -                | -                | -         |     1.09 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            7 |     3515 | 2024-01-09 | Enterprise        | L   | 0.260      | -            | -                | -                | -         |    -5.82 | bajmi, Demho, ex1st, fr3nd, TOAO          |
|            6 |     3535 | 2024-01-09 | ECLOT             | W   | 0.259      | -            | -                | -                | -         |     4.20 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            5 |     3547 | 2024-01-09 | PERA              | W   | 0.259      | -            | -                | -                | -         |     2.45 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            4 |     3591 | 2023-12-20 | NOM               | L   | 0.124      | -            | -                | -                | -         |    -3.54 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            3 |     3596 | 2023-12-19 | ex-Anonymo        | L   | 0.118      | -            | -                | -                | -         |    -3.32 | Cabbi, IceBerg, kwezz, Lucky, MistR       |
|            2 |     3634 | 2023-12-17 | PGE Turow         | W   | 0.104      | -            | -                | -                | -         |     0.39 | b1elany, darko, gRuChA, kadziu, Markoś    |
|            1 |     3871 | 2023-12-05 | EYEBALLERS        | L   | 0.025      | -            | -                | -                | -         |    -0.56 | Cabbi, IceBerg, kwezz, Lucky, MistR       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,361.84)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-09 |      1.000 | $14,000.00     | $14,000.00      |
| 2024-05-02 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-27 |      0.986 | $6,375.00      | $6,285.77       |
| 2024-04-06 |      0.843 | $5,000.00      | $4,216.88       |
| 2024-03-25 |      0.766 | $7,000.00      | $5,359.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
