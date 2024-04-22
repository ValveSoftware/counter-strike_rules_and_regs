### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1385.7<br />
<br />
Final Rank Value (1385.7) = Starting Rank Value (1390.0) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.633[<sup>1</sup>](#table2)
- Bounty Collected: 0.530[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.640[<sup>2</sup>](#table1)

The average of these factors is 0.513<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1390.0
- 400 + ( ( 0.513 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1390.0


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
|           30 |      757 | 2024-03-24 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -1.53 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      766 | 2024-03-23 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -3.32 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      781 | 2024-03-22 | MOUZ              | L   | 0.992      | -            | -                | -                | -         |    -2.14 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      799 | 2024-03-21 | HEROIC            | W   | 0.987      | 1.000        | 0.281 (0.277)    | 0.731 (0.721)    | 1 (0.987) |    24.30 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      808 | 2024-03-21 | paiN              | W   | 0.985      | 1.000        | 0.698 (0.688)    | 0.854 (0.842)    | 1 (0.985) |    25.03 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1121 | 2024-03-07 | OG                | L   | 0.894      | -            | -                | -                | -         |   -17.29 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1213 | 2024-03-04 | Liquid            | W   | 0.874      | 0.143        | 0.111 (0.014)    | 0.728 (0.091)    | 1 (0.874) |     8.99 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1228 | 2024-03-03 | FURIA             | L   | 0.868      | -            | -                | -                | -         |   -12.32 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1267 | 2024-03-02 | BOSS              | W   | 0.859      | 0.143        | 0.034 (0.004)    | 0.530 (0.065)    | 1 (0.859) |     1.65 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1286 | 2024-03-01 | Elevate           | W   | 0.853      | 0.143        | 0.038 (0.005)    | 0.431 (0.052)    | 1 (0.853) |     1.90 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1773 | 2024-02-05 | Falcons           | L   | 0.687      | -            | -                | -                | -         |   -12.96 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1794 | 2024-02-04 | Spirit            | L   | 0.679      | -            | -                | -                | -         |    -1.22 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     1814 | 2024-02-03 | Apeks             | W   | 0.674      | 1.000        | 0.193 (0.130)    | 0.687 (0.462)    | 1 (0.674) |     8.04 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2033 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.599      | -            | -                | -                | -         |   -17.91 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2061 | 2024-01-22 | Natus Vincere     | L   | 0.592      | -            | -                | -                | -         |    -0.79 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2418 | 2024-01-13 | Party Astronauts  | W   | 0.535      | 0.143        | -                | 0.554 (0.042)    | 0 (0.000) |     0.69 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2458 | 2024-01-12 | NRG               | W   | 0.530      | 0.143        | -                | 0.633 (0.048)    | -         |     0.68 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2469 | 2024-01-12 | FLUFFY AIMERS     | W   | 0.529      | -            | -                | -                | -         |     0.14 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2712 | 2023-12-16 | TheMongolz        | L   | 0.347      | -            | -                | -                | -         |    -6.29 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     2727 | 2023-12-15 | GamerLegion       | W   | 0.342      | 0.500        | 0.185 (0.032)    | 0.368 (0.063)    | 1 (0.342) |     4.60 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     2737 | 2023-12-15 | TheMongolz        | L   | 0.340      | -            | -                | -                | -         |    -6.20 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3004 | 2023-11-30 | MOUZ              | L   | 0.240      | -            | -                | -                | -         |    -0.51 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3009 | 2023-11-30 | FURIA             | L   | 0.238      | -            | -                | -                | -         |    -3.30 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3065 | 2023-11-25 | FaZe              | L   | 0.207      | -            | -                | -                | -         |    -0.21 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3087 | 2023-11-24 | Natus Vincere     | W   | 0.200      | 0.729        | 1.000 (0.146)    | 0.499 (0.073)    | 1 (0.200) |     6.04 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3106 | 2023-11-23 | Vitality          | L   | 0.194      | -            | -                | -                | -         |    -0.55 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3123 | 2023-11-22 | Astralis          | W   | 0.186      | 0.729        | 0.042 (0.006)    | -                | 1 (0.186) |     0.17 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3639 | 2023-10-31 | MOUZ              | L   | 0.039      | -            | -                | -                | -         |    -0.08 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     3679 | 2023-10-30 | M80               | W   | 0.032      | 0.769        | 0.087 (0.002)    | -                | -         |     0.08 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     3718 | 2023-10-29 | Spirit            | L   | 0.025      | -            | -                | -                | -         |    -0.04 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,231.92)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-31 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-10 |      0.914 | $5,000.00      | $4,569.46       |
| 2024-02-11 |      0.726 | $16,000.00     | $11,623.14      |
| 2024-01-28 |      0.633 | $5,000.00      | $3,166.09       |
| 2023-12-17 |      0.354 | $3,000.00      | $1,062.93       |
| 2023-12-03 |      0.260 | $5,000.00      | $1,299.50       |
| 2023-11-26 |      0.213 | $40,000.00     | $8,510.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
