### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [24](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1345.4<br />
<br />
Final Rank Value (1345.4) = Starting Rank Value (1339.5) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.584[<sup>1</sup>](#table2)
- Bounty Collected: 0.569[<sup>2</sup>](#table1)
- Opponent Network: 0.322[<sup>2</sup>](#table1)
- LAN Wins: 0.410[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1339.5
- 400 + ( ( 0.471 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1339.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |       93 | 2024-06-08 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -14.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           68 |      150 | 2024-06-07 | Sharks         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           67 |      206 | 2024-06-06 | MIBR           | W   | 1.000      | 0.450        | 0.284 (0.128)    | 0.750 (0.338)    | 0 (0.000) |    24.17 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           66 |      275 | 2024-06-05 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -23.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           65 |      327 | 2024-06-04 | Fluxo          | W   | 1.000      | 0.450        | 0.064 (0.029)    | 0.670 (0.302)    | 0 (0.000) |     5.69 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           64 |      410 | 2024-06-01 | G2             | L   | 1.000      | -            | -                | -                | -         |    -1.52 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           63 |      500 | 2024-05-29 | Vitality       | W   | 1.000      | 0.624        | 0.670 (0.418)    | 0.474 (0.296)    | 1 (1.000) |    30.48 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           62 |      540 | 2024-05-27 | Liquid         | W   | 1.000      | 0.624        | 0.501 (0.313)    | 0.732 (0.457)    | 1 (1.000) |    27.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           61 |      552 | 2024-05-27 | MOUZ           | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.570 (0.356)    | 1 (1.000) |    31.04 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           60 |      647 | 2024-05-22 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -10.62 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           59 |      649 | 2024-05-22 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -11.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           58 |      728 | 2024-05-20 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.49 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           57 |      732 | 2024-05-20 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.51 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           56 |      735 | 2024-05-20 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -27.69 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           55 |      737 | 2024-05-20 | BESTIA         | W   | 1.000      | 0.450        | -                | 0.631 (0.284)    | 0 (0.000) |     3.40 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           54 |      758 | 2024-05-19 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -22.28 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           53 |      787 | 2024-05-18 | Fluxo          | W   | 1.000      | 0.371        | 0.064 (0.024)    | -                | -         |     7.64 | buda, HUASOPEEK, Luken, MartinezSa, max |
|           52 |      851 | 2024-05-16 | ODDIK          | W   | 1.000      | -            | -                | -                | -         |     2.71 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           51 |      859 | 2024-05-16 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -10.40 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           50 |      897 | 2024-05-15 | RED Canids     | W   | 1.000      | 0.450        | 0.112 (0.050)    | 0.756 (0.340)    | -         |     7.94 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           49 |      899 | 2024-05-15 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -24.11 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           48 |      901 | 2024-05-15 | Sharks         | W   | 1.000      | -            | -                | -                | -         |     4.17 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           47 |      958 | 2024-05-14 | ex-2GAME       | W   | 1.000      | -            | -                | -                | -         |     0.92 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           46 |      963 | 2024-05-14 | ex-2GAME       | W   | 1.000      | -            | -                | -                | -         |     0.93 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           45 |      972 | 2024-05-14 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     2.18 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           44 |      990 | 2024-05-13 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     2.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           43 |     1010 | 2024-05-12 | inSanitY       | W   | 1.000      | -            | -                | -                | -         |     1.73 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           42 |     1014 | 2024-05-12 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -8.79 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           41 |     1040 | 2024-05-11 | KRÜ            | W   | 1.000      | -            | -                | -                | -         |     1.88 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           40 |     1068 | 2024-05-10 | inSanitY       | W   | 0.995      | -            | -                | -                | -         |     1.69 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           39 |     1111 | 2024-05-08 | Sharks         | W   | 0.981      | -            | -                | -                | -         |     4.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           38 |     1153 | 2024-05-06 | Vikings KR     | W   | 0.966      | -            | -                | -                | -         |     1.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           37 |     1246 | 2024-05-01 | Case           | W   | 0.934      | 0.450        | -                | 0.656 (0.275)    | -         |     2.08 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           36 |     1248 | 2024-05-01 | Case           | W   | 0.933      | 0.450        | -                | 0.656 (0.275)    | -         |     2.13 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           35 |     1516 | 2024-04-19 | OG             | L   | 0.856      | -            | -                | -                | -         |   -15.16 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           34 |     1567 | 2024-04-18 | Imperial       | L   | 0.848      | -            | -                | -                | -         |    -8.02 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           33 |     1576 | 2024-04-18 | FURIA          | W   | 0.847      | 0.589        | 0.249 (0.124)    | 0.590 (0.294)    | 1 (0.847) |    21.10 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           32 |     1896 | 2024-04-08 | HEROIC         | L   | 0.778      | -            | -                | -                | -         |    -2.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           31 |     1905 | 2024-04-07 | G2             | L   | 0.776      | -            | -                | -                | -         |    -0.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           30 |     2864 | 2024-02-23 | FURIA          | W   | 0.482      | 0.143        | 0.249 (0.017)    | -                | -         |    12.92 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           29 |     2867 | 2024-02-23 | BESTIA         | W   | 0.481      | -            | -                | -                | -         |     2.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           28 |     2877 | 2024-02-22 | FURIA          | L   | 0.475      | -            | -                | -                | -         |    -2.17 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           27 |     2884 | 2024-02-22 | BESTIA         | W   | 0.474      | -            | -                | -                | -         |     2.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           26 |     2930 | 2024-02-20 | Solid          | W   | 0.462      | -            | -                | -                | -         |     1.30 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           25 |     2932 | 2024-02-20 | Case           | W   | 0.461      | -            | -                | -                | -         |     1.29 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           24 |     2936 | 2024-02-20 | Salao do Corte | W   | 0.461      | -            | -                | -                | -         |     0.09 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           23 |     2988 | 2024-02-18 | LA RUGONETA    | L   | 0.446      | -            | -                | -                | -         |   -13.84 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           22 |     3029 | 2024-02-16 | Fluxo          | L   | 0.434      | -            | -                | -                | -         |   -11.82 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           21 |     3054 | 2024-02-15 | Imperial       | L   | 0.428      | -            | -                | -                | -         |    -3.56 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           20 |     3057 | 2024-02-15 | Case           | W   | 0.428      | -            | -                | -                | -         |     1.00 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           19 |     3060 | 2024-02-15 | KRÜ            | W   | 0.427      | -            | -                | -                | -         |     0.61 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           18 |     3085 | 2024-02-14 | ex-2GAME       | W   | 0.422      | -            | -                | -                | -         |     0.39 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           17 |     3149 | 2024-02-12 | LA RUGONETA    | W   | 0.407      | -            | -                | -                | -         |     0.16 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           16 |     3232 | 2024-02-04 | Imperial       | L   | 0.354      | -            | -                | -                | -         |    -2.88 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           15 |     3252 | 2024-02-03 | W7M            | W   | 0.349      | -            | -                | -                | -         |     0.58 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           14 |     3285 | 2024-02-02 | Imperial       | W   | 0.341      | 0.143        | 0.415 (0.020)    | -                | -         |     8.05 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           13 |     3290 | 2024-02-02 | ODDIK          | W   | 0.341      | -            | -                | -                | -         |     1.24 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           12 |     3451 | 2024-01-24 | Imperial       | L   | 0.281      | -            | -                | -                | -         |    -2.23 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           11 |     3469 | 2024-01-23 | Fluxo          | W   | 0.274      | -            | -                | -                | -         |     1.06 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|           10 |     3492 | 2024-01-22 | Galorys        | W   | 0.268      | -            | -                | -                | -         |     0.55 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            9 |     3518 | 2024-01-21 | RED Canids     | L   | 0.263      | -            | -                | -                | -         |    -6.82 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            8 |     3521 | 2024-01-21 | W7M            | W   | 0.262      | -            | -                | -                | -         |     0.38 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            7 |     3528 | 2024-01-21 | Sharks         | W   | 0.260      | -            | -                | -                | -         |     0.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            6 |     3563 | 2024-01-20 | ODDIK          | L   | 0.254      | -            | -                | -                | -         |    -7.14 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            5 |     3600 | 2024-01-19 | adalYamigos    | W   | 0.249      | -            | -                | -                | -         |     0.16 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            4 |     3612 | 2024-01-19 | Legacy         | L   | 0.247      | -            | -                | -                | -         |    -6.74 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            3 |     3662 | 2024-01-18 | MIBR           | W   | 0.242      | -            | -                | -                | -         |     6.07 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            2 |     3711 | 2024-01-17 | MIBR           | W   | 0.235      | -            | -                | -                | -         |     5.98 | buda, dgt, HUASOPEEK, MartinezSa, max   |
|            1 |     3729 | 2024-01-17 | RED Canids     | W   | 0.234      | -            | -                | -                | -         |     1.37 | buda, dgt, HUASOPEEK, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,077.90)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-06-02 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-19 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-04-20 |      0.861 | $5,000.00      | $4,305.65       |
| 2024-04-14 |      0.818 | $4,000.00      | $3,272.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
