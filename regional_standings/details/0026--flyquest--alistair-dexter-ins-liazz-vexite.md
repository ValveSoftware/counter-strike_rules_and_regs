### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1202.6<br />
<br />
Final Rank Value (1202.6) = Starting Rank Value (1113.7) + Head To Head Adjustments (88.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.482[<sup>2</sup>](#table1)

The average of these factors is 0.370<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1113.7
- 400 + ( ( 0.370 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1113.7


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
|           45 |       61 | 2024-04-20 | Bad News Kangaroos | W   | 1.000      | 0.143        | 0.046 (0.007)    | -                | 0 (0.000) |     4.85 | aliStair, dexter, INS, Liazz, Vexite         |
|           44 |      107 | 2024-04-19 | Rooster            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.00 | aliStair, dexter, INS, Liazz, Vexite         |
|           43 |      114 | 2024-04-19 | Mindfreak          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.75 | aliStair, dexter, INS, Liazz, Vexite         |
|           42 |      360 | 2024-04-10 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -0.58 | aliStair, dexter, INS, Liazz, Vexite         |
|           41 |      374 | 2024-04-10 | Nemiga             | W   | 1.000      | 0.624        | 0.044 (0.027)    | 0.607 (0.379)    | 1 (1.000) |     7.50 | aliStair, dexter, INS, Liazz, Vexite         |
|           40 |      424 | 2024-04-09 | Virtus.pro         | L   | 1.000      | -            | -                | -                | -         |    -2.17 | aliStair, dexter, INS, Liazz, Vexite         |
|           39 |      455 | 2024-04-08 | Cloud9             | W   | 1.000      | 0.624        | 0.475 (0.297)    | 0.623 (0.389)    | 1 (1.000) |    29.50 | aliStair, dexter, INS, Liazz, Vexite         |
|           38 |      598 | 2024-04-03 | VexX               | W   | 1.000      | 0.333        | -                | 0.295 (0.098)    | 0 (0.000) |     1.91 | aliStair, dexter, INS, Liazz, Vexite         |
|           37 |      602 | 2024-04-03 | VexX               | W   | 1.000      | 0.333        | -                | 0.295 (0.098)    | 0 (0.000) |     1.95 | aliStair, dexter, INS, Liazz, Vexite         |
|           36 |      724 | 2024-03-27 | KZG                | W   | 1.000      | 0.333        | -                | 0.251 (0.084)    | -         |     1.53 | aliStair, dexter, INS, Liazz, Vexite         |
|           35 |      730 | 2024-03-27 | KZG                | W   | 1.000      | 0.333        | -                | 0.251 (0.084)    | -         |     1.55 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs      |
|           34 |      995 | 2024-03-13 | Rooster            | W   | 0.931      | 0.333        | 0.013 (0.004)    | 0.355 (0.110)    | -         |     3.68 | asap, chelleos, dangeR, nettik, TjP          |
|           33 |     1003 | 2024-03-13 | Rooster            | W   | 0.931      | 0.333        | 0.013 (0.004)    | 0.355 (0.110)    | -         |     3.81 | aliStair, dexter, INS, Liazz, Vexite         |
|           32 |     1171 | 2024-03-06 | DXA                | W   | 0.884      | -            | -                | -                | -         |     1.75 | aliStair, dexter, INS, Liazz, Vexite         |
|           31 |     1173 | 2024-03-06 | DXA                | W   | 0.884      | -            | -                | -                | -         |     1.78 | Kiyo, lucas222, motion, rocky, Roflko        |
|           30 |     1321 | 2024-02-28 | Lynn Vision        | L   | 0.837      | -            | -                | -                | -         |   -13.63 | aliStair, dexter, INS, Liazz, Vexite         |
|           29 |     1322 | 2024-02-27 | ATOX               | W   | 0.836      | -            | -                | -                | 1 (0.836) |     3.27 | aliStair, dexter, INS, Liazz, Vexite         |
|           28 |     1342 | 2024-02-27 | JiJieHao           | W   | 0.831      | -            | -                | -                | 1 (0.831) |     1.04 | DavCost, El1an, ISSAA, m1N1, ViTaL           |
|           27 |     1359 | 2024-02-25 | TheMongolz         | L   | 0.823      | -            | -                | -                | -         |    -6.83 | aliStair, dexter, INS, Liazz, Vexite         |
|           26 |     1364 | 2024-02-25 | ATOX               | W   | 0.822      | -            | -                | -                | 1 (0.822) |     2.87 | AccuracyTG, dobu, kabal, MiQ, Zesta          |
|           25 |     1424 | 2024-02-23 | Rooster            | W   | 0.804      | -            | -                | -                | -         |     3.03 | asap, chelleos, dangeR, nettik, TjP          |
|           24 |     1444 | 2024-02-22 | Rooster            | W   | 0.798      | -            | -                | -                | -         |     2.85 | asap, chelleos, dangeR, nettik, TjP          |
|           23 |     1447 | 2024-02-21 | Bad News Kangaroos | W   | 0.796      | 0.143        | 0.046 (0.005)    | -                | -         |     5.40 | ADDICT, BRACE, Hatz, hazr, pz                |
|           22 |     1472 | 2024-02-21 | Bad News Kangaroos | W   | 0.791      | 0.333        | 0.046 (0.012)    | 0.429 (0.113)    | -         |     5.63 | ADDICT, BRACE, Hatz, hazr, pz                |
|           21 |     1476 | 2024-02-21 | Bad News Kangaroos | W   | 0.791      | 0.333        | 0.046 (0.012)    | 0.429 (0.113)    | -         |     5.92 | aliStair, dexter, INS, Liazz, Vexite         |
|           20 |     1529 | 2024-02-19 | Mindfreak          | W   | 0.777      | -            | -                | -                | -         |     1.14 | gump, Rickeh, Sliimey, supar, tucks          |
|           19 |     1547 | 2024-02-18 | VexX               | W   | 0.771      | -            | -                | -                | -         |     1.98 | apocdud, damyo, foggers, Kobe, void          |
|           18 |     1550 | 2024-02-18 | MANTRA             | W   | 0.770      | -            | -                | -                | -         |     0.41 | cheeseball, cookie, Reapz, rekonz, w0mbat    |
|           17 |     1551 | 2024-02-17 | VexX               | W   | 0.769      | -            | -                | -                | -         |     1.89 | apocdud, damyo, foggers, Kobe, void          |
|           16 |     1573 | 2024-02-16 | GR                 | W   | 0.763      | -            | -                | -                | -         |     1.63 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           15 |     2039 | 2024-01-23 | Mindfreak          | W   | 0.598      | -            | -                | -                | -         |     1.52 | dangeR, dpr, Forleks, supar, tucks           |
|           14 |     2068 | 2024-01-22 | Mindfreak          | W   | 0.591      | -            | -                | -                | -         |     1.44 | dangeR, dpr, Forleks, supar, tucks           |
|           13 |     2070 | 2024-01-22 | Bad News Kangaroos | W   | 0.590      | 0.143        | 0.046 (0.004)    | -                | -         |     4.93 | ADDICT, BRACE, Hatz, hazr, pz                |
|           12 |     2095 | 2024-01-21 | Bad News Kangaroos | W   | 0.584      | 0.143        | 0.046 (0.004)    | -                | -         |     5.08 | aliStair, dexter, INS, Liazz, Vexite         |
|           11 |     2100 | 2024-01-20 | Rooster            | W   | 0.583      | -            | -                | -                | -         |     2.39 | aliStair, dexter, INS, Liazz, Vexite         |
|           10 |     2104 | 2024-01-20 | Mindfreak          | W   | 0.583      | -            | -                | -                | -         |     1.45 | dangeR, dpr, Forleks, supar, tucks           |
|            9 |     2145 | 2024-01-20 | Vantage            | W   | 0.577      | -            | -                | -                | -         |     0.77 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            8 |     2201 | 2024-01-19 | Bad News Kangaroos | L   | 0.570      | -            | -                | -                | -         |   -13.33 | ADDICT, BRACE, Hatz, hazr, pz                |
|            7 |     2212 | 2024-01-18 | RKON               | W   | 0.569      | -            | -                | -                | -         |     0.65 | alecc, Crunchy, dingus, Jynx, TRIPLUS        |
|            6 |     2359 | 2024-01-16 | sunday school      | W   | 0.551      | -            | -                | -                | -         |     0.57 | gump, HUGH, nexar, rekonz, versa             |
|            5 |     2361 | 2024-01-16 | Mindfreak          | W   | 0.550      | -            | -                | -                | -         |     1.16 | dangeR, dpr, Forleks, supar, tucks           |
|            4 |     2391 | 2024-01-15 | disciples          | W   | 0.544      | -            | -                | -                | -         |     0.30 | badger, DickStacy, mswag, Sync, Texta        |
|            3 |     3144 | 2023-11-21 | Bad News Kangaroos | W   | 0.178      | -            | -                | -                | -         |     1.48 | ADDICT, BRACE, hazr, pz, Valiance            |
|            2 |     3161 | 2023-11-20 | Rooster            | W   | 0.171      | -            | -                | -                | -         |     0.68 | asap, chelleos, nettik, Rackem, TjP          |
|            1 |     3356 | 2023-11-13 | DXA                | W   | 0.123      | -            | -                | -                | -         |     0.41 | bebest, helix, Kiyo, lucas222, Roflko        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,512.97)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-02-17 |      0.769 | $2,750.00      | $2,113.51       |
| 2023-11-21 |      0.178 | $2,244.00      | $399.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
