### Roster Details<br />
Team Name: ex-Guild Eagles<br />
Roster: gxx-, juanflatroo, rigoN, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  923.7<br />
<br />
Final Rank Value (923.7) = Starting Rank Value (955.8) + Head To Head Adjustments (-32.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.178[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 955.8
- 400 + ( ( 0.286 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 955.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |       87 | 2024-05-25 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.46 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           54 |       98 | 2024-05-25 | Illyrians         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.49 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           53 |      105 | 2024-05-24 | Zero Tenacity     | W   | 1.000      | 0.273        | 0.147 (0.040)    | 1.000 (0.273)    | 0 (0.000) |    21.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           52 |      110 | 2024-05-24 | iNation           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.91 | aidKiT, c0llins, Dragon, emi, xicoz           |
|           51 |      342 | 2024-05-17 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -5.02 | Cabbi, IceBerg, kwezz, Lucky, MistR           |
|           50 |      684 | 2024-05-05 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -13.61 | buster, Jyo, lattykk, neaLaN, Ryujin          |
|           49 |      796 | 2024-04-29 | EYEBALLERS        | L   | 0.999      | -            | -                | -                | -         |   -18.57 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           48 |      837 | 2024-04-27 | Insilio           | L   | 0.986      | -            | -                | -                | -         |   -15.61 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           47 |      865 | 2024-04-26 | BLEED             | L   | 0.979      | -            | -                | -                | -         |    -5.67 | CeRq, CYPHER, faveN, hampus, VLDN             |
|           46 |      897 | 2024-04-25 | PARIVISION        | L   | 0.972      | -            | -                | -                | -         |   -17.19 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           45 |      923 | 2024-04-24 | Zero Tenacity     | W   | 0.964      | 0.435        | 0.147 (0.061)    | 1.000 (0.419)    | 0 (0.000) |    15.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           44 |      949 | 2024-04-22 | 3DMAX             | L   | 0.952      | -            | -                | -                | -         |    -8.43 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           43 |      961 | 2024-04-22 | Sangal            | W   | 0.950      | 0.435        | 0.166 (0.069)    | 0.911 (0.376)    | 0 (0.000) |    18.17 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr         |
|           42 |     1074 | 2024-04-18 | Sashi             | L   | 0.926      | -            | -                | -                | -         |   -11.99 | Cabbi, IceBerg, kwezz, Lucky, MistR           |
|           41 |     1083 | 2024-04-18 | KOI               | W   | 0.925      | 0.143        | -                | 0.570 (0.075)    | 0 (0.000) |    16.84 | adamS, dav1g, JUST, mopoz, stadodo            |
|           40 |     1093 | 2024-04-18 | FRAGMATIC         | W   | 0.925      | -            | -                | -                | 0 (0.000) |     1.26 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           39 |     1099 | 2024-04-18 | AMKAL             | L   | 0.925      | -            | -                | -                | -         |    -6.69 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           38 |     1167 | 2024-04-16 | Sashi             | W   | 0.912      | 0.384        | 0.157 (0.055)    | 1.000 (0.350)    | -         |    17.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           37 |     1361 | 2024-04-09 | Metizport         | W   | 0.865      | 0.384        | 0.088 (0.029)    | 0.860 (0.286)    | -         |    17.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           36 |     1527 | 2024-04-03 | AMKAL             | L   | 0.825      | -            | -                | -                | -         |    -5.97 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           35 |     1559 | 2024-04-02 | Insilio           | L   | 0.820      | -            | -                | -                | -         |   -13.46 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           34 |     1571 | 2024-04-02 | AMKAL             | W   | 0.818      | 0.143        | 0.144 (0.017)    | 0.736 (0.086)    | -         |    19.69 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           33 |     1577 | 2024-04-02 | 500               | L   | 0.817      | -            | -                | -                | -         |   -17.22 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           32 |     1583 | 2024-04-01 | 500               | W   | 0.813      | 0.384        | -                | 0.436 (0.136)    | -         |     8.34 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |     1663 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.779      | -            | -                | -                | -         |   -13.70 | ArroW, awzek, FreeZe, hyped, skyye            |
|           30 |     1732 | 2024-03-22 | VP.Prodigy        | L   | 0.744      | -            | -                | -                | -         |   -20.16 | dwushka, KusMe, shady, Something, xdENiSZERA  |
|           29 |     2272 | 2024-02-27 | Lotus             | L   | 0.586      | -            | -                | -                | -         |   -17.16 | Consume, Maki, rbfurious, ROGA, Šego          |
|           28 |     2281 | 2024-02-27 | Metizport         | W   | 0.585      | 0.143        | 0.088 (0.007)    | 0.860 (0.072)    | -         |     9.65 | adamb, Jackinho, nilo, susp, ztr              |
|           27 |     2362 | 2024-02-24 | GamerLegion       | L   | 0.564      | -            | -                | -                | -         |    -4.14 | acoR, isak, Keoz, Snax, volt                  |
|           26 |     2369 | 2024-02-23 | BetBoom           | W   | 0.558      | 0.143        | 0.392 (0.031)    | 0.951 (0.076)    | 1 (0.558) |    16.02 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           25 |     2387 | 2024-02-22 | Gaimin Gladiators | L   | 0.551      | -            | -                | -                | -         |    -3.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           24 |     2406 | 2024-02-21 | ex-Preasy         | W   | 0.546      | 0.143        | 0.051 (0.004)    | -                | 1 (0.546) |     8.26 | Altekz, dupreeh, refrezh, roeJ, TMB           |
|           23 |     2440 | 2024-02-20 | Nexus             | W   | 0.538      | -            | -                | -                | 1 (0.538) |     6.54 | BTN, ERSIN, ragga, s0und, XELLOW              |
|           22 |     2464 | 2024-02-19 | ENCE              | L   | 0.532      | -            | -                | -                | -         |    -1.23 | dycha, gla1ve, Goofy, hades, Kylar            |
|           21 |     2473 | 2024-02-19 | MOUZ              | L   | 0.530      | -            | -                | -                | -         |    -0.06 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           20 |     2693 | 2024-02-08 | Insilio           | L   | 0.460      | -            | -                | -                | -         |    -8.62 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           19 |     2696 | 2024-02-08 | RUBY              | L   | 0.458      | -            | -                | -                | -         |    -9.77 | dekz, Kaide, mo0N, sowalio, w1nt3r            |
|           18 |     2939 | 2024-01-25 | PERA              | L   | 0.366      | -            | -                | -                | -         |    -6.95 | Aaron, DGL, Kamion, msN, Porya                |
|           17 |     2954 | 2024-01-24 | ALTERNATE aTTaX   | W   | 0.359      | -            | -                | -                | -         |     5.04 | awzek, FreeZe, Goody, PANIX, PerX             |
|           16 |     2975 | 2024-01-23 | Sampi             | W   | 0.352      | -            | -                | -                | -         |     4.76 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           15 |     2978 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.352      | -            | -                | -                | -         |     5.27 | awzek, FreeZe, Goody, PANIX, PerX             |
|           14 |     2999 | 2024-01-22 | PERA              | L   | 0.346      | -            | -                | -                | -         |    -6.77 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           13 |     3001 | 2024-01-22 | Viperio           | W   | 0.346      | -            | -                | -                | -         |     0.77 | mAnGo, MMS, pandi7o, ReegaN, zodi             |
|           12 |     3006 | 2024-01-22 | Rebels            | W   | 0.345      | -            | -                | -                | -         |     7.15 | casey, Flayy, kisserek, olimp, sNx            |
|           11 |     3205 | 2024-01-18 | Sprout            | W   | 0.317      | -            | -                | -                | -         |     1.28 | Anlelele, cej0t, raalz, sL1m3, Zyphon         |
|           10 |     3222 | 2024-01-17 | Into the Breach   | W   | 0.314      | -            | -                | -                | -         |     1.87 | Bymas, CRUC1AL, misutaaa, rallen, Thomas      |
|            9 |     3228 | 2024-01-17 | Capcarap          | W   | 0.313      | -            | -                | -                | -         |     0.41 | darien, Maki, rbfurious, simon, zeins         |
|            8 |     3713 | 2023-12-12 | Aurora            | L   | 0.073      | -            | -                | -                | -         |    -0.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            7 |     3728 | 2023-12-11 | ex-Anonymo        | W   | 0.063      | -            | -                | -                | -         |     0.31 | lunAtic, reiko, SaMey, Sobol, virtuoso        |
|            6 |     3809 | 2023-12-07 | Aurora            | L   | 0.039      | -            | -                | -                | -         |    -0.06 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            5 |     3824 | 2023-12-06 | 9 Pandas          | W   | 0.033      | -            | -                | -                | -         |     0.78 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            4 |     3839 | 2023-12-06 | G2                | W   | 0.032      | 0.589        | 0.469 (0.009)    | -                | -         |     0.99 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            3 |     3870 | 2023-12-05 | ex-Anonymo        | W   | 0.025      | -            | -                | -                | -         |     0.12 | lunAtic, reiko, SaMey, Sobol, virtuoso        |
|            2 |     3885 | 2023-12-04 | ALTERNATE aTTaX   | W   | 0.018      | -            | -                | -                | -         |     0.28 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            1 |     3895 | 2023-12-03 | BIG               | L   | 0.012      | -            | -                | -                | -         |    -0.03 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,225.90)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      1.000 | $2,158.00      | $2,158.00       |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2023-12-13 |      0.079 | $1,000.00      | $79.36          |
| 2023-12-07 |      0.040 | $25,000.00     | $988.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
