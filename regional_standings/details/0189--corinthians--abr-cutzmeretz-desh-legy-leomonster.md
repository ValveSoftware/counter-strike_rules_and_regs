### Roster Details<br />
Team Name: Corinthians<br />
Roster: abr, CutzMeretz, desh, legy, Leomonster<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  592.0<br />
<br />
Final Rank Value (592.0) = Starting Rank Value (665.5) + Head To Head Adjustments (-73.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 665.5
- 400 + ( ( 0.137 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 665.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      522 | 2024-04-04 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |    -2.43 | abr, CutzMeretz, desh, legy, Leomonster         |
|           39 |      528 | 2024-04-04 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |    -2.49 | abr, CutzMeretz, desh, legy, Leomonster         |
|           38 |      700 | 2024-03-27 | 2GAME          | L   | 1.000      | -            | -                | -                | -         |   -13.91 | abr, CutzMeretz, desh, legy, Leomonster         |
|           37 |      703 | 2024-03-27 | 2GAME          | W   | 1.000      | 0.450        | 0.000 (0.000)    | 0.217 (0.098)    | 0 (0.000) |    17.76 | abr, CutzMeretz, desh, legy, Leomonster         |
|           36 |      974 | 2024-03-13 | MIBR Academy   | L   | 0.934      | -            | -                | -                | -         |   -14.00 | abr, CutzMeretz, desh, legy, Leomonster         |
|           35 |     1032 | 2024-03-11 | RED Canids     | L   | 0.920      | -            | -                | -                | -         |    -2.76 | abr, CutzMeretz, desh, legy, Leomonster         |
|           34 |     1083 | 2024-03-09 | Fluxo          | L   | 0.906      | -            | -                | -                | -         |    -2.30 | abr, CutzMeretz, desh, legy, Leomonster         |
|           33 |     1133 | 2024-03-07 | Sharks         | L   | 0.892      | -            | -                | -                | -         |    -3.21 | abr, CutzMeretz, desh, legy, Leomonster         |
|           32 |     1389 | 2024-02-24 | W7M            | L   | 0.815      | -            | -                | -                | -         |    -5.06 | abr, CutzMeretz, desh, legy, Leomonster         |
|           31 |     1398 | 2024-02-24 | W7M            | L   | 0.814      | -            | -                | -                | -         |    -5.30 | abr, CutzMeretz, desh, legy, Leomonster         |
|           30 |     1418 | 2024-02-23 | Galorys        | W   | 0.808      | 0.450        | 0.042 (0.015)    | 0.557 (0.203)    | 0 (0.000) |    19.08 | abr, CutzMeretz, desh, legy, Leomonster         |
|           29 |     1419 | 2024-02-23 | Galorys        | L   | 0.808      | -            | -                | -                | -         |    -6.17 | abr, CutzMeretz, desh, legy, Leomonster         |
|           28 |     1452 | 2024-02-21 | Sharks         | L   | 0.795      | -            | -                | -                | -         |    -3.30 | abr, CutzMeretz, desh, legy, Leomonster         |
|           27 |     1559 | 2024-02-17 | Galorys        | L   | 0.766      | -            | -                | -                | -         |    -6.02 | abr, CutzMeretz, desh, legy, Leomonster         |
|           26 |     1637 | 2024-02-14 | adalYamigos    | L   | 0.748      | -            | -                | -                | -         |    -7.15 | abr, CutzMeretz, desh, legy, Leomonster         |
|           25 |     1646 | 2024-02-14 | adalYamigos    | L   | 0.748      | -            | -                | -                | -         |    -7.57 | abr, CutzMeretz, desh, legy, Leomonster         |
|           24 |     1651 | 2024-02-14 | Solid          | L   | 0.747      | -            | -                | -                | -         |    -5.56 | abr, CutzMeretz, desh, legy, Leomonster         |
|           23 |     1692 | 2024-02-13 | W7M            | L   | 0.740      | -            | -                | -                | -         |    -4.88 | abr, CutzMeretz, desh, legy, Leomonster         |
|           22 |     1703 | 2024-02-12 | W7M            | L   | 0.734      | -            | -                | -                | -         |    -5.06 | abr, CutzMeretz, desh, legy, Leomonster         |
|           21 |     2372 | 2024-01-15 | Imperial       | L   | 0.548      | -            | -                | -                | -         |    -0.04 | abr, Alisson, CutzMeretz, desh, Leomonster      |
|           20 |     2406 | 2024-01-14 | Sharks         | L   | 0.541      | -            | -                | -                | -         |    -3.33 | doc, drg, gafolo, rdnzao, togs                  |
|           19 |     2409 | 2024-01-14 | PUBG aim       | W   | 0.540      | 0.143        | 0.000 (0.000)    | 0.059 (0.005)    | 0 (0.000) |     5.64 | atarax1a, laser, lenci, reversive, righi        |
|           18 |     2514 | 2024-01-11 | 2GAME          | L   | 0.520      | -            | -                | -                | -         |    -9.14 | BRNZ1K, dok, dzt, santos, vhz                   |
|           17 |     2569 | 2024-01-09 | ODDIK          | L   | 0.507      | -            | -                | -                | -         |    -2.91 | abr, Alisson, CutzMeretz, desh, Leomonster      |
|           16 |     2576 | 2024-01-09 | TIMACETA       | W   | 0.507      | 0.143        | 0.000 (0.000)    | 0.101 (0.007)    | 0 (0.000) |     4.96 | beg0d, bnc, cerolzin, farias, leleo             |
|           15 |     2645 | 2023-12-19 | ODDIK          | L   | 0.367      | -            | -                | -                | -         |    -2.28 | matios, naitte, ponter, Tuurtle, WOOD7          |
|           14 |     2656 | 2023-12-18 | WINDINGO       | W   | 0.361      | 0.303        | 0.004 (0.000)    | 0.032 (0.003)    | 0 (0.000) |     6.10 | bichop, nasher, PREDI, restikk, righi           |
|           13 |     2714 | 2023-12-16 | ODDIK          | L   | 0.347      | -            | -                | -                | -         |    -2.08 | Alisson, cerolzin, CutzMeretz, desh, Leomonster |
|           12 |     2730 | 2023-12-15 | Case           | L   | 0.342      | -            | -                | -                | -         |    -2.46 | abr, Alisson, CutzMeretz, desh, Leomonster      |
|           11 |     3002 | 2023-11-30 | Case           | L   | 0.241      | -            | -                | -                | -         |    -1.73 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|           10 |     3084 | 2023-11-24 | Fluxo          | L   | 0.201      | -            | -                | -                | -         |    -0.64 | chay, Lucaozy, PKL, vsm, zevy                   |
|            9 |     3108 | 2023-11-23 | Sharks         | L   | 0.193      | -            | -                | -                | -         |    -1.23 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            8 |     3326 | 2023-11-14 | Case           | L   | 0.133      | -            | -                | -                | -         |    -0.98 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            7 |     3358 | 2023-11-12 | Flamengo       | L   | 0.121      | -            | -                | -                | -         |    -2.57 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            6 |     3655 | 2023-10-30 | paiN           | L   | 0.035      | -            | -                | -                | -         |    -0.00 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            5 |     3669 | 2023-10-30 | Case           | L   | 0.033      | -            | -                | -                | -         |    -0.24 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            4 |     3775 | 2023-10-27 | BESTIA         | L   | 0.015      | -            | -                | -                | -         |    -0.14 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            3 |     3803 | 2023-10-26 | Filhos de D10S | W   | 0.009      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.07 | detr0ittJ, ninjaZ, voltera, w1, xns             |
|            2 |     3811 | 2023-10-26 | Filhos de D10S | L   | 0.006      | -            | -                | -                | -         |    -0.15 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            1 |     3847 | 2023-10-25 | Sharks         | L   | 0.000      | -            | -                | -                | -         |     0.00 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($233.32)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
