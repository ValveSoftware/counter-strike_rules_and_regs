### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  771.2<br />
<br />
Final Rank Value (771.2) = Starting Rank Value (744.1) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.1
- 400 + ( ( 0.181 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 744.1


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
|           23 |      335 | 2024-04-20 | ALTERNATE aTTaX | W   | 1.000      | 0.500        | 0.104 (0.052)    | 0.779 (0.389)    | 0 (0.000) |    21.41 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |      841 | 2024-04-04 | 3DMAX           | L   | 0.986      | -            | -                | -                | -         |    -2.92 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           21 |      880 | 2024-04-03 | PARIVISION      | L   | 0.979      | -            | -                | -                | -         |    -7.29 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           20 |      958 | 2024-03-29 | B8              | W   | 0.946      | 0.500        | 0.080 (0.038)    | 0.851 (0.402)    | 0 (0.000) |    24.86 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           19 |      974 | 2024-03-28 | FORZE           | L   | 0.940      | -            | -                | -                | -         |    -3.05 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|           18 |     1426 | 2024-03-07 | Apeks           | L   | 0.800      | -            | -                | -                | -         |    -0.75 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |
|           17 |     2736 | 2024-01-13 | 500             | L   | 0.439      | -            | -                | -                | -         |    -6.13 | enzero, fozil, leri511, TruNiQ, Vert      |
|           16 |     2768 | 2024-01-12 | ARCRED          | W   | 0.434      | 0.143        | 0.004 (0.000)    | 0.198 (0.012)    | 0 (0.000) |     6.45 | enzero, fozil, leri511, TruNiQ, Vert      |
|           15 |     2814 | 2024-01-11 | IKLA            | L   | 0.427      | -            | -                | -                | -         |    -9.22 | enzero, fozil, leri511, TruNiQ, Vert      |
|           14 |     2823 | 2024-01-11 | Gucci Academy   | W   | 0.426      | 0.143        | 0.009 (0.001)    | 0.055 (0.003)    | 0 (0.000) |     6.69 | enzero, fozil, leri511, TruNiQ, Vert      |
|           13 |     2833 | 2024-01-10 | ThunderFlash    | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.72 | enzero, fozil, leri511, TruNiQ, Vert      |
|           12 |     3183 | 2023-12-06 | FORZE           | L   | 0.187      | -            | -                | -                | -         |    -2.74 | enzero, fozil, leri511, TruNiQ, Vert      |
|           11 |     3211 | 2023-12-05 | Apeks           | L   | 0.180      | -            | -                | -                | -         |    -0.19 | enzero, fozil, leri511, TruNiQ, Vert      |
|           10 |     3273 | 2023-12-02 | ALTERNATE aTTaX | L   | 0.159      | -            | -                | -                | -         |    -0.98 | enzero, fozil, leri511, TruNiQ, Vert      |
|            9 |     3286 | 2023-12-01 | SAW             | L   | 0.153      | -            | -                | -                | -         |    -0.10 | enzero, fozil, leri511, TruNiQ, Vert      |
|            8 |     3520 | 2023-11-17 | Into the Breach | L   | 0.060      | -            | -                | -                | -         |    -0.84 | enzero, fozil, leri511, TruNiQ, Vert      |
|            7 |     3548 | 2023-11-16 | KOI             | L   | 0.054      | -            | -                | -                | -         |    -0.28 | enzero, fozil, leri511, TruNiQ, Vert      |
|            6 |     3559 | 2023-11-16 | FORZE           | L   | 0.052      | -            | -                | -                | -         |    -0.80 | enzero, fozil, leri511, TruNiQ, Vert      |
|            5 |     3575 | 2023-11-16 | Guild Eagles    | W   | 0.051      | 0.435        | 0.035 (0.001)    | 0.648 (0.014)    | 0 (0.000) |     1.32 | enzero, fozil, leri511, TruNiQ, Vert      |
|            4 |     3590 | 2023-11-15 | FORZE           | L   | 0.047      | -            | -                | -                | -         |    -0.72 | enzero, fozil, leri511, TruNiQ, Vert      |
|            3 |     3596 | 2023-11-15 | upcoming galimi | W   | 0.047      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.19 | enzero, fozil, leri511, TruNiQ, Vert      |
|            2 |     3649 | 2023-11-13 | The Witchers    | W   | 0.031      | 0.435        | 0.033 (0.000)    | 0.114 (0.002)    | 0 (0.000) |     0.49 | enzero, fozil, leri511, TruNiQ, Vert      |
|            1 |     3721 | 2023-11-10 | 9 Pandas        | L   | 0.012      | -            | -                | -                | -         |    -0.04 | enzero, fozil, leri511, TruNiQ, Vert      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($986.48)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-10 |      0.213 | $4,000.00      | $853.88         |
| 2023-11-18 |      0.066 | $2,000.00      | $132.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
