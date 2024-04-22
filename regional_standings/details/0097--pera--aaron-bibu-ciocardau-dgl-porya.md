### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, Ciocardau, DGL, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  811.0<br />
<br />
Final Rank Value (811.0) = Starting Rank Value (768.2) + Head To Head Adjustments (42.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.2
- 400 + ( ( 0.191 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 768.2


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
|           43 |       43 | 2024-04-20 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -15.32 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           42 |      582 | 2024-04-03 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -2.07 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           41 |      637 | 2024-04-01 | RUSH B            | W   | 1.000      | 0.500        | 0.007 (0.004)    | 0.307 (0.153)    | 0 (0.000) |    14.52 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           40 |      915 | 2024-03-15 | Betera            | L   | 0.947      | -            | -                | -                | -         |   -18.51 | Aaron, DGL, Kamion, msN, Porya     |
|           39 |      973 | 2024-03-13 | Monte             | L   | 0.934      | -            | -                | -                | -         |    -3.52 | Aaron, DGL, Kamion, msN, Porya     |
|           38 |     1352 | 2024-02-26 | System5           | L   | 0.827      | -            | -                | -                | -         |   -22.16 | Aaron, DGL, Kamion, msN, Porya     |
|           37 |     1490 | 2024-02-20 | Preasy            | L   | 0.787      | -            | -                | -                | -         |    -6.03 | Aaron, DGL, Kamion, msN, Porya     |
|           36 |     1518 | 2024-02-19 | GamerLegion       | L   | 0.779      | -            | -                | -                | -         |    -1.49 | Aaron, DGL, Kamion, msN, Porya     |
|           35 |     1521 | 2024-02-19 | Cloud9            | L   | 0.778      | -            | -                | -                | -         |    -0.34 | Aaron, DGL, Kamion, msN, Porya     |
|           34 |     1591 | 2024-02-16 | SINNERS           | L   | 0.759      | -            | -                | -                | -         |    -7.58 | Aaron, DGL, Kamion, msN, Porya     |
|           33 |     1992 | 2024-01-25 | Guild Eagles      | W   | 0.614      | 0.143        | 0.046 (0.004)    | 0.727 (0.064)    | 0 (0.000) |    14.25 | Aaron, DGL, Kamion, msN, Porya     |
|           32 |     2005 | 2024-01-24 | Viperio           | W   | 0.607      | -            | -                | -                | 0 (0.000) |     2.76 | Aaron, DGL, Kamion, msN, Porya     |
|           31 |     2027 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.600      | 0.143        | -                | 0.327 (0.028)    | 0 (0.000) |     8.05 | Aaron, DGL, Kamion, msN, Porya     |
|           30 |     2030 | 2024-01-23 | Rebels            | W   | 0.599      | 0.143        | 0.050 (0.004)    | 0.360 (0.031)    | 0 (0.000) |    11.29 | Aaron, DGL, Kamion, msN, Porya     |
|           29 |     2052 | 2024-01-22 | Guild Eagles      | W   | 0.593      | 0.143        | 0.046 (0.004)    | 0.727 (0.062)    | 0 (0.000) |    14.47 | Aaron, DGL, Kamion, msN, Porya     |
|           28 |     2056 | 2024-01-22 | Sampi             | L   | 0.593      | -            | -                | -                | -         |    -5.91 | Aaron, DGL, Kamion, msN, Porya     |
|           27 |     2060 | 2024-01-22 | Viperio           | W   | 0.592      | -            | -                | -                | 0 (0.000) |     2.73 | Aaron, DGL, Kamion, msN, Porya     |
|           26 |     2084 | 2024-01-21 | ex-sYnck          | W   | 0.586      | -            | -                | -                | 0 (0.000) |     7.66 | Aaron, DGL, Kamion, msN, Porya     |
|           25 |     2089 | 2024-01-21 | Gaimin Gladiators | L   | 0.585      | -            | -                | -                | -         |    -1.28 | Aaron, DGL, Kamion, msN, Porya     |
|           24 |     2113 | 2024-01-20 | KOI               | L   | 0.580      | -            | -                | -                | -         |    -4.03 | Aaron, DGL, Kamion, msN, Porya     |
|           23 |     2123 | 2024-01-20 | Astralis          | L   | 0.579      | -            | -                | -                | -         |    -0.76 | Aaron, DGL, Kamion, msN, Porya     |
|           22 |     2184 | 2024-01-19 | IKLA              | W   | 0.572      | -            | -                | -                | 0 (0.000) |     5.39 | Aaron, DGL, Kamion, msN, Porya     |
|           21 |     2230 | 2024-01-18 | EYEBALLERS        | W   | 0.567      | 0.143        | 0.052 (0.004)    | 0.406 (0.033)    | 0 (0.000) |    11.21 | Aaron, DGL, Kamion, msN, Porya     |
|           20 |     2253 | 2024-01-18 | Eternal Fire      | L   | 0.566      | -            | -                | -                | -         |    -0.20 | Aaron, DGL, Kamion, msN, Porya     |
|           19 |     2504 | 2024-01-11 | IKLA              | L   | 0.521      | -            | -                | -                | -         |   -11.89 | Aaron, DGL, Kamion, msN, Porya     |
|           18 |     2510 | 2024-01-11 | SINNERS           | L   | 0.520      | -            | -                | -                | -         |    -3.37 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     2520 | 2024-01-11 | ex-Anonymo        | W   | 0.520      | -            | -                | -                | -         |     7.26 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     2524 | 2024-01-11 | Permitta          | W   | 0.519      | 0.143        | 0.031 (0.002)    | 0.970 (0.072)    | -         |     9.10 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     2545 | 2024-01-10 | esmagaB           | W   | 0.514      | -            | -                | -                | -         |     7.58 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     2600 | 2024-01-09 | Sashi             | L   | 0.506      | -            | -                | -                | -         |    -6.11 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     2639 | 2023-12-20 | Metizport         | W   | 0.373      | 0.333        | 0.136 (0.017)    | 1.000 (0.124)    | -         |     8.52 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     2642 | 2023-12-20 | Sprout            | W   | 0.372      | -            | -                | -                | -         |     5.36 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     2647 | 2023-12-19 | GUN5              | W   | 0.366      | -            | -                | -                | -         |     3.63 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     2648 | 2023-12-19 | Gucci Academy     | W   | 0.365      | -            | -                | -                | -         |     5.55 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     2653 | 2023-12-19 | Metizport         | L   | 0.364      | -            | -                | -                | -         |    -3.04 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3134 | 2023-11-21 | Endpoint          | W   | 0.180      | 0.384        | -                | 0.488 (0.034)    | -         |     3.15 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3141 | 2023-11-21 | GODSENT           | W   | 0.179      | 0.384        | 0.036 (0.002)    | -                | -         |     2.97 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3152 | 2023-11-20 | Sashi             | W   | 0.173      | 0.384        | 0.064 (0.004)    | 1.000 (0.066)    | -         |     3.74 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3230 | 2023-11-17 | Apeks             | L   | 0.153      | -            | -                | -                | -         |    -0.32 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     3254 | 2023-11-16 | FORZE             | L   | 0.147      | -            | -                | -                | -         |    -2.37 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     3265 | 2023-11-16 | KOI               | W   | 0.146      | -            | -                | -                | -         |     3.75 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     3295 | 2023-11-15 | Aurora            | W   | 0.140      | 0.143        | 0.763 (0.015)    | -                | -         |     4.29 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     3307 | 2023-11-15 | Sashi             | W   | 0.140      | -            | -                | -                | -         |     1.89 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,787.82)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-20 |      0.373 | $8,000.00      | $2,984.00       |
| 2023-11-21 |      0.180 | $10,000.00     | $1,803.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
