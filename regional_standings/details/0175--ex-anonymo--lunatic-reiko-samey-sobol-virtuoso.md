### Roster Details<br />
Team Name: ex-Anonymo<br />
Roster: lunAtic, reiko, SaMey, Sobol, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  628.9<br />
<br />
Final Rank Value (628.9) = Starting Rank Value (629.2) + Head To Head Adjustments (-0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.2
- 400 + ( ( 0.115 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 629.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     3162 | 2024-02-10 | The Chosen Few | L   | 0.394      | -            | -                | -                | -         |    -5.07 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           17 |     3168 | 2024-02-10 | FURIA          | L   | 0.393      | -            | -                | -                | -         |    -0.04 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           16 |     3172 | 2024-02-10 | Apeks          | L   | 0.392      | -            | -                | -                | -         |    -0.68 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           15 |     3263 | 2024-02-03 | Young Ninjas   | L   | 0.347      | -            | -                | -                | -         |    -2.80 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           14 |     3776 | 2024-01-16 | JANO           | L   | 0.228      | -            | -                | -                | -         |    -5.01 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           13 |     3785 | 2024-01-16 | LEON           | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.145 (0.005)    | 0 (0.000) |     2.50 | eightz999, facecrack, JIaYm, k0s, Z1W0W        |
|           12 |     3884 | 2024-01-13 | OG             | L   | 0.206      | -            | -                | -                | -         |    -0.28 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           11 |     3886 | 2024-01-13 | FAVBET         | W   | 0.206      | 0.143        | 0.006 (0.000)    | 0.333 (0.010)    | 0 (0.000) |     4.33 | bondik, guthriee, j3kie, Smash, t3ns1on        |
|           10 |     3926 | 2024-01-12 | Lausanne SE    | W   | 0.201      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.34 | Diviiii, Razzmo, SBT, Shr, xReal               |
|            9 |     3967 | 2024-01-11 | PERA           | L   | 0.193      | -            | -                | -                | -         |    -1.03 | Aaron, DGL, Kamion, msN, Porya                 |
|            8 |     3976 | 2024-01-11 | Betera         | W   | 0.192      | 0.143        | 0.002 (0.000)    | 0.111 (0.003)    | 0 (0.000) |     3.72 | alex666, lollipop21k, MaSvAl, nifee, sad       |
|            7 |     3986 | 2024-01-10 | CYBERSHOKE     | W   | 0.187      | 0.143        | 0.002 (0.000)    | 0.046 (0.001)    | 0 (0.000) |     3.47 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz      |
|            6 |     4044 | 2024-01-09 | ECF            | L   | 0.180      | -            | -                | -                | -         |    -1.65 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|            5 |     4078 | 2023-12-23 | Spirit Academy | L   | 0.064      | -            | -                | -                | -         |    -0.87 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            4 |     4079 | 2023-12-22 | NAVI Junior    | W   | 0.058      | 0.333        | 0.007 (0.000)    | 0.090 (0.002)    | 0 (0.000) |     1.11 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            3 |     4082 | 2023-12-21 | Spirit Academy | L   | 0.052      | -            | -                | -                | -         |    -0.70 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            2 |     4096 | 2023-12-19 | Sashi          | W   | 0.038      | 0.333        | 0.174 (0.002)    | 1.000 (0.013)    | 0 (0.000) |     1.15 | Cabbi, IceBerg, kwezz, Lucky, MistR            |
|            1 |     4141 | 2023-12-17 | Sashi          | W   | 0.024      | 0.333        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.23 | Fessor, n1Xen, nut nut, PR1mE, Speedy          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($192.80)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
