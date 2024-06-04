### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, nota, tex1y<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  760.6<br />
<br />
Final Rank Value (760.6) = Starting Rank Value (717.3) + Head To Head Adjustments (43.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.3
- 400 + ( ( 0.163 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 717.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      641 | 2024-05-07 | MOUZ NXT     | L   | 1.000      | -            | -                | -                | -         |    -6.29 | executor, kinqie, Kiro, nota, tex1y |
|           25 |      667 | 2024-05-05 | Sampi        | L   | 1.000      | -            | -                | -                | -         |    -8.71 | executor, kinqie, Kiro, nota, tex1y |
|           24 |      692 | 2024-05-04 | HAVU         | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.166 (0.072)    | 0 (0.000) |    13.40 | executor, kinqie, Kiro, nota, tex1y |
|           23 |      736 | 2024-05-02 | EYEBALLERS   | L   | 1.000      | -            | -                | -                | -         |   -11.12 | executor, kinqie, Kiro, nota, tex1y |
|           22 |      793 | 2024-04-29 | ENCE Academy | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.321 (0.139)    | 0 (0.000) |    16.82 | executor, kinqie, Kiro, nota, tex1y |
|           21 |     1295 | 2024-04-10 | KOI          | L   | 0.873      | -            | -                | -                | -         |    -5.42 | executor, kinqie, Kiro, nota, tex1y |
|           20 |     1348 | 2024-04-09 | PARIVISION   | W   | 0.866      | 0.500        | 0.002 (0.001)    | 0.475 (0.206)    | 0 (0.000) |    20.53 | executor, kinqie, Kiro, nota, tex1y |
|           19 |     1584 | 2024-04-01 | PERA         | L   | 0.812      | -            | -                | -                | -         |    -8.88 | executor, kinqie, Kiro, nota, tex1y |
|           18 |     1593 | 2024-03-31 | Monte        | W   | 0.805      | 0.500        | 0.181 (0.073)    | 0.611 (0.246)    | 0 (0.000) |    23.94 | executor, kinqie, Kiro, nota, tex1y |
|           17 |     1606 | 2024-03-29 | System5      | W   | 0.793      | 0.500        | -                | 0.104 (0.041)    | 0 (0.000) |     6.52 | executor, kinqie, Kiro, nota, tex1y |
|           16 |     1925 | 2024-03-13 | Betera       | W   | 0.686      | 0.500        | 0.002 (0.001)    | 0.141 (0.048)    | 0 (0.000) |    10.49 | executor, kinqie, Kiro, nota, tex1y |
|           15 |     2189 | 2024-03-03 | Metizport    | L   | 0.619      | -            | -                | -                | -         |    -3.45 | executor, kinqie, Kiro, nota, tex1y |
|           14 |     2298 | 2024-02-26 | SAW          | L   | 0.580      | -            | -                | -                | -         |    -0.54 | executor, kinqie, Kiro, nota, tex1y |
|           13 |     2873 | 2024-01-30 | Sashi        | L   | 0.399      | -            | -                | -                | -         |    -1.84 | executor, kinqie, Kiro, nota, tex1y |
|           12 |     3478 | 2024-01-11 | ILIN         | L   | 0.271      | -            | -                | -                | -         |    -6.67 | executor, kinqie, Kiro, nota, tex1y |
|           11 |     3480 | 2024-01-10 | QuackQuack   | W   | 0.267      | -            | -                | -                | 0 (0.000) |     1.20 | executor, kinqie, Kiro, nota, tex1y |
|           10 |     3656 | 2023-12-16 | TSM          | W   | 0.100      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |     1.18 | executor, kinqie, Kiro, nota, tex1y |
|            9 |     3688 | 2023-12-15 | IKLA         | W   | 0.093      | 0.143        | -                | 0.078 (0.001)    | 0 (0.000) |     0.79 | executor, kinqie, Kiro, nota, tex1y |
|            8 |     3704 | 2023-12-13 | BIG Academy  | L   | 0.079      | -            | -                | -                | -         |    -1.56 | executor, kinqie, Kiro, nota, tex1y |
|            7 |     3724 | 2023-12-11 | TSM          | W   | 0.066      | 0.372        | 0.001 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.78 | executor, kinqie, Kiro, nota, tex1y |
|            6 |     3737 | 2023-12-10 | lajtbitexe   | W   | 0.058      | 0.372        | 0.001 (0.000)    | -                | -         |     0.66 | executor, kinqie, Kiro, nota, tex1y |
|            5 |     3760 | 2023-12-09 | Endpoint     | W   | 0.053      | 0.372        | 0.012 (0.000)    | 0.627 (0.012)    | -         |     1.19 | executor, kinqie, Kiro, nota, tex1y |
|            4 |     3775 | 2023-12-08 | Lausanne SE  | W   | 0.047      | -            | -                | -                | -         |     0.47 | executor, kinqie, Kiro, nota, tex1y |
|            3 |     3797 | 2023-12-07 | LT5          | W   | 0.040      | -            | -                | -                | -         |     0.18 | executor, kinqie, Kiro, nota, tex1y |
|            2 |     3825 | 2023-12-06 | lajtbitexe   | L   | 0.033      | -            | -                | -                | -         |    -0.67 | executor, kinqie, Kiro, nota, tex1y |
|            1 |     3866 | 2023-12-05 | The Witchers | W   | 0.026      | 0.372        | 0.010 (0.000)    | 0.056 (0.001)    | -         |     0.37 | executor, kinqie, Kiro, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($339.16)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
