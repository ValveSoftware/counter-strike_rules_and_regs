### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, yoom<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
Final Rank Value:  939.4<br />
<br />
Final Rank Value (939.4) = Starting Rank Value (918.5) + Head To Head Adjustments (21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.550[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.210[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 918.5
- 400 + ( ( 0.268 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 918.5


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
|           14 |      351 | 2024-04-10 | BIG                | L   | 1.000      | -            | -                | -                | -         |    -5.76 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           13 |      406 | 2024-04-09 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -15.12 | Bhavi, f1redup, Ph1NNN, R2B2, yoom     |
|           12 |      650 | 2024-03-31 | True Rippers       | W   | 1.000      | 0.143        | 0.050 (0.007)    | 0.182 (0.026)    | 0 (0.000) |    11.52 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           11 |      665 | 2024-03-29 | Marcos             | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.046 (0.007)    | 0 (0.000) |     5.69 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|           10 |      758 | 2024-03-24 | Marcos             | W   | 1.000      | 0.262        | 0.003 (0.001)    | 0.046 (0.012)    | 0 (0.000) |     6.00 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            9 |      760 | 2024-03-24 | Grayfox            | W   | 1.000      | 0.262        | 0.004 (0.001)    | 0.038 (0.010)    | 0 (0.000) |     4.52 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            8 |      902 | 2024-03-16 | Aurora             | L   | 0.952      | -            | -                | -                | -         |    -3.76 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            7 |      904 | 2024-03-16 | Bad News Kangaroos | W   | 0.950      | 0.432        | 0.046 (0.019)    | 0.429 (0.176)    | 1 (0.950) |    13.68 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            6 |      924 | 2024-03-15 | Aurora             | L   | 0.944      | -            | -                | -                | -         |    -3.62 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            5 |      956 | 2024-03-14 | GRDX               | W   | 0.938      | 0.432        | 0.012 (0.005)    | 0.000 (0.000)    | 1 (0.938) |     3.48 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            4 |     1381 | 2024-02-25 | Grayfox            | W   | 0.817      | 0.262        | 0.004 (0.001)    | 0.038 (0.008)    | 0 (0.000) |     4.04 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            3 |     1383 | 2024-02-24 | 2ez                | W   | 0.817      | 0.262        | 0.000 (0.000)    | 0.079 (0.017)    | 0 (0.000) |     1.42 | Bhavi, f1redup, Ph1NNN, R2B2, reV3nnnn |
|            2 |     3520 | 2023-11-05 | True Rippers       | L   | 0.071      | -            | -                | -                | -         |    -1.32 | Bhavi, CycloneF, ELV1S, f1redup, R2B2  |
|            1 |     3527 | 2023-11-05 | Firedup            | W   | 0.071      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.071) |     0.20 | Bhavi, CycloneF, ELV1S, f1redup, R2B2  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,840.43)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-03-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-16 |      0.952 | $12,500.00     | $11,894.36      |
| 2024-02-25 |      0.817 | $1,000.00      | $817.24         |
| 2023-11-05 |      0.071 | $1,802.00      | $128.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
