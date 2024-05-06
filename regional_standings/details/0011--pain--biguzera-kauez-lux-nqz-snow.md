### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1594.9<br />
<br />
Final Rank Value (1594.9) = Starting Rank Value (1791.2) + Head To Head Adjustments (-196.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.905[<sup>1</sup>](#table2)
- Bounty Collected: 0.596[<sup>2</sup>](#table1)
- Opponent Network: 0.421[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.730<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1791.2
- 400 + ( ( 0.730 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1791.2


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
|           74 |        0 | 2024-05-06 | W7M           | W   | 1.000      | -            | -                | -                | -         |     0.35 | biguzera, kauez, lux, nqz, snow   |
|           73 |        1 | 2024-05-06 | W7M           | W   | 1.000      | -            | -                | -                | -         |     0.36 | biguzera, kauez, lux, nqz, snow   |
|           72 |       13 | 2024-05-05 | KRÜ           | W   | 1.000      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, nqz, snow   |
|           71 |      237 | 2024-04-25 | Solid         | W   | 1.000      | 0.450        | 0.132 (0.060)    | -                | -         |     0.45 | biguzera, kauez, lux, nqz, nyezin |
|           70 |      239 | 2024-04-25 | Solid         | W   | 1.000      | 0.450        | 0.132 (0.060)    | -                | -         |     0.45 | biguzera, kauez, lux, nqz, nyezin |
|           69 |      258 | 2024-04-24 | ODDIK         | W   | 1.000      | 0.450        | -                | 0.547 (0.246)    | -         |     0.73 | biguzera, kauez, lux, nqz, nyezin |
|           68 |      259 | 2024-04-24 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -30.89 | biguzera, kauez, lux, nqz, nyezin |
|           67 |      331 | 2024-04-20 | Imperial      | W   | 1.000      | 0.589        | 0.656 (0.386)    | 0.965 (0.568)    | 1 (1.000) |    13.05 | biguzera, kauez, lux, nqz, nyezin |
|           66 |      340 | 2024-04-20 | MIBR          | W   | 1.000      | 0.589        | 0.638 (0.375)    | 0.940 (0.553)    | 1 (1.000) |    17.82 | biguzera, kauez, lux, nqz, nyezin |
|           65 |      362 | 2024-04-20 | Imperial      | L   | 1.000      | -            | -                | -                | -         |   -17.89 | biguzera, kauez, lux, nqz, nyezin |
|           64 |      363 | 2024-04-19 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -14.55 | biguzera, kauez, lux, nqz, nyezin |
|           63 |      376 | 2024-04-19 | Imperial      | W   | 1.000      | 0.143        | 0.656 (0.094)    | -                | -         |    12.77 | biguzera, kauez, lux, nqz, nyezin |
|           62 |      392 | 2024-04-19 | MIBR          | W   | 1.000      | 0.589        | 0.638 (0.375)    | 0.940 (0.553)    | 1 (1.000) |    17.30 | biguzera, kauez, lux, nqz, nyezin |
|           61 |      412 | 2024-04-18 | Fluxo         | W   | 1.000      | -            | -                | -                | -         |     1.76 | biguzera, kauez, lux, nqz, nyezin |
|           60 |      415 | 2024-04-18 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -14.54 | biguzera, kauez, lux, nqz, nyezin |
|           59 |      443 | 2024-04-18 | Monte         | W   | 1.000      | 0.589        | 0.188 (0.111)    | 0.589 (0.347)    | 1 (1.000) |     4.42 | biguzera, kauez, lux, nqz, nyezin |
|           58 |      546 | 2024-04-14 | Imperial      | L   | 1.000      | -            | -                | -                | -         |   -17.65 | biguzera, kauez, lux, nqz, nyezin |
|           57 |      557 | 2024-04-13 | ODDIK         | W   | 1.000      | 0.435        | -                | 0.547 (0.238)    | -         |     0.52 | biguzera, kauez, lux, nqz, nyezin |
|           56 |      589 | 2024-04-11 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -17.52 | biguzera, kauez, lux, nqz, nyezin |
|           55 |      596 | 2024-04-11 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     0.67 | biguzera, kauez, lux, nqz, nyezin |
|           54 |      602 | 2024-04-11 | Imperial      | W   | 1.000      | 0.143        | 0.656 (0.094)    | -                | -         |    12.85 | biguzera, kauez, lux, nqz, nyezin |
|           53 |      637 | 2024-04-10 | RED Canids    | W   | 1.000      | -            | -                | -                | -         |     1.12 | biguzera, kauez, lux, nqz, nyezin |
|           52 |      680 | 2024-04-09 | Case          | W   | 1.000      | 0.450        | -                | 0.578 (0.260)    | -         |     0.33 | biguzera, kauez, lux, nqz, nyezin |
|           51 |      686 | 2024-04-09 | Case          | W   | 1.000      | 0.450        | -                | 0.578 (0.260)    | -         |     0.33 | biguzera, kauez, lux, nqz, nyezin |
|           50 |      705 | 2024-04-09 | Imperial      | L   | 1.000      | -            | -                | -                | -         |   -16.81 | biguzera, kauez, lux, nqz, nyezin |
|           49 |      727 | 2024-04-08 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     0.69 | biguzera, kauez, lux, nqz, nyezin |
|           48 |      756 | 2024-04-07 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -20.05 | biguzera, kauez, lux, nqz, nyezin |
|           47 |      760 | 2024-04-07 | Galorys       | W   | 1.000      | -            | -                | -                | -         |     0.30 | biguzera, kauez, lux, nqz, nyezin |
|           46 |      797 | 2024-04-05 | Sharks        | W   | 0.993      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, nyezin |
|           45 |      815 | 2024-04-04 | Sharks        | W   | 0.988      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, nyezin |
|           44 |      823 | 2024-04-04 | Sharks        | W   | 0.988      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, nyezin |
|           43 |     1050 | 2024-03-24 | Natus Vincere | L   | 0.913      | -            | -                | -                | -         |    -5.65 | biguzera, kauez, lux, n1ssim, nqz |
|           42 |     1061 | 2024-03-23 | HEROIC        | W   | 0.907      | 1.000        | 0.347 (0.315)    | 0.712 (0.645)    | 1 (0.907) |    13.46 | biguzera, kauez, lux, n1ssim, nqz |
|           41 |     1076 | 2024-03-22 | TheMongolz    | W   | 0.900      | 1.000        | 0.253 (0.228)    | 0.595 (0.535)    | 1 (0.900) |     6.40 | biguzera, kauez, lux, n1ssim, nqz |
|           40 |     1096 | 2024-03-21 | Virtus.pro    | L   | 0.893      | -            | -                | -                | -         |   -10.73 | biguzera, kauez, lux, n1ssim, nqz |
|           39 |     1104 | 2024-03-21 | Complexity    | L   | 0.892      | -            | -                | -                | -         |   -19.16 | biguzera, kauez, lux, n1ssim, nqz |
|           38 |     1141 | 2024-03-19 | SAW           | W   | 0.879      | -            | -                | -                | 1 (0.879) |     6.40 | biguzera, kauez, lux, n1ssim, nqz |
|           37 |     1156 | 2024-03-18 | ENCE          | W   | 0.871      | -            | -                | -                | 1 (0.871) |     6.85 | biguzera, kauez, lux, n1ssim, nqz |
|           36 |     1175 | 2024-03-17 | Eternal Fire  | L   | 0.866      | -            | -                | -                | -         |   -11.99 | biguzera, kauez, lux, n1ssim, nqz |
|           35 |     1184 | 2024-03-17 | Apeks         | W   | 0.865      | -            | -                | -                | 1 (0.865) |     3.71 | biguzera, kauez, lux, n1ssim, nqz |
|           34 |     1513 | 2024-03-04 | ODDIK         | W   | 0.779      | -            | -                | -                | 1 (0.779) |     0.47 | biguzera, kauez, lux, n1ssim, nqz |
|           33 |     1530 | 2024-03-03 | Imperial      | L   | 0.773      | -            | -                | -                | -         |   -14.16 | biguzera, kauez, lux, n1ssim, nqz |
|           32 |     1562 | 2024-03-02 | RED Canids    | W   | 0.766      | -            | -                | -                | -         |     0.49 | biguzera, kauez, lux, n1ssim, nqz |
|           31 |     1575 | 2024-03-01 | Legacy        | W   | 0.761      | -            | -                | -                | -         |     0.66 | biguzera, kauez, lux, n1ssim, nqz |
|           30 |     2164 | 2024-02-01 | W7M           | L   | 0.569      | -            | -                | -                | -         |   -17.76 | biguzera, kauez, lux, n1ssim, nqz |
|           29 |     2168 | 2024-02-01 | MIBR          | L   | 0.568      | -            | -                | -                | -         |   -10.88 | biguzera, kauez, lux, n1ssim, nqz |
|           28 |     2169 | 2024-02-01 | RED Canids    | W   | 0.568      | -            | -                | -                | -         |     0.28 | biguzera, kauez, lux, n1ssim, nqz |
|           27 |     2299 | 2024-01-24 | Sharks        | L   | 0.515      | -            | -                | -                | -         |   -16.03 | biguzera, kauez, lux, n1ssim, nqz |
|           26 |     2319 | 2024-01-23 | W7M           | W   | 0.508      | -            | -                | -                | -         |     0.10 | biguzera, kauez, lux, n1ssim, nqz |
|           25 |     2345 | 2024-01-22 | inSanitY      | W   | 0.501      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|           24 |     2369 | 2024-01-21 | Case          | W   | 0.495      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, n1ssim, nqz |
|           23 |     2374 | 2024-01-21 | Imperial      | L   | 0.494      | -            | -                | -                | -         |    -8.71 | biguzera, kauez, lux, n1ssim, nqz |
|           22 |     2416 | 2024-01-20 | Sharks        | W   | 0.487      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, n1ssim, nqz |
|           21 |     2455 | 2024-01-19 | Legacy        | L   | 0.481      | -            | -                | -                | -         |   -14.88 | biguzera, kauez, lux, n1ssim, nqz |
|           20 |     2470 | 2024-01-19 | W7M           | W   | 0.480      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, n1ssim, nqz |
|           19 |     2626 | 2024-01-16 | Case          | L   | 0.461      | -            | -                | -                | -         |   -14.46 | biguzera, kauez, lux, n1ssim, nqz |
|           18 |     2669 | 2024-01-15 | Dusty Roots   | W   | 0.455      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|           17 |     2693 | 2024-01-14 | Sharks        | L   | 0.448      | -            | -                | -                | -         |   -14.02 | biguzera, kauez, lux, n1ssim, nqz |
|           16 |     2698 | 2024-01-14 | RED Canids    | W   | 0.448      | -            | -                | -                | -         |     0.16 | biguzera, kauez, lux, n1ssim, nqz |
|           15 |     2704 | 2024-01-14 | ODDIK         | W   | 0.447      | -            | -                | -                | -         |     0.15 | biguzera, kauez, lux, n1ssim, nqz |
|           14 |     2721 | 2024-01-13 | LFO           | W   | 0.441      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|           13 |     3235 | 2023-12-04 | ex-sYnck      | L   | 0.171      | -            | -                | -                | -         |    -5.37 | biguzera, kauez, lux, n1ssim, nqz |
|           12 |     3321 | 2023-11-29 | Sashi         | W   | 0.138      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, n1ssim, nqz |
|           11 |     3374 | 2023-11-25 | ex-sYnck      | L   | 0.112      | -            | -                | -                | -         |    -3.51 | biguzera, kauez, lux, n1ssim, nqz |
|           10 |     3435 | 2023-11-21 | Endpoint      | L   | 0.086      | -            | -                | -                | -         |    -2.70 | biguzera, kauez, lux, n1ssim, nqz |
|            9 |     3444 | 2023-11-20 | Entropiq      | W   | 0.080      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            8 |     3460 | 2023-11-19 | ex-Preasy     | L   | 0.074      | -            | -                | -                | -         |    -2.29 | biguzera, kauez, lux, n1ssim, nqz |
|            7 |     3469 | 2023-11-19 | BIG           | W   | 0.073      | -            | -                | -                | -         |     0.23 | biguzera, kauez, lux, n1ssim, nqz |
|            6 |     3493 | 2023-11-18 | ex-Preasy     | L   | 0.066      | -            | -                | -                | -         |    -2.06 | biguzera, kauez, lux, n1ssim, nqz |
|            5 |     3515 | 2023-11-17 | ex-Anonymo    | W   | 0.061      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz |
|            4 |     3521 | 2023-11-17 | MOUZ NXT      | W   | 0.060      | -            | -                | -                | -         |     0.03 | biguzera, kauez, lux, n1ssim, nqz |
|            3 |     3572 | 2023-11-16 | Nouns         | W   | 0.052      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, n1ssim, nqz |
|            2 |     3608 | 2023-11-15 | SINNERS       | W   | 0.046      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, n1ssim, nqz |
|            1 |     3670 | 2023-11-12 | Aurora        | W   | 0.026      | -            | -                | -                | -         |     0.21 | biguzera, kauez, lux, n1ssim, nqz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($127,367.99)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.79) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-04-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2023-11-21 |      0.087 | $2,500.00      | $217.69         |
| 2023-11-19 |      0.074 | $40,000.00     | $2,945.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
