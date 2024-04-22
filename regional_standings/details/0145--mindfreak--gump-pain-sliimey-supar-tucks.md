### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  704.3<br />
<br />
Final Rank Value (704.3) = Starting Rank Value (574.8) + Head To Head Adjustments (129.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.8
- 400 + ( ( 0.090 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 574.8


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
|           23 |       10 | 2024-04-22 | Vantage            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.383 (0.128)    | 0 (0.000) |    12.27 | gump, pain, Sliimey, supar, tucks    |
|           22 |       13 | 2024-04-22 | Vantage            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.383 (0.128)    | 0 (0.000) |    13.36 | gump, pain, Sliimey, supar, tucks    |
|           21 |      110 | 2024-04-19 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -7.80 | gump, pain, Sliimey, supar, tucks    |
|           20 |      114 | 2024-04-19 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -1.75 | gump, pain, Sliimey, supar, tucks    |
|           19 |      166 | 2024-04-18 | DXA                | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.277 (0.040)    | 0 (0.000) |    12.52 | gump, pain, Sliimey, supar, tucks    |
|           18 |      196 | 2024-04-17 | KZG                | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.251 (0.036)    | 0 (0.000) |    12.53 | gump, pain, Sliimey, supar, tucks    |
|           17 |      364 | 2024-04-10 | DXA                | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.277 (0.092)    | 0 (0.000) |    13.91 | Forleks, gump, Sliimey, supar, tucks |
|           16 |      371 | 2024-04-10 | DXA                | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.277 (0.092)    | 0 (0.000) |    15.18 | Forleks, gump, Sliimey, supar, tucks |
|           15 |      596 | 2024-04-03 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     5.38 | Forleks, gump, Sliimey, supar, tucks |
|           14 |      600 | 2024-04-03 | Canon Event        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.66 | Forleks, gump, Sliimey, supar, tucks |
|           13 |      722 | 2024-03-27 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.046 (0.015)    | 0.429 (0.143)    | 0 (0.000) |    26.36 | Forleks, gump, Sliimey, supar, tucks |
|           12 |      729 | 2024-03-27 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -4.67 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     1169 | 2024-03-06 | Rooster            | L   | 0.884      | -            | -                | -                | -         |    -6.90 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     1176 | 2024-03-06 | Rooster            | L   | 0.884      | -            | -                | -                | -         |    -7.32 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     1471 | 2024-02-21 | KZG                | W   | 0.791      | 0.333        | 0.005 (0.001)    | 0.251 (0.066)    | 0 (0.000) |    14.23 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     1478 | 2024-02-21 | KZG                | W   | 0.791      | 0.333        | 0.005 (0.001)    | 0.251 (0.066)    | -         |    15.23 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     1500 | 2024-02-20 | Vantage            | L   | 0.784      | -            | -                | -                | -         |   -13.34 | gump, Rickeh, Sliimey, supar, tucks  |
|            6 |     1505 | 2024-02-20 | RKON               | W   | 0.784      | -            | -                | -                | -         |     9.52 | gump, Rickeh, Sliimey, supar, tucks  |
|            5 |     1529 | 2024-02-19 | FlyQuest           | L   | 0.777      | -            | -                | -                | -         |    -1.14 | gump, Rickeh, Sliimey, supar, tucks  |
|            4 |     1545 | 2024-02-18 | Vantage            | W   | 0.771      | 0.143        | -                | 0.383 (0.042)    | -         |    11.34 | gump, Rickeh, Sliimey, supar, tucks  |
|            3 |     1549 | 2024-02-18 | gfg123321          | W   | 0.770      | -            | -                | -                | -         |     6.53 | gump, Rickeh, Sliimey, supar, tucks  |
|            2 |     1672 | 2024-02-14 | KZG                | L   | 0.744      | -            | -                | -                | -         |    -7.76 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     1695 | 2024-02-13 | DEMESIS            | W   | 0.737      | -            | -                | -                | -         |     6.22 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
