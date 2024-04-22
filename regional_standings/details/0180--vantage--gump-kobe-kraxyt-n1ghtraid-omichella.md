### Roster Details<br />
Team Name: Vantage<br />
Roster: gump, Kobe, KRAXYT, N1ghtraid, Omichella<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  618.0<br />
<br />
Final Rank Value (618.0) = Starting Rank Value (612.5) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.5
- 400 + ( ( 0.110 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 612.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2998 | 2023-12-01 | DXA                | W   | 0.244      | 0.143        | 0.009 (0.000)    | 0.277 (0.010)    | 0 (0.000) |     5.01 | gump, Kobe, KRAXYT, N1ghtraid, Omichella    |
|           11 |     3159 | 2023-11-20 | Bad News Kangaroos | L   | 0.171      | -            | -                | -                | -         |    -0.79 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|           10 |     3336 | 2023-11-14 | DXA                | W   | 0.131      | 0.301        | 0.009 (0.000)    | 0.277 (0.011)    | 0 (0.000) |     2.72 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            9 |     3386 | 2023-11-12 | KZG                | L   | 0.117      | -            | -                | -                | -         |    -2.53 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            8 |     3416 | 2023-11-10 | sunday school      | L   | 0.110      | -            | -                | -                | -         |    -1.85 | Kobe, KRAXYT, Lexon, Mingovi, Omichella     |
|            7 |     3508 | 2023-11-06 | Mindfreak          | W   | 0.077      | 0.301        | 0.000 (0.000)    | 0.273 (0.006)    | 0 (0.000) |     1.25 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            6 |     3553 | 2023-11-04 | Bad News Kangaroos | L   | 0.064      | -            | -                | -                | -         |    -0.28 | Kobe, KRAXYT, Lexon, Mingovi, Omichella     |
|            5 |     3554 | 2023-11-03 | Stirlzs Angels     | W   | 0.063      | 0.312        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.88 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            4 |     3570 | 2023-11-03 | Mindfreak          | W   | 0.057      | 0.312        | 0.000 (0.000)    | 0.273 (0.005)    | 0 (0.000) |     0.93 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            3 |     3650 | 2023-10-31 | MANTRA             | W   | 0.038      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.28 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            2 |     3733 | 2023-10-28 | Rooster            | L   | 0.023      | -            | -                | -                | -         |    -0.23 | Kobe, KRAXYT, Lexon, N1ghtraid, Omichella   |
|            1 |     3773 | 2023-10-28 | Antic              | W   | 0.017      | 0.312        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.12 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($151.24)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-11-21 |      0.178 | $481.00        | $85.63          |
| 2023-11-04 |      0.070 | $943.00        | $65.62          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
