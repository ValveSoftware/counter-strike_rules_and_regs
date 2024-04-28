### Roster Details<br />
Team Name: ECSTATIC<br />
Roster: Cabbi, kraghen, maNkz, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  851.6<br />
<br />
Final Rank Value (851.6) = Starting Rank Value (885.3) + Head To Head Adjustments (-33.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.217[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 885.3
- 400 + ( ( 0.237 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 885.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |      206 | 2023-02-02 | VOYVODA            | L   | 1.000      | -            | -                | -                | -         |   -24.59 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           64 |      220 | 2023-02-02 | ECLOT              | L   | 1.000      | -            | -                | -                | -         |   -14.01 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           63 |      229 | 2023-02-01 | forZe              | L   | 1.000      | -            | -                | -                | -         |    -9.52 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           62 |      277 | 2023-01-31 | GODSENT            | L   | 1.000      | -            | -                | -                | -         |   -18.72 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           61 |      279 | 2023-01-31 | undefined          | L   | 1.000      | -            | -                | -                | -         |   -22.98 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           60 |      348 | 2023-01-28 | Apeks              | L   | 1.000      | -            | -                | -                | -         |   -12.06 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           59 |      432 | 2023-01-25 | Falcons            | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.767 (0.333)    | 0 (0.000) |    17.51 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           58 |      448 | 2023-01-25 | iNation            | W   | 1.000      | 0.371        | 0.042 (0.016)    | 0.684 (0.253)    | 0 (0.000) |    20.86 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           57 |      454 | 2023-01-25 | Monte              | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.945 (0.350)    | 0 (0.000) |    20.57 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           56 |      476 | 2023-01-24 | Astralis Talent    | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.522 (0.194)    | 0 (0.000) |    16.38 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           55 |      478 | 2023-01-24 | BIG Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.69 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           54 |      504 | 2023-01-23 | sYnck              | W   | 1.000      | 0.371        | -                | 0.397 (0.147)    | 0 (0.000) |    13.30 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           53 |      559 | 2023-01-21 | los kogutos        | W   | 1.000      | 0.371        | -                | 0.364 (0.135)    | 0 (0.000) |    13.38 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           52 |      607 | 2023-01-19 | Monte              | L   | 1.000      | -            | -                | -                | -         |    -8.48 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           51 |      620 | 2023-01-18 | UNGENTIUM          | W   | 1.000      | 0.371        | 0.015 (0.005)    | 0.474 (0.176)    | 0 (0.000) |    13.42 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           50 |      625 | 2023-01-18 | ENCE Academy       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.49 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           49 |      651 | 2023-01-17 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |   -12.14 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           48 |      668 | 2023-01-16 | 777                | L   | 1.000      | -            | -                | -                | -         |   -20.47 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           47 |      721 | 2023-01-12 | UNGENTIUM          | W   | 0.991      | 0.371        | 0.015 (0.005)    | 0.474 (0.174)    | 0 (0.000) |    13.31 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           46 |      859 | 2022-12-15 | Astralis           | L   | 0.807      | -            | -                | -                | -         |    -1.80 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           45 |      944 | 2022-12-11 | K23                | W   | 0.780      | 0.435        | 0.020 (0.007)    | -                | -         |    15.07 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           44 |     1090 | 2022-12-07 | eSuba              | W   | 0.751      | 0.435        | 0.028 (0.009)    | -                | -         |    13.91 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           43 |     1113 | 2022-12-06 | 9INE               | L   | 0.747      | -            | -                | -                | -         |    -7.34 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           42 |     1145 | 2022-12-05 | ex-Into the Breach | L   | 0.739      | -            | -                | -                | -         |   -11.22 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           41 |     1182 | 2022-12-04 | MASONIC            | L   | 0.732      | -            | -                | -                | -         |    -9.49 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           40 |     1220 | 2022-12-03 | Prosapia           | W   | 0.726      | -            | -                | -                | -         |     3.29 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           39 |     1232 | 2022-12-03 | Young Ninjas       | L   | 0.724      | -            | -                | -                | -         |    -7.48 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           38 |     1309 | 2022-11-30 | ECLOT              | L   | 0.706      | -            | -                | -                | -         |    -7.62 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           37 |     1363 | 2022-11-28 | Falcons            | W   | 0.692      | 0.435        | 0.045 (0.014)    | 0.767 (0.231)    | -         |    12.97 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           36 |     1431 | 2022-11-26 | eSuba              | L   | 0.678      | -            | -                | -                | -         |    -8.63 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           35 |     1462 | 2022-11-25 | ex-Finest          | L   | 0.672      | -            | -                | -                | -         |    -8.78 | Cabbi, kraghen, maNkz, Queenix, salazar |
|           34 |     1741 | 2022-11-02 | EPG Family         | L   | 0.520      | -            | -                | -                | -         |    -8.46 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           33 |     1830 | 2022-10-28 | 500                | L   | 0.485      | -            | -                | -                | -         |    -4.31 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           32 |     1836 | 2022-10-27 | Nemiga             | L   | 0.481      | -            | -                | -                | -         |    -9.41 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           31 |     1882 | 2022-10-25 | mew                | W   | 0.467      | -            | -                | -                | -         |     0.97 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           30 |     2010 | 2022-10-20 | Heroic             | L   | 0.434      | -            | -                | -                | -         |    -0.08 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           29 |     2046 | 2022-10-19 | IKLA               | L   | 0.426      | -            | -                | -                | -         |    -6.02 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           28 |     2067 | 2022-10-18 | 9INE               | W   | 0.419      | 0.435        | 0.045 (0.008)    | 1.000 (0.182)    | -         |     7.35 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           27 |     2159 | 2022-10-15 | UNGENTIUM          | W   | 0.397      | -            | -                | -                | -         |     5.09 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           26 |     2212 | 2022-10-13 | Sangal             | L   | 0.386      | -            | -                | -                | -         |    -4.67 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           25 |     2255 | 2022-10-12 | PROSPECTS          | L   | 0.379      | -            | -                | -                | -         |    -4.57 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           24 |     2287 | 2022-10-11 | EYEBALLERS         | L   | 0.371      | -            | -                | -                | -         |    -5.46 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           23 |     2362 | 2022-10-06 | forZe              | L   | 0.339      | -            | -                | -                | -         |    -3.91 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           22 |     2413 | 2022-10-05 | B8                 | L   | 0.331      | -            | -                | -                | -         |    -8.78 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           21 |     2431 | 2022-10-04 | G2                 | L   | 0.324      | -            | -                | -                | -         |    -0.02 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           20 |     2529 | 2022-09-29 | SAW                | L   | 0.292      | -            | -                | -                | -         |    -2.02 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           19 |     2619 | 2022-09-25 | MASONIC            | W   | 0.267      | -            | -                | -                | -         |     4.48 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           18 |     2638 | 2022-09-25 | ENCE               | W   | 0.264      | -            | -                | -                | -         |     7.46 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           17 |     2718 | 2022-09-23 | MASONIC            | W   | 0.252      | -            | -                | -                | -         |     4.41 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           16 |     2724 | 2022-09-23 | DUSTY              | W   | 0.251      | -            | -                | -                | -         |     0.51 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           15 |     2815 | 2022-09-20 | Sashi              | W   | 0.232      | -            | -                | -                | -         |     1.62 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           14 |     2990 | 2022-09-14 | Falcons            | L   | 0.194      | -            | -                | -                | -         |    -2.21 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           13 |     3007 | 2022-09-14 | ex-Into the Breach | L   | 0.191      | -            | -                | -                | -         |    -3.29 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           12 |     3024 | 2022-09-13 | UNGENTIUM          | W   | 0.187      | -            | -                | -                | -         |     2.45 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           11 |     3079 | 2022-09-11 | NASR               | L   | 0.173      | -            | -                | -                | -         |    -4.84 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|           10 |     3119 | 2022-09-10 | B8                 | W   | 0.167      | -            | -                | -                | -         |     0.85 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            9 |     3233 | 2022-09-07 | Falcons            | L   | 0.147      | -            | -                | -                | -         |    -1.72 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            8 |     3586 | 2022-08-24 | HEET               | W   | 0.053      | -            | -                | -                | -         |     0.98 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            7 |     3590 | 2022-08-24 | los kogutos        | W   | 0.053      | -            | -                | -                | -         |     0.62 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            6 |     3598 | 2022-08-23 | Eternal Fire       | L   | 0.048      | -            | -                | -                | -         |    -0.66 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            5 |     3609 | 2022-08-23 | ex-Finest          | W   | 0.046      | -            | -                | -                | -         |     0.43 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            4 |     3621 | 2022-08-23 | OneTap             | W   | 0.046      | -            | -                | -                | -         |     0.45 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            3 |     3690 | 2022-08-21 | UNGENTIUM          | L   | 0.033      | -            | -                | -                | -         |    -0.59 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            2 |     3767 | 2022-08-17 | GTZ                | L   | 0.006      | -            | -                | -                | -         |    -0.15 | brzer, Cabbi, kraghen, maNkz, Queenix   |
|            1 |     3792 | 2022-08-16 | Sprout             | L   | 0.000      | -            | -                | -                | -         |    -0.00 | brzer, Cabbi, kraghen, maNkz, Queenix   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,279.88)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-25 |      1.000 | $11,000.00     | $11,000.00      |
| 2022-12-04 |      0.733 | $700.00        | $513.11         |
| 2022-10-30 |      0.500 | $1,000.00      | $499.91         |
| 2022-10-23 |      0.453 | $5,000.00      | $2,266.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
