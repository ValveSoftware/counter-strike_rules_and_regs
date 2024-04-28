### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, imoRR, MAJ3R, XANTARES, xfl0ud<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  930.5<br />
<br />
Final Rank Value (930.5) = Starting Rank Value (929.9) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.172[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 929.9
- 400 + ( ( 0.259 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 929.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      261 | 2023-01-31 | VOYVODA            | L   | 1.000      | -            | -                | -                | -         |   -26.93 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           51 |      273 | 2023-01-31 | Lilmix             | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.208 (0.030)    | 0 (0.000) |     7.30 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           50 |      329 | 2023-01-28 | HEET               | L   | 1.000      | -            | -                | -                | -         |   -22.45 | Calyx, Fabre, imoRR, MAJ3R, xfl0ud    |
|           49 |      337 | 2023-01-28 | SINNERS            | W   | 1.000      | 0.143        | 0.068 (0.010)    | 0.549 (0.078)    | 0 (0.000) |    14.89 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           48 |      342 | 2023-01-28 | Websterz           | W   | 1.000      | 0.143        | -                | 0.403 (0.058)    | 0 (0.000) |    10.50 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           47 |      409 | 2023-01-26 | 9INE               | L   | 1.000      | -            | -                | -                | -         |   -16.09 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           46 |      422 | 2023-01-26 | Falcons            | L   | 1.000      | -            | -                | -                | -         |   -15.19 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           45 |      433 | 2023-01-25 | Bad News Eagles    | L   | 1.000      | -            | -                | -                | -         |    -9.42 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           44 |      472 | 2023-01-24 | Apeks              | W   | 1.000      | 0.435        | 0.024 (0.011)    | 0.671 (0.292)    | 0 (0.000) |    18.25 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           43 |      616 | 2023-01-18 | Sprout             | W   | 1.000      | 0.143        | 0.067 (0.010)    | 0.446 (0.064)    | 0 (0.000) |    23.73 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           42 |      644 | 2023-01-17 | Partizan           | W   | 1.000      | 0.143        | -                | 0.653 (0.093)    | -         |    13.16 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           41 |      664 | 2023-01-16 | Genk               | W   | 1.000      | -            | -                | -                | -         |     6.21 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           40 |     1219 | 2022-12-03 | The Chosen Few     | W   | 0.726      | -            | -                | -                | -         |     3.83 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           39 |     1256 | 2022-12-02 | gothboiclique      | W   | 0.719      | -            | -                | -                | -         |     2.21 | Calyx, imoRR, MAJ3R, XANTARES, xfl0ud |
|           38 |     1616 | 2022-11-16 | HONORIS            | L   | 0.613      | -            | -                | -                | -         |   -10.07 | Calyx, hey, imoRR, XANTARES, xfl0ud   |
|           37 |     1895 | 2022-10-25 | ex-Finest          | L   | 0.465      | -            | -                | -                | -         |    -8.32 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           36 |     1945 | 2022-10-22 | IKLA               | L   | 0.448      | -            | -                | -                | -         |    -7.48 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           35 |     2024 | 2022-10-20 | Websterz           | L   | 0.431      | -            | -                | -                | -         |    -8.08 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           34 |     2034 | 2022-10-19 | Astralis           | L   | 0.427      | -            | -                | -                | -         |    -1.74 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           33 |     2118 | 2022-10-16 | ENCE               | L   | 0.405      | -            | -                | -                | -         |    -1.75 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           32 |     2145 | 2022-10-15 | Movistar Riders    | W   | 0.399      | 0.500        | 0.010 (0.002)    | -                | 1 (0.399) |     3.40 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           31 |     2160 | 2022-10-15 | Nixuh              | W   | 0.397      | -            | -                | -                | 1 (0.397) |     2.37 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           30 |     2190 | 2022-10-14 | Movistar Riders    | L   | 0.392      | -            | -                | -                | -         |    -9.15 | imoRR, paz, woxic, XANTARES, xfl0ud   |
|           29 |     2344 | 2022-10-07 | fnatic             | L   | 0.346      | -            | -                | -                | -         |    -0.63 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           28 |     2365 | 2022-10-06 | Aurora             | W   | 0.339      | -            | -                | -                | 1 (0.339) |     2.02 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           27 |     2409 | 2022-10-05 | Astralis           | L   | 0.331      | -            | -                | -                | -         |    -1.28 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           26 |     2434 | 2022-10-04 | Bad News Eagles    | L   | 0.324      | -            | -                | -                | -         |    -2.61 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           25 |     2611 | 2022-09-25 | SINNERS            | W   | 0.268      | 0.143        | 0.068 (0.003)    | 0.549 (0.021)    | -         |     4.84 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           24 |     2623 | 2022-09-25 | Movistar Riders    | W   | 0.267      | 0.922        | 0.010 (0.002)    | -                | 1 (0.267) |     2.20 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           23 |     2633 | 2022-09-25 | MOUZ               | W   | 0.265      | 0.143        | 0.155 (0.006)    | -                | -         |     7.18 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           22 |     2657 | 2022-09-24 | iNation            | W   | 0.260      | 0.143        | -                | 0.684 (0.025)    | -         |     5.23 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           21 |     2661 | 2022-09-24 | Liquid             | W   | 0.259      | 0.922        | 0.760 (0.181)    | 0.450 (0.107)    | 1 (0.259) |     8.10 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           20 |     2671 | 2022-09-24 | 500                | L   | 0.258      | -            | -                | -                | -         |    -2.71 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           19 |     2673 | 2022-09-24 | Strive in chaos    | W   | 0.257      | -            | -                | -                | -         |     1.32 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           18 |     2714 | 2022-09-23 | Evil Geniuses      | L   | 0.252      | -            | -                | -                | -         |    -2.72 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           17 |     2760 | 2022-09-22 | Cloud9             | L   | 0.245      | -            | -                | -                | -         |    -0.94 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           16 |     2787 | 2022-09-21 | FURIA              | L   | 0.239      | -            | -                | -                | -         |    -1.08 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           15 |     2854 | 2022-09-18 | Entropiq           | W   | 0.220      | -            | -                | -                | -         |     1.67 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           14 |     2864 | 2022-09-18 | Iron Branch        | W   | 0.219      | -            | -                | -                | -         |     1.44 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           13 |     2882 | 2022-09-17 | 1WIN               | W   | 0.213      | -            | -                | -                | -         |     2.77 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           12 |     2891 | 2022-09-17 | Sprout             | W   | 0.212      | 0.143        | 0.067 (0.002)    | -                | -         |     5.29 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           11 |     2913 | 2022-09-16 | forZe              | W   | 0.207      | 0.143        | -                | 0.708 (0.021)    | -         |     3.71 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|           10 |     2925 | 2022-09-16 | 1WIN               | L   | 0.206      | -            | -                | -                | -         |    -3.79 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            9 |     3291 | 2022-09-04 | Brosskiez          | W   | 0.126      | -            | -                | -                | -         |     0.20 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            8 |     3345 | 2022-09-02 | gothboiclique      | W   | 0.114      | -            | -                | -                | -         |     0.18 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            7 |     3382 | 2022-09-01 | Peace of Heroes    | W   | 0.107      | -            | -                | -                | -         |     0.16 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            6 |     3397 | 2022-09-01 | Enterprise         | L   | 0.105      | -            | -                | -                | -         |    -1.89 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            5 |     3588 | 2022-08-24 | Sangal             | W   | 0.053      | -            | -                | -                | -         |     0.85 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            4 |     3598 | 2022-08-23 | ECSTATIC           | W   | 0.048      | -            | -                | -                | -         |     0.66 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            3 |     3608 | 2022-08-23 | GamerLegion        | W   | 0.046      | -            | -                | -                | -         |     1.15 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            2 |     3624 | 2022-08-23 | EYEBALLERS         | W   | 0.046      | -            | -                | -                | -         |     0.73 | imoRR, MAJ3R, paz, woxic, XANTARES    |
|            1 |     3686 | 2022-08-21 | ex-Into the Breach | L   | 0.033      | -            | -                | -                | -         |    -0.63 | imoRR, MAJ3R, paz, woxic, XANTARES    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,249.86)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-03 |      0.726 | $2,689.00      | $1,952.30       |
| 2022-10-26 |      0.474 | $1,000.00      | $473.67         |
| 2022-10-23 |      0.453 | $5,000.00      | $2,266.86       |
| 2022-10-16 |      0.406 | $10,000.00     | $4,061.35       |
| 2022-10-02 |      0.314 | $17,500.00     | $5,495.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
