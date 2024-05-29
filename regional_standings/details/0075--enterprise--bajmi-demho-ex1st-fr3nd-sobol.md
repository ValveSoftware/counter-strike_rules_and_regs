### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [75](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  894.5<br />
<br />
Final Rank Value (894.5) = Starting Rank Value (874.1) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 874.1
- 400 + ( ( 0.244 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 874.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |        4 | 2024-05-29 | FLuffy Gangsters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.86 | bajmi, Demho, ex1st, fr3nd, Sobol          |
|           45 |       32 | 2024-05-28 | Sampi            | W   | 1.000      | 0.379        | 0.038 (0.014)    | 0.794 (0.301)    | 0 (0.000) |    15.85 | bajmi, Demho, ex1st, fr3nd, Sobol          |
|           44 |      113 | 2024-05-24 | Illuminar        | W   | 1.000      | 0.371        | -                | 0.155 (0.057)    | 0 (0.000) |     4.56 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           43 |      160 | 2024-05-22 | Entropiq         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.09 | bajmi, Demho, ex1st, fr3nd, Sobol          |
|           42 |      248 | 2024-05-20 | ECSTATIC         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.11 | bajmi, Demho, ex1st, fr3nd, Sobol          |
|           41 |      577 | 2024-05-10 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |    -2.43 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           40 |      644 | 2024-05-07 | Permitta         | W   | 1.000      | 0.435        | 0.025 (0.011)    | 1.000 (0.435)    | 0 (0.000) |    16.48 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           39 |      658 | 2024-05-06 | B8               | L   | 1.000      | -            | -                | -                | -         |    -8.85 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           38 |      686 | 2024-05-04 | MOUZ NXT         | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | 0 (0.000) |    22.43 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           37 |      745 | 2024-05-01 | ENCE Academy     | W   | 1.000      | 0.435        | -                | 0.321 (0.140)    | 0 (0.000) |    12.35 | bajmi, Demho, ex1st, fr3nd, kadziu         |
|           36 |      774 | 2024-04-30 | EYEBALLERS       | L   | 1.000      | -            | -                | -                | -         |   -14.43 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           35 |      811 | 2024-04-29 | Nexus            | L   | 0.997      | -            | -                | -                | -         |   -15.66 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           34 |      852 | 2024-04-27 | Permitta         | L   | 0.984      | -            | -                | -                | -         |   -13.21 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           33 |      871 | 2024-04-26 | Insilio          | L   | 0.978      | -            | -                | -                | -         |   -12.45 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           32 |      944 | 2024-04-23 | ALTERNATE aTTaX  | L   | 0.957      | -            | -                | -                | -         |   -16.31 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           31 |     1010 | 2024-04-20 | ALTERNATE aTTaX  | L   | 0.937      | -            | -                | -                | -         |   -15.87 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           30 |     1084 | 2024-04-18 | MOUZ NXT         | L   | 0.925      | -            | -                | -                | -         |    -9.56 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           29 |     1107 | 2024-04-18 | Nexus            | W   | 0.924      | 0.384        | -                | 0.518 (0.184)    | -         |    13.91 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           28 |     1132 | 2024-04-17 | ENCE             | L   | 0.918      | -            | -                | -                | -         |    -2.46 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           27 |     1264 | 2024-04-11 | Sashi            | L   | 0.877      | -            | -                | -                | -         |   -10.77 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           26 |     1308 | 2024-04-10 | AMKAL            | W   | 0.870      | 0.384        | 0.144 (0.048)    | 0.736 (0.246)    | -         |    21.53 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           25 |     1437 | 2024-04-06 | Sampi            | L   | 0.844      | -            | -                | -                | -         |   -11.72 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           24 |     1528 | 2024-04-03 | Permitta         | W   | 0.825      | 0.384        | 0.025 (0.008)    | 1.000 (0.317)    | -         |    13.00 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           23 |     1588 | 2024-04-01 | BLEED            | W   | 0.811      | 0.384        | 0.246 (0.077)    | 0.982 (0.306)    | -         |    21.79 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           22 |     2026 | 2024-03-09 | ECF              | L   | 0.658      | -            | -                | -                | -         |   -13.62 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           21 |     2036 | 2024-03-09 | Sampi            | L   | 0.658      | -            | -                | -                | -         |   -10.20 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           20 |     2106 | 2024-03-06 | INGLORIOUS       | L   | 0.639      | -            | -                | -                | -         |   -17.94 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           19 |     2112 | 2024-03-06 | Permitta         | L   | 0.637      | -            | -                | -                | -         |   -10.54 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           18 |     2223 | 2024-03-02 | Sampi            | W   | 0.610      | 0.371        | 0.038 (0.009)    | 0.794 (0.180)    | -         |     9.23 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           17 |     2536 | 2024-02-16 | SAW              | L   | 0.512      | -            | -                | -                | -         |    -1.48 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           16 |     2570 | 2024-02-15 | BetBoom          | L   | 0.504      | -            | -                | -                | -         |    -1.10 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           15 |     2597 | 2024-02-14 | Natus Vincere    | L   | 0.500      | -            | -                | -                | -         |    -0.08 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           14 |     2609 | 2024-02-14 | AMKAL            | W   | 0.498      | 0.143        | 0.144 (0.010)    | -                | 1 (0.498) |    12.97 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           13 |     3068 | 2024-01-20 | KOI              | W   | 0.332      | -            | -                | -                | -         |     5.96 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           12 |     3128 | 2024-01-19 | ex-sYnck         | W   | 0.325      | -            | -                | -                | -         |     1.66 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           11 |     3176 | 2024-01-18 | Aurora           | W   | 0.319      | 0.143        | 0.493 (0.022)    | -                | -         |     9.67 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|           10 |     3188 | 2024-01-18 | Astralis         | L   | 0.319      | -            | -                | -                | -         |    -0.08 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|            9 |     3506 | 2024-01-09 | KOI              | W   | 0.261      | -            | -                | -                | -         |     4.71 | adamS, dav1g, JUST, mopoz, stadodo         |
|            8 |     3509 | 2024-01-09 | fnatic           | W   | 0.260      | -            | -                | -                | -         |     6.39 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|            7 |     3515 | 2024-01-09 | Sashi            | W   | 0.260      | 0.143        | 0.157 (0.006)    | -                | -         |     5.82 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|            6 |     3530 | 2024-01-09 | Johnny Speeds    | W   | 0.259      | -            | -                | -                | -         |     4.78 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|            5 |     3540 | 2024-01-09 | Underrated       | W   | 0.259      | -            | -                | -                | -         |     0.54 | bajmi, Demho, ex1st, fr3nd, TOAO           |
|            4 |     3803 | 2023-12-07 | Lausanne SE      | L   | 0.039      | -            | -                | -                | -         |    -1.04 | bajmi, Demho, ex1st, fr3nd, Klameczka      |
|            3 |     3826 | 2023-12-06 | Nemiga           | W   | 0.033      | -            | -                | -                | -         |     0.91 | 1eeR, almazer, FL4MUS, khaN, riskyb0b      |
|            2 |     3858 | 2023-12-05 | Endpoint         | L   | 0.026      | -            | -                | -                | -         |    -0.41 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            1 |     3909 | 2023-12-02 | PGE Turow        | W   | 0.007      | -            | -                | -                | 1 (0.007) |     0.06 | bajmi, Demho, ex1st, fr3nd, Klameczka      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($632.80)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $500.00        | $500.00         |
| 2023-12-02 |      0.007 | $18,081.00     | $132.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
