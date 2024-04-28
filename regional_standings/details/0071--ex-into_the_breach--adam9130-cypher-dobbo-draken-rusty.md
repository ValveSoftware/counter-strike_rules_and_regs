### Roster Details<br />
Team Name: ex-Into the Breach<br />
Roster: Adam9130, CYPHER, dobbo, draken, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  891.3<br />
<br />
Final Rank Value (891.3) = Starting Rank Value (847.1) + Head To Head Adjustments (44.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 847.1
- 400 + ( ( 0.218 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 847.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |      787 | 2022-12-18 | UNGENTIUM         | W   | 0.826      | -            | -                | -                | 0 (0.000) |    10.49 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           57 |      812 | 2022-12-17 | MILF              | L   | 0.820      | -            | -                | -                | -         |   -21.05 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           56 |      863 | 2022-12-15 | MASONIC           | W   | 0.807      | 0.371        | 0.021 (0.006)    | 0.752 (0.225)    | 0 (0.000) |    12.05 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           55 |      916 | 2022-12-13 | Monte             | W   | 0.792      | 0.477        | 0.029 (0.011)    | 0.945 (0.357)    | 0 (0.000) |    15.97 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           54 |      928 | 2022-12-12 | ECLOT             | W   | 0.786      | 0.477        | 0.046 (0.017)    | 0.584 (0.219)    | 0 (0.000) |    15.26 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           53 |      948 | 2022-12-11 | Young Ninjas      | L   | 0.780      | -            | -                | -                | -         |    -9.27 | Adam9130, CYPHER, dobbo, draken, Juve     |
|           52 |      991 | 2022-12-10 | EYEBALLERS        | L   | 0.772      | -            | -                | -                | -         |   -11.31 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           51 |     1007 | 2022-12-09 | Anonymo           | W   | 0.768      | -            | -                | -                | 0 (0.000) |     5.20 | Demho, innocent, mwlky, oskarish, Vegi    |
|           50 |     1018 | 2022-12-09 | PROSPECTS         | W   | 0.766      | 0.435        | 0.032 (0.011)    | 0.689 (0.229)    | 0 (0.000) |    13.71 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           49 |     1043 | 2022-12-08 | Websterz          | W   | 0.759      | -            | -                | -                | 0 (0.000) |    11.33 | boX, mds, speed4k, tN1R, znxxX            |
|           48 |     1049 | 2022-12-08 | MASONIC           | L   | 0.758      | -            | -                | -                | -         |   -10.51 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           47 |     1065 | 2022-12-07 | Apeks             | L   | 0.754      | -            | -                | -                | -         |    -8.91 | jkaem, jL, MICHU, nawwk, STYKO            |
|           46 |     1085 | 2022-12-07 | ECLOT             | W   | 0.752      | 0.371        | 0.046 (0.013)    | 0.584 (0.163)    | 0 (0.000) |    15.73 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           45 |     1131 | 2022-12-06 | ALTERNATE aTTaX   | W   | 0.744      | 0.477        | -                | 0.486 (0.173)    | 0 (0.000) |    10.65 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           44 |     1145 | 2022-12-05 | ECSTATIC          | W   | 0.739      | 0.435        | 0.030 (0.010)    | 0.556 (0.179)    | 0 (0.000) |    11.22 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           43 |     1150 | 2022-12-05 | HEET              | L   | 0.739      | -            | -                | -                | -         |    -7.52 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           42 |     1177 | 2022-12-04 | EYEBALLERS        | L   | 0.733      | -            | -                | -                | -         |   -10.30 | flusha, JW, Sapec, SHiNE, Svedjehed       |
|           41 |     1212 | 2022-12-03 | Endpoint          | L   | 0.727      | -            | -                | -                | -         |    -9.32 | mhL, MiGHTYMAX, Nertz, Surreal, Thomas    |
|           40 |     1228 | 2022-12-03 | IKLA              | L   | 0.725      | -            | -                | -                | -         |    -9.20 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           39 |     1328 | 2022-11-29 | 9INE              | W   | 0.700      | 0.435        | 0.045 (0.014)    | 1.000 (0.304)    | -         |    13.95 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           38 |     1396 | 2022-11-27 | forZe             | W   | 0.685      | 0.435        | 0.047 (0.014)    | 0.708 (0.211)    | -         |    14.89 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           37 |     1449 | 2022-11-25 | Illuminar         | W   | 0.674      | 0.435        | 0.048 (0.014)    | 0.700 (0.205)    | -         |    15.91 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           36 |     1668 | 2022-11-09 | Copenhagen Flames | L   | 0.566      | -            | -                | -                | -         |    -5.31 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           35 |     1669 | 2022-11-09 | sYnck             | W   | 0.565      | -            | -                | -                | -         |     6.96 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           34 |     1680 | 2022-11-08 | ECLOT             | L   | 0.558      | -            | -                | -                | -         |    -5.50 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           33 |     1864 | 2022-10-26 | HONORIS           | L   | 0.473      | -            | -                | -                | -         |    -6.30 | Grashog, reiko, SaMey, Sobol, TaZ         |
|           32 |     1902 | 2022-10-24 | UNGENTIUM         | L   | 0.460      | -            | -                | -                | -         |    -7.97 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           31 |     1967 | 2022-10-22 | Wolsung           | W   | 0.445      | -            | -                | -                | -         |     2.31 | EIZA, hyskeee, krii, msn, shield          |
|           30 |     1970 | 2022-10-22 | 1WIN              | L   | 0.445      | -            | -                | -                | -         |    -5.96 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           29 |     1996 | 2022-10-21 | AGO               | L   | 0.438      | -            | -                | -                | -         |    -8.02 | Furlan, jedqr, leman, phr, snatchie       |
|           28 |     2051 | 2022-10-19 | sYnck             | W   | 0.425      | -            | -                | -                | -         |     5.17 | consss, eku, fejtZ, MakiG, Wahtzz         |
|           27 |     2087 | 2022-10-17 | BLUEJAYS          | L   | 0.412      | -            | -                | -                | -         |    -3.25 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           26 |     2154 | 2022-10-15 | HAVU              | W   | 0.398      | 0.435        | 0.041 (0.007)    | -                | -         |     8.11 | Aerial, doto, spargo, xseveN, zehN        |
|           25 |     2199 | 2022-10-14 | PROSPECTS         | L   | 0.391      | -            | -                | -                | -         |    -4.18 | AlekS, bobeksde, FRANSSON, hype, spooke   |
|           24 |     2260 | 2022-10-12 | ex-TITANS         | W   | 0.379      | -            | -                | -                | -         |     3.01 | oskar, rallen, shushan, suNny, supra      |
|           23 |     2273 | 2022-10-11 | IKLA              | L   | 0.373      | -            | -                | -                | -         |    -5.01 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           22 |     2479 | 2022-10-01 | forZe             | L   | 0.305      | -            | -                | -                | -         |    -3.14 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           21 |     2505 | 2022-09-30 | EPG Family        | W   | 0.298      | -            | -                | -                | -         |     4.18 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           20 |     2545 | 2022-09-28 | Aurora            | W   | 0.287      | -            | -                | -                | -         |     2.73 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           19 |     2558 | 2022-09-28 | ex-Finest         | L   | 0.285      | -            | -                | -                | -         |    -5.90 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           18 |     2612 | 2022-09-25 | Anonymo           | L   | 0.267      | -            | -                | -                | -         |    -6.90 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           17 |     2653 | 2022-09-24 | eSuba             | W   | 0.260      | -            | -                | -                | -         |     5.02 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           16 |     2707 | 2022-09-23 | xDDDD             | W   | 0.253      | -            | -                | -                | -         |     0.84 | PASHANOJ, Polt, shg, ViRESUS, voidex      |
|           15 |     2746 | 2022-09-22 | SINNERS           | L   | 0.246      | -            | -                | -                | -         |    -2.32 | beastik, forsyy, SHOCK, ZEDKO, Zero       |
|           14 |     2761 | 2022-09-22 | BLUEJAYS          | L   | 0.244      | -            | -                | -                | -         |    -1.59 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           13 |     2779 | 2022-09-21 | Aurora            | L   | 0.240      | -            | -                | -                | -         |    -5.53 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|           12 |     2816 | 2022-09-20 | Illuminar         | W   | 0.232      | -            | -                | -                | -         |     5.18 | EXUS, mASKED, morelz, reatz, TOAO         |
|           11 |     2863 | 2022-09-18 | MOUZ NXT          | W   | 0.219      | -            | -                | -                | -         |     3.15 | Chr1zN, Jimpphat, Nexius, Q-Q, zyyx       |
|           10 |     3007 | 2022-09-14 | ECSTATIC          | W   | 0.191      | -            | -                | -                | -         |     3.29 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|            9 |     3178 | 2022-09-09 | Tricked           | L   | 0.159      | -            | -                | -                | -         |    -1.55 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|            8 |     3207 | 2022-09-08 | Young Ninjas      | W   | 0.154      | -            | -                | -                | -         |     3.07 | adamb, eraa, maxster, nilo, ztr           |
|            7 |     3383 | 2022-09-01 | Viperio           | L   | 0.107      | -            | -                | -                | -         |    -2.34 | arTisT, Extinct, Girafffe, Gizmy, Tadpole |
|            6 |     3398 | 2022-09-01 | EYEBALLERS        | W   | 0.104      | -            | -                | -                | -         |     2.01 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|            5 |     3415 | 2022-08-31 | tokyoxd           | W   | 0.099      | -            | -                | -                | -         |     0.24 | bevve, entz, ifan, ravenlot, v1ze         |
|            4 |     3578 | 2022-08-25 | B8                | W   | 0.058      | -            | -                | -                | -         |     0.35 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|            3 |     3674 | 2022-08-21 | HAVU              | L   | 0.033      | -            | -                | -                | -         |    -0.36 | Adam9130, CYPHER, dobbo, draken, RuStY    |
|            2 |     3686 | 2022-08-21 | Eternal Fire      | W   | 0.033      | -            | -                | -                | -         |     0.63 | imoRR, MAJ3R, paz, woxic, XANTARES        |
|            1 |     3750 | 2022-08-18 | Hotspurs          | W   | 0.012      | -            | -                | -                | -         |     0.05 | flaw, Griller, magi, n1xen, nomiss        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,573.42)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-04 |      0.734 | $1,413.00      | $1,037.12       |
| 2022-10-01 |      0.307 | $5,000.00      | $1,536.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
