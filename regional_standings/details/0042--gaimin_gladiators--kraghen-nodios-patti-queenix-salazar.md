### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1103.9<br />
<br />
Final Rank Value (1103.9) = Starting Rank Value (1218.0) + Head To Head Adjustments (-114.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.261[<sup>2</sup>](#table1)
- LAN Wins: 0.491[<sup>2</sup>](#table1)

The average of these factors is 0.421<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1218.0
- 400 + ( ( 0.421 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1218.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |       37 | 2024-05-28 | TheMongolz       | L   | 1.000      | -            | -                | -                | -         |    -3.87 | kraghen, Nodios, Patti, Queenix, salazar     |
|           66 |      322 | 2024-05-17 | ENCE             | L   | 1.000      | -            | -                | -                | -         |    -9.58 | kraghen, Nodios, Patti, Queenix, salazar     |
|           65 |      328 | 2024-05-17 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -11.10 | kraghen, Nodios, Patti, Queenix, salazar     |
|           64 |      338 | 2024-05-17 | Rebels           | L   | 1.000      | -            | -                | -                | -         |   -18.66 | kraghen, Nodios, Patti, Queenix, salazar     |
|           63 |      421 | 2024-05-15 | BLEED            | W   | 1.000      | 0.384        | 0.246 (0.095)    | 0.982 (0.377)    | 0 (0.000) |    17.23 | kraghen, Nodios, Patti, Queenix, salazar     |
|           62 |      646 | 2024-05-07 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -26.83 | kraghen, Nodios, Patti, Queenix, salazar     |
|           61 |      656 | 2024-05-06 | 500              | W   | 1.000      | 0.396        | -                | 0.436 (0.173)    | 0 (0.000) |     3.67 | kraghen, Nodios, Patti, Queenix, salazar     |
|           60 |      668 | 2024-05-05 | Sashi            | W   | 1.000      | 0.143        | 0.157 (0.022)    | -                | 0 (0.000) |    18.59 | kraghen, Nodios, Patti, Queenix, salazar     |
|           59 |      674 | 2024-05-05 | Kronjyllands     | W   | 1.000      | -            | -                | -                | -         |     0.50 | kraghen, Nodios, Patti, Queenix, salazar     |
|           58 |      704 | 2024-05-03 | AMKAL            | L   | 1.000      | -            | -                | -                | -         |   -13.20 | kraghen, Nodios, Patti, Queenix, salazar     |
|           57 |      733 | 2024-05-02 | HAVU             | W   | 1.000      | -            | -                | -                | -         |     2.70 | kraghen, Nodios, Patti, Queenix, salazar     |
|           56 |      740 | 2024-05-02 | SINNERS          | W   | 1.000      | 0.435        | -                | 0.728 (0.316)    | -         |     7.42 | kraghen, Nodios, Patti, Queenix, salazar     |
|           55 |      775 | 2024-04-30 | AMKAL            | L   | 1.000      | -            | -                | -                | -         |   -13.92 | kraghen, Nodios, Patti, Queenix, salazar     |
|           54 |      802 | 2024-04-29 | ECF              | L   | 0.998      | -            | -                | -                | -         |   -27.59 | kraghen, Nodios, Patti, Queenix, salazar     |
|           53 |      827 | 2024-04-28 | 9 Pandas         | L   | 0.991      | -            | -                | -                | -         |   -21.52 | kraghen, Nodios, Patti, Queenix, salazar     |
|           52 |      876 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.977      | -            | -                | -                | -         |   -26.60 | kraghen, Nodios, Patti, Queenix, salazar     |
|           51 |      937 | 2024-04-23 | Sashi            | L   | 0.958      | -            | -                | -                | -         |   -18.87 | kraghen, Nodios, Patti, Queenix, salazar     |
|           50 |      952 | 2024-04-22 | BLEED            | L   | 0.951      | -            | -                | -                | -         |   -15.85 | kraghen, Nodios, Patti, Queenix, salazar     |
|           49 |      970 | 2024-04-21 | AMKAL            | W   | 0.945      | 0.384        | 0.144 (0.052)    | 0.736 (0.267)    | -         |    11.56 | kraghen, Nodios, Patti, Queenix, salazar     |
|           48 |     1007 | 2024-04-20 | Nemiga           | W   | 0.937      | 0.384        | 0.363 (0.131)    | 0.647 (0.233)    | -         |    13.02 | kraghen, Nodios, Patti, Queenix, salazar     |
|           47 |     1142 | 2024-04-17 | SINNERS          | W   | 0.917      | 0.384        | -                | 0.728 (0.256)    | -         |     7.42 | kraghen, Nodios, Patti, Queenix, salazar     |
|           46 |     1170 | 2024-04-16 | Permitta         | W   | 0.911      | 0.384        | -                | 1.000 (0.350)    | -         |     4.81 | kraghen, Nodios, Patti, Queenix, salazar     |
|           45 |     1498 | 2024-04-04 | JANO             | W   | 0.830      | -            | -                | -                | -         |     1.18 | allu, doto, Jerppa, juho, Sm1llee            |
|           44 |     1594 | 2024-03-31 | Denmark          | L   | 0.805      | -            | -                | -                | -         |   -24.75 | Altekz, cadiaN, Chr1zN, Kjaerbye, Sukker     |
|           43 |     1714 | 2024-03-23 | G2               | L   | 0.752      | -            | -                | -                | -         |    -1.16 | HooXi, huNter-, m0NESY, nexa, NiKo           |
|           42 |     1723 | 2024-03-22 | FURIA            | W   | 0.746      | 1.000        | 0.138 (0.103)    | 0.402 (0.300)    | 1 (0.746) |    15.39 | arT, chelo, FalleN, KSCERATO, yuurih         |
|           41 |     1744 | 2024-03-21 | Cloud9           | L   | 0.739      | -            | -                | -                | -         |    -5.65 | kraghen, Nodios, Patti, Queenix, salazar     |
|           40 |     1759 | 2024-03-21 | MOUZ             | L   | 0.737      | -            | -                | -                | -         |    -0.39 | kraghen, Nodios, Patti, Queenix, salazar     |
|           39 |     1790 | 2024-03-19 | Imperial         | W   | 0.726      | 0.143        | 0.373 (0.039)    | -                | 1 (0.726) |    18.61 | decenty, felps, HEN1, noway, VINI            |
|           38 |     1804 | 2024-03-18 | Lynn Vision      | W   | 0.718      | -            | -                | -                | 1 (0.718) |     5.99 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr      |
|           37 |     1825 | 2024-03-17 | TheMongolz       | W   | 0.712      | 0.143        | 0.176 (0.018)    | -                | 1 (0.712) |    18.09 | 910, bLitz, mzinho, Senzu, Techno            |
|           36 |     1836 | 2024-03-17 | Cloud9           | L   | 0.711      | -            | -                | -                | -         |    -4.96 | kraghen, Nodios, Patti, Queenix, salazar     |
|           35 |     2171 | 2024-03-04 | BetBoom          | L   | 0.624      | -            | -                | -                | -         |    -5.86 | kraghen, Nodios, Patti, Queenix, salazar     |
|           34 |     2177 | 2024-03-03 | ex-Preasy        | L   | 0.620      | -            | -                | -                | -         |   -15.70 | kraghen, Nodios, Patti, Queenix, salazar     |
|           33 |     2183 | 2024-03-03 | fnatic           | W   | 0.619      | -            | -                | -                | -         |     6.46 | afro, bodyy, KRIMZ, kyuubii, MATYS           |
|           32 |     2195 | 2024-03-03 | SINNERS          | W   | 0.619      | -            | -                | -                | -         |     3.79 | AJTT, beastik, NEOFRAG, oskar, SHOCK         |
|           31 |     2200 | 2024-03-03 | Monte            | W   | 0.617      | 0.500        | 0.181 (0.056)    | 0.611 (0.189)    | -         |    11.91 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k          |
|           30 |     2217 | 2024-03-02 | PARIVISION       | W   | 0.611      | 0.500        | -                | 0.475 (0.145)    | -         |     3.18 | kraghen, Nodios, Patti, Queenix, salazar     |
|           29 |     2242 | 2024-02-29 | 3DMAX            | L   | 0.600      | -            | -                | -                | -         |   -11.71 | kraghen, Nodios, Patti, Queenix, salazar     |
|           28 |     2387 | 2024-02-22 | ex-Guild Eagles  | W   | 0.551      | -            | -                | -                | 1 (0.551) |     3.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy  |
|           27 |     2414 | 2024-02-21 | Apeks            | L   | 0.544      | -            | -                | -                | -         |    -8.68 | kraghen, Nodios, Patti, Queenix, salazar     |
|           26 |     2445 | 2024-02-20 | OG               | W   | 0.537      | 0.143        | 0.278 (0.021)    | -                | 1 (0.537) |     8.06 | F1KU, HeavyGod, k1to, Nexius, regali         |
|           25 |     2460 | 2024-02-19 | MOUZ             | L   | 0.532      | -            | -                | -                | -         |    -0.24 | kraghen, Nodios, Patti, Queenix, salazar     |
|           24 |     2471 | 2024-02-19 | Monte            | W   | 0.531      | -            | -                | -                | 1 (0.531) |    11.13 | kraghen, Nodios, Patti, Queenix, salazar     |
|           23 |     2686 | 2024-02-09 | ex-Preasy        | L   | 0.464      | -            | -                | -                | -         |   -11.99 | Altekz, dupreeh, refrezh, roeJ, TMB          |
|           22 |     2706 | 2024-02-07 | TSM              | W   | 0.451      | -            | -                | -                | -         |     1.09 | joel, KWERTZZ, MoDo, valde, Zyphon           |
|           21 |     2728 | 2024-02-05 | ex-Preasy        | W   | 0.437      | -            | -                | -                | -         |     2.29 | kraghen, Nodios, Patti, Queenix, salazar     |
|           20 |     2766 | 2024-02-03 | Sashi            | L   | 0.426      | -            | -                | -                | -         |   -10.12 | Cabbi, IceBerg, kwezz, Lucky, MistR          |
|           19 |     2810 | 2024-02-02 | Into the Breach  | W   | 0.417      | -            | -                | -                | -         |     0.75 | Bymas, CRUC1AL, misutaaa, rallen, Thomas     |
|           18 |     2893 | 2024-01-28 | Sangal           | W   | 0.384      | 0.371        | 0.166 (0.024)    | -                | -         |     3.85 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr      |
|           17 |     2963 | 2024-01-24 | Alliance         | W   | 0.357      | -            | -                | -                | -         |     1.16 | avid, b0denmaster, PlesseN, robiin, twist    |
|           16 |     3036 | 2024-01-21 | PERA             | W   | 0.338      | -            | -                | -                | -         |     1.48 | Aaron, DGL, Kamion, msN, Porya               |
|           15 |     3062 | 2024-01-20 | fnatic           | L   | 0.333      | -            | -                | -                | -         |    -6.64 | afro, bodyy, KRIMZ, kyuubii, MATYS           |
|           14 |     3080 | 2024-01-20 | Permitta         | W   | 0.331      | -            | -                | -                | -         |     1.48 | bnox, maaryy, mASKED, morelz, Vegi           |
|           13 |     3130 | 2024-01-19 | 9 Pandas         | L   | 0.325      | -            | -                | -                | -         |    -6.21 | kraghen, Nodios, Patti, Queenix, salazar     |
|           12 |     3171 | 2024-01-18 | Nexus            | W   | 0.319      | -            | -                | -                | -         |     1.30 | BTN, ERSIN, ragga, s0und, XELLOW             |
|           11 |     3196 | 2024-01-18 | Natus Vincere    | L   | 0.318      | -            | -                | -                | -         |    -0.25 | kraghen, Nodios, Patti, Queenix, salazar     |
|           10 |     3378 | 2024-01-13 | OG               | W   | 0.287      | -            | -                | -                | -         |     4.38 | kraghen, Nodios, Patti, Queenix, salazar     |
|            9 |     3379 | 2024-01-13 | ex-sYnck         | W   | 0.287      | -            | -                | -                | -         |     0.30 | kraghen, Nodios, Patti, Queenix, salazar     |
|            8 |     3380 | 2024-01-13 | 500              | W   | 0.286      | -            | -                | -                | -         |     0.63 | kraghen, Nodios, Patti, Queenix, salazar     |
|            7 |     3385 | 2024-01-13 | UNiTY            | W   | 0.285      | -            | -                | -                | -         |     0.83 | kraghen, Nodios, Patti, Queenix, salazar     |
|            6 |     3425 | 2024-01-12 | The Witchers     | W   | 0.280      | -            | -                | -                | -         |     0.46 | Dragon, fear, Sdaim, smooya, synyx           |
|            5 |     3519 | 2024-01-09 | fnatic           | L   | 0.260      | -            | -                | -                | -         |    -5.31 | kraghen, Nodios, Patti, Queenix, salazar     |
|            4 |     3529 | 2024-01-09 | brazylijski luz  | W   | 0.259      | -            | -                | -                | -         |     0.65 | Furlan, phr, POLO, Prism, Qlocuu             |
|            3 |     3556 | 2024-01-09 | Untouchables     | W   | 0.258      | -            | -                | -                | -         |     0.08 | datyx, Kjuk, Kokaina, MahaR, onStyle         |
|            2 |     3805 | 2023-12-07 | Sprout           | L   | 0.039      | -            | -                | -                | -         |    -1.20 | AJTT, cej0t, raalz, sL1m3, spooke            |
|            1 |     3837 | 2023-12-06 | 9 Pandas         | L   | 0.032      | -            | -                | -                | -         |    -0.61 | clax, d1Ledez, glowiing, iDISBALANCE, seized |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,200.07)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-22 |      0.951 | $5,000.00      | $4,755.45       |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-02-09 |      0.464 | $5,000.00      | $2,321.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
