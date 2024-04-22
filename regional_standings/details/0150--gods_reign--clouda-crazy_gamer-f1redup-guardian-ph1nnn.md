### Roster Details<br />
Team Name: Gods Reign<br />
Roster: clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  697.6<br />
<br />
Final Rank Value (697.6) = Starting Rank Value (714.7) + Head To Head Adjustments (-17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.7
- 400 + ( ( 0.163 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 714.7


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
|           14 |     1742 | 2024-02-09 | Pak Boyz       | L   | 0.710      | -            | -                | -                | -         |    -8.67 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           13 |     1754 | 2024-02-08 | True Rippers   | L   | 0.704      | -            | -                | -                | -         |    -6.64 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           12 |     1757 | 2024-02-07 | WahWah         | W   | 0.703      | 0.435        | 0.019 (0.006)    | 0.033 (0.010)    | 1 (0.703) |    11.42 | clouda, Crazy_Gamer, f1redup, GuardiaN, Ph1NNN |
|           11 |     2090 | 2024-01-21 | Trouble makers | L   | 0.585      | -            | -                | -                | -         |   -14.03 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|           10 |     2102 | 2024-01-20 | MAG            | L   | 0.583      | -            | -                | -                | -         |   -13.63 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            9 |     2189 | 2024-01-19 | SR Nacague     | W   | 0.571      | 0.143        | 0.000 (0.000)    | 0.078 (0.006)    | 0 (0.000) |     2.69 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            8 |     2204 | 2024-01-19 | RESILIENCE     | W   | 0.570      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.33 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            7 |     2289 | 2024-01-17 | MAG            | W   | 0.559      | 0.143        | 0.000 (0.000)    | 0.237 (0.019)    | 0 (0.000) |     4.37 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            6 |     2292 | 2024-01-17 | SR Nacague     | W   | 0.559      | 0.143        | 0.000 (0.000)    | 0.078 (0.006)    | 0 (0.000) |     2.79 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            5 |     2298 | 2024-01-17 | Drippy Lab     | W   | 0.558      | 0.143        | 0.000 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     2.67 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            4 |     2303 | 2024-01-17 | DarkSide       | W   | 0.558      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.59 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            3 |     2693 | 2023-12-17 | Marcos         | L   | 0.351      | -            | -                | -                | -         |    -2.53 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            2 |     2697 | 2023-12-16 | Ikari          | W   | 0.350      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.63 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |
|            1 |     3061 | 2023-11-26 | True Rippers   | L   | 0.210      | -            | -                | -                | -         |    -2.06 | clouda, Crazy_Gamer, CycloneF, f1redup, Ph1NNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,985.85)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-11 |      0.724 | $2,500.00      | $1,810.18       |
| 2023-12-17 |      0.351 | $500.00        | $175.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
