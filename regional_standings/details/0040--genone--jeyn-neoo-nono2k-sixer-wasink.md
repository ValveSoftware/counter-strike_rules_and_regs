### Roster Details<br />
Team Name: GenOne<br />
Roster: jeyN, NeOo, Nono2K, SIXER, wasiNk<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  985.6<br />
<br />
Final Rank Value (985.6) = Starting Rank Value (1127.2) + Head To Head Adjustments (-141.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.657[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.407[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1127.2
- 400 + ( ( 0.355 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1127.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      278 | 2023-01-31 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -17.86 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           25 |      318 | 2023-01-29 | HONORIS            | W   | 1.000      | 0.435        | 0.011 (0.005)    | 0.748 (0.325)    | 0 (0.000) |     8.88 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           24 |      380 | 2023-01-27 | forZe              | L   | 1.000      | -            | -                | -                | -         |   -15.36 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           23 |      424 | 2023-01-26 | Let us cook        | L   | 1.000      | -            | -                | -                | -         |   -28.84 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           22 |      489 | 2023-01-23 | Lilmix             | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.208 (0.030)    | 0 (0.000) |     5.18 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           21 |      549 | 2023-01-21 | ALTERNATE aTTaX    | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.486 (0.069)    | 0 (0.000) |     6.29 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           20 |      560 | 2023-01-21 | Goodfellas         | W   | 1.000      | 0.143        | 0.008 (0.001)    | -                | 0 (0.000) |     3.54 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           19 |      957 | 2022-12-11 | WINDINGO Community | W   | 0.779      | -            | -                | -                | 1 (0.779) |     0.96 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           18 |      982 | 2022-12-10 | Monte              | L   | 0.773      | -            | -                | -                | -         |   -14.16 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           17 |      993 | 2022-12-10 | Blade Community    | W   | 0.771      | -            | -                | -                | 1 (0.771) |     0.67 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           16 |     1062 | 2022-12-07 | HONORIS            | L   | 0.754      | -            | -                | -                | -         |   -15.96 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           15 |     1108 | 2022-12-06 | ARCRED             | L   | 0.747      | -            | -                | -                | -         |   -20.47 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           14 |     1128 | 2022-12-06 | EYEBALLERS         | L   | 0.745      | -            | -                | -                | -         |   -17.39 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           13 |     1166 | 2022-12-04 | ENCE Academy       | W   | 0.733      | 0.477        | 0.010 (0.004)    | 0.239 (0.084)    | -         |     3.41 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           12 |     1247 | 2022-12-02 | Tricked            | L   | 0.720      | -            | -                | -                | -         |   -15.63 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           11 |     1522 | 2022-11-21 | Illuminar          | L   | 0.647      | -            | -                | -                | -         |   -12.80 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|           10 |     1532 | 2022-11-20 | undefined          | W   | 0.640      | 0.289        | -                | 0.259 (0.048)    | 1 (0.640) |     2.47 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            9 |     1542 | 2022-11-20 | The Prodigies      | W   | 0.639      | -            | -                | -                | 1 (0.639) |     1.17 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            8 |     1570 | 2022-11-18 | JANO               | W   | 0.626      | 0.143        | 0.008 (0.001)    | 0.307 (0.027)    | -         |     2.01 | Gringo, NeOo, Nono2K, SIXER, wasiNk |
|            7 |     1581 | 2022-11-17 | Nemiga             | L   | 0.620      | -            | -                | -                | -         |   -18.72 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            6 |     1590 | 2022-11-17 | JANO               | W   | 0.619      | 0.143        | 0.008 (0.001)    | -                | -         |     1.80 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            5 |     1694 | 2022-11-06 | EC Brugge          | W   | 0.547      | 0.327        | 0.007 (0.001)    | 0.507 (0.091)    | 1 (0.547) |     2.21 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            4 |     1701 | 2022-11-06 | LDLC               | W   | 0.545      | 0.327        | -                | 0.418 (0.075)    | 1 (0.545) |     1.79 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            3 |     1880 | 2022-10-25 | Falcons            | L   | 0.467      | -            | -                | -                | -         |   -10.55 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            2 |     2103 | 2022-10-16 | INVSN              | W   | 0.407      | 0.294        | 0.014 (0.002)    | 0.428 (0.051)    | -         |     3.02 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |
|            1 |     2115 | 2022-10-16 | HONORIS            | W   | 0.406      | 0.294        | 0.011 (0.001)    | 0.748 (0.089)    | -         |     2.70 | jeyN, NeOo, Nono2K, SIXER, wasiNk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($142,047.13)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.779 | $175,000.00    | $136,282.92     |
| 2022-11-20 |      0.640 | $2,000.00      | $1,279.62       |
| 2022-11-06 |      0.547 | $4,900.00      | $2,679.63       |
| 2022-10-26 |      0.473 | $1,234.00      | $583.84         |
| 2022-10-16 |      0.407 | $3,000.00      | $1,221.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
