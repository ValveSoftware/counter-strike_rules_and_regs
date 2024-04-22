### Roster Details<br />
Team Name: Rocket<br />
Roster: aleph, ayy, EMIYA, nero, nooz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  722.5<br />
<br />
Final Rank Value (722.5) = Starting Rank Value (671.2) + Head To Head Adjustments (51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.2
- 400 + ( ( 0.140 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 671.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1576 | 2024-02-16 | G3               | W   | 0.762      | 0.143        | 0.013 (0.001)    | 0.171 (0.019)    | 0 (0.000) |    14.25 | aleph, ayy, EMIYA, nero, nooz    |
|           29 |     1579 | 2024-02-16 | MIGHT            | W   | 0.761      | 0.143        | 0.003 (0.000)    | 0.233 (0.025)    | 0 (0.000) |    12.66 | aleph, ayy, EMIYA, nero, nooz    |
|           28 |     1634 | 2024-02-14 | Carpe Diem       | L   | 0.749      | -            | -                | -                | -         |   -12.11 | aleph, ayy, EMIYA, nero, nooz    |
|           27 |     1636 | 2024-02-14 | Carpe Diem       | W   | 0.749      | 0.477        | 0.011 (0.004)    | 0.315 (0.113)    | 0 (0.000) |    11.65 | aleph, ayy, EMIYA, nero, nooz    |
|           26 |     1869 | 2024-02-01 | BOSS             | L   | 0.662      | -            | -                | -                | -         |    -5.91 | aleph, ayy, EMIYA, nero, nooz    |
|           25 |     1876 | 2024-02-01 | Nouns            | L   | 0.661      | -            | -                | -                | -         |   -10.18 | aleph, ayy, EMIYA, nero, nooz    |
|           24 |     2216 | 2024-01-18 | Nouns            | L   | 0.568      | -            | -                | -                | -         |    -9.12 | aleph, ayy, EMIYA, nero, nooz    |
|           23 |     2220 | 2024-01-18 | Carpe Diem       | W   | 0.568      | 0.143        | 0.011 (0.001)    | 0.315 (0.026)    | 0 (0.000) |     9.42 | aleph, ayy, EMIYA, nero, nooz    |
|           22 |     2265 | 2024-01-17 | FLUFFY AIMERS    | W   | 0.562      | 0.143        | -                | 0.094 (0.008)    | 0 (0.000) |     4.21 | aleph, ayy, EMIYA, nero, nooz    |
|           21 |     2393 | 2024-01-14 | NRG              | W   | 0.543      | 0.143        | 0.007 (0.001)    | 0.633 (0.049)    | 0 (0.000) |    11.03 | aleph, ayy, Elk, EMIYA, nero     |
|           20 |     2398 | 2024-01-14 | BOSS             | L   | 0.542      | -            | -                | -                | -         |    -4.58 | aleph, ayy, Elk, EMIYA, nero     |
|           19 |     2424 | 2024-01-13 | Carpe Diem       | W   | 0.535      | 0.143        | 0.011 (0.001)    | 0.315 (0.024)    | 0 (0.000) |     9.77 | aleph, ayy, Elk, EMIYA, nero     |
|           18 |     2459 | 2024-01-12 | For Fun          | W   | 0.530      | 0.143        | 0.011 (0.001)    | 0.120 (0.009)    | 0 (0.000) |     8.69 | aleph, ayy, Elk, EMIYA, nero     |
|           17 |     2470 | 2024-01-12 | M80              | L   | 0.529      | -            | -                | -                | -         |    -2.60 | aleph, ayy, Elk, EMIYA, nero     |
|           16 |     2493 | 2024-01-12 | For Fun          | W   | 0.524      | 0.143        | 0.011 (0.001)    | 0.120 (0.009)    | 0 (0.000) |     9.05 | aleph, ayy, Elk, EMIYA, nero     |
|           15 |     2495 | 2024-01-11 | LOS              | W   | 0.523      | -            | -                | -                | 0 (0.000) |     3.01 | aleph, ayy, Elk, EMIYA, nero     |
|           14 |     2499 | 2024-01-11 | The Nomads       | W   | 0.522      | -            | -                | -                | -         |     2.95 | aleph, ayy, Elk, EMIYA, nero     |
|           13 |     2665 | 2023-12-17 | MIGHT            | L   | 0.356      | -            | -                | -                | -         |    -4.88 | aleph, EMIYA, nero, nooz, R2D2J  |
|           12 |     2668 | 2023-12-17 | Bad News Bears   | W   | 0.355      | -            | -                | -                | -         |     4.76 | aleph, EMIYA, nero, nooz, R2D2J  |
|           11 |     2698 | 2023-12-16 | Revenge Nation   | W   | 0.349      | 0.143        | 0.044 (0.002)    | -                | -         |     6.70 | aleph, EMIYA, nero, nooz, R2D2J  |
|           10 |     2726 | 2023-12-15 | LAG              | L   | 0.342      | -            | -                | -                | -         |    -1.67 | aleph, EMIYA, nero, nooz, R2D2J  |
|            9 |     3119 | 2023-11-22 | M80              | L   | 0.188      | -            | -                | -                | -         |    -0.91 | aleph, EMIYA, heavn, nero, R2D2J |
|            8 |     3120 | 2023-11-22 | FLUFFY AIMERS    | L   | 0.188      | -            | -                | -                | -         |    -3.07 | aleph, EMIYA, nero, nooz, R2D2J  |
|            7 |     3131 | 2023-11-21 | Limitless        | W   | 0.182      | 0.500        | -                | 0.201 (0.018)    | -         |     2.95 | aleph, EMIYA, nero, nooz, R2D2J  |
|            6 |     3147 | 2023-11-20 | BOSS             | L   | 0.175      | -            | -                | -                | -         |    -1.28 | aleph, Elk, EMIYA, nero, R2D2J   |
|            5 |     3287 | 2023-11-15 | Carpe Diem       | L   | 0.142      | -            | -                | -                | -         |    -1.69 | aleph, Elk, EMIYA, nero, R2D2J   |
|            4 |     3429 | 2023-11-09 | Eros             | L   | 0.102      | -            | -                | -                | -         |    -1.82 | aleph, Elk, EMIYA, nero, R2D2J   |
|            3 |     3449 | 2023-11-08 | Nouns            | W   | 0.095      | 0.500        | 0.019 (0.001)    | -                | -         |     1.78 | aleph, Elk, EMIYA, nero, R2D2J   |
|            2 |     3475 | 2023-11-07 | NRG              | L   | 0.088      | -            | -                | -                | -         |    -0.97 | aleph, Elk, EMIYA, nero, R2D2J   |
|            1 |     3594 | 2023-11-01 | Party Astronauts | L   | 0.048      | -            | -                | -                | -         |    -0.73 | aleph, Elk, EMIYA, nero, R2D2J   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($432.30)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
