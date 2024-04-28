### Roster Details<br />
Team Name: ATK<br />
Roster: b0denmaster, djay, MisteM, Pluto, Swisher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  931.2<br />
<br />
Final Rank Value (931.2) = Starting Rank Value (947.3) + Head To Head Adjustments (-16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.465[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.138[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 947.3
- 400 + ( ( 0.267 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 947.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |       41 | 2023-02-10 | EG White       | W   | 1.000      | 0.384        | 0.048 (0.018)    | 0.340 (0.131)    | 0 (0.000) |    16.23 | b0denmaster, djay, MisteM, Pluto, Swisher |
|           66 |       93 | 2023-02-07 | Limitless      | L   | 1.000      | -            | -                | -                | -         |   -23.57 | b0denmaster, djay, MisteM, Pluto, Swisher |
|           65 |       96 | 2023-02-07 | Noxious        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.67 | b0denmaster, djay, MisteM, Pluto, Swisher |
|           64 |      113 | 2023-02-06 | Detonate       | L   | 1.000      | -            | -                | -                | -         |   -22.70 | b0denmaster, djay, MisteM, Pluto, Swisher |
|           63 |      325 | 2023-01-28 | Mythic         | L   | 1.000      | -            | -                | -                | -         |   -25.99 | b0denmaster, djay, MisteM, motm, Swisher  |
|           62 |      364 | 2023-01-27 | Vendetta       | L   | 1.000      | -            | -                | -                | -         |   -23.09 | b0denmaster, djay, MisteM, motm, Swisher  |
|           61 |      367 | 2023-01-27 | Detonate       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.07 | b0denmaster, djay, MisteM, motm, Swisher  |
|           60 |      460 | 2023-01-24 | timbermen      | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.306 (0.133)    | 0 (0.000) |     7.28 | b0denmaster, djay, MisteM, motm, Swisher  |
|           59 |      508 | 2023-01-22 | EG White       | L   | 1.000      | -            | -                | -                | -         |   -19.63 | b0denmaster, djay, MisteM, motm, Swisher  |
|           58 |      540 | 2023-01-21 | Villainous     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.79 | b0denmaster, djay, MisteM, motm, Swisher  |
|           57 |      581 | 2023-01-19 | MIBR           | W   | 1.000      | 0.143        | 0.089 (0.013)    | -                | 0 (0.000) |    15.14 | b0denmaster, djay, MisteM, motm, Swisher  |
|           56 |      760 | 2022-12-18 | paiN           | W   | 0.829      | 0.354        | 0.101 (0.030)    | 0.402 (0.118)    | -         |    16.96 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           55 |      761 | 2022-12-18 | Evil Geniuses  | W   | 0.828      | 0.354        | 0.062 (0.018)    | -                | -         |    16.70 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           54 |      827 | 2022-12-16 | TeamOne        | L   | 0.816      | -            | -                | -                | -         |   -14.11 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           53 |      853 | 2022-12-15 | Nouns          | W   | 0.809      | 0.435        | 0.059 (0.021)    | 0.589 (0.207)    | -         |    10.79 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           52 |      886 | 2022-12-14 | Disconnected   | W   | 0.802      | -            | -                | -                | -         |     2.40 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           51 |      903 | 2022-12-13 | MIBR           | L   | 0.796      | -            | -                | -                | -         |   -13.01 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           50 |      934 | 2022-12-11 | Evil Geniuses  | L   | 0.782      | -            | -                | -                | -         |    -9.23 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           49 |      938 | 2022-12-11 | timbermen      | W   | 0.781      | -            | -                | -                | -         |     7.05 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           48 |      972 | 2022-12-10 | Vendetta       | W   | 0.775      | -            | -                | -                | -         |     6.08 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           47 |     1056 | 2022-12-07 | Nouns          | W   | 0.756      | 0.435        | 0.059 (0.020)    | 0.589 (0.193)    | -         |    10.09 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           46 |     1100 | 2022-12-06 | Noxious        | W   | 0.748      | -            | -                | -                | -         |     3.29 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           45 |     1158 | 2022-12-04 | Nouns          | L   | 0.735      | -            | -                | -                | -         |   -13.54 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           44 |     1161 | 2022-12-04 | Strife         | L   | 0.735      | -            | -                | -                | -         |   -16.92 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           43 |     1238 | 2022-12-02 | Vendetta       | W   | 0.722      | 0.435        | -                | 0.361 (0.113)    | -         |     5.55 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           42 |     1270 | 2022-12-01 | Disconnected   | W   | 0.715      | -            | -                | -                | -         |     4.60 | b0denmaster, djay, Fadey, MisteM, Swisher |
|           41 |     1297 | 2022-11-30 | Mythic         | W   | 0.709      | -            | -                | -                | -         |     3.50 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           40 |     1369 | 2022-11-27 | Complexity     | L   | 0.689      | -            | -                | -                | -         |    -2.65 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           39 |     1375 | 2022-11-27 | MIBR           | W   | 0.688      | 0.354        | 0.089 (0.022)    | 0.586 (0.143)    | -         |    10.47 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           38 |     1408 | 2022-11-26 | TeamOne        | W   | 0.682      | 0.354        | -                | 0.445 (0.108)    | -         |     9.11 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           37 |     1507 | 2022-11-22 | Villainous     | W   | 0.655      | -            | -                | -                | -         |     1.80 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           36 |     1665 | 2022-11-09 | Red Wolves     | W   | 0.568      | -            | -                | -                | -         |     2.83 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           35 |     1787 | 2022-10-30 | TBB            | W   | 0.502      | -            | -                | -                | -         |     0.69 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           34 |     1788 | 2022-10-30 | TropiCaos      | L   | 0.501      | -            | -                | -                | -         |   -11.98 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           33 |     1921 | 2022-10-23 | Nouns          | W   | 0.455      | 0.435        | 0.059 (0.012)    | 0.589 (0.117)    | -         |     5.82 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           32 |     1942 | 2022-10-22 | MIBR           | W   | 0.448      | 0.435        | 0.089 (0.017)    | 0.586 (0.114)    | -         |     7.70 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           31 |     1946 | 2022-10-22 | TeamOne        | W   | 0.448      | -            | -                | -                | -         |     6.08 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           30 |     2000 | 2022-10-20 | timbermen      | W   | 0.435      | -            | -                | -                | -         |     4.28 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           29 |     2027 | 2022-10-19 | Nouns          | L   | 0.429      | -            | -                | -                | -         |    -8.04 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           28 |     2053 | 2022-10-18 | Brazen         | W   | 0.422      | -            | -                | -                | -         |     1.84 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           27 |     2097 | 2022-10-16 | Vendetta       | W   | 0.409      | -            | -                | -                | -         |     2.96 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           26 |     2100 | 2022-10-16 | timbermen      | W   | 0.408      | -            | -                | -                | -         |     4.15 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           25 |     2329 | 2022-10-08 | paiN           | L   | 0.351      | -            | -                | -                | -         |    -3.47 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           24 |     2352 | 2022-10-07 | 9z             | L   | 0.345      | -            | -                | -                | -         |    -6.16 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           23 |     2372 | 2022-10-06 | MIBR           | W   | 0.338      | -            | -                | -                | 1 (0.338) |     6.13 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           22 |     2383 | 2022-10-05 | ARCTIC         | W   | 0.333      | -            | -                | -                | 1 (0.333) |     4.40 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           21 |     2403 | 2022-10-05 | Complexity     | L   | 0.331      | -            | -                | -                | -         |    -0.81 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           20 |     2679 | 2022-09-23 | EG White       | L   | 0.256      | -            | -                | -                | -         |    -4.66 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           19 |     2681 | 2022-09-23 | Strife         | L   | 0.255      | -            | -                | -                | -         |    -5.64 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           18 |     2683 | 2022-09-23 | Brazen         | W   | 0.255      | -            | -                | -                | -         |     1.18 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           17 |     2731 | 2022-09-22 | Task Force 141 | W   | 0.249      | -            | -                | -                | -         |     0.67 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           16 |     2735 | 2022-09-22 | Disconnected   | L   | 0.248      | -            | -                | -                | -         |    -6.09 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           15 |     2839 | 2022-09-18 | TeamOne        | L   | 0.222      | -            | -                | -                | -         |    -4.08 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           14 |     2870 | 2022-09-17 | TeamOne        | W   | 0.216      | -            | -                | -                | -         |     2.86 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           13 |     2872 | 2022-09-17 | Disconnected   | W   | 0.215      | -            | -                | -                | -         |     1.54 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           12 |     2901 | 2022-09-16 | Vendetta       | W   | 0.209      | -            | -                | -                | -         |     1.33 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           11 |     2905 | 2022-09-16 | Strife         | W   | 0.208      | -            | -                | -                | -         |     0.94 | b0denmaster, Fadey, MisteM, motm, Swisher |
|           10 |     2939 | 2022-09-15 | 7AM NA         | W   | 0.201      | -            | -                | -                | -         |     0.64 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            9 |     3019 | 2022-09-13 | Nouns          | W   | 0.188      | -            | -                | -                | -         |     1.42 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            8 |     3082 | 2022-09-11 | Apeks          | L   | 0.172      | -            | -                | -                | -         |    -2.85 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            7 |     3126 | 2022-09-10 | EG Black       | W   | 0.167      | -            | -                | -                | 1 (0.167) |     2.06 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            6 |     3140 | 2022-09-10 | Dripmen        | W   | 0.166      | -            | -                | -                | 1 (0.166) |     1.00 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            5 |     3342 | 2022-09-02 | Evil Geniuses  | L   | 0.114      | -            | -                | -                | -         |    -1.27 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            4 |     3370 | 2022-09-01 | Strife         | W   | 0.109      | -            | -                | -                | -         |     0.50 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            3 |     3375 | 2022-09-01 | Mythic         | W   | 0.108      | -            | -                | -                | -         |     0.68 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            2 |     3402 | 2022-08-31 | Unjustified    | W   | 0.102      | -            | -                | -                | -         |     0.25 | b0denmaster, Fadey, MisteM, motm, Swisher |
|            1 |     3421 | 2022-08-30 | timbermen      | W   | 0.095      | -            | -                | -                | -         |     0.93 | b0denmaster, Fadey, MisteM, motm, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,334.90)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-22 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-18 |      0.829 | $4,000.00      | $3,315.44       |
| 2022-12-18 |      0.829 | $9,000.00      | $7,458.71       |
| 2022-12-11 |      0.782 | $4,000.00      | $3,129.24       |
| 2022-11-27 |      0.689 | $4,000.00      | $2,757.31       |
| 2022-10-30 |      0.503 | $2,000.00      | $1,005.03       |
| 2022-10-23 |      0.455 | $20,000.00     | $9,106.80       |
| 2022-10-16 |      0.409 | $9,000.00      | $3,683.15       |
| 2022-09-11 |      0.176 | $5,000.00      | $879.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
