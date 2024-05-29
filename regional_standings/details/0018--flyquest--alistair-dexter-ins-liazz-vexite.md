### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1394.0<br />
<br />
Final Rank Value (1394.0) = Starting Rank Value (1411.7) + Head To Head Adjustments (-17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.478[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.812[<sup>2</sup>](#table1)

The average of these factors is 0.521<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1411.7
- 400 + ( ( 0.521 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1411.7


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
|           55 |       25 | 2024-05-28 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -18.02 | aliStair, dexter, INS, Liazz, Vexite         |
|           54 |       47 | 2024-05-27 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -1.73 | aliStair, dexter, INS, Liazz, Vexite         |
|           53 |      175 | 2024-05-22 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.287 (0.096)    | 0 (0.000) |     0.61 | aliStair, dexter, INS, Liazz, Vexite         |
|           52 |      179 | 2024-05-22 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.287 (0.096)    | -         |     0.62 | aliStair, dexter, INS, Liazz, Vexite         |
|           51 |      252 | 2024-05-20 | Canon Event        | W   | 1.000      | -            | -                | -                | -         |     0.13 | aliStair, dexter, INS, Liazz, Vexite         |
|           50 |      254 | 2024-05-20 | Canon Event        | W   | 1.000      | -            | -                | -                | -         |     0.13 | aliStair, dexter, INS, Liazz, Vexite         |
|           49 |      619 | 2024-05-08 | Liquid             | L   | 1.000      | -            | -                | -                | -         |    -7.69 | aliStair, dexter, INS, Liazz, Vexite         |
|           48 |      637 | 2024-05-07 | BetBoom            | W   | 1.000      | 0.889        | 0.392 (0.349)    | 0.951 (0.846)    | 1 (1.000) |    11.55 | aliStair, dexter, INS, Liazz, Vexite         |
|           47 |      681 | 2024-05-05 | Ninjas in Pyjamas  | W   | 1.000      | 0.889        | 0.118 (0.105)    | 0.327 (0.291)    | 1 (1.000) |     3.91 | aliStair, dexter, INS, Liazz, Vexite         |
|           46 |      695 | 2024-05-04 | PERA               | W   | 1.000      | 0.889        | 0.027 (0.024)    | 0.408 (0.363)    | 1 (1.000) |     1.49 | aliStair, dexter, INS, Liazz, Vexite         |
|           45 |      713 | 2024-05-03 | HEROIC             | L   | 1.000      | -            | -                | -                | -         |    -6.76 | aliStair, dexter, INS, Liazz, Vexite         |
|           44 |      741 | 2024-05-02 | BOSS               | W   | 1.000      | 0.889        | 0.016 (0.014)    | 0.477 (0.424)    | 1 (1.000) |     1.34 | aliStair, dexter, INS, Liazz, Vexite         |
|           43 |      764 | 2024-05-01 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |    -2.03 | aliStair, dexter, INS, Liazz, Vexite         |
|           42 |     1008 | 2024-04-20 | Bad News Kangaroos | W   | 0.937      | 0.143        | 0.032 (0.004)    | -                | -         |     1.47 | aliStair, dexter, INS, Liazz, Vexite         |
|           41 |     1054 | 2024-04-19 | Rooster            | W   | 0.931      | -            | -                | -                | -         |     1.26 | aliStair, dexter, INS, Liazz, Vexite         |
|           40 |     1061 | 2024-04-19 | Mindfreak          | W   | 0.929      | -            | -                | -                | -         |     0.47 | aliStair, dexter, INS, Liazz, Vexite         |
|           39 |     1307 | 2024-04-10 | FaZe               | L   | 0.871      | -            | -                | -                | -         |    -1.33 | aliStair, dexter, INS, Liazz, Vexite         |
|           38 |     1321 | 2024-04-10 | Nemiga             | W   | 0.869      | 0.624        | 0.363 (0.197)    | 0.647 (0.351)    | 1 (0.869) |     6.54 | aliStair, dexter, INS, Liazz, Vexite         |
|           37 |     1371 | 2024-04-09 | Virtus.pro         | L   | 0.863      | -            | -                | -                | -         |    -4.55 | aliStair, dexter, INS, Liazz, Vexite         |
|           36 |     1402 | 2024-04-08 | Cloud9             | W   | 0.856      | 0.624        | 0.188 (0.100)    | 0.382 (0.204)    | 1 (0.856) |    16.41 | aliStair, dexter, INS, Liazz, Vexite         |
|           35 |     1545 | 2024-04-03 | Arcade             | W   | 0.823      | -            | -                | -                | -         |     0.46 | aliStair, dexter, INS, Liazz, Vexite         |
|           34 |     1549 | 2024-04-03 | Arcade             | W   | 0.823      | -            | -                | -                | -         |     0.47 | aliStair, dexter, INS, Liazz, Vexite         |
|           33 |     1671 | 2024-03-27 | KZG                | W   | 0.777      | -            | -                | -                | -         |     0.40 | aliStair, dexter, INS, Liazz, Vexite         |
|           32 |     1677 | 2024-03-27 | KZG                | W   | 0.777      | -            | -                | -                | -         |     0.40 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs    |
|           31 |     1942 | 2024-03-13 | Rooster            | W   | 0.684      | 0.333        | 0.013 (0.003)    | 0.293 (0.067)    | -         |     0.82 | asap, chelleos, dangeR, nettik, TjP          |
|           30 |     1950 | 2024-03-13 | Rooster            | W   | 0.683      | 0.333        | -                | 0.293 (0.067)    | -         |     0.82 | aliStair, dexter, INS, Liazz, Vexite         |
|           29 |     2118 | 2024-03-06 | DXA                | W   | 0.637      | -            | -                | -                | -         |     0.36 | aliStair, dexter, INS, Liazz, Vexite         |
|           28 |     2120 | 2024-03-06 | DXA                | W   | 0.637      | -            | -                | -                | -         |     0.36 | Kiyo, lucas222, motion, rocky, Roflko        |
|           27 |     2268 | 2024-02-28 | Lynn Vision        | L   | 0.590      | -            | -                | -                | -         |   -16.72 | aliStair, dexter, INS, Liazz, Vexite         |
|           26 |     2269 | 2024-02-27 | ATOX               | W   | 0.589      | -            | -                | -                | 1 (0.589) |     0.87 | aliStair, dexter, INS, Liazz, Vexite         |
|           25 |     2289 | 2024-02-27 | JiJieHao           | W   | 0.583      | -            | -                | -                | 1 (0.583) |     0.15 | DavCost, El1an, ISSAA, m1N1, ViTaL           |
|           24 |     2306 | 2024-02-25 | TheMongolz         | L   | 0.576      | -            | -                | -                | -         |    -7.72 | aliStair, dexter, INS, Liazz, Vexite         |
|           23 |     2311 | 2024-02-25 | ATOX               | W   | 0.575      | -            | -                | -                | 1 (0.575) |     0.77 | AccuracyTG, dobu, kabal, MiQ, Zesta          |
|           22 |     2371 | 2024-02-23 | Rooster            | W   | 0.557      | -            | -                | -                | -         |     0.57 | asap, chelleos, dangeR, nettik, TjP          |
|           21 |     2391 | 2024-02-22 | Rooster            | W   | 0.550      | -            | -                | -                | -         |     0.54 | asap, chelleos, dangeR, nettik, TjP          |
|           20 |     2394 | 2024-02-21 | Bad News Kangaroos | W   | 0.549      | -            | -                | -                | -         |     0.87 | ADDICT, BRACE, Hatz, hazr, pz                |
|           19 |     2419 | 2024-02-21 | Bad News Kangaroos | W   | 0.544      | 0.333        | 0.032 (0.006)    | -                | -         |     0.87 | ADDICT, BRACE, Hatz, hazr, pz                |
|           18 |     2423 | 2024-02-21 | Bad News Kangaroos | W   | 0.543      | 0.333        | 0.032 (0.006)    | -                | -         |     0.88 | aliStair, dexter, INS, Liazz, Vexite         |
|           17 |     2476 | 2024-02-19 | Mindfreak          | W   | 0.529      | -            | -                | -                | -         |     0.16 | gump, Rickeh, Sliimey, supar, tucks          |
|           16 |     2494 | 2024-02-18 | Arcade             | W   | 0.523      | -            | -                | -                | -         |     0.29 | apocdud, damyo, foggers, Kobe, void          |
|           15 |     2497 | 2024-02-18 | MANTRA             | W   | 0.523      | -            | -                | -                | -         |     0.06 | cheeseball, cookie, Reapz, rekonz, w0mbat    |
|           14 |     2498 | 2024-02-17 | Arcade             | W   | 0.521      | -            | -                | -                | -         |     0.28 | apocdud, damyo, foggers, Kobe, void          |
|           13 |     2520 | 2024-02-16 | GR                 | W   | 0.516      | -            | -                | -                | -         |     0.20 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           12 |     2986 | 2024-01-23 | Mindfreak          | W   | 0.350      | -            | -                | -                | -         |     0.10 | dangeR, dpr, Forleks, supar, tucks           |
|           11 |     3015 | 2024-01-22 | Mindfreak          | W   | 0.344      | -            | -                | -                | -         |     0.09 | dangeR, dpr, Forleks, supar, tucks           |
|           10 |     3017 | 2024-01-22 | Bad News Kangaroos | W   | 0.343      | -            | -                | -                | -         |     0.58 | ADDICT, BRACE, Hatz, hazr, pz                |
|            9 |     3042 | 2024-01-21 | Bad News Kangaroos | W   | 0.337      | -            | -                | -                | -         |     0.58 | aliStair, dexter, INS, Liazz, Vexite         |
|            8 |     3047 | 2024-01-20 | Rooster            | W   | 0.336      | -            | -                | -                | -         |     0.34 | aliStair, dexter, INS, Liazz, Vexite         |
|            7 |     3051 | 2024-01-20 | Mindfreak          | W   | 0.335      | -            | -                | -                | -         |     0.09 | dangeR, dpr, Forleks, supar, tucks           |
|            6 |     3092 | 2024-01-20 | Vantage            | W   | 0.330      | -            | -                | -                | -         |     0.08 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3148 | 2024-01-19 | Bad News Kangaroos | L   | 0.323      | -            | -                | -                | -         |    -9.67 | ADDICT, BRACE, Hatz, hazr, pz                |
|            4 |     3159 | 2024-01-18 | RKON               | W   | 0.322      | -            | -                | -                | -         |     0.07 | alecc, Crunchy, dingus, Jynx, TRIPLUS        |
|            3 |     3306 | 2024-01-16 | sunday school      | W   | 0.303      | -            | -                | -                | -         |     0.06 | gump, HUGH, nexar, rekonz, versa             |
|            2 |     3308 | 2024-01-16 | Mindfreak          | W   | 0.303      | -            | -                | -                | -         |     0.07 | dangeR, dpr, Forleks, supar, tucks           |
|            1 |     3338 | 2024-01-15 | disciples          | W   | 0.296      | -            | -                | -                | -         |     0.03 | badger, DickStacy, mswag, Sync, Texta        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,316.56)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-04-14 |      0.897 | $6,000.00      | $5,383.41       |
| 2024-02-17 |      0.521 | $2,750.00      | $1,433.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
