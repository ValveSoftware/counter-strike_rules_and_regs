### Roster Details<br />
Team Name: Sampi<br />
Roster: fino, manguss, sAvana1, The eLiVe, ZEDKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  945.1<br />
<br />
Final Rank Value (945.1) = Starting Rank Value (991.8) + Head To Head Adjustments (-46.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.482[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.292[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 991.8
- 400 + ( ( 0.306 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 991.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       32 | 2024-04-21 | ALTERNATE aTTaX   | W   | 1.000      | 0.371        | -                | 0.639 (0.237)    | 0 (0.000) |    10.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           55 |      106 | 2024-04-19 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.35 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           54 |      165 | 2024-04-18 | Permitta          | W   | 1.000      | 0.371        | 0.031 (0.011)    | 0.970 (0.359)    | 0 (0.000) |    15.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           53 |      186 | 2024-04-17 | NOM               | L   | 1.000      | -            | -                | -                | -         |   -28.05 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           52 |      225 | 2024-04-16 | SAW               | W   | 1.000      | 0.384        | 0.173 (0.066)    | 0.824 (0.317)    | 0 (0.000) |    27.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           51 |      228 | 2024-04-16 | Secret            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.10 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           50 |      240 | 2024-04-15 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -17.84 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           49 |      274 | 2024-04-13 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -6.35 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           48 |      318 | 2024-04-11 | PGE Turow         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.38 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           47 |      490 | 2024-04-06 | Enterprise        | W   | 1.000      | 0.358        | 0.026 (0.009)    | -                | 0 (0.000) |    15.53 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           46 |      592 | 2024-04-03 | Ninjas in Pyjamas | W   | 1.000      | 0.384        | 0.196 (0.075)    | -                | -         |    17.48 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           45 |      720 | 2024-03-27 | B8                | L   | 1.000      | -            | -                | -                | -         |   -17.02 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           44 |      861 | 2024-03-18 | ex-Preasy         | L   | 0.965      | -            | -                | -                | -         |   -18.73 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           43 |      892 | 2024-03-17 | Passion UA        | W   | 0.958      | 0.371        | 0.031 (0.011)    | 0.625 (0.222)    | -         |    12.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           42 |      900 | 2024-03-16 | SINNERS           | L   | 0.952      | -            | -                | -                | -         |   -13.44 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           41 |      903 | 2024-03-16 | MOUZ NXT          | W   | 0.951      | 0.371        | 0.054 (0.019)    | 0.970 (0.342)    | -         |    14.71 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           40 |      918 | 2024-03-15 | ECLOT             | L   | 0.946      | -            | -                | -                | -         |   -13.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           39 |      922 | 2024-03-15 | Permitta          | W   | 0.945      | 0.371        | 0.031 (0.011)    | 0.970 (0.339)    | -         |    15.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           38 |      954 | 2024-03-14 | Passion UA        | L   | 0.938      | -            | -                | -                | -         |   -16.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           37 |     1023 | 2024-03-12 | MOUZ NXT          | W   | 0.924      | 0.371        | 0.054 (0.019)    | 0.970 (0.332)    | -         |    14.56 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           36 |     1065 | 2024-03-10 | Sashi             | W   | 0.912      | 0.358        | 0.064 (0.021)    | 1.000 (0.327)    | -         |    12.49 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           35 |     1089 | 2024-03-09 | Enterprise        | W   | 0.905      | -            | -                | -                | -         |    15.14 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           34 |     1174 | 2024-03-06 | AURA              | W   | 0.884      | -            | -                | -                | -         |     2.55 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           33 |     1223 | 2024-03-04 | Sangal            | L   | 0.871      | -            | -                | -                | -         |   -20.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           32 |     1276 | 2024-03-02 | Enterprise        | L   | 0.857      | -            | -                | -                | -         |   -11.72 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           31 |     1312 | 2024-02-28 | Sashi             | L   | 0.839      | -            | -                | -                | -         |   -15.55 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           30 |     1379 | 2024-02-25 | ECLOT             | L   | 0.818      | -            | -                | -                | -         |   -10.86 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           29 |     1425 | 2024-02-23 | Entropiq          | W   | 0.804      | -            | -                | -                | -         |     5.60 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           28 |     1468 | 2024-02-21 | Sashi             | L   | 0.792      | -            | -                | -                | -         |   -13.22 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           27 |     1571 | 2024-02-17 | Secret            | W   | 0.765      | -            | -                | -                | -         |     2.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           26 |     1718 | 2024-02-10 | Zero Tenacity     | W   | 0.720      | 0.358        | -                | 0.805 (0.207)    | -         |     6.33 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           25 |     1777 | 2024-02-05 | Pigeons           | W   | 0.686      | -            | -                | -                | -         |     8.46 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           24 |     1830 | 2024-02-03 | Sashi             | W   | 0.672      | 0.358        | 0.064 (0.016)    | 1.000 (0.241)    | -         |     9.04 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           23 |     1884 | 2024-02-01 | Metizport         | L   | 0.659      | -            | -                | -                | -         |   -10.15 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           22 |     2028 | 2024-01-23 | Guild Eagles      | L   | 0.600      | -            | -                | -                | -         |    -7.21 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           21 |     2032 | 2024-01-23 | Viperio           | L   | 0.599      | -            | -                | -                | -         |   -17.54 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           20 |     2050 | 2024-01-22 | Rebels            | W   | 0.593      | -            | -                | -                | -         |     8.04 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           19 |     2056 | 2024-01-22 | PERA              | W   | 0.593      | -            | -                | -                | -         |     5.91 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           18 |     2058 | 2024-01-22 | ALTERNATE aTTaX   | L   | 0.593      | -            | -                | -                | -         |   -13.55 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           17 |     2602 | 2024-01-09 | HAVU              | L   | 0.506      | -            | -                | -                | -         |   -11.26 | fino, sAvana1, T4gg3D, The eLiVe, ZEDKO  |
|           16 |     3064 | 2023-11-25 | ECLOT             | W   | 0.207      | -            | -                | -                | 1 (0.207) |     1.16 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|           15 |     3096 | 2023-11-24 | SINNERS           | W   | 0.199      | -            | -                | -                | 1 (0.199) |     3.91 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|           14 |     3348 | 2023-11-13 | Pompa             | L   | 0.126      | -            | -                | -                | -         |    -3.70 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|           13 |     3383 | 2023-11-12 | MOUZ NXT          | L   | 0.118      | -            | -                | -                | -         |    -2.24 | bestch, fino, MATYS, sAvana1, The eLiVe  |
|           12 |     3427 | 2023-11-10 | ex-Anonymo        | W   | 0.104      | -            | -                | -                | -         |     0.74 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|           11 |     3430 | 2023-11-09 | SINNERS Academy   | W   | 0.100      | -            | -                | -                | 1 (0.100) |     0.19 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|           10 |     3437 | 2023-11-09 | Enterprise        | W   | 0.099      | -            | -                | -                | 1 (0.099) |     0.11 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            9 |     3484 | 2023-11-07 | Aurora Young Blud | W   | 0.087      | -            | -                | -                | -         |     0.42 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            8 |     3490 | 2023-11-07 | 500               | W   | 0.085      | -            | -                | -                | -         |     0.33 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            7 |     3510 | 2023-11-05 | Space             | L   | 0.074      | -            | -                | -                | -         |    -1.89 | bestch, fino, MATYS, sAvana1, The eLiVe  |
|            6 |     3559 | 2023-11-03 | ENCE Academy      | L   | 0.059      | -            | -                | -                | -         |    -1.30 | bestch, fino, MATYS, sAvana1, The eLiVe  |
|            5 |     3588 | 2023-11-02 | ARCRED            | L   | 0.051      | -            | -                | -                | -         |    -1.36 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            4 |     3646 | 2023-10-31 | Sprout            | L   | 0.039      | -            | -                | -                | -         |    -0.99 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            3 |     3668 | 2023-10-30 | AGO               | W   | 0.033      | -            | -                | -                | -         |     0.13 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            2 |     3698 | 2023-10-29 | Enterprise        | W   | 0.027      | -            | -                | -                | -         |     0.33 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |
|            1 |     3802 | 2023-10-27 | The Witchers      | L   | 0.011      | -            | -                | -                | -         |    -0.27 | fino, MATYS, sAvana1, T4gg3D, The eLiVe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,979.21)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $1,600.00      | $1,600.00       |
| 2024-03-18 |      0.965 | $5,000.00      | $4,822.51       |
| 2024-03-17 |      0.960 | $639.00        | $613.52         |
| 2023-11-25 |      0.207 | $43,136.00     | $8,943.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
