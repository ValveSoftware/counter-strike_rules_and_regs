### Roster Details<br />
Team Name: Fluxo<br />
Roster: chay, Lucaozy, PKL, vsm, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  1080.9<br />
<br />
Final Rank Value (1080.9) = Starting Rank Value (1052.1) + Head To Head Adjustments (28.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.545[<sup>1</sup>](#table2)
- Bounty Collected: 0.491[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.338<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1052.1
- 400 + ( ( 0.338 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1052.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |      116 | 2024-04-18 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -2.40 | chay, Lucaozy, PKL, vsm, zevy |
|           64 |      121 | 2024-04-18 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -2.44 | chay, Lucaozy, PKL, vsm, zevy |
|           63 |      168 | 2024-04-17 | ODDIK       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.82 | chay, Lucaozy, PKL, vsm, zevy |
|           62 |      178 | 2024-04-17 | Solid       | W   | 1.000      | 0.143        | 0.126 (0.018)    | -                | 0 (0.000) |     6.98 | chay, Lucaozy, PKL, vsm, zevy |
|           61 |      208 | 2024-04-16 | Hype        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.71 | chay, Lucaozy, PKL, vsm, zevy |
|           60 |      268 | 2024-04-13 | Galorys     | L   | 1.000      | -            | -                | -                | -         |   -24.27 | chay, Lucaozy, PKL, vsm, zevy |
|           59 |      333 | 2024-04-10 | Imperial    | W   | 1.000      | 0.450        | 0.569 (0.256)    | 1.000 (0.450)    | 0 (0.000) |    29.45 | chay, Lucaozy, PKL, vsm, zevy |
|           58 |      337 | 2024-04-10 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -1.79 | chay, Lucaozy, PKL, vsm, zevy |
|           57 |      387 | 2024-04-09 | ODDIK       | W   | 1.000      | 0.450        | -                | 0.552 (0.248)    | 0 (0.000) |     7.45 | chay, Lucaozy, PKL, vsm, zevy |
|           56 |      392 | 2024-04-09 | ODDIK       | W   | 1.000      | 0.450        | -                | 0.552 (0.248)    | 0 (0.000) |     7.95 | chay, Lucaozy, PKL, vsm, zevy |
|           55 |      428 | 2024-04-08 | ODDIK       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.51 | chay, Lucaozy, PKL, vsm, zevy |
|           54 |      477 | 2024-04-06 | BESTIA      | L   | 1.000      | -            | -                | -                | -         |   -23.48 | chay, Lucaozy, PKL, vsm, zevy |
|           53 |      479 | 2024-04-06 | Solid       | W   | 1.000      | 0.435        | 0.126 (0.055)    | 0.584 (0.254)    | 0 (0.000) |     7.86 | chay, Lucaozy, PKL, vsm, zevy |
|           52 |      494 | 2024-04-05 | MIBR        | L   | 1.000      | -            | -                | -                | -         |    -5.67 | chay, Lucaozy, PKL, vsm, zevy |
|           51 |      495 | 2024-04-05 | MIBR        | W   | 1.000      | 0.450        | 0.305 (0.137)    | 0.853 (0.384)    | 0 (0.000) |    26.38 | chay, Lucaozy, PKL, vsm, zevy |
|           50 |      522 | 2024-04-04 | Corinthians | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.43 | chay, Lucaozy, PKL, vsm, zevy |
|           49 |      528 | 2024-04-04 | Corinthians | W   | 1.000      | -            | -                | -                | -         |     2.49 | chay, Lucaozy, PKL, vsm, zevy |
|           48 |      540 | 2024-04-04 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |   -14.49 | chay, Lucaozy, PKL, vsm, zevy |
|           47 |      556 | 2024-04-03 | MIBR        | L   | 1.000      | -            | -                | -                | -         |    -5.01 | chay, Lucaozy, PKL, vsm, zevy |
|           46 |      569 | 2024-04-03 | BESTIA      | W   | 1.000      | -            | -                | -                | -         |     8.11 | chay, Lucaozy, PKL, vsm, zevy |
|           45 |      606 | 2024-04-02 | MIBR        | L   | 1.000      | -            | -                | -                | -         |    -5.06 | chay, Lucaozy, PKL, vsm, zevy |
|           44 |      610 | 2024-04-02 | BESTIA      | W   | 1.000      | -            | -                | -                | -         |     7.82 | chay, Lucaozy, PKL, vsm, zevy |
|           43 |      695 | 2024-03-27 | Galorys     | L   | 1.000      | -            | -                | -                | -         |   -24.54 | chay, Lucaozy, PKL, vsm, zevy |
|           42 |      701 | 2024-03-27 | Galorys     | W   | 1.000      | 0.450        | 0.042 (0.019)    | 0.557 (0.251)    | -         |     6.45 | chay, Lucaozy, PKL, vsm, zevy |
|           41 |      976 | 2024-03-13 | Intense     | W   | 0.934      | -            | -                | -                | -         |     0.71 | chay, Lucaozy, PKL, vsm, zevy |
|           40 |      982 | 2024-03-13 | Solid       | L   | 0.933      | -            | -                | -                | -         |   -22.54 | chay, Lucaozy, PKL, vsm, zevy |
|           39 |     1009 | 2024-03-12 | MIBR        | W   | 0.927      | 0.435        | 0.305 (0.123)    | 0.853 (0.344)    | -         |    23.82 | chay, Lucaozy, PKL, vsm, zevy |
|           38 |     1039 | 2024-03-11 | Sharks      | W   | 0.919      | 0.435        | 0.040 (0.016)    | -                | -         |    10.74 | chay, Lucaozy, PKL, vsm, zevy |
|           37 |     1083 | 2024-03-09 | Corinthians | W   | 0.906      | -            | -                | -                | -         |     2.30 | chay, Lucaozy, PKL, vsm, zevy |
|           36 |     1119 | 2024-03-07 | Case        | L   | 0.894      | -            | -                | -                | -         |   -21.97 | chay, Lucaozy, PKL, vsm, zevy |
|           35 |     1144 | 2024-03-06 | Solid       | L   | 0.888      | -            | -                | -                | -         |   -21.80 | chay, Lucaozy, PKL, vsm, zevy |
|           34 |     1146 | 2024-03-06 | Solid       | W   | 0.888      | 0.450        | 0.126 (0.050)    | -                | -         |     5.85 | chay, Lucaozy, PKL, vsm, zevy |
|           33 |     1211 | 2024-03-04 | Case        | W   | 0.875      | 0.450        | -                | 0.767 (0.302)    | -         |     6.10 | chay, Lucaozy, PKL, vsm, zevy |
|           32 |     1212 | 2024-03-04 | Case        | W   | 0.874      | 0.450        | -                | 0.767 (0.302)    | -         |     6.44 | chay, Lucaozy, PKL, vsm, zevy |
|           31 |     1369 | 2024-02-25 | Imperial    | W   | 0.821      | 0.435        | 0.569 (0.203)    | 1.000 (0.357)    | -         |    24.79 | chay, Lucaozy, PKL, vsm, zevy |
|           30 |     1399 | 2024-02-24 | Sharks      | W   | 0.814      | -            | -                | -                | -         |     9.65 | chay, Lucaozy, PKL, vsm, zevy |
|           29 |     1450 | 2024-02-21 | W7M         | L   | 0.795      | -            | -                | -                | -         |   -18.80 | chay, Lucaozy, PKL, vsm, zevy |
|           28 |     1454 | 2024-02-21 | W7M         | W   | 0.795      | -            | -                | -                | -         |     6.04 | chay, Lucaozy, PKL, vsm, zevy |
|           27 |     1461 | 2024-02-21 | Solid       | W   | 0.793      | 0.435        | 0.126 (0.043)    | -                | -         |     6.96 | chay, Lucaozy, PKL, vsm, zevy |
|           26 |     1486 | 2024-02-20 | Solid       | L   | 0.787      | -            | -                | -                | -         |   -18.19 | chay, Lucaozy, PKL, vsm, zevy |
|           25 |     1582 | 2024-02-16 | 9z          | W   | 0.760      | -            | -                | -                | -         |    10.47 | chay, Lucaozy, PKL, vsm, zevy |
|           24 |     1609 | 2024-02-15 | Imperial    | L   | 0.754      | -            | -                | -                | -         |    -0.71 | chay, Lucaozy, PKL, vsm, zevy |
|           23 |     1612 | 2024-02-15 | W7M         | W   | 0.754      | -            | -                | -                | -         |     6.83 | chay, Lucaozy, PKL, vsm, zevy |
|           22 |     1616 | 2024-02-15 | Sharks      | W   | 0.753      | -            | -                | -                | -         |     9.46 | chay, Lucaozy, PKL, vsm, zevy |
|           21 |     1619 | 2024-02-15 | Sharks      | W   | 0.753      | -            | -                | -                | -         |    10.09 | chay, Lucaozy, PKL, vsm, zevy |
|           20 |     1640 | 2024-02-14 | Intense     | W   | 0.748      | -            | -                | -                | -         |     0.69 | chay, Lucaozy, PKL, vsm, zevy |
|           19 |     1705 | 2024-02-12 | Flamengo    | W   | 0.732      | -            | -                | -                | -         |     1.29 | chay, Lucaozy, PKL, vsm, zevy |
|           18 |     2022 | 2024-01-23 | 9z          | L   | 0.601      | -            | -                | -                | -         |   -11.45 | chay, Lucaozy, PKL, vsm, zevy |
|           17 |     2043 | 2024-01-22 | ODDIK       | W   | 0.595      | -            | -                | -                | -         |     7.07 | chay, Lucaozy, PKL, vsm, zevy |
|           16 |     2080 | 2024-01-21 | Case        | L   | 0.587      | -            | -                | -                | -         |   -13.52 | chay, Lucaozy, PKL, vsm, zevy |
|           15 |     2117 | 2024-01-20 | Imperial    | L   | 0.580      | -            | -                | -                | -         |    -0.44 | chay, Lucaozy, PKL, vsm, zevy |
|           14 |     2161 | 2024-01-19 | RED Canids  | L   | 0.575      | -            | -                | -                | -         |    -9.84 | chay, Lucaozy, PKL, vsm, zevy |
|           13 |     2168 | 2024-01-19 | adalYamigos | W   | 0.574      | -            | -                | -                | -         |     2.60 | chay, Lucaozy, PKL, vsm, zevy |
|           12 |     2981 | 2023-12-02 | ex-Anonymo  | L   | 0.251      | -            | -                | -                | -         |    -6.65 | chay, Lucaozy, PKL, vsm, zevy |
|           11 |     3011 | 2023-11-30 | G2          | L   | 0.238      | -            | -                | -                | -         |    -0.06 | chay, Lucaozy, PKL, vsm, zevy |
|           10 |     3045 | 2023-11-26 | Imperial    | L   | 0.214      | -            | -                | -                | -         |    -0.15 | chay, Lucaozy, PKL, vsm, zevy |
|            9 |     3063 | 2023-11-25 | BESTIA      | W   | 0.208      | -            | -                | -                | -         |     1.53 | chay, Lucaozy, PKL, vsm, zevy |
|            8 |     3070 | 2023-11-25 | Sharks      | W   | 0.206      | -            | -                | -                | -         |     2.01 | chay, Lucaozy, PKL, vsm, zevy |
|            7 |     3084 | 2023-11-24 | Corinthians | W   | 0.201      | -            | -                | -                | -         |     0.64 | chay, Lucaozy, PKL, vsm, zevy |
|            6 |     3103 | 2023-11-23 | Imperial    | L   | 0.195      | -            | -                | -                | -         |    -0.13 | chay, Lucaozy, PKL, vsm, zevy |
|            5 |     3574 | 2023-11-02 | RED Canids  | L   | 0.055      | -            | -                | -                | -         |    -0.97 | chay, Lucaozy, PKL, vsm, zevy |
|            4 |     3606 | 2023-11-01 | Sharks      | L   | 0.046      | -            | -                | -                | -         |    -1.02 | chay, Lucaozy, PKL, vsm, zevy |
|            3 |     3654 | 2023-10-30 | TIMACETA    | W   | 0.035      | -            | -                | -                | -         |     0.05 | chay, Lucaozy, PKL, vsm, zevy |
|            2 |     3706 | 2023-10-29 | Sharks      | L   | 0.026      | -            | -                | -                | -         |    -0.58 | chay, Lucaozy, PKL, vsm, zevy |
|            1 |     3806 | 2023-10-26 | Imperial    | W   | 0.007      | -            | -                | -                | -         |     0.23 | chay, Lucaozy, PKL, vsm, zevy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,959.25)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-14 |      0.941 | $5,000.00      | $4,704.14       |
| 2024-02-25 |      0.821 | $25,000.00     | $20,514.68      |
| 2023-11-26 |      0.214 | $12,500.00     | $2,673.00       |
| 2023-11-04 |      0.067 | $1,000.00      | $67.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
