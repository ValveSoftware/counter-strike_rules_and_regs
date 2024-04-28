### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  904.1<br />
<br />
Final Rank Value (904.1) = Starting Rank Value (852.9) + Head To Head Adjustments (51.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.401[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 852.9
- 400 + ( ( 0.221 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 852.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       46 | 2023-02-10 | Into the Breach      | W   | 1.000      | 0.435        | -                | 0.289 (0.125)    | 0 (0.000) |     8.11 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           31 |       89 | 2023-02-08 | FTW                  | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.300 (0.130)    | 0 (0.000) |    11.97 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           30 |      112 | 2023-02-07 | EYEBALLERS           | L   | 1.000      | -            | -                | -                | -         |   -14.32 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           29 |      331 | 2023-01-28 | Monte                | L   | 1.000      | -            | -                | -                | -         |    -9.85 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           28 |      335 | 2023-01-28 | Copenhagen Flames    | W   | 1.000      | 0.143        | 0.133 (0.019)    | 0.722 (0.103)    | 0 (0.000) |    21.88 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           27 |      346 | 2023-01-28 | SUN                  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.94 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           26 |      499 | 2023-01-23 | 500                  | L   | 1.000      | -            | -                | -                | -         |    -8.89 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           25 |      568 | 2023-01-20 | BIG Academy          | W   | 1.000      | 0.477        | 0.020 (0.010)    | 0.434 (0.207)    | 0 (0.000) |    18.85 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           24 |      592 | 2023-01-19 | Permitta             | L   | 1.000      | -            | -                | -                | -         |   -13.87 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           23 |     1039 | 2022-12-08 | Eternal Fire Academy | L   | 0.760      | -            | -                | -                | -         |   -20.89 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           22 |     1078 | 2022-12-07 | Monte                | L   | 0.753      | -            | -                | -                | -         |   -10.94 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           21 |     1121 | 2022-12-06 | Websterz             | W   | 0.746      | 0.371        | -                | 0.403 (0.112)    | 0 (0.000) |     9.38 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           20 |     1359 | 2022-11-28 | ARCRED               | W   | 0.692      | -            | -                | -                | 0 (0.000) |     5.74 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           19 |     1477 | 2022-11-24 | Coalesce             | W   | 0.666      | -            | -                | -                | 0 (0.000) |     6.05 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           18 |     1517 | 2022-11-22 | EC Brugge            | W   | 0.653      | -            | -                | -                | 0 (0.000) |     6.41 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           17 |     1531 | 2022-11-20 | Young Ninjas         | L   | 0.640      | -            | -                | -                | -         |    -8.39 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           16 |     1549 | 2022-11-19 | Young Ninjas         | W   | 0.633      | 0.500        | 0.076 (0.024)    | 0.694 (0.220)    | 0 (0.000) |    11.79 | ArtFr0st, baaaaZzz, donk, S0tF1k, zont1x |
|           15 |     1567 | 2022-11-18 | MOUZ NXT             | W   | 0.626      | 0.500        | 0.015 (0.005)    | 0.537 (0.168)    | -         |     7.82 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           14 |     1817 | 2022-10-28 | MIBR Academy         | W   | 0.487      | -            | -                | -                | -         |     1.99 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           13 |     1852 | 2022-10-27 | ENCE Academy         | W   | 0.478      | -            | -                | -                | -         |     4.80 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           12 |     1865 | 2022-10-26 | Astralis Talent      | W   | 0.473      | 0.500        | 0.021 (0.005)    | 0.522 (0.123)    | -         |     8.55 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           11 |     1894 | 2022-10-25 | Young Ninjas         | W   | 0.465      | 0.500        | 0.076 (0.018)    | 0.694 (0.162)    | -         |     9.09 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|           10 |     1909 | 2022-10-24 | PROSPECTS            | L   | 0.459      | -            | -                | -                | -         |    -5.67 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            9 |     2059 | 2022-10-18 | BIG Academy          | W   | 0.420      | 0.500        | 0.020 (0.004)    | -                | -         |     9.30 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            8 |     2088 | 2022-10-17 | MIBR Academy         | W   | 0.412      | -            | -                | -                | -         |     1.91 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            7 |     2123 | 2022-10-16 | BIG Academy          | L   | 0.405      | -            | -                | -                | -         |    -3.64 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            6 |     2146 | 2022-10-15 | ENCE Academy         | W   | 0.399      | -            | -                | -                | -         |     4.30 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            5 |     2191 | 2022-10-14 | Astralis Talent      | W   | 0.392      | 0.500        | 0.021 (0.004)    | -                | -         |     7.02 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            4 |     2196 | 2022-10-14 | Young Ninjas         | L   | 0.391      | -            | -                | -                | -         |    -4.56 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            3 |     2209 | 2022-10-13 | PROSPECTS            | W   | 0.387      | 0.500        | 0.032 (0.006)    | 0.689 (0.133)    | -         |     8.15 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            2 |     2450 | 2022-10-02 | ex-TAG               | L   | 0.312      | -            | -                | -                | -         |    -6.47 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |
|            1 |     2455 | 2022-10-02 | HOTU                 | L   | 0.311      | -            | -                | -                | -         |    -6.34 | ArtFr0st, baaaaZzz, donk, OWNER, zont1x  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,116.96)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-28 |      0.692 | $3,114.00      | $2,156.10       |
| 2022-11-20 |      0.640 | $20,000.00     | $12,804.36      |
| 2022-10-02 |      0.313 | $500.00        | $156.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
