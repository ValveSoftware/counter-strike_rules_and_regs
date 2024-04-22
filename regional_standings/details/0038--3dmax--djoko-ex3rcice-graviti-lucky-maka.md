### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1064.4<br />
<br />
Final Rank Value (1064.4) = Starting Rank Value (1022.8) + Head To Head Adjustments (41.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.451[<sup>2</sup>](#table1)
- Opponent Network: 0.326[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.322<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.8
- 400 + ( ( 0.322 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1022.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |        2 | 2024-04-22 | Guild Eagles      | W   | 1.000      | 0.384        | -                | 0.727 (0.280)    | 0 (0.000) |    11.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           48 |      187 | 2024-04-17 | BLEED             | W   | 1.000      | 0.384        | 0.221 (0.085)    | 0.933 (0.359)    | 0 (0.000) |    17.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           47 |      255 | 2024-04-14 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -9.91 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           46 |      270 | 2024-04-13 | ex-Preasy         | W   | 1.000      | 0.358        | 0.064 (0.023)    | -                | 0 (0.000) |     8.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           45 |      312 | 2024-04-11 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -23.53 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           44 |      346 | 2024-04-10 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -15.84 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           43 |      395 | 2024-04-09 | SAW               | W   | 1.000      | 0.500        | 0.173 (0.087)    | 0.824 (0.412)    | 0 (0.000) |    24.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           42 |      472 | 2024-04-07 | Young Ninjas      | W   | 1.000      | 0.358        | 0.082 (0.029)    | 0.313 (0.112)    | 0 (0.000) |    11.16 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           41 |      545 | 2024-04-04 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.49 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           40 |      574 | 2024-04-03 | FORZE             | W   | 1.000      | 0.500        | 0.140 (0.070)    | 0.784 (0.392)    | 0 (0.000) |    15.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           39 |      625 | 2024-04-02 | Permitta          | W   | 1.000      | 0.384        | -                | 0.970 (0.373)    | 0 (0.000) |    11.05 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           38 |      681 | 2024-03-28 | Apeks             | W   | 1.000      | 0.500        | 0.193 (0.097)    | 0.687 (0.343)    | 0 (0.000) |    23.78 | Djoko, Ex3rcice, Graviti, Lucky, Maka       |
|           37 |      804 | 2024-03-21 | fnatic            | L   | 0.986      | -            | -                | -                | -         |   -10.88 | Djoko, Ex3rcice, Lucky, Maka, NBK-          |
|           36 |      846 | 2024-03-19 | GUN5              | W   | 0.972      | -            | -                | -                | -         |     3.50 | Djoko, Ex3rcice, Lucky, Maka, NBK-          |
|           35 |      917 | 2024-03-15 | B8                | W   | 0.946      | 0.500        | -                | 0.655 (0.310)    | -         |     9.85 | Djoko, Ex3rcice, Lucky, Maka, misutaaa      |
|           34 |      985 | 2024-03-13 | PARIVISION        | L   | 0.933      | -            | -                | -                | -         |   -23.90 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           33 |     1198 | 2024-03-05 | FORZE             | L   | 0.880      | -            | -                | -                | -         |   -13.70 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           32 |     1220 | 2024-03-04 | fnatic            | L   | 0.872      | -            | -                | -                | -         |   -12.25 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           31 |     1258 | 2024-03-02 | Monte             | W   | 0.860      | 0.500        | 0.236 (0.102)    | 0.598 (0.257)    | -         |    20.39 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           30 |     1295 | 2024-02-29 | Gaimin Gladiators | W   | 0.847      | 0.500        | 0.156 (0.066)    | 1.000 (0.424)    | -         |    21.77 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           29 |     1592 | 2024-02-16 | 9 Pandas          | L   | 0.759      | -            | -                | -                | -         |    -8.64 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           28 |     1617 | 2024-02-15 | Into the Breach   | W   | 0.753      | -            | -                | -                | 1 (0.753) |     7.42 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           27 |     1654 | 2024-02-14 | KOI               | L   | 0.746      | -            | -                | -                | -         |    -9.94 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           26 |     1660 | 2024-02-14 | Falcons           | L   | 0.745      | -            | -                | -                | -         |    -3.09 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           25 |     1709 | 2024-02-11 | Apeks             | L   | 0.726      | -            | -                | -                | -         |    -4.05 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           24 |     1732 | 2024-02-09 | fnatic            | W   | 0.713      | 0.143        | 0.240 (0.024)    | -                | -         |    13.30 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           23 |     1735 | 2024-02-09 | Endpoint          | W   | 0.713      | -            | -                | -                | -         |     6.43 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           22 |     1738 | 2024-02-09 | ex-Sprout         | L   | 0.712      | -            | -                | -                | -         |   -19.99 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           21 |     1925 | 2024-01-30 | Permitta          | L   | 0.646      | -            | -                | -                | -         |   -14.46 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           20 |     2079 | 2024-01-21 | ex-sYnck          | W   | 0.587      | -            | -                | -                | -         |     3.37 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           19 |     2087 | 2024-01-21 | Preasy            | L   | 0.586      | -            | -                | -                | -         |    -8.54 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           18 |     2112 | 2024-01-20 | 9 Pandas          | L   | 0.581      | -            | -                | -                | -         |    -7.56 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           17 |     2132 | 2024-01-20 | Zero Tenacity     | W   | 0.578      | -            | -                | -                | -         |     3.76 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           16 |     2186 | 2024-01-19 | OG                | L   | 0.572      | -            | -                | -                | -         |    -3.19 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           15 |     2231 | 2024-01-18 | Cloud9            | L   | 0.566      | -            | -                | -                | -         |    -0.47 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           14 |     2244 | 2024-01-18 | JANO              | W   | 0.566      | -            | -                | -                | -         |     2.04 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           13 |     2787 | 2023-12-10 | FORZE             | W   | 0.307      | -            | -                | -                | -         |     2.13 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           12 |     2854 | 2023-12-07 | SINNERS           | W   | 0.287      | -            | -                | -                | -         |     5.08 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           11 |     2884 | 2023-12-06 | Apeks             | W   | 0.280      | 0.500        | 0.193 (0.027)    | -                | -         |     6.96 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|           10 |     3085 | 2023-11-24 | GamerLegion       | L   | 0.201      | -            | -                | -                | -         |    -0.81 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|            9 |     3099 | 2023-11-24 | Virtus.pro        | L   | 0.198      | -            | -                | -                | -         |    -0.19 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|            8 |     3269 | 2023-11-16 | TSM               | L   | 0.145      | -            | -                | -                | -         |    -3.91 | CYPHER, interz, JACKZ, MoDo, valde          |
|            7 |     3293 | 2023-11-15 | ex-Anonymo        | L   | 0.140      | -            | -                | -                | -         |    -3.61 | lunAtic, reiko, SaMey, Sobol, virtuoso      |
|            6 |     3369 | 2023-11-12 | Into the Breach   | W   | 0.120      | -            | -                | -                | -         |     0.88 | bodyy, Bymas, CRUC1AL, misutaaa, rallen     |
|            5 |     3452 | 2023-11-08 | ENCE              | W   | 0.094      | -            | -                | -                | -         |     2.56 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|            4 |     3481 | 2023-11-07 | Monte             | W   | 0.087      | -            | -                | -                | -         |     2.00 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|            3 |     3785 | 2023-10-27 | 1WIN              | L   | 0.013      | -            | -                | -                | -         |    -0.37 | Boombl4, deko, Forester, NickelBack, TRAVIS |
|            2 |     3799 | 2023-10-27 | Gaimin Gladiators | W   | 0.011      | -            | -                | -                | -         |     0.30 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |
|            1 |     3815 | 2023-10-26 | Falcons           | W   | 0.006      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,159.91)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $4,000.00      | $4,000.00       |
| 2023-12-10 |      0.307 | $15,000.00     | $4,601.63       |
| 2023-11-26 |      0.213 | $2,000.00      | $426.58         |
| 2023-10-27 |      0.013 | $10,000.00     | $131.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
