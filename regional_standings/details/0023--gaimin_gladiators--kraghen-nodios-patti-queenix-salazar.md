### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1275.4<br />
<br />
Final Rank Value (1275.4) = Starting Rank Value (1346.3) + Head To Head Adjustments (-70.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.553[<sup>1</sup>](#table2)
- Bounty Collected: 0.471[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.672[<sup>2</sup>](#table1)

The average of these factors is 0.490<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1346.3
- 400 + ( ( 0.490 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1346.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |        5 | 2024-04-22 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -21.91 | kraghen, Nodios, Patti, Queenix, salazar     |
|           69 |       23 | 2024-04-21 | AMKAL             | W   | 1.000      | 0.384        | 0.051 (0.020)    | 0.703 (0.270)    | 0 (0.000) |     7.05 | kraghen, Nodios, Patti, Queenix, salazar     |
|           68 |       60 | 2024-04-20 | Nemiga            | W   | 1.000      | 0.384        | -                | 0.607 (0.233)    | 0 (0.000) |     5.14 | kraghen, Nodios, Patti, Queenix, salazar     |
|           67 |      195 | 2024-04-17 | SINNERS           | W   | 1.000      | 0.384        | -                | 0.779 (0.300)    | 0 (0.000) |     7.11 | kraghen, Nodios, Patti, Queenix, salazar     |
|           66 |      223 | 2024-04-16 | Permitta          | W   | 1.000      | 0.384        | -                | 0.970 (0.373)    | -         |     3.79 | kraghen, Nodios, Patti, Queenix, salazar     |
|           65 |      551 | 2024-04-04 | JANO              | W   | 1.000      | -            | -                | -                | -         |     0.85 | allu, doto, Jerppa, juho, Sm1llee            |
|           64 |      647 | 2024-03-31 | Denmark           | L   | 1.000      | -            | -                | -                | -         |   -30.83 | Altekz, cadiaN, Chr1zN, Kjaerbye, Sukker     |
|           63 |      767 | 2024-03-23 | G2                | L   | 1.000      | -            | -                | -                | -         |    -1.55 | HooXi, huNter-, m0NESY, nexa, NiKo           |
|           62 |      776 | 2024-03-22 | FURIA             | W   | 0.994      | 1.000        | 0.316 (0.314)    | 0.522 (0.519)    | 1 (0.994) |    18.91 | arT, chelo, FalleN, KSCERATO, yuurih         |
|           61 |      797 | 2024-03-21 | Cloud9            | L   | 0.987      | -            | -                | -                | -         |    -4.07 | kraghen, Nodios, Patti, Queenix, salazar     |
|           60 |      812 | 2024-03-21 | MOUZ              | L   | 0.985      | -            | -                | -                | -         |    -1.31 | kraghen, Nodios, Patti, Queenix, salazar     |
|           59 |      843 | 2024-03-19 | Imperial          | W   | 0.973      | 0.143        | 0.569 (0.079)    | -                | 1 (0.973) |    25.78 | decenty, felps, HEN1, noway, VINI            |
|           58 |      857 | 2024-03-18 | Lynn Vision       | W   | 0.965      | -            | -                | -                | 1 (0.965) |    10.98 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr      |
|           57 |      878 | 2024-03-17 | TheMongolz        | W   | 0.960      | 0.143        | 0.247 (0.034)    | -                | 1 (0.960) |    18.74 | 910, bLitz, mzinho, Senzu, Techno            |
|           56 |      889 | 2024-03-17 | Cloud9            | L   | 0.958      | -            | -                | -                | -         |    -3.14 | kraghen, Nodios, Patti, Queenix, salazar     |
|           55 |     1224 | 2024-03-04 | BetBoom           | L   | 0.871      | -            | -                | -                | -         |   -15.80 | kraghen, Nodios, Patti, Queenix, salazar     |
|           54 |     1230 | 2024-03-03 | Preasy            | L   | 0.867      | -            | -                | -                | -         |   -20.86 | kraghen, Nodios, Patti, Queenix, salazar     |
|           53 |     1236 | 2024-03-03 | fnatic            | W   | 0.866      | 0.143        | 0.240 (0.030)    | -                | -         |     6.47 | afro, bodyy, KRIMZ, kyuubii, MATYS           |
|           52 |     1248 | 2024-03-03 | SINNERS           | W   | 0.866      | -            | -                | -                | -         |     5.18 | AJTT, beastik, NEOFRAG, oskar, SHOCK         |
|           51 |     1253 | 2024-03-03 | Monte             | W   | 0.864      | 0.500        | 0.236 (0.102)    | 0.598 (0.258)    | -         |    11.49 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k          |
|           50 |     1270 | 2024-03-02 | PARIVISION        | W   | 0.859      | 0.500        | -                | 0.358 (0.154)    | -         |     1.03 | kraghen, Nodios, Patti, Queenix, salazar     |
|           49 |     1295 | 2024-02-29 | 3DMAX             | L   | 0.847      | -            | -                | -                | -         |   -21.77 | kraghen, Nodios, Patti, Queenix, salazar     |
|           48 |     1440 | 2024-02-22 | Guild Eagles      | W   | 0.799      | -            | -                | -                | 1 (0.799) |     4.92 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy  |
|           47 |     1467 | 2024-02-21 | Apeks             | L   | 0.792      | -            | -                | -                | -         |   -11.98 | kraghen, Nodios, Patti, Queenix, salazar     |
|           46 |     1498 | 2024-02-20 | OG                | W   | 0.784      | 0.143        | 0.497 (0.056)    | -                | 1 (0.784) |    12.57 | F1KU, HeavyGod, k1to, Nexius, regali         |
|           45 |     1513 | 2024-02-19 | MOUZ              | L   | 0.780      | -            | -                | -                | -         |    -1.00 | kraghen, Nodios, Patti, Queenix, salazar     |
|           44 |     1524 | 2024-02-19 | Monte             | W   | 0.778      | 0.143        | 0.236 (0.026)    | -                | 1 (0.778) |    11.81 | kraghen, Nodios, Patti, Queenix, salazar     |
|           43 |     1739 | 2024-02-09 | Preasy            | L   | 0.712      | -            | -                | -                | -         |   -17.16 | Altekz, dupreeh, refrezh, roeJ, TMB          |
|           42 |     1759 | 2024-02-07 | TSM               | W   | 0.698      | -            | -                | -                | -         |     1.57 | joel, KWERTZZ, MoDo, valde, Zyphon           |
|           41 |     1781 | 2024-02-05 | Preasy            | W   | 0.685      | 0.371        | 0.205 (0.052)    | 0.723 (0.183)    | -         |     4.68 | kraghen, Nodios, Patti, Queenix, salazar     |
|           40 |     1819 | 2024-02-03 | Sashi             | L   | 0.673      | -            | -                | -                | -         |   -19.04 | Cabbi, IceBerg, kwezz, Lucky, MistR          |
|           39 |     1863 | 2024-02-02 | Into the Breach   | W   | 0.665      | -            | -                | -                | -         |     1.56 | Bymas, CRUC1AL, misutaaa, rallen, Thomas     |
|           38 |     1946 | 2024-01-28 | Sangal            | W   | 0.632      | 0.371        | -                | 0.685 (0.160)    | -         |     0.68 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr      |
|           37 |     2016 | 2024-01-24 | Alliance          | W   | 0.605      | 0.371        | -                | 0.855 (0.191)    | -         |     1.74 | avid, b0denmaster, PlesseN, robiin, twist    |
|           36 |     2089 | 2024-01-21 | PERA              | W   | 0.585      | -            | -                | -                | -         |     1.28 | Aaron, DGL, Kamion, msN, Porya               |
|           35 |     2115 | 2024-01-20 | fnatic            | L   | 0.580      | -            | -                | -                | -         |   -13.75 | afro, bodyy, KRIMZ, kyuubii, MATYS           |
|           34 |     2133 | 2024-01-20 | Permitta          | W   | 0.578      | -            | -                | -                | -         |     1.42 | bnox, maaryy, mASKED, morelz, Vegi           |
|           33 |     2183 | 2024-01-19 | 9 Pandas          | L   | 0.572      | -            | -                | -                | -         |   -13.87 | kraghen, Nodios, Patti, Queenix, salazar     |
|           32 |     2224 | 2024-01-18 | Nexus             | W   | 0.567      | -            | -                | -                | -         |     1.26 | BTN, ERSIN, ragga, s0und, XELLOW             |
|           31 |     2249 | 2024-01-18 | Natus Vincere     | L   | 0.566      | -            | -                | -                | -         |    -0.51 | kraghen, Nodios, Patti, Queenix, salazar     |
|           30 |     2431 | 2024-01-13 | OG                | W   | 0.534      | 0.143        | 0.497 (0.038)    | -                | -         |     8.76 | kraghen, Nodios, Patti, Queenix, salazar     |
|           29 |     2432 | 2024-01-13 | ex-sYnck          | W   | 0.534      | -            | -                | -                | -         |     0.83 | kraghen, Nodios, Patti, Queenix, salazar     |
|           28 |     2433 | 2024-01-13 | 500               | W   | 0.534      | -            | -                | -                | -         |     0.43 | kraghen, Nodios, Patti, Queenix, salazar     |
|           27 |     2438 | 2024-01-13 | UNiTY             | W   | 0.532      | -            | -                | -                | -         |     1.26 | kraghen, Nodios, Patti, Queenix, salazar     |
|           26 |     2478 | 2024-01-12 | The Witchers      | W   | 0.527      | -            | -                | -                | -         |     0.86 | Dragon, fear, Sdaim, smooya, synyx           |
|           25 |     2572 | 2024-01-09 | fnatic            | L   | 0.507      | -            | -                | -                | -         |   -12.54 | kraghen, Nodios, Patti, Queenix, salazar     |
|           24 |     2582 | 2024-01-09 | brazylijski luz   | W   | 0.506      | -            | -                | -                | -         |     0.92 | Furlan, phr, POLO, Prism, Qlocuu             |
|           23 |     2609 | 2024-01-09 | Untouchables      | W   | 0.506      | -            | -                | -                | -         |     0.10 | datyx, Kjuk, Kokaina, MahaR, onStyle         |
|           22 |     2858 | 2023-12-07 | Sprout            | L   | 0.287      | -            | -                | -                | -         |    -8.66 | AJTT, cej0t, raalz, sL1m3, spooke            |
|           21 |     2890 | 2023-12-06 | 9 Pandas          | L   | 0.280      | -            | -                | -                | -         |    -6.77 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           20 |     3006 | 2023-11-30 | Guild Eagles      | L   | 0.239      | -            | -                | -                | -         |    -6.44 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy  |
|           19 |     3113 | 2023-11-23 | Preasy            | W   | 0.192      | -            | -                | -                | -         |     0.96 | kraghen, Nodios, Patti, Queenix, salazar     |
|           18 |     3210 | 2023-11-18 | Into the Breach   | L   | 0.158      | -            | -                | -                | -         |    -4.70 | kraghen, Nodios, Patti, Queenix, salazar     |
|           17 |     3229 | 2023-11-17 | 9 Pandas          | W   | 0.153      | -            | -                | -                | -         |     0.99 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           16 |     3267 | 2023-11-16 | EYEBALLERS        | W   | 0.146      | -            | -                | -                | -         |     0.35 | kraghen, Nodios, Patti, Queenix, salazar     |
|           15 |     3304 | 2023-11-15 | ARCRED            | L   | 0.140      | -            | -                | -                | -         |    -4.28 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg     |
|           14 |     3344 | 2023-11-13 | Aurora Young Blud | W   | 0.127      | -            | -                | -                | -         |     0.10 | bl1x1, bluewh1te, easy, malinov, sh1geo      |
|           13 |     3351 | 2023-11-13 | FORZE             | W   | 0.125      | -            | -                | -                | -         |     0.15 | kraghen, Nodios, Patti, Queenix, salazar     |
|           12 |     3412 | 2023-11-11 | PGE Turow         | W   | 0.111      | -            | -                | -                | -         |     0.02 | b1elany, darko, gRuChA, kadziu, snatchie     |
|           11 |     3435 | 2023-11-09 | The Witchers      | L   | 0.100      | -            | -                | -                | -         |    -3.01 | fear, Sdaim, smooya, soulfly, synyx          |
|           10 |     3440 | 2023-11-09 | ECLOT             | W   | 0.098      | -            | -                | -                | -         |     0.09 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio    |
|            9 |     3458 | 2023-11-08 | Project G         | L   | 0.094      | -            | -                | -                | -         |    -2.92 | Dragon, Lekr0, mwlky, xfl0ud, ztr            |
|            8 |     3468 | 2023-11-08 | SINNERS           | L   | 0.091      | -            | -                | -                | -         |    -2.36 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO        |
|            7 |     3488 | 2023-11-07 | IKLA              | L   | 0.086      | -            | -                | -                | -         |    -2.67 | draken, Kvem, MICHU, Topa, xicoz             |
|            6 |     3496 | 2023-11-06 | Preasy            | W   | 0.080      | -            | -                | -                | -         |     0.34 | Altekz, nicoodoz, refrezh, TMB, tOPZ         |
|            5 |     3517 | 2023-11-05 | Spirit Academy    | W   | 0.073      | -            | -                | -                | -         |     0.08 | alpha, baz, keegaN, Magnojez, notineki       |
|            4 |     3645 | 2023-10-31 | Entropiq          | W   | 0.039      | -            | -                | -                | -         |     0.04 | c0llins, forsyy, Marix, oxygeN, tiziaN       |
|            3 |     3799 | 2023-10-27 | 3DMAX             | L   | 0.011      | -            | -                | -                | -         |    -0.30 | Djoko, Ex3rcice, hAdji, Lucky, Maka          |
|            2 |     3808 | 2023-10-26 | Virtus.pro        | W   | 0.007      | -            | -                | -                | -         |     0.19 | kraghen, Nodios, Patti, Queenix, salazar     |
|            1 |     3827 | 2023-10-26 | EYEBALLERS        | L   | 0.005      | -            | -                | -                | -         |    -0.14 | HEAP, JW, Peppzor, Sapec, SHiNE              |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,622.86)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-02-09 |      0.712 | $5,000.00      | $3,558.81       |
| 2023-11-18 |      0.160 | $5,000.00      | $798.03         |
| 2023-11-09 |      0.100 | $2,000.00      | $200.17         |
| 2023-10-27 |      0.013 | $5,000.00      | $65.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
