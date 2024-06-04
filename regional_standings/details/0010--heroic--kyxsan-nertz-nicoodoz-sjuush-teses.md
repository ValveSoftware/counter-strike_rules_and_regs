### Roster Details<br />
Team Name: HEROIC<br />
Roster: kyxsan, NertZ, nicoodoz, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1619.4<br />
<br />
Final Rank Value (1619.4) = Starting Rank Value (1718.7) + Head To Head Adjustments (-99.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.670[<sup>1</sup>](#table2)
- Bounty Collected: 0.632[<sup>2</sup>](#table1)
- Opponent Network: 0.418[<sup>2</sup>](#table1)
- LAN Wins: 0.997[<sup>2</sup>](#table1)

The average of these factors is 0.679<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1718.7
- 400 + ( ( 0.679 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1718.7


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
|           52 |       10 | 2024-05-29 | Natus Vincere     | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.382 (0.238)    | 1 (1.000) |    24.46 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           51 |       30 | 2024-05-28 | M80               | W   | 1.000      | 0.624        | 0.135 (0.084)    | 0.789 (0.493)    | 1 (1.000) |     3.46 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           50 |       46 | 2024-05-27 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -14.50 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           49 |      297 | 2024-05-18 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -3.33 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           48 |      330 | 2024-05-17 | MIBR              | W   | 1.000      | 0.769        | 0.308 (0.237)    | 0.805 (0.619)    | 1 (1.000) |    13.78 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           47 |      370 | 2024-05-16 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -4.25 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           46 |      420 | 2024-05-15 | MIBR              | W   | 1.000      | 0.769        | 0.308 (0.237)    | 0.805 (0.619)    | 1 (1.000) |    14.55 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           45 |      688 | 2024-05-04 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -30.17 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           44 |      701 | 2024-05-03 | BIG               | L   | 1.000      | -            | -                | -                | -         |   -26.17 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           43 |      713 | 2024-05-03 | FlyQuest          | W   | 1.000      | 0.889        | 0.114 (0.101)    | 0.648 (0.576)    | 1 (1.000) |     6.76 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           42 |      731 | 2024-05-02 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -19.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           41 |      777 | 2024-04-30 | Ninjas in Pyjamas | W   | 1.000      | 0.889        | 0.118 (0.105)    | 0.327 (0.291)    | 1 (1.000) |     1.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           40 |     1305 | 2024-04-10 | G2                | L   | 0.871      | -            | -                | -                | -         |    -9.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |     1362 | 2024-04-09 | FURIA             | W   | 0.864      | 0.624        | 0.138 (0.075)    | 0.402 (0.217)    | 1 (0.864) |     3.98 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |     1396 | 2024-04-08 | 9z                | W   | 0.857      | 0.624        | -                | 0.769 (0.411)    | 1 (0.857) |     2.74 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |     1406 | 2024-04-07 | Liquid            | L   | 0.855      | -            | -                | -                | -         |   -15.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     1712 | 2024-03-23 | paiN              | L   | 0.753      | -            | -                | -                | -         |   -15.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     1734 | 2024-03-22 | Virtus.pro        | L   | 0.744      | -            | -                | -                | -         |   -11.59 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |     1746 | 2024-03-21 | Complexity        | L   | 0.739      | -            | -                | -                | -         |   -16.85 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |     1754 | 2024-03-21 | FaZe              | W   | 0.738      | 1.000        | 1.000 (0.738)    | 0.688 (0.508)    | 1 (0.738) |    19.15 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     1803 | 2024-03-18 | Eternal Fire      | W   | 0.718      | 0.143        | 1.000 (0.103)    | -                | 1 (0.718) |    15.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     1824 | 2024-03-17 | Imperial          | W   | 0.713      | -            | -                | -                | -         |     6.03 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     1834 | 2024-03-17 | Lynn Vision       | W   | 0.711      | -            | -                | -                | -         |     0.56 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     1934 | 2024-03-13 | Metizport         | W   | 0.685      | -            | -                | -                | -         |     0.65 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     1959 | 2024-03-12 | Virtus.pro        | L   | 0.679      | -            | -                | -                | -         |   -10.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     1976 | 2024-03-11 | ENCE              | W   | 0.673      | -            | -                | -                | -         |     4.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     1988 | 2024-03-11 | ex-Preasy         | W   | 0.672      | -            | -                | -                | -         |     0.44 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2029 | 2024-03-09 | OG                | L   | 0.658      | -            | -                | -                | -         |   -19.49 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2105 | 2024-03-06 | Young Ninjas      | W   | 0.639      | -            | -                | -                | -         |     0.19 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     2386 | 2024-02-22 | GamerLegion       | W   | 0.552      | -            | -                | -                | -         |     0.92 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     2407 | 2024-02-21 | Spirit            | L   | 0.546      | -            | -                | -                | -         |    -3.88 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     2444 | 2024-02-20 | Astralis          | W   | 0.537      | -            | -                | -                | -         |     9.09 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     2458 | 2024-02-19 | Vitality          | L   | 0.533      | -            | -                | -                | -         |    -5.09 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     2466 | 2024-02-19 | ex-Preasy         | W   | 0.531      | -            | -                | -                | -         |     0.24 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     2709 | 2024-02-06 | G2                | L   | 0.446      | -            | -                | -                | -         |    -5.41 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     2716 | 2024-02-06 | GamerLegion       | W   | 0.445      | -            | -                | -                | -         |     0.70 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     2723 | 2024-02-05 | Vitality          | W   | 0.438      | 1.000        | 0.699 (0.306)    | 0.481 (0.211)    | -         |     9.74 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     2774 | 2024-02-03 | G2                | L   | 0.425      | -            | -                | -                | -         |    -4.95 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     2844 | 2024-01-31 | BIG               | W   | 0.407      | -            | -                | -                | -         |     2.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     2854 | 2024-01-31 | Astralis          | W   | 0.405      | -            | -                | -                | -         |     7.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     2938 | 2024-01-25 | BIG               | L   | 0.367      | -            | -                | -                | -         |    -9.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     2953 | 2024-01-24 | Cloud9            | L   | 0.360      | -            | -                | -                | -         |    -9.43 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3061 | 2024-01-20 | ex-sYnck          | W   | 0.333      | -            | -                | -                | -         |     0.02 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3081 | 2024-01-20 | IKLA              | W   | 0.331      | -            | -                | -                | -         |     0.02 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3126 | 2024-01-19 | KOI               | L   | 0.325      | -            | -                | -                | -         |   -10.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3181 | 2024-01-18 | MOUZ              | L   | 0.319      | -            | -                | -                | -         |    -1.92 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3189 | 2024-01-18 | FORZE             | W   | 0.319      | -            | -                | -                | -         |     0.03 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     3452 | 2024-01-11 | SINNERS           | W   | 0.273      | -            | -                | -                | -         |     0.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     3456 | 2024-01-11 | IKLA              | W   | 0.273      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     3469 | 2024-01-11 | ex-sYnck          | W   | 0.272      | -            | -                | -                | -         |     0.02 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     3475 | 2024-01-11 | HAVU              | W   | 0.272      | -            | -                | -                | -         |     0.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     3495 | 2024-01-10 | GUN5              | W   | 0.266      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($96,931.14)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-19 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.897 | $6,000.00      | $5,383.41       |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-03-10 |      0.666 | $7,500.00      | $4,998.70       |
| 2024-02-11 |      0.479 | $24,000.00     | $11,497.14      |
| 2024-01-28 |      0.386 | $5,000.00      | $1,929.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
