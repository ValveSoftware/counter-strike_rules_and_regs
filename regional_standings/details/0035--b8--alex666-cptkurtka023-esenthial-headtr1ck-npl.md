### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1165.9<br />
<br />
Final Rank Value (1165.9) = Starting Rank Value (1093.4) + Head To Head Adjustments (72.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.561[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.389[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1093.4
- 400 + ( ( 0.357 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1093.4


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
|           64 |       76 | 2024-05-26 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -22.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |       84 | 2024-05-25 | RUBY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.83 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |       90 | 2024-05-25 | BetBoom       | W   | 1.000      | 0.435        | 0.392 (0.170)    | 0.951 (0.413)    | 0 (0.000) |    22.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |      106 | 2024-05-24 | Alliance      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.65 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |      126 | 2024-05-23 | DMS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |      204 | 2024-05-21 | Rhyno         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |      245 | 2024-05-20 | EYEBALLERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.51 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |      270 | 2024-05-19 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -21.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |      292 | 2024-05-18 | Sashi         | W   | 1.000      | 0.384        | 0.157 (0.060)    | 1.000 (0.384)    | 0 (0.000) |    18.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |      308 | 2024-05-18 | Rebels        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |      337 | 2024-05-17 | 3DMAX         | W   | 1.000      | 0.500        | 0.105 (0.052)    | 0.669 (0.335)    | 0 (0.000) |    17.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |      365 | 2024-05-16 | DMS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |      380 | 2024-05-16 | Sampi         | W   | 1.000      | -            | -                | -                | -         |     9.22 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |      413 | 2024-05-15 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -22.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |      480 | 2024-05-14 | Verdant       | W   | 1.000      | -            | -                | -                | -         |     3.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |      485 | 2024-05-14 | MOUZ NXT      | W   | 1.000      | 0.384        | 0.157 (0.060)    | 1.000 (0.384)    | -         |    12.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |      520 | 2024-05-12 | BetBoom       | W   | 1.000      | 0.435        | 0.392 (0.170)    | 0.951 (0.413)    | -         |    24.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |      531 | 2024-05-12 | MOUZ NXT      | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | -         |    14.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |      565 | 2024-05-11 | BLEED         | W   | 1.000      | 0.435        | 0.246 (0.107)    | 0.982 (0.427)    | -         |    21.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |      601 | 2024-05-09 | KOI           | W   | 1.000      | -            | -                | -                | -         |    13.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |      658 | 2024-05-06 | Enterprise    | W   | 1.000      | -            | -                | -                | -         |     8.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |      696 | 2024-05-04 | GL Academy    | W   | 1.000      | -            | -                | -                | -         |     6.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |      743 | 2024-05-02 | Permitta      | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | -         |    11.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |      750 | 2024-05-01 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |    -7.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |      754 | 2024-05-01 | V1dar         | W   | 1.000      | -            | -                | -                | -         |     2.36 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |      768 | 2024-05-01 | SINNERS       | W   | 1.000      | -            | -                | -                | -         |    13.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |      785 | 2024-04-30 | Alliance      | W   | 1.000      | -            | -                | -                | -         |    10.51 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |      789 | 2024-04-30 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -15.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |      814 | 2024-04-28 | BLEED         | L   | 0.993      | -            | -                | -                | -         |    -6.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |      862 | 2024-04-26 | Alliance      | W   | 0.980      | -            | -                | -                | -         |     9.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |      932 | 2024-04-23 | BLEED         | L   | 0.959      | -            | -                | -                | -         |    -6.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |      947 | 2024-04-22 | Passion UA    | W   | 0.953      | 0.500        | -                | 0.759 (0.362)    | -         |    11.94 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |      953 | 2024-04-22 | Alliance      | L   | 0.951      | -            | -                | -                | -         |   -20.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |      971 | 2024-04-21 | PARIVISION    | W   | 0.944      | -            | -                | -                | -         |    10.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     1050 | 2024-04-19 | HAVU          | W   | 0.931      | -            | -                | -                | -         |     4.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     1111 | 2024-04-18 | Zero Tenacity | W   | 0.923      | 0.384        | 0.147 (0.052)    | 1.000 (0.355)    | -         |    12.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     1136 | 2024-04-17 | Zero Tenacity | L   | 0.917      | -            | -                | -                | -         |   -16.26 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     1173 | 2024-04-16 | AMKAL         | L   | 0.910      | -            | -                | -                | -         |    -8.43 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     1183 | 2024-04-15 | Sangal        | L   | 0.906      | -            | -                | -                | -         |   -15.01 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     1304 | 2024-04-10 | Nexus         | L   | 0.871      | -            | -                | -                | -         |   -18.81 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     1345 | 2024-04-09 | Rebels        | L   | 0.866      | -            | -                | -                | -         |   -13.65 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     1390 | 2024-04-08 | MOUZ NXT      | L   | 0.858      | -            | -                | -                | -         |   -14.78 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     1564 | 2024-04-02 | Metizport     | L   | 0.819      | -            | -                | -                | -         |   -15.51 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     1569 | 2024-04-02 | Apeks         | L   | 0.818      | -            | -                | -                | -         |   -11.39 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     1596 | 2024-03-31 | Apeks         | W   | 0.804      | 0.500        | 0.083 (0.033)    | -                | -         |    14.41 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     1609 | 2024-03-29 | Space         | L   | 0.792      | -            | -                | -                | -         |   -20.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     1655 | 2024-03-27 | Rebels        | W   | 0.780      | -            | -                | -                | -         |    10.88 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     1667 | 2024-03-27 | Sampi         | W   | 0.779      | -            | -                | -                | -         |     7.18 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     1698 | 2024-03-25 | FORZE         | W   | 0.766      | 0.500        | 0.108 (0.041)    | -                | -         |    11.01 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     1757 | 2024-03-21 | BetBoom       | L   | 0.738      | -            | -                | -                | -         |    -4.19 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     1797 | 2024-03-19 | ex-Sprout     | W   | 0.724      | -            | -                | -                | -         |     1.39 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     1864 | 2024-03-15 | 3DMAX         | L   | 0.699      | -            | -                | -                | -         |   -10.44 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     1957 | 2024-03-12 | Metizport     | L   | 0.680      | -            | -                | -                | -         |   -12.33 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     1963 | 2024-03-12 | ENCE          | W   | 0.679      | -            | -                | -                | -         |    18.37 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     1977 | 2024-03-11 | KOI           | W   | 0.673      | -            | -                | -                | -         |     8.60 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     1985 | 2024-03-11 | Virtus.pro    | L   | 0.672      | -            | -                | -                | -         |    -0.66 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     2049 | 2024-03-08 | PARIVISION    | L   | 0.652      | -            | -                | -                | -         |   -14.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     2135 | 2024-03-05 | Johnny Speeds | W   | 0.633      | -            | -                | -                | -         |     6.32 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     2142 | 2024-03-05 | Passion UA    | W   | 0.632      | -            | -                | -                | -         |     7.89 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     2150 | 2024-03-05 | UGANDA        | W   | 0.632      | -            | -                | -                | -         |     0.44 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     2277 | 2024-02-27 | DMS           | L   | 0.585      | -            | -                | -                | -         |   -16.86 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     2490 | 2024-02-18 | Aurora        | L   | 0.525      | -            | -                | -                | -         |    -2.07 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     2541 | 2024-02-16 | 500           | W   | 0.512      | -            | -                | -                | -         |     2.15 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     2546 | 2024-02-16 | PERA          | W   | 0.511      | -            | -                | -                | -         |     0.32 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49,562.98)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-22 |      1.000 | $500.00        | $500.00         |
| 2024-05-18 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-12 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-04-24 |      0.965 | $12,500.00     | $12,062.98      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
