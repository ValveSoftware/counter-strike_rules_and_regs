### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  847.4<br />
<br />
Final Rank Value (847.4) = Starting Rank Value (818.4) + Head To Head Adjustments (29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.198[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.4
- 400 + ( ( 0.217 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 818.4


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
|           33 |        0 | 2024-04-22 | Passion UA    | W   | 1.000      | 0.500        | 0.031 (0.016)    | 0.625 (0.313)    | 0 (0.000) |    16.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |        6 | 2024-04-22 | Alliance      | L   | 1.000      | -            | -                | -                | -         |   -16.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |       24 | 2024-04-21 | PARIVISION    | W   | 1.000      | 0.500        | -                | 0.358 (0.179)    | 0 (0.000) |    11.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |      103 | 2024-04-19 | HAVU          | W   | 1.000      | 0.500        | 0.027 (0.014)    | 0.154 (0.077)    | 0 (0.000) |    12.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |      164 | 2024-04-18 | Zero Tenacity | W   | 1.000      | 0.384        | -                | 0.805 (0.309)    | 0 (0.000) |    13.50 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |      189 | 2024-04-17 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -18.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |      226 | 2024-04-16 | AMKAL         | L   | 1.000      | -            | -                | -                | -         |    -7.24 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |      236 | 2024-04-15 | Sangal        | L   | 1.000      | -            | -                | -                | -         |   -19.12 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           25 |      357 | 2024-04-10 | Nexus         | L   | 1.000      | -            | -                | -                | -         |   -15.25 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           24 |      398 | 2024-04-09 | Rebels        | L   | 1.000      | -            | -                | -                | -         |   -14.36 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           23 |      443 | 2024-04-08 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -13.58 | baz, cptkurtka023, esenthial, headtr1ck, npl     |
|           22 |      617 | 2024-04-02 | Metizport     | L   | 1.000      | -            | -                | -                | -         |   -11.67 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           21 |      622 | 2024-04-02 | Apeks         | L   | 1.000      | -            | -                | -                | -         |    -6.25 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           20 |      649 | 2024-03-31 | Apeks         | W   | 1.000      | 0.500        | 0.193 (0.097)    | 0.687 (0.343)    | 0 (0.000) |    25.81 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           19 |      662 | 2024-03-29 | Space         | L   | 1.000      | -            | -                | -                | -         |   -23.15 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           18 |      708 | 2024-03-27 | Rebels        | W   | 1.000      | 0.143        | 0.050 (0.007)    | -                | 0 (0.000) |    15.61 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           17 |      720 | 2024-03-27 | Sampi         | W   | 1.000      | 0.143        | 0.084 (0.012)    | 0.698 (0.100)    | 0 (0.000) |    17.02 | baz, cptkurtka023, esenthial, npl, OWNER         |
|           16 |      751 | 2024-03-25 | FORZE         | W   | 1.000      | 0.500        | 0.140 (0.070)    | 0.784 (0.392)    | 0 (0.000) |    22.44 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           15 |      810 | 2024-03-21 | BetBoom       | L   | 0.985      | -            | -                | -                | -         |    -4.29 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           14 |      850 | 2024-03-19 | ex-Sprout     | W   | 0.971      | -            | -                | -                | 0 (0.000) |     6.99 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           13 |      917 | 2024-03-15 | 3DMAX         | L   | 0.946      | -            | -                | -                | -         |    -9.85 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           12 |     1010 | 2024-03-12 | Metizport     | L   | 0.927      | -            | -                | -                | -         |    -7.08 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           11 |     1016 | 2024-03-12 | ENCE          | W   | 0.926      | 0.143        | 0.299 (0.040)    | -                | 0 (0.000) |    27.67 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|           10 |     1030 | 2024-03-11 | KOI           | W   | 0.920      | 0.143        | 0.058 (0.008)    | 0.902 (0.119)    | -         |    22.90 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            9 |     1038 | 2024-03-11 | Virtus.pro    | L   | 0.919      | -            | -                | -                | -         |    -0.27 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            8 |     1102 | 2024-03-08 | PARIVISION    | L   | 0.899      | -            | -                | -                | -         |   -18.79 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            7 |     1188 | 2024-03-05 | Johnny Speeds | W   | 0.880      | 0.143        | 0.036 (0.005)    | -                | -         |    12.56 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            6 |     1195 | 2024-03-05 | Passion UA    | W   | 0.880      | 0.143        | 0.031 (0.004)    | 0.625 (0.079)    | -         |    17.03 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            5 |     1203 | 2024-03-05 | UGANDA        | W   | 0.879      | -            | -                | -                | -         |     2.52 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            4 |     1330 | 2024-02-27 | DMS           | L   | 0.833      | -            | -                | -                | -         |   -21.91 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            3 |     1543 | 2024-02-18 | Aurora        | L   | 0.772      | -            | -                | -                | -         |    -1.59 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            2 |     1594 | 2024-02-16 | 500           | W   | 0.759      | 0.143        | -                | 0.622 (0.067)    | -         |     7.40 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |
|            1 |     1599 | 2024-02-16 | PERA          | W   | 0.758      | -            | -                | -                | -         |     6.90 | cptkurtka023, esenthial, npl, OWNER, r1nkle      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
