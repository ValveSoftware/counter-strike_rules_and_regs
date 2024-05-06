### Roster Details<br />
Team Name: GODSENT<br />
Roster: bobeksde, eraa, Golden, Plopski, Ro1f<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  763.9<br />
<br />
Final Rank Value (763.9) = Starting Rank Value (756.2) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.2
- 400 + ( ( 0.187 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 756.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2208 | 2024-01-31 | TSM               | L   | 0.558      | -            | -                | -                | -         |    -8.27 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           20 |     2228 | 2024-01-30 | 500               | W   | 0.551      | 0.143        | 0.003 (0.000)    | 0.578 (0.046)    | 0 (0.000) |     9.16 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           19 |     2257 | 2024-01-27 | SINNERS           | L   | 0.532      | -            | -                | -                | -         |    -2.80 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           18 |     2333 | 2024-01-23 | TSM               | W   | 0.505      | 0.371        | 0.018 (0.003)    | 0.258 (0.048)    | 0 (0.000) |     8.43 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           17 |     2834 | 2024-01-10 | IKLA              | L   | 0.421      | -            | -                | -                | -         |    -9.61 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           16 |     3076 | 2023-12-11 | ex-Preasy         | L   | 0.218      | -            | -                | -                | -         |    -1.34 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           15 |     3089 | 2023-12-10 | ALTERNATE aTTaX   | L   | 0.212      | -            | -                | -                | -         |    -1.53 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           14 |     3139 | 2023-12-08 | ex-Preasy         | W   | 0.198      | 0.371        | 0.173 (0.013)    | 0.700 (0.051)    | 0 (0.000) |     5.03 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           13 |     3212 | 2023-12-05 | ex-Anonymo        | L   | 0.180      | -            | -                | -                | -         |    -3.11 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           12 |     3221 | 2023-12-05 | TSM               | W   | 0.179      | 0.371        | 0.008 (0.001)    | 0.074 (0.005)    | 0 (0.000) |     2.29 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           11 |     3241 | 2023-12-03 | EYEBALLERS        | L   | 0.167      | -            | -                | -                | -         |    -1.58 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           10 |     3263 | 2023-12-02 | Ninjas in Pyjamas | W   | 0.160      | 0.427        | 0.045 (0.003)    | 0.049 (0.003)    | 1 (0.160) |     2.94 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            9 |     3287 | 2023-12-01 | Metizport         | W   | 0.153      | 0.427        | 0.183 (0.012)    | 1.000 (0.065)    | 1 (0.153) |     3.87 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            8 |     3308 | 2023-11-30 | Endpoint          | W   | 0.145      | 0.371        | 0.020 (0.001)    | 0.694 (0.037)    | 0 (0.000) |     3.14 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            7 |     3328 | 2023-11-28 | The Witchers      | W   | 0.133      | 0.371        | 0.033 (0.002)    | 0.114 (0.006)    | 0 (0.000) |     2.02 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            6 |     3330 | 2023-11-28 | FORZE             | L   | 0.132      | -            | -                | -                | -         |    -2.06 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            5 |     3351 | 2023-11-26 | Apeks Rebels      | W   | 0.118      | 0.348        | 0.005 (0.000)    | -                | 1 (0.118) |     0.86 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            4 |     3420 | 2023-11-22 | Guild Eagles      | L   | 0.093      | -            | -                | -                | -         |    -0.57 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            3 |     3437 | 2023-11-21 | PERA              | L   | 0.085      | -            | -                | -                | -         |    -0.84 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            2 |     3536 | 2023-11-17 | Alliance          | W   | 0.058      | 0.384        | 0.016 (0.000)    | 0.815 (0.018)    | 0 (0.000) |     1.25 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            1 |     3578 | 2023-11-16 | GenOne            | W   | 0.051      | 0.384        | -                | 0.003 (0.000)    | -         |     0.44 | bobeksde, eraa, Golden, Plopski, Ro1f |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,935.78)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-12 |      0.226 | $3,000.00      | $679.22         |
| 2023-12-03 |      0.167 | $11,432.00     | $1,907.55       |
| 2023-11-26 |      0.118 | $9,578.00      | $1,131.32       |
| 2023-11-21 |      0.087 | $2,500.00      | $217.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
