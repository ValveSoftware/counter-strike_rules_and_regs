### Roster Details<br />
Team Name: Solid<br />
Roster: ALLE, CSO, gbb, Lcm, xureba<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  837.8<br />
<br />
Final Rank Value (837.8) = Starting Rank Value (911.4) + Head To Head Adjustments (-73.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 911.4
- 400 + ( ( 0.269 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 911.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |      237 | 2024-04-25 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.45 | ALLE, CSO, gbb, Lcm, xureba  |
|           55 |      239 | 2024-04-25 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.45 | ALLE, CSO, gbb, Lcm, xureba  |
|           54 |      330 | 2024-04-20 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -15.81 | ALLE, CSO, gbb, Lcm, xureba  |
|           53 |      332 | 2024-04-20 | Galorys       | W   | 1.000      | 0.450        | 0.047 (0.021)    | 0.510 (0.230)    | 0 (0.000) |    15.69 | ALLE, CSO, gbb, Lcm, xureba  |
|           52 |      474 | 2024-04-17 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -6.55 | ALLE, CSO, gbb, Lcm, xureba  |
|           51 |      509 | 2024-04-16 | paiN Academy  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.40 | ALLE, CSO, gbb, Lcm, xureba  |
|           50 |      578 | 2024-04-12 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -14.32 | ALLE, CSO, gbb, Lcm, xureba  |
|           49 |      695 | 2024-04-09 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.44 | ALLE, CSO, gbb, Lcm, xureba  |
|           48 |      700 | 2024-04-09 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.45 | ALLE, CSO, gbb, Lcm, xureba  |
|           47 |      736 | 2024-04-08 | LA RUGONETA   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.77 | ALLE, CSO, gbb, Lcm, xureba  |
|           46 |      775 | 2024-04-06 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -7.34 | ALLE, CSO, gbb, Lcm, xureba  |
|           45 |      817 | 2024-04-04 | MIBR          | L   | 0.988      | -            | -                | -                | -         |    -0.59 | ALLE, CSO, gbb, Lcm, xureba  |
|           44 |      821 | 2024-04-04 | MIBR          | L   | 0.988      | -            | -                | -                | -         |    -0.59 | ALLE, CSO, gbb, Lcm, xureba  |
|           43 |     1120 | 2024-03-20 | 2GAME         | L   | 0.887      | -            | -                | -                | -         |   -21.95 | ALLE, CSO, gbb, Lcm, xureba  |
|           42 |     1121 | 2024-03-20 | 2GAME         | W   | 0.887      | 0.450        | -                | 0.192 (0.077)    | 0 (0.000) |     5.68 | ALLE, CSO, gbb, Lcm, xureba  |
|           41 |     1240 | 2024-03-14 | RED Canids    | W   | 0.848      | 0.435        | 0.105 (0.039)    | 0.808 (0.298)    | 0 (0.000) |    18.20 | bnc, CSO, gbb, Lcm, xureba   |
|           40 |     1278 | 2024-03-13 | Fluxo         | W   | 0.840      | 0.435        | 0.148 (0.054)    | 0.569 (0.208)    | 0 (0.000) |    20.43 | bnc, CSO, gbb, Lcm, xureba   |
|           39 |     1304 | 2024-03-12 | adalYamigos   | W   | 0.835      | 0.435        | -                | 0.373 (0.135)    | 0 (0.000) |    12.03 | bnc, CSO, gbb, Lcm, xureba   |
|           38 |     1307 | 2024-03-12 | FURIA Academy | L   | 0.834      | -            | -                | -                | -         |   -21.87 | bnc, CSO, gbb, Lcm, xureba   |
|           37 |     1329 | 2024-03-11 | W7M           | W   | 0.827      | 0.435        | 0.009 (0.003)    | 0.476 (0.171)    | 0 (0.000) |    11.97 | bnc, CSO, gbb, Lcm, xureba   |
|           36 |     1351 | 2024-03-10 | ODDIK         | L   | 0.820      | -            | -                | -                | -         |    -9.94 | bnc, CSO, gbb, Lcm, xureba   |
|           35 |     1369 | 2024-03-09 | VELOX         | W   | 0.813      | -            | -                | -                | 0 (0.000) |     5.29 | bnc, CSO, gbb, Lcm, xureba   |
|           34 |     1424 | 2024-03-07 | W7M           | L   | 0.800      | -            | -                | -                | -         |   -13.74 | bnc, CSO, gbb, Lcm, xureba   |
|           33 |     1440 | 2024-03-06 | Fluxo         | W   | 0.795      | 0.450        | 0.148 (0.053)    | 0.569 (0.204)    | 0 (0.000) |    19.53 | bnc, CSO, gbb, Lcm, xureba   |
|           32 |     1442 | 2024-03-06 | Fluxo         | L   | 0.795      | -            | -                | -                | -         |    -5.29 | bnc, CSO, gbb, Lcm, xureba   |
|           31 |     1485 | 2024-03-05 | Sharks        | L   | 0.787      | -            | -                | -                | -         |    -8.82 | bnc, CSO, gbb, Lcm, xureba   |
|           30 |     1489 | 2024-03-05 | Sharks        | L   | 0.786      | -            | -                | -                | -         |    -9.41 | bnc, CSO, gbb, Lcm, xureba   |
|           29 |     1744 | 2024-02-21 | Case          | L   | 0.702      | -            | -                | -                | -         |   -11.47 | bnc, CSO, gbb, Lcm, xureba   |
|           28 |     1745 | 2024-02-21 | Case          | W   | 0.702      | 0.450        | 0.026 (0.008)    | 0.578 (0.182)    | -         |    10.82 | bnc, CSO, gbb, Lcm, xureba   |
|           27 |     1757 | 2024-02-21 | Fluxo         | L   | 0.700      | -            | -                | -                | -         |    -6.02 | bnc, CSO, gbb, Lcm, xureba   |
|           26 |     1779 | 2024-02-20 | 9z            | L   | 0.695      | -            | -                | -                | -         |    -7.32 | bnc, CSO, gbb, Lcm, xureba   |
|           25 |     1780 | 2024-02-20 | Flamengo      | W   | 0.694      | -            | -                | -                | -         |     2.78 | bnc, CSO, gbb, Lcm, xureba   |
|           24 |     1782 | 2024-02-20 | Fluxo         | W   | 0.694      | 0.143        | 0.148 (0.015)    | -                | -         |    16.19 | bnc, CSO, gbb, Lcm, xureba   |
|           23 |     1810 | 2024-02-19 | Sharks        | L   | 0.686      | -            | -                | -                | -         |    -9.09 | bnc, CSO, gbb, Lcm, xureba   |
|           22 |     1827 | 2024-02-18 | adalYamigos   | W   | 0.681      | 0.435        | -                | 0.373 (0.110)    | -         |     7.22 | bnc, CSO, gbb, Lcm, xureba   |
|           21 |     1849 | 2024-02-17 | Case          | L   | 0.675      | -            | -                | -                | -         |   -10.06 | bnc, CSO, gbb, Lcm, xureba   |
|           20 |     1862 | 2024-02-17 | inSanitY      | W   | 0.672      | -            | -                | -                | -         |     1.43 | bnc, CSO, gbb, Lcm, xureba   |
|           19 |     1879 | 2024-02-16 | W7M           | W   | 0.667      | 0.303        | 0.009 (0.002)    | 0.476 (0.096)    | -         |    10.04 | bnc, CSO, gbb, Lcm, xureba   |
|           18 |     1910 | 2024-02-15 | Imperial      | L   | 0.661      | -            | -                | -                | -         |    -0.22 | bnc, CSO, gbb, Lcm, xureba   |
|           17 |     1938 | 2024-02-14 | Galorys       | W   | 0.655      | 0.143        | 0.047 (0.004)    | -                | -         |     9.19 | bnc, CSO, gbb, Lcm, xureba   |
|           16 |     1947 | 2024-02-14 | Corinthians   | W   | 0.654      | -            | -                | -                | -         |     4.95 | bnc, CSO, gbb, Lcm, xureba   |
|           15 |     1975 | 2024-02-13 | adalYamigos   | L   | 0.648      | -            | -                | -                | -         |   -13.89 | bnc, CSO, gbb, Lcm, xureba   |
|           14 |     1979 | 2024-02-13 | adalYamigos   | L   | 0.648      | -            | -                | -                | -         |   -14.57 | bnc, CSO, gbb, Lcm, xureba   |
|           13 |     1984 | 2024-02-13 | Imperial      | L   | 0.648      | -            | -                | -                | -         |    -0.21 | bnc, CSO, gbb, Lcm, xureba   |
|           12 |     1996 | 2024-02-12 | Sharks        | L   | 0.642      | -            | -                | -                | -         |    -8.31 | bnc, CSO, gbb, Lcm, xureba   |
|           11 |     2725 | 2024-01-13 | ODDIK         | L   | 0.441      | -            | -                | -                | -         |    -5.39 | CSO, gbb, Lcm, nolkz, xureba |
|           10 |     2811 | 2024-01-11 | KRÜ           | L   | 0.427      | -            | -                | -                | -         |   -11.95 | CSO, gbb, Lcm, nolkz, xureba |
|            9 |     2926 | 2023-12-23 | Case          | L   | 0.300      | -            | -                | -                | -         |    -6.84 | CSO, gbb, Lcm, nolkz, xureba |
|            8 |     2929 | 2023-12-21 | ODDIK         | L   | 0.288      | -            | -                | -                | -         |    -3.81 | CSO, gbb, Lcm, nolkz, xureba |
|            7 |     2933 | 2023-12-20 | Flamengo      | W   | 0.281      | -            | -                | -                | -         |     0.96 | CSO, gbb, Lcm, nolkz, xureba |
|            6 |     2951 | 2023-12-18 | ODDIK         | W   | 0.268      | 0.303        | 0.015 (0.001)    | -                | -         |     4.95 | CSO, gbb, Lcm, nolkz, xureba |
|            5 |     3003 | 2023-12-16 | WINDINGO      | L   | 0.254      | -            | -                | -                | -         |    -6.35 | CSO, gbb, Lcm, nolkz, xureba |
|            4 |     3297 | 2023-11-30 | AJF           | L   | 0.148      | -            | -                | -                | -         |    -3.87 | CSO, gbb, Lcm, nolkz, xureba |
|            3 |     3546 | 2023-11-16 | W7M           | L   | 0.054      | -            | -                | -                | -         |    -1.07 | CSO, gbb, Lcm, nolkz, xureba |
|            2 |     3586 | 2023-11-15 | Sharks        | L   | 0.048      | -            | -                | -                | -         |    -0.81 | CSO, gbb, Lcm, nolkz, xureba |
|            1 |     3636 | 2023-11-13 | FURIA Academy | W   | 0.034      | -            | -                | -                | -         |     0.12 | CSO, gbb, Lcm, nolkz, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,474.96)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-14 |      0.848 | $25,000.00     | $21,188.07      |
| 2023-12-18 |      0.266 | $1,080.00      | $286.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
