### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, nyezin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1550.3<br />
<br />
Final Rank Value (1550.3) = Starting Rank Value (1784.2) + Head To Head Adjustments (-233.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.865[<sup>1</sup>](#table2)
- Bounty Collected: 0.559[<sup>2</sup>](#table1)
- Opponent Network: 0.443[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.717<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1784.2
- 400 + ( ( 0.717 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1784.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |       35 | 2024-04-20 | Imperial      | W   | 1.000      | 0.589        | 0.569 (0.335)    | 1.000 (0.589)    | 1 (1.000) |    14.23 | biguzera, kauez, lux, nqz, nyezin    |
|           79 |       44 | 2024-04-20 | MIBR          | W   | 1.000      | 0.589        | 0.305 (0.179)    | 0.853 (0.502)    | 1 (1.000) |    14.71 | biguzera, kauez, lux, nqz, nyezin    |
|           78 |       66 | 2024-04-20 | Imperial      | L   | 1.000      | -            | -                | -                | -         |   -16.74 | biguzera, kauez, lux, nqz, nyezin    |
|           77 |       67 | 2024-04-19 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -17.99 | biguzera, kauez, lux, nqz, nyezin    |
|           76 |       80 | 2024-04-19 | Imperial      | W   | 1.000      | 0.143        | 0.569 (0.081)    | -                | -         |    13.85 | biguzera, kauez, lux, nqz, nyezin    |
|           75 |       96 | 2024-04-19 | MIBR          | W   | 1.000      | 0.589        | 0.305 (0.179)    | 0.853 (0.502)    | 1 (1.000) |    13.51 | biguzera, kauez, lux, nqz, nyezin    |
|           74 |      116 | 2024-04-18 | Fluxo         | W   | 1.000      | -            | -                | -                | -         |     2.40 | biguzera, kauez, lux, nqz, nyezin    |
|           73 |      119 | 2024-04-18 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -18.88 | biguzera, kauez, lux, nqz, nyezin    |
|           72 |      147 | 2024-04-18 | Monte         | W   | 1.000      | 0.589        | 0.236 (0.139)    | 0.598 (0.352)    | 1 (1.000) |     2.70 | biguzera, kauez, lux, nqz, nyezin    |
|           71 |      250 | 2024-04-14 | Imperial      | L   | 1.000      | -            | -                | -                | -         |   -16.39 | biguzera, kauez, lux, nqz, nyezin    |
|           70 |      261 | 2024-04-13 | ODDIK         | W   | 1.000      | 0.435        | -                | 0.552 (0.240)    | -         |     0.67 | biguzera, kauez, lux, nqz, nyezin    |
|           69 |      293 | 2024-04-11 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -22.49 | biguzera, kauez, lux, nqz, nyezin    |
|           68 |      300 | 2024-04-11 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     0.94 | biguzera, kauez, lux, nqz, nyezin    |
|           67 |      306 | 2024-04-11 | Imperial      | W   | 1.000      | 0.143        | 0.569 (0.081)    | -                | -         |    13.97 | biguzera, kauez, lux, nqz, nyezin    |
|           66 |      341 | 2024-04-10 | RED Canids    | W   | 1.000      | -            | -                | -                | -         |     1.66 | biguzera, kauez, lux, nqz, nyezin    |
|           65 |      384 | 2024-04-09 | Case          | W   | 1.000      | 0.450        | -                | 0.767 (0.345)    | -         |     0.48 | biguzera, kauez, lux, nqz, nyezin    |
|           64 |      390 | 2024-04-09 | Case          | W   | 1.000      | 0.450        | -                | 0.767 (0.345)    | -         |     0.48 | biguzera, kauez, lux, nqz, nyezin    |
|           63 |      409 | 2024-04-09 | Imperial      | L   | 1.000      | -            | -                | -                | -         |   -15.26 | biguzera, kauez, lux, nqz, nyezin    |
|           62 |      431 | 2024-04-08 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     1.00 | biguzera, kauez, lux, nqz, nyezin    |
|           61 |      460 | 2024-04-07 | MIBR          | L   | 1.000      | -            | -                | -                | -         |   -25.08 | biguzera, kauez, lux, nqz, nyezin    |
|           60 |      464 | 2024-04-07 | Galorys       | W   | 1.000      | 0.435        | -                | 0.557 (0.242)    | -         |     0.44 | biguzera, kauez, lux, nqz, nyezin    |
|           59 |      501 | 2024-04-05 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     0.78 | biguzera, kauez, lux, nqz, nyezin    |
|           58 |      519 | 2024-04-04 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     0.78 | biguzera, kauez, lux, nqz, nyezin    |
|           57 |      527 | 2024-04-04 | Sharks        | W   | 1.000      | -            | -                | -                | -         |     0.79 | biguzera, kauez, lux, nqz, nyezin    |
|           56 |      754 | 2024-03-24 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -5.36 | biguzera, kauez, lux, n1ssim, nqz    |
|           55 |      765 | 2024-03-23 | HEROIC        | W   | 1.000      | 1.000        | 0.281 (0.281)    | 0.731 (0.731)    | 1 (1.000) |    14.78 | biguzera, kauez, lux, n1ssim, nqz    |
|           54 |      780 | 2024-03-22 | TheMongolz    | W   | 0.993      | 1.000        | 0.247 (0.246)    | 0.587 (0.582)    | 1 (0.993) |     6.14 | biguzera, kauez, lux, n1ssim, nqz    |
|           53 |      800 | 2024-03-21 | Virtus.pro    | L   | 0.987      | -            | -                | -                | -         |   -12.79 | biguzera, kauez, lux, n1ssim, nqz    |
|           52 |      808 | 2024-03-21 | Complexity    | L   | 0.985      | -            | -                | -                | -         |   -25.03 | biguzera, kauez, lux, n1ssim, nqz    |
|           51 |      845 | 2024-03-19 | SAW           | W   | 0.972      | -            | -                | -                | 1 (0.972) |     4.71 | biguzera, kauez, lux, n1ssim, nqz    |
|           50 |      860 | 2024-03-18 | ENCE          | W   | 0.965      | -            | -                | -                | 1 (0.965) |     5.84 | biguzera, kauez, lux, n1ssim, nqz    |
|           49 |      879 | 2024-03-17 | Eternal Fire  | L   | 0.960      | -            | -                | -                | -         |   -14.48 | biguzera, kauez, lux, n1ssim, nqz    |
|           48 |      888 | 2024-03-17 | Apeks         | W   | 0.958      | -            | -                | -                | 1 (0.958) |     3.34 | biguzera, kauez, lux, n1ssim, nqz    |
|           47 |     1217 | 2024-03-04 | ODDIK         | W   | 0.873      | -            | -                | -                | 1 (0.873) |     0.56 | biguzera, kauez, lux, n1ssim, nqz    |
|           46 |     1234 | 2024-03-03 | Imperial      | L   | 0.867      | -            | -                | -                | -         |   -14.39 | biguzera, kauez, lux, n1ssim, nqz    |
|           45 |     1266 | 2024-03-02 | RED Canids    | W   | 0.859      | -            | -                | -                | -         |     0.81 | biguzera, kauez, lux, n1ssim, nqz    |
|           44 |     1279 | 2024-03-01 | Legacy        | W   | 0.854      | -            | -                | -                | -         |     1.03 | biguzera, kauez, lux, n1ssim, nqz    |
|           43 |     1868 | 2024-02-01 | W7M           | L   | 0.662      | -            | -                | -                | -         |   -20.59 | biguzera, kauez, lux, n1ssim, nqz    |
|           42 |     1872 | 2024-02-01 | MIBR          | L   | 0.661      | -            | -                | -                | -         |   -17.33 | biguzera, kauez, lux, n1ssim, nqz    |
|           41 |     1873 | 2024-02-01 | RED Canids    | W   | 0.661      | -            | -                | -                | -         |     0.47 | biguzera, kauez, lux, n1ssim, nqz    |
|           40 |     2003 | 2024-01-24 | Sharks        | L   | 0.608      | -            | -                | -                | -         |   -18.86 | biguzera, kauez, lux, n1ssim, nqz    |
|           39 |     2023 | 2024-01-23 | W7M           | W   | 0.601      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, n1ssim, nqz    |
|           38 |     2049 | 2024-01-22 | inSanitY      | W   | 0.595      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz    |
|           37 |     2073 | 2024-01-21 | Case          | W   | 0.588      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, n1ssim, nqz    |
|           36 |     2078 | 2024-01-21 | Imperial      | L   | 0.587      | -            | -                | -                | -         |    -9.10 | biguzera, kauez, lux, n1ssim, nqz    |
|           35 |     2120 | 2024-01-20 | Sharks        | W   | 0.580      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, n1ssim, nqz    |
|           34 |     2159 | 2024-01-19 | Legacy        | L   | 0.575      | -            | -                | -                | -         |   -17.66 | biguzera, kauez, lux, n1ssim, nqz    |
|           33 |     2174 | 2024-01-19 | W7M           | W   | 0.573      | -            | -                | -                | -         |     0.13 | biguzera, kauez, lux, n1ssim, nqz    |
|           32 |     2330 | 2024-01-16 | Case          | L   | 0.554      | -            | -                | -                | -         |   -17.32 | biguzera, kauez, lux, n1ssim, nqz    |
|           31 |     2373 | 2024-01-15 | Dusty Roots   | W   | 0.548      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz    |
|           30 |     2397 | 2024-01-14 | Sharks        | L   | 0.542      | -            | -                | -                | -         |   -16.90 | biguzera, kauez, lux, n1ssim, nqz    |
|           29 |     2402 | 2024-01-14 | RED Canids    | W   | 0.541      | -            | -                | -                | -         |     0.27 | biguzera, kauez, lux, n1ssim, nqz    |
|           28 |     2408 | 2024-01-14 | ODDIK         | W   | 0.541      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, n1ssim, nqz    |
|           27 |     2425 | 2024-01-13 | LFO           | W   | 0.535      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz    |
|           26 |     2939 | 2023-12-04 | ex-sYnck      | L   | 0.264      | -            | -                | -                | -         |    -8.29 | biguzera, kauez, lux, n1ssim, nqz    |
|           25 |     3025 | 2023-11-29 | Sashi         | W   | 0.231      | -            | -                | -                | -         |     0.06 | biguzera, kauez, lux, n1ssim, nqz    |
|           24 |     3078 | 2023-11-25 | ex-sYnck      | L   | 0.205      | -            | -                | -                | -         |    -6.44 | biguzera, kauez, lux, n1ssim, nqz    |
|           23 |     3139 | 2023-11-21 | Endpoint      | L   | 0.180      | -            | -                | -                | -         |    -5.63 | biguzera, kauez, lux, n1ssim, nqz    |
|           22 |     3148 | 2023-11-20 | Entropiq      | W   | 0.174      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, n1ssim, nqz    |
|           21 |     3164 | 2023-11-19 | Preasy        | L   | 0.167      | -            | -                | -                | -         |    -5.18 | biguzera, kauez, lux, n1ssim, nqz    |
|           20 |     3173 | 2023-11-19 | BIG           | W   | 0.166      | 0.589        | 0.471 (0.046)    | -                | -         |     0.22 | biguzera, kauez, lux, n1ssim, nqz    |
|           19 |     3197 | 2023-11-18 | Preasy        | L   | 0.160      | -            | -                | -                | -         |    -4.96 | biguzera, kauez, lux, n1ssim, nqz    |
|           18 |     3219 | 2023-11-17 | ex-Anonymo    | W   | 0.154      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, n1ssim, nqz    |
|           17 |     3225 | 2023-11-17 | MOUZ NXT      | W   | 0.153      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, n1ssim, nqz    |
|           16 |     3276 | 2023-11-16 | Nouns         | W   | 0.145      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, n1ssim, nqz    |
|           15 |     3312 | 2023-11-15 | SINNERS       | W   | 0.139      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, n1ssim, nqz    |
|           14 |     3374 | 2023-11-12 | Aurora        | W   | 0.119      | 0.589        | 0.763 (0.053)    | -                | -         |     0.39 | biguzera, kauez, lux, n1ssim, nqz    |
|           13 |     3533 | 2023-11-04 | Legacy        | L   | 0.067      | -            | -                | -                | -         |    -2.08 | biguzera, cass1n, kauez, lux, nyezin |
|           12 |     3544 | 2023-11-04 | RED Canids    | W   | 0.066      | -            | -                | -                | -         |     0.03 | biguzera, cass1n, kauez, lux, nyezin |
|           11 |     3573 | 2023-11-02 | ODDIK         | W   | 0.055      | -            | -                | -                | -         |     0.01 | biguzera, cass1n, kauez, lux, nyezin |
|           10 |     3575 | 2023-11-02 | Sharks        | L   | 0.054      | -            | -                | -                | -         |    -1.69 | biguzera, cass1n, kauez, lux, nyezin |
|            9 |     3595 | 2023-11-01 | Boca Juniors  | W   | 0.048      | -            | -                | -                | -         |     0.00 | biguzera, cass1n, kauez, lux, nyezin |
|            8 |     3598 | 2023-11-01 | Imperial      | W   | 0.047      | -            | -                | -                | -         |     0.65 | biguzera, cass1n, kauez, lux, nyezin |
|            7 |     3623 | 2023-10-31 | Legacy        | W   | 0.042      | -            | -                | -                | -         |     0.02 | biguzera, cass1n, kauez, lux, nyezin |
|            6 |     3655 | 2023-10-30 | Corinthians   | W   | 0.035      | -            | -                | -                | -         |     0.00 | biguzera, cass1n, kauez, lux, nyezin |
|            5 |     3658 | 2023-10-30 | Legacy        | W   | 0.034      | -            | -                | -                | -         |     0.02 | biguzera, cass1n, kauez, lux, nyezin |
|            4 |     3687 | 2023-10-29 | BESTIA        | L   | 0.028      | -            | -                | -                | -         |    -0.89 | biguzera, cass1n, kauez, lux, nyezin |
|            3 |     3697 | 2023-10-29 | Legacy        | W   | 0.027      | -            | -                | -                | -         |     0.01 | biguzera, cass1n, kauez, lux, nyezin |
|            2 |     3781 | 2023-10-27 | RED Canids    | W   | 0.013      | -            | -                | -                | -         |     0.01 | biguzera, cass1n, kauez, lux, nyezin |
|            1 |     3840 | 2023-10-25 | C4 Base       | W   | 0.001      | -            | -                | -                | -         |     0.00 | biguzera, cass1n, kauez, lux, nyezin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($132,978.07)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.70) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-04-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2023-11-21 |      0.180 | $2,500.00      | $450.96         |
| 2023-11-19 |      0.167 | $40,000.00     | $6,677.89       |
| 2023-11-04 |      0.068 | $2,000.00      | $136.94         |
| 2023-11-04 |      0.067 | $4,000.00      | $269.71         |
| 2023-11-02 |      0.055 | $8,000.00      | $442.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
