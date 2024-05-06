### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, Ciocardau, DGL, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  902.3<br />
<br />
Final Rank Value (902.3) = Starting Rank Value (895.8) + Head To Head Adjustments (6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.453[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.8
- 400 + ( ( 0.260 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 895.8


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
|           47 |       44 | 2024-05-04 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -2.24 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           46 |       59 | 2024-05-03 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -2.37 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           45 |       79 | 2024-05-02 | Ninjas in Pyjamas | W   | 1.000      | 0.889        | 0.236 (0.210)    | 0.346 (0.307)    | 1 (1.000) |    22.77 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           44 |      129 | 2024-04-30 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -0.76 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           43 |      339 | 2024-04-20 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -16.90 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           42 |      878 | 2024-04-03 | SAW               | L   | 0.979      | -            | -                | -                | -         |    -1.46 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           41 |      933 | 2024-04-01 | RUSH B            | W   | 0.966      | 0.500        | 0.006 (0.003)    | 0.340 (0.164)    | 0 (0.000) |    11.02 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           40 |     1211 | 2024-03-15 | Betera            | L   | 0.853      | -            | -                | -                | -         |   -19.52 | Aaron, DGL, Kamion, msN, Porya     |
|           39 |     1269 | 2024-03-13 | Monte             | L   | 0.841      | -            | -                | -                | -         |    -2.20 | Aaron, DGL, Kamion, msN, Porya     |
|           38 |     1648 | 2024-02-26 | System5           | L   | 0.734      | -            | -                | -                | -         |   -20.69 | Aaron, DGL, Kamion, msN, Porya     |
|           37 |     1786 | 2024-02-20 | ex-Preasy         | L   | 0.693      | -            | -                | -                | -         |    -7.47 | Aaron, DGL, Kamion, msN, Porya     |
|           36 |     1814 | 2024-02-19 | GamerLegion       | L   | 0.686      | -            | -                | -                | -         |    -0.97 | Aaron, DGL, Kamion, msN, Porya     |
|           35 |     1817 | 2024-02-19 | Cloud9            | L   | 0.685      | -            | -                | -                | -         |    -0.52 | Aaron, DGL, Kamion, msN, Porya     |
|           34 |     1887 | 2024-02-16 | SINNERS           | L   | 0.666      | -            | -                | -                | -         |    -8.54 | Aaron, DGL, Kamion, msN, Porya     |
|           33 |     2288 | 2024-01-25 | Guild Eagles      | W   | 0.521      | 0.143        | 0.035 (0.003)    | 0.648 (0.048)    | 0 (0.000) |    10.64 | Aaron, DGL, Kamion, msN, Porya     |
|           32 |     2301 | 2024-01-24 | Viperio           | W   | 0.514      | -            | -                | -                | 0 (0.000) |     1.58 | Aaron, DGL, Kamion, msN, Porya     |
|           31 |     2323 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.506      | 0.143        | 0.104 (0.008)    | 0.779 (0.056)    | 0 (0.000) |     8.76 | Aaron, DGL, Kamion, msN, Porya     |
|           30 |     2326 | 2024-01-23 | Rebels            | W   | 0.506      | 0.143        | 0.111 (0.008)    | 0.375 (0.027)    | 0 (0.000) |    11.79 | Aaron, DGL, Kamion, msN, Porya     |
|           29 |     2348 | 2024-01-22 | Guild Eagles      | W   | 0.500      | 0.143        | -                | 0.648 (0.046)    | 0 (0.000) |    10.70 | Aaron, DGL, Kamion, msN, Porya     |
|           28 |     2352 | 2024-01-22 | Sampi             | L   | 0.500      | -            | -                | -                | -         |    -6.07 | Aaron, DGL, Kamion, msN, Porya     |
|           27 |     2356 | 2024-01-22 | Viperio           | W   | 0.499      | -            | -                | -                | 0 (0.000) |     1.53 | Aaron, DGL, Kamion, msN, Porya     |
|           26 |     2380 | 2024-01-21 | ex-sYnck          | W   | 0.493      | -            | -                | -                | 0 (0.000) |     4.13 | Aaron, DGL, Kamion, msN, Porya     |
|           25 |     2385 | 2024-01-21 | Gaimin Gladiators | L   | 0.492      | -            | -                | -                | -         |    -1.45 | Aaron, DGL, Kamion, msN, Porya     |
|           24 |     2409 | 2024-01-20 | KOI               | L   | 0.487      | -            | -                | -                | -         |    -5.00 | Aaron, DGL, Kamion, msN, Porya     |
|           23 |     2419 | 2024-01-20 | Astralis          | L   | 0.486      | -            | -                | -                | -         |    -0.41 | Aaron, DGL, Kamion, msN, Porya     |
|           22 |     2480 | 2024-01-19 | IKLA              | W   | 0.479      | -            | -                | -                | 0 (0.000) |     2.67 | Aaron, DGL, Kamion, msN, Porya     |
|           21 |     2526 | 2024-01-18 | EYEBALLERS        | W   | 0.473      | 0.143        | 0.045 (0.003)    | 0.599 (0.040)    | -         |     8.05 | Aaron, DGL, Kamion, msN, Porya     |
|           20 |     2549 | 2024-01-18 | Eternal Fire      | L   | 0.472      | -            | -                | -                | -         |    -0.18 | Aaron, DGL, Kamion, msN, Porya     |
|           19 |     2800 | 2024-01-11 | IKLA              | L   | 0.427      | -            | -                | -                | -         |   -11.33 | Aaron, DGL, Kamion, msN, Porya     |
|           18 |     2806 | 2024-01-11 | SINNERS           | L   | 0.427      | -            | -                | -                | -         |    -4.29 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     2816 | 2024-01-11 | ex-Anonymo        | W   | 0.426      | -            | -                | -                | -         |     3.75 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     2820 | 2024-01-11 | Permitta          | W   | 0.426      | 0.143        | 0.053 (0.003)    | 0.979 (0.060)    | -         |     7.09 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     2841 | 2024-01-10 | esmagaB           | W   | 0.421      | -            | -                | -                | -         |     4.16 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     2896 | 2024-01-09 | Sashi             | L   | 0.413      | -            | -                | -                | -         |    -4.25 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     2935 | 2023-12-20 | Metizport         | W   | 0.280      | 0.333        | 0.183 (0.017)    | 1.000 (0.093)    | -         |     5.65 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     2938 | 2023-12-20 | Sprout            | W   | 0.278      | -            | -                | -                | -         |     2.46 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     2943 | 2023-12-19 | GUN5              | W   | 0.272      | -            | -                | -                | -         |     1.44 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     2944 | 2023-12-19 | Gucci Academy     | W   | 0.272      | -            | -                | -                | -         |     2.45 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     2949 | 2023-12-19 | Metizport         | L   | 0.271      | -            | -                | -                | -         |    -3.06 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3430 | 2023-11-21 | Endpoint          | W   | 0.087      | -            | -                | -                | -         |     1.37 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3437 | 2023-11-21 | GODSENT           | W   | 0.085      | -            | -                | -                | -         |     0.84 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3448 | 2023-11-20 | Sashi             | W   | 0.080      | 0.384        | 0.188 (0.006)    | 1.000 (0.031)    | -         |     1.80 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3526 | 2023-11-17 | Apeks             | L   | 0.059      | -            | -                | -                | -         |    -0.14 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     3550 | 2023-11-16 | FORZE             | L   | 0.054      | -            | -                | -                | -         |    -1.16 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     3561 | 2023-11-16 | KOI               | W   | 0.052      | -            | -                | -                | -         |     1.12 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     3591 | 2023-11-15 | Aurora            | W   | 0.047      | 0.143        | 0.973 (0.007)    | -                | -         |     1.45 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     3603 | 2023-11-15 | Sashi             | W   | 0.046      | -            | -                | -                | -         |     0.35 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,108.31)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2023-12-20 |      0.280 | $8,000.00      | $2,237.55       |
| 2023-11-21 |      0.087 | $10,000.00     | $870.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
