### Roster Details<br />
Team Name: PACT<br />
Roster: azizz, b1elany, bnox, lunAtic, SAYN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  768.6<br />
<br />
Final Rank Value (768.6) = Starting Rank Value (772.5) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.5
- 400 + ( ( 0.182 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 772.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      779 | 2022-12-18 | Monte           | L   | 0.826      | -            | -                | -                | -         |    -6.66 | azizz, b1elany, bnox, lunAtic, SAYN  |
|           22 |      814 | 2022-12-17 | Iron Branch     | L   | 0.819      | -            | -                | -                | -         |   -15.06 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           21 |      929 | 2022-12-12 | Lilmix          | W   | 0.786      | 0.300        | 0.022 (0.005)    | 0.208 (0.049)    | 0 (0.000) |    10.85 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           20 |      953 | 2022-12-11 | Permitta        | L   | 0.779      | -            | -                | -                | -         |    -7.56 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           19 |      983 | 2022-12-10 | AGO             | W   | 0.773      | 0.377        | 0.005 (0.001)    | 0.328 (0.096)    | 0 (0.000) |    13.97 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           18 |     1389 | 2022-11-27 | Forsaken        | W   | 0.686      | 0.377        | -                | 0.000 (0.000)    | 0 (0.000) |     2.39 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           17 |     1472 | 2022-11-24 | UNGENTIUM       | L   | 0.667      | -            | -                | -                | -         |    -9.73 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           16 |     1578 | 2022-11-17 | ESCA            | W   | 0.620      | 0.417        | 0.003 (0.001)    | -                | 1 (0.620) |     4.20 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           15 |     1826 | 2022-10-28 | PROSPECTS       | L   | 0.485      | -            | -                | -                | -         |    -4.27 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           14 |     2251 | 2022-10-12 | Illuminar       | L   | 0.380      | -            | -                | -                | -         |    -2.74 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           13 |     2263 | 2022-10-12 | AGO             | L   | 0.378      | -            | -                | -                | -         |    -6.25 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           12 |     2275 | 2022-10-11 | Illuminar       | W   | 0.373      | 0.143        | 0.048 (0.003)    | 0.700 (0.037)    | 0 (0.000) |     9.15 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           11 |     2478 | 2022-10-01 | Believe         | L   | 0.305      | -            | -                | -                | -         |    -4.92 | azizz, b1elany, bnox, fr3nd, lunAtic |
|           10 |     2520 | 2022-09-29 | 500             | W   | 0.293      | 0.371        | 0.085 (0.009)    | 0.760 (0.083)    | 0 (0.000) |     7.59 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            9 |     2594 | 2022-09-26 | Sangal          | L   | 0.273      | -            | -                | -                | -         |    -2.34 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            8 |     2753 | 2022-09-22 | JANO            | W   | 0.246      | 0.371        | 0.008 (0.001)    | 0.307 (0.028)    | 0 (0.000) |     3.45 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            7 |     2805 | 2022-09-20 | ALTERNATE aTTaX | W   | 0.234      | 0.371        | 0.008 (0.001)    | 0.486 (0.042)    | 0 (0.000) |     4.07 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            6 |     2911 | 2022-09-16 | fnatic          | L   | 0.207      | -            | -                | -                | -         |    -0.12 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            5 |     2918 | 2022-09-16 | Genk            | W   | 0.207      | 0.143        | 0.007 (0.000)    | 0.092 (0.003)    | 0 (0.000) |     2.83 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            4 |     2923 | 2022-09-16 | LDLC            | L   | 0.206      | -            | -                | -                | -         |    -3.67 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            3 |     3122 | 2022-09-10 | NASR            | L   | 0.167      | -            | -                | -                | -         |    -4.33 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            2 |     3144 | 2022-09-10 | UNGENTIUM       | W   | 0.166      | 0.143        | 0.015 (0.000)    | 0.474 (0.011)    | 0 (0.000) |     3.01 | azizz, b1elany, bnox, fr3nd, lunAtic |
|            1 |     3150 | 2022-09-10 | ThunderFlash    | W   | 0.165      | 0.143        | 0.010 (0.000)    | 0.054 (0.001)    | -         |     2.22 | azizz, b1elany, bnox, fr3nd, lunAtic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,396.29)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.779 | $5,538.00      | $4,315.50       |
| 2022-12-03 |      0.727 | $3,868.00      | $2,811.76       |
| 2022-10-09 |      0.359 | $750.00        | $269.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
