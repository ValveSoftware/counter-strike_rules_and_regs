### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1172.2<br />
<br />
Final Rank Value (1172.2) = Starting Rank Value (1224.3) + Head To Head Adjustments (-52.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.505[<sup>2</sup>](#table1)
- Opponent Network: 0.393[<sup>2</sup>](#table1)
- LAN Wins: 0.234[<sup>2</sup>](#table1)

The average of these factors is 0.413<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1224.3
- 400 + ( ( 0.413 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1224.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |        2 | 2024-06-10 | EYEBALLERS        | W   | 1.000      | 0.450        | -                | 0.722 (0.325)    | 0 (0.000) |     5.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |        9 | 2024-06-10 | SAW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    20.05 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |       16 | 2024-06-10 | PARIVISION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |       20 | 2024-06-10 | 9 Pandas          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |       43 | 2024-06-09 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -29.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |       58 | 2024-06-09 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -14.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |       66 | 2024-06-09 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -22.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |       71 | 2024-06-09 | Aurora            | W   | 1.000      | 0.143        | 0.513 (0.073)    | -                | 0 (0.000) |    22.68 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |       80 | 2024-06-09 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      115 | 2024-06-08 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -29.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |      174 | 2024-06-07 | Gaimin Gladiators | W   | 1.000      | 0.450        | -                | 0.749 (0.337)    | 0 (0.000) |    13.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |      210 | 2024-06-06 | Nexus             | W   | 1.000      | -            | -                | -                | -         |     2.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |      223 | 2024-06-06 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -16.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |      292 | 2024-06-05 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -22.54 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |      338 | 2024-06-04 | Aurora            | W   | 1.000      | 0.500        | 0.513 (0.257)    | 0.918 (0.459)    | -         |    24.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      423 | 2024-06-01 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -25.75 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      473 | 2024-05-30 | Sampi             | W   | 1.000      | 0.435        | -                | 0.883 (0.384)    | -         |     5.68 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      600 | 2024-05-25 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -21.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      625 | 2024-05-23 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.154 (0.067)    | 1.000 (0.435)    | -         |    11.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |      837 | 2024-05-17 | B8                | L   | 1.000      | -            | -                | -                | -         |   -17.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |      923 | 2024-05-15 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -23.04 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1120 | 2024-05-08 | G2                | L   | 0.979      | -            | -                | -                | -         |    -1.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1261 | 2024-05-01 | Sashi             | L   | 0.932      | -            | -                | -                | -         |   -15.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1287 | 2024-04-30 | BetBoom           | W   | 0.925      | 0.384        | 0.427 (0.152)    | 0.917 (0.326)    | -         |    23.68 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1294 | 2024-04-29 | PARIVISION        | W   | 0.920      | -            | -                | -                | -         |     6.99 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1342 | 2024-04-27 | Astralis          | L   | 0.906      | -            | -                | -                | -         |    -0.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1414 | 2024-04-24 | fnatic            | W   | 0.886      | 0.889        | 0.198 (0.156)    | 0.650 (0.512)    | 1 (0.886) |    16.76 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1439 | 2024-04-23 | SAW               | W   | 0.879      | 0.889        | 0.113 (0.088)    | 0.660 (0.516)    | 1 (0.879) |    17.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1449 | 2024-04-22 | M1X KS            | W   | 0.873      | -            | -                | -                | -         |     9.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1634 | 2024-04-17 | BLEED             | W   | 0.839      | 0.384        | 0.349 (0.112)    | 1.000 (0.322)    | -         |    18.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     1702 | 2024-04-14 | BetBoom           | L   | 0.819      | -            | -                | -                | -         |    -3.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     1717 | 2024-04-13 | ex-Preasy         | W   | 0.812      | -            | -                | -                | -         |     7.22 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     1759 | 2024-04-11 | Passion UA        | L   | 0.799      | -            | -                | -                | -         |   -19.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     1793 | 2024-04-10 | SINNERS           | L   | 0.794      | -            | -                | -                | -         |   -14.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     1842 | 2024-04-09 | SAW               | W   | 0.787      | 0.500        | 0.113 (0.044)    | -                | -         |    17.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     1919 | 2024-04-07 | Young Ninjas      | W   | 0.772      | -            | -                | -                | -         |     3.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     1992 | 2024-04-04 | Space             | W   | 0.752      | -            | -                | -                | -         |     3.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2021 | 2024-04-03 | GUN5              | W   | 0.747      | -            | -                | -                | -         |     4.68 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2072 | 2024-04-02 | Permitta          | W   | 0.739      | -            | -                | -                | -         |     5.60 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2128 | 2024-03-28 | Apeks             | W   | 0.706      | -            | -                | -                | -         |     9.83 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2251 | 2024-03-21 | fnatic            | L   | 0.659      | -            | -                | -                | -         |    -6.32 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           23 |     2293 | 2024-03-19 | GUN5              | W   | 0.646      | -            | -                | -                | -         |     0.26 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           22 |     2364 | 2024-03-15 | B8                | W   | 0.620      | 0.500        | 0.160 (0.049)    | 1.000 (0.310)    | -         |     8.52 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           21 |     2432 | 2024-03-13 | PARIVISION        | L   | 0.606      | -            | -                | -                | -         |   -13.80 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           20 |     2645 | 2024-03-05 | FORZE             | L   | 0.553      | -            | -                | -                | -         |   -12.23 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           19 |     2667 | 2024-03-04 | fnatic            | L   | 0.546      | -            | -                | -                | -         |    -6.13 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           18 |     2705 | 2024-03-02 | Monte             | W   | 0.534      | 0.500        | 0.179 (0.048)    | -                | -         |    11.13 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           17 |     2742 | 2024-02-29 | Gaimin Gladiators | W   | 0.520      | -            | -                | -                | -         |     9.21 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           16 |     3039 | 2024-02-16 | 9 Pandas          | L   | 0.433      | -            | -                | -                | -         |    -7.15 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           15 |     3064 | 2024-02-15 | Into the Breach   | W   | 0.426      | -            | -                | -                | 1 (0.426) |     0.99 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           14 |     3101 | 2024-02-14 | KOI               | L   | 0.420      | -            | -                | -                | -         |    -9.45 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           13 |     3107 | 2024-02-14 | Falcons           | L   | 0.419      | -            | -                | -                | -         |    -2.38 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     3156 | 2024-02-11 | Apeks             | L   | 0.400      | -            | -                | -                | -         |    -7.18 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     3179 | 2024-02-09 | fnatic            | W   | 0.386      | -            | -                | -                | -         |     8.46 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3182 | 2024-02-09 | Endpoint          | W   | 0.386      | -            | -                | -                | -         |     2.08 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3185 | 2024-02-09 | ex-Sprout         | L   | 0.385      | -            | -                | -                | -         |   -11.77 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     3372 | 2024-01-30 | Permitta          | L   | 0.320      | -            | -                | -                | -         |    -8.35 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     3526 | 2024-01-21 | ex-sYnck          | W   | 0.260      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     3534 | 2024-01-21 | ex-Preasy         | L   | 0.259      | -            | -                | -                | -         |    -6.95 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     3559 | 2024-01-20 | 9 Pandas          | L   | 0.254      | -            | -                | -                | -         |    -4.70 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     3579 | 2024-01-20 | Zero Tenacity     | W   | 0.252      | -            | -                | -                | -         |     2.64 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     3633 | 2024-01-19 | OG                | L   | 0.246      | -            | -                | -                | -         |    -4.19 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     3678 | 2024-01-18 | Cloud9            | L   | 0.240      | -            | -                | -                | -         |    -2.38 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     3691 | 2024-01-18 | JANO              | W   | 0.239      | -            | -                | -                | -         |     0.13 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,185.76)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-02 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-05-02 |      0.940 | $1,500.00      | $1,409.68       |
| 2024-04-14 |      0.819 | $4,000.00      | $3,276.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
