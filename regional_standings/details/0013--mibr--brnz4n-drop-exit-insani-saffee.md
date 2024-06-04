### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1534.4<br />
<br />
Final Rank Value (1534.4) = Starting Rank Value (1613.2) + Head To Head Adjustments (-78.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.662[<sup>1</sup>](#table2)
- Bounty Collected: 0.573[<sup>2</sup>](#table1)
- Opponent Network: 0.354[<sup>2</sup>](#table1)
- LAN Wins: 0.911[<sup>2</sup>](#table1)

The average of these factors is 0.625<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1613.2
- 400 + ( ( 0.625 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1613.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |      158 | 2024-05-22 | paiN           | W   | 1.000      | 0.450        | 0.464 (0.209)    | 0.829 (0.373)    | -         |    11.52 | brnz4n, drop, exit, insani, saffee |
|           70 |      161 | 2024-05-22 | paiN           | W   | 1.000      | 0.450        | 0.464 (0.209)    | 0.829 (0.373)    | -         |    12.52 | brnz4n, drop, exit, insani, saffee |
|           69 |      231 | 2024-05-20 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -23.72 | brnz4n, drop, exit, insani, saffee |
|           68 |      244 | 2024-05-20 | BIG            | W   | 1.000      | 0.769        | 0.215 (0.166)    | 0.496 (0.381)    | -         |     8.36 | brnz4n, drop, exit, insani, saffee |
|           67 |      253 | 2024-05-20 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -24.90 | brnz4n, drop, exit, insani, saffee |
|           66 |      330 | 2024-05-17 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -13.78 | brnz4n, drop, exit, insani, saffee |
|           65 |      364 | 2024-05-16 | Aurora         | W   | 1.000      | 0.769        | 0.493 (0.379)    | 0.840 (0.646)    | 1 (1.000) |     6.42 | brnz4n, drop, exit, insani, saffee |
|           64 |      420 | 2024-05-15 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -14.55 | brnz4n, drop, exit, insani, saffee |
|           63 |      829 | 2024-04-28 | Aurora         | W   | 0.990      | 0.500        | 0.493 (0.244)    | 0.840 (0.416)    | 1 (0.990) |     7.64 | brnz4n, drop, exit, insani, saffee |
|           62 |      831 | 2024-04-27 | Apeks          | W   | 0.989      | 0.500        | -                | 0.495 (0.245)    | 1 (0.989) |     2.89 | brnz4n, drop, exit, insani, saffee |
|           61 |      857 | 2024-04-27 | Rooster        | W   | 0.982      | -            | -                | -                | 1 (0.982) |     0.53 | brnz4n, drop, exit, insani, saffee |
|           60 |      879 | 2024-04-26 | Rebels         | L   | 0.976      | -            | -                | -                | -         |   -29.22 | brnz4n, drop, exit, insani, saffee |
|           59 |      882 | 2024-04-25 | KZG            | W   | 0.975      | -            | -                | -                | 1 (0.975) |     0.14 | brnz4n, drop, exit, insani, saffee |
|           58 |      991 | 2024-04-20 | paiN           | L   | 0.939      | -            | -                | -                | -         |   -17.48 | brnz4n, drop, exit, insani, saffee |
|           57 |      998 | 2024-04-20 | OG             | W   | 0.938      | 0.589        | 0.278 (0.153)    | -                | 1 (0.938) |     4.04 | brnz4n, drop, exit, insani, saffee |
|           56 |     1014 | 2024-04-19 | paiN           | W   | 0.935      | 0.143        | 0.464 (0.062)    | -                | -         |    12.79 | brnz4n, drop, exit, insani, saffee |
|           55 |     1021 | 2024-04-19 | FURIA          | W   | 0.934      | 0.589        | 0.138 (0.076)    | -                | 1 (0.934) |     5.55 | brnz4n, drop, exit, insani, saffee |
|           54 |     1043 | 2024-04-19 | paiN           | L   | 0.932      | -            | -                | -                | -         |   -17.11 | brnz4n, drop, exit, insani, saffee |
|           53 |     1064 | 2024-04-18 | Imperial       | W   | 0.928      | -            | -                | -                | -         |    10.21 | brnz4n, drop, exit, insani, saffee |
|           52 |     1066 | 2024-04-18 | paiN           | W   | 0.927      | -            | -                | -                | -         |    12.40 | brnz4n, drop, exit, insani, saffee |
|           51 |     1071 | 2024-04-18 | OG             | W   | 0.926      | 0.589        | 0.278 (0.151)    | -                | 1 (0.926) |     4.08 | brnz4n, drop, exit, insani, saffee |
|           50 |     1116 | 2024-04-17 | RED Canids     | W   | 0.920      | -            | -                | -                | -         |     1.55 | brnz4n, drop, exit, insani, saffee |
|           49 |     1122 | 2024-04-17 | Case           | W   | 0.920      | -            | -                | -                | -         |     0.53 | brnz4n, drop, exit, insani, saffee |
|           48 |     1161 | 2024-04-16 | Bounty Hunters | W   | 0.914      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |
|           47 |     1182 | 2024-04-15 | Imperial       | W   | 0.907      | 0.435        | 0.373 (0.147)    | 0.889 (0.350)    | -         |    11.03 | brnz4n, drop, exit, insani, saffee |
|           46 |     1196 | 2024-04-14 | Galorys        | W   | 0.900      | -            | -                | -                | -         |     0.61 | brnz4n, drop, exit, insani, saffee |
|           45 |     1210 | 2024-04-13 | Case           | W   | 0.892      | 0.435        | -                | 0.693 (0.269)    | -         |     0.51 | brnz4n, drop, exit, insani, saffee |
|           44 |     1240 | 2024-04-11 | paiN           | W   | 0.881      | -            | -                | -                | -         |    13.98 | brnz4n, drop, exit, insani, saffee |
|           43 |     1282 | 2024-04-10 | Galorys        | W   | 0.874      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           42 |     1283 | 2024-04-10 | Galorys        | W   | 0.873      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           41 |     1300 | 2024-04-10 | Imperial       | W   | 0.872      | -            | -                | -                | -         |    12.65 | brnz4n, drop, exit, insani, saffee |
|           40 |     1332 | 2024-04-09 | adalYamigos    | W   | 0.867      | -            | -                | -                | -         |     0.41 | brnz4n, drop, exit, insani, saffee |
|           39 |     1336 | 2024-04-09 | adalYamigos    | W   | 0.867      | -            | -                | -                | -         |     0.41 | brnz4n, drop, exit, insani, saffee |
|           38 |     1341 | 2024-04-09 | RED Canids     | W   | 0.866      | -            | -                | -                | -         |     1.65 | brnz4n, drop, exit, insani, saffee |
|           37 |     1373 | 2024-04-08 | W7M            | W   | 0.861      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           36 |     1407 | 2024-04-07 | paiN           | W   | 0.855      | -            | -                | -                | -         |    15.32 | brnz4n, drop, exit, insani, saffee |
|           35 |     1425 | 2024-04-06 | Bounty Hunters | W   | 0.847      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|           34 |     1441 | 2024-04-05 | Fluxo          | W   | 0.841      | 0.450        | -                | 0.647 (0.245)    | -         |     1.82 | brnz4n, drop, exit, insani, saffee |
|           33 |     1442 | 2024-04-05 | Fluxo          | L   | 0.840      | -            | -                | -                | -         |   -24.90 | brnz4n, drop, exit, insani, saffee |
|           32 |     1445 | 2024-04-05 | ODDIK          | W   | 0.840      | -            | -                | -                | -         |     0.82 | brnz4n, drop, exit, insani, saffee |
|           31 |     1468 | 2024-04-04 | Solid          | W   | 0.834      | -            | -                | -                | -         |     0.63 | brnz4n, drop, exit, insani, saffee |
|           30 |     1472 | 2024-04-04 | Solid          | W   | 0.834      | -            | -                | -                | -         |     0.63 | brnz4n, drop, exit, insani, saffee |
|           29 |     1503 | 2024-04-03 | Fluxo          | W   | 0.828      | -            | -                | -                | -         |     1.48 | brnz4n, drop, exit, insani, saffee |
|           28 |     1553 | 2024-04-02 | Fluxo          | W   | 0.821      | -            | -                | -                | -         |     1.41 | brnz4n, drop, exit, insani, saffee |
|           27 |     1556 | 2024-04-02 | Sharks         | W   | 0.820      | -            | -                | -                | -         |     1.00 | brnz4n, drop, exit, insani, saffee |
|           26 |     1643 | 2024-03-27 | Case           | W   | 0.781      | 0.450        | -                | 0.693 (0.244)    | -         |     0.48 | brnz4n, drop, exit, insani, saffee |
|           25 |     1649 | 2024-03-27 | Case           | W   | 0.780      | -            | -                | -                | -         |     0.49 | brnz4n, drop, exit, insani, saffee |
|           24 |     1689 | 2024-03-26 | ODDIK          | W   | 0.774      | -            | -                | -                | -         |     0.88 | brnz4n, drop, exit, insani, saffee |
|           23 |     1691 | 2024-03-26 | ODDIK          | W   | 0.774      | -            | -                | -                | -         |     0.89 | brnz4n, drop, exit, insani, saffee |
|           22 |     1883 | 2024-03-14 | Sharks         | W   | 0.694      | -            | -                | -                | -         |     0.87 | brnz4n, drop, exit, insani, saffee |
|           21 |     1885 | 2024-03-14 | Sharks         | W   | 0.694      | -            | -                | -                | -         |     0.87 | brnz4n, drop, exit, insani, saffee |
|           20 |     1956 | 2024-03-12 | Fluxo          | L   | 0.680      | -            | -                | -                | -         |   -20.26 | brnz4n, drop, exit, insani, saffee |
|           19 |     1995 | 2024-03-10 | Galorys        | W   | 0.667      | -            | -                | -                | -         |     0.33 | brnz4n, drop, exit, insani, saffee |
|           18 |     2043 | 2024-03-08 | LA RUGONETA    | W   | 0.653      | -            | -                | -                | -         |     0.09 | brnz4n, drop, exit, insani, saffee |
|           17 |     2174 | 2024-03-03 | Legacy         | L   | 0.620      | -            | -                | -                | -         |   -18.77 | brnz4n, drop, exit, insani, saffee |
|           16 |     2206 | 2024-03-02 | NRG            | W   | 0.613      | -            | -                | -                | 1 (0.613) |     0.33 | brnz4n, drop, exit, insani, saffee |
|           15 |     2229 | 2024-03-01 | BOSS           | L   | 0.606      | -            | -                | -                | -         |   -18.79 | brnz4n, drop, exit, insani, saffee |
|           14 |     2755 | 2024-02-03 | Imperial       | L   | 0.427      | -            | -                | -                | -         |    -7.76 | brnz4n, drop, exit, insani, saffee |
|           13 |     2819 | 2024-02-01 | paiN           | W   | 0.414      | -            | -                | -                | -         |     6.65 | brnz4n, drop, exit, insani, saffee |
|           12 |     2822 | 2024-02-01 | W7M            | W   | 0.413      | -            | -                | -                | -         |     0.15 | brnz4n, drop, exit, insani, saffee |
|           11 |     2995 | 2024-01-22 | adalYamigos    | L   | 0.347      | -            | -                | -                | -         |   -10.88 | brnz4n, drop, exit, insani, saffee |
|           10 |     3057 | 2024-01-20 | BESTIA         | W   | 0.333      | -            | -                | -                | -         |     0.31 | brnz4n, drop, exit, insani, saffee |
|            9 |     3105 | 2024-01-19 | TIMACETA       | W   | 0.327      | -            | -                | -                | -         |     0.03 | brnz4n, drop, exit, insani, saffee |
|            8 |     3119 | 2024-01-19 | ODDIK          | W   | 0.326      | -            | -                | -                | -         |     0.27 | brnz4n, drop, exit, insani, saffee |
|            7 |     3162 | 2024-01-18 | 9z             | L   | 0.321      | -            | -                | -                | -         |    -8.62 | brnz4n, drop, exit, insani, saffee |
|            6 |     3169 | 2024-01-18 | Sharks         | W   | 0.320      | -            | -                | -                | -         |     0.25 | brnz4n, drop, exit, insani, saffee |
|            5 |     3211 | 2024-01-17 | 9z             | L   | 0.314      | -            | -                | -                | -         |    -8.56 | brnz4n, drop, exit, insani, saffee |
|            4 |     3233 | 2024-01-17 | Sharks         | W   | 0.313      | -            | -                | -                | -         |     0.22 | brnz4n, drop, exit, insani, saffee |
|            3 |     3766 | 2023-12-09 | Spirit         | L   | 0.051      | -            | -                | -                | -         |    -0.26 | brnz4n, drop, exit, insani, saffee |
|            2 |     3811 | 2023-12-07 | Cloud9         | W   | 0.038      | -            | -                | -                | 1 (0.038) |     0.29 | brnz4n, drop, exit, insani, saffee |
|            1 |     3869 | 2023-12-05 | BetBoom        | W   | 0.025      | -            | -                | -                | -         |     0.21 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($92,732.92)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.31) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      0.990 | $50,000.00     | $49,507.28      |
| 2024-04-20 |      0.940 | $20,000.00     | $18,806.05      |
| 2024-04-15 |      0.907 | $25,000.00     | $22,669.38      |
| 2023-12-10 |      0.058 | $30,000.00     | $1,750.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
