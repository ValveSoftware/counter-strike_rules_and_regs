### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [26]( ../standings_europe.md)<br />
Final Rank Value:  1225.1<br />
<br />
Final Rank Value (1225.1) = Starting Rank Value (1349.6) + Head To Head Adjustments (-124.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.580[<sup>1</sup>](#table2)
- Bounty Collected: 0.502[<sup>2</sup>](#table1)
- Opponent Network: 0.285[<sup>2</sup>](#table1)
- LAN Wins: 0.626[<sup>2</sup>](#table1)

The average of these factors is 0.499<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1349.6
- 400 + ( ( 0.499 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1349.6


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
|           73 |        5 | 2024-05-06 | 500               | W   | 1.000      | 0.396        | -                | 0.578 (0.229)    | 0 (0.000) |     2.97 | kraghen, Nodios, Patti, Queenix, salazar     |
|           72 |       17 | 2024-05-05 | Sashi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.32 | kraghen, Nodios, Patti, Queenix, salazar     |
|           71 |       23 | 2024-05-05 | Kronjyllands      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.34 | kraghen, Nodios, Patti, Queenix, salazar     |
|           70 |       53 | 2024-05-03 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -14.96 | kraghen, Nodios, Patti, Queenix, salazar     |
|           69 |       82 | 2024-05-02 | HAVU              | W   | 1.000      | -            | -                | -                | -         |     2.30 | kraghen, Nodios, Patti, Queenix, salazar     |
|           68 |       89 | 2024-05-02 | SINNERS           | W   | 1.000      | 0.435        | -                | 0.749 (0.325)    | -         |     5.96 | kraghen, Nodios, Patti, Queenix, salazar     |
|           67 |      124 | 2024-04-30 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -15.96 | kraghen, Nodios, Patti, Queenix, salazar     |
|           66 |      151 | 2024-04-29 | ECF               | L   | 1.000      | -            | -                | -                | -         |   -29.98 | kraghen, Nodios, Patti, Queenix, salazar     |
|           65 |      176 | 2024-04-28 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -24.89 | kraghen, Nodios, Patti, Queenix, salazar     |
|           64 |      225 | 2024-04-26 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -28.40 | kraghen, Nodios, Patti, Queenix, salazar     |
|           63 |      286 | 2024-04-23 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -21.60 | kraghen, Nodios, Patti, Queenix, salazar     |
|           62 |      301 | 2024-04-22 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -20.75 | kraghen, Nodios, Patti, Queenix, salazar     |
|           61 |      319 | 2024-04-21 | AMKAL             | W   | 1.000      | 0.384        | 0.200 (0.077)    | 0.851 (0.327)    | -         |     9.59 | kraghen, Nodios, Patti, Queenix, salazar     |
|           60 |      356 | 2024-04-20 | Nemiga            | W   | 1.000      | 0.384        | 0.667 (0.256)    | 0.724 (0.278)    | -         |    11.40 | kraghen, Nodios, Patti, Queenix, salazar     |
|           59 |      491 | 2024-04-17 | SINNERS           | W   | 1.000      | 0.384        | -                | 0.749 (0.288)    | -         |     6.84 | kraghen, Nodios, Patti, Queenix, salazar     |
|           58 |      519 | 2024-04-16 | Permitta          | W   | 1.000      | 0.384        | -                | 0.979 (0.376)    | -         |     4.05 | kraghen, Nodios, Patti, Queenix, salazar     |
|           57 |      847 | 2024-04-04 | JANO              | W   | 0.984      | -            | -                | -                | -         |     0.87 | allu, doto, Jerppa, juho, Sm1llee            |
|           56 |      943 | 2024-03-31 | Denmark           | L   | 0.959      | -            | -                | -                | -         |   -29.72 | Altekz, cadiaN, Chr1zN, Kjaerbye, Sukker     |
|           55 |     1063 | 2024-03-23 | G2                | L   | 0.906      | -            | -                | -                | -         |    -1.84 | HooXi, huNter-, m0NESY, nexa, NiKo           |
|           54 |     1072 | 2024-03-22 | FURIA             | W   | 0.901      | 1.000        | 0.371 (0.334)    | 0.484 (0.436)    | 1 (0.901) |    19.09 | arT, chelo, FalleN, KSCERATO, yuurih         |
|           53 |     1093 | 2024-03-21 | Cloud9            | L   | 0.893      | -            | -                | -                | -         |    -4.79 | kraghen, Nodios, Patti, Queenix, salazar     |
|           52 |     1108 | 2024-03-21 | MOUZ              | L   | 0.891      | -            | -                | -                | -         |    -1.50 | kraghen, Nodios, Patti, Queenix, salazar     |
|           51 |     1139 | 2024-03-19 | Imperial          | W   | 0.880      | 0.143        | 0.656 (0.082)    | -                | 1 (0.880) |    22.73 | decenty, felps, HEN1, noway, VINI            |
|           50 |     1153 | 2024-03-18 | Lynn Vision       | W   | 0.872      | -            | -                | -                | 1 (0.872) |     7.95 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr      |
|           49 |     1174 | 2024-03-17 | TheMongolz        | W   | 0.866      | 0.143        | 0.253 (0.031)    | -                | 1 (0.866) |    18.47 | 910, bLitz, mzinho, Senzu, Techno            |
|           48 |     1185 | 2024-03-17 | Cloud9            | L   | 0.865      | -            | -                | -                | -         |    -3.92 | kraghen, Nodios, Patti, Queenix, salazar     |
|           47 |     1520 | 2024-03-04 | BetBoom           | L   | 0.778      | -            | -                | -                | -         |    -9.83 | kraghen, Nodios, Patti, Queenix, salazar     |
|           46 |     1526 | 2024-03-03 | ex-Preasy         | L   | 0.774      | -            | -                | -                | -         |   -19.40 | kraghen, Nodios, Patti, Queenix, salazar     |
|           45 |     1532 | 2024-03-03 | fnatic            | W   | 0.773      | 0.143        | 0.327 (0.036)    | -                | -         |     7.75 | afro, bodyy, KRIMZ, kyuubii, MATYS           |
|           44 |     1544 | 2024-03-03 | SINNERS           | W   | 0.773      | -            | -                | -                | -         |     4.01 | AJTT, beastik, NEOFRAG, oskar, SHOCK         |
|           43 |     1549 | 2024-03-03 | Monte             | W   | 0.771      | 0.500        | 0.188 (0.073)    | 0.589 (0.227)    | -         |    14.14 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k          |
|           42 |     1566 | 2024-03-02 | PARIVISION        | W   | 0.765      | 0.500        | -                | 0.544 (0.208)    | -         |     2.29 | kraghen, Nodios, Patti, Queenix, salazar     |
|           41 |     1591 | 2024-02-29 | 3DMAX             | L   | 0.754      | -            | -                | -                | -         |   -16.94 | kraghen, Nodios, Patti, Queenix, salazar     |
|           40 |     1736 | 2024-02-22 | Guild Eagles      | W   | 0.706      | -            | -                | -                | 1 (0.706) |     3.94 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy  |
|           39 |     1763 | 2024-02-21 | Apeks             | L   | 0.698      | -            | -                | -                | -         |    -9.06 | kraghen, Nodios, Patti, Queenix, salazar     |
|           38 |     1794 | 2024-02-20 | OG                | W   | 0.691      | 0.143        | 0.580 (0.057)    | -                | 1 (0.691) |    10.77 | F1KU, HeavyGod, k1to, Nexius, regali         |
|           37 |     1809 | 2024-02-19 | MOUZ              | L   | 0.687      | -            | -                | -                | -         |    -1.04 | kraghen, Nodios, Patti, Queenix, salazar     |
|           36 |     1820 | 2024-02-19 | Monte             | W   | 0.685      | -            | -                | -                | 1 (0.685) |    14.08 | kraghen, Nodios, Patti, Queenix, salazar     |
|           35 |     2035 | 2024-02-09 | ex-Preasy         | L   | 0.618      | -            | -                | -                | -         |   -15.73 | Altekz, dupreeh, refrezh, roeJ, TMB          |
|           34 |     2055 | 2024-02-07 | TSM               | W   | 0.605      | -            | -                | -                | -         |     1.19 | joel, KWERTZZ, MoDo, valde, Zyphon           |
|           33 |     2077 | 2024-02-05 | ex-Preasy         | W   | 0.591      | 0.371        | 0.173 (0.038)    | -                | -         |     3.33 | kraghen, Nodios, Patti, Queenix, salazar     |
|           32 |     2115 | 2024-02-03 | Sashi             | L   | 0.580      | -            | -                | -                | -         |   -15.35 | Cabbi, IceBerg, kwezz, Lucky, MistR          |
|           31 |     2159 | 2024-02-02 | Into the Breach   | W   | 0.572      | -            | -                | -                | -         |     0.98 | Bymas, CRUC1AL, misutaaa, rallen, Thomas     |
|           30 |     2242 | 2024-01-28 | Sangal            | W   | 0.538      | 0.371        | -                | 0.797 (0.159)    | -         |     0.76 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr      |
|           29 |     2312 | 2024-01-24 | Alliance          | W   | 0.511      | -            | -                | -                | -         |     1.22 | avid, b0denmaster, PlesseN, robiin, twist    |
|           28 |     2385 | 2024-01-21 | PERA              | W   | 0.492      | -            | -                | -                | -         |     1.45 | Aaron, DGL, Kamion, msN, Porya               |
|           27 |     2411 | 2024-01-20 | fnatic            | L   | 0.487      | -            | -                | -                | -         |    -9.84 | afro, bodyy, KRIMZ, kyuubii, MATYS           |
|           26 |     2429 | 2024-01-20 | Permitta          | W   | 0.485      | -            | -                | -                | -         |     1.52 | bnox, maaryy, mASKED, morelz, Vegi           |
|           25 |     2479 | 2024-01-19 | 9 Pandas          | L   | 0.479      | -            | -                | -                | -         |   -11.70 | kraghen, Nodios, Patti, Queenix, salazar     |
|           24 |     2520 | 2024-01-18 | Nexus             | W   | 0.473      | -            | -                | -                | -         |     1.25 | BTN, ERSIN, ragga, s0und, XELLOW             |
|           23 |     2545 | 2024-01-18 | Natus Vincere     | L   | 0.472      | -            | -                | -                | -         |    -0.42 | kraghen, Nodios, Patti, Queenix, salazar     |
|           22 |     2727 | 2024-01-13 | OG                | W   | 0.441      | 0.143        | 0.580 (0.037)    | -                | -         |     6.94 | kraghen, Nodios, Patti, Queenix, salazar     |
|           21 |     2728 | 2024-01-13 | ex-sYnck          | W   | 0.441      | -            | -                | -                | -         |     0.48 | kraghen, Nodios, Patti, Queenix, salazar     |
|           20 |     2729 | 2024-01-13 | 500               | W   | 0.440      | -            | -                | -                | -         |     0.65 | kraghen, Nodios, Patti, Queenix, salazar     |
|           19 |     2734 | 2024-01-13 | UNiTY             | W   | 0.439      | -            | -                | -                | -         |     0.82 | kraghen, Nodios, Patti, Queenix, salazar     |
|           18 |     2774 | 2024-01-12 | The Witchers      | W   | 0.434      | -            | -                | -                | -         |     0.54 | Dragon, fear, Sdaim, smooya, synyx           |
|           17 |     2868 | 2024-01-09 | fnatic            | L   | 0.414      | -            | -                | -                | -         |    -8.70 | kraghen, Nodios, Patti, Queenix, salazar     |
|           16 |     2878 | 2024-01-09 | brazylijski luz   | W   | 0.413      | -            | -                | -                | -         |     0.71 | Furlan, phr, POLO, Prism, Qlocuu             |
|           15 |     2905 | 2024-01-09 | Untouchables      | W   | 0.413      | -            | -                | -                | -         |     0.07 | datyx, Kjuk, Kokaina, MahaR, onStyle         |
|           14 |     3154 | 2023-12-07 | Sprout            | L   | 0.193      | -            | -                | -                | -         |    -5.90 | AJTT, cej0t, raalz, sL1m3, spooke            |
|           13 |     3186 | 2023-12-06 | 9 Pandas          | L   | 0.186      | -            | -                | -                | -         |    -4.54 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|           12 |     3302 | 2023-11-30 | Guild Eagles      | L   | 0.146      | -            | -                | -                | -         |    -3.98 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy  |
|           11 |     3409 | 2023-11-23 | ex-Preasy         | W   | 0.098      | -            | -                | -                | -         |     0.42 | kraghen, Nodios, Patti, Queenix, salazar     |
|           10 |     3506 | 2023-11-18 | Into the Breach   | L   | 0.064      | -            | -                | -                | -         |    -1.95 | kraghen, Nodios, Patti, Queenix, salazar     |
|            9 |     3525 | 2023-11-17 | 9 Pandas          | W   | 0.059      | -            | -                | -                | -         |     0.39 | clax, d1Ledez, glowiing, iDISBALANCE, seized |
|            8 |     3563 | 2023-11-16 | EYEBALLERS        | W   | 0.052      | -            | -                | -                | -         |     0.14 | kraghen, Nodios, Patti, Queenix, salazar     |
|            7 |     3600 | 2023-11-15 | ARCRED            | L   | 0.046      | -            | -                | -                | -         |    -1.42 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg     |
|            6 |     3640 | 2023-11-13 | Aurora Young Blud | W   | 0.033      | -            | -                | -                | -         |     0.02 | bl1x1, bluewh1te, easy, malinov, sh1geo      |
|            5 |     3647 | 2023-11-13 | FORZE             | W   | 0.032      | -            | -                | -                | -         |     0.04 | kraghen, Nodios, Patti, Queenix, salazar     |
|            4 |     3708 | 2023-11-11 | PGE Turow         | W   | 0.018      | -            | -                | -                | -         |     0.00 | b1elany, darko, gRuChA, kadziu, snatchie     |
|            3 |     3731 | 2023-11-09 | The Witchers      | L   | 0.006      | -            | -                | -                | -         |    -0.19 | fear, Sdaim, smooya, soulfly, synyx          |
|            2 |     3736 | 2023-11-09 | ECLOT             | W   | 0.005      | -            | -                | -                | -         |     0.00 | anarkez, K1-FiDa, nbqq, NEOFRAG, Valencio    |
|            1 |     3754 | 2023-11-08 | Project G         | L   | 0.000      | -            | -                | -                | -         |    -0.01 | Dragon, Lekr0, mwlky, xfl0ud, ztr            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,628.43)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2024-02-09 |      0.618 | $5,000.00      | $3,092.28       |
| 2023-11-18 |      0.066 | $5,000.00      | $331.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
