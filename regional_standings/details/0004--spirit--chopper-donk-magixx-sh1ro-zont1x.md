### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1854.0<br />
<br />
Final Rank Value (1854.0) = Starting Rank Value (1801.7) + Head To Head Adjustments (52.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.738[<sup>2</sup>](#table1)
- Opponent Network: 0.400[<sup>2</sup>](#table1)
- LAN Wins: 0.806[<sup>2</sup>](#table1)

The average of these factors is 0.736<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1801.7
- 400 + ( ( 0.736 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1801.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      966 | 2024-03-28 | FaZe          | L   | 0.941      | -            | -                | -                | -         |   -11.73 | chopper, donk, magixx, sh1ro, zont1x    |
|           32 |     1074 | 2024-03-22 | Natus Vincere | W   | 0.900      | 1.000        | 1.000 (0.900)    | 0.509 (0.458)    | 1 (0.900) |    17.53 | chopper, donk, magixx, sh1ro, zont1x    |
|           31 |     1089 | 2024-03-21 | Imperial      | W   | 0.894      | 1.000        | 0.656 (0.586)    | 0.965 (0.862)    | 1 (0.894) |     5.91 | chopper, donk, magixx, sh1ro, zont1x    |
|           30 |     1101 | 2024-03-21 | Cloud9        | W   | 0.892      | 1.000        | 0.472 (0.421)    | 0.525 (0.469)    | 1 (0.892) |     6.37 | chopper, donk, magixx, sh1ro, zont1x    |
|           29 |     1346 | 2024-03-10 | Metizport     | W   | 0.821      | 0.535        | -                | 1.000 (0.439)    | -         |     0.35 | chopper, donk, magixx, sh1ro, zont1x    |
|           28 |     1366 | 2024-03-09 | BIG           | W   | 0.814      | 0.535        | 0.454 (0.197)    | 0.510 (0.222)    | -         |     1.88 | chopper, donk, magixx, sh1ro, zont1x    |
|           27 |     1401 | 2024-03-08 | Elevate       | W   | 0.806      | 0.535        | -                | 0.361 (0.156)    | -         |     0.12 | chopper, donk, magixx, sh1ro, zont1x    |
|           26 |     1756 | 2024-02-21 | HEROIC        | W   | 0.700      | -            | -                | -                | 1 (0.700) |     5.40 | chopper, donk, magixx, sh1ro, zont1x    |
|           25 |     1787 | 2024-02-20 | MOUZ          | L   | 0.693      | -            | -                | -                | -         |   -10.65 | chopper, donk, magixx, sh1ro, zont1x    |
|           24 |     1806 | 2024-02-19 | Astralis      | W   | 0.687      | -            | -                | -                | 1 (0.687) |     3.73 | chopper, donk, magixx, sh1ro, zont1x    |
|           23 |     1821 | 2024-02-19 | ENCE          | W   | 0.685      | -            | -                | -                | 1 (0.685) |     2.69 | chopper, donk, magixx, sh1ro, zont1x    |
|           22 |     2004 | 2024-02-11 | FaZe          | W   | 0.633      | 1.000        | 1.000 (0.633)    | 0.712 (0.451)    | 1 (0.633) |    14.23 | chopper, donk, magixx, sh1ro, zont1x    |
|           21 |     2012 | 2024-02-10 | Falcons       | W   | 0.627      | 1.000        | 0.417 (0.261)    | -                | 1 (0.627) |     1.50 | chopper, donk, magixx, sh1ro, zont1x    |
|           20 |     2061 | 2024-02-06 | FaZe          | W   | 0.599      | 1.000        | 1.000 (0.599)    | 0.712 (0.427)    | 1 (0.599) |    13.84 | chopper, donk, magixx, sh1ro, zont1x    |
|           19 |     2090 | 2024-02-04 | Complexity    | W   | 0.586      | 1.000        | 0.262 (0.154)    | 0.374 (0.219)    | 1 (0.586) |     3.86 | chopper, donk, magixx, sh1ro, zont1x    |
|           18 |     2111 | 2024-02-03 | Natus Vincere | W   | 0.580      | 1.000        | 1.000 (0.580)    | 0.509 (0.295)    | -         |    13.53 | chopper, donk, magixx, sh1ro, zont1x    |
|           17 |     2185 | 2024-02-01 | TheMongolz    | W   | 0.565      | -            | -                | -                | -         |     2.27 | chopper, donk, magixx, sh1ro, zont1x    |
|           16 |     2198 | 2024-01-31 | Apeks         | W   | 0.559      | -            | -                | -                | -         |     1.44 | chopper, donk, magixx, sh1ro, zont1x    |
|           15 |     2290 | 2024-01-25 | FaZe          | L   | 0.518      | -            | -                | -                | -         |    -4.03 | baz, chopper, hally, sh1ro, zont1x      |
|           14 |     2305 | 2024-01-24 | Liquid        | L   | 0.513      | -            | -                | -                | -         |   -14.81 | baz, chopper, hally, sh1ro, zont1x      |
|           13 |     2422 | 2024-01-20 | MOUZ          | W   | 0.486      | -            | -                | -                | -         |     8.68 | chopper, donk, magixx, sh1ro, zont1x    |
|           12 |     2476 | 2024-01-19 | ex-Preasy     | W   | 0.479      | -            | -                | -                | -         |     0.21 | chopper, donk, magixx, sh1ro, zont1x    |
|           11 |     2519 | 2024-01-18 | Entropiq      | W   | 0.473      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x    |
|           10 |     2547 | 2024-01-18 | KOI           | L   | 0.472      | -            | -                | -                | -         |   -14.68 | chopper, donk, magixx, sh1ro, zont1x    |
|            9 |     3087 | 2023-12-10 | Virtus.pro    | W   | 0.212      | -            | -                | -                | -         |     2.68 | ArtFr0st, chopper, donk, magixx, zont1x |
|            8 |     3115 | 2023-12-09 | MIBR          | W   | 0.205      | 0.657        | 0.638 (0.086)    | -                | -         |     2.09 | ArtFr0st, chopper, donk, magixx, zont1x |
|            7 |     3132 | 2023-12-08 | FURIA         | W   | 0.199      | -            | -                | -                | -         |     1.21 | ArtFr0st, chopper, donk, magixx, zont1x |
|            6 |     3166 | 2023-12-07 | Virtus.pro    | L   | 0.191      | -            | -                | -                | -         |    -3.64 | ArtFr0st, chopper, donk, magixx, zont1x |
|            5 |     3189 | 2023-12-06 | FURIA         | W   | 0.186      | -            | -                | -                | -         |     1.11 | ArtFr0st, chopper, donk, magixx, zont1x |
|            4 |     3434 | 2023-11-21 | ENCE          | W   | 0.086      | -            | -                | -                | -         |     0.37 | ArtFr0st, chopper, donk, magixx, zont1x |
|            3 |     3527 | 2023-11-17 | MIBR          | W   | 0.059      | -            | -                | -                | -         |     0.59 | ArtFr0st, chopper, donk, magixx, zont1x |
|            2 |     3567 | 2023-11-16 | ENCE          | W   | 0.052      | -            | -                | -                | -         |     0.22 | ArtFr0st, chopper, donk, magixx, zont1x |
|            1 |     3755 | 2023-11-08 | Apeks         | W   | 0.000      | -            | -                | -                | -         |     0.00 | ArtFr0st, chopper, donk, magixx, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($354,883.08)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      0.960 | $45,000.00     | $43,210.48      |
| 2024-03-10 |      0.821 | $20,000.00     | $16,411.73      |
| 2024-02-11 |      0.633 | $400,000.00    | $253,256.02     |
| 2024-01-28 |      0.540 | $5,000.00      | $2,699.56       |
| 2023-12-10 |      0.213 | $5,000.00      | $1,067.35       |
| 2023-12-10 |      0.212 | $180,000.00    | $38,237.94      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
