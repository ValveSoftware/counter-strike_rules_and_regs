### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, freakazoid, hate, Trucklover86<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  698.4<br />
<br />
Final Rank Value (698.4) = Starting Rank Value (700.3) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.3
- 400 + ( ( 0.147 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 700.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      254 | 2023-01-31 | Noxious              | W   | 1.000      | 0.435        | 0.006 (0.002)    | 0.180 (0.078)    | 0 (0.000) |    13.48 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|           28 |      294 | 2023-01-29 | Detonate             | L   | 1.000      | -            | -                | -                | -         |   -12.80 | Cooper, fl0m, hate, JoJo, Trucklover86       |
|           27 |      297 | 2023-01-29 | Vendetta             | L   | 1.000      | -            | -                | -                | -         |    -9.19 | Cooper, fl0m, hate, JoJo, Trucklover86       |
|           26 |      325 | 2023-01-28 | ATK                  | W   | 1.000      | 0.354        | 0.070 (0.025)    | 0.646 (0.229)    | 0 (0.000) |    25.99 | Cooper, fl0m, hate, JoJo, Trucklover86       |
|           25 |      428 | 2023-01-25 | EG White             | L   | 1.000      | -            | -                | -                | -         |    -6.09 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|           24 |      459 | 2023-01-24 | Nouns                | L   | 1.000      | -            | -                | -                | -         |    -8.07 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|           23 |      707 | 2023-01-13 | EG Black             | L   | 1.000      | -            | -                | -                | -         |    -6.58 | ERIC, freakazoid, hate, jasonR, Trucklover86 |
|           22 |     1055 | 2022-12-07 | Villainous           | W   | 0.756      | 0.435        | 0.000 (0.000)    | 0.226 (0.074)    | 0 (0.000) |     7.99 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           21 |     1132 | 2022-12-05 | Noxious              | W   | 0.742      | 0.435        | 0.006 (0.002)    | 0.180 (0.058)    | 0 (0.000) |    10.20 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           20 |     1271 | 2022-12-01 | Red Wolves           | W   | 0.715      | 0.435        | 0.002 (0.001)    | 0.291 (0.090)    | 0 (0.000) |    11.01 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           19 |     1297 | 2022-11-30 | ATK                  | L   | 0.709      | -            | -                | -                | -         |    -3.50 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           18 |     1318 | 2022-11-29 | Vendetta             | L   | 0.702      | -            | -                | -                | -         |    -7.88 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           17 |     1490 | 2022-11-23 | Disconnected         | L   | 0.662      | -            | -                | -                | -         |    -8.72 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           16 |     1877 | 2022-10-25 | Nouns                | L   | 0.469      | -            | -                | -                | -         |    -3.76 | Cooper, fl0m, freakazoid, hate, tweiss       |
|           15 |     2204 | 2022-10-13 | Villainous           | W   | 0.388      | 0.143        | 0.003 (0.000)    | 0.097 (0.005)    | 0 (0.000) |     5.51 | Cooper, fl0m, hate, tweiss, YuZ              |
|           14 |     2238 | 2022-10-12 | X13                  | W   | 0.382      | 0.143        | 0.001 (0.000)    | 0.090 (0.005)    | 0 (0.000) |     5.57 | Cooper, fl0m, hate, tweiss, YuZ              |
|           13 |     2539 | 2022-09-28 | Brazen               | W   | 0.288      | 0.435        | 0.001 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     3.86 | Cooper, fl0m, hate, tweiss, YuZ              |
|           12 |     2570 | 2022-09-27 | Unjustified          | W   | 0.282      | 0.435        | 0.000 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     2.46 | Cooper, fl0m, hate, tweiss, YuZ              |
|           11 |     2585 | 2022-09-26 | EG Black             | L   | 0.275      | -            | -                | -                | -         |    -2.29 | Cooper, fl0m, hate, tweiss, YuZ              |
|           10 |     2642 | 2022-09-24 | timbermen            | L   | 0.262      | -            | -                | -                | -         |    -2.87 | Cooper, fl0m, hate, Keiti, tweiss            |
|            9 |     2765 | 2022-09-21 | Phantom Troupe       | L   | 0.242      | -            | -                | -                | -         |    -4.41 | Cooper, fl0m, freakazoid, hate, tweiss       |
|            8 |     2797 | 2022-09-20 | MIBR                 | L   | 0.235      | -            | -                | -                | -         |    -1.13 | Cooper, fl0m, freakazoid, hate, tweiss       |
|            7 |     2846 | 2022-09-18 | timbermen            | L   | 0.221      | -            | -                | -                | -         |    -2.45 | Cooper, fl0m, hate, Trucklover86, tweiss     |
|            6 |     2982 | 2022-09-14 | Disconnected         | L   | 0.195      | -            | -                | -                | -         |    -2.79 | Cooper, fl0m, freakazoid, hate, YuZ          |
|            5 |     3017 | 2022-09-13 | Davenport University | L   | 0.188      | -            | -                | -                | -         |    -2.65 | Cooper, fl0m, freakazoid, hate, YuZ          |
|            4 |     3305 | 2022-09-03 | Cartel terraza       | L   | 0.122      | -            | -                | -                | -         |    -2.16 | Cooper, fl0m, freakazoid, hate, YuZ          |
|            3 |     3375 | 2022-09-01 | ATK                  | L   | 0.108      | -            | -                | -                | -         |    -0.68 | Cooper, fl0m, freakazoid, hate, YuZ          |
|            2 |     3401 | 2022-08-31 | Kari                 | W   | 0.102      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.50 | Cooper, fl0m, freakazoid, hate, YuZ          |
|            1 |     3583 | 2022-08-24 | TeamOne              | L   | 0.055      | -            | -                | -                | -         |    -0.46 | Cooper, fl0m, freakazoid, hate, YuZ          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($444.42)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
