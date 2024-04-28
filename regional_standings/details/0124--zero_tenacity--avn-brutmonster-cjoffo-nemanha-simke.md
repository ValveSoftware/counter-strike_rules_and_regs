### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  747.3<br />
<br />
Final Rank Value (747.3) = Starting Rank Value (783.1) + Head To Head Adjustments (-35.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.165[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.1
- 400 + ( ( 0.187 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 783.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |        6 | 2023-02-12 | LIBURNA                | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.70 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           24 |       15 | 2023-02-12 | Invictus International | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.167 (0.056)    | 0 (0.000) |    14.13 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           23 |      162 | 2023-02-04 | iNation                | L   | 1.000      | -            | -                | -                | -         |    -4.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           22 |      166 | 2023-02-04 | Prosapia               | W   | 1.000      | 0.306        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     7.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           21 |      354 | 2023-01-28 | undefined              | L   | 1.000      | -            | -                | -                | -         |   -16.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           20 |      387 | 2023-01-27 | Into the Breach        | L   | 1.000      | -            | -                | -                | -         |   -22.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           19 |      788 | 2022-12-18 | TENSTAR                | L   | 0.825      | -            | -                | -                | -         |   -20.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           18 |      878 | 2022-12-15 | Invictus International | W   | 0.805      | 0.143        | 0.001 (0.000)    | 0.167 (0.019)    | 0 (0.000) |    11.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           17 |     1554 | 2022-11-19 | iNation                | L   | 0.632      | -            | -                | -                | -         |    -3.81 | brutmonster, Cjoffo, fajkus, nEMANHA, simke |
|           16 |     1644 | 2022-11-13 | Juggernauts            | W   | 0.593      | 0.294        | 0.004 (0.001)    | 0.190 (0.033)    | 1 (0.593) |     7.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           15 |     2076 | 2022-10-18 | Copenhagen Flames      | L   | 0.418      | -            | -                | -                | -         |    -3.22 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           14 |     2089 | 2022-10-17 | HAVU                   | L   | 0.412      | -            | -                | -                | -         |    -3.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           13 |     2189 | 2022-10-14 | Websterz               | W   | 0.392      | 0.435        | 0.007 (0.001)    | 0.403 (0.069)    | 0 (0.000) |     8.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           12 |     2258 | 2022-10-12 | X                      | W   | 0.379      | 0.435        | 0.000 (0.000)    | 0.034 (0.006)    | 0 (0.000) |     2.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           11 |     2274 | 2022-10-11 | NeedDOCTOR             | L   | 0.373      | -            | -                | -                | -         |    -7.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|           10 |     2301 | 2022-10-10 | 500                    | L   | 0.364      | -            | -                | -                | -         |    -2.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            9 |     2451 | 2022-10-02 | 9 Pandas               | W   | 0.312      | 0.143        | 0.023 (0.001)    | 0.260 (0.012)    | 0 (0.000) |     4.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            8 |     2518 | 2022-09-29 | EUMIX                  | W   | 0.293      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            7 |     2530 | 2022-09-29 | NeedDOCTOR             | L   | 0.292      | -            | -                | -                | -         |    -6.08 | aVN, brutmonster, Cjoffo, DiMKE, simke      |
|            6 |     2550 | 2022-09-28 | EUMIX                  | W   | 0.286      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            5 |     2701 | 2022-09-23 | HOTU                   | L   | 0.253      | -            | -                | -                | -         |    -4.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            4 |     3262 | 2022-09-05 | Partizan               | L   | 0.134      | -            | -                | -                | -         |    -1.87 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            3 |     3316 | 2022-09-03 | NIJE                   | W   | 0.120      | -            | -                | -                | -         |     0.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            2 |     3349 | 2022-09-02 | iNation                | L   | 0.113      | -            | -                | -                | -         |    -0.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |
|            1 |     3623 | 2022-08-23 | GamerLegion            | L   | 0.046      | -            | -                | -                | -         |    -0.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,259.69)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $1,082.00      | $1,082.00       |
| 2022-11-19 |      0.632 | $4,145.00      | $2,621.65       |
| 2022-11-13 |      0.593 | $2,511.00      | $1,489.26       |
| 2022-09-25 |      0.267 | $250.00        | $66.78          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
