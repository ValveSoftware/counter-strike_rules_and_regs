### Roster Details<br />
Team Name: SINNERS<br />
Roster: AJTT, beastik, NEOFRAG, oskar, SHOCK<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  967.5<br />
<br />
Final Rank Value (967.5) = Starting Rank Value (1057.3) + Head To Head Adjustments (-89.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.403[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.301[<sup>2</sup>](#table1)
- LAN Wins: 0.198[<sup>2</sup>](#table1)

The average of these factors is 0.345<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1057.3
- 400 + ( ( 0.345 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1057.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       26 | 2024-05-05 | Endpoint          | W   | 1.000      | 0.396        | -                | 0.694 (0.275)    | 0 (0.000) |    16.23 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           62 |       89 | 2024-05-02 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -5.96 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           61 |      117 | 2024-05-01 | B8                | L   | 1.000      | -            | -                | -                | -         |   -15.72 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           60 |      152 | 2024-04-29 | 1WIN              | W   | 1.000      | 0.435        | -                | 0.480 (0.208)    | 0 (0.000) |     7.84 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           59 |      158 | 2024-04-29 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -16.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           58 |      169 | 2024-04-28 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -17.55 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           57 |      202 | 2024-04-27 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -19.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           56 |      218 | 2024-04-26 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -19.11 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           55 |      267 | 2024-04-24 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -21.98 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           54 |      303 | 2024-04-22 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           53 |      352 | 2024-04-20 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -23.75 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           52 |      408 | 2024-04-19 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -17.58 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           51 |      491 | 2024-04-17 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -6.84 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           50 |      523 | 2024-04-16 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -13.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           49 |      553 | 2024-04-14 | Passion UA        | W   | 1.000      | 0.371        | 0.111 (0.041)    | 0.644 (0.239)    | 0 (0.000) |     8.85 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           48 |      642 | 2024-04-10 | 3DMAX             | W   | 1.000      | 0.500        | 0.055 (0.028)    | 0.810 (0.405)    | 0 (0.000) |    19.34 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           47 |      661 | 2024-04-10 | UNiTY             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.48 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           46 |      692 | 2024-04-09 | 9 Pandas          | W   | 1.000      | 0.500        | 0.081 (0.040)    | 0.676 (0.338)    | -         |    17.04 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           45 |      746 | 2024-04-08 | ALTERNATE aTTaX   | W   | 1.000      | 0.384        | 0.104 (0.040)    | 0.779 (0.299)    | -         |     8.72 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           44 |      796 | 2024-04-05 | Nexus             | W   | 0.993      | 0.384        | -                | 0.605 (0.231)    | -         |    10.56 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           43 |      887 | 2024-04-03 | Rebels            | W   | 0.978      | 0.500        | 0.111 (0.055)    | -                | -         |    16.52 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           42 |      931 | 2024-04-01 | Aurora            | W   | 0.967      | 0.500        | 0.973 (0.470)    | 0.967 (0.467)    | -         |    28.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           41 |      956 | 2024-03-29 | ex-Sprout         | W   | 0.946      | -            | -                | -                | -         |     1.00 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           40 |     1171 | 2024-03-17 | ECLOT             | L   | 0.867      | -            | -                | -                | -         |   -12.19 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           39 |     1178 | 2024-03-17 | UNiTY             | W   | 0.866      | -            | -                | -                | 1 (0.866) |     7.65 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           38 |     1196 | 2024-03-16 | Sampi             | W   | 0.859      | 0.345        | 0.101 (0.030)    | 0.731 (0.216)    | 1 (0.859) |    13.43 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           37 |     1209 | 2024-03-15 | UNiTY             | L   | 0.854      | -            | -                | -                | -         |   -19.20 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           36 |     1277 | 2024-03-13 | ALTERNATE aTTaX   | W   | 0.840      | 0.500        | 0.104 (0.044)    | 0.779 (0.327)    | -         |     9.20 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           35 |     1330 | 2024-03-11 | brazylijski luz   | L   | 0.826      | -            | -                | -                | -         |   -19.71 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           34 |     1544 | 2024-03-03 | Gaimin Gladiators | L   | 0.773      | -            | -                | -                | -         |    -4.01 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           33 |     1832 | 2024-02-18 | Monte             | L   | 0.680      | -            | -                | -                | -         |    -2.35 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           32 |     1880 | 2024-02-16 | 500               | W   | 0.667      | -            | -                | -                | -         |     4.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           31 |     1887 | 2024-02-16 | PERA              | W   | 0.666      | -            | -                | -                | -         |     8.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           30 |     1892 | 2024-02-16 | 500               | L   | 0.666      | -            | -                | -                | -         |   -16.54 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           29 |     2098 | 2024-02-04 | Into the Breach   | L   | 0.585      | -            | -                | -                | -         |   -14.40 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           28 |     2161 | 2024-02-02 | ex-Preasy         | L   | 0.571      | -            | -                | -                | -         |    -9.36 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           27 |     2257 | 2024-01-27 | GODSENT           | W   | 0.532      | -            | -                | -                | -         |     2.80 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           26 |     2330 | 2024-01-23 | MOUZ NXT          | W   | 0.505      | 0.371        | 0.210 (0.039)    | -                | -         |     8.30 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           25 |     2463 | 2024-01-19 | Nexus             | L   | 0.480      | -            | -                | -                | -         |   -10.42 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           24 |     2523 | 2024-01-18 | fnatic            | L   | 0.473      | -            | -                | -                | -         |    -4.58 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           23 |     2544 | 2024-01-18 | Virtus.pro        | L   | 0.472      | -            | -                | -                | -         |    -0.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           22 |     2801 | 2024-01-11 | HEROIC            | L   | 0.427      | -            | -                | -                | -         |    -0.50 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           21 |     2806 | 2024-01-11 | PERA              | W   | 0.427      | -            | -                | -                | -         |     4.29 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           20 |     2817 | 2024-01-11 | ILIN              | W   | 0.426      | -            | -                | -                | -         |     0.66 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           19 |     2822 | 2024-01-11 | V1dar             | W   | 0.426      | -            | -                | -                | -         |     0.71 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           18 |     2837 | 2024-01-10 | The Prodigies     | W   | 0.421      | -            | -                | -                | -         |     0.72 | AJTT, beastik, NEOFRAG, oskar, SHOCK  |
|           17 |     3106 | 2023-12-09 | FORZE             | L   | 0.207      | -            | -                | -                | -         |    -5.37 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           16 |     3150 | 2023-12-07 | 3DMAX             | L   | 0.194      | -            | -                | -                | -         |    -1.88 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           15 |     3177 | 2023-12-06 | Spirit Academy    | W   | 0.187      | -            | -                | -                | -         |     0.83 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           14 |     3208 | 2023-12-05 | ENCE              | W   | 0.180      | 0.500        | 0.360 (0.032)    | -                | -         |     5.18 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           13 |     3373 | 2023-11-25 | UNiTY             | L   | 0.112      | -            | -                | -                | -         |    -2.74 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           12 |     3392 | 2023-11-24 | Sampi             | L   | 0.105      | -            | -                | -                | -         |    -1.88 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           11 |     3503 | 2023-11-18 | BIG               | L   | 0.065      | -            | -                | -                | -         |    -0.26 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|           10 |     3528 | 2023-11-17 | TSM               | W   | 0.059      | -            | -                | -                | -         |     0.21 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            9 |     3573 | 2023-11-16 | Legacy            | W   | 0.051      | -            | -                | -                | -         |     0.78 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            8 |     3608 | 2023-11-15 | paiN              | L   | 0.046      | -            | -                | -                | -         |    -0.02 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            7 |     3645 | 2023-11-13 | ALTERNATE aTTaX   | W   | 0.032      | -            | -                | -                | -         |     0.43 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            6 |     3664 | 2023-11-12 | eEriness          | W   | 0.026      | -            | -                | -                | 1 (0.026) |     0.02 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            5 |     3694 | 2023-11-11 | UNiTY             | L   | 0.020      | -            | -                | -                | -         |    -0.50 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            4 |     3706 | 2023-11-11 | eEriness          | W   | 0.019      | -            | -                | -                | 1 (0.019) |     0.01 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            3 |     3729 | 2023-11-09 | BetBoom           | L   | 0.007      | -            | -                | -                | -         |    -0.02 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            2 |     3734 | 2023-11-09 | 9 Pandas          | W   | 0.005      | -            | -                | -                | -         |     0.10 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |
|            1 |     3753 | 2023-11-08 | Monte             | W   | 0.000      | -            | -                | -                | -         |     0.01 | beastik, KWERTZZ, oskar, SHOCK, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,320.51)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-17 |      0.867 | $2,984.00      | $2,586.59       |
| 2023-12-10 |      0.213 | $8,000.00      | $1,707.76       |
| 2023-11-25 |      0.114 | $5,176.00      | $590.16         |
| 2023-11-19 |      0.074 | $5,000.00      | $368.20         |
| 2023-11-09 |      0.007 | $10,000.00     | $67.79          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
