### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, FL4MUS, khaN, riskyb0b, Xant3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [33]( ../standings_europe.md)<br />
Final Rank Value:  1010.8<br />
<br />
Final Rank Value (1010.8) = Starting Rank Value (956.5) + Head To Head Adjustments (54.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.266[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.5
- 400 + ( ( 0.288 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 956.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       11 | 2024-04-22 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.054 (0.027)    | 0.970 (0.485)    | 0 (0.000) |    12.78 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           27 |       27 | 2024-04-21 | 1WIN              | W   | 1.000      | 0.435        | -                | 0.275 (0.119)    | 0 (0.000) |     4.93 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           26 |       60 | 2024-04-20 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -5.14 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           25 |       95 | 2024-04-19 | Sangal            | W   | 1.000      | 0.500        | -                | 0.685 (0.343)    | 0 (0.000) |     8.37 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           24 |      141 | 2024-04-18 | Secret            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.76 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           23 |      183 | 2024-04-17 | Alliance          | W   | 1.000      | 0.500        | 0.020 (0.010)    | 0.855 (0.427)    | 0 (0.000) |     8.69 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           22 |      374 | 2024-04-10 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -7.50 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           21 |      423 | 2024-04-09 | Steel Helmet      | W   | 1.000      | 0.624        | 0.021 (0.013)    | -                | 1 (1.000) |     4.55 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           20 |      452 | 2024-04-08 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           19 |      644 | 2024-04-01 | Zero Tenacity     | W   | 1.000      | 0.384        | -                | 0.805 (0.309)    | 0 (0.000) |     8.98 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           18 |      777 | 2024-03-22 | Sashi             | L   | 0.993      | -            | -                | -                | -         |   -18.75 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           17 |     1013 | 2024-03-12 | Nexus             | L   | 0.927      | -            | -                | -                | -         |   -20.06 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           16 |     1040 | 2024-03-11 | Sashi             | W   | 0.919      | 0.372        | 0.064 (0.022)    | 1.000 (0.342)    | 0 (0.000) |     9.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           15 |     1057 | 2024-03-10 | Endpoint          | W   | 0.913      | 0.372        | 0.025 (0.009)    | 0.488 (0.166)    | 0 (0.000) |     7.53 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           14 |     1129 | 2024-03-07 | Zero Tenacity     | W   | 0.893      | 0.372        | -                | 0.805 (0.268)    | 0 (0.000) |     7.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           13 |     1191 | 2024-03-05 | KOI               | L   | 0.880      | -            | -                | -                | -         |   -11.57 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           12 |     1199 | 2024-03-05 | GUN5              | W   | 0.880      | -            | -                | -                | -         |     3.19 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           11 |     1714 | 2024-02-10 | Sashi             | W   | 0.721      | 0.143        | 0.064 (0.007)    | 1.000 (0.103)    | -         |     9.52 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           10 |     1730 | 2024-02-09 | AMKAL             | W   | 0.713      | 0.143        | 0.051 (0.005)    | -                | -         |    13.49 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            9 |     1745 | 2024-02-08 | Sashi             | W   | 0.707      | 0.143        | 0.064 (0.007)    | 1.000 (0.101)    | -         |     9.25 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            8 |     1750 | 2024-02-08 | BetBoom           | W   | 0.706      | 0.143        | 0.457 (0.046)    | -                | -         |    18.82 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            7 |     1917 | 2024-01-30 | RUBY              | W   | 0.647      | -            | -                | -                | -         |     5.93 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            6 |     1920 | 2024-01-30 | ex-Sprout         | W   | 0.647      | -            | -                | -                | -         |     3.06 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            5 |     1924 | 2024-01-30 | 9 Pandas          | W   | 0.646      | 0.143        | 0.083 (0.008)    | -                | -         |    14.85 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            4 |     2339 | 2024-01-16 | samaloyod         | L   | 0.554      | -            | -                | -                | -         |   -15.90 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            3 |     2595 | 2024-01-09 | brazylijski luz   | L   | 0.506      | -            | -                | -                | -         |   -11.02 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            2 |     2879 | 2023-12-06 | Enterprise        | L   | 0.281      | -            | -                | -                | -         |    -4.99 | 1eeR, almazer, FL4MUS, khaN, riskyb0b |
|            1 |     2895 | 2023-12-06 | MOUZ NXT          | L   | 0.279      | -            | -                | -                | -         |    -4.99 | 1eeR, almazer, FL4MUS, khaN, riskyb0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,300.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-25 |      1.000 | $3,300.00      | $3,300.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
