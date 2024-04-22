### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: dwushka, KusMe, shady, Something, xdENiSZERA<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  709.4<br />
<br />
Final Rank Value (709.4) = Starting Rank Value (667.8) + Head To Head Adjustments (41.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.8
- 400 + ( ( 0.139 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 667.8


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
|           12 |      768 | 2024-03-23 | FORZE             | L   | 0.999      | -            | -                | -                | -         |    -4.81 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           11 |      785 | 2024-03-22 | Guild Eagles      | W   | 0.991      | 0.143        | 0.046 (0.006)    | 0.727 (0.103)    | 0 (0.000) |    26.45 | dwushka, KusMe, shady, Something, xdENiSZERA |
|           10 |      831 | 2024-03-20 | TSM               | W   | 0.978      | 0.143        | 0.016 (0.002)    | 0.299 (0.042)    | 0 (0.000) |    20.50 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            9 |     1058 | 2024-03-10 | 1WIN              | L   | 0.913      | -            | -                | -                | -         |   -18.08 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            8 |     1127 | 2024-03-07 | Permitta          | L   | 0.893      | -            | -                | -                | -         |    -5.92 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            7 |     1197 | 2024-03-05 | FORZE YNG         | W   | 0.880      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.55 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            6 |     2616 | 2023-12-30 | Metizport         | L   | 0.438      | -            | -                | -                | -         |    -2.47 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            5 |     2623 | 2023-12-28 | brazylijski luz   | W   | 0.425      | 0.371        | 0.019 (0.003)    | 0.356 (0.056)    | 0 (0.000) |     8.97 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            4 |     2627 | 2023-12-26 | Alliance          | W   | 0.412      | 0.371        | 0.020 (0.003)    | 0.855 (0.130)    | 0 (0.000) |    10.20 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            3 |     3359 | 2023-11-12 | GUN5              | L   | 0.121      | -            | -                | -                | -         |    -2.06 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            2 |     3373 | 2023-11-12 | Aurora Young Blud | W   | 0.119      | 0.320        | 0.002 (0.000)    | 0.133 (0.005)    | 0 (0.000) |     1.97 | dwushka, KusMe, shady, Something, xdENiSZERA |
|            1 |     3403 | 2023-11-11 | Verdant           | W   | 0.113      | 0.320        | 0.021 (0.001)    | 0.074 (0.003)    | 0 (0.000) |     2.30 | dwushka, KusMe, shady, Something, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($253.59)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
