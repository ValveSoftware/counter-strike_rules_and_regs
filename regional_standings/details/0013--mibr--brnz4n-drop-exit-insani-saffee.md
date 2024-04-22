### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1497.8<br />
<br />
Final Rank Value (1497.8) = Starting Rank Value (1408.4) + Head To Head Adjustments (89.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.660[<sup>1</sup>](#table2)
- Bounty Collected: 0.556[<sup>2</sup>](#table1)
- Opponent Network: 0.323[<sup>2</sup>](#table1)
- LAN Wins: 0.550[<sup>2</sup>](#table1)

The average of these factors is 0.522<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1408.4
- 400 + ( ( 0.522 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1408.4


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
|           69 |       44 | 2024-04-20 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -14.71 | brnz4n, drop, exit, insani, saffee |
|           68 |       51 | 2024-04-20 | OG             | W   | 1.000      | 0.589        | 0.497 (0.292)    | 0.553 (0.325)    | 1 (1.000) |     7.52 | brnz4n, drop, exit, insani, saffee |
|           67 |       67 | 2024-04-19 | paiN           | W   | 1.000      | 0.143        | 0.698 (0.100)    | -                | -         |    17.99 | brnz4n, drop, exit, insani, saffee |
|           66 |       74 | 2024-04-19 | FURIA          | W   | 1.000      | 0.589        | 0.316 (0.186)    | 0.522 (0.307)    | 1 (1.000) |     9.46 | brnz4n, drop, exit, insani, saffee |
|           65 |       96 | 2024-04-19 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -13.51 | brnz4n, drop, exit, insani, saffee |
|           64 |      117 | 2024-04-18 | Imperial       | W   | 1.000      | -            | -                | -                | -         |    17.48 | brnz4n, drop, exit, insani, saffee |
|           63 |      119 | 2024-04-18 | paiN           | W   | 1.000      | 0.143        | 0.698 (0.100)    | -                | -         |    18.88 | brnz4n, drop, exit, insani, saffee |
|           62 |      124 | 2024-04-18 | OG             | W   | 1.000      | 0.589        | 0.497 (0.292)    | 0.553 (0.325)    | 1 (1.000) |     9.33 | brnz4n, drop, exit, insani, saffee |
|           61 |      169 | 2024-04-17 | RED Canids     | W   | 1.000      | -            | -                | -                | -         |     3.27 | brnz4n, drop, exit, insani, saffee |
|           60 |      175 | 2024-04-17 | Case           | W   | 1.000      | -            | -                | -                | -         |     1.14 | brnz4n, drop, exit, insani, saffee |
|           59 |      214 | 2024-04-16 | Bounty Hunters | W   | 1.000      | -            | -                | -                | -         |     0.09 | brnz4n, drop, exit, insani, saffee |
|           58 |      235 | 2024-04-15 | Imperial       | W   | 1.000      | 0.435        | 0.569 (0.247)    | 1.000 (0.435)    | -         |    20.21 | brnz4n, drop, exit, insani, saffee |
|           57 |      249 | 2024-04-14 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     1.45 | brnz4n, drop, exit, insani, saffee |
|           56 |      263 | 2024-04-13 | Case           | W   | 1.000      | 0.435        | -                | 0.767 (0.333)    | -         |     1.19 | brnz4n, drop, exit, insani, saffee |
|           55 |      293 | 2024-04-11 | paiN           | W   | 1.000      | 0.143        | 0.698 (0.100)    | -                | -         |    22.49 | brnz4n, drop, exit, insani, saffee |
|           54 |      335 | 2024-04-10 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     1.36 | brnz4n, drop, exit, insani, saffee |
|           53 |      336 | 2024-04-10 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     1.38 | brnz4n, drop, exit, insani, saffee |
|           52 |      353 | 2024-04-10 | Imperial       | W   | 1.000      | -            | -                | -                | -         |    23.71 | brnz4n, drop, exit, insani, saffee |
|           51 |      385 | 2024-04-09 | adalYamigos    | W   | 1.000      | -            | -                | -                | -         |     1.50 | brnz4n, drop, exit, insani, saffee |
|           50 |      389 | 2024-04-09 | adalYamigos    | W   | 1.000      | -            | -                | -                | -         |     1.53 | brnz4n, drop, exit, insani, saffee |
|           49 |      394 | 2024-04-09 | RED Canids     | W   | 1.000      | -            | -                | -                | -         |     4.37 | brnz4n, drop, exit, insani, saffee |
|           48 |      426 | 2024-04-08 | W7M            | W   | 1.000      | -            | -                | -                | -         |     1.47 | brnz4n, drop, exit, insani, saffee |
|           47 |      460 | 2024-04-07 | paiN           | W   | 1.000      | 0.143        | 0.698 (0.100)    | -                | -         |    25.08 | brnz4n, drop, exit, insani, saffee |
|           46 |      478 | 2024-04-06 | Bounty Hunters | W   | 1.000      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|           45 |      494 | 2024-04-05 | Fluxo          | W   | 1.000      | 0.450        | -                | 0.633 (0.285)    | -         |     5.67 | brnz4n, drop, exit, insani, saffee |
|           44 |      495 | 2024-04-05 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |   -26.38 | brnz4n, drop, exit, insani, saffee |
|           43 |      498 | 2024-04-05 | ODDIK          | W   | 1.000      | -            | -                | -                | -         |     2.09 | brnz4n, drop, exit, insani, saffee |
|           42 |      521 | 2024-04-04 | Solid          | W   | 1.000      | 0.450        | -                | 0.584 (0.263)    | -         |     1.99 | brnz4n, drop, exit, insani, saffee |
|           41 |      525 | 2024-04-04 | Solid          | W   | 1.000      | 0.450        | -                | 0.584 (0.263)    | -         |     2.03 | brnz4n, drop, exit, insani, saffee |
|           40 |      556 | 2024-04-03 | Fluxo          | W   | 1.000      | -            | -                | -                | -         |     5.01 | brnz4n, drop, exit, insani, saffee |
|           39 |      606 | 2024-04-02 | Fluxo          | W   | 1.000      | -            | -                | -                | -         |     5.06 | brnz4n, drop, exit, insani, saffee |
|           38 |      609 | 2024-04-02 | Sharks         | W   | 1.000      | -            | -                | -                | -         |     3.36 | brnz4n, drop, exit, insani, saffee |
|           37 |      696 | 2024-03-27 | Case           | W   | 1.000      | 0.450        | -                | 0.767 (0.345)    | -         |     1.65 | brnz4n, drop, exit, insani, saffee |
|           36 |      702 | 2024-03-27 | Case           | W   | 1.000      | 0.450        | -                | 0.767 (0.345)    | -         |     1.68 | brnz4n, drop, exit, insani, saffee |
|           35 |      742 | 2024-03-26 | ODDIK          | W   | 1.000      | -            | -                | -                | -         |     2.64 | brnz4n, drop, exit, insani, saffee |
|           34 |      744 | 2024-03-26 | ODDIK          | W   | 1.000      | -            | -                | -                | -         |     2.71 | brnz4n, drop, exit, insani, saffee |
|           33 |      936 | 2024-03-14 | Sharks         | W   | 0.941      | -            | -                | -                | -         |     3.42 | brnz4n, drop, exit, insani, saffee |
|           32 |      938 | 2024-03-14 | Sharks         | W   | 0.941      | -            | -                | -                | -         |     3.54 | brnz4n, drop, exit, insani, saffee |
|           31 |     1009 | 2024-03-12 | Fluxo          | L   | 0.927      | -            | -                | -                | -         |   -23.82 | brnz4n, drop, exit, insani, saffee |
|           30 |     1048 | 2024-03-10 | Galorys        | W   | 0.914      | -            | -                | -                | -         |     1.32 | brnz4n, drop, exit, insani, saffee |
|           29 |     1096 | 2024-03-08 | LA RUGONETA    | W   | 0.901      | -            | -                | -                | -         |     0.41 | brnz4n, drop, exit, insani, saffee |
|           28 |     1227 | 2024-03-03 | Legacy         | L   | 0.868      | -            | -                | -                | -         |   -22.67 | brnz4n, drop, exit, insani, saffee |
|           27 |     1259 | 2024-03-02 | NRG            | W   | 0.860      | -            | -                | -                | 1 (0.860) |     1.27 | brnz4n, drop, exit, insani, saffee |
|           26 |     1282 | 2024-03-01 | BOSS           | L   | 0.854      | -            | -                | -                | -         |   -25.50 | brnz4n, drop, exit, insani, saffee |
|           25 |     1808 | 2024-02-03 | Imperial       | L   | 0.675      | -            | -                | -                | -         |    -3.36 | brnz4n, drop, exit, insani, saffee |
|           24 |     1872 | 2024-02-01 | paiN           | W   | 0.661      | -            | -                | -                | -         |    17.33 | brnz4n, drop, exit, insani, saffee |
|           23 |     1875 | 2024-02-01 | W7M            | W   | 0.661      | -            | -                | -                | -         |     1.04 | brnz4n, drop, exit, insani, saffee |
|           22 |     2048 | 2024-01-22 | adalYamigos    | L   | 0.595      | -            | -                | -                | -         |   -18.29 | brnz4n, drop, exit, insani, saffee |
|           21 |     2110 | 2024-01-20 | BESTIA         | W   | 0.581      | -            | -                | -                | -         |     0.85 | brnz4n, drop, exit, insani, saffee |
|           20 |     2158 | 2024-01-19 | TIMACETA       | W   | 0.575      | -            | -                | -                | -         |     0.16 | brnz4n, drop, exit, insani, saffee |
|           19 |     2172 | 2024-01-19 | ODDIK          | W   | 0.574      | -            | -                | -                | -         |     1.19 | brnz4n, drop, exit, insani, saffee |
|           18 |     2215 | 2024-01-18 | 9z             | L   | 0.569      | -            | -                | -                | -         |   -16.69 | brnz4n, drop, exit, insani, saffee |
|           17 |     2222 | 2024-01-18 | Sharks         | W   | 0.567      | -            | -                | -                | -         |     1.24 | brnz4n, drop, exit, insani, saffee |
|           16 |     2264 | 2024-01-17 | 9z             | L   | 0.562      | -            | -                | -                | -         |   -16.68 | brnz4n, drop, exit, insani, saffee |
|           15 |     2286 | 2024-01-17 | Sharks         | W   | 0.561      | -            | -                | -                | -         |     1.08 | brnz4n, drop, exit, insani, saffee |
|           14 |     2819 | 2023-12-09 | Spirit         | L   | 0.299      | -            | -                | -                | -         |    -0.63 | brnz4n, drop, exit, insani, saffee |
|           13 |     2864 | 2023-12-07 | Cloud9         | W   | 0.286      | 0.657        | 0.475 (0.089)    | -                | 1 (0.286) |     7.46 | brnz4n, drop, exit, insani, saffee |
|           12 |     2922 | 2023-12-05 | BetBoom        | W   | 0.272      | 0.657        | 0.457 (0.082)    | -                | 1 (0.272) |     2.34 | brnz4n, drop, exit, insani, saffee |
|           11 |     3052 | 2023-11-26 | Eternal Fire   | L   | 0.212      | -            | -                | -                | -         |    -1.65 | brnz4n, drop, exit, insani, saffee |
|           10 |     3090 | 2023-11-24 | Virtus.pro     | W   | 0.200      | -            | -                | -                | 1 (0.200) |     4.94 | brnz4n, drop, exit, insani, saffee |
|            9 |     3097 | 2023-11-24 | GamerLegion    | W   | 0.199      | -            | -                | -                | 1 (0.199) |     2.76 | brnz4n, drop, exit, insani, saffee |
|            8 |     3150 | 2023-11-20 | Aurora         | W   | 0.173      | -            | -                | -                | -         |     2.53 | brnz4n, drop, exit, insani, saffee |
|            7 |     3156 | 2023-11-20 | BIG            | W   | 0.172      | -            | -                | -                | -         |     1.40 | brnz4n, drop, exit, insani, saffee |
|            6 |     3167 | 2023-11-19 | Eternal Fire   | L   | 0.166      | -            | -                | -                | -         |    -1.19 | brnz4n, drop, exit, insani, saffee |
|            5 |     3189 | 2023-11-18 | FURIA          | L   | 0.160      | -            | -                | -                | -         |    -2.28 | brnz4n, drop, exit, insani, saffee |
|            4 |     3194 | 2023-11-18 | BetBoom        | W   | 0.160      | -            | -                | -                | 1 (0.160) |     1.46 | brnz4n, drop, exit, insani, saffee |
|            3 |     3231 | 2023-11-17 | Spirit         | L   | 0.153      | -            | -                | -                | -         |    -0.28 | brnz4n, drop, exit, insani, saffee |
|            2 |     3239 | 2023-11-17 | 9 Pandas       | L   | 0.151      | -            | -                | -                | -         |    -4.08 | brnz4n, drop, exit, insani, saffee |
|            1 |     3274 | 2023-11-16 | KOI            | W   | 0.145      | -            | -                | -                | 1 (0.145) |     0.52 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,036.34)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-04-15 |      1.000 | $25,000.00     | $25,000.00      |
| 2023-12-10 |      0.306 | $30,000.00     | $9,172.18       |
| 2023-11-26 |      0.213 | $10,000.00     | $2,132.92       |
| 2023-11-20 |      0.173 | $10,000.00     | $1,731.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
