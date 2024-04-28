### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, exit, HEN1, insani, Tuurtle<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
Final Rank Value:  1023.7<br />
<br />
Final Rank Value (1023.7) = Starting Rank Value (981.6) + Head To Head Adjustments (42.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.488[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.152[<sup>2</sup>](#table1)
- LAN Wins: 0.156[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.6
- 400 + ( ( 0.284 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 981.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       74 | 2023-02-08 | Strife               | W   | 1.000      | 0.435        | 0.015 (0.007)    | 0.314 (0.136)    | 0 (0.000) |     7.55 | brnz4n, exit, HEN1, insani, Tuurtle |
|           61 |       94 | 2023-02-07 | Nouns                | W   | 1.000      | 0.435        | 0.059 (0.026)    | 0.589 (0.256)    | 0 (0.000) |    11.33 | brnz4n, exit, HEN1, insani, Tuurtle |
|           60 |      114 | 2023-02-06 | Vendetta             | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.361 (0.157)    | 0 (0.000) |     9.64 | brnz4n, exit, HEN1, insani, Tuurtle |
|           59 |      194 | 2023-02-03 | fnatic               | L   | 1.000      | -            | -                | -                | -         |    -2.08 | brnz4n, exit, HEN1, insani, Tuurtle |
|           58 |      215 | 2023-02-02 | Grayhound            | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.94 | brnz4n, exit, HEN1, insani, Tuurtle |
|           57 |      247 | 2023-02-01 | Ninjas in Pyjamas    | L   | 1.000      | -            | -                | -                | -         |    -4.87 | brnz4n, exit, HEN1, insani, Tuurtle |
|           56 |      561 | 2023-01-20 | Nouns                | W   | 1.000      | 0.143        | 0.059 (0.008)    | -                | 0 (0.000) |    10.90 | brnz4n, exit, HEN1, insani, Tuurtle |
|           55 |      581 | 2023-01-19 | ATK                  | L   | 1.000      | -            | -                | -                | -         |   -15.14 | brnz4n, exit, HEN1, insani, Tuurtle |
|           54 |      609 | 2023-01-18 | Nouns                | W   | 1.000      | 0.143        | 0.059 (0.008)    | -                | 0 (0.000) |    11.18 | brnz4n, exit, HEN1, insani, Tuurtle |
|           53 |      758 | 2022-12-18 | EG Black             | W   | 0.829      | 0.435        | 0.024 (0.009)    | 0.362 (0.130)    | 0 (0.000) |    11.67 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           52 |      798 | 2022-12-17 | TeamOne              | W   | 0.822      | 0.435        | 0.028 (0.010)    | 0.445 (0.159)    | 0 (0.000) |    11.91 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           51 |      855 | 2022-12-15 | EG Black             | L   | 0.809      | -            | -                | -                | -         |   -13.91 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           50 |      884 | 2022-12-14 | TeamOne              | W   | 0.802      | 0.435        | 0.028 (0.010)    | 0.445 (0.155)    | -         |    11.15 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           49 |      903 | 2022-12-13 | ATK                  | W   | 0.796      | 0.435        | 0.070 (0.024)    | 0.646 (0.224)    | -         |    13.01 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           48 |      935 | 2022-12-11 | timbermen            | W   | 0.782      | -            | -                | -                | -         |     7.82 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           47 |      940 | 2022-12-11 | Evil Geniuses        | L   | 0.781      | -            | -                | -                | -         |    -8.47 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           46 |      942 | 2022-12-11 | paiN                 | L   | 0.781      | -            | -                | -                | -         |    -8.21 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           45 |      964 | 2022-12-10 | Disconnected         | W   | 0.776      | -            | -                | -                | -         |     5.95 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           44 |      973 | 2022-12-10 | fl0m's Money Crew    | W   | 0.775      | -            | -                | -                | -         |     1.05 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           43 |     1028 | 2022-12-08 | Red Wolves           | W   | 0.762      | -            | -                | -                | -         |     3.68 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           42 |     1137 | 2022-12-05 | 7AM NA               | W   | 0.742      | -            | -                | -                | -         |     2.27 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           41 |     1240 | 2022-12-02 | EG Black             | L   | 0.722      | -            | -                | -                | -         |   -13.84 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           40 |     1269 | 2022-12-01 | TeamOne              | L   | 0.715      | -            | -                | -                | -         |   -12.79 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           39 |     1296 | 2022-11-30 | Strife               | W   | 0.709      | 0.435        | -                | 0.314 (0.097)    | -         |     5.95 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           38 |     1346 | 2022-11-28 | Snakes Den           | W   | 0.695      | -            | -                | -                | -         |     2.82 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           37 |     1350 | 2022-11-28 | Detonate             | W   | 0.695      | 0.435        | -                | 0.400 (0.121)    | -         |     5.18 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           36 |     1367 | 2022-11-27 | EG Black             | W   | 0.689      | 0.354        | 0.024 (0.006)    | -                | -         |     8.18 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           35 |     1375 | 2022-11-27 | ATK                  | L   | 0.688      | -            | -                | -                | -         |   -10.47 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           34 |     1406 | 2022-11-26 | Vendetta             | W   | 0.682      | -            | -                | -                | -         |     6.00 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           33 |     1440 | 2022-11-25 | timbermen            | L   | 0.676      | -            | -                | -                | -         |   -14.84 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           32 |     1924 | 2022-10-23 | Fluxo                | L   | 0.455      | -            | -                | -                | -         |    -7.95 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           31 |     1942 | 2022-10-22 | ATK                  | L   | 0.448      | -            | -                | -                | -         |    -7.70 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           30 |     1957 | 2022-10-22 | Sharks               | W   | 0.447      | 0.461        | -                | 0.439 (0.090)    | -         |     3.56 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           29 |     2001 | 2022-10-20 | Nouns                | L   | 0.435      | -            | -                | -                | -         |    -8.78 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           28 |     2002 | 2022-10-20 | TeamOne              | W   | 0.435      | -            | -                | -                | -         |     5.12 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           27 |     2029 | 2022-10-19 | EG Black             | W   | 0.428      | -            | -                | -                | -         |     4.63 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           26 |     2052 | 2022-10-18 | timbermen            | W   | 0.422      | -            | -                | -                | -         |     3.55 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           25 |     2128 | 2022-10-15 | 9z                   | L   | 0.400      | -            | -                | -                | -         |    -7.67 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           24 |     2337 | 2022-10-07 | ex-Isurus            | L   | 0.347      | -            | -                | -                | -         |    -7.40 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           23 |     2372 | 2022-10-06 | ATK                  | L   | 0.338      | -            | -                | -                | -         |    -6.13 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           22 |     2388 | 2022-10-05 | Liquid               | L   | 0.333      | -            | -                | -                | -         |    -0.11 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           21 |     2399 | 2022-10-05 | O PLANO              | W   | 0.332      | -            | -                | -                | 1 (0.332) |     0.79 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           20 |     2770 | 2022-09-21 | Brazen               | W   | 0.242      | -            | -                | -                | -         |     0.86 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           19 |     2797 | 2022-09-20 | Mythic               | W   | 0.235      | -            | -                | -                | -         |     1.13 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           18 |     2824 | 2022-09-19 | Davenport University | W   | 0.229      | -            | -                | -                | -         |     1.31 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           17 |     2829 | 2022-09-19 | EG Black             | W   | 0.228      | -            | -                | -                | -         |     2.36 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           16 |     2903 | 2022-09-16 | TeamOne              | W   | 0.208      | -            | -                | -                | -         |     2.45 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           15 |     2934 | 2022-09-15 | Unjustified          | W   | 0.202      | -            | -                | -                | -         |     0.39 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           14 |     2980 | 2022-09-14 | Phantom Troupe       | W   | 0.195      | -            | -                | -                | -         |     0.74 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           13 |     3071 | 2022-09-11 | FTW                  | W   | 0.173      | -            | -                | -                | 1 (0.173) |     1.98 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           12 |     3145 | 2022-09-10 | Outsiders            | L   | 0.166      | -            | -                | -                | -         |    -0.14 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           11 |     3172 | 2022-09-09 | BIG                  | L   | 0.159      | -            | -                | -                | -         |    -0.49 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|           10 |     3219 | 2022-09-08 | FaZe                 | L   | 0.154      | -            | -                | -                | -         |    -0.09 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            9 |     3235 | 2022-09-07 | G2                   | L   | 0.147      | -            | -                | -                | -         |    -0.02 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            8 |     3290 | 2022-09-04 | 1WIN                 | W   | 0.126      | -            | -                | -                | -         |     1.34 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            7 |     3295 | 2022-09-04 | IKLA                 | W   | 0.125      | -            | -                | -                | -         |     1.51 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            6 |     3323 | 2022-09-03 | Monte                | W   | 0.119      | -            | -                | -                | -         |     1.57 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            5 |     3392 | 2022-09-01 | Tricked              | W   | 0.106      | -            | -                | -                | -         |     1.74 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            4 |     3753 | 2022-08-17 | paiN                 | L   | 0.009      | -            | -                | -                | -         |    -0.10 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            3 |     3755 | 2022-08-17 | Fluxo                | W   | 0.008      | -            | -                | -                | -         |     0.10 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            2 |     3775 | 2022-08-16 | Fuscão 1500          | W   | 0.002      | -            | -                | -                | -         |     0.01 | brnz4n, exit, HEN1, JOTA, Tuurtle   |
|            1 |     3783 | 2022-08-16 | B4                   | W   | 0.001      | -            | -                | -                | -         |     0.00 | brnz4n, exit, HEN1, JOTA, Tuurtle   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,158.44)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $4,500.00      | $4,500.00       |
| 2022-12-18 |      0.829 | $20,000.00     | $16,577.21      |
| 2022-12-11 |      0.783 | $2,500.00      | $1,956.39       |
| 2022-12-11 |      0.782 | $2,000.00      | $1,564.62       |
| 2022-11-27 |      0.689 | $2,000.00      | $1,378.66       |
| 2022-10-23 |      0.455 | $7,000.00      | $3,187.38       |
| 2022-10-23 |      0.455 | $12,500.00     | $5,682.13       |
| 2022-10-16 |      0.407 | $1,500.00      | $611.12         |
| 2022-10-02 |      0.314 | $12,500.00     | $3,925.49       |
| 2022-09-04 |      0.126 | $22,000.00     | $2,775.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
