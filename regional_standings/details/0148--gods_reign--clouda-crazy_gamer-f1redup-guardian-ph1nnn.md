### Roster Details<br />
Team Name: Gods Reign<br />
Roster: clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [148](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  659.4<br />
<br />
Final Rank Value (659.4) = Starting Rank Value (669.1) + Head To Head Adjustments (-9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.1
- 400 + ( ( 0.139 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 669.1


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
|           13 |     2689 | 2024-02-09 | Pak Boyz       | L   | 0.463      | -            | -                | -                | -         |    -6.18 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           12 |     2701 | 2024-02-08 | True Rippers   | L   | 0.457      | -            | -                | -                | -         |    -6.61 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           11 |     2704 | 2024-02-07 | WahWah         | W   | 0.455      | 0.435        | 0.008 (0.002)    | 0.019 (0.004)    | 1 (0.455) |     7.33 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           10 |     3037 | 2024-01-21 | Trouble makers | L   | 0.338      | -            | -                | -                | -         |    -7.82 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            9 |     3049 | 2024-01-20 | MAG            | L   | 0.336      | -            | -                | -                | -         |    -7.66 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            8 |     3136 | 2024-01-19 | SR Nacague     | W   | 0.324      | 0.143        | 0.000 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     1.84 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            7 |     3151 | 2024-01-19 | RESILIENCE     | W   | 0.323      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     1.71 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            6 |     3236 | 2024-01-17 | MAG            | W   | 0.312      | 0.143        | 0.000 (0.000)    | 0.129 (0.006)    | 0 (0.000) |     2.69 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            5 |     3239 | 2024-01-17 | SR Nacague     | W   | 0.311      | 0.143        | 0.000 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     1.84 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            4 |     3245 | 2024-01-17 | Drippy Lab     | W   | 0.311      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     1.80 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            3 |     3250 | 2024-01-17 | DarkSide       | W   | 0.310      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.77 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            2 |     3640 | 2023-12-17 | Marcos         | L   | 0.104      | -            | -                | -                | -         |    -0.99 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            1 |     3644 | 2023-12-16 | Ikari          | W   | 0.102      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.58 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,243.65)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-11 |      0.477 | $2,500.00      | $1,191.68       |
| 2023-12-17 |      0.104 | $500.00        | $51.97          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
