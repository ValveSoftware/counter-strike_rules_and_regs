### Roster Details<br />
Team Name: Enterprise<br />
Roster: Blytz, h4rn, manguss, SYSTEM, The eLiVe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  880.5<br />
<br />
Final Rank Value (880.5) = Starting Rank Value (881.1) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.134[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.1
- 400 + ( ( 0.235 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 881.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     1474 | 2022-11-24 | SINNERS           | L   | 0.667      | -            | -                | -                | -         |    -7.23 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           36 |     1498 | 2022-11-23 | Entropiq Prague   | W   | 0.659      | 0.333        | 0.007 (0.002)    | -                | 0 (0.000) |     6.55 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           35 |     1516 | 2022-11-22 | ANDROMEDA         | W   | 0.653      | -            | -                | -                | 0 (0.000) |     2.43 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           34 |     1705 | 2022-11-06 | ECLOT             | L   | 0.545      | -            | -                | -                | -         |    -6.81 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           33 |     1718 | 2022-11-05 | eSuba             | L   | 0.540      | -            | -                | -                | -         |    -7.64 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           32 |     1793 | 2022-10-30 | 500               | L   | 0.500      | -            | -                | -                | -         |    -4.78 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           31 |     1814 | 2022-10-28 | Nemiga            | W   | 0.488      | 0.435        | 0.008 (0.002)    | 0.115 (0.024)    | 0 (0.000) |     5.48 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           30 |     1843 | 2022-10-27 | Copenhagen Flames | W   | 0.480      | 0.435        | 0.133 (0.028)    | 0.722 (0.150)    | 0 (0.000) |     9.87 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           29 |     1870 | 2022-10-26 | FTW               | L   | 0.472      | -            | -                | -                | -         |    -7.79 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           28 |     1897 | 2022-10-25 | 9INE              | L   | 0.464      | -            | -                | -                | -         |    -6.22 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           27 |     1907 | 2022-10-24 | SINNERS           | W   | 0.459      | 0.435        | 0.068 (0.014)    | 0.549 (0.110)    | 0 (0.000) |     9.33 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           26 |     1961 | 2022-10-22 | HAVU              | W   | 0.446      | 0.435        | 0.041 (0.008)    | 0.600 (0.116)    | 0 (0.000) |     8.21 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           25 |     1982 | 2022-10-21 | HONORIS           | L   | 0.440      | -            | -                | -                | -         |    -6.79 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           24 |     2192 | 2022-10-14 | Cryptova          | L   | 0.392      | -            | -                | -                | -         |    -9.01 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           23 |     2223 | 2022-10-13 | ECLOT             | L   | 0.385      | -            | -                | -                | -         |    -4.67 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           22 |     2254 | 2022-10-12 | Entropiq Prague   | W   | 0.379      | -            | -                | -                | 1 (0.379) |     3.58 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           21 |     2325 | 2022-10-08 | eSuba             | W   | 0.352      | 0.401        | 0.028 (0.004)    | 0.234 (0.033)    | 1 (0.352) |     6.25 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           20 |     2345 | 2022-10-07 | Entropiq Prague   | W   | 0.346      | -            | -                | -                | 1 (0.346) |     3.35 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           19 |     2552 | 2022-09-28 | OG                | L   | 0.286      | -            | -                | -                | -         |    -0.24 | h4rn, manguss, SandeN, SYSTEM, The eLiVe |
|           18 |     2627 | 2022-09-25 | HONORIS           | L   | 0.266      | -            | -                | -                | -         |    -4.45 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           17 |     2699 | 2022-09-23 | Apeks             | W   | 0.253      | 0.435        | 0.024 (0.003)    | 0.671 (0.074)    | -         |     4.49 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           16 |     2795 | 2022-09-21 | EYEBALLERS        | W   | 0.237      | 0.435        | 0.017 (0.002)    | 0.776 (0.080)    | -         |     4.12 | Blytz, manguss, MATYS, SYSTEM, The eLiVe |
|           15 |     2834 | 2022-09-19 | FTW               | L   | 0.226      | -            | -                | -                | -         |    -3.59 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           14 |     2861 | 2022-09-18 | SINNERS           | W   | 0.219      | 0.412        | 0.068 (0.006)    | 0.549 (0.050)    | 1 (0.219) |     4.70 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           13 |     2880 | 2022-09-17 | iNation           | L   | 0.214      | -            | -                | -                | -         |    -1.90 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           12 |     2892 | 2022-09-17 | ECLOT             | L   | 0.212      | -            | -                | -                | -         |    -2.18 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           11 |     2912 | 2022-09-16 | allStars          | W   | 0.207      | -            | -                | -                | -         |     1.20 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|           10 |     3313 | 2022-09-03 | Bad News Eagles   | W   | 0.120      | -            | -                | -                | -         |     3.08 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            9 |     3330 | 2022-09-03 | Entropiq Prague   | W   | 0.119      | -            | -                | -                | -         |     1.16 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            8 |     3336 | 2022-09-03 | IKLA              | L   | 0.117      | -            | -                | -                | -         |    -1.76 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            7 |     3397 | 2022-09-01 | Eternal Fire      | W   | 0.105      | 0.435        | 0.034 (0.002)    | 0.496 (0.023)    | -         |     1.89 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            6 |     3430 | 2022-08-30 | IKLA              | W   | 0.093      | 0.435        | -                | 0.743 (0.030)    | -         |     1.55 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            5 |     3482 | 2022-08-28 | KOVA              | W   | 0.078      | -            | -                | -                | -         |     0.46 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            4 |     3565 | 2022-08-26 | Permitta          | L   | 0.066      | -            | -                | -                | -         |    -1.11 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            3 |     3575 | 2022-08-25 | Aurora            | L   | 0.059      | -            | -                | -                | -         |    -1.41 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            2 |     3648 | 2022-08-22 | Beyond Possible   | W   | 0.038      | -            | -                | -                | -         |     0.14 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |
|            1 |     3691 | 2022-08-21 | K23               | L   | 0.033      | -            | -                | -                | -         |    -0.87 | Blytz, h4rn, manguss, SYSTEM, The eLiVe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,898.35)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-24 |      0.667 | $2,000.00      | $1,333.91       |
| 2022-11-06 |      0.547 | $4,800.00      | $2,625.28       |
| 2022-10-30 |      0.500 | $12,500.00     | $6,248.86       |
| 2022-10-08 |      0.352 | $23,810.00     | $8,392.75       |
| 2022-09-18 |      0.220 | $4,750.00      | $1,045.24       |
| 2022-09-04 |      0.126 | $2,000.00      | $252.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
