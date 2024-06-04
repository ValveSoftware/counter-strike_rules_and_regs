### Roster Details<br />
Team Name: Gods Reign<br />
Roster: 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  890.8<br />
<br />
Final Rank Value (890.8) = Starting Rank Value (846.4) + Head To Head Adjustments (44.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.479[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 846.4
- 400 + ( ( 0.230 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 846.4


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
|           14 |       80 | 2024-05-26 | True Rippers       | W   | 1.000      | 0.262        | 0.025 (0.007)    | 0.127 (0.033)    | 0 (0.000) |     9.71 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |       82 | 2024-05-26 | Marcos             | W   | 1.000      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.00 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     1298 | 2024-04-10 | BIG                | L   | 0.872      | -            | -                | -                | -         |    -1.81 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     1353 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.865      | -            | -                | -                | -         |    -6.91 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     1597 | 2024-03-31 | True Rippers       | W   | 0.804      | 0.143        | 0.025 (0.003)    | 0.127 (0.015)    | 0 (0.000) |     7.76 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     1612 | 2024-03-29 | Marcos             | W   | 0.791      | 0.143        | 0.001 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     5.36 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     1705 | 2024-03-24 | Marcos             | W   | 0.756      | 0.262        | 0.001 (0.000)    | 0.031 (0.006)    | 0 (0.000) |     5.38 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     1707 | 2024-03-24 | Grayfox            | W   | 0.756      | 0.262        | 0.002 (0.000)    | 0.024 (0.005)    | 0 (0.000) |     4.60 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     1849 | 2024-03-16 | Aurora             | L   | 0.704      | -            | -                | -                | -         |    -1.00 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     1851 | 2024-03-16 | Bad News Kangaroos | W   | 0.703      | 0.432        | 0.032 (0.010)    | 0.306 (0.093)    | 1 (0.703) |    11.67 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     1871 | 2024-03-15 | Aurora             | L   | 0.697      | -            | -                | -                | -         |    -0.94 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     1903 | 2024-03-14 | GRDX               | W   | 0.690      | 0.432        | 0.006 (0.002)    | 0.000 (0.000)    | 1 (0.690) |     3.35 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     2328 | 2024-02-25 | Grayfox            | W   | 0.570      | 0.262        | 0.002 (0.000)    | 0.024 (0.004)    | 0 (0.000) |     3.83 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     2330 | 2024-02-24 | 2ez                | W   | 0.569      | 0.262        | 0.000 (0.000)    | 0.039 (0.006)    | 0 (0.000) |     1.40 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,610.57)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-14 |      0.899 | $15,000.00     | $13,482.49      |
| 2024-03-24 |      0.756 | $1,000.00      | $756.36         |
| 2024-03-16 |      0.704 | $12,500.00     | $8,801.87       |
| 2024-02-25 |      0.570 | $1,000.00      | $569.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
