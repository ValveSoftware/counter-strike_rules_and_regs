### Roster Details<br />
Team Name: ex-Anonymo<br />
Roster: lunAtic, reiko, SaMey, Sobol, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  734.5<br />
<br />
Final Rank Value (734.5) = Starting Rank Value (730.6) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.6
- 400 + ( ( 0.174 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 730.6


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
|           39 |     2011 | 2024-02-10 | The Chosen Few    | L   | 0.627      | -            | -                | -                | -         |   -10.32 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           38 |     2017 | 2024-02-10 | FURIA             | L   | 0.626      | -            | -                | -                | -         |    -0.28 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           37 |     2021 | 2024-02-10 | Apeks             | L   | 0.625      | -            | -                | -                | -         |    -0.59 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           36 |     2112 | 2024-02-03 | Young Ninjas      | L   | 0.580      | -            | -                | -                | -         |    -5.26 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           35 |     2625 | 2024-01-16 | JANO              | L   | 0.461      | -            | -                | -                | -         |    -8.25 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           34 |     2634 | 2024-01-16 | LEON              | W   | 0.460      | -            | -                | -                | 0 (0.000) |     2.60 | eightz999, facecrack, JIaYm, k0s, Z1W0W        |
|           33 |     2733 | 2024-01-13 | OG                | L   | 0.440      | -            | -                | -                | -         |    -0.54 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           32 |     2735 | 2024-01-13 | Blessed           | W   | 0.439      | 0.143        | 0.008 (0.000)    | 0.285 (0.018)    | 0 (0.000) |     6.81 | bondik, guthriee, j3kie, Smash, t3ns1on        |
|           31 |     2775 | 2024-01-12 | Lausanne SE       | W   | 0.434      | -            | -                | -                | 0 (0.000) |     4.57 | Diviiii, Razzmo, SBT, Shr, xReal               |
|           30 |     2816 | 2024-01-11 | PERA              | L   | 0.426      | -            | -                | -                | -         |    -3.75 | Aaron, DGL, Kamion, msN, Porya                 |
|           29 |     2825 | 2024-01-11 | Betera            | W   | 0.426      | 0.143        | -                | 0.199 (0.012)    | 0 (0.000) |     6.58 | alex666, lollipop21k, MaSvAl, nifee, sad       |
|           28 |     2835 | 2024-01-10 | CYBERSHOKE        | W   | 0.421      | -            | -                | -                | 0 (0.000) |     5.79 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz      |
|           27 |     2893 | 2024-01-09 | ECF               | L   | 0.413      | -            | -                | -                | -         |    -8.97 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|           26 |     2927 | 2023-12-23 | Spirit Academy    | L   | 0.298      | -            | -                | -                | -         |    -4.73 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           25 |     2928 | 2023-12-22 | NAVI Junior       | W   | 0.291      | 0.333        | 0.020 (0.002)    | 0.164 (0.016)    | 0 (0.000) |     4.51 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           24 |     2931 | 2023-12-21 | Spirit Academy    | L   | 0.285      | -            | -                | -                | -         |    -4.59 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           23 |     2945 | 2023-12-19 | Sashi             | W   | 0.272      | 0.333        | 0.188 (0.017)    | 1.000 (0.091)    | 0 (0.000) |     7.26 | Cabbi, IceBerg, kwezz, Lucky, MistR            |
|           22 |     2990 | 2023-12-17 | Sashi             | W   | 0.258      | 0.333        | 0.012 (0.001)    | -                | 0 (0.000) |     3.57 | Fessor, n1Xen, nut nut, PR1mE, Speedy          |
|           21 |     3077 | 2023-12-11 | Guild Eagles      | L   | 0.217      | -            | -                | -                | -         |    -1.13 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           20 |     3159 | 2023-12-07 | ALTERNATE aTTaX   | W   | 0.193      | 0.384        | 0.104 (0.008)    | 0.779 (0.058)    | 0 (0.000) |     4.90 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           19 |     3212 | 2023-12-05 | GODSENT           | W   | 0.180      | 0.384        | 0.024 (0.002)    | 0.100 (0.007)    | 0 (0.000) |     3.11 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           18 |     3219 | 2023-12-05 | Guild Eagles      | L   | 0.179      | -            | -                | -                | -         |    -0.94 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           17 |     3229 | 2023-12-04 | Into the Breach   | W   | 0.174      | 0.589        | 0.021 (0.002)    | 0.152 (0.016)    | -         |     3.18 | Bymas, CRUC1AL, misutaaa, rallen, tomiko       |
|           16 |     3277 | 2023-12-02 | Fluxo             | W   | 0.158      | 0.589        | 0.148 (0.014)    | 0.569 (0.053)    | -         |     4.27 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           15 |     3289 | 2023-12-01 | Sprout            | L   | 0.152      | -            | -                | -                | -         |    -2.46 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           14 |     3337 | 2023-11-27 | 00NATION          | W   | 0.125      | -            | -                | -                | -         |     0.84 | birdfromsky, JDC, niko, susp, syrsoN           |
|           13 |     3364 | 2023-11-25 | ENCE              | L   | 0.113      | -            | -                | -                | -         |    -0.05 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           12 |     3439 | 2023-11-21 | FORZE             | L   | 0.085      | -            | -                | -                | -         |    -1.23 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           11 |     3498 | 2023-11-18 | Into the Breach   | L   | 0.066      | -            | -                | -                | -         |    -0.87 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           10 |     3515 | 2023-11-17 | paiN              | L   | 0.061      | -            | -                | -                | -         |    -0.01 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            9 |     3552 | 2023-11-16 | AGO               | L   | 0.054      | -            | -                | -                | -         |    -1.12 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            8 |     3589 | 2023-11-15 | 3DMAX             | W   | 0.047      | 0.589        | 0.055 (0.002)    | 0.810 (0.022)    | -         |     1.39 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            7 |     3605 | 2023-11-15 | PGE Turow         | L   | 0.046      | -            | -                | -                | -         |    -0.75 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            6 |     3609 | 2023-11-15 | ex-Preasy         | L   | 0.045      | -            | -                | -                | -         |    -0.24 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            5 |     3625 | 2023-11-14 | PACT              | W   | 0.039      | -            | -                | -                | -         |     0.29 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            4 |     3650 | 2023-11-13 | MOUZ NXT          | W   | 0.031      | 0.589        | 0.210 (0.004)    | 1.000 (0.019)    | -         |     0.86 | Chr1zN, Neityu, Nexius, PR, sirah              |
|            3 |     3663 | 2023-11-12 | Metizport         | L   | 0.027      | -            | -                | -                | -         |    -0.14 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            2 |     3705 | 2023-11-11 | Aurora Young Blud | L   | 0.019      | -            | -                | -                | -         |    -0.34 | bl1x1, bluewh1te, easy, malinov, sh1geo        |
|            1 |     3723 | 2023-11-10 | Sampi             | L   | 0.011      | -            | -                | -                | -         |    -0.06 | fino, MATYS, sAvana1, T4gg3D, The eLiVe        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,669.90)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-23 |      0.298 | $3,000.00      | $892.60         |
| 2023-12-13 |      0.233 | $500.00        | $116.73         |
| 2023-12-07 |      0.194 | $5,000.00      | $968.17         |
| 2023-11-26 |      0.120 | $1,238.00      | $148.02         |
| 2023-11-19 |      0.074 | $5,000.00      | $368.20         |
| 2023-11-19 |      0.073 | $2,410.00      | $176.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
