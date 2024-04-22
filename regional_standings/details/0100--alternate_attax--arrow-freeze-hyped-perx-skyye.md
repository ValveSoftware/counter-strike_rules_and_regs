### Roster Details<br />
Team Name: ALTERNATE aTTaX<br />
Roster: ArroW, FreeZe, hyped, PerX, skyye<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [65]( ../standings_europe.md)<br />
Final Rank Value:  809.2<br />
<br />
Final Rank Value (809.2) = Starting Rank Value (840.3) + Head To Head Adjustments (-31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.3
- 400 + ( ( 0.228 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 840.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |        9 | 2024-04-22 | ENCE Academy      | W   | 1.000      | 0.371        | 0.016 (0.006)    | -                | 0 (0.000) |    17.89 | ArroW, FreeZe, hyped, PerX, skyye          |
|           48 |       22 | 2024-04-21 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -9.81 | ArroW, awzek, FreeZe, hyped, skyye         |
|           47 |       32 | 2024-04-21 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -10.10 | ArroW, awzek, FreeZe, hyped, skyye         |
|           46 |       39 | 2024-04-20 | Space             | L   | 1.000      | -            | -                | -                | -         |   -19.93 | ArroW, awzek, FreeZe, hyped, skyye         |
|           45 |       63 | 2024-04-20 | Enterprise        | W   | 1.000      | 0.500        | 0.026 (0.013)    | 0.452 (0.226)    | 0 (0.000) |    19.64 | ArroW, awzek, FreeZe, hyped, skyye         |
|           44 |       99 | 2024-04-19 | Passion UA        | W   | 1.000      | 0.371        | 0.031 (0.012)    | 0.625 (0.232)    | 0 (0.000) |    18.66 | ArroW, awzek, FreeZe, hyped, skyye         |
|           43 |      105 | 2024-04-19 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -17.23 | ArroW, awzek, FreeZe, hyped, skyye         |
|           42 |      155 | 2024-04-18 | HAVU              | L   | 1.000      | -            | -                | -                | -         |   -19.13 | ArroW, awzek, FreeZe, hyped, skyye         |
|           41 |      163 | 2024-04-18 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -6.13 | ArroW, awzek, FreeZe, hyped, skyye         |
|           40 |      224 | 2024-04-16 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.57 | ArroW, awzek, FreeZe, hyped, skyye         |
|           39 |      237 | 2024-04-15 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -19.04 | ArroW, awzek, FreeZe, hyped, skyye         |
|           38 |      273 | 2024-04-13 | Alliance          | W   | 1.000      | 0.371        | 0.020 (0.007)    | 0.855 (0.317)    | 0 (0.000) |    15.34 | ArroW, awzek, FreeZe, hyped, skyye         |
|           37 |      416 | 2024-04-09 | ECLOT             | W   | 1.000      | 0.371        | 0.083 (0.031)    | 0.623 (0.231)    | 0 (0.000) |    22.48 | ArroW, awzek, FreeZe, hyped, skyye         |
|           36 |      450 | 2024-04-08 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -7.12 | ArroW, awzek, FreeZe, hyped, skyye         |
|           35 |      541 | 2024-04-04 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -12.46 | ArroW, awzek, FreeZe, hyped, skyye         |
|           34 |      632 | 2024-04-02 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -8.72 | ArroW, awzek, FreeZe, hyped, skyye         |
|           33 |      709 | 2024-03-27 | Blessed           | L   | 1.000      | -            | -                | -                | -         |   -20.29 | ArroW, awzek, FreeZe, hyped, skyye         |
|           32 |      716 | 2024-03-27 | Guild Eagles      | W   | 1.000      | 0.143        | 0.046 (0.007)    | 0.727 (0.104)    | 0 (0.000) |    21.49 | ArroW, awzek, FreeZe, hyped, skyye         |
|           31 |      749 | 2024-03-25 | ex-Sprout         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.86 | ArroW, awzek, FreeZe, hyped, skyye         |
|           30 |      764 | 2024-03-23 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.25 | ArroW, awzek, FreeZe, hyped, skyye         |
|           29 |      953 | 2024-03-14 | Metizport         | W   | 0.939      | 0.143        | 0.136 (0.018)    | 1.000 (0.134)    | 0 (0.000) |    23.70 | ArroW, awzek, FreeZe, hyped, skyye         |
|           28 |      981 | 2024-03-13 | SINNERS           | L   | 0.933      | -            | -                | -                | -         |    -7.93 | ArroW, awzek, FreeZe, hyped, skyye         |
|           27 |     1063 | 2024-03-10 | Entropiq          | L   | 0.912      | -            | -                | -                | -         |   -17.72 | ArroW, awzek, FreeZe, hyped, skyye         |
|           26 |     1066 | 2024-03-10 | MOUZ NXT          | L   | 0.911      | -            | -                | -                | -         |   -10.30 | ArroW, awzek, FreeZe, hyped, skyye         |
|           25 |     1110 | 2024-03-08 | Sashi             | W   | 0.897      | 0.371        | 0.064 (0.021)    | 1.000 (0.333)    | 0 (0.000) |    15.93 | ArroW, awzek, FreeZe, hyped, skyye         |
|           24 |     1150 | 2024-03-06 | brazylijski luz   | W   | 0.887      | 0.500        | 0.019 (0.008)    | 0.356 (0.158)    | -         |    12.58 | ArroW, awzek, FreeZe, hyped, skyye         |
|           23 |     1209 | 2024-03-05 | Sashi             | W   | 0.878      | 0.143        | 0.064 (0.008)    | 1.000 (0.125)    | -         |    16.69 | ArroW, awzek, FreeZe, hyped, skyye         |
|           22 |     1222 | 2024-03-04 | Passion UA        | L   | 0.872      | -            | -                | -                | -         |    -9.86 | ArroW, awzek, FreeZe, hyped, skyye         |
|           21 |     1262 | 2024-03-02 | 500               | L   | 0.860      | -            | -                | -                | -         |   -17.52 | ArroW, awzek, FreeZe, hyped, skyye         |
|           20 |     1289 | 2024-03-01 | fnatic            | L   | 0.852      | -            | -                | -                | -         |    -5.97 | ArroW, awzek, FreeZe, hyped, skyye         |
|           19 |     1315 | 2024-02-28 | BetBoom           | L   | 0.839      | -            | -                | -                | -         |    -3.04 | ArroW, awzek, FreeZe, hyped, skyye         |
|           18 |     1332 | 2024-02-27 | RUBY              | L   | 0.833      | -            | -                | -                | -         |   -14.96 | ArroW, awzek, FreeZe, hyped, skyye         |
|           17 |     1355 | 2024-02-26 | Endpoint          | W   | 0.825      | -            | -                | -                | -         |    12.24 | ArroW, awzek, FreeZe, hyped, skyye         |
|           16 |     1372 | 2024-02-25 | Alliance          | L   | 0.820      | -            | -                | -                | -         |   -12.56 | ArroW, awzek, FreeZe, hyped, skyye         |
|           15 |     1535 | 2024-02-18 | Young Ninjas      | L   | 0.774      | -            | -                | -                | -         |    -9.45 | ArroW, awzek, FreeZe, PANIX, PerX          |
|           14 |     1707 | 2024-02-11 | Entropiq          | W   | 0.727      | 0.358        | -                | 0.403 (0.105)    | -         |     7.85 | ArroW, awzek, FreeZe, PANIX, PerX          |
|           13 |     2715 | 2023-12-16 | ALTERNATE aTTaX   | L   | 0.346      | -            | -                | -                | -         |    -6.22 | awzek, FreeZe, PANIX, PerX, Spiidi         |
|           12 |     2757 | 2023-12-13 | RUSH B            | W   | 0.326      | -            | -                | -                | -         |     4.02 | executor, kinqie, Kiro, nota, tex1y        |
|           11 |     2831 | 2023-12-08 | TSM               | W   | 0.294      | -            | -                | -                | -         |     3.19 | CYPHER, interz, JACKZ, MoDo, valde         |
|           10 |     2860 | 2023-12-07 | Endpoint          | W   | 0.287      | -            | -                | -                | -         |     4.34 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            9 |     2888 | 2023-12-06 | TUSTE CHOPAKI     | W   | 0.280      | -            | -                | -                | -         |     0.70 | ArroW, hyped, MRC9, pr1metapz, skyye       |
|            8 |     2917 | 2023-12-05 | LT5               | W   | 0.273      | -            | -                | -                | -         |     0.67 | fierre, maty, spardaus, tooi, yakuza       |
|            7 |     3072 | 2023-11-25 | ALTERNATE aTTaX   | W   | 0.206      | -            | -                | -                | -         |     2.87 | awzek, FreeZe, PANIX, PerX, Spiidi         |
|            6 |     3552 | 2023-11-04 | 00NATION          | L   | 0.064      | -            | -                | -                | -         |    -1.48 | birdfromsky, JDC, niko, susp, syrsoN       |
|            5 |     3565 | 2023-11-03 | ex-Anonymo        | W   | 0.058      | -            | -                | -                | -         |     0.71 | lunAtic, reiko, SaMey, Sobol, virtuoso     |
|            4 |     3599 | 2023-11-01 | brazylijski luz   | L   | 0.047      | -            | -                | -                | -         |    -0.83 | ArroW, hyped, MRC9, pr1metapz, skyye       |
|            3 |     3617 | 2023-11-01 | HAVU              | W   | 0.045      | -            | -                | -                | -         |     0.66 | ArroW, hyped, MRC9, pr1metapz, skyye       |
|            2 |     3618 | 2023-11-01 | Entropiq          | W   | 0.044      | -            | -                | -                | -         |     0.52 | ArroW, hyped, MRC9, pr1metapz, skyye       |
|            1 |     3674 | 2023-10-30 | Sprout            | L   | 0.032      | -            | -                | -                | -         |    -0.66 | cej0t, raalz, sL1m3, spooke, Zyphon        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,677.48)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-12-16 |      0.346 | $3,799.00      | $1,315.30       |
| 2023-12-13 |      0.326 | $7,000.00      | $2,283.91       |
| 2023-11-06 |      0.078 | $1,000.00      | $78.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
