### Roster Details<br />
Team Name: M1X KS<br />
Roster: Krabeni, makazze, rigoN, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [46]( ../standings_europe.md)<br />
Final Rank Value:  1043.5<br />
<br />
Final Rank Value (1043.5) = Starting Rank Value (1125.4) + Head To Head Adjustments (-81.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.469[<sup>2</sup>](#table1)

The average of these factors is 0.364<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1125.4
- 400 + ( ( 0.364 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1125.4


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
|           50 |      111 | 2024-06-08 | The Suspect       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.02 | Krabeni, makazze, rigoN, SENER1, sinnopsyy    |
|           49 |      138 | 2024-06-08 | Astralis Talent   | W   | 1.000      | 0.337        | 0.014 (0.005)    | -                | 1 (1.000) |     6.98 | Krabeni, makazze, rigoN, SENER1, sinnopsyy    |
|           48 |      186 | 2024-06-07 | Madness           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.90 | Krabeni, makazze, rigoN, SENER1, sinnopsyy    |
|           47 |      587 | 2024-05-25 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -12.16 | aVN, brutmonster, Cjoffo, nEMANHA, simke      |
|           46 |      598 | 2024-05-25 | The Suspect       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.66 | BledarD, Caleyy, Dementor, HYPERI1, vAloN     |
|           45 |      605 | 2024-05-24 | Zero Tenacity     | W   | 1.000      | 0.273        | 0.154 (0.042)    | 1.000 (0.273)    | 0 (0.000) |    19.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke      |
|           44 |      610 | 2024-05-24 | ex-iNation        | W   | 1.000      | 0.273        | -                | 0.194 (0.053)    | 0 (0.000) |     6.91 | aidKiT, c0llins, Dragon, emi, xicoz           |
|           43 |      842 | 2024-05-17 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -6.11 | Cabbi, IceBerg, kwezz, Lucky, MistR           |
|           42 |     1184 | 2024-05-05 | 1WIN              | L   | 0.958      | -            | -                | -                | -         |   -15.88 | buster, Jyo, lattykk, neaLaN, Ryujin          |
|           41 |     1296 | 2024-04-29 | EYEBALLERS        | L   | 0.920      | -            | -                | -                | -         |   -19.02 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           40 |     1337 | 2024-04-27 | Insilio           | L   | 0.906      | -            | -                | -                | -         |   -17.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           39 |     1365 | 2024-04-26 | BLEED             | L   | 0.900      | -            | -                | -                | -         |    -4.71 | CeRq, CYPHER, faveN, hampus, VLDN             |
|           38 |     1397 | 2024-04-25 | PARIVISION        | L   | 0.892      | -            | -                | -                | -         |   -17.81 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           37 |     1423 | 2024-04-24 | Zero Tenacity     | W   | 0.885      | 0.435        | 0.154 (0.059)    | 1.000 (0.385)    | 0 (0.000) |    12.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           36 |     1449 | 2024-04-22 | 3DMAX             | L   | 0.873      | -            | -                | -                | -         |    -9.27 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           35 |     1461 | 2024-04-22 | Sangal            | W   | 0.871      | 0.435        | 0.214 (0.081)    | 0.998 (0.378)    | -         |    14.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr         |
|           34 |     1574 | 2024-04-18 | Sashi             | L   | 0.847      | -            | -                | -                | -         |   -12.30 | Cabbi, IceBerg, kwezz, Lucky, MistR           |
|           33 |     1583 | 2024-04-18 | KOI               | W   | 0.846      | 0.143        | 0.054 (0.007)    | 0.522 (0.063)    | -         |    13.32 | adamS, dav1g, JUST, mopoz, stadodo            |
|           32 |     1593 | 2024-04-18 | FRAGMATIC         | W   | 0.846      | -            | -                | -                | -         |     0.61 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           31 |     1599 | 2024-04-18 | AMKAL             | L   | 0.845      | -            | -                | -                | -         |    -8.69 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           30 |     1667 | 2024-04-16 | Sashi             | W   | 0.832      | 0.384        | 0.174 (0.056)    | 1.000 (0.320)    | -         |    14.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           29 |     1861 | 2024-04-09 | Metizport         | W   | 0.785      | 0.384        | 0.078 (0.024)    | 0.706 (0.213)    | -         |    12.68 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           28 |     2027 | 2024-04-03 | AMKAL             | L   | 0.746      | -            | -                | -                | -         |    -8.13 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           27 |     2059 | 2024-04-02 | Insilio           | L   | 0.740      | -            | -                | -                | -         |   -15.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           26 |     2071 | 2024-04-02 | AMKAL             | W   | 0.739      | 0.143        | 0.143 (0.015)    | 0.711 (0.075)    | -         |    14.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           25 |     2077 | 2024-04-02 | 500               | L   | 0.738      | -            | -                | -                | -         |   -18.61 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2083 | 2024-04-01 | 500               | W   | 0.734      | 0.384        | -                | 0.354 (0.100)    | -         |     4.44 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2163 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.700      | -            | -                | -                | -         |   -14.40 | ArroW, awzek, FreeZe, hyped, skyye            |
|           22 |     2232 | 2024-03-22 | VP.Prodigy        | L   | 0.665      | -            | -                | -                | -         |   -16.49 | dwushka, KusMe, shady, Something, xdENiSZERA  |
|           21 |     2772 | 2024-02-27 | Lotus             | L   | 0.507      | -            | -                | -                | -         |   -15.42 | Consume, Maki, rbfurious, ROGA, Šego          |
|           20 |     2781 | 2024-02-27 | Metizport         | W   | 0.506      | 0.143        | 0.078 (0.006)    | -                | -         |     5.58 | adamb, Jackinho, nilo, susp, ztr              |
|           19 |     2862 | 2024-02-24 | GamerLegion       | L   | 0.485      | -            | -                | -                | -         |    -7.07 | acoR, isak, Keoz, Snax, volt                  |
|           18 |     2869 | 2024-02-23 | BetBoom           | W   | 0.479      | 0.143        | 0.427 (0.029)    | 0.917 (0.063)    | 1 (0.479) |    14.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           17 |     2887 | 2024-02-22 | Gaimin Gladiators | L   | 0.472      | -            | -                | -                | -         |    -5.25 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           16 |     2906 | 2024-02-21 | ex-Preasy         | W   | 0.466      | -            | -                | -                | 1 (0.466) |     4.03 | Altekz, dupreeh, refrezh, roeJ, TMB           |
|           15 |     2940 | 2024-02-20 | Nexus             | W   | 0.459      | -            | -                | -                | 1 (0.459) |     3.04 | BTN, ERSIN, ragga, s0und, XELLOW              |
|           14 |     2964 | 2024-02-19 | ENCE              | L   | 0.453      | -            | -                | -                | -         |    -1.73 | dycha, gla1ve, Goofy, hades, Kylar            |
|           13 |     2973 | 2024-02-19 | MOUZ              | L   | 0.451      | -            | -                | -                | -         |    -0.10 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           12 |     3193 | 2024-02-08 | Insilio           | L   | 0.380      | -            | -                | -                | -         |    -8.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|           11 |     3196 | 2024-02-08 | RUBY              | L   | 0.379      | -            | -                | -                | -         |    -9.33 | dekz, Kaide, mo0N, sowalio, w1nt3r            |
|           10 |     3439 | 2024-01-25 | PERA              | L   | 0.287      | -            | -                | -                | -         |    -6.82 | Aaron, DGL, Kamion, msN, Porya                |
|            9 |     3454 | 2024-01-24 | ALTERNATE aTTaX   | W   | 0.280      | -            | -                | -                | -         |     2.95 | awzek, FreeZe, Goody, PANIX, PerX             |
|            8 |     3475 | 2024-01-23 | Sampi             | W   | 0.273      | -            | -                | -                | -         |     2.14 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            7 |     3478 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.273      | -            | -                | -                | -         |     3.02 | awzek, FreeZe, Goody, PANIX, PerX             |
|            6 |     3499 | 2024-01-22 | PERA              | L   | 0.267      | -            | -                | -                | -         |    -6.49 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy   |
|            5 |     3501 | 2024-01-22 | Viperio           | W   | 0.266      | -            | -                | -                | -         |     0.25 | mAnGo, MMS, pandi7o, ReegaN, zodi             |
|            4 |     3506 | 2024-01-22 | Rebels            | W   | 0.266      | -            | -                | -                | -         |     3.89 | casey, Flayy, kisserek, olimp, sNx            |
|            3 |     3705 | 2024-01-18 | Sprout            | W   | 0.238      | -            | -                | -                | -         |     0.20 | Anlelele, cej0t, raalz, sL1m3, Zyphon         |
|            2 |     3722 | 2024-01-17 | Into the Breach   | W   | 0.235      | -            | -                | -                | -         |     0.63 | Bymas, CRUC1AL, misutaaa, rallen, Thomas      |
|            1 |     3728 | 2024-01-17 | Capcarap          | W   | 0.234      | -            | -                | -                | -         |     0.13 | darien, Maki, rbfurious, simon, zeins         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,597.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $5,439.00      | $5,439.00       |
| 2024-05-24 |      1.000 | $2,158.00      | $2,158.00       |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
