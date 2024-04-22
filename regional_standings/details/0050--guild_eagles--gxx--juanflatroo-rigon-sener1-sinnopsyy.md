### Roster Details<br />
Team Name: Guild Eagles<br />
Roster: gxx-, juanflatroo, rigoN, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  961.0<br />
<br />
Final Rank Value (961.0) = Starting Rank Value (1020.1) + Head To Head Adjustments (-59.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1020.1
- 400 + ( ( 0.321 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1020.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |        2 | 2024-04-22 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -11.79 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           58 |       14 | 2024-04-22 | Sangal             | W   | 1.000      | 0.435        | -                | 0.685 (0.298)    | 0 (0.000) |    10.98 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           57 |      127 | 2024-04-18 | Sashi              | L   | 1.000      | -            | -                | -                | -         |   -16.74 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           56 |      136 | 2024-04-18 | KOI                | W   | 1.000      | 0.143        | 0.058 (0.008)    | 0.902 (0.129)    | 0 (0.000) |    18.83 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           55 |      146 | 2024-04-18 | FRAGMATIC          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.31 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           54 |      152 | 2024-04-18 | AMKAL              | L   | 1.000      | -            | -                | -                | -         |   -11.72 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           53 |      220 | 2024-04-16 | Sashi              | W   | 1.000      | 0.384        | 0.064 (0.025)    | 1.000 (0.384)    | 0 (0.000) |    15.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           52 |      414 | 2024-04-09 | Metizport          | W   | 1.000      | 0.384        | 0.136 (0.052)    | 1.000 (0.384)    | 0 (0.000) |    18.23 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           51 |      580 | 2024-04-03 | AMKAL              | L   | 1.000      | -            | -                | -                | -         |   -12.72 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           50 |      612 | 2024-04-02 | Insilio            | L   | 1.000      | -            | -                | -                | -         |   -21.16 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           49 |      624 | 2024-04-02 | AMKAL              | W   | 1.000      | 0.143        | 0.051 (0.007)    | 0.703 (0.100)    | 0 (0.000) |    17.34 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           48 |      630 | 2024-04-02 | 500                | L   | 1.000      | -            | -                | -                | -         |   -23.88 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           47 |      636 | 2024-04-01 | 500                | W   | 1.000      | 0.384        | -                | 0.622 (0.239)    | 0 (0.000) |     7.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           46 |      716 | 2024-03-27 | ALTERNATE aTTaX    | L   | 1.000      | -            | -                | -                | -         |   -21.49 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           45 |      785 | 2024-03-22 | VP.Prodigy         | L   | 0.991      | -            | -                | -                | -         |   -26.45 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           44 |     1325 | 2024-02-27 | Lotus              | L   | 0.834      | -            | -                | -                | -         |   -24.69 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           43 |     1334 | 2024-02-27 | Metizport          | W   | 0.833      | 0.143        | 0.136 (0.016)    | 1.000 (0.119)    | -         |    11.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           42 |     1415 | 2024-02-24 | GamerLegion        | L   | 0.811      | -            | -                | -                | -         |    -3.63 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           41 |     1422 | 2024-02-23 | BetBoom            | W   | 0.805      | 0.143        | 0.457 (0.053)    | 0.898 (0.103)    | 1 (0.805) |    18.65 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           40 |     1440 | 2024-02-22 | Gaimin Gladiators  | L   | 0.799      | -            | -                | -                | -         |    -4.92 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           39 |     1459 | 2024-02-21 | Preasy             | W   | 0.793      | 0.143        | 0.205 (0.023)    | -                | 1 (0.793) |    14.24 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           38 |     1493 | 2024-02-20 | Nexus              | W   | 0.786      | -            | -                | -                | 1 (0.786) |     7.17 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           37 |     1517 | 2024-02-19 | ENCE               | L   | 0.779      | -            | -                | -                | -         |    -2.74 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           36 |     1526 | 2024-02-19 | MOUZ               | L   | 0.778      | -            | -                | -                | -         |    -0.23 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           35 |     1746 | 2024-02-08 | Insilio            | L   | 0.707      | -            | -                | -                | -         |   -17.53 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           34 |     1749 | 2024-02-08 | RUBY               | L   | 0.706      | -            | -                | -                | -         |   -17.81 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           33 |     1992 | 2024-01-25 | PERA               | L   | 0.614      | -            | -                | -                | -         |   -14.25 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           32 |     2007 | 2024-01-24 | ALTERNATE aTTaX    | W   | 0.607      | -            | -                | -                | -         |     3.64 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           31 |     2028 | 2024-01-23 | Sampi              | W   | 0.600      | -            | -                | -                | -         |     7.21 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           30 |     2031 | 2024-01-23 | ALTERNATE aTTaX    | W   | 0.599      | -            | -                | -                | -         |     3.99 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           29 |     2052 | 2024-01-22 | PERA               | L   | 0.593      | -            | -                | -                | -         |   -14.47 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           28 |     2054 | 2024-01-22 | Viperio            | W   | 0.593      | -            | -                | -                | -         |     0.86 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           27 |     2059 | 2024-01-22 | Rebels             | W   | 0.593      | -            | -                | -                | -         |     6.19 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           26 |     2258 | 2024-01-18 | Sprout             | W   | 0.565      | -            | -                | -                | -         |     2.99 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           25 |     2275 | 2024-01-17 | Into the Breach    | W   | 0.561      | -            | -                | -                | -         |     4.12 | Devilwalk, juanflatroo, rigoN, SENER1, sinnopsyy |
|           24 |     2281 | 2024-01-17 | Capcarap           | W   | 0.561      | -            | -                | -                | -         |     0.48 | Devilwalk, juanflatroo, rigoN, SENER1, sinnopsyy |
|           23 |     2766 | 2023-12-12 | Aurora             | L   | 0.320      | -            | -                | -                | -         |    -1.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           22 |     2781 | 2023-12-11 | ex-Anonymo         | W   | 0.311      | -            | -                | -                | -         |     1.84 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           21 |     2862 | 2023-12-07 | Aurora             | L   | 0.286      | -            | -                | -                | -         |    -1.15 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           20 |     2877 | 2023-12-06 | 9 Pandas           | W   | 0.281      | 0.589        | 0.083 (0.014)    | 0.656 (0.108)    | -         |     5.40 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           19 |     2892 | 2023-12-06 | G2                 | W   | 0.279      | 0.589        | 0.773 (0.127)    | -                | -         |     8.72 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           18 |     2923 | 2023-12-05 | ex-Anonymo         | W   | 0.272      | -            | -                | -                | -         |     1.66 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           17 |     2938 | 2023-12-04 | ALTERNATE aTTaX    | W   | 0.265      | -            | -                | -                | -         |     1.86 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           16 |     2948 | 2023-12-03 | BIG                | L   | 0.260      | -            | -                | -                | -         |    -2.08 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           15 |     2995 | 2023-12-01 | Bad News Kangaroos | W   | 0.245      | -            | -                | -                | -         |     2.91 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           14 |     3006 | 2023-11-30 | Gaimin Gladiators  | W   | 0.239      | 0.384        | 0.156 (0.014)    | 1.000 (0.092)    | -         |     6.44 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           13 |     3046 | 2023-11-26 | Zero Tenacity      | W   | 0.214      | -            | -                | -                | -         |     1.53 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           12 |     3067 | 2023-11-25 | Zero Tenacity      | W   | 0.207      | -            | -                | -                | -         |     1.50 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           11 |     3107 | 2023-11-23 | The Suspect        | W   | 0.193      | -            | -                | -                | -         |     0.38 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           10 |     3124 | 2023-11-22 | GODSENT            | W   | 0.186      | -            | -                | -                | -         |     1.37 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            9 |     3201 | 2023-11-18 | Gucci Academy      | L   | 0.159      | -            | -                | -                | -         |    -4.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            8 |     3253 | 2023-11-16 | ALTERNATE aTTaX    | L   | 0.147      | -            | -                | -                | -         |    -3.57 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            7 |     3279 | 2023-11-16 | Space              | L   | 0.144      | -            | -                | -                | -         |    -3.82 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            6 |     3308 | 2023-11-15 | Preasy             | L   | 0.140      | -            | -                | -                | -         |    -2.23 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            5 |     3346 | 2023-11-13 | EYEBALLERS         | W   | 0.126      | -            | -                | -                | -         |     1.28 | HEAP, JW, Peppzor, Sapec, SHiNE                  |
|            4 |     3382 | 2023-11-12 | Legacy             | W   | 0.118      | -            | -                | -                | -         |     2.15 | b4rtiN, coldzera, dumau, latto, NEKIZ            |
|            3 |     3455 | 2023-11-08 | ARCRED             | L   | 0.094      | -            | -                | -                | -         |    -2.54 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            2 |     3504 | 2023-11-06 | Sprout             | W   | 0.078      | -            | -                | -                | -         |     0.40 | cej0t, raalz, sL1m3, Tauson, Zyphon              |
|            1 |     3831 | 2023-10-26 | 1WIN               | L   | 0.004      | -            | -                | -                | -         |    -0.11 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,716.81)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-13 |      0.327 | $1,000.00      | $326.76         |
| 2023-12-07 |      0.287 | $25,000.00     | $7,173.51       |
| 2023-11-26 |      0.214 | $4,634.00      | $990.02         |
| 2023-11-09 |      0.100 | $2,000.00      | $200.17         |
| 2023-10-27 |      0.013 | $2,000.00      | $26.34          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
