### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, morelz, Vegi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  917.3<br />
<br />
Final Rank Value (917.3) = Starting Rank Value (871.7) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.398[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.7
- 400 + ( ( 0.244 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 871.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |       12 | 2024-04-22 | ex-Preasy         | W   | 1.000      | 0.384        | 0.064 (0.025)    | -                | 0 (0.000) |    12.92 | bnox, maaryy, mASKED, morelz, Vegi  |
|           65 |       33 | 2024-04-21 | Insilio           | W   | 1.000      | 0.435        | -                | 0.483 (0.210)    | 0 (0.000) |    12.72 | bnox, maaryy, mASKED, morelz, Vegi  |
|           64 |       57 | 2024-04-20 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -17.32 | bnox, maaryy, mASKED, morelz, Vegi  |
|           63 |       62 | 2024-04-20 | Passion UA        | W   | 1.000      | 0.371        | 0.031 (0.012)    | 0.625 (0.232)    | 0 (0.000) |    13.58 | bnox, maaryy, mASKED, morelz, Vegi  |
|           62 |      151 | 2024-04-18 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -17.27 | bnox, maaryy, mASKED, morelz, Vegi  |
|           61 |      165 | 2024-04-18 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -15.01 | bnox, maaryy, mASKED, morelz, Vegi  |
|           60 |      181 | 2024-04-17 | PARIVISION        | W   | 1.000      | 0.384        | -                | 0.358 (0.138)    | 0 (0.000) |     8.39 | bnox, maaryy, mASKED, morelz, Vegi  |
|           59 |      223 | 2024-04-16 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -3.79 | bnox, maaryy, mASKED, morelz, Vegi  |
|           58 |      286 | 2024-04-12 | MOUZ NXT          | W   | 1.000      | 0.371        | 0.054 (0.020)    | 0.970 (0.360)    | 0 (0.000) |    17.24 | bnox, maaryy, mASKED, morelz, Vegi  |
|           57 |      366 | 2024-04-10 | EYEBALLERS        | W   | 1.000      | 0.384        | 0.052 (0.020)    | 0.406 (0.156)    | 0 (0.000) |    14.57 | bnox, maaryy, mASKED, morelz, Vegi  |
|           56 |      444 | 2024-04-08 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.86 | bnox, maaryy, mASKED, morelz, Vegi  |
|           55 |      451 | 2024-04-08 | JANO              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.03 | bnox, maaryy, mASKED, morelz, Vegi  |
|           54 |      581 | 2024-04-03 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -13.56 | bnox, maaryy, mASKED, morelz, Vegi  |
|           53 |      593 | 2024-04-03 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -11.03 | bnox, maaryy, mASKED, morelz, Vegi  |
|           52 |      625 | 2024-04-02 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -11.05 | bnox, maaryy, mASKED, morelz, Vegi  |
|           51 |      634 | 2024-04-02 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -16.30 | bnox, maaryy, mASKED, morelz, Vegi  |
|           50 |      899 | 2024-03-16 | RUBY              | L   | 0.953      | -            | -                | -                | -         |   -20.33 | bnox, maaryy, mASKED, morelz, Vegi  |
|           49 |      919 | 2024-03-15 | The Chosen Few    | W   | 0.946      | -            | -                | -                | 0 (0.000) |     7.92 | bnox, maaryy, mASKED, morelz, Vegi  |
|           48 |      922 | 2024-03-15 | Sampi             | L   | 0.945      | -            | -                | -                | -         |   -15.26 | bnox, maaryy, mASKED, morelz, Vegi  |
|           47 |      969 | 2024-03-13 | MOUZ NXT          | W   | 0.934      | 0.372        | 0.054 (0.019)    | 0.970 (0.337)    | 0 (0.000) |    14.41 | bnox, maaryy, mASKED, morelz, Vegi  |
|           46 |      988 | 2024-03-13 | ECLOT             | W   | 0.932      | 0.143        | 0.083 (0.011)    | -                | -         |    17.00 | bnox, maaryy, mASKED, morelz, Vegi  |
|           45 |     1002 | 2024-03-13 | ECLOT             | W   | 0.931      | 0.371        | 0.083 (0.029)    | 0.623 (0.215)    | -         |    18.37 | bnox, maaryy, mASKED, morelz, Vegi  |
|           44 |     1044 | 2024-03-11 | Preasy            | L   | 0.918      | -            | -                | -                | -         |    -7.98 | bnox, maaryy, mASKED, morelz, Vegi  |
|           43 |     1091 | 2024-03-09 | Sashi             | L   | 0.905      | -            | -                | -                | -         |   -16.04 | bnox, maaryy, mASKED, morelz, Vegi  |
|           42 |     1127 | 2024-03-07 | VP.Prodigy        | W   | 0.893      | -            | -                | -                | -         |     5.92 | bnox, maaryy, mASKED, morelz, Vegi  |
|           41 |     1136 | 2024-03-07 | ECF               | W   | 0.891      | -            | -                | -                | -         |     4.06 | bnox, maaryy, mASKED, morelz, Vegi  |
|           40 |     1164 | 2024-03-06 | Passion UA        | W   | 0.886      | -            | -                | -                | -         |    13.43 | bnox, maaryy, mASKED, morelz, Vegi  |
|           39 |     1165 | 2024-03-06 | Enterprise        | W   | 0.885      | 0.371        | -                | 0.452 (0.148)    | -         |    17.03 | bnox, maaryy, mASKED, morelz, Vegi  |
|           38 |     1205 | 2024-03-05 | Young Ninjas      | W   | 0.879      | -            | -                | -                | -         |    16.70 | bnox, maaryy, mASKED, morelz, Vegi  |
|           37 |     1272 | 2024-03-02 | AURA              | W   | 0.858      | -            | -                | -                | -         |     3.08 | bnox, maaryy, mASKED, morelz, Vegi  |
|           36 |     1316 | 2024-02-28 | Secret            | L   | 0.839      | -            | -                | -                | -         |   -21.57 | bnox, maaryy, mASKED, morelz, Vegi  |
|           35 |     1319 | 2024-02-28 | ECLOT             | L   | 0.838      | -            | -                | -                | -         |    -8.08 | bnox, maaryy, mASKED, morelz, Vegi  |
|           34 |     1340 | 2024-02-27 | Sprout            | W   | 0.831      | -            | -                | -                | -         |     8.14 | bnox, maaryy, mASKED, morelz, Vegi  |
|           33 |     1414 | 2024-02-24 | ECLOT             | W   | 0.812      | 0.333        | 0.083 (0.022)    | 0.623 (0.169)    | -         |    17.54 | bnox, maaryy, mASKED, morelz, Vegi  |
|           32 |     1443 | 2024-02-22 | PGE Turow         | W   | 0.798      | -            | -                | -                | -         |     6.79 | bnox, maaryy, mASKED, morelz, reiko |
|           31 |     1475 | 2024-02-21 | ECLOT             | L   | 0.791      | -            | -                | -                | -         |    -7.49 | bnox, maaryy, mASKED, morelz, Vegi  |
|           30 |     1522 | 2024-02-19 | ECLOT             | W   | 0.778      | 0.303        | 0.083 (0.020)    | 0.623 (0.147)    | -         |    17.48 | bnox, maaryy, mASKED, morelz, Vegi  |
|           29 |     1760 | 2024-02-07 | Endpoint          | L   | 0.698      | -            | -                | -                | -         |   -12.10 | bnox, maaryy, mASKED, morelz, Vegi  |
|           28 |     1905 | 2024-01-31 | Sashi             | W   | 0.652      | -            | -                | -                | -         |    11.84 | bnox, maaryy, mASKED, morelz, Vegi  |
|           27 |     1922 | 2024-01-30 | RUBY              | L   | 0.646      | -            | -                | -                | -         |   -12.70 | bnox, maaryy, mASKED, morelz, Vegi  |
|           26 |     1925 | 2024-01-30 | 3DMAX             | W   | 0.646      | -            | -                | -                | -         |    14.46 | bnox, maaryy, mASKED, morelz, Vegi  |
|           25 |     2133 | 2024-01-20 | Gaimin Gladiators | L   | 0.578      | -            | -                | -                | -         |    -1.42 | bnox, maaryy, mASKED, morelz, Vegi  |
|           24 |     2137 | 2024-01-20 | Astralis Talent   | L   | 0.578      | -            | -                | -                | -         |    -9.27 | bnox, maaryy, mASKED, morelz, Vegi  |
|           23 |     2170 | 2024-01-19 | JANO              | W   | 0.574      | -            | -                | -                | -         |     4.53 | bnox, maaryy, mASKED, morelz, Vegi  |
|           22 |     2193 | 2024-01-19 | Aurora Young Blud | W   | 0.571      | -            | -                | -                | -         |     5.41 | bnox, maaryy, mASKED, morelz, Vegi  |
|           21 |     2228 | 2024-01-18 | Zero Tenacity     | L   | 0.567      | -            | -                | -                | -         |   -10.76 | bnox, maaryy, mASKED, morelz, Vegi  |
|           20 |     2247 | 2024-01-18 | BIG               | L   | 0.566      | -            | -                | -                | -         |    -1.90 | bnox, maaryy, mASKED, morelz, Vegi  |
|           19 |     2255 | 2024-01-18 | Spirit Academy    | W   | 0.565      | -            | -                | -                | -         |     6.14 | bnox, maaryy, mASKED, morelz, Vegi  |
|           18 |     2295 | 2024-01-17 | Astralis Talent   | L   | 0.558      | -            | -                | -                | -         |    -9.14 | bnox, maaryy, mASKED, morelz, Vegi  |
|           17 |     2411 | 2024-01-14 | ECLOT             | W   | 0.538      | 0.333        | 0.083 (0.015)    | -                | -         |    13.02 | bnox, maaryy, mASKED, morelz, Vegi  |
|           16 |     2430 | 2024-01-13 | ex-sYnck          | W   | 0.534      | -            | -                | -                | -         |     6.48 | bnox, maaryy, mASKED, morelz, Vegi  |
|           15 |     2435 | 2024-01-13 | OG                | L   | 0.533      | -            | -                | -                | -         |    -1.15 | bnox, maaryy, mASKED, morelz, Vegi  |
|           14 |     2436 | 2024-01-13 | Insilio           | W   | 0.533      | -            | -                | -                | -         |     6.07 | bnox, maaryy, mASKED, morelz, Vegi  |
|           13 |     2443 | 2024-01-13 | INFINITE          | W   | 0.532      | -            | -                | -                | -         |     1.35 | bnox, maaryy, mASKED, morelz, Vegi  |
|           12 |     2474 | 2024-01-12 | Clоwnfiesta       | W   | 0.528      | -            | -                | -                | -         |     1.28 | bnox, maaryy, mASKED, morelz, Vegi  |
|           11 |     2524 | 2024-01-11 | PERA              | L   | 0.519      | -            | -                | -                | -         |    -9.10 | bnox, maaryy, mASKED, morelz, Vegi  |
|           10 |     2536 | 2024-01-10 | Illyrians         | W   | 0.514      | -            | -                | -                | -         |     1.20 | bnox, maaryy, mASKED, morelz, Vegi  |
|            9 |     2713 | 2023-12-16 | IKLA              | L   | 0.347      | -            | -                | -                | -         |    -9.03 | bnox, h4rn, imd, morelz, Vegi       |
|            8 |     2740 | 2023-12-15 | TSM               | L   | 0.340      | -            | -                | -                | -         |    -7.28 | CYPHER, interz, JACKZ, MoDo, valde  |
|            7 |     3142 | 2023-11-21 | Zero Tenacity     | L   | 0.178      | -            | -                | -                | -         |    -3.43 | bnox, emi, h4rn, morelz, Vegi       |
|            6 |     3255 | 2023-11-16 | Apeks             | L   | 0.147      | -            | -                | -                | -         |    -0.51 | bnox, emi, h4rn, morelz, Vegi       |
|            5 |     3264 | 2023-11-16 | Aurora            | L   | 0.146      | -            | -                | -                | -         |    -0.24 | bnox, emi, h4rn, morelz, Vegi       |
|            4 |     3292 | 2023-11-15 | ARCRED            | W   | 0.141      | -            | -                | -                | -         |     1.23 | bnox, emi, h4rn, morelz, Vegi       |
|            3 |     3301 | 2023-11-15 | FLuffy Gangsters  | W   | 0.140      | -            | -                | -                | -         |     0.30 | bnox, emi, h4rn, morelz, Vegi       |
|            2 |     3332 | 2023-11-14 | Entropiq          | L   | 0.132      | -            | -                | -                | -         |    -2.76 | bnox, emi, h4rn, morelz, Vegi       |
|            1 |     3341 | 2023-11-13 | FTW               | W   | 0.127      | -            | -                | -                | -         |     0.97 | Ag1l, NOPEEJ, pr, Shr, stadodo      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,826.02)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-25 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-02-28 |      0.838 | $3,000.00      | $2,513.56       |
| 2024-02-21 |      0.791 | $1,500.00      | $1,186.36       |
| 2024-01-21 |      0.584 | $1,500.00      | $876.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
