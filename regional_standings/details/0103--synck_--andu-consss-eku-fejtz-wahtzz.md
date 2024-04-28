### Roster Details<br />
Team Name: sYnck <br />
Roster: aNdu, consss, eku, fejtZ, Wahtzz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  790.1<br />
<br />
Final Rank Value (790.1) = Starting Rank Value (758.0) + Head To Head Adjustments (32.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 758.0
- 400 + ( ( 0.175 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 758.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      504 | 2023-01-23 | ECSTATIC           | L   | 1.000      | -            | -                | -                | -         |   -13.30 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           45 |      529 | 2023-01-22 | iNation            | L   | 1.000      | -            | -                | -                | -         |    -6.80 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           44 |      580 | 2023-01-20 | EC Brugge          | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.507 (0.188)    | 0 (0.000) |    12.29 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           43 |      623 | 2023-01-18 | Anonymo            | W   | 1.000      | 0.371        | -                | 0.388 (0.144)    | 0 (0.000) |     9.83 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           42 |      684 | 2023-01-15 | Flames Ascent      | W   | 1.000      | 0.371        | 0.001 (0.000)    | 0.120 (0.045)    | 0 (0.000) |     8.76 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           41 |      722 | 2023-01-11 | Anonymo            | L   | 0.985      | -            | -                | -                | -         |   -21.25 | Demho, innocent, mwlky, SZPERO, Vegi       |
|           40 |      866 | 2022-12-15 | Copenhagen Flames  | L   | 0.806      | -            | -                | -                | -         |    -5.15 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           39 |      990 | 2022-12-10 | MASONIC            | W   | 0.772      | 0.435        | 0.021 (0.007)    | 0.752 (0.252)    | 0 (0.000) |    14.74 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           38 |     1082 | 2022-12-07 | AVANGAR            | W   | 0.753      | 0.435        | 0.003 (0.001)    | 0.314 (0.103)    | 0 (0.000) |    12.57 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           37 |     1153 | 2022-12-05 | eSuba              | W   | 0.738      | 0.435        | 0.028 (0.009)    | 0.234 (0.075)    | 0 (0.000) |    15.45 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           36 |     1223 | 2022-12-03 | ex-Finest          | L   | 0.726      | -            | -                | -                | -         |    -7.36 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           35 |     1311 | 2022-11-30 | Astralis Talent    | W   | 0.705      | 0.143        | 0.021 (0.002)    | 0.522 (0.053)    | 0 (0.000) |    15.51 | Altekz, br0, jarko, Kristou, Patti         |
|           34 |     1398 | 2022-11-27 | Nexus              | W   | 0.685      | -            | -                | -                | 0 (0.000) |    10.53 | BTN, Ed1m, ERSIN, ragga, XELLOW            |
|           33 |     1425 | 2022-11-26 | Nemiga             | W   | 0.679      | -            | -                | -                | 0 (0.000) |     5.90 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           32 |     1669 | 2022-11-09 | ex-Into the Breach | L   | 0.565      | -            | -                | -                | -         |    -6.96 | Adam9130, CYPHER, dobbo, draken, RuStY     |
|           31 |     1681 | 2022-11-08 | Copenhagen Flames  | L   | 0.557      | -            | -                | -                | -         |    -3.69 | aNdu, consss, eku, fejtZ, Wahtzz           |
|           30 |     1916 | 2022-10-24 | HAVU               | L   | 0.458      | -            | -                | -                | -         |    -3.98 | Aerial, doto, spargo, xseveN, zehN         |
|           29 |     1952 | 2022-10-22 | FTW                | L   | 0.447      | -            | -                | -                | -         |    -4.86 | Ag1l, arrozdoce, DDias, stadodo, suka      |
|           28 |     1994 | 2022-10-21 | Young Ninjas       | L   | 0.438      | -            | -                | -                | -         |    -3.73 | adamb, eraa, maxster, nilo, ztr            |
|           27 |     2051 | 2022-10-19 | ex-Into the Breach | L   | 0.425      | -            | -                | -                | -         |    -5.17 | consss, eku, fejtZ, MakiG, Wahtzz          |
|           26 |     2077 | 2022-10-18 | PROSPECTS          | L   | 0.418      | -            | -                | -                | -         |    -3.74 | AlekS, bobeksde, FRANSSON, hype, spooke    |
|           25 |     2106 | 2022-10-16 | Nemiga             | L   | 0.407      | -            | -                | -                | -         |    -6.59 | 1eeR, BELCHONOKK, fostar, iDISBALANCE, Jyo |
|           24 |     2219 | 2022-10-13 | Tricked            | W   | 0.386      | 0.435        | 0.034 (0.006)    | 0.954 (0.160)    | -         |     9.53 | consss, eku, fejtZ, MakiG, Wahtzz          |
|           23 |     2276 | 2022-10-11 | HAVU               | W   | 0.373      | 0.435        | 0.041 (0.007)    | 0.600 (0.097)    | -         |     8.81 | Aerial, doto, spargo, xseveN, zehN         |
|           22 |     2662 | 2022-09-24 | Levadia            | W   | 0.259      | -            | -                | -                | 1 (0.259) |     1.73 | 1nstah, hY, klyrO, tsutskam, v1le          |
|           21 |     2947 | 2022-09-15 | PGE Turow          | L   | 0.200      | -            | -                | -                | -         |    -5.04 | eku, fejtZ, MakiG, Sickta, Wahtzz          |
|           20 |     2951 | 2022-09-15 | Viperio            | W   | 0.200      | -            | -                | -                | -         |     2.65 | arTisT, Extinct, Girafffe, Gizmy, Tadpole  |
|           19 |     2961 | 2022-09-15 | PGE Turow          | L   | 0.199      | -            | -                | -                | -         |    -5.05 | baljs, darko, gRuChA, kadziu, noise        |
|           18 |     2972 | 2022-09-15 | Nexus              | L   | 0.197      | -            | -                | -                | -         |    -2.79 | adamS, BTN, ragga, SEMINTE, XELLOW         |
|           17 |     3047 | 2022-09-12 | Infinite           | W   | 0.180      | -            | -                | -                | -         |     1.16 | Ed1m, mhN1, N0R1, zewts, zrkk              |
|           16 |     3054 | 2022-09-12 | Young Ninjas       | L   | 0.178      | -            | -                | -                | -         |    -1.53 | eku, fejtZ, MakiG, Sickta, Wahtzz          |
|           15 |     3075 | 2022-09-11 | Infinite           | W   | 0.173      | -            | -                | -                | -         |     1.09 | Ed1m, mhN1, N0R1, zewts, zrkk              |
|           14 |     3220 | 2022-09-08 | ECLOT              | W   | 0.153      | 0.143        | 0.046 (0.001)    | -                | -         |     3.90 | capseN, Dytor, K1-FiDa, nbqq, Valencio     |
|           13 |     3234 | 2022-09-07 | fnatic             | L   | 0.147      | -            | -                | -                | -         |    -0.08 | consss, eku, fejtZ, MakiG, Wahtzz          |
|           12 |     3239 | 2022-09-07 | Movistar Riders    | W   | 0.146      | -            | -                | -                | -         |     2.40 | consss, eku, fejtZ, MakiG, Wahtzz          |
|           11 |     3251 | 2022-09-06 | ex-TITANS          | W   | 0.140      | -            | -                | -                | -         |     1.49 | consss, eku, fejtZ, MakiG, Wahtzz          |
|           10 |     3255 | 2022-09-06 | ROYALS             | W   | 0.139      | -            | -                | -                | -         |     0.52 | consss, eku, fejtZ, MakiG, Wahtzz          |
|            9 |     3265 | 2022-09-05 | ECLOT              | L   | 0.133      | -            | -                | -                | -         |    -0.80 | capseN, Dytor, K1-FiDa, nbqq, Valencio     |
|            8 |     3441 | 2022-08-30 | 500                | L   | 0.091      | -            | -                | -                | -         |    -0.42 | consss, eku, fejtZ, MakiG, Wahtzz          |
|            7 |     3467 | 2022-08-28 | SD Invicta         | W   | 0.080      | -            | -                | -                | -         |     0.42 | AwwEzz, LeeN, maty, tAk, tooi              |
|            6 |     3475 | 2022-08-28 | X                  | W   | 0.079      | -            | -                | -                | -         |     0.47 | arbnorz, cerber, deb0, gejmzilla, v1w      |
|            5 |     3483 | 2022-08-28 | Wolsung            | W   | 0.078      | -            | -                | -                | -         |     0.29 | discplex, hyskeee, krii, msn, shield       |
|            4 |     3594 | 2022-08-24 | EYEBALLERS         | W   | 0.051      | 0.435        | 0.017 (0.000)    | 0.776 (0.017)    | -         |     1.17 | consss, eku, fejtZ, MakiG, Wahtzz          |
|            3 |     3633 | 2022-08-23 | ECLOT              | L   | 0.045      | -            | -                | -                | -         |    -0.26 | consss, eku, fejtZ, MakiG, Wahtzz          |
|            2 |     3680 | 2022-08-21 | K23                | L   | 0.033      | -            | -                | -                | -         |    -0.76 | consss, eku, fejtZ, MakiG, Wahtzz          |
|            1 |     3687 | 2022-08-21 | Looking For Org    | W   | 0.033      | -            | -                | -                | -         |     0.18 | consss, eku, fejtZ, MakiG, Wahtzz          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($906.38)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
