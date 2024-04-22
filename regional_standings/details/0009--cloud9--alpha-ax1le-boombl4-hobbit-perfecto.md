### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1573.3<br />
<br />
Final Rank Value (1573.3) = Starting Rank Value (1695.9) + Head To Head Adjustments (-122.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.756[<sup>1</sup>](#table2)
- Bounty Collected: 0.622[<sup>2</sup>](#table1)
- Opponent Network: 0.317[<sup>2</sup>](#table1)
- LAN Wins: 0.989[<sup>2</sup>](#table1)

The average of these factors is 0.671<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1695.9
- 400 + ( ( 0.671 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1695.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       55 | 2024-04-20 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.38 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           43 |       86 | 2024-04-19 | BetBoom           | W   | 1.000      | 0.143        | 0.457 (0.065)    | 0.898 (0.128)    | -         |     2.95 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           42 |      100 | 2024-04-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.68 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           41 |      375 | 2024-04-10 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -5.82 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           40 |      425 | 2024-04-08 | Wildcard          | W   | 1.000      | 0.624        | -                | 0.503 (0.314)    | 1 (1.000) |     0.54 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           39 |      455 | 2024-04-08 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |   -29.50 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           38 |      679 | 2024-03-28 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -11.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           37 |      762 | 2024-03-23 | Natus Vincere     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.499 (0.499)    | 1 (1.000) |    24.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           36 |      786 | 2024-03-22 | G2                | W   | 0.991      | 1.000        | 0.773 (0.766)    | 0.542 (0.538)    | 1 (0.991) |    23.69 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           35 |      797 | 2024-03-21 | Gaimin Gladiators | W   | 0.987      | 1.000        | 0.156 (0.153)    | 1.000 (0.987)    | 1 (0.987) |     4.07 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           34 |      805 | 2024-03-21 | Spirit            | L   | 0.986      | -            | -                | -                | -         |    -5.53 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           33 |      853 | 2024-03-18 | SAW               | W   | 0.966      | 0.143        | -                | 0.824 (0.114)    | 1 (0.966) |     4.59 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           32 |      871 | 2024-03-17 | Legacy            | W   | 0.960      | -            | -                | -                | 1 (0.960) |     1.70 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           31 |      889 | 2024-03-17 | Gaimin Gladiators | W   | 0.958      | 0.143        | -                | 1.000 (0.137)    | 1 (0.958) |     3.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           30 |     1097 | 2024-03-08 | SAW               | L   | 0.901      | -            | -                | -                | -         |   -25.10 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           29 |     1163 | 2024-03-06 | Rare Atom         | W   | 0.886      | 0.535        | -                | 0.233 (0.111)    | -         |     0.20 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           28 |     1494 | 2024-02-20 | Vitality          | W   | 0.786      | 0.143        | 1.000 (0.112)    | -                | 1 (0.786) |    17.34 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           27 |     1512 | 2024-02-19 | Apeks             | W   | 0.780      | -            | -                | -                | 1 (0.780) |     3.03 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           26 |     1521 | 2024-02-19 | PERA              | W   | 0.778      | -            | -                | -                | 1 (0.778) |     0.34 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           25 |     1778 | 2024-02-05 | Monte             | L   | 0.685      | -            | -                | -                | -         |   -19.83 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     1798 | 2024-02-04 | MOUZ              | L   | 0.679      | -            | -                | -                | -         |    -5.63 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     1851 | 2024-02-02 | Virtus.pro        | W   | 0.666      | 0.143        | 0.530 (0.050)    | -                | -         |    10.29 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     1879 | 2024-02-01 | BetBoom           | W   | 0.660      | 0.143        | 0.457 (0.043)    | 0.898 (0.085)    | -         |     2.26 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     1903 | 2024-01-31 | Rebels            | L   | 0.652      | -            | -                | -                | -         |   -20.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     1968 | 2024-01-26 | BIG               | L   | 0.621      | -            | -                | -                | -         |   -18.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     1993 | 2024-01-25 | Virtus.pro        | L   | 0.613      | -            | -                | -                | -         |   -10.60 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2006 | 2024-01-24 | HEROIC            | W   | 0.607      | 0.581        | 0.281 (0.099)    | 0.731 (0.258)    | -         |     6.65 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2178 | 2024-01-19 | BetBoom           | W   | 0.573      | -            | -                | -                | -         |     1.55 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2231 | 2024-01-18 | 3DMAX             | W   | 0.566      | -            | -                | -                | -         |     0.47 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2252 | 2024-01-18 | OG                | W   | 0.566      | 0.143        | 0.497 (0.040)    | -                | -         |     2.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     2748 | 2023-12-15 | MOUZ              | L   | 0.337      | -            | -                | -                | -         |    -2.94 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     2751 | 2023-12-14 | Vitality          | L   | 0.331      | -            | -                | -                | -         |    -3.31 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     2763 | 2023-12-13 | ENCE              | W   | 0.323      | -            | -                | -                | -         |     0.07 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     2841 | 2023-12-08 | BetBoom           | L   | 0.291      | -            | -                | -                | -         |    -8.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     2864 | 2023-12-07 | MIBR              | L   | 0.286      | -            | -                | -                | -         |    -7.46 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     2930 | 2023-12-05 | GamerLegion       | W   | 0.271      | -            | -                | -                | -         |     1.06 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3071 | 2023-11-25 | Vitality          | L   | 0.206      | -            | -                | -                | -         |    -2.32 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3094 | 2023-11-24 | HEROIC            | W   | 0.199      | -            | -                | -                | -         |     0.03 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3112 | 2023-11-23 | FaZe              | L   | 0.192      | -            | -                | -                | -         |    -0.94 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3128 | 2023-11-22 | Natus Vincere     | W   | 0.185      | 0.729        | 1.000 (0.135)    | -                | -         |     4.74 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3540 | 2023-11-04 | FaZe              | L   | 0.066      | -            | -                | -                | -         |    -0.32 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3560 | 2023-11-03 | BIG               | W   | 0.059      | -            | -                | -                | -         |     0.12 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     3760 | 2023-10-28 | Virtus.pro        | W   | 0.018      | -            | -                | -                | -         |     0.24 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     3801 | 2023-10-27 | fnatic            | W   | 0.011      | -            | -                | -                | -         |     0.00 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($90,502.54)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-03-10 |      0.914 | $7,500.00      | $6,854.20       |
| 2024-02-11 |      0.726 | $10,000.00     | $7,264.46       |
| 2024-01-28 |      0.633 | $8,500.00      | $5,382.35       |
| 2023-12-17 |      0.352 | $25,000.00     | $8,805.33       |
| 2023-11-26 |      0.213 | $40,000.00     | $8,510.81       |
| 2023-11-05 |      0.074 | $50,000.00     | $3,685.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
