### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  891.2<br />
<br />
Final Rank Value (891.2) = Starting Rank Value (885.2) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.170[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 885.2
- 400 + ( ( 0.255 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 885.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |      212 | 2024-04-26 | TYLOO       | L   | 1.000      | -            | -                | -                | -         |   -13.94 | doc, drg, rdnzao, supLexN1, togs  |
|           68 |      244 | 2024-04-25 | M80         | L   | 1.000      | -            | -                | -                | -         |    -6.28 | doc, drg, rdnzao, supLexN1, togs  |
|           67 |      284 | 2024-04-23 | Vitality    | L   | 1.000      | -            | -                | -                | -         |    -0.18 | doc, drg, rdnzao, supLexN1, togs  |
|           66 |      505 | 2024-04-16 | W7M         | L   | 1.000      | -            | -                | -                | -         |   -21.01 | doc, drg, rdnzao, supLexN1, togs  |
|           65 |      573 | 2024-04-12 | Galorys     | L   | 1.000      | -            | -                | -                | -         |   -20.36 | doc, drg, rdnzao, supLexN1, togs  |
|           64 |      596 | 2024-04-11 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -0.67 | doc, drg, gafolo, rdnzao, togs    |
|           63 |      622 | 2024-04-10 | ODDIK       | W   | 1.000      | 0.450        | -                | 0.547 (0.246)    | 0 (0.000) |    12.90 | doc, drg, lukiz, rdnzao, supLexN1 |
|           62 |      628 | 2024-04-10 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -18.86 | doc, drg, lukiz, rdnzao, supLexN1 |
|           61 |      727 | 2024-04-08 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -0.69 | doc, drg, rdnzao, supLexN1, togs  |
|           60 |      766 | 2024-04-07 | BESTIA      | W   | 1.000      | 0.435        | -                | 0.389 (0.169)    | 0 (0.000) |    11.22 | doc, drg, rdnzao, supLexN1, togs  |
|           59 |      777 | 2024-04-06 | ODDIK       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.98 | doc, drg, gafolo, supLexN1, togs  |
|           58 |      797 | 2024-04-05 | paiN        | L   | 0.993      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, supLexN1, togs  |
|           57 |      815 | 2024-04-04 | paiN        | L   | 0.988      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, supLexN1, togs  |
|           56 |      823 | 2024-04-04 | paiN        | L   | 0.988      | -            | -                | -                | -         |    -0.54 | doc, drg, gafolo, supLexN1, togs  |
|           55 |      860 | 2024-04-03 | 2GAME       | W   | 0.981      | -            | -                | -                | 0 (0.000) |     4.71 | doc, drg, gafolo, rdnzao, togs    |
|           54 |      863 | 2024-04-03 | 2GAME       | W   | 0.981      | -            | -                | -                | 0 (0.000) |     4.93 | doc, drg, gafolo, rdnzao, togs    |
|           53 |      901 | 2024-04-02 | BESTIA      | L   | 0.975      | -            | -                | -                | -         |   -19.74 | doc, drg, rdnzao, supLexN1, togs  |
|           52 |      905 | 2024-04-02 | MIBR        | L   | 0.974      | -            | -                | -                | -         |    -0.96 | doc, drg, rdnzao, supLexN1, togs  |
|           51 |     1232 | 2024-03-14 | MIBR        | L   | 0.848      | -            | -                | -                | -         |    -0.85 | doc, drg, gafolo, rdnzao, togs    |
|           50 |     1234 | 2024-03-14 | MIBR        | L   | 0.848      | -            | -                | -                | -         |    -0.86 | doc, drg, gafolo, rdnzao, togs    |
|           49 |     1260 | 2024-03-13 | Yawara      | W   | 0.842      | -            | -                | -                | 0 (0.000) |     2.30 | doc, drg, gafolo, rdnzao, togs    |
|           48 |     1267 | 2024-03-13 | ODDIK       | W   | 0.841      | -            | -                | -                | 0 (0.000) |    13.13 | doc, drg, gafolo, rdnzao, togs    |
|           47 |     1335 | 2024-03-11 | Fluxo       | L   | 0.826      | -            | -                | -                | -         |    -9.34 | doc, drg, gafolo, rdnzao, togs    |
|           46 |     1365 | 2024-03-09 | Case        | L   | 0.814      | -            | -                | -                | -         |   -16.95 | doc, drg, gafolo, rdnzao, togs    |
|           45 |     1429 | 2024-03-07 | Corinthians | W   | 0.799      | -            | -                | -                | 0 (0.000) |     3.13 | doc, drg, gafolo, rdnzao, togs    |
|           44 |     1485 | 2024-03-05 | Solid       | W   | 0.787      | 0.450        | 0.132 (0.047)    | 0.503 (0.178)    | 0 (0.000) |     8.82 | doc, drg, gafolo, rdnzao, togs    |
|           43 |     1489 | 2024-03-05 | Solid       | W   | 0.786      | 0.450        | 0.132 (0.047)    | 0.503 (0.178)    | 0 (0.000) |     9.41 | doc, drg, gafolo, rdnzao, togs    |
|           42 |     1682 | 2024-02-24 | Galorys     | W   | 0.721      | 0.450        | 0.047 (0.015)    | 0.510 (0.166)    | -         |     6.77 | doc, drg, gafolo, rdnzao, togs    |
|           41 |     1693 | 2024-02-24 | Galorys     | W   | 0.721      | 0.450        | 0.047 (0.015)    | 0.510 (0.166)    | -         |     7.15 | doc, drg, gafolo, rdnzao, togs    |
|           40 |     1695 | 2024-02-24 | Fluxo       | L   | 0.721      | -            | -                | -                | -         |    -8.17 | doc, drg, gafolo, rdnzao, togs    |
|           39 |     1748 | 2024-02-21 | Corinthians | W   | 0.701      | -            | -                | -                | -         |     3.17 | doc, drg, gafolo, rdnzao, togs    |
|           38 |     1752 | 2024-02-21 | Case        | W   | 0.701      | 0.435        | -                | 0.578 (0.176)    | -         |     9.26 | doc, drg, gafolo, rdnzao, togs    |
|           37 |     1754 | 2024-02-21 | Galorys     | W   | 0.700      | -            | -                | -                | -         |     8.38 | doc, drg, gafolo, rdnzao, togs    |
|           36 |     1783 | 2024-02-20 | Flamengo    | L   | 0.694      | -            | -                | -                | -         |   -19.87 | doc, drg, gafolo, rdnzao, togs    |
|           35 |     1788 | 2024-02-20 | Case        | W   | 0.693      | 0.303        | -                | 0.578 (0.121)    | -         |     9.28 | doc, drg, gafolo, rdnzao, togs    |
|           34 |     1810 | 2024-02-19 | Solid       | W   | 0.686      | 0.303        | 0.132 (0.028)    | -                | -         |     9.09 | doc, drg, gafolo, rdnzao, togs    |
|           33 |     1826 | 2024-02-18 | Galorys     | W   | 0.682      | 0.435        | 0.047 (0.014)    | 0.510 (0.151)    | -         |     8.61 | doc, drg, gafolo, rdnzao, togs    |
|           32 |     1848 | 2024-02-17 | W7M         | L   | 0.675      | -            | -                | -                | -         |   -12.82 | doc, drg, gafolo, rdnzao, togs    |
|           31 |     1852 | 2024-02-17 | Galorys     | L   | 0.674      | -            | -                | -                | -         |   -13.77 | doc, drg, gafolo, rdnzao, togs    |
|           30 |     1882 | 2024-02-16 | W7M         | W   | 0.666      | -            | -                | -                | -         |     8.30 | doc, drg, gafolo, rdnzao, togs    |
|           29 |     1907 | 2024-02-15 | Case        | L   | 0.661      | -            | -                | -                | -         |   -12.28 | doc, drg, gafolo, rdnzao, togs    |
|           28 |     1912 | 2024-02-15 | Fluxo       | L   | 0.660      | -            | -                | -                | -         |    -7.78 | doc, drg, gafolo, rdnzao, togs    |
|           27 |     1915 | 2024-02-15 | Fluxo       | L   | 0.659      | -            | -                | -                | -         |    -8.22 | doc, drg, gafolo, rdnzao, togs    |
|           26 |     1941 | 2024-02-14 | Hype        | W   | 0.655      | -            | -                | -                | -         |     0.90 | doc, drg, gafolo, rdnzao, togs    |
|           25 |     1951 | 2024-02-14 | Galorys     | W   | 0.653      | 0.435        | 0.047 (0.013)    | 0.510 (0.145)    | -         |     6.70 | doc, drg, gafolo, rdnzao, togs    |
|           24 |     1996 | 2024-02-12 | Solid       | W   | 0.642      | 0.303        | 0.132 (0.026)    | -                | -         |     8.31 | doc, drg, gafolo, rdnzao, togs    |
|           23 |     2299 | 2024-01-24 | paiN        | W   | 0.515      | 0.143        | 0.786 (0.058)    | -                | -         |    16.03 | doc, drg, gafolo, rdnzao, togs    |
|           22 |     2317 | 2024-01-23 | adalYamigos | W   | 0.508      | -            | -                | -                | -         |     3.59 | doc, drg, gafolo, rdnzao, togs    |
|           21 |     2343 | 2024-01-22 | Legacy      | W   | 0.501      | -            | -                | -                | -         |    10.94 | doc, drg, gafolo, rdnzao, togs    |
|           20 |     2377 | 2024-01-21 | 9z          | L   | 0.493      | -            | -                | -                | -         |    -6.89 | doc, drg, gafolo, rdnzao, togs    |
|           19 |     2416 | 2024-01-20 | paiN        | L   | 0.487      | -            | -                | -                | -         |    -0.15 | doc, drg, gafolo, rdnzao, togs    |
|           18 |     2452 | 2024-01-19 | Galorys     | W   | 0.482      | -            | -                | -                | -         |     6.36 | doc, drg, gafolo, rdnzao, togs    |
|           17 |     2459 | 2024-01-19 | TIMACETA    | L   | 0.481      | -            | -                | -                | -         |   -13.58 | doc, drg, gafolo, rdnzao, togs    |
|           16 |     2518 | 2024-01-18 | MIBR        | L   | 0.474      | -            | -                | -                | -         |    -0.24 | doc, drg, gafolo, rdnzao, togs    |
|           15 |     2564 | 2024-01-17 | RED Canids  | W   | 0.468      | -            | -                | -                | -         |     8.81 | doc, drg, gafolo, rdnzao, togs    |
|           14 |     2582 | 2024-01-17 | MIBR        | L   | 0.467      | -            | -                | -                | -         |    -0.21 | doc, drg, gafolo, rdnzao, togs    |
|           13 |     2693 | 2024-01-14 | paiN        | W   | 0.448      | 0.143        | 0.786 (0.050)    | -                | -         |    14.02 | doc, drg, gafolo, rdnzao, togs    |
|           12 |     2696 | 2024-01-14 | BESTIA      | W   | 0.448      | -            | -                | -                | -         |     5.67 | doc, drg, gafolo, rdnzao, togs    |
|           11 |     2702 | 2024-01-14 | Corinthians | W   | 0.447      | -            | -                | -                | -         |     2.92 | doc, drg, gafolo, rdnzao, togs    |
|           10 |     2718 | 2024-01-13 | Galorys     | W   | 0.441      | -            | -                | -                | -         |     6.50 | doc, drg, gafolo, rdnzao, togs    |
|            9 |     3313 | 2023-11-29 | blockkstar  | L   | 0.141      | -            | -                | -                | -         |    -3.95 | doc, drg, gafolo, rdnzao, togs    |
|            8 |     3366 | 2023-11-25 | Fluxo       | L   | 0.113      | -            | -                | -                | -         |    -1.04 | doc, drg, gafolo, rdnzao, togs    |
|            7 |     3385 | 2023-11-24 | Imperial    | L   | 0.107      | -            | -                | -                | -         |    -0.03 | doc, drg, gafolo, rdnzao, togs    |
|            6 |     3404 | 2023-11-23 | Corinthians | W   | 0.100      | -            | -                | -                | -         |     0.68 | doc, drg, gafolo, rdnzao, togs    |
|            5 |     3445 | 2023-11-20 | RED Canids  | L   | 0.080      | -            | -                | -                | -         |    -0.96 | doc, drg, gafolo, rdnzao, togs    |
|            4 |     3481 | 2023-11-18 | W7M         | W   | 0.068      | -            | -                | -                | -         |     0.87 | doc, drg, gafolo, rdnzao, togs    |
|            3 |     3513 | 2023-11-17 | Flamengo    | W   | 0.061      | -            | -                | -                | -         |     0.22 | doc, drg, gafolo, rdnzao, togs    |
|            2 |     3586 | 2023-11-15 | Solid       | W   | 0.048      | -            | -                | -                | -         |     0.81 | doc, drg, gafolo, rdnzao, togs    |
|            1 |     3639 | 2023-11-13 | W7M         | W   | 0.033      | -            | -                | -                | -         |     0.43 | doc, drg, gafolo, rdnzao, togs    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,707.17)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-02-25 |      0.727 | $5,000.00      | $3,636.40       |
| 2024-02-21 |      0.700 | $3,500.00      | $2,450.71       |
| 2023-11-20 |      0.080 | $1,500.00      | $120.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
