### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  1924.3<br />
<br />
Final Rank Value (1924.3) = Starting Rank Value (1976.1) + Head To Head Adjustments (-51.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.768[<sup>2</sup>](#table1)
- Opponent Network: 0.549[<sup>2</sup>](#table1)
- LAN Wins: 0.993[<sup>2</sup>](#table1)

The average of these factors is 0.827<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1976.1
- 400 + ( ( 0.827 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1976.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       14 | 2024-05-05 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -27.84 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |       86 | 2024-05-02 | BIG               | W   | 1.000      | 0.889        | 0.454 (0.403)    | 0.510 (0.453)    | 1 (1.000) |     1.07 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      113 | 2024-05-01 | FlyQuest          | W   | 1.000      | 0.889        | -                | 0.705 (0.627)    | 1 (1.000) |     1.16 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      941 | 2024-03-31 | FaZe              | W   | 0.960      | 1.000        | 1.000 (0.960)    | 0.712 (0.683)    | 1 (0.960) |    15.26 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      947 | 2024-03-30 | G2                | W   | 0.954      | 1.000        | 0.841 (0.803)    | 0.607 (0.579)    | 1 (0.954) |    11.77 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      957 | 2024-03-29 | Eternal Fire      | W   | 0.946      | 1.000        | 0.397 (0.376)    | 0.579 (0.548)    | 1 (0.946) |     8.24 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1050 | 2024-03-24 | paiN              | W   | 0.913      | 1.000        | 0.786 (0.718)    | 0.869 (0.794)    | 1 (0.913) |     5.65 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1058 | 2024-03-23 | Cloud9            | L   | 0.907      | -            | -                | -                | -         |   -23.41 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1074 | 2024-03-22 | Spirit            | L   | 0.900      | -            | -                | -                | -         |   -17.53 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1092 | 2024-03-21 | G2                | W   | 0.894      | 1.000        | 0.841 (0.752)    | 0.607 (0.542)    | 1 (0.894) |    10.65 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1109 | 2024-03-21 | TheMongolz        | W   | 0.891      | 1.000        | 0.253 (0.226)    | 0.595 (0.530)    | 1 (0.891) |     1.56 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1881 | 2024-02-16 | BetBoom           | W   | 0.666      | -            | -                | -                | 1 (0.666) |     1.02 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     1916 | 2024-02-15 | Virtus.pro        | L   | 0.659      | -            | -                | -                | -         |   -16.10 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     1946 | 2024-02-14 | Enterprise        | W   | 0.654      | -            | -                | -                | 1 (0.654) |     0.10 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     1963 | 2024-02-14 | KOI               | W   | 0.651      | -            | -                | -                | -         |     0.13 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2060 | 2024-02-06 | Falcons           | L   | 0.599      | -            | -                | -                | -         |   -18.31 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2068 | 2024-02-05 | Eternal Fire      | W   | 0.594      | 1.000        | 0.397 (0.236)    | 0.579 (0.344)    | -         |     3.49 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2085 | 2024-02-04 | Apeks             | W   | 0.587      | 1.000        | -                | 0.667 (0.391)    | -         |     0.62 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     2111 | 2024-02-03 | Spirit            | L   | 0.580      | -            | -                | -                | -         |   -13.53 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     2254 | 2024-01-27 | G2                | W   | 0.532      | 0.581        | 0.841 (0.260)    | -                | -         |     5.59 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     2331 | 2024-01-23 | G2                | W   | 0.505      | 0.581        | 0.841 (0.247)    | -                | -         |     5.53 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     2357 | 2024-01-22 | Complexity        | W   | 0.499      | -            | -                | -                | -         |     1.57 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     2473 | 2024-01-19 | Virtus.pro        | W   | 0.480      | -            | -                | -                | -         |     3.26 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     2529 | 2024-01-18 | 9 Pandas          | W   | 0.473      | -            | -                | -                | -         |     0.12 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     2545 | 2024-01-18 | Gaimin Gladiators | W   | 0.472      | -            | -                | -                | -         |     0.42 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3015 | 2023-12-16 | Vitality          | L   | 0.252      | -            | -                | -                | -         |    -4.92 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3043 | 2023-12-15 | G2                | W   | 0.245      | -            | -                | -                | -         |     2.76 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3048 | 2023-12-14 | ENCE              | W   | 0.237      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3058 | 2023-12-13 | Vitality          | L   | 0.231      | -            | -                | -                | -         |    -4.57 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     3383 | 2023-11-24 | Complexity        | L   | 0.107      | -            | -                | -                | -         |    -3.02 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     3411 | 2023-11-23 | Ninjas in Pyjamas | W   | 0.098      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     3424 | 2023-11-22 | Cloud9            | L   | 0.092      | -            | -                | -                | -         |    -2.52 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($531,856.17)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      0.960 | $500,000.00    | $480,116.44     |
| 2024-02-11 |      0.633 | $24,000.00     | $15,195.36      |
| 2024-01-28 |      0.540 | $22,500.00     | $12,148.01      |
| 2023-12-17 |      0.259 | $85,000.00     | $22,007.09      |
| 2023-11-26 |      0.119 | $20,000.00     | $2,389.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
