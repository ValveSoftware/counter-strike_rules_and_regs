### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, yoom<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [64](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  943.0<br />
<br />
Final Rank Value (943.0) = Starting Rank Value (909.1) + Head To Head Adjustments (33.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.564[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.190[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 909.1
- 400 + ( ( 0.267 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 909.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      647 | 2024-04-10 | BIG                | L   | 1.000      | -            | -                | -                | -         |    -2.70 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |      702 | 2024-04-09 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |    -9.05 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |      946 | 2024-03-31 | True Rippers       | W   | 0.958      | 0.143        | 0.056 (0.008)    | 0.195 (0.027)    | 0 (0.000) |    10.33 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |      961 | 2024-03-29 | Marcos             | W   | 0.945      | 0.143        | 0.003 (0.000)    | 0.040 (0.005)    | 0 (0.000) |     5.38 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     1054 | 2024-03-24 | Marcos             | W   | 0.910      | 0.262        | 0.003 (0.001)    | 0.040 (0.010)    | 0 (0.000) |     5.45 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     1056 | 2024-03-24 | Grayfox            | W   | 0.910      | 0.262        | 0.004 (0.001)    | 0.032 (0.008)    | 0 (0.000) |     4.45 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     1198 | 2024-03-16 | Aurora             | L   | 0.858      | -            | -                | -                | -         |    -1.17 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     1200 | 2024-03-16 | Bad News Kangaroos | W   | 0.857      | 0.432        | 0.068 (0.025)    | 0.359 (0.133)    | 1 (0.857) |    13.76 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     1220 | 2024-03-15 | Aurora             | L   | 0.851      | -            | -                | -                | -         |    -1.09 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     1252 | 2024-03-14 | GRDX               | W   | 0.844      | 0.432        | 0.013 (0.005)    | 0.000 (0.000)    | 1 (0.844) |     3.26 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     1677 | 2024-02-25 | Grayfox            | W   | 0.724      | 0.262        | 0.004 (0.001)    | 0.032 (0.006)    | 0 (0.000) |     3.96 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     1679 | 2024-02-24 | 2ez                | W   | 0.723      | 0.262        | 0.000 (0.000)    | 0.063 (0.012)    | 0 (0.000) |     1.30 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,362.42)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-03-24 |      0.910 | $1,000.00      | $910.46         |
| 2024-03-16 |      0.858 | $12,500.00     | $10,728.03      |
| 2024-02-25 |      0.724 | $1,000.00      | $723.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
