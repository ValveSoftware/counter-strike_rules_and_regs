### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, yourwombat<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  879.6<br />
<br />
Final Rank Value (879.6) = Starting Rank Value (870.8) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 870.8
- 400 + ( ( 0.236 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 870.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      197 | 2024-06-07 | Mindfreak   | L   | 1.000      | -            | -                | -                | -         |   -18.67 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           38 |      266 | 2024-06-06 | Rooster     | L   | 1.000      | -            | -                | -                | -         |   -15.77 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           37 |      672 | 2024-05-22 | KZG         | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.168 (0.056)    | 0 (0.000) |     6.00 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           36 |      677 | 2024-05-22 | KZG         | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.168 (0.056)    | 0 (0.000) |     6.34 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           35 |      933 | 2024-05-15 | Arcade      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.189 (0.063)    | 0 (0.000) |     5.86 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           34 |      936 | 2024-05-15 | Arcade      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.189 (0.063)    | 0 (0.000) |     6.19 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           33 |     1208 | 2024-05-03 | FURIA       | L   | 0.946      | -            | -                | -                | -         |    -0.88 | ADDICT, BRACE, damyo, hazr, pz         |
|           32 |     1253 | 2024-05-01 | ENCE        | L   | 0.933      | -            | -                | -                | -         |    -1.97 | ADDICT, BRACE, damyo, hazr, pz         |
|           31 |     1286 | 2024-04-30 | MOUZ        | L   | 0.925      | -            | -                | -                | -         |    -0.06 | ADDICT, BRACE, damyo, hazr, pz         |
|           30 |     1508 | 2024-04-20 | FlyQuest    | L   | 0.858      | -            | -                | -                | -         |    -1.37 | ADDICT, BRACE, damyo, hazr, pz         |
|           29 |     1512 | 2024-04-20 | Rooster     | W   | 0.857      | 0.143        | 0.018 (0.002)    | -                | 0 (0.000) |    13.00 | ADDICT, BRACE, damyo, hazr, pz         |
|           28 |     1557 | 2024-04-19 | Mindfreak   | W   | 0.851      | -            | -                | -                | 0 (0.000) |     9.56 | ADDICT, BRACE, damyo, hazr, pz         |
|           27 |     1560 | 2024-04-19 | Rooster     | L   | 0.850      | -            | -                | -                | -         |   -13.65 | ADDICT, BRACE, damyo, hazr, pz         |
|           26 |     1809 | 2024-04-10 | Rooster     | W   | 0.791      | 0.333        | 0.018 (0.005)    | 0.296 (0.078)    | 0 (0.000) |    12.00 | ADDICT, BRACE, damyo, hazr, pz         |
|           25 |     1819 | 2024-04-10 | Rooster     | L   | 0.791      | -            | -                | -                | -         |   -13.13 | ADDICT, BRACE, damyo, hazr, pz         |
|           24 |     2044 | 2024-04-03 | DXA         | W   | 0.744      | 0.333        | 0.005 (0.001)    | 0.209 (0.052)    | -         |     5.38 | ADDICT, BRACE, damyo, hazr, pz         |
|           23 |     2048 | 2024-04-03 | DXA         | W   | 0.744      | 0.333        | 0.005 (0.001)    | 0.209 (0.052)    | -         |     5.64 | ADDICT, BRACE, damyo, hazr, pz         |
|           22 |     2169 | 2024-03-27 | Mindfreak   | L   | 0.698      | -            | -                | -                | -         |   -15.78 | ADDICT, BRACE, damyo, hazr, pz         |
|           21 |     2176 | 2024-03-27 | Mindfreak   | W   | 0.698      | 0.333        | -                | 0.260 (0.061)    | -         |     6.13 | ADDICT, BRACE, damyo, hazr, pz         |
|           20 |     2219 | 2024-03-23 | DXA         | W   | 0.671      | 0.315        | -                | 0.209 (0.044)    | 1 (0.671) |     5.31 | ADDICT, BRACE, damyo, hazr, pz         |
|           19 |     2222 | 2024-03-23 | Arcade      | W   | 0.670      | 0.315        | -                | 0.189 (0.040)    | 1 (0.670) |     6.00 | ADDICT, BRACE, damyo, hazr, pz         |
|           18 |     2280 | 2024-03-20 | Canon Event | W   | 0.650      | -            | -                | -                | -         |     2.16 | ADDICT, BRACE, damyo, hazr, pz         |
|           17 |     2281 | 2024-03-20 | Canon Event | W   | 0.650      | -            | -                | -                | -         |     2.21 | ADDICT, BRACE, damyo, hazr, pz         |
|           16 |     2351 | 2024-03-16 | Gods Reign  | L   | 0.624      | -            | -                | -                | -         |   -10.56 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           15 |     2372 | 2024-03-15 | GRDX        | W   | 0.617      | 0.432        | 0.005 (0.001)    | -                | 1 (0.617) |     2.64 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           14 |     2405 | 2024-03-14 | Aurora      | L   | 0.610      | -            | -                | -                | -         |    -0.52 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           13 |     2617 | 2024-03-06 | Vantage     | W   | 0.558      | -            | -                | -                | -         |     4.08 | ADDICT, BRACE, damyo, hazr, pz         |
|           12 |     2619 | 2024-03-06 | Vantage     | W   | 0.558      | -            | -                | -                | -         |     4.22 | ADDICT, BRACE, damyo, hazr, pz         |
|           11 |     2873 | 2024-02-22 | Rooster     | L   | 0.477      | -            | -                | -                | -         |    -8.53 | ADDICT, BRACE, Hatz, hazr, pz          |
|           10 |     2892 | 2024-02-22 | Vantage     | W   | 0.471      | -            | -                | -                | -         |     3.64 | ADDICT, BRACE, Hatz, hazr, pz          |
|            9 |     2894 | 2024-02-21 | FlyQuest    | L   | 0.470      | -            | -                | -                | -         |    -0.73 | ADDICT, BRACE, Hatz, hazr, pz          |
|            8 |     2919 | 2024-02-21 | FlyQuest    | L   | 0.464      | -            | -                | -                | -         |    -0.72 | ADDICT, BRACE, Hatz, hazr, pz          |
|            7 |     2923 | 2024-02-21 | FlyQuest    | L   | 0.464      | -            | -                | -                | -         |    -0.73 | ADDICT, BRACE, Hatz, hazr, pz          |
|            6 |     3513 | 2024-01-22 | Rooster     | L   | 0.265      | -            | -                | -                | -         |    -4.87 | ADDICT, BRACE, Hatz, hazr, pz          |
|            5 |     3517 | 2024-01-22 | FlyQuest    | L   | 0.264      | -            | -                | -                | -         |    -0.43 | ADDICT, BRACE, Hatz, hazr, pz          |
|            4 |     3542 | 2024-01-21 | FlyQuest    | L   | 0.258      | -            | -                | -                | -         |    -0.42 | ADDICT, BRACE, Hatz, hazr, pz          |
|            3 |     3552 | 2024-01-20 | Rooster     | W   | 0.256      | -            | -                | -                | -         |     3.47 | ADDICT, BRACE, Hatz, hazr, pz          |
|            2 |     3648 | 2024-01-19 | FlyQuest    | W   | 0.244      | 0.143        | 0.121 (0.004)    | -                | -         |     7.31 | ADDICT, BRACE, Hatz, hazr, pz          |
|            1 |     3654 | 2024-01-18 | DXA         | W   | 0.243      | -            | -                | -                | -         |     0.51 | ADDICT, BRACE, Hatz, hazr, pz          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,894.53)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,050.00      | $1,050.00       |
| 2024-05-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-03-23 |      0.671 | $3,308.00      | $2,219.64       |
| 2024-03-16 |      0.625 | $5,000.00      | $3,124.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
