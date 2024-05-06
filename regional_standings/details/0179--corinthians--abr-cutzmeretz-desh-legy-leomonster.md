### Roster Details<br />
Team Name: Corinthians<br />
Roster: abr, CutzMeretz, desh, legy, Leomonster<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  588.2<br />
<br />
Final Rank Value (588.2) = Starting Rank Value (656.9) + Head To Head Adjustments (-68.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.9
- 400 + ( ( 0.135 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 656.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      818 | 2024-04-04 | Fluxo        | L   | 0.988      | -            | -                | -                | -         |    -2.35 | abr, CutzMeretz, desh, legy, Leomonster         |
|           33 |      824 | 2024-04-04 | Fluxo        | L   | 0.988      | -            | -                | -                | -         |    -2.41 | abr, CutzMeretz, desh, legy, Leomonster         |
|           32 |      996 | 2024-03-27 | 2GAME        | L   | 0.935      | -            | -                | -                | -         |   -13.58 | abr, CutzMeretz, desh, legy, Leomonster         |
|           31 |      999 | 2024-03-27 | 2GAME        | W   | 0.934      | 0.450        | 0.000 (0.000)    | 0.192 (0.081)    | 0 (0.000) |    16.04 | abr, CutzMeretz, desh, legy, Leomonster         |
|           30 |     1270 | 2024-03-13 | MIBR Academy | L   | 0.841      | -            | -                | -                | -         |   -12.67 | abr, CutzMeretz, desh, legy, Leomonster         |
|           29 |     1328 | 2024-03-11 | RED Canids   | L   | 0.827      | -            | -                | -                | -         |    -2.75 | abr, CutzMeretz, desh, legy, Leomonster         |
|           28 |     1379 | 2024-03-09 | Fluxo        | L   | 0.812      | -            | -                | -                | -         |    -2.10 | abr, CutzMeretz, desh, legy, Leomonster         |
|           27 |     1429 | 2024-03-07 | Sharks       | L   | 0.799      | -            | -                | -                | -         |    -3.13 | abr, CutzMeretz, desh, legy, Leomonster         |
|           26 |     1685 | 2024-02-24 | W7M          | L   | 0.721      | -            | -                | -                | -         |    -4.88 | abr, CutzMeretz, desh, legy, Leomonster         |
|           25 |     1694 | 2024-02-24 | W7M          | L   | 0.721      | -            | -                | -                | -         |    -5.09 | abr, CutzMeretz, desh, legy, Leomonster         |
|           24 |     1714 | 2024-02-23 | Galorys      | W   | 0.715      | 0.450        | 0.047 (0.015)    | 0.510 (0.164)    | 0 (0.000) |    16.78 | abr, CutzMeretz, desh, legy, Leomonster         |
|           23 |     1715 | 2024-02-23 | Galorys      | L   | 0.714      | -            | -                | -                | -         |    -5.62 | abr, CutzMeretz, desh, legy, Leomonster         |
|           22 |     1748 | 2024-02-21 | Sharks       | L   | 0.701      | -            | -                | -                | -         |    -3.17 | abr, CutzMeretz, desh, legy, Leomonster         |
|           21 |     1855 | 2024-02-17 | Galorys      | L   | 0.673      | -            | -                | -                | -         |    -5.37 | abr, CutzMeretz, desh, legy, Leomonster         |
|           20 |     1933 | 2024-02-14 | adalYamigos  | L   | 0.655      | -            | -                | -                | -         |    -7.20 | abr, CutzMeretz, desh, legy, Leomonster         |
|           19 |     1942 | 2024-02-14 | adalYamigos  | L   | 0.655      | -            | -                | -                | -         |    -7.59 | abr, CutzMeretz, desh, legy, Leomonster         |
|           18 |     1947 | 2024-02-14 | Solid        | L   | 0.654      | -            | -                | -                | -         |    -4.95 | abr, CutzMeretz, desh, legy, Leomonster         |
|           17 |     1988 | 2024-02-13 | W7M          | L   | 0.646      | -            | -                | -                | -         |    -4.73 | abr, CutzMeretz, desh, legy, Leomonster         |
|           16 |     1999 | 2024-02-12 | W7M          | L   | 0.641      | -            | -                | -                | -         |    -4.89 | abr, CutzMeretz, desh, legy, Leomonster         |
|           15 |     2668 | 2024-01-15 | Imperial     | L   | 0.455      | -            | -                | -                | -         |    -0.04 | abr, Alisson, CutzMeretz, desh, Leomonster      |
|           14 |     2702 | 2024-01-14 | Sharks       | L   | 0.447      | -            | -                | -                | -         |    -2.92 | doc, drg, gafolo, rdnzao, togs                  |
|           13 |     2705 | 2024-01-14 | KRÜ          | W   | 0.447      | 0.143        | 0.000 (0.000)    | 0.048 (0.003)    | 0 (0.000) |     4.66 | atarax1a, laser, lenci, reversive, righi        |
|           12 |     2810 | 2024-01-11 | 2GAME        | L   | 0.427      | -            | -                | -                | -         |    -7.75 | BRNZ1K, dok, dzt, santos, vhz                   |
|           11 |     2865 | 2024-01-09 | ODDIK        | L   | 0.414      | -            | -                | -                | -         |    -1.93 | abr, Alisson, CutzMeretz, desh, Leomonster      |
|           10 |     2872 | 2024-01-09 | TIMACETA     | W   | 0.413      | 0.143        | 0.000 (0.000)    | 0.079 (0.005)    | 0 (0.000) |     4.11 | beg0d, bnc, cerolzin, farias, leleo             |
|            9 |     2941 | 2023-12-19 | ODDIK        | L   | 0.274      | -            | -                | -                | -         |    -1.32 | matios, naitte, ponter, Tuurtle, WOOD7          |
|            8 |     2952 | 2023-12-18 | WINDINGO     | W   | 0.267      | 0.303        | 0.004 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     4.43 | bichop, nasher, PREDI, restikk, righi           |
|            7 |     3010 | 2023-12-16 | ODDIK        | L   | 0.253      | -            | -                | -                | -         |    -1.18 | Alisson, cerolzin, CutzMeretz, desh, Leomonster |
|            6 |     3026 | 2023-12-15 | Case         | L   | 0.248      | -            | -                | -                | -         |    -3.14 | abr, Alisson, CutzMeretz, desh, Leomonster      |
|            5 |     3298 | 2023-11-30 | Case         | L   | 0.148      | -            | -                | -                | -         |    -1.89 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            4 |     3380 | 2023-11-24 | Fluxo        | L   | 0.108      | -            | -                | -                | -         |    -0.34 | chayJESUS, Lucaozy, PKL, vsm, zevy              |
|            3 |     3404 | 2023-11-23 | Sharks       | L   | 0.100      | -            | -                | -                | -         |    -0.68 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            2 |     3622 | 2023-11-14 | Case         | L   | 0.040      | -            | -                | -                | -         |    -0.52 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |
|            1 |     3654 | 2023-11-12 | Flamengo     | L   | 0.028      | -            | -                | -                | -         |    -0.60 | abr, Alisson, CutzMeretz, Leomonster, supLexN1  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($172.67)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
