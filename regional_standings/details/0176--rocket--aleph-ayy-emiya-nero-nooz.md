### Roster Details<br />
Team Name: Rocket<br />
Roster: aleph, ayy, EMIYA, nero, nooz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  575.9<br />
<br />
Final Rank Value (575.9) = Starting Rank Value (510.5) + Head To Head Adjustments (65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.5
- 400 + ( ( 0.057 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 510.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2523 | 2024-02-16 | G3             | W   | 0.514      | 0.143        | 0.006 (0.000)    | 0.118 (0.009)    | 0 (0.000) |    11.69 | aleph, ayy, EMIYA, nero, nooz   |
|           20 |     2526 | 2024-02-16 | MIGHT          | W   | 0.514      | 0.143        | 0.001 (0.000)    | 0.167 (0.012)    | 0 (0.000) |    10.64 | aleph, ayy, EMIYA, nero, nooz   |
|           19 |     2581 | 2024-02-14 | Carpe Diem     | L   | 0.502      | -            | -                | -                | -         |    -6.63 | aleph, ayy, EMIYA, nero, nooz   |
|           18 |     2583 | 2024-02-14 | Carpe Diem     | W   | 0.501      | 0.477        | 0.000 (0.000)    | 0.369 (0.088)    | 0 (0.000) |     9.39 | aleph, ayy, EMIYA, nero, nooz   |
|           17 |     2816 | 2024-02-01 | BOSS           | L   | 0.414      | -            | -                | -                | -         |    -2.19 | aleph, ayy, EMIYA, nero, nooz   |
|           16 |     2823 | 2024-02-01 | Nouns          | L   | 0.413      | -            | -                | -                | -         |    -1.66 | aleph, ayy, EMIYA, nero, nooz   |
|           15 |     3163 | 2024-01-18 | Nouns          | L   | 0.321      | -            | -                | -                | -         |    -1.27 | aleph, ayy, EMIYA, nero, nooz   |
|           14 |     3167 | 2024-01-18 | Carpe Diem     | W   | 0.320      | 0.143        | 0.000 (0.000)    | 0.369 (0.017)    | 0 (0.000) |     6.08 | aleph, ayy, EMIYA, nero, nooz   |
|           13 |     3212 | 2024-01-17 | FLUFFY AIMERS  | W   | 0.314      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     5.39 | aleph, ayy, EMIYA, nero, nooz   |
|           12 |     3340 | 2024-01-14 | NRG            | W   | 0.295      | 0.143        | 0.010 (0.000)    | 0.605 (0.026)    | 0 (0.000) |     7.78 | aleph, ayy, Elk, EMIYA, nero    |
|           11 |     3345 | 2024-01-14 | BOSS           | L   | 0.294      | -            | -                | -                | -         |    -1.42 | aleph, ayy, Elk, EMIYA, nero    |
|           10 |     3371 | 2024-01-13 | Carpe Diem     | W   | 0.287      | 0.143        | 0.000 (0.000)    | 0.369 (0.015)    | 0 (0.000) |     5.70 | aleph, ayy, Elk, EMIYA, nero    |
|            9 |     3406 | 2024-01-12 | For Fun        | W   | 0.282      | 0.143        | 0.007 (0.000)    | 0.074 (0.003)    | 0 (0.000) |     6.33 | aleph, ayy, Elk, EMIYA, nero    |
|            8 |     3417 | 2024-01-12 | M80            | L   | 0.281      | -            | -                | -                | -         |    -0.14 | aleph, ayy, Elk, EMIYA, nero    |
|            7 |     3440 | 2024-01-12 | For Fun        | W   | 0.276      | 0.143        | 0.007 (0.000)    | 0.074 (0.003)    | 0 (0.000) |     6.34 | aleph, ayy, Elk, EMIYA, nero    |
|            6 |     3442 | 2024-01-11 | LOS            | W   | 0.276      | 0.143        | -                | 0.023 (0.001)    | 0 (0.000) |     3.86 | aleph, ayy, Elk, EMIYA, nero    |
|            5 |     3446 | 2024-01-11 | The Nomads     | W   | 0.275      | -            | -                | -                | -         |     3.00 | aleph, ayy, Elk, EMIYA, nero    |
|            4 |     3612 | 2023-12-17 | MIGHT          | L   | 0.109      | -            | -                | -                | -         |    -1.00 | aleph, EMIYA, nero, nooz, R2D2J |
|            3 |     3615 | 2023-12-17 | Bad News Bears | W   | 0.108      | -            | -                | -                | -         |     1.49 | aleph, EMIYA, nero, nooz, R2D2J |
|            2 |     3645 | 2023-12-16 | Revenge Nation | W   | 0.102      | 0.143        | 0.019 (0.000)    | 0.067 (0.001)    | -         |     2.36 | aleph, EMIYA, nero, nooz, R2D2J |
|            1 |     3673 | 2023-12-15 | LAG            | L   | 0.095      | -            | -                | -                | -         |    -0.30 | aleph, EMIYA, nero, nooz, R2D2J |

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
