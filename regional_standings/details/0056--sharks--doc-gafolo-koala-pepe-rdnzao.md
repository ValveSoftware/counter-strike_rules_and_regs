### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  1057.5<br />
<br />
Final Rank Value (1057.5) = Starting Rank Value (970.5) + Head To Head Adjustments (87.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.290[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 970.5
- 400 + ( ( 0.286 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 970.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           73 |        6 | 2024-06-10 | Vikings KR  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.06 | doc, gafolo, koala, pepe, rdnzao |
|           72 |       35 | 2024-06-09 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -3.51 | doc, gafolo, koala, pepe, rdnzao |
|           71 |       51 | 2024-06-09 | BESTIA      | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.631 (0.284)    | 0 (0.000) |    14.47 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      110 | 2024-06-08 | Hype        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.67 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      119 | 2024-06-08 | Corinthians | L   | 1.000      | -            | -                | -                | -         |   -28.59 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      150 | 2024-06-07 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -5.23 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      208 | 2024-06-06 | paiN        | W   | 1.000      | 0.450        | 0.437 (0.197)    | 0.877 (0.395)    | 0 (0.000) |    28.14 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      276 | 2024-06-05 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -3.93 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      328 | 2024-06-04 | BESTIA      | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.631 (0.284)    | 0 (0.000) |    17.14 | doc, gafolo, koala, pepe, rdnzao |
|           64 |      659 | 2024-05-22 | Imperial    | W   | 1.000      | 0.450        | 0.415 (0.187)    | 0.799 (0.360)    | 0 (0.000) |    27.95 | doc, drg, gafolo, pepe, rdnzao   |
|           63 |      663 | 2024-05-22 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -3.16 | doc, drg, gafolo, pepe, rdnzao   |
|           62 |      689 | 2024-05-21 | Case        | L   | 1.000      | -            | -                | -                | -         |   -20.92 | doc, drg, gafolo, pepe, rdnzao   |
|           61 |      690 | 2024-05-21 | Case        | W   | 1.000      | 0.450        | -                | 0.656 (0.295)    | 0 (0.000) |    10.18 | doc, drg, gafolo, pepe, rdnzao   |
|           60 |      693 | 2024-05-21 | RED Canids  | W   | 1.000      | 0.450        | 0.112 (0.050)    | 0.756 (0.340)    | 0 (0.000) |    22.23 | doc, drg, gafolo, pepe, rdnzao   |
|           59 |      697 | 2024-05-21 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -8.80 | doc, drg, gafolo, pepe, rdnzao   |
|           58 |      825 | 2024-05-17 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |   -20.45 | doc, drg, gafolo, rdnzao, togs   |
|           57 |      853 | 2024-05-16 | W7M         | W   | 1.000      | 0.450        | -                | 0.426 (0.192)    | 0 (0.000) |     5.69 | doc, drg, gafolo, rdnzao, togs   |
|           56 |      856 | 2024-05-16 | W7M         | W   | 1.000      | 0.450        | -                | 0.426 (0.192)    | 0 (0.000) |     6.00 | doc, drg, gafolo, rdnzao, togs   |
|           55 |      858 | 2024-05-16 | Hype        | W   | 1.000      | -            | -                | -                | -         |     3.99 | doc, drg, gafolo, rdnzao, togs   |
|           54 |      898 | 2024-05-15 | Vikings KR  | W   | 1.000      | -            | -                | -                | -         |     5.54 | doc, drg, gafolo, rdnzao, togs   |
|           53 |      901 | 2024-05-15 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -4.17 | doc, drg, gafolo, rdnzao, togs   |
|           52 |      965 | 2024-05-14 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |   -10.89 | doc, drg, gafolo, rdnzao, togs   |
|           51 |      992 | 2024-05-13 | RED Canids  | W   | 1.000      | 0.384        | 0.112 (0.043)    | 0.756 (0.291)    | -         |    19.95 | doc, drg, gafolo, rdnzao, togs   |
|           50 |     1000 | 2024-05-13 | W7M         | W   | 1.000      | -            | -                | -                | -         |     7.50 | doc, drg, gafolo, rdnzao, togs   |
|           49 |     1049 | 2024-05-11 | W7M         | W   | 1.000      | -            | -                | -                | -         |     8.00 | doc, drg, gafolo, rdnzao, togs   |
|           48 |     1088 | 2024-05-09 | BESTIA      | L   | 0.988      | -            | -                | -                | -         |   -20.13 | doc, drg, gafolo, rdnzao, togs   |
|           47 |     1111 | 2024-05-08 | 9z          | L   | 0.981      | -            | -                | -                | -         |    -4.23 | doc, drg, gafolo, rdnzao, togs   |
|           46 |     1149 | 2024-05-06 | BESTIA      | W   | 0.968      | 0.435        | -                | 0.631 (0.266)    | -         |     9.88 | doc, drg, gafolo, rdnzao, togs   |
|           45 |     1747 | 2024-04-11 | paiN        | L   | 0.801      | -            | -                | -                | -         |    -0.94 | doc, drg, gafolo, rdnzao, togs   |
|           44 |     2011 | 2024-04-03 | ex-2GAME    | W   | 0.748      | -            | -                | -                | -         |     4.13 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     2014 | 2024-04-03 | ex-2GAME    | W   | 0.748      | -            | -                | -                | -         |     4.29 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     2383 | 2024-03-14 | MIBR        | L   | 0.615      | -            | -                | -                | -         |    -0.90 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     2385 | 2024-03-14 | MIBR        | L   | 0.615      | -            | -                | -                | -         |    -0.91 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     2411 | 2024-03-13 | Yawara      | W   | 0.608      | -            | -                | -                | -         |     1.32 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     2418 | 2024-03-13 | ODDIK       | W   | 0.607      | -            | -                | -                | -         |     9.00 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     2486 | 2024-03-11 | Fluxo       | L   | 0.593      | -            | -                | -                | -         |    -8.48 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     2516 | 2024-03-09 | Case        | L   | 0.581      | -            | -                | -                | -         |   -12.34 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     2580 | 2024-03-07 | Corinthians | W   | 0.566      | -            | -                | -                | -         |     2.21 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     2636 | 2024-03-05 | Solid       | W   | 0.554      | 0.450        | 0.055 (0.014)    | -                | -         |     6.15 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     2640 | 2024-03-05 | Solid       | W   | 0.553      | 0.450        | 0.055 (0.014)    | -                | -         |     6.43 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     2833 | 2024-02-24 | Galorys     | W   | 0.488      | -            | -                | -                | -         |     4.51 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     2844 | 2024-02-24 | Galorys     | W   | 0.488      | -            | -                | -                | -         |     4.68 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     2846 | 2024-02-24 | Fluxo       | L   | 0.487      | -            | -                | -                | -         |    -7.21 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     2899 | 2024-02-21 | Corinthians | W   | 0.468      | -            | -                | -                | -         |     2.02 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     2903 | 2024-02-21 | Case        | W   | 0.468      | -            | -                | -                | -         |     5.71 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     2905 | 2024-02-21 | Galorys     | W   | 0.467      | -            | -                | -                | -         |     5.12 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     2934 | 2024-02-20 | Flamengo    | L   | 0.461      | -            | -                | -                | -         |   -13.55 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     2939 | 2024-02-20 | Case        | W   | 0.460      | -            | -                | -                | -         |     5.58 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     2961 | 2024-02-19 | Solid       | W   | 0.453      | -            | -                | -                | -         |     5.55 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     2977 | 2024-02-18 | Galorys     | W   | 0.448      | -            | -                | -                | -         |     5.06 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     2999 | 2024-02-17 | W7M         | L   | 0.442      | -            | -                | -                | -         |    -9.75 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3003 | 2024-02-17 | Galorys     | L   | 0.441      | -            | -                | -                | -         |    -9.44 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3033 | 2024-02-16 | W7M         | W   | 0.433      | -            | -                | -                | -         |     4.05 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3058 | 2024-02-15 | Case        | L   | 0.427      | -            | -                | -                | -         |    -8.67 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     3063 | 2024-02-15 | Fluxo       | L   | 0.426      | -            | -                | -                | -         |    -6.80 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     3066 | 2024-02-15 | Fluxo       | L   | 0.426      | -            | -                | -                | -         |    -7.06 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     3092 | 2024-02-14 | Hype        | W   | 0.421      | -            | -                | -                | -         |     0.42 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     3102 | 2024-02-14 | Galorys     | W   | 0.420      | -            | -                | -                | -         |     3.98 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     3147 | 2024-02-12 | Solid       | W   | 0.408      | -            | -                | -                | -         |     4.85 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     3450 | 2024-01-24 | paiN        | W   | 0.282      | 0.143        | 0.437 (0.018)    | -                | -         |     8.59 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     3468 | 2024-01-23 | adalYamigos | W   | 0.274      | -            | -                | -                | -         |     1.16 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     3494 | 2024-01-22 | Legacy      | W   | 0.268      | -            | -                | -                | -         |     4.87 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     3528 | 2024-01-21 | 9z          | L   | 0.260      | -            | -                | -                | -         |    -0.98 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     3567 | 2024-01-20 | paiN        | L   | 0.253      | -            | -                | -                | -         |    -0.24 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     3603 | 2024-01-19 | Galorys     | W   | 0.248      | -            | -                | -                | -         |     2.72 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     3610 | 2024-01-19 | TIMACETA    | L   | 0.248      | -            | -                | -                | -         |    -7.27 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     3669 | 2024-01-18 | MIBR        | L   | 0.241      | -            | -                | -                | -         |    -0.25 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     3715 | 2024-01-17 | RED Canids  | W   | 0.235      | -            | -                | -                | -         |     4.61 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     3733 | 2024-01-17 | MIBR        | L   | 0.234      | -            | -                | -                | -         |    -0.23 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     3844 | 2024-01-14 | paiN        | W   | 0.215      | 0.143        | 0.437 (0.013)    | -                | -         |     6.60 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     3847 | 2024-01-14 | BESTIA      | W   | 0.214      | -            | -                | -                | -         |     3.58 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     3853 | 2024-01-14 | Corinthians | W   | 0.214      | -            | -                | -                | -         |     1.11 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     3869 | 2024-01-13 | Galorys     | W   | 0.208      | -            | -                | -                | -         |     2.41 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,104.36)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-25 |      0.494 | $5,000.00      | $2,470.08       |
| 2024-02-21 |      0.467 | $3,500.00      | $1,634.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
