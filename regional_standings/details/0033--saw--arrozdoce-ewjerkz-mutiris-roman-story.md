### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1246.2<br />
<br />
Final Rank Value (1246.2) = Starting Rank Value (1333.0) + Head To Head Adjustments (-86.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.513[<sup>1</sup>](#table2)
- Bounty Collected: 0.589[<sup>2</sup>](#table1)
- Opponent Network: 0.304[<sup>2</sup>](#table1)
- LAN Wins: 0.466[<sup>2</sup>](#table1)

The average of these factors is 0.468<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1333.0
- 400 + ( ( 0.468 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1333.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |        9 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -20.05 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           51 |       18 | 2024-06-10 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           50 |       21 | 2024-06-10 | Aurora            | W   | 1.000      | 0.143        | 0.513 (0.073)    | 0.918 (0.131)    | 0 (0.000) |    16.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           49 |       57 | 2024-06-09 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -24.35 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |       64 | 2024-06-09 | Monte             | W   | 1.000      | 0.143        | -                | 0.686 (0.098)    | 0 (0.000) |    12.29 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |       69 | 2024-06-09 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -19.36 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |       77 | 2024-06-09 | PARIVISION        | W   | 1.000      | -            | -                | -                | -         |     6.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |      286 | 2024-06-05 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -21.38 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |      341 | 2024-06-04 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -28.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |      390 | 2024-06-02 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -23.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |      459 | 2024-05-31 | Sangal            | W   | 1.000      | 0.143        | 0.214 (0.031)    | 0.998 (0.143)    | -         |     7.20 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |      465 | 2024-05-31 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -18.52 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |      468 | 2024-05-31 | FAVBET            | W   | 1.000      | -            | -                | -                | -         |     1.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |      840 | 2024-05-17 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -12.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |      861 | 2024-05-16 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.75 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |      877 | 2024-05-16 | Aurora            | W   | 1.000      | 0.769        | 0.513 (0.395)    | 0.918 (0.706)    | -         |    19.25 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1321 | 2024-04-28 | Virtus.pro        | L   | 0.912      | -            | -                | -                | -         |    -3.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1336 | 2024-04-27 | Eternal Fire      | W   | 0.907      | 0.889        | 1.000 (0.806)    | 0.560 (0.451)    | 1 (0.907) |    26.56 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1368 | 2024-04-26 | Imperial          | W   | 0.899      | 0.889        | 0.415 (0.332)    | 0.799 (0.639)    | 1 (0.899) |    19.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1417 | 2024-04-24 | Virtus.pro        | L   | 0.886      | -            | -                | -                | -         |    -3.16 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     1439 | 2024-04-23 | 3DMAX             | L   | 0.879      | -            | -                | -                | -         |   -17.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     1672 | 2024-04-16 | Sampi             | L   | 0.832      | -            | -                | -                | -         |   -22.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     1790 | 2024-04-10 | 9 Pandas          | W   | 0.794      | 0.500        | 0.114 (0.045)    | 0.758 (0.301)    | -         |     5.65 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     1842 | 2024-04-09 | 3DMAX             | L   | 0.787      | -            | -                | -                | -         |   -17.52 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     1952 | 2024-04-05 | PGE Turow         | W   | 0.758      | -            | -                | -                | -         |     0.56 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     1986 | 2024-04-04 | Betera            | W   | 0.753      | -            | -                | -                | -         |     0.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2029 | 2024-04-03 | PERA              | W   | 0.746      | 0.500        | -                | 0.417 (0.156)    | -         |     1.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2275 | 2024-03-20 | FURIA             | L   | 0.653      | -            | -                | -                | -         |    -4.09 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2292 | 2024-03-19 | paiN              | L   | 0.646      | -            | -                | -                | -         |    -4.81 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2300 | 2024-03-18 | Cloud9            | L   | 0.640      | -            | -                | -                | -         |    -9.45 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2314 | 2024-03-17 | GamerLegion       | W   | 0.634      | -            | -                | -                | 1 (0.634) |     4.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     2331 | 2024-03-17 | KOI               | W   | 0.632      | -            | -                | -                | 1 (0.632) |     3.00 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     2419 | 2024-03-13 | System5           | W   | 0.607      | -            | -                | -                | -         |     0.18 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     2503 | 2024-03-10 | OG                | W   | 0.587      | 0.535        | 0.249 (0.078)    | -                | -         |     5.36 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     2544 | 2024-03-08 | Cloud9            | W   | 0.574      | 0.535        | 0.159 (0.049)    | -                | -         |     9.91 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     2578 | 2024-03-07 | Liquid            | W   | 0.566      | 0.535        | 0.501 (0.152)    | 0.732 (0.222)    | -         |    14.99 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     2634 | 2024-03-05 | Monte             | W   | 0.554      | 0.500        | 0.179 (0.050)    | 0.686 (0.190)    | -         |     7.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     2798 | 2024-02-26 | RUSH B            | W   | 0.501      | -            | -                | -                | -         |     0.94 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3012 | 2024-02-17 | fnatic            | W   | 0.439      | -            | -                | -                | 1 (0.439) |     7.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3036 | 2024-02-16 | Enterprise        | W   | 0.433      | -            | -                | -                | 1 (0.433) |     1.83 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3068 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.425      | -            | -                | -                | 1 (0.425) |     0.51 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     3106 | 2024-02-14 | 9 Pandas          | L   | 0.419      | -            | -                | -                | -         |    -9.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     3117 | 2024-02-14 | Virtus.pro        | L   | 0.418      | -            | -                | -                | -         |    -1.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3242 | 2024-02-04 | Rhyno             | W   | 0.353      | -            | -                | -                | -         |     1.16 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3272 | 2024-02-03 | KOI               | W   | 0.346      | -            | -                | -                | -         |     1.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     3327 | 2024-02-01 | AL QATRAO         | W   | 0.333      | -            | -                | -                | -         |     0.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     3328 | 2024-02-01 | Agency            | W   | 0.333      | -            | -                | -                | -         |     0.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     3333 | 2024-02-01 | AL QATRAO         | L   | 0.332      | -            | -                | -                | -         |   -10.12 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     3572 | 2024-01-20 | 9 Pandas          | W   | 0.253      | -            | -                | -                | -         |     2.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     3629 | 2024-01-19 | Zero Tenacity     | W   | 0.246      | -            | -                | -                | -         |     1.60 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     3679 | 2024-01-18 | Virtus.pro        | L   | 0.240      | -            | -                | -                | -         |    -0.84 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     3686 | 2024-01-18 | fnatic            | W   | 0.239      | -            | -                | -                | -         |     4.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,279.16)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |
| 2024-03-10 |      0.587 | $20,000.00     | $11,746.43      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
