### Roster Details<br />
Team Name: 9INE<br />
Roster: Goofy, hades, KEi, Kylar, mynio<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1106.5<br />
<br />
Final Rank Value (1106.5) = Starting Rank Value (930.9) + Head To Head Adjustments (175.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.9
- 400 + ( ( 0.259 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 930.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |       37 | 2023-02-11 | Falcons            | W   | 1.000      | 0.358        | 0.045 (0.016)    | 0.767 (0.274)    | 0 (0.000) |    12.74 | Goofy, hades, KEi, Kylar, mynio    |
|           58 |       62 | 2023-02-09 | HONORIS            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.16 | Goofy, hades, KEi, Kylar, mynio    |
|           57 |       79 | 2023-02-08 | Monte              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.37 | Goofy, hades, KEi, Kylar, mynio    |
|           56 |       85 | 2023-02-08 | Sprout             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.18 | Goofy, hades, KEi, Kylar, mynio    |
|           55 |      101 | 2023-02-07 | Bad News Eagles    | W   | 1.000      | 0.435        | 0.066 (0.029)    | -                | 0 (0.000) |    19.41 | Goofy, hades, KEi, Kylar, mynio    |
|           54 |      107 | 2023-02-07 | Partizan           | W   | 1.000      | 0.384        | -                | 0.653 (0.251)    | 0 (0.000) |    11.30 | Goofy, hades, KEi, Kylar, mynio    |
|           53 |      150 | 2023-02-05 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -5.01 | Goofy, hades, KEi, Kylar, mynio    |
|           52 |      186 | 2023-02-03 | 9z                 | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.74 | Goofy, hades, KEi, Kylar, mynio    |
|           51 |      228 | 2023-02-01 | BLUEJAYS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.36 | Goofy, hades, KEi, Kylar, mynio    |
|           50 |      258 | 2023-01-31 | SINNERS            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.27 | Goofy, hades, KEi, Kylar, mynio    |
|           49 |      264 | 2023-01-31 | Copenhagen Flames  | W   | 1.000      | 0.143        | 0.133 (0.019)    | -                | 0 (0.000) |    16.97 | Goofy, hades, KEi, Kylar, mynio    |
|           48 |      270 | 2023-01-31 | BLINK              | W   | 1.000      | -            | -                | -                | -         |     3.24 | Goofy, hades, KEi, Kylar, mynio    |
|           47 |      287 | 2023-01-30 | Illuminar          | L   | 1.000      | -            | -                | -                | -         |   -15.31 | Goofy, hades, KEi, Kylar, mynio    |
|           46 |      317 | 2023-01-29 | SAW                | W   | 1.000      | 0.358        | 0.093 (0.033)    | 0.642 (0.230)    | -         |    23.03 | Goofy, hades, KEi, Kylar, mynio    |
|           45 |      349 | 2023-01-28 | PROSPECTS          | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | -         |    12.77 | Goofy, hades, KEi, Kylar, mynio    |
|           44 |      403 | 2023-01-26 | Rapid Ninjas       | W   | 1.000      | -            | -                | -                | -         |     4.72 | Goofy, hades, KEi, Kylar, mynio    |
|           43 |      409 | 2023-01-26 | Eternal Fire       | W   | 1.000      | 0.358        | 0.034 (0.012)    | 0.496 (0.177)    | -         |    16.09 | Goofy, hades, KEi, Kylar, mynio    |
|           42 |      421 | 2023-01-26 | Rapid Ninjas       | L   | 1.000      | -            | -                | -                | -         |   -26.86 | Goofy, hades, KEi, Kylar, mynio    |
|           41 |      435 | 2023-01-25 | 500                | W   | 1.000      | 0.435        | 0.085 (0.037)    | 0.760 (0.330)    | -         |    19.59 | Goofy, hades, KEi, Kylar, mynio    |
|           40 |      451 | 2023-01-25 | MOUZ NXT           | W   | 1.000      | 0.435        | -                | 0.537 (0.234)    | -         |     9.61 | Goofy, hades, KEi, Kylar, mynio    |
|           39 |      588 | 2023-01-19 | Endpoint           | L   | 1.000      | -            | -                | -                | -         |   -15.54 | Goofy, hades, KEi, Kylar, mynio    |
|           38 |      619 | 2023-01-18 | SINNERS            | W   | 1.000      | -            | -                | -                | -         |    15.79 | Goofy, hades, KEi, Kylar, mynio    |
|           37 |      634 | 2023-01-17 | forZe              | L   | 1.000      | -            | -                | -                | -         |   -13.38 | Goofy, hades, KEi, Kylar, mynio    |
|           36 |      660 | 2023-01-16 | Permitta           | W   | 1.000      | -            | -                | -                | -         |    15.63 | Goofy, hades, KEi, Kylar, mynio    |
|           35 |      848 | 2022-12-16 | Apeks              | L   | 0.811      | -            | -                | -                | -         |    -9.74 | Goofy, KEi, Kylar, mynio, tudsoN   |
|           34 |      907 | 2022-12-13 | Endpoint           | L   | 0.794      | -            | -                | -                | -         |   -13.31 | Goofy, KEi, Kylar, nawrot, tudsoN  |
|           33 |     1113 | 2022-12-06 | ECSTATIC           | W   | 0.747      | 0.435        | -                | 0.556 (0.180)    | -         |     7.34 | Goofy, KEi, Kylar, mynio, tudsoN   |
|           32 |     1187 | 2022-12-04 | GamerLegion        | L   | 0.731      | -            | -                | -                | -         |    -5.66 | Goofy, KEi, Kylar, mynio, tudsoN   |
|           31 |     1284 | 2022-12-01 | eSuba              | W   | 0.712      | -            | -                | -                | -         |    10.46 | Goofy, KEi, Kylar, mynio, tudsoN   |
|           30 |     1328 | 2022-11-29 | ex-Into the Breach | L   | 0.700      | -            | -                | -                | -         |   -13.95 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           29 |     1401 | 2022-11-27 | HAVU               | W   | 0.684      | -            | -                | -                | -         |     2.34 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           28 |     1454 | 2022-11-25 | 777                | W   | 0.673      | -            | -                | -                | -         |     4.49 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           27 |     1511 | 2022-11-22 | Falcons            | W   | 0.654      | 0.435        | 0.045 (0.013)    | 0.767 (0.218)    | -         |    10.31 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           26 |     1569 | 2022-11-18 | Illuminar          | L   | 0.626      | -            | -                | -                | -         |    -8.06 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           25 |     1638 | 2022-11-15 | HONORIS            | W   | 0.606      | 0.426        | -                | 0.748 (0.193)    | -         |     8.77 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           24 |     1642 | 2022-11-15 | Copenhagen Flames  | L   | 0.605      | -            | -                | -                | -         |    -8.51 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           23 |     1675 | 2022-11-08 | forZe              | L   | 0.560      | -            | -                | -                | -         |    -7.81 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           22 |     1850 | 2022-10-27 | AGO                | W   | 0.478      | -            | -                | -                | -         |     4.53 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           21 |     1897 | 2022-10-25 | Enterprise         | W   | 0.464      | -            | -                | -                | -         |     6.22 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           20 |     1926 | 2022-10-23 | BLUEJAYS           | W   | 0.454      | 0.435        | 0.102 (0.020)    | -                | -         |     9.31 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           19 |     1937 | 2022-10-23 | Young Ninjas       | L   | 0.452      | -            | -                | -                | -         |    -7.12 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           18 |     1954 | 2022-10-22 | 1WIN               | W   | 0.447      | -            | -                | -                | -         |     6.25 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           17 |     1985 | 2022-10-21 | Bad News Eagles    | W   | 0.440      | 0.435        | 0.066 (0.013)    | -                | -         |    10.81 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           16 |     2012 | 2022-10-20 | HEET               | W   | 0.433      | -            | -                | -                | -         |     7.25 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           15 |     2025 | 2022-10-20 | FTW                | W   | 0.431      | -            | -                | -                | -         |     6.00 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           14 |     2044 | 2022-10-19 | BLUEJAYS           | L   | 0.426      | -            | -                | -                | -         |    -4.21 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           13 |     2056 | 2022-10-18 | Bad News Eagles    | W   | 0.420      | -            | -                | -                | -         |    10.60 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           12 |     2067 | 2022-10-18 | ECSTATIC           | L   | 0.419      | -            | -                | -                | -         |    -7.35 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           11 |     2138 | 2022-10-15 | ex-TITANS          | W   | 0.399      | -            | -                | -                | -         |     2.29 | Goofy, KEi, Kylar, mynio, SZPERO   |
|           10 |     2232 | 2022-10-13 | IKLA               | L   | 0.384      | -            | -                | -                | -         |    -6.40 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            9 |     2282 | 2022-10-11 | Tricked            | L   | 0.372      | -            | -                | -                | -         |    -4.72 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            8 |     2992 | 2022-09-14 | eSuba              | L   | 0.193      | -            | -                | -                | -         |    -3.03 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            7 |     2997 | 2022-09-14 | OG Academy         | W   | 0.193      | -            | -                | -                | -         |     1.44 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            6 |     3026 | 2022-09-13 | ECLOT              | L   | 0.186      | -            | -                | -                | -         |    -2.24 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            5 |     3250 | 2022-09-06 | forZe              | L   | 0.140      | -            | -                | -                | -         |    -1.89 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            4 |     3410 | 2022-08-31 | 1WIN               | L   | 0.100      | -            | -                | -                | -         |    -1.90 | Goofy, jedqr, Kylar, mynio, SZPERO |
|            3 |     3428 | 2022-08-30 | forZe              | W   | 0.093      | -            | -                | -                | -         |     1.69 | Goofy, jedqr, KEi, Kylar, SZPERO   |
|            2 |     3681 | 2022-08-21 | Endpoint           | L   | 0.033      | -            | -                | -                | -         |    -0.57 | Goofy, KEi, Kylar, mynio, SZPERO   |
|            1 |     3695 | 2022-08-21 | EC Kyiv            | W   | 0.033      | -            | -                | -                | -         |     0.16 | Goofy, KEi, Kylar, mynio, SZPERO   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,481.78)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-11 |      1.000 | $9,604.00      | $9,604.00       |
| 2023-02-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-11-20 |      0.640 | $1,250.00      | $800.34         |
| 2022-10-23 |      0.454 | $20,000.00     | $9,077.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
