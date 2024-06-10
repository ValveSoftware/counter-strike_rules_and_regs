### Roster Details<br />
Team Name: Gods Reign<br />
Roster: clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  656.5<br />
<br />
Final Rank Value (656.5) = Starting Rank Value (663.9) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.9
- 400 + ( ( 0.132 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 663.9


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
|           13 |     3189 | 2024-02-09 | Pak Boyz       | L   | 0.384      | -            | -                | -                | -         |    -5.22 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           12 |     3201 | 2024-02-08 | True Rippers   | L   | 0.378      | -            | -                | -                | -         |    -5.49 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           11 |     3204 | 2024-02-07 | WahWah         | W   | 0.376      | 0.435        | 0.007 (0.001)    | 0.015 (0.002)    | 1 (0.376) |     6.06 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           10 |     3537 | 2024-01-21 | Trouble makers | L   | 0.259      | -            | -                | -                | -         |    -5.91 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            9 |     3549 | 2024-01-20 | MAG            | L   | 0.257      | -            | -                | -                | -         |    -5.71 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            8 |     3636 | 2024-01-19 | SR Nacague     | W   | 0.245      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     1.44 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            7 |     3651 | 2024-01-19 | RESILIENCE     | W   | 0.244      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.34 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            6 |     3736 | 2024-01-17 | MAG            | W   | 0.232      | 0.143        | 0.000 (0.000)    | 0.096 (0.003)    | 0 (0.000) |     2.13 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            5 |     3739 | 2024-01-17 | SR Nacague     | W   | 0.232      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     1.39 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            4 |     3745 | 2024-01-17 | Drippy Lab     | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     1.37 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            3 |     3750 | 2024-01-17 | DarkSide       | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.35 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            2 |     4140 | 2023-12-17 | Marcos         | L   | 0.025      | -            | -                | -                | -         |    -0.25 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            1 |     4144 | 2023-12-16 | Ikari          | W   | 0.023      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.14 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,006.13)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-11 |      0.397 | $2,500.00      | $993.75         |
| 2023-12-17 |      0.025 | $500.00        | $12.39          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
