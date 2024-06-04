### Roster Details<br />
Team Name: ex-Anonymo<br />
Roster: lunAtic, reiko, SaMey, Sobol, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  655.9<br />
<br />
Final Rank Value (655.9) = Starting Rank Value (654.8) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.8
- 400 + ( ( 0.131 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 654.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     2662 | 2024-02-10 | The Chosen Few  | L   | 0.473      | -            | -                | -                | -         |    -6.81 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           23 |     2668 | 2024-02-10 | FURIA           | L   | 0.472      | -            | -                | -                | -         |    -0.32 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           22 |     2672 | 2024-02-10 | Apeks           | L   | 0.471      | -            | -                | -                | -         |    -0.73 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           21 |     2763 | 2024-02-03 | Young Ninjas    | L   | 0.426      | -            | -                | -                | -         |    -3.81 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           20 |     3276 | 2024-01-16 | JANO            | L   | 0.307      | -            | -                | -                | -         |    -7.13 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           19 |     3285 | 2024-01-16 | LEON            | W   | 0.306      | 0.143        | -                | 0.116 (0.005)    | 0 (0.000) |     2.53 | eightz999, facecrack, JIaYm, k0s, Z1W0W        |
|           18 |     3384 | 2024-01-13 | OG              | L   | 0.285      | -            | -                | -                | -         |    -0.44 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           17 |     3386 | 2024-01-13 | FAVBET          | W   | 0.285      | 0.143        | 0.004 (0.000)    | 0.257 (0.010)    | 0 (0.000) |     5.15 | bondik, guthriee, j3kie, Smash, t3ns1on        |
|           16 |     3426 | 2024-01-12 | Lausanne SE     | W   | 0.280      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.36 | Diviiii, Razzmo, SBT, Shr, xReal               |
|           15 |     3467 | 2024-01-11 | PERA            | L   | 0.272      | -            | -                | -                | -         |    -1.91 | Aaron, DGL, Kamion, msN, Porya                 |
|           14 |     3476 | 2024-01-11 | Betera          | W   | 0.272      | 0.143        | 0.002 (0.000)    | 0.141 (0.005)    | 0 (0.000) |     4.88 | alex666, lollipop21k, MaSvAl, nifee, sad       |
|           13 |     3486 | 2024-01-10 | CYBERSHOKE      | W   | 0.267      | 0.143        | 0.002 (0.000)    | 0.055 (0.002)    | 0 (0.000) |     4.58 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz      |
|           12 |     3544 | 2024-01-09 | ECF             | L   | 0.259      | -            | -                | -                | -         |    -2.76 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           11 |     3578 | 2023-12-23 | Spirit Academy  | L   | 0.143      | -            | -                | -                | -         |    -2.07 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           10 |     3579 | 2023-12-22 | NAVI Junior     | W   | 0.137      | 0.333        | 0.009 (0.000)    | 0.115 (0.005)    | 0 (0.000) |     2.42 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            9 |     3582 | 2023-12-21 | Spirit Academy  | L   | 0.131      | -            | -                | -                | -         |    -1.90 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            8 |     3596 | 2023-12-19 | Sashi           | W   | 0.118      | 0.333        | 0.157 (0.006)    | 1.000 (0.039)    | 0 (0.000) |     3.32 | Cabbi, IceBerg, kwezz, Lucky, MistR            |
|            7 |     3641 | 2023-12-17 | Sashi           | W   | 0.104      | -            | -                | -                | 0 (0.000) |     1.32 | Fessor, n1Xen, nut nut, PR1mE, Speedy          |
|            6 |     3728 | 2023-12-11 | ex-Guild Eagles | L   | 0.063      | -            | -                | -                | -         |    -0.31 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            5 |     3810 | 2023-12-07 | ALTERNATE aTTaX | W   | 0.038      | 0.384        | 0.048 (0.001)    | 0.650 (0.010)    | 0 (0.000) |     1.02 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            4 |     3863 | 2023-12-05 | GODSENT         | W   | 0.026      | 0.384        | 0.001 (0.000)    | 0.081 (0.001)    | 0 (0.000) |     0.41 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            3 |     3870 | 2023-12-05 | ex-Guild Eagles | L   | 0.025      | -            | -                | -                | -         |    -0.12 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            2 |     3880 | 2023-12-04 | Into the Breach | W   | 0.020      | 0.589        | 0.002 (0.000)    | 0.082 (0.001)    | -         |     0.35 | Bymas, CRUC1AL, misutaaa, rallen, tomiko       |
|            1 |     3928 | 2023-12-02 | Fluxo           | W   | 0.004      | 0.589        | 0.066 (0.000)    | 0.647 (0.001)    | -         |     0.11 | lunAtic, reiko, SaMey, Sobol, virtuoso         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($667.71)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.143 | $3,000.00      | $430.32         |
| 2023-12-13 |      0.079 | $500.00        | $39.68          |
| 2023-12-07 |      0.040 | $5,000.00      | $197.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
