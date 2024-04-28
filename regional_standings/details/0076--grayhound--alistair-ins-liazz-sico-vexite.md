### Roster Details<br />
Team Name: Grayhound<br />
Roster: aliStair, INS, Liazz, Sico, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  873.7<br />
<br />
Final Rank Value (873.7) = Starting Rank Value (828.7) + Head To Head Adjustments (44.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.159[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.7
- 400 + ( ( 0.209 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 828.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      215 | 2023-02-02 | MIBR                   | L   | 1.000      | -            | -                | -                | -         |   -10.94 | aliStair, INS, Liazz, Sico, Vexite         |
|           26 |      248 | 2023-02-01 | Spirit                 | L   | 1.000      | -            | -                | -                | -         |    -2.28 | aliStair, INS, Liazz, Sico, Vexite         |
|           25 |      604 | 2023-01-19 | Rooster                | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.211 (0.030)    | 0 (0.000) |     8.80 | aliStair, INS, Liazz, Sico, Vexite         |
|           24 |     1194 | 2022-12-04 | Rooster                | W   | 0.730      | 0.350        | 0.005 (0.001)    | 0.211 (0.054)    | 0 (0.000) |     6.63 | aliStair, INS, Liazz, Sico, Vexite         |
|           23 |     1261 | 2022-12-02 | VERTEX                 | W   | 0.718      | 0.350        | 0.014 (0.003)    | 0.208 (0.052)    | 0 (0.000) |     7.88 | aliStair, INS, Liazz, Sico, Vexite         |
|           22 |     1290 | 2022-12-01 | Encore                 | W   | 0.710      | 0.350        | 0.003 (0.001)    | 0.062 (0.015)    | 0 (0.000) |     5.64 | aliStair, INS, Liazz, Sico, Vexite         |
|           21 |     1315 | 2022-11-30 | God's Work             | W   | 0.704      | 0.350        | -                | 0.097 (0.024)    | 0 (0.000) |     2.60 | aliStair, INS, Liazz, Sico, Vexite         |
|           20 |     1746 | 2022-11-02 | Vitality               | L   | 0.520      | -            | -                | -                | -         |    -0.28 | aliStair, INS, Liazz, Sico, Vexite         |
|           19 |     1761 | 2022-11-01 | BIG                    | L   | 0.512      | -            | -                | -                | -         |    -0.88 | aliStair, INS, Liazz, Sico, Vexite         |
|           18 |     1764 | 2022-10-31 | Cloud9                 | W   | 0.509      | 0.143        | 0.114 (0.008)    | 0.287 (0.021)    | 1 (0.509) |    14.85 | aliStair, INS, Liazz, Sico, Vexite         |
|           17 |     1781 | 2022-10-31 | OG                     | L   | 0.506      | -            | -                | -                | -         |    -0.35 | aliStair, INS, Liazz, Sico, Vexite         |
|           16 |     2266 | 2022-10-12 | e-LEMON-ators          | W   | 0.378      | 0.350        | 0.001 (0.000)    | 0.121 (0.016)    | -         |     2.86 | aliStair, INS, Liazz, Sico, Vexite         |
|           15 |     2318 | 2022-10-08 | Invictus International | W   | 0.356      | 0.143        | -                | 0.167 (0.008)    | 1 (0.356) |     3.96 | aliStair, INS, Liazz, Sico, Vexite         |
|           14 |     2334 | 2022-10-08 | IHC                    | L   | 0.350      | -            | -                | -                | -         |    -0.67 | aliStair, INS, Liazz, Sico, Vexite         |
|           13 |     2355 | 2022-10-07 | Rare Atom              | W   | 0.343      | 0.143        | 0.062 (0.003)    | 0.228 (0.011)    | 1 (0.343) |     5.23 | aliStair, INS, Liazz, Sico, Vexite         |
|           12 |     2819 | 2022-09-20 | Encore                 | W   | 0.231      | 0.350        | 0.003 (0.000)    | -                | -         |     1.80 | aliStair, INS, Liazz, Sico, Vexite         |
|           11 |     2866 | 2022-09-18 | VERTEX                 | L   | 0.218      | -            | -                | -                | -         |    -4.42 | aliStair, INS, Liazz, Sico, Vexite         |
|           10 |     2900 | 2022-09-17 | Encore                 | W   | 0.210      | 0.143        | 0.003 (0.000)    | -                | 1 (0.210) |     1.64 | aliStair, INS, Liazz, Sico, Vexite         |
|            9 |     2973 | 2022-09-15 | Meat Grinders          | W   | 0.197      | -            | -                | -                | -         |     0.51 | aliStair, INS, Liazz, Sico, Vexite         |
|            8 |     3152 | 2022-09-10 | e-LEMON-ators          | W   | 0.164      | -            | -                | -                | -         |     1.25 | aliStair, INS, Liazz, Sico, Vexite         |
|            7 |     3155 | 2022-09-09 | yellow                 | W   | 0.163      | -            | -                | -                | -         |     0.42 | aliStair, INS, Liazz, Sico, Vexite         |
|            6 |     3337 | 2022-09-03 | Imperial               | L   | 0.117      | -            | -                | -                | -         |    -1.60 | aliStair, Hatz, INS, Liazz, Sico           |
|            5 |     3339 | 2022-09-02 | VERTEX                 | W   | 0.115      | 0.500        | 0.014 (0.001)    | 0.208 (0.012)    | 1 (0.115) |     1.28 | aliStair, Hatz, INS, Liazz, Sico           |
|            4 |     3368 | 2022-09-01 | paiN                   | L   | 0.110      | -            | -                | -                | -         |    -0.69 | aliStair, Hatz, INS, Liazz, Sico           |
|            3 |     3480 | 2022-08-28 | Encore                 | W   | 0.079      | -            | -                | -                | -         |     0.60 | AZR, Gratisfaction, hazr, SaVage, sterling |
|            2 |     3539 | 2022-08-27 | e-LEMON-ators          | W   | 0.071      | -            | -                | -                | -         |     0.54 | aliStair, INS, Liazz, Sico, Vexite         |
|            1 |     3545 | 2022-08-27 | Encore                 | W   | 0.071      | -            | -                | -                | -         |     0.54 | AZR, Gratisfaction, hazr, SaVage, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,169.68)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $2,500.00      | $2,500.00       |
| 2022-12-04 |      0.730 | $5,510.00      | $4,022.45       |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-09-04 |      0.124 | $3,000.00      | $371.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
