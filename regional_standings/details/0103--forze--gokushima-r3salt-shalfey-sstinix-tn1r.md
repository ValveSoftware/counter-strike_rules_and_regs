### Roster Details<br />
Team Name: FORZE<br />
Roster: gokushima, r3salt, shalfey, sstiNiX, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
Final Rank Value:  796.7<br />
<br />
Final Rank Value (796.7) = Starting Rank Value (755.2) + Head To Head Adjustments (41.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.2
- 400 + ( ( 0.187 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 755.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     2214 | 2024-01-30 | Sashi             | L   | 0.554      | -            | -                | -                | -         |    -3.63 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           31 |     2215 | 2024-01-30 | GUN5              | W   | 0.553      | -            | -                | -                | 0 (0.000) |     4.43 | gokushima, r3salt, shalfey, sstiNiX, tN1R |
|           30 |     2423 | 2024-01-20 | ex-Preasy         | L   | 0.486      | -            | -                | -                | -         |    -3.26 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           29 |     2462 | 2024-01-19 | Aurora            | W   | 0.480      | 0.143        | 0.973 (0.067)    | 0.967 (0.066)    | 0 (0.000) |    14.93 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           28 |     2521 | 2024-01-18 | ex-sYnck          | L   | 0.473      | -            | -                | -                | -         |    -8.89 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           27 |     2538 | 2024-01-18 | HEROIC            | L   | 0.473      | -            | -                | -                | -         |    -0.13 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           26 |     3066 | 2023-12-12 | ENCE              | L   | 0.224      | -            | -                | -                | -         |    -0.17 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           25 |     3075 | 2023-12-11 | SAW               | W   | 0.219      | 0.384        | 0.248 (0.021)    | 0.774 (0.065)    | 0 (0.000) |     6.70 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           24 |     3083 | 2023-12-10 | 3DMAX             | L   | 0.213      | -            | -                | -                | -         |    -0.59 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           23 |     3106 | 2023-12-09 | SINNERS           | W   | 0.207      | 0.500        | 0.033 (0.003)    | 0.749 (0.078)    | 0 (0.000) |     5.37 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           22 |     3125 | 2023-12-08 | Apeks             | W   | 0.200      | 0.500        | 0.237 (0.024)    | 0.667 (0.067)    | 0 (0.000) |     6.06 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           21 |     3155 | 2023-12-07 | Spirit Academy    | W   | 0.193      | 0.500        | 0.017 (0.002)    | 0.195 (0.019)    | 0 (0.000) |     2.72 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           20 |     3162 | 2023-12-07 | EYEBALLERS        | W   | 0.192      | 0.384        | 0.045 (0.003)    | 0.599 (0.044)    | 0 (0.000) |     4.29 | gokushima, kelieN, r3salt, shalfey, tN1R  |
|           19 |     3183 | 2023-12-06 | Space             | W   | 0.187      | 0.500        | 0.006 (0.001)    | 0.149 (0.014)    | 0 (0.000) |     2.74 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           18 |     3205 | 2023-12-05 | KOI               | W   | 0.181      | 0.500        | 0.059 (0.005)    | 0.772 (0.070)    | 0 (0.000) |     4.66 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           17 |     3217 | 2023-12-05 | ex-Preasy         | L   | 0.179      | -            | -                | -                | -         |    -1.07 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           16 |     3330 | 2023-11-28 | GODSENT           | W   | 0.132      | 0.384        | 0.024 (0.001)    | -                | 0 (0.000) |     2.06 | gokushima, mizu, r3salt, shalfey, tN1R    |
|           15 |     3439 | 2023-11-21 | ex-Anonymo        | W   | 0.085      | 0.384        | -                | 0.175 (0.006)    | -         |     1.23 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           14 |     3472 | 2023-11-19 | ENCE              | L   | 0.072      | -            | -                | -                | -         |    -0.04 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           13 |     3484 | 2023-11-18 | Apeks             | L   | 0.067      | -            | -                | -                | -         |    -0.08 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           12 |     3518 | 2023-11-17 | FTW               | W   | 0.060      | -            | -                | -                | -         |     0.65 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           11 |     3531 | 2023-11-17 | Sprout            | L   | 0.058      | -            | -                | -                | -         |    -1.06 | gokushima, Krad, r3salt, shalfey, tN1R    |
|           10 |     3550 | 2023-11-16 | PERA              | W   | 0.054      | -            | -                | -                | -         |     1.16 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            9 |     3559 | 2023-11-16 | Space             | W   | 0.052      | -            | -                | -                | -         |     0.80 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            8 |     3590 | 2023-11-15 | Space             | W   | 0.047      | -            | -                | -                | -         |     0.72 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            7 |     3601 | 2023-11-15 | ECF               | W   | 0.046      | -            | -                | -                | -         |     0.43 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            6 |     3611 | 2023-11-15 | ALTERNATE aTTaX   | W   | 0.045      | 0.435        | 0.104 (0.002)    | 0.779 (0.015)    | -         |     1.14 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            5 |     3647 | 2023-11-13 | Gaimin Gladiators | L   | 0.032      | -            | -                | -                | -         |    -0.04 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            4 |     3673 | 2023-11-12 | The Witchers      | W   | 0.025      | -            | -                | -                | -         |     0.39 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            3 |     3696 | 2023-11-11 | EYEBALLERS        | L   | 0.020      | -            | -                | -                | -         |    -0.18 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            2 |     3727 | 2023-11-09 | Zero Tenacity     | W   | 0.007      | -            | -                | -                | -         |     0.17 | gokushima, Krad, r3salt, shalfey, tN1R    |
|            1 |     3752 | 2023-11-08 | SAW               | W   | 0.000      | -            | -                | -                | -         |     0.01 | gokushima, Krad, r3salt, shalfey, tN1R    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.75)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.233 | $1,000.00      | $233.45         |
| 2023-12-10 |      0.213 | $10,000.00     | $2,134.69       |
| 2023-11-18 |      0.066 | $2,000.00      | $132.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
