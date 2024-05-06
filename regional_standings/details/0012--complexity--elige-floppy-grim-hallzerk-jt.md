### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
Final Rank Value:  1591.2<br />
<br />
Final Rank Value (1591.2) = Starting Rank Value (1585.0) + Head To Head Adjustments (6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.632[<sup>1</sup>](#table2)
- Bounty Collected: 0.626[<sup>2</sup>](#table1)
- Opponent Network: 0.344[<sup>2</sup>](#table1)
- LAN Wins: 0.886[<sup>2</sup>](#table1)

The average of these factors is 0.622<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1585.0
- 400 + ( ( 0.622 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1585.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       14 | 2024-05-05 | Natus Vincere     | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.509 (0.453)    | 1 (1.000) |    27.84 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |       80 | 2024-05-02 | HEROIC            | W   | 1.000      | 0.889        | 0.347 (0.309)    | 0.712 (0.633)    | 1 (1.000) |    17.65 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      129 | 2024-04-30 | PERA              | W   | 1.000      | 0.889        | 0.062 (0.055)    | 0.365 (0.324)    | 1 (1.000) |     0.76 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     1053 | 2024-03-24 | FaZe              | L   | 0.912      | -            | -                | -                | -         |    -3.03 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     1062 | 2024-03-23 | Vitality          | L   | 0.906      | -            | -                | -                | -         |    -4.81 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1077 | 2024-03-22 | MOUZ              | L   | 0.899      | -            | -                | -                | -         |    -4.28 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1095 | 2024-03-21 | HEROIC            | W   | 0.893      | 1.000        | 0.347 (0.310)    | 0.712 (0.636)    | 1 (0.893) |    18.44 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1104 | 2024-03-21 | paiN              | W   | 0.892      | 1.000        | 0.786 (0.701)    | 0.869 (0.776)    | 1 (0.892) |    19.16 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1417 | 2024-03-07 | OG                | L   | 0.800      | -            | -                | -                | -         |   -19.79 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1509 | 2024-03-04 | Liquid            | W   | 0.781      | 0.143        | 0.122 (0.014)    | 0.726 (0.081)    | 1 (0.781) |     6.76 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1524 | 2024-03-03 | FURIA             | L   | 0.774      | -            | -                | -                | -         |   -13.81 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1563 | 2024-03-02 | BOSS              | W   | 0.766      | 0.143        | 0.049 (0.005)    | 0.507 (0.056)    | 1 (0.766) |     0.61 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     1582 | 2024-03-01 | Elevate           | W   | 0.760      | -            | -                | -                | 1 (0.760) |     0.60 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2069 | 2024-02-05 | Falcons           | L   | 0.594      | -            | -                | -                | -         |   -14.58 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2090 | 2024-02-04 | Spirit            | L   | 0.586      | -            | -                | -                | -         |    -3.86 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2110 | 2024-02-03 | Apeks             | W   | 0.580      | 1.000        | 0.237 (0.138)    | 0.667 (0.387)    | 1 (0.580) |     4.70 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2329 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.506      | -            | -                | -                | -         |   -15.69 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2357 | 2024-01-22 | Natus Vincere     | L   | 0.499      | -            | -                | -                | -         |    -1.57 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2714 | 2024-01-13 | Party Astronauts  | W   | 0.442      | -            | -                | -                | -         |     0.27 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     2754 | 2024-01-12 | NRG               | W   | 0.436      | -            | -                | -                | -         |     0.18 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     2765 | 2024-01-12 | FLUFFY AIMERS     | W   | 0.435      | -            | -                | -                | -         |     0.04 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3008 | 2023-12-16 | TheMongolz        | L   | 0.253      | -            | -                | -                | -         |    -5.53 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3023 | 2023-12-15 | GamerLegion       | W   | 0.249      | 0.500        | 0.187 (0.023)    | 0.481 (0.060)    | 1 (0.249) |     2.80 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3033 | 2023-12-15 | TheMongolz        | L   | 0.247      | -            | -                | -                | -         |    -5.43 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3300 | 2023-11-30 | MOUZ              | L   | 0.147      | -            | -                | -                | -         |    -0.82 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3305 | 2023-11-30 | FURIA             | L   | 0.145      | -            | -                | -                | -         |    -2.59 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3361 | 2023-11-25 | FaZe              | L   | 0.114      | -            | -                | -                | -         |    -0.32 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3383 | 2023-11-24 | Natus Vincere     | W   | 0.107      | 0.729        | 1.000 (0.078)    | 0.509 (0.040)    | -         |     3.02 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     3402 | 2023-11-23 | Vitality          | L   | 0.100      | -            | -                | -                | -         |    -0.53 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     3419 | 2023-11-22 | Astralis          | W   | 0.093      | -            | -                | -                | -         |     0.01 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,531.92)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2024-03-10 |      0.821 | $5,000.00      | $4,102.93       |
| 2024-02-11 |      0.633 | $16,000.00     | $10,130.24      |
| 2024-01-28 |      0.540 | $5,000.00      | $2,699.56       |
| 2023-12-17 |      0.261 | $3,000.00      | $783.01         |
| 2023-12-03 |      0.167 | $5,000.00      | $832.97         |
| 2023-11-26 |      0.119 | $40,000.00     | $4,778.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
