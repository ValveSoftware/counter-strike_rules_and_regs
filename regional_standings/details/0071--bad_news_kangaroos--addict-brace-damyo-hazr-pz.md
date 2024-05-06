### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [6]( ../standings_asia.md)<br />
Final Rank Value:  920.3<br />
<br />
Final Rank Value (920.3) = Starting Rank Value (937.4) + Head To Head Adjustments (-17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.297[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 937.4
- 400 + ( ( 0.282 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 937.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |       57 | 2024-05-03 | FURIA          | L   | 1.000      | -            | -                | -                | -         |    -2.26 | ADDICT, BRACE, damyo, hazr, pz              |
|           47 |      102 | 2024-05-01 | ENCE           | L   | 1.000      | -            | -                | -                | -         |    -2.44 | ADDICT, BRACE, damyo, hazr, pz              |
|           46 |      135 | 2024-04-30 | MOUZ           | L   | 1.000      | -            | -                | -                | -         |    -0.17 | ADDICT, BRACE, damyo, hazr, pz              |
|           45 |      357 | 2024-04-20 | FlyQuest       | L   | 1.000      | -            | -                | -                | -         |    -2.47 | ADDICT, BRACE, damyo, hazr, pz              |
|           44 |      361 | 2024-04-20 | Rooster        | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.348 (0.050)    | 0 (0.000) |    14.34 | ADDICT, BRACE, damyo, hazr, pz              |
|           43 |      406 | 2024-04-19 | Mindfreak      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.03 | ADDICT, BRACE, damyo, hazr, pz              |
|           42 |      409 | 2024-04-19 | Rooster        | L   | 1.000      | -            | -                | -                | -         |   -16.87 | ADDICT, BRACE, damyo, hazr, pz              |
|           41 |      658 | 2024-04-10 | Rooster        | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.348 (0.116)    | 0 (0.000) |    14.13 | ADDICT, BRACE, damyo, hazr, pz              |
|           40 |      668 | 2024-04-10 | Rooster        | L   | 1.000      | -            | -                | -                | -         |   -17.52 | ADDICT, BRACE, damyo, hazr, pz              |
|           39 |      893 | 2024-04-03 | DXA            | W   | 0.977      | 0.333        | 0.009 (0.003)    | 0.239 (0.078)    | 0 (0.000) |     5.62 | ADDICT, BRACE, damyo, hazr, pz              |
|           38 |      897 | 2024-04-03 | DXA            | W   | 0.977      | 0.333        | 0.009 (0.003)    | 0.239 (0.078)    | 0 (0.000) |     5.92 | ADDICT, BRACE, damyo, hazr, pz              |
|           37 |     1018 | 2024-03-27 | Mindfreak      | L   | 0.931      | -            | -                | -                | -         |   -25.13 | ADDICT, BRACE, damyo, hazr, pz              |
|           36 |     1025 | 2024-03-27 | Mindfreak      | W   | 0.931      | 0.333        | -                | 0.307 (0.095)    | 0 (0.000) |     3.84 | ADDICT, BRACE, damyo, hazr, pz              |
|           35 |     1068 | 2024-03-23 | DXA            | W   | 0.904      | 0.315        | 0.009 (0.003)    | 0.239 (0.068)    | 1 (0.904) |     5.53 | ADDICT, BRACE, damyo, hazr, pz              |
|           34 |     1071 | 2024-03-23 | VexX           | W   | 0.904      | 0.315        | 0.009 (0.003)    | 0.252 (0.072)    | 1 (0.904) |     6.80 | ADDICT, BRACE, damyo, hazr, pz              |
|           33 |     1129 | 2024-03-20 | Canon Event    | W   | 0.884      | -            | -                | -                | 0 (0.000) |     1.25 | ADDICT, BRACE, damyo, hazr, pz              |
|           32 |     1130 | 2024-03-20 | Canon Event    | W   | 0.883      | -            | -                | -                | -         |     1.26 | ADDICT, BRACE, damyo, hazr, pz              |
|           31 |     1200 | 2024-03-16 | Gods Reign     | L   | 0.857      | -            | -                | -                | -         |   -13.76 | ADDICT, BRACE, hazr, pz, yourwombat         |
|           30 |     1221 | 2024-03-15 | GRDX           | W   | 0.850      | 0.432        | 0.013 (0.005)    | -                | 1 (0.850) |     2.96 | ADDICT, BRACE, hazr, pz, yourwombat         |
|           29 |     1254 | 2024-03-14 | Aurora         | L   | 0.844      | -            | -                | -                | -         |    -1.18 | ADDICT, BRACE, hazr, pz, yourwombat         |
|           28 |     1466 | 2024-03-06 | Vantage        | W   | 0.791      | 0.333        | -                | 0.332 (0.088)    | -         |     2.97 | ADDICT, BRACE, damyo, hazr, pz              |
|           27 |     1468 | 2024-03-06 | Vantage        | W   | 0.791      | 0.333        | -                | 0.332 (0.088)    | -         |     3.06 | ADDICT, BRACE, damyo, hazr, pz              |
|           26 |     1722 | 2024-02-22 | Rooster        | L   | 0.710      | -            | -                | -                | -         |   -14.20 | ADDICT, BRACE, Hatz, hazr, pz               |
|           25 |     1741 | 2024-02-22 | Vantage        | W   | 0.704      | -            | -                | -                | -         |     2.65 | ADDICT, BRACE, Hatz, hazr, pz               |
|           24 |     1743 | 2024-02-21 | FlyQuest       | L   | 0.703      | -            | -                | -                | -         |    -2.11 | ADDICT, BRACE, Hatz, hazr, pz               |
|           23 |     1768 | 2024-02-21 | FlyQuest       | L   | 0.698      | -            | -                | -                | -         |    -2.14 | ADDICT, BRACE, Hatz, hazr, pz               |
|           22 |     1772 | 2024-02-21 | FlyQuest       | L   | 0.697      | -            | -                | -                | -         |    -2.19 | ADDICT, BRACE, Hatz, hazr, pz               |
|           21 |     2283 | 2024-01-26 | Rooster        | W   | 0.524      | 0.143        | 0.029 (0.002)    | -                | -         |     5.58 | ADDICT, Hatz, hazr, pz, Valiance            |
|           20 |     2294 | 2024-01-25 | Vantage        | W   | 0.518      | -            | -                | -                | -         |     1.75 | ADDICT, Hatz, hazr, pz, Valiance            |
|           19 |     2316 | 2024-01-24 | disciples      | W   | 0.510      | -            | -                | -                | -         |     0.74 | ADDICT, Hatz, hazr, pz, Valiance            |
|           18 |     2362 | 2024-01-22 | Rooster        | L   | 0.498      | -            | -                | -                | -         |   -10.51 | ADDICT, BRACE, Hatz, hazr, pz               |
|           17 |     2366 | 2024-01-22 | FlyQuest       | L   | 0.497      | -            | -                | -                | -         |    -1.63 | ADDICT, BRACE, Hatz, hazr, pz               |
|           16 |     2391 | 2024-01-21 | FlyQuest       | L   | 0.491      | -            | -                | -                | -         |    -1.64 | ADDICT, BRACE, Hatz, hazr, pz               |
|           15 |     2401 | 2024-01-20 | Rooster        | W   | 0.489      | 0.143        | 0.029 (0.002)    | -                | -         |     5.31 | ADDICT, BRACE, Hatz, hazr, pz               |
|           14 |     2497 | 2024-01-19 | FlyQuest       | W   | 0.477      | 0.143        | 0.050 (0.003)    | 0.705 (0.048)    | -         |    13.62 | ADDICT, BRACE, Hatz, hazr, pz               |
|           13 |     2503 | 2024-01-18 | DXA            | W   | 0.476      | -            | -                | -                | -         |     0.73 | ADDICT, BRACE, Hatz, hazr, pz               |
|           12 |     3262 | 2023-12-02 | Zero Tenacity  | L   | 0.160      | -            | -                | -                | -         |    -2.41 | ADDICT, BRACE, hazr, pz, Valiance           |
|           11 |     3291 | 2023-12-01 | Guild Eagles   | L   | 0.151      | -            | -                | -                | -         |    -1.85 | ADDICT, BRACE, hazr, pz, Valiance           |
|           10 |     3440 | 2023-11-21 | FlyQuest       | L   | 0.085      | -            | -                | -                | -         |    -0.25 | ADDICT, BRACE, hazr, pz, Valiance           |
|            9 |     3442 | 2023-11-21 | Rooster        | W   | 0.084      | -            | -                | -                | -         |     0.94 | ADDICT, BRACE, hazr, pz, Valiance           |
|            8 |     3455 | 2023-11-20 | Vantage        | W   | 0.078      | -            | -                | -                | -         |     0.31 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|            7 |     3478 | 2023-11-18 | Rooster        | L   | 0.070      | -            | -                | -                | -         |    -1.42 | ADDICT, BRACE, hazr, pz, Valiance           |
|            6 |     3507 | 2023-11-18 | sunday school  | W   | 0.064      | -            | -                | -                | -         |     0.38 | damyo, guag, mizzy, rekonz, SkulL           |
|            5 |     3540 | 2023-11-17 | Rooster        | L   | 0.057      | -            | -                | -                | -         |    -1.17 | asap, chelleos, nettik, Rackem, TjP         |
|            4 |     3633 | 2023-11-14 | Stirlzs Angels | W   | 0.037      | -            | -                | -                | -         |     0.06 | ADDICT, BRACE, hazr, pz, Valiance           |
|            3 |     3651 | 2023-11-13 | Rooster        | L   | 0.031      | -            | -                | -                | -         |    -0.64 | ADDICT, BRACE, hazr, pz, Valiance           |
|            2 |     3686 | 2023-11-11 | sunday school  | W   | 0.023      | -            | -                | -                | -         |     0.08 | damyo, rekonz, SkulL, versa, viridian       |
|            1 |     3710 | 2023-11-11 | KZG            | W   | 0.017      | -            | -                | -                | -         |     0.03 | constantinos, Estate, MSK, pain, Samuukxs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,025.46)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-03-23 |      0.904 | $3,308.00      | $2,991.28       |
| 2024-03-16 |      0.858 | $5,000.00      | $4,291.21       |
| 2023-11-21 |      0.085 | $1,283.00      | $108.68         |
| 2023-11-18 |      0.070 | $1,927.00      | $134.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
