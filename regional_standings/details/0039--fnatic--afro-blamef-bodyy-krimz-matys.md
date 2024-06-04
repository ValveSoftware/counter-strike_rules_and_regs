### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1125.0<br />
<br />
Final Rank Value (1125.0) = Starting Rank Value (1104.2) + Head To Head Adjustments (20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.546[<sup>1</sup>](#table2)
- Bounty Collected: 0.455[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.363<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1104.2
- 400 + ( ( 0.363 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1104.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      298 | 2024-05-18 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -9.87 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      307 | 2024-05-18 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -11.35 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |      335 | 2024-05-17 | ENCE              | W   | 1.000      | 0.769        | 0.199 (0.153)    | 0.422 (0.324)    | 0 (0.000) |    21.28 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |      700 | 2024-05-03 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -18.90 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           43 |      727 | 2024-05-02 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -13.10 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           42 |      752 | 2024-05-01 | AMKAL             | W   | 1.000      | 0.384        | 0.144 (0.055)    | 0.736 (0.283)    | 0 (0.000) |    17.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           41 |      769 | 2024-05-01 | PARIVISION        | W   | 1.000      | 0.435        | -                | 0.475 (0.206)    | 0 (0.000) |     9.27 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           40 |      792 | 2024-04-30 | Nexus             | W   | 1.000      | 0.384        | -                | 0.518 (0.199)    | 0 (0.000) |     4.84 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           39 |      851 | 2024-04-27 | Virtus.pro        | L   | 0.984      | -            | -                | -                | -         |    -1.63 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           38 |      891 | 2024-04-25 | Eternal Fire      | L   | 0.973      | -            | -                | -                | -         |    -0.74 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           37 |      914 | 2024-04-24 | 3DMAX             | L   | 0.965      | -            | -                | -                | -         |   -13.61 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           36 |      938 | 2024-04-23 | Virtus.pro        | W   | 0.958      | 0.889        | 0.271 (0.231)    | 0.499 (0.425)    | 1 (0.958) |    28.72 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |     1092 | 2024-04-18 | KOI               | L   | 0.925      | -            | -                | -                | -         |   -18.87 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |     1347 | 2024-04-09 | Apeks             | L   | 0.866      | -            | -                | -                | -         |   -13.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     1376 | 2024-04-08 | Apeks             | W   | 0.860      | -            | -                | -                | 0 (0.000) |    13.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     1388 | 2024-04-08 | KOI               | W   | 0.858      | -            | -                | -                | 0 (0.000) |     8.74 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     1718 | 2024-03-23 | BetBoom           | L   | 0.751      | -            | -                | -                | -         |    -5.15 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     1751 | 2024-03-21 | 3DMAX             | W   | 0.739      | 0.143        | 0.105 (0.011)    | 0.669 (0.071)    | 0 (0.000) |    11.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     2107 | 2024-03-06 | BLEED             | W   | 0.639      | 0.500        | 0.246 (0.079)    | 0.982 (0.314)    | -         |    12.91 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     2139 | 2024-03-05 | Young Ninjas      | W   | 0.632      | 0.500        | 0.038 (0.012)    | -                | -         |     4.26 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2167 | 2024-03-04 | 3DMAX             | W   | 0.625      | 0.500        | 0.105 (0.033)    | 0.669 (0.209)    | -         |    11.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2183 | 2024-03-03 | Gaimin Gladiators | L   | 0.619      | -            | -                | -                | -         |    -6.46 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2191 | 2024-03-03 | GODSENT           | W   | 0.619      | -            | -                | -                | -         |     1.49 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2199 | 2024-03-03 | ex-Preasy         | W   | 0.618      | 0.500        | 0.051 (0.016)    | 0.470 (0.145)    | -         |     5.93 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2236 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.605      | 0.500        | 0.048 (0.015)    | 0.650 (0.196)    | -         |     4.97 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2252 | 2024-02-28 | ex-Preasy         | L   | 0.593      | -            | -                | -                | -         |   -13.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     2368 | 2024-02-23 | GamerLegion       | L   | 0.559      | -            | -                | -                | -         |    -6.80 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     2512 | 2024-02-17 | SAW               | L   | 0.518      | -            | -                | -                | -         |    -3.54 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     2548 | 2024-02-16 | KOI               | L   | 0.511      | -            | -                | -                | -         |   -10.80 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     2571 | 2024-02-15 | AMKAL             | W   | 0.504      | -            | -                | -                | 1 (0.504) |     9.57 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     2599 | 2024-02-14 | Virtus.pro        | L   | 0.499      | -            | -                | -                | -         |    -0.62 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     2608 | 2024-02-14 | BetBoom           | W   | 0.498      | 0.143        | 0.392 (0.028)    | -                | 1 (0.498) |    13.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     2679 | 2024-02-09 | 3DMAX             | L   | 0.466      | -            | -                | -                | -         |    -6.60 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     2684 | 2024-02-09 | ex-Sprout         | L   | 0.465      | -            | -                | -                | -         |   -13.90 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     2687 | 2024-02-09 | Endpoint          | W   | 0.464      | -            | -                | -                | -         |     3.12 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     2868 | 2024-01-30 | Insilio           | L   | 0.399      | -            | -                | -                | -         |    -9.91 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     2874 | 2024-01-30 | 500               | W   | 0.399      | -            | -                | -                | -         |     1.33 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3062 | 2024-01-20 | Gaimin Gladiators | W   | 0.333      | -            | -                | -                | -         |     6.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3069 | 2024-01-20 | Virtus.pro        | L   | 0.332      | -            | -                | -                | -         |    -0.39 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     3132 | 2024-01-19 | BIG               | W   | 0.325      | -            | -                | -                | -         |     8.57 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     3174 | 2024-01-18 | SINNERS           | W   | 0.319      | -            | -                | -                | -         |     3.42 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     3186 | 2024-01-18 | SAW               | L   | 0.319      | -            | -                | -                | -         |    -2.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     3505 | 2024-01-09 | Entropiq          | W   | 0.261      | -            | -                | -                | -         |     0.50 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     3509 | 2024-01-09 | Enterprise        | L   | 0.260      | -            | -                | -                | -         |    -6.39 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     3519 | 2024-01-09 | Gaimin Gladiators | W   | 0.260      | -            | -                | -                | -         |     5.31 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     3536 | 2024-01-09 | HAVU              | W   | 0.259      | -            | -                | -                | -         |     0.97 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     3554 | 2024-01-09 | PGE Turow         | W   | 0.258      | -            | -                | -                | -         |     0.70 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,447.65)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-02 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-03-06 |      0.639 | $50,000.00     | $31,947.65      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
