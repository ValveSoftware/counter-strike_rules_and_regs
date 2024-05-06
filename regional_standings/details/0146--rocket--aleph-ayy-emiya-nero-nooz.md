### Roster Details<br />
Team Name: Rocket<br />
Roster: aleph, ayy, EMIYA, nero, nooz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  704.5<br />
<br />
Final Rank Value (704.5) = Starting Rank Value (655.7) + Head To Head Adjustments (48.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.7
- 400 + ( ( 0.134 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 655.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     1872 | 2024-02-16 | G3             | W   | 0.668      | 0.143        | 0.013 (0.001)    | 0.151 (0.014)    | 0 (0.000) |    12.68 | aleph, ayy, EMIYA, nero, nooz    |
|           27 |     1875 | 2024-02-16 | MIGHT          | W   | 0.668      | 0.143        | 0.003 (0.000)    | 0.190 (0.018)    | 0 (0.000) |    11.07 | aleph, ayy, EMIYA, nero, nooz    |
|           26 |     1930 | 2024-02-14 | Carpe Diem     | L   | 0.656      | -            | -                | -                | -         |   -10.65 | aleph, ayy, EMIYA, nero, nooz    |
|           25 |     1932 | 2024-02-14 | Carpe Diem     | W   | 0.655      | 0.477        | 0.009 (0.003)    | 0.253 (0.079)    | 0 (0.000) |    10.19 | aleph, ayy, EMIYA, nero, nooz    |
|           24 |     2165 | 2024-02-01 | BOSS           | L   | 0.568      | -            | -                | -                | -         |    -4.38 | aleph, ayy, EMIYA, nero, nooz    |
|           23 |     2172 | 2024-02-01 | Nouns          | L   | 0.567      | -            | -                | -                | -         |    -8.57 | aleph, ayy, EMIYA, nero, nooz    |
|           22 |     2512 | 2024-01-18 | Nouns          | L   | 0.475      | -            | -                | -                | -         |    -7.43 | aleph, ayy, EMIYA, nero, nooz    |
|           21 |     2516 | 2024-01-18 | Carpe Diem     | W   | 0.474      | 0.143        | 0.009 (0.001)    | 0.253 (0.017)    | 0 (0.000) |     7.74 | aleph, ayy, EMIYA, nero, nooz    |
|           20 |     2561 | 2024-01-17 | FLUFFY AIMERS  | W   | 0.468      | 0.143        | -                | 0.077 (0.005)    | 0 (0.000) |     3.72 | aleph, ayy, EMIYA, nero, nooz    |
|           19 |     2689 | 2024-01-14 | NRG            | W   | 0.450      | 0.143        | 0.006 (0.000)    | 0.539 (0.035)    | 0 (0.000) |     9.22 | aleph, ayy, Elk, EMIYA, nero     |
|           18 |     2694 | 2024-01-14 | BOSS           | L   | 0.448      | -            | -                | -                | -         |    -3.32 | aleph, ayy, Elk, EMIYA, nero     |
|           17 |     2720 | 2024-01-13 | Carpe Diem     | W   | 0.441      | 0.143        | 0.009 (0.001)    | 0.253 (0.016)    | 0 (0.000) |     7.80 | aleph, ayy, Elk, EMIYA, nero     |
|           16 |     2755 | 2024-01-12 | For Fun        | W   | 0.436      | 0.143        | 0.013 (0.001)    | 0.102 (0.006)    | 0 (0.000) |     7.52 | aleph, ayy, Elk, EMIYA, nero     |
|           15 |     2766 | 2024-01-12 | M80            | L   | 0.435      | -            | -                | -                | -         |    -0.48 | aleph, ayy, Elk, EMIYA, nero     |
|           14 |     2789 | 2024-01-12 | For Fun        | W   | 0.430      | 0.143        | 0.013 (0.001)    | 0.102 (0.006)    | 0 (0.000) |     7.77 | aleph, ayy, Elk, EMIYA, nero     |
|           13 |     2791 | 2024-01-11 | LOS            | W   | 0.430      | -            | -                | -                | 0 (0.000) |     2.63 | aleph, ayy, Elk, EMIYA, nero     |
|           12 |     2795 | 2024-01-11 | The Nomads     | W   | 0.429      | -            | -                | -                | -         |     2.59 | aleph, ayy, Elk, EMIYA, nero     |
|           11 |     2961 | 2023-12-17 | MIGHT          | L   | 0.263      | -            | -                | -                | -         |    -3.66 | aleph, EMIYA, nero, nooz, R2D2J  |
|           10 |     2964 | 2023-12-17 | Bad News Bears | W   | 0.262      | -            | -                | -                | -         |     2.23 | aleph, EMIYA, nero, nooz, R2D2J  |
|            9 |     2994 | 2023-12-16 | Revenge Nation | W   | 0.256      | 0.143        | 0.045 (0.002)    | -                | -         |     4.94 | aleph, EMIYA, nero, nooz, R2D2J  |
|            8 |     3022 | 2023-12-15 | LAG            | L   | 0.249      | -            | -                | -                | -         |    -1.28 | aleph, EMIYA, nero, nooz, R2D2J  |
|            7 |     3415 | 2023-11-22 | M80            | L   | 0.095      | -            | -                | -                | -         |    -0.10 | aleph, EMIYA, heavn, nero, R2D2J |
|            6 |     3416 | 2023-11-22 | FLUFFY AIMERS  | L   | 0.095      | -            | -                | -                | -         |    -1.59 | aleph, EMIYA, nero, nooz, R2D2J  |
|            5 |     3427 | 2023-11-21 | Limitless      | W   | 0.089      | 0.500        | 0.001 (0.000)    | 0.173 (0.008)    | -         |     1.45 | aleph, EMIYA, nero, nooz, R2D2J  |
|            4 |     3443 | 2023-11-20 | BOSS           | L   | 0.082      | -            | -                | -                | -         |    -0.54 | aleph, Elk, EMIYA, nero, R2D2J   |
|            3 |     3583 | 2023-11-15 | Carpe Diem     | L   | 0.049      | -            | -                | -                | -         |    -0.62 | aleph, Elk, EMIYA, nero, R2D2J   |
|            2 |     3725 | 2023-11-09 | Eros           | L   | 0.009      | -            | -                | -                | -         |    -0.16 | aleph, Elk, EMIYA, nero, R2D2J   |
|            1 |     3745 | 2023-11-08 | Nouns          | W   | 0.002      | -            | -                | -                | -         |     0.04 | aleph, Elk, EMIYA, nero, R2D2J   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($301.68)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
