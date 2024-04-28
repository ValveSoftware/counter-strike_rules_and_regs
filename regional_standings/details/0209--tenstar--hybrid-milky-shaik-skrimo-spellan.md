### Roster Details<br />
Team Name: TENSTAR<br />
Roster: hybrid, milky, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [209](../standings_global.md)<br />
Regional Rank: [127]( ../standings_europe.md)<br />
Final Rank Value:  567.6<br />
<br />
Final Rank Value (567.6) = Starting Rank Value (513.8) + Head To Head Adjustments (53.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.8
- 400 + ( ( 0.056 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 513.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       13 | 2023-02-12 | iDestructive  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.85 | hybrid, milky, shaiK, Skrimo, SPELLAN    |
|            9 |       34 | 2023-02-11 | Nexus         | L   | 1.000      | -            | -                | -                | -         |    -4.79 | hybrid, milky, shaiK, Skrimo, SPELLAN    |
|            8 |      558 | 2023-01-21 | HONORIS       | L   | 1.000      | -            | -                | -                | -         |    -3.95 | hybrid, mar, milky, shaiK, Skrimo        |
|            7 |      612 | 2023-01-18 | Sangal        | L   | 1.000      | -            | -                | -                | -         |    -4.20 | hybrid, mar, milky, shaiK, Skrimo        |
|            6 |      665 | 2023-01-16 | BLINK         | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.081 (0.035)    | 0 (0.000) |    17.99 | hybrid, mar, milky, shaiK, Skrimo        |
|            5 |      693 | 2023-01-15 | HONORIS       | L   | 1.000      | -            | -                | -                | -         |    -4.11 | hybrid, mar, milky, shaiK, Skrimo        |
|            4 |      788 | 2022-12-18 | Zero Tenacity | W   | 0.825      | 0.143        | 0.011 (0.001)    | 0.210 (0.025)    | 0 (0.000) |    20.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |      813 | 2022-12-17 | Genk          | W   | 0.819      | 0.143        | 0.007 (0.001)    | 0.092 (0.011)    | 0 (0.000) |    18.53 | hybrid, mar, milky, shaiK, Skrimo        |
|            2 |      819 | 2022-12-17 | LIBURNA       | W   | 0.819      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.68 | Dardi, mdm, stich, unn1x, wolfano        |
|            1 |      851 | 2022-12-16 | Partizan      | L   | 0.811      | -            | -                | -                | -         |    -3.67 | Expr4ind, hybrid, mar, milky, shaiK      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
