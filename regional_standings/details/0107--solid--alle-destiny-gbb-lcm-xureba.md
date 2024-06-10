### Roster Details<br />
Team Name: Solid<br />
Roster: ALLE, destiny, gbb, Lcm, xureba<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [23]( ../standings_americas.md)<br />
Final Rank Value:  824.9<br />
<br />
Final Rank Value (824.9) = Starting Rank Value (918.7) + Head To Head Adjustments (-93.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 918.7
- 400 + ( ( 0.260 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 918.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           78 |       40 | 2024-06-09 | W7M           | L   | 1.000      | -            | -                | -                | -         |   -20.21 | ALLE, destiny, gbb, Lcm, xureba |
|           77 |       95 | 2024-06-08 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |    -8.62 | ALLE, destiny, gbb, Lcm, xureba |
|           76 |      108 | 2024-06-08 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |   -15.25 | ALLE, destiny, gbb, Lcm, xureba |
|           75 |      154 | 2024-06-07 | KRÜ           | L   | 1.000      | -            | -                | -                | -         |   -19.44 | ALLE, destiny, gbb, Lcm, xureba |
|           74 |      240 | 2024-06-06 | Vikings KR    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.49 | ALLE, destiny, gbb, Lcm, xureba |
|           73 |      363 | 2024-06-03 | Case          | W   | 1.000      | 0.384        | 0.027 (0.010)    | 0.656 (0.252)    | 0 (0.000) |    15.68 | ALLE, destiny, gbb, Lcm, xureba |
|           72 |      408 | 2024-06-01 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |   -17.03 | ALLE, destiny, gbb, Lcm, xureba |
|           71 |      482 | 2024-05-30 | ex-2GAME      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.84 | ALLE, destiny, gbb, Lcm, xureba |
|           70 |      534 | 2024-05-28 | 9z Academy    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.03 | ALLE, destiny, gbb, Lcm, xureba |
|           69 |      645 | 2024-05-22 | W7M           | W   | 1.000      | 0.450        | -                | 0.426 (0.192)    | 0 (0.000) |    10.00 | ALLE, destiny, gbb, Lcm, xureba |
|           68 |      651 | 2024-05-22 | W7M           | W   | 1.000      | 0.450        | -                | 0.426 (0.192)    | 0 (0.000) |    10.81 | ALLE, destiny, gbb, Lcm, xureba |
|           67 |      761 | 2024-05-19 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -16.12 | ALLE, destiny, gbb, Lcm, xureba |
|           66 |      784 | 2024-05-18 | Case          | L   | 1.000      | -            | -                | -                | -         |   -16.04 | ALLE, destiny, gbb, Lcm, xureba |
|           65 |      817 | 2024-05-17 | BESTIA        | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.631 (0.284)    | 0 (0.000) |    18.67 | ALLE, destiny, gbb, Lcm, xureba |
|           64 |      819 | 2024-05-17 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |   -12.57 | ALLE, destiny, gbb, Lcm, xureba |
|           63 |      857 | 2024-05-16 | ODDIK         | W   | 1.000      | 0.303        | 0.024 (0.007)    | 0.602 (0.182)    | 0 (0.000) |    17.42 | ALLE, destiny, gbb, Lcm, xureba |
|           62 |      907 | 2024-05-15 | KRÜ           | L   | 1.000      | -            | -                | -                | -         |   -17.52 | ALLE, destiny, gbb, Lcm, xureba |
|           61 |      946 | 2024-05-14 | ODDIK         | W   | 1.000      | 0.450        | 0.024 (0.011)    | 0.602 (0.271)    | 0 (0.000) |    19.63 | ALLE, destiny, gbb, Lcm, xureba |
|           60 |      952 | 2024-05-14 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -11.54 | ALLE, destiny, gbb, Lcm, xureba |
|           59 |      964 | 2024-05-14 | FURIA Academy | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.75 | ALLE, destiny, gbb, Lcm, xureba |
|           58 |      993 | 2024-05-13 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |   -12.40 | ALLE, destiny, gbb, Lcm, xureba |
|           57 |     1015 | 2024-05-12 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |   -13.51 | ALLE, destiny, gbb, Lcm, xureba |
|           56 |     1023 | 2024-05-12 | Case          | W   | 1.000      | 0.371        | 0.027 (0.010)    | 0.656 (0.243)    | -         |    13.20 | ALLE, destiny, gbb, Lcm, xureba |
|           55 |     1070 | 2024-05-10 | KRÜ           | L   | 0.994      | -            | -                | -                | -         |   -17.74 | ALLE, destiny, gbb, Lcm, xureba |
|           54 |     1113 | 2024-05-08 | RED Canids    | W   | 0.981      | 0.435        | 0.112 (0.048)    | 0.756 (0.322)    | -         |    23.86 | ALLE, destiny, gbb, Lcm, xureba |
|           53 |     1150 | 2024-05-06 | Yawara        | W   | 0.967      | -            | -                | -                | -         |     3.85 | ALLE, destiny, gbb, Lcm, xureba |
|           52 |     1388 | 2024-04-25 | paiN          | L   | 0.894      | -            | -                | -                | -         |    -0.62 | ALLE, CSO, gbb, Lcm, xureba     |
|           51 |     1390 | 2024-04-25 | paiN          | L   | 0.894      | -            | -                | -                | -         |    -0.63 | ALLE, CSO, gbb, Lcm, xureba     |
|           50 |     1481 | 2024-04-20 | Galorys       | L   | 0.861      | -            | -                | -                | -         |   -13.79 | ALLE, CSO, gbb, Lcm, xureba     |
|           49 |     1483 | 2024-04-20 | Galorys       | W   | 0.861      | 0.450        | 0.025 (0.010)    | 0.596 (0.231)    | -         |    13.47 | ALLE, CSO, gbb, Lcm, xureba     |
|           48 |     1625 | 2024-04-17 | Fluxo         | L   | 0.841      | -            | -                | -                | -         |    -6.45 | ALLE, CSO, gbb, Lcm, xureba     |
|           47 |     1660 | 2024-04-16 | paiN Academy  | W   | 0.835      | -            | -                | -                | -         |     1.73 | ALLE, CSO, gbb, Lcm, xureba     |
|           46 |     1729 | 2024-04-12 | ODDIK         | L   | 0.806      | -            | -                | -                | -         |   -11.98 | ALLE, CSO, gbb, Lcm, xureba     |
|           45 |     1846 | 2024-04-09 | Imperial      | L   | 0.787      | -            | -                | -                | -         |    -0.68 | ALLE, CSO, gbb, Lcm, xureba     |
|           44 |     1851 | 2024-04-09 | Imperial      | L   | 0.787      | -            | -                | -                | -         |    -0.68 | ALLE, CSO, gbb, Lcm, xureba     |
|           43 |     1887 | 2024-04-08 | LA RUGONETA   | W   | 0.779      | -            | -                | -                | -         |     3.99 | ALLE, CSO, gbb, Lcm, xureba     |
|           42 |     1926 | 2024-04-06 | Fluxo         | L   | 0.767      | -            | -                | -                | -         |    -6.74 | ALLE, CSO, gbb, Lcm, xureba     |
|           41 |     1968 | 2024-04-04 | MIBR          | L   | 0.755      | -            | -                | -                | -         |    -0.61 | ALLE, CSO, gbb, Lcm, xureba     |
|           40 |     1972 | 2024-04-04 | MIBR          | L   | 0.754      | -            | -                | -                | -         |    -0.62 | ALLE, CSO, gbb, Lcm, xureba     |
|           39 |     2271 | 2024-03-20 | ex-2GAME      | L   | 0.654      | -            | -                | -                | -         |   -14.75 | ALLE, CSO, gbb, Lcm, xureba     |
|           38 |     2272 | 2024-03-20 | ex-2GAME      | W   | 0.654      | -            | -                | -                | -         |     5.82 | ALLE, CSO, gbb, Lcm, xureba     |
|           37 |     2391 | 2024-03-14 | RED Canids    | W   | 0.614      | 0.435        | 0.112 (0.030)    | 0.756 (0.202)    | -         |    14.39 | bnc, CSO, gbb, Lcm, xureba      |
|           36 |     2429 | 2024-03-13 | Fluxo         | W   | 0.606      | 0.435        | 0.064 (0.017)    | -                | -         |    13.66 | bnc, CSO, gbb, Lcm, xureba      |
|           35 |     2455 | 2024-03-12 | adalYamigos   | W   | 0.601      | -            | -                | -                | -         |     6.46 | bnc, CSO, gbb, Lcm, xureba      |
|           34 |     2458 | 2024-03-12 | FURIA Academy | L   | 0.600      | -            | -                | -                | -         |   -16.19 | bnc, CSO, gbb, Lcm, xureba      |
|           33 |     2480 | 2024-03-11 | W7M           | W   | 0.593      | -            | -                | -                | -         |     7.93 | bnc, CSO, gbb, Lcm, xureba      |
|           32 |     2502 | 2024-03-10 | ODDIK         | L   | 0.587      | -            | -                | -                | -         |    -7.33 | bnc, CSO, gbb, Lcm, xureba      |
|           31 |     2520 | 2024-03-09 | VELOX         | W   | 0.580      | -            | -                | -                | -         |     1.17 | bnc, CSO, gbb, Lcm, xureba      |
|           30 |     2575 | 2024-03-07 | W7M           | L   | 0.567      | -            | -                | -                | -         |   -10.59 | bnc, CSO, gbb, Lcm, xureba      |
|           29 |     2591 | 2024-03-06 | Fluxo         | W   | 0.562      | 0.450        | 0.064 (0.016)    | -                | -         |    12.49 | bnc, CSO, gbb, Lcm, xureba      |
|           28 |     2593 | 2024-03-06 | Fluxo         | L   | 0.561      | -            | -                | -                | -         |    -5.21 | bnc, CSO, gbb, Lcm, xureba      |
|           27 |     2636 | 2024-03-05 | Sharks        | L   | 0.554      | -            | -                | -                | -         |    -6.15 | bnc, CSO, gbb, Lcm, xureba      |
|           26 |     2640 | 2024-03-05 | Sharks        | L   | 0.553      | -            | -                | -                | -         |    -6.43 | bnc, CSO, gbb, Lcm, xureba      |
|           25 |     2895 | 2024-02-21 | Case          | L   | 0.469      | -            | -                | -                | -         |    -7.66 | bnc, CSO, gbb, Lcm, xureba      |
|           24 |     2896 | 2024-02-21 | Case          | W   | 0.468      | -            | -                | -                | -         |     7.25 | bnc, CSO, gbb, Lcm, xureba      |
|           23 |     2908 | 2024-02-21 | Fluxo         | L   | 0.466      | -            | -                | -                | -         |    -5.21 | bnc, CSO, gbb, Lcm, xureba      |
|           22 |     2930 | 2024-02-20 | 9z            | L   | 0.462      | -            | -                | -                | -         |    -1.30 | bnc, CSO, gbb, Lcm, xureba      |
|           21 |     2931 | 2024-02-20 | Flamengo      | W   | 0.461      | -            | -                | -                | -         |     1.54 | bnc, CSO, gbb, Lcm, xureba      |
|           20 |     2933 | 2024-02-20 | Fluxo         | W   | 0.461      | -            | -                | -                | -         |     9.60 | bnc, CSO, gbb, Lcm, xureba      |
|           19 |     2961 | 2024-02-19 | Sharks        | L   | 0.453      | -            | -                | -                | -         |    -5.55 | bnc, CSO, gbb, Lcm, xureba      |
|           18 |     2978 | 2024-02-18 | adalYamigos   | W   | 0.448      | -            | -                | -                | -         |     3.40 | bnc, CSO, gbb, Lcm, xureba      |
|           17 |     3000 | 2024-02-17 | Case          | L   | 0.442      | -            | -                | -                | -         |    -6.88 | bnc, CSO, gbb, Lcm, xureba      |
|           16 |     3013 | 2024-02-17 | inSanitY      | W   | 0.439      | -            | -                | -                | -         |     0.78 | bnc, CSO, gbb, Lcm, xureba      |
|           15 |     3030 | 2024-02-16 | W7M           | W   | 0.434      | -            | -                | -                | -         |     5.56 | bnc, CSO, gbb, Lcm, xureba      |
|           14 |     3061 | 2024-02-15 | Imperial      | L   | 0.427      | -            | -                | -                | -         |    -0.38 | bnc, CSO, gbb, Lcm, xureba      |
|           13 |     3089 | 2024-02-14 | Galorys       | W   | 0.421      | -            | -                | -                | -         |     5.90 | bnc, CSO, gbb, Lcm, xureba      |
|           12 |     3098 | 2024-02-14 | Corinthians   | W   | 0.420      | -            | -                | -                | -         |     3.10 | bnc, CSO, gbb, Lcm, xureba      |
|           11 |     3126 | 2024-02-13 | adalYamigos   | L   | 0.415      | -            | -                | -                | -         |   -10.17 | bnc, CSO, gbb, Lcm, xureba      |
|           10 |     3130 | 2024-02-13 | adalYamigos   | L   | 0.415      | -            | -                | -                | -         |   -10.42 | bnc, CSO, gbb, Lcm, xureba      |
|            9 |     3135 | 2024-02-13 | Imperial      | L   | 0.414      | -            | -                | -                | -         |    -0.38 | bnc, CSO, gbb, Lcm, xureba      |
|            8 |     3147 | 2024-02-12 | Sharks        | L   | 0.408      | -            | -                | -                | -         |    -4.85 | bnc, CSO, gbb, Lcm, xureba      |
|            7 |     3876 | 2024-01-13 | ODDIK         | L   | 0.208      | -            | -                | -                | -         |    -2.79 | CSO, gbb, Lcm, nolkz, xureba    |
|            6 |     3962 | 2024-01-11 | KRÜ           | L   | 0.194      | -            | -                | -                | -         |    -4.00 | CSO, gbb, Lcm, nolkz, xureba    |
|            5 |     4077 | 2023-12-23 | Case          | L   | 0.066      | -            | -                | -                | -         |    -1.70 | CSO, gbb, Lcm, nolkz, xureba    |
|            4 |     4080 | 2023-12-21 | ODDIK         | L   | 0.054      | -            | -                | -                | -         |    -0.74 | CSO, gbb, Lcm, nolkz, xureba    |
|            3 |     4084 | 2023-12-20 | Flamengo      | W   | 0.048      | -            | -                | -                | -         |     0.14 | CSO, gbb, Lcm, nolkz, xureba    |
|            2 |     4102 | 2023-12-18 | ODDIK         | W   | 0.035      | -            | -                | -                | -         |     0.62 | CSO, gbb, Lcm, nolkz, xureba    |
|            1 |     4154 | 2023-12-16 | WINDINGO      | L   | 0.021      | -            | -                | -                | -         |    -0.57 | CSO, gbb, Lcm, nolkz, xureba    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,591.41)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,200.00      | $1,200.00       |
| 2024-03-14 |      0.614 | $25,000.00     | $15,356.44      |
| 2023-12-18 |      0.032 | $1,080.00      | $34.97          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
