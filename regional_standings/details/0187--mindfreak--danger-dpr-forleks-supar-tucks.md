### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dangeR, dpr, Forleks, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  560.4<br />
<br />
Final Rank Value (560.4) = Starting Rank Value (510.2) + Head To Head Adjustments (50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 510.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     3449 | 2024-01-25 | Rooster       | L   | 0.284      | -            | -                | -                | -         |    -1.72 | dangeR, dpr, Forleks, supar, tucks |
|           17 |     3466 | 2024-01-24 | DXA           | W   | 0.277      | 0.143        | 0.005 (0.000)    | 0.209 (0.008)    | 0 (0.000) |     6.07 | dangeR, dpr, Forleks, supar, tucks |
|           16 |     3486 | 2024-01-23 | FlyQuest      | L   | 0.271      | -            | -                | -                | -         |    -0.07 | dangeR, dpr, Forleks, supar, tucks |
|           15 |     3488 | 2024-01-23 | Rooster       | W   | 0.270      | 0.143        | 0.018 (0.001)    | 0.296 (0.011)    | 0 (0.000) |     7.00 | dangeR, dpr, Forleks, supar, tucks |
|           14 |     3515 | 2024-01-22 | FlyQuest      | L   | 0.264      | -            | -                | -                | -         |    -0.07 | dangeR, dpr, Forleks, supar, tucks |
|           13 |     3516 | 2024-01-22 | Rooster       | W   | 0.264      | 0.143        | 0.018 (0.001)    | 0.296 (0.011)    | 0 (0.000) |     6.89 | dangeR, dpr, Forleks, supar, tucks |
|           12 |     3551 | 2024-01-20 | FlyQuest      | L   | 0.256      | -            | -                | -                | -         |    -0.07 | dangeR, dpr, Forleks, supar, tucks |
|           11 |     3590 | 2024-01-20 | DXA           | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     2.52 | dangeR, dpr, Forleks, supar, tucks |
|           10 |     3649 | 2024-01-19 | Rooster       | L   | 0.244      | -            | -                | -                | -         |    -1.28 | dangeR, dpr, Forleks, supar, tucks |
|            9 |     3653 | 2024-01-18 | Vantage       | W   | 0.243      | 0.143        | 0.003 (0.000)    | 0.201 (0.007)    | 0 (0.000) |     5.20 | dangeR, dpr, Forleks, supar, tucks |
|            8 |     3707 | 2024-01-18 | Arcade        | W   | 0.238      | 0.143        | 0.005 (0.000)    | 0.189 (0.006)    | 0 (0.000) |     5.24 | dangeR, dpr, Forleks, supar, tucks |
|            7 |     3710 | 2024-01-17 | Vantage       | W   | 0.237      | 0.143        | 0.003 (0.000)    | 0.201 (0.007)    | 0 (0.000) |     5.20 | dangeR, dpr, Forleks, supar, tucks |
|            6 |     3757 | 2024-01-17 | PatatiPatata  | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.42 | dangeR, dpr, Forleks, supar, tucks |
|            5 |     3808 | 2024-01-16 | FlyQuest      | L   | 0.224      | -            | -                | -                | -         |    -0.05 | dangeR, dpr, Forleks, supar, tucks |
|            4 |     3837 | 2024-01-15 | KZG           | W   | 0.217      | 0.143        | 0.010 (0.000)    | 0.168 (0.005)    | 0 (0.000) |     5.22 | dangeR, dpr, Forleks, supar, tucks |
|            3 |     3897 | 2024-01-13 | RKON          | W   | 0.204      | 0.143        | 0.000 (0.000)    | 0.088 (0.003)    | 0 (0.000) |     3.29 | dangeR, dpr, Forleks, supar, tucks |
|            2 |     3899 | 2024-01-13 | iM Apartments | W   | 0.204      | -            | -                | -                | -         |     2.23 | dangeR, dpr, Forleks, supar, tucks |
|            1 |     3901 | 2024-01-12 | 500x          | W   | 0.203      | -            | -                | -                | -         |     2.24 | dangeR, dpr, Forleks, supar, tucks |

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
