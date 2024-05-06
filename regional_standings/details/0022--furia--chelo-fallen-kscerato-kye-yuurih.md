### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1373.5<br />
<br />
Final Rank Value (1373.5) = Starting Rank Value (1537.6) + Head To Head Adjustments (-164.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.699[<sup>1</sup>](#table2)
- Bounty Collected: 0.485[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.597<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1537.6
- 400 + ( ( 0.597 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1537.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       21 | 2024-05-05 | Monte              | L   | 1.000      | -            | -                | -                | -         |   -20.29 | chelo, FalleN, KSCERATO, kye, yuurih |
|           42 |       40 | 2024-05-04 | ENCE               | W   | 1.000      | 0.889        | 0.360 (0.320)    | 0.450 (0.400)    | 1 (1.000) |    14.37 | chelo, FalleN, KSCERATO, kye, yuurih |
|           41 |       57 | 2024-05-03 | Bad News Kangaroos | W   | 1.000      | 0.889        | 0.068 (0.060)    | 0.359 (0.319)    | 1 (1.000) |     2.26 | chelo, FalleN, KSCERATO, kye, yuurih |
|           40 |      100 | 2024-05-01 | FORZE              | L   | 1.000      | -            | -                | -                | -         |   -25.02 | chelo, FalleN, KSCERATO, kye, yuurih |
|           39 |      121 | 2024-04-30 | Liquid             | L   | 1.000      | -            | -                | -                | -         |   -16.53 | chelo, FalleN, KSCERATO, kye, yuurih |
|           38 |      370 | 2024-04-19 | MIBR               | L   | 1.000      | -            | -                | -                | -         |    -7.38 | chelo, FalleN, KSCERATO, kye, yuurih |
|           37 |      390 | 2024-04-19 | Metizport          | W   | 1.000      | 0.589        | 0.183 (0.108)    | 1.000 (0.589)    | 1 (1.000) |     3.45 | chelo, FalleN, KSCERATO, kye, yuurih |
|           36 |      425 | 2024-04-18 | 9z                 | L   | 1.000      | -            | -                | -                | -         |   -28.38 | chelo, FalleN, KSCERATO, kye, yuurih |
|           35 |      711 | 2024-04-09 | HEROIC             | L   | 1.000      | -            | -                | -                | -         |    -9.42 | arT, chelo, FalleN, KSCERATO, yuurih |
|           34 |      734 | 2024-04-08 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -3.19 | arT, chelo, FalleN, KSCERATO, yuurih |
|           33 |      753 | 2024-04-07 | Lynn Vision        | W   | 1.000      | 0.624        | 0.135 (0.084)    | 0.390 (0.244)    | 1 (1.000) |     4.48 | arT, chelo, FalleN, KSCERATO, yuurih |
|           32 |     1072 | 2024-03-22 | Gaimin Gladiators  | L   | 0.901      | -            | -                | -                | -         |   -19.09 | arT, chelo, FalleN, KSCERATO, yuurih |
|           31 |     1091 | 2024-03-21 | FaZe               | L   | 0.894      | -            | -                | -                | -         |    -1.95 | arT, chelo, FalleN, KSCERATO, yuurih |
|           30 |     1102 | 2024-03-21 | G2                 | L   | 0.892      | -            | -                | -                | -         |    -3.04 | arT, chelo, FalleN, KSCERATO, yuurih |
|           29 |     1124 | 2024-03-20 | SAW                | W   | 0.887      | 0.143        | 0.248 (0.031)    | 0.774 (0.098)    | 1 (0.887) |    12.76 | arT, chelo, FalleN, KSCERATO, yuurih |
|           28 |     1140 | 2024-03-19 | ENCE               | W   | 0.880      | 0.143        | 0.360 (0.045)    | -                | 1 (0.880) |    13.58 | arT, chelo, FalleN, KSCERATO, yuurih |
|           27 |     1148 | 2024-03-18 | KOI                | W   | 0.873      | 0.143        | -                | 0.772 (0.096)    | 1 (0.873) |     3.06 | arT, chelo, FalleN, KSCERATO, yuurih |
|           26 |     1162 | 2024-03-17 | Lynn Vision        | L   | 0.867      | -            | -                | -                | -         |   -23.54 | arT, chelo, FalleN, KSCERATO, yuurih |
|           25 |     1177 | 2024-03-17 | Legacy             | L   | 0.866      | -            | -                | -                | -         |   -24.55 | arT, chelo, FalleN, KSCERATO, yuurih |
|           24 |     1524 | 2024-03-03 | Complexity         | W   | 0.774      | 0.143        | 0.262 (0.029)    | -                | 1 (0.774) |    13.81 | arT, chelo, FalleN, KSCERATO, yuurih |
|           23 |     1559 | 2024-03-02 | Liquid             | W   | 0.766      | 0.143        | -                | 0.726 (0.079)    | 1 (0.766) |     8.31 | arT, chelo, FalleN, KSCERATO, yuurih |
|           22 |     1581 | 2024-03-01 | Nouns              | W   | 0.760      | 0.143        | -                | 0.609 (0.066)    | 1 (0.760) |     0.40 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     1713 | 2024-02-23 | 9z                 | L   | 0.715      | -            | -                | -                | -         |   -21.06 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     1726 | 2024-02-22 | 9z                 | W   | 0.708      | -            | -                | -                | -         |     1.31 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     1734 | 2024-02-22 | Imperial           | W   | 0.707      | 0.143        | 0.656 (0.066)    | 0.965 (0.097)    | -         |    16.18 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     2015 | 2024-02-10 | Metizport          | L   | 0.626      | -            | -                | -                | -         |   -18.50 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     2017 | 2024-02-10 | ex-Anonymo         | W   | 0.626      | -            | -                | -                | -         |     0.28 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2019 | 2024-02-10 | Metizport          | L   | 0.625      | -            | -                | -                | -         |   -18.68 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2173 | 2024-02-01 | Apeks              | L   | 0.567      | -            | -                | -                | -         |   -13.02 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     2196 | 2024-01-31 | TheMongolz         | L   | 0.560      | -            | -                | -                | -         |   -11.41 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     3132 | 2023-12-08 | Spirit             | L   | 0.199      | -            | -                | -                | -         |    -1.21 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     3157 | 2023-12-07 | Astralis           | W   | 0.193      | -            | -                | -                | -         |     3.29 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     3189 | 2023-12-06 | Spirit             | L   | 0.186      | -            | -                | -                | -         |    -1.11 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     3242 | 2023-12-03 | Apeks              | W   | 0.167      | 0.589        | -                | 0.667 (0.065)    | -         |     1.32 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     3267 | 2023-12-02 | HAVU               | W   | 0.160      | -            | -                | -                | -         |     0.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     3285 | 2023-12-01 | MOUZ               | W   | 0.153      | 0.589        | 1.000 (0.090)    | -                | -         |     4.15 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     3303 | 2023-11-30 | Apeks              | L   | 0.146      | -            | -                | -                | -         |    -3.45 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     3305 | 2023-11-30 | Complexity         | W   | 0.145      | -            | -                | -                | -         |     2.59 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3470 | 2023-11-19 | 9 Pandas           | L   | 0.073      | -            | -                | -                | -         |    -2.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3485 | 2023-11-18 | MIBR               | W   | 0.067      | -            | -                | -                | -         |     1.42 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3495 | 2023-11-18 | Aurora             | W   | 0.066      | 0.500        | 0.973 (0.032)    | -                | -         |     1.20 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3523 | 2023-11-17 | Eternal Fire       | L   | 0.059      | -            | -                | -                | -         |    -0.54 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3547 | 2023-11-16 | Aurora             | W   | 0.054      | -            | -                | -                | -         |     0.99 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,097.39)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.37) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2024-02-02 |      0.574 | $2,500.00      | $1,435.21       |
| 2023-12-03 |      0.167 | $100,000.00    | $16,659.34      |
| 2023-11-20 |      0.080 | $10,000.00     | $798.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
