### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1175.9<br />
<br />
Final Rank Value (1175.9) = Starting Rank Value (1117.3) + Head To Head Adjustments (58.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.557[<sup>1</sup>](#table2)
- Bounty Collected: 0.490[<sup>2</sup>](#table1)
- Opponent Network: 0.393[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1117.3
- 400 + ( ( 0.360 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1117.3


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
|           69 |       60 | 2024-06-09 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |   -10.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |      172 | 2024-06-07 | Verdant       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |      180 | 2024-06-07 | PERA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.94 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |      189 | 2024-06-07 | Verdant       | L   | 1.000      | -            | -                | -                | -         |   -27.78 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |      484 | 2024-05-30 | SINNERS       | L   | 1.000      | -            | -                | -                | -         |   -21.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |      576 | 2024-05-26 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -21.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |      584 | 2024-05-25 | RUBY          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.34 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |      590 | 2024-05-25 | BetBoom       | W   | 1.000      | 0.435        | 0.427 (0.186)    | 0.917 (0.399)    | 0 (0.000) |    24.70 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |      606 | 2024-05-24 | Alliance      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.72 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |      626 | 2024-05-23 | DMS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |      704 | 2024-05-21 | Rhyno         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.59 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |      745 | 2024-05-20 | EYEBALLERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |      770 | 2024-05-19 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -21.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |      792 | 2024-05-18 | Sashi         | W   | 1.000      | 0.384        | 0.174 (0.067)    | 1.000 (0.384)    | 0 (0.000) |    18.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |      808 | 2024-05-18 | Rebels        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |      837 | 2024-05-17 | 3DMAX         | W   | 1.000      | 0.500        | 0.122 (0.061)    | 0.821 (0.410)    | -         |    17.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |      865 | 2024-05-16 | DMS           | W   | 1.000      | -            | -                | -                | -         |     6.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |      880 | 2024-05-16 | Sampi         | W   | 1.000      | 0.384        | -                | 0.883 (0.339)    | -         |     9.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |      913 | 2024-05-15 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |   -22.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |      980 | 2024-05-14 | Verdant       | W   | 1.000      | -            | -                | -                | -         |     3.67 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |      985 | 2024-05-14 | MOUZ NXT      | W   | 1.000      | 0.384        | 0.164 (0.063)    | 1.000 (0.384)    | -         |    12.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     1020 | 2024-05-12 | BetBoom       | W   | 1.000      | 0.435        | 0.427 (0.186)    | 0.917 (0.399)    | -         |    27.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     1031 | 2024-05-12 | MOUZ NXT      | W   | 1.000      | 0.435        | 0.164 (0.071)    | 1.000 (0.435)    | -         |    14.95 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     1065 | 2024-05-11 | BLEED         | W   | 0.998      | 0.435        | 0.349 (0.151)    | 1.000 (0.434)    | -         |    23.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     1101 | 2024-05-09 | KOI           | W   | 0.984      | -            | -                | -                | -         |    13.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     1158 | 2024-05-06 | Enterprise    | W   | 0.965      | -            | -                | -                | -         |     9.04 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     1196 | 2024-05-04 | GL Academy    | W   | 0.952      | -            | -                | -                | -         |     5.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     1243 | 2024-05-02 | Permitta      | W   | 0.938      | 0.384        | -                | 0.972 (0.350)    | -         |    10.66 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     1250 | 2024-05-01 | Nemiga        | L   | 0.933      | -            | -                | -                | -         |    -7.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     1254 | 2024-05-01 | V1dar         | W   | 0.933      | -            | -                | -                | -         |     1.74 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     1268 | 2024-05-01 | SINNERS       | W   | 0.931      | -            | -                | -                | -         |    14.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     1285 | 2024-04-30 | Alliance      | W   | 0.925      | -            | -                | -                | -         |    10.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     1289 | 2024-04-30 | Zero Tenacity | L   | 0.925      | -            | -                | -                | -         |   -14.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     1314 | 2024-04-28 | BLEED         | L   | 0.914      | -            | -                | -                | -         |    -4.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     1362 | 2024-04-26 | Alliance      | W   | 0.900      | -            | -                | -                | -         |     9.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     1432 | 2024-04-23 | BLEED         | L   | 0.879      | -            | -                | -                | -         |    -3.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     1447 | 2024-04-22 | Passion UA    | W   | 0.873      | 0.500        | 0.088 (0.039)    | 0.905 (0.395)    | -         |    11.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     1453 | 2024-04-22 | Alliance      | L   | 0.872      | -            | -                | -                | -         |   -18.58 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     1471 | 2024-04-21 | PARIVISION    | W   | 0.865      | -            | -                | -                | -         |     9.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     1550 | 2024-04-19 | HAVU          | W   | 0.852      | -            | -                | -                | -         |     4.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     1611 | 2024-04-18 | Zero Tenacity | W   | 0.844      | 0.384        | 0.154 (0.050)    | -                | -         |    12.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     1636 | 2024-04-17 | Zero Tenacity | L   | 0.838      | -            | -                | -                | -         |   -14.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     1673 | 2024-04-16 | AMKAL         | L   | 0.831      | -            | -                | -                | -         |    -7.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     1683 | 2024-04-15 | Sangal        | L   | 0.827      | -            | -                | -                | -         |   -12.36 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |     1804 | 2024-04-10 | Nexus         | L   | 0.792      | -            | -                | -                | -         |   -17.93 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |     1845 | 2024-04-09 | Rebels        | L   | 0.787      | -            | -                | -                | -         |   -12.28 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |     1890 | 2024-04-08 | MOUZ NXT      | L   | 0.779      | -            | -                | -                | -         |   -12.91 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |     2064 | 2024-04-02 | Metizport     | L   | 0.740      | -            | -                | -                | -         |   -14.39 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |     2069 | 2024-04-02 | Apeks         | L   | 0.739      | -            | -                | -                | -         |   -12.07 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |     2096 | 2024-03-31 | Apeks         | W   | 0.725      | -            | -                | -                | -         |    11.17 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |     2109 | 2024-03-29 | Space         | L   | 0.713      | -            | -                | -                | -         |   -18.64 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |     2155 | 2024-03-27 | Rebels        | W   | 0.701      | -            | -                | -                | -         |     9.86 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |     2167 | 2024-03-27 | Sampi         | W   | 0.700      | -            | -                | -                | -         |     6.46 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |     2198 | 2024-03-25 | FORZE         | W   | 0.686      | 0.500        | 0.100 (0.034)    | -                | -         |     9.32 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |     2257 | 2024-03-21 | BetBoom       | L   | 0.658      | -            | -                | -                | -         |    -1.31 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |     2297 | 2024-03-19 | ex-Sprout     | W   | 0.645      | -            | -                | -                | -         |     1.05 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |     2364 | 2024-03-15 | 3DMAX         | L   | 0.620      | -            | -                | -                | -         |    -8.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     2457 | 2024-03-12 | Metizport     | L   | 0.601      | -            | -                | -                | -         |   -11.41 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     2463 | 2024-03-12 | ENCE          | W   | 0.600      | -            | -                | -                | -         |    16.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     2477 | 2024-03-11 | KOI           | W   | 0.594      | -            | -                | -                | -         |     7.98 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     2485 | 2024-03-11 | Virtus.pro    | L   | 0.593      | -            | -                | -                | -         |    -0.64 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     2549 | 2024-03-08 | PARIVISION    | L   | 0.573      | -            | -                | -                | -         |   -12.16 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     2635 | 2024-03-05 | Johnny Speeds | W   | 0.554      | -            | -                | -                | -         |     8.83 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     2642 | 2024-03-05 | Passion UA    | W   | 0.553      | -            | -                | -                | -         |     7.23 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     2650 | 2024-03-05 | UGANDA        | W   | 0.553      | -            | -                | -                | -         |     0.33 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     2777 | 2024-02-27 | DMS           | L   | 0.506      | -            | -                | -                | -         |   -12.72 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     2990 | 2024-02-18 | Aurora        | L   | 0.445      | -            | -                | -                | -         |    -1.12 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     3041 | 2024-02-16 | 500           | W   | 0.433      | -            | -                | -                | -         |     1.64 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     3046 | 2024-02-16 | PERA          | W   | 0.432      | -            | -                | -                | -         |     0.24 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,573.32)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $500.00        | $500.00         |
| 2024-05-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-18 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-12 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-04-24 |      0.886 | $12,500.00     | $11,073.32      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
