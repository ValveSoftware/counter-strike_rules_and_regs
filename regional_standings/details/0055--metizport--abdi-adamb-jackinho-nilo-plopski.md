### Roster Details<br />
Team Name: Metizport<br />
Roster: abdi, adamb, Jackinho, nilo, Plopski<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  1065.2<br />
<br />
Final Rank Value (1065.2) = Starting Rank Value (977.8) + Head To Head Adjustments (87.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.475[<sup>1</sup>](#table2)
- Bounty Collected: 0.446[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.290<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 977.8
- 400 + ( ( 0.290 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 977.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |      629 | 2024-05-23 | Space             | L   | 1.000      | -            | -                | -                | -         |   -22.60 | abdi, adamb, Jackinho, nilo, Plopski |
|           75 |      734 | 2024-05-20 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -15.87 | adamb, Jackinho, nilo, Plopski, ztr  |
|           74 |      788 | 2024-05-18 | Ninjas in Pyjamas | W   | 1.000      | 0.500        | 0.294 (0.147)    | 0.480 (0.240)    | 0 (0.000) |    28.41 | adamb, Jackinho, nilo, Plopski, ztr  |
|           73 |      875 | 2024-05-16 | Rare Atom         | W   | 1.000      | 0.500        | -                | 0.247 (0.124)    | 0 (0.000) |     2.77 | adamb, Jackinho, nilo, Plopski, ztr  |
|           72 |     1059 | 2024-05-11 | BetBoom           | L   | 0.999      | -            | -                | -                | -         |    -3.00 | adamb, Jackinho, nilo, Plopski, ztr  |
|           71 |     1074 | 2024-05-10 | EYEBALLERS        | W   | 0.993      | 0.435        | -                | 0.722 (0.312)    | 0 (0.000) |    10.64 | adamb, Jackinho, nilo, Plopski, ztr  |
|           70 |     1199 | 2024-05-04 | AMKAL             | L   | 0.951      | -            | -                | -                | -         |    -7.99 | adamb, Jackinho, nilo, susp, ztr     |
|           69 |     1214 | 2024-05-03 | Zero Tenacity     | W   | 0.945      | 0.435        | 0.154 (0.063)    | 1.000 (0.411)    | 0 (0.000) |    14.43 | adamb, Jackinho, nilo, susp, ztr     |
|           68 |     1234 | 2024-05-02 | Sangal            | W   | 0.939      | 0.435        | 0.214 (0.087)    | 0.998 (0.407)    | 0 (0.000) |    17.19 | adamb, Jackinho, nilo, susp, ztr     |
|           67 |     1392 | 2024-04-25 | Nexus             | L   | 0.893      | -            | -                | -                | -         |   -20.81 | adamb, Jackinho, nilo, susp, ztr     |
|           66 |     1436 | 2024-04-23 | Alliance          | W   | 0.879      | 0.384        | -                | 0.513 (0.173)    | 0 (0.000) |     8.81 | adamb, Jackinho, nilo, p1ke, susp    |
|           65 |     1541 | 2024-04-19 | FURIA             | L   | 0.853      | -            | -                | -                | -         |    -1.48 | adamb, Jackinho, Plopski, susp, ztr  |
|           64 |     1579 | 2024-04-18 | Imperial          | L   | 0.846      | -            | -                | -                | -         |    -2.17 | adamb, Jackinho, Plopski, susp, ztr  |
|           63 |     1861 | 2024-04-09 | M1X KS            | L   | 0.785      | -            | -                | -                | -         |   -12.68 | adamb, Jackinho, nilo, susp, ztr     |
|           62 |     1877 | 2024-04-08 | Aurora            | L   | 0.780      | -            | -                | -                | -         |    -1.87 | adamb, Jackinho, nilo, susp, ztr     |
|           61 |     1889 | 2024-04-08 | 9 Pandas          | L   | 0.779      | -            | -                | -                | -         |    -9.57 | adamb, Jackinho, nilo, susp, ztr     |
|           60 |     1914 | 2024-04-07 | EYEBALLERS        | W   | 0.773      | 0.330        | -                | 0.722 (0.185)    | 0 (0.000) |     7.51 | adamb, Jackinho, nilo, susp, ztr     |
|           59 |     1923 | 2024-04-07 | Johnny Speeds     | W   | 0.771      | 0.330        | 0.081 (0.021)    | 0.531 (0.135)    | 0 (0.000) |    13.20 | adamb, Jackinho, nilo, susp, ztr     |
|           58 |     1939 | 2024-04-06 | Young Gods        | W   | 0.764      | -            | -                | -                | -         |     0.58 | adamb, Jackinho, nilo, susp, ztr     |
|           57 |     1991 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.753      | -            | -                | -                | -         |    -1.09 | adamb, Jackinho, nilo, susp, ztr     |
|           56 |     2017 | 2024-04-03 | Monte             | W   | 0.747      | 0.143        | 0.179 (0.019)    | -                | -         |    17.77 | adamb, Jackinho, nilo, susp, ztr     |
|           55 |     2030 | 2024-04-03 | FAVBET            | W   | 0.746      | -            | -                | -                | -         |     5.33 | adamb, Jackinho, nilo, susp, ztr     |
|           54 |     2064 | 2024-04-02 | B8                | W   | 0.740      | 0.143        | 0.160 (0.017)    | -                | -         |    14.39 | adamb, Jackinho, nilo, susp, ztr     |
|           53 |     2070 | 2024-04-02 | Aurora            | L   | 0.739      | -            | -                | -                | -         |    -1.49 | adamb, Jackinho, nilo, susp, ztr     |
|           52 |     2086 | 2024-04-01 | PARIVISION        | L   | 0.733      | -            | -                | -                | -         |   -11.73 | adamb, Jackinho, nilo, susp, ztr     |
|           51 |     2154 | 2024-03-27 | Aurora            | L   | 0.701      | -            | -                | -                | -         |    -1.36 | adamb, Jackinho, nilo, susp, ztr     |
|           50 |     2160 | 2024-03-27 | NAVI Junior       | W   | 0.700      | -            | -                | -                | -         |     3.01 | adamb, Jackinho, nilo, susp, ztr     |
|           49 |     2363 | 2024-03-15 | ECF               | L   | 0.620      | -            | -                | -                | -         |   -15.62 | adamb, Jackinho, nilo, susp, ztr     |
|           48 |     2400 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.612      | -            | -                | -                | -         |   -12.38 | adamb, Jackinho, nilo, susp, ztr     |
|           47 |     2434 | 2024-03-13 | HEROIC            | L   | 0.606      | -            | -                | -                | -         |    -0.40 | adamb, Jackinho, nilo, susp, ztr     |
|           46 |     2457 | 2024-03-12 | B8                | W   | 0.601      | -            | -                | -                | -         |    11.41 | adamb, Jackinho, nilo, susp, ztr     |
|           45 |     2465 | 2024-03-12 | Apeks             | W   | 0.599      | -            | -                | -                | -         |    12.38 | adamb, Jackinho, nilo, susp, ztr     |
|           44 |     2475 | 2024-03-11 | ex-Preasy         | W   | 0.594      | -            | -                | -                | -         |     8.12 | adamb, Jackinho, nilo, susp, ztr     |
|           43 |     2489 | 2024-03-11 | ENCE              | L   | 0.593      | -            | -                | -                | -         |    -1.44 | adamb, Jackinho, nilo, susp, ztr     |
|           42 |     2497 | 2024-03-10 | Spirit            | L   | 0.587      | -            | -                | -                | -         |    -0.13 | adamb, Jackinho, nilo, susp, ztr     |
|           41 |     2524 | 2024-03-09 | Monte             | W   | 0.580      | 0.535        | 0.179 (0.055)    | 0.686 (0.213)    | -         |    14.93 | adamb, Jackinho, nilo, susp, ztr     |
|           40 |     2531 | 2024-03-09 | EYEBALLERS        | L   | 0.579      | -            | -                | -                | -         |   -11.38 | adamb, Jackinho, nilo, susp, ztr     |
|           39 |     2537 | 2024-03-09 | Lemondogs         | W   | 0.578      | -            | -                | -                | -         |     0.52 | adamb, Jackinho, nilo, susp, ztr     |
|           38 |     2555 | 2024-03-08 | Secret            | W   | 0.572      | -            | -                | -                | -         |     1.37 | adamb, Jackinho, nilo, susp, ztr     |
|           37 |     2596 | 2024-03-06 | Falcons           | W   | 0.561      | 0.535        | 0.327 (0.098)    | -                | -         |    16.21 | adamb, Jackinho, nilo, susp, ztr     |
|           36 |     2676 | 2024-03-03 | The Chosen Few    | W   | 0.541      | -            | -                | -                | -         |     2.65 | adamb, Jackinho, nilo, susp, ztr     |
|           35 |     2685 | 2024-03-03 | ILIN              | W   | 0.540      | -            | -                | -                | -         |     1.02 | adamb, Jackinho, nilo, susp, ztr     |
|           34 |     2689 | 2024-03-03 | RUSH B            | W   | 0.540      | -            | -                | -                | -         |     4.79 | adamb, Jackinho, nilo, susp, ztr     |
|           33 |     2698 | 2024-03-03 | ECLOT             | L   | 0.539      | -            | -                | -                | -         |    -3.98 | adamb, Jackinho, nilo, susp, ztr     |
|           32 |     2744 | 2024-02-29 | Endpoint          | W   | 0.519      | -            | -                | -                | -         |     5.85 | adamb, Jackinho, nilo, susp, ztr     |
|           31 |     2781 | 2024-02-27 | M1X KS            | L   | 0.506      | -            | -                | -                | -         |    -5.58 | adamb, Jackinho, nilo, susp, ztr     |
|           30 |     3153 | 2024-02-11 | Apeks             | W   | 0.401      | -            | -                | -                | -         |     8.85 | adamb, Jackinho, nilo, susp, ztr     |
|           29 |     3158 | 2024-02-11 | ex-Sprout         | W   | 0.399      | -            | -                | -                | -         |     1.23 | adamb, Jackinho, nilo, susp, ztr     |
|           28 |     3166 | 2024-02-10 | FURIA             | W   | 0.393      | -            | -                | -                | -         |    12.06 | adamb, Jackinho, nilo, susp, ztr     |
|           27 |     3169 | 2024-02-10 | Apeks             | L   | 0.392      | -            | -                | -                | -         |    -3.64 | adamb, Jackinho, nilo, susp, ztr     |
|           26 |     3170 | 2024-02-10 | FURIA             | W   | 0.392      | -            | -                | -                | -         |    12.06 | adamb, Jackinho, nilo, susp, ztr     |
|           25 |     3205 | 2024-02-07 | ex-Sprout         | W   | 0.373      | -            | -                | -                | -         |     1.14 | adamb, Jackinho, nilo, susp, ztr     |
|           24 |     3213 | 2024-02-06 | Into the Breach   | L   | 0.366      | -            | -                | -                | -         |    -9.34 | adamb, Jackinho, nilo, susp, ztr     |
|           23 |     3226 | 2024-02-05 | TSM               | L   | 0.358      | -            | -                | -                | -         |    -9.01 | adamb, Jackinho, nilo, susp, ztr     |
|           22 |     3233 | 2024-02-04 | 500               | L   | 0.354      | -            | -                | -                | -         |    -8.90 | adamb, Jackinho, nilo, susp, ztr     |
|           21 |     3239 | 2024-02-04 | TMVG              | W   | 0.353      | -            | -                | -                | -         |     0.76 | adamb, Jackinho, nilo, susp, ztr     |
|           20 |     3250 | 2024-02-04 | DUSTY             | W   | 0.351      | -            | -                | -                | -         |     1.60 | adamb, Jackinho, nilo, susp, ztr     |
|           19 |     3280 | 2024-02-03 | Sangal            | W   | 0.344      | 0.371        | 0.214 (0.027)    | 0.998 (0.127)    | -         |     7.73 | adamb, Jackinho, nilo, susp, ztr     |
|           18 |     3292 | 2024-02-02 | EYEBALLERS        | W   | 0.341      | -            | -                | -                | -         |     4.53 | adamb, Jackinho, nilo, susp, ztr     |
|           17 |     3294 | 2024-02-02 | ex-Preasy         | W   | 0.340      | -            | -                | -                | -         |     4.29 | adamb, Jackinho, nilo, susp, ztr     |
|           16 |     3331 | 2024-02-01 | Sampi             | W   | 0.332      | -            | -                | -                | -         |     4.48 | adamb, Jackinho, nilo, susp, ztr     |
|           15 |     3382 | 2024-01-29 | BLEED             | W   | 0.312      | 0.371        | 0.349 (0.040)    | -                | -         |     8.87 | adamb, Jackinho, nilo, susp, ztr     |
|           14 |     3443 | 2024-01-25 | BIG Academy       | W   | 0.285      | -            | -                | -                | -         |     0.63 | adamb, Jackinho, nilo, susp, ztr     |
|           13 |     4041 | 2024-01-09 | IKLA              | L   | 0.180      | -            | -                | -                | -         |    -5.20 | adamb, Jackinho, nilo, susp, ztr     |
|           12 |     4061 | 2023-12-30 | The Witchers      | L   | 0.113      | -            | -                | -                | -         |    -2.99 | adamb, Jackinho, nilo, susp, ztr     |
|           11 |     4063 | 2023-12-30 | VP.Prodigy        | W   | 0.111      | -            | -                | -                | -         |     1.22 | adamb, Jackinho, nilo, susp, ztr     |
|           10 |     4065 | 2023-12-29 | Aurora Young Blud | W   | 0.106      | -            | -                | -                | -         |     0.69 | adamb, Jackinho, nilo, susp, ztr     |
|            9 |     4066 | 2023-12-29 | esmagaB           | W   | 0.106      | -            | -                | -                | -         |     0.68 | adamb, Jackinho, nilo, susp, ztr     |
|            8 |     4072 | 2023-12-27 | Aurora Young Blud | L   | 0.093      | -            | -                | -                | -         |    -2.32 | adamb, Jackinho, nilo, susp, ztr     |
|            7 |     4086 | 2023-12-20 | PERA              | L   | 0.046      | -            | -                | -                | -         |    -0.86 | adamb, Jackinho, nilo, susp, ztr     |
|            6 |     4088 | 2023-12-20 | ARCRED            | W   | 0.046      | -            | -                | -                | -         |     0.17 | adamb, Jackinho, nilo, susp, ztr     |
|            5 |     4097 | 2023-12-19 | GUN5              | W   | 0.038      | -            | -                | -                | -         |     0.05 | adamb, Jackinho, nilo, susp, ztr     |
|            4 |     4100 | 2023-12-19 | PERA              | W   | 0.038      | -            | -                | -                | -         |     0.49 | adamb, Jackinho, nilo, susp, ztr     |
|            3 |     4122 | 2023-12-17 | Lilmix            | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.06 | adamb, Jackinho, nilo, susp, ztr     |
|            2 |     4129 | 2023-12-17 | BLUDS             | L   | 0.026      | -            | -                | -                | -         |    -0.72 | adamb, Jackinho, nilo, susp, ztr     |
|            1 |     4137 | 2023-12-17 | latch gibb        | W   | 0.025      | -            | -                | -                | 1 (0.025) |     0.03 | adamb, Jackinho, nilo, susp, ztr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,816.60)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-04 |      0.953 | $5,000.00      | $4,764.47       |
| 2024-04-20 |      0.861 | $5,000.00      | $4,305.65       |
| 2024-04-07 |      0.773 | $6,110.00      | $4,723.69       |
| 2024-03-10 |      0.587 | $12,500.00     | $7,341.52       |
| 2023-12-30 |      0.113 | $5,000.00      | $562.66         |
| 2023-12-20 |      0.046 | $2,000.00      | $92.86          |
| 2023-12-17 |      0.027 | $950.00        | $25.75          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
