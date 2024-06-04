### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1273.1<br />
<br />
Final Rank Value (1273.1) = Starting Rank Value (1371.6) + Head To Head Adjustments (-98.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.424[<sup>2</sup>](#table1)
- Opponent Network: 0.193[<sup>2</sup>](#table1)
- LAN Wins: 0.848[<sup>2</sup>](#table1)

The average of these factors is 0.501<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1371.6
- 400 + ( ( 0.501 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1371.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       93 | 2024-05-25 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -24.41 | chelo, FalleN, KSCERATO, kye, yuurih |
|           36 |      109 | 2024-05-24 | Passion UA         | W   | 1.000      | 0.435        | 0.056 (0.025)    | 0.759 (0.330)    | -         |     4.42 | chelo, FalleN, KSCERATO, kye, yuurih |
|           35 |      672 | 2024-05-05 | Monte              | L   | 1.000      | -            | -                | -                | -         |   -19.29 | chelo, FalleN, KSCERATO, kye, yuurih |
|           34 |      691 | 2024-05-04 | ENCE               | W   | 1.000      | 0.889        | 0.199 (0.177)    | 0.422 (0.375)    | 1 (1.000) |    14.83 | chelo, FalleN, KSCERATO, kye, yuurih |
|           33 |      708 | 2024-05-03 | Bad News Kangaroos | W   | 1.000      | 0.889        | 0.032 (0.028)    | 0.306 (0.272)    | 1 (1.000) |     2.77 | chelo, FalleN, KSCERATO, kye, yuurih |
|           32 |      751 | 2024-05-01 | FORZE              | L   | 1.000      | -            | -                | -                | -         |   -25.03 | chelo, FalleN, KSCERATO, kye, yuurih |
|           31 |      772 | 2024-04-30 | Liquid             | L   | 1.000      | -            | -                | -                | -         |    -5.18 | chelo, FalleN, KSCERATO, kye, yuurih |
|           30 |     1021 | 2024-04-19 | MIBR               | L   | 0.934      | -            | -                | -                | -         |    -5.55 | chelo, FalleN, KSCERATO, kye, yuurih |
|           29 |     1041 | 2024-04-19 | Metizport          | W   | 0.932      | 0.589        | 0.088 (0.048)    | 0.860 (0.472)    | 1 (0.932) |     4.33 | chelo, FalleN, KSCERATO, kye, yuurih |
|           28 |     1076 | 2024-04-18 | 9z                 | L   | 0.926      | -            | -                | -                | -         |   -17.07 | chelo, FalleN, KSCERATO, kye, yuurih |
|           27 |     1362 | 2024-04-09 | HEROIC             | L   | 0.864      | -            | -                | -                | -         |    -3.98 | arT, chelo, FalleN, KSCERATO, yuurih |
|           26 |     1385 | 2024-04-08 | MOUZ               | L   | 0.858      | -            | -                | -                | -         |    -0.85 | arT, chelo, FalleN, KSCERATO, yuurih |
|           25 |     1404 | 2024-04-07 | Lynn Vision        | W   | 0.856      | 0.624        | 0.056 (0.030)    | 0.282 (0.151)    | 1 (0.856) |     4.03 | arT, chelo, FalleN, KSCERATO, yuurih |
|           24 |     1723 | 2024-03-22 | Gaimin Gladiators  | L   | 0.746      | -            | -                | -                | -         |   -15.39 | arT, chelo, FalleN, KSCERATO, yuurih |
|           23 |     1742 | 2024-03-21 | FaZe               | L   | 0.740      | -            | -                | -                | -         |    -0.76 | arT, chelo, FalleN, KSCERATO, yuurih |
|           22 |     1753 | 2024-03-21 | G2                 | L   | 0.738      | -            | -                | -                | -         |    -1.77 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     1775 | 2024-03-20 | SAW                | W   | 0.732      | 0.143        | 0.109 (0.011)    | 0.611 (0.064)    | 1 (0.732) |    12.04 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     1791 | 2024-03-19 | ENCE               | W   | 0.726      | 0.143        | 0.199 (0.021)    | -                | 1 (0.726) |    12.81 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     1799 | 2024-03-18 | KOI                | W   | 0.719      | 0.143        | -                | 0.570 (0.059)    | 1 (0.719) |     3.16 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     1813 | 2024-03-17 | Lynn Vision        | L   | 0.713      | -            | -                | -                | -         |   -19.29 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     1828 | 2024-03-17 | Legacy             | L   | 0.712      | -            | -                | -                | -         |   -19.52 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2175 | 2024-03-03 | Complexity         | W   | 0.620      | 0.143        | 0.260 (0.023)    | -                | 1 (0.620) |    14.09 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2210 | 2024-03-02 | Liquid             | W   | 0.612      | 0.143        | 0.493 (0.043)    | 0.854 (0.075)    | 1 (0.612) |    16.26 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     2232 | 2024-03-01 | Nouns              | W   | 0.606      | -            | -                | -                | 1 (0.606) |     1.61 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     2364 | 2024-02-23 | 9z                 | L   | 0.561      | -            | -                | -                | -         |   -10.94 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     2377 | 2024-02-22 | 9z                 | W   | 0.554      | 0.143        | -                | 0.769 (0.061)    | -         |     6.66 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     2385 | 2024-02-22 | Imperial           | W   | 0.553      | 0.143        | 0.373 (0.029)    | 0.889 (0.070)    | -         |    13.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     2666 | 2024-02-10 | Metizport          | L   | 0.472      | -            | -                | -                | -         |   -13.19 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     2668 | 2024-02-10 | ex-Anonymo         | W   | 0.472      | -            | -                | -                | -         |     0.32 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     2670 | 2024-02-10 | Metizport          | L   | 0.471      | -            | -                | -                | -         |   -13.35 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     2824 | 2024-02-01 | Apeks              | L   | 0.413      | -            | -                | -                | -         |    -9.68 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     2847 | 2024-01-31 | TheMongolz         | L   | 0.406      | -            | -                | -                | -         |    -4.78 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3783 | 2023-12-08 | Spirit             | L   | 0.045      | -            | -                | -                | -         |    -0.07 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3808 | 2023-12-07 | Astralis           | W   | 0.039      | -            | -                | -                | -         |     1.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3840 | 2023-12-06 | Spirit             | L   | 0.032      | -            | -                | -                | -         |    -0.05 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3893 | 2023-12-03 | Apeks              | W   | 0.013      | -            | -                | -                | -         |     0.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3918 | 2023-12-02 | HAVU               | W   | 0.006      | -            | -                | -                | -         |     0.01 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,610.53)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-04-20 |      0.940 | $5,000.00      | $4,701.51       |
| 2024-04-14 |      0.897 | $5,000.00      | $4,486.17       |
| 2024-03-31 |      0.806 | $20,000.00     | $16,122.80      |
| 2024-02-02 |      0.420 | $2,500.00      | $1,049.97       |
| 2023-12-03 |      0.013 | $100,000.00    | $1,250.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
