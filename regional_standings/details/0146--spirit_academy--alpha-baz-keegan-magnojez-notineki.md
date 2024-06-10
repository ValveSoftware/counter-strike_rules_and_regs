### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  723.8<br />
<br />
Final Rank Value (723.8) = Starting Rank Value (678.8) + Head To Head Adjustments (45.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.8
- 400 + ( ( 0.140 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 678.8


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
|           16 |     2518 | 2024-03-09 | RUBY              | L   | 0.580      | -            | -                | -                | -         |    -5.04 | alpha, baz, keegaN, Magnojez, notineki    |
|           15 |     2550 | 2024-03-08 | Passion UA        | W   | 0.573      | 0.372        | 0.088 (0.019)    | 0.905 (0.193)    | 0 (0.000) |    15.38 | alpha, baz, keegaN, Magnojez, notineki    |
|           14 |     2745 | 2024-02-29 | Aurora            | L   | 0.519      | -            | -                | -                | -         |    -0.17 | alpha, baz, keegaN, Magnojez, notineki    |
|           13 |     2755 | 2024-02-28 | 9 Pandas          | L   | 0.514      | -            | -                | -                | -         |    -1.09 | alpha, baz, keegaN, Magnojez, notineki    |
|           12 |     2757 | 2024-02-28 | HAVU              | W   | 0.513      | 0.143        | 0.003 (0.000)    | 0.254 (0.019)    | 0 (0.000) |     9.16 | alpha, baz, keegaN, Magnojez, notineki    |
|           11 |     2775 | 2024-02-27 | RUBY              | W   | 0.507      | 0.143        | 0.022 (0.002)    | 0.555 (0.040)    | 0 (0.000) |    12.16 | alpha, baz, keegaN, Magnojez, notineki    |
|           10 |     2782 | 2024-02-27 | brazylijski luz   | W   | 0.506      | 0.143        | 0.005 (0.000)    | 0.355 (0.026)    | 0 (0.000) |    10.48 | alpha, baz, keegaN, Magnojez, notineki    |
|            9 |     3332 | 2024-02-01 | Sangal            | L   | 0.332      | -            | -                | -                | -         |    -0.69 | alpha, baz, keegaN, Magnojez, notineki    |
|            8 |     3395 | 2024-01-28 | Alliance          | W   | 0.304      | 0.371        | 0.012 (0.001)    | 0.513 (0.058)    | 0 (0.000) |     7.32 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     3457 | 2024-01-24 | Sangal            | L   | 0.279      | -            | -                | -                | -         |    -0.56 | alpha, keegaN, Magnojez, notineki, S0tF1k |
|            6 |     3702 | 2024-01-18 | Permitta          | L   | 0.238      | -            | -                | -                | -         |    -1.49 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3826 | 2024-01-15 | Aurora Young Blud | L   | 0.218      | -            | -                | -                | -         |    -2.93 | alpha, baz, keegaN, Magnojez, notineki    |
|            4 |     4078 | 2023-12-23 | ex-Anonymo        | W   | 0.064      | 0.333        | 0.001 (0.000)    | 0.044 (0.001)    | 0 (0.000) |     0.87 | alpha, baz, keegaN, Magnojez, notineki    |
|            3 |     4082 | 2023-12-21 | ex-Anonymo        | W   | 0.052      | 0.333        | 0.001 (0.000)    | 0.044 (0.001)    | 0 (0.000) |     0.70 | alpha, baz, keegaN, Magnojez, notineki    |
|            2 |     4101 | 2023-12-19 | NAVI Junior       | W   | 0.038      | 0.333        | 0.007 (0.000)    | 0.090 (0.001)    | 0 (0.000) |     0.65 | alpha, baz, keegaN, Magnojez, notineki    |
|            1 |     4167 | 2023-12-16 | The Witchers      | W   | 0.019      | 0.333        | 0.006 (0.000)    | 0.034 (0.000)    | 0 (0.000) |     0.29 | alpha, baz, keegaN, Magnojez, notineki    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($321.34)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
