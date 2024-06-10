### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  830.2<br />
<br />
Final Rank Value (830.2) = Starting Rank Value (719.9) + Head To Head Adjustments (110.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.9
- 400 + ( ( 0.160 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 719.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      140 | 2024-06-08 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -1.27 | gump, pain, Sliimey, supar, tucks    |
|           29 |      197 | 2024-06-07 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.033 (0.011)    | 0.262 (0.087)    | 0 (0.000) |    18.67 | gump, pain, Sliimey, supar, tucks    |
|           28 |      261 | 2024-06-06 | Vantage            | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.201 (0.067)    | 0 (0.000) |     9.57 | gump, pain, Sliimey, supar, tucks    |
|           27 |      675 | 2024-05-22 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -0.85 | gump, pain, Sliimey, supar, tucks    |
|           26 |      679 | 2024-05-22 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -0.86 | gump, pain, Sliimey, supar, tucks    |
|           25 |     1125 | 2024-05-08 | Arcade             | W   | 0.978      | 0.333        | 0.005 (0.002)    | 0.189 (0.062)    | 0 (0.000) |     9.24 | gump, pain, Sliimey, supar, tucks    |
|           24 |     1127 | 2024-05-08 | Arcade             | W   | 0.977      | 0.333        | 0.005 (0.002)    | 0.189 (0.062)    | 0 (0.000) |     9.95 | gump, pain, Sliimey, supar, tucks    |
|           23 |     1457 | 2024-04-22 | Vantage            | W   | 0.871      | 0.333        | -                | 0.201 (0.058)    | 0 (0.000) |    10.15 | gump, pain, Sliimey, supar, tucks    |
|           22 |     1460 | 2024-04-22 | Vantage            | W   | 0.871      | 0.333        | -                | 0.201 (0.058)    | 0 (0.000) |    10.92 | gump, pain, Sliimey, supar, tucks    |
|           21 |     1557 | 2024-04-19 | Bad News Kangaroos | L   | 0.851      | -            | -                | -                | -         |    -9.56 | gump, pain, Sliimey, supar, tucks    |
|           20 |     1561 | 2024-04-19 | FlyQuest           | L   | 0.850      | -            | -                | -                | -         |    -0.73 | gump, pain, Sliimey, supar, tucks    |
|           19 |     1613 | 2024-04-18 | DXA                | W   | 0.844      | -            | -                | -                | 0 (0.000) |     8.85 | gump, pain, Sliimey, supar, tucks    |
|           18 |     1643 | 2024-04-17 | KZG                | W   | 0.838      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |     9.49 | gump, pain, Sliimey, supar, tucks    |
|           17 |     1811 | 2024-04-10 | DXA                | W   | 0.791      | 0.333        | 0.005 (0.001)    | 0.209 (0.055)    | 0 (0.000) |     9.02 | Forleks, gump, Sliimey, supar, tucks |
|           16 |     1818 | 2024-04-10 | DXA                | W   | 0.791      | 0.333        | 0.005 (0.001)    | 0.209 (0.055)    | 0 (0.000) |     9.63 | Forleks, gump, Sliimey, supar, tucks |
|           15 |     2043 | 2024-04-03 | Canon Event        | W   | 0.744      | -            | -                | -                | -         |     4.35 | Forleks, gump, Sliimey, supar, tucks |
|           14 |     2047 | 2024-04-03 | Canon Event        | W   | 0.744      | -            | -                | -                | -         |     4.52 | Forleks, gump, Sliimey, supar, tucks |
|           13 |     2169 | 2024-03-27 | Bad News Kangaroos | W   | 0.698      | 0.333        | 0.033 (0.008)    | 0.262 (0.061)    | -         |    15.78 | Forleks, gump, Sliimey, supar, tucks |
|           12 |     2176 | 2024-03-27 | Bad News Kangaroos | L   | 0.698      | -            | -                | -                | -         |    -6.13 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     2616 | 2024-03-06 | Rooster            | L   | 0.558      | -            | -                | -                | -         |    -6.01 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     2623 | 2024-03-06 | Rooster            | L   | 0.558      | -            | -                | -                | -         |    -6.28 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     2918 | 2024-02-21 | KZG                | W   | 0.465      | 0.333        | 0.010 (0.001)    | 0.168 (0.026)    | -         |     6.77 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     2925 | 2024-02-21 | KZG                | W   | 0.464      | 0.333        | 0.010 (0.001)    | -                | -         |     7.05 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     2947 | 2024-02-20 | Vantage            | L   | 0.458      | -            | -                | -                | -         |    -8.38 | gump, Rickeh, Sliimey, supar, tucks  |
|            6 |     2952 | 2024-02-20 | RKON               | W   | 0.457      | -            | -                | -                | -         |     3.36 | gump, Rickeh, Sliimey, supar, tucks  |
|            5 |     2976 | 2024-02-19 | FlyQuest           | L   | 0.450      | -            | -                | -                | -         |    -0.31 | gump, Rickeh, Sliimey, supar, tucks  |
|            4 |     2992 | 2024-02-18 | Vantage            | W   | 0.444      | -            | -                | -                | -         |     5.98 | gump, Rickeh, Sliimey, supar, tucks  |
|            3 |     2996 | 2024-02-18 | gfg123321          | W   | 0.444      | -            | -                | -                | -         |     2.03 | gump, Rickeh, Sliimey, supar, tucks  |
|            2 |     3119 | 2024-02-14 | KZG                | L   | 0.417      | -            | -                | -                | -         |    -6.53 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     3142 | 2024-02-13 | DEMESIS            | W   | 0.411      | -            | -                | -                | -         |     1.84 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,400.00)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
