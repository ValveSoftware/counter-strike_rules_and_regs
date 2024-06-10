### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, HEN1, noway, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1383.0<br />
<br />
Final Rank Value (1383.0) = Starting Rank Value (1537.2) + Head To Head Adjustments (-154.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.724[<sup>1</sup>](#table2)
- Bounty Collected: 0.506[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.718[<sup>2</sup>](#table1)

The average of these factors is 0.570<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1537.2
- 400 + ( ( 0.570 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1537.2


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
|           94 |        4 | 2024-06-10 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -13.79 | decenty, felps, HEN1, noway, VINI |
|           93 |       32 | 2024-06-09 | RED Canids        | W   | 1.000      | 0.450        | 0.112 (0.050)    | 0.756 (0.340)    | -         |     7.77 | decenty, felps, HEN1, noway, VINI |
|           92 |       48 | 2024-06-09 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     1.82 | decenty, felps, HEN1, noway, VINI |
|           91 |       93 | 2024-06-08 | 9z                | W   | 1.000      | 0.450        | 0.194 (0.087)    | 0.724 (0.326)    | -         |    14.55 | decenty, felps, HEN1, noway, VINI |
|           90 |      153 | 2024-06-07 | Galorys           | W   | 1.000      | -            | -                | -                | -         |     1.18 | decenty, felps, HEN1, noway, VINI |
|           89 |      207 | 2024-06-06 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -23.73 | decenty, felps, HEN1, noway, VINI |
|           88 |      276 | 2024-06-05 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     3.93 | decenty, felps, HEN1, noway, VINI |
|           87 |      647 | 2024-05-22 | 9z                | W   | 1.000      | 0.450        | 0.194 (0.087)    | 0.724 (0.326)    | -         |    10.62 | decenty, felps, HEN1, noway, VINI |
|           86 |      649 | 2024-05-22 | 9z                | W   | 1.000      | 0.450        | 0.194 (0.087)    | 0.724 (0.326)    | -         |    11.51 | decenty, felps, HEN1, noway, VINI |
|           85 |      659 | 2024-05-22 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -27.95 | decenty, felps, HEN1, noway, VINI |
|           84 |      663 | 2024-05-22 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     3.16 | decenty, felps, HEN1, noway, VINI |
|           83 |      700 | 2024-05-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -28.59 | decenty, felps, HEN1, noway, VINI |
|           82 |      702 | 2024-05-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -29.34 | decenty, felps, HEN1, noway, VINI |
|           81 |      859 | 2024-05-16 | 9z                | W   | 1.000      | 0.384        | 0.194 (0.075)    | 0.724 (0.278)    | -         |    10.40 | decenty, felps, HEN1, noway, VINI |
|           80 |      916 | 2024-05-15 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     4.71 | decenty, felps, HEN1, noway, VINI |
|           79 |      950 | 2024-05-14 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.70 | decenty, felps, HEN1, noway, VINI |
|           78 |      953 | 2024-05-14 | W7M               | W   | 1.000      | -            | -                | -                | -         |     0.70 | decenty, felps, HEN1, noway, VINI |
|           77 |      962 | 2024-05-14 | BESTIA            | W   | 1.000      | -            | -                | -                | -         |     1.76 | decenty, felps, HEN1, noway, VINI |
|           76 |     1003 | 2024-05-13 | KRÜ               | W   | 1.000      | -            | -                | -                | -         |     1.03 | decenty, felps, HEN1, noway, VINI |
|           75 |     1072 | 2024-05-10 | BESTIA            | L   | 0.994      | -            | -                | -                | -         |   -29.85 | decenty, felps, HEN1, noway, VINI |
|           74 |     1130 | 2024-05-07 | ODDIK             | W   | 0.975      | -            | -                | -                | -         |     1.72 | decenty, felps, HEN1, noway, VINI |
|           73 |     1170 | 2024-05-05 | inSanitY          | W   | 0.960      | -            | -                | -                | -         |     0.68 | decenty, felps, HEN1, noway, VINI |
|           72 |     1368 | 2024-04-26 | SAW               | L   | 0.899      | -            | -                | -                | -         |   -19.98 | decenty, felps, HEN1, noway, VINI |
|           71 |     1411 | 2024-04-24 | Eternal Fire      | L   | 0.887      | -            | -                | -                | -         |    -3.73 | decenty, felps, HEN1, noway, VINI |
|           70 |     1430 | 2024-04-23 | FaZe              | L   | 0.880      | -            | -                | -                | -         |    -1.66 | decenty, felps, HEN1, noway, VINI |
|           69 |     1482 | 2024-04-20 | paiN              | L   | 0.861      | -            | -                | -                | -         |   -10.93 | decenty, felps, HEN1, noway, VINI |
|           68 |     1513 | 2024-04-20 | paiN              | W   | 0.857      | 0.589        | 0.437 (0.220)    | 0.877 (0.442)    | 1 (0.857) |    15.86 | decenty, felps, HEN1, noway, VINI |
|           67 |     1527 | 2024-04-19 | paiN              | L   | 0.854      | -            | -                | -                | -         |   -10.61 | decenty, felps, HEN1, noway, VINI |
|           66 |     1564 | 2024-04-18 | MIBR              | L   | 0.849      | -            | -                | -                | -         |    -9.79 | decenty, felps, HEN1, noway, VINI |
|           65 |     1567 | 2024-04-18 | 9z                | W   | 0.848      | 0.589        | 0.194 (0.097)    | 0.724 (0.361)    | 1 (0.848) |     8.02 | decenty, felps, HEN1, noway, VINI |
|           64 |     1568 | 2024-04-18 | Fluxo             | W   | 0.848      | -            | -                | -                | -         |     2.47 | decenty, felps, HEN1, noway, VINI |
|           63 |     1579 | 2024-04-18 | Metizport         | W   | 0.846      | 0.589        | -                | 0.706 (0.352)    | 1 (0.846) |     2.17 | decenty, felps, HEN1, noway, VINI |
|           62 |     1682 | 2024-04-15 | MIBR              | L   | 0.828      | -            | -                | -                | -         |   -10.45 | decenty, felps, HEN1, noway, VINI |
|           61 |     1697 | 2024-04-14 | paiN              | W   | 0.820      | 0.435        | 0.437 (0.156)    | 0.877 (0.313)    | -         |    15.38 | decenty, felps, HEN1, noway, VINI |
|           60 |     1707 | 2024-04-13 | RED Canids        | W   | 0.815      | -            | -                | -                | -         |     2.68 | decenty, felps, HEN1, noway, VINI |
|           59 |     1743 | 2024-04-11 | adalYamigos       | W   | 0.802      | -            | -                | -                | -         |     0.46 | decenty, felps, HEN1, noway, VINI |
|           58 |     1753 | 2024-04-11 | paiN              | L   | 0.800      | -            | -                | -                | -         |    -9.65 | decenty, felps, HEN1, noway, VINI |
|           57 |     1780 | 2024-04-10 | Fluxo             | L   | 0.795      | -            | -                | -                | -         |   -22.96 | decenty, felps, HEN1, noway, VINI |
|           56 |     1784 | 2024-04-10 | Fluxo             | W   | 0.794      | -            | -                | -                | -         |     1.91 | decenty, felps, HEN1, noway, VINI |
|           55 |     1800 | 2024-04-10 | MIBR              | L   | 0.793      | -            | -                | -                | -         |   -11.75 | decenty, felps, HEN1, noway, VINI |
|           54 |     1846 | 2024-04-09 | Solid             | W   | 0.787      | -            | -                | -                | -         |     0.68 | decenty, felps, HEN1, noway, VINI |
|           53 |     1851 | 2024-04-09 | Solid             | W   | 0.787      | -            | -                | -                | -         |     0.68 | decenty, felps, HEN1, noway, VINI |
|           52 |     1856 | 2024-04-09 | paiN              | W   | 0.786      | 0.143        | 0.437 (0.049)    | -                | -         |    14.47 | decenty, felps, HEN1, noway, VINI |
|           51 |     1910 | 2024-04-07 | RED Canids        | W   | 0.774      | -            | -                | -                | -         |     2.01 | decenty, felps, HEN1, noway, VINI |
|           50 |     1913 | 2024-04-07 | FURIA Academy     | W   | 0.773      | -            | -                | -                | -         |     0.13 | decenty, felps, HEN1, noway, VINI |
|           49 |     1971 | 2024-04-04 | ODDIK             | W   | 0.755      | -            | -                | -                | -         |     0.98 | decenty, felps, HEN1, noway, VINI |
|           48 |     1976 | 2024-04-04 | ODDIK             | W   | 0.754      | -            | -                | -                | -         |     0.99 | decenty, felps, HEN1, noway, VINI |
|           47 |     1979 | 2024-04-04 | BESTIA            | W   | 0.754      | -            | -                | -                | -         |     1.05 | decenty, felps, HEN1, noway, VINI |
|           46 |     2009 | 2024-04-03 | Case              | W   | 0.748      | -            | -                | -                | -         |     0.59 | decenty, felps, HEN1, noway, VINI |
|           45 |     2012 | 2024-04-03 | Case              | W   | 0.748      | -            | -                | -                | -         |     0.59 | decenty, felps, HEN1, noway, VINI |
|           44 |     2217 | 2024-03-23 | FaZe              | L   | 0.672      | -            | -                | -                | -         |    -1.59 | decenty, felps, HEN1, noway, VINI |
|           43 |     2230 | 2024-03-22 | Vitality          | L   | 0.665      | -            | -                | -                | -         |    -1.91 | decenty, felps, HEN1, noway, VINI |
|           42 |     2240 | 2024-03-21 | Spirit            | L   | 0.661      | -            | -                | -                | -         |    -1.92 | decenty, felps, HEN1, noway, VINI |
|           41 |     2258 | 2024-03-21 | Virtus.pro        | W   | 0.658      | 1.000        | 0.229 (0.151)    | 0.418 (0.275)    | 1 (0.658) |    16.02 | decenty, felps, HEN1, noway, VINI |
|           40 |     2277 | 2024-03-20 | GamerLegion       | W   | 0.653      | -            | -                | -                | 1 (0.653) |     2.75 | decenty, felps, HEN1, noway, VINI |
|           39 |     2290 | 2024-03-19 | Gaimin Gladiators | L   | 0.647      | -            | -                | -                | -         |   -16.21 | decenty, felps, HEN1, noway, VINI |
|           38 |     2306 | 2024-03-18 | Apeks             | W   | 0.638      | -            | -                | -                | 1 (0.638) |     2.55 | decenty, felps, HEN1, noway, VINI |
|           37 |     2324 | 2024-03-17 | HEROIC            | L   | 0.633      | -            | -                | -                | -         |    -3.97 | decenty, felps, HEN1, noway, VINI |
|           36 |     2333 | 2024-03-17 | ENCE              | W   | 0.632      | -            | -                | -                | 1 (0.632) |     8.73 | decenty, felps, HEN1, noway, VINI |
|           35 |     2563 | 2024-03-07 | Monte             | L   | 0.568      | -            | -                | -                | -         |   -13.87 | decenty, felps, HEN1, noway, VINI |
|           34 |     2681 | 2024-03-03 | paiN              | W   | 0.540      | -            | -                | -                | 1 (0.540) |    10.24 | decenty, felps, HEN1, noway, VINI |
|           33 |     2712 | 2024-03-02 | M80               | W   | 0.533      | -            | -                | -                | 1 (0.533) |     4.00 | decenty, felps, HEN1, noway, VINI |
|           32 |     2725 | 2024-03-01 | NRG               | W   | 0.527      | -            | -                | -                | 1 (0.527) |     0.57 | decenty, felps, HEN1, noway, VINI |
|           31 |     2816 | 2024-02-25 | Fluxo             | L   | 0.494      | -            | -                | -                | -         |   -14.64 | decenty, felps, HEN1, noway, VINI |
|           30 |     2848 | 2024-02-24 | BESTIA            | W   | 0.487      | -            | -                | -                | -         |     0.87 | decenty, felps, HEN1, noway, VINI |
|           29 |     2875 | 2024-02-22 | BESTIA            | L   | 0.475      | -            | -                | -                | -         |   -14.20 | decenty, felps, HEN1, noway, VINI |
|           28 |     2885 | 2024-02-22 | FURIA             | L   | 0.474      | -            | -                | -                | -         |    -5.39 | decenty, felps, HEN1, noway, VINI |
|           27 |     2900 | 2024-02-21 | ex-2GAME          | W   | 0.468      | -            | -                | -                | -         |     0.15 | decenty, felps, HEN1, noway, VINI |
|           26 |     2904 | 2024-02-21 | ex-2GAME          | W   | 0.468      | -            | -                | -                | -         |     0.15 | decenty, felps, HEN1, noway, VINI |
|           25 |     2913 | 2024-02-21 | LA RUGONETA       | W   | 0.466      | -            | -                | -                | -         |     0.07 | decenty, felps, HEN1, noway, VINI |
|           24 |     3005 | 2024-02-17 | adalYamigos       | W   | 0.441      | -            | -                | -                | -         |     0.13 | decenty, felps, HEN1, noway, VINI |
|           23 |     3034 | 2024-02-16 | Galorys           | W   | 0.433      | -            | -                | -                | -         |     0.29 | decenty, felps, HEN1, noway, VINI |
|           22 |     3037 | 2024-02-16 | Galorys           | W   | 0.433      | -            | -                | -                | -         |     0.29 | decenty, felps, HEN1, noway, VINI |
|           21 |     3054 | 2024-02-15 | 9z                | W   | 0.428      | -            | -                | -                | -         |     3.56 | decenty, felps, HEN1, noway, VINI |
|           20 |     3056 | 2024-02-15 | Fluxo             | W   | 0.428      | -            | -                | -                | -         |     0.69 | decenty, felps, HEN1, noway, VINI |
|           19 |     3061 | 2024-02-15 | Solid             | W   | 0.427      | -            | -                | -                | -         |     0.38 | decenty, felps, HEN1, noway, VINI |
|           18 |     3091 | 2024-02-14 | Yawara            | W   | 0.421      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|           17 |     3128 | 2024-02-13 | RED Canids        | W   | 0.415      | -            | -                | -                | -         |     0.95 | decenty, felps, HEN1, noway, VINI |
|           16 |     3132 | 2024-02-13 | RED Canids        | L   | 0.415      | -            | -                | -                | -         |   -12.20 | decenty, felps, HEN1, noway, VINI |
|           15 |     3135 | 2024-02-13 | Solid             | W   | 0.414      | -            | -                | -                | -         |     0.38 | decenty, felps, HEN1, noway, VINI |
|           14 |     3232 | 2024-02-04 | 9z                | W   | 0.354      | -            | -                | -                | -         |     2.88 | decenty, felps, HEN1, noway, VINI |
|           13 |     3255 | 2024-02-03 | MIBR              | W   | 0.348      | -            | -                | -                | -         |     6.36 | decenty, felps, HEN1, noway, VINI |
|           12 |     3281 | 2024-02-02 | BESTIA            | W   | 0.342      | -            | -                | -                | -         |     0.55 | decenty, felps, HEN1, noway, VINI |
|           11 |     3285 | 2024-02-02 | 9z                | L   | 0.341      | -            | -                | -                | -         |    -8.05 | decenty, felps, HEN1, noway, VINI |
|           10 |     3287 | 2024-02-02 | BESTIA            | W   | 0.341      | -            | -                | -                | -         |     0.51 | decenty, felps, HEN1, noway, VINI |
|            9 |     3451 | 2024-01-24 | 9z                | W   | 0.281      | -            | -                | -                | -         |     2.23 | decenty, felps, HEN1, noway, VINI |
|            8 |     3471 | 2024-01-23 | BESTIA            | W   | 0.274      | -            | -                | -                | -         |     0.42 | decenty, felps, HEN1, noway, VINI |
|            7 |     3491 | 2024-01-22 | Hype              | W   | 0.268      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|            6 |     3525 | 2024-01-21 | paiN              | W   | 0.261      | -            | -                | -                | -         |     5.03 | decenty, felps, HEN1, noway, VINI |
|            5 |     3564 | 2024-01-20 | Fluxo             | W   | 0.254      | -            | -                | -                | -         |     0.38 | decenty, felps, HEN1, noway, VINI |
|            4 |     3607 | 2024-01-19 | BESTIA            | L   | 0.248      | -            | -                | -                | -         |    -7.46 | decenty, felps, HEN1, noway, VINI |
|            3 |     3616 | 2024-01-19 | Galorys           | W   | 0.247      | -            | -                | -                | -         |     0.19 | decenty, felps, HEN1, noway, VINI |
|            2 |     3774 | 2024-01-16 | Legacy            | L   | 0.228      | -            | -                | -                | -         |    -6.80 | decenty, felps, HEN1, noway, VINI |
|            1 |     3819 | 2024-01-15 | Corinthians       | W   | 0.222      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($126,356.75)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.42) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-04-20 |      0.861 | $50,000.00     | $43,056.50      |
| 2024-04-15 |      0.828 | $15,000.00     | $12,414.05      |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |
| 2024-02-25 |      0.494 | $15,000.00     | $7,410.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
