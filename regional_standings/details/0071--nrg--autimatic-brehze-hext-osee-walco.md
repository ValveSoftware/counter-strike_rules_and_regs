### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, oSee, Walco<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  866.5<br />
<br />
Final Rank Value (866.5) = Starting Rank Value (781.3) + Head To Head Adjustments (85.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.166[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.3
- 400 + ( ( 0.197 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 781.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      174 | 2024-04-17 | G3               | L   | 1.000      | -            | -                | -                | -         |   -20.89 | autimatic, Brehze, HexT, oSee, Walco   |
|           62 |      233 | 2024-04-15 | Mythic           | W   | 1.000      | 0.477        | -                | 0.413 (0.197)    | 0 (0.000) |     9.30 | autimatic, Brehze, HexT, oSee, Walco   |
|           61 |      234 | 2024-04-15 | Mythic           | W   | 1.000      | 0.477        | -                | 0.413 (0.197)    | 0 (0.000) |    10.02 | autimatic, Brehze, HexT, oSee, Walco   |
|           60 |      320 | 2024-04-10 | BOSS             | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.530 (0.253)    | 0 (0.000) |    15.71 | autimatic, Brehze, HexT, oSee, Walco   |
|           59 |      325 | 2024-04-10 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.79 | autimatic, Brehze, HexT, oSee, Walco   |
|           58 |      379 | 2024-04-09 | Carpe Diem       | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.315 (0.150)    | 0 (0.000) |     7.53 | autimatic, Brehze, HexT, oSee, Walco   |
|           57 |      382 | 2024-04-09 | Carpe Diem       | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.315 (0.150)    | 0 (0.000) |     8.04 | autimatic, Brehze, HexT, oSee, Walco   |
|           56 |      683 | 2024-03-27 | Nouns            | W   | 1.000      | 0.477        | -                | 0.632 (0.302)    | 0 (0.000) |    15.85 | autimatic, Brehze, HexT, oSee, Walco   |
|           55 |      688 | 2024-03-27 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -15.64 | autimatic, Brehze, HexT, oSee, Walco   |
|           54 |      735 | 2024-03-26 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.233 (0.111)    | 0 (0.000) |    11.39 | autimatic, Brehze, HexT, oSee, Walco   |
|           53 |      740 | 2024-03-26 | MIGHT            | W   | 1.000      | 0.477        | -                | 0.233 (0.111)    | 0 (0.000) |    12.38 | autimatic, Brehze, HexT, oSee, Walco   |
|           52 |      906 | 2024-03-15 | FLUFFY AIMERS    | W   | 0.949      | 0.477        | 0.023 (0.010)    | 0.225 (0.102)    | 0 (0.000) |    16.73 | autimatic, Brehze, HexT, oSee, Walco   |
|           51 |      908 | 2024-03-15 | FLUFFY AIMERS    | L   | 0.949      | -            | -                | -                | -         |   -13.07 | autimatic, Brehze, HexT, oSee, Walco   |
|           50 |      926 | 2024-03-14 | Limitless        | W   | 0.942      | 0.477        | -                | 0.201 (0.090)    | 0 (0.000) |     8.10 | autimatic, Brehze, HexT, oSee, Walco   |
|           49 |      931 | 2024-03-14 | Limitless        | W   | 0.942      | -            | -                | -                | -         |     8.66 | autimatic, Brehze, HexT, oSee, Walco   |
|           48 |     1004 | 2024-03-12 | Carpe Diem       | L   | 0.928      | -            | -                | -                | -         |   -17.99 | autimatic, Brehze, HexT, oSee, Walco   |
|           47 |     1259 | 2024-03-02 | MIBR             | L   | 0.860      | -            | -                | -                | -         |    -1.27 | Brehze, daps, FaNg, HexT, oSee         |
|           46 |     1278 | 2024-03-01 | Imperial         | L   | 0.854      | -            | -                | -                | -         |    -0.34 | Brehze, daps, FaNg, HexT, oSee         |
|           45 |     1384 | 2024-02-24 | Wildcard         | L   | 0.815      | -            | -                | -                | -         |   -10.51 | Brehze, daps, FaNg, HexT, oSee         |
|           44 |     1387 | 2024-02-24 | Limitless        | W   | 0.815      | -            | -                | -                | -         |     7.86 | Brehze, daps, FaNg, HexT, oSee         |
|           43 |     1393 | 2024-02-24 | Mythic           | W   | 0.814      | -            | -                | -                | -         |    10.75 | Brehze, daps, FaNg, HexT, oSee         |
|           42 |     1429 | 2024-02-22 | Party Astronauts | L   | 0.801      | -            | -                | -                | -         |   -12.68 | Brehze, daps, FaNg, HexT, oSee         |
|           41 |     1433 | 2024-02-22 | Wildcard         | W   | 0.801      | 0.143        | 0.021 (0.002)    | -                | -         |    14.78 | Brehze, daps, FaNg, HexT, oSee         |
|           40 |     1481 | 2024-02-20 | Party Astronauts | L   | 0.789      | -            | -                | -                | -         |   -13.23 | Brehze, daps, FaNg, HexT, oSee         |
|           39 |     1506 | 2024-02-19 | Party Astronauts | W   | 0.783      | 0.143        | 0.020 (0.002)    | -                | -         |    11.24 | Brehze, daps, FaNg, HexT, oSee         |
|           38 |     1508 | 2024-02-19 | Mythic           | W   | 0.781      | -            | -                | -                | -         |    11.08 | Brehze, daps, FaNg, HexT, oSee         |
|           37 |     1809 | 2024-02-03 | Elevate          | L   | 0.675      | -            | -                | -                | -         |    -8.23 | Brehze, daps, FaNg, HexT, oSee         |
|           36 |     1835 | 2024-02-02 | Party Astronauts | W   | 0.668      | -            | -                | -                | -         |     9.99 | Brehze, daps, FaNg, HexT, oSee         |
|           35 |     1839 | 2024-02-02 | Wildcard         | L   | 0.668      | -            | -                | -                | -         |    -8.26 | Brehze, daps, FaNg, HexT, oSee         |
|           34 |     1841 | 2024-02-02 | Party Astronauts | W   | 0.668      | -            | -                | -                | -         |    10.07 | Brehze, daps, FaNg, HexT, oSee         |
|           33 |     2217 | 2024-01-18 | Wildcard         | L   | 0.568      | -            | -                | -                | -         |    -7.51 | Brehze, daps, FaNg, HexT, oSee         |
|           32 |     2221 | 2024-01-18 | Elevate          | W   | 0.568      | 0.143        | 0.038 (0.003)    | -                | -         |    10.91 | Brehze, daps, FaNg, HexT, oSee         |
|           31 |     2267 | 2024-01-17 | squids           | W   | 0.562      | -            | -                | -                | -         |     1.70 | Brehze, daps, FaNg, HexT, oSee         |
|           30 |     2318 | 2024-01-16 | Elevate          | L   | 0.555      | -            | -                | -                | -         |    -6.83 | Brehze, daps, FaNg, HexT, oSee         |
|           29 |     2324 | 2024-01-16 | regain           | W   | 0.554      | -            | -                | -                | -         |     1.71 | Brehze, daps, FaNg, HexT, oSee         |
|           28 |     2364 | 2024-01-15 | Shimmer          | W   | 0.548      | -            | -                | -                | -         |     6.72 | Brehze, daps, FaNg, HexT, oSee         |
|           27 |     2393 | 2024-01-14 | Rocket           | L   | 0.543      | -            | -                | -                | -         |   -11.03 | Brehze, daps, FaNg, HexT, oSee         |
|           26 |     2403 | 2024-01-14 | LOS              | W   | 0.541      | -            | -                | -                | -         |     1.67 | Brehze, daps, FaNg, HexT, oSee         |
|           25 |     2419 | 2024-01-13 | Nouns            | L   | 0.535      | -            | -                | -                | -         |   -11.34 | Brehze, daps, FaNg, HexT, oSee         |
|           24 |     2458 | 2024-01-12 | Complexity       | L   | 0.530      | -            | -                | -                | -         |    -0.68 | Brehze, daps, FaNg, HexT, oSee         |
|           23 |     2467 | 2024-01-12 | Elevate          | W   | 0.529      | 0.143        | 0.038 (0.003)    | -                | -         |     9.52 | Brehze, daps, FaNg, HexT, oSee         |
|           22 |     2549 | 2024-01-09 | Liquid           | L   | 0.510      | -            | -                | -                | -         |    -1.43 | Brehze, daps, FaNg, HexT, oSee         |
|           21 |     2550 | 2024-01-09 | my life be like  | W   | 0.510      | -            | -                | -                | -         |     6.51 | Brehze, daps, FaNg, HexT, oSee         |
|           20 |     2553 | 2024-01-09 | MagicLight       | W   | 0.509      | -            | -                | -                | -         |     1.51 | Brehze, daps, FaNg, HexT, oSee         |
|           19 |     2701 | 2023-12-16 | LAG              | W   | 0.349      | -            | -                | -                | -         |     7.94 | Brehze, daps, FaNg, HexT, oSee         |
|           18 |     2729 | 2023-12-15 | Revenge Nation   | W   | 0.342      | 0.143        | 0.044 (0.002)    | -                | -         |     4.75 | Brehze, daps, FaNg, HexT, oSee         |
|           17 |     2765 | 2023-12-12 | Nouns            | L   | 0.322      | -            | -                | -                | -         |    -5.82 | Brehze, daps, FaNg, HexT, oSee         |
|           16 |     2774 | 2023-12-11 | Wildcard         | W   | 0.315      | 0.303        | 0.021 (0.002)    | -                | -         |     5.69 | Brehze, daps, FaNg, HexT, oSee         |
|           15 |     2784 | 2023-12-10 | huge sweaty      | W   | 0.308      | -            | -                | -                | -         |     0.99 | Brehze, daps, FaNg, HexT, oSee         |
|           14 |     2942 | 2023-12-03 | M80              | L   | 0.262      | -            | -                | -                | -         |    -2.17 | Brehze, daps, FaNg, HexT, oSee         |
|           13 |     2960 | 2023-12-02 | Party Astronauts | W   | 0.255      | -            | -                | -                | -         |     4.29 | Brehze, daps, FaNg, HexT, oSee         |
|           12 |     3132 | 2023-11-21 | BOSS             | L   | 0.182      | -            | -                | -                | -         |    -2.14 | autimatic, HexT, Jeorge, junior, Walco |
|           11 |     3216 | 2023-11-17 | M80              | L   | 0.155      | -            | -                | -                | -         |    -1.32 | autimatic, HexT, Jeorge, junior, Walco |
|           10 |     3247 | 2023-11-16 | M80              | L   | 0.149      | -            | -                | -                | -         |    -1.28 | malbsMd, maNkz, reck, slaxz-, Swisher  |
|            9 |     3288 | 2023-11-15 | Party Astronauts | W   | 0.142      | -            | -                | -                | -         |     2.36 | ben1337, chop, cxzi, PwnAlone, viz     |
|            8 |     3291 | 2023-11-15 | Wildcard         | W   | 0.141      | -            | -                | -                | -         |     2.62 | autimatic, HexT, Jeorge, junior, Walco |
|            7 |     3318 | 2023-11-14 | Limitless        | W   | 0.136      | -            | -                | -                | -         |     1.50 | autimatic, HexT, Jeorge, junior, Walco |
|            6 |     3357 | 2023-11-12 | Eros             | W   | 0.122      | -            | -                | -                | -         |     1.11 | Andrew, DJF, nooz, PNDLM, shutout      |
|            5 |     3450 | 2023-11-08 | Take Flyte       | W   | 0.095      | -            | -                | -                | -         |     1.29 | autimatic, HexT, Jeorge, junior, Walco |
|            4 |     3475 | 2023-11-07 | Rocket           | W   | 0.088      | -            | -                | -                | -         |     0.97 | autimatic, HexT, Jeorge, junior, Walco |
|            3 |     3590 | 2023-11-01 | Elevate          | W   | 0.048      | -            | -                | -                | -         |     0.95 | autimatic, HexT, Jeorge, junior, Walco |
|            2 |     3622 | 2023-10-31 | Party Astronauts | W   | 0.042      | -            | -                | -                | -         |     0.48 | autimatic, HexT, Jeorge, junior, Walco |
|            1 |     3835 | 2023-10-25 | FLUFFY AIMERS    | W   | 0.002      | -            | -                | -                | -         |     0.02 | dea, jason, LEARSI, Peeping, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,389.55)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
