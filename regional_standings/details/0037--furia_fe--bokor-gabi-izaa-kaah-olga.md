### Roster Details<br />
Team Name: FURIA fe<br />
Roster: bokor, GaBi, izaa, kaah, Olga<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1022.1<br />
<br />
Final Rank Value (1022.1) = Starting Rank Value (1025.2) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.455[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.418[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1025.2
- 400 + ( ( 0.306 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1025.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |        9 | 2023-02-12 | Nigma Galaxy      | L   | 1.000      | -            | -                | -                | -         |    -7.21 | bokor, GaBi, izaa, kaah, Olga |
|           10 |       35 | 2023-02-11 | 9 Pandas Fearless | W   | 1.000      | 0.500        | 0.027 (0.013)    | 0.225 (0.113)    | 1 (1.000) |    10.11 | bokor, GaBi, izaa, kaah, Olga |
|            9 |       51 | 2023-02-10 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |   -15.47 | bokor, GaBi, izaa, kaah, Olga |
|            8 |       55 | 2023-02-10 | 9 Pandas Fearless | W   | 1.000      | 0.500        | 0.027 (0.013)    | 0.225 (0.113)    | 1 (1.000) |     9.95 | bokor, GaBi, izaa, kaah, Olga |
|            7 |      679 | 2023-01-15 | W7M fe            | W   | 1.000      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.76 | bokor, GaBi, izaa, kaah, Olga |
|            6 |      939 | 2022-12-11 | B4 fe             | L   | 0.781      | -            | -                | -                | -         |   -16.45 | GaBi, izaa, kaah, mari, Olga  |
|            5 |     1392 | 2022-11-27 | Nigma Galaxy      | L   | 0.686      | -            | -                | -                | -         |    -5.63 | GaBi, izaa, kaah, mari, Olga  |
|            4 |     1400 | 2022-11-27 | HSG fe            | W   | 0.684      | 0.524        | 0.025 (0.009)    | 0.097 (0.035)    | 1 (0.684) |     5.67 | GaBi, izaa, kaah, mari, Olga  |
|            3 |     1458 | 2022-11-25 | B4 fe             | W   | 0.673      | 0.524        | 0.041 (0.014)    | 0.154 (0.054)    | 1 (0.673) |     7.25 | GaBi, izaa, kaah, mari, Olga  |
|            2 |     1465 | 2022-11-25 | 9 Pandas Fearless | W   | 0.671      | 0.524        | 0.027 (0.009)    | 0.225 (0.079)    | 1 (0.671) |     6.48 | GaBi, izaa, kaah, mari, Olga  |
|            1 |     1922 | 2022-10-23 | MIBR fe           | W   | 0.455      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.42 | GaBi, izaa, kaah, mari, Olga  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,982.31)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-01-15 |      1.000 | $750.00        | $750.00         |
| 2022-12-11 |      0.781 | $2,673.00      | $2,088.45       |
| 2022-11-27 |      0.686 | $25,000.00     | $17,143.86      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
