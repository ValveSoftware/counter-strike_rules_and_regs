### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, HEN1, noway, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1371.5<br />
<br />
Final Rank Value (1371.5) = Starting Rank Value (1554.0) + Head To Head Adjustments (-182.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.700[<sup>1</sup>](#table2)
- Bounty Collected: 0.498[<sup>2</sup>](#table1)
- Opponent Network: 0.363[<sup>2</sup>](#table1)
- LAN Wins: 0.818[<sup>2</sup>](#table1)

The average of these factors is 0.595<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1554.0
- 400 + ( ( 0.595 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1554.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           87 |      147 | 2024-05-22 | 9z                | W   | 1.000      | 0.450        | 0.107 (0.048)    | 0.769 (0.346)    | -         |     9.41 | decenty, felps, HEN1, noway, VINI |
|           86 |      149 | 2024-05-22 | 9z                | W   | 1.000      | 0.450        | 0.107 (0.048)    | 0.769 (0.346)    | -         |    10.15 | decenty, felps, HEN1, noway, VINI |
|           85 |      159 | 2024-05-22 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -28.63 | decenty, felps, HEN1, noway, VINI |
|           84 |      163 | 2024-05-22 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     2.53 | decenty, felps, HEN1, noway, VINI |
|           83 |      200 | 2024-05-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -28.70 | decenty, felps, HEN1, noway, VINI |
|           82 |      202 | 2024-05-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -29.43 | decenty, felps, HEN1, noway, VINI |
|           81 |      359 | 2024-05-16 | 9z                | W   | 1.000      | 0.384        | 0.107 (0.041)    | 0.769 (0.295)    | -         |     8.79 | decenty, felps, HEN1, noway, VINI |
|           80 |      416 | 2024-05-15 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     4.86 | decenty, felps, HEN1, noway, VINI |
|           79 |      450 | 2024-05-14 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.69 | decenty, felps, HEN1, noway, VINI |
|           78 |      453 | 2024-05-14 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.69 | decenty, felps, HEN1, noway, VINI |
|           77 |      462 | 2024-05-14 | BESTIA            | W   | 1.000      | -            | -                | -                | -         |     1.68 | decenty, felps, HEN1, noway, VINI |
|           76 |      503 | 2024-05-13 | KRÜ               | W   | 1.000      | -            | -                | -                | -         |     0.97 | decenty, felps, HEN1, noway, VINI |
|           75 |      572 | 2024-05-10 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -30.11 | decenty, felps, HEN1, noway, VINI |
|           74 |      630 | 2024-05-07 | ODDIK             | W   | 1.000      | 0.435        | -                | 0.638 (0.277)    | -         |     1.92 | decenty, felps, HEN1, noway, VINI |
|           73 |      670 | 2024-05-05 | inSanitY          | W   | 1.000      | -            | -                | -                | -         |     0.22 | decenty, felps, HEN1, noway, VINI |
|           72 |      868 | 2024-04-26 | SAW               | L   | 0.978      | -            | -                | -                | -         |   -21.48 | decenty, felps, HEN1, noway, VINI |
|           71 |      911 | 2024-04-24 | Eternal Fire      | L   | 0.966      | -            | -                | -                | -         |    -4.43 | decenty, felps, HEN1, noway, VINI |
|           70 |      930 | 2024-04-23 | FaZe              | L   | 0.959      | -            | -                | -                | -         |    -1.81 | decenty, felps, HEN1, noway, VINI |
|           69 |      982 | 2024-04-20 | paiN              | L   | 0.940      | -            | -                | -                | -         |   -11.99 | decenty, felps, HEN1, noway, VINI |
|           68 |     1013 | 2024-04-20 | paiN              | W   | 0.936      | 0.589        | 0.464 (0.256)    | 0.829 (0.457)    | 1 (0.936) |    17.12 | decenty, felps, HEN1, noway, VINI |
|           67 |     1027 | 2024-04-19 | paiN              | L   | 0.933      | -            | -                | -                | -         |   -11.67 | decenty, felps, HEN1, noway, VINI |
|           66 |     1064 | 2024-04-18 | MIBR              | L   | 0.928      | -            | -                | -                | -         |   -10.21 | decenty, felps, HEN1, noway, VINI |
|           65 |     1067 | 2024-04-18 | 9z                | W   | 0.927      | 0.589        | 0.107 (0.059)    | 0.769 (0.419)    | 1 (0.927) |     6.96 | decenty, felps, HEN1, noway, VINI |
|           64 |     1068 | 2024-04-18 | Fluxo             | W   | 0.927      | -            | -                | -                | -         |     2.78 | decenty, felps, HEN1, noway, VINI |
|           63 |     1079 | 2024-04-18 | Metizport         | W   | 0.925      | 0.589        | 0.088 (0.048)    | 0.860 (0.468)    | 1 (0.925) |     2.04 | decenty, felps, HEN1, noway, VINI |
|           62 |     1182 | 2024-04-15 | MIBR              | L   | 0.907      | -            | -                | -                | -         |   -11.03 | decenty, felps, HEN1, noway, VINI |
|           61 |     1197 | 2024-04-14 | paiN              | W   | 0.899      | 0.435        | 0.464 (0.181)    | 0.829 (0.324)    | -         |    16.57 | decenty, felps, HEN1, noway, VINI |
|           60 |     1207 | 2024-04-13 | RED Canids        | W   | 0.894      | 0.435        | -                | 0.840 (0.327)    | -         |     2.58 | decenty, felps, HEN1, noway, VINI |
|           59 |     1243 | 2024-04-11 | adalYamigos       | W   | 0.881      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           58 |     1253 | 2024-04-11 | paiN              | L   | 0.879      | -            | -                | -                | -         |   -10.81 | decenty, felps, HEN1, noway, VINI |
|           57 |     1280 | 2024-04-10 | Fluxo             | L   | 0.874      | -            | -                | -                | -         |   -25.18 | decenty, felps, HEN1, noway, VINI |
|           56 |     1284 | 2024-04-10 | Fluxo             | W   | 0.873      | -            | -                | -                | -         |     2.12 | decenty, felps, HEN1, noway, VINI |
|           55 |     1300 | 2024-04-10 | MIBR              | L   | 0.872      | -            | -                | -                | -         |   -12.65 | decenty, felps, HEN1, noway, VINI |
|           54 |     1346 | 2024-04-09 | Solid             | W   | 0.866      | -            | -                | -                | -         |     0.71 | decenty, felps, HEN1, noway, VINI |
|           53 |     1351 | 2024-04-09 | Solid             | W   | 0.866      | -            | -                | -                | -         |     0.72 | decenty, felps, HEN1, noway, VINI |
|           52 |     1356 | 2024-04-09 | paiN              | W   | 0.865      | 0.143        | 0.464 (0.057)    | -                | -         |    15.55 | decenty, felps, HEN1, noway, VINI |
|           51 |     1410 | 2024-04-07 | RED Canids        | W   | 0.854      | -            | -                | -                | -         |     1.86 | decenty, felps, HEN1, noway, VINI |
|           50 |     1413 | 2024-04-07 | FURIA Academy     | W   | 0.852      | -            | -                | -                | -         |     0.14 | decenty, felps, HEN1, noway, VINI |
|           49 |     1471 | 2024-04-04 | ODDIK             | W   | 0.834      | -            | -                | -                | -         |     1.02 | decenty, felps, HEN1, noway, VINI |
|           48 |     1476 | 2024-04-04 | ODDIK             | W   | 0.833      | -            | -                | -                | -         |     1.03 | decenty, felps, HEN1, noway, VINI |
|           47 |     1479 | 2024-04-04 | BESTIA            | W   | 0.833      | -            | -                | -                | -         |     1.10 | decenty, felps, HEN1, noway, VINI |
|           46 |     1509 | 2024-04-03 | Case              | W   | 0.827      | -            | -                | -                | -         |     0.63 | decenty, felps, HEN1, noway, VINI |
|           45 |     1512 | 2024-04-03 | Case              | W   | 0.827      | -            | -                | -                | -         |     0.63 | decenty, felps, HEN1, noway, VINI |
|           44 |     1717 | 2024-03-23 | FaZe              | L   | 0.751      | -            | -                | -                | -         |    -1.70 | decenty, felps, HEN1, noway, VINI |
|           43 |     1730 | 2024-03-22 | Vitality          | L   | 0.744      | -            | -                | -                | -         |    -3.21 | decenty, felps, HEN1, noway, VINI |
|           42 |     1740 | 2024-03-21 | Spirit            | L   | 0.740      | -            | -                | -                | -         |    -1.96 | decenty, felps, HEN1, noway, VINI |
|           41 |     1758 | 2024-03-21 | Virtus.pro        | W   | 0.738      | 1.000        | 0.271 (0.200)    | 0.499 (0.368)    | 1 (0.738) |    17.71 | decenty, felps, HEN1, noway, VINI |
|           40 |     1777 | 2024-03-20 | GamerLegion       | W   | 0.732      | -            | -                | -                | 1 (0.732) |     3.75 | decenty, felps, HEN1, noway, VINI |
|           39 |     1790 | 2024-03-19 | Gaimin Gladiators | L   | 0.726      | -            | -                | -                | -         |   -18.61 | decenty, felps, HEN1, noway, VINI |
|           38 |     1806 | 2024-03-18 | Apeks             | W   | 0.717      | -            | -                | -                | 1 (0.717) |     3.55 | decenty, felps, HEN1, noway, VINI |
|           37 |     1824 | 2024-03-17 | HEROIC            | L   | 0.713      | -            | -                | -                | -         |    -6.03 | decenty, felps, HEN1, noway, VINI |
|           36 |     1833 | 2024-03-17 | ENCE              | W   | 0.711      | -            | -                | -                | 1 (0.711) |     8.27 | decenty, felps, HEN1, noway, VINI |
|           35 |     2063 | 2024-03-07 | Monte             | L   | 0.647      | -            | -                | -                | -         |   -15.91 | decenty, felps, HEN1, noway, VINI |
|           34 |     2181 | 2024-03-03 | paiN              | W   | 0.619      | 0.143        | 0.464 (0.041)    | -                | 1 (0.619) |    11.78 | decenty, felps, HEN1, noway, VINI |
|           33 |     2212 | 2024-03-02 | M80               | W   | 0.612      | -            | -                | -                | 1 (0.612) |     4.04 | decenty, felps, HEN1, noway, VINI |
|           32 |     2225 | 2024-03-01 | NRG               | W   | 0.607      | -            | -                | -                | 1 (0.607) |     0.50 | decenty, felps, HEN1, noway, VINI |
|           31 |     2316 | 2024-02-25 | Fluxo             | L   | 0.573      | -            | -                | -                | -         |   -16.97 | decenty, felps, HEN1, noway, VINI |
|           30 |     2348 | 2024-02-24 | BESTIA            | W   | 0.566      | -            | -                | -                | -         |     0.93 | decenty, felps, HEN1, noway, VINI |
|           29 |     2375 | 2024-02-22 | BESTIA            | L   | 0.554      | -            | -                | -                | -         |   -16.64 | decenty, felps, HEN1, noway, VINI |
|           28 |     2385 | 2024-02-22 | FURIA             | L   | 0.553      | -            | -                | -                | -         |   -13.10 | decenty, felps, HEN1, noway, VINI |
|           27 |     2400 | 2024-02-21 | ex-2GAME          | W   | 0.547      | -            | -                | -                | -         |     0.17 | decenty, felps, HEN1, noway, VINI |
|           26 |     2404 | 2024-02-21 | ex-2GAME          | W   | 0.547      | -            | -                | -                | -         |     0.17 | decenty, felps, HEN1, noway, VINI |
|           25 |     2413 | 2024-02-21 | LA RUGONETA       | W   | 0.545      | -            | -                | -                | -         |     0.08 | decenty, felps, HEN1, noway, VINI |
|           24 |     2505 | 2024-02-17 | adalYamigos       | W   | 0.520      | -            | -                | -                | -         |     0.15 | decenty, felps, HEN1, noway, VINI |
|           23 |     2534 | 2024-02-16 | Galorys           | W   | 0.512      | -            | -                | -                | -         |     0.29 | decenty, felps, HEN1, noway, VINI |
|           22 |     2537 | 2024-02-16 | Galorys           | W   | 0.512      | -            | -                | -                | -         |     0.29 | decenty, felps, HEN1, noway, VINI |
|           21 |     2554 | 2024-02-15 | 9z                | W   | 0.507      | -            | -                | -                | -         |     3.22 | decenty, felps, HEN1, noway, VINI |
|           20 |     2556 | 2024-02-15 | Fluxo             | W   | 0.507      | -            | -                | -                | -         |     0.78 | decenty, felps, HEN1, noway, VINI |
|           19 |     2561 | 2024-02-15 | Solid             | W   | 0.506      | -            | -                | -                | -         |     0.39 | decenty, felps, HEN1, noway, VINI |
|           18 |     2591 | 2024-02-14 | Yawara            | W   | 0.501      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           17 |     2628 | 2024-02-13 | RED Canids        | W   | 0.494      | -            | -                | -                | -         |     0.80 | decenty, felps, HEN1, noway, VINI |
|           16 |     2632 | 2024-02-13 | RED Canids        | L   | 0.494      | -            | -                | -                | -         |   -14.84 | decenty, felps, HEN1, noway, VINI |
|           15 |     2635 | 2024-02-13 | Solid             | W   | 0.494      | -            | -                | -                | -         |     0.38 | decenty, felps, HEN1, noway, VINI |
|           14 |     2732 | 2024-02-04 | 9z                | W   | 0.433      | -            | -                | -                | -         |     2.63 | decenty, felps, HEN1, noway, VINI |
|           13 |     2755 | 2024-02-03 | MIBR              | W   | 0.427      | -            | -                | -                | -         |     7.76 | decenty, felps, HEN1, noway, VINI |
|           12 |     2781 | 2024-02-02 | BESTIA            | W   | 0.421      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           11 |     2785 | 2024-02-02 | 9z                | L   | 0.421      | -            | -                | -                | -         |   -10.79 | decenty, felps, HEN1, noway, VINI |
|           10 |     2787 | 2024-02-02 | BESTIA            | W   | 0.420      | -            | -                | -                | -         |     0.53 | decenty, felps, HEN1, noway, VINI |
|            9 |     2951 | 2024-01-24 | 9z                | W   | 0.361      | -            | -                | -                | -         |     2.08 | decenty, felps, HEN1, noway, VINI |
|            8 |     2971 | 2024-01-23 | BESTIA            | W   | 0.353      | -            | -                | -                | -         |     0.45 | decenty, felps, HEN1, noway, VINI |
|            7 |     2991 | 2024-01-22 | Hype              | W   | 0.347      | -            | -                | -                | -         |     0.02 | decenty, felps, HEN1, noway, VINI |
|            6 |     3025 | 2024-01-21 | paiN              | W   | 0.340      | -            | -                | -                | -         |     6.47 | decenty, felps, HEN1, noway, VINI |
|            5 |     3064 | 2024-01-20 | Fluxo             | W   | 0.333      | -            | -                | -                | -         |     0.47 | decenty, felps, HEN1, noway, VINI |
|            4 |     3107 | 2024-01-19 | BESTIA            | L   | 0.327      | -            | -                | -                | -         |    -9.92 | decenty, felps, HEN1, noway, VINI |
|            3 |     3116 | 2024-01-19 | Galorys           | W   | 0.326      | -            | -                | -                | -         |     0.21 | decenty, felps, HEN1, noway, VINI |
|            2 |     3274 | 2024-01-16 | Legacy            | L   | 0.307      | -            | -                | -                | -         |    -9.34 | decenty, felps, HEN1, noway, VINI |
|            1 |     3319 | 2024-01-15 | Corinthians       | W   | 0.301      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112,169.84)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.37) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-04-20 |      0.940 | $50,000.00     | $47,015.12      |
| 2024-04-15 |      0.907 | $15,000.00     | $13,601.63      |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2024-02-25 |      0.573 | $15,000.00     | $8,597.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
