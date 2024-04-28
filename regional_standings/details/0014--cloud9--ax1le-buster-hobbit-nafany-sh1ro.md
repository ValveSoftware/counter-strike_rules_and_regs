### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, buster, HObbit, nafany, sh1ro<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1331.5<br />
<br />
Final Rank Value (1331.5) = Starting Rank Value (1292.5) + Head To Head Adjustments (39.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.501[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.608[<sup>2</sup>](#table1)

The average of these factors is 0.436<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1292.5
- 400 + ( ( 0.436 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1292.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      138 | 2023-02-05 | IHC               | L   | 1.000      | -            | -                | -                | -         |   -21.25 | Ax1Le, buster, HObbit, nafany, sh1ro |
|           24 |      177 | 2023-02-04 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -5.32 | Ax1Le, buster, HObbit, nafany, sh1ro |
|           23 |      230 | 2023-02-01 | ENCE              | W   | 1.000      | 0.143        | 0.108 (0.015)    | 0.394 (0.056)    | 1 (1.000) |    13.53 | Ax1Le, buster, HObbit, nafany, sh1ro |
|           22 |      251 | 2023-02-01 | IHC               | W   | 1.000      | 0.143        | 0.108 (0.015)    | 0.622 (0.089)    | 1 (1.000) |     8.99 | Ax1Le, buster, HObbit, nafany, sh1ro |
|           21 |     1660 | 2022-11-10 | MOUZ              | L   | 0.574      | -            | -                | -                | -         |    -9.27 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           20 |     1696 | 2022-11-06 | Heroic            | W   | 0.547      | 1.000        | 0.608 (0.332)    | 0.560 (0.306)    | 1 (0.547) |    16.00 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           19 |     1712 | 2022-11-05 | Natus Vincere     | W   | 0.541      | 1.000        | 0.358 (0.193)    | 0.372 (0.201)    | 1 (0.541) |    15.20 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           18 |     1722 | 2022-11-05 | FaZe              | W   | 0.539      | 1.000        | 0.433 (0.233)    | 0.358 (0.193)    | 1 (0.539) |    15.28 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           17 |     1734 | 2022-11-03 | GamerLegion       | W   | 0.527      | 0.143        | 0.105 (0.008)    | 0.469 (0.035)    | 1 (0.527) |     5.48 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           16 |     1739 | 2022-11-02 | Evil Geniuses     | W   | 0.521      | -            | -                | -                | 1 (0.521) |     3.50 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           15 |     1750 | 2022-11-01 | Imperial          | W   | 0.515      | -            | -                | -                | 1 (0.515) |     1.63 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           14 |     1764 | 2022-10-31 | Grayhound         | L   | 0.509      | -            | -                | -                | -         |   -14.85 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           13 |     1774 | 2022-10-31 | fnatic            | L   | 0.507      | -            | -                | -                | -         |    -4.68 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           12 |     2311 | 2022-10-09 | Spirit            | L   | 0.359      | -            | -                | -                | -         |    -4.81 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           11 |     2347 | 2022-10-07 | 1WIN              | W   | 0.345      | -            | -                | -                | 1 (0.345) |     0.93 | Ax1Le, HObbit, interz, nafany, sh1ro |
|           10 |     2364 | 2022-10-06 | Ninjas in Pyjamas | L   | 0.339      | -            | -                | -                | -         |    -5.90 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            9 |     2393 | 2022-10-05 | G2                | W   | 0.333      | 0.143        | 1.000 (0.048)    | -                | 1 (0.333) |    10.25 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            8 |     2430 | 2022-10-04 | B8                | W   | 0.324      | -            | -                | -                | -         |     0.18 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            7 |     2472 | 2022-10-01 | Liquid            | L   | 0.306      | -            | -                | -                | -         |    -0.52 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            6 |     2512 | 2022-09-29 | FaZe              | W   | 0.293      | 0.922        | 0.433 (0.117)    | 0.358 (0.097)    | -         |     8.37 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            5 |     2617 | 2022-09-25 | Liquid            | L   | 0.267      | -            | -                | -                | -         |    -0.44 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            4 |     2654 | 2022-09-24 | FURIA             | W   | 0.260      | 0.922        | 0.131 (0.031)    | 0.279 (0.067)    | -         |     3.81 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            3 |     2722 | 2022-09-23 | Movistar Riders   | W   | 0.251      | -            | -                | -                | -         |     0.41 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            2 |     2760 | 2022-09-22 | Eternal Fire      | W   | 0.245      | 0.922        | -                | 0.496 (0.112)    | -         |     0.94 | Ax1Le, HObbit, interz, nafany, sh1ro |
|            1 |     2793 | 2022-09-21 | Evil Geniuses     | W   | 0.238      | 0.922        | 0.062 (0.014)    | 0.234 (0.051)    | -         |     1.58 | Ax1Le, HObbit, interz, nafany, sh1ro |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,982.98)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2022-11-13 |      0.594 | $45,000.00     | $26,710.82      |
| 2022-10-02 |      0.314 | $55,000.00     | $17,272.17      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
