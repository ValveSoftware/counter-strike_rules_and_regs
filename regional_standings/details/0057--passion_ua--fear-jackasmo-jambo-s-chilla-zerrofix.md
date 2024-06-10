### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  1054.7<br />
<br />
Final Rank Value (1054.7) = Starting Rank Value (1042.7) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.487[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.375[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.322<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1042.7
- 400 + ( ( 0.322 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1042.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |        3 | 2024-06-10 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           68 |      116 | 2024-06-08 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -13.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           67 |      176 | 2024-06-07 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.94 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           66 |      194 | 2024-06-07 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           65 |      253 | 2024-06-06 | ex-iNation        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.80 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           64 |      316 | 2024-06-05 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -22.74 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           63 |      345 | 2024-06-04 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.51 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           62 |      350 | 2024-06-04 | ex-iNation        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           61 |      405 | 2024-06-02 | UNiTY             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.35 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           60 |      466 | 2024-05-31 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -12.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           59 |      486 | 2024-05-30 | Zero Tenacity     | W   | 1.000      | 0.371        | 0.154 (0.057)    | 1.000 (0.371)    | 0 (0.000) |    19.19 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           58 |      517 | 2024-05-29 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.15 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |      588 | 2024-05-25 | Sampi             | W   | 1.000      | 0.435        | -                | 0.883 (0.384)    | 0 (0.000) |    12.65 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |      609 | 2024-05-24 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -2.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |      614 | 2024-05-24 | ECSTATIC          | W   | 1.000      | -            | -                | -                | -         |     0.92 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |      630 | 2024-05-23 | SINNERS           | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.844 (0.367)    | -         |    16.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |      751 | 2024-05-20 | Permitta          | W   | 1.000      | 0.435        | -                | 0.972 (0.422)    | -         |    10.62 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |      765 | 2024-05-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -5.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |      774 | 2024-05-19 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | -                | -         |    13.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |      794 | 2024-05-18 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -9.85 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |      839 | 2024-05-17 | Nexus             | W   | 1.000      | -            | -                | -                | -         |     8.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |      879 | 2024-05-16 | Sashi             | W   | 1.000      | 0.500        | 0.174 (0.087)    | 1.000 (0.500)    | -         |    26.60 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |      919 | 2024-05-15 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -15.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |      974 | 2024-05-14 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -13.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |     1066 | 2024-05-11 | Preasy            | W   | 0.997      | -            | -                | -                | -         |     7.02 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |     1229 | 2024-05-02 | Nemiga            | L   | 0.940      | -            | -                | -                | -         |    -5.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |     1255 | 2024-05-01 | PARIVISION        | W   | 0.932      | -            | -                | -                | -         |    16.44 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |     1290 | 2024-04-30 | 9 Pandas          | W   | 0.925      | 0.500        | 0.114 (0.053)    | 0.758 (0.351)    | -         |    19.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |     1317 | 2024-04-28 | ALTERNATE aTTaX   | L   | 0.913      | -            | -                | -                | -         |   -14.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |     1367 | 2024-04-26 | 9 Pandas          | W   | 0.899      | 0.500        | 0.114 (0.051)    | 0.758 (0.341)    | -         |    18.91 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |     1403 | 2024-04-25 | Sashi             | L   | 0.891      | -            | -                | -                | -         |    -5.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |     1415 | 2024-04-24 | Permitta          | L   | 0.886      | -            | -                | -                | -         |   -12.78 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |     1447 | 2024-04-22 | B8                | L   | 0.873      | -            | -                | -                | -         |   -11.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |     1489 | 2024-04-20 | Young Ninjas      | W   | 0.860      | -            | -                | -                | -         |    10.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     1509 | 2024-04-20 | Permitta          | L   | 0.858      | -            | -                | -                | -         |   -13.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     1546 | 2024-04-19 | ALTERNATE aTTaX   | L   | 0.853      | -            | -                | -                | -         |   -15.36 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     1598 | 2024-04-18 | Permitta          | W   | 0.845      | 0.500        | -                | 0.972 (0.411)    | -         |    12.90 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     1631 | 2024-04-17 | Sashi             | W   | 0.839      | 0.371        | 0.174 (0.054)    | 1.000 (0.311)    | -         |    17.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     1665 | 2024-04-16 | 500               | L   | 0.833      | -            | -                | -                | -         |   -17.28 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     1704 | 2024-04-14 | SINNERS           | L   | 0.818      | -            | -                | -                | -         |    -7.29 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     1759 | 2024-04-11 | 3DMAX             | W   | 0.799      | 0.384        | 0.122 (0.038)    | -                | -         |    19.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     1806 | 2024-04-10 | Sashi             | W   | 0.792      | 0.371        | 0.174 (0.051)    | 1.000 (0.293)    | -         |    16.70 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     1993 | 2024-04-04 | HAVU              | W   | 0.752      | -            | -                | -                | -         |     5.61 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     2065 | 2024-04-02 | BLEED             | L   | 0.740      | -            | -                | -                | -         |    -2.20 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     2095 | 2024-03-31 | FAVBET            | L   | 0.726      | -            | -                | -                | -         |   -16.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     2102 | 2024-03-30 | Lazer Cats        | W   | 0.718      | -            | -                | -                | -         |     1.63 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     2110 | 2024-03-29 | NAVI Junior       | L   | 0.712      | -            | -                | -                | -         |   -18.11 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     2129 | 2024-03-28 | GL Academy        | L   | 0.705      | -            | -                | -                | -         |   -17.58 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     2339 | 2024-03-17 | Sampi             | L   | 0.631      | -            | -                | -                | -         |   -10.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     2348 | 2024-03-16 | ex-Preasy         | L   | 0.625      | -            | -                | -                | -         |   -10.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     2401 | 2024-03-14 | Sampi             | W   | 0.612      | -            | -                | -                | -         |     8.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     2468 | 2024-03-12 | Alliance          | W   | 0.599      | -            | -                | -                | -         |     6.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     2490 | 2024-03-11 | MOUZ NXT          | L   | 0.592      | -            | -                | -                | -         |    -7.35 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     2509 | 2024-03-10 | MOUZ NXT          | W   | 0.586      | 0.303        | 0.164 (0.029)    | -                | -         |    11.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     2522 | 2024-03-09 | The Chosen Few    | L   | 0.580      | -            | -                | -                | -         |   -15.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     2550 | 2024-03-08 | Spirit Academy    | L   | 0.573      | -            | -                | -                | -         |   -15.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     2554 | 2024-03-08 | Entropiq          | W   | 0.572      | -            | -                | -                | -         |     1.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     2573 | 2024-03-07 | GODSENT           | W   | 0.567      | -            | -                | -                | -         |     1.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     2611 | 2024-03-06 | Permitta          | L   | 0.559      | -            | -                | -                | -         |   -10.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     2613 | 2024-03-06 | Fraud5            | W   | 0.558      | -            | -                | -                | -         |     2.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     2642 | 2024-03-05 | B8                | L   | 0.553      | -            | -                | -                | -         |    -7.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     2669 | 2024-03-04 | ALTERNATE aTTaX   | W   | 0.545      | -            | -                | -                | -         |     6.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     3200 | 2024-02-08 | BLEED             | L   | 0.379      | -            | -                | -                | -         |    -1.80 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            6 |     3381 | 2024-01-29 | Alliance          | W   | 0.312      | -            | -                | -                | -         |     2.85 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            5 |     3708 | 2024-01-18 | MOUZ NXT          | L   | 0.238      | -            | -                | -                | -         |    -3.14 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            4 |     3762 | 2024-01-16 | Zero Tenacity     | L   | 0.228      | -            | -                | -                | -         |    -3.08 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            3 |     3778 | 2024-01-16 | Rebels            | W   | 0.227      | -            | -                | -                | -         |     4.20 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            2 |     3797 | 2024-01-16 | RUBY              | W   | 0.227      | -            | -                | -                | -         |     2.14 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            1 |     3931 | 2024-01-12 | OG                | L   | 0.200      | -            | -                | -                | -         |    -1.91 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,820.48)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-06 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-05-03 |      0.946 | $12,500.00     | $11,823.41      |
| 2024-03-31 |      0.726 | $657.00        | $476.83         |
| 2024-03-30 |      0.718 | $1,000.00      | $718.41         |
| 2024-03-18 |      0.638 | $3,000.00      | $1,913.79       |
| 2024-03-11 |      0.592 | $1,500.00      | $888.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
