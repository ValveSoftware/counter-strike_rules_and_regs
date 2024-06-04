### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, N1ghtraid, Omichella, SkulL, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [172](../standings_global.md)<br />
Regional Rank: [21]( ../standings_asia.md)<br />
Final Rank Value:  585.5<br />
<br />
Final Rank Value (585.5) = Starting Rank Value (542.4) + Head To Head Adjustments (43.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.4
- 400 + ( ( 0.073 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 542.4


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
|           35 |      174 | 2024-05-22 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -5.48 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           34 |      178 | 2024-05-22 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -5.77 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           33 |      957 | 2024-04-22 | Mindfreak          | L   | 0.950      | -            | -                | -                | -         |   -11.69 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           32 |      960 | 2024-04-22 | Mindfreak          | L   | 0.950      | -            | -                | -                | -         |   -12.67 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           31 |     1148 | 2024-04-17 | Arcade             | L   | 0.917      | -            | -                | -                | -         |   -13.57 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           30 |     1310 | 2024-04-10 | Arcade             | W   | 0.870      | 0.333        | 0.006 (0.002)    | 0.229 (0.066)    | 0 (0.000) |    14.68 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           29 |     1317 | 2024-04-10 | Arcade             | W   | 0.870      | 0.333        | 0.006 (0.002)    | 0.229 (0.066)    | 0 (0.000) |    15.84 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           28 |     1541 | 2024-04-03 | KZG                | W   | 0.824      | 0.333        | 0.011 (0.003)    | 0.199 (0.055)    | 0 (0.000) |    14.35 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |     1542 | 2024-04-03 | KZG                | W   | 0.823      | 0.333        | 0.011 (0.003)    | 0.199 (0.055)    | 0 (0.000) |    15.41 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |     1670 | 2024-03-27 | Canon Event        | W   | 0.777      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     8.90 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |     1674 | 2024-03-27 | Canon Event        | W   | 0.777      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     9.49 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |     1940 | 2024-03-13 | DXA                | L   | 0.684      | -            | -                | -                | -         |    -7.85 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |     1945 | 2024-03-13 | DXA                | W   | 0.683      | 0.333        | 0.005 (0.001)    | 0.244 (0.056)    | 0 (0.000) |    14.04 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     2117 | 2024-03-06 | Bad News Kangaroos | L   | 0.637      | -            | -                | -                | -         |    -2.78 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     2119 | 2024-03-06 | Bad News Kangaroos | L   | 0.637      | -            | -                | -                | -         |    -2.86 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     2288 | 2024-02-27 | RKON               | W   | 0.583      | 0.333        | -                | 0.107 (0.021)    | 0 (0.000) |     8.63 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     2291 | 2024-02-27 | RKON               | L   | 0.583      | -            | -                | -                | -         |    -9.97 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     2392 | 2024-02-22 | Bad News Kangaroos | L   | 0.550      | -            | -                | -                | -         |    -2.42 | Drox, Omichella, SkulL, viridian, vision     |
|           17 |     2393 | 2024-02-21 | Rooster            | L   | 0.549      | -            | -                | -                | -         |    -3.77 | Drox, Omichella, SkulL, viridian, vision     |
|           16 |     2427 | 2024-02-21 | Arcade             | W   | 0.543      | 0.143        | 0.006 (0.000)    | 0.229 (0.018)    | 0 (0.000) |    11.68 | Drox, Omichella, SkulL, viridian, vision     |
|           15 |     2447 | 2024-02-20 | Mindfreak          | W   | 0.537      | 0.143        | -                | 0.287 (0.022)    | 0 (0.000) |     9.27 | Drox, Omichella, SkulL, viridian, vision     |
|           14 |     2449 | 2024-02-20 | Blitz              | W   | 0.537      | -            | -                | -                | -         |     5.19 | Drox, Omichella, SkulL, viridian, vision     |
|           13 |     2492 | 2024-02-18 | Mindfreak          | L   | 0.523      | -            | -                | -                | -         |    -7.63 | Drox, Omichella, SkulL, viridian, vision     |
|           12 |     2493 | 2024-02-18 | LE-LUX             | W   | 0.523      | -            | -                | -                | -         |     5.13 | Drox, Omichella, SkulL, viridian, vision     |
|           11 |     2552 | 2024-02-16 | sunday school      | L   | 0.510      | -            | -                | -                | -         |    -5.56 | damyo, Omichella, SkulL, viridian, vision    |
|           10 |     2573 | 2024-02-15 | DXA                | W   | 0.504      | 0.143        | 0.005 (0.000)    | 0.244 (0.018)    | -         |    11.21 | damyo, Omichella, SkulL, viridian, vision    |
|            9 |     2578 | 2024-02-14 | KZG                | L   | 0.503      | -            | -                | -                | -         |    -4.09 | damyo, Omichella, SkulL, viridian, vision    |
|            8 |     2945 | 2024-01-25 | Bad News Kangaroos | L   | 0.364      | -            | -                | -                | -         |    -6.40 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     2965 | 2024-01-24 | KZG                | W   | 0.357      | 0.143        | 0.011 (0.001)    | 0.199 (0.010)    | -         |     8.29 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     3092 | 2024-01-20 | FlyQuest           | L   | 0.330      | -            | -                | -                | -         |    -0.08 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3094 | 2024-01-20 | iM Apartments      | W   | 0.329      | -            | -                | -                | -         |     3.22 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     3153 | 2024-01-18 | Mindfreak          | L   | 0.322      | -            | -                | -                | -         |    -5.00 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     3210 | 2024-01-17 | Mindfreak          | L   | 0.316      | -            | -                | -                | -         |    -5.13 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     3258 | 2024-01-17 | FARMism            | W   | 0.310      | -            | -                | -                | -         |     3.05 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     3335 | 2024-01-15 | DXA                | L   | 0.297      | -            | -                | -                | -         |    -2.64 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
