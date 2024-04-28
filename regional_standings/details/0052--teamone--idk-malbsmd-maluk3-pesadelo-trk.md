### Roster Details<br />
Team Name: TeamOne<br />
Roster: iDk, malbsMd, Maluk3, pesadelo, trk<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
Final Rank Value:  930.0<br />
<br />
Final Rank Value (930.0) = Starting Rank Value (885.2) + Head To Head Adjustments (44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.120[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 885.2
- 400 + ( ( 0.237 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 885.2


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
|           59 |      798 | 2022-12-17 | MIBR                 | L   | 0.822      | -            | -                | -                | -         |   -11.91 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           58 |      827 | 2022-12-16 | ATK                  | W   | 0.816      | 0.435        | 0.070 (0.025)    | 0.646 (0.229)    | 0 (0.000) |    14.11 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           57 |      856 | 2022-12-15 | timbermen            | W   | 0.809      | 0.435        | 0.016 (0.006)    | 0.306 (0.107)    | 0 (0.000) |     8.65 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           56 |      884 | 2022-12-14 | MIBR                 | L   | 0.802      | -            | -                | -                | -         |   -11.15 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           55 |      904 | 2022-12-13 | Disconnected         | W   | 0.796      | -            | -                | -                | 0 (0.000) |     2.85 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           54 |      968 | 2022-12-10 | Complexity           | L   | 0.775      | -            | -                | -                | -         |    -2.29 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           53 |     1030 | 2022-12-08 | Davenport University | W   | 0.762      | 0.384        | 0.014 (0.004)    | 0.227 (0.066)    | 0 (0.000) |     5.82 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           52 |     1058 | 2022-12-07 | timbermen            | W   | 0.755      | 0.435        | 0.016 (0.005)    | 0.306 (0.100)    | -         |     8.20 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           51 |     1099 | 2022-12-06 | EG Black             | L   | 0.748      | -            | -                | -                | -         |   -12.23 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           50 |     1269 | 2022-12-01 | MIBR                 | W   | 0.715      | 0.435        | 0.089 (0.028)    | 0.586 (0.182)    | -         |    12.79 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           49 |     1292 | 2022-11-30 | Detonate             | W   | 0.709      | 0.384        | -                | 0.400 (0.109)    | -         |     6.32 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           48 |     1324 | 2022-11-29 | Detonate             | W   | 0.702      | 0.435        | 0.008 (0.002)    | 0.400 (0.122)    | -         |     6.59 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           47 |     1343 | 2022-11-28 | Mad Kings            | W   | 0.696      | -            | -                | -                | -         |     2.73 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           46 |     1408 | 2022-11-26 | ATK                  | L   | 0.682      | -            | -                | -                | -         |    -9.11 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           45 |     1439 | 2022-11-25 | Orion                | W   | 0.676      | -            | -                | -                | -         |     3.83 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           44 |     1489 | 2022-11-23 | Strife               | W   | 0.662      | 0.435        | 0.015 (0.004)    | 0.314 (0.090)    | -         |     7.46 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           43 |     1633 | 2022-11-15 | 7AM NA               | W   | 0.609      | -            | -                | -                | -         |     2.60 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           42 |     1671 | 2022-11-08 | Snakes Den           | W   | 0.562      | -            | -                | -                | -         |     3.44 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           41 |     1946 | 2022-10-22 | ATK                  | L   | 0.448      | -            | -                | -                | -         |    -6.08 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           40 |     1999 | 2022-10-20 | EG Black             | W   | 0.435      | 0.435        | 0.024 (0.005)    | 0.362 (0.069)    | -         |     6.26 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           39 |     2002 | 2022-10-20 | MIBR                 | L   | 0.435      | -            | -                | -                | -         |    -5.12 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           38 |     2028 | 2022-10-19 | Brazen               | W   | 0.429      | -            | -                | -                | -         |     2.37 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           37 |     2055 | 2022-10-18 | Nouns                | L   | 0.422      | -            | -                | -                | -         |    -7.19 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           36 |     2167 | 2022-10-14 | Fluxo                | L   | 0.394      | -            | -                | -                | -         |    -6.05 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           35 |     2201 | 2022-10-14 | ENCE                 | L   | 0.390      | -            | -                | -                | -         |    -1.41 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           34 |     2338 | 2022-10-07 | Imperial             | L   | 0.347      | -            | -                | -                | -         |    -6.05 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           33 |     2360 | 2022-10-06 | Cartel terraza       | W   | 0.340      | -            | -                | -                | 1 (0.340) |     2.06 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           32 |     2382 | 2022-10-05 | O PLANO              | L   | 0.334      | -            | -                | -                | -         |    -9.33 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           31 |     2398 | 2022-10-05 | Liquid               | L   | 0.332      | -            | -                | -                | -         |    -0.07 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           30 |     2609 | 2022-09-25 | Nouns                | W   | 0.268      | 0.143        | 0.059 (0.002)    | -                | -         |     3.71 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           29 |     2647 | 2022-09-24 | EG White             | W   | 0.261      | -            | -                | -                | -         |     3.83 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           28 |     2680 | 2022-09-23 | Brazen               | W   | 0.256      | -            | -                | -                | -         |     1.38 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           27 |     2692 | 2022-09-23 | Nouns                | W   | 0.254      | -            | -                | -                | -         |     3.58 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           26 |     2698 | 2022-09-23 | Disconnected         | W   | 0.253      | -            | -                | -                | -         |     2.17 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           25 |     2734 | 2022-09-22 | Unjustified          | W   | 0.248      | -            | -                | -                | -         |     0.76 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           24 |     2737 | 2022-09-22 | EG Black             | W   | 0.248      | 0.435        | 0.024 (0.003)    | 0.362 (0.039)    | -         |     3.47 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           23 |     2800 | 2022-09-20 | Davenport University | W   | 0.235      | -            | -                | -                | -         |     2.02 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           22 |     2839 | 2022-09-18 | ATK                  | W   | 0.222      | -            | -                | -                | -         |     4.08 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           21 |     2848 | 2022-09-18 | Nouns                | W   | 0.221      | -            | -                | -                | -         |     2.08 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           20 |     2870 | 2022-09-17 | ATK                  | L   | 0.216      | -            | -                | -                | -         |    -2.86 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           19 |     2877 | 2022-09-17 | Nouns                | W   | 0.214      | -            | -                | -                | -         |     2.00 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           18 |     2903 | 2022-09-16 | MIBR                 | L   | 0.208      | -            | -                | -                | -         |    -2.45 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           17 |     2933 | 2022-09-15 | Phantom Troupe       | W   | 0.202      | -            | -                | -                | -         |     1.17 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           16 |     3063 | 2022-09-11 | EG White             | L   | 0.174      | -            | -                | -                | -         |    -2.86 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           15 |     3067 | 2022-09-11 | EG Black             | W   | 0.174      | -            | -                | -                | 1 (0.174) |     2.53 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           14 |     3127 | 2022-09-10 | Nouns                | W   | 0.167      | -            | -                | -                | 1 (0.167) |     1.58 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           13 |     3142 | 2022-09-10 | Phantom Troupe       | W   | 0.166      | -            | -                | -                | 1 (0.166) |     0.98 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           12 |     3183 | 2022-09-09 | 7AM NA               | W   | 0.159      | -            | -                | -                | 1 (0.159) |     0.65 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           11 |     3215 | 2022-09-08 | Dripmen              | W   | 0.154      | -            | -                | -                | 1 (0.154) |     1.17 | iDk, malbsMd, Maluk3, pesadelo, trk |
|           10 |     3230 | 2022-09-07 | timbermen            | W   | 0.148      | -            | -                | -                | -         |     1.76 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            9 |     3231 | 2022-09-07 | Phantom Troupe       | W   | 0.148      | -            | -                | -                | -         |     0.89 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            8 |     3247 | 2022-09-06 | Disconnected         | W   | 0.142      | -            | -                | -                | -         |     1.30 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            7 |     3260 | 2022-09-05 | Cartel terraza       | W   | 0.134      | -            | -                | -                | -         |     0.92 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            6 |     3273 | 2022-09-04 | Disconnected         | W   | 0.128      | -            | -                | -                | -         |     1.21 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            5 |     3277 | 2022-09-04 | Unjustified          | W   | 0.128      | -            | -                | -                | -         |     0.43 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            4 |     3307 | 2022-09-03 | Vendetta             | W   | 0.122      | -            | -                | -                | -         |     1.03 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            3 |     3376 | 2022-09-01 | Evil Geniuses        | L   | 0.108      | -            | -                | -                | -         |    -0.95 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            2 |     3406 | 2022-08-31 | Phantom Troupe       | W   | 0.102      | -            | -                | -                | -         |     0.63 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            1 |     3583 | 2022-08-24 | Mythic               | W   | 0.055      | -            | -                | -                | -         |     0.46 | iDk, malbsMd, Maluk3, pesadelo, trk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,249.50)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.829 | $7,000.00      | $5,802.02       |
| 2022-12-11 |      0.783 | $1,000.00      | $782.55         |
| 2022-10-23 |      0.455 | $4,000.00      | $1,821.36       |
| 2022-10-23 |      0.455 | $5,000.00      | $2,272.85       |
| 2022-10-16 |      0.406 | $2,000.00      | $812.27         |
| 2022-09-11 |      0.176 | $10,000.00     | $1,758.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
