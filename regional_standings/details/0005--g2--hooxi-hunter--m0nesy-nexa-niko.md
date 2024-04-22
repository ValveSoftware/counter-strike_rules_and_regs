### Roster Details<br />
Team Name: G2<br />
Roster: HooXi, huNter-, m0NESY, nexa, NiKo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1814.3<br />
<br />
Final Rank Value (1814.3) = Starting Rank Value (1901.8) + Head To Head Adjustments (-87.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.899[<sup>1</sup>](#table2)
- Bounty Collected: 0.679[<sup>2</sup>](#table1)
- Opponent Network: 0.531[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.778<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1901.8
- 400 + ( ( 0.778 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1901.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      275 | 2024-04-13 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -14.33 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           32 |      288 | 2024-04-12 | Virtus.pro        | W   | 1.000      | 0.624        | 0.530 (0.331)    | 0.605 (0.378)    | 1 (1.000) |     7.70 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           31 |      358 | 2024-04-10 | HEROIC            | W   | 1.000      | 0.624        | 0.281 (0.175)    | 0.731 (0.456)    | 1 (1.000) |     5.69 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           30 |      417 | 2024-04-09 | Lynn Vision       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.71 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           29 |      448 | 2024-04-08 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -30.33 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           28 |      458 | 2024-04-07 | 9z                | W   | 1.000      | 0.624        | -                | 0.554 (0.346)    | 1 (1.000) |     0.34 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           27 |      651 | 2024-03-30 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -13.53 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           26 |      658 | 2024-03-29 | MOUZ              | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.603 (0.603)    | 1 (1.000) |    15.80 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           25 |      755 | 2024-03-24 | Virtus.pro        | W   | 1.000      | 1.000        | 0.530 (0.530)    | 0.605 (0.605)    | 1 (1.000) |     8.26 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           24 |      767 | 2024-03-23 | Gaimin Gladiators | W   | 1.000      | 1.000        | 0.156 (0.155)    | 1.000 (1.000)    | 1 (1.000) |     1.55 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           23 |      786 | 2024-03-22 | Cloud9            | L   | 0.991      | -            | -                | -                | -         |   -23.69 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           22 |      796 | 2024-03-21 | Natus Vincere     | L   | 0.987      | -            | -                | -                | -         |   -13.24 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           21 |      806 | 2024-03-21 | FURIA             | W   | 0.986      | 1.000        | 0.316 (0.311)    | 0.522 (0.515)    | 1 (0.986) |     1.92 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           20 |     1622 | 2024-02-15 | FaZe              | W   | 0.752      | -            | -                | -                | 1 (0.752) |    15.48 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           19 |     1653 | 2024-02-14 | Eternal Fire      | W   | 0.747      | -            | -                | -                | 1 (0.747) |     5.15 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           18 |     1669 | 2024-02-14 | Into the Breach   | W   | 0.745      | -            | -                | -                | -         |     0.09 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           17 |     1734 | 2024-02-09 | FaZe              | L   | 0.713      | -            | -                | -                | -         |    -7.39 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           16 |     1762 | 2024-02-06 | HEROIC            | W   | 0.694      | 1.000        | 0.281 (0.195)    | 0.731 (0.507)    | -         |     3.84 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           15 |     1768 | 2024-02-06 | Monte             | W   | 0.692      | 1.000        | 0.236 (0.163)    | 0.598 (0.414)    | -         |     0.62 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           14 |     1774 | 2024-02-05 | ENCE              | L   | 0.686      | -            | -                | -                | -         |   -20.32 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           13 |     1827 | 2024-02-03 | HEROIC            | W   | 0.672      | 1.000        | 0.281 (0.189)    | 0.731 (0.491)    | -         |     3.16 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           12 |     1941 | 2024-01-28 | Liquid            | W   | 0.633      | -            | -                | -                | -         |     0.59 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           11 |     1958 | 2024-01-27 | Natus Vincere     | L   | 0.626      | -            | -                | -                | -         |    -7.65 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           10 |     1974 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.619      | -            | -                | -                | -         |     0.07 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            9 |     2035 | 2024-01-23 | Natus Vincere     | L   | 0.598      | -            | -                | -                | -         |    -7.71 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            8 |     2067 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.591      | -            | -                | -                | -         |     0.06 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            7 |     2747 | 2023-12-15 | Natus Vincere     | L   | 0.339      | -            | -                | -                | -         |    -4.50 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            6 |     2749 | 2023-12-14 | FaZe              | L   | 0.332      | -            | -                | -                | -         |    -3.66 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            5 |     2759 | 2023-12-13 | MOUZ              | W   | 0.325      | 1.000        | 1.000 (0.325)    | -                | -         |     4.66 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            4 |     2892 | 2023-12-06 | Guild Eagles      | L   | 0.279      | -            | -                | -                | -         |    -8.72 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            3 |     2920 | 2023-12-05 | Aurora            | L   | 0.273      | -            | -                | -                | -         |    -8.15 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            2 |     2952 | 2023-12-03 | Sprout            | W   | 0.258      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            1 |     3011 | 2023-11-30 | Fluxo             | W   | 0.238      | -            | -                | -                | -         |     0.06 | HooXi, huNter-, m0NESY, nexa, NiKo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($147,213.10)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.77) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-31 |      1.000 | $80,000.00     | $80,000.00      |
| 2024-02-11 |      0.726 | $40,000.00     | $29,057.85      |
| 2024-01-28 |      0.633 | $12,500.00     | $7,915.22       |
| 2023-12-17 |      0.352 | $25,000.00     | $8,805.33       |
| 2023-12-07 |      0.287 | $5,000.00      | $1,434.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
