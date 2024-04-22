### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, N1ghtraid, Omichella, SkulL, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  612.0<br />
<br />
Final Rank Value (612.0) = Starting Rank Value (555.3) + Head To Head Adjustments (56.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.3
- 400 + ( ( 0.080 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 555.3


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
|           33 |       10 | 2024-04-22 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -12.27 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           32 |       13 | 2024-04-22 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -13.36 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           31 |      201 | 2024-04-17 | VexX               | L   | 1.000      | -            | -                | -                | -         |   -15.93 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           30 |      363 | 2024-04-10 | VexX               | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.295 (0.098)    | 0 (0.000) |    15.56 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           29 |      370 | 2024-04-10 | VexX               | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.295 (0.098)    | 0 (0.000) |    17.00 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           28 |      594 | 2024-04-03 | KZG                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.251 (0.084)    | 0 (0.000) |    15.03 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |      595 | 2024-04-03 | KZG                | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.251 (0.084)    | 0 (0.000) |    16.41 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |      723 | 2024-03-27 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     6.97 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |      727 | 2024-03-27 | Canon Event        | W   | 1.000      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     7.41 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |      993 | 2024-03-13 | DXA                | L   | 0.931      | -            | -                | -                | -         |   -12.03 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |      998 | 2024-03-13 | DXA                | W   | 0.931      | 0.333        | 0.009 (0.003)    | 0.277 (0.086)    | 0 (0.000) |    17.60 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     1170 | 2024-03-06 | Bad News Kangaroos | L   | 0.884      | -            | -                | -                | -         |    -3.78 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     1172 | 2024-03-06 | Bad News Kangaroos | L   | 0.884      | -            | -                | -                | -         |    -3.92 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     1341 | 2024-02-27 | RKON               | W   | 0.831      | 0.333        | -                | 0.165 (0.046)    | 0 (0.000) |    11.66 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     1344 | 2024-02-27 | RKON               | L   | 0.831      | -            | -                | -                | -         |   -14.78 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     1445 | 2024-02-22 | Bad News Kangaroos | L   | 0.797      | -            | -                | -                | -         |    -3.44 | Drox, Omichella, SkulL, viridian, vision     |
|           17 |     1446 | 2024-02-21 | Rooster            | L   | 0.797      | -            | -                | -                | -         |    -6.41 | Drox, Omichella, SkulL, viridian, vision     |
|           16 |     1480 | 2024-02-21 | VexX               | W   | 0.790      | 0.143        | 0.009 (0.001)    | 0.295 (0.033)    | 0 (0.000) |    16.40 | Drox, Omichella, SkulL, viridian, vision     |
|           15 |     1500 | 2024-02-20 | Mindfreak          | W   | 0.784      | 0.143        | -                | 0.339 (0.038)    | 0 (0.000) |    13.34 | Drox, Omichella, SkulL, viridian, vision     |
|           14 |     1502 | 2024-02-20 | Blitz              | W   | 0.784      | -            | -                | -                | -         |     6.88 | Drox, Omichella, SkulL, viridian, vision     |
|           13 |     1545 | 2024-02-18 | Mindfreak          | L   | 0.771      | -            | -                | -                | -         |   -11.34 | Drox, Omichella, SkulL, viridian, vision     |
|           12 |     1546 | 2024-02-18 | LE-LUX             | W   | 0.771      | -            | -                | -                | -         |     6.94 | Drox, Omichella, SkulL, viridian, vision     |
|           11 |     1605 | 2024-02-16 | sunday school      | L   | 0.757      | -            | -                | -                | -         |    -9.55 | damyo, Omichella, SkulL, viridian, vision    |
|           10 |     1626 | 2024-02-15 | DXA                | W   | 0.751      | 0.143        | 0.009 (0.001)    | 0.277 (0.030)    | -         |    16.04 | damyo, Omichella, SkulL, viridian, vision    |
|            9 |     1631 | 2024-02-14 | KZG                | L   | 0.750      | -            | -                | -                | -         |    -6.99 | damyo, Omichella, SkulL, viridian, vision    |
|            8 |     1998 | 2024-01-25 | Bad News Kangaroos | L   | 0.611      | -            | -                | -                | -         |    -2.27 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     2018 | 2024-01-24 | KZG                | W   | 0.604      | 0.143        | 0.005 (0.000)    | 0.251 (0.022)    | -         |    13.33 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     2145 | 2024-01-20 | FlyQuest           | L   | 0.577      | -            | -                | -                | -         |    -0.77 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     2147 | 2024-01-20 | iM Apartments      | W   | 0.577      | -            | -                | -                | -         |     5.27 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     2206 | 2024-01-18 | Mindfreak          | L   | 0.570      | -            | -                | -                | -         |    -6.08 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     2263 | 2024-01-17 | Mindfreak          | L   | 0.563      | -            | -                | -                | -         |    -6.52 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     2311 | 2024-01-17 | FARMism            | W   | 0.557      | -            | -                | -                | -         |     5.22 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     2388 | 2024-01-15 | DXA                | L   | 0.544      | -            | -                | -                | -         |    -4.93 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

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
