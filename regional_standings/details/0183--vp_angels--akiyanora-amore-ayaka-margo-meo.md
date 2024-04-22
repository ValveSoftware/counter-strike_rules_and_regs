### Roster Details<br />
Team Name: VP.Angels<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  606.8<br />
<br />
Final Rank Value (606.8) = Starting Rank Value (655.8) + Head To Head Adjustments (-48.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 655.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       90 | 2024-04-19 | NAVI Javelins     | L   | 1.000      | -            | -                | -                | -         |    -5.54 | akiyanora, amore, ayaka, Margo, meo |
|            9 |      302 | 2024-04-11 | Fearless Cheetahs | L   | 1.000      | -            | -                | -                | -         |    -8.49 | akiyanora, amore, ayaka, Margo, meo |
|            8 |      356 | 2024-04-10 | Permitta W        | L   | 1.000      | -            | -                | -                | -         |   -21.23 | akiyanora, amore, ayaka, Margo, meo |
|            7 |      439 | 2024-04-08 | Pigeons           | L   | 1.000      | -            | -                | -                | -         |    -5.91 | akiyanora, amore, ayaka, Margo, meo |
|            6 |      673 | 2024-03-28 | 1WIN Gang         | W   | 1.000      | 0.331        | 0.006 (0.002)    | 0.046 (0.015)    | 0 (0.000) |    14.14 | akiyanora, amore, ayaka, Margo, meo |
|            5 |      826 | 2024-03-20 | Spirit fe         | L   | 0.980      | -            | -                | -                | -         |   -13.95 | akiyanora, amore, ayaka, Margo, meo |
|            4 |      977 | 2024-03-13 | Let Her Cook      | L   | 0.934      | -            | -                | -                | -         |   -13.65 | akiyanora, amore, ayaka, Margo, meo |
|            3 |     1411 | 2024-02-24 | NAVI Javelins     | L   | 0.812      | -            | -                | -                | -         |    -6.66 | akiyanora, amore, ayaka, Margo, meo |
|            2 |     1539 | 2024-02-18 | ex-FORZE Ladies   | W   | 0.773      | 0.143        | 0.009 (0.001)    | 0.093 (0.010)    | 0 (0.000) |    12.37 | akiyanora, amore, ayaka, Margo, meo |
|            1 |     3845 | 2023-10-25 | ENCE Athena       | L   | 0.000      | -            | -                | -                | -         |    -0.00 | amore, ayaka, Katherine, Margo, meo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,059.90)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      1.000 | $1,050.00      | $1,050.00       |
| 2023-10-28 |      0.020 | $500.00        | $9.90           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
