### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  950.8<br />
<br />
Final Rank Value (950.8) = Starting Rank Value (845.6) + Head To Head Adjustments (105.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 845.6
- 400 + ( ( 0.224 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 845.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       11 | 2024-06-10 | PARIVISION   | L   | 1.000      | -            | -                | -                | -         |   -11.78 | executor, kinqie, Kiro, nota, tex1y |
|           27 |       18 | 2024-06-10 | SAW          | L   | 1.000      | -            | -                | -                | -         |    -4.98 | executor, kinqie, Kiro, nota, tex1y |
|           26 |       23 | 2024-06-10 | Monte        | W   | 1.000      | 0.143        | 0.179 (0.026)    | 0.686 (0.098)    | 0 (0.000) |    24.80 | executor, kinqie, Kiro, nota, tex1y |
|           25 |       54 | 2024-06-09 | 9 Pandas     | W   | 1.000      | 0.143        | 0.114 (0.016)    | 0.758 (0.108)    | 0 (0.000) |    24.70 | executor, kinqie, Kiro, nota, tex1y |
|           24 |       65 | 2024-06-09 | Aurora       | W   | 1.000      | 0.143        | 0.513 (0.073)    | 0.918 (0.131)    | 0 (0.000) |    28.68 | executor, kinqie, Kiro, nota, tex1y |
|           23 |       70 | 2024-06-09 | SINNERS      | W   | 1.000      | 0.143        | 0.045 (0.006)    | 0.844 (0.121)    | 0 (0.000) |    21.50 | executor, kinqie, Kiro, nota, tex1y |
|           22 |       80 | 2024-06-09 | 3DMAX        | L   | 1.000      | -            | -                | -                | -         |    -5.21 | executor, kinqie, Kiro, nota, tex1y |
|           21 |      222 | 2024-06-06 | Aurora       | L   | 1.000      | -            | -                | -                | -         |    -1.57 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      291 | 2024-06-05 | SINNERS      | L   | 1.000      | -            | -                | -                | -         |   -10.56 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      341 | 2024-06-04 | SAW          | W   | 1.000      | 0.500        | 0.113 (0.056)    | 0.660 (0.330)    | 0 (0.000) |    28.98 | executor, kinqie, Kiro, nota, tex1y |
|           18 |     1141 | 2024-05-07 | MOUZ NXT     | L   | 0.972      | -            | -                | -                | -         |    -7.27 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     1167 | 2024-05-05 | Sampi        | L   | 0.960      | -            | -                | -                | -         |   -10.18 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1192 | 2024-05-04 | HAVU         | W   | 0.953      | 0.435        | 0.003 (0.001)    | 0.254 (0.105)    | 0 (0.000) |     9.97 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1236 | 2024-05-02 | EYEBALLERS   | L   | 0.939      | -            | -                | -                | -         |   -12.25 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1293 | 2024-04-29 | ENCE Academy | W   | 0.920      | 0.435        | 0.011 (0.004)    | 0.277 (0.111)    | 0 (0.000) |    11.75 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     1795 | 2024-04-10 | KOI          | L   | 0.793      | -            | -                | -                | -         |    -6.36 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     1848 | 2024-04-09 | PARIVISION   | W   | 0.787      | 0.500        | 0.015 (0.006)    | 0.527 (0.207)    | 0 (0.000) |    17.09 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2084 | 2024-04-01 | PERA         | L   | 0.733      | -            | -                | -                | -         |   -10.46 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2093 | 2024-03-31 | Monte        | W   | 0.726      | 0.500        | 0.179 (0.065)    | 0.686 (0.249)    | 0 (0.000) |    20.70 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2106 | 2024-03-29 | System5      | W   | 0.714      | -            | -                | -                | 0 (0.000) |     3.45 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     2425 | 2024-03-13 | Betera       | W   | 0.607      | 0.500        | 0.002 (0.000)    | 0.111 (0.034)    | -         |     6.28 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     2689 | 2024-03-03 | Metizport    | L   | 0.540      | -            | -                | -                | -         |    -4.79 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     2798 | 2024-02-26 | SAW          | L   | 0.501      | -            | -                | -                | -         |    -0.94 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     3373 | 2024-01-30 | Sashi        | L   | 0.320      | -            | -                | -                | -         |    -1.61 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3978 | 2024-01-11 | ILIN         | L   | 0.192      | -            | -                | -                | -         |    -5.29 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3980 | 2024-01-10 | QuackQuack   | W   | 0.188      | -            | -                | -                | -         |     0.45 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     4156 | 2023-12-16 | TSM          | W   | 0.020      | -            | -                | -                | -         |     0.05 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     4188 | 2023-12-15 | IKLA         | W   | 0.013      | -            | -                | -                | -         |     0.06 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
