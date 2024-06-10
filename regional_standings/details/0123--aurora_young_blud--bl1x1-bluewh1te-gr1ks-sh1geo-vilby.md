### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, sh1geo, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  776.2<br />
<br />
Final Rank Value (776.2) = Starting Rank Value (734.1) + Head To Head Adjustments (42.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 734.1
- 400 + ( ( 0.168 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 734.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       52 | 2024-06-09 | Sampi            | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.883 (0.384)    | 0 (0.000) |    21.62 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           24 |      166 | 2024-06-07 | Insilio          | L   | 1.000      | -            | -                | -                | -         |    -6.52 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           23 |      194 | 2024-06-07 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -5.21 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           22 |      226 | 2024-06-06 | Verdant          | W   | 1.000      | 0.371        | 0.014 (0.005)    | 0.261 (0.097)    | 0 (0.000) |    18.82 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           21 |      301 | 2024-06-05 | Zero Tenacity    | L   | 1.000      | -            | -                | -                | -         |    -3.06 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           20 |      309 | 2024-06-05 | Illuminar        | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.366 (0.159)    | 0 (0.000) |    10.45 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           19 |      347 | 2024-06-04 | Spirit Academy   | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.039 (0.014)    | 0 (0.000) |     4.39 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           18 |      359 | 2024-06-04 | MOUZ NXT         | L   | 1.000      | -            | -                | -                | -         |    -3.01 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           17 |      370 | 2024-06-03 | FLuffy Gangsters | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.039 (0.014)    | 0 (0.000) |     7.61 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           16 |      401 | 2024-06-02 | ThunderFlash     | W   | 1.000      | 0.371        | 0.000 (0.000)    | -                | 0 (0.000) |     4.19 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           15 |      429 | 2024-06-01 | LEON             | W   | 1.000      | 0.143        | -                | 0.145 (0.021)    | 0 (0.000) |     8.98 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           14 |      511 | 2024-05-29 | FAVBET           | L   | 1.000      | -            | -                | -                | -         |   -11.68 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |     1671 | 2024-04-16 | ALTERNATE aTTaX  | L   | 0.832      | -            | -                | -                | -         |    -5.67 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           12 |     1686 | 2024-04-15 | Sangal           | L   | 0.826      | -            | -                | -                | -         |    -3.53 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           11 |     1995 | 2024-04-04 | ENCE             | L   | 0.752      | -            | -                | -                | -         |    -0.46 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           10 |     3640 | 2024-01-19 | Permitta         | L   | 0.244      | -            | -                | -                | -         |    -2.01 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            9 |     3706 | 2024-01-18 | Zero Tenacity    | W   | 0.238      | 0.333        | 0.154 (0.012)    | 1.000 (0.079)    | 0 (0.000) |     6.63 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            8 |     3748 | 2024-01-17 | MOUZ NXT         | L   | 0.231      | -            | -                | -                | -         |    -0.84 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            7 |     3768 | 2024-01-16 | JANO             | L   | 0.228      | -            | -                | -                | -         |    -5.72 | Aerial, allu, doto, Jelo, Sm1llee      |
|            6 |     3784 | 2024-01-16 | esmagaB          | W   | 0.227      | 0.143        | 0.008 (0.000)    | 0.211 (0.007)    | 0 (0.000) |     3.49 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            5 |     3798 | 2024-01-16 | Lemondogs        | W   | 0.227      | -            | -                | -                | 0 (0.000) |     0.94 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            4 |     3826 | 2024-01-15 | Spirit Academy   | W   | 0.218      | 0.333        | 0.001 (0.000)    | 0.098 (0.007)    | -         |     2.93 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            3 |     4065 | 2023-12-29 | Metizport        | L   | 0.106      | -            | -                | -                | -         |    -0.69 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     4068 | 2023-12-28 | The Witchers     | L   | 0.099      | -            | -                | -                | -         |    -1.85 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     4072 | 2023-12-27 | Metizport        | W   | 0.093      | 0.371        | 0.078 (0.003)    | 0.706 (0.024)    | -         |     2.32 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,378.75)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-01-21 |      0.257 | $500.00        | $128.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
