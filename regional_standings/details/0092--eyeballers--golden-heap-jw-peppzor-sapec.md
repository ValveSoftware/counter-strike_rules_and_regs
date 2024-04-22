### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: Golden, HEAP, JW, Peppzor, Sapec<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  824.9<br />
<br />
Final Rank Value (824.9) = Starting Rank Value (885.8) + Head To Head Adjustments (-60.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 885.8
- 400 + ( ( 0.252 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 885.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |        4 | 2024-04-22 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -11.25 | Golden, HEAP, JW, Peppzor, Sapec |
|           47 |       43 | 2024-04-20 | PERA              | W   | 1.000      | 0.500        | 0.025 (0.013)    | 0.424 (0.212)    | 0 (0.000) |    15.32 | Golden, HEAP, JW, Peppzor, Sapec |
|           46 |      140 | 2024-04-18 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -26.24 | Golden, HEAP, JW, Peppzor, Sapec |
|           45 |      204 | 2024-04-17 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -17.39 | Golden, HEAP, JW, Peppzor, Sapec |
|           44 |      366 | 2024-04-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -14.57 | Golden, HEAP, JW, Peppzor, Sapec |
|           43 |      467 | 2024-04-07 | Metizport         | L   | 1.000      | -            | -                | -                | -         |    -9.82 | Golden, HEAP, JW, Peppzor, Sapec |
|           42 |      471 | 2024-04-07 | Alliance          | W   | 1.000      | 0.330        | 0.020 (0.007)    | 0.855 (0.282)    | 0 (0.000) |    13.77 | Golden, HEAP, JW, Peppzor, Sapec |
|           41 |      483 | 2024-04-06 | Onliners5         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.34 | Golden, HEAP, JW, Peppzor, Sapec |
|           40 |      535 | 2024-04-04 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -21.70 | Golden, HEAP, JW, Peppzor, Sapec |
|           39 |      579 | 2024-04-03 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -7.50 | Golden, HEAP, JW, Peppzor, Sapec |
|           38 |      589 | 2024-04-03 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -4.48 | Golden, HEAP, JW, Peppzor, Sapec |
|           37 |      680 | 2024-03-28 | KOI               | W   | 1.000      | 0.500        | 0.058 (0.029)    | 0.902 (0.451)    | 0 (0.000) |    21.74 | Golden, HEAP, JW, Peppzor, Sapec |
|           36 |      942 | 2024-03-14 | TSM               | L   | 0.941      | -            | -                | -                | -         |   -18.52 | flusha, HEAP, JW, Peppzor, Sapec |
|           35 |     1061 | 2024-03-10 | Alliance          | L   | 0.913      | -            | -                | -                | -         |   -15.49 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           34 |     1084 | 2024-03-09 | Metizport         | W   | 0.905      | 0.143        | 0.136 (0.018)    | 1.000 (0.129)    | 0 (0.000) |    18.90 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           33 |     1088 | 2024-03-09 | Onliners5         | W   | 0.905      | -            | -                | -                | 0 (0.000) |     5.37 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           32 |     1151 | 2024-03-06 | 9INE              | W   | 0.887      | -            | -                | -                | 0 (0.000) |     3.33 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           31 |     1845 | 2024-02-02 | Metizport         | L   | 0.667      | -            | -                | -                | -         |    -8.02 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           30 |     1850 | 2024-02-02 | Sashi             | W   | 0.666      | 0.143        | 0.064 (0.006)    | 1.000 (0.095)    | 0 (0.000) |    10.93 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           29 |     2171 | 2024-01-19 | Entropiq          | L   | 0.574      | -            | -                | -                | -         |   -12.35 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           28 |     2230 | 2024-01-18 | PERA              | L   | 0.567      | -            | -                | -                | -         |   -11.21 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           27 |     2250 | 2024-01-18 | MOUZ              | L   | 0.566      | -            | -                | -                | -         |    -0.09 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           26 |     2316 | 2024-01-16 | The Witchers      | W   | 0.555      | -            | -                | -                | -         |     5.80 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           25 |     2340 | 2024-01-16 | Sashi             | W   | 0.554      | 0.143        | 0.064 (0.005)    | 1.000 (0.079)    | -         |     8.81 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           24 |     2353 | 2024-01-16 | PARIVISION        | W   | 0.553      | -            | -                | -                | -         |     4.27 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           23 |     2473 | 2024-01-12 | Insilio           | L   | 0.528      | -            | -                | -                | -         |   -11.91 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           22 |     2857 | 2023-12-07 | Apeks             | L   | 0.287      | -            | -                | -                | -         |    -1.12 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           21 |     2866 | 2023-12-07 | FORZE             | L   | 0.285      | -            | -                | -                | -         |    -3.84 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           20 |     2883 | 2023-12-06 | ENCE              | W   | 0.280      | 0.500        | 0.299 (0.042)    | 0.446 (0.062)    | -         |     8.15 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           19 |     2924 | 2023-12-05 | Sashi             | W   | 0.272      | 0.384        | 0.064 (0.007)    | 1.000 (0.105)    | -         |     4.42 | flusha, HEAP, JW, Sapec, SHiNE   |
|           18 |     2945 | 2023-12-03 | GODSENT           | W   | 0.260      | 0.427        | 0.036 (0.004)    | -                | 1 (0.260) |     3.16 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           17 |     2974 | 2023-12-02 | Alliance          | W   | 0.252      | 0.427        | -                | 0.855 (0.092)    | 1 (0.252) |     4.25 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           16 |     3033 | 2023-11-28 | Preasy            | L   | 0.226      | -            | -                | -                | -         |    -2.19 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           15 |     3140 | 2023-11-21 | 00NATION          | W   | 0.179      | -            | -                | -                | -         |     1.28 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           14 |     3267 | 2023-11-16 | Gaimin Gladiators | L   | 0.146      | -            | -                | -                | -         |    -0.35 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           13 |     3346 | 2023-11-13 | Guild Eagles      | L   | 0.126      | -            | -                | -                | -         |    -1.28 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           12 |     3400 | 2023-11-11 | FORZE             | W   | 0.114      | -            | -                | -                | -         |     1.19 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           11 |     3454 | 2023-11-08 | Betera            | W   | 0.094      | -            | -                | -                | -         |     0.91 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|           10 |     3467 | 2023-11-08 | TSM               | W   | 0.092      | -            | -                | -                | -         |     0.79 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            9 |     3478 | 2023-11-07 | Aurora            | W   | 0.087      | 0.500        | 0.763 (0.033)    | 1.000 (0.044)    | -         |     2.60 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            8 |     3492 | 2023-11-07 | BetBoom           | L   | 0.084      | -            | -                | -                | -         |    -0.31 | flusha, HEAP, JW, Peppzor, Sapec |
|            7 |     3511 | 2023-11-05 | FORZE             | W   | 0.074      | -            | -                | -                | -         |     0.77 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            6 |     3542 | 2023-11-04 | Sprout            | L   | 0.066      | -            | -                | -                | -         |    -1.47 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            5 |     3577 | 2023-11-02 | Permitta          | L   | 0.054      | -            | -                | -                | -         |    -1.38 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            4 |     3583 | 2023-11-02 | GODSENT           | L   | 0.052      | -            | -                | -                | -         |    -1.03 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            3 |     3629 | 2023-10-31 | The Chosen Few    | W   | 0.040      | -            | -                | -                | -         |     0.36 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            2 |     3754 | 2023-10-28 | The Prodigies     | W   | 0.019      | -            | -                | -                | -         |     0.07 | HEAP, JW, Peppzor, Sapec, SHiNE  |
|            1 |     3827 | 2023-10-26 | Gaimin Gladiators | W   | 0.005      | -            | -                | -                | -         |     0.14 | HEAP, JW, Peppzor, Sapec, SHiNE  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,832.34)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-07 |      1.000 | $2,350.00      | $2,350.00       |
| 2023-12-10 |      0.307 | $5,000.00      | $1,533.88       |
| 2023-12-03 |      0.260 | $22,864.00     | $5,948.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
