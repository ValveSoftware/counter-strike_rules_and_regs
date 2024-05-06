### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, N1ghtraid, Omichella, SkulL, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  617.0<br />
<br />
Final Rank Value (617.0) = Starting Rank Value (555.0) + Head To Head Adjustments (62.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.0
- 400 + ( ( 0.081 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 555.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      306 | 2024-04-22 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -12.28 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           32 |      309 | 2024-04-22 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -13.38 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           31 |      497 | 2024-04-17 | VexX               | L   | 1.000      | -            | -                | -                | -         |   -15.52 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           30 |      659 | 2024-04-10 | VexX               | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.252 (0.084)    | 0 (0.000) |    16.00 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           29 |      666 | 2024-04-10 | VexX               | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.252 (0.084)    | 0 (0.000) |    17.48 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           28 |      890 | 2024-04-03 | KZG                | W   | 0.978      | 0.333        | 0.018 (0.006)    | 0.216 (0.070)    | 0 (0.000) |    15.63 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |      891 | 2024-04-03 | KZG                | W   | 0.977      | 0.333        | 0.018 (0.006)    | 0.216 (0.070)    | 0 (0.000) |    17.04 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |     1019 | 2024-03-27 | Canon Event        | W   | 0.931      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     6.55 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |     1023 | 2024-03-27 | Canon Event        | W   | 0.931      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     6.94 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |     1289 | 2024-03-13 | DXA                | L   | 0.838      | -            | -                | -                | -         |   -10.35 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |     1294 | 2024-03-13 | DXA                | W   | 0.838      | 0.333        | 0.009 (0.003)    | 0.239 (0.067)    | 0 (0.000) |    16.40 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     1466 | 2024-03-06 | Bad News Kangaroos | L   | 0.791      | -            | -                | -                | -         |    -2.97 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     1468 | 2024-03-06 | Bad News Kangaroos | L   | 0.791      | -            | -                | -                | -         |    -3.06 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     1637 | 2024-02-27 | RKON               | W   | 0.738      | 0.333        | -                | 0.142 (0.035)    | 0 (0.000) |    10.36 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     1640 | 2024-02-27 | RKON               | L   | 0.737      | -            | -                | -                | -         |   -13.16 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     1741 | 2024-02-22 | Bad News Kangaroos | L   | 0.704      | -            | -                | -                | -         |    -2.65 | Drox, Omichella, SkulL, viridian, vision     |
|           17 |     1742 | 2024-02-21 | Rooster            | L   | 0.703      | -            | -                | -                | -         |    -4.50 | Drox, Omichella, SkulL, viridian, vision     |
|           16 |     1776 | 2024-02-21 | VexX               | W   | 0.697      | 0.143        | 0.009 (0.001)    | 0.252 (0.025)    | 0 (0.000) |    14.68 | Drox, Omichella, SkulL, viridian, vision     |
|           15 |     1796 | 2024-02-20 | Mindfreak          | W   | 0.691      | 0.143        | -                | 0.307 (0.030)    | 0 (0.000) |    11.68 | Drox, Omichella, SkulL, viridian, vision     |
|           14 |     1798 | 2024-02-20 | Blitz              | W   | 0.691      | -            | -                | -                | -         |     6.09 | Drox, Omichella, SkulL, viridian, vision     |
|           13 |     1841 | 2024-02-18 | Mindfreak          | L   | 0.678      | -            | -                | -                | -         |   -10.12 | Drox, Omichella, SkulL, viridian, vision     |
|           12 |     1842 | 2024-02-18 | LE-LUX             | W   | 0.677      | -            | -                | -                | -         |     6.08 | Drox, Omichella, SkulL, viridian, vision     |
|           11 |     1901 | 2024-02-16 | sunday school      | L   | 0.664      | -            | -                | -                | -         |    -7.25 | damyo, Omichella, SkulL, viridian, vision    |
|           10 |     1922 | 2024-02-15 | DXA                | W   | 0.658      | 0.143        | 0.009 (0.001)    | 0.239 (0.022)    | -         |    14.28 | damyo, Omichella, SkulL, viridian, vision    |
|            9 |     1927 | 2024-02-14 | KZG                | L   | 0.657      | -            | -                | -                | -         |    -5.68 | damyo, Omichella, SkulL, viridian, vision    |
|            8 |     2294 | 2024-01-25 | Bad News Kangaroos | L   | 0.518      | -            | -                | -                | -         |    -1.75 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     2314 | 2024-01-24 | KZG                | W   | 0.511      | 0.143        | 0.018 (0.001)    | 0.216 (0.016)    | -         |    11.68 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     2441 | 2024-01-20 | FlyQuest           | L   | 0.484      | -            | -                | -                | -         |    -0.19 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     2443 | 2024-01-20 | iM Apartments      | W   | 0.483      | -            | -                | -                | -         |     4.45 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     2502 | 2024-01-18 | Mindfreak          | L   | 0.477      | -            | -                | -                | -         |    -5.27 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     2559 | 2024-01-17 | Mindfreak          | L   | 0.470      | -            | -                | -                | -         |    -5.57 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     2607 | 2024-01-17 | FARMism            | W   | 0.464      | -            | -                | -                | -         |     4.35 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     2684 | 2024-01-15 | DXA                | L   | 0.451      | -            | -                | -                | -         |    -4.03 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

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
