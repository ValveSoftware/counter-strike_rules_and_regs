### Roster Details<br />
Team Name: KRÜ<br />
Roster: atarax1a, laser, lenci, reversive, righi<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  771.3<br />
<br />
Final Rank Value (771.3) = Starting Rank Value (772.4) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.4
- 400 + ( ( 0.192 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 772.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      352 | 2024-05-16 | FURIA Academy | L   | 1.000      | -            | -                | -                | -         |   -24.54 | atarax1a, laser, lenci, reversive, righi  |
|           15 |      360 | 2024-05-16 | Case          | L   | 1.000      | -            | -                | -                | -         |   -14.62 | Andrew, atarax1a, laser, lenci, reversive |
|           14 |      407 | 2024-05-15 | Solid         | W   | 1.000      | 0.371        | 0.062 (0.023)    | 0.627 (0.232)    | 0 (0.000) |    18.01 | atarax1a, laser, lenci, reversive, righi  |
|           13 |      470 | 2024-05-14 | ODDIK         | L   | 1.000      | -            | -                | -                | -         |    -9.62 | atarax1a, laser, lenci, reversive, righi  |
|           12 |      503 | 2024-05-13 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -0.97 | atarax1a, laser, lenci, reversive, righi  |
|           11 |      516 | 2024-05-12 | Galorys       | L   | 1.000      | -            | -                | -                | -         |   -13.97 | atarax1a, laser, lenci, reversive, righi  |
|           10 |      540 | 2024-05-11 | 9z            | L   | 1.000      | -            | -                | -                | -         |    -2.27 | atarax1a, laser, lenci, reversive, righi  |
|            9 |      570 | 2024-05-10 | Solid         | W   | 1.000      | 0.435        | 0.062 (0.027)    | 0.627 (0.273)    | 0 (0.000) |    18.38 | atarax1a, laser, lenci, reversive, righi  |
|            8 |      597 | 2024-05-09 | W7M           | W   | 1.000      | 0.435        | 0.003 (0.001)    | 0.385 (0.167)    | 0 (0.000) |    15.79 | atarax1a, laser, lenci, reversive, righi  |
|            7 |      638 | 2024-05-07 | Galorys       | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.577 (0.251)    | 0 (0.000) |    18.51 | atarax1a, laser, lenci, reversive, righi  |
|            6 |      664 | 2024-05-05 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.44 | atarax1a, laser, lenci, reversive, righi  |
|            5 |     2560 | 2024-02-15 | 9z            | L   | 0.506      | -            | -                | -                | -         |    -0.83 | atarax1a, laser, lenci, reversive, righi  |
|            4 |     2588 | 2024-02-14 | O PLANO       | W   | 0.501      | 0.143        | 0.000 (0.000)    | 0.038 (0.003)    | 0 (0.000) |     2.99 | atarax1a, laser, lenci, reversive, righi  |
|            3 |     3356 | 2024-01-14 | Corinthians   | L   | 0.293      | -            | -                | -                | -         |    -6.31 | atarax1a, laser, lenci, reversive, righi  |
|            2 |     3453 | 2024-01-11 | TIMACETA      | L   | 0.273      | -            | -                | -                | -         |    -7.02 | atarax1a, laser, lenci, reversive, righi  |
|            1 |     3462 | 2024-01-11 | Solid         | W   | 0.273      | 0.143        | 0.062 (0.002)    | 0.627 (0.024)    | 0 (0.000) |     5.79 | atarax1a, laser, lenci, reversive, righi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
