### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  734.3<br />
<br />
Final Rank Value (734.3) = Starting Rank Value (722.8) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.8
- 400 + ( ( 0.167 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 722.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       39 | 2024-04-20 | ALTERNATE aTTaX | W   | 1.000      | 0.500        | 0.019 (0.010)    | 0.639 (0.320)    | 0 (0.000) |    19.93 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           27 |      545 | 2024-04-04 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -4.49 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           26 |      584 | 2024-04-03 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |   -13.33 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           25 |      662 | 2024-03-29 | B8              | W   | 1.000      | 0.500        | 0.003 (0.001)    | 0.655 (0.328)    | 0 (0.000) |    23.15 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           24 |      678 | 2024-03-28 | FORZE           | L   | 1.000      | -            | -                | -                | -         |    -4.76 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           23 |     1130 | 2024-03-07 | Apeks           | L   | 0.893      | -            | -                | -                | -         |    -1.19 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |
|           22 |     2440 | 2024-01-13 | 500             | L   | 0.532      | -            | -                | -                | -         |   -10.23 | enzero, fozil, leri511, TruNiQ, Vert      |
|           21 |     2472 | 2024-01-12 | ARCRED          | W   | 0.528      | 0.143        | 0.008 (0.001)    | 0.164 (0.012)    | 0 (0.000) |     8.01 | enzero, fozil, leri511, TruNiQ, Vert      |
|           20 |     2518 | 2024-01-11 | IKLA            | L   | 0.520      | -            | -                | -                | -         |   -10.24 | enzero, fozil, leri511, TruNiQ, Vert      |
|           19 |     2527 | 2024-01-11 | Gucci Academy   | W   | 0.519      | 0.143        | 0.013 (0.001)    | 0.093 (0.007)    | 0 (0.000) |     9.36 | enzero, fozil, leri511, TruNiQ, Vert      |
|           18 |     2537 | 2024-01-10 | ThunderFlash    | W   | 0.514      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.35 | enzero, fozil, leri511, TruNiQ, Vert      |
|           17 |     2887 | 2023-12-06 | FORZE           | L   | 0.280      | -            | -                | -                | -         |    -3.63 | enzero, fozil, leri511, TruNiQ, Vert      |
|           16 |     2915 | 2023-12-05 | Apeks           | L   | 0.273      | -            | -                | -                | -         |    -0.41 | enzero, fozil, leri511, TruNiQ, Vert      |
|           15 |     2977 | 2023-12-02 | ALTERNATE aTTaX | L   | 0.252      | -            | -                | -                | -         |    -3.18 | enzero, fozil, leri511, TruNiQ, Vert      |
|           14 |     2990 | 2023-12-01 | SAW             | L   | 0.246      | -            | -                | -                | -         |    -0.38 | enzero, fozil, leri511, TruNiQ, Vert      |
|           13 |     3224 | 2023-11-17 | Into the Breach | L   | 0.153      | -            | -                | -                | -         |    -1.80 | enzero, fozil, leri511, TruNiQ, Vert      |
|           12 |     3252 | 2023-11-16 | KOI             | L   | 0.147      | -            | -                | -                | -         |    -0.69 | enzero, fozil, leri511, TruNiQ, Vert      |
|           11 |     3263 | 2023-11-16 | FORZE           | L   | 0.146      | -            | -                | -                | -         |    -2.04 | enzero, fozil, leri511, TruNiQ, Vert      |
|           10 |     3279 | 2023-11-16 | Guild Eagles    | W   | 0.144      | 0.435        | 0.046 (0.003)    | 0.727 (0.046)    | 0 (0.000) |     3.82 | enzero, fozil, leri511, TruNiQ, Vert      |
|            9 |     3294 | 2023-11-15 | FORZE           | L   | 0.140      | -            | -                | -                | -         |    -1.97 | enzero, fozil, leri511, TruNiQ, Vert      |
|            8 |     3300 | 2023-11-15 | upcoming galimi | W   | 0.140      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.61 | enzero, fozil, leri511, TruNiQ, Vert      |
|            7 |     3353 | 2023-11-13 | The Witchers    | W   | 0.125      | 0.435        | 0.038 (0.002)    | 0.172 (0.009)    | 0 (0.000) |     2.19 | enzero, fozil, leri511, TruNiQ, Vert      |
|            6 |     3425 | 2023-11-10 | 9 Pandas        | L   | 0.106      | -            | -                | -                | -         |    -0.40 | enzero, fozil, leri511, TruNiQ, Vert      |
|            5 |     3461 | 2023-11-08 | Metizport       | L   | 0.093      | -            | -                | -                | -         |    -1.59 | enzero, fozil, leri511, TruNiQ, Vert      |
|            4 |     3476 | 2023-11-07 | Spirit          | L   | 0.087      | -            | -                | -                | -         |    -0.00 | enzero, fozil, leri511, TruNiQ, Vert      |
|            3 |     3510 | 2023-11-05 | Sampi           | W   | 0.074      | 0.435        | 0.084 (0.003)    | 0.698 (0.022)    | 0 (0.000) |     1.89 | enzero, fozil, leri511, TruNiQ, Vert      |
|            2 |     3625 | 2023-10-31 | PARIVISION      | W   | 0.041      | 0.500        | 0.002 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.54 | enzero, fozil, leri511, TruNiQ, Vert      |
|            1 |     3661 | 2023-10-30 | Monte           | L   | 0.034      | -            | -                | -                | -         |    -0.07 | enzero, fozil, leri511, TruNiQ, Vert      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,546.31)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.307 | $4,000.00      | $1,227.10       |
| 2023-11-18 |      0.160 | $2,000.00      | $319.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
