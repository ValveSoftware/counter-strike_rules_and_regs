### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  1048.5<br />
<br />
Final Rank Value (1048.5) = Starting Rank Value (1007.8) + Head To Head Adjustments (40.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.209[<sup>2</sup>](#table1)
- LAN Wins: 0.136[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1007.8
- 400 + ( ( 0.305 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1007.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |       36 | 2024-06-09 | Sangal         | L   | 1.000      | -            | -                | -                | -         |    -9.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           50 |      230 | 2024-06-06 | SINNERS        | W   | 1.000      | 0.500        | 0.045 (0.023)    | 0.844 (0.422)    | 0 (0.000) |    13.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           49 |      292 | 2024-06-05 | 3DMAX          | W   | 1.000      | 0.500        | 0.122 (0.061)    | 0.821 (0.410)    | 0 (0.000) |    22.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           48 |      426 | 2024-06-01 | ENCE           | L   | 1.000      | -            | -                | -                | -         |    -5.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           47 |      434 | 2024-06-01 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -11.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           46 |     1101 | 2024-05-09 | B8             | L   | 0.984      | -            | -                | -                | -         |   -13.84 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |     1263 | 2024-05-01 | Zero Tenacity  | L   | 0.932      | -            | -                | -                | -         |   -15.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |     1583 | 2024-04-18 | M1X KS         | L   | 0.846      | -            | -                | -                | -         |   -13.32 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |     1592 | 2024-04-18 | fnatic         | W   | 0.846      | 0.143        | 0.198 (0.024)    | 0.650 (0.079)    | 0 (0.000) |    20.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |     1662 | 2024-04-16 | BLEED          | L   | 0.834      | -            | -                | -                | -         |    -4.22 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |     1795 | 2024-04-10 | RUSH B         | W   | 0.793      | 0.500        | -                | 0.357 (0.142)    | 0 (0.000) |     6.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |     1849 | 2024-04-09 | Aurora         | W   | 0.787      | 0.500        | 0.513 (0.202)    | 0.918 (0.361)    | 0 (0.000) |    23.12 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     1855 | 2024-04-09 | Apeks          | L   | 0.786      | -            | -                | -                | -         |   -10.00 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1883 | 2024-04-08 | GUN5           | W   | 0.779      | -            | -                | -                | 0 (0.000) |     0.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1888 | 2024-04-08 | fnatic         | L   | 0.779      | -            | -                | -                | -         |    -4.38 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1989 | 2024-04-04 | NOM            | W   | 0.753      | -            | -                | -                | 0 (0.000) |     1.34 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     2023 | 2024-04-03 | 9INE           | W   | 0.747      | -            | -                | -                | -         |     0.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     2060 | 2024-04-02 | TSM            | W   | 0.740      | 0.500        | -                | 0.154 (0.057)    | -         |     3.92 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     2127 | 2024-03-28 | EYEBALLERS     | L   | 0.706      | -            | -                | -                | -         |   -14.93 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2299 | 2024-03-18 | FURIA          | L   | 0.640      | -            | -                | -                | -         |    -0.91 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2316 | 2024-03-17 | ENCE           | L   | 0.634      | -            | -                | -                | -         |    -2.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2331 | 2024-03-17 | SAW            | L   | 0.632      | -            | -                | -                | -         |    -3.00 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2422 | 2024-03-13 | Sangal         | W   | 0.607      | 0.500        | 0.214 (0.065)    | 0.998 (0.303)    | -         |    10.26 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2477 | 2024-03-11 | B8             | L   | 0.594      | -            | -                | -                | -         |    -7.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2483 | 2024-03-11 | Apeks          | L   | 0.593      | -            | -                | -                | -         |    -6.99 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2595 | 2024-03-06 | 9 Pandas       | W   | 0.561      | 0.500        | 0.114 (0.032)    | 0.758 (0.213)    | -         |    11.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2632 | 2024-03-05 | FORZE          | W   | 0.554      | -            | -                | -                | -         |     8.74 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2638 | 2024-03-05 | Nemiga         | W   | 0.553      | 0.143        | 0.335 (0.026)    | 0.638 (0.050)    | -         |    13.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2647 | 2024-03-05 | ex-Sprout      | W   | 0.553      | -            | -                | -                | -         |     1.40 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2688 | 2024-03-03 | The Chosen Few | L   | 0.540      | -            | -                | -                | -         |   -14.96 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2740 | 2024-02-29 | Aurora         | L   | 0.521      | -            | -                | -                | -         |    -1.04 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2746 | 2024-02-29 | HAVU           | W   | 0.519      | -            | -                | -                | -         |     2.59 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2754 | 2024-02-28 | FORZE          | L   | 0.514      | -            | -                | -                | -         |    -9.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2758 | 2024-02-28 | ECF            | W   | 0.513      | -            | -                | -                | -         |     3.25 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3048 | 2024-02-16 | fnatic         | W   | 0.432      | 0.143        | 0.198 (0.012)    | -                | 1 (0.432) |    11.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3075 | 2024-02-15 | 9 Pandas       | W   | 0.425      | -            | -                | -                | 1 (0.425) |     9.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3101 | 2024-02-14 | 3DMAX          | W   | 0.420      | 0.143        | -                | 0.821 (0.049)    | 1 (0.420) |     9.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3114 | 2024-02-14 | Natus Vincere  | L   | 0.418      | -            | -                | -                | -         |    -0.12 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3272 | 2024-02-03 | SAW            | L   | 0.346      | -            | -                | -                | -         |    -1.66 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3302 | 2024-02-02 | Rhyno          | W   | 0.339      | -            | -                | -                | -         |     4.28 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3308 | 2024-02-02 | ABT            | W   | 0.339      | -            | -                | -                | -         |     0.50 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3560 | 2024-01-20 | PERA           | W   | 0.254      | -            | -                | -                | -         |     2.92 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3568 | 2024-01-20 | Enterprise     | L   | 0.253      | -            | -                | -                | -         |    -4.46 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3626 | 2024-01-19 | HEROIC         | W   | 0.246      | 0.143        | 0.362 (0.013)    | -                | -         |     7.64 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3682 | 2024-01-18 | AMKAL          | L   | 0.240      | -            | -                | -                | -         |    -1.92 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3698 | 2024-01-18 | Spirit         | W   | 0.239      | 0.143        | 1.000 (0.034)    | -                | -         |     7.47 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4006 | 2024-01-09 | Enterprise     | L   | 0.182      | -            | -                | -                | -         |    -3.21 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4008 | 2024-01-09 | Entropiq       | W   | 0.181      | -            | -                | -                | -         |     0.56 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4012 | 2024-01-09 | 9INE           | W   | 0.181      | -            | -                | -                | -         |     0.37 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4028 | 2024-01-09 | Fraud5         | W   | 0.180      | -            | -                | -                | -         |     0.81 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4051 | 2024-01-09 | Betera         | W   | 0.179      | -            | -                | -                | -         |     0.90 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,532.73)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
