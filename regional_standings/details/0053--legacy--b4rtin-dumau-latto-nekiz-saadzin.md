### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, saadzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  1006.6<br />
<br />
Final Rank Value (1006.6) = Starting Rank Value (954.1) + Head To Head Adjustments (52.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.358[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 954.1
- 400 + ( ( 0.285 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 954.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      162 | 2024-05-22 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -18.62 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           29 |      188 | 2024-05-21 | Carpe Diem       | W   | 1.000      | 0.384        | -                | 0.369 (0.142)    | 0 (0.000) |     4.63 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           28 |      318 | 2024-05-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -20.17 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           27 |     1022 | 2024-04-19 | M80              | L   | 0.934      | -            | -                | -                | -         |   -10.15 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           26 |     1062 | 2024-04-18 | Elevate          | W   | 0.928      | 0.143        | 0.013 (0.002)    | 0.528 (0.070)    | 0 (0.000) |     8.64 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           25 |     1069 | 2024-04-18 | Liquid           | L   | 0.927      | -            | -                | -                | -         |    -1.02 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           24 |     1779 | 2024-03-20 | TheMongolz       | L   | 0.731      | -            | -                | -                | -         |    -2.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           23 |     1794 | 2024-03-19 | Apeks            | W   | 0.725      | 0.143        | 0.083 (0.009)    | 0.495 (0.051)    | 1 (0.725) |    16.00 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           22 |     1805 | 2024-03-18 | GamerLegion      | L   | 0.718      | -            | -                | -                | -         |    -6.76 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           21 |     1818 | 2024-03-17 | Cloud9           | L   | 0.713      | -            | -                | -                | -         |    -2.26 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           20 |     1828 | 2024-03-17 | FURIA            | W   | 0.712      | 0.143        | 0.138 (0.014)    | 0.402 (0.041)    | 1 (0.712) |    19.52 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           19 |     2161 | 2024-03-04 | M80              | W   | 0.626      | 0.143        | 0.135 (0.012)    | 0.789 (0.071)    | 1 (0.626) |    15.70 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           18 |     2174 | 2024-03-03 | MIBR             | W   | 0.620      | 0.143        | 0.308 (0.027)    | 0.805 (0.071)    | 1 (0.620) |    18.77 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           17 |     2204 | 2024-03-02 | Nouns            | W   | 0.613      | 0.143        | 0.030 (0.003)    | 0.601 (0.053)    | 1 (0.613) |     7.88 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           16 |     2226 | 2024-03-01 | paiN             | L   | 0.607      | -            | -                | -                | -         |    -0.64 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           15 |     2994 | 2024-01-22 | Sharks           | L   | 0.347      | -            | -                | -                | -         |    -6.11 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           14 |     3056 | 2024-01-20 | RED Canids       | W   | 0.334      | 0.143        | 0.077 (0.004)    | 0.840 (0.040)    | 0 (0.000) |     5.81 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           13 |     3106 | 2024-01-19 | paiN             | W   | 0.327      | 0.143        | 0.464 (0.022)    | 0.829 (0.039)    | 0 (0.000) |    10.05 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     3112 | 2024-01-19 | 9z               | W   | 0.327      | 0.143        | 0.107 (0.005)    | -                | 0 (0.000) |     8.93 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     3261 | 2024-01-16 | RED Canids       | L   | 0.308      | -            | -                | -                | -         |    -4.13 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     3272 | 2024-01-16 | W7M              | W   | 0.307      | -            | -                | -                | -         |     2.63 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     3274 | 2024-01-16 | Imperial         | W   | 0.307      | 0.143        | 0.373 (0.016)    | 0.889 (0.039)    | -         |     9.34 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3313 | 2024-01-15 | Galorys          | W   | 0.301      | -            | -                | -                | -         |     3.55 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3354 | 2024-01-14 | RED Canids       | L   | 0.293      | -            | -                | -                | -         |    -3.87 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     3373 | 2024-01-13 | inSanitY         | W   | 0.287      | -            | -                | -                | -         |     0.41 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     3503 | 2024-01-09 | Flamengo         | L   | 0.261      | -            | -                | -                | -         |    -7.54 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     3507 | 2024-01-09 | W7M              | W   | 0.261      | -            | -                | -                | -         |     2.28 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     3517 | 2024-01-09 | blockkstar       | W   | 0.260      | -            | -                | -                | -         |     0.60 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     3521 | 2024-01-09 | adalYamigos      | W   | 0.259      | -            | -                | -                | -         |     1.22 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     3917 | 2023-12-02 | RED Canids       | L   | 0.006      | -            | -                | -                | -         |    -0.08 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,324.46)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
