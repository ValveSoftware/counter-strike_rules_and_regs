### Roster Details<br />
Team Name: 9INE<br />
Roster: KEi, KukuBambo, mynio, nawrot, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [199](../standings_global.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
Final Rank Value:  520.1<br />
<br />
Final Rank Value (520.1) = Starting Rank Value (525.0) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.0
- 400 + ( ( 0.063 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 525.0


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
|           13 |     2121 | 2024-03-28 | TSM           | L   | 0.707      | -            | -                | -                | -         |    -4.74 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           12 |     2598 | 2024-03-06 | EYEBALLERS    | L   | 0.561      | -            | -                | -                | -         |    -1.68 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           11 |     2654 | 2024-03-05 | ECLOT         | L   | 0.552      | -            | -                | -                | -         |    -0.35 | KEi, mynio, SaMey, Sobol, tomiko      |
|           10 |     2692 | 2024-03-03 | ILIN          | L   | 0.540      | -            | -                | -                | -         |    -9.03 | KEi, mynio, snatchie, Sobol, tomiko   |
|            9 |     2737 | 2024-03-01 | Alliance      | W   | 0.525      | 0.371        | 0.012 (0.002)    | 0.513 (0.100)    | 0 (0.000) |    14.68 | KEi, mynio, SaMey, Sobol, tomiko      |
|            8 |     2771 | 2024-02-27 | Sangal        | L   | 0.507      | -            | -                | -                | -         |    -0.51 | KEi, KukuBambo, mynio, nawrot, tomiko |
|            7 |     2801 | 2024-02-26 | Entropiq      | L   | 0.499      | -            | -                | -                | -         |    -5.63 | KEi, mynio, SaMey, Sobol, tomiko      |
|            6 |     3218 | 2024-02-06 | Alliance      | L   | 0.365      | -            | -                | -                | -         |    -1.49 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            5 |     3357 | 2024-01-31 | BLEED         | L   | 0.325      | -            | -                | -                | -         |    -0.10 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            4 |     3790 | 2024-01-16 | JANO          | L   | 0.227      | -            | -                | -                | -         |    -4.02 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            3 |     4012 | 2024-01-09 | KOI           | L   | 0.181      | -            | -                | -                | -         |    -0.37 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            2 |     4034 | 2024-01-09 | Zero Tenacity | W   | 0.180      | 0.143        | 0.154 (0.004)    | 1.000 (0.026)    | 0 (0.000) |     5.45 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            1 |     4045 | 2024-01-09 | xGOD          | W   | 0.180      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.98 | KEi, KukuBambo, mhL, mynio, tomiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
