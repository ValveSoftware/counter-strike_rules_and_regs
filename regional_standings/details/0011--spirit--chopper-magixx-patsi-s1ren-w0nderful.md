### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, magixx, Patsi, s1ren, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1341.4<br />
<br />
Final Rank Value (1341.4) = Starting Rank Value (1368.7) + Head To Head Adjustments (-27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.597[<sup>1</sup>](#table2)
- Bounty Collected: 0.466[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 0.646[<sup>2</sup>](#table1)

The average of these factors is 0.473<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1368.7
- 400 + ( ( 0.473 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1368.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      117 | 2023-02-06 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.88 | chopper, magixx, Patsi, s1ren, w0nderful |
|           31 |      146 | 2023-02-05 | BIG               | W   | 1.000      | 1.000        | 0.124 (0.124)    | 0.520 (0.520)    | 1 (1.000) |    16.35 | chopper, magixx, Patsi, s1ren, w0nderful |
|           30 |      172 | 2023-02-04 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -3.18 | chopper, magixx, Patsi, s1ren, w0nderful |
|           29 |      183 | 2023-02-03 | Sprout            | W   | 1.000      | 0.143        | 0.067 (0.010)    | 0.446 (0.064)    | 1 (1.000) |     7.04 | chopper, magixx, Patsi, s1ren, w0nderful |
|           28 |      238 | 2023-02-01 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -17.10 | chopper, magixx, Patsi, s1ren, w0nderful |
|           27 |      248 | 2023-02-01 | Grayhound         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.28 | chopper, magixx, Patsi, s1ren, w0nderful |
|           26 |      754 | 2022-12-19 | SAW               | L   | 0.833      | -            | -                | -                | -         |   -19.93 | chopper, magixx, Patsi, s1ren, w0nderful |
|           25 |      888 | 2022-12-14 | SAW               | L   | 0.800      | -            | -                | -                | -         |   -20.14 | chopper, magixx, Patsi, s1ren, w0nderful |
|           24 |      912 | 2022-12-13 | FTW               | W   | 0.793      | 0.435        | 0.026 (0.009)    | 0.300 (0.103)    | -         |     1.59 | chopper, magixx, Patsi, s1ren, w0nderful |
|           23 |      927 | 2022-12-12 | Sprout            | W   | 0.787      | 0.435        | 0.067 (0.023)    | 0.446 (0.153)    | -         |     5.30 | chopper, magixx, Patsi, s1ren, w0nderful |
|           22 |     1300 | 2022-11-30 | HEET              | W   | 0.707      | 0.435        | 0.028 (0.009)    | 0.250 (0.077)    | -         |     2.08 | chopper, magixx, Patsi, s1ren, w0nderful |
|           21 |     1656 | 2022-11-11 | Heroic            | L   | 0.580      | -            | -                | -                | -         |    -1.60 | chopper, magixx, Patsi, s1ren, w0nderful |
|           20 |     1673 | 2022-11-08 | Liquid            | W   | 0.561      | 1.000        | 0.760 (0.427)    | 0.450 (0.253)    | 1 (0.561) |    16.22 | chopper, magixx, Patsi, s1ren, w0nderful |
|           19 |     1683 | 2022-11-07 | Sprout            | W   | 0.554      | 1.000        | 0.067 (0.037)    | 0.446 (0.247)    | 1 (0.554) |     4.00 | chopper, magixx, Patsi, s1ren, w0nderful |
|           18 |     1698 | 2022-11-06 | Outsiders         | L   | 0.546      | -            | -                | -                | -         |    -3.21 | chopper, magixx, Patsi, s1ren, w0nderful |
|           17 |     1711 | 2022-11-05 | FURIA             | L   | 0.541      | -            | -                | -                | -         |   -10.24 | chopper, magixx, Patsi, s1ren, w0nderful |
|           16 |     1725 | 2022-11-05 | Bad News Eagles   | W   | 0.539      | 1.000        | 0.066 (0.036)    | 0.375 (0.202)    | 1 (0.539) |     3.93 | chopper, magixx, Patsi, s1ren, w0nderful |
|           15 |     1953 | 2022-10-22 | Tricked           | L   | 0.447      | -            | -                | -                | -         |   -12.43 | chopper, magixx, Patsi, s1ren, w0nderful |
|           14 |     1984 | 2022-10-21 | 500               | W   | 0.440      | 0.435        | 0.085 (0.016)    | 0.760 (0.145)    | -         |     1.79 | chopper, magixx, Patsi, s1ren, w0nderful |
|           13 |     2101 | 2022-10-16 | paiN              | W   | 0.407      | 0.548        | 0.101 (0.023)    | 0.402 (0.090)    | 1 (0.407) |     2.13 | chopper, magixx, Patsi, s1ren, w0nderful |
|           12 |     2108 | 2022-10-16 | 9z                | W   | 0.406      | -            | -                | -                | 1 (0.406) |     0.91 | chopper, magixx, Patsi, s1ren, w0nderful |
|           11 |     2141 | 2022-10-15 | WINDINGO          | W   | 0.399      | -            | -                | -                | 1 (0.399) |     0.23 | chopper, magixx, Patsi, s1ren, w0nderful |
|           10 |     2311 | 2022-10-09 | Cloud9            | W   | 0.359      | -            | -                | -                | 1 (0.359) |     4.81 | chopper, magixx, Patsi, s1ren, w0nderful |
|            9 |     2348 | 2022-10-07 | Bad News Eagles   | W   | 0.345      | -            | -                | -                | -         |     2.65 | chopper, magixx, Patsi, s1ren, w0nderful |
|            8 |     2376 | 2022-10-06 | GamerLegion       | W   | 0.337      | -            | -                | -                | -         |     2.63 | chopper, magixx, Patsi, s1ren, w0nderful |
|            7 |     2397 | 2022-10-05 | Sprout            | L   | 0.332      | -            | -                | -                | -         |    -7.88 | chopper, magixx, Patsi, s1ren, w0nderful |
|            6 |     2428 | 2022-10-04 | 1WIN              | W   | 0.325      | -            | -                | -                | -         |     0.60 | chopper, magixx, Patsi, s1ren, w0nderful |
|            5 |     3286 | 2022-09-04 | Vitality          | L   | 0.127      | -            | -                | -                | -         |    -0.86 | chopper, magixx, Patsi, s1ren, w0nderful |
|            4 |     3328 | 2022-09-03 | fnatic            | L   | 0.119      | -            | -                | -                | -         |    -1.28 | chopper, magixx, Patsi, s1ren, w0nderful |
|            3 |     3360 | 2022-09-02 | Ninjas in Pyjamas | W   | 0.112      | -            | -                | -                | -         |     0.13 | chopper, magixx, Patsi, s1ren, w0nderful |
|            2 |     3395 | 2022-09-01 | Endpoint          | W   | 0.105      | -            | -                | -                | -         |     0.22 | chopper, magixx, Patsi, s1ren, w0nderful |
|            1 |     3419 | 2022-08-31 | Natus Vincere     | L   | 0.098      | -            | -                | -                | -         |    -0.43 | chopper, magixx, Patsi, s1ren, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($99,920.34)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $16,000.00     | $16,000.00      |
| 2022-12-19 |      0.833 | $11,500.00     | $9,580.86       |
| 2022-11-13 |      0.594 | $45,000.00     | $26,710.82      |
| 2022-10-24 |      0.460 | $2,000.00      | $920.55         |
| 2022-10-16 |      0.407 | $100,000.00    | $40,741.37      |
| 2022-10-02 |      0.314 | $19,000.00     | $5,966.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
