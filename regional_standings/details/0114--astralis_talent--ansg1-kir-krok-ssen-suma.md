### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, sSen, suma<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  805.2<br />
<br />
Final Rank Value (805.2) = Starting Rank Value (865.0) + Head To Head Adjustments (-59.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.290[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.0
- 400 + ( ( 0.233 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 865.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      138 | 2024-06-08 | M1X KS            | L   | 1.000      | -            | -                | -                | -         |    -6.98 | ANSG1, kiR, kroK, sSen, suma  |
|           19 |      178 | 2024-06-07 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -19.20 | ANSG1, kiR, kroK, sSen, suma  |
|           18 |      193 | 2024-06-07 | 618 KS            | W   | 1.000      | 0.337        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.58 | ANSG1, kiR, kroK, sSen, suma  |
|           17 |      238 | 2024-06-06 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -4.69 | ANSG1, kiR, kroK, sSen, suma  |
|           16 |     1472 | 2024-04-21 | MASONIC           | L   | 0.865      | -            | -                | -                | -         |   -13.12 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           15 |     1477 | 2024-04-21 | Preasy            | W   | 0.864      | 0.318        | 0.012 (0.003)    | 0.111 (0.030)    | 1 (0.864) |    11.78 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           14 |     1493 | 2024-04-20 | Kronjyllands      | W   | 0.860      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.860) |     2.19 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           13 |     1693 | 2024-04-15 | ECLOT             | L   | 0.824      | -            | -                | -                | -         |    -3.99 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           12 |     1867 | 2024-04-09 | Alliance          | L   | 0.784      | -            | -                | -                | -         |   -10.75 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           11 |     2194 | 2024-03-25 | Sashi             | L   | 0.687      | -            | -                | -                | -         |   -15.01 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           10 |     2197 | 2024-03-25 | XI                | W   | 0.687      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.77 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            9 |     2533 | 2024-03-09 | NOM               | L   | 0.579      | -            | -                | -                | -         |   -15.81 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            8 |     3543 | 2024-01-21 | MOUZ NXT          | L   | 0.257      | -            | -                | -                | -         |    -1.76 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            7 |     3584 | 2024-01-20 | Permitta          | W   | 0.251      | 0.333        | 0.022 (0.002)    | 0.972 (0.081)    | 0 (0.000) |     4.57 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            6 |     3634 | 2024-01-19 | MOUZ NXT          | L   | 0.245      | -            | -                | -                | -         |    -1.67 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            5 |     3742 | 2024-01-17 | Permitta          | W   | 0.232      | 0.333        | 0.022 (0.002)    | 0.972 (0.075)    | 0 (0.000) |     4.27 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            4 |     3859 | 2024-01-14 | Zero Tenacity     | W   | 0.211      | 0.333        | 0.154 (0.011)    | 1.000 (0.070)    | 0 (0.000) |     5.23 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            3 |     4098 | 2023-12-19 | brazylijski luz   | L   | 0.038      | -            | -                | -                | -         |    -0.72 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            2 |     4108 | 2023-12-18 | Nexus             | W   | 0.031      | 0.303        | 0.013 (0.000)    | 0.469 (0.004)    | 0 (0.000) |     0.50 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            1 |     4142 | 2023-12-17 | Permitta          | W   | 0.024      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.05 | ANSG1, JBOEN, kiR, kroK, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,174.74)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $1,087.00      | $1,087.00       |
| 2024-04-21 |      0.865 | $1,426.00      | $1,233.71       |
| 2024-03-25 |      0.687 | $1,490.00      | $1,024.32       |
| 2024-01-21 |      0.257 | $3,000.00      | $772.47         |
| 2023-12-19 |      0.038 | $1,500.00      | $57.22          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
