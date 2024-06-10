### Roster Details<br />
Team Name: G2<br />
Roster: huNter-, m0NESY, nexa, NiKo, Stewie2K<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1900.0<br />
<br />
Final Rank Value (1900.0) = Starting Rank Value (1920.6) + Head To Head Adjustments (-20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.887[<sup>1</sup>](#table2)
- Bounty Collected: 0.699[<sup>2</sup>](#table1)
- Opponent Network: 0.465[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.763<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1920.6
- 400 + ( ( 0.763 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1920.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      384 | 2024-06-02 | Vitality          | W   | 1.000      | 0.624        | 0.670 (0.418)    | -                | 1 (1.000) |    17.77 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           42 |      410 | 2024-06-01 | 9z                | W   | 1.000      | 0.624        | -                | 0.724 (0.452)    | 1 (1.000) |     1.52 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           41 |      446 | 2024-05-31 | FaZe              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.588 (0.367)    | 1 (1.000) |    19.01 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           40 |      496 | 2024-05-29 | Liquid            | W   | 1.000      | 0.624        | 0.501 (0.313)    | 0.732 (0.457)    | 1 (1.000) |     7.92 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           39 |      520 | 2024-05-28 | MOUZ              | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.570 (0.356)    | 1 (1.000) |    22.32 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           38 |      544 | 2024-05-27 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -10.98 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           37 |      555 | 2024-05-27 | Falcons           | W   | 1.000      | 0.624        | 0.327 (0.204)    | -                | 1 (1.000) |     3.20 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           36 |     1094 | 2024-05-09 | MOUZ              | L   | 0.987      | -            | -                | -                | -         |    -9.29 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           35 |     1120 | 2024-05-08 | 3DMAX             | W   | 0.979      | 0.889        | -                | 0.821 (0.715)    | 1 (0.979) |     1.08 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           34 |     1139 | 2024-05-07 | BIG               | W   | 0.972      | 0.889        | 0.228 (0.197)    | 0.459 (0.397)    | 1 (0.972) |     2.62 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           33 |     1315 | 2024-04-28 | M80               | W   | 0.913      | 0.889        | 0.206 (0.167)    | 0.749 (0.608)    | 1 (0.913) |     1.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           32 |     1349 | 2024-04-27 | Falcons           | W   | 0.905      | 0.889        | 0.327 (0.263)    | -                | 1 (0.905) |     2.46 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           31 |     1370 | 2024-04-26 | M80               | L   | 0.899      | -            | -                | -                | -         |   -27.43 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           30 |     1402 | 2024-04-25 | The MongolZ       | L   | 0.892      | -            | -                | -                | -         |   -15.90 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           29 |     1422 | 2024-04-24 | TYLOO             | W   | 0.885      | -            | -                | -                | -         |     0.07 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     1722 | 2024-04-13 | MOUZ              | L   | 0.811      | -            | -                | -                | -         |    -9.09 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     1735 | 2024-04-12 | Virtus.pro        | W   | 0.804      | -            | -                | -                | -         |     6.58 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     1805 | 2024-04-10 | HEROIC            | W   | 0.792      | 0.624        | 0.362 (0.179)    | -                | -         |     7.52 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     1864 | 2024-04-09 | Lynn Vision       | W   | 0.785      | -            | -                | -                | -         |     0.56 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     1895 | 2024-04-08 | Liquid            | L   | 0.778      | -            | -                | -                | -         |   -19.40 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     1905 | 2024-04-07 | 9z                | W   | 0.776      | -            | -                | -                | -         |     0.98 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     2098 | 2024-03-30 | Natus Vincere     | L   | 0.721      | -            | -                | -                | -         |   -12.45 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     2105 | 2024-03-29 | MOUZ              | W   | 0.714      | 1.000        | 1.000 (0.714)    | 0.570 (0.407)    | -         |    14.16 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     2202 | 2024-03-24 | Virtus.pro        | W   | 0.679      | -            | -                | -                | -         |     5.73 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2214 | 2024-03-23 | Gaimin Gladiators | W   | 0.673      | 1.000        | -                | 0.749 (0.504)    | -         |     0.67 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2233 | 2024-03-22 | Cloud9            | L   | 0.665      | -            | -                | -                | -         |   -19.66 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2243 | 2024-03-21 | Natus Vincere     | L   | 0.660      | -            | -                | -                | -         |   -11.70 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2253 | 2024-03-21 | FURIA             | W   | 0.659      | 1.000        | -                | 0.590 (0.389)    | -         |     3.17 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     3069 | 2024-02-15 | FaZe              | W   | 0.425      | -            | -                | -                | -         |     7.95 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     3100 | 2024-02-14 | Eternal Fire      | W   | 0.420      | -            | -                | -                | -         |     5.29 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     3116 | 2024-02-14 | Into the Breach   | W   | 0.418      | -            | -                | -                | -         |     0.02 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     3181 | 2024-02-09 | FaZe              | L   | 0.386      | -            | -                | -                | -         |    -4.92 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     3209 | 2024-02-06 | HEROIC            | W   | 0.367      | -            | -                | -                | -         |     3.77 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     3215 | 2024-02-06 | Monte             | W   | 0.365      | -            | -                | -                | -         |     0.38 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     3221 | 2024-02-05 | ENCE              | L   | 0.360      | -            | -                | -                | -         |   -10.51 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     3274 | 2024-02-03 | HEROIC            | W   | 0.346      | -            | -                | -                | -         |     3.40 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     3388 | 2024-01-28 | Liquid            | W   | 0.307      | -            | -                | -                | -         |     2.07 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     3405 | 2024-01-27 | Natus Vincere     | L   | 0.299      | -            | -                | -                | -         |    -5.30 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     3421 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.292      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     3482 | 2024-01-23 | Natus Vincere     | L   | 0.272      | -            | -                | -                | -         |    -4.94 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     3514 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.265      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     4194 | 2023-12-15 | Natus Vincere     | L   | 0.012      | -            | -                | -                | -         |    -0.22 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     4196 | 2023-12-14 | FaZe              | L   | 0.006      | -            | -                | -                | -         |    -0.08 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($226,987.79)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.75) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-05-12 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-04-14 |      0.818 | $20,000.00     | $16,361.24      |
| 2024-03-31 |      0.727 | $80,000.00     | $58,157.43      |
| 2024-02-11 |      0.400 | $40,000.00     | $15,995.00      |
| 2024-01-28 |      0.307 | $12,500.00     | $3,833.08       |
| 2023-12-17 |      0.026 | $25,000.00     | $641.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
