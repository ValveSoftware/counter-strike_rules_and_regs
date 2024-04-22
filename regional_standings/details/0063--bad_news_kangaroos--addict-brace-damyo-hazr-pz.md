### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [5]( ../standings_asia.md)<br />
Final Rank Value:  893.6<br />
<br />
Final Rank Value (893.6) = Starting Rank Value (939.8) + Head To Head Adjustments (-46.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.316[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 939.8
- 400 + ( ( 0.279 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 939.8


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
|           51 |       61 | 2024-04-20 | FlyQuest       | L   | 1.000      | -            | -                | -                | -         |    -4.85 | ADDICT, BRACE, damyo, hazr, pz              |
|           50 |       65 | 2024-04-20 | Rooster        | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.355 (0.051)    | 0 (0.000) |    13.59 | ADDICT, BRACE, damyo, hazr, pz              |
|           49 |      110 | 2024-04-19 | Mindfreak      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.80 | ADDICT, BRACE, damyo, hazr, pz              |
|           48 |      113 | 2024-04-19 | Rooster        | L   | 1.000      | -            | -                | -                | -         |   -17.57 | ADDICT, BRACE, damyo, hazr, pz              |
|           47 |      362 | 2024-04-10 | Rooster        | W   | 1.000      | 0.333        | 0.013 (0.004)    | 0.355 (0.118)    | 0 (0.000) |    13.31 | ADDICT, BRACE, damyo, hazr, pz              |
|           46 |      372 | 2024-04-10 | Rooster        | L   | 1.000      | -            | -                | -                | -         |   -18.41 | ADDICT, BRACE, damyo, hazr, pz              |
|           45 |      597 | 2024-04-03 | DXA            | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.277 (0.092)    | 0 (0.000) |     6.03 | ADDICT, BRACE, damyo, hazr, pz              |
|           44 |      601 | 2024-04-03 | DXA            | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.277 (0.092)    | 0 (0.000) |     6.38 | ADDICT, BRACE, damyo, hazr, pz              |
|           43 |      722 | 2024-03-27 | Mindfreak      | L   | 1.000      | -            | -                | -                | -         |   -26.36 | ADDICT, BRACE, damyo, hazr, pz              |
|           42 |      729 | 2024-03-27 | Mindfreak      | W   | 1.000      | 0.333        | -                | 0.339 (0.113)    | 0 (0.000) |     4.67 | ADDICT, BRACE, damyo, hazr, pz              |
|           41 |      772 | 2024-03-23 | DXA            | W   | 0.998      | 0.315        | 0.009 (0.003)    | 0.277 (0.087)    | 1 (0.998) |     6.42 | ADDICT, BRACE, damyo, hazr, pz              |
|           40 |      775 | 2024-03-23 | VexX           | W   | 0.997      | 0.315        | 0.009 (0.003)    | 0.295 (0.092)    | 1 (0.997) |     8.24 | ADDICT, BRACE, damyo, hazr, pz              |
|           39 |      833 | 2024-03-20 | Canon Event    | W   | 0.977      | -            | -                | -                | 0 (0.000) |     1.58 | ADDICT, BRACE, damyo, hazr, pz              |
|           38 |      834 | 2024-03-20 | Canon Event    | W   | 0.977      | -            | -                | -                | -         |     1.61 | ADDICT, BRACE, damyo, hazr, pz              |
|           37 |      904 | 2024-03-16 | Gods Reign     | L   | 0.950      | -            | -                | -                | -         |   -13.68 | ADDICT, BRACE, hazr, pz, yourwombat         |
|           36 |      925 | 2024-03-15 | GRDX           | W   | 0.943      | 0.432        | 0.012 (0.005)    | -                | 1 (0.943) |     3.82 | ADDICT, BRACE, hazr, pz, yourwombat         |
|           35 |      958 | 2024-03-14 | Aurora         | L   | 0.937      | -            | -                | -                | -         |    -3.28 | ADDICT, BRACE, hazr, pz, yourwombat         |
|           34 |     1170 | 2024-03-06 | Vantage        | W   | 0.884      | 0.333        | -                | 0.383 (0.113)    | -         |     3.78 | ADDICT, BRACE, damyo, hazr, pz              |
|           33 |     1172 | 2024-03-06 | Vantage        | W   | 0.884      | 0.333        | -                | 0.383 (0.113)    | -         |     3.92 | ADDICT, BRACE, damyo, hazr, pz              |
|           32 |     1426 | 2024-02-22 | Rooster        | L   | 0.803      | -            | -                | -                | -         |   -16.76 | ADDICT, BRACE, Hatz, hazr, pz               |
|           31 |     1445 | 2024-02-22 | Vantage        | W   | 0.797      | -            | -                | -                | -         |     3.44 | ADDICT, BRACE, Hatz, hazr, pz               |
|           30 |     1447 | 2024-02-21 | FlyQuest       | L   | 0.796      | -            | -                | -                | -         |    -5.40 | ADDICT, BRACE, Hatz, hazr, pz               |
|           29 |     1472 | 2024-02-21 | FlyQuest       | L   | 0.791      | -            | -                | -                | -         |    -5.63 | ADDICT, BRACE, Hatz, hazr, pz               |
|           28 |     1476 | 2024-02-21 | FlyQuest       | L   | 0.791      | -            | -                | -                | -         |    -5.92 | ADDICT, BRACE, Hatz, hazr, pz               |
|           27 |     1987 | 2024-01-26 | Rooster        | W   | 0.617      | 0.143        | 0.013 (0.001)    | -                | -         |     5.70 | ADDICT, Hatz, hazr, pz, Valiance            |
|           26 |     1998 | 2024-01-25 | Vantage        | W   | 0.611      | -            | -                | -                | -         |     2.27 | ADDICT, Hatz, hazr, pz, Valiance            |
|           25 |     2020 | 2024-01-24 | disciples      | W   | 0.604      | -            | -                | -                | -         |     0.97 | ADDICT, Hatz, hazr, pz, Valiance            |
|           24 |     2066 | 2024-01-22 | Rooster        | L   | 0.591      | -            | -                | -                | -         |   -13.39 | ADDICT, BRACE, Hatz, hazr, pz               |
|           23 |     2070 | 2024-01-22 | FlyQuest       | L   | 0.590      | -            | -                | -                | -         |    -4.93 | ADDICT, BRACE, Hatz, hazr, pz               |
|           22 |     2095 | 2024-01-21 | FlyQuest       | L   | 0.584      | -            | -                | -                | -         |    -5.08 | ADDICT, BRACE, Hatz, hazr, pz               |
|           21 |     2105 | 2024-01-20 | Rooster        | W   | 0.582      | 0.143        | 0.013 (0.001)    | -                | -         |     5.23 | ADDICT, BRACE, Hatz, hazr, pz               |
|           20 |     2201 | 2024-01-19 | FlyQuest       | W   | 0.570      | 0.143        | 0.045 (0.004)    | 0.647 (0.053)    | -         |    13.33 | ADDICT, BRACE, Hatz, hazr, pz               |
|           19 |     2207 | 2024-01-18 | DXA            | W   | 0.570      | -            | -                | -                | -         |     0.92 | ADDICT, BRACE, Hatz, hazr, pz               |
|           18 |     2966 | 2023-12-02 | Zero Tenacity  | L   | 0.254      | -            | -                | -                | -         |    -5.43 | ADDICT, BRACE, hazr, pz, Valiance           |
|           17 |     2995 | 2023-12-01 | Guild Eagles   | L   | 0.245      | -            | -                | -                | -         |    -2.91 | ADDICT, BRACE, hazr, pz, Valiance           |
|           16 |     3144 | 2023-11-21 | FlyQuest       | L   | 0.178      | -            | -                | -                | -         |    -1.48 | ADDICT, BRACE, hazr, pz, Valiance           |
|           15 |     3146 | 2023-11-21 | Rooster        | W   | 0.177      | -            | -                | -                | -         |     1.60 | ADDICT, BRACE, hazr, pz, Valiance           |
|           14 |     3159 | 2023-11-20 | Vantage        | W   | 0.171      | -            | -                | -                | -         |     0.79 | Kobe, KRAXYT, Mingovi, N1ghtraid, Omichella |
|           13 |     3182 | 2023-11-18 | Rooster        | L   | 0.163      | -            | -                | -                | -         |    -3.69 | ADDICT, BRACE, hazr, pz, Valiance           |
|           12 |     3211 | 2023-11-18 | sunday school  | W   | 0.157      | -            | -                | -                | -         |     0.76 | damyo, guag, mizzy, rekonz, SkulL           |
|           11 |     3244 | 2023-11-17 | Rooster        | L   | 0.150      | -            | -                | -                | -         |    -3.44 | asap, chelleos, nettik, Rackem, TjP         |
|           10 |     3337 | 2023-11-14 | Stirlzs Angels | W   | 0.130      | -            | -                | -                | -         |     0.48 | ADDICT, BRACE, hazr, pz, Valiance           |
|            9 |     3355 | 2023-11-13 | Rooster        | L   | 0.124      | -            | -                | -                | -         |    -2.87 | ADDICT, BRACE, hazr, pz, Valiance           |
|            8 |     3390 | 2023-11-11 | sunday school  | W   | 0.116      | -            | -                | -                | -         |     0.46 | damyo, rekonz, SkulL, versa, viridian       |
|            7 |     3414 | 2023-11-11 | KZG            | W   | 0.110      | -            | -                | -                | -         |     0.24 | constantinos, KZXL, MSK, pain, Samuukxs     |
|            6 |     3529 | 2023-11-04 | Rooster        | L   | 0.070      | -            | -                | -                | -         |    -1.61 | asap, chelleos, nettik, Rackem, TjP         |
|            5 |     3553 | 2023-11-04 | Vantage        | W   | 0.064      | -            | -                | -                | -         |     0.28 | Kobe, KRAXYT, Lexon, Mingovi, Omichella     |
|            4 |     3571 | 2023-11-03 | Rooster        | L   | 0.057      | -            | -                | -                | -         |    -1.33 | asap, chelleos, nettik, Rackem, TjP         |
|            3 |     3686 | 2023-10-30 | sunday school  | W   | 0.030      | -            | -                | -                | -         |     0.12 | BaN4na, damyo, rekonz, SkulL, viridian      |
|            2 |     3731 | 2023-10-29 | Stirlzs Angels | W   | 0.024      | -            | -                | -                | -         |     0.09 | callum_murray, dpr, Drox, toM, vision       |
|            1 |     3772 | 2023-10-28 | KZG            | W   | 0.017      | -            | -                | -                | -         |     0.04 | Hassie, KZXL, MSK, pain, Samuukxs           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,731.46)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.998 | $3,308.00      | $3,299.94       |
| 2024-03-16 |      0.952 | $5,000.00      | $4,757.74       |
| 2023-11-21 |      0.178 | $1,283.00      | $228.39         |
| 2023-11-18 |      0.163 | $1,927.00      | $314.08         |
| 2023-11-04 |      0.070 | $1,887.00      | $131.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
