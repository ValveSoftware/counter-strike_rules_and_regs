### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1647.8<br />
<br />
Final Rank Value (1647.8) = Starting Rank Value (1628.9) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.680[<sup>1</sup>](#table2)
- Bounty Collected: 0.666[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.945[<sup>2</sup>](#table1)

The average of these factors is 0.636<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1628.9
- 400 + ( ( 0.636 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1628.9


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
|           38 |       41 | 2024-04-20 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.62 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |       91 | 2024-04-19 | Sashi             | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | -         |     0.64 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |      101 | 2024-04-19 | BetBoom           | W   | 1.000      | 0.143        | 0.457 (0.065)    | 0.898 (0.128)    | -         |     2.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |      661 | 2024-03-29 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -7.36 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |      769 | 2024-03-23 | Virtus.pro        | W   | 0.999      | 1.000        | 0.530 (0.529)    | 0.605 (0.604)    | 1 (0.999) |    15.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |      784 | 2024-03-22 | FaZe              | W   | 0.992      | 1.000        | 1.000 (0.992)    | 0.737 (0.731)    | 1 (0.992) |    25.65 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |      801 | 2024-03-21 | MOUZ              | L   | 0.986      | -            | -                | -                | -         |    -7.41 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |      809 | 2024-03-21 | Vitality          | W   | 0.985      | 1.000        | 1.000 (0.985)    | 0.420 (0.414)    | 1 (0.985) |    20.93 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |      848 | 2024-03-19 | GamerLegion       | W   | 0.972      | -            | -                | -                | 1 (0.972) |     4.49 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |      856 | 2024-03-18 | HEROIC            | L   | 0.966      | -            | -                | -                | -         |   -17.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |      879 | 2024-03-17 | paiN              | W   | 0.960      | 0.143        | 0.698 (0.096)    | 0.854 (0.117)    | 1 (0.960) |    14.48 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |      890 | 2024-03-17 | TheMongolz        | W   | 0.958      | -            | -                | -                | 1 (0.958) |     5.21 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1561 | 2024-02-17 | BetBoom           | W   | 0.766      | 0.143        | 0.457 (0.050)    | 0.898 (0.098)    | 1 (0.766) |     2.25 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1595 | 2024-02-16 | FaZe              | L   | 0.759      | -            | -                | -                | -         |    -3.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1630 | 2024-02-15 | Falcons           | W   | 0.751      | 0.143        | 0.389 (0.042)    | -                | 1 (0.751) |     4.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     1653 | 2024-02-14 | G2                | L   | 0.747      | -            | -                | -                | -         |    -5.15 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     1663 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.745      | -            | -                | -                | 1 (0.745) |     0.34 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     1772 | 2024-02-05 | Natus Vincere     | L   | 0.687      | -            | -                | -                | -         |    -3.08 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     1784 | 2024-02-04 | FaZe              | L   | 0.681      | -            | -                | -                | -         |    -2.52 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     1829 | 2024-02-03 | Falcons           | W   | 0.672      | 1.000        | 0.389 (0.261)    | 0.201 (0.135)    | 1 (0.672) |     2.82 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     1898 | 2024-01-31 | Rebels            | W   | 0.654      | -            | -                | -                | -         |     0.35 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     1906 | 2024-01-31 | BetBoom           | W   | 0.652      | 0.143        | 0.457 (0.043)    | 0.898 (0.084)    | -         |     2.43 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2176 | 2024-01-19 | MOUZ              | W   | 0.573      | 0.143        | 1.000 (0.082)    | -                | -         |    14.25 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2236 | 2024-01-18 | IKLA              | W   | 0.566      | -            | -                | -                | -         |     0.09 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2253 | 2024-01-18 | PERA              | W   | 0.566      | -            | -                | -                | -         |     0.20 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3047 | 2023-11-26 | Monte             | L   | 0.213      | -            | -                | -                | -         |    -6.10 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3052 | 2023-11-26 | MIBR              | W   | 0.212      | 0.500        | -                | 0.853 (0.091)    | -         |     1.65 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3076 | 2023-11-25 | Nouns             | W   | 0.206      | -            | -                | -                | -         |     0.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3081 | 2023-11-25 | TYLOO             | W   | 0.204      | -            | -                | -                | -         |     0.11 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3101 | 2023-11-24 | Nouns             | L   | 0.198      | -            | -                | -                | -         |    -6.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3151 | 2023-11-20 | 9 Pandas          | L   | 0.173      | -            | -                | -                | -         |    -5.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3167 | 2023-11-19 | MIBR              | W   | 0.166      | -            | -                | -                | -         |     1.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3227 | 2023-11-17 | FURIA             | W   | 0.153      | -            | -                | -                | -         |     1.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3260 | 2023-11-16 | PARIVISION        | W   | 0.146      | -            | -                | -                | -         |     0.02 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3333 | 2023-11-14 | BIG               | L   | 0.132      | -            | -                | -                | -         |    -3.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3406 | 2023-11-11 | Aurora            | L   | 0.113      | -            | -                | -                | -         |    -2.80 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3783 | 2023-10-27 | Aurora            | L   | 0.013      | -            | -                | -                | -         |    -0.33 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3848 | 2023-10-25 | FURIA             | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,351.47)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-02-11 |      0.726 | $16,000.00     | $11,623.14      |
| 2023-11-26 |      0.213 | $20,000.00     | $4,265.83       |
| 2023-11-20 |      0.173 | $20,000.00     | $3,462.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
