### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1004.1<br />
<br />
Final Rank Value (1004.1) = Starting Rank Value (982.9) + Head To Head Adjustments (21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.477[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.327[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 982.9
- 400 + ( ( 0.306 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 982.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |        7 | 2024-05-06 | Enterprise    | W   | 1.000      | 0.435        | -                | 0.459 (0.199)    | 0 (0.000) |    11.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |       45 | 2024-05-04 | GL Academy    | W   | 1.000      | 0.435        | 0.035 (0.015)    | -                | 0 (0.000) |     8.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |       92 | 2024-05-02 | Permitta      | W   | 1.000      | 0.384        | 0.053 (0.021)    | 0.979 (0.376)    | 0 (0.000) |    13.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |       99 | 2024-05-01 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |    -6.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |      103 | 2024-05-01 | V1dar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.94 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |      117 | 2024-05-01 | SINNERS       | W   | 1.000      | 0.384        | 0.033 (0.013)    | 0.749 (0.288)    | 0 (0.000) |    15.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |      134 | 2024-04-30 | Alliance      | W   | 1.000      | 0.500        | -                | 0.815 (0.407)    | 0 (0.000) |    12.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |      138 | 2024-04-30 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -15.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |      163 | 2024-04-28 | BLEED         | L   | 1.000      | -            | -                | -                | -         |    -5.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |      211 | 2024-04-26 | Alliance      | W   | 1.000      | 0.500        | -                | 0.815 (0.407)    | 0 (0.000) |    11.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |      281 | 2024-04-23 | BLEED         | L   | 1.000      | -            | -                | -                | -         |    -5.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |      296 | 2024-04-22 | Passion UA    | W   | 1.000      | 0.500        | 0.111 (0.055)    | 0.644 (0.322)    | 0 (0.000) |    14.88 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |      302 | 2024-04-22 | Alliance      | L   | 1.000      | -            | -                | -                | -         |   -19.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |      320 | 2024-04-21 | PARIVISION    | W   | 1.000      | 0.500        | -                | 0.544 (0.272)    | 0 (0.000) |    12.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |      399 | 2024-04-19 | HAVU          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.81 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |      460 | 2024-04-18 | Zero Tenacity | W   | 1.000      | 0.384        | 0.093 (0.036)    | 0.936 (0.360)    | -         |    13.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |      485 | 2024-04-17 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -18.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |      522 | 2024-04-16 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |    -6.80 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |      532 | 2024-04-15 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -21.23 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |      653 | 2024-04-10 | Nexus         | L   | 1.000      | -            | -                | -                | -         |   -18.09 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |      694 | 2024-04-09 | Rebels        | L   | 1.000      | -            | -                | -                | -         |   -12.82 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |      739 | 2024-04-08 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -14.43 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |      913 | 2024-04-02 | Metizport     | L   | 0.973      | -            | -                | -                | -         |   -14.45 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |      918 | 2024-04-02 | Apeks         | L   | 0.972      | -            | -                | -                | -         |    -7.08 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |      945 | 2024-03-31 | Apeks         | W   | 0.959      | 0.500        | 0.237 (0.114)    | 0.667 (0.320)    | -         |    23.76 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |      958 | 2024-03-29 | Space         | L   | 0.946      | -            | -                | -                | -         |   -24.86 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     1004 | 2024-03-27 | Rebels        | W   | 0.934      | 0.143        | 0.111 (0.015)    | -                | -         |    16.35 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     1016 | 2024-03-27 | Sampi         | W   | 0.933      | 0.143        | 0.101 (0.014)    | -                | -         |    13.06 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     1047 | 2024-03-25 | FORZE         | W   | 0.920      | 0.500        | 0.205 (0.094)    | 0.682 (0.314)    | -         |    19.54 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     1106 | 2024-03-21 | BetBoom       | L   | 0.892      | -            | -                | -                | -         |    -3.29 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     1146 | 2024-03-19 | ex-Sprout     | W   | 0.878      | -            | -                | -                | -         |     3.22 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     1213 | 2024-03-15 | 3DMAX         | L   | 0.853      | -            | -                | -                | -         |    -8.83 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     1306 | 2024-03-12 | Metizport     | L   | 0.834      | -            | -                | -                | -         |    -9.78 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     1312 | 2024-03-12 | ENCE          | W   | 0.833      | 0.143        | 0.360 (0.043)    | -                | -         |    24.63 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     1326 | 2024-03-11 | KOI           | W   | 0.827      | -            | -                | -                | -         |    17.13 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     1334 | 2024-03-11 | Virtus.pro    | L   | 0.826      | -            | -                | -                | -         |    -0.36 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     1398 | 2024-03-08 | PARIVISION    | L   | 0.806      | -            | -                | -                | -         |   -14.91 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     1484 | 2024-03-05 | Johnny Speeds | W   | 0.787      | -            | -                | -                | -         |     6.83 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     1491 | 2024-03-05 | Passion UA    | W   | 0.786      | -            | -                | -                | -         |    13.14 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     1499 | 2024-03-05 | UGANDA        | W   | 0.786      | -            | -                | -                | -         |     0.98 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     1626 | 2024-02-27 | DMS           | L   | 0.740      | -            | -                | -                | -         |   -21.49 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     1839 | 2024-02-18 | Aurora        | L   | 0.679      | -            | -                | -                | -         |    -1.01 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     1890 | 2024-02-16 | 500           | W   | 0.666      | -            | -                | -                | -         |     5.41 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     1895 | 2024-02-16 | PERA          | W   | 0.665      | -            | -                | -                | -         |     2.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,000.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-24 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-20 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
