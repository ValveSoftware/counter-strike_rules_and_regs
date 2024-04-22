### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  663.8<br />
<br />
Final Rank Value (663.8) = Starting Rank Value (693.0) + Head To Head Adjustments (-29.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 693.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     1015 | 2024-03-12 | The Chosen Few    | L   | 0.926      | -            | -                | -                | -         |   -11.70 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           30 |     1072 | 2024-03-09 | FORZE YNG         | W   | 0.907      | -            | -                | -                | 0 (0.000) |     4.94 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           29 |     1098 | 2024-03-08 | RUBY              | L   | 0.900      | -            | -                | -                | -         |    -9.83 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           28 |     1186 | 2024-03-05 | 1WIN              | W   | 0.881      | 0.372        | -                | 0.275 (0.090)    | 0 (0.000) |    10.30 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           27 |     1333 | 2024-02-27 | FORZE             | L   | 0.833      | -            | -                | -                | -         |    -4.48 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           26 |     1540 | 2024-02-18 | brazylijski luz   | L   | 0.773      | -            | -                | -                | -         |    -8.26 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           25 |     1712 | 2024-02-11 | Sashi             | L   | 0.725      | -            | -                | -                | -         |    -4.72 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           24 |     1800 | 2024-02-04 | esmagaB           | L   | 0.679      | -            | -                | -                | -         |    -8.66 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx   |
|           23 |     2354 | 2024-01-16 | Sashi             | L   | 0.553      | -            | -                | -                | -         |    -4.30 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           22 |     2472 | 2024-01-12 | Space             | L   | 0.528      | -            | -                | -                | -         |    -8.01 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           21 |     2641 | 2023-12-20 | Metizport         | L   | 0.372      | -            | -                | -                | -         |    -2.20 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           20 |     2657 | 2023-12-18 | showmakerz        | W   | 0.360      | -            | -                | -                | 0 (0.000) |     2.87 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           19 |     2660 | 2023-12-18 | Sprout            | L   | 0.359      | -            | -                | -                | -         |    -4.91 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           18 |     2662 | 2023-12-18 | Sashi             | W   | 0.358      | 0.333        | 0.017 (0.002)    | 0.062 (0.007)    | 0 (0.000) |     5.85 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           17 |     2947 | 2023-12-03 | Spirit Academy    | W   | 0.260      | 0.294        | 0.020 (0.002)    | 0.245 (0.019)    | 0 (0.000) |     4.57 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           16 |     3178 | 2023-11-19 | Sashi             | L   | 0.165      | -            | -                | -                | -         |    -1.22 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           15 |     3192 | 2023-11-18 | Alliance          | W   | 0.160      | 0.384        | 0.020 (0.001)    | 0.855 (0.053)    | 0 (0.000) |     3.85 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           14 |     3221 | 2023-11-17 | Nouns             | W   | 0.154      | 0.384        | 0.019 (0.001)    | 0.084 (0.005)    | 0 (0.000) |     2.68 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           13 |     3270 | 2023-11-16 | MOUZ NXT          | L   | 0.145      | -            | -                | -                | -         |    -1.08 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           12 |     3292 | 2023-11-15 | Permitta          | L   | 0.141      | -            | -                | -                | -         |    -1.23 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           11 |     3304 | 2023-11-15 | Gaimin Gladiators | W   | 0.140      | 0.143        | 0.156 (0.003)    | 1.000 (0.020)    | 0 (0.000) |     4.28 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           10 |     3396 | 2023-11-11 | Aurora Young Blud | L   | 0.114      | -            | -                | -                | -         |    -1.85 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            9 |     3436 | 2023-11-09 | BetBoom           | L   | 0.099      | -            | -                | -                | -         |    -0.14 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            8 |     3455 | 2023-11-08 | Guild Eagles      | W   | 0.094      | 0.435        | 0.046 (0.002)    | 0.727 (0.030)    | 0 (0.000) |     2.54 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            7 |     3489 | 2023-11-07 | OG                | W   | 0.085      | 0.435        | 0.001 (0.000)    | -                | 0 (0.000) |     1.08 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            6 |     3537 | 2023-11-04 | The Chosen Few    | W   | 0.067      | 0.435        | 0.004 (0.000)    | 0.340 (0.010)    | -         |     1.13 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            5 |     3547 | 2023-11-04 | Sangal            | L   | 0.065      | -            | -                | -                | -         |    -1.53 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            4 |     3588 | 2023-11-02 | Sampi             | W   | 0.051      | 0.435        | 0.084 (0.002)    | 0.698 (0.016)    | -         |     1.36 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            3 |     3638 | 2023-10-31 | B8                | L   | 0.039      | -            | -                | -                | -         |    -0.70 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            2 |     3708 | 2023-10-29 | Gucci Academy     | L   | 0.026      | -            | -                | -                | -         |    -0.34 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            1 |     3766 | 2023-10-28 | Preasy            | W   | 0.018      | 0.435        | 0.205 (0.002)    | 0.723 (0.006)    | -         |     0.47 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,460.40)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-03 |      0.260 | $3,000.00      | $779.59         |
| 2023-11-21 |      0.180 | $1,000.00      | $180.38         |
| 2023-11-09 |      0.100 | $5,000.00      | $500.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
