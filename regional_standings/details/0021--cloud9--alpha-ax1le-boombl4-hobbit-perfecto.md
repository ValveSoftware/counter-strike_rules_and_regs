### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1405.9<br />
<br />
Final Rank Value (1405.9) = Starting Rank Value (1360.1) + Head To Head Adjustments (45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.181[<sup>2</sup>](#table1)
- LAN Wins: 0.645[<sup>2</sup>](#table1)

The average of these factors is 0.482<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1360.1
- 400 + ( ( 0.482 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1360.1


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
|           32 |     1502 | 2024-04-20 | Sashi             | L   | 0.859      | -            | -                | -                | -         |   -22.27 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           31 |     1533 | 2024-04-19 | BetBoom           | W   | 0.853      | 0.143        | 0.427 (0.052)    | 0.917 (0.112)    | -         |    17.33 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           30 |     1547 | 2024-04-19 | Sashi             | L   | 0.853      | -            | -                | -                | -         |   -22.68 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           29 |     1822 | 2024-04-10 | FaZe              | L   | 0.790      | -            | -                | -                | -         |    -1.35 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           28 |     1872 | 2024-04-08 | Wildcard          | W   | 0.783      | 0.624        | 0.060 (0.029)    | 0.591 (0.289)    | 1 (0.783) |     2.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           27 |     1902 | 2024-04-08 | FlyQuest          | L   | 0.777      | -            | -                | -                | -         |   -13.52 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           26 |     2126 | 2024-03-28 | Vitality          | L   | 0.706      | -            | -                | -                | -         |    -1.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           25 |     2209 | 2024-03-23 | Natus Vincere     | W   | 0.674      | 1.000        | 1.000 (0.674)    | 0.312 (0.211)    | 1 (0.674) |    19.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           24 |     2233 | 2024-03-22 | G2                | W   | 0.665      | 1.000        | 0.746 (0.496)    | 0.580 (0.386)    | 1 (0.665) |    19.66 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           23 |     2244 | 2024-03-21 | Gaimin Gladiators | W   | 0.660      | 1.000        | 0.081 (0.054)    | 0.749 (0.495)    | 1 (0.660) |     6.50 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           22 |     2252 | 2024-03-21 | Spirit            | L   | 0.659      | -            | -                | -                | -         |    -1.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           21 |     2300 | 2024-03-18 | SAW               | W   | 0.640      | 0.143        | -                | 0.660 (0.060)    | 1 (0.640) |     9.45 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           20 |     2318 | 2024-03-17 | Legacy            | W   | 0.634      | 0.143        | -                | 0.461 (0.042)    | 1 (0.634) |     3.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           19 |     2336 | 2024-03-17 | Gaimin Gladiators | W   | 0.632      | 0.143        | -                | 0.749 (0.068)    | 1 (0.632) |     5.74 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           18 |     2544 | 2024-03-08 | SAW               | L   | 0.574      | -            | -                | -                | -         |    -9.91 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           17 |     2610 | 2024-03-06 | Rare Atom         | W   | 0.559      | -            | -                | -                | -         |     0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           16 |     2941 | 2024-02-20 | Vitality          | W   | 0.459      | 0.143        | 0.670 (0.044)    | -                | 1 (0.459) |    13.80 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     2959 | 2024-02-19 | Apeks             | W   | 0.453      | -            | -                | -                | 1 (0.453) |     3.13 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     2968 | 2024-02-19 | PERA              | W   | 0.452      | -            | -                | -                | 1 (0.452) |     1.09 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3225 | 2024-02-05 | Monte             | L   | 0.359      | -            | -                | -                | -         |    -7.00 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3245 | 2024-02-04 | MOUZ              | L   | 0.352      | -            | -                | -                | -         |    -0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3298 | 2024-02-02 | Virtus.pro        | W   | 0.340      | 0.143        | 0.229 (0.011)    | -                | -         |     9.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3326 | 2024-02-01 | BetBoom           | W   | 0.333      | 0.143        | 0.427 (0.020)    | 0.917 (0.044)    | -         |     8.99 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3350 | 2024-01-31 | Rebels            | L   | 0.326      | -            | -                | -                | -         |    -8.61 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3415 | 2024-01-26 | BIG               | L   | 0.294      | -            | -                | -                | -         |    -3.68 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3440 | 2024-01-25 | Virtus.pro        | L   | 0.286      | -            | -                | -                | -         |    -1.22 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3453 | 2024-01-24 | HEROIC            | W   | 0.280      | 0.581        | 0.362 (0.059)    | 0.635 (0.103)    | -         |     8.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3625 | 2024-01-19 | BetBoom           | W   | 0.246      | 0.143        | 0.427 (0.015)    | -                | -         |     6.70 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3678 | 2024-01-18 | 3DMAX             | W   | 0.240      | -            | -                | -                | -         |     2.38 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     3699 | 2024-01-18 | OG                | W   | 0.239      | -            | -                | -                | -         |     2.12 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4195 | 2023-12-15 | MOUZ              | L   | 0.011      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4198 | 2023-12-14 | Vitality          | L   | 0.004      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,455.06)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.818 | $5,000.00      | $4,090.31       |
| 2024-03-31 |      0.727 | $45,000.00     | $32,713.55      |
| 2024-03-10 |      0.587 | $7,500.00      | $4,404.91       |
| 2024-02-11 |      0.400 | $10,000.00     | $3,998.75       |
| 2024-01-28 |      0.307 | $8,500.00      | $2,606.49       |
| 2023-12-17 |      0.026 | $25,000.00     | $641.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
