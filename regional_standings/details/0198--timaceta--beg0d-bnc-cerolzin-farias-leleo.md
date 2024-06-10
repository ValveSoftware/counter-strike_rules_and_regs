### Roster Details<br />
Team Name: TIMACETA<br />
Roster: beg0d, bnc, cerolzin, farias, leleo<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [198](../standings_global.md)<br />
Regional Rank: [53]( ../standings_americas.md)<br />
Final Rank Value:  522.0<br />
<br />
Final Rank Value (522.0) = Starting Rank Value (511.3) + Head To Head Adjustments (10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.3
- 400 + ( ( 0.056 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 511.3


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
|           10 |     3529 | 2024-01-21 | Flamengo    | L   | 0.260      | -            | -                | -                | -         |    -3.95 | beg0d, bnc, cerolzin, farias, leleo |
|            9 |     3565 | 2024-01-20 | W7M         | L   | 0.253      | -            | -                | -                | -         |    -1.41 | beg0d, bnc, cerolzin, farias, leleo |
|            8 |     3605 | 2024-01-19 | MIBR        | L   | 0.248      | -            | -                | -                | -         |    -0.02 | beg0d, bnc, cerolzin, farias, leleo |
|            7 |     3610 | 2024-01-19 | Sharks      | W   | 0.248      | 0.143        | 0.037 (0.001)    | 0.486 (0.017)    | 0 (0.000) |     7.27 | beg0d, bnc, cerolzin, farias, leleo |
|            6 |     3779 | 2024-01-16 | W7M         | L   | 0.227      | -            | -                | -                | -         |    -1.25 | beg0d, bnc, cerolzin, farias, leleo |
|            5 |     3817 | 2024-01-15 | BESTIA      | W   | 0.222      | 0.143        | 0.031 (0.001)    | 0.631 (0.020)    | 0 (0.000) |     6.53 | beg0d, bnc, cerolzin, farias, leleo |
|            4 |     3949 | 2024-01-11 | adalYamigos | L   | 0.194      | -            | -                | -                | -         |    -2.05 | beg0d, bnc, cerolzin, farias, leleo |
|            3 |     3953 | 2024-01-11 | KRÜ         | W   | 0.194      | 0.143        | 0.016 (0.000)    | 0.131 (0.004)    | 0 (0.000) |     5.12 | beg0d, bnc, cerolzin, farias, leleo |
|            2 |     3966 | 2024-01-11 | NIGERIA 96  | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.14 | beg0d, bnc, cerolzin, farias, leleo |
|            1 |     4023 | 2024-01-09 | Corinthians | L   | 0.180      | -            | -                | -                | -         |    -1.58 | beg0d, bnc, cerolzin, farias, leleo |

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
