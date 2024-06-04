### Roster Details<br />
Team Name: 9INE<br />
Roster: KEi, KukuBambo, mynio, nawrot, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
Final Rank Value:  517.1<br />
<br />
Final Rank Value (517.1) = Starting Rank Value (524.4) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.4
- 400 + ( ( 0.064 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 524.4


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
|           13 |     1621 | 2024-03-28 | TSM           | L   | 0.786      | -            | -                | -                | -         |    -5.22 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           12 |     2098 | 2024-03-06 | EYEBALLERS    | L   | 0.640      | -            | -                | -                | -         |    -2.50 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           11 |     2154 | 2024-03-05 | ECLOT         | L   | 0.631      | -            | -                | -                | -         |    -1.02 | KEi, mynio, SaMey, Sobol, tomiko      |
|           10 |     2192 | 2024-03-03 | ILIN          | L   | 0.619      | -            | -                | -                | -         |   -10.36 | KEi, mynio, snatchie, Sobol, tomiko   |
|            9 |     2237 | 2024-03-01 | Alliance      | W   | 0.604      | 0.371        | 0.004 (0.001)    | 0.617 (0.138)    | 0 (0.000) |    16.12 | KEi, mynio, SaMey, Sobol, tomiko      |
|            8 |     2271 | 2024-02-27 | Sangal        | L   | 0.586      | -            | -                | -                | -         |    -0.91 | KEi, KukuBambo, mynio, nawrot, tomiko |
|            7 |     2301 | 2024-02-26 | Entropiq      | L   | 0.578      | -            | -                | -                | -         |    -6.38 | KEi, mynio, SaMey, Sobol, tomiko      |
|            6 |     2718 | 2024-02-06 | Alliance      | L   | 0.444      | -            | -                | -                | -         |    -2.51 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            5 |     2857 | 2024-01-31 | BLEED         | L   | 0.404      | -            | -                | -                | -         |    -0.32 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            4 |     3290 | 2024-01-16 | JANO          | L   | 0.306      | -            | -                | -                | -         |    -5.51 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            3 |     3512 | 2024-01-09 | KOI           | L   | 0.260      | -            | -                | -                | -         |    -0.76 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            2 |     3534 | 2024-01-09 | Zero Tenacity | W   | 0.259      | 0.143        | 0.147 (0.005)    | 1.000 (0.037)    | 0 (0.000) |     7.76 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            1 |     3545 | 2024-01-09 | xGOD          | W   | 0.259      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.25 | KEi, KukuBambo, mhL, mynio, tomiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
