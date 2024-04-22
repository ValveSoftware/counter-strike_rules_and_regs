### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  757.1<br />
<br />
Final Rank Value (757.1) = Starting Rank Value (717.7) + Head To Head Adjustments (39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.7
- 400 + ( ( 0.164 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 717.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      919 | 2024-03-15 | Permitta        | L   | 0.946      | -            | -                | -                | -         |    -7.92 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           25 |      949 | 2024-03-14 | Endpoint        | W   | 0.940      | 0.372        | 0.025 (0.009)    | 0.488 (0.171)    | 0 (0.000) |    16.90 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           24 |     1015 | 2024-03-12 | ARCRED          | W   | 0.926      | 0.372        | 0.008 (0.003)    | 0.164 (0.057)    | 0 (0.000) |    11.70 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           23 |     1075 | 2024-03-09 | Passion UA      | W   | 0.906      | 0.372        | 0.031 (0.011)    | 0.625 (0.211)    | 0 (0.000) |    19.89 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           22 |     1153 | 2024-03-06 | Insilio         | L   | 0.887      | -            | -                | -                | -         |   -11.47 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           21 |     1229 | 2024-03-03 | Metizport       | L   | 0.867      | -            | -                | -                | -         |    -4.86 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           20 |     1235 | 2024-03-03 | TSM             | W   | 0.867      | 0.143        | 0.016 (0.002)    | 0.299 (0.037)    | 0 (0.000) |    17.14 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           19 |     1241 | 2024-03-03 | KOI             | W   | 0.866      | 0.143        | 0.058 (0.007)    | 0.902 (0.112)    | 0 (0.000) |    24.03 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           18 |     1410 | 2024-02-24 | brazylijski luz | L   | 0.812      | -            | -                | -                | -         |    -8.95 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     1557 | 2024-02-17 | Entropiq        | L   | 0.767      | -            | -                | -                | -         |   -11.16 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     1562 | 2024-02-17 | ECF             | L   | 0.766      | -            | -                | -                | -         |   -16.94 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     1569 | 2024-02-17 | Monte           | L   | 0.765      | -            | -                | -                | -         |    -1.46 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     1715 | 2024-02-10 | ex-Anonymo      | W   | 0.720      | 0.358        | 0.027 (0.007)    | 0.276 (0.071)    | 0 (0.000) |    12.59 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     1791 | 2024-02-04 | AIRLYA          | W   | 0.680      | 0.143        | -                | 0.062 (0.006)    | 0 (0.000) |     5.86 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     1812 | 2024-02-03 | Zero Tenacity   | L   | 0.674      | -            | -                | -                | -         |    -8.09 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     1853 | 2024-02-02 | NAVI Junior     | W   | 0.666      | 0.143        | 0.019 (0.002)    | 0.195 (0.019)    | 0 (0.000) |    10.80 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     1856 | 2024-02-02 | Juggernauts     | W   | 0.666      | -            | -                | -                | 0 (0.000) |     3.15 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     1860 | 2024-02-02 | NAVI Junior     | L   | 0.665      | -            | -                | -                | -         |   -10.01 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     3482 | 2023-11-07 | Entropiq        | L   | 0.087      | -            | -                | -                | -         |    -1.25 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            7 |     3522 | 2023-11-05 | SINNERS         | L   | 0.071      | -            | -                | -                | -         |    -0.28 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            6 |     3537 | 2023-11-04 | ARCRED          | L   | 0.067      | -            | -                | -                | -         |    -1.13 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            5 |     3601 | 2023-11-01 | Enterprise      | W   | 0.047      | 0.435        | 0.026 (0.001)    | 0.452 (0.009)    | 0 (0.000) |     1.11 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            4 |     3629 | 2023-10-31 | EYEBALLERS      | L   | 0.040      | -            | -                | -                | -         |    -0.36 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            3 |     3637 | 2023-10-31 | ex-Anonymo      | L   | 0.040      | -            | -                | -                | -         |    -0.55 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            2 |     3709 | 2023-10-29 | FORZE           | W   | 0.026      | 0.435        | 0.019 (0.000)    | 0.135 (0.002)    | -         |     0.45 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |
|            1 |     3780 | 2023-10-27 | FTW             | W   | 0.013      | 0.143        | 0.004 (0.000)    | -                | -         |     0.18 | hybrid, Libido, shaiK, Skrimo, SPELLAN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
