### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  794.2<br />
<br />
Final Rank Value (794.2) = Starting Rank Value (756.9) + Head To Head Adjustments (37.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.9
- 400 + ( ( 0.185 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 756.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      348 | 2024-04-10 | KOI             | L   | 1.000      | -            | -                | -                | -         |    -6.42 | executor, kinqie, Kiro, nota, tex1y |
|           20 |      401 | 2024-04-09 | PARIVISION      | W   | 1.000      | 0.500        | 0.000 (0.000)    | 0.358 (0.179)    | 0 (0.000) |    14.75 | executor, kinqie, Kiro, nota, tex1y |
|           19 |      637 | 2024-04-01 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -14.52 | executor, kinqie, Kiro, nota, tex1y |
|           18 |      646 | 2024-03-31 | Monte           | W   | 1.000      | 0.500        | 0.236 (0.118)    | 0.598 (0.299)    | 0 (0.000) |    27.90 | executor, kinqie, Kiro, nota, tex1y |
|           17 |      659 | 2024-03-29 | System5         | W   | 1.000      | 0.500        | 0.000 (0.000)    | 0.085 (0.042)    | 0 (0.000) |     7.05 | executor, kinqie, Kiro, nota, tex1y |
|           16 |      978 | 2024-03-13 | Betera          | W   | 0.934      | 0.500        | 0.004 (0.002)    | 0.240 (0.112)    | 0 (0.000) |    13.73 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     1242 | 2024-03-03 | Metizport       | L   | 0.866      | -            | -                | -                | -         |    -5.60 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     1351 | 2024-02-26 | SAW             | L   | 0.827      | -            | -                | -                | -         |    -1.69 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     1926 | 2024-01-30 | Sashi           | L   | 0.646      | -            | -                | -                | -         |    -6.59 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     2531 | 2024-01-11 | ILIN            | L   | 0.519      | -            | -                | -                | -         |   -13.31 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     2533 | 2024-01-10 | QuackQuack      | W   | 0.514      | -            | -                | -                | 0 (0.000) |     1.74 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     2709 | 2023-12-16 | TSM             | W   | 0.347      | 0.143        | 0.012 (0.001)    | 0.120 (0.006)    | 0 (0.000) |     4.91 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     2741 | 2023-12-15 | IKLA            | W   | 0.340      | 0.143        | -                | 0.205 (0.010)    | 0 (0.000) |     2.74 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     2757 | 2023-12-13 | ALTERNATE aTTaX | L   | 0.326      | -            | -                | -                | -         |    -4.02 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     2777 | 2023-12-11 | TSM             | W   | 0.314      | 0.372        | 0.012 (0.001)    | 0.120 (0.014)    | 0 (0.000) |     4.45 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     2790 | 2023-12-10 | lajtbitexe      | W   | 0.306      | 0.372        | 0.003 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     3.59 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     2813 | 2023-12-09 | Endpoint        | W   | 0.300      | 0.372        | 0.025 (0.003)    | 0.488 (0.055)    | 0 (0.000) |     5.55 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     2828 | 2023-12-08 | Lausanne SE     | W   | 0.294      | 0.372        | 0.001 (0.000)    | -                | -         |     3.17 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     2850 | 2023-12-07 | LT5             | W   | 0.287      | -            | -                | -                | -         |     1.10 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     2878 | 2023-12-06 | lajtbitexe      | L   | 0.281      | -            | -                | -                | -         |    -5.56 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     2919 | 2023-12-05 | The Witchers    | W   | 0.273      | 0.372        | 0.038 (0.004)    | 0.172 (0.017)    | -         |     4.38 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,402.97)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
