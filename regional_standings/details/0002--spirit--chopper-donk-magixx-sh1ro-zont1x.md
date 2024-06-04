### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1950.5<br />
<br />
Final Rank Value (1950.5) = Starting Rank Value (1910.2) + Head To Head Adjustments (40.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.744[<sup>2</sup>](#table1)
- Opponent Network: 0.416[<sup>2</sup>](#table1)
- LAN Wins: 0.953[<sup>2</sup>](#table1)

The average of these factors is 0.778<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1910.2
- 400 + ( ( 0.778 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1910.2


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
|           36 |        2 | 2024-05-29 | FaZe          | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.688 (0.430)    | 1 (1.000) |    15.84 | chopper, donk, magixx, sh1ro, zont1x    |
|           35 |       31 | 2024-05-28 | Natus Vincere | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    12.21 | chopper, donk, magixx, sh1ro, zont1x    |
|           34 |       47 | 2024-05-27 | FlyQuest      | W   | 1.000      | 0.624        | -                | 0.648 (0.404)    | 1 (1.000) |     1.73 | chopper, donk, magixx, sh1ro, zont1x    |
|           33 |      269 | 2024-05-19 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -12.70 | chopper, donk, magixx, sh1ro, zont1x    |
|           32 |      306 | 2024-05-18 | Falcons       | W   | 1.000      | 0.769        | 0.355 (0.273)    | -                | 1 (1.000) |     1.96 | chopper, donk, magixx, sh1ro, zont1x    |
|           31 |      370 | 2024-05-16 | HEROIC        | W   | 1.000      | 0.769        | 0.322 (0.248)    | 0.662 (0.509)    | 1 (1.000) |     4.25 | chopper, donk, magixx, sh1ro, zont1x    |
|           30 |      428 | 2024-05-15 | Aurora        | W   | 1.000      | 0.769        | 0.493 (0.379)    | 0.840 (0.646)    | 1 (1.000) |     1.11 | chopper, donk, magixx, sh1ro, zont1x    |
|           29 |     1617 | 2024-03-28 | FaZe          | L   | 0.787      | -            | -                | -                | -         |   -11.49 | chopper, donk, magixx, sh1ro, zont1x    |
|           28 |     1725 | 2024-03-22 | Natus Vincere | W   | 0.746      | 1.000        | 1.000 (0.746)    | 0.382 (0.285)    | 1 (0.746) |     9.76 | chopper, donk, magixx, sh1ro, zont1x    |
|           27 |     1740 | 2024-03-21 | Imperial      | W   | 0.740      | 1.000        | 0.373 (0.276)    | 0.889 (0.658)    | 1 (0.740) |     1.96 | chopper, donk, magixx, sh1ro, zont1x    |
|           26 |     1752 | 2024-03-21 | Cloud9        | W   | 0.738      | 1.000        | -                | 0.382 (0.282)    | 1 (0.738) |     1.44 | chopper, donk, magixx, sh1ro, zont1x    |
|           25 |     1997 | 2024-03-10 | Metizport     | W   | 0.666      | 0.535        | -                | 0.860 (0.307)    | -         |     0.13 | chopper, donk, magixx, sh1ro, zont1x    |
|           24 |     2017 | 2024-03-09 | BIG           | W   | 0.660      | -            | -                | -                | -         |     0.88 | chopper, donk, magixx, sh1ro, zont1x    |
|           23 |     2052 | 2024-03-08 | Elevate       | W   | 0.652      | -            | -                | -                | -         |     0.05 | chopper, donk, magixx, sh1ro, zont1x    |
|           22 |     2407 | 2024-02-21 | HEROIC        | W   | 0.546      | -            | -                | -                | 1 (0.546) |     3.88 | chopper, donk, magixx, sh1ro, zont1x    |
|           21 |     2438 | 2024-02-20 | MOUZ          | L   | 0.539      | -            | -                | -                | -         |    -7.62 | chopper, donk, magixx, sh1ro, zont1x    |
|           20 |     2457 | 2024-02-19 | Astralis      | W   | 0.533      | -            | -                | -                | -         |     4.18 | chopper, donk, magixx, sh1ro, zont1x    |
|           19 |     2472 | 2024-02-19 | ENCE          | W   | 0.531      | -            | -                | -                | -         |     0.87 | chopper, donk, magixx, sh1ro, zont1x    |
|           18 |     2655 | 2024-02-11 | FaZe          | W   | 0.479      | 1.000        | 1.000 (0.479)    | 0.688 (0.330)    | -         |     9.27 | chopper, donk, magixx, sh1ro, zont1x    |
|           17 |     2663 | 2024-02-10 | Falcons       | W   | 0.473      | -            | -                | -                | -         |     1.32 | chopper, donk, magixx, sh1ro, zont1x    |
|           16 |     2712 | 2024-02-06 | FaZe          | W   | 0.445      | 1.000        | 1.000 (0.445)    | 0.688 (0.306)    | -         |     8.79 | chopper, donk, magixx, sh1ro, zont1x    |
|           15 |     2741 | 2024-02-04 | Complexity    | W   | 0.432      | -            | -                | -                | -         |     1.63 | chopper, donk, magixx, sh1ro, zont1x    |
|           14 |     2762 | 2024-02-03 | Natus Vincere | W   | 0.426      | 1.000        | 1.000 (0.426)    | -                | -         |     6.49 | chopper, donk, magixx, sh1ro, zont1x    |
|           13 |     2836 | 2024-02-01 | TheMongolz    | W   | 0.411      | -            | -                | -                | -         |     1.09 | chopper, donk, magixx, sh1ro, zont1x    |
|           12 |     2849 | 2024-01-31 | Apeks         | W   | 0.405      | -            | -                | -                | -         |     0.22 | chopper, donk, magixx, sh1ro, zont1x    |
|           11 |     2941 | 2024-01-25 | FaZe          | L   | 0.364      | -            | -                | -                | -         |    -4.28 | baz, chopper, hally, sh1ro, zont1x      |
|           10 |     2956 | 2024-01-24 | Liquid        | L   | 0.358      | -            | -                | -                | -         |    -8.93 | baz, chopper, hally, sh1ro, zont1x      |
|            9 |     3073 | 2024-01-20 | MOUZ          | W   | 0.332      | -            | -                | -                | -         |     6.22 | chopper, donk, magixx, sh1ro, zont1x    |
|            8 |     3127 | 2024-01-19 | ex-Preasy     | W   | 0.325      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x    |
|            7 |     3170 | 2024-01-18 | Entropiq      | W   | 0.319      | -            | -                | -                | -         |     0.01 | chopper, donk, magixx, sh1ro, zont1x    |
|            6 |     3198 | 2024-01-18 | KOI           | L   | 0.318      | -            | -                | -                | -         |    -9.98 | chopper, donk, magixx, sh1ro, zont1x    |
|            5 |     3738 | 2023-12-10 | Virtus.pro    | W   | 0.058      | -            | -                | -                | -         |     0.42 | ArtFr0st, chopper, donk, magixx, zont1x |
|            4 |     3766 | 2023-12-09 | MIBR          | W   | 0.051      | -            | -                | -                | -         |     0.26 | ArtFr0st, chopper, donk, magixx, zont1x |
|            3 |     3783 | 2023-12-08 | FURIA         | W   | 0.045      | -            | -                | -                | -         |     0.07 | ArtFr0st, chopper, donk, magixx, zont1x |
|            2 |     3817 | 2023-12-07 | Virtus.pro    | L   | 0.037      | -            | -                | -                | -         |    -0.90 | ArtFr0st, chopper, donk, magixx, zont1x |
|            1 |     3840 | 2023-12-06 | FURIA         | W   | 0.032      | -            | -                | -                | -         |     0.05 | ArtFr0st, chopper, donk, magixx, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($353,655.44)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-19 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-03-31 |      0.806 | $45,000.00     | $36,276.31      |
| 2024-03-10 |      0.666 | $20,000.00     | $13,329.88      |
| 2024-02-11 |      0.479 | $400,000.00    | $191,618.92     |
| 2024-01-28 |      0.386 | $5,000.00      | $1,929.09       |
| 2023-12-10 |      0.058 | $180,000.00    | $10,501.25      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
