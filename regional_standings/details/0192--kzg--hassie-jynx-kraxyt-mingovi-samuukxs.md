### Roster Details<br />
Team Name: KZG<br />
Roster: Hassie, Jynx, KRAXYT, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [27]( ../standings_asia.md)<br />
Final Rank Value:  589.2<br />
<br />
Final Rank Value (589.2) = Starting Rank Value (716.8) + Head To Head Adjustments (-127.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.8
- 400 + ( ( 0.164 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 716.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      196 | 2024-04-17 | Mindfreak     | L   | 1.000      | -            | -                | -                | -         |   -12.53 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs       |
|           24 |      367 | 2024-04-10 | Canon Event   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.92 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           23 |      373 | 2024-04-10 | Canon Event   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.26 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           22 |      594 | 2024-04-03 | Vantage       | L   | 1.000      | -            | -                | -                | -         |   -15.03 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           21 |      595 | 2024-04-03 | Vantage       | L   | 1.000      | -            | -                | -                | -         |   -16.41 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           20 |      724 | 2024-03-27 | FlyQuest      | L   | 1.000      | -            | -                | -                | -         |    -1.53 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           19 |      730 | 2024-03-27 | FlyQuest      | L   | 1.000      | -            | -                | -                | -         |    -1.55 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           18 |      773 | 2024-03-23 | VexX          | W   | 0.998      | 0.315        | 0.009 (0.003)    | 0.295 (0.093)    | 1 (0.998) |    19.43 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           17 |      774 | 2024-03-23 | DXA           | L   | 0.997      | -            | -                | -                | -         |   -13.60 | Hassie, KRAXYT, KZXL, Mingovi, Samuukxs       |
|           16 |      994 | 2024-03-13 | RKON          | L   | 0.931      | -            | -                | -                | -         |   -18.87 | bebest, Hassie, KZXL, Mingovi, Samuukxs       |
|           15 |     1000 | 2024-03-13 | RKON          | W   | 0.931      | 0.333        | 0.000 (0.000)    | 0.165 (0.051)    | 0 (0.000) |    10.21 | bebest, Hassie, KZXL, Mingovi, Samuukxs       |
|           14 |     1168 | 2024-03-06 | VexX          | L   | 0.884      | -            | -                | -                | -         |   -10.89 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|           13 |     1175 | 2024-03-06 | VexX          | L   | 0.884      | -            | -                | -                | -         |   -11.74 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|           12 |     1471 | 2024-02-21 | Mindfreak     | L   | 0.791      | -            | -                | -                | -         |   -14.23 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|           11 |     1478 | 2024-02-21 | Mindfreak     | L   | 0.791      | -            | -                | -                | -         |   -15.23 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|           10 |     1504 | 2024-02-20 | Cringexe      | L   | 0.784      | -            | -                | -                | -         |   -18.35 | dpr, Hassie, KZXL, Mingovi, Samuukxs          |
|            9 |     1548 | 2024-02-18 | VexX          | L   | 0.770      | -            | -                | -                | -         |   -12.71 | dpr, Hassie, Lexon, Mingovi, Samuukxs         |
|            8 |     1602 | 2024-02-16 | sunday school | L   | 0.758      | -            | -                | -                | -         |   -14.30 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|            7 |     1627 | 2024-02-15 | sunday school | W   | 0.751      | 0.143        | 0.001 (0.000)    | 0.120 (0.013)    | 0 (0.000) |     9.21 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|            6 |     1631 | 2024-02-14 | Vantage       | W   | 0.750      | 0.143        | 0.000 (0.000)    | 0.383 (0.041)    | 0 (0.000) |     6.99 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|            5 |     1672 | 2024-02-14 | Mindfreak     | W   | 0.744      | 0.143        | 0.000 (0.000)    | 0.339 (0.036)    | 0 (0.000) |     7.76 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|            4 |     1697 | 2024-02-13 | RKON          | W   | 0.737      | 0.143        | 0.000 (0.000)    | 0.165 (0.017)    | 0 (0.000) |     6.25 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|            3 |     2018 | 2024-01-24 | Vantage       | L   | 0.604      | -            | -                | -                | -         |   -13.33 | Hassie, KZXL, Mingovi, pain, Samuukxs         |
|            2 |     2390 | 2024-01-15 | Mindfreak     | L   | 0.544      | -            | -                | -                | -         |   -10.36 | constantinos, Hassie, Mingovi, pain, Samuukxs |
|            1 |     3028 | 2023-11-29 | Antic         | W   | 0.230      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.05 | Hassie, KZXL, Mingovi, pain, Samuukxs         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($989.58)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
