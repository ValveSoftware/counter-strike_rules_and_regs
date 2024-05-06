### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, easy, sh1geo, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  683.8<br />
<br />
Final Rank Value (683.8) = Starting Rank Value (680.2) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.2
- 400 + ( ( 0.147 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 680.2


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
|           19 |      520 | 2024-04-16 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |    -7.16 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           18 |      535 | 2024-04-15 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -10.39 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           17 |      844 | 2024-04-04 | ENCE              | L   | 0.985      | -            | -                | -                | -         |    -0.47 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           16 |     2489 | 2024-01-19 | Permitta          | L   | 0.477      | -            | -                | -                | -         |    -3.26 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           15 |     2555 | 2024-01-18 | Zero Tenacity     | W   | 0.471      | 0.333        | 0.093 (0.015)    | 0.936 (0.147)    | 0 (0.000) |    11.76 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           14 |     2597 | 2024-01-17 | MOUZ NXT          | L   | 0.464      | -            | -                | -                | -         |    -1.81 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           13 |     2617 | 2024-01-16 | JANO              | L   | 0.461      | -            | -                | -                | -         |    -6.95 | Aerial, allu, doto, Jelo, Sm1llee       |
|           12 |     2633 | 2024-01-16 | esmagaB           | W   | 0.460      | 0.143        | 0.016 (0.001)    | 0.293 (0.019)    | 0 (0.000) |     8.51 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           11 |     2647 | 2024-01-16 | Lemondogs         | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.36 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|           10 |     2675 | 2024-01-15 | Spirit Academy    | W   | 0.452      | 0.333        | 0.017 (0.003)    | 0.195 (0.029)    | 0 (0.000) |     8.38 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|            9 |     2914 | 2023-12-29 | Metizport         | L   | 0.339      | -            | -                | -                | -         |    -1.57 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|            8 |     2917 | 2023-12-28 | The Witchers      | L   | 0.333      | -            | -                | -                | -         |    -4.55 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|            7 |     2921 | 2023-12-27 | Metizport         | W   | 0.326      | 0.371        | 0.183 (0.022)    | 1.000 (0.121)    | 0 (0.000) |     8.80 | bl1x1, bluewh1te, easy, sh1geo, VILBy   |
|            6 |     3640 | 2023-11-13 | Gaimin Gladiators | L   | 0.033      | -            | -                | -                | -         |    -0.02 | bl1x1, bluewh1te, easy, malinov, sh1geo |
|            5 |     3661 | 2023-11-12 | Entropiq          | L   | 0.027      | -            | -                | -                | -         |    -0.35 | bl1x1, bluewh1te, easy, malinov, sh1geo |
|            4 |     3669 | 2023-11-12 | VP.Prodigy        | L   | 0.026      | -            | -                | -                | -         |    -0.43 | bl1x1, bluewh1te, easy, malinov, sh1geo |
|            3 |     3692 | 2023-11-11 | ARCRED            | W   | 0.021      | 0.320        | 0.004 (0.000)    | 0.198 (0.001)    | 0 (0.000) |     0.36 | bl1x1, bluewh1te, easy, malinov, sh1geo |
|            2 |     3705 | 2023-11-11 | ex-Anonymo        | W   | 0.019      | 0.435        | 0.016 (0.000)    | 0.175 (0.001)    | 0 (0.000) |     0.34 | bl1x1, bluewh1te, easy, malinov, sh1geo |
|            1 |     3739 | 2023-11-09 | Spirit Academy    | W   | 0.004      | 0.435        | 0.017 (0.000)    | 0.195 (0.000)    | 0 (0.000) |     0.08 | bl1x1, bluewh1te, easy, malinov, sh1geo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($245.38)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
