### Roster Details<br />
Team Name: GODSENT<br />
Roster: bobeksde, eraa, Golden, Plopski, Ro1f<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [68]( ../standings_europe.md)<br />
Final Rank Value:  791.9<br />
<br />
Final Rank Value (791.9) = Starting Rank Value (793.5) + Head To Head Adjustments (-1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.5
- 400 + ( ( 0.204 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 793.5


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
|           27 |     1912 | 2024-01-31 | TSM               | L   | 0.651      | -            | -                | -                | -         |   -10.72 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           26 |     1932 | 2024-01-30 | 500               | W   | 0.645      | 0.143        | -                | 0.622 (0.057)    | 0 (0.000) |     6.26 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           25 |     1961 | 2024-01-27 | SINNERS           | L   | 0.625      | -            | -                | -                | -         |    -3.88 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           24 |     2037 | 2024-01-23 | TSM               | W   | 0.598      | 0.371        | 0.016 (0.004)    | 0.299 (0.066)    | 0 (0.000) |     8.84 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           23 |     2538 | 2024-01-10 | IKLA              | L   | 0.514      | -            | -                | -                | -         |   -12.00 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           22 |     2780 | 2023-12-11 | Preasy            | L   | 0.311      | -            | -                | -                | -         |    -2.12 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           21 |     2793 | 2023-12-10 | ALTERNATE aTTaX   | L   | 0.305      | -            | -                | -                | -         |    -4.94 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           20 |     2843 | 2023-12-08 | Preasy            | W   | 0.291      | 0.371        | 0.205 (0.022)    | 0.723 (0.078)    | 0 (0.000) |     7.20 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           19 |     2916 | 2023-12-05 | ex-Anonymo        | L   | 0.273      | -            | -                | -                | -         |    -4.80 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           18 |     2925 | 2023-12-05 | TSM               | W   | 0.272      | 0.371        | 0.012 (0.001)    | 0.120 (0.012)    | 0 (0.000) |     3.31 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           17 |     2945 | 2023-12-03 | EYEBALLERS        | L   | 0.260      | -            | -                | -                | -         |    -3.16 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           16 |     2967 | 2023-12-02 | Ninjas in Pyjamas | W   | 0.254      | 0.427        | 0.058 (0.006)    | 0.069 (0.008)    | 1 (0.254) |     4.65 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           15 |     2991 | 2023-12-01 | Metizport         | W   | 0.246      | 0.427        | 0.008 (0.001)    | 0.041 (0.004)    | 1 (0.246) |     2.84 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           14 |     3012 | 2023-11-30 | Endpoint          | W   | 0.238      | 0.371        | 0.025 (0.002)    | 0.488 (0.043)    | 0 (0.000) |     4.01 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           13 |     3032 | 2023-11-28 | The Witchers      | W   | 0.226      | 0.371        | 0.038 (0.003)    | 0.172 (0.014)    | 0 (0.000) |     3.29 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           12 |     3034 | 2023-11-28 | FORZE             | L   | 0.225      | -            | -                | -                | -         |    -3.77 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           11 |     3055 | 2023-11-26 | Apeks Rebels      | W   | 0.211      | 0.348        | 0.008 (0.001)    | -                | 1 (0.211) |     1.83 | bobeksde, eraa, Golden, Plopski, Ro1f |
|           10 |     3124 | 2023-11-22 | Guild Eagles      | L   | 0.186      | -            | -                | -                | -         |    -1.37 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            9 |     3141 | 2023-11-21 | PERA              | L   | 0.179      | -            | -                | -                | -         |    -2.97 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            8 |     3240 | 2023-11-17 | Alliance          | W   | 0.151      | 0.384        | 0.020 (0.001)    | 0.855 (0.050)    | 0 (0.000) |     3.13 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            7 |     3282 | 2023-11-16 | GenOne            | W   | 0.144      | -            | -                | -                | -         |     1.13 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            6 |     3503 | 2023-11-06 | 00NATION          | L   | 0.078      | -            | -                | -                | -         |    -1.67 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            5 |     3558 | 2023-11-03 | The Witchers      | W   | 0.060      | 0.371        | 0.038 (0.001)    | -                | -         |     0.86 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            4 |     3583 | 2023-11-02 | EYEBALLERS        | W   | 0.052      | -            | -                | -                | -         |     1.03 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            3 |     3613 | 2023-11-01 | ex-Anonymo        | W   | 0.045      | 0.371        | -                | 0.276 (0.005)    | -         |     0.65 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            2 |     3642 | 2023-10-31 | HAVU              | W   | 0.039      | -            | -                | -                | -         |     0.66 | bobeksde, eraa, Golden, Plopski, Ro1f |
|            1 |     3794 | 2023-10-27 | Pompa             | W   | 0.012      | -            | -                | -                | -         |     0.07 | bobeksde, eraa, Golden, Plopski, Ro1f |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,800.68)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-12 |      0.320 | $3,000.00      | $959.13         |
| 2023-12-03 |      0.260 | $11,432.00     | $2,974.23       |
| 2023-11-26 |      0.211 | $9,578.00      | $2,025.01       |
| 2023-11-21 |      0.180 | $2,500.00      | $450.96         |
| 2023-11-06 |      0.078 | $5,000.00      | $391.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
