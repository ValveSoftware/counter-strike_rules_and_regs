### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1338.8<br />
<br />
Final Rank Value (1338.8) = Starting Rank Value (1353.9) + Head To Head Adjustments (-15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.510[<sup>1</sup>](#table2)
- Bounty Collected: 0.592[<sup>2</sup>](#table1)
- Opponent Network: 0.329[<sup>2</sup>](#table1)
- LAN Wins: 0.535[<sup>2</sup>](#table1)

The average of these factors is 0.491<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1353.9
- 400 + ( ( 0.491 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1353.9


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
|           44 |      340 | 2024-05-17 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -16.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |      361 | 2024-05-16 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -3.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |      377 | 2024-05-16 | Aurora            | W   | 1.000      | 0.769        | 0.493 (0.379)    | 0.840 (0.646)    | 0 (0.000) |    14.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |      821 | 2024-04-28 | Virtus.pro        | L   | 0.992      | -            | -                | -                | -         |    -4.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |      836 | 2024-04-27 | Eternal Fire      | W   | 0.986      | 0.889        | 1.000 (0.876)    | 0.605 (0.531)    | 1 (0.986) |    28.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |      868 | 2024-04-26 | Imperial          | W   | 0.978      | 0.889        | 0.373 (0.324)    | 0.889 (0.773)    | 1 (0.978) |    21.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |      917 | 2024-04-24 | Virtus.pro        | L   | 0.965      | -            | -                | -                | -         |    -3.87 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |      939 | 2024-04-23 | 3DMAX             | L   | 0.958      | -            | -                | -                | -         |   -21.41 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1172 | 2024-04-16 | Sampi             | L   | 0.911      | -            | -                | -                | -         |   -25.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1290 | 2024-04-10 | 9 Pandas          | W   | 0.873      | 0.500        | 0.108 (0.047)    | 0.798 (0.348)    | 0 (0.000) |     5.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1342 | 2024-04-09 | 3DMAX             | L   | 0.866      | -            | -                | -                | -         |   -20.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1452 | 2024-04-05 | PGE Turow         | W   | 0.837      | -            | -                | -                | 0 (0.000) |     0.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     1486 | 2024-04-04 | Betera            | W   | 0.832      | -            | -                | -                | -         |     0.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     1529 | 2024-04-03 | PERA              | W   | 0.825      | 0.500        | 0.027 (0.011)    | 0.408 (0.168)    | -         |     1.50 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     1775 | 2024-03-20 | FURIA             | L   | 0.732      | -            | -                | -                | -         |   -12.04 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     1792 | 2024-03-19 | paiN              | L   | 0.725      | -            | -                | -                | -         |    -5.72 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     1800 | 2024-03-18 | Cloud9            | L   | 0.719      | -            | -                | -                | -         |    -9.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     1814 | 2024-03-17 | GamerLegion       | W   | 0.713      | -            | -                | -                | 1 (0.713) |     5.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     1831 | 2024-03-17 | KOI               | W   | 0.711      | -            | -                | -                | 1 (0.711) |     2.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     1919 | 2024-03-13 | System5           | W   | 0.686      | -            | -                | -                | -         |     0.19 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2003 | 2024-03-10 | OG                | W   | 0.666      | 0.535        | 0.278 (0.099)    | 0.376 (0.134)    | -         |     5.97 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2044 | 2024-03-08 | Cloud9            | W   | 0.653      | 0.535        | 0.188 (0.066)    | 0.382 (0.133)    | -         |    12.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2078 | 2024-03-07 | Liquid            | W   | 0.645      | 0.535        | 0.493 (0.170)    | 0.854 (0.295)    | -         |    16.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     2134 | 2024-03-05 | Monte             | W   | 0.633      | 0.500        | 0.181 (0.057)    | 0.611 (0.193)    | -         |     8.17 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     2298 | 2024-02-26 | RUSH B            | W   | 0.580      | 0.500        | -                | 0.242 (0.070)    | -         |     0.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     2512 | 2024-02-17 | fnatic            | W   | 0.518      | 0.143        | 0.148 (0.011)    | -                | 1 (0.518) |     3.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     2536 | 2024-02-16 | Enterprise        | W   | 0.512      | -            | -                | -                | 1 (0.512) |     1.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     2568 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.505      | -            | -                | -                | 1 (0.505) |     0.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     2606 | 2024-02-14 | 9 Pandas          | L   | 0.498      | -            | -                | -                | -         |   -11.68 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     2617 | 2024-02-14 | Virtus.pro        | L   | 0.497      | -            | -                | -                | -         |    -2.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     2742 | 2024-02-04 | Rhyno             | W   | 0.432      | -            | -                | -                | -         |     1.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     2772 | 2024-02-03 | KOI               | W   | 0.425      | -            | -                | -                | -         |     1.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     2827 | 2024-02-01 | AL QATRAO         | W   | 0.412      | -            | -                | -                | -         |     0.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     2828 | 2024-02-01 | Agency            | W   | 0.412      | -            | -                | -                | -         |     0.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     2833 | 2024-02-01 | AL QATRAO         | L   | 0.412      | -            | -                | -                | -         |   -12.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3072 | 2024-01-20 | 9 Pandas          | W   | 0.332      | -            | -                | -                | -         |     2.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3129 | 2024-01-19 | Zero Tenacity     | W   | 0.325      | -            | -                | -                | -         |     1.54 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     3179 | 2024-01-18 | Virtus.pro        | L   | 0.319      | -            | -                | -                | -         |    -1.29 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     3186 | 2024-01-18 | fnatic            | W   | 0.319      | -            | -                | -                | -         |     2.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     3726 | 2023-12-11 | FORZE             | L   | 0.065      | -            | -                | -                | -         |    -1.99 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     3848 | 2023-12-06 | 9 Pandas          | L   | 0.031      | -            | -                | -                | -         |    -0.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     3878 | 2023-12-05 | RED Canids        | W   | 0.024      | -            | -                | -                | -         |     0.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     3882 | 2023-12-04 | Zero Tenacity     | W   | 0.018      | -            | -                | -                | -         |     0.09 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     3897 | 2023-12-03 | Aurora            | L   | 0.012      | -            | -                | -                | -         |    -0.12 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,891.72)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |
| 2024-03-10 |      0.666 | $20,000.00     | $13,329.88      |
| 2023-12-13 |      0.079 | $500.00        | $39.68          |
| 2023-12-07 |      0.040 | $5,000.00      | $197.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
