### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  860.2<br />
<br />
Final Rank Value (860.2) = Starting Rank Value (818.7) + Head To Head Adjustments (41.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.7
- 400 + ( ( 0.216 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 818.7


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
|           26 |       86 | 2024-05-25 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -6.79 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           25 |      129 | 2024-05-23 | Metizport       | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.860 (0.374)    | 0 (0.000) |    22.56 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |      201 | 2024-05-21 | System5         | W   | 1.000      | 0.500        | 0.000 (0.000)    | 0.104 (0.052)    | 0 (0.000) |     4.97 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |      264 | 2024-05-19 | DMS             | W   | 1.000      | 0.435        | -                | 0.397 (0.172)    | 0 (0.000) |    12.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |      312 | 2024-05-18 | Verdant         | W   | 1.000      | 0.435        | 0.013 (0.006)    | 0.162 (0.071)    | 0 (0.000) |    13.87 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           21 |      344 | 2024-05-17 | 777             | L   | 1.000      | -            | -                | -                | -         |   -19.81 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           20 |      362 | 2024-05-16 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -20.48 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |      418 | 2024-05-15 | Rounds          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.28 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |      430 | 2024-05-15 | Nexus           | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.518 (0.225)    | 0 (0.000) |    12.80 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |      467 | 2024-05-14 | EYEBALLERS      | W   | 1.000      | 0.500        | 0.009 (0.004)    | 0.611 (0.305)    | 0 (0.000) |    17.58 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |      509 | 2024-05-13 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |    -7.15 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |      561 | 2024-05-11 | Viperio         | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.076 (0.011)    | 0 (0.000) |     7.37 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |      986 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.939      | 0.500        | 0.048 (0.023)    | 0.650 (0.305)    | 0 (0.000) |    17.69 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     1492 | 2024-04-04 | 3DMAX           | L   | 0.831      | -            | -                | -                | -         |    -3.71 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           12 |     1531 | 2024-04-03 | PARIVISION      | L   | 0.825      | -            | -                | -                | -         |    -7.75 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           11 |     1609 | 2024-03-29 | B8              | W   | 0.792      | 0.500        | 0.165 (0.065)    | 1.000 (0.396)    | 0 (0.000) |    20.99 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           10 |     1625 | 2024-03-28 | GUN5            | L   | 0.786      | -            | -                | -                | -         |   -15.88 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            9 |     2077 | 2024-03-07 | Apeks           | L   | 0.646      | -            | -                | -                | -         |    -2.08 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |
|            8 |     3387 | 2024-01-13 | 500             | L   | 0.285      | -            | -                | -                | -         |    -5.34 | enzero, fozil, leri511, TruNiQ, Vert      |
|            7 |     3419 | 2024-01-12 | ARCRED          | W   | 0.280      | 0.143        | 0.000 (0.000)    | 0.144 (0.006)    | -         |     2.71 | enzero, fozil, leri511, TruNiQ, Vert      |
|            6 |     3465 | 2024-01-11 | IKLA            | L   | 0.273      | -            | -                | -                | -         |    -6.93 | enzero, fozil, leri511, TruNiQ, Vert      |
|            5 |     3474 | 2024-01-11 | Gucci Academy   | W   | 0.272      | 0.143        | 0.000 (0.000)    | -                | -         |     2.10 | enzero, fozil, leri511, TruNiQ, Vert      |
|            4 |     3484 | 2024-01-10 | ThunderFlash    | W   | 0.267      | -            | -                | -                | -         |     0.74 | enzero, fozil, leri511, TruNiQ, Vert      |
|            3 |     3834 | 2023-12-06 | FORZE           | L   | 0.033      | -            | -                | -                | -         |    -0.71 | enzero, fozil, leri511, TruNiQ, Vert      |
|            2 |     3862 | 2023-12-05 | Apeks           | L   | 0.026      | -            | -                | -                | -         |    -0.10 | enzero, fozil, leri511, TruNiQ, Vert      |
|            1 |     3924 | 2023-12-02 | ALTERNATE aTTaX | L   | 0.005      | -            | -                | -                | -         |    -0.05 | enzero, fozil, leri511, TruNiQ, Vert      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,237.51)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2023-12-10 |      0.059 | $4,000.00      | $237.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
