### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  752.5<br />
<br />
Final Rank Value (752.5) = Starting Rank Value (756.6) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.6
- 400 + ( ( 0.179 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 756.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       67 | 2024-06-09 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -4.53 | Airax, Jelo, ottoNd, puuha, uli  |
|           32 |      168 | 2024-06-07 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -6.30 | Airax, Jelo, ottoNd, puuha, uli  |
|           31 |      257 | 2024-06-06 | Sampi             | L   | 1.000      | -            | -                | -                | -         |    -8.42 | Airax, Jelo, ottoNd, puuha, uli  |
|           30 |      377 | 2024-06-03 | RUBY              | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.555 (0.241)    | 0 (0.000) |    23.66 | Airax, Jelo, ottoNd, puuha, uli  |
|           29 |      388 | 2024-06-02 | UHKA              | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.039 (0.006)    | 0 (0.000) |     4.22 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |      403 | 2024-06-02 | Heimo             | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.074 (0.011)    | 0 (0.000) |    13.83 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |     1179 | 2024-05-05 | RUBY              | L   | 0.959      | -            | -                | -                | -         |    -8.68 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |     1192 | 2024-05-04 | RUSH B            | L   | 0.953      | -            | -                | -                | -         |    -9.97 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |     1233 | 2024-05-02 | Gaimin Gladiators | L   | 0.939      | -            | -                | -                | -         |    -2.30 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |     1242 | 2024-05-02 | Zero Tenacity     | L   | 0.938      | -            | -                | -                | -         |    -4.52 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |     1282 | 2024-04-30 | EYEBALLERS        | W   | 0.925      | 0.384        | 0.006 (0.002)    | 0.722 (0.257)    | 0 (0.000) |    21.41 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |     1301 | 2024-04-29 | Insilio           | W   | 0.919      | 0.435        | 0.009 (0.004)    | 0.625 (0.250)    | 0 (0.000) |    23.58 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |     1394 | 2024-04-25 | EYEBALLERS        | L   | 0.893      | -            | -                | -                | -         |    -7.17 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |     1406 | 2024-04-25 | ECF               | L   | 0.891      | -            | -                | -                | -         |   -10.79 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |     1434 | 2024-04-23 | 1WIN              | L   | 0.879      | -            | -                | -                | -         |    -4.83 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     1454 | 2024-04-22 | SINNERS           | L   | 0.872      | -            | -                | -                | -         |    -3.02 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     1550 | 2024-04-19 | B8                | L   | 0.852      | -            | -                | -                | -         |    -4.16 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     1602 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.845      | 0.384        | 0.046 (0.015)    | 0.583 (0.189)    | 0 (0.000) |    20.77 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     1627 | 2024-04-17 | PARIVISION        | L   | 0.840      | -            | -                | -                | -         |    -5.47 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     1688 | 2024-04-15 | Alliance          | L   | 0.826      | -            | -                | -                | -         |    -7.31 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     1865 | 2024-04-09 | BLEED             | L   | 0.785      | -            | -                | -                | -         |    -0.77 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     1891 | 2024-04-08 | Permitta          | L   | 0.779      | -            | -                | -                | -         |    -5.51 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     1993 | 2024-04-04 | Passion UA        | L   | 0.752      | -            | -                | -                | -         |    -5.61 | Airax, Jelo, ottoNd, puuha, uli  |
|           10 |     2722 | 2024-03-02 | Sangal            | L   | 0.531      | -            | -                | -                | -         |    -1.92 | Airax, Banjo, ottoNd, puuha, uli |
|            9 |     2746 | 2024-02-29 | KOI               | L   | 0.519      | -            | -                | -                | -         |    -2.59 | Airax, Banjo, ottoNd, puuha, uli |
|            8 |     2750 | 2024-02-29 | Aurora            | L   | 0.518      | -            | -                | -                | -         |    -0.20 | Airax, Banjo, ottoNd, puuha, uli |
|            7 |     2757 | 2024-02-28 | Spirit Academy    | L   | 0.513      | -            | -                | -                | -         |    -9.16 | Airax, Banjo, ottoNd, puuha, uli |
|            6 |     2837 | 2024-02-24 | ENCE Academy      | L   | 0.488      | -            | -                | -                | -         |    -6.71 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     2850 | 2024-02-24 | Rounds            | W   | 0.487      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.487) |     1.76 | Airax, Banjo, ottoNd, puuha, uli |
|            4 |     3975 | 2024-01-11 | HEROIC            | L   | 0.192      | -            | -                | -                | -         |    -0.02 | Airax, Banjo, ottoNd, sLowi, uli |
|            3 |     3982 | 2024-01-10 | TSM               | W   | 0.188      | 0.143        | 0.007 (0.000)    | 0.154 (0.004)    | 0 (0.000) |     2.73 | Airax, Banjo, ottoNd, sLowi, uli |
|            2 |     4036 | 2024-01-09 | fnatic            | L   | 0.180      | -            | -                | -                | -         |    -0.19 | Airax, Banjo, ottoNd, sLowi, uli |
|            1 |     4049 | 2024-01-09 | Sampi             | W   | 0.179      | 0.143        | 0.036 (0.001)    | 0.883 (0.023)    | 0 (0.000) |     4.13 | Airax, Banjo, ottoNd, sLowi, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($783.86)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
