### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1424.6<br />
<br />
Final Rank Value (1424.6) = Starting Rank Value (1641.9) + Head To Head Adjustments (-217.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.750[<sup>1</sup>](#table2)
- Bounty Collected: 0.537[<sup>2</sup>](#table1)
- Opponent Network: 0.401[<sup>2</sup>](#table1)
- LAN Wins: 0.871[<sup>2</sup>](#table1)

The average of these factors is 0.640<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1641.9
- 400 + ( ( 0.640 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1641.9


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
|           77 |      158 | 2024-05-22 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -11.52 | biguzera, kauez, lux, nqz, snow   |
|           76 |      161 | 2024-05-22 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -12.52 | biguzera, kauez, lux, nqz, snow   |
|           75 |      267 | 2024-05-19 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |   -23.56 | biguzera, kauez, lux, nqz, snow   |
|           74 |      277 | 2024-05-19 | OG            | W   | 1.000      | 0.769        | 0.278 (0.213)    | -                | -         |     6.33 | biguzera, kauez, lux, nqz, snow   |
|           73 |      291 | 2024-05-18 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |   -24.77 | biguzera, kauez, lux, nqz, snow   |
|           72 |      514 | 2024-05-12 | 9z            | W   | 1.000      | 0.435        | 0.107 (0.047)    | 0.769 (0.334)    | -         |     7.26 | biguzera, kauez, lux, nqz, snow   |
|           71 |      546 | 2024-05-11 | BESTIA        | W   | 1.000      | -            | -                | -                | -         |     1.16 | biguzera, kauez, lux, nqz, snow   |
|           70 |      575 | 2024-05-10 | RED Canids    | W   | 1.000      | 0.435        | -                | 0.840 (0.365)    | -         |     3.00 | biguzera, kauez, lux, nqz, snow   |
|           69 |      585 | 2024-05-09 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |   -28.57 | biguzera, kauez, lux, nqz, snow   |
|           68 |      591 | 2024-05-09 | Fluxo         | W   | 1.000      | 0.450        | -                | 0.647 (0.291)    | -         |     2.58 | biguzera, kauez, lux, nqz, snow   |
|           67 |      610 | 2024-05-08 | RED Canids    | W   | 1.000      | 0.450        | -                | 0.840 (0.378)    | -         |     2.70 | biguzera, kauez, lux, nqz, snow   |
|           66 |      612 | 2024-05-08 | RED Canids    | L   | 1.000      | -            | -                | -                | -         |   -29.17 | biguzera, kauez, lux, nqz, snow   |
|           65 |      616 | 2024-05-08 | Galorys       | W   | 1.000      | -            | -                | -                | -         |     0.60 | biguzera, kauez, lux, nqz, snow   |
|           64 |      618 | 2024-05-08 | Galorys       | W   | 1.000      | -            | -                | -                | -         |     0.61 | biguzera, kauez, lux, nqz, snow   |
|           63 |      631 | 2024-05-07 | W7M           | W   | 1.000      | -            | -                | -                | -         |     0.53 | biguzera, kauez, lux, nqz, snow   |
|           62 |      651 | 2024-05-06 | W7M           | W   | 1.000      | -            | -                | -                | -         |     0.53 | biguzera, kauez, lux, nqz, snow   |
|           61 |      652 | 2024-05-06 | W7M           | W   | 1.000      | -            | -                | -                | -         |     0.53 | biguzera, kauez, lux, nqz, snow   |
|           60 |      664 | 2024-05-05 | KRÜ           | W   | 1.000      | -            | -                | -                | -         |     0.44 | biguzera, kauez, lux, nqz, snow   |
|           59 |      888 | 2024-04-25 | Solid         | W   | 0.974      | -            | -                | -                | -         |     0.68 | biguzera, kauez, lux, nqz, nyezin |
|           58 |      890 | 2024-04-25 | Solid         | W   | 0.973      | -            | -                | -                | -         |     0.68 | biguzera, kauez, lux, nqz, nyezin |
|           57 |      909 | 2024-04-24 | ODDIK         | W   | 0.967      | -            | -                | -                | -         |     1.10 | biguzera, kauez, lux, nqz, nyezin |
|           56 |      910 | 2024-04-24 | ODDIK         | L   | 0.967      | -            | -                | -                | -         |   -29.53 | biguzera, kauez, lux, nqz, nyezin |
|           55 |      982 | 2024-04-20 | Imperial      | W   | 0.940      | 0.589        | 0.373 (0.206)    | 0.889 (0.492)    | 1 (0.940) |    11.99 | biguzera, kauez, lux, nqz, nyezin |
|           54 |      991 | 2024-04-20 | MIBR          | W   | 0.939      | 0.589        | 0.308 (0.170)    | 0.805 (0.445)    | 1 (0.939) |    17.48 | biguzera, kauez, lux, nqz, nyezin |
|           53 |     1013 | 2024-04-20 | Imperial      | L   | 0.936      | -            | -                | -                | -         |   -17.12 | biguzera, kauez, lux, nqz, nyezin |
|           52 |     1014 | 2024-04-19 | MIBR          | L   | 0.935      | -            | -                | -                | -         |   -12.79 | biguzera, kauez, lux, nqz, nyezin |
|           51 |     1027 | 2024-04-19 | Imperial      | W   | 0.933      | 0.143        | 0.373 (0.050)    | -                | -         |    11.67 | biguzera, kauez, lux, nqz, nyezin |
|           50 |     1043 | 2024-04-19 | MIBR          | W   | 0.932      | 0.589        | 0.308 (0.169)    | 0.805 (0.442)    | 1 (0.932) |    17.11 | biguzera, kauez, lux, nqz, nyezin |
|           49 |     1063 | 2024-04-18 | Fluxo         | W   | 0.928      | -            | -                | -                | -         |     2.20 | biguzera, kauez, lux, nqz, nyezin |
|           48 |     1066 | 2024-04-18 | MIBR          | L   | 0.927      | -            | -                | -                | -         |   -12.40 | biguzera, kauez, lux, nqz, nyezin |
|           47 |     1094 | 2024-04-18 | Monte         | W   | 0.925      | 0.589        | 0.181 (0.098)    | 0.611 (0.333)    | 1 (0.925) |     4.31 | biguzera, kauez, lux, nqz, nyezin |
|           46 |     1197 | 2024-04-14 | Imperial      | L   | 0.899      | -            | -                | -                | -         |   -16.57 | biguzera, kauez, lux, nqz, nyezin |
|           45 |     1208 | 2024-04-13 | ODDIK         | W   | 0.893      | -            | -                | -                | -         |     0.75 | biguzera, kauez, lux, nqz, nyezin |
|           44 |     1240 | 2024-04-11 | MIBR          | L   | 0.881      | -            | -                | -                | -         |   -13.98 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     1247 | 2024-04-11 | Sharks        | W   | 0.880      | -            | -                | -                | -         |     0.98 | biguzera, kauez, lux, nqz, nyezin |
|           42 |     1253 | 2024-04-11 | Imperial      | W   | 0.879      | 0.143        | 0.373 (0.047)    | -                | -         |    10.81 | biguzera, kauez, lux, nqz, nyezin |
|           41 |     1288 | 2024-04-10 | RED Canids    | W   | 0.873      | -            | -                | -                | -         |     1.59 | biguzera, kauez, lux, nqz, nyezin |
|           40 |     1331 | 2024-04-09 | Case          | W   | 0.867      | -            | -                | -                | -         |     0.48 | biguzera, kauez, lux, nqz, nyezin |
|           39 |     1337 | 2024-04-09 | Case          | W   | 0.867      | -            | -                | -                | -         |     0.48 | biguzera, kauez, lux, nqz, nyezin |
|           38 |     1356 | 2024-04-09 | Imperial      | L   | 0.865      | -            | -                | -                | -         |   -15.55 | biguzera, kauez, lux, nqz, nyezin |
|           37 |     1378 | 2024-04-08 | Sharks        | W   | 0.859      | -            | -                | -                | -         |     0.98 | biguzera, kauez, lux, nqz, nyezin |
|           36 |     1407 | 2024-04-07 | MIBR          | L   | 0.855      | -            | -                | -                | -         |   -15.32 | biguzera, kauez, lux, nqz, nyezin |
|           35 |     1411 | 2024-04-07 | Galorys       | W   | 0.853      | -            | -                | -                | -         |     0.43 | biguzera, kauez, lux, nqz, nyezin |
|           34 |     1448 | 2024-04-05 | Sharks        | W   | 0.839      | -            | -                | -                | -         |     0.78 | biguzera, kauez, lux, nqz, nyezin |
|           33 |     1466 | 2024-04-04 | Sharks        | W   | 0.834      | -            | -                | -                | -         |     0.78 | biguzera, kauez, lux, nqz, nyezin |
|           32 |     1474 | 2024-04-04 | Sharks        | W   | 0.833      | -            | -                | -                | -         |     0.79 | biguzera, kauez, lux, nqz, nyezin |
|           31 |     1701 | 2024-03-24 | Natus Vincere | L   | 0.759      | -            | -                | -                | -         |    -4.39 | biguzera, kauez, lux, n1ssim, nqz |
|           30 |     1712 | 2024-03-23 | HEROIC        | W   | 0.753      | 1.000        | 0.322 (0.242)    | 0.662 (0.499)    | 1 (0.753) |    15.42 | biguzera, kauez, lux, n1ssim, nqz |
|           29 |     1727 | 2024-03-22 | TheMongolz    | W   | 0.745      | 1.000        | 0.176 (0.131)    | 0.583 (0.434)    | 1 (0.745) |     8.15 | biguzera, kauez, lux, n1ssim, nqz |
|           28 |     1747 | 2024-03-21 | Virtus.pro    | L   | 0.739      | -            | -                | -                | -         |    -7.65 | biguzera, kauez, lux, n1ssim, nqz |
|           27 |     1755 | 2024-03-21 | Complexity    | L   | 0.738      | -            | -                | -                | -         |   -13.23 | biguzera, kauez, lux, n1ssim, nqz |
|           26 |     1792 | 2024-03-19 | SAW           | W   | 0.725      | -            | -                | -                | 1 (0.725) |     5.72 | biguzera, kauez, lux, n1ssim, nqz |
|           25 |     1807 | 2024-03-18 | ENCE          | W   | 0.717      | -            | -                | -                | 1 (0.717) |     6.20 | biguzera, kauez, lux, n1ssim, nqz |
|           24 |     1826 | 2024-03-17 | Eternal Fire  | L   | 0.712      | -            | -                | -                | -         |    -4.31 | biguzera, kauez, lux, n1ssim, nqz |
|           23 |     1835 | 2024-03-17 | Apeks         | W   | 0.711      | -            | -                | -                | 1 (0.711) |     2.38 | biguzera, kauez, lux, n1ssim, nqz |
|           22 |     2164 | 2024-03-04 | ODDIK         | W   | 0.625      | -            | -                | -                | 1 (0.625) |     0.68 | biguzera, kauez, lux, n1ssim, nqz |
|           21 |     2181 | 2024-03-03 | Imperial      | L   | 0.619      | -            | -                | -                | -         |   -11.78 | biguzera, kauez, lux, n1ssim, nqz |
|           20 |     2213 | 2024-03-02 | RED Canids    | W   | 0.612      | -            | -                | -                | -         |     0.80 | biguzera, kauez, lux, n1ssim, nqz |
|           19 |     2226 | 2024-03-01 | Legacy        | W   | 0.607      | -            | -                | -                | -         |     0.64 | biguzera, kauez, lux, n1ssim, nqz |
|           18 |     2815 | 2024-02-01 | W7M           | L   | 0.414      | -            | -                | -                | -         |   -12.89 | biguzera, kauez, lux, n1ssim, nqz |
|           17 |     2819 | 2024-02-01 | MIBR          | L   | 0.414      | -            | -                | -                | -         |    -6.65 | biguzera, kauez, lux, n1ssim, nqz |
|           16 |     2820 | 2024-02-01 | RED Canids    | W   | 0.414      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     2950 | 2024-01-24 | Sharks        | L   | 0.361      | -            | -                | -                | -         |   -11.08 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     2970 | 2024-01-23 | W7M           | W   | 0.354      | -            | -                | -                | -         |     0.12 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     2996 | 2024-01-22 | inSanitY      | W   | 0.347      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3020 | 2024-01-21 | Case          | W   | 0.341      | -            | -                | -                | -         |     0.06 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3025 | 2024-01-21 | Imperial      | L   | 0.340      | -            | -                | -                | -         |    -6.47 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3067 | 2024-01-20 | Sharks        | W   | 0.333      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3106 | 2024-01-19 | Legacy        | L   | 0.327      | -            | -                | -                | -         |   -10.05 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3121 | 2024-01-19 | W7M           | W   | 0.326      | -            | -                | -                | -         |     0.09 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3277 | 2024-01-16 | Case          | L   | 0.307      | -            | -                | -                | -         |    -9.61 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3320 | 2024-01-15 | Dusty Roots   | W   | 0.301      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     3344 | 2024-01-14 | Sharks        | L   | 0.294      | -            | -                | -                | -         |    -9.10 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     3349 | 2024-01-14 | RED Canids    | W   | 0.293      | -            | -                | -                | -         |     0.26 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     3355 | 2024-01-14 | ODDIK         | W   | 0.293      | -            | -                | -                | -         |     0.20 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     3372 | 2024-01-13 | LFO           | W   | 0.287      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     3886 | 2023-12-04 | ex-sYnck      | L   | 0.017      | -            | -                | -                | -         |    -0.53 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($139,686.92)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.46) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-04-20 |      0.940 | $100,000.00    | $94,030.24      |
| 2024-04-15 |      0.907 | $5,000.00      | $4,533.88       |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
