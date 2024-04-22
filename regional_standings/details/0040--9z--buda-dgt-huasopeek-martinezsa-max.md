### Roster Details<br />
Team Name: 9z<br />
Roster: buda, dgt, HUASOPEEK, MartinezSa, max<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  1051.8<br />
<br />
Final Rank Value (1051.8) = Starting Rank Value (905.9) + Head To Head Adjustments (145.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.9
- 400 + ( ( 0.262 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 905.9


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
|           40 |       69 | 2024-04-19 | OG             | L   | 1.000      | -            | -                | -                | -         |    -6.30 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           39 |      120 | 2024-04-18 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -2.11 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           38 |      129 | 2024-04-18 | FURIA          | W   | 1.000      | 0.589        | 0.316 (0.186)    | 0.522 (0.307)    | 1 (1.000) |    26.54 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           37 |      449 | 2024-04-08 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |    -1.74 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           36 |      458 | 2024-04-07 | G2             | L   | 1.000      | -            | -                | -                | -         |    -0.34 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           35 |     1417 | 2024-02-23 | FURIA          | W   | 0.809      | 0.143        | 0.316 (0.037)    | 0.522 (0.060)    | 0 (0.000) |    22.64 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           34 |     1420 | 2024-02-23 | BESTIA         | W   | 0.807      | -            | -                | -                | 0 (0.000) |     8.88 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           33 |     1430 | 2024-02-22 | FURIA          | L   | 0.801      | -            | -                | -                | -         |    -2.49 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           32 |     1437 | 2024-02-22 | BESTIA         | W   | 0.801      | -            | -                | -                | 0 (0.000) |     8.49 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           31 |     1483 | 2024-02-20 | Solid          | W   | 0.788      | 0.143        | 0.126 (0.014)    | 0.584 (0.066)    | 0 (0.000) |     8.69 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           30 |     1485 | 2024-02-20 | Case           | W   | 0.787      | 0.143        | -                | 0.767 (0.086)    | 0 (0.000) |     9.36 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           29 |     1489 | 2024-02-20 | Salao do Corte | W   | 0.787      | -            | -                | -                | 0 (0.000) |     0.93 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           28 |     1541 | 2024-02-18 | LA RUGONETA    | L   | 0.773      | -            | -                | -                | -         |   -22.18 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           27 |     1582 | 2024-02-16 | Fluxo          | L   | 0.760      | -            | -                | -                | -         |   -10.47 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           26 |     1607 | 2024-02-15 | Imperial       | L   | 0.755      | -            | -                | -                | -         |    -0.58 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           25 |     1610 | 2024-02-15 | Case           | W   | 0.754      | 0.143        | -                | 0.767 (0.083)    | 0 (0.000) |     8.24 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           24 |     1613 | 2024-02-15 | PUBG aim       | W   | 0.754      | -            | -                | -                | 0 (0.000) |     1.56 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           23 |     1638 | 2024-02-14 | 2GAME          | W   | 0.748      | -            | -                | -                | 0 (0.000) |     2.43 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           22 |     1702 | 2024-02-12 | LA RUGONETA    | W   | 0.734      | -            | -                | -                | -         |     1.81 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           21 |     1785 | 2024-02-04 | Imperial       | L   | 0.681      | -            | -                | -                | -         |    -0.43 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           20 |     1805 | 2024-02-03 | W7M            | W   | 0.676      | -            | -                | -                | -         |     7.38 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           19 |     1838 | 2024-02-02 | Imperial       | W   | 0.668      | 0.143        | 0.569 (0.054)    | 1.000 (0.095)    | -         |    20.69 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           18 |     1843 | 2024-02-02 | ODDIK          | W   | 0.667      | -            | -                | -                | -         |     9.51 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           17 |     2004 | 2024-01-24 | Imperial       | L   | 0.608      | -            | -                | -                | -         |    -0.29 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           16 |     2022 | 2024-01-23 | Fluxo          | W   | 0.601      | 0.143        | 0.147 (0.013)    | -                | -         |    11.45 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           15 |     2045 | 2024-01-22 | Galorys        | W   | 0.595      | -            | -                | -                | -         |     6.67 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           14 |     2071 | 2024-01-21 | RED Canids     | L   | 0.590      | -            | -                | -                | -         |    -7.77 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           13 |     2074 | 2024-01-21 | W7M            | W   | 0.588      | -            | -                | -                | -         |     6.60 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           12 |     2081 | 2024-01-21 | Sharks         | W   | 0.587      | -            | -                | -                | -         |     9.04 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           11 |     2116 | 2024-01-20 | ODDIK          | L   | 0.580      | -            | -                | -                | -         |    -9.65 | buda, dgt, HUASOPEEK, MartinezSa, max |
|           10 |     2153 | 2024-01-19 | adalYamigos    | W   | 0.575      | -            | -                | -                | -         |     4.16 | buda, dgt, HUASOPEEK, MartinezSa, max |
|            9 |     2165 | 2024-01-19 | Legacy         | L   | 0.574      | -            | -                | -                | -         |    -6.63 | buda, dgt, HUASOPEEK, MartinezSa, max |
|            8 |     2215 | 2024-01-18 | MIBR           | W   | 0.569      | 0.143        | 0.305 (0.025)    | 0.853 (0.069)    | -         |    16.69 | buda, dgt, HUASOPEEK, MartinezSa, max |
|            7 |     2264 | 2024-01-17 | MIBR           | W   | 0.562      | 0.143        | 0.305 (0.024)    | 0.853 (0.068)    | -         |    16.68 | buda, dgt, HUASOPEEK, MartinezSa, max |
|            6 |     2282 | 2024-01-17 | RED Canids     | W   | 0.561      | 0.143        | 0.110 (0.009)    | 0.842 (0.067)    | -         |    11.71 | buda, dgt, HUASOPEEK, MartinezSa, max |
|            5 |     3066 | 2023-11-25 | Case           | L   | 0.207      | -            | -                | -                | -         |    -3.55 | buda, dgt, HUASOPEEK, max, tge        |
|            4 |     3083 | 2023-11-24 | BESTIA         | L   | 0.202      | -            | -                | -                | -         |    -3.82 | buda, dgt, HUASOPEEK, max, tge        |
|            3 |     3105 | 2023-11-23 | RED Canids     | W   | 0.194      | 0.435        | 0.110 (0.009)    | 0.842 (0.071)    | -         |     3.91 | buda, dgt, HUASOPEEK, max, tge        |
|            2 |     3712 | 2023-10-29 | KOI            | L   | 0.026      | -            | -                | -                | -         |    -0.26 | buda, dgt, HUASOPEEK, max, tge        |
|            1 |     3787 | 2023-10-27 | Spirit         | W   | 0.013      | 0.624        | 1.000 (0.008)    | -                | -         |     0.41 | buda, dgt, HUASOPEEK, max, tge        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,000.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-14 |      1.000 | $4,000.00      | $4,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
