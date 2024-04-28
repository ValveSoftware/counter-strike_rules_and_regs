### Roster Details<br />
Team Name: eSuba<br />
Roster: Levi, luko, M1key, Mix, Pechyn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  867.3<br />
<br />
Final Rank Value (867.3) = Starting Rank Value (930.3) + Head To Head Adjustments (-63.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.268[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.3
- 400 + ( ( 0.259 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 930.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1090 | 2022-12-07 | ECSTATIC           | L   | 0.751      | -            | -                | -                | -         |   -13.91 | Levi, luko, M1key, Mix, Pechyn      |
|           35 |     1153 | 2022-12-05 | sYnck              | L   | 0.738      | -            | -                | -                | -         |   -15.45 | Levi, luko, M1key, Mix, Pechyn      |
|           34 |     1192 | 2022-12-04 | HONORIS            | L   | 0.731      | -            | -                | -                | -         |   -11.33 | Levi, luko, M1key, Mix, Pechyn      |
|           33 |     1250 | 2022-12-02 | Tricked            | L   | 0.720      | -            | -                | -                | -         |   -10.46 | Levi, luko, M1key, Mix, Pechyn      |
|           32 |     1284 | 2022-12-01 | 9INE               | L   | 0.712      | -            | -                | -                | -         |   -10.46 | Levi, luko, M1key, Mix, Pechyn      |
|           31 |     1353 | 2022-11-28 | Illuminar          | W   | 0.694      | 0.435        | 0.048 (0.014)    | 0.700 (0.211)    | 0 (0.000) |    13.68 | Levi, luko, M1key, Mix, Pechyn      |
|           30 |     1431 | 2022-11-26 | ECSTATIC           | W   | 0.678      | 0.435        | 0.030 (0.009)    | 0.556 (0.164)    | 0 (0.000) |     8.63 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           29 |     1466 | 2022-11-25 | Endpoint           | L   | 0.671      | -            | -                | -                | -         |   -10.42 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           28 |     1515 | 2022-11-22 | ECLOT              | L   | 0.653      | -            | -                | -                | -         |    -8.96 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           27 |     1692 | 2022-11-06 | SINNERS            | L   | 0.547      | -            | -                | -                | -         |    -6.90 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           26 |     1718 | 2022-11-05 | Enterprise         | W   | 0.540      | 0.473        | 0.042 (0.011)    | 0.193 (0.049)    | 1 (0.540) |     7.64 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           25 |     1729 | 2022-11-04 | Entropiq Prague    | W   | 0.533      | 0.473        | 0.007 (0.002)    | 0.074 (0.019)    | 1 (0.533) |     4.47 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           24 |     2120 | 2022-10-16 | ECLOT              | L   | 0.405      | -            | -                | -                | -         |    -5.34 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           23 |     2147 | 2022-10-15 | Entropiq Prague    | W   | 0.399      | 0.360        | 0.007 (0.001)    | 0.074 (0.011)    | 1 (0.399) |     3.38 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           22 |     2178 | 2022-10-14 | ECLOT              | L   | 0.393      | -            | -                | -                | -         |    -5.31 | Blogg1s, desty, Levi, M1key, Pechyn |
|           21 |     2216 | 2022-10-13 | Sampi              | W   | 0.386      | -            | -                | -                | 1 (0.386) |     2.09 | Blogg1s, desty, Levi, M1key, Pechyn |
|           20 |     2249 | 2022-10-12 | Narcis             | W   | 0.380      | -            | -                | -                | 1 (0.380) |     0.60 | Blogg1s, desty, Levi, M1key, Pechyn |
|           19 |     2277 | 2022-10-11 | HONORIS            | L   | 0.373      | -            | -                | -                | -         |    -6.64 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           18 |     2285 | 2022-10-11 | Wolsung            | W   | 0.371      | -            | -                | -                | 0 (0.000) |     1.12 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           17 |     2325 | 2022-10-08 | Enterprise         | L   | 0.352      | -            | -                | -                | -         |    -6.25 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           16 |     2353 | 2022-10-07 | SINNERS            | W   | 0.345      | 0.401        | 0.068 (0.009)    | 0.549 (0.076)    | 1 (0.345) |     6.59 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           15 |     2469 | 2022-10-01 | Partizan           | L   | 0.306      | -            | -                | -                | -         |    -6.46 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           14 |     2477 | 2022-10-01 | ECLOT              | W   | 0.305      | 0.143        | 0.046 (0.002)    | 0.584 (0.025)    | 0 (0.000) |     5.91 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           13 |     2488 | 2022-09-30 | gothboiclique      | W   | 0.300      | -            | -                | -                | -         |     0.89 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           12 |     2561 | 2022-09-28 | EPG Family         | L   | 0.285      | -            | -                | -                | -         |    -6.10 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           11 |     2621 | 2022-09-25 | BIG Academy        | W   | 0.267      | 0.435        | 0.020 (0.002)    | 0.434 (0.050)    | -         |     5.34 | Blogg1s, Levi, luko, M1key, Pechyn  |
|           10 |     2653 | 2022-09-24 | ex-Into the Breach | L   | 0.260      | -            | -                | -                | -         |    -5.02 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            9 |     2752 | 2022-09-22 | BLUEJAYS           | L   | 0.246      | -            | -                | -                | -         |    -2.26 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            8 |     2807 | 2022-09-20 | Apeks              | W   | 0.233      | 0.435        | 0.024 (0.002)    | 0.671 (0.068)    | -         |     3.69 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            7 |     2868 | 2022-09-18 | K23                | W   | 0.217      | -            | -                | -                | -         |     0.81 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            6 |     2952 | 2022-09-15 | Entropiq Prague    | W   | 0.200      | -            | -                | -                | -         |     1.60 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            5 |     2992 | 2022-09-14 | 9INE               | W   | 0.193      | 0.143        | 0.045 (0.001)    | 1.000 (0.028)    | -         |     3.03 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            4 |     3005 | 2022-09-14 | ECLOT              | L   | 0.191      | -            | -                | -                | -         |    -2.31 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            3 |     3028 | 2022-09-13 | OG Academy         | W   | 0.186      | -            | -                | -                | -         |     1.38 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            2 |     3678 | 2022-08-21 | Monte              | L   | 0.033      | -            | -                | -                | -         |    -0.54 | Blogg1s, Levi, luko, M1key, Pechyn  |
|            1 |     3700 | 2022-08-21 | 9 Pandas           | W   | 0.032      | -            | -                | -                | -         |     0.27 | Blogg1s, Levi, luko, M1key, Pechyn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,413.51)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-24 |      0.667 | $435.00        | $290.13         |
| 2022-11-06 |      0.547 | $18,000.00     | $9,844.78       |
| 2022-10-16 |      0.405 | $3,950.00      | $1,600.05       |
| 2022-10-08 |      0.352 | $4,762.00      | $1,678.55       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
