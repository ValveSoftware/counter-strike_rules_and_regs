### Roster Details<br />
Team Name: FORZE<br />
Roster: gokushima, Krad, r3salt, shalfey, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [103](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  804.3<br />
<br />
Final Rank Value (804.3) = Starting Rank Value (756.4) + Head To Head Adjustments (47.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.4
- 400 + ( ( 0.185 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 756.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     2787 | 2023-12-10 | 3DMAX             | L   | 0.307      | -            | -                | -                | -         |    -2.13 | gokushima, Krad, r3salt, shalfey, tN1R |
|           31 |     2810 | 2023-12-09 | SINNERS           | W   | 0.300      | 0.500        | 0.043 (0.006)    | 0.779 (0.117)    | 0 (0.000) |     7.73 | gokushima, Krad, r3salt, shalfey, tN1R |
|           30 |     2829 | 2023-12-08 | Apeks             | W   | 0.294      | 0.500        | 0.193 (0.028)    | 0.687 (0.101)    | 0 (0.000) |     8.59 | gokushima, Krad, r3salt, shalfey, tN1R |
|           29 |     2859 | 2023-12-07 | Spirit Academy    | W   | 0.287      | 0.500        | 0.020 (0.003)    | 0.245 (0.035)    | 0 (0.000) |     3.92 | gokushima, Krad, r3salt, shalfey, tN1R |
|           28 |     2887 | 2023-12-06 | Space             | W   | 0.280      | 0.500        | -                | 0.190 (0.027)    | 0 (0.000) |     3.63 | gokushima, Krad, r3salt, shalfey, tN1R |
|           27 |     2909 | 2023-12-05 | KOI               | W   | 0.274      | 0.500        | 0.058 (0.008)    | 0.902 (0.123)    | 0 (0.000) |     7.02 | gokushima, Krad, r3salt, shalfey, tN1R |
|           26 |     2921 | 2023-12-05 | Preasy            | L   | 0.273      | -            | -                | -                | -         |    -1.63 | gokushima, Krad, r3salt, shalfey, tN1R |
|           25 |     3034 | 2023-11-28 | GODSENT           | W   | 0.225      | 0.384        | 0.036 (0.003)    | -                | 0 (0.000) |     3.77 | gokushima, mizu, r3salt, shalfey, tN1R |
|           24 |     3143 | 2023-11-21 | ex-Anonymo        | W   | 0.178      | 0.384        | 0.027 (0.002)    | 0.276 (0.019)    | 0 (0.000) |     2.72 | gokushima, Krad, r3salt, shalfey, tN1R |
|           23 |     3176 | 2023-11-19 | ENCE              | L   | 0.166      | -            | -                | -                | -         |    -0.19 | gokushima, Krad, r3salt, shalfey, tN1R |
|           22 |     3188 | 2023-11-18 | Apeks             | L   | 0.160      | -            | -                | -                | -         |    -0.33 | gokushima, Krad, r3salt, shalfey, tN1R |
|           21 |     3222 | 2023-11-17 | FTW               | W   | 0.154      | -            | -                | -                | 0 (0.000) |     1.79 | gokushima, Krad, r3salt, shalfey, tN1R |
|           20 |     3235 | 2023-11-17 | Sprout            | L   | 0.152      | -            | -                | -                | -         |    -2.68 | gokushima, Krad, r3salt, shalfey, tN1R |
|           19 |     3254 | 2023-11-16 | PERA              | W   | 0.147      | -            | -                | -                | 0 (0.000) |     2.37 | gokushima, Krad, r3salt, shalfey, tN1R |
|           18 |     3263 | 2023-11-16 | Space             | W   | 0.146      | -            | -                | -                | 0 (0.000) |     2.04 | gokushima, Krad, r3salt, shalfey, tN1R |
|           17 |     3294 | 2023-11-15 | Space             | W   | 0.140      | -            | -                | -                | -         |     1.97 | gokushima, Krad, r3salt, shalfey, tN1R |
|           16 |     3305 | 2023-11-15 | ECF               | W   | 0.140      | -            | -                | -                | -         |     1.04 | gokushima, Krad, r3salt, shalfey, tN1R |
|           15 |     3315 | 2023-11-15 | ALTERNATE aTTaX   | W   | 0.138      | 0.435        | 0.026 (0.002)    | 0.327 (0.020)    | -         |     2.40 | gokushima, Krad, r3salt, shalfey, tN1R |
|           14 |     3351 | 2023-11-13 | Gaimin Gladiators | L   | 0.125      | -            | -                | -                | -         |    -0.15 | gokushima, Krad, r3salt, shalfey, tN1R |
|           13 |     3377 | 2023-11-12 | The Witchers      | W   | 0.119      | 0.435        | 0.038 (0.002)    | -                | -         |     1.90 | gokushima, Krad, r3salt, shalfey, tN1R |
|           12 |     3400 | 2023-11-11 | EYEBALLERS        | L   | 0.114      | -            | -                | -                | -         |    -1.19 | gokushima, Krad, r3salt, shalfey, tN1R |
|           11 |     3431 | 2023-11-09 | Zero Tenacity     | W   | 0.100      | 0.435        | -                | 0.805 (0.035)    | -         |     1.75 | gokushima, Krad, r3salt, shalfey, tN1R |
|           10 |     3456 | 2023-11-08 | SAW               | W   | 0.094      | 0.500        | 0.173 (0.008)    | 0.824 (0.039)    | -         |     2.78 | gokushima, Krad, r3salt, shalfey, tN1R |
|            9 |     3464 | 2023-11-08 | Pompa             | L   | 0.092      | -            | -                | -                | -         |    -2.31 | gokushima, Krad, r3salt, shalfey, tN1R |
|            8 |     3479 | 2023-11-07 | KOI               | W   | 0.087      | 0.500        | 0.058 (0.003)    | 0.902 (0.039)    | -         |     2.28 | gokushima, Krad, r3salt, shalfey, tN1R |
|            7 |     3497 | 2023-11-06 | Aurora Young Blud | W   | 0.080      | -            | -                | -                | -         |     1.01 | gokushima, Krad, r3salt, shalfey, tN1R |
|            6 |     3511 | 2023-11-05 | EYEBALLERS        | L   | 0.074      | -            | -                | -                | -         |    -0.77 | gokushima, Krad, r3salt, shalfey, tN1R |
|            5 |     3563 | 2023-11-03 | PGE Turow         | W   | 0.058      | -            | -                | -                | -         |     0.82 | gokushima, Krad, r3salt, shalfey, tN1R |
|            4 |     3609 | 2023-11-01 | Preasy            | L   | 0.046      | -            | -                | -                | -         |    -0.28 | gokushima, Krad, r3salt, shalfey, tN1R |
|            3 |     3627 | 2023-10-31 | Monte             | L   | 0.040      | -            | -                | -                | -         |    -0.10 | gokushima, Krad, r3salt, shalfey, tN1R |
|            2 |     3678 | 2023-10-30 | Nexus             | W   | 0.032      | -            | -                | -                | -         |     0.62 | gokushima, Krad, r3salt, shalfey, tN1R |
|            1 |     3709 | 2023-10-29 | The Chosen Few    | L   | 0.026      | -            | -                | -                | -         |    -0.45 | gokushima, Krad, r3salt, shalfey, tN1R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,713.73)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.327 | $1,000.00      | $326.76         |
| 2023-12-10 |      0.307 | $10,000.00     | $3,067.76       |
| 2023-11-18 |      0.160 | $2,000.00      | $319.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
