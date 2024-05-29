### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dangeR, dpr, Forleks, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [24]( ../standings_asia.md)<br />
Final Rank Value:  570.1<br />
<br />
Final Rank Value (570.1) = Starting Rank Value (508.8) + Head To Head Adjustments (61.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.8
- 400 + ( ( 0.056 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 508.8


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
|           18 |     2949 | 2024-01-25 | Rooster       | L   | 0.363      | -            | -                | -                | -         |    -2.66 | dangeR, dpr, Forleks, supar, tucks |
|           17 |     2966 | 2024-01-24 | DXA           | W   | 0.356      | 0.143        | 0.005 (0.000)    | 0.244 (0.012)    | 0 (0.000) |     7.64 | dangeR, dpr, Forleks, supar, tucks |
|           16 |     2986 | 2024-01-23 | FlyQuest      | L   | 0.350      | -            | -                | -                | -         |    -0.10 | dangeR, dpr, Forleks, supar, tucks |
|           15 |     2988 | 2024-01-23 | Rooster       | W   | 0.350      | 0.143        | 0.013 (0.001)    | 0.293 (0.015)    | 0 (0.000) |     8.66 | dangeR, dpr, Forleks, supar, tucks |
|           14 |     3015 | 2024-01-22 | FlyQuest      | L   | 0.344      | -            | -                | -                | -         |    -0.09 | dangeR, dpr, Forleks, supar, tucks |
|           13 |     3016 | 2024-01-22 | Rooster       | W   | 0.343      | 0.143        | 0.013 (0.001)    | 0.293 (0.014)    | 0 (0.000) |     8.60 | dangeR, dpr, Forleks, supar, tucks |
|           12 |     3051 | 2024-01-20 | FlyQuest      | L   | 0.335      | -            | -                | -                | -         |    -0.09 | dangeR, dpr, Forleks, supar, tucks |
|           11 |     3090 | 2024-01-20 | DXA           | W   | 0.330      | 0.143        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     3.26 | dangeR, dpr, Forleks, supar, tucks |
|           10 |     3149 | 2024-01-19 | Rooster       | L   | 0.323      | -            | -                | -                | -         |    -2.01 | dangeR, dpr, Forleks, supar, tucks |
|            9 |     3153 | 2024-01-18 | Vantage       | W   | 0.322      | 0.143        | 0.000 (0.000)    | 0.247 (0.011)    | 0 (0.000) |     5.00 | dangeR, dpr, Forleks, supar, tucks |
|            8 |     3207 | 2024-01-18 | Arcade        | W   | 0.317      | 0.143        | 0.006 (0.000)    | 0.229 (0.010)    | 0 (0.000) |     6.92 | dangeR, dpr, Forleks, supar, tucks |
|            7 |     3210 | 2024-01-17 | Vantage       | W   | 0.316      | 0.143        | 0.000 (0.000)    | 0.247 (0.011)    | 0 (0.000) |     5.13 | dangeR, dpr, Forleks, supar, tucks |
|            6 |     3257 | 2024-01-17 | PatatiPatata  | W   | 0.310      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.21 | dangeR, dpr, Forleks, supar, tucks |
|            5 |     3308 | 2024-01-16 | FlyQuest      | L   | 0.303      | -            | -                | -                | -         |    -0.07 | dangeR, dpr, Forleks, supar, tucks |
|            4 |     3337 | 2024-01-15 | KZG           | W   | 0.296      | 0.143        | 0.011 (0.000)    | 0.199 (0.008)    | 0 (0.000) |     7.13 | dangeR, dpr, Forleks, supar, tucks |
|            3 |     3397 | 2024-01-13 | RKON          | W   | 0.283      | 0.143        | 0.000 (0.000)    | 0.107 (0.004)    | 0 (0.000) |     4.57 | dangeR, dpr, Forleks, supar, tucks |
|            2 |     3399 | 2024-01-13 | iM Apartments | W   | 0.283      | -            | -                | -                | -         |     3.09 | dangeR, dpr, Forleks, supar, tucks |
|            1 |     3401 | 2024-01-12 | 500x          | W   | 0.282      | -            | -                | -                | -         |     3.12 | dangeR, dpr, Forleks, supar, tucks |

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
