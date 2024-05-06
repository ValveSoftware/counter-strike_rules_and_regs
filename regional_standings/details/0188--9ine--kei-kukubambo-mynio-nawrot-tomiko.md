### Roster Details<br />
Team Name: 9INE<br />
Roster: KEi, KukuBambo, mynio, nawrot, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  529.2<br />
<br />
Final Rank Value (529.2) = Starting Rank Value (532.4) + Head To Head Adjustments (-3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 532.4
- 400 + ( ( 0.070 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 532.4


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
|           13 |      970 | 2024-03-28 | TSM           | L   | 0.940      | -            | -                | -                | -         |    -5.27 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           12 |     1447 | 2024-03-06 | EYEBALLERS    | L   | 0.794      | -            | -                | -                | -         |    -2.55 | KEi, KukuBambo, mynio, nawrot, tomiko |
|           11 |     1503 | 2024-03-05 | ECLOT         | L   | 0.785      | -            | -                | -                | -         |    -0.98 | KEi, mynio, SaMey, Sobol, tomiko      |
|           10 |     1541 | 2024-03-03 | ILIN          | L   | 0.773      | -            | -                | -                | -         |   -12.72 | KEi, mynio, snatchie, Sobol, tomiko   |
|            9 |     1586 | 2024-03-01 | Alliance      | W   | 0.759      | 0.371        | 0.016 (0.004)    | 0.815 (0.229)    | 0 (0.000) |    20.59 | KEi, mynio, SaMey, Sobol, tomiko      |
|            8 |     1620 | 2024-02-27 | Sangal        | L   | 0.740      | -            | -                | -                | -         |    -4.25 | KEi, KukuBambo, mynio, nawrot, tomiko |
|            7 |     1650 | 2024-02-26 | Entropiq      | L   | 0.732      | -            | -                | -                | -         |    -5.34 | KEi, mynio, SaMey, Sobol, tomiko      |
|            6 |     2067 | 2024-02-06 | Alliance      | L   | 0.598      | -            | -                | -                | -         |    -3.00 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            5 |     2206 | 2024-01-31 | BLEED         | L   | 0.558      | -            | -                | -                | -         |    -0.58 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            4 |     2639 | 2024-01-16 | JANO          | L   | 0.460      | -            | -                | -                | -         |    -4.26 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            3 |     2861 | 2024-01-09 | KOI           | L   | 0.414      | -            | -                | -                | -         |    -0.81 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            2 |     2883 | 2024-01-09 | Zero Tenacity | W   | 0.413      | 0.143        | 0.093 (0.005)    | 0.936 (0.055)    | 0 (0.000) |    11.79 | KEi, KukuBambo, mhL, mynio, tomiko    |
|            1 |     2894 | 2024-01-09 | xGOD          | W   | 0.413      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.17 | KEi, KukuBambo, mhL, mynio, tomiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
