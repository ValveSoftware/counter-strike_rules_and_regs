### Roster Details<br />
Team Name: FURIA<br />
Roster: arT, drop, KSCERATO, saffee, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1290.6<br />
<br />
Final Rank Value (1290.6) = Starting Rank Value (1262.0) + Head To Head Adjustments (28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.531[<sup>1</sup>](#table2)
- Bounty Collected: 0.461[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.563[<sup>2</sup>](#table1)

The average of these factors is 0.421<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1262.0
- 400 + ( ( 0.421 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1262.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      190 | 2023-02-03 | IHC             | L   | 1.000      | -            | -                | -                | -         |   -20.37 | arT, drop, KSCERATO, saffee, yuurih |
|           21 |      226 | 2023-02-01 | BIG             | L   | 1.000      | -            | -                | -                | -         |   -14.22 | arT, drop, KSCERATO, saffee, yuurih |
|           20 |      241 | 2023-02-01 | Permitta        | W   | 1.000      | 0.143        | -                | 0.387 (0.055)    | 1 (1.000) |     2.32 | arT, drop, KSCERATO, saffee, yuurih |
|           19 |     1648 | 2022-11-12 | Heroic          | L   | 0.588      | -            | -                | -                | -         |    -1.25 | arT, drop, KSCERATO, saffee, yuurih |
|           18 |     1655 | 2022-11-11 | Natus Vincere   | W   | 0.581      | 1.000        | 0.358 (0.208)    | 0.372 (0.216)    | 1 (0.581) |    16.20 | arT, drop, KSCERATO, saffee, yuurih |
|           17 |     1691 | 2022-11-06 | BIG             | W   | 0.547      | 1.000        | 0.124 (0.068)    | 0.520 (0.285)    | 1 (0.547) |    10.40 | arT, drop, KSCERATO, saffee, yuurih |
|           16 |     1711 | 2022-11-05 | Spirit          | W   | 0.541      | 1.000        | 0.211 (0.114)    | 0.350 (0.190)    | 1 (0.541) |    10.24 | arT, drop, KSCERATO, saffee, yuurih |
|           15 |     1716 | 2022-11-05 | ENCE            | W   | 0.540      | 1.000        | 0.108 (0.059)    | 0.394 (0.213)    | 1 (0.540) |     8.54 | arT, drop, KSCERATO, saffee, yuurih |
|           14 |     1738 | 2022-11-02 | GamerLegion     | W   | 0.521      | 0.143        | 0.105 (0.008)    | 0.469 (0.035)    | 1 (0.521) |     5.95 | arT, drop, KSCERATO, saffee, yuurih |
|           13 |     1760 | 2022-11-01 | OG              | W   | 0.513      | 0.143        | 0.237 (0.017)    | 0.365 (0.027)    | 1 (0.513) |    12.86 | arT, drop, KSCERATO, saffee, yuurih |
|           12 |     1772 | 2022-10-31 | 00NATION        | W   | 0.507      | -            | -                | -                | 1 (0.507) |     1.60 | arT, drop, KSCERATO, saffee, yuurih |
|           11 |     1780 | 2022-10-31 | BIG             | L   | 0.506      | -            | -                | -                | -         |    -5.56 | arT, drop, KSCERATO, saffee, yuurih |
|           10 |     2349 | 2022-10-07 | paiN            | W   | 0.345      | 0.143        | 0.101 (0.005)    | -                | 1 (0.345) |     2.92 | arT, drop, KSCERATO, saffee, yuurih |
|            9 |     2368 | 2022-10-06 | O PLANO         | W   | 0.338      | -            | -                | -                | 1 (0.338) |     0.20 | arT, drop, KSCERATO, saffee, yuurih |
|            8 |     2394 | 2022-10-05 | Evil Geniuses   | L   | 0.332      | -            | -                | -                | -         |    -7.97 | arT, drop, KSCERATO, saffee, yuurih |
|            7 |     2412 | 2022-10-05 | Cartel terraza  | W   | 0.331      | -            | -                | -                | -         |     0.34 | arT, drop, KSCERATO, saffee, yuurih |
|            6 |     2553 | 2022-09-28 | Outsiders       | L   | 0.286      | -            | -                | -                | -         |    -1.04 | arT, drop, KSCERATO, saffee, yuurih |
|            5 |     2620 | 2022-09-25 | Evil Geniuses   | W   | 0.267      | 0.922        | 0.062 (0.015)    | 0.234 (0.058)    | -         |     2.00 | arT, drop, KSCERATO, saffee, yuurih |
|            4 |     2654 | 2022-09-24 | Cloud9          | L   | 0.260      | -            | -                | -                | -         |    -3.81 | arT, drop, KSCERATO, saffee, yuurih |
|            3 |     2697 | 2022-09-23 | Liquid          | W   | 0.253      | 0.922        | 0.760 (0.178)    | 0.450 (0.105)    | -         |     7.67 | arT, drop, KSCERATO, saffee, yuurih |
|            2 |     2755 | 2022-09-22 | Movistar Riders | W   | 0.246      | -            | -                | -                | -         |     0.47 | arT, drop, KSCERATO, saffee, yuurih |
|            1 |     2787 | 2022-09-21 | Eternal Fire    | W   | 0.239      | 0.922        | 0.034 (0.008)    | 0.496 (0.109)    | -         |     1.08 | arT, drop, KSCERATO, saffee, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,035.16)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $4,500.00      | $4,500.00       |
| 2022-11-13 |      0.594 | $80,000.00     | $47,485.90      |
| 2022-10-02 |      0.314 | $32,000.00     | $10,049.26      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
