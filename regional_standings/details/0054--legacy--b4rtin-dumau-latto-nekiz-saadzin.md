### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, saadzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1074.3<br />
<br />
Final Rank Value (1074.3) = Starting Rank Value (1018.6) + Head To Head Adjustments (55.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.309[<sup>2</sup>](#table1)

The average of these factors is 0.310<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.6
- 400 + ( ( 0.310 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1018.6


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
|           37 |       25 | 2024-06-09 | Party Astronauts | W   | 1.000      | 0.384        | 0.048 (0.019)    | 0.677 (0.260)    | 0 (0.000) |    14.36 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           36 |       94 | 2024-06-08 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.00 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           35 |      152 | 2024-06-07 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -16.67 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           34 |      160 | 2024-06-07 | Elevate          | W   | 1.000      | 0.143        | -                | 0.531 (0.076)    | 0 (0.000) |    11.86 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           33 |      204 | 2024-06-06 | Mythic           | W   | 1.000      | 0.384        | -                | 0.391 (0.150)    | 0 (0.000) |     8.08 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           32 |      209 | 2024-06-06 | OMiT             | W   | 1.000      | 0.367        | -                | 0.268 (0.098)    | 0 (0.000) |     5.33 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           31 |      273 | 2024-06-05 | Vibe             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.86 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           30 |      323 | 2024-06-04 | E-Xolos LAZER    | W   | 1.000      | 0.367        | -                | 0.155 (0.057)    | -         |     3.90 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           29 |      662 | 2024-05-22 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -18.84 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           28 |      688 | 2024-05-21 | Carpe Diem       | W   | 1.000      | 0.384        | -                | 0.321 (0.123)    | -         |     5.67 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           27 |      818 | 2024-05-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -19.91 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           26 |     1522 | 2024-04-19 | M80              | L   | 0.855      | -            | -                | -                | -         |    -9.34 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           25 |     1562 | 2024-04-18 | Elevate          | W   | 0.849      | 0.143        | -                | 0.531 (0.064)    | -         |     7.60 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           24 |     1569 | 2024-04-18 | Liquid           | L   | 0.848      | -            | -                | -                | -         |    -1.06 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           23 |     2279 | 2024-03-20 | The MongolZ      | L   | 0.652      | -            | -                | -                | -         |    -0.24 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           22 |     2294 | 2024-03-19 | Apeks            | W   | 0.646      | 0.143        | 0.066 (0.006)    | -                | 1 (0.646) |    12.14 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           21 |     2305 | 2024-03-18 | GamerLegion      | L   | 0.638      | -            | -                | -                | -         |    -8.18 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           20 |     2318 | 2024-03-17 | Cloud9           | L   | 0.634      | -            | -                | -                | -         |    -3.08 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           19 |     2328 | 2024-03-17 | FURIA            | W   | 0.633      | 0.143        | 0.249 (0.023)    | 0.590 (0.053)    | 1 (0.633) |    19.10 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           18 |     2661 | 2024-03-04 | M80              | W   | 0.547      | 0.143        | 0.206 (0.016)    | 0.749 (0.059)    | 1 (0.547) |    13.43 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           17 |     2674 | 2024-03-03 | MIBR             | W   | 0.541      | 0.143        | 0.284 (0.022)    | 0.750 (0.058)    | 1 (0.541) |    16.13 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           16 |     2704 | 2024-03-02 | Nouns            | W   | 0.534      | 0.143        | 0.064 (0.005)    | -                | 1 (0.534) |     6.85 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           15 |     2726 | 2024-03-01 | paiN             | L   | 0.527      | -            | -                | -                | -         |    -0.75 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           14 |     3494 | 2024-01-22 | Sharks           | L   | 0.268      | -            | -                | -                | -         |    -4.87 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           13 |     3556 | 2024-01-20 | RED Canids       | W   | 0.254      | 0.143        | 0.112 (0.004)    | -                | -         |     4.43 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     3606 | 2024-01-19 | paiN             | W   | 0.248      | 0.143        | 0.437 (0.015)    | -                | -         |     7.53 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     3612 | 2024-01-19 | 9z               | W   | 0.247      | 0.143        | 0.194 (0.007)    | -                | -         |     6.74 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     3761 | 2024-01-16 | RED Canids       | L   | 0.229      | -            | -                | -                | -         |    -3.10 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     3772 | 2024-01-16 | W7M              | W   | 0.228      | -            | -                | -                | -         |     1.61 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3774 | 2024-01-16 | Imperial         | W   | 0.228      | 0.143        | 0.415 (0.014)    | -                | -         |     6.80 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     3813 | 2024-01-15 | Galorys          | W   | 0.222      | -            | -                | -                | -         |     2.17 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     3854 | 2024-01-14 | RED Canids       | L   | 0.214      | -            | -                | -                | -         |    -2.87 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     3873 | 2024-01-13 | inSanitY         | W   | 0.208      | -            | -                | -                | -         |     0.21 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     4003 | 2024-01-09 | Flamengo         | L   | 0.182      | -            | -                | -                | -         |    -5.39 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     4007 | 2024-01-09 | W7M              | W   | 0.181      | -            | -                | -                | -         |     1.30 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     4017 | 2024-01-09 | blockkstar       | W   | 0.181      | -            | -                | -                | -         |     0.30 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     4021 | 2024-01-09 | adalYamigos      | W   | 0.180      | -            | -                | -                | -         |     0.59 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,532.73)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
