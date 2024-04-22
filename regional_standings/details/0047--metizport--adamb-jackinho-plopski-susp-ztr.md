### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, Plopski, susp, ztr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  987.8<br />
<br />
Final Rank Value (987.8) = Starting Rank Value (974.1) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.535[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.297<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 974.1
- 400 + ( ( 0.297 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 974.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |       94 | 2024-04-19 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -4.00 | adamb, Jackinho, Plopski, susp, ztr |
|           65 |      132 | 2024-04-18 | Imperial          | L   | 1.000      | -            | -                | -                | -         |    -1.52 | adamb, Jackinho, Plopski, susp, ztr |
|           64 |      414 | 2024-04-09 | Guild Eagles      | L   | 1.000      | -            | -                | -                | -         |   -18.23 | adamb, Jackinho, nilo, susp, ztr    |
|           63 |      430 | 2024-04-08 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.71 | adamb, Jackinho, nilo, susp, ztr    |
|           62 |      442 | 2024-04-08 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -12.99 | adamb, Jackinho, nilo, susp, ztr    |
|           61 |      467 | 2024-04-07 | EYEBALLERS        | W   | 1.000      | 0.330        | -                | 0.406 (0.134)    | 0 (0.000) |     9.82 | adamb, Jackinho, nilo, susp, ztr    |
|           60 |      476 | 2024-04-07 | Johnny Speeds     | W   | 1.000      | 0.330        | -                | 0.268 (0.088)    | 0 (0.000) |     6.83 | adamb, Jackinho, nilo, susp, ztr    |
|           59 |      492 | 2024-04-06 | Young Gods        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.98 | adamb, Jackinho, nilo, susp, ztr    |
|           58 |      544 | 2024-04-04 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -18.70 | adamb, Jackinho, nilo, susp, ztr    |
|           57 |      570 | 2024-04-03 | Monte             | W   | 1.000      | 0.143        | 0.236 (0.034)    | -                | 0 (0.000) |    20.07 | adamb, Jackinho, nilo, susp, ztr    |
|           56 |      583 | 2024-04-03 | Blessed           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.60 | adamb, Jackinho, nilo, susp, ztr    |
|           55 |      617 | 2024-04-02 | B8                | W   | 1.000      | 0.143        | -                | 0.655 (0.094)    | 0 (0.000) |    11.67 | adamb, Jackinho, nilo, susp, ztr    |
|           54 |      623 | 2024-04-02 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.48 | adamb, Jackinho, nilo, susp, ztr    |
|           53 |      639 | 2024-04-01 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -24.63 | adamb, Jackinho, nilo, susp, ztr    |
|           52 |      707 | 2024-03-27 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.78 | adamb, Jackinho, nilo, susp, ztr    |
|           51 |      713 | 2024-03-27 | NAVI Junior       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.60 | adamb, Jackinho, nilo, susp, ztr    |
|           50 |      916 | 2024-03-15 | ECF               | L   | 0.946      | -            | -                | -                | -         |   -27.02 | adamb, Jackinho, nilo, susp, ztr    |
|           49 |      953 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.939      | -            | -                | -                | -         |   -23.70 | adamb, Jackinho, nilo, susp, ztr    |
|           48 |      987 | 2024-03-13 | HEROIC            | L   | 0.932      | -            | -                | -                | -         |    -1.88 | adamb, Jackinho, nilo, susp, ztr    |
|           47 |     1010 | 2024-03-12 | B8                | W   | 0.927      | 0.143        | -                | 0.655 (0.087)    | 0 (0.000) |     7.08 | adamb, Jackinho, nilo, susp, ztr    |
|           46 |     1018 | 2024-03-12 | Apeks             | W   | 0.926      | 0.143        | 0.193 (0.026)    | 0.687 (0.091)    | -         |    22.25 | adamb, Jackinho, nilo, susp, ztr    |
|           45 |     1028 | 2024-03-11 | Preasy            | W   | 0.921      | 0.143        | 0.205 (0.027)    | 0.723 (0.095)    | -         |    15.99 | adamb, Jackinho, nilo, susp, ztr    |
|           44 |     1042 | 2024-03-11 | ENCE              | L   | 0.919      | -            | -                | -                | -         |    -3.35 | adamb, Jackinho, nilo, susp, ztr    |
|           43 |     1050 | 2024-03-10 | Spirit            | L   | 0.914      | -            | -                | -                | -         |    -0.23 | adamb, Jackinho, nilo, susp, ztr    |
|           42 |     1077 | 2024-03-09 | Monte             | W   | 0.906      | 0.535        | 0.236 (0.114)    | 0.598 (0.290)    | -         |    20.81 | adamb, Jackinho, nilo, susp, ztr    |
|           41 |     1084 | 2024-03-09 | EYEBALLERS        | L   | 0.905      | -            | -                | -                | -         |   -18.90 | adamb, Jackinho, nilo, susp, ztr    |
|           40 |     1090 | 2024-03-09 | Lemondogs         | W   | 0.905      | -            | -                | -                | -         |     0.79 | adamb, Jackinho, nilo, susp, ztr    |
|           39 |     1108 | 2024-03-08 | Secret            | W   | 0.899      | -            | -                | -                | -         |     2.36 | adamb, Jackinho, nilo, susp, ztr    |
|           38 |     1149 | 2024-03-06 | Falcons           | W   | 0.887      | 0.535        | 0.389 (0.184)    | 0.201 (0.095)    | -         |    23.36 | adamb, Jackinho, nilo, susp, ztr    |
|           37 |     1229 | 2024-03-03 | The Chosen Few    | W   | 0.867      | -            | -                | -                | -         |     4.86 | adamb, Jackinho, nilo, susp, ztr    |
|           36 |     1238 | 2024-03-03 | ILIN              | W   | 0.866      | -            | -                | -                | -         |     1.99 | adamb, Jackinho, nilo, susp, ztr    |
|           35 |     1242 | 2024-03-03 | RUSH B            | W   | 0.866      | -            | -                | -                | -         |     5.60 | adamb, Jackinho, nilo, susp, ztr    |
|           34 |     1251 | 2024-03-03 | ECLOT             | L   | 0.866      | -            | -                | -                | -         |   -11.71 | adamb, Jackinho, nilo, susp, ztr    |
|           33 |     1297 | 2024-02-29 | Endpoint          | W   | 0.846      | -            | -                | -                | -         |     6.75 | adamb, Jackinho, nilo, susp, ztr    |
|           32 |     1320 | 2024-02-28 | INGLORIOUS        | W   | 0.838      | -            | -                | -                | -         |     1.97 | adamb, Jackinho, spooke, susp, ztr  |
|           31 |     1334 | 2024-02-27 | Guild Eagles      | L   | 0.833      | -            | -                | -                | -         |   -11.96 | adamb, Jackinho, nilo, susp, ztr    |
|           30 |     1706 | 2024-02-11 | Apeks             | W   | 0.727      | 0.143        | 0.193 (0.020)    | -                | -         |    18.96 | adamb, Jackinho, nilo, susp, ztr    |
|           29 |     1711 | 2024-02-11 | ex-Sprout         | W   | 0.726      | -            | -                | -                | -         |     3.11 | adamb, Jackinho, nilo, susp, ztr    |
|           28 |     1719 | 2024-02-10 | FURIA             | W   | 0.719      | 0.143        | 0.316 (0.032)    | -                | -         |    20.68 | adamb, Jackinho, nilo, susp, ztr    |
|           27 |     1722 | 2024-02-10 | Apeks             | L   | 0.719      | -            | -                | -                | -         |    -3.41 | adamb, Jackinho, nilo, susp, ztr    |
|           26 |     1723 | 2024-02-10 | FURIA             | W   | 0.719      | 0.143        | 0.316 (0.032)    | -                | -         |    21.00 | adamb, Jackinho, nilo, susp, ztr    |
|           25 |     1758 | 2024-02-07 | ex-Sprout         | W   | 0.699      | -            | -                | -                | -         |     3.06 | adamb, Jackinho, nilo, susp, ztr    |
|           24 |     1766 | 2024-02-06 | Into the Breach   | L   | 0.693      | -            | -                | -                | -         |   -13.85 | adamb, Jackinho, nilo, susp, ztr    |
|           23 |     1779 | 2024-02-05 | TSM               | L   | 0.685      | -            | -                | -                | -         |   -15.43 | adamb, Jackinho, nilo, susp, ztr    |
|           22 |     1786 | 2024-02-04 | 500               | L   | 0.681      | -            | -                | -                | -         |   -18.25 | adamb, Jackinho, nilo, susp, ztr    |
|           21 |     1792 | 2024-02-04 | TMVG              | W   | 0.680      | -            | -                | -                | -         |     1.62 | adamb, Jackinho, nilo, susp, ztr    |
|           20 |     1803 | 2024-02-04 | DUSTY             | W   | 0.678      | -            | -                | -                | -         |     3.91 | adamb, Jackinho, nilo, susp, ztr    |
|           19 |     1833 | 2024-02-03 | Sangal            | W   | 0.671      | 0.371        | -                | 0.685 (0.170)    | -         |     3.77 | adamb, Jackinho, nilo, susp, ztr    |
|           18 |     1845 | 2024-02-02 | EYEBALLERS        | W   | 0.667      | -            | -                | -                | -         |     8.02 | adamb, Jackinho, nilo, susp, ztr    |
|           17 |     1847 | 2024-02-02 | Preasy            | W   | 0.667      | 0.143        | 0.205 (0.020)    | -                | -         |    12.93 | adamb, Jackinho, nilo, susp, ztr    |
|           16 |     1884 | 2024-02-01 | Sampi             | W   | 0.659      | -            | -                | -                | -         |    10.15 | adamb, Jackinho, nilo, susp, ztr    |
|           15 |     1935 | 2024-01-29 | BLEED             | W   | 0.638      | 0.371        | 0.221 (0.052)    | 0.933 (0.221)    | -         |    13.58 | adamb, Jackinho, nilo, susp, ztr    |
|           14 |     1996 | 2024-01-25 | BIG Academy       | W   | 0.612      | -            | -                | -                | -         |     0.90 | adamb, Jackinho, nilo, susp, ztr    |
|           13 |     2594 | 2024-01-09 | IKLA              | L   | 0.506      | -            | -                | -                | -         |   -13.96 | adamb, Jackinho, nilo, susp, ztr    |
|           12 |     2614 | 2023-12-30 | The Witchers      | L   | 0.439      | -            | -                | -                | -         |   -10.32 | adamb, Jackinho, nilo, susp, ztr    |
|           11 |     2616 | 2023-12-30 | VP.Prodigy        | W   | 0.438      | -            | -                | -                | -         |     2.47 | adamb, Jackinho, nilo, susp, ztr    |
|           10 |     2618 | 2023-12-29 | Aurora Young Blud | W   | 0.433      | -            | -                | -                | -         |     2.47 | adamb, Jackinho, nilo, susp, ztr    |
|            9 |     2619 | 2023-12-29 | esmagaB           | W   | 0.432      | -            | -                | -                | -         |     3.77 | adamb, Jackinho, nilo, susp, ztr    |
|            8 |     2625 | 2023-12-27 | Aurora Young Blud | L   | 0.419      | -            | -                | -                | -         |   -10.89 | adamb, Jackinho, nilo, susp, ztr    |
|            7 |     2639 | 2023-12-20 | PERA              | L   | 0.373      | -            | -                | -                | -         |    -8.52 | adamb, Jackinho, nilo, susp, ztr    |
|            6 |     2641 | 2023-12-20 | ARCRED            | W   | 0.372      | -            | -                | -                | -         |     2.20 | adamb, Jackinho, nilo, susp, ztr    |
|            5 |     2650 | 2023-12-19 | GUN5              | W   | 0.365      | -            | -                | -                | -         |     1.66 | adamb, Jackinho, nilo, susp, ztr    |
|            4 |     2653 | 2023-12-19 | PERA              | W   | 0.364      | -            | -                | -                | -         |     3.04 | adamb, Jackinho, nilo, susp, ztr    |
|            3 |     2675 | 2023-12-17 | Lilmix            | W   | 0.354      | -            | -                | -                | 1 (0.354) |     1.00 | adamb, Jackinho, nilo, susp, ztr    |
|            2 |     2682 | 2023-12-17 | BLUDS             | L   | 0.352      | -            | -                | -                | -         |    -8.92 | adamb, Jackinho, nilo, susp, ztr    |
|            1 |     2690 | 2023-12-17 | latch gibb        | W   | 0.351      | -            | -                | -                | 1 (0.351) |     0.43 | adamb, Jackinho, nilo, susp, ztr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,811.17)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-07 |      1.000 | $6,110.00      | $6,110.00       |
| 2024-03-10 |      0.914 | $12,500.00     | $11,423.66      |
| 2023-12-30 |      0.439 | $5,000.00      | $2,195.52       |
| 2023-12-20 |      0.373 | $2,000.00      | $746.00         |
| 2023-12-17 |      0.354 | $950.00        | $336.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
