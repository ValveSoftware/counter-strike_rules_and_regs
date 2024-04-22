### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [13]( ../standings_americas.md)<br />
Final Rank Value:  918.0<br />
<br />
Final Rank Value (918.0) = Starting Rank Value (899.6) + Head To Head Adjustments (18.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.418[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 899.6
- 400 + ( ( 0.259 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 899.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |      209 | 2024-04-16 | W7M            | L   | 1.000      | -            | -                | -                | -         |   -20.72 | doc, drg, rdnzao, supLexN1, togs  |
|           78 |      277 | 2024-04-12 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -20.22 | doc, drg, rdnzao, supLexN1, togs  |
|           77 |      300 | 2024-04-11 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -0.94 | doc, drg, gafolo, rdnzao, togs    |
|           76 |      326 | 2024-04-10 | ODDIK          | W   | 1.000      | 0.450        | -                | 0.552 (0.248)    | 0 (0.000) |    11.87 | doc, drg, lukiz, rdnzao, supLexN1 |
|           75 |      332 | 2024-04-10 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |   -19.98 | doc, drg, lukiz, rdnzao, supLexN1 |
|           74 |      431 | 2024-04-08 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -1.00 | doc, drg, rdnzao, supLexN1, togs  |
|           73 |      470 | 2024-04-07 | BESTIA         | W   | 1.000      | 0.435        | -                | 0.455 (0.198)    | 0 (0.000) |    11.71 | doc, drg, rdnzao, supLexN1, togs  |
|           72 |      481 | 2024-04-06 | ODDIK          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.67 | doc, drg, gafolo, supLexN1, togs  |
|           71 |      501 | 2024-04-05 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -0.78 | doc, drg, gafolo, supLexN1, togs  |
|           70 |      519 | 2024-04-04 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -0.78 | doc, drg, gafolo, supLexN1, togs  |
|           69 |      527 | 2024-04-04 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -0.79 | doc, drg, gafolo, supLexN1, togs  |
|           68 |      564 | 2024-04-03 | 2GAME          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.96 | doc, drg, gafolo, rdnzao, togs    |
|           67 |      567 | 2024-04-03 | 2GAME          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.20 | doc, drg, gafolo, rdnzao, togs    |
|           66 |      605 | 2024-04-02 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -19.78 | doc, drg, rdnzao, supLexN1, togs  |
|           65 |      609 | 2024-04-02 | MIBR           | L   | 1.000      | -            | -                | -                | -         |    -3.36 | doc, drg, rdnzao, supLexN1, togs  |
|           64 |      936 | 2024-03-14 | MIBR           | L   | 0.941      | -            | -                | -                | -         |    -3.42 | doc, drg, gafolo, rdnzao, togs    |
|           63 |      938 | 2024-03-14 | MIBR           | L   | 0.941      | -            | -                | -                | -         |    -3.54 | doc, drg, gafolo, rdnzao, togs    |
|           62 |      964 | 2024-03-13 | Yawara         | W   | 0.935      | -            | -                | -                | 0 (0.000) |     2.46 | doc, drg, gafolo, rdnzao, togs    |
|           61 |      971 | 2024-03-13 | ODDIK          | W   | 0.934      | -            | -                | -                | 0 (0.000) |    12.61 | doc, drg, gafolo, rdnzao, togs    |
|           60 |     1039 | 2024-03-11 | Fluxo          | L   | 0.919      | -            | -                | -                | -         |   -10.74 | doc, drg, gafolo, rdnzao, togs    |
|           59 |     1069 | 2024-03-09 | Case           | L   | 0.907      | -            | -                | -                | -         |   -18.96 | doc, drg, gafolo, rdnzao, togs    |
|           58 |     1133 | 2024-03-07 | Corinthians    | W   | 0.892      | -            | -                | -                | 0 (0.000) |     3.21 | doc, drg, gafolo, rdnzao, togs    |
|           57 |     1189 | 2024-03-05 | Solid          | W   | 0.880      | 0.450        | 0.126 (0.050)    | 0.584 (0.231)    | 0 (0.000) |     9.46 | doc, drg, gafolo, rdnzao, togs    |
|           56 |     1193 | 2024-03-05 | Solid          | W   | 0.880      | 0.450        | 0.126 (0.050)    | 0.584 (0.231)    | 0 (0.000) |    10.16 | doc, drg, gafolo, rdnzao, togs    |
|           55 |     1386 | 2024-02-24 | Galorys        | W   | 0.815      | 0.450        | 0.042 (0.015)    | 0.557 (0.204)    | -         |     7.24 | doc, drg, gafolo, rdnzao, togs    |
|           54 |     1397 | 2024-02-24 | Galorys        | W   | 0.814      | 0.450        | 0.042 (0.015)    | 0.557 (0.204)    | -         |     7.68 | doc, drg, gafolo, rdnzao, togs    |
|           53 |     1399 | 2024-02-24 | Fluxo          | L   | 0.814      | -            | -                | -                | -         |    -9.65 | doc, drg, gafolo, rdnzao, togs    |
|           52 |     1452 | 2024-02-21 | Corinthians    | W   | 0.795      | -            | -                | -                | -         |     3.30 | doc, drg, gafolo, rdnzao, togs    |
|           51 |     1456 | 2024-02-21 | Case           | W   | 0.794      | 0.435        | -                | 0.767 (0.265)    | -         |    10.46 | doc, drg, gafolo, rdnzao, togs    |
|           50 |     1458 | 2024-02-21 | Galorys        | W   | 0.794      | -            | -                | -                | -         |     9.20 | doc, drg, gafolo, rdnzao, togs    |
|           49 |     1487 | 2024-02-20 | Flamengo       | L   | 0.787      | -            | -                | -                | -         |   -22.74 | doc, drg, gafolo, rdnzao, togs    |
|           48 |     1492 | 2024-02-20 | Case           | W   | 0.786      | 0.303        | -                | 0.767 (0.183)    | -         |    10.53 | doc, drg, gafolo, rdnzao, togs    |
|           47 |     1514 | 2024-02-19 | Solid          | W   | 0.780      | 0.303        | 0.126 (0.030)    | -                | -         |    10.05 | doc, drg, gafolo, rdnzao, togs    |
|           46 |     1530 | 2024-02-18 | Galorys        | W   | 0.775      | 0.435        | 0.042 (0.014)    | 0.557 (0.188)    | -         |     9.52 | doc, drg, gafolo, rdnzao, togs    |
|           45 |     1552 | 2024-02-17 | W7M            | L   | 0.768      | -            | -                | -                | -         |   -14.40 | doc, drg, gafolo, rdnzao, togs    |
|           44 |     1556 | 2024-02-17 | Galorys        | L   | 0.767      | -            | -                | -                | -         |   -16.03 | doc, drg, gafolo, rdnzao, togs    |
|           43 |     1586 | 2024-02-16 | W7M            | W   | 0.760      | -            | -                | -                | -         |     9.59 | doc, drg, gafolo, rdnzao, togs    |
|           42 |     1611 | 2024-02-15 | Case           | L   | 0.754      | -            | -                | -                | -         |   -13.98 | doc, drg, gafolo, rdnzao, togs    |
|           41 |     1616 | 2024-02-15 | Fluxo          | L   | 0.753      | -            | -                | -                | -         |    -9.46 | doc, drg, gafolo, rdnzao, togs    |
|           40 |     1619 | 2024-02-15 | Fluxo          | L   | 0.753      | -            | -                | -                | -         |   -10.09 | doc, drg, gafolo, rdnzao, togs    |
|           39 |     1645 | 2024-02-14 | Hype           | W   | 0.748      | -            | -                | -                | -         |     0.89 | doc, drg, gafolo, rdnzao, togs    |
|           38 |     1655 | 2024-02-14 | Galorys        | W   | 0.746      | 0.435        | -                | 0.557 (0.181)    | -         |     7.13 | doc, drg, gafolo, rdnzao, togs    |
|           37 |     1700 | 2024-02-12 | Solid          | W   | 0.735      | 0.303        | 0.126 (0.028)    | -                | -         |     9.04 | doc, drg, gafolo, rdnzao, togs    |
|           36 |     2003 | 2024-01-24 | paiN           | W   | 0.608      | 0.143        | 0.698 (0.061)    | -                | -         |    18.86 | doc, drg, gafolo, rdnzao, togs    |
|           35 |     2021 | 2024-01-23 | adalYamigos    | W   | 0.601      | -            | -                | -                | -         |     4.57 | doc, drg, gafolo, rdnzao, togs    |
|           34 |     2047 | 2024-01-22 | Legacy         | W   | 0.595      | -            | -                | -                | -         |    12.90 | doc, drg, gafolo, rdnzao, togs    |
|           33 |     2081 | 2024-01-21 | 9z             | L   | 0.587      | -            | -                | -                | -         |    -9.04 | doc, drg, gafolo, rdnzao, togs    |
|           32 |     2120 | 2024-01-20 | paiN           | L   | 0.580      | -            | -                | -                | -         |    -0.25 | doc, drg, gafolo, rdnzao, togs    |
|           31 |     2156 | 2024-01-19 | Galorys        | W   | 0.575      | -            | -                | -                | -         |     7.39 | doc, drg, gafolo, rdnzao, togs    |
|           30 |     2163 | 2024-01-19 | TIMACETA       | L   | 0.574      | -            | -                | -                | -         |   -16.34 | doc, drg, gafolo, rdnzao, togs    |
|           29 |     2222 | 2024-01-18 | MIBR           | L   | 0.567      | -            | -                | -                | -         |    -1.24 | doc, drg, gafolo, rdnzao, togs    |
|           28 |     2268 | 2024-01-17 | RED Canids     | W   | 0.562      | -            | -                | -                | -         |    10.78 | doc, drg, gafolo, rdnzao, togs    |
|           27 |     2286 | 2024-01-17 | MIBR           | L   | 0.561      | -            | -                | -                | -         |    -1.08 | doc, drg, gafolo, rdnzao, togs    |
|           26 |     2397 | 2024-01-14 | paiN           | W   | 0.542      | 0.143        | 0.698 (0.054)    | -                | -         |    16.90 | doc, drg, gafolo, rdnzao, togs    |
|           25 |     2400 | 2024-01-14 | BESTIA         | W   | 0.541      | -            | -                | -                | -         |     7.09 | doc, drg, gafolo, rdnzao, togs    |
|           24 |     2406 | 2024-01-14 | Corinthians    | W   | 0.541      | -            | -                | -                | -         |     3.33 | doc, drg, gafolo, rdnzao, togs    |
|           23 |     2422 | 2024-01-13 | Galorys        | W   | 0.535      | -            | -                | -                | -         |     7.81 | doc, drg, gafolo, rdnzao, togs    |
|           22 |     3017 | 2023-11-29 | blockkstar     | L   | 0.234      | -            | -                | -                | -         |    -6.63 | doc, drg, gafolo, rdnzao, togs    |
|           21 |     3070 | 2023-11-25 | Fluxo          | L   | 0.206      | -            | -                | -                | -         |    -2.01 | doc, drg, gafolo, rdnzao, togs    |
|           20 |     3089 | 2023-11-24 | Imperial       | L   | 0.200      | -            | -                | -                | -         |    -0.06 | doc, drg, gafolo, rdnzao, togs    |
|           19 |     3108 | 2023-11-23 | Corinthians    | W   | 0.193      | -            | -                | -                | -         |     1.23 | doc, drg, gafolo, rdnzao, togs    |
|           18 |     3149 | 2023-11-20 | RED Canids     | L   | 0.173      | -            | -                | -                | -         |    -1.98 | doc, drg, gafolo, rdnzao, togs    |
|           17 |     3185 | 2023-11-18 | W7M            | W   | 0.161      | -            | -                | -                | -         |     2.09 | doc, drg, gafolo, rdnzao, togs    |
|           16 |     3217 | 2023-11-17 | Flamengo       | W   | 0.154      | -            | -                | -                | -         |     0.56 | doc, drg, gafolo, rdnzao, togs    |
|           15 |     3290 | 2023-11-15 | Solid          | W   | 0.141      | -            | -                | -                | -         |     2.43 | doc, drg, gafolo, rdnzao, togs    |
|           14 |     3343 | 2023-11-13 | W7M            | W   | 0.127      | -            | -                | -                | -         |     1.64 | doc, drg, gafolo, rdnzao, togs    |
|           13 |     3532 | 2023-11-04 | BESTIA         | L   | 0.068      | -            | -                | -                | -         |    -1.27 | doc, drg, gafolo, rdnzao, togs    |
|           12 |     3535 | 2023-11-04 | ODDIK          | W   | 0.067      | -            | -                | -                | -         |     1.11 | doc, drg, gafolo, rdnzao, togs    |
|           11 |     3538 | 2023-11-04 | Legacy         | L   | 0.066      | -            | -                | -                | -         |    -0.59 | doc, drg, gafolo, rdnzao, togs    |
|           10 |     3575 | 2023-11-02 | paiN           | W   | 0.054      | 0.417        | 0.698 (0.016)    | -                | -         |     1.69 | doc, drg, gafolo, rdnzao, togs    |
|            9 |     3596 | 2023-11-01 | ODDIK          | L   | 0.048      | -            | -                | -                | -         |    -0.72 | doc, drg, gafolo, rdnzao, togs    |
|            8 |     3606 | 2023-11-01 | Fluxo          | W   | 0.046      | -            | -                | -                | -         |     1.02 | doc, drg, gafolo, rdnzao, togs    |
|            7 |     3636 | 2023-10-31 | RED Canids     | L   | 0.040      | -            | -                | -                | -         |    -0.45 | doc, drg, gafolo, rdnzao, togs    |
|            6 |     3665 | 2023-10-30 | Seleção do bt0 | W   | 0.033      | -            | -                | -                | -         |     0.06 | doc, drg, gafolo, rdnzao, togs    |
|            5 |     3706 | 2023-10-29 | Fluxo          | W   | 0.026      | -            | -                | -                | -         |     0.58 | doc, drg, gafolo, rdnzao, togs    |
|            4 |     3743 | 2023-10-28 | Case           | W   | 0.020      | -            | -                | -                | -         |     0.30 | doc, drg, gafolo, rdnzao, togs    |
|            3 |     3779 | 2023-10-27 | Boca Juniors   | W   | 0.013      | -            | -                | -                | -         |     0.02 | doc, drg, gafolo, rdnzao, togs    |
|            2 |     3813 | 2023-10-26 | BESTIA         | W   | 0.006      | -            | -                | -                | -         |     0.08 | doc, drg, gafolo, rdnzao, togs    |
|            1 |     3847 | 2023-10-25 | Corinthians    | W   | 0.000      | -            | -                | -                | -         |     0.00 | doc, drg, gafolo, rdnzao, togs    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,713.55)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-25 |      0.821 | $5,000.00      | $4,102.94       |
| 2024-02-21 |      0.794 | $3,500.00      | $2,777.28       |
| 2023-11-20 |      0.173 | $1,500.00      | $260.02         |
| 2023-11-04 |      0.068 | $6,000.00      | $410.81         |
| 2023-11-04 |      0.067 | $2,000.00      | $134.85         |
| 2023-11-02 |      0.055 | $500.00        | $27.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
