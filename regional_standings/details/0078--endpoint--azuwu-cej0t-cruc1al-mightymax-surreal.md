### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [78](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  885.8<br />
<br />
Final Rank Value (885.8) = Starting Rank Value (882.2) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.2
- 400 + ( ( 0.248 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 882.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       59 | 2024-05-27 | Rhyno                | L   | 1.000      | -            | -                | -                | -         |   -14.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           49 |      111 | 2024-05-24 | ALTERNATE aTTaX      | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.650 (0.282)    | 0 (0.000) |    12.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           48 |      165 | 2024-05-22 | Permitta             | L   | 1.000      | -            | -                | -                | -         |   -18.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           47 |      214 | 2024-05-21 | RUBY                 | L   | 1.000      | -            | -                | -                | -         |   -16.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           46 |      268 | 2024-05-19 | Sangal               | L   | 1.000      | -            | -                | -                | -         |   -13.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           45 |      333 | 2024-05-17 | Zero Tenacity        | L   | 1.000      | -            | -                | -                | -         |   -12.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           44 |      419 | 2024-05-15 | Passion UA           | W   | 1.000      | 0.435        | 0.056 (0.025)    | 0.759 (0.330)    | 0 (0.000) |    14.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           43 |      427 | 2024-05-15 | Sashi                | L   | 1.000      | -            | -                | -                | -         |    -5.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           42 |      483 | 2024-05-14 | ALTERNATE aTTaX      | L   | 1.000      | -            | -                | -                | -         |   -15.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           41 |      542 | 2024-05-11 | MOUZ NXT             | L   | 1.000      | -            | -                | -                | -         |   -11.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           40 |      596 | 2024-05-09 | PARIVISION           | W   | 1.000      | 0.435        | -                | 0.475 (0.206)    | 0 (0.000) |    15.41 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           39 |      677 | 2024-05-05 | SINNERS              | L   | 1.000      | -            | -                | -                | -         |   -16.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           38 |      698 | 2024-05-04 | Sampi                | W   | 1.000      | 0.435        | 0.038 (0.016)    | 0.794 (0.345)    | 0 (0.000) |    15.19 | AZUWU, CRUC1AL, Frøg, MiGHTYMAX, Surreal   |
|           37 |      723 | 2024-05-02 | MOUZ NXT             | W   | 1.000      | 0.435        | 0.157 (0.068)    | 1.000 (0.435)    | 0 (0.000) |    20.11 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           36 |      738 | 2024-05-02 | Grannys Knockers     | W   | 1.000      | 0.384        | 0.013 (0.005)    | -                | 0 (0.000) |    10.69 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           35 |      776 | 2024-04-30 | ALTERNATE aTTaX      | W   | 1.000      | 0.396        | 0.048 (0.019)    | 0.650 (0.258)    | 0 (0.000) |    16.22 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           34 |      783 | 2024-04-30 | ENCE Academy         | W   | 1.000      | 0.396        | 0.012 (0.005)    | 0.321 (0.127)    | 0 (0.000) |    10.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           33 |      797 | 2024-04-29 | Nexus                | W   | 0.999      | 0.435        | 0.014 (0.006)    | 0.518 (0.225)    | -         |    13.35 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           32 |      810 | 2024-04-29 | Alliance             | L   | 0.997      | -            | -                | -                | -         |   -16.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           31 |      918 | 2024-04-24 | SINNERS              | W   | 0.965      | 0.384        | 0.009 (0.003)    | 0.728 (0.270)    | -         |    19.75 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           30 |     1151 | 2024-04-17 | EYEBALLERS           | W   | 0.917      | 0.384        | -                | 0.611 (0.215)    | -         |    13.98 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal  |
|           29 |     1868 | 2024-03-15 | ex-sYnck             | W   | 0.698      | -            | -                | -                | -         |     4.63 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           28 |     1896 | 2024-03-14 | The Chosen Few       | L   | 0.693      | -            | -                | -                | -         |   -15.06 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           27 |     1969 | 2024-03-12 | Secret               | W   | 0.678      | -            | -                | -                | -         |     3.54 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           26 |     2004 | 2024-03-10 | Nemiga               | L   | 0.666      | -            | -                | -                | -         |    -2.56 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           25 |     2040 | 2024-03-09 | BLEED                | L   | 0.657      | -            | -                | -                | -         |    -2.81 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           24 |     2070 | 2024-03-07 | ECF                  | W   | 0.646      | 0.372        | 0.013 (0.003)    | -                | -         |     7.50 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           23 |     2109 | 2024-03-06 | V1dar                | W   | 0.638      | -            | -                | -                | -         |     2.92 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           22 |     2151 | 2024-03-05 | GODSENT              | W   | 0.632      | -            | -                | -                | -         |     4.57 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           21 |     2244 | 2024-02-29 | Metizport            | L   | 0.598      | -            | -                | -                | -         |    -6.27 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           20 |     2302 | 2024-02-26 | ALTERNATE aTTaX      | L   | 0.577      | -            | -                | -                | -         |    -8.22 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           19 |     2682 | 2024-02-09 | 3DMAX                | L   | 0.465      | -            | -                | -                | -         |    -2.83 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           18 |     2687 | 2024-02-09 | fnatic               | L   | 0.464      | -            | -                | -                | -         |    -3.12 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           17 |     2707 | 2024-02-07 | Permitta             | W   | 0.451      | -            | -                | -                | -         |     7.59 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           16 |     2877 | 2024-01-30 | Entropiq             | W   | 0.398      | -            | -                | -                | -         |     2.39 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           15 |     3266 | 2024-01-16 | Nexus                | L   | 0.307      | -            | -                | -                | -         |    -4.83 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           14 |     3280 | 2024-01-16 | 00NATION             | W   | 0.306      | -            | -                | -                | -         |     0.99 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           13 |     3289 | 2024-01-16 | GUN5                 | W   | 0.306      | -            | -                | -                | -         |     0.89 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           12 |     3472 | 2024-01-11 | ILIN                 | L   | 0.272      | -            | -                | -                | -         |    -7.64 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           11 |     3487 | 2024-01-10 | GRGECHI              | W   | 0.267      | -            | -                | -                | -         |     0.53 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|           10 |     3665 | 2023-12-16 | Eternal Fire Academy | W   | 0.098      | -            | -                | -                | 1 (0.098) |     0.56 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|            9 |     3690 | 2023-12-15 | Onyx Ravens          | W   | 0.092      | -            | -                | -                | 1 (0.092) |     0.49 | AZUWU, MiGHTYMAX, sl3nd, Surreal, swicher  |
|            8 |     3760 | 2023-12-09 | RUSH B               | L   | 0.053      | -            | -                | -                | -         |    -1.19 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            7 |     3767 | 2023-12-09 | ex-Preasy            | L   | 0.051      | -            | -                | -                | -         |    -0.75 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            6 |     3807 | 2023-12-07 | BIG Academy          | L   | 0.039      | -            | -                | -                | -         |    -1.00 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            5 |     3816 | 2023-12-07 | ex-sYnck             | W   | 0.038      | -            | -                | -                | -         |     0.20 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            4 |     3823 | 2023-12-06 | MOUZ NXT             | W   | 0.033      | -            | -                | -                | -         |     0.77 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            3 |     3850 | 2023-12-06 | Sprout               | L   | 0.030      | -            | -                | -                | -         |    -0.78 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            2 |     3858 | 2023-12-05 | Enterprise           | W   | 0.026      | -            | -                | -                | -         |     0.41 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |
|            1 |     3884 | 2023-12-04 | The Witchers         | W   | 0.018      | -            | -                | -                | -         |     0.14 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,581.90)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2023-12-16 |      0.098 | $10,000.00     | $983.31         |
| 2023-12-13 |      0.079 | $1,250.00      | $98.59          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
