### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1621.6<br />
<br />
Final Rank Value (1621.6) = Starting Rank Value (1667.6) + Head To Head Adjustments (-45.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.837[<sup>1</sup>](#table2)
- Bounty Collected: 0.606[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.910[<sup>2</sup>](#table1)

The average of these factors is 0.665<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1667.6
- 400 + ( ( 0.665 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1667.6


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
|           74 |      178 | 2024-04-28 | Aurora         | W   | 1.000      | 0.500        | 0.973 (0.486)    | 0.967 (0.483)    | 1 (1.000) |     7.96 | brnz4n, drop, exit, insani, saffee |
|           73 |      180 | 2024-04-27 | Apeks          | W   | 1.000      | 0.500        | 0.237 (0.119)    | 0.667 (0.333)    | 1 (1.000) |     3.63 | brnz4n, drop, exit, insani, saffee |
|           72 |      206 | 2024-04-27 | Rooster        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.52 | brnz4n, drop, exit, insani, saffee |
|           71 |      228 | 2024-04-26 | Rebels         | L   | 1.000      | -            | -                | -                | -         |   -30.17 | brnz4n, drop, exit, insani, saffee |
|           70 |      231 | 2024-04-25 | KZG            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.10 | brnz4n, drop, exit, insani, saffee |
|           69 |      340 | 2024-04-20 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -17.82 | brnz4n, drop, exit, insani, saffee |
|           68 |      347 | 2024-04-20 | OG             | W   | 1.000      | 0.589        | 0.580 (0.341)    | 0.490 (0.288)    | 1 (1.000) |     5.29 | brnz4n, drop, exit, insani, saffee |
|           67 |      363 | 2024-04-19 | paiN           | W   | 1.000      | 0.143        | 0.786 (0.112)    | -                | -         |    14.55 | brnz4n, drop, exit, insani, saffee |
|           66 |      370 | 2024-04-19 | FURIA          | W   | 1.000      | 0.589        | 0.371 (0.218)    | 0.484 (0.285)    | 1 (1.000) |     7.38 | brnz4n, drop, exit, insani, saffee |
|           65 |      392 | 2024-04-19 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -17.30 | brnz4n, drop, exit, insani, saffee |
|           64 |      413 | 2024-04-18 | Imperial       | W   | 1.000      | -            | -                | -                | -         |    12.34 | brnz4n, drop, exit, insani, saffee |
|           63 |      415 | 2024-04-18 | paiN           | W   | 1.000      | 0.143        | 0.786 (0.112)    | -                | -         |    14.54 | brnz4n, drop, exit, insani, saffee |
|           62 |      420 | 2024-04-18 | OG             | W   | 1.000      | 0.589        | 0.580 (0.341)    | 0.490 (0.288)    | 1 (1.000) |     5.96 | brnz4n, drop, exit, insani, saffee |
|           61 |      465 | 2024-04-17 | RED Canids     | W   | 1.000      | -            | -                | -                | -         |     1.26 | brnz4n, drop, exit, insani, saffee |
|           60 |      471 | 2024-04-17 | Case           | W   | 1.000      | -            | -                | -                | -         |     0.42 | brnz4n, drop, exit, insani, saffee |
|           59 |      510 | 2024-04-16 | Bounty Hunters | W   | 1.000      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |
|           58 |      531 | 2024-04-15 | Imperial       | W   | 1.000      | 0.435        | 0.656 (0.285)    | 0.965 (0.419)    | -         |    14.20 | brnz4n, drop, exit, insani, saffee |
|           57 |      545 | 2024-04-14 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     0.52 | brnz4n, drop, exit, insani, saffee |
|           56 |      559 | 2024-04-13 | Case           | W   | 1.000      | 0.435        | -                | 0.578 (0.251)    | -         |     0.42 | brnz4n, drop, exit, insani, saffee |
|           55 |      589 | 2024-04-11 | paiN           | W   | 1.000      | 0.143        | 0.786 (0.112)    | -                | -         |    17.52 | brnz4n, drop, exit, insani, saffee |
|           54 |      631 | 2024-04-10 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           53 |      632 | 2024-04-10 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           52 |      649 | 2024-04-10 | Imperial       | W   | 1.000      | -            | -                | -                | -         |    17.38 | brnz4n, drop, exit, insani, saffee |
|           51 |      681 | 2024-04-09 | adalYamigos    | W   | 1.000      | -            | -                | -                | -         |     0.44 | brnz4n, drop, exit, insani, saffee |
|           50 |      685 | 2024-04-09 | adalYamigos    | W   | 1.000      | -            | -                | -                | -         |     0.44 | brnz4n, drop, exit, insani, saffee |
|           49 |      690 | 2024-04-09 | RED Canids     | W   | 1.000      | -            | -                | -                | -         |     1.47 | brnz4n, drop, exit, insani, saffee |
|           48 |      722 | 2024-04-08 | W7M            | W   | 1.000      | -            | -                | -                | -         |     0.46 | brnz4n, drop, exit, insani, saffee |
|           47 |      756 | 2024-04-07 | paiN           | W   | 1.000      | 0.143        | 0.786 (0.112)    | -                | -         |    20.05 | brnz4n, drop, exit, insani, saffee |
|           46 |      774 | 2024-04-06 | Bounty Hunters | W   | 1.000      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|           45 |      790 | 2024-04-05 | Fluxo          | W   | 0.995      | 0.450        | -                | 0.569 (0.255)    | -         |     2.08 | brnz4n, drop, exit, insani, saffee |
|           44 |      791 | 2024-04-05 | Fluxo          | L   | 0.994      | -            | -                | -                | -         |   -29.55 | brnz4n, drop, exit, insani, saffee |
|           43 |      794 | 2024-04-05 | ODDIK          | W   | 0.994      | -            | -                | -                | -         |     0.75 | brnz4n, drop, exit, insani, saffee |
|           42 |      817 | 2024-04-04 | Solid          | W   | 0.988      | -            | -                | -                | -         |     0.59 | brnz4n, drop, exit, insani, saffee |
|           41 |      821 | 2024-04-04 | Solid          | W   | 0.988      | -            | -                | -                | -         |     0.59 | brnz4n, drop, exit, insani, saffee |
|           40 |      852 | 2024-04-03 | Fluxo          | W   | 0.982      | -            | -                | -                | -         |     1.64 | brnz4n, drop, exit, insani, saffee |
|           39 |      902 | 2024-04-02 | Fluxo          | W   | 0.975      | -            | -                | -                | -         |     1.59 | brnz4n, drop, exit, insani, saffee |
|           38 |      905 | 2024-04-02 | Sharks         | W   | 0.974      | -            | -                | -                | -         |     0.96 | brnz4n, drop, exit, insani, saffee |
|           37 |      992 | 2024-03-27 | Case           | W   | 0.935      | 0.450        | -                | 0.578 (0.243)    | -         |     0.43 | brnz4n, drop, exit, insani, saffee |
|           36 |      998 | 2024-03-27 | Case           | W   | 0.934      | 0.450        | -                | 0.578 (0.243)    | -         |     0.43 | brnz4n, drop, exit, insani, saffee |
|           35 |     1038 | 2024-03-26 | ODDIK          | W   | 0.928      | -            | -                | -                | -         |     0.83 | brnz4n, drop, exit, insani, saffee |
|           34 |     1040 | 2024-03-26 | ODDIK          | W   | 0.928      | -            | -                | -                | -         |     0.84 | brnz4n, drop, exit, insani, saffee |
|           33 |     1232 | 2024-03-14 | Sharks         | W   | 0.848      | -            | -                | -                | -         |     0.85 | brnz4n, drop, exit, insani, saffee |
|           32 |     1234 | 2024-03-14 | Sharks         | W   | 0.848      | -            | -                | -                | -         |     0.86 | brnz4n, drop, exit, insani, saffee |
|           31 |     1305 | 2024-03-12 | Fluxo          | L   | 0.834      | -            | -                | -                | -         |   -24.86 | brnz4n, drop, exit, insani, saffee |
|           30 |     1344 | 2024-03-10 | Galorys        | W   | 0.821      | -            | -                | -                | -         |     0.31 | brnz4n, drop, exit, insani, saffee |
|           29 |     1392 | 2024-03-08 | LA RUGONETA    | W   | 0.807      | -            | -                | -                | -         |     0.09 | brnz4n, drop, exit, insani, saffee |
|           28 |     1523 | 2024-03-03 | Legacy         | L   | 0.774      | -            | -                | -                | -         |   -23.25 | brnz4n, drop, exit, insani, saffee |
|           27 |     1555 | 2024-03-02 | NRG            | W   | 0.767      | -            | -                | -                | 1 (0.767) |     0.30 | brnz4n, drop, exit, insani, saffee |
|           26 |     1578 | 2024-03-01 | BOSS           | L   | 0.760      | -            | -                | -                | -         |   -23.57 | brnz4n, drop, exit, insani, saffee |
|           25 |     2104 | 2024-02-03 | Imperial       | L   | 0.581      | -            | -                | -                | -         |    -7.95 | brnz4n, drop, exit, insani, saffee |
|           24 |     2168 | 2024-02-01 | paiN           | W   | 0.568      | -            | -                | -                | -         |    10.88 | brnz4n, drop, exit, insani, saffee |
|           23 |     2171 | 2024-02-01 | W7M            | W   | 0.567      | -            | -                | -                | -         |     0.20 | brnz4n, drop, exit, insani, saffee |
|           22 |     2344 | 2024-01-22 | adalYamigos    | L   | 0.501      | -            | -                | -                | -         |   -15.72 | brnz4n, drop, exit, insani, saffee |
|           21 |     2406 | 2024-01-20 | BESTIA         | W   | 0.488      | -            | -                | -                | -         |     0.16 | brnz4n, drop, exit, insani, saffee |
|           20 |     2454 | 2024-01-19 | TIMACETA       | W   | 0.481      | -            | -                | -                | -         |     0.03 | brnz4n, drop, exit, insani, saffee |
|           19 |     2468 | 2024-01-19 | ODDIK          | W   | 0.480      | -            | -                | -                | -         |     0.32 | brnz4n, drop, exit, insani, saffee |
|           18 |     2511 | 2024-01-18 | 9z             | L   | 0.475      | -            | -                | -                | -         |   -14.68 | brnz4n, drop, exit, insani, saffee |
|           17 |     2518 | 2024-01-18 | Sharks         | W   | 0.474      | -            | -                | -                | -         |     0.24 | brnz4n, drop, exit, insani, saffee |
|           16 |     2560 | 2024-01-17 | 9z             | L   | 0.469      | -            | -                | -                | -         |   -14.52 | brnz4n, drop, exit, insani, saffee |
|           15 |     2582 | 2024-01-17 | Sharks         | W   | 0.467      | -            | -                | -                | -         |     0.21 | brnz4n, drop, exit, insani, saffee |
|           14 |     3115 | 2023-12-09 | Spirit         | L   | 0.205      | -            | -                | -                | -         |    -2.09 | brnz4n, drop, exit, insani, saffee |
|           13 |     3160 | 2023-12-07 | Cloud9         | W   | 0.192      | -            | -                | -                | 1 (0.192) |     2.78 | brnz4n, drop, exit, insani, saffee |
|           12 |     3218 | 2023-12-05 | BetBoom        | W   | 0.179      | -            | -                | -                | 1 (0.179) |     1.29 | brnz4n, drop, exit, insani, saffee |
|           11 |     3348 | 2023-11-26 | Eternal Fire   | L   | 0.119      | -            | -                | -                | -         |    -1.73 | brnz4n, drop, exit, insani, saffee |
|           10 |     3386 | 2023-11-24 | Virtus.pro     | W   | 0.106      | -            | -                | -                | -         |     1.97 | brnz4n, drop, exit, insani, saffee |
|            9 |     3393 | 2023-11-24 | GamerLegion    | W   | 0.105      | -            | -                | -                | -         |     0.92 | brnz4n, drop, exit, insani, saffee |
|            8 |     3446 | 2023-11-20 | Aurora         | W   | 0.080      | -            | -                | -                | -         |     1.02 | brnz4n, drop, exit, insani, saffee |
|            7 |     3452 | 2023-11-20 | BIG            | W   | 0.079      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|            6 |     3463 | 2023-11-19 | Eternal Fire   | L   | 0.073      | -            | -                | -                | -         |    -1.04 | brnz4n, drop, exit, insani, saffee |
|            5 |     3485 | 2023-11-18 | FURIA          | L   | 0.067      | -            | -                | -                | -         |    -1.42 | brnz4n, drop, exit, insani, saffee |
|            4 |     3490 | 2023-11-18 | BetBoom        | W   | 0.067      | -            | -                | -                | -         |     0.49 | brnz4n, drop, exit, insani, saffee |
|            3 |     3527 | 2023-11-17 | Spirit         | L   | 0.059      | -            | -                | -                | -         |    -0.59 | brnz4n, drop, exit, insani, saffee |
|            2 |     3535 | 2023-11-17 | 9 Pandas       | L   | 0.058      | -            | -                | -                | -         |    -1.75 | brnz4n, drop, exit, insani, saffee |
|            1 |     3570 | 2023-11-16 | KOI            | W   | 0.052      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($103,371.03)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.64) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-04-20 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-04-15 |      1.000 | $25,000.00     | $25,000.00      |
| 2023-12-10 |      0.212 | $30,000.00     | $6,372.99       |
| 2023-11-26 |      0.120 | $10,000.00     | $1,199.86       |
| 2023-11-20 |      0.080 | $10,000.00     | $798.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
