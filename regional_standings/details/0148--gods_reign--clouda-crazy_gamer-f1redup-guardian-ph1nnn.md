### Roster Details<br />
Team Name: Gods Reign<br />
Roster: clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  690.8<br />
<br />
Final Rank Value (690.8) = Starting Rank Value (705.0) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.0
- 400 + ( ( 0.160 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 705.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2038 | 2024-02-09 | Pak Boyz       | L   | 0.617      | -            | -                | -                | -         |    -7.71 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           13 |     2050 | 2024-02-08 | True Rippers   | L   | 0.611      | -            | -                | -                | -         |    -6.22 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           12 |     2053 | 2024-02-07 | WahWah         | W   | 0.610      | 0.435        | 0.019 (0.005)    | 0.027 (0.007)    | 1 (0.610) |     9.91 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           11 |     2386 | 2024-01-21 | Trouble makers | L   | 0.492      | -            | -                | -                | -         |   -11.75 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|           10 |     2398 | 2024-01-20 | MAG            | L   | 0.490      | -            | -                | -                | -         |   -11.45 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            9 |     2485 | 2024-01-19 | SR Nacague     | W   | 0.478      | 0.143        | 0.000 (0.000)    | 0.062 (0.004)    | 0 (0.000) |     2.34 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            8 |     2500 | 2024-01-19 | RESILIENCE     | W   | 0.477      | 0.143        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     2.07 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            7 |     2585 | 2024-01-17 | MAG            | W   | 0.466      | 0.143        | 0.000 (0.000)    | 0.193 (0.013)    | 0 (0.000) |     3.69 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            6 |     2588 | 2024-01-17 | SR Nacague     | W   | 0.465      | 0.143        | 0.000 (0.000)    | 0.062 (0.004)    | 0 (0.000) |     2.39 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            5 |     2594 | 2024-01-17 | Drippy Lab     | W   | 0.465      | 0.143        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     2.31 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            4 |     2599 | 2024-01-17 | DarkSide       | W   | 0.464      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.25 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            3 |     2989 | 2023-12-17 | Marcos         | L   | 0.258      | -            | -                | -                | -         |    -1.99 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            2 |     2993 | 2023-12-16 | Ikari          | W   | 0.256      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.25 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            1 |     3357 | 2023-11-26 | True Rippers   | L   | 0.117      | -            | -                | -                | -         |    -1.23 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,705.93)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-11 |      0.631 | $2,500.00      | $1,576.91       |
| 2023-12-17 |      0.258 | $500.00        | $129.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
