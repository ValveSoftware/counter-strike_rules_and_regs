### Roster Details<br />
Team Name: G2<br />
Roster: HooXi, huNter-, jks, m0NESY, NiKo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  1968.9<br />
<br />
Final Rank Value (1968.9) = Starting Rank Value (2000.0) + Head To Head Adjustments (-31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.741[<sup>2</sup>](#table1)
- Opponent Network: 0.386[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.782<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.782 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |        0 | 2023-02-12 | Heroic        | W   | 1.000      | 1.000        | 0.608 (0.608)    | 0.560 (0.560)    | 1 (1.000) |     7.10 | HooXi, huNter-, jks, m0NESY, NiKo |
|           31 |       27 | 2023-02-11 | Liquid        | W   | 1.000      | 1.000        | 0.760 (0.760)    | 0.450 (0.450)    | 1 (1.000) |     6.52 | HooXi, huNter-, jks, m0NESY, NiKo |
|           30 |       98 | 2023-02-07 | Natus Vincere | W   | 1.000      | 1.000        | 0.358 (0.358)    | 0.372 (0.372)    | 1 (1.000) |     5.08 | HooXi, huNter-, jks, m0NESY, NiKo |
|           29 |      148 | 2023-02-05 | FaZe          | W   | 1.000      | 1.000        | 0.433 (0.433)    | 0.358 (0.358)    | 1 (1.000) |     6.88 | HooXi, huNter-, jks, m0NESY, NiKo |
|           28 |      178 | 2023-02-04 | BIG           | W   | 1.000      | 1.000        | -                | 0.520 (0.520)    | 1 (1.000) |     1.16 | HooXi, huNter-, jks, m0NESY, NiKo |
|           27 |      405 | 2023-01-26 | Natus Vincere | W   | 1.000      | 0.571        | 0.358 (0.204)    | -                | 1 (1.000) |     4.85 | HooXi, huNter-, jks, m0NESY, NiKo |
|           26 |      495 | 2023-01-23 | Natus Vincere | W   | 1.000      | 0.571        | 0.358 (0.204)    | -                | 1 (1.000) |     4.98 | HooXi, huNter-, jks, m0NESY, NiKo |
|           25 |      566 | 2023-01-20 | BIG           | W   | 1.000      | 0.571        | -                | 0.520 (0.297)    | 1 (1.000) |     1.01 | HooXi, huNter-, jks, m0NESY, NiKo |
|           24 |      792 | 2022-12-18 | Liquid        | W   | 0.824      | 1.000        | 0.760 (0.627)    | 0.450 (0.371)    | 1 (0.824) |     8.24 | HooXi, huNter-, jks, m0NESY, NiKo |
|           23 |      811 | 2022-12-17 | FaZe          | W   | 0.820      | 1.000        | 0.433 (0.355)    | 0.358 (0.294)    | 1 (0.820) |     5.94 | HooXi, huNter-, jks, m0NESY, NiKo |
|           22 |      839 | 2022-12-16 | Vitality      | W   | 0.813      | 1.000        | 0.352 (0.286)    | 0.437 (0.355)    | -         |     3.03 | HooXi, huNter-, jks, m0NESY, NiKo |
|           21 |      881 | 2022-12-14 | Outsiders     | W   | 0.803      | 1.000        | 0.801 (0.644)    | 0.353 (0.284)    | -         |     4.43 | HooXi, huNter-, jks, m0NESY, NiKo |
|           20 |      899 | 2022-12-14 | FaZe          | L   | 0.798      | -            | -                | -                | -         |   -20.03 | HooXi, huNter-, jks, m0NESY, NiKo |
|           19 |     1457 | 2022-11-25 | Heroic        | L   | 0.673      | -            | -                | -                | -         |   -15.22 | HooXi, huNter-, jks, m0NESY, NiKo |
|           18 |     1480 | 2022-11-24 | Fluxo         | W   | 0.666      | -            | -                | -                | -         |     0.08 | HooXi, huNter-, jks, m0NESY, NiKo |
|           17 |     1494 | 2022-11-23 | Liquid        | L   | 0.660      | -            | -                | -                | -         |   -15.04 | HooXi, huNter-, jks, m0NESY, NiKo |
|           16 |     2341 | 2022-10-07 | GamerLegion   | L   | 0.346      | -            | -                | -                | -         |   -10.79 | HooXi, huNter-, jks, m0NESY, NiKo |
|           15 |     2374 | 2022-10-06 | 1WIN          | L   | 0.338      | -            | -                | -                | -         |   -10.61 | HooXi, huNter-, jks, m0NESY, NiKo |
|           14 |     2393 | 2022-10-05 | Cloud9        | L   | 0.333      | -            | -                | -                | -         |   -10.25 | HooXi, huNter-, jks, m0NESY, NiKo |
|           13 |     2431 | 2022-10-04 | ECSTATIC      | W   | 0.324      | -            | -                | -                | -         |     0.02 | HooXi, huNter-, jks, m0NESY, NiKo |
|           12 |     2466 | 2022-10-01 | Vitality      | L   | 0.307      | -            | -                | -                | -         |    -8.71 | HooXi, huNter-, jks, m0NESY, NiKo |
|           11 |     2487 | 2022-09-30 | Natus Vincere | W   | 0.300      | -            | -                | -                | -         |     1.41 | HooXi, huNter-, jks, m0NESY, NiKo |
|           10 |     3073 | 2022-09-11 | Outsiders     | W   | 0.173      | -            | -                | -                | -         |     0.63 | HooXi, huNter-, jks, m0NESY, NiKo |
|            9 |     3133 | 2022-09-10 | FaZe          | W   | 0.167      | -            | -                | -                | -         |     0.84 | HooXi, huNter-, jks, m0NESY, NiKo |
|            8 |     3187 | 2022-09-09 | FTW           | W   | 0.158      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, jks, m0NESY, NiKo |
|            7 |     3224 | 2022-09-08 | BIG           | W   | 0.152      | -            | -                | -                | -         |     0.15 | HooXi, huNter-, jks, m0NESY, NiKo |
|            6 |     3235 | 2022-09-07 | MIBR          | W   | 0.147      | -            | -                | -                | -         |     0.02 | HooXi, huNter-, jks, m0NESY, NiKo |
|            5 |     3457 | 2022-08-28 | Vitality      | W   | 0.081      | -            | -                | -                | -         |     0.24 | HooXi, huNter-, jks, m0NESY, NiKo |
|            4 |     3562 | 2022-08-26 | Vitality      | L   | 0.067      | -            | -                | -                | -         |    -1.91 | HooXi, huNter-, jks, m0NESY, NiKo |
|            3 |     3573 | 2022-08-25 | BIG           | W   | 0.060      | -            | -                | -                | -         |     0.06 | HooXi, huNter-, jks, m0NESY, NiKo |
|            2 |     3722 | 2022-08-20 | Natus Vincere | L   | 0.026      | -            | -                | -                | -         |    -0.69 | HooXi, huNter-, jks, m0NESY, NiKo |
|            1 |     3731 | 2022-08-20 | Liquid        | L   | 0.025      | -            | -                | -                | -         |    -0.56 | HooXi, huNter-, jks, m0NESY, NiKo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($473,741.74)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-29 |      1.000 | $27,500.00     | $27,500.00      |
| 2022-12-18 |      0.824 | $500,000.00    | $412,245.76     |
| 2022-11-27 |      0.687 | $20,000.00     | $13,738.75      |
| 2022-10-02 |      0.314 | $60,000.00     | $18,842.37      |
| 2022-08-28 |      0.081 | $17,500.00     | $1,414.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
