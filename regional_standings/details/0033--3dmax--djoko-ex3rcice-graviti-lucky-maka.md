### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1225.7<br />
<br />
Final Rank Value (1225.7) = Starting Rank Value (1203.2) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.411[<sup>2</sup>](#table1)
- LAN Wins: 0.298[<sup>2</sup>](#table1)

The average of these factors is 0.422<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1203.2
- 400 + ( ( 0.422 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1203.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      110 | 2024-05-01 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -15.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           50 |      136 | 2024-04-30 | BetBoom           | W   | 1.000      | 0.384        | 0.563 (0.216)    | 1.000 (0.384)    | 0 (0.000) |    21.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           49 |      143 | 2024-04-29 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.80 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           48 |      191 | 2024-04-27 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -3.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           47 |      263 | 2024-04-24 | fnatic            | W   | 1.000      | 0.889        | 0.327 (0.291)    | 0.677 (0.602)    | 1 (1.000) |    16.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           46 |      288 | 2024-04-23 | SAW               | W   | 1.000      | 0.889        | 0.248 (0.220)    | 0.774 (0.688)    | 1 (1.000) |    23.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           45 |      298 | 2024-04-22 | Guild Eagles      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           44 |      483 | 2024-04-17 | BLEED             | W   | 1.000      | 0.384        | 0.400 (0.154)    | 1.000 (0.384)    | 0 (0.000) |    16.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           43 |      551 | 2024-04-14 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -8.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           42 |      566 | 2024-04-13 | ex-Preasy         | W   | 1.000      | 0.358        | 0.173 (0.062)    | 0.700 (0.251)    | 0 (0.000) |    13.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           41 |      608 | 2024-04-11 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -24.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           40 |      642 | 2024-04-10 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -19.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           39 |      691 | 2024-04-09 | SAW               | W   | 1.000      | 0.500        | 0.248 (0.124)    | 0.774 (0.387)    | 0 (0.000) |    25.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           38 |      768 | 2024-04-07 | Young Ninjas      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.37 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           37 |      841 | 2024-04-04 | Space             | W   | 0.986      | -            | -                | -                | -         |     2.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           36 |      870 | 2024-04-03 | FORZE             | W   | 0.980      | -            | -                | -                | -         |     0.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           35 |      921 | 2024-04-02 | Permitta          | W   | 0.972      | 0.384        | -                | 0.979 (0.366)    | -         |     8.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           34 |      977 | 2024-03-28 | Apeks             | W   | 0.939      | 0.500        | 0.237 (0.111)    | 0.667 (0.313)    | -         |    20.77 | Djoko, Ex3rcice, Graviti, Lucky, Maka   |
|           33 |     1100 | 2024-03-21 | fnatic            | L   | 0.893      | -            | -                | -                | -         |   -10.99 | Djoko, Ex3rcice, Lucky, Maka, NBK-      |
|           32 |     1142 | 2024-03-19 | GUN5              | W   | 0.879      | -            | -                | -                | -         |     1.32 | Djoko, Ex3rcice, Lucky, Maka, NBK-      |
|           31 |     1213 | 2024-03-15 | B8                | W   | 0.853      | 0.500        | 0.080 (0.034)    | 0.851 (0.363)    | -         |     8.83 | Djoko, Ex3rcice, Lucky, Maka, misutaaa  |
|           30 |     1281 | 2024-03-13 | PARIVISION        | L   | 0.840      | -            | -                | -                | -         |   -19.95 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           29 |     1494 | 2024-03-05 | FORZE             | L   | 0.786      | -            | -                | -                | -         |   -13.74 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           28 |     1516 | 2024-03-04 | fnatic            | L   | 0.779      | -            | -                | -                | -         |   -11.76 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           27 |     1554 | 2024-03-02 | Monte             | W   | 0.767      | 0.500        | 0.188 (0.072)    | -                | -         |    18.67 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           26 |     1591 | 2024-02-29 | Gaimin Gladiators | W   | 0.754      | 0.500        | 0.189 (0.071)    | 0.990 (0.373)    | -         |    16.94 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           25 |     1888 | 2024-02-16 | 9 Pandas          | L   | 0.666      | -            | -                | -                | -         |   -10.69 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           24 |     1913 | 2024-02-15 | Into the Breach   | W   | 0.660      | -            | -                | -                | 1 (0.660) |     3.04 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           23 |     1950 | 2024-02-14 | KOI               | L   | 0.653      | -            | -                | -                | -         |   -13.06 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           22 |     1956 | 2024-02-14 | Falcons           | L   | 0.652      | -            | -                | -                | -         |    -4.80 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           21 |     2005 | 2024-02-11 | Apeks             | L   | 0.633      | -            | -                | -                | -         |    -4.77 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           20 |     2028 | 2024-02-09 | fnatic            | W   | 0.620      | -            | -                | -                | -         |    10.70 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           19 |     2031 | 2024-02-09 | Endpoint          | W   | 0.619      | -            | -                | -                | -         |     3.69 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           18 |     2034 | 2024-02-09 | ex-Sprout         | L   | 0.619      | -            | -                | -                | -         |   -18.62 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           17 |     2221 | 2024-01-30 | Permitta          | L   | 0.553      | -            | -                | -                | -         |   -13.93 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           16 |     2375 | 2024-01-21 | ex-sYnck          | W   | 0.494      | -            | -                | -                | -         |     1.11 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           15 |     2383 | 2024-01-21 | ex-Preasy         | L   | 0.492      | -            | -                | -                | -         |   -10.92 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           14 |     2408 | 2024-01-20 | 9 Pandas          | L   | 0.487      | -            | -                | -                | -         |    -9.39 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           13 |     2428 | 2024-01-20 | Zero Tenacity     | W   | 0.485      | -            | -                | -                | -         |     2.77 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           12 |     2482 | 2024-01-19 | OG                | L   | 0.479      | -            | -                | -                | -         |    -5.14 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           11 |     2527 | 2024-01-18 | Cloud9            | L   | 0.473      | -            | -                | -                | -         |    -1.27 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|           10 |     2540 | 2024-01-18 | JANO              | W   | 0.473      | -            | -                | -                | -         |     0.92 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|            9 |     3083 | 2023-12-10 | FORZE             | W   | 0.213      | -            | -                | -                | -         |     0.59 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|            8 |     3150 | 2023-12-07 | SINNERS           | W   | 0.194      | -            | -                | -                | -         |     1.88 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|            7 |     3180 | 2023-12-06 | Apeks             | W   | 0.187      | -            | -                | -                | -         |     4.08 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|            6 |     3381 | 2023-11-24 | GamerLegion       | L   | 0.107      | -            | -                | -                | -         |    -0.55 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|            5 |     3395 | 2023-11-24 | Virtus.pro        | L   | 0.105      | -            | -                | -                | -         |    -0.16 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |
|            4 |     3565 | 2023-11-16 | TSM               | L   | 0.052      | -            | -                | -                | -         |    -1.55 | CYPHER, interz, JACKZ, MoDo, valde      |
|            3 |     3589 | 2023-11-15 | ex-Anonymo        | L   | 0.047      | -            | -                | -                | -         |    -1.39 | lunAtic, reiko, SaMey, Sobol, virtuoso  |
|            2 |     3665 | 2023-11-12 | Into the Breach   | W   | 0.026      | -            | -                | -                | -         |     0.07 | bodyy, Bymas, CRUC1AL, misutaaa, rallen |
|            1 |     3748 | 2023-11-08 | ENCE              | W   | 0.001      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,942.01)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-04-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2023-12-10 |      0.213 | $15,000.00     | $3,202.04       |
| 2023-11-26 |      0.120 | $2,000.00      | $239.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
