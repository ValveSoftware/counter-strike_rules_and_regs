### Roster Details<br />
Team Name: ODDIK<br />
Roster: matios, naitte, ponter, Tuurtle, WOOD7<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  945.4<br />
<br />
Final Rank Value (945.4) = Starting Rank Value (963.1) + Head To Head Adjustments (-17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.440[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.172[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.1
- 400 + ( ( 0.296 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 963.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       11 | 2024-05-05 | Case         | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.578 (0.251)    | 0 (0.000) |    11.30 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           62 |       70 | 2024-05-02 | Case         | L   | 1.000      | -            | -                | -                | -         |   -20.59 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           61 |       71 | 2024-05-02 | Case         | W   | 1.000      | 0.450        | 0.026 (0.012)    | 0.578 (0.260)    | 0 (0.000) |    10.52 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           60 |      208 | 2024-04-26 | W7M          | W   | 1.000      | 0.450        | -                | 0.476 (0.214)    | 0 (0.000) |     9.24 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           59 |      210 | 2024-04-26 | W7M          | W   | 1.000      | 0.450        | -                | 0.476 (0.214)    | 0 (0.000) |     9.96 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           58 |      258 | 2024-04-24 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.73 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           57 |      259 | 2024-04-24 | paiN         | W   | 1.000      | 0.450        | 0.786 (0.354)    | 0.869 (0.391)    | 0 (0.000) |    30.89 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           56 |      464 | 2024-04-17 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -8.11 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           55 |      472 | 2024-04-17 | W7M          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.70 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           54 |      506 | 2024-04-16 | DANVIET      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.89 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           53 |      557 | 2024-04-13 | paiN         | L   | 1.000      | -            | -                | -                | -         |    -0.52 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           52 |      578 | 2024-04-12 | Solid        | W   | 1.000      | 0.435        | 0.132 (0.058)    | 0.503 (0.219)    | 0 (0.000) |    14.32 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           51 |      622 | 2024-04-10 | Sharks       | L   | 1.000      | -            | -                | -                | -         |   -12.90 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           50 |      628 | 2024-04-10 | Sharks       | W   | 1.000      | 0.450        | 0.060 (0.027)    | 0.453 (0.204)    | -         |    18.86 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           49 |      683 | 2024-04-09 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -7.88 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           48 |      688 | 2024-04-09 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -8.43 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           47 |      724 | 2024-04-08 | Fluxo        | L   | 1.000      | -            | -                | -                | -         |    -9.05 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           46 |      777 | 2024-04-06 | Sharks       | L   | 1.000      | -            | -                | -                | -         |   -13.98 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           45 |      780 | 2024-04-06 | LA RUGONETA  | W   | 0.999      | -            | -                | -                | -         |     4.65 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           44 |      794 | 2024-04-05 | MIBR         | L   | 0.994      | -            | -                | -                | -         |    -0.75 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           43 |      820 | 2024-04-04 | Imperial     | L   | 0.988      | -            | -                | -                | -         |    -0.63 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           42 |      825 | 2024-04-04 | Imperial     | L   | 0.987      | -            | -                | -                | -         |    -0.64 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           41 |      859 | 2024-04-03 | RED Canids   | L   | 0.981      | -            | -                | -                | -         |   -10.22 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           40 |      862 | 2024-04-03 | RED Canids   | L   | 0.981      | -            | -                | -                | -         |   -11.05 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           39 |     1038 | 2024-03-26 | MIBR         | L   | 0.928      | -            | -                | -                | -         |    -0.83 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           38 |     1040 | 2024-03-26 | MIBR         | L   | 0.928      | -            | -                | -                | -         |    -0.84 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           37 |     1147 | 2024-03-18 | RED Canids   | L   | 0.874      | -            | -                | -                | -         |   -10.73 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           36 |     1168 | 2024-03-17 | Case         | W   | 0.867      | 0.303        | -                | 0.578 (0.152)    | -         |     9.24 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           35 |     1190 | 2024-03-16 | RED Canids   | L   | 0.861      | -            | -                | -                | -         |   -11.04 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           34 |     1205 | 2024-03-15 | 2GAME        | W   | 0.855      | -            | -                | -                | -         |     4.26 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           33 |     1206 | 2024-03-15 | 2GAME        | W   | 0.854      | -            | -                | -                | -         |     4.43 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           32 |     1210 | 2024-03-15 | MIBR Academy | W   | 0.853      | -            | -                | -                | -         |     4.17 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           31 |     1267 | 2024-03-13 | Sharks       | L   | 0.841      | -            | -                | -                | -         |   -13.13 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           30 |     1280 | 2024-03-13 | Case         | W   | 0.840      | 0.303        | -                | 0.578 (0.147)    | -         |    10.08 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           29 |     1351 | 2024-03-10 | Solid        | W   | 0.820      | 0.303        | 0.132 (0.033)    | 0.503 (0.125)    | -         |     9.94 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           28 |     1356 | 2024-03-10 | LA RUGONETA  | L   | 0.819      | -            | -                | -                | -         |   -23.43 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           27 |     1402 | 2024-03-08 | Galorys      | L   | 0.806      | -            | -                | -                | -         |   -18.36 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           26 |     1513 | 2024-03-04 | paiN         | L   | 0.779      | -            | -                | -                | -         |    -0.47 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           25 |     1528 | 2024-03-03 | RED Canids   | W   | 0.774      | 0.143        | 0.105 (0.012)    | -                | 1 (0.774) |    13.10 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           24 |     1552 | 2024-03-02 | Elevate      | W   | 0.768      | -            | -                | -                | 1 (0.768) |    10.19 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           23 |     1580 | 2024-03-01 | M80          | L   | 0.760      | -            | -                | -                | -         |    -3.73 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           22 |     2132 | 2024-02-02 | BESTIA       | L   | 0.575      | -            | -                | -                | -         |   -11.88 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           21 |     2139 | 2024-02-02 | 9z           | L   | 0.574      | -            | -                | -                | -         |    -8.84 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           20 |     2339 | 2024-01-22 | Fluxo        | L   | 0.502      | -            | -                | -                | -         |    -6.71 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           19 |     2372 | 2024-01-21 | RED Canids   | W   | 0.494      | 0.143        | 0.105 (0.007)    | -                | -         |     8.10 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           18 |     2412 | 2024-01-20 | 9z           | W   | 0.487      | -            | -                | -                | -         |     7.61 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           17 |     2451 | 2024-01-19 | Flamengo     | W   | 0.482      | -            | -                | -                | -         |     1.50 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           16 |     2468 | 2024-01-19 | MIBR         | L   | 0.480      | -            | -                | -                | -         |    -0.32 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           15 |     2651 | 2024-01-16 | adalYamigos  | L   | 0.460      | -            | -                | -                | -         |   -11.98 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           14 |     2704 | 2024-01-14 | paiN         | L   | 0.447      | -            | -                | -                | -         |    -0.15 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           13 |     2725 | 2024-01-13 | Solid        | W   | 0.441      | 0.143        | 0.132 (0.008)    | -                | -         |     5.39 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           12 |     2853 | 2024-01-09 | W7M          | W   | 0.415      | -            | -                | -                | -         |     4.15 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           11 |     2859 | 2024-01-09 | Flamengo     | L   | 0.414      | -            | -                | -                | -         |   -11.95 | matios, naitte, ponter, Tuurtle, WOOD7 |
|           10 |     2865 | 2024-01-09 | Corinthians  | W   | 0.414      | -            | -                | -                | -         |     1.93 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            9 |     2873 | 2024-01-09 | Hype         | W   | 0.413      | -            | -                | -                | -         |     0.52 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            8 |     2925 | 2023-12-23 | Case         | W   | 0.300      | -            | -                | -                | -         |     2.02 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            7 |     2929 | 2023-12-21 | Solid        | W   | 0.288      | 0.303        | 0.132 (0.012)    | -                | -         |     3.81 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            6 |     2934 | 2023-12-20 | Case         | W   | 0.280      | -            | -                | -                | -         |     1.88 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            5 |     2941 | 2023-12-19 | Corinthians  | W   | 0.274      | -            | -                | -                | -         |     1.32 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            4 |     2951 | 2023-12-18 | Solid        | L   | 0.268      | -            | -                | -                | -         |    -4.95 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            3 |     3010 | 2023-12-16 | Corinthians  | W   | 0.253      | -            | -                | -                | -         |     1.18 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            2 |     3613 | 2023-11-15 | Metizport    | L   | 0.044      | -            | -                | -                | -         |    -0.59 | matios, naitte, ponter, Tuurtle, WOOD7 |
|            1 |     3703 | 2023-11-11 | Entropiq     | L   | 0.019      | -            | -                | -                | -         |    -0.47 | matios, naitte, ponter, Tuurtle, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,361.99)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-18 |      0.874 | $1,500.00      | $1,310.46       |
| 2023-12-23 |      0.300 | $3,500.00      | $1,051.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
