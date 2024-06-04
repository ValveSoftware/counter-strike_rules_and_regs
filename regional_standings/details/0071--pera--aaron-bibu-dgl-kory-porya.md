### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  913.3<br />
<br />
Final Rank Value (913.3) = Starting Rank Value (881.2) + Head To Head Adjustments (32.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.140[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.2
- 400 + ( ( 0.248 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 881.2


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
|           44 |      155 | 2024-05-22 | System5           | W   | 1.000      | 0.500        | -                | 0.104 (0.052)    | 0 (0.000) |     3.48 | Aaron, Bibu, DGL, kory, Porya      |
|           43 |      203 | 2024-05-21 | EYEBALLERS        | W   | 1.000      | 0.500        | 0.009 (0.004)    | 0.611 (0.305)    | 0 (0.000) |    12.87 | Aaron, Bibu, DGL, kory, Porya      |
|           42 |      242 | 2024-05-20 | Nexus             | W   | 1.000      | 0.379        | 0.014 (0.005)    | 0.518 (0.196)    | 0 (0.000) |    10.07 | Aaron, Bibu, DGL, kory, Porya      |
|           41 |      412 | 2024-05-15 | Apeks             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.84 | Aaron, Bibu, DGL, kory, Porya      |
|           40 |      471 | 2024-05-14 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.650 (0.325)    | 0 (0.000) |    18.62 | Aaron, Bibu, DGL, kory, Porya      |
|           39 |      695 | 2024-05-04 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -1.49 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           38 |      710 | 2024-05-03 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -2.20 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           37 |      730 | 2024-05-02 | Ninjas in Pyjamas | W   | 1.000      | 0.889        | 0.118 (0.105)    | 0.327 (0.291)    | 1 (1.000) |    22.88 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           36 |      780 | 2024-04-30 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -0.64 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           35 |      990 | 2024-04-20 | EYEBALLERS        | L   | 0.939      | -            | -                | -                | -         |   -15.57 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           34 |     1529 | 2024-04-03 | SAW               | L   | 0.825      | -            | -                | -                | -         |    -1.50 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           33 |     1584 | 2024-04-01 | RUSH B            | W   | 0.812      | 0.500        | -                | 0.242 (0.098)    | 0 (0.000) |     8.88 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           32 |     1862 | 2024-03-15 | Betera            | L   | 0.699      | -            | -                | -                | -         |   -15.78 | Aaron, DGL, Kamion, msN, Porya     |
|           31 |     1920 | 2024-03-13 | Monte             | L   | 0.686      | -            | -                | -                | -         |    -2.11 | Aaron, DGL, Kamion, msN, Porya     |
|           30 |     2299 | 2024-02-26 | System5           | L   | 0.580      | -            | -                | -                | -         |   -16.08 | Aaron, DGL, Kamion, msN, Porya     |
|           29 |     2437 | 2024-02-20 | ex-Preasy         | L   | 0.539      | -            | -                | -                | -         |    -7.36 | Aaron, DGL, Kamion, msN, Porya     |
|           28 |     2465 | 2024-02-19 | GamerLegion       | L   | 0.532      | -            | -                | -                | -         |    -2.94 | Aaron, DGL, Kamion, msN, Porya     |
|           27 |     2468 | 2024-02-19 | Cloud9            | L   | 0.531      | -            | -                | -                | -         |    -0.89 | Aaron, DGL, Kamion, msN, Porya     |
|           26 |     2538 | 2024-02-16 | SINNERS           | L   | 0.512      | -            | -                | -                | -         |    -6.97 | Aaron, DGL, Kamion, msN, Porya     |
|           25 |     2939 | 2024-01-25 | ex-Guild Eagles   | W   | 0.366      | 0.143        | 0.014 (0.001)    | 0.552 (0.029)    | 0 (0.000) |     6.95 | Aaron, DGL, Kamion, msN, Porya     |
|           24 |     2952 | 2024-01-24 | Viperio           | W   | 0.360      | -            | -                | -                | 0 (0.000) |     1.25 | Aaron, DGL, Kamion, msN, Porya     |
|           23 |     2974 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.352      | 0.143        | 0.048 (0.002)    | 0.650 (0.033)    | 0 (0.000) |     6.26 | Aaron, DGL, Kamion, msN, Porya     |
|           22 |     2977 | 2024-01-23 | Rebels            | W   | 0.352      | 0.143        | 0.059 (0.003)    | -                | -         |     8.13 | Aaron, DGL, Kamion, msN, Porya     |
|           21 |     2999 | 2024-01-22 | ex-Guild Eagles   | W   | 0.346      | 0.143        | 0.014 (0.001)    | -                | -         |     6.77 | Aaron, DGL, Kamion, msN, Porya     |
|           20 |     3003 | 2024-01-22 | Sampi             | L   | 0.345      | -            | -                | -                | -         |    -4.93 | Aaron, DGL, Kamion, msN, Porya     |
|           19 |     3007 | 2024-01-22 | Viperio           | W   | 0.345      | -            | -                | -                | -         |     1.20 | Aaron, DGL, Kamion, msN, Porya     |
|           18 |     3031 | 2024-01-21 | ex-sYnck          | W   | 0.339      | -            | -                | -                | -         |     1.95 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     3036 | 2024-01-21 | Gaimin Gladiators | L   | 0.338      | -            | -                | -                | -         |    -1.48 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     3060 | 2024-01-20 | KOI               | L   | 0.333      | -            | -                | -                | -         |    -4.26 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     3070 | 2024-01-20 | Astralis          | L   | 0.332      | -            | -                | -                | -         |    -0.09 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     3131 | 2024-01-19 | IKLA              | W   | 0.325      | -            | -                | -                | -         |     1.62 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     3177 | 2024-01-18 | EYEBALLERS        | W   | 0.319      | -            | -                | -                | -         |     5.02 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     3200 | 2024-01-18 | Eternal Fire      | L   | 0.318      | -            | -                | -                | -         |    -0.05 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     3451 | 2024-01-11 | IKLA              | L   | 0.273      | -            | -                | -                | -         |    -7.36 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     3457 | 2024-01-11 | SINNERS           | L   | 0.273      | -            | -                | -                | -         |    -3.20 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     3467 | 2024-01-11 | ex-Anonymo        | W   | 0.272      | -            | -                | -                | -         |     1.91 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3471 | 2024-01-11 | Permitta          | W   | 0.272      | 0.143        | 0.025 (0.001)    | 1.000 (0.039)    | -         |     4.38 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3492 | 2024-01-10 | esmagaB           | W   | 0.266      | -            | -                | -                | -         |     2.58 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3547 | 2024-01-09 | Sashi             | L   | 0.259      | -            | -                | -                | -         |    -2.45 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3586 | 2023-12-20 | Metizport         | W   | 0.126      | 0.333        | 0.088 (0.004)    | 0.860 (0.036)    | -         |     2.45 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     3589 | 2023-12-20 | Sprout            | W   | 0.124      | -            | -                | -                | -         |     0.72 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     3594 | 2023-12-19 | GUN5              | W   | 0.118      | -            | -                | -                | -         |     0.34 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     3595 | 2023-12-19 | Gucci Academy     | W   | 0.118      | -            | -                | -                | -         |     0.67 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     3600 | 2023-12-19 | Metizport         | L   | 0.117      | -            | -                | -                | -         |    -1.41 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,004.81)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2023-12-20 |      0.126 | $8,000.00      | $1,004.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
