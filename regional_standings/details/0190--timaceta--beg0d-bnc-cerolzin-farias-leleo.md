### Roster Details<br />
Team Name: TIMACETA<br />
Roster: beg0d, bnc, cerolzin, farias, leleo<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
Final Rank Value:  524.5<br />
<br />
Final Rank Value (524.5) = Starting Rank Value (510.8) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.8
- 400 + ( ( 0.057 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 510.8


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
|           10 |     3029 | 2024-01-21 | Flamengo    | L   | 0.339      | -            | -                | -                | -         |    -5.14 | beg0d, bnc, cerolzin, farias, leleo |
|            9 |     3065 | 2024-01-20 | W7M         | L   | 0.333      | -            | -                | -                | -         |    -2.03 | beg0d, bnc, cerolzin, farias, leleo |
|            8 |     3105 | 2024-01-19 | MIBR        | L   | 0.327      | -            | -                | -                | -         |    -0.03 | beg0d, bnc, cerolzin, farias, leleo |
|            7 |     3110 | 2024-01-19 | Sharks      | W   | 0.327      | 0.143        | 0.031 (0.001)    | 0.530 (0.025)    | 0 (0.000) |     9.41 | beg0d, bnc, cerolzin, farias, leleo |
|            6 |     3279 | 2024-01-16 | W7M         | L   | 0.306      | -            | -                | -                | -         |    -1.83 | beg0d, bnc, cerolzin, farias, leleo |
|            5 |     3317 | 2024-01-15 | BESTIA      | W   | 0.301      | 0.143        | 0.026 (0.001)    | 0.626 (0.027)    | 0 (0.000) |     8.78 | beg0d, bnc, cerolzin, farias, leleo |
|            4 |     3449 | 2024-01-11 | adalYamigos | L   | 0.274      | -            | -                | -                | -         |    -2.78 | beg0d, bnc, cerolzin, farias, leleo |
|            3 |     3453 | 2024-01-11 | KRÜ         | W   | 0.273      | 0.143        | 0.017 (0.001)    | 0.145 (0.006)    | 0 (0.000) |     7.02 | beg0d, bnc, cerolzin, farias, leleo |
|            2 |     3466 | 2024-01-11 | NIGERIA 96  | W   | 0.273      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.02 | beg0d, bnc, cerolzin, farias, leleo |
|            1 |     3523 | 2024-01-09 | Corinthians | L   | 0.259      | -            | -                | -                | -         |    -2.74 | beg0d, bnc, cerolzin, farias, leleo |

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
