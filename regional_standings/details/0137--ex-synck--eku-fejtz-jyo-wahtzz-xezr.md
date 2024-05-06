### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  724.5<br />
<br />
Final Rank Value (724.5) = Starting Rank Value (706.6) + Head To Head Adjustments (17.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.6
- 400 + ( ( 0.161 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 706.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |     1217 | 2024-03-15 | Endpoint          | L   | 0.852      | -            | -                | -                | -         |    -8.45 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           32 |     1251 | 2024-03-14 | Young Ninjas      | W   | 0.845      | 0.143        | 0.061 (0.007)    | 0.033 (0.004)    | 0 (0.000) |    16.00 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           31 |     1430 | 2024-03-07 | Sashi             | L   | 0.799      | -            | -                | -                | -         |    -4.86 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           30 |     1569 | 2024-03-02 | INGLORIOUS        | W   | 0.764      | 0.143        | -                | 0.073 (0.008)    | 0 (0.000) |     7.00 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           29 |     1635 | 2024-02-27 | ECLOT             | L   | 0.738      | -            | -                | -                | -         |    -2.75 | Blytz, Dytor, forsyy, kreaz, nbqq        |
|           28 |     1708 | 2024-02-24 | ENCE Academy      | L   | 0.718      | -            | -                | -                | -         |    -7.05 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           27 |     2375 | 2024-01-21 | 3DMAX             | L   | 0.494      | -            | -                | -                | -         |    -1.11 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           26 |     2380 | 2024-01-21 | PERA              | L   | 0.493      | -            | -                | -                | -         |    -4.13 | Aaron, DGL, Kamion, msN, Porya           |
|           25 |     2384 | 2024-01-21 | Nexus             | L   | 0.492      | -            | -                | -                | -         |    -3.84 | BTN, ERSIN, ragga, s0und, XELLOW         |
|           24 |     2410 | 2024-01-20 | HEROIC            | L   | 0.487      | -            | -                | -                | -         |    -0.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           23 |     2425 | 2024-01-20 | Entropiq          | W   | 0.485      | 0.143        | 0.001 (0.000)    | 0.315 (0.022)    | 0 (0.000) |     8.30 | c0llins, Marix, mwlky, oxygeN, tiziaN    |
|           22 |     2477 | 2024-01-19 | Enterprise        | L   | 0.479      | -            | -                | -                | -         |    -2.90 | bajmi, Demho, ex1st, fr3nd, TOAO         |
|           21 |     2521 | 2024-01-18 | FORZE             | W   | 0.473      | 0.143        | 0.015 (0.001)    | 0.127 (0.009)    | 0 (0.000) |     8.89 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           20 |     2550 | 2024-01-18 | AMKAL             | L   | 0.472      | -            | -                | -                | -         |    -0.94 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           19 |     2576 | 2024-01-17 | FreeESPI          | L   | 0.467      | -            | -                | -                | -         |    -8.98 | MAGILA, maty, slokkeR, spardaus, tAk     |
|           18 |     2726 | 2024-01-13 | Permitta          | L   | 0.441      | -            | -                | -                | -         |    -3.39 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           17 |     2728 | 2024-01-13 | Gaimin Gladiators | L   | 0.441      | -            | -                | -                | -         |    -0.48 | kraghen, Nodios, Patti, Queenix, salazar |
|           16 |     2730 | 2024-01-13 | Betera            | W   | 0.440      | 0.143        | 0.004 (0.000)    | 0.199 (0.013)    | 0 (0.000) |     7.27 | alex666, lollipop21k, MaSvAl, nifee, sad |
|           15 |     2740 | 2024-01-13 | LOADING           | W   | 0.439      | -            | -                | -                | 0 (0.000) |     3.04 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           14 |     2743 | 2024-01-13 | 00NATION          | W   | 0.439      | 0.143        | -                | 0.041 (0.003)    | 0 (0.000) |     3.05 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           13 |     2818 | 2024-01-11 | HEROIC            | L   | 0.426      | -            | -                | -                | -         |    -0.08 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           12 |     2826 | 2024-01-11 | PrizyvaNet        | W   | 0.426      | -            | -                | -                | 0 (0.000) |     1.99 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           11 |     2840 | 2024-01-10 | XI                | W   | 0.421      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     3.45 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           10 |     3165 | 2023-12-07 | Endpoint          | L   | 0.192      | -            | -                | -                | -         |    -1.58 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            9 |     3195 | 2023-12-06 | ALTERNATE aTTaX   | L   | 0.185      | -            | -                | -                | -         |    -1.04 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            8 |     3235 | 2023-12-04 | paiN              | W   | 0.171      | 0.371        | 0.786 (0.050)    | 0.869 (0.055)    | 0 (0.000) |     5.37 | biguzera, kauez, lux, n1ssim, nqz        |
|            7 |     3269 | 2023-12-02 | FreeESPI          | L   | 0.159      | -            | -                | -                | -         |    -3.02 | fierre, maty, spardaus, tAk, tooi        |
|            6 |     3318 | 2023-11-29 | ex-Preasy         | L   | 0.139      | -            | -                | -                | -         |    -0.67 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            5 |     3374 | 2023-11-25 | paiN              | W   | 0.112      | 0.371        | 0.786 (0.033)    | 0.869 (0.036)    | -         |     3.51 | biguzera, kauez, lux, n1ssim, nqz        |
|            4 |     3396 | 2023-11-24 | Zero Tenacity     | W   | 0.105      | 0.333        | 0.093 (0.003)    | 0.936 (0.033)    | -         |     2.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3425 | 2023-11-22 | Lazer Cats        | W   | 0.091      | 0.333        | 0.001 (0.000)    | -                | -         |     0.74 | 7oX1C, Burmylov, m1she4ka, neiter, t0kk  |
|            2 |     3456 | 2023-11-20 | Zero Tenacity     | W   | 0.078      | 0.333        | 0.093 (0.002)    | 0.936 (0.024)    | -         |     1.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     3599 | 2023-11-15 | Aurora            | L   | 0.046      | -            | -                | -                | -         |    -0.01 | eku, fejtZ, Jyo, Wahtzz, xezr            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($602.75)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-02 |      0.160 | $500.00        | $80.05          |
| 2023-11-24 |      0.105 | $5,000.00      | $522.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
