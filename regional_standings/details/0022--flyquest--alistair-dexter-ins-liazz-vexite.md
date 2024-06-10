### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1399.0<br />
<br />
Final Rank Value (1399.0) = Starting Rank Value (1406.6) + Head To Head Adjustments (-7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.491[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.735[<sup>2</sup>](#table1)

The average of these factors is 0.505<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1406.6
- 400 + ( ( 0.505 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1406.6


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
|           58 |       84 | 2024-06-09 | Rooster            | W   | 1.000      | 0.333        | 0.018 (0.006)    | 0.296 (0.099)    | 0 (0.000) |     2.28 | aliStair, dexter, INS, Liazz, Vexite         |
|           57 |      140 | 2024-06-08 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.260 (0.087)    | -         |     1.27 | aliStair, dexter, INS, Liazz, Vexite         |
|           56 |      192 | 2024-06-07 | Rooster            | L   | 1.000      | -            | -                | -                | -         |   -29.53 | aliStair, dexter, INS, Liazz, Vexite         |
|           55 |      525 | 2024-05-28 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -16.53 | aliStair, dexter, INS, Liazz, Vexite         |
|           54 |      547 | 2024-05-27 | Spirit             | L   | 1.000      | -            | -                | -                | -         |    -2.09 | aliStair, dexter, INS, Liazz, Vexite         |
|           53 |      675 | 2024-05-22 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.260 (0.087)    | -         |     0.85 | aliStair, dexter, INS, Liazz, Vexite         |
|           52 |      679 | 2024-05-22 | Mindfreak          | W   | 1.000      | 0.333        | -                | 0.260 (0.087)    | -         |     0.86 | aliStair, dexter, INS, Liazz, Vexite         |
|           51 |      752 | 2024-05-20 | Canon Event        | W   | 1.000      | -            | -                | -                | -         |     0.12 | aliStair, dexter, INS, Liazz, Vexite         |
|           50 |      754 | 2024-05-20 | Canon Event        | W   | 1.000      | -            | -                | -                | -         |     0.12 | aliStair, dexter, INS, Liazz, Vexite         |
|           49 |     1119 | 2024-05-08 | Liquid             | L   | 0.979      | -            | -                | -                | -         |    -7.48 | aliStair, dexter, INS, Liazz, Vexite         |
|           48 |     1137 | 2024-05-07 | BetBoom            | W   | 0.973      | 0.889        | 0.427 (0.369)    | 0.917 (0.793)    | 1 (0.973) |    17.09 | aliStair, dexter, INS, Liazz, Vexite         |
|           47 |     1181 | 2024-05-05 | Ninjas in Pyjamas  | W   | 0.958      | 0.889        | 0.294 (0.251)    | 0.480 (0.409)    | 1 (0.958) |    18.54 | aliStair, dexter, INS, Liazz, Vexite         |
|           46 |     1195 | 2024-05-04 | PERA               | W   | 0.952      | 0.889        | 0.024 (0.021)    | 0.417 (0.353)    | 1 (0.952) |     1.70 | aliStair, dexter, INS, Liazz, Vexite         |
|           45 |     1213 | 2024-05-03 | HEROIC             | L   | 0.945      | -            | -                | -                | -         |    -4.58 | aliStair, dexter, INS, Liazz, Vexite         |
|           44 |     1241 | 2024-05-02 | BOSS               | W   | 0.938      | 0.889        | 0.018 (0.015)    | 0.407 (0.340)    | 1 (0.938) |     1.34 | aliStair, dexter, INS, Liazz, Vexite         |
|           43 |     1264 | 2024-05-01 | Natus Vincere      | L   | 0.932      | -            | -                | -                | -         |    -1.89 | aliStair, dexter, INS, Liazz, Vexite         |
|           42 |     1508 | 2024-04-20 | Bad News Kangaroos | W   | 0.858      | 0.143        | 0.033 (0.004)    | -                | -         |     1.37 | aliStair, dexter, INS, Liazz, Vexite         |
|           41 |     1554 | 2024-04-19 | Rooster            | W   | 0.851      | -            | -                | -                | -         |     1.28 | aliStair, dexter, INS, Liazz, Vexite         |
|           40 |     1561 | 2024-04-19 | Mindfreak          | W   | 0.850      | -            | -                | -                | -         |     0.73 | aliStair, dexter, INS, Liazz, Vexite         |
|           39 |     1807 | 2024-04-10 | FaZe               | L   | 0.792      | -            | -                | -                | -         |    -1.21 | aliStair, dexter, INS, Liazz, Vexite         |
|           38 |     1821 | 2024-04-10 | Nemiga             | W   | 0.790      | 0.624        | 0.335 (0.165)    | 0.638 (0.314)    | 1 (0.790) |     6.89 | aliStair, dexter, INS, Liazz, Vexite         |
|           37 |     1871 | 2024-04-09 | Virtus.pro         | L   | 0.784      | -            | -                | -                | -         |    -3.87 | aliStair, dexter, INS, Liazz, Vexite         |
|           36 |     1902 | 2024-04-08 | Cloud9             | W   | 0.777      | 0.624        | 0.159 (0.077)    | 0.308 (0.149)    | 1 (0.777) |    13.52 | aliStair, dexter, INS, Liazz, Vexite         |
|           35 |     2045 | 2024-04-03 | Arcade             | W   | 0.744      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite         |
|           34 |     2049 | 2024-04-03 | Arcade             | W   | 0.744      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite         |
|           33 |     2171 | 2024-03-27 | KZG                | W   | 0.698      | -            | -                | -                | -         |     0.37 | aliStair, dexter, INS, Liazz, Vexite         |
|           32 |     2177 | 2024-03-27 | KZG                | W   | 0.697      | -            | -                | -                | -         |     0.37 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs    |
|           31 |     2442 | 2024-03-13 | Rooster            | W   | 0.604      | -            | -                | -                | -         |     0.83 | asap, chelleos, dangeR, nettik, TjP          |
|           30 |     2450 | 2024-03-13 | Rooster            | W   | 0.604      | -            | -                | -                | -         |     0.83 | aliStair, dexter, INS, Liazz, Vexite         |
|           29 |     2618 | 2024-03-06 | DXA                | W   | 0.558      | -            | -                | -                | -         |     0.31 | aliStair, dexter, INS, Liazz, Vexite         |
|           28 |     2620 | 2024-03-06 | DXA                | W   | 0.558      | -            | -                | -                | -         |     0.31 | Kiyo, lucas222, motion, rocky, Roflko        |
|           27 |     2768 | 2024-02-28 | Lynn Vision        | L   | 0.511      | -            | -                | -                | -         |   -12.46 | aliStair, dexter, INS, Liazz, Vexite         |
|           26 |     2769 | 2024-02-27 | ATOX               | W   | 0.510      | -            | -                | -                | 1 (0.510) |     1.16 | aliStair, dexter, INS, Liazz, Vexite         |
|           25 |     2789 | 2024-02-27 | JiJieHao           | W   | 0.504      | -            | -                | -                | 1 (0.504) |     0.11 | DavCost, El1an, ISSAA, m1N1, ViTaL           |
|           24 |     2806 | 2024-02-25 | The MongolZ        | L   | 0.496      | -            | -                | -                | -         |    -0.88 | aliStair, dexter, INS, Liazz, Vexite         |
|           23 |     2811 | 2024-02-25 | ATOX               | W   | 0.496      | -            | -                | -                | 1 (0.496) |     1.10 | AccuracyTG, dobu, kabal, MiQ, Zesta          |
|           22 |     2871 | 2024-02-23 | Rooster            | W   | 0.478      | -            | -                | -                | -         |     0.59 | asap, chelleos, dangeR, nettik, TjP          |
|           21 |     2891 | 2024-02-22 | Rooster            | W   | 0.471      | -            | -                | -                | -         |     0.56 | asap, chelleos, dangeR, nettik, TjP          |
|           20 |     2894 | 2024-02-21 | Bad News Kangaroos | W   | 0.470      | -            | -                | -                | -         |     0.73 | ADDICT, BRACE, Hatz, hazr, pz                |
|           19 |     2919 | 2024-02-21 | Bad News Kangaroos | W   | 0.464      | 0.333        | 0.033 (0.005)    | -                | -         |     0.72 | ADDICT, BRACE, Hatz, hazr, pz                |
|           18 |     2923 | 2024-02-21 | Bad News Kangaroos | W   | 0.464      | 0.333        | 0.033 (0.005)    | -                | -         |     0.73 | aliStair, dexter, INS, Liazz, Vexite         |
|           17 |     2976 | 2024-02-19 | Mindfreak          | W   | 0.450      | -            | -                | -                | -         |     0.31 | gump, Rickeh, Sliimey, supar, tucks          |
|           16 |     2994 | 2024-02-18 | Arcade             | W   | 0.444      | -            | -                | -                | -         |     0.26 | apocdud, damyo, foggers, Kobe, void          |
|           15 |     2997 | 2024-02-18 | MANTRA             | W   | 0.444      | -            | -                | -                | -         |     0.05 | cheeseball, cookie, Reapz, rekonz, w0mbat    |
|           14 |     2998 | 2024-02-17 | Arcade             | W   | 0.442      | -            | -                | -                | -         |     0.24 | apocdud, damyo, foggers, Kobe, void          |
|           13 |     3020 | 2024-02-16 | GR                 | W   | 0.436      | -            | -                | -                | -         |     0.22 | mediocrity, qqGOD, Reminder, SALO_MUX, weqt2 |
|           12 |     3486 | 2024-01-23 | Mindfreak          | W   | 0.271      | -            | -                | -                | -         |     0.07 | dangeR, dpr, Forleks, supar, tucks           |
|           11 |     3515 | 2024-01-22 | Mindfreak          | W   | 0.264      | -            | -                | -                | -         |     0.07 | dangeR, dpr, Forleks, supar, tucks           |
|           10 |     3517 | 2024-01-22 | Bad News Kangaroos | W   | 0.264      | -            | -                | -                | -         |     0.43 | ADDICT, BRACE, Hatz, hazr, pz                |
|            9 |     3542 | 2024-01-21 | Bad News Kangaroos | W   | 0.258      | -            | -                | -                | -         |     0.42 | aliStair, dexter, INS, Liazz, Vexite         |
|            8 |     3547 | 2024-01-20 | Rooster            | W   | 0.257      | -            | -                | -                | -         |     0.31 | aliStair, dexter, INS, Liazz, Vexite         |
|            7 |     3551 | 2024-01-20 | Mindfreak          | W   | 0.256      | -            | -                | -                | -         |     0.07 | dangeR, dpr, Forleks, supar, tucks           |
|            6 |     3592 | 2024-01-20 | Vantage            | W   | 0.251      | -            | -                | -                | -         |     0.13 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3648 | 2024-01-19 | Bad News Kangaroos | L   | 0.244      | -            | -                | -                | -         |    -7.31 | ADDICT, BRACE, Hatz, hazr, pz                |
|            4 |     3659 | 2024-01-18 | RKON               | W   | 0.243      | -            | -                | -                | -         |     0.05 | alecc, Crunchy, dingus, Jynx, TRIPLUS        |
|            3 |     3806 | 2024-01-16 | sunday school      | W   | 0.224      | -            | -                | -                | -         |     0.04 | gump, HUGH, nexar, rekonz, versa             |
|            2 |     3808 | 2024-01-16 | Mindfreak          | W   | 0.224      | -            | -                | -                | -         |     0.05 | dangeR, dpr, Forleks, supar, tucks           |
|            1 |     3838 | 2024-01-15 | disciples          | W   | 0.217      | -            | -                | -                | -         |     0.02 | badger, DickStacy, mswag, Sync, Texta        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,873.81)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,250.00      | $3,250.00       |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-04-14 |      0.818 | $6,000.00      | $4,908.37       |
| 2024-02-17 |      0.442 | $2,750.00      | $1,215.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
