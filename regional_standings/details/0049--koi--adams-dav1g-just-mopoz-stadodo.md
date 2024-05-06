### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1057.8<br />
<br />
Final Rank Value (1057.8) = Starting Rank Value (1030.4) + Head To Head Adjustments (27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.477[<sup>2</sup>](#table1)
- Opponent Network: 0.178[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.331<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1030.4
- 400 + ( ( 0.331 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1030.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      112 | 2024-05-01 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -20.59 | adamS, dav1g, JUST, mopoz, stadodo         |
|           53 |      432 | 2024-04-18 | Guild Eagles   | L   | 1.000      | -            | -                | -                | -         |   -18.78 | adamS, dav1g, JUST, mopoz, stadodo         |
|           52 |      441 | 2024-04-18 | fnatic         | W   | 1.000      | 0.143        | 0.327 (0.047)    | 0.677 (0.097)    | 0 (0.000) |    20.92 | adamS, dav1g, JUST, mopoz, stadodo         |
|           51 |      511 | 2024-04-16 | BLEED          | L   | 1.000      | -            | -                | -                | -         |   -11.65 | adamS, dav1g, JUST, mopoz, stadodo         |
|           50 |      644 | 2024-04-10 | RUSH B         | W   | 1.000      | 0.500        | -                | 0.340 (0.170)    | 0 (0.000) |     5.55 | adamS, dav1g, JUST, mopoz, stadodo         |
|           49 |      698 | 2024-04-09 | Aurora         | W   | 1.000      | 0.500        | 0.973 (0.486)    | 0.967 (0.483)    | 0 (0.000) |    28.23 | adamS, dav1g, JUST, mopoz, stadodo         |
|           48 |      704 | 2024-04-09 | Apeks          | L   | 1.000      | -            | -                | -                | -         |    -8.78 | adamS, dav1g, JUST, mopoz, stadodo         |
|           47 |      732 | 2024-04-08 | GUN5           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.18 | adamS, dav1g, JUST, mopoz, stadodo         |
|           46 |      737 | 2024-04-08 | fnatic         | L   | 1.000      | -            | -                | -                | -         |    -9.59 | adamS, dav1g, JUST, mopoz, stadodo         |
|           45 |      838 | 2024-04-04 | NOM            | W   | 0.986      | -            | -                | -                | 0 (0.000) |     1.66 | adamS, dav1g, JUST, mopoz, stadodo         |
|           44 |      872 | 2024-04-03 | 9INE           | W   | 0.980      | -            | -                | -                | 0 (0.000) |     0.71 | adamS, dav1g, JUST, mopoz, stadodo         |
|           43 |      909 | 2024-04-02 | TSM            | W   | 0.973      | 0.500        | 0.018 (0.009)    | 0.258 (0.126)    | 0 (0.000) |     5.81 | adamS, dav1g, JUST, mopoz, stadodo         |
|           42 |      976 | 2024-03-28 | EYEBALLERS     | L   | 0.939      | -            | -                | -                | -         |   -20.63 | adamS, dav1g, JUST, mopoz, stadodo         |
|           41 |     1148 | 2024-03-18 | FURIA          | L   | 0.873      | -            | -                | -                | -         |    -3.06 | adamS, dav1g, JUST, mopoz, stadodo         |
|           40 |     1165 | 2024-03-17 | ENCE           | L   | 0.867      | -            | -                | -                | -         |    -2.91 | adamS, dav1g, JUST, mopoz, stadodo         |
|           39 |     1180 | 2024-03-17 | SAW            | L   | 0.866      | -            | -                | -                | -         |    -3.21 | adamS, dav1g, JUST, mopoz, stadodo         |
|           38 |     1271 | 2024-03-13 | Sangal         | W   | 0.841      | 0.500        | -                | 0.797 (0.335)    | -         |     4.50 | adamS, dav1g, JUST, mopoz, stadodo         |
|           37 |     1326 | 2024-03-11 | B8             | L   | 0.827      | -            | -                | -                | -         |   -17.13 | adamS, dav1g, JUST, mopoz, stadodo         |
|           36 |     1332 | 2024-03-11 | Apeks          | L   | 0.826      | -            | -                | -                | -         |    -5.04 | adamS, dav1g, JUST, mopoz, stadodo         |
|           35 |     1444 | 2024-03-06 | 9 Pandas       | W   | 0.794      | 0.500        | 0.081 (0.032)    | 0.676 (0.269)    | -         |    14.35 | adamS, dav1g, JUST, mopoz, stadodo         |
|           34 |     1481 | 2024-03-05 | FORZE          | W   | 0.787      | 0.143        | 0.205 (0.023)    | 0.682 (0.077)    | -         |    13.96 | adamS, dav1g, JUST, mopoz, stadodo         |
|           33 |     1487 | 2024-03-05 | Nemiga         | W   | 0.787      | 0.143        | 0.667 (0.075)    | 0.724 (0.081)    | -         |    19.14 | adamS, dav1g, JUST, mopoz, stadodo         |
|           32 |     1496 | 2024-03-05 | ex-Sprout      | W   | 0.786      | -            | -                | -                | -         |     2.21 | adamS, dav1g, JUST, mopoz, stadodo         |
|           31 |     1537 | 2024-03-03 | The Chosen Few | L   | 0.773      | -            | -                | -                | -         |   -21.55 | adamS, dav1g, JUST, mopoz, stadodo         |
|           30 |     1589 | 2024-02-29 | Aurora         | L   | 0.754      | -            | -                | -                | -         |    -2.16 | adamS, dav1g, JUST, mopoz, stadodo         |
|           29 |     1595 | 2024-02-29 | HAVU           | W   | 0.752      | -            | -                | -                | -         |     4.61 | adamS, dav1g, JUST, mopoz, stadodo         |
|           28 |     1603 | 2024-02-28 | FORZE          | L   | 0.747      | -            | -                | -                | -         |   -11.63 | adamS, dav1g, JUST, mopoz, stadodo         |
|           27 |     1607 | 2024-02-28 | ECF            | W   | 0.746      | -            | -                | -                | -         |     1.79 | adamS, dav1g, JUST, mopoz, stadodo         |
|           26 |     1897 | 2024-02-16 | fnatic         | W   | 0.665      | 0.143        | 0.327 (0.031)    | 0.677 (0.064)    | 1 (0.665) |    14.04 | adamS, dav1g, JUST, mopoz, stadodo         |
|           25 |     1924 | 2024-02-15 | 9 Pandas       | W   | 0.658      | -            | -                | -                | 1 (0.658) |    12.50 | adamS, dav1g, JUST, mopoz, stadodo         |
|           24 |     1950 | 2024-02-14 | 3DMAX          | W   | 0.653      | 0.143        | -                | 0.810 (0.076)    | 1 (0.653) |    13.06 | adamS, dav1g, JUST, mopoz, stadodo         |
|           23 |     1963 | 2024-02-14 | Natus Vincere  | L   | 0.651      | -            | -                | -                | -         |    -0.13 | adamS, dav1g, JUST, mopoz, stadodo         |
|           22 |     2121 | 2024-02-03 | SAW            | L   | 0.579      | -            | -                | -                | -         |    -2.17 | adamS, dav1g, JUST, mopoz, stadodo         |
|           21 |     2151 | 2024-02-02 | Rhyno          | W   | 0.573      | -            | -                | -                | -         |     2.72 | adamS, dav1g, JUST, mopoz, stadodo         |
|           20 |     2157 | 2024-02-02 | ABT            | W   | 0.572      | -            | -                | -                | -         |     0.74 | adamS, dav1g, JUST, mopoz, stadodo         |
|           19 |     2409 | 2024-01-20 | PERA           | W   | 0.487      | -            | -                | -                | -         |     5.00 | adamS, dav1g, JUST, mopoz, stadodo         |
|           18 |     2417 | 2024-01-20 | Enterprise     | L   | 0.486      | -            | -                | -                | -         |    -8.96 | adamS, dav1g, JUST, mopoz, stadodo         |
|           17 |     2475 | 2024-01-19 | HEROIC         | W   | 0.479      | 0.143        | 0.347 (0.024)    | -                | -         |    14.56 | adamS, dav1g, JUST, mopoz, stadodo         |
|           16 |     2531 | 2024-01-18 | AMKAL          | L   | 0.473      | -            | -                | -                | -         |    -4.26 | adamS, dav1g, JUST, mopoz, stadodo         |
|           15 |     2547 | 2024-01-18 | Spirit         | W   | 0.472      | 0.143        | 1.000 (0.067)    | -                | -         |    14.68 | adamS, dav1g, JUST, mopoz, stadodo         |
|           14 |     2855 | 2024-01-09 | Enterprise     | L   | 0.415      | -            | -                | -                | -         |    -7.79 | adamS, dav1g, JUST, mopoz, stadodo         |
|           13 |     2857 | 2024-01-09 | Entropiq       | W   | 0.415      | -            | -                | -                | -         |     2.27 | adamS, dav1g, JUST, mopoz, stadodo         |
|           12 |     2861 | 2024-01-09 | 9INE           | W   | 0.414      | -            | -                | -                | -         |     0.81 | adamS, dav1g, JUST, mopoz, stadodo         |
|           11 |     2877 | 2024-01-09 | K10            | W   | 0.413      | -            | -                | -                | -         |     2.56 | adamS, dav1g, JUST, mopoz, stadodo         |
|           10 |     2900 | 2024-01-09 | Betera         | W   | 0.413      | -            | -                | -                | -         |     2.06 | adamS, dav1g, JUST, mopoz, stadodo         |
|            9 |     3205 | 2023-12-05 | FORZE          | L   | 0.181      | -            | -                | -                | -         |    -4.66 | adamS, bladE, dav1g, JUST, mopoz           |
|            8 |     3516 | 2023-11-17 | Apeks          | L   | 0.061      | -            | -                | -                | -         |    -0.29 | CacaNito, jkaem, kyxsan, nawwk, sense      |
|            7 |     3524 | 2023-11-17 | Aurora         | W   | 0.059      | 0.143        | 0.973 (0.008)    | -                | -         |     1.80 | adamS, dav1g, JUST, MartinezSa, mopoz      |
|            6 |     3532 | 2023-11-17 | BetBoom        | L   | 0.058      | -            | -                | -                | -         |    -0.16 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            5 |     3548 | 2023-11-16 | Space          | W   | 0.054      | -            | -                | -                | -         |     0.28 | enzero, fozil, leri511, TruNiQ, Vert       |
|            4 |     3561 | 2023-11-16 | PERA           | L   | 0.052      | -            | -                | -                | -         |    -1.12 | Aaron, DGL, Kamion, msN, Porya             |
|            3 |     3570 | 2023-11-16 | MIBR           | L   | 0.052      | -            | -                | -                | -         |    -0.04 | brnz4n, drop, exit, insani, saffee         |
|            2 |     3658 | 2023-11-12 | SAW            | W   | 0.027      | -            | -                | -                | -         |     0.77 | aragornN, arrozdoce, ewjerkz, roman, story |
|            1 |     3695 | 2023-11-11 | Betera         | W   | 0.020      | -            | -                | -                | -         |     0.10 | Ganginho, lollipop21k, MaSvAl, nifee, sad  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,505.79)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.887 | $10,000.00     | $8,865.38       |
| 2023-12-10 |      0.213 | $3,000.00      | $640.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
