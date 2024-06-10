### Roster Details<br />
Team Name: Gods Reign<br />
Roster: 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [91](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  887.8<br />
<br />
Final Rank Value (887.8) = Starting Rank Value (838.9) + Head To Head Adjustments (48.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.468[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.132[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 838.9
- 400 + ( ( 0.220 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 838.9


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
|           14 |      580 | 2024-05-26 | True Rippers       | W   | 1.000      | 0.262        | 0.021 (0.006)    | 0.109 (0.029)    | 0 (0.000) |     9.58 | 1nhuman, Bhavi, Ph1NNN, R2B2, reV3nnnn |
|           13 |      582 | 2024-05-26 | Marcos             | W   | 1.000      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.02 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           12 |     1798 | 2024-04-10 | BIG                | L   | 0.793      | -            | -                | -                | -         |    -1.14 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           11 |     1853 | 2024-04-09 | Ninjas in Pyjamas  | L   | 0.786      | -            | -                | -                | -         |    -0.46 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           10 |     2097 | 2024-03-31 | True Rippers       | W   | 0.725      | 0.143        | 0.021 (0.002)    | 0.109 (0.011)    | 0 (0.000) |     7.09 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |     2112 | 2024-03-29 | Marcos             | W   | 0.711      | 0.143        | 0.001 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     5.03 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |     2205 | 2024-03-24 | Marcos             | W   | 0.677      | 0.262        | 0.001 (0.000)    | 0.026 (0.005)    | 0 (0.000) |     5.00 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |     2207 | 2024-03-24 | Grayfox            | W   | 0.677      | 0.262        | 0.001 (0.000)    | 0.019 (0.003)    | 0 (0.000) |     4.31 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |     2349 | 2024-03-16 | Aurora             | L   | 0.625      | -            | -                | -                | -         |    -0.47 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |     2351 | 2024-03-16 | Bad News Kangaroos | W   | 0.624      | 0.432        | 0.033 (0.009)    | 0.262 (0.071)    | 1 (0.624) |    10.56 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     2371 | 2024-03-15 | Aurora             | L   | 0.618      | -            | -                | -                | -         |    -0.44 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     2403 | 2024-03-14 | GRDX               | W   | 0.611      | 0.432        | 0.005 (0.001)    | 0.000 (0.000)    | 1 (0.611) |     3.11 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     2828 | 2024-02-25 | Grayfox            | W   | 0.491      | 0.262        | 0.001 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     3.43 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            1 |     2830 | 2024-02-24 | 2ez                | W   | 0.490      | 0.262        | 0.000 (0.000)    | 0.028 (0.004)    | 0 (0.000) |     1.26 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,274.99)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-14 |      0.820 | $15,000.00     | $12,294.91      |
| 2024-03-24 |      0.677 | $1,000.00      | $677.19         |
| 2024-03-16 |      0.625 | $12,500.00     | $7,812.22       |
| 2024-02-25 |      0.491 | $1,000.00      | $490.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
