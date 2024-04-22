### Roster Details<br />
Team Name: 9INE<br />
Roster: KEi, KukuBambo, mynio, nawrot, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [201](../standings_global.md)<br />
Regional Rank: [123]( ../standings_europe.md)<br />
Final Rank Value:  523.9<br />
<br />
Final Rank Value (523.9) = Starting Rank Value (531.9) + Head To Head Adjustments (-8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.9
- 400 + ( ( 0.068 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 531.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      674 | 2024-03-28 | TSM           | L   | 1.000      | -            | -                | -                | -         |    -5.82 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           12 |     1151 | 2024-03-06 | EYEBALLERS    | L   | 0.887      | -            | -                | -                | -         |    -3.33 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           11 |     1207 | 2024-03-05 | ECLOT         | L   | 0.878      | -            | -                | -                | -         |    -1.39 | KEi, mynio, SaMey, Sobol, tomiko      |
|           10 |     1245 | 2024-03-03 | ILIN          | L   | 0.866      | -            | -                | -                | -         |   -13.72 | KEi, mynio, snatchie, Sobol, tomiko   |
|            9 |     1290 | 2024-03-01 | Alliance      | W   | 0.852      | 0.371        | 0.020 (0.006)    | 0.855 (0.270)    | 0 (0.000) |    23.07 | KEi, mynio, SaMey, Sobol, tomiko      |
|            8 |     1324 | 2024-02-27 | Sangal        | L   | 0.834      | -            | -                | -                | -         |    -6.50 | KEi, KukuBambo, mynio, nawrot, tomiko |
|            7 |     1354 | 2024-02-26 | Entropiq      | L   | 0.825      | -            | -                | -                | -         |    -6.26 | KEi, mynio, SaMey, Sobol, tomiko      |
|            6 |     1771 | 2024-02-06 | Alliance      | L   | 0.691      | -            | -                | -                | -         |    -3.51 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            5 |     1910 | 2024-01-31 | BLEED         | L   | 0.651      | -            | -                | -                | -         |    -1.04 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            4 |     2343 | 2024-01-16 | JANO          | L   | 0.554      | -            | -                | -                | -         |    -6.42 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            3 |     2565 | 2024-01-09 | KOI           | L   | 0.507      | -            | -                | -                | -         |    -0.96 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            2 |     2587 | 2024-01-09 | Zero Tenacity | W   | 0.506      | 0.143        | 0.008 (0.001)    | 0.805 (0.058)    | 0 (0.000) |    12.79 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            1 |     2598 | 2024-01-09 | xGOD          | W   | 0.506      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.10 | KEi, KukuBambo, mhL, mynio, tomiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
