### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, easy, sh1geo, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  677.7<br />
<br />
Final Rank Value (677.7) = Starting Rank Value (683.1) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.1
- 400 + ( ( 0.147 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 683.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      224 | 2024-04-16 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |    -9.57 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           20 |      239 | 2024-04-15 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -13.21 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           19 |      548 | 2024-04-04 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -0.85 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           18 |     2193 | 2024-01-19 | Permitta          | L   | 0.571      | -            | -                | -                | -         |    -5.41 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           17 |     2259 | 2024-01-18 | Zero Tenacity     | W   | 0.564      | 0.333        | 0.008 (0.001)    | 0.805 (0.151)    | 0 (0.000) |    11.20 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           16 |     2301 | 2024-01-17 | MOUZ NXT          | L   | 0.558      | -            | -                | -                | -         |    -4.56 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           15 |     2321 | 2024-01-16 | JANO              | L   | 0.555      | -            | -                | -                | -         |    -9.83 | Aerial, allu, doto, Jelo, Sm1llee          |
|           14 |     2337 | 2024-01-16 | esmagaB           | W   | 0.554      | 0.143        | 0.015 (0.001)    | 0.342 (0.027)    | 0 (0.000) |    10.23 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           13 |     2351 | 2024-01-16 | Lemondogs         | W   | 0.553      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.76 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           12 |     2379 | 2024-01-15 | Spirit Academy    | W   | 0.545      | 0.333        | 0.020 (0.004)    | 0.245 (0.044)    | 0 (0.000) |    10.20 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           11 |     2618 | 2023-12-29 | Metizport         | L   | 0.433      | -            | -                | -                | -         |    -2.47 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|           10 |     2621 | 2023-12-28 | The Witchers      | L   | 0.426      | -            | -                | -                | -         |    -5.62 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|            9 |     2625 | 2023-12-27 | Metizport         | W   | 0.419      | 0.371        | 0.136 (0.021)    | 1.000 (0.155)    | 0 (0.000) |    10.89 | bl1x1, bluewh1te, easy, sh1geo, VILBy      |
|            8 |     3344 | 2023-11-13 | Gaimin Gladiators | L   | 0.127      | -            | -                | -                | -         |    -0.10 | bl1x1, bluewh1te, easy, malinov, sh1geo    |
|            7 |     3365 | 2023-11-12 | Entropiq          | L   | 0.120      | -            | -                | -                | -         |    -1.54 | bl1x1, bluewh1te, easy, malinov, sh1geo    |
|            6 |     3373 | 2023-11-12 | VP.Prodigy        | L   | 0.119      | -            | -                | -                | -         |    -1.97 | bl1x1, bluewh1te, easy, malinov, sh1geo    |
|            5 |     3396 | 2023-11-11 | ARCRED            | W   | 0.114      | 0.320        | 0.008 (0.000)    | 0.164 (0.006)    | 0 (0.000) |     1.85 | bl1x1, bluewh1te, easy, malinov, sh1geo    |
|            4 |     3409 | 2023-11-11 | ex-Anonymo        | W   | 0.112      | 0.435        | 0.027 (0.001)    | 0.276 (0.013)    | 0 (0.000) |     2.16 | bl1x1, bluewh1te, easy, malinov, sh1geo    |
|            3 |     3443 | 2023-11-09 | Spirit Academy    | W   | 0.097      | 0.435        | 0.020 (0.001)    | 0.245 (0.010)    | 0 (0.000) |     1.82 | bl1x1, bluewh1te, easy, malinov, sh1geo    |
|            2 |     3484 | 2023-11-07 | Sampi             | L   | 0.087      | -            | -                | -                | -         |    -0.42 | bl1x1, bluewh1te, lattykk, malinov, sh1geo |
|            1 |     3497 | 2023-11-06 | FORZE             | L   | 0.080      | -            | -                | -                | -         |    -1.01 | bl1x1, bluewh1te, easy, malinov, sh1geo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($292.03)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
