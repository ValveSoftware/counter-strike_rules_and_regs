### Roster Details<br />
Team Name: LOS<br />
Roster: history, JOTA, leo_drk, short, t9rnay<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  406.0<br />
<br />
Final Rank Value (406.0) = Starting Rank Value (400.2) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 400.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2568 | 2024-01-17 | Carpe Diem    | L   | 0.468      | -            | -                | -                | -         |    -2.31 | history, JOTA, leo_drk, short, t9rnay |
|            9 |     2658 | 2024-01-15 | Liquid        | L   | 0.455      | -            | -                | -                | -         |    -0.07 | history, JOTA, leo_drk, short, t9rnay |
|            8 |     2699 | 2024-01-14 | NRG           | L   | 0.448      | -            | -                | -                | -         |    -1.46 | history, JOTA, leo_drk, short, t9rnay |
|            7 |     2711 | 2024-01-13 | FLUFFY AIMERS | W   | 0.443      | 0.143        | 0.000 (0.000)    | 0.077 (0.005)    | 0 (0.000) |     9.07 | history, JOTA, leo_drk, short, t9rnay |
|            6 |     2752 | 2024-01-12 | Elevate       | L   | 0.436      | -            | -                | -                | -         |    -1.05 | history, JOTA, leo_drk, short, t9rnay |
|            5 |     2762 | 2024-01-12 | Carpe Diem    | L   | 0.436      | -            | -                | -                | -         |    -1.93 | history, JOTA, leo_drk, short, t9rnay |
|            4 |     2791 | 2024-01-11 | Rocket        | L   | 0.430      | -            | -                | -                | -         |    -2.63 | history, JOTA, leo_drk, short, t9rnay |
|            3 |     2794 | 2024-01-11 | WICKED        | W   | 0.430      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.59 | history, JOTA, leo_drk, short, t9rnay |
|            2 |     2850 | 2024-01-09 | Liquid        | L   | 0.416      | -            | -                | -                | -         |    -0.06 | history, JOTA, leo_drk, short, t9rnay |
|            1 |     3327 | 2023-11-28 | BESTIA        | L   | 0.135      | -            | -                | -                | -         |    -0.38 | bt0, JOTA, short, steel, t9rnay       |

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
