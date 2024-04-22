### Roster Details<br />
Team Name: TIMACETA<br />
Roster: beg0d, bnc, cerolzin, farias, leleo<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [198](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  540.0<br />
<br />
Final Rank Value (540.0) = Starting Rank Value (517.6) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.6
- 400 + ( ( 0.061 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 517.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2082 | 2024-01-21 | Flamengo    | L   | 0.587      | -            | -                | -                | -         |    -7.69 | beg0d, bnc, cerolzin, farias, leleo |
|           10 |     2118 | 2024-01-20 | W7M         | L   | 0.580      | -            | -                | -                | -         |    -2.87 | beg0d, bnc, cerolzin, farias, leleo |
|            9 |     2158 | 2024-01-19 | MIBR        | L   | 0.575      | -            | -                | -                | -         |    -0.16 | beg0d, bnc, cerolzin, farias, leleo |
|            8 |     2163 | 2024-01-19 | Sharks      | W   | 0.574      | 0.143        | 0.040 (0.003)    | 0.532 (0.044)    | 0 (0.000) |    16.34 | beg0d, bnc, cerolzin, farias, leleo |
|            7 |     2332 | 2024-01-16 | W7M         | L   | 0.554      | -            | -                | -                | -         |    -2.67 | beg0d, bnc, cerolzin, farias, leleo |
|            6 |     2370 | 2024-01-15 | BESTIA      | W   | 0.548      | 0.143        | 0.029 (0.002)    | 0.455 (0.036)    | 0 (0.000) |    14.75 | beg0d, bnc, cerolzin, farias, leleo |
|            5 |     2502 | 2024-01-11 | adalYamigos | L   | 0.521      | -            | -                | -                | -         |    -4.41 | beg0d, bnc, cerolzin, farias, leleo |
|            4 |     2506 | 2024-01-11 | PUBG aim    | W   | 0.521      | 0.143        | 0.000 (0.000)    | 0.059 (0.004)    | 0 (0.000) |     8.52 | beg0d, bnc, cerolzin, farias, leleo |
|            3 |     2519 | 2024-01-11 | NIGERIA 96  | W   | 0.520      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.63 | beg0d, bnc, cerolzin, farias, leleo |
|            2 |     2576 | 2024-01-09 | Corinthians | L   | 0.507      | -            | -                | -                | -         |    -4.96 | beg0d, bnc, cerolzin, farias, leleo |
|            1 |     3654 | 2023-10-30 | Fluxo       | L   | 0.035      | -            | -                | -                | -         |    -0.05 | beg0d, bnc, cerolzin, farias, leleo |

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
