### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, expro, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  919.0<br />
<br />
Final Rank Value (919.0) = Starting Rank Value (843.5) + Head To Head Adjustments (75.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 843.5
- 400 + ( ( 0.217 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 843.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      388 | 2023-01-27 | IHC       | L   | 1.000      | -            | -                | -                | -         |    -6.07 | EmiliaQAQ, expro, Starry, Westmelon, z4kr |
|           20 |      412 | 2023-01-26 | Eruption  | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.206 (0.029)    | 0 (0.000) |    12.79 | EmiliaQAQ, expro, Starry, Westmelon, z4kr |
|           19 |      420 | 2023-01-26 | Renewal   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.17 | EmiliaQAQ, expro, Starry, Westmelon, z4kr |
|           18 |      572 | 2023-01-20 | IHC       | L   | 1.000      | -            | -                | -                | -         |    -5.31 | expro, Nelly, Starry, Westmelon, z4kr     |
|           17 |      597 | 2023-01-19 | Rare Atom | L   | 1.000      | -            | -                | -                | -         |   -16.20 | expro, Nelly, Starry, Westmelon, z4kr     |
|           16 |      688 | 2023-01-15 | Rare Atom | L   | 1.000      | -            | -                | -                | -         |   -18.91 | expro, Nelly, Starry, Westmelon, z4kr     |
|           15 |      704 | 2023-01-14 | Eruption  | W   | 1.000      | 0.396        | 0.015 (0.006)    | 0.206 (0.082)    | 0 (0.000) |    10.64 | expro, Nelly, Starry, Westmelon, z4kr     |
|           14 |      740 | 2022-12-25 | Rare Atom | L   | 0.872      | -            | -                | -                | -         |   -18.19 | expro, Nelly, Starry, Westmelon, z4kr     |
|           13 |      745 | 2022-12-25 | Wings Up  | W   | 0.870      | 0.375        | 0.005 (0.002)    | 0.117 (0.038)    | 0 (0.000) |     6.16 | expro, Nelly, Starry, Westmelon, z4kr     |
|           12 |      746 | 2022-12-24 | IHC       | W   | 0.865      | 0.375        | 0.108 (0.035)    | 0.622 (0.202)    | 0 (0.000) |    22.91 | expro, Nelly, Starry, Westmelon, z4kr     |
|           11 |      783 | 2022-12-18 | IHC       | W   | 0.826      | 0.371        | 0.108 (0.033)    | 0.622 (0.190)    | 0 (0.000) |    22.69 | expro, Nelly, Starry, Westmelon, z4kr     |
|           10 |      876 | 2022-12-15 | NKT       | W   | 0.805      | 0.371        | 0.024 (0.007)    | 0.236 (0.070)    | 0 (0.000) |    14.26 | expro, Nelly, Starry, Westmelon, z4kr     |
|            9 |      898 | 2022-12-14 | Rare Atom | W   | 0.798      | 0.371        | 0.062 (0.018)    | 0.228 (0.067)    | 0 (0.000) |    10.21 | expro, Nelly, Starry, Westmelon, z4kr     |
|            8 |      920 | 2022-12-13 | Renewal   | W   | 0.792      | 0.371        | 0.002 (0.001)    | 0.083 (0.024)    | 0 (0.000) |     5.87 | expro, Nelly, Starry, Westmelon, z4kr     |
|            7 |     1935 | 2022-10-23 | IHC       | W   | 0.452      | 0.371        | 0.108 (0.018)    | 0.622 (0.104)    | 0 (0.000) |    13.18 | expro, Nelly, Starry, Westmelon, z4kr     |
|            6 |     2022 | 2022-10-20 | ARAVT     | W   | 0.432      | -            | -                | -                | -         |     4.04 | expro, Nelly, Starry, Westmelon, z4kr     |
|            5 |     2049 | 2022-10-19 | NKT       | W   | 0.425      | 0.371        | 0.024 (0.004)    | 0.236 (0.037)    | -         |     8.04 | expro, Nelly, Starry, Westmelon, z4kr     |
|            4 |     2073 | 2022-10-18 | Clutch    | W   | 0.418      | -            | -                | -                | -         |     2.77 | expro, Nelly, Starry, Westmelon, z4kr     |
|            3 |     3478 | 2022-08-28 | Rare Atom | L   | 0.079      | -            | -                | -                | -         |    -1.33 | expro, Nelly, Starry, Westmelon, z4kr     |
|            2 |     3527 | 2022-08-27 | Rare Atom | W   | 0.072      | -            | -                | -                | -         |     1.06 | expro, Nelly, Starry, Westmelon, z4kr     |
|            1 |     3542 | 2022-08-27 | TYLOO     | W   | 0.071      | -            | -                | -                | -         |     0.68 | expro, Nelly, Starry, Westmelon, z4kr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,594.14)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-15 |      1.000 | $8,122.00      | $8,122.00       |
| 2022-12-25 |      0.872 | $7,165.00      | $6,248.98       |
| 2022-12-18 |      0.826 | $8,000.00      | $6,605.66       |
| 2022-10-23 |      0.452 | $8,000.00      | $3,617.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
