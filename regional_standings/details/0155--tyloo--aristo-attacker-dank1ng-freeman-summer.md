### Roster Details<br />
Team Name: TYLOO<br />
Roster: aristo, Attacker, DANK1NG, Freeman, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  704.8<br />
<br />
Final Rank Value (704.8) = Starting Rank Value (695.7) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.7
- 400 + ( ( 0.144 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 695.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      744 | 2022-12-25 | Rare Atom       | L   | 0.871      | -            | -                | -                | -         |    -9.89 | aristo, Attacker, DANK1NG, Freeman, Summer |
|            9 |      748 | 2022-12-24 | Renewal         | W   | 0.864      | 0.375        | 0.002 (0.001)    | 0.083 (0.027)    | 0 (0.000) |    11.21 | aristo, Attacker, DANK1NG, Freeman, Summer |
|            8 |     1867 | 2022-10-26 | SAW             | L   | 0.473      | -            | -                | -                | -         |    -1.39 | aristo, DANK1NG, Freeman, SLOWLY, Summer   |
|            7 |     1898 | 2022-10-25 | Bad News Eagles | W   | 0.464      | 0.384        | 0.066 (0.012)    | 0.375 (0.067)    | 0 (0.000) |    13.54 | aristo, DANK1NG, Freeman, SLOWLY, Summer   |
|            6 |     1955 | 2022-10-22 | PROSPECTS       | L   | 0.447      | -            | -                | -                | -         |    -2.81 | aristo, DANK1NG, Freeman, SLOWLY, Summer   |
|            5 |     2045 | 2022-10-19 | Vitality        | L   | 0.426      | -            | -                | -                | -         |    -0.08 | aristo, DANK1NG, Freeman, SLOWLY, Summer   |
|            4 |     3509 | 2022-08-27 | Wings Up        | L   | 0.073      | -            | -                | -                | -         |    -1.10 | Attacker, BnTeT, DANK1NG, SLOWLY, Summer   |
|            3 |     3542 | 2022-08-27 | Lynn Vision     | L   | 0.071      | -            | -                | -                | -         |    -0.68 | Attacker, BnTeT, DANK1NG, SLOWLY, Summer   |
|            2 |     3704 | 2022-08-21 | WDNMD           | W   | 0.032      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.16 | Attacker, BnTeT, DANK1NG, SLOWLY, Summer   |
|            1 |     3732 | 2022-08-20 | SHPL            | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.13 | Attacker, BnTeT, DANK1NG, SLOWLY, Summer   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,977.36)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-10-26 |      0.474 | $1,500.00      | $710.50         |
| 2022-10-23 |      0.453 | $5,000.00      | $2,266.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
