### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  750.4<br />
<br />
Final Rank Value (750.4) = Starting Rank Value (748.3) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.3
- 400 + ( ( 0.180 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 748.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      920 | 2024-03-15 | MOUZ NXT          | L   | 0.945      | -            | -                | -                | -         |    -7.94 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           48 |      957 | 2024-03-14 | ex-Preasy         | L   | 0.938      | -            | -                | -                | -         |   -12.54 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           47 |     1046 | 2024-03-11 | ECLOT             | W   | 0.917      | 0.371        | 0.083 (0.028)    | 0.623 (0.212)    | 0 (0.000) |    23.66 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           46 |     1063 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.912      | 0.371        | 0.019 (0.007)    | 0.639 (0.216)    | 0 (0.000) |    17.72 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           45 |     1092 | 2024-03-09 | Alliance          | L   | 0.905      | -            | -                | -                | -         |    -9.92 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           44 |     1107 | 2024-03-08 | Passion UA        | L   | 0.899      | -            | -                | -                | -         |    -8.46 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           43 |     1208 | 2024-03-05 | 500               | L   | 0.878      | -            | -                | -                | -         |   -15.08 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           42 |     1225 | 2024-03-04 | Sashi             | W   | 0.871      | 0.371        | 0.064 (0.021)    | 1.000 (0.323)    | 0 (0.000) |    18.96 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           41 |     1354 | 2024-02-26 | 9INE              | W   | 0.825      | -            | -                | -                | 0 (0.000) |     6.26 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           40 |     1375 | 2024-02-25 | Secret            | W   | 0.819      | 0.358        | -                | 0.210 (0.062)    | 0 (0.000) |     8.64 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           39 |     1425 | 2024-02-23 | Sampi             | L   | 0.804      | -            | -                | -                | -         |    -5.60 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           38 |     1470 | 2024-02-21 | MOUZ NXT          | L   | 0.791      | -            | -                | -                | -         |    -7.09 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           37 |     1557 | 2024-02-17 | The Chosen Few    | W   | 0.767      | 0.358        | 0.004 (0.001)    | 0.340 (0.094)    | 0 (0.000) |    11.16 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           36 |     1707 | 2024-02-11 | ALTERNATE aTTaX   | L   | 0.727      | -            | -                | -                | -         |    -7.85 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           35 |     1780 | 2024-02-05 | Sashi             | L   | 0.685      | -            | -                | -                | -         |    -6.56 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           34 |     1823 | 2024-02-03 | Sangal            | W   | 0.673      | 0.358        | -                | 0.685 (0.165)    | 0 (0.000) |     9.66 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           33 |     1930 | 2024-01-30 | Endpoint          | L   | 0.645      | -            | -                | -                | -         |    -8.02 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           32 |     1933 | 2024-01-30 | Preasy            | L   | 0.644      | -            | -                | -                | -         |    -3.25 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           31 |     1980 | 2024-01-26 | ALTERNATE aTTaX   | L   | 0.618      | -            | -                | -                | -         |    -8.69 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           30 |     2129 | 2024-01-20 | ex-sYnck          | L   | 0.579      | -            | -                | -                | -         |    -9.13 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           29 |     2171 | 2024-01-19 | EYEBALLERS        | W   | 0.574      | 0.143        | 0.052 (0.004)    | 0.406 (0.033)    | 0 (0.000) |    12.35 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           28 |     2223 | 2024-01-18 | Spirit            | L   | 0.567      | -            | -                | -                | -         |    -0.03 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           27 |     2243 | 2024-01-18 | Preasy            | L   | 0.566      | -            | -                | -                | -         |    -2.95 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           26 |     2558 | 2024-01-09 | fnatic            | L   | 0.508      | -            | -                | -                | -         |    -2.33 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           25 |     2561 | 2024-01-09 | KOI               | L   | 0.508      | -            | -                | -                | -         |    -2.74 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           24 |     2571 | 2024-01-09 | BLEED             | W   | 0.507      | 0.143        | 0.221 (0.016)    | 0.933 (0.068)    | 0 (0.000) |    13.86 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           23 |     2585 | 2024-01-09 | ECF               | W   | 0.506      | -            | -                | -                | 0 (0.000) |     4.32 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           22 |     2603 | 2024-01-09 | Come on now dawg  | W   | 0.506      | -            | -                | -                | -         |     2.06 | c0llins, Marix, mwlky, oxygeN, tiziaN  |
|           21 |     2936 | 2023-12-04 | ALTERNATE aTTaX   | L   | 0.265      | -            | -                | -                | -         |    -3.56 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           20 |     2983 | 2023-12-02 | Sangal            | L   | 0.251      | -            | -                | -                | -         |    -4.67 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           19 |     3037 | 2023-11-28 | IKLA              | L   | 0.224      | -            | -                | -                | -         |    -5.18 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           18 |     3039 | 2023-11-27 | IKLA              | W   | 0.219      | -            | -                | -                | -         |     1.87 | c0llins, Marix, oxygeN, S3NSEY, tiziaN |
|           17 |     3148 | 2023-11-20 | paiN              | L   | 0.174      | -            | -                | -                | -         |    -0.02 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           16 |     3157 | 2023-11-20 | Sprout            | L   | 0.172      | -            | -                | -                | -         |    -2.90 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           15 |     3262 | 2023-11-16 | SAW               | L   | 0.146      | -            | -                | -                | -         |    -0.27 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           14 |     3311 | 2023-11-15 | 9 Pandas          | L   | 0.139      | -            | -                | -                | -         |    -0.61 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           13 |     3332 | 2023-11-14 | Permitta          | W   | 0.132      | 0.384        | 0.031 (0.002)    | 0.970 (0.049)    | -         |     2.76 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           12 |     3352 | 2023-11-13 | Endpoint          | L   | 0.125      | -            | -                | -                | -         |    -1.63 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           11 |     3365 | 2023-11-12 | Aurora Young Blud | W   | 0.120      | -            | -                | -                | -         |     1.54 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|           10 |     3380 | 2023-11-12 | GUN5              | L   | 0.118      | -            | -                | -                | -         |    -2.44 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            9 |     3385 | 2023-11-12 | 9 Pandas          | W   | 0.118      | 0.384        | 0.083 (0.004)    | 0.656 (0.030)    | -         |     3.19 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            8 |     3407 | 2023-11-11 | ODDIK             | W   | 0.112      | 0.320        | 0.017 (0.001)    | -                | -         |     2.55 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            7 |     3432 | 2023-11-09 | TSM               | W   | 0.100      | 0.143        | 0.012 (0.000)    | -                | -         |     1.41 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            6 |     3482 | 2023-11-07 | The Chosen Few    | W   | 0.087      | -            | -                | -                | -         |     1.25 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            5 |     3618 | 2023-11-01 | ALTERNATE aTTaX   | L   | 0.044      | -            | -                | -                | -         |    -0.52 | enkay J, forsyy, Marix, oxygeN, tiziaN |
|            4 |     3645 | 2023-10-31 | Gaimin Gladiators | L   | 0.039      | -            | -                | -                | -         |    -0.04 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            3 |     3681 | 2023-10-30 | The Witchers      | L   | 0.031      | -            | -                | -                | -         |    -0.47 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            2 |     3728 | 2023-10-29 | B8                | L   | 0.025      | -            | -                | -                | -         |    -0.49 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            1 |     3809 | 2023-10-26 | FTW               | L   | 0.007      | -            | -                | -                | -         |    -0.13 | c0llins, forsyy, Marix, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($397.37)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-11-21 |      0.180 | $1,500.00      | $270.57         |
| 2023-11-12 |      0.121 | $1,050.00      | $126.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
