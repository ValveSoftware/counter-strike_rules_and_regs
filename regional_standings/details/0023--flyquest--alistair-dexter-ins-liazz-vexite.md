### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1368.9<br />
<br />
Final Rank Value (1368.9) = Starting Rank Value (1342.5) + Head To Head Adjustments (26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.508[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.806[<sup>2</sup>](#table1)

The average of these factors is 0.495<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1342.5
- 400 + ( ( 0.495 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1342.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       30 | 2024-05-05 | Ninjas in Pyjamas  | W   | 1.000      | 0.889        | 0.236 (0.210)    | 0.346 (0.307)    | 1 (1.000) |     5.51 | aliStair, dexter, INS, Liazz, Vexite         |
|           49 |       44 | 2024-05-04 | PERA               | W   | 1.000      | 0.889        | 0.062 (0.055)    | 0.365 (0.324)    | 1 (1.000) |     2.24 | aliStair, dexter, INS, Liazz, Vexite         |
|           48 |       62 | 2024-05-03 | HEROIC             | L   | 1.000      | -            | -                | -                | -         |    -6.87 | aliStair, dexter, INS, Liazz, Vexite         |
|           47 |       90 | 2024-05-02 | BOSS               | W   | 1.000      | 0.889        | 0.049 (0.044)    | 0.507 (0.451)    | 1 (1.000) |     1.79 | aliStair, dexter, INS, Liazz, Vexite         |
|           46 |      113 | 2024-05-01 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |    -1.16 | aliStair, dexter, INS, Liazz, Vexite         |
|           45 |      357 | 2024-04-20 | Bad News Kangaroos | W   | 1.000      | 0.143        | 0.068 (0.010)    | -                | 0 (0.000) |     2.47 | aliStair, dexter, INS, Liazz, Vexite         |
|           44 |      403 | 2024-04-19 | Rooster            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.15 | aliStair, dexter, INS, Liazz, Vexite         |
|           43 |      410 | 2024-04-19 | Mindfreak          | W   | 1.000      | -            | -                | -                | -         |     0.72 | aliStair, dexter, INS, Liazz, Vexite         |
|           42 |      656 | 2024-04-10 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -1.36 | aliStair, dexter, INS, Liazz, Vexite         |
|           41 |      670 | 2024-04-10 | Nemiga             | W   | 1.000      | 0.624        | 0.667 (0.416)    | 0.724 (0.452)    | 1 (1.000) |    10.69 | aliStair, dexter, INS, Liazz, Vexite         |
|           40 |      720 | 2024-04-09 | Virtus.pro         | L   | 1.000      | -            | -                | -                | -         |    -3.45 | aliStair, dexter, INS, Liazz, Vexite         |
|           39 |      751 | 2024-04-08 | Cloud9             | W   | 1.000      | 0.624        | 0.472 (0.295)    | 0.525 (0.328)    | 1 (1.000) |    26.62 | aliStair, dexter, INS, Liazz, Vexite         |
|           38 |      894 | 2024-04-03 | VexX               | W   | 0.977      | 0.333        | -                | 0.252 (0.082)    | -         |     0.80 | aliStair, dexter, INS, Liazz, Vexite         |
|           37 |      898 | 2024-04-03 | VexX               | W   | 0.977      | -            | -                | -                | -         |     0.81 | aliStair, dexter, INS, Liazz, Vexite         |
|           36 |     1020 | 2024-03-27 | KZG                | W   | 0.931      | -            | -                | -                | -         |     0.64 | aliStair, dexter, INS, Liazz, Vexite         |
|           35 |     1026 | 2024-03-27 | KZG                | W   | 0.931      | -            | -                | -                | -         |     0.64 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs    |
|           34 |     1291 | 2024-03-13 | Rooster            | W   | 0.838      | 0.333        | 0.029 (0.008)    | 0.348 (0.097)    | -         |     1.75 | asap, chelleos, dangeR, nettik, TjP          |
|           33 |     1299 | 2024-03-13 | Rooster            | W   | 0.837      | 0.333        | 0.029 (0.008)    | 0.348 (0.097)    | -         |     1.78 | aliStair, dexter, INS, Liazz, Vexite         |
|           32 |     1467 | 2024-03-06 | DXA                | W   | 0.791      | -            | -                | -                | -         |     0.65 | aliStair, dexter, INS, Liazz, Vexite         |
|           31 |     1469 | 2024-03-06 | DXA                | W   | 0.791      | -            | -                | -                | -         |     0.65 | Kiyo, lucas222, motion, rocky, Roflko        |
|           30 |     1617 | 2024-02-28 | Lynn Vision        | L   | 0.744      | -            | -                | -                | -         |   -17.95 | aliStair, dexter, INS, Liazz, Vexite         |
|           29 |     1618 | 2024-02-27 | ATOX               | W   | 0.743      | -            | -                | -                | 1 (0.743) |     1.03 | aliStair, dexter, INS, Liazz, Vexite         |
|           28 |     1638 | 2024-02-27 | JiJieHao           | W   | 0.738      | -            | -                | -                | 1 (0.738) |     0.31 | DavCost, El1an, ISSAA, m1N1, ViTaL           |
|           27 |     1655 | 2024-02-25 | TheMongolz         | L   | 0.730      | -            | -                | -                | -         |    -8.66 | aliStair, dexter, INS, Liazz, Vexite         |
|           26 |     1660 | 2024-02-25 | ATOX               | W   | 0.729      | -            | -                | -                | 1 (0.729) |     0.86 | AccuracyTG, dobu, kabal, MiQ, Zesta          |
|           25 |     1720 | 2024-02-23 | Rooster            | W   | 0.711      | -            | -                | -                | -         |     1.29 | asap, chelleos, dangeR, nettik, TjP          |
|           24 |     1740 | 2024-02-22 | Rooster            | W   | 0.704      | -            | -                | -                | -         |     1.20 | asap, chelleos, dangeR, nettik, TjP          |
|           23 |     1743 | 2024-02-21 | Bad News Kangaroos | W   | 0.703      | -            | -                | -                | -         |     2.11 | ADDICT, BRACE, Hatz, hazr, pz                |
|           22 |     1768 | 2024-02-21 | Bad News Kangaroos | W   | 0.698      | 0.333        | 0.068 (0.016)    | 0.359 (0.083)    | -         |     2.14 | ADDICT, BRACE, Hatz, hazr, pz                |
|           21 |     1772 | 2024-02-21 | Bad News Kangaroos | W   | 0.697      | 0.333        | 0.068 (0.016)    | 0.359 (0.083)    | -         |     2.19 | aliStair, dexter, INS, Liazz, Vexite         |
|           20 |     1825 | 2024-02-19 | Mindfreak          | W   | 0.683      | -            | -                | -                | -         |     0.32 | gump, Rickeh, Sliimey, supar, tucks          |
|           19 |     1843 | 2024-02-18 | VexX               | W   | 0.677      | -            | -                | -                | -         |     0.59 | apocdud, damyo, foggers, Kobe, void          |
|           18 |     1846 | 2024-02-18 | MANTRA             | W   | 0.677      | -            | -                | -                | -         |     0.11 | cheeseball, cookie, Reapz, rekonz, w0mbat    |
|           17 |     1847 | 2024-02-17 | VexX               | W   | 0.675      | -            | -                | -                | -         |     0.56 | apocdud, damyo, foggers, Kobe, void          |
|           16 |     1869 | 2024-02-16 | GR                 | W   | 0.670      | -            | -                | -                | -         |     0.44 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           15 |     2335 | 2024-01-23 | Mindfreak          | W   | 0.504      | -            | -                | -                | -         |     0.40 | dangeR, dpr, Forleks, supar, tucks           |
|           14 |     2364 | 2024-01-22 | Mindfreak          | W   | 0.498      | -            | -                | -                | -         |     0.37 | dangeR, dpr, Forleks, supar, tucks           |
|           13 |     2366 | 2024-01-22 | Bad News Kangaroos | W   | 0.497      | -            | -                | -                | -         |     1.63 | ADDICT, BRACE, Hatz, hazr, pz                |
|           12 |     2391 | 2024-01-21 | Bad News Kangaroos | W   | 0.491      | -            | -                | -                | -         |     1.64 | aliStair, dexter, INS, Liazz, Vexite         |
|           11 |     2396 | 2024-01-20 | Rooster            | W   | 0.490      | -            | -                | -                | -         |     0.87 | aliStair, dexter, INS, Liazz, Vexite         |
|           10 |     2400 | 2024-01-20 | Mindfreak          | W   | 0.489      | -            | -                | -                | -         |     0.35 | dangeR, dpr, Forleks, supar, tucks           |
|            9 |     2441 | 2024-01-20 | Vantage            | W   | 0.484      | -            | -                | -                | -         |     0.19 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            8 |     2497 | 2024-01-19 | Bad News Kangaroos | L   | 0.477      | -            | -                | -                | -         |   -13.62 | ADDICT, BRACE, Hatz, hazr, pz                |
|            7 |     2508 | 2024-01-18 | RKON               | W   | 0.476      | -            | -                | -                | -         |     0.16 | alecc, Crunchy, dingus, Jynx, TRIPLUS        |
|            6 |     2655 | 2024-01-16 | sunday school      | W   | 0.457      | -            | -                | -                | -         |     0.13 | gump, HUGH, nexar, rekonz, versa             |
|            5 |     2657 | 2024-01-16 | Mindfreak          | W   | 0.457      | -            | -                | -                | -         |     0.28 | dangeR, dpr, Forleks, supar, tucks           |
|            4 |     2687 | 2024-01-15 | disciples          | W   | 0.450      | -            | -                | -                | -         |     0.07 | badger, DickStacy, mswag, Sync, Texta        |
|            3 |     3440 | 2023-11-21 | Bad News Kangaroos | W   | 0.085      | -            | -                | -                | -         |     0.25 | ADDICT, BRACE, hazr, pz, Valiance            |
|            2 |     3457 | 2023-11-20 | Rooster            | W   | 0.077      | -            | -                | -                | -         |     0.13 | asap, chelleos, nettik, Rackem, TjP          |
|            1 |     3652 | 2023-11-13 | DXA                | W   | 0.030      | -            | -                | -                | -         |     0.03 | bebest, helix, Kiyo, lucas222, Roflko        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,047.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-02-17 |      0.675 | $2,750.00      | $1,856.91       |
| 2023-11-21 |      0.085 | $2,244.00      | $190.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
