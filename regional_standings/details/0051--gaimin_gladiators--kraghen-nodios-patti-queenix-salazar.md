### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1086.3<br />
<br />
Final Rank Value (1086.3) = Starting Rank Value (1220.0) + Head To Head Adjustments (-133.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.478[<sup>1</sup>](#table2)
- Bounty Collected: 0.464[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.423[<sup>2</sup>](#table1)

The average of these factors is 0.411<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1220.0
- 400 + ( ( 0.411 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1220.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |       19 | 2024-06-10 | Enterprise       | L   | 1.000      | -            | -                | -                | -         |   -23.23 | kraghen, Nodios, Patti, Queenix, salazar    |
|           70 |       74 | 2024-06-09 | 5W               | L   | 1.000      | -            | -                | -                | -         |   -28.99 | kraghen, Nodios, Patti, Queenix, salazar    |
|           69 |      117 | 2024-06-08 | EYEBALLERS       | W   | 1.000      | 0.450        | -                | 0.722 (0.325)    | 0 (0.000) |     7.60 | kraghen, Nodios, Patti, Queenix, salazar    |
|           68 |      174 | 2024-06-07 | 3DMAX            | L   | 1.000      | -            | -                | -                | -         |   -13.93 | kraghen, Nodios, Patti, Queenix, salazar    |
|           67 |      238 | 2024-06-06 | Astralis Talent  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.69 | kraghen, Nodios, Patti, Queenix, salazar    |
|           66 |      493 | 2024-05-30 | Lynn Vision      | L   | 1.000      | -            | -                | -                | -         |   -15.25 | kraghen, Nodios, Patti, Queenix, salazar    |
|           65 |      537 | 2024-05-28 | The MongolZ      | L   | 1.000      | -            | -                | -                | -         |    -0.80 | kraghen, Nodios, Patti, Queenix, salazar    |
|           64 |      822 | 2024-05-17 | ENCE             | L   | 1.000      | -            | -                | -                | -         |    -8.75 | kraghen, Nodios, Patti, Queenix, salazar    |
|           63 |      828 | 2024-05-17 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -11.15 | kraghen, Nodios, Patti, Queenix, salazar    |
|           62 |      838 | 2024-05-17 | Rebels           | L   | 1.000      | -            | -                | -                | -         |   -19.08 | kraghen, Nodios, Patti, Queenix, salazar    |
|           61 |      921 | 2024-05-15 | BLEED            | W   | 1.000      | 0.384        | 0.349 (0.134)    | 1.000 (0.384)    | 0 (0.000) |    19.89 | kraghen, Nodios, Patti, Queenix, salazar    |
|           60 |     1146 | 2024-05-07 | Grannys Knockers | L   | 0.971      | -            | -                | -                | -         |   -26.83 | kraghen, Nodios, Patti, Queenix, salazar    |
|           59 |     1156 | 2024-05-06 | 500              | W   | 0.966      | -            | -                | -                | -         |     3.14 | kraghen, Nodios, Patti, Queenix, salazar    |
|           58 |     1168 | 2024-05-05 | Sashi            | W   | 0.960      | 0.143        | 0.174 (0.024)    | -                | -         |    18.49 | kraghen, Nodios, Patti, Queenix, salazar    |
|           57 |     1174 | 2024-05-05 | Kronjyllands     | W   | 0.959      | -            | -                | -                | -         |     0.37 | kraghen, Nodios, Patti, Queenix, salazar    |
|           56 |     1204 | 2024-05-03 | AMKAL            | L   | 0.946      | -            | -                | -                | -         |   -12.74 | kraghen, Nodios, Patti, Queenix, salazar    |
|           55 |     1233 | 2024-05-02 | HAVU             | W   | 0.939      | -            | -                | -                | -         |     2.30 | kraghen, Nodios, Patti, Queenix, salazar    |
|           54 |     1240 | 2024-05-02 | SINNERS          | W   | 0.938      | 0.435        | 0.045 (0.018)    | 0.844 (0.344)    | -         |     8.54 | kraghen, Nodios, Patti, Queenix, salazar    |
|           53 |     1275 | 2024-04-30 | AMKAL            | L   | 0.927      | -            | -                | -                | -         |   -13.43 | kraghen, Nodios, Patti, Queenix, salazar    |
|           52 |     1302 | 2024-04-29 | ECF              | L   | 0.919      | -            | -                | -                | -         |   -25.94 | kraghen, Nodios, Patti, Queenix, salazar    |
|           51 |     1327 | 2024-04-28 | 9 Pandas         | L   | 0.911      | -            | -                | -                | -         |   -20.15 | kraghen, Nodios, Patti, Queenix, salazar    |
|           50 |     1376 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.898      | -            | -                | -                | -         |   -23.98 | kraghen, Nodios, Patti, Queenix, salazar    |
|           49 |     1437 | 2024-04-23 | Sashi            | L   | 0.879      | -            | -                | -                | -         |   -16.28 | kraghen, Nodios, Patti, Queenix, salazar    |
|           48 |     1452 | 2024-04-22 | BLEED            | L   | 0.872      | -            | -                | -                | -         |   -10.52 | kraghen, Nodios, Patti, Queenix, salazar    |
|           47 |     1470 | 2024-04-21 | AMKAL            | W   | 0.866      | 0.384        | 0.143 (0.047)    | 0.711 (0.236)    | -         |    10.68 | kraghen, Nodios, Patti, Queenix, salazar    |
|           46 |     1507 | 2024-04-20 | Nemiga           | W   | 0.858      | 0.384        | 0.335 (0.110)    | 0.638 (0.210)    | -         |    12.30 | kraghen, Nodios, Patti, Queenix, salazar    |
|           45 |     1642 | 2024-04-17 | SINNERS          | W   | 0.838      | 0.384        | -                | 0.844 (0.272)    | -         |     9.04 | kraghen, Nodios, Patti, Queenix, salazar    |
|           44 |     1670 | 2024-04-16 | Permitta         | W   | 0.832      | 0.384        | -                | 0.972 (0.311)    | -         |     4.72 | kraghen, Nodios, Patti, Queenix, salazar    |
|           43 |     1998 | 2024-04-04 | JANO             | W   | 0.751      | -            | -                | -                | -         |     0.94 | allu, doto, Jerppa, juho, Sm1llee           |
|           42 |     2094 | 2024-03-31 | Denmark          | L   | 0.726      | -            | -                | -                | -         |   -22.41 | Altekz, cadiaN, Chr1zN, Kjaerbye, Sukker    |
|           41 |     2214 | 2024-03-23 | G2               | L   | 0.673      | -            | -                | -                | -         |    -0.67 | HooXi, huNter-, m0NESY, nexa, NiKo          |
|           40 |     2223 | 2024-03-22 | FURIA            | W   | 0.667      | 1.000        | 0.249 (0.166)    | 0.590 (0.394)    | 1 (0.667) |    18.25 | arT, chelo, FalleN, KSCERATO, yuurih        |
|           39 |     2244 | 2024-03-21 | Cloud9           | L   | 0.660      | -            | -                | -                | -         |    -6.50 | kraghen, Nodios, Patti, Queenix, salazar    |
|           38 |     2259 | 2024-03-21 | MOUZ             | L   | 0.658      | -            | -                | -                | -         |    -0.35 | kraghen, Nodios, Patti, Queenix, salazar    |
|           37 |     2290 | 2024-03-19 | Imperial         | W   | 0.647      | 0.143        | 0.415 (0.038)    | -                | 1 (0.647) |    16.21 | decenty, felps, HEN1, noway, VINI           |
|           36 |     2304 | 2024-03-18 | Lynn Vision      | W   | 0.638      | -            | -                | -                | 1 (0.638) |     9.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr     |
|           35 |     2325 | 2024-03-17 | The MongolZ      | W   | 0.633      | 0.143        | 0.978 (0.088)    | -                | 1 (0.633) |    19.47 | 910, bLitz, mzinho, Senzu, Techno           |
|           34 |     2336 | 2024-03-17 | Cloud9           | L   | 0.632      | -            | -                | -                | -         |    -5.74 | kraghen, Nodios, Patti, Queenix, salazar    |
|           33 |     2671 | 2024-03-04 | BetBoom          | L   | 0.545      | -            | -                | -                | -         |    -1.83 | kraghen, Nodios, Patti, Queenix, salazar    |
|           32 |     2677 | 2024-03-03 | ex-Preasy        | L   | 0.541      | -            | -                | -                | -         |   -14.02 | kraghen, Nodios, Patti, Queenix, salazar    |
|           31 |     2683 | 2024-03-03 | fnatic           | W   | 0.540      | -            | -                | -                | -         |    10.11 | afro, bodyy, KRIMZ, kyuubii, MATYS          |
|           30 |     2695 | 2024-03-03 | SINNERS          | W   | 0.540      | -            | -                | -                | -         |     5.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK        |
|           29 |     2700 | 2024-03-03 | Monte            | W   | 0.538      | 0.500        | 0.179 (0.048)    | 0.686 (0.184)    | -         |    10.23 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k         |
|           28 |     2717 | 2024-03-02 | PARIVISION       | W   | 0.532      | 0.500        | -                | 0.527 (0.140)    | -         |     3.46 | kraghen, Nodios, Patti, Queenix, salazar    |
|           27 |     2742 | 2024-02-29 | 3DMAX            | L   | 0.520      | -            | -                | -                | -         |    -9.21 | kraghen, Nodios, Patti, Queenix, salazar    |
|           26 |     2887 | 2024-02-22 | M1X KS           | W   | 0.472      | -            | -                | -                | 1 (0.472) |     5.25 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           25 |     2914 | 2024-02-21 | Apeks            | L   | 0.465      | -            | -                | -                | -         |    -8.61 | kraghen, Nodios, Patti, Queenix, salazar    |
|           24 |     2945 | 2024-02-20 | OG               | W   | 0.458      | -            | -                | -                | 1 (0.458) |     6.52 | F1KU, HeavyGod, k1to, Nexius, regali        |
|           23 |     2960 | 2024-02-19 | MOUZ             | L   | 0.453      | -            | -                | -                | -         |    -0.19 | kraghen, Nodios, Patti, Queenix, salazar    |
|           22 |     2971 | 2024-02-19 | Monte            | W   | 0.452      | -            | -                | -                | 1 (0.452) |     9.25 | kraghen, Nodios, Patti, Queenix, salazar    |
|           21 |     3186 | 2024-02-09 | ex-Preasy        | L   | 0.385      | -            | -                | -                | -         |   -10.19 | Altekz, dupreeh, refrezh, roeJ, TMB         |
|           20 |     3206 | 2024-02-07 | TSM              | W   | 0.372      | -            | -                | -                | -         |     0.80 | joel, KWERTZZ, MoDo, valde, Zyphon          |
|           19 |     3228 | 2024-02-05 | ex-Preasy        | W   | 0.358      | -            | -                | -                | -         |     1.68 | kraghen, Nodios, Patti, Queenix, salazar    |
|           18 |     3266 | 2024-02-03 | Sashi            | L   | 0.346      | -            | -                | -                | -         |    -7.04 | Cabbi, IceBerg, kwezz, Lucky, MistR         |
|           17 |     3310 | 2024-02-02 | Into the Breach  | W   | 0.338      | -            | -                | -                | -         |     0.57 | Bymas, CRUC1AL, misutaaa, rallen, Thomas    |
|           16 |     3393 | 2024-01-28 | Sangal           | W   | 0.305      | 0.371        | 0.214 (0.024)    | -                | -         |     3.93 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr     |
|           15 |     3463 | 2024-01-24 | Alliance         | W   | 0.278      | -            | -                | -                | -         |     1.19 | avid, b0denmaster, PlesseN, robiin, twist   |
|           14 |     3536 | 2024-01-21 | PERA             | W   | 0.259      | -            | -                | -                | -         |     1.25 | Aaron, DGL, Kamion, msN, Porya              |
|           13 |     3562 | 2024-01-20 | fnatic           | L   | 0.254      | -            | -                | -                | -         |    -2.52 | afro, bodyy, KRIMZ, kyuubii, MATYS          |
|           12 |     3580 | 2024-01-20 | Permitta         | W   | 0.252      | -            | -                | -                | -         |     1.27 | bnox, maaryy, mASKED, morelz, Vegi          |
|           11 |     3630 | 2024-01-19 | 9 Pandas         | L   | 0.246      | -            | -                | -                | -         |    -4.62 | kraghen, Nodios, Patti, Queenix, salazar    |
|           10 |     3671 | 2024-01-18 | Nexus            | W   | 0.240      | -            | -                | -                | -         |     0.94 | BTN, ERSIN, ragga, s0und, XELLOW            |
|            9 |     3696 | 2024-01-18 | Natus Vincere    | L   | 0.239      | -            | -                | -                | -         |    -0.21 | kraghen, Nodios, Patti, Queenix, salazar    |
|            8 |     3878 | 2024-01-13 | OG               | W   | 0.208      | -            | -                | -                | -         |     3.04 | kraghen, Nodios, Patti, Queenix, salazar    |
|            7 |     3879 | 2024-01-13 | ex-sYnck         | W   | 0.207      | -            | -                | -                | -         |     0.13 | kraghen, Nodios, Patti, Queenix, salazar    |
|            6 |     3880 | 2024-01-13 | 500              | W   | 0.207      | -            | -                | -                | -         |     0.45 | kraghen, Nodios, Patti, Queenix, salazar    |
|            5 |     3885 | 2024-01-13 | UNiTY            | W   | 0.206      | -            | -                | -                | -         |     1.38 | kraghen, Nodios, Patti, Queenix, salazar    |
|            4 |     3925 | 2024-01-12 | The Witchers     | W   | 0.201      | -            | -                | -                | -         |     0.29 | Dragon, fear, Sdaim, smooya, synyx          |
|            3 |     4019 | 2024-01-09 | fnatic           | L   | 0.180      | -            | -                | -                | -         |    -1.78 | kraghen, Nodios, Patti, Queenix, salazar    |
|            2 |     4029 | 2024-01-09 | brazylijski luz  | W   | 0.180      | -            | -                | -                | -         |     0.49 | Furlan, phr, POLO, Prism, Qlocuu            |
|            1 |     4056 | 2024-01-09 | Untouchables     | W   | 0.179      | -            | -                | -                | -         |     0.06 | datyx, Kjuk, Kokaina, MahaR, onStyle        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,670.47)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-04 |      0.953 | $2,000.00      | $1,905.79       |
| 2024-05-02 |      0.940 | $1,000.00      | $939.79         |
| 2024-04-22 |      0.872 | $5,000.00      | $4,359.59       |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-02-09 |      0.385 | $5,000.00      | $1,925.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
