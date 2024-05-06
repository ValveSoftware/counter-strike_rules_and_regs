### Roster Details<br />
Team Name: G2<br />
Roster: HooXi, huNter-, m0NESY, nexa, NiKo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [6]( ../standings_europe.md)<br />
Final Rank Value:  1764.5<br />
<br />
Final Rank Value (1764.5) = Starting Rank Value (1871.5) + Head To Head Adjustments (-107.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.930[<sup>1</sup>](#table2)
- Bounty Collected: 0.678[<sup>2</sup>](#table1)
- Opponent Network: 0.482[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.773<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1871.5
- 400 + ( ( 0.773 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1871.5


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
|           38 |      164 | 2024-04-28 | M80               | W   | 1.000      | 0.889        | -                | 0.505 (0.449)    | 1 (1.000) |     1.20 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           37 |      198 | 2024-04-27 | Falcons           | W   | 1.000      | 0.889        | 0.417 (0.371)    | -                | 1 (1.000) |     2.33 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           36 |      219 | 2024-04-26 | M80               | L   | 1.000      | -            | -                | -                | -         |   -30.46 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           35 |      251 | 2024-04-25 | TheMongolz        | L   | 1.000      | -            | -                | -                | -         |   -28.11 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           34 |      271 | 2024-04-24 | TYLOO             | W   | 1.000      | 0.889        | -                | 0.436 (0.387)    | 1 (1.000) |     0.22 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           33 |      571 | 2024-04-13 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -14.14 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           32 |      584 | 2024-04-12 | Virtus.pro        | W   | 1.000      | 0.624        | 0.438 (0.273)    | -                | 1 (1.000) |    10.43 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           31 |      654 | 2024-04-10 | HEROIC            | W   | 1.000      | 0.624        | 0.347 (0.217)    | 0.712 (0.444)    | 1 (1.000) |     7.41 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           30 |      713 | 2024-04-09 | Lynn Vision       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.72 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           29 |      744 | 2024-04-08 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -29.08 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           28 |      754 | 2024-04-07 | 9z                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.33 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           27 |      947 | 2024-03-30 | Natus Vincere     | L   | 0.954      | -            | -                | -                | -         |   -11.77 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           26 |      954 | 2024-03-29 | MOUZ              | W   | 0.947      | 1.000        | 1.000 (0.947)    | 0.575 (0.544)    | 1 (0.947) |    15.38 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           25 |     1051 | 2024-03-24 | Virtus.pro        | W   | 0.913      | 1.000        | 0.438 (0.399)    | 0.520 (0.475)    | 1 (0.913) |    10.36 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           24 |     1063 | 2024-03-23 | Gaimin Gladiators | W   | 0.906      | 1.000        | 0.189 (0.171)    | 0.990 (0.897)    | 1 (0.906) |     1.84 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           23 |     1082 | 2024-03-22 | Cloud9            | L   | 0.898      | -            | -                | -                | -         |   -21.62 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           22 |     1092 | 2024-03-21 | Natus Vincere     | L   | 0.894      | -            | -                | -                | -         |   -10.65 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           21 |     1102 | 2024-03-21 | FURIA             | W   | 0.892      | 1.000        | 0.371 (0.331)    | 0.484 (0.431)    | -         |     3.04 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           20 |     1918 | 2024-02-15 | FaZe              | W   | 0.659      | -            | -                | -                | -         |    13.85 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           19 |     1949 | 2024-02-14 | Eternal Fire      | W   | 0.653      | -            | -                | -                | -         |     6.50 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           18 |     1965 | 2024-02-14 | Into the Breach   | W   | 0.651      | -            | -                | -                | -         |     0.07 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           17 |     2030 | 2024-02-09 | FaZe              | L   | 0.619      | -            | -                | -                | -         |    -6.15 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           16 |     2058 | 2024-02-06 | HEROIC            | W   | 0.600      | 1.000        | 0.347 (0.208)    | 0.712 (0.427)    | -         |     4.45 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           15 |     2064 | 2024-02-06 | Monte             | W   | 0.599      | 1.000        | -                | 0.589 (0.353)    | -         |     1.38 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           14 |     2070 | 2024-02-05 | ENCE              | L   | 0.593      | -            | -                | -                | -         |   -16.46 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           13 |     2123 | 2024-02-03 | HEROIC            | W   | 0.579      | 1.000        | 0.347 (0.201)    | 0.712 (0.412)    | -         |     3.79 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           12 |     2237 | 2024-01-28 | Liquid            | W   | 0.540      | -            | -                | -                | -         |     1.20 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           11 |     2254 | 2024-01-27 | Natus Vincere     | L   | 0.532      | -            | -                | -                | -         |    -5.59 | HooXi, huNter-, m0NESY, nexa, NiKo |
|           10 |     2270 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.526      | -            | -                | -                | -         |     0.05 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            9 |     2331 | 2024-01-23 | Natus Vincere     | L   | 0.505      | -            | -                | -                | -         |    -5.53 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            8 |     2363 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.498      | -            | -                | -                | -         |     0.05 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            7 |     3043 | 2023-12-15 | Natus Vincere     | L   | 0.245      | -            | -                | -                | -         |    -2.76 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            6 |     3045 | 2023-12-14 | FaZe              | L   | 0.239      | -            | -                | -                | -         |    -2.41 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            5 |     3055 | 2023-12-13 | MOUZ              | W   | 0.232      | 1.000        | 1.000 (0.232)    | -                | -         |     3.59 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            4 |     3188 | 2023-12-06 | Guild Eagles      | L   | 0.186      | -            | -                | -                | -         |    -5.80 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            3 |     3216 | 2023-12-05 | Aurora            | L   | 0.180      | -            | -                | -                | -         |    -4.66 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            2 |     3248 | 2023-12-03 | Sprout            | W   | 0.165      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo |
|            1 |     3307 | 2023-11-30 | Fluxo             | W   | 0.145      | -            | -                | -                | -         |     0.04 | HooXi, huNter-, m0NESY, nexa, NiKo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($136,333.97)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.84) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-31 |      0.960 | $80,000.00     | $76,818.63      |
| 2024-02-11 |      0.633 | $40,000.00     | $25,325.60      |
| 2024-01-28 |      0.540 | $12,500.00     | $6,748.89       |
| 2023-12-17 |      0.259 | $25,000.00     | $6,472.67       |
| 2023-12-07 |      0.194 | $5,000.00      | $968.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
