### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: Altekz, br0, Kristou, MistR, Patti<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  843.0<br />
<br />
Final Rank Value (843.0) = Starting Rank Value (901.2) + Head To Head Adjustments (-58.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.165[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 901.2
- 400 + ( ( 0.245 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 901.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      153 | 2023-02-05 | undefined      | L   | 1.000      | -            | -                | -                | -         |   -19.73 | Altekz, br0, Kristou, MistR, Patti    |
|           42 |      198 | 2023-02-03 | FTW            | W   | 1.000      | 0.143        | 0.026 (0.004)    | -                | 0 (0.000) |    14.29 | Altekz, br0, Kristou, MistR, Patti    |
|           41 |      240 | 2023-02-01 | GTZ            | L   | 1.000      | -            | -                | -                | -         |   -21.11 | Altekz, br0, Kristou, MistR, Patti    |
|           40 |      291 | 2023-01-30 | GTZ            | L   | 1.000      | -            | -                | -                | -         |   -22.75 | Altekz, br0, Kristou, MistR, Patti    |
|           39 |      476 | 2023-01-24 | ECSTATIC       | L   | 1.000      | -            | -                | -                | -         |   -16.38 | Altekz, br0, Kristou, MistR, Patti    |
|           38 |      496 | 2023-01-23 | 777            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.08 | Altekz, br0, Kristou, MistR, Patti    |
|           37 |      505 | 2023-01-23 | Enhanced       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.21 | Altekz, br0, Kristou, MistR, Patti    |
|           36 |      539 | 2023-01-22 | Monte          | L   | 1.000      | -            | -                | -                | -         |    -9.97 | Altekz, br0, Kristou, MistR, Patti    |
|           35 |      601 | 2023-01-19 | los kogutos    | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.364 (0.135)    | 0 (0.000) |    11.37 | Altekz, br0, Kristou, MistR, Patti    |
|           34 |      622 | 2023-01-18 | GODSENT        | L   | 1.000      | -            | -                | -                | -         |   -19.77 | Altekz, br0, Kristou, MistR, Patti    |
|           33 |      647 | 2023-01-17 | Young Ninjas   | L   | 1.000      | -            | -                | -                | -         |   -13.87 | Altekz, br0, Kristou, MistR, Patti    |
|           32 |      680 | 2023-01-15 | Anonymo        | W   | 1.000      | 0.371        | -                | 0.388 (0.144)    | 0 (0.000) |     5.82 | Altekz, br0, Kristou, MistR, Patti    |
|           31 |      723 | 2023-01-11 | Flames Ascent  | W   | 0.984      | -            | -                | -                | 0 (0.000) |     4.89 | Altekz, br0, Kristou, MistR, Patti    |
|           30 |      802 | 2022-12-17 | MASONIC        | L   | 0.821      | -            | -                | -                | -         |   -14.89 | Altekz, br0, jarko, Kristou, Patti    |
|           29 |      908 | 2022-12-13 | Tricked        | W   | 0.794      | 0.143        | 0.034 (0.004)    | 0.954 (0.108)    | -         |    14.14 | Altekz, br0, jarko, Kristou, Patti    |
|           28 |     1172 | 2022-12-04 | MASONIC        | W   | 0.733      | 0.336        | 0.021 (0.005)    | 0.752 (0.185)    | -         |    11.13 | Altekz, br0, jarko, Kristou, Patti    |
|           27 |     1191 | 2022-12-04 | Sashi          | W   | 0.731      | -            | -                | -                | -         |     4.36 | Altekz, br0, jarko, Kristou, Patti    |
|           26 |     1227 | 2022-12-03 | CEPTER         | W   | 0.725      | -            | -                | -                | -         |     2.66 | Altekz, br0, jarko, Kristou, Patti    |
|           25 |     1311 | 2022-11-30 | sYnck          | L   | 0.705      | -            | -                | -                | -         |   -15.51 | Altekz, br0, jarko, Kristou, Patti    |
|           24 |     1332 | 2022-11-29 | LDLC           | W   | 0.700      | -            | -                | -                | -         |     6.22 | Altekz, br0, jarko, Kristou, Patti    |
|           23 |     1361 | 2022-11-28 | Apeks          | L   | 0.692      | -            | -                | -                | -         |   -10.23 | Altekz, br0, jarko, Kristou, Patti    |
|           22 |     1365 | 2022-11-28 | PGE Turow      | W   | 0.691      | -            | -                | -                | -         |     2.08 | Altekz, br0, jarko, Kristou, Patti    |
|           21 |     1794 | 2022-10-30 | OG Academy     | L   | 0.500      | -            | -                | -                | -         |   -11.53 | Altekz, br0, jarko, Kristou, Patti    |
|           20 |     1811 | 2022-10-29 | Young Ninjas   | L   | 0.492      | -            | -                | -                | -         |    -7.39 | Altekz, br0, jarko, Kristou, Patti    |
|           19 |     1827 | 2022-10-28 | Young Ninjas   | W   | 0.485      | 0.500        | 0.076 (0.018)    | 0.694 (0.169)    | -         |     8.01 | Altekz, br0, jarko, Kristou, Patti    |
|           18 |     1848 | 2022-10-27 | BIG Academy    | W   | 0.479      | 0.500        | 0.020 (0.005)    | 0.434 (0.104)    | -         |     9.05 | Altekz, br0, jarko, Kristou, Patti    |
|           17 |     1858 | 2022-10-26 | ENCE Academy   | W   | 0.474      | -            | -                | -                | -         |     4.14 | Altekz, br0, jarko, Kristou, Patti    |
|           16 |     1865 | 2022-10-26 | Spirit Academy | L   | 0.473      | -            | -                | -                | -         |    -8.55 | Altekz, br0, jarko, Kristou, Patti    |
|           15 |     1883 | 2022-10-25 | ENCE Academy   | W   | 0.467      | -            | -                | -                | -         |     4.01 | Altekz, br0, jarko, Kristou, Patti    |
|           14 |     1911 | 2022-10-24 | MIBR Academy   | W   | 0.459      | -            | -                | -                | -         |     1.62 | Altekz, br0, jarko, Kristou, Patti    |
|           13 |     2085 | 2022-10-17 | Young Ninjas   | L   | 0.413      | -            | -                | -                | -         |    -6.10 | Altekz, br0, jarko, Kristou, Patti    |
|           12 |     2105 | 2022-10-16 | PROSPECTS      | W   | 0.407      | 0.500        | 0.032 (0.007)    | 0.689 (0.140)    | -         |     6.78 | Altekz, br0, jarko, Kristou, Patti    |
|           11 |     2127 | 2022-10-15 | Tricked        | W   | 0.402      | 0.314        | 0.034 (0.004)    | 0.954 (0.121)    | 1 (0.402) |     7.74 | Altekz, br0, jarko, Kristou, Patti    |
|           10 |     2136 | 2022-10-15 | BIG Academy    | W   | 0.399      | 0.500        | 0.020 (0.004)    | 0.434 (0.087)    | -         |     8.35 | Altekz, br0, jarko, Kristou, Patti    |
|            9 |     2140 | 2022-10-15 | CEPTER         | W   | 0.399      | -            | -                | -                | 1 (0.399) |     1.49 | Altekz, br0, jarko, Kristou, Patti    |
|            8 |     2156 | 2022-10-15 | Tricked        | W   | 0.398      | 0.314        | 0.034 (0.004)    | 0.954 (0.119)    | 1 (0.398) |     8.02 | Altekz, br0, jarko, Kristou, Patti    |
|            7 |     2169 | 2022-10-14 | Flames Ascent  | W   | 0.394      | -            | -                | -                | 1 (0.394) |     2.51 | Altekz, br0, jarko, Kristou, Patti    |
|            6 |     2191 | 2022-10-14 | Spirit Academy | L   | 0.392      | -            | -                | -                | -         |    -7.02 | Altekz, br0, jarko, Kristou, Patti    |
|            5 |     2218 | 2022-10-13 | MIBR Academy   | W   | 0.386      | -            | -                | -                | -         |     1.50 | Altekz, br0, jarko, Kristou, Patti    |
|            4 |     2248 | 2022-10-12 | PROSPECTS      | L   | 0.380      | -            | -                | -                | -         |    -4.88 | Altekz, br0, jarko, Kristou, Patti    |
|            3 |     2515 | 2022-09-29 | PROSPECTS      | L   | 0.293      | -            | -                | -                | -         |    -3.96 | Altekz, cajunb, jarko, Kristou, Patti |
|            2 |     2548 | 2022-09-28 | Illuminar      | L   | 0.286      | -            | -                | -                | -         |    -3.21 | Altekz, cajunb, jarko, Kristou, Patti |
|            1 |     2555 | 2022-09-28 | PROSPECTS      | W   | 0.286      | -            | -                | -                | -         |     5.17 | Altekz, cajunb, jarko, Kristou, Patti |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,121.84)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-25 |      1.000 | $1,000.00      | $1,000.00       |
| 2022-12-17 |      0.821 | $1,416.00      | $1,162.08       |
| 2022-12-04 |      0.733 | $7,000.00      | $5,131.11       |
| 2022-11-20 |      0.640 | $1,500.00      | $960.33         |
| 2022-10-15 |      0.402 | $4,650.00      | $1,868.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
