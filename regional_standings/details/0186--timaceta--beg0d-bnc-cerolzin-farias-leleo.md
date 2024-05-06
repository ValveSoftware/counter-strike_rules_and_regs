### Roster Details<br />
Team Name: TIMACETA<br />
Roster: beg0d, bnc, cerolzin, farias, leleo<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  532.1<br />
<br />
Final Rank Value (532.1) = Starting Rank Value (515.1) + Head To Head Adjustments (17.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.1
- 400 + ( ( 0.060 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 515.1


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
|           10 |     2378 | 2024-01-21 | Flamengo    | L   | 0.493      | -            | -                | -                | -         |    -6.97 | beg0d, bnc, cerolzin, farias, leleo |
|            9 |     2414 | 2024-01-20 | W7M         | L   | 0.487      | -            | -                | -                | -         |    -2.61 | beg0d, bnc, cerolzin, farias, leleo |
|            8 |     2454 | 2024-01-19 | MIBR        | L   | 0.481      | -            | -                | -                | -         |    -0.03 | beg0d, bnc, cerolzin, farias, leleo |
|            7 |     2459 | 2024-01-19 | Sharks      | W   | 0.481      | 0.143        | 0.060 (0.004)    | 0.453 (0.031)    | 0 (0.000) |    13.58 | beg0d, bnc, cerolzin, farias, leleo |
|            6 |     2628 | 2024-01-16 | W7M         | L   | 0.461      | -            | -                | -                | -         |    -2.40 | beg0d, bnc, cerolzin, farias, leleo |
|            5 |     2666 | 2024-01-15 | BESTIA      | W   | 0.455      | 0.143        | 0.025 (0.002)    | 0.389 (0.025)    | 0 (0.000) |    12.01 | beg0d, bnc, cerolzin, farias, leleo |
|            4 |     2798 | 2024-01-11 | adalYamigos | L   | 0.428      | -            | -                | -                | -         |    -4.10 | beg0d, bnc, cerolzin, farias, leleo |
|            3 |     2802 | 2024-01-11 | KRÜ         | W   | 0.427      | 0.143        | 0.000 (0.000)    | 0.048 (0.003)    | 0 (0.000) |     6.94 | beg0d, bnc, cerolzin, farias, leleo |
|            2 |     2815 | 2024-01-11 | NIGERIA 96  | W   | 0.427      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.66 | beg0d, bnc, cerolzin, farias, leleo |
|            1 |     2872 | 2024-01-09 | Corinthians | L   | 0.413      | -            | -                | -                | -         |    -4.11 | beg0d, bnc, cerolzin, farias, leleo |

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
