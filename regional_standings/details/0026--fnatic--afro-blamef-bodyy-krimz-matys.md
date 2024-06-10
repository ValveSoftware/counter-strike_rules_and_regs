### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1318.1<br />
<br />
Final Rank Value (1318.1) = Starting Rank Value (1360.3) + Head To Head Adjustments (-42.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.587[<sup>1</sup>](#table2)
- Bounty Collected: 0.561[<sup>2</sup>](#table1)
- Opponent Network: 0.276[<sup>2</sup>](#table1)
- LAN Wins: 0.503[<sup>2</sup>](#table1)

The average of these factors is 0.482<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1360.3
- 400 + ( ( 0.482 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1360.3


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
|           56 |      162 | 2024-06-07 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -8.19 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           55 |      227 | 2024-06-06 | BIG               | W   | 1.000      | 0.715        | 0.228 (0.163)    | 0.459 (0.328)    | 1 (1.000) |    20.23 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           54 |      247 | 2024-06-06 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -8.70 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      265 | 2024-06-06 | Complexity        | W   | 1.000      | 0.715        | 0.271 (0.194)    | 0.351 (0.251)    | 1 (1.000) |    28.09 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      295 | 2024-06-05 | Eternal Fire      | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.560 (0.401)    | 1 (1.000) |    29.69 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      312 | 2024-06-05 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -8.11 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      396 | 2024-06-02 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -25.92 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      465 | 2024-05-31 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.52 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      467 | 2024-05-31 | Sangal            | W   | 1.000      | 0.143        | 0.214 (0.031)    | -                | 0 (0.000) |     9.82 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      798 | 2024-05-18 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -12.58 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      807 | 2024-05-18 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -15.39 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |      835 | 2024-05-17 | ENCE              | W   | 1.000      | 0.769        | 0.205 (0.158)    | 0.407 (0.313)    | 0 (0.000) |    18.13 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |     1200 | 2024-05-03 | 9 Pandas          | L   | 0.947      | -            | -                | -                | -         |   -22.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           43 |     1227 | 2024-05-02 | Sashi             | L   | 0.940      | -            | -                | -                | -         |   -16.16 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           42 |     1252 | 2024-05-01 | AMKAL             | W   | 0.933      | 0.384        | 0.143 (0.051)    | 0.711 (0.255)    | 0 (0.000) |    11.26 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           41 |     1269 | 2024-05-01 | PARIVISION        | W   | 0.931      | 0.435        | -                | 0.527 (0.213)    | -         |     5.47 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           40 |     1292 | 2024-04-30 | Nexus             | W   | 0.924      | 0.384        | -                | 0.469 (0.166)    | -         |     2.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           39 |     1351 | 2024-04-27 | Virtus.pro        | L   | 0.905      | -            | -                | -                | -         |    -3.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           38 |     1391 | 2024-04-25 | Eternal Fire      | L   | 0.894      | -            | -                | -                | -         |    -1.43 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           37 |     1414 | 2024-04-24 | 3DMAX             | L   | 0.886      | -            | -                | -                | -         |   -16.76 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           36 |     1438 | 2024-04-23 | Virtus.pro        | W   | 0.879      | 0.889        | 0.229 (0.179)    | 0.418 (0.327)    | 1 (0.879) |    24.88 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |     1592 | 2024-04-18 | KOI               | L   | 0.846      | -            | -                | -                | -         |   -20.94 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |     1847 | 2024-04-09 | Apeks             | L   | 0.787      | -            | -                | -                | -         |   -18.61 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     1876 | 2024-04-08 | Apeks             | W   | 0.780      | -            | -                | -                | -         |     5.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     1888 | 2024-04-08 | KOI               | W   | 0.779      | -            | -                | -                | -         |     4.38 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     2218 | 2024-03-23 | BetBoom           | L   | 0.672      | -            | -                | -                | -         |    -3.68 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     2251 | 2024-03-21 | 3DMAX             | W   | 0.659      | -            | -                | -                | -         |     6.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     2607 | 2024-03-06 | BLEED             | W   | 0.560      | 0.500        | 0.349 (0.098)    | 1.000 (0.280)    | -         |    10.54 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     2639 | 2024-03-05 | Young Ninjas      | W   | 0.553      | -            | -                | -                | -         |     1.38 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2667 | 2024-03-04 | 3DMAX             | W   | 0.546      | 0.500        | 0.122 (0.033)    | 0.821 (0.224)    | -         |     6.13 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2683 | 2024-03-03 | Gaimin Gladiators | L   | 0.540      | -            | -                | -                | -         |   -10.11 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2691 | 2024-03-03 | GODSENT           | W   | 0.540      | -            | -                | -                | -         |     0.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2699 | 2024-03-03 | ex-Preasy         | W   | 0.539      | -            | -                | -                | -         |     1.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2736 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.525      | -            | -                | -                | -         |     2.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2752 | 2024-02-28 | ex-Preasy         | L   | 0.514      | -            | -                | -                | -         |   -14.45 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     2868 | 2024-02-23 | GamerLegion       | L   | 0.479      | -            | -                | -                | -         |   -11.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     3012 | 2024-02-17 | SAW               | L   | 0.439      | -            | -                | -                | -         |    -7.06 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     3048 | 2024-02-16 | KOI               | L   | 0.432      | -            | -                | -                | -         |   -11.47 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     3071 | 2024-02-15 | AMKAL             | W   | 0.425      | -            | -                | -                | 1 (0.425) |     4.09 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     3099 | 2024-02-14 | Virtus.pro        | L   | 0.420      | -            | -                | -                | -         |    -1.62 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3108 | 2024-02-14 | BetBoom           | W   | 0.419      | 0.143        | 0.427 (0.026)    | -                | 1 (0.419) |    11.29 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3179 | 2024-02-09 | 3DMAX             | L   | 0.386      | -            | -                | -                | -         |    -8.46 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3184 | 2024-02-09 | ex-Sprout         | L   | 0.386      | -            | -                | -                | -         |   -11.98 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3187 | 2024-02-09 | Endpoint          | W   | 0.385      | -            | -                | -                | -         |     0.93 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3368 | 2024-01-30 | Insilio           | L   | 0.320      | -            | -                | -                | -         |    -9.31 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3374 | 2024-01-30 | 500               | W   | 0.320      | -            | -                | -                | -         |     0.31 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3562 | 2024-01-20 | Gaimin Gladiators | W   | 0.254      | -            | -                | -                | -         |     2.52 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3569 | 2024-01-20 | Virtus.pro        | L   | 0.253      | -            | -                | -                | -         |    -0.99 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     3632 | 2024-01-19 | BIG               | W   | 0.246      | -            | -                | -                | -         |     4.94 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     3674 | 2024-01-18 | SINNERS           | W   | 0.240      | -            | -                | -                | -         |     1.60 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     3686 | 2024-01-18 | SAW               | L   | 0.239      | -            | -                | -                | -         |    -4.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     4005 | 2024-01-09 | Entropiq          | W   | 0.182      | -            | -                | -                | -         |     0.09 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     4009 | 2024-01-09 | Enterprise        | L   | 0.181      | -            | -                | -                | -         |    -5.16 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     4019 | 2024-01-09 | Gaimin Gladiators | W   | 0.180      | -            | -                | -                | -         |     1.78 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4036 | 2024-01-09 | HAVU              | W   | 0.180      | -            | -                | -                | -         |     0.19 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4054 | 2024-01-09 | PGE Turow         | W   | 0.179      | -            | -                | -                | -         |     0.13 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,184.07)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-05-04 |      0.953 | $2,000.00      | $1,905.79       |
| 2024-05-02 |      0.940 | $3,500.00      | $3,289.25       |
| 2024-03-06 |      0.560 | $50,000.00     | $27,989.04      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
