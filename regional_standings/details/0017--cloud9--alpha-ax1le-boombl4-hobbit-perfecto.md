### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1423.1<br />
<br />
Final Rank Value (1423.1) = Starting Rank Value (1408.4) + Head To Head Adjustments (14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.579[<sup>1</sup>](#table2)
- Bounty Collected: 0.541[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.744[<sup>2</sup>](#table1)

The average of these factors is 0.519<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1408.4
- 400 + ( ( 0.519 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1408.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1002 | 2024-04-20 | Sashi             | L   | 0.938      | -            | -                | -                | -         |   -26.15 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           35 |     1033 | 2024-04-19 | BetBoom           | W   | 0.933      | 0.143        | 0.392 (0.052)    | 0.951 (0.127)    | -         |     9.81 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           34 |     1047 | 2024-04-19 | Sashi             | L   | 0.932      | -            | -                | -                | -         |   -26.63 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           33 |     1322 | 2024-04-10 | FaZe              | L   | 0.869      | -            | -                | -                | -         |    -1.83 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           32 |     1372 | 2024-04-08 | Wildcard          | W   | 0.862      | 0.624        | -                | 0.615 (0.331)    | 1 (0.862) |     1.38 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           31 |     1402 | 2024-04-08 | FlyQuest          | L   | 0.856      | -            | -                | -                | -         |   -16.41 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           30 |     1626 | 2024-03-28 | Vitality          | L   | 0.785      | -            | -                | -                | -         |    -3.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           29 |     1709 | 2024-03-23 | Natus Vincere     | W   | 0.753      | 1.000        | 1.000 (0.753)    | 0.382 (0.288)    | 1 (0.753) |    21.25 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           28 |     1733 | 2024-03-22 | G2                | W   | 0.744      | 1.000        | 0.469 (0.349)    | 0.565 (0.420)    | 1 (0.744) |    20.39 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           27 |     1744 | 2024-03-21 | Gaimin Gladiators | W   | 0.739      | 1.000        | 0.090 (0.067)    | 0.809 (0.598)    | 1 (0.739) |     5.65 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           26 |     1752 | 2024-03-21 | Spirit            | L   | 0.738      | -            | -                | -                | -         |    -1.44 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           25 |     1800 | 2024-03-18 | SAW               | W   | 0.719      | 0.143        | -                | 0.611 (0.063)    | 1 (0.719) |     9.82 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     1818 | 2024-03-17 | Legacy            | W   | 0.713      | -            | -                | -                | 1 (0.713) |     2.26 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     1836 | 2024-03-17 | Gaimin Gladiators | W   | 0.711      | 0.143        | -                | 0.809 (0.082)    | 1 (0.711) |     4.96 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     2044 | 2024-03-08 | SAW               | L   | 0.653      | -            | -                | -                | -         |   -12.11 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2110 | 2024-03-06 | Rare Atom         | W   | 0.638      | -            | -                | -                | -         |     0.34 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2441 | 2024-02-20 | Vitality          | W   | 0.538      | 0.143        | 0.699 (0.054)    | -                | 1 (0.538) |    15.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2459 | 2024-02-19 | Apeks             | W   | 0.533      | -            | -                | -                | 1 (0.533) |     3.81 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2468 | 2024-02-19 | PERA              | W   | 0.531      | -            | -                | -                | 1 (0.531) |     0.89 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2725 | 2024-02-05 | Monte             | L   | 0.438      | -            | -                | -                | -         |    -9.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2745 | 2024-02-04 | MOUZ              | L   | 0.432      | -            | -                | -                | -         |    -0.63 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2798 | 2024-02-02 | Virtus.pro        | W   | 0.419      | 0.143        | 0.271 (0.016)    | -                | -         |    10.80 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     2826 | 2024-02-01 | BetBoom           | W   | 0.412      | 0.143        | 0.392 (0.023)    | 0.951 (0.056)    | -         |     6.93 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     2850 | 2024-01-31 | Rebels            | L   | 0.405      | -            | -                | -                | -         |   -11.31 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     2915 | 2024-01-26 | BIG               | L   | 0.373      | -            | -                | -                | -         |    -6.37 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     2940 | 2024-01-25 | Virtus.pro        | L   | 0.366      | -            | -                | -                | -         |    -2.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     2953 | 2024-01-24 | HEROIC            | W   | 0.360      | 0.581        | 0.322 (0.067)    | 0.662 (0.138)    | -         |     9.43 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3125 | 2024-01-19 | BetBoom           | W   | 0.325      | 0.143        | 0.392 (0.018)    | 0.951 (0.044)    | -         |     5.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3178 | 2024-01-18 | 3DMAX             | W   | 0.319      | -            | -                | -                | -         |     2.10 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3199 | 2024-01-18 | OG                | W   | 0.318      | 0.143        | 0.278 (0.013)    | -                | -         |     2.38 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3695 | 2023-12-15 | MOUZ              | L   | 0.090      | -            | -                | -                | -         |    -0.11 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3698 | 2023-12-14 | Vitality          | L   | 0.084      | -            | -                | -                | -         |    -0.19 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3710 | 2023-12-13 | ENCE              | W   | 0.076      | -            | -                | -                | -         |     0.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3788 | 2023-12-08 | BetBoom           | L   | 0.044      | -            | -                | -                | -         |    -0.64 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     3811 | 2023-12-07 | MIBR              | L   | 0.038      | -            | -                | -                | -         |    -0.29 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     3877 | 2023-12-05 | GamerLegion       | W   | 0.024      | -            | -                | -                | -         |     0.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,451.47)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.897 | $5,000.00      | $4,486.17       |
| 2024-03-31 |      0.806 | $45,000.00     | $36,276.31      |
| 2024-03-10 |      0.666 | $7,500.00      | $4,998.70       |
| 2024-02-11 |      0.479 | $10,000.00     | $4,790.47       |
| 2024-01-28 |      0.386 | $8,500.00      | $3,279.46       |
| 2023-12-17 |      0.105 | $25,000.00     | $2,620.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
