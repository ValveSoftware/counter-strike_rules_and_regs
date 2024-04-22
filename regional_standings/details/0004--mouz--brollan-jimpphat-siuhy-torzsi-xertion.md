### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1847.8<br />
<br />
Final Rank Value (1847.8) = Starting Rank Value (1871.2) + Head To Head Adjustments (-23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.614[<sup>2</sup>](#table1)
- Opponent Network: 0.432[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.762<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1871.2
- 400 + ( ( 0.762 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1871.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      258 | 2024-04-14 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -13.22 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           36 |      275 | 2024-04-13 | G2                | W   | 1.000      | 0.624        | 0.773 (0.482)    | 0.542 (0.338)    | 1 (1.000) |    14.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           35 |      368 | 2024-04-10 | Liquid            | W   | 1.000      | 0.624        | -                | 0.728 (0.455)    | 1 (1.000) |     1.18 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           34 |      438 | 2024-04-08 | FURIA             | W   | 1.000      | 0.624        | 0.316 (0.197)    | 0.522 (0.326)    | 1 (1.000) |     2.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      456 | 2024-04-08 | TYLOO             | W   | 1.000      | 0.624        | -                | 0.490 (0.306)    | 1 (1.000) |     0.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      658 | 2024-03-29 | G2                | L   | 1.000      | -            | -                | -                | -         |   -15.80 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      781 | 2024-03-22 | Complexity        | W   | 0.992      | 1.000        | 0.264 (0.262)    | 0.353 (0.350)    | 1 (0.992) |     2.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      801 | 2024-03-21 | Eternal Fire      | W   | 0.986      | 1.000        | 0.338 (0.333)    | 0.587 (0.579)    | 1 (0.986) |     7.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |      812 | 2024-03-21 | Gaimin Gladiators | W   | 0.985      | 1.000        | 0.156 (0.153)    | 1.000 (0.985)    | 1 (0.985) |     1.31 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1491 | 2024-02-20 | Spirit            | W   | 0.786      | 0.143        | 1.000 (0.112)    | -                | 1 (0.786) |    14.55 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1513 | 2024-02-19 | Gaimin Gladiators | W   | 0.780      | -            | -                | -                | 1 (0.780) |     1.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1526 | 2024-02-19 | Guild Eagles      | W   | 0.778      | -            | -                | -                | 1 (0.778) |     0.23 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1720 | 2024-02-10 | FaZe              | L   | 0.719      | -            | -                | -                | -         |    -6.86 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1763 | 2024-02-06 | ENCE              | W   | 0.693      | 1.000        | 0.299 (0.208)    | 0.446 (0.309)    | -         |     1.60 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1775 | 2024-02-05 | GamerLegion       | W   | 0.686      | 1.000        | 0.185 (0.127)    | 0.368 (0.252)    | -         |     1.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1798 | 2024-02-04 | Cloud9            | W   | 0.679      | 1.000        | 0.475 (0.323)    | 0.623 (0.423)    | -         |     5.63 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     2111 | 2024-01-20 | Preasy            | W   | 0.581      | -            | -                | -                | -         |     0.23 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     2126 | 2024-01-20 | Spirit            | L   | 0.579      | -            | -                | -                | -         |    -8.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2176 | 2024-01-19 | Eternal Fire      | L   | 0.573      | -            | -                | -                | -         |   -14.25 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2234 | 2024-01-18 | HEROIC            | W   | 0.566      | -            | -                | -                | -         |     3.39 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2250 | 2024-01-18 | EYEBALLERS        | W   | 0.566      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2722 | 2023-12-16 | FaZe              | L   | 0.345      | -            | -                | -                | -         |    -3.25 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2748 | 2023-12-15 | Cloud9            | W   | 0.337      | 1.000        | 0.475 (0.160)    | -                | -         |     2.94 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2750 | 2023-12-14 | HEROIC            | W   | 0.331      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2759 | 2023-12-13 | G2                | L   | 0.325      | -            | -                | -                | -         |    -4.66 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     2989 | 2023-12-01 | FURIA             | L   | 0.247      | -            | -                | -                | -         |    -7.11 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|           11 |     3004 | 2023-11-30 | Complexity        | W   | 0.240      | -            | -                | -                | -         |     0.51 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|           10 |     3013 | 2023-11-30 | Apeks             | L   | 0.238      | -            | -                | -                | -         |    -7.27 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            9 |     3376 | 2023-11-12 | FaZe              | L   | 0.119      | -            | -                | -                | -         |    -1.21 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            8 |     3388 | 2023-11-11 | Astralis          | W   | 0.116      | -            | -                | -                | -         |     0.01 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            7 |     3418 | 2023-11-10 | Lynn Vision       | W   | 0.109      | -            | -                | -                | -         |     0.08 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            6 |     3442 | 2023-11-09 | FaZe              | L   | 0.098      | -            | -                | -                | -         |    -1.00 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            5 |     3445 | 2023-11-08 | Wings Up          | W   | 0.096      | -            | -                | -                | -         |     0.00 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            4 |     3555 | 2023-11-03 | FaZe              | L   | 0.060      | -            | -                | -                | -         |    -0.62 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            3 |     3639 | 2023-10-31 | Complexity        | W   | 0.039      | -            | -                | -                | -         |     0.08 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            2 |     3662 | 2023-10-30 | Spirit            | L   | 0.034      | -            | -                | -                | -         |    -0.49 | frozen, Jimpphat, siuhy, torzsi, xertioN  |
|            1 |     3711 | 2023-10-29 | M80               | W   | 0.026      | -            | -                | -                | -         |     0.01 | frozen, Jimpphat, siuhy, torzsi, xertioN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($190,462.73)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $42,000.00     | $42,000.00      |
| 2024-03-31 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-02-11 |      0.726 | $80,000.00     | $58,115.70      |
| 2023-12-17 |      0.352 | $85,000.00     | $29,938.11      |
| 2023-12-03 |      0.260 | $10,000.00     | $2,599.00       |
| 2023-11-12 |      0.119 | $100,000.00    | $11,888.57      |
| 2023-11-05 |      0.074 | $12,500.00     | $921.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
