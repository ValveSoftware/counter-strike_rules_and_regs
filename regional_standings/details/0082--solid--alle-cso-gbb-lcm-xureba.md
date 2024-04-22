### Roster Details<br />
Team Name: Solid<br />
Roster: ALLE, CSO, gbb, Lcm, xureba<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [24]( ../standings_americas.md)<br />
Final Rank Value:  846.6<br />
<br />
Final Rank Value (846.6) = Starting Rank Value (937.3) + Head To Head Adjustments (-90.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.526[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.210[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.3
- 400 + ( ( 0.278 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 937.3


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
|           59 |       34 | 2024-04-20 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -15.80 | ALLE, CSO, gbb, Lcm, xureba  |
|           58 |       36 | 2024-04-20 | Galorys       | W   | 1.000      | 0.450        | 0.042 (0.019)    | 0.557 (0.251)    | 0 (0.000) |    15.69 | ALLE, CSO, gbb, Lcm, xureba  |
|           57 |      178 | 2024-04-17 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -6.98 | ALLE, CSO, gbb, Lcm, xureba  |
|           56 |      213 | 2024-04-16 | paiN Academy  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.30 | ALLE, CSO, gbb, Lcm, xureba  |
|           55 |      282 | 2024-04-12 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -15.45 | ALLE, CSO, gbb, Lcm, xureba  |
|           54 |      399 | 2024-04-09 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.54 | ALLE, CSO, gbb, Lcm, xureba  |
|           53 |      404 | 2024-04-09 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.54 | ALLE, CSO, gbb, Lcm, xureba  |
|           52 |      440 | 2024-04-08 | LA RUGONETA   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.77 | ALLE, CSO, gbb, Lcm, xureba  |
|           51 |      479 | 2024-04-06 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -7.86 | ALLE, CSO, gbb, Lcm, xureba  |
|           50 |      521 | 2024-04-04 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -1.99 | ALLE, CSO, gbb, Lcm, xureba  |
|           49 |      525 | 2024-04-04 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -2.03 | ALLE, CSO, gbb, Lcm, xureba  |
|           48 |      824 | 2024-03-20 | 2GAME         | L   | 0.981      | -            | -                | -                | -         |   -24.03 | ALLE, CSO, gbb, Lcm, xureba  |
|           47 |      825 | 2024-03-20 | 2GAME         | W   | 0.981      | 0.450        | -                | 0.217 (0.096)    | 0 (0.000) |     6.39 | ALLE, CSO, gbb, Lcm, xureba  |
|           46 |      944 | 2024-03-14 | RED Canids    | W   | 0.941      | 0.435        | 0.110 (0.045)    | 0.842 (0.344)    | 0 (0.000) |    20.55 | bnc, CSO, gbb, Lcm, xureba   |
|           45 |      982 | 2024-03-13 | Fluxo         | W   | 0.933      | 0.435        | 0.147 (0.060)    | 0.633 (0.257)    | 0 (0.000) |    22.54 | bnc, CSO, gbb, Lcm, xureba   |
|           44 |     1008 | 2024-03-12 | adalYamigos   | W   | 0.928      | 0.435        | -                | 0.423 (0.171)    | 0 (0.000) |    14.62 | bnc, CSO, gbb, Lcm, xureba   |
|           43 |     1011 | 2024-03-12 | FURIA Academy | L   | 0.927      | -            | -                | -                | -         |   -24.31 | bnc, CSO, gbb, Lcm, xureba   |
|           42 |     1033 | 2024-03-11 | W7M           | W   | 0.920      | 0.435        | 0.010 (0.004)    | 0.490 (0.196)    | 0 (0.000) |    13.66 | bnc, CSO, gbb, Lcm, xureba   |
|           41 |     1055 | 2024-03-10 | ODDIK         | L   | 0.913      | -            | -                | -                | -         |   -12.74 | bnc, CSO, gbb, Lcm, xureba   |
|           40 |     1073 | 2024-03-09 | VELOX         | W   | 0.907      | -            | -                | -                | 0 (0.000) |     6.03 | bnc, CSO, gbb, Lcm, xureba   |
|           39 |     1128 | 2024-03-07 | W7M           | L   | 0.893      | -            | -                | -                | -         |   -14.98 | bnc, CSO, gbb, Lcm, xureba   |
|           38 |     1144 | 2024-03-06 | Fluxo         | W   | 0.888      | 0.450        | 0.147 (0.059)    | 0.633 (0.253)    | 0 (0.000) |    21.80 | bnc, CSO, gbb, Lcm, xureba   |
|           37 |     1146 | 2024-03-06 | Fluxo         | L   | 0.888      | -            | -                | -                | -         |    -5.85 | bnc, CSO, gbb, Lcm, xureba   |
|           36 |     1189 | 2024-03-05 | Sharks        | L   | 0.880      | -            | -                | -                | -         |    -9.46 | bnc, CSO, gbb, Lcm, xureba   |
|           35 |     1193 | 2024-03-05 | Sharks        | L   | 0.880      | -            | -                | -                | -         |   -10.16 | bnc, CSO, gbb, Lcm, xureba   |
|           34 |     1448 | 2024-02-21 | Case          | L   | 0.795      | -            | -                | -                | -         |   -12.76 | bnc, CSO, gbb, Lcm, xureba   |
|           33 |     1449 | 2024-02-21 | Case          | W   | 0.795      | 0.450        | 0.034 (0.012)    | 0.767 (0.274)    | -         |    12.46 | bnc, CSO, gbb, Lcm, xureba   |
|           32 |     1461 | 2024-02-21 | Fluxo         | L   | 0.793      | -            | -                | -                | -         |    -6.96 | bnc, CSO, gbb, Lcm, xureba   |
|           31 |     1483 | 2024-02-20 | 9z            | L   | 0.788      | -            | -                | -                | -         |    -8.69 | bnc, CSO, gbb, Lcm, xureba   |
|           30 |     1484 | 2024-02-20 | Flamengo      | W   | 0.788      | -            | -                | -                | -         |     2.99 | bnc, CSO, gbb, Lcm, xureba   |
|           29 |     1486 | 2024-02-20 | Fluxo         | W   | 0.787      | 0.143        | 0.147 (0.017)    | -                | -         |    18.19 | bnc, CSO, gbb, Lcm, xureba   |
|           28 |     1514 | 2024-02-19 | Sharks        | L   | 0.780      | -            | -                | -                | -         |   -10.05 | bnc, CSO, gbb, Lcm, xureba   |
|           27 |     1531 | 2024-02-18 | adalYamigos   | W   | 0.774      | 0.435        | -                | 0.423 (0.142)    | -         |     9.07 | bnc, CSO, gbb, Lcm, xureba   |
|           26 |     1553 | 2024-02-17 | Case          | L   | 0.768      | -            | -                | -                | -         |   -11.01 | bnc, CSO, gbb, Lcm, xureba   |
|           25 |     1566 | 2024-02-17 | inSanitY      | W   | 0.765      | -            | -                | -                | -         |     1.55 | bnc, CSO, gbb, Lcm, xureba   |
|           24 |     1583 | 2024-02-16 | W7M           | W   | 0.760      | 0.303        | 0.010 (0.002)    | 0.490 (0.113)    | -         |    11.88 | bnc, CSO, gbb, Lcm, xureba   |
|           23 |     1614 | 2024-02-15 | Imperial      | L   | 0.754      | -            | -                | -                | -         |    -0.26 | bnc, CSO, gbb, Lcm, xureba   |
|           22 |     1642 | 2024-02-14 | Galorys       | W   | 0.748      | 0.143        | 0.042 (0.004)    | -                | -         |    10.41 | bnc, CSO, gbb, Lcm, xureba   |
|           21 |     1651 | 2024-02-14 | Corinthians   | W   | 0.747      | -            | -                | -                | -         |     5.56 | bnc, CSO, gbb, Lcm, xureba   |
|           20 |     1679 | 2024-02-13 | adalYamigos   | L   | 0.742      | -            | -                | -                | -         |   -14.92 | bnc, CSO, gbb, Lcm, xureba   |
|           19 |     1683 | 2024-02-13 | adalYamigos   | L   | 0.741      | -            | -                | -                | -         |   -15.83 | bnc, CSO, gbb, Lcm, xureba   |
|           18 |     1688 | 2024-02-13 | Imperial      | L   | 0.741      | -            | -                | -                | -         |    -0.24 | bnc, CSO, gbb, Lcm, xureba   |
|           17 |     1700 | 2024-02-12 | Sharks        | L   | 0.735      | -            | -                | -                | -         |    -9.04 | bnc, CSO, gbb, Lcm, xureba   |
|           16 |     2429 | 2024-01-13 | ODDIK         | L   | 0.535      | -            | -                | -                | -         |    -7.65 | CSO, gbb, Lcm, nolkz, xureba |
|           15 |     2515 | 2024-01-11 | PUBG aim      | L   | 0.520      | -            | -                | -                | -         |   -14.64 | CSO, gbb, Lcm, nolkz, xureba |
|           14 |     2630 | 2023-12-23 | Case          | L   | 0.393      | -            | -                | -                | -         |    -6.96 | CSO, gbb, Lcm, nolkz, xureba |
|           13 |     2633 | 2023-12-21 | ODDIK         | L   | 0.381      | -            | -                | -                | -         |    -6.07 | CSO, gbb, Lcm, nolkz, xureba |
|           12 |     2637 | 2023-12-20 | Flamengo      | W   | 0.374      | -            | -                | -                | -         |     1.31 | CSO, gbb, Lcm, nolkz, xureba |
|           11 |     2655 | 2023-12-18 | ODDIK         | W   | 0.361      | 0.303        | 0.017 (0.002)    | -                | -         |     5.63 | CSO, gbb, Lcm, nolkz, xureba |
|           10 |     2707 | 2023-12-16 | WINDINGO      | L   | 0.348      | -            | -                | -                | -         |    -8.74 | CSO, gbb, Lcm, nolkz, xureba |
|            9 |     3001 | 2023-11-30 | AJF           | L   | 0.241      | -            | -                | -                | -         |    -6.37 | CSO, gbb, Lcm, nolkz, xureba |
|            8 |     3250 | 2023-11-16 | W7M           | L   | 0.148      | -            | -                | -                | -         |    -2.94 | CSO, gbb, Lcm, nolkz, xureba |
|            7 |     3290 | 2023-11-15 | Sharks        | L   | 0.141      | -            | -                | -                | -         |    -2.43 | CSO, gbb, Lcm, nolkz, xureba |
|            6 |     3340 | 2023-11-13 | FURIA Academy | W   | 0.127      | -            | -                | -                | -         |     0.41 | CSO, gbb, Lcm, nolkz, xureba |
|            5 |     3666 | 2023-10-30 | ODDIK         | L   | 0.033      | -            | -                | -                | -         |    -0.56 | CSO, gbb, Lcm, nolkz, xureba |
|            4 |     3737 | 2023-10-28 | RED Canids    | L   | 0.021      | -            | -                | -                | -         |    -0.27 | CSO, gbb, Lcm, nolkz, xureba |
|            3 |     3748 | 2023-10-28 | W7M           | L   | 0.020      | -            | -                | -                | -         |    -0.40 | CSO, gbb, Lcm, nolkz, xureba |
|            2 |     3776 | 2023-10-27 | Legacy        | L   | 0.014      | -            | -                | -                | -         |    -0.14 | CSO, gbb, Lcm, nolkz, xureba |
|            1 |     3805 | 2023-10-26 | BESTIA        | W   | 0.008      | -            | -                | -                | -         |     0.08 | CSO, gbb, Lcm, nolkz, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,908.39)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-14 |      0.941 | $25,000.00     | $23,520.72      |
| 2023-12-18 |      0.359 | $1,080.00      | $387.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
