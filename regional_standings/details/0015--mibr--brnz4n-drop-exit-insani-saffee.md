### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1511.4<br />
<br />
Final Rank Value (1511.4) = Starting Rank Value (1597.9) + Head To Head Adjustments (-86.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.647[<sup>1</sup>](#table2)
- Bounty Collected: 0.571[<sup>2</sup>](#table1)
- Opponent Network: 0.363[<sup>2</sup>](#table1)
- LAN Wins: 0.822[<sup>2</sup>](#table1)

The average of these factors is 0.601<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1597.9
- 400 + ( ( 0.601 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1597.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |      147 | 2024-06-07 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -31.22 | brnz4n, drop, exit, insani, saffee |
|           71 |      206 | 2024-06-06 | 9z             | L   | 1.000      | -            | -                | -                | -         |   -24.17 | brnz4n, drop, exit, insani, saffee |
|           70 |      278 | 2024-06-05 | BESTIA         | W   | 1.000      | 0.450        | -                | 0.631 (0.284)    | 0 (0.000) |     1.76 | brnz4n, drop, exit, insani, saffee |
|           69 |      330 | 2024-06-04 | Galorys        | W   | 1.000      | 0.450        | -                | 0.596 (0.268)    | -         |     0.45 | brnz4n, drop, exit, insani, saffee |
|           68 |      658 | 2024-05-22 | paiN           | W   | 1.000      | 0.450        | 0.437 (0.197)    | 0.877 (0.395)    | -         |    11.08 | brnz4n, drop, exit, insani, saffee |
|           67 |      661 | 2024-05-22 | paiN           | W   | 1.000      | 0.450        | 0.437 (0.197)    | 0.877 (0.395)    | -         |    12.03 | brnz4n, drop, exit, insani, saffee |
|           66 |      731 | 2024-05-20 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -19.54 | brnz4n, drop, exit, insani, saffee |
|           65 |      744 | 2024-05-20 | BIG            | W   | 1.000      | 0.769        | 0.228 (0.175)    | 0.459 (0.353)    | -         |     9.81 | brnz4n, drop, exit, insani, saffee |
|           64 |      753 | 2024-05-20 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -20.68 | brnz4n, drop, exit, insani, saffee |
|           63 |      830 | 2024-05-17 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -11.17 | brnz4n, drop, exit, insani, saffee |
|           62 |      864 | 2024-05-16 | Aurora         | W   | 1.000      | 0.769        | 0.513 (0.395)    | 0.918 (0.706)    | 1 (1.000) |     9.37 | brnz4n, drop, exit, insani, saffee |
|           61 |      920 | 2024-05-15 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -11.44 | brnz4n, drop, exit, insani, saffee |
|           60 |     1329 | 2024-04-28 | Aurora         | W   | 0.911      | 0.500        | 0.513 (0.234)    | 0.918 (0.418)    | 1 (0.911) |    10.63 | brnz4n, drop, exit, insani, saffee |
|           59 |     1331 | 2024-04-27 | Apeks          | W   | 0.910      | -            | -                | -                | 1 (0.910) |     2.64 | brnz4n, drop, exit, insani, saffee |
|           58 |     1357 | 2024-04-27 | Rooster        | W   | 0.903      | -            | -                | -                | 1 (0.903) |     0.54 | brnz4n, drop, exit, insani, saffee |
|           57 |     1379 | 2024-04-26 | Rebels         | L   | 0.897      | -            | -                | -                | -         |   -26.63 | brnz4n, drop, exit, insani, saffee |
|           56 |     1382 | 2024-04-25 | KZG            | W   | 0.896      | -            | -                | -                | 1 (0.896) |     0.14 | brnz4n, drop, exit, insani, saffee |
|           55 |     1491 | 2024-04-20 | paiN           | L   | 0.860      | -            | -                | -                | -         |   -15.75 | brnz4n, drop, exit, insani, saffee |
|           54 |     1498 | 2024-04-20 | OG             | W   | 0.859      | 0.589        | 0.249 (0.126)    | -                | 1 (0.859) |     3.96 | brnz4n, drop, exit, insani, saffee |
|           53 |     1514 | 2024-04-19 | paiN           | W   | 0.856      | 0.143        | 0.437 (0.053)    | -                | -         |    12.02 | brnz4n, drop, exit, insani, saffee |
|           52 |     1521 | 2024-04-19 | FURIA          | W   | 0.855      | 0.589        | 0.249 (0.125)    | 0.590 (0.297)    | 1 (0.855) |    12.22 | brnz4n, drop, exit, insani, saffee |
|           51 |     1543 | 2024-04-19 | paiN           | L   | 0.853      | -            | -                | -                | -         |   -15.08 | brnz4n, drop, exit, insani, saffee |
|           50 |     1564 | 2024-04-18 | Imperial       | W   | 0.849      | -            | -                | -                | -         |     9.79 | brnz4n, drop, exit, insani, saffee |
|           49 |     1566 | 2024-04-18 | paiN           | W   | 0.848      | -            | -                | -                | -         |    12.05 | brnz4n, drop, exit, insani, saffee |
|           48 |     1571 | 2024-04-18 | OG             | W   | 0.847      | 0.589        | 0.249 (0.124)    | -                | 1 (0.847) |     4.13 | brnz4n, drop, exit, insani, saffee |
|           47 |     1616 | 2024-04-17 | RED Canids     | W   | 0.841      | -            | -                | -                | -         |     1.72 | brnz4n, drop, exit, insani, saffee |
|           46 |     1622 | 2024-04-17 | Case           | W   | 0.841      | -            | -                | -                | -         |     0.52 | brnz4n, drop, exit, insani, saffee |
|           45 |     1661 | 2024-04-16 | Bounty Hunters | W   | 0.835      | -            | -                | -                | -         |     0.13 | brnz4n, drop, exit, insani, saffee |
|           44 |     1682 | 2024-04-15 | Imperial       | W   | 0.828      | 0.435        | 0.415 (0.149)    | 0.799 (0.288)    | -         |    10.45 | brnz4n, drop, exit, insani, saffee |
|           43 |     1696 | 2024-04-14 | Galorys        | W   | 0.821      | -            | -                | -                | -         |     0.59 | brnz4n, drop, exit, insani, saffee |
|           42 |     1710 | 2024-04-13 | Case           | W   | 0.813      | 0.435        | -                | 0.656 (0.232)    | -         |     0.49 | brnz4n, drop, exit, insani, saffee |
|           41 |     1740 | 2024-04-11 | paiN           | W   | 0.802      | -            | -                | -                | -         |    13.32 | brnz4n, drop, exit, insani, saffee |
|           40 |     1782 | 2024-04-10 | Galorys        | W   | 0.795      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           39 |     1783 | 2024-04-10 | Galorys        | W   | 0.794      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           38 |     1800 | 2024-04-10 | Imperial       | W   | 0.793      | -            | -                | -                | -         |    11.75 | brnz4n, drop, exit, insani, saffee |
|           37 |     1832 | 2024-04-09 | adalYamigos    | W   | 0.788      | -            | -                | -                | -         |     0.34 | brnz4n, drop, exit, insani, saffee |
|           36 |     1836 | 2024-04-09 | adalYamigos    | W   | 0.788      | -            | -                | -                | -         |     0.34 | brnz4n, drop, exit, insani, saffee |
|           35 |     1841 | 2024-04-09 | RED Canids     | W   | 0.787      | -            | -                | -                | -         |     1.85 | brnz4n, drop, exit, insani, saffee |
|           34 |     1873 | 2024-04-08 | W7M            | W   | 0.781      | -            | -                | -                | -         |     0.46 | brnz4n, drop, exit, insani, saffee |
|           33 |     1907 | 2024-04-07 | paiN           | W   | 0.776      | -            | -                | -                | -         |    14.41 | brnz4n, drop, exit, insani, saffee |
|           32 |     1925 | 2024-04-06 | Bounty Hunters | W   | 0.768      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|           31 |     1941 | 2024-04-05 | Fluxo          | W   | 0.761      | -            | -                | -                | -         |     1.68 | brnz4n, drop, exit, insani, saffee |
|           30 |     1942 | 2024-04-05 | Fluxo          | L   | 0.761      | -            | -                | -                | -         |   -22.52 | brnz4n, drop, exit, insani, saffee |
|           29 |     1945 | 2024-04-05 | ODDIK          | W   | 0.760      | -            | -                | -                | -         |     0.82 | brnz4n, drop, exit, insani, saffee |
|           28 |     1968 | 2024-04-04 | Solid          | W   | 0.755      | -            | -                | -                | -         |     0.61 | brnz4n, drop, exit, insani, saffee |
|           27 |     1972 | 2024-04-04 | Solid          | W   | 0.754      | -            | -                | -                | -         |     0.62 | brnz4n, drop, exit, insani, saffee |
|           26 |     2003 | 2024-04-03 | Fluxo          | W   | 0.749      | -            | -                | -                | -         |     1.37 | brnz4n, drop, exit, insani, saffee |
|           25 |     2053 | 2024-04-02 | Fluxo          | W   | 0.742      | -            | -                | -                | -         |     1.31 | brnz4n, drop, exit, insani, saffee |
|           24 |     2056 | 2024-04-02 | Sharks         | W   | 0.741      | -            | -                | -                | -         |     0.30 | brnz4n, drop, exit, insani, saffee |
|           23 |     2143 | 2024-03-27 | Case           | W   | 0.701      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           22 |     2149 | 2024-03-27 | Case           | W   | 0.701      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           21 |     2189 | 2024-03-26 | ODDIK          | W   | 0.695      | -            | -                | -                | -         |     0.85 | brnz4n, drop, exit, insani, saffee |
|           20 |     2191 | 2024-03-26 | ODDIK          | W   | 0.694      | -            | -                | -                | -         |     0.86 | brnz4n, drop, exit, insani, saffee |
|           19 |     2383 | 2024-03-14 | Sharks         | W   | 0.615      | -            | -                | -                | -         |     0.90 | brnz4n, drop, exit, insani, saffee |
|           18 |     2385 | 2024-03-14 | Sharks         | W   | 0.615      | -            | -                | -                | -         |     0.91 | brnz4n, drop, exit, insani, saffee |
|           17 |     2456 | 2024-03-12 | Fluxo          | L   | 0.601      | -            | -                | -                | -         |   -17.90 | brnz4n, drop, exit, insani, saffee |
|           16 |     2495 | 2024-03-10 | Galorys        | W   | 0.588      | -            | -                | -                | -         |     0.34 | brnz4n, drop, exit, insani, saffee |
|           15 |     2543 | 2024-03-08 | LA RUGONETA    | W   | 0.574      | -            | -                | -                | -         |     0.08 | brnz4n, drop, exit, insani, saffee |
|           14 |     2674 | 2024-03-03 | Legacy         | L   | 0.541      | -            | -                | -                | -         |   -16.13 | brnz4n, drop, exit, insani, saffee |
|           13 |     2706 | 2024-03-02 | NRG            | W   | 0.533      | -            | -                | -                | 1 (0.533) |     0.40 | brnz4n, drop, exit, insani, saffee |
|           12 |     2729 | 2024-03-01 | BOSS           | L   | 0.527      | -            | -                | -                | -         |   -16.31 | brnz4n, drop, exit, insani, saffee |
|           11 |     3255 | 2024-02-03 | Imperial       | L   | 0.348      | -            | -                | -                | -         |    -6.36 | brnz4n, drop, exit, insani, saffee |
|           10 |     3319 | 2024-02-01 | paiN           | W   | 0.335      | -            | -                | -                | -         |     5.46 | brnz4n, drop, exit, insani, saffee |
|            9 |     3322 | 2024-02-01 | W7M            | W   | 0.334      | -            | -                | -                | -         |     0.14 | brnz4n, drop, exit, insani, saffee |
|            8 |     3495 | 2024-01-22 | adalYamigos    | L   | 0.268      | -            | -                | -                | -         |    -8.40 | brnz4n, drop, exit, insani, saffee |
|            7 |     3557 | 2024-01-20 | BESTIA         | W   | 0.254      | -            | -                | -                | -         |     0.28 | brnz4n, drop, exit, insani, saffee |
|            6 |     3605 | 2024-01-19 | TIMACETA       | W   | 0.248      | -            | -                | -                | -         |     0.02 | brnz4n, drop, exit, insani, saffee |
|            5 |     3619 | 2024-01-19 | ODDIK          | W   | 0.247      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |
|            4 |     3662 | 2024-01-18 | 9z             | L   | 0.242      | -            | -                | -                | -         |    -6.07 | brnz4n, drop, exit, insani, saffee |
|            3 |     3669 | 2024-01-18 | Sharks         | W   | 0.241      | -            | -                | -                | -         |     0.25 | brnz4n, drop, exit, insani, saffee |
|            2 |     3711 | 2024-01-17 | 9z             | L   | 0.235      | -            | -                | -                | -         |    -5.98 | brnz4n, drop, exit, insani, saffee |
|            1 |     3733 | 2024-01-17 | Sharks         | W   | 0.234      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($86,461.34)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-04-28 |      0.911 | $50,000.00     | $45,548.67      |
| 2024-04-20 |      0.861 | $20,000.00     | $17,222.60      |
| 2024-04-15 |      0.828 | $25,000.00     | $20,690.08      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
