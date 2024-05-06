### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, HEN1, noway, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1514.3<br />
<br />
Final Rank Value (1514.3) = Starting Rank Value (1714.5) + Head To Head Adjustments (-200.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.845[<sup>1</sup>](#table2)
- Bounty Collected: 0.569[<sup>2</sup>](#table1)
- Opponent Network: 0.361[<sup>2</sup>](#table1)
- LAN Wins: 0.986[<sup>2</sup>](#table1)

The average of these factors is 0.690<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1714.5
- 400 + ( ( 0.690 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1714.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       19 | 2024-05-05 | inSanitY          | W   | 1.000      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |
|           78 |      217 | 2024-04-26 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -22.07 | decenty, felps, HEN1, noway, VINI |
|           77 |      260 | 2024-04-24 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -9.19 | decenty, felps, HEN1, noway, VINI |
|           76 |      279 | 2024-04-23 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -3.20 | decenty, felps, HEN1, noway, VINI |
|           75 |      331 | 2024-04-20 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -13.05 | decenty, felps, HEN1, noway, VINI |
|           74 |      362 | 2024-04-20 | paiN              | W   | 1.000      | 0.589        | 0.786 (0.462)    | 0.869 (0.512)    | 1 (1.000) |    17.89 | decenty, felps, HEN1, noway, VINI |
|           73 |      376 | 2024-04-19 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -12.77 | decenty, felps, HEN1, noway, VINI |
|           72 |      413 | 2024-04-18 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -12.34 | decenty, felps, HEN1, noway, VINI |
|           71 |      416 | 2024-04-18 | 9z                | W   | 1.000      | 0.589        | -                | 0.520 (0.306)    | 1 (1.000) |     1.71 | decenty, felps, HEN1, noway, VINI |
|           70 |      417 | 2024-04-18 | Fluxo             | W   | 1.000      | -            | -                | -                | -         |     2.06 | decenty, felps, HEN1, noway, VINI |
|           69 |      428 | 2024-04-18 | Metizport         | W   | 1.000      | 0.589        | 0.183 (0.108)    | 1.000 (0.589)    | 1 (1.000) |     1.70 | decenty, felps, HEN1, noway, VINI |
|           68 |      531 | 2024-04-15 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -14.20 | decenty, felps, HEN1, noway, VINI |
|           67 |      546 | 2024-04-14 | paiN              | W   | 1.000      | 0.435        | 0.786 (0.341)    | 0.869 (0.378)    | -         |    17.65 | decenty, felps, HEN1, noway, VINI |
|           66 |      556 | 2024-04-13 | RED Canids        | W   | 1.000      | 0.435        | -                | 0.808 (0.351)    | -         |     1.68 | decenty, felps, HEN1, noway, VINI |
|           65 |      592 | 2024-04-11 | adalYamigos       | W   | 1.000      | -            | -                | -                | -         |     0.45 | decenty, felps, HEN1, noway, VINI |
|           64 |      602 | 2024-04-11 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -12.85 | decenty, felps, HEN1, noway, VINI |
|           63 |      629 | 2024-04-10 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -29.70 | decenty, felps, HEN1, noway, VINI |
|           62 |      633 | 2024-04-10 | Fluxo             | W   | 1.000      | 0.450        | 0.148 (0.066)    | 0.569 (0.256)    | -         |     1.56 | decenty, felps, HEN1, noway, VINI |
|           61 |      649 | 2024-04-10 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -17.38 | decenty, felps, HEN1, noway, VINI |
|           60 |      695 | 2024-04-09 | Solid             | W   | 1.000      | 0.450        | 0.132 (0.060)    | -                | -         |     0.44 | decenty, felps, HEN1, noway, VINI |
|           59 |      700 | 2024-04-09 | Solid             | W   | 1.000      | 0.450        | 0.132 (0.060)    | -                | -         |     0.45 | decenty, felps, HEN1, noway, VINI |
|           58 |      705 | 2024-04-09 | paiN              | W   | 1.000      | 0.143        | 0.786 (0.112)    | -                | -         |    16.81 | decenty, felps, HEN1, noway, VINI |
|           57 |      759 | 2024-04-07 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     1.15 | decenty, felps, HEN1, noway, VINI |
|           56 |      762 | 2024-04-07 | FURIA Academy     | W   | 1.000      | -            | -                | -                | -         |     0.10 | decenty, felps, HEN1, noway, VINI |
|           55 |      820 | 2024-04-04 | ODDIK             | W   | 0.988      | 0.450        | -                | 0.547 (0.243)    | -         |     0.63 | decenty, felps, HEN1, noway, VINI |
|           54 |      825 | 2024-04-04 | ODDIK             | W   | 0.987      | -            | -                | -                | -         |     0.64 | decenty, felps, HEN1, noway, VINI |
|           53 |      828 | 2024-04-04 | BESTIA            | W   | 0.987      | -            | -                | -                | -         |     0.43 | decenty, felps, HEN1, noway, VINI |
|           52 |      858 | 2024-04-03 | Case              | W   | 0.981      | 0.450        | -                | 0.578 (0.255)    | -         |     0.37 | decenty, felps, HEN1, noway, VINI |
|           51 |      861 | 2024-04-03 | Case              | W   | 0.981      | 0.450        | -                | 0.578 (0.255)    | -         |     0.37 | decenty, felps, HEN1, noway, VINI |
|           50 |     1066 | 2024-03-23 | FaZe              | L   | 0.905      | -            | -                | -                | -         |    -3.92 | decenty, felps, HEN1, noway, VINI |
|           49 |     1079 | 2024-03-22 | Vitality          | L   | 0.898      | -            | -                | -                | -         |    -6.17 | decenty, felps, HEN1, noway, VINI |
|           48 |     1089 | 2024-03-21 | Spirit            | L   | 0.894      | -            | -                | -                | -         |    -5.91 | decenty, felps, HEN1, noway, VINI |
|           47 |     1107 | 2024-03-21 | Virtus.pro        | W   | 0.892      | 1.000        | 0.438 (0.390)    | 0.520 (0.464)    | 1 (0.892) |    19.32 | decenty, felps, HEN1, noway, VINI |
|           46 |     1126 | 2024-03-20 | GamerLegion       | W   | 0.886      | -            | -                | -                | 1 (0.886) |     8.35 | decenty, felps, HEN1, noway, VINI |
|           45 |     1139 | 2024-03-19 | Gaimin Gladiators | L   | 0.880      | -            | -                | -                | -         |   -22.73 | decenty, felps, HEN1, noway, VINI |
|           44 |     1155 | 2024-03-18 | Apeks             | W   | 0.871      | -            | -                | -                | 1 (0.871) |     5.18 | decenty, felps, HEN1, noway, VINI |
|           43 |     1173 | 2024-03-17 | HEROIC            | L   | 0.867      | -            | -                | -                | -         |   -13.13 | decenty, felps, HEN1, noway, VINI |
|           42 |     1182 | 2024-03-17 | ENCE              | W   | 0.865      | -            | -                | -                | 1 (0.865) |     8.59 | decenty, felps, HEN1, noway, VINI |
|           41 |     1412 | 2024-03-07 | Monte             | L   | 0.801      | -            | -                | -                | -         |   -20.62 | decenty, felps, HEN1, noway, VINI |
|           40 |     1530 | 2024-03-03 | paiN              | W   | 0.773      | 0.143        | 0.786 (0.087)    | -                | 1 (0.773) |    14.16 | decenty, felps, HEN1, noway, VINI |
|           39 |     1561 | 2024-03-02 | M80               | W   | 0.766      | -            | -                | -                | 1 (0.766) |     2.79 | decenty, felps, HEN1, noway, VINI |
|           38 |     1574 | 2024-03-01 | NRG               | W   | 0.761      | -            | -                | -                | 1 (0.761) |     0.29 | decenty, felps, HEN1, noway, VINI |
|           37 |     1665 | 2024-02-25 | Fluxo             | L   | 0.727      | -            | -                | -                | -         |   -22.04 | decenty, felps, HEN1, noway, VINI |
|           36 |     1697 | 2024-02-24 | BESTIA            | W   | 0.720      | -            | -                | -                | -         |     0.30 | decenty, felps, HEN1, noway, VINI |
|           35 |     1724 | 2024-02-22 | BESTIA            | L   | 0.708      | -            | -                | -                | -         |   -22.05 | decenty, felps, HEN1, noway, VINI |
|           34 |     1734 | 2024-02-22 | FURIA             | L   | 0.707      | -            | -                | -                | -         |   -16.18 | decenty, felps, HEN1, noway, VINI |
|           33 |     1749 | 2024-02-21 | 2GAME             | W   | 0.701      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           32 |     1753 | 2024-02-21 | 2GAME             | W   | 0.701      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           31 |     1762 | 2024-02-21 | LA RUGONETA       | W   | 0.699      | -            | -                | -                | -         |     0.05 | decenty, felps, HEN1, noway, VINI |
|           30 |     1854 | 2024-02-17 | adalYamigos       | W   | 0.674      | -            | -                | -                | -         |     0.12 | decenty, felps, HEN1, noway, VINI |
|           29 |     1883 | 2024-02-16 | Galorys           | W   | 0.666      | -            | -                | -                | -         |     0.17 | decenty, felps, HEN1, noway, VINI |
|           28 |     1886 | 2024-02-16 | Galorys           | W   | 0.666      | -            | -                | -                | -         |     0.17 | decenty, felps, HEN1, noway, VINI |
|           27 |     1903 | 2024-02-15 | 9z                | W   | 0.661      | -            | -                | -                | -         |     0.52 | decenty, felps, HEN1, noway, VINI |
|           26 |     1905 | 2024-02-15 | Fluxo             | W   | 0.661      | -            | -                | -                | -         |     0.61 | decenty, felps, HEN1, noway, VINI |
|           25 |     1910 | 2024-02-15 | Solid             | W   | 0.661      | -            | -                | -                | -         |     0.22 | decenty, felps, HEN1, noway, VINI |
|           24 |     1940 | 2024-02-14 | Yawara            | W   | 0.655      | -            | -                | -                | -         |     0.03 | decenty, felps, HEN1, noway, VINI |
|           23 |     1977 | 2024-02-13 | RED Canids        | W   | 0.648      | -            | -                | -                | -         |     0.43 | decenty, felps, HEN1, noway, VINI |
|           22 |     1981 | 2024-02-13 | RED Canids        | L   | 0.648      | -            | -                | -                | -         |   -20.04 | decenty, felps, HEN1, noway, VINI |
|           21 |     1984 | 2024-02-13 | Solid             | W   | 0.648      | -            | -                | -                | -         |     0.21 | decenty, felps, HEN1, noway, VINI |
|           20 |     2081 | 2024-02-04 | 9z                | W   | 0.588      | -            | -                | -                | -         |     0.39 | decenty, felps, HEN1, noway, VINI |
|           19 |     2104 | 2024-02-03 | MIBR              | W   | 0.581      | -            | -                | -                | -         |     7.95 | decenty, felps, HEN1, noway, VINI |
|           18 |     2130 | 2024-02-02 | BESTIA            | W   | 0.575      | -            | -                | -                | -         |     0.17 | decenty, felps, HEN1, noway, VINI |
|           17 |     2134 | 2024-02-02 | 9z                | L   | 0.575      | -            | -                | -                | -         |   -17.77 | decenty, felps, HEN1, noway, VINI |
|           16 |     2136 | 2024-02-02 | BESTIA            | W   | 0.574      | -            | -                | -                | -         |     0.14 | decenty, felps, HEN1, noway, VINI |
|           15 |     2300 | 2024-01-24 | 9z                | W   | 0.515      | -            | -                | -                | -         |     0.27 | decenty, felps, HEN1, noway, VINI |
|           14 |     2320 | 2024-01-23 | BESTIA            | W   | 0.508      | -            | -                | -                | -         |     0.13 | decenty, felps, HEN1, noway, VINI |
|           13 |     2340 | 2024-01-22 | Hype              | W   | 0.502      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|           12 |     2374 | 2024-01-21 | paiN              | W   | 0.494      | 0.143        | 0.786 (0.055)    | -                | -         |     8.71 | decenty, felps, HEN1, noway, VINI |
|           11 |     2413 | 2024-01-20 | Fluxo             | W   | 0.487      | -            | -                | -                | -         |     0.39 | decenty, felps, HEN1, noway, VINI |
|           10 |     2456 | 2024-01-19 | BESTIA            | L   | 0.481      | -            | -                | -                | -         |   -15.06 | decenty, felps, HEN1, noway, VINI |
|            9 |     2465 | 2024-01-19 | Galorys           | W   | 0.480      | -            | -                | -                | -         |     0.13 | decenty, felps, HEN1, noway, VINI |
|            8 |     2623 | 2024-01-16 | Legacy            | L   | 0.461      | -            | -                | -                | -         |   -14.22 | decenty, felps, HEN1, noway, VINI |
|            7 |     2668 | 2024-01-15 | Corinthians       | W   | 0.455      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|            6 |     3311 | 2023-11-29 | blockkstar        | W   | 0.141      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|            5 |     3314 | 2023-11-29 | Flamengo          | W   | 0.141      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|            4 |     3341 | 2023-11-26 | Fluxo             | W   | 0.121      | -            | -                | -                | -         |     0.09 | decenty, felps, HEN1, noway, VINI |
|            3 |     3358 | 2023-11-25 | Case              | W   | 0.115      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|            2 |     3385 | 2023-11-24 | Sharks            | W   | 0.107      | -            | -                | -                | -         |     0.03 | decenty, felps, HEN1, noway, VINI |
|            1 |     3399 | 2023-11-23 | Fluxo             | W   | 0.102      | -            | -                | -                | -         |     0.07 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,332.83)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.66) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-04-20 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-04-15 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2024-02-25 |      0.727 | $15,000.00     | $10,909.21      |
| 2023-11-26 |      0.121 | $30,000.00     | $3,616.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
