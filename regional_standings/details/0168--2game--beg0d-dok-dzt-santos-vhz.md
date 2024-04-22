### Roster Details<br />
Team Name: 2GAME<br />
Roster: beg0d, dok, dzt, santos, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  651.9<br />
<br />
Final Rank Value (651.9) = Starting Rank Value (612.8) + Head To Head Adjustments (39.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.8
- 400 + ( ( 0.110 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 612.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      334 | 2024-04-10 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -3.05 | beg0d, dok, dzt, santos, vhz  |
|           22 |      338 | 2024-04-10 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -3.15 | beg0d, dok, dzt, santos, vhz  |
|           21 |      496 | 2024-04-05 | adalYamigos | W   | 1.000      | 0.450        | 0.000 (0.000)    | 0.423 (0.191)    | 0 (0.000) |    23.29 | beg0d, dok, dzt, santos, vhz  |
|           20 |      497 | 2024-04-05 | adalYamigos | L   | 1.000      | -            | -                | -                | -         |    -7.71 | beg0d, dok, dzt, santos, vhz  |
|           19 |      564 | 2024-04-03 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -4.96 | beg0d, dok, dzt, santos, vhz  |
|           18 |      567 | 2024-04-03 | Sharks      | L   | 1.000      | -            | -                | -                | -         |    -5.20 | beg0d, dok, dzt, santos, vhz  |
|           17 |      700 | 2024-03-27 | Corinthians | W   | 1.000      | 0.450        | 0.001 (0.001)    | 0.150 (0.067)    | 0 (0.000) |    13.91 | beg0d, dok, dzt, santos, vhz  |
|           16 |      703 | 2024-03-27 | Corinthians | L   | 1.000      | -            | -                | -                | -         |   -17.76 | beg0d, dok, dzt, santos, vhz  |
|           15 |      741 | 2024-03-26 | Galorys     | L   | 1.000      | -            | -                | -                | -         |    -9.19 | beg0d, dok, dzt, santos, vhz  |
|           14 |      743 | 2024-03-26 | Galorys     | L   | 1.000      | -            | -                | -                | -         |    -9.90 | beg0d, dok, dzt, santos, vhz  |
|           13 |      824 | 2024-03-20 | Solid       | W   | 0.981      | 0.450        | 0.126 (0.055)    | 0.584 (0.258)    | 0 (0.000) |    24.03 | beg0d, dok, dzt, santos, vhz  |
|           12 |      825 | 2024-03-20 | Solid       | L   | 0.981      | -            | -                | -                | -         |    -6.39 | beg0d, dok, dzt, santos, vhz  |
|           11 |      909 | 2024-03-15 | ODDIK       | L   | 0.948      | -            | -                | -                | -         |    -5.83 | beg0d, dok, dzt, santos, vhz  |
|           10 |      910 | 2024-03-15 | ODDIK       | L   | 0.948      | -            | -                | -                | -         |    -6.14 | beg0d, dok, dzt, santos, vhz  |
|            9 |     1182 | 2024-03-05 | W7M         | W   | 0.881      | 0.450        | 0.010 (0.004)    | 0.490 (0.194)    | 0 (0.000) |    20.44 | beg0d, dok, dzt, santos, vhz  |
|            8 |     1184 | 2024-03-05 | W7M         | W   | 0.881      | 0.450        | 0.010 (0.004)    | 0.490 (0.194)    | 0 (0.000) |    21.64 | beg0d, dok, dzt, santos, vhz  |
|            7 |     1388 | 2024-02-24 | Case        | L   | 0.815      | -            | -                | -                | -         |    -5.57 | beg0d, dok, dzt, santos, vhz  |
|            6 |     1395 | 2024-02-24 | Case        | W   | 0.814      | 0.450        | 0.034 (0.012)    | 0.767 (0.281)    | 0 (0.000) |    20.57 | beg0d, dok, dzt, santos, vhz  |
|            5 |     1453 | 2024-02-21 | Imperial    | L   | 0.795      | -            | -                | -                | -         |    -0.07 | beg0d, dok, dzt, santos, vhz  |
|            4 |     1457 | 2024-02-21 | Imperial    | L   | 0.794      | -            | -                | -                | -         |    -0.07 | beg0d, dok, dzt, santos, vhz  |
|            3 |     1638 | 2024-02-14 | 9z          | L   | 0.748      | -            | -                | -                | -         |    -2.43 | beg0d, dok, dzt, santos, vhz  |
|            2 |     2507 | 2024-01-11 | adalYamigos | L   | 0.521      | -            | -                | -                | -         |    -6.43 | BRNZ1K, dok, dzt, santos, vhz |
|            1 |     2514 | 2024-01-11 | Corinthians | W   | 0.520      | 0.143        | 0.001 (0.000)    | 0.150 (0.011)    | 0 (0.000) |     9.14 | BRNZ1K, dok, dzt, santos, vhz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
