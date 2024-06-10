### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, Verttzzz<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  893.8<br />
<br />
Final Rank Value (893.8) = Starting Rank Value (935.5) + Head To Head Adjustments (-41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.259[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 935.5
- 400 + ( ( 0.269 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 935.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |       52 | 2024-06-09 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -21.62 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           74 |      123 | 2024-06-08 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -7.44 | fino, manguss, sAvana1, The eLiVe, Verttzzz |
|           73 |      139 | 2024-06-08 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -22.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           72 |      239 | 2024-06-06 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -6.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           71 |      257 | 2024-06-06 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.42 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           70 |      302 | 2024-06-05 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           69 |      339 | 2024-06-04 | INFINITE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           68 |      358 | 2024-06-04 | DMS               | W   | 1.000      | 0.500        | -                | 0.524 (0.262)    | 0 (0.000) |    17.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           67 |      381 | 2024-06-03 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.19 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           66 |      433 | 2024-06-01 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           65 |      454 | 2024-05-31 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -8.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           64 |      473 | 2024-05-30 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           63 |      532 | 2024-05-28 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -15.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           62 |      536 | 2024-05-28 | Rhyno             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           61 |      571 | 2024-05-26 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -11.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           60 |      588 | 2024-05-25 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.65 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           59 |      619 | 2024-05-23 | GUN5              | W   | 1.000      | 0.435        | 0.079 (0.034)    | -                | 0 (0.000) |    15.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           58 |      653 | 2024-05-22 | VENI VIDI VICI    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           57 |      743 | 2024-05-20 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           56 |      749 | 2024-05-20 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -20.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           55 |      801 | 2024-05-18 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -18.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           54 |      869 | 2024-05-16 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -11.31 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           53 |      880 | 2024-05-16 | B8                | L   | 1.000      | -            | -                | -                | -         |    -9.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           52 |     1005 | 2024-05-13 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           51 |     1093 | 2024-05-09 | BLEED             | L   | 0.987      | -            | -                | -                | -         |    -4.62 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           50 |     1167 | 2024-05-05 | RUSH B            | W   | 0.960      | -            | -                | -                | -         |    10.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           49 |     1198 | 2024-05-04 | Endpoint          | L   | 0.951      | -            | -                | -                | -         |   -15.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           48 |     1232 | 2024-05-02 | Permitta          | W   | 0.939      | 0.435        | -                | 0.972 (0.397)    | -         |    12.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           47 |     1258 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.932      | -            | -                | -                | -         |   -14.41 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           46 |     1265 | 2024-05-01 | ENCE Academy      | W   | 0.931      | -            | -                | -                | -         |     6.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           45 |     1270 | 2024-04-30 | GL Academy        | W   | 0.927      | -            | -                | -                | -         |     7.17 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           44 |     1288 | 2024-04-30 | ALTERNATE aTTaX   | L   | 0.925      | -            | -                | -                | -         |   -15.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           43 |     1404 | 2024-04-25 | ECLOT             | L   | 0.891      | -            | -                | -                | -         |    -7.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           42 |     1424 | 2024-04-24 | Permitta          | W   | 0.884      | 0.371        | -                | 0.972 (0.318)    | -         |    13.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           41 |     1443 | 2024-04-23 | ECLOT             | L   | 0.878      | -            | -                | -                | -         |    -7.61 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           40 |     1479 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.864      | 0.371        | 0.046 (0.015)    | -                | -         |    11.36 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           39 |     1553 | 2024-04-19 | BLEED             | L   | 0.852      | -            | -                | -                | -         |    -3.32 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           38 |     1612 | 2024-04-18 | Permitta          | W   | 0.844      | 0.371        | -                | 0.972 (0.304)    | -         |    13.36 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           37 |     1633 | 2024-04-17 | NOM               | L   | 0.839      | -            | -                | -                | -         |   -24.39 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           36 |     1672 | 2024-04-16 | SAW               | W   | 0.832      | 0.384        | 0.113 (0.036)    | 0.660 (0.211)    | -         |    22.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           35 |     1675 | 2024-04-16 | Secret            | W   | 0.831      | -            | -                | -                | -         |     2.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           34 |     1687 | 2024-04-15 | ENCE Academy      | L   | 0.826      | -            | -                | -                | -         |   -18.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           33 |     1721 | 2024-04-13 | BetBoom           | L   | 0.811      | -            | -                | -                | -         |    -1.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           32 |     1765 | 2024-04-11 | PGE Turow         | W   | 0.798      | -            | -                | -                | -         |     3.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           31 |     1937 | 2024-04-06 | Enterprise        | W   | 0.765      | -            | -                | -                | -         |    11.50 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           30 |     2039 | 2024-04-03 | Ninjas in Pyjamas | W   | 0.745      | 0.384        | 0.294 (0.084)    | -                | -         |    22.89 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           29 |     2167 | 2024-03-27 | B8                | L   | 0.700      | -            | -                | -                | -         |    -6.46 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           28 |     2308 | 2024-03-18 | ex-Preasy         | L   | 0.638      | -            | -                | -                | -         |    -9.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           27 |     2339 | 2024-03-17 | Passion UA        | W   | 0.631      | 0.371        | 0.088 (0.021)    | 0.905 (0.212)    | -         |    10.99 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           26 |     2347 | 2024-03-16 | SINNERS           | L   | 0.626      | -            | -                | -                | -         |    -7.39 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           25 |     2350 | 2024-03-16 | MOUZ NXT          | W   | 0.625      | 0.371        | 0.164 (0.038)    | 1.000 (0.231)    | -         |    12.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           24 |     2365 | 2024-03-15 | ECLOT             | L   | 0.619      | -            | -                | -                | -         |    -5.13 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           23 |     2369 | 2024-03-15 | Permitta          | W   | 0.618      | 0.371        | -                | 0.972 (0.223)    | -         |    10.77 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           22 |     2401 | 2024-03-14 | Passion UA        | L   | 0.612      | -            | -                | -                | -         |    -8.16 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           21 |     2470 | 2024-03-12 | MOUZ NXT          | W   | 0.598      | 0.371        | 0.164 (0.036)    | 1.000 (0.221)    | -         |    12.83 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           20 |     2512 | 2024-03-10 | Sashi             | W   | 0.585      | 0.358        | 0.174 (0.037)    | 1.000 (0.210)    | -         |    12.27 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           19 |     2536 | 2024-03-09 | Enterprise        | W   | 0.578      | -            | -                | -                | -         |     9.97 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           18 |     2621 | 2024-03-06 | GODSENT           | W   | 0.558      | -            | -                | -                | -         |     1.78 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           17 |     2670 | 2024-03-04 | Sangal            | L   | 0.545      | -            | -                | -                | -         |    -4.74 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           16 |     2723 | 2024-03-02 | Enterprise        | L   | 0.531      | -            | -                | -                | -         |    -7.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           15 |     2759 | 2024-02-28 | Sashi             | L   | 0.513      | -            | -                | -                | -         |    -4.92 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           14 |     2826 | 2024-02-25 | ECLOT             | L   | 0.491      | -            | -                | -                | -         |    -2.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           13 |     2872 | 2024-02-23 | Entropiq          | W   | 0.478      | -            | -                | -                | -         |     2.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           12 |     2915 | 2024-02-21 | Sashi             | L   | 0.465      | -            | -                | -                | -         |    -3.87 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           11 |     3018 | 2024-02-17 | Secret            | W   | 0.438      | -            | -                | -                | -         |     1.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO    |
|           10 |     3165 | 2024-02-10 | Zero Tenacity     | W   | 0.393      | 0.358        | 0.154 (0.022)    | -                | -         |     8.52 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            9 |     3224 | 2024-02-05 | Imperial fe       | W   | 0.359      | -            | -                | -                | -         |     8.11 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            8 |     3277 | 2024-02-03 | Sashi             | W   | 0.345      | 0.358        | 0.174 (0.022)    | -                | -         |     8.18 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            7 |     3331 | 2024-02-01 | Metizport         | L   | 0.332      | -            | -                | -                | -         |    -4.48 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            6 |     3475 | 2024-01-23 | M1X KS            | L   | 0.273      | -            | -                | -                | -         |    -2.14 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            5 |     3479 | 2024-01-23 | Viperio           | L   | 0.273      | -            | -                | -                | -         |    -7.86 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            4 |     3497 | 2024-01-22 | Rebels            | W   | 0.267      | -            | -                | -                | -         |     6.04 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            3 |     3503 | 2024-01-22 | PERA              | W   | 0.266      | -            | -                | -                | -         |     4.03 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            2 |     3505 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.266      | -            | -                | -                | -         |    -3.21 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |
|            1 |     4049 | 2024-01-09 | HAVU              | L   | 0.179      | -            | -                | -                | -         |    -4.13 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,014.99)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $653.00        | $653.00         |
| 2024-05-18 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-25 |      0.891 | $5,000.00      | $4,457.07       |
| 2024-04-14 |      0.819 | $1,600.00      | $1,310.43       |
| 2024-03-18 |      0.638 | $5,000.00      | $3,189.65       |
| 2024-03-17 |      0.634 | $639.00        | $404.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
