### Roster Details<br />
Team Name: K23<br />
Roster: iDISBALANCE, Jyo, Magnojez, Raijin, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  919.8<br />
<br />
Final Rank Value (919.8) = Starting Rank Value (888.6) + Head To Head Adjustments (31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.6
- 400 + ( ( 0.239 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 888.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       80 | 2023-02-08 | FTW               | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.300 (0.130)    | 0 (0.000) |    10.53 | iDISBALANCE, Jyo, Magnojez, Raijin, X5G7V     |
|           17 |      466 | 2023-01-24 | HEET              | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.240 (0.104)    | 0 (0.000) |     9.15 | iDISBALANCE, Jyo, Magnojez, Raijin, X5G7V     |
|           16 |      944 | 2022-12-11 | ECSTATIC          | L   | 0.780      | -            | -                | -                | -         |   -15.07 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V      |
|           15 |      978 | 2022-12-10 | ECLOT             | L   | 0.774      | -            | -                | -                | -         |   -11.31 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V      |
|           14 |     1073 | 2022-12-07 | Young Ninjas      | W   | 0.753      | 0.435        | 0.076 (0.025)    | 0.694 (0.227)    | 0 (0.000) |    12.97 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V      |
|           13 |     1114 | 2022-12-06 | Permitta          | L   | 0.747      | -            | -                | -                | -         |   -12.93 | clax, def1zer, Jyo, Raijin, X5G7V             |
|           12 |     1141 | 2022-12-05 | PROSPECTS         | W   | 0.740      | 0.435        | 0.032 (0.010)    | 0.689 (0.222)    | 0 (0.000) |    12.30 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V      |
|           11 |     1214 | 2022-12-03 | INVSN             | L   | 0.727      | -            | -                | -                | -         |   -11.87 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V      |
|           10 |     1229 | 2022-12-03 | Forward           | L   | 0.725      | -            | -                | -                | -         |   -15.53 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V      |
|            9 |     1248 | 2022-12-02 | Next in Line      | W   | 0.720      | -            | -                | -                | 1 (0.720) |     1.04 | def1zer, iDISBALANCE, PASHANOJ, Raijin, X5G7V |
|            8 |     1514 | 2022-11-22 | SINNERS           | W   | 0.653      | 0.435        | 0.068 (0.019)    | 0.549 (0.156)    | 0 (0.000) |    12.12 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            7 |     1530 | 2022-11-20 | Copenhagen Flames | L   | 0.640      | -            | -                | -                | -         |    -7.12 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            6 |     1543 | 2022-11-20 | Illuminar         | W   | 0.638      | 0.426        | 0.048 (0.013)    | 0.700 (0.191)    | 0 (0.000) |    12.67 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            5 |     1553 | 2022-11-19 | forZe             | W   | 0.633      | 0.426        | 0.047 (0.013)    | 0.708 (0.191)    | 0 (0.000) |    12.23 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            4 |     1571 | 2022-11-18 | Copenhagen Flames | L   | 0.626      | -            | -                | -                | -         |    -7.31 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            3 |     1598 | 2022-11-17 | UNGENTIUM         | W   | 0.618      | 0.435        | 0.015 (0.004)    | 0.474 (0.127)    | 0 (0.000) |     7.09 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            2 |     1639 | 2022-11-15 | IKLA              | W   | 0.606      | 0.435        | 0.017 (0.004)    | 0.743 (0.196)    | 0 (0.000) |    10.47 | clax, def1zer, Jyo, Raijin, X5G7V             |
|            1 |     1640 | 2022-11-15 | ECLOT             | W   | 0.605      | 0.426        | 0.046 (0.012)    | 0.584 (0.151)    | -         |    11.70 | clax, def1zer, Jyo, Raijin, X5G7V             |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,537.43)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-20 |      0.640 | $10,000.00     | $6,402.73       |
| 2022-11-18 |      0.627 | $5,000.00      | $3,134.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
