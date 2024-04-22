### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dangeR, dpr, Forleks, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  689.0<br />
<br />
Final Rank Value (689.0) = Starting Rank Value (625.8) + Head To Head Adjustments (63.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.219[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.8
- 400 + ( ( 0.117 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 625.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     2002 | 2024-01-25 | Rooster        | L   | 0.611      | -            | -                | -                | -         |    -7.81 | dangeR, dpr, Forleks, supar, tucks    |
|           26 |     2019 | 2024-01-24 | DXA            | W   | 0.604      | 0.143        | 0.009 (0.001)    | 0.277 (0.024)    | 0 (0.000) |     9.86 | dangeR, dpr, Forleks, supar, tucks    |
|           25 |     2039 | 2024-01-23 | FlyQuest       | L   | 0.598      | -            | -                | -                | -         |    -1.52 | dangeR, dpr, Forleks, supar, tucks    |
|           24 |     2041 | 2024-01-23 | Rooster        | W   | 0.597      | 0.143        | 0.013 (0.001)    | 0.355 (0.030)    | 0 (0.000) |    11.61 | dangeR, dpr, Forleks, supar, tucks    |
|           23 |     2068 | 2024-01-22 | FlyQuest       | L   | 0.591      | -            | -                | -                | -         |    -1.44 | dangeR, dpr, Forleks, supar, tucks    |
|           22 |     2069 | 2024-01-22 | Rooster        | W   | 0.590      | 0.143        | 0.013 (0.001)    | 0.355 (0.030)    | 0 (0.000) |    11.69 | dangeR, dpr, Forleks, supar, tucks    |
|           21 |     2104 | 2024-01-20 | FlyQuest       | L   | 0.583      | -            | -                | -                | -         |    -1.45 | dangeR, dpr, Forleks, supar, tucks    |
|           20 |     2143 | 2024-01-20 | DXA            | W   | 0.577      | 0.143        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     3.52 | dangeR, dpr, Forleks, supar, tucks    |
|           19 |     2202 | 2024-01-19 | Rooster        | L   | 0.570      | -            | -                | -                | -         |    -6.50 | dangeR, dpr, Forleks, supar, tucks    |
|           18 |     2206 | 2024-01-18 | Vantage        | W   | 0.570      | 0.143        | 0.000 (0.000)    | 0.383 (0.031)    | 0 (0.000) |     6.08 | dangeR, dpr, Forleks, supar, tucks    |
|           17 |     2260 | 2024-01-18 | VexX           | W   | 0.564      | 0.143        | 0.009 (0.001)    | 0.295 (0.024)    | 0 (0.000) |     9.61 | dangeR, dpr, Forleks, supar, tucks    |
|           16 |     2263 | 2024-01-17 | Vantage        | W   | 0.563      | 0.143        | 0.000 (0.000)    | 0.383 (0.031)    | 0 (0.000) |     6.52 | dangeR, dpr, Forleks, supar, tucks    |
|           15 |     2310 | 2024-01-17 | PatatiPatata   | W   | 0.557      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.52 | dangeR, dpr, Forleks, supar, tucks    |
|           14 |     2361 | 2024-01-16 | FlyQuest       | L   | 0.550      | -            | -                | -                | -         |    -1.16 | dangeR, dpr, Forleks, supar, tucks    |
|           13 |     2390 | 2024-01-15 | KZG            | W   | 0.544      | 0.143        | 0.005 (0.000)    | 0.251 (0.020)    | 0 (0.000) |    10.36 | dangeR, dpr, Forleks, supar, tucks    |
|           12 |     2450 | 2024-01-13 | RKON           | W   | 0.531      | 0.143        | -                | 0.165 (0.013)    | 0 (0.000) |     6.21 | dangeR, dpr, Forleks, supar, tucks    |
|           11 |     2452 | 2024-01-13 | iM Apartments  | W   | 0.530      | -            | -                | -                | -         |     3.64 | dangeR, dpr, Forleks, supar, tucks    |
|           10 |     2454 | 2024-01-12 | 500x           | W   | 0.530      | -            | -                | -                | -         |     3.70 | dangeR, dpr, Forleks, supar, tucks    |
|            9 |     3213 | 2023-11-17 | sunday school  | L   | 0.156      | -            | -                | -                | -         |    -2.46 | cl0ver, coops, Forleks, supar, tucks  |
|            8 |     3241 | 2023-11-17 | KZG            | W   | 0.151      | -            | -                | -                | -         |     1.45 | dangeR, dpr, Forleks, supar, tucks    |
|            7 |     3387 | 2023-11-11 | Rooster        | L   | 0.117      | -            | -                | -                | -         |    -1.19 | dangeR, dpr, Forleks, supar, tucks    |
|            6 |     3415 | 2023-11-11 | Stirlzs Angels | W   | 0.110      | 0.313        | 0.000 (0.000)    | 0.012 (0.000)    | -         |     1.50 | dangeR, dpr, Forleks, supar, tucks    |
|            5 |     3508 | 2023-11-06 | Vantage        | L   | 0.077      | -            | -                | -                | -         |    -1.25 | dangeR, ekul, Forleks, supar, tucks   |
|            4 |     3570 | 2023-11-03 | Vantage        | L   | 0.057      | -            | -                | -                | -         |    -0.93 | cl0ver, dangeR, Forleks, supar, tucks |
|            3 |     3685 | 2023-10-30 | DXA            | L   | 0.031      | -            | -                | -                | -         |    -0.35 | dangeR, ekul, Forleks, supar, tucks   |
|            2 |     3732 | 2023-10-29 | KZG            | W   | 0.024      | -            | -                | -                | -         |     0.22 | dangeR, Forleks, supar, tucks, versa  |
|            1 |     3771 | 2023-10-28 | Stirlzs Angels | L   | 0.017      | -            | -                | -                | -         |    -0.31 | dangeR, Forleks, supar, tucks, versa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52.32)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
