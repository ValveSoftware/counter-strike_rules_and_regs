### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  726.0<br />
<br />
Final Rank Value (726.0) = Starting Rank Value (738.5) + Head To Head Adjustments (-12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.5
- 400 + ( ( 0.175 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 738.5


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
|           35 |      921 | 2024-03-15 | Endpoint          | L   | 0.945      | -            | -                | -                | -         |   -11.96 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           34 |      955 | 2024-03-14 | Young Ninjas      | W   | 0.938      | -            | -                | -                | 0 (0.000) |     3.87 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           33 |     1134 | 2024-03-07 | Sashi             | L   | 0.892      | -            | -                | -                | -         |    -9.16 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           32 |     1273 | 2024-03-02 | INGLORIOUS        | W   | 0.858      | 0.143        | -                | 0.089 (0.011)    | 0 (0.000) |     6.78 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           31 |     1339 | 2024-02-27 | ECLOT             | L   | 0.831      | -            | -                | -                | -         |    -4.40 | Blytz, Dytor, forsyy, kreaz, nbqq        |
|           30 |     1412 | 2024-02-24 | ENCE Academy      | L   | 0.812      | -            | -                | -                | -         |    -9.29 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           29 |     2079 | 2024-01-21 | 3DMAX             | L   | 0.587      | -            | -                | -                | -         |    -3.37 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           28 |     2084 | 2024-01-21 | PERA              | L   | 0.586      | -            | -                | -                | -         |    -7.66 | Aaron, DGL, Kamion, msN, Porya           |
|           27 |     2088 | 2024-01-21 | Nexus             | L   | 0.585      | -            | -                | -                | -         |    -6.44 | BTN, ERSIN, ragga, s0und, XELLOW         |
|           26 |     2114 | 2024-01-20 | HEROIC            | L   | 0.580      | -            | -                | -                | -         |    -0.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           25 |     2129 | 2024-01-20 | Entropiq          | W   | 0.579      | 0.143        | 0.002 (0.000)    | 0.403 (0.033)    | 0 (0.000) |     9.13 | c0llins, Marix, mwlky, oxygeN, tiziaN    |
|           24 |     2181 | 2024-01-19 | Enterprise        | L   | 0.572      | -            | -                | -                | -         |    -4.60 | bajmi, Demho, ex1st, fr3nd, TOAO         |
|           23 |     2225 | 2024-01-18 | FORZE             | W   | 0.567      | 0.143        | 0.140 (0.011)    | 0.784 (0.063)    | 0 (0.000) |    13.65 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           22 |     2254 | 2024-01-18 | AMKAL             | L   | 0.566      | -            | -                | -                | -         |    -3.28 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           21 |     2280 | 2024-01-17 | FreeESPI          | L   | 0.561      | -            | -                | -                | -         |   -10.87 | MAGILA, maty, slokkeR, spardaus, tAk     |
|           20 |     2430 | 2024-01-13 | Permitta          | L   | 0.534      | -            | -                | -                | -         |    -6.48 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           19 |     2432 | 2024-01-13 | Gaimin Gladiators | L   | 0.534      | -            | -                | -                | -         |    -0.83 | kraghen, Nodios, Patti, Queenix, salazar |
|           18 |     2434 | 2024-01-13 | Betera            | W   | 0.533      | 0.143        | 0.004 (0.000)    | 0.240 (0.018)    | 0 (0.000) |     8.26 | alex666, lollipop21k, MaSvAl, nifee, sad |
|           17 |     2444 | 2024-01-13 | LOADING           | W   | 0.532      | -            | -                | -                | 0 (0.000) |     3.27 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           16 |     2447 | 2024-01-13 | 00NATION          | W   | 0.532      | 0.143        | 0.005 (0.000)    | 0.068 (0.005)    | 0 (0.000) |     6.14 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           15 |     2522 | 2024-01-11 | HEROIC            | L   | 0.519      | -            | -                | -                | -         |    -0.15 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           14 |     2530 | 2024-01-11 | PrizyvaNet        | W   | 0.519      | -            | -                | -                | 0 (0.000) |     2.07 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           13 |     2544 | 2024-01-10 | XI                | W   | 0.514      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     3.66 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           12 |     2869 | 2023-12-07 | Endpoint          | L   | 0.285      | -            | -                | -                | -         |    -3.54 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           11 |     2899 | 2023-12-06 | ALTERNATE aTTaX   | L   | 0.278      | -            | -                | -                | -         |    -3.91 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           10 |     2939 | 2023-12-04 | paiN              | W   | 0.264      | 0.371        | 0.698 (0.068)    | 0.854 (0.084)    | 0 (0.000) |     8.29 | biguzera, kauez, lux, n1ssim, nqz        |
|            9 |     2973 | 2023-12-02 | FreeESPI          | L   | 0.253      | -            | -                | -                | -         |    -4.91 | fierre, maty, spardaus, tAk, tooi        |
|            8 |     3022 | 2023-11-29 | Preasy            | L   | 0.232      | -            | -                | -                | -         |    -1.25 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            7 |     3078 | 2023-11-25 | paiN              | W   | 0.205      | 0.371        | 0.698 (0.053)    | 0.854 (0.065)    | -         |     6.44 | biguzera, kauez, lux, n1ssim, nqz        |
|            6 |     3100 | 2023-11-24 | Zero Tenacity     | W   | 0.198      | 0.333        | 0.008 (0.001)    | 0.805 (0.053)    | -         |     3.58 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3129 | 2023-11-22 | Lazer Cats        | W   | 0.185      | -            | -                | -                | -         |     1.36 | 7oX1C, Burmylov, m1she4ka, neiter, t0kk  |
|            4 |     3160 | 2023-11-20 | Zero Tenacity     | W   | 0.171      | 0.333        | 0.008 (0.000)    | 0.805 (0.046)    | -         |     3.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3303 | 2023-11-15 | Aurora            | L   | 0.140      | -            | -                | -                | -         |    -0.11 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            2 |     3505 | 2023-11-06 | ex-Anonymo        | L   | 0.078      | -            | -                | -                | -         |    -1.13 | lunAtic, reiko, SaMey, Sobol, virtuoso   |
|            1 |     3551 | 2023-11-04 | BOSS              | W   | 0.064      | 0.303        | 0.034 (0.001)    | 0.530 (0.010)    | -         |     1.42 | brett, Cryptic, d4rty, freshie, SLIGHT   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,232.66)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-02 |      0.253 | $500.00        | $126.70         |
| 2023-11-24 |      0.198 | $5,000.00      | $989.23         |
| 2023-11-06 |      0.078 | $1,500.00      | $116.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
