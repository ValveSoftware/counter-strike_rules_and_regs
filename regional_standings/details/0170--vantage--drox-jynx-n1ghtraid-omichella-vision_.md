### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, N1ghtraid, Omichella, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  655.4<br />
<br />
Final Rank Value (655.4) = Starting Rank Value (677.2) + Head To Head Adjustments (-21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.2
- 400 + ( ( 0.139 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 677.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      261 | 2024-06-06 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |    -9.57 | Drox, Jynx, N1ghtraid, Omichella, vision     |
|           32 |      674 | 2024-05-22 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -6.93 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           31 |      678 | 2024-05-22 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -7.37 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           30 |     1457 | 2024-04-22 | Mindfreak          | L   | 0.871      | -            | -                | -                | -         |   -10.15 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           29 |     1460 | 2024-04-22 | Mindfreak          | L   | 0.871      | -            | -                | -                | -         |   -10.92 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           28 |     1648 | 2024-04-17 | Arcade             | L   | 0.838      | -            | -                | -                | -         |   -14.81 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |     1810 | 2024-04-10 | Arcade             | W   | 0.791      | 0.333        | 0.005 (0.001)    | 0.189 (0.050)    | 0 (0.000) |    10.96 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |     1817 | 2024-04-10 | Arcade             | W   | 0.791      | 0.333        | 0.005 (0.001)    | 0.189 (0.050)    | 0 (0.000) |    11.75 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |     2041 | 2024-04-03 | KZG                | W   | 0.744      | 0.333        | 0.010 (0.002)    | 0.168 (0.042)    | 0 (0.000) |    10.74 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |     2042 | 2024-04-03 | KZG                | W   | 0.744      | 0.333        | 0.010 (0.002)    | 0.168 (0.042)    | 0 (0.000) |    11.47 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |     2170 | 2024-03-27 | Canon Event        | W   | 0.698      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.74 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     2174 | 2024-03-27 | Canon Event        | W   | 0.698      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     6.02 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     2440 | 2024-03-13 | DXA                | L   | 0.605      | -            | -                | -                | -         |    -9.35 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     2445 | 2024-03-13 | DXA                | W   | 0.604      | 0.333        | 0.005 (0.001)    | 0.209 (0.042)    | 0 (0.000) |     9.91 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     2617 | 2024-03-06 | Bad News Kangaroos | L   | 0.558      | -            | -                | -                | -         |    -4.08 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     2619 | 2024-03-06 | Bad News Kangaroos | L   | 0.558      | -            | -                | -                | -         |    -4.22 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           17 |     2788 | 2024-02-27 | RKON               | W   | 0.504      | 0.333        | -                | 0.088 (0.015)    | 0 (0.000) |     5.18 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           16 |     2791 | 2024-02-27 | RKON               | L   | 0.504      | -            | -                | -                | -         |   -10.97 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           15 |     2892 | 2024-02-22 | Bad News Kangaroos | L   | 0.471      | -            | -                | -                | -         |    -3.64 | Drox, Omichella, SkulL, viridian, vision     |
|           14 |     2893 | 2024-02-21 | Rooster            | L   | 0.470      | -            | -                | -                | -         |    -4.59 | Drox, Omichella, SkulL, viridian, vision     |
|           13 |     2927 | 2024-02-21 | Arcade             | W   | 0.464      | 0.143        | 0.005 (0.000)    | 0.189 (0.013)    | 0 (0.000) |     7.70 | Drox, Omichella, SkulL, viridian, vision     |
|           12 |     2947 | 2024-02-20 | Mindfreak          | W   | 0.458      | 0.143        | 0.005 (0.000)    | 0.260 (0.017)    | 0 (0.000) |     8.38 | Drox, Omichella, SkulL, viridian, vision     |
|           11 |     2949 | 2024-02-20 | Blitz              | W   | 0.458      | -            | -                | -                | -         |     2.64 | Drox, Omichella, SkulL, viridian, vision     |
|           10 |     2992 | 2024-02-18 | Mindfreak          | L   | 0.444      | -            | -                | -                | -         |    -5.98 | Drox, Omichella, SkulL, viridian, vision     |
|            9 |     2993 | 2024-02-18 | LE-LUX             | W   | 0.444      | -            | -                | -                | -         |     2.57 | Drox, Omichella, SkulL, viridian, vision     |
|            8 |     3445 | 2024-01-25 | Bad News Kangaroos | L   | 0.285      | -            | -                | -                | -         |    -6.43 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     3465 | 2024-01-24 | KZG                | W   | 0.277      | 0.143        | 0.010 (0.000)    | 0.168 (0.007)    | -         |     5.04 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     3592 | 2024-01-20 | FlyQuest           | L   | 0.251      | -            | -                | -                | -         |    -0.13 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3594 | 2024-01-20 | iM Apartments      | W   | 0.250      | -            | -                | -                | -         |     1.41 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     3653 | 2024-01-18 | Mindfreak          | L   | 0.243      | -            | -                | -                | -         |    -5.20 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     3710 | 2024-01-17 | Mindfreak          | L   | 0.237      | -            | -                | -                | -         |    -5.20 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     3758 | 2024-01-17 | FARMism            | W   | 0.231      | -            | -                | -                | -         |     1.29 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     3835 | 2024-01-15 | DXA                | L   | 0.217      | -            | -                | -                | -         |    -3.13 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
