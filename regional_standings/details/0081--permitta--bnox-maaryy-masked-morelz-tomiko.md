### Roster Details<br />
Team Name: Permitta<br />
Roster: bnox, maaryy, mASKED, morelz, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  871.2<br />
<br />
Final Rank Value (871.2) = Starting Rank Value (893.7) + Head To Head Adjustments (-22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.252[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.7
- 400 + ( ( 0.254 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 893.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           85 |       35 | 2024-05-28 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.07 | bnox, maaryy, mASKED, morelz, tomiko |
|           84 |       38 | 2024-05-28 | GUN5              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.10 | bnox, maaryy, mASKED, morelz, tomiko |
|           83 |       56 | 2024-05-27 | VP.Prodigy        | L   | 1.000      | -            | -                | -                | -         |   -20.65 | bnox, maaryy, mASKED, morelz, tomiko |
|           82 |       79 | 2024-05-26 | ECLOT             | W   | 1.000      | 0.371        | 0.084 (0.031)    | -                | 0 (0.000) |    20.98 | bnox, maaryy, mASKED, morelz, tomiko |
|           81 |       95 | 2024-05-25 | Nexus             | W   | 1.000      | 0.435        | -                | 0.518 (0.225)    | 0 (0.000) |    12.03 | bnox, maaryy, mASKED, morelz, tomiko |
|           80 |      165 | 2024-05-22 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.627 (0.272)    | 0 (0.000) |    18.77 | bnox, maaryy, mASKED, morelz, tomiko |
|           79 |      173 | 2024-05-22 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -9.80 | bnox, maaryy, mASKED, morelz, Vegi   |
|           78 |      195 | 2024-05-21 | INFINITE          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.74 | bnox, maaryy, mASKED, morelz, Vegi   |
|           77 |      251 | 2024-05-20 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -10.57 | bnox, maaryy, mASKED, morelz, Vegi   |
|           76 |      343 | 2024-05-17 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -10.03 | bnox, maaryy, mASKED, morelz, Vegi   |
|           75 |      409 | 2024-05-15 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -15.52 | bnox, maaryy, mASKED, morelz, Vegi   |
|           74 |      498 | 2024-05-13 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |    -9.33 | bnox, maaryy, mASKED, morelz, Vegi   |
|           73 |      644 | 2024-05-07 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -16.48 | bnox, maaryy, mASKED, morelz, Sobol  |
|           72 |      660 | 2024-05-06 | ENCE Academy      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.42 | bnox, maaryy, mASKED, morelz, Sobol  |
|           71 |      705 | 2024-05-03 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -11.85 | bnox, maaryy, mASKED, Sidney, Sobol  |
|           70 |      732 | 2024-05-02 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -13.47 | bnox, maaryy, mASKED, Sidney, Sobol  |
|           69 |      743 | 2024-05-02 | B8                | L   | 1.000      | -            | -                | -                | -         |   -11.38 | bnox, maaryy, mASKED, morelz, Sobol  |
|           68 |      791 | 2024-04-30 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -4.37 | bnox, maaryy, mASKED, morelz, Vegi   |
|           67 |      798 | 2024-04-29 | AMKAL             | L   | 0.998      | -            | -                | -                | -         |    -6.08 | bnox, maaryy, mASKED, morelz, Vegi   |
|           66 |      808 | 2024-04-29 | RUBY              | W   | 0.997      | 0.435        | -                | 0.547 (0.237)    | 0 (0.000) |    13.74 | bnox, maaryy, mASKED, Sidney, Vegi   |
|           65 |      844 | 2024-04-27 | Insilio           | L   | 0.985      | -            | -                | -                | -         |   -14.71 | bnox, maaryy, mASKED, morelz, Vegi   |
|           64 |      852 | 2024-04-27 | Enterprise        | W   | 0.984      | 0.396        | -                | 0.524 (0.204)    | 0 (0.000) |    13.21 | bnox, maaryy, mASKED, morelz, Vegi   |
|           63 |      875 | 2024-04-26 | ARCRED            | L   | 0.977      | -            | -                | -                | -         |   -24.89 | bnox, maaryy, mASKED, morelz, Vegi   |
|           62 |      896 | 2024-04-25 | 1WIN              | L   | 0.972      | -            | -                | -                | -         |   -13.13 | bnox, maaryy, mASKED, morelz, Vegi   |
|           61 |      913 | 2024-04-24 | BLEED             | L   | 0.966      | -            | -                | -                | -         |    -5.49 | bnox, maaryy, mASKED, morelz, Vegi   |
|           60 |      915 | 2024-04-24 | Passion UA        | W   | 0.965      | 0.384        | 0.056 (0.021)    | 0.759 (0.282)    | 0 (0.000) |    13.71 | bnox, maaryy, mASKED, morelz, Vegi   |
|           59 |      924 | 2024-04-24 | Sampi             | L   | 0.963      | -            | -                | -                | -         |   -14.70 | bnox, maaryy, mASKED, morelz, Vegi   |
|           58 |      946 | 2024-04-23 | ALTERNATE aTTaX   | W   | 0.956      | 0.371        | 0.048 (0.017)    | 0.650 (0.230)    | -         |    11.39 | bnox, maaryy, mASKED, morelz, Vegi   |
|           57 |      959 | 2024-04-22 | Grannys Knockers  | W   | 0.950      | -            | -                | -                | -         |     9.07 | bnox, maaryy, mASKED, morelz, Vegi   |
|           56 |      980 | 2024-04-21 | Insilio           | W   | 0.943      | 0.435        | -                | 0.542 (0.222)    | -         |    14.46 | bnox, maaryy, mASKED, morelz, Vegi   |
|           55 |     1004 | 2024-04-20 | Nexus             | L   | 0.938      | -            | -                | -                | -         |   -16.50 | bnox, maaryy, mASKED, morelz, Vegi   |
|           54 |     1009 | 2024-04-20 | Passion UA        | W   | 0.937      | 0.371        | 0.056 (0.020)    | 0.759 (0.264)    | -         |    14.60 | bnox, maaryy, mASKED, morelz, Vegi   |
|           53 |     1098 | 2024-04-18 | Passion UA        | L   | 0.925      | -            | -                | -                | -         |   -14.05 | bnox, maaryy, mASKED, morelz, Vegi   |
|           52 |     1112 | 2024-04-18 | Sampi             | L   | 0.923      | -            | -                | -                | -         |   -14.23 | bnox, maaryy, mASKED, morelz, Vegi   |
|           51 |     1128 | 2024-04-17 | PARIVISION        | W   | 0.919      | -            | -                | -                | -         |    13.12 | bnox, maaryy, mASKED, morelz, Vegi   |
|           50 |     1170 | 2024-04-16 | Gaimin Gladiators | L   | 0.911      | -            | -                | -                | -         |    -4.81 | bnox, maaryy, mASKED, morelz, Vegi   |
|           49 |     1233 | 2024-04-12 | MOUZ NXT          | W   | 0.884      | 0.371        | 0.157 (0.051)    | 1.000 (0.328)    | -         |    18.19 | bnox, maaryy, mASKED, morelz, Vegi   |
|           48 |     1313 | 2024-04-10 | EYEBALLERS        | W   | 0.870      | -            | -                | -                | -         |    11.94 | bnox, maaryy, mASKED, morelz, Vegi   |
|           47 |     1391 | 2024-04-08 | HAVU              | W   | 0.858      | -            | -                | -                | -         |     6.94 | bnox, maaryy, mASKED, morelz, Vegi   |
|           46 |     1398 | 2024-04-08 | JANO              | W   | 0.857      | -            | -                | -                | -         |     5.80 | bnox, maaryy, mASKED, morelz, Vegi   |
|           45 |     1528 | 2024-04-03 | Enterprise        | L   | 0.825      | -            | -                | -                | -         |   -13.00 | bnox, maaryy, mASKED, morelz, Vegi   |
|           44 |     1540 | 2024-04-03 | ECLOT             | L   | 0.824      | -            | -                | -                | -         |    -9.77 | bnox, maaryy, mASKED, morelz, Vegi   |
|           43 |     1572 | 2024-04-02 | 3DMAX             | L   | 0.818      | -            | -                | -                | -         |    -6.55 | bnox, maaryy, mASKED, morelz, Vegi   |
|           42 |     1581 | 2024-04-02 | Sashi             | L   | 0.816      | -            | -                | -                | -         |   -10.82 | bnox, maaryy, mASKED, morelz, Vegi   |
|           41 |     1846 | 2024-03-16 | RUBY              | L   | 0.705      | -            | -                | -                | -         |   -14.28 | bnox, maaryy, mASKED, morelz, Vegi   |
|           40 |     1866 | 2024-03-15 | The Chosen Few    | W   | 0.699      | -            | -                | -                | -         |     5.03 | bnox, maaryy, mASKED, morelz, Vegi   |
|           39 |     1869 | 2024-03-15 | Sampi             | L   | 0.697      | -            | -                | -                | -         |   -11.70 | bnox, maaryy, mASKED, morelz, Vegi   |
|           38 |     1916 | 2024-03-13 | MOUZ NXT          | W   | 0.687      | 0.372        | 0.157 (0.040)    | 1.000 (0.256)    | -         |    13.31 | bnox, maaryy, mASKED, morelz, Vegi   |
|           37 |     1935 | 2024-03-13 | ECLOT             | W   | 0.685      | -            | -                | -                | -         |    12.57 | bnox, maaryy, mASKED, morelz, Vegi   |
|           36 |     1949 | 2024-03-13 | ECLOT             | W   | 0.683      | 0.371        | 0.084 (0.021)    | -                | -         |    13.30 | bnox, maaryy, mASKED, morelz, Vegi   |
|           35 |     1991 | 2024-03-11 | ex-Preasy         | L   | 0.671      | -            | -                | -                | -         |    -8.84 | bnox, maaryy, mASKED, morelz, Vegi   |
|           34 |     2038 | 2024-03-09 | Sashi             | L   | 0.658      | -            | -                | -                | -         |    -9.23 | bnox, maaryy, mASKED, morelz, Vegi   |
|           33 |     2074 | 2024-03-07 | VP.Prodigy        | W   | 0.646      | -            | -                | -                | -         |     2.89 | bnox, maaryy, mASKED, morelz, Vegi   |
|           32 |     2083 | 2024-03-07 | ECF               | W   | 0.644      | -            | -                | -                | -         |     6.07 | bnox, maaryy, mASKED, morelz, Vegi   |
|           31 |     2111 | 2024-03-06 | Passion UA        | W   | 0.638      | -            | -                | -                | -         |    12.16 | bnox, maaryy, mASKED, morelz, Vegi   |
|           30 |     2112 | 2024-03-06 | Enterprise        | W   | 0.637      | -            | -                | -                | -         |    10.54 | bnox, maaryy, mASKED, morelz, Vegi   |
|           29 |     2152 | 2024-03-05 | Young Ninjas      | W   | 0.631      | -            | -                | -                | -         |     9.26 | bnox, maaryy, mASKED, morelz, Vegi   |
|           28 |     2219 | 2024-03-02 | GODSENT           | W   | 0.611      | -            | -                | -                | -         |     3.92 | bnox, maaryy, mASKED, morelz, Vegi   |
|           27 |     2263 | 2024-02-28 | Secret            | L   | 0.591      | -            | -                | -                | -         |   -15.96 | bnox, maaryy, mASKED, morelz, Vegi   |
|           26 |     2266 | 2024-02-28 | ECLOT             | L   | 0.590      | -            | -                | -                | -         |    -6.39 | bnox, maaryy, mASKED, morelz, Vegi   |
|           25 |     2287 | 2024-02-27 | Sprout            | W   | 0.584      | -            | -                | -                | -         |     2.91 | bnox, maaryy, mASKED, morelz, Vegi   |
|           24 |     2361 | 2024-02-24 | ECLOT             | W   | 0.564      | 0.333        | 0.084 (0.016)    | -                | -         |    11.55 | bnox, maaryy, mASKED, morelz, Vegi   |
|           23 |     2390 | 2024-02-22 | PGE Turow         | W   | 0.550      | -            | -                | -                | -         |     3.71 | bnox, maaryy, mASKED, morelz, reiko  |
|           22 |     2422 | 2024-02-21 | ECLOT             | L   | 0.544      | -            | -                | -                | -         |    -6.00 | bnox, maaryy, mASKED, morelz, Vegi   |
|           21 |     2469 | 2024-02-19 | ECLOT             | W   | 0.531      | 0.303        | 0.084 (0.014)    | -                | -         |    11.09 | bnox, maaryy, mASKED, morelz, Vegi   |
|           20 |     2707 | 2024-02-07 | Endpoint          | L   | 0.451      | -            | -                | -                | -         |    -7.59 | bnox, maaryy, mASKED, morelz, Vegi   |
|           19 |     2852 | 2024-01-31 | Sashi             | W   | 0.405      | 0.143        | 0.157 (0.009)    | -                | -         |     8.76 | bnox, maaryy, mASKED, morelz, Vegi   |
|           18 |     2869 | 2024-01-30 | RUBY              | L   | 0.399      | -            | -                | -                | -         |    -7.48 | bnox, maaryy, mASKED, morelz, Vegi   |
|           17 |     2872 | 2024-01-30 | 3DMAX             | W   | 0.399      | -            | -                | -                | -         |    10.21 | bnox, maaryy, mASKED, morelz, Vegi   |
|           16 |     3080 | 2024-01-20 | Gaimin Gladiators | L   | 0.331      | -            | -                | -                | -         |    -1.48 | bnox, maaryy, mASKED, morelz, Vegi   |
|           15 |     3084 | 2024-01-20 | Astralis Talent   | L   | 0.330      | -            | -                | -                | -         |    -6.18 | bnox, maaryy, mASKED, morelz, Vegi   |
|           14 |     3117 | 2024-01-19 | JANO              | W   | 0.326      | -            | -                | -                | -         |     1.01 | bnox, maaryy, mASKED, morelz, Vegi   |
|           13 |     3140 | 2024-01-19 | Aurora Young Blud | W   | 0.323      | -            | -                | -                | -         |     2.25 | bnox, maaryy, mASKED, morelz, Vegi   |
|           12 |     3175 | 2024-01-18 | Zero Tenacity     | L   | 0.319      | -            | -                | -                | -         |    -3.11 | bnox, maaryy, mASKED, morelz, Vegi   |
|           11 |     3194 | 2024-01-18 | BIG               | L   | 0.318      | -            | -                | -                | -         |    -0.55 | bnox, maaryy, mASKED, morelz, Vegi   |
|           10 |     3202 | 2024-01-18 | Spirit Academy    | W   | 0.318      | -            | -                | -                | -         |     2.38 | bnox, maaryy, mASKED, morelz, Vegi   |
|            9 |     3242 | 2024-01-17 | Astralis Talent   | L   | 0.311      | -            | -                | -                | -         |    -5.93 | bnox, maaryy, mASKED, morelz, Vegi   |
|            8 |     3358 | 2024-01-14 | ECLOT             | W   | 0.291      | -            | -                | -                | -         |     6.36 | bnox, maaryy, mASKED, morelz, Vegi   |
|            7 |     3377 | 2024-01-13 | ex-sYnck          | W   | 0.287      | -            | -                | -                | -         |     1.55 | bnox, maaryy, mASKED, morelz, Vegi   |
|            6 |     3382 | 2024-01-13 | OG                | L   | 0.286      | -            | -                | -                | -         |    -1.36 | bnox, maaryy, mASKED, morelz, Vegi   |
|            5 |     3383 | 2024-01-13 | Insilio           | W   | 0.286      | -            | -                | -                | -         |     4.30 | bnox, maaryy, mASKED, morelz, Vegi   |
|            4 |     3390 | 2024-01-13 | INFINITE          | W   | 0.285      | -            | -                | -                | -         |     0.56 | bnox, maaryy, mASKED, morelz, Vegi   |
|            3 |     3421 | 2024-01-12 | Clоwnfiesta       | W   | 0.280      | -            | -                | -                | -         |     0.53 | bnox, maaryy, mASKED, morelz, Vegi   |
|            2 |     3471 | 2024-01-11 | PERA              | L   | 0.272      | -            | -                | -                | -         |    -4.38 | bnox, maaryy, mASKED, morelz, Vegi   |
|            1 |     3483 | 2024-01-10 | Illyrians         | W   | 0.267      | -            | -                | -                | -         |     0.50 | bnox, maaryy, mASKED, morelz, Vegi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,460.38)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      1.000 | $500.00        | $500.00         |
| 2024-04-25 |      0.971 | $3,000.00      | $2,911.76       |
| 2024-03-25 |      0.766 | $1,250.00      | $957.00         |
| 2024-02-28 |      0.590 | $3,000.00      | $1,771.36       |
| 2024-02-21 |      0.544 | $1,500.00      | $815.26         |
| 2024-01-21 |      0.337 | $1,500.00      | $505.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
