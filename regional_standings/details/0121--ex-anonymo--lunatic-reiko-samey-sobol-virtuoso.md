### Roster Details<br />
Team Name: ex-Anonymo<br />
Roster: lunAtic, reiko, SaMey, Sobol, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  753.4<br />
<br />
Final Rank Value (753.4) = Starting Rank Value (761.0) + Head To Head Adjustments (-7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 761.0
- 400 + ( ( 0.187 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 761.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |     1715 | 2024-02-10 | The Chosen Few    | L   | 0.720      | -            | -                | -                | -         |   -12.59 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           54 |     1721 | 2024-02-10 | FURIA             | L   | 0.719      | -            | -                | -                | -         |    -0.64 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           53 |     1725 | 2024-02-10 | Apeks             | L   | 0.718      | -            | -                | -                | -         |    -1.24 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           52 |     1816 | 2024-02-03 | Young Ninjas      | L   | 0.673      | -            | -                | -                | -         |    -6.45 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           51 |     2329 | 2024-01-16 | JANO              | L   | 0.554      | -            | -                | -                | -         |   -11.81 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           50 |     2338 | 2024-01-16 | LEON              | W   | 0.554      | -            | -                | -                | 0 (0.000) |     2.76 | eightz999, facecrack, JIaYm, k0s, Z1W0W        |
|           49 |     2437 | 2024-01-13 | OG                | L   | 0.533      | -            | -                | -                | -         |    -0.81 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           48 |     2439 | 2024-01-13 | Blessed           | W   | 0.532      | 0.143        | -                | 0.324 (0.025)    | 0 (0.000) |     7.27 | bondik, guthriee, j3kie, Smash, t3ns1on        |
|           47 |     2479 | 2024-01-12 | Lausanne SE       | W   | 0.527      | -            | -                | -                | 0 (0.000) |     5.27 | Diviiii, Razzmo, SBT, Shr, xReal               |
|           46 |     2520 | 2024-01-11 | PERA              | L   | 0.520      | -            | -                | -                | -         |    -7.26 | Aaron, DGL, Kamion, msN, Porya                 |
|           45 |     2529 | 2024-01-11 | Betera            | W   | 0.519      | 0.143        | -                | 0.240 (0.018)    | 0 (0.000) |     7.66 | alex666, lollipop21k, MaSvAl, nifee, sad       |
|           44 |     2539 | 2024-01-10 | CYBERSHOKE        | W   | 0.514      | -            | -                | -                | 0 (0.000) |     5.82 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz      |
|           43 |     2597 | 2024-01-09 | ECF               | L   | 0.506      | -            | -                | -                | -         |   -12.28 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           42 |     2631 | 2023-12-23 | Spirit Academy    | L   | 0.391      | -            | -                | -                | -         |    -6.64 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           41 |     2632 | 2023-12-22 | NAVI Junior       | W   | 0.384      | 0.333        | 0.019 (0.002)    | 0.195 (0.025)    | 0 (0.000) |     5.34 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           40 |     2635 | 2023-12-21 | Spirit Academy    | L   | 0.378      | -            | -                | -                | -         |    -6.55 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           39 |     2649 | 2023-12-19 | Sashi             | W   | 0.365      | 0.333        | 0.064 (0.008)    | 1.000 (0.122)    | 0 (0.000) |     7.66 | Cabbi, IceBerg, kwezz, Lucky, MistR            |
|           38 |     2694 | 2023-12-17 | Sashi             | W   | 0.351      | 0.333        | 0.017 (0.002)    | -                | 0 (0.000) |     4.80 | Fessor, n1Xen, nut nut, PR1mE, Speedy          |
|           37 |     2781 | 2023-12-11 | Guild Eagles      | L   | 0.311      | -            | -                | -                | -         |    -1.84 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           36 |     2863 | 2023-12-07 | ALTERNATE aTTaX   | W   | 0.286      | 0.384        | 0.026 (0.003)    | 0.327 (0.036)    | 0 (0.000) |     4.88 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           35 |     2916 | 2023-12-05 | GODSENT           | W   | 0.273      | 0.384        | 0.036 (0.004)    | 0.159 (0.017)    | 0 (0.000) |     4.80 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           34 |     2923 | 2023-12-05 | Guild Eagles      | L   | 0.272      | -            | -                | -                | -         |    -1.66 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           33 |     2933 | 2023-12-04 | Into the Breach   | W   | 0.267      | 0.589        | 0.037 (0.006)    | 0.225 (0.035)    | -         |     4.92 | Bymas, CRUC1AL, misutaaa, rallen, tomiko       |
|           32 |     2981 | 2023-12-02 | Fluxo             | W   | 0.251      | 0.589        | 0.147 (0.022)    | 0.633 (0.094)    | -         |     6.65 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           31 |     2993 | 2023-12-01 | Sprout            | L   | 0.245      | -            | -                | -                | -         |    -4.01 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           30 |     3041 | 2023-11-27 | 00NATION          | W   | 0.218      | -            | -                | -                | -         |     2.58 | birdfromsky, JDC, niko, susp, syrsoN           |
|           29 |     3068 | 2023-11-25 | ENCE              | L   | 0.207      | -            | -                | -                | -         |    -0.22 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           28 |     3143 | 2023-11-21 | FORZE             | L   | 0.178      | -            | -                | -                | -         |    -2.72 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           27 |     3202 | 2023-11-18 | Into the Breach   | L   | 0.159      | -            | -                | -                | -         |    -2.07 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           26 |     3219 | 2023-11-17 | paiN              | L   | 0.154      | -            | -                | -                | -         |    -0.02 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           25 |     3256 | 2023-11-16 | AGO               | L   | 0.147      | -            | -                | -                | -         |    -3.11 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           24 |     3293 | 2023-11-15 | 3DMAX             | W   | 0.140      | 0.589        | 0.048 (0.004)    | 0.801 (0.066)    | -         |     3.61 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           23 |     3309 | 2023-11-15 | PGE Turow         | L   | 0.139      | -            | -                | -                | -         |    -2.47 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           22 |     3313 | 2023-11-15 | Preasy            | L   | 0.138      | -            | -                | -                | -         |    -0.86 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           21 |     3329 | 2023-11-14 | PACT              | W   | 0.133      | -            | -                | -                | -         |     0.91 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           20 |     3354 | 2023-11-13 | MOUZ NXT          | W   | 0.125      | 0.589        | 0.054 (0.004)    | 0.970 (0.071)    | -         |     2.77 | Chr1zN, Neityu, Nexius, PR, sirah              |
|           19 |     3367 | 2023-11-12 | Metizport         | L   | 0.120      | -            | -                | -                | -         |    -2.24 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           18 |     3409 | 2023-11-11 | Aurora Young Blud | L   | 0.112      | -            | -                | -                | -         |    -2.16 | bl1x1, bluewh1te, easy, malinov, sh1geo        |
|           17 |     3427 | 2023-11-10 | Sampi             | L   | 0.104      | -            | -                | -                | -         |    -0.74 | fino, MATYS, sAvana1, T4gg3D, The eLiVe        |
|           16 |     3463 | 2023-11-08 | Alliance          | L   | 0.093      | -            | -                | -                | -         |    -0.89 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           15 |     3491 | 2023-11-07 | PGE Turow         | W   | 0.085      | -            | -                | -                | -         |     1.16 | b1elany, darko, gRuChA, kadziu, Markoś         |
|           14 |     3500 | 2023-11-06 | Project G         | L   | 0.079      | -            | -                | -                | -         |    -1.99 | Dragon, Lekr0, mwlky, xfl0ud, ztr              |
|           13 |     3505 | 2023-11-06 | ex-sYnck          | W   | 0.078      | -            | -                | -                | -         |     1.13 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           12 |     3513 | 2023-11-05 | brazylijski luz   | W   | 0.073      | -            | -                | -                | -         |     1.26 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           11 |     3519 | 2023-11-05 | BOSS              | W   | 0.072      | -            | -                | -                | -         |     1.50 | fr3nd, lunAtic, reiko, Sobol, virtuoso         |
|           10 |     3525 | 2023-11-05 | Permitta          | W   | 0.071      | -            | -                | -                | -         |     0.70 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            9 |     3536 | 2023-11-04 | Permitta          | W   | 0.067      | -            | -                | -                | -         |     0.66 | darchevile, hotd0g , KukuBambo, maaryy, tomiko |
|            8 |     3545 | 2023-11-04 | Passion UA        | W   | 0.066      | -            | -                | -                | -         |     1.43 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX   |
|            7 |     3565 | 2023-11-03 | ALTERNATE aTTaX   | L   | 0.058      | -            | -                | -                | -         |    -0.71 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            6 |     3613 | 2023-11-01 | GODSENT           | L   | 0.045      | -            | -                | -                | -         |    -0.65 | bobeksde, eraa, Golden, Plopski, Ro1f          |
|            5 |     3637 | 2023-10-31 | The Chosen Few    | W   | 0.040      | -            | -                | -                | -         |     0.55 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            4 |     3649 | 2023-10-31 | 00NATION          | W   | 0.038      | -            | -                | -                | -         |     0.43 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            3 |     3721 | 2023-10-29 | Preasy            | W   | 0.025      | 0.371        | 0.205 (0.002)    | -                | -         |     0.64 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            2 |     3755 | 2023-10-28 | Alliance          | L   | 0.019      | -            | -                | -                | -         |    -0.18 | avid, b0denmaster, PlesseN, robiin, ztr        |
|            1 |     3830 | 2023-10-26 | ALTERNATE aTTaX   | W   | 0.004      | -            | -                | -                | -         |     0.07 | awzek, FreeZe, PerX, slaxz-, Spiidi            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,122.10)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.391 | $3,000.00      | $1,172.51       |
| 2023-12-13 |      0.327 | $500.00        | $163.38         |
| 2023-12-07 |      0.287 | $5,000.00      | $1,434.70       |
| 2023-11-26 |      0.213 | $1,238.00      | $263.53         |
| 2023-11-19 |      0.167 | $5,000.00      | $834.74         |
| 2023-11-19 |      0.166 | $2,410.00      | $401.05         |
| 2023-11-06 |      0.078 | $3,500.00      | $272.38         |
| 2023-11-05 |      0.073 | $7,922.00      | $579.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
