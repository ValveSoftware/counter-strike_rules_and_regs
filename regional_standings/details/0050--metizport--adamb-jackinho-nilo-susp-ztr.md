### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, susp, ztr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1050.0<br />
<br />
Final Rank Value (1050.0) = Starting Rank Value (1016.6) + Head To Head Adjustments (33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.575[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.220[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.324<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1016.6
- 400 + ( ( 0.324 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1016.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |       48 | 2024-05-04 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -8.17 | adamb, Jackinho, nilo, susp, ztr    |
|           79 |       63 | 2024-05-03 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.093 (0.040)    | 0.936 (0.407)    | 0 (0.000) |    12.07 | adamb, Jackinho, nilo, susp, ztr    |
|           78 |       83 | 2024-05-02 | Sangal            | W   | 1.000      | 0.435        | -                | 0.797 (0.346)    | 0 (0.000) |    11.92 | adamb, Jackinho, nilo, susp, ztr    |
|           77 |      241 | 2024-04-25 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -22.92 | adamb, Jackinho, nilo, susp, ztr    |
|           76 |      285 | 2024-04-23 | Alliance          | W   | 1.000      | 0.384        | -                | 0.815 (0.313)    | 0 (0.000) |     8.38 | adamb, Jackinho, nilo, p1ke, susp   |
|           75 |      390 | 2024-04-19 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -3.45 | adamb, Jackinho, Plopski, susp, ztr |
|           74 |      428 | 2024-04-18 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -1.70 | adamb, Jackinho, Plopski, susp, ztr |
|           73 |      710 | 2024-04-09 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |   -18.96 | adamb, Jackinho, nilo, susp, ztr    |
|           72 |      726 | 2024-04-08 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.26 | adamb, Jackinho, nilo, susp, ztr    |
|           71 |      738 | 2024-04-08 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -13.37 | adamb, Jackinho, nilo, susp, ztr    |
|           70 |      763 | 2024-04-07 | EYEBALLERS        | W   | 1.000      | 0.330        | -                | 0.599 (0.198)    | 0 (0.000) |     8.95 | adamb, Jackinho, nilo, susp, ztr    |
|           69 |      772 | 2024-04-07 | Johnny Speeds     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.63 | adamb, Jackinho, nilo, susp, ztr    |
|           68 |      788 | 2024-04-06 | Young Gods        | W   | 0.998      | -            | -                | -                | 0 (0.000) |     0.70 | adamb, Jackinho, nilo, susp, ztr    |
|           67 |      840 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.986      | -            | -                | -                | -         |   -14.55 | adamb, Jackinho, nilo, susp, ztr    |
|           66 |      866 | 2024-04-03 | Monte             | W   | 0.980      | 0.143        | 0.188 (0.026)    | -                | 0 (0.000) |    23.62 | adamb, Jackinho, nilo, susp, ztr    |
|           65 |      879 | 2024-04-03 | Blessed           | W   | 0.979      | -            | -                | -                | 0 (0.000) |     6.26 | adamb, Jackinho, nilo, susp, ztr    |
|           64 |      913 | 2024-04-02 | B8                | W   | 0.973      | 0.143        | -                | 0.851 (0.118)    | -         |    14.45 | adamb, Jackinho, nilo, susp, ztr    |
|           63 |      919 | 2024-04-02 | Aurora            | L   | 0.972      | -            | -                | -                | -         |    -2.69 | adamb, Jackinho, nilo, susp, ztr    |
|           62 |      935 | 2024-04-01 | PARIVISION        | L   | 0.966      | -            | -                | -                | -         |   -18.52 | adamb, Jackinho, nilo, susp, ztr    |
|           61 |     1003 | 2024-03-27 | Aurora            | L   | 0.934      | -            | -                | -                | -         |    -2.53 | adamb, Jackinho, nilo, susp, ztr    |
|           60 |     1009 | 2024-03-27 | NAVI Junior       | W   | 0.933      | -            | -                | -                | -         |     3.76 | adamb, Jackinho, nilo, susp, ztr    |
|           59 |     1212 | 2024-03-15 | ECF               | L   | 0.853      | -            | -                | -                | -         |   -24.45 | adamb, Jackinho, nilo, susp, ztr    |
|           58 |     1249 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.846      | -            | -                | -                | -         |   -20.24 | adamb, Jackinho, nilo, susp, ztr    |
|           57 |     1283 | 2024-03-13 | HEROIC            | L   | 0.839      | -            | -                | -                | -         |    -1.49 | adamb, Jackinho, nilo, susp, ztr    |
|           56 |     1306 | 2024-03-12 | B8                | W   | 0.834      | 0.143        | -                | 0.851 (0.101)    | -         |     9.78 | adamb, Jackinho, nilo, susp, ztr    |
|           55 |     1314 | 2024-03-12 | Apeks             | W   | 0.833      | 0.143        | 0.237 (0.028)    | -                | -         |    21.40 | adamb, Jackinho, nilo, susp, ztr    |
|           54 |     1324 | 2024-03-11 | ex-Preasy         | W   | 0.827      | 0.143        | 0.173 (0.020)    | -                | -         |    13.77 | adamb, Jackinho, nilo, susp, ztr    |
|           53 |     1338 | 2024-03-11 | ENCE              | L   | 0.826      | -            | -                | -                | -         |    -2.04 | adamb, Jackinho, nilo, susp, ztr    |
|           52 |     1346 | 2024-03-10 | Spirit            | L   | 0.821      | -            | -                | -                | -         |    -0.35 | adamb, Jackinho, nilo, susp, ztr    |
|           51 |     1373 | 2024-03-09 | Monte             | W   | 0.813      | 0.535        | 0.188 (0.082)    | 0.589 (0.256)    | -         |    21.57 | adamb, Jackinho, nilo, susp, ztr    |
|           50 |     1380 | 2024-03-09 | EYEBALLERS        | L   | 0.812      | -            | -                | -                | -         |   -16.92 | adamb, Jackinho, nilo, susp, ztr    |
|           49 |     1386 | 2024-03-09 | Lemondogs         | W   | 0.812      | -            | -                | -                | -         |     0.60 | adamb, Jackinho, nilo, susp, ztr    |
|           48 |     1404 | 2024-03-08 | Secret            | W   | 0.805      | -            | -                | -                | -         |     1.81 | adamb, Jackinho, nilo, susp, ztr    |
|           47 |     1445 | 2024-03-06 | Falcons           | W   | 0.794      | 0.535        | 0.417 (0.177)    | 0.203 (0.086)    | -         |    21.09 | adamb, Jackinho, nilo, susp, ztr    |
|           46 |     1525 | 2024-03-03 | The Chosen Few    | W   | 0.774      | -            | -                | -                | -         |     3.81 | adamb, Jackinho, nilo, susp, ztr    |
|           45 |     1534 | 2024-03-03 | ILIN              | W   | 0.773      | -            | -                | -                | -         |     1.41 | adamb, Jackinho, nilo, susp, ztr    |
|           44 |     1538 | 2024-03-03 | RUSH B            | W   | 0.773      | -            | -                | -                | -         |     4.29 | adamb, Jackinho, nilo, susp, ztr    |
|           43 |     1547 | 2024-03-03 | ECLOT             | L   | 0.772      | -            | -                | -                | -         |    -9.99 | adamb, Jackinho, nilo, susp, ztr    |
|           42 |     1593 | 2024-02-29 | Endpoint          | W   | 0.752      | -            | -                | -                | -         |     6.90 | adamb, Jackinho, nilo, susp, ztr    |
|           41 |     1616 | 2024-02-28 | INGLORIOUS        | W   | 0.744      | -            | -                | -                | -         |     1.57 | adamb, Jackinho, spooke, susp, ztr  |
|           40 |     1630 | 2024-02-27 | Guild Eagles      | L   | 0.739      | -            | -                | -                | -         |   -11.14 | adamb, Jackinho, nilo, susp, ztr    |
|           39 |     2002 | 2024-02-11 | Apeks             | W   | 0.634      | 0.143        | 0.237 (0.021)    | -                | -         |    17.36 | adamb, Jackinho, nilo, susp, ztr    |
|           38 |     2007 | 2024-02-11 | ex-Sprout         | W   | 0.632      | -            | -                | -                | -         |     2.16 | adamb, Jackinho, nilo, susp, ztr    |
|           37 |     2015 | 2024-02-10 | FURIA             | W   | 0.626      | 0.143        | 0.371 (0.033)    | -                | -         |    18.50 | adamb, Jackinho, nilo, susp, ztr    |
|           36 |     2018 | 2024-02-10 | Apeks             | L   | 0.626      | -            | -                | -                | -         |    -2.30 | adamb, Jackinho, nilo, susp, ztr    |
|           35 |     2019 | 2024-02-10 | FURIA             | W   | 0.625      | 0.143        | 0.371 (0.033)    | -                | -         |    18.68 | adamb, Jackinho, nilo, susp, ztr    |
|           34 |     2054 | 2024-02-07 | ex-Sprout         | W   | 0.606      | -            | -                | -                | -         |     2.09 | adamb, Jackinho, nilo, susp, ztr    |
|           33 |     2062 | 2024-02-06 | Into the Breach   | L   | 0.599      | -            | -                | -                | -         |   -13.61 | adamb, Jackinho, nilo, susp, ztr    |
|           32 |     2075 | 2024-02-05 | TSM               | L   | 0.592      | -            | -                | -                | -         |   -13.98 | adamb, Jackinho, nilo, susp, ztr    |
|           31 |     2082 | 2024-02-04 | 500               | L   | 0.587      | -            | -                | -                | -         |   -14.50 | adamb, Jackinho, nilo, susp, ztr    |
|           30 |     2088 | 2024-02-04 | TMVG              | W   | 0.586      | -            | -                | -                | -         |     1.17 | adamb, Jackinho, nilo, susp, ztr    |
|           29 |     2099 | 2024-02-04 | DUSTY             | W   | 0.585      | -            | -                | -                | -         |     2.76 | adamb, Jackinho, nilo, susp, ztr    |
|           28 |     2129 | 2024-02-03 | Sangal            | W   | 0.578      | 0.371        | -                | 0.797 (0.171)    | -         |     3.90 | adamb, Jackinho, nilo, susp, ztr    |
|           27 |     2141 | 2024-02-02 | EYEBALLERS        | W   | 0.574      | -            | -                | -                | -         |     6.87 | adamb, Jackinho, nilo, susp, ztr    |
|           26 |     2143 | 2024-02-02 | ex-Preasy         | W   | 0.573      | -            | -                | -                | -         |     9.88 | adamb, Jackinho, nilo, susp, ztr    |
|           25 |     2180 | 2024-02-01 | Sampi             | W   | 0.566      | -            | -                | -                | -         |     8.64 | adamb, Jackinho, nilo, susp, ztr    |
|           24 |     2231 | 2024-01-29 | BLEED             | W   | 0.545      | 0.371        | 0.400 (0.081)    | 1.000 (0.202)    | -         |    12.39 | adamb, Jackinho, nilo, susp, ztr    |
|           23 |     2292 | 2024-01-25 | BIG Academy       | W   | 0.518      | -            | -                | -                | -         |     2.79 | adamb, Jackinho, nilo, susp, ztr    |
|           22 |     2890 | 2024-01-09 | IKLA              | L   | 0.413      | -            | -                | -                | -         |   -11.80 | adamb, Jackinho, nilo, susp, ztr    |
|           21 |     2910 | 2023-12-30 | The Witchers      | L   | 0.346      | -            | -                | -                | -         |    -8.75 | adamb, Jackinho, nilo, susp, ztr    |
|           20 |     2912 | 2023-12-30 | VP.Prodigy        | W   | 0.344      | -            | -                | -                | -         |     1.54 | adamb, Jackinho, nilo, susp, ztr    |
|           19 |     2914 | 2023-12-29 | Aurora Young Blud | W   | 0.339      | -            | -                | -                | -         |     1.57 | adamb, Jackinho, nilo, susp, ztr    |
|           18 |     2915 | 2023-12-29 | esmagaB           | W   | 0.339      | -            | -                | -                | -         |     2.35 | adamb, Jackinho, nilo, susp, ztr    |
|           17 |     2921 | 2023-12-27 | Aurora Young Blud | L   | 0.326      | -            | -                | -                | -         |    -8.80 | adamb, Jackinho, nilo, susp, ztr    |
|           16 |     2935 | 2023-12-20 | PERA              | L   | 0.280      | -            | -                | -                | -         |    -5.65 | adamb, Jackinho, nilo, susp, ztr    |
|           15 |     2937 | 2023-12-20 | ARCRED            | W   | 0.279      | -            | -                | -                | -         |     1.47 | adamb, Jackinho, nilo, susp, ztr    |
|           14 |     2946 | 2023-12-19 | GUN5              | W   | 0.272      | -            | -                | -                | -         |     0.86 | adamb, Jackinho, nilo, susp, ztr    |
|           13 |     2949 | 2023-12-19 | PERA              | W   | 0.271      | -            | -                | -                | -         |     3.06 | adamb, Jackinho, nilo, susp, ztr    |
|           12 |     2971 | 2023-12-17 | Lilmix            | W   | 0.260      | -            | -                | -                | 1 (0.260) |     0.61 | adamb, Jackinho, nilo, susp, ztr    |
|           11 |     2978 | 2023-12-17 | BLUDS             | L   | 0.259      | -            | -                | -                | -         |    -6.92 | adamb, Jackinho, nilo, susp, ztr    |
|           10 |     2986 | 2023-12-17 | latch gibb        | W   | 0.258      | -            | -                | -                | 1 (0.258) |     0.26 | adamb, Jackinho, nilo, susp, ztr    |
|            9 |     3287 | 2023-12-01 | GODSENT           | L   | 0.153      | -            | -                | -                | -         |    -3.87 | adamb, hns, Jackinho, nilo, RuStY   |
|            8 |     3371 | 2023-11-25 | Gucci Academy     | L   | 0.112      | -            | -                | -                | -         |    -2.95 | adamb, hns, Jackinho, nilo, RuStY   |
|            7 |     3473 | 2023-11-19 | Sprout            | W   | 0.072      | -            | -                | -                | -         |     0.34 | adamb, hns, Jackinho, nilo, RuStY   |
|            6 |     3501 | 2023-11-18 | Sprout            | L   | 0.065      | -            | -                | -                | -         |    -1.75 | adamb, hns, Jackinho, nilo, RuStY   |
|            5 |     3538 | 2023-11-17 | SAW               | W   | 0.057      | -            | -                | -                | -         |     1.65 | adamb, hns, Jackinho, nilo, RuStY   |
|            4 |     3613 | 2023-11-15 | ODDIK             | W   | 0.044      | -            | -                | -                | -         |     0.59 | adamb, hns, Jackinho, nilo, RuStY   |
|            3 |     3663 | 2023-11-12 | ex-Anonymo        | W   | 0.027      | -            | -                | -                | -         |     0.14 | adamb, hns, Jackinho, nilo, RuStY   |
|            2 |     3693 | 2023-11-11 | Lilmix            | L   | 0.021      | -            | -                | -                | -         |    -0.60 | adamb, hns, Jackinho, nilo, RuStY   |
|            1 |     3719 | 2023-11-10 | MOUZ NXT          | W   | 0.013      | -            | -                | -                | -         |     0.23 | adamb, hns, Jackinho, nilo, RuStY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,653.61)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-07 |      1.000 | $6,110.00      | $6,110.00       |
| 2024-03-10 |      0.821 | $12,500.00     | $10,257.33      |
| 2023-12-30 |      0.346 | $5,000.00      | $1,728.99       |
| 2023-12-20 |      0.280 | $2,000.00      | $559.39         |
| 2023-12-17 |      0.260 | $950.00        | $247.35         |
| 2023-12-03 |      0.167 | $1,372.00      | $228.93         |
| 2023-11-26 |      0.119 | $1,600.00      | $190.12         |
| 2023-11-18 |      0.066 | $5,000.00      | $331.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
