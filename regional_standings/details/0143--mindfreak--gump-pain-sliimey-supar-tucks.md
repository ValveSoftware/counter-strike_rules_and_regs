### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  709.1<br />
<br />
Final Rank Value (709.1) = Starting Rank Value (572.7) + Head To Head Adjustments (136.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.7
- 400 + ( ( 0.091 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 572.7


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
|           23 |      306 | 2024-04-22 | Vantage            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.332 (0.111)    | 0 (0.000) |    12.28 | gump, pain, Sliimey, supar, tucks    |
|           22 |      309 | 2024-04-22 | Vantage            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.332 (0.111)    | 0 (0.000) |    13.38 | gump, pain, Sliimey, supar, tucks    |
|           21 |      406 | 2024-04-19 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -7.03 | gump, pain, Sliimey, supar, tucks    |
|           20 |      410 | 2024-04-19 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -0.72 | gump, pain, Sliimey, supar, tucks    |
|           19 |      462 | 2024-04-18 | DXA                | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.239 (0.034)    | 0 (0.000) |    13.04 | gump, pain, Sliimey, supar, tucks    |
|           18 |      492 | 2024-04-17 | KZG                | W   | 1.000      | 0.143        | 0.018 (0.003)    | 0.216 (0.031)    | 0 (0.000) |    13.44 | gump, pain, Sliimey, supar, tucks    |
|           17 |      660 | 2024-04-10 | DXA                | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.239 (0.080)    | 0 (0.000) |    14.54 | Forleks, gump, Sliimey, supar, tucks |
|           16 |      667 | 2024-04-10 | DXA                | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.239 (0.080)    | 0 (0.000) |    15.88 | Forleks, gump, Sliimey, supar, tucks |
|           15 |      892 | 2024-04-03 | Canon Event        | W   | 0.977      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     5.38 | Forleks, gump, Sliimey, supar, tucks |
|           14 |      896 | 2024-04-03 | Canon Event        | W   | 0.977      | -            | -                | -                | 0 (0.000) |     5.65 | Forleks, gump, Sliimey, supar, tucks |
|           13 |     1018 | 2024-03-27 | Bad News Kangaroos | W   | 0.931      | 0.333        | 0.068 (0.021)    | 0.359 (0.111)    | 0 (0.000) |    25.13 | Forleks, gump, Sliimey, supar, tucks |
|           12 |     1025 | 2024-03-27 | Bad News Kangaroos | L   | 0.931      | -            | -                | -                | -         |    -3.84 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     1465 | 2024-03-06 | Rooster            | L   | 0.791      | -            | -                | -                | -         |    -4.98 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     1472 | 2024-03-06 | Rooster            | L   | 0.791      | -            | -                | -                | -         |    -5.21 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     1767 | 2024-02-21 | KZG                | W   | 0.698      | 0.333        | 0.018 (0.004)    | 0.216 (0.050)    | 0 (0.000) |    13.42 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     1774 | 2024-02-21 | KZG                | W   | 0.697      | 0.333        | 0.018 (0.004)    | 0.216 (0.050)    | -         |    14.21 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     1796 | 2024-02-20 | Vantage            | L   | 0.691      | -            | -                | -                | -         |   -11.68 | gump, Rickeh, Sliimey, supar, tucks  |
|            6 |     1801 | 2024-02-20 | RKON               | W   | 0.690      | -            | -                | -                | -         |     8.60 | gump, Rickeh, Sliimey, supar, tucks  |
|            5 |     1825 | 2024-02-19 | FlyQuest           | L   | 0.683      | -            | -                | -                | -         |    -0.32 | gump, Rickeh, Sliimey, supar, tucks  |
|            4 |     1841 | 2024-02-18 | Vantage            | W   | 0.678      | 0.143        | -                | 0.332 (0.032)    | -         |    10.12 | gump, Rickeh, Sliimey, supar, tucks  |
|            3 |     1845 | 2024-02-18 | gfg123321          | W   | 0.677      | -            | -                | -                | -         |     5.80 | gump, Rickeh, Sliimey, supar, tucks  |
|            2 |     1968 | 2024-02-14 | KZG                | L   | 0.650      | -            | -                | -                | -         |    -6.23 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     1991 | 2024-02-13 | DEMESIS            | W   | 0.644      | -            | -                | -                | -         |     5.51 | deStiny, gump, Sliimey, supar, tucks |

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
