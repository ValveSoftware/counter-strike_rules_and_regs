### Roster Details<br />
Team Name: Rocket<br />
Roster: aleph, ayy, EMIYA, nero, nooz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [49]( ../standings_americas.md)<br />
Final Rank Value:  571.0<br />
<br />
Final Rank Value (571.0) = Starting Rank Value (517.5) + Head To Head Adjustments (53.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.5
- 400 + ( ( 0.059 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 517.5


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
|           21 |     3023 | 2024-02-16 | OMiT           | W   | 0.435      | 0.143        | 0.005 (0.000)    | 0.268 (0.017)    | 0 (0.000) |    10.46 | aleph, ayy, EMIYA, nero, nooz   |
|           20 |     3026 | 2024-02-16 | MIGHT          | W   | 0.435      | 0.143        | 0.000 (0.000)    | 0.133 (0.008)    | 0 (0.000) |     7.09 | aleph, ayy, EMIYA, nero, nooz   |
|           19 |     3081 | 2024-02-14 | Carpe Diem     | L   | 0.422      | -            | -                | -                | -         |    -3.14 | aleph, ayy, EMIYA, nero, nooz   |
|           18 |     3083 | 2024-02-14 | Carpe Diem     | W   | 0.422      | 0.477        | 0.007 (0.001)    | 0.321 (0.065)    | 0 (0.000) |    10.36 | aleph, ayy, EMIYA, nero, nooz   |
|           17 |     3316 | 2024-02-01 | BOSS           | L   | 0.335      | -            | -                | -                | -         |    -1.66 | aleph, ayy, EMIYA, nero, nooz   |
|           16 |     3323 | 2024-02-01 | Nouns          | L   | 0.334      | -            | -                | -                | -         |    -0.97 | aleph, ayy, EMIYA, nero, nooz   |
|           15 |     3663 | 2024-01-18 | Nouns          | L   | 0.242      | -            | -                | -                | -         |    -0.70 | aleph, ayy, EMIYA, nero, nooz   |
|           14 |     3667 | 2024-01-18 | Carpe Diem     | W   | 0.241      | 0.143        | 0.007 (0.000)    | 0.321 (0.011)    | 0 (0.000) |     6.02 | aleph, ayy, EMIYA, nero, nooz   |
|           13 |     3712 | 2024-01-17 | FLUFFY AIMERS  | W   | 0.235      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.25 | aleph, ayy, EMIYA, nero, nooz   |
|           12 |     3840 | 2024-01-14 | NRG            | W   | 0.216      | 0.143        | 0.024 (0.001)    | 0.578 (0.018)    | 0 (0.000) |     5.96 | aleph, ayy, Elk, EMIYA, nero    |
|           11 |     3845 | 2024-01-14 | BOSS           | L   | 0.215      | -            | -                | -                | -         |    -0.99 | aleph, ayy, Elk, EMIYA, nero    |
|           10 |     3871 | 2024-01-13 | Carpe Diem     | W   | 0.208      | 0.143        | 0.007 (0.000)    | 0.321 (0.010)    | 0 (0.000) |     5.32 | aleph, ayy, Elk, EMIYA, nero    |
|            9 |     3906 | 2024-01-12 | For Fun        | W   | 0.203      | 0.143        | 0.006 (0.000)    | 0.057 (0.002)    | 0 (0.000) |     4.54 | aleph, ayy, Elk, EMIYA, nero    |
|            8 |     3917 | 2024-01-12 | M80            | L   | 0.202      | -            | -                | -                | -         |    -0.08 | aleph, ayy, Elk, EMIYA, nero    |
|            7 |     3940 | 2024-01-12 | For Fun        | W   | 0.197      | 0.143        | 0.006 (0.000)    | 0.057 (0.002)    | 0 (0.000) |     4.48 | aleph, ayy, Elk, EMIYA, nero    |
|            6 |     3942 | 2024-01-11 | LOS            | W   | 0.197      | 0.143        | -                | 0.016 (0.000)    | 0 (0.000) |     2.11 | aleph, ayy, Elk, EMIYA, nero    |
|            5 |     3946 | 2024-01-11 | The Nomads     | W   | 0.196      | -            | -                | -                | -         |     2.10 | aleph, ayy, Elk, EMIYA, nero    |
|            4 |     4112 | 2023-12-17 | MIGHT          | L   | 0.030      | -            | -                | -                | -         |    -0.41 | aleph, EMIYA, nero, nooz, R2D2J |
|            3 |     4115 | 2023-12-17 | Bad News Bears | W   | 0.029      | -            | -                | -                | -         |     0.31 | aleph, EMIYA, nero, nooz, R2D2J |
|            2 |     4145 | 2023-12-16 | Revenge Nation | W   | 0.023      | 0.143        | 0.016 (0.000)    | -                | -         |     0.52 | aleph, EMIYA, nero, nooz, R2D2J |
|            1 |     4173 | 2023-12-15 | LAG            | L   | 0.015      | -            | -                | -                | -         |    -0.04 | aleph, EMIYA, nero, nooz, R2D2J |

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
