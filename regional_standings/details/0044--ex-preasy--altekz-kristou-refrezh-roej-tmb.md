### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1073.4<br />
<br />
Final Rank Value (1073.4) = Starting Rank Value (1010.2) + Head To Head Adjustments (63.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.423[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1010.2
- 400 + ( ( 0.320 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1010.2


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
|           59 |      538 | 2024-04-15 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -17.54 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           58 |      566 | 2024-04-13 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -13.33 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           57 |      718 | 2024-04-09 | ECF               | W   | 1.000      | 0.384        | -                | 0.346 (0.133)    | 0 (0.000) |     2.69 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           56 |      771 | 2024-04-07 | Zero Tenacity     | W   | 1.000      | 0.358        | 0.093 (0.033)    | 0.936 (0.336)    | 0 (0.000) |     8.61 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           55 |     1078 | 2024-03-22 | FORZE             | L   | 0.899      | -            | -                | -                | -         |   -13.69 | gokushima, r3salt, SELLTER, shalfey, tN1R      |
|           54 |     1157 | 2024-03-18 | Sampi             | W   | 0.871      | 0.371        | 0.101 (0.033)    | 0.731 (0.236)    | 0 (0.000) |     9.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO       |
|           53 |     1197 | 2024-03-16 | Passion UA        | W   | 0.859      | 0.371        | 0.111 (0.035)    | 0.644 (0.205)    | 0 (0.000) |     9.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX      |
|           52 |     1253 | 2024-03-14 | Entropiq          | W   | 0.844      | -            | -                | -                | 0 (0.000) |     4.22 | Altekz, Kristou, refrezh, roeJ, TMB            |
|           51 |     1324 | 2024-03-11 | Metizport         | L   | 0.827      | -            | -                | -                | -         |   -13.77 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           50 |     1337 | 2024-03-11 | HEROIC            | L   | 0.826      | -            | -                | -                | -         |    -1.39 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           49 |     1340 | 2024-03-11 | Permitta          | W   | 0.825      | 0.371        | 0.053 (0.016)    | 0.979 (0.299)    | 0 (0.000) |     8.62 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           48 |     1390 | 2024-03-09 | K10               | W   | 0.811      | -            | -                | -                | 0 (0.000) |     3.77 | Rezst, shyyne, SLY, Tree60, yz0                |
|           47 |     1433 | 2024-03-07 | Secret            | W   | 0.798      | -            | -                | -                | 0 (0.000) |     1.60 | anarkez, innocent, Kind0, Maze, Tauson         |
|           46 |     1526 | 2024-03-03 | Gaimin Gladiators | W   | 0.774      | 0.143        | 0.189 (0.021)    | -                | 0 (0.000) |    19.40 | kraghen, Nodios, Patti, Queenix, salazar       |
|           45 |     1535 | 2024-03-03 | BetBoom           | W   | 0.773      | 0.143        | 0.563 (0.062)    | 1.000 (0.110)    | -         |    21.01 | danistzz, KaiR0N-, nafany, s1ren, zorte        |
|           44 |     1542 | 2024-03-03 | ECF               | W   | 0.773      | -            | -                | -                | -         |     2.31 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           43 |     1548 | 2024-03-03 | fnatic            | L   | 0.772      | -            | -                | -                | -         |    -7.84 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           42 |     1551 | 2024-03-03 | MOUZ NXT          | L   | 0.771      | -            | -                | -                | -         |   -11.87 | Burmylov, Chr1zN, Neityu, PR, sirah            |
|           41 |     1579 | 2024-03-01 | BetBoom           | L   | 0.760      | -            | -                | -                | -         |    -3.39 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           40 |     1601 | 2024-02-28 | fnatic            | W   | 0.747      | 0.500        | 0.327 (0.122)    | 0.677 (0.253)    | -         |    15.79 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           39 |     1755 | 2024-02-21 | Guild Eagles      | L   | 0.700      | -            | -                | -                | -         |   -11.89 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           38 |     1786 | 2024-02-20 | PERA              | W   | 0.693      | -            | -                | -                | 1 (0.693) |     7.47 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           37 |     1812 | 2024-02-19 | OG                | L   | 0.686      | -            | -                | -                | -         |    -4.27 | F1KU, HeavyGod, k1to, Nexius, regali           |
|           36 |     1815 | 2024-02-19 | HEROIC            | L   | 0.686      | -            | -                | -                | -         |    -0.86 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS         |
|           35 |     2035 | 2024-02-09 | Gaimin Gladiators | W   | 0.618      | 0.371        | 0.189 (0.043)    | 0.990 (0.227)    | -         |    15.73 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           34 |     2051 | 2024-02-08 | TSM               | W   | 0.611      | -            | -                | -                | -         |     4.36 | joel, KWERTZZ, MoDo, valde, Zyphon             |
|           33 |     2057 | 2024-02-07 | Into the Breach   | W   | 0.604      | -            | -                | -                | -         |     4.67 | Bymas, CRUC1AL, misutaaa, rallen, Thomas       |
|           32 |     2066 | 2024-02-06 | Sangal            | W   | 0.598      | 0.371        | -                | 0.797 (0.177)    | -         |     3.85 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           31 |     2077 | 2024-02-05 | Gaimin Gladiators | L   | 0.591      | -            | -                | -                | -         |    -3.33 | kraghen, Nodios, Patti, Queenix, salazar       |
|           30 |     2143 | 2024-02-02 | Metizport         | L   | 0.573      | -            | -                | -                | -         |    -9.88 | adamb, Jackinho, nilo, susp, ztr               |
|           29 |     2161 | 2024-02-02 | SINNERS           | W   | 0.571      | 0.371        | -                | 0.749 (0.158)    | -         |     9.36 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           28 |     2205 | 2024-01-31 | ex-Sprout         | W   | 0.558      | -            | -                | -                | -         |     1.54 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|           27 |     2229 | 2024-01-30 | Entropiq          | W   | 0.551      | -            | -                | -                | -         |     2.95 | c0llins, Marix, mwlky, oxygeN, tiziaN          |
|           26 |     2281 | 2024-01-26 | ex-Sprout         | L   | 0.524      | -            | -                | -                | -         |   -15.37 | Anlelele, cej0t, raalz, Sdaim, sL1m3           |
|           25 |     2383 | 2024-01-21 | 3DMAX             | W   | 0.492      | -            | -                | -                | -         |    10.92 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           24 |     2407 | 2024-01-20 | MOUZ              | L   | 0.487      | -            | -                | -                | -         |    -0.17 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           23 |     2423 | 2024-01-20 | FORZE             | W   | 0.486      | -            | -                | -                | -         |     3.26 | gokushima, kelieN, r3salt, shalfey, tN1R       |
|           22 |     2476 | 2024-01-19 | Spirit            | L   | 0.479      | -            | -                | -                | -         |    -0.21 | chopper, donk, magixx, sh1ro, zont1x           |
|           21 |     2534 | 2024-01-18 | Astralis          | L   | 0.473      | -            | -                | -                | -         |    -0.70 | Altekz, dupreeh, refrezh, roeJ, TMB            |
|           20 |     2539 | 2024-01-18 | Entropiq          | W   | 0.473      | -            | -                | -                | -         |     2.58 | c0llins, Marix, mwlky, oxygeN, tiziaN          |
|           19 |     3063 | 2023-12-12 | ALTERNATE aTTaX   | W   | 0.226      | -            | -                | -                | -         |     3.18 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|           18 |     3065 | 2023-12-12 | BetBoom           | L   | 0.225      | -            | -                | -                | -         |    -0.59 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|           17 |     3072 | 2023-12-11 | 9 Pandas          | W   | 0.220      | -            | -                | -                | -         |     4.43 | clax, d1Ledez, glowiing, iDISBALANCE, seized   |
|           16 |     3076 | 2023-12-11 | GODSENT           | W   | 0.218      | -            | -                | -                | -         |     1.34 | bobeksde, eraa, Golden, Plopski, Ro1f          |
|           15 |     3092 | 2023-12-10 | TSM               | W   | 0.211      | -            | -                | -                | -         |     0.99 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|           14 |     3116 | 2023-12-09 | Endpoint          | W   | 0.205      | -            | -                | -                | -         |     2.18 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|           13 |     3139 | 2023-12-08 | GODSENT           | L   | 0.198      | -            | -                | -                | -         |    -5.03 | bobeksde, eraa, Golden, Plopski, Ro1f          |
|           12 |     3217 | 2023-12-05 | FORZE             | W   | 0.179      | -            | -                | -                | -         |     1.07 | gokushima, Krad, r3salt, shalfey, tN1R         |
|           11 |     3228 | 2023-12-05 | IKLA              | W   | 0.178      | -            | -                | -                | -         |     0.42 | forsyy, Kvem, Lekr0, MICHU, Topa               |
|           10 |     3318 | 2023-11-29 | ex-sYnck          | W   | 0.139      | -            | -                | -                | -         |     0.67 | eku, fejtZ, Jyo, Wahtzz, xezr                  |
|            9 |     3329 | 2023-11-28 | EYEBALLERS        | W   | 0.132      | -            | -                | -                | -         |     1.51 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|            8 |     3378 | 2023-11-25 | Sashi             | W   | 0.111      | -            | -                | -                | -         |     1.96 | Anlelele, Cabbi, IceBerg, kwezz, Lucky         |
|            7 |     3409 | 2023-11-23 | Gaimin Gladiators | L   | 0.098      | -            | -                | -                | -         |    -0.42 | kraghen, Nodios, Patti, Queenix, salazar       |
|            6 |     3460 | 2023-11-19 | paiN              | W   | 0.074      | 0.589        | 0.786 (0.034)    | -                | -         |     2.29 | biguzera, kauez, lux, n1ssim, nqz              |
|            5 |     3493 | 2023-11-18 | paiN              | W   | 0.066      | 0.589        | 0.786 (0.031)    | -                | -         |     2.06 | biguzera, kauez, lux, n1ssim, nqz              |
|            4 |     3522 | 2023-11-17 | BIG               | W   | 0.060      | -            | -                | -                | -         |     1.70 | Altekz, nicoodoz, refrezh, roeJ, TMB           |
|            3 |     3604 | 2023-11-15 | Guild Eagles      | W   | 0.046      | -            | -                | -                | -         |     0.73 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy    |
|            2 |     3609 | 2023-11-15 | ex-Anonymo        | W   | 0.045      | -            | -                | -                | -         |     0.24 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            1 |     3656 | 2023-11-12 | Endpoint          | W   | 0.027      | -            | -                | -                | -         |     0.30 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,074.16)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-03-18 |      0.871 | $11,000.00     | $9,583.15       |
| 2024-02-09 |      0.618 | $11,000.00     | $6,803.01       |
| 2023-12-13 |      0.233 | $1,000.00      | $233.45         |
| 2023-12-12 |      0.226 | $11,000.00     | $2,490.46       |
| 2023-11-19 |      0.074 | $100,000.00    | $7,364.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
