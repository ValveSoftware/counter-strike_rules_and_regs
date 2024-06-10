### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1441.4<br />
<br />
Final Rank Value (1441.4) = Starting Rank Value (1626.9) + Head To Head Adjustments (-185.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.735[<sup>1</sup>](#table2)
- Bounty Collected: 0.586[<sup>2</sup>](#table1)
- Opponent Network: 0.370[<sup>2</sup>](#table1)
- LAN Wins: 0.770[<sup>2</sup>](#table1)

The average of these factors is 0.615<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1626.9
- 400 + ( ( 0.615 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1626.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           85 |        4 | 2024-06-10 | Imperial      | W   | 1.000      | 0.384        | 0.415 (0.160)    | 0.799 (0.307)    | -         |    13.79 | biguzera, kauez, lux, nqz, snow   |
|           84 |       35 | 2024-06-09 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     3.51 | biguzera, kauez, lux, nqz, snow   |
|           83 |       91 | 2024-06-08 | Hype          | W   | 1.000      | -            | -                | -                | -         |     0.62 | biguzera, kauez, lux, nqz, snow   |
|           82 |      127 | 2024-06-08 | Dusty Roots   | W   | 1.000      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, snow   |
|           81 |      149 | 2024-06-07 | Corinthians   | W   | 1.000      | -            | -                | -                | -         |     0.37 | biguzera, kauez, lux, nqz, snow   |
|           80 |      199 | 2024-06-06 | Galorys       | W   | 1.000      | -            | -                | -                | -         |     1.00 | biguzera, kauez, lux, nqz, snow   |
|           79 |      208 | 2024-06-06 | Sharks        | L   | 1.000      | -            | -                | -                | -         |   -28.14 | biguzera, kauez, lux, nqz, snow   |
|           78 |      277 | 2024-06-05 | Fluxo         | W   | 1.000      | -            | -                | -                | -         |     3.50 | biguzera, kauez, lux, nqz, snow   |
|           77 |      329 | 2024-06-04 | ODDIK         | W   | 1.000      | -            | -                | -                | -         |     1.56 | biguzera, kauez, lux, nqz, snow   |
|           76 |      658 | 2024-05-22 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -11.08 | biguzera, kauez, lux, nqz, snow   |
|           75 |      661 | 2024-05-22 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -12.03 | biguzera, kauez, lux, nqz, snow   |
|           74 |      767 | 2024-05-19 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |   -22.75 | biguzera, kauez, lux, nqz, snow   |
|           73 |      777 | 2024-05-19 | OG            | W   | 1.000      | 0.769        | 0.249 (0.192)    | -                | -         |     6.51 | biguzera, kauez, lux, nqz, snow   |
|           72 |      791 | 2024-05-18 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |   -23.99 | biguzera, kauez, lux, nqz, snow   |
|           71 |     1014 | 2024-05-12 | 9z            | W   | 1.000      | 0.435        | 0.194 (0.084)    | 0.724 (0.315)    | -         |     8.79 | biguzera, kauez, lux, nqz, snow   |
|           70 |     1046 | 2024-05-11 | BESTIA        | W   | 1.000      | -            | -                | -                | -         |     1.21 | biguzera, kauez, lux, nqz, snow   |
|           69 |     1075 | 2024-05-10 | RED Canids    | W   | 0.993      | 0.435        | -                | 0.756 (0.326)    | -         |     3.25 | biguzera, kauez, lux, nqz, snow   |
|           68 |     1085 | 2024-05-09 | Fluxo         | L   | 0.989      | -            | -                | -                | -         |   -28.42 | biguzera, kauez, lux, nqz, snow   |
|           67 |     1091 | 2024-05-09 | Fluxo         | W   | 0.988      | -            | -                | -                | -         |     2.40 | biguzera, kauez, lux, nqz, snow   |
|           66 |     1110 | 2024-05-08 | RED Canids    | W   | 0.981      | 0.450        | -                | 0.756 (0.334)    | -         |     2.89 | biguzera, kauez, lux, nqz, snow   |
|           65 |     1112 | 2024-05-08 | RED Canids    | L   | 0.981      | -            | -                | -                | -         |   -28.41 | biguzera, kauez, lux, nqz, snow   |
|           64 |     1116 | 2024-05-08 | Galorys       | W   | 0.980      | -            | -                | -                | -         |     0.58 | biguzera, kauez, lux, nqz, snow   |
|           63 |     1118 | 2024-05-08 | Galorys       | W   | 0.980      | -            | -                | -                | -         |     0.59 | biguzera, kauez, lux, nqz, snow   |
|           62 |     1131 | 2024-05-07 | W7M           | W   | 0.974      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           61 |     1151 | 2024-05-06 | W7M           | W   | 0.967      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           60 |     1152 | 2024-05-06 | W7M           | W   | 0.966      | -            | -                | -                | -         |     0.50 | biguzera, kauez, lux, nqz, snow   |
|           59 |     1164 | 2024-05-05 | KRÜ           | W   | 0.961      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, nqz, snow   |
|           58 |     1388 | 2024-04-25 | Solid         | W   | 0.894      | -            | -                | -                | -         |     0.62 | biguzera, kauez, lux, nqz, nyezin |
|           57 |     1390 | 2024-04-25 | Solid         | W   | 0.894      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, nyezin |
|           56 |     1409 | 2024-04-24 | ODDIK         | W   | 0.888      | -            | -                | -                | -         |     0.92 | biguzera, kauez, lux, nqz, nyezin |
|           55 |     1410 | 2024-04-24 | ODDIK         | L   | 0.888      | -            | -                | -                | -         |   -27.19 | biguzera, kauez, lux, nqz, nyezin |
|           54 |     1482 | 2024-04-20 | Imperial      | W   | 0.861      | 0.589        | 0.415 (0.211)    | 0.799 (0.405)    | 1 (0.861) |    10.93 | biguzera, kauez, lux, nqz, nyezin |
|           53 |     1491 | 2024-04-20 | MIBR          | W   | 0.860      | 0.589        | 0.284 (0.144)    | 0.750 (0.380)    | 1 (0.860) |    15.75 | biguzera, kauez, lux, nqz, nyezin |
|           52 |     1513 | 2024-04-20 | Imperial      | L   | 0.857      | -            | -                | -                | -         |   -15.86 | biguzera, kauez, lux, nqz, nyezin |
|           51 |     1514 | 2024-04-19 | MIBR          | L   | 0.856      | -            | -                | -                | -         |   -12.02 | biguzera, kauez, lux, nqz, nyezin |
|           50 |     1527 | 2024-04-19 | Imperial      | W   | 0.854      | 0.143        | 0.415 (0.051)    | -                | -         |    10.61 | biguzera, kauez, lux, nqz, nyezin |
|           49 |     1543 | 2024-04-19 | MIBR          | W   | 0.853      | 0.589        | 0.284 (0.143)    | 0.750 (0.377)    | 1 (0.853) |    15.08 | biguzera, kauez, lux, nqz, nyezin |
|           48 |     1563 | 2024-04-18 | Fluxo         | W   | 0.849      | -            | -                | -                | -         |     1.88 | biguzera, kauez, lux, nqz, nyezin |
|           47 |     1566 | 2024-04-18 | MIBR          | L   | 0.848      | -            | -                | -                | -         |   -12.05 | biguzera, kauez, lux, nqz, nyezin |
|           46 |     1594 | 2024-04-18 | Monte         | W   | 0.846      | 0.589        | 0.179 (0.089)    | 0.686 (0.341)    | 1 (0.846) |     4.20 | biguzera, kauez, lux, nqz, nyezin |
|           45 |     1697 | 2024-04-14 | Imperial      | L   | 0.820      | -            | -                | -                | -         |   -15.38 | biguzera, kauez, lux, nqz, nyezin |
|           44 |     1708 | 2024-04-13 | ODDIK         | W   | 0.814      | -            | -                | -                | -         |     0.63 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     1740 | 2024-04-11 | MIBR          | L   | 0.802      | -            | -                | -                | -         |   -13.32 | biguzera, kauez, lux, nqz, nyezin |
|           42 |     1747 | 2024-04-11 | Sharks        | W   | 0.801      | -            | -                | -                | -         |     0.94 | biguzera, kauez, lux, nqz, nyezin |
|           41 |     1753 | 2024-04-11 | Imperial      | W   | 0.800      | -            | -                | -                | -         |     9.65 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     1788 | 2024-04-10 | RED Canids    | W   | 0.794      | -            | -                | -                | -         |     1.63 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     1831 | 2024-04-09 | Case          | W   | 0.788      | -            | -                | -                | -         |     0.43 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     1837 | 2024-04-09 | Case          | W   | 0.788      | -            | -                | -                | -         |     0.44 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     1856 | 2024-04-09 | Imperial      | L   | 0.786      | -            | -                | -                | -         |   -14.47 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     1878 | 2024-04-08 | Sharks        | W   | 0.780      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     1907 | 2024-04-07 | MIBR          | L   | 0.776      | -            | -                | -                | -         |   -14.41 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     1911 | 2024-04-07 | Galorys       | W   | 0.774      | -            | -                | -                | -         |     0.40 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     1948 | 2024-04-05 | Sharks        | W   | 0.759      | -            | -                | -                | -         |     0.21 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     1966 | 2024-04-04 | Sharks        | W   | 0.755      | -            | -                | -                | -         |     0.21 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     1974 | 2024-04-04 | Sharks        | W   | 0.754      | -            | -                | -                | -         |     0.21 | biguzera, kauez, lux, nqz, nyezin |
|           30 |     2201 | 2024-03-24 | Natus Vincere | L   | 0.680      | -            | -                | -                | -         |    -4.09 | biguzera, kauez, lux, n1ssim, nqz |
|           29 |     2212 | 2024-03-23 | HEROIC        | W   | 0.674      | 1.000        | 0.362 (0.244)    | 0.635 (0.428)    | 1 (0.674) |    15.19 | biguzera, kauez, lux, n1ssim, nqz |
|           28 |     2227 | 2024-03-22 | The MongolZ   | W   | 0.666      | 1.000        | 0.978 (0.652)    | 0.738 (0.491)    | 1 (0.666) |    17.45 | biguzera, kauez, lux, n1ssim, nqz |
|           27 |     2247 | 2024-03-21 | Virtus.pro    | L   | 0.660      | -            | -                | -                | -         |    -6.60 | biguzera, kauez, lux, n1ssim, nqz |
|           26 |     2255 | 2024-03-21 | Complexity    | L   | 0.659      | -            | -                | -                | -         |    -9.25 | biguzera, kauez, lux, n1ssim, nqz |
|           25 |     2292 | 2024-03-19 | SAW           | W   | 0.646      | -            | -                | -                | 1 (0.646) |     4.81 | biguzera, kauez, lux, n1ssim, nqz |
|           24 |     2307 | 2024-03-18 | ENCE          | W   | 0.638      | -            | -                | -                | 1 (0.638) |     6.76 | biguzera, kauez, lux, n1ssim, nqz |
|           23 |     2326 | 2024-03-17 | Eternal Fire  | L   | 0.633      | -            | -                | -                | -         |    -3.57 | biguzera, kauez, lux, n1ssim, nqz |
|           22 |     2335 | 2024-03-17 | Apeks         | W   | 0.632      | -            | -                | -                | 1 (0.632) |     1.72 | biguzera, kauez, lux, n1ssim, nqz |
|           21 |     2664 | 2024-03-04 | ODDIK         | W   | 0.546      | -            | -                | -                | 1 (0.546) |     0.61 | biguzera, kauez, lux, n1ssim, nqz |
|           20 |     2681 | 2024-03-03 | Imperial      | L   | 0.540      | -            | -                | -                | -         |   -10.24 | biguzera, kauez, lux, n1ssim, nqz |
|           19 |     2713 | 2024-03-02 | RED Canids    | W   | 0.533      | -            | -                | -                | -         |     0.93 | biguzera, kauez, lux, n1ssim, nqz |
|           18 |     2726 | 2024-03-01 | Legacy        | W   | 0.527      | -            | -                | -                | -         |     0.75 | biguzera, kauez, lux, n1ssim, nqz |
|           17 |     3315 | 2024-02-01 | W7M           | L   | 0.335      | -            | -                | -                | -         |   -10.42 | biguzera, kauez, lux, n1ssim, nqz |
|           16 |     3319 | 2024-02-01 | MIBR          | L   | 0.335      | -            | -                | -                | -         |    -5.46 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     3320 | 2024-02-01 | RED Canids    | W   | 0.334      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     3450 | 2024-01-24 | Sharks        | L   | 0.282      | -            | -                | -                | -         |    -8.59 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     3470 | 2024-01-23 | W7M           | W   | 0.274      | -            | -                | -                | -         |     0.10 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3496 | 2024-01-22 | inSanitY      | W   | 0.268      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3520 | 2024-01-21 | Case          | W   | 0.262      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3525 | 2024-01-21 | Imperial      | L   | 0.261      | -            | -                | -                | -         |    -5.03 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3567 | 2024-01-20 | Sharks        | W   | 0.253      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3606 | 2024-01-19 | Legacy        | L   | 0.248      | -            | -                | -                | -         |    -7.53 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3621 | 2024-01-19 | W7M           | W   | 0.247      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3777 | 2024-01-16 | Case          | L   | 0.227      | -            | -                | -                | -         |    -7.13 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     3820 | 2024-01-15 | Dusty Roots   | W   | 0.222      | -            | -                | -                | -         |     0.05 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     3844 | 2024-01-14 | Sharks        | L   | 0.215      | -            | -                | -                | -         |    -6.60 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     3849 | 2024-01-14 | RED Canids    | W   | 0.214      | -            | -                | -                | -         |     0.29 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     3855 | 2024-01-14 | ODDIK         | W   | 0.214      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     3872 | 2024-01-13 | LFO           | W   | 0.208      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($132,790.38)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-05-12 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-04-20 |      0.861 | $100,000.00    | $86,113.01      |
| 2024-04-15 |      0.828 | $5,000.00      | $4,138.02       |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
