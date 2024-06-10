### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, hAdji, kRaSnaL, STYKO, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1173.9<br />
<br />
Final Rank Value (1173.9) = Starting Rank Value (1302.5) + Head To Head Adjustments (-128.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.572[<sup>1</sup>](#table2)
- Bounty Collected: 0.502[<sup>2</sup>](#table1)
- Opponent Network: 0.344[<sup>2</sup>](#table1)
- LAN Wins: 0.393[<sup>2</sup>](#table1)

The average of these factors is 0.453<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1302.5
- 400 + ( ( 0.453 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1302.5


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
|           60 |       12 | 2024-06-10 | SINNERS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.66 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           59 |       17 | 2024-06-10 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -11.16 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           58 |       23 | 2024-06-10 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -24.80 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           57 |       37 | 2024-06-09 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -10.86 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           56 |       49 | 2024-06-09 | Aurora            | W   | 1.000      | 0.143        | 0.513 (0.073)    | -                | 0 (0.000) |    19.95 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           55 |       58 | 2024-06-09 | 3DMAX             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.49 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           54 |       64 | 2024-06-09 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -12.29 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           53 |       72 | 2024-06-09 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -22.14 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           52 |       79 | 2024-06-09 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -18.21 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           51 |      118 | 2024-06-08 | 1WIN              | W   | 1.000      | -            | -                | -                | -         |     8.74 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           50 |      130 | 2024-06-08 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -12.65 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           49 |      136 | 2024-06-08 | Quixal            | W   | 1.000      | -            | -                | -                | -         |     0.29 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           48 |      337 | 2024-06-04 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -24.13 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           47 |      543 | 2024-05-27 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -7.98 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           46 |      554 | 2024-05-27 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.69 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           45 |      711 | 2024-05-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -22.19 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           44 |      750 | 2024-05-20 | Sashi             | W   | 1.000      | 0.500        | 0.174 (0.087)    | 1.000 (0.500)    | -         |    15.19 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           43 |      803 | 2024-05-18 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -15.74 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           42 |      832 | 2024-05-17 | BLEED             | W   | 1.000      | 0.500        | 0.349 (0.174)    | 1.000 (0.500)    | -         |    14.99 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           41 |      871 | 2024-05-16 | ECF               | W   | 1.000      | 0.384        | -                | 0.378 (0.145)    | -         |     3.43 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           40 |      917 | 2024-05-15 | DMS               | W   | 1.000      | 0.500        | -                | 0.524 (0.262)    | -         |     3.80 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           39 |     1132 | 2024-05-07 | FaZe              | L   | 0.974      | -            | -                | -                | -         |    -0.57 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           38 |     1172 | 2024-05-05 | FURIA             | W   | 0.960      | 0.889        | 0.249 (0.213)    | 0.590 (0.504)    | 1 (0.960) |    24.43 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           37 |     1193 | 2024-05-04 | FORZE             | W   | 0.952      | 0.889        | 0.100 (0.085)    | 0.415 (0.351)    | 1 (0.952) |     8.99 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           36 |     1226 | 2024-05-02 | ENCE              | L   | 0.940      | -            | -                | -                | -         |    -9.69 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           35 |     1247 | 2024-05-01 | Liquid            | L   | 0.934      | -            | -                | -                | -         |    -2.78 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           34 |     1273 | 2024-04-30 | FORZE             | W   | 0.927      | 0.889        | 0.100 (0.083)    | 0.415 (0.342)    | 1 (0.927) |     8.29 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           33 |     1526 | 2024-04-19 | OG                | L   | 0.854      | -            | -                | -                | -         |   -12.28 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           32 |     1594 | 2024-04-18 | paiN              | L   | 0.846      | -            | -                | -                | -         |    -4.20 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           31 |     1713 | 2024-04-13 | Rebels            | W   | 0.813      | 0.500        | -                | 0.472 (0.192)    | -         |     7.58 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           30 |     1728 | 2024-04-12 | Sangal            | W   | 0.806      | 0.500        | 0.214 (0.086)    | 0.998 (0.402)    | -         |     7.02 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           29 |     2017 | 2024-04-03 | Metizport         | L   | 0.747      | -            | -                | -                | -         |   -17.77 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           28 |     2033 | 2024-04-03 | Apeks             | W   | 0.745      | -            | -                | -                | -         |     7.46 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           27 |     2058 | 2024-04-02 | GamerLegion       | W   | 0.740      | -            | -                | -                | -         |    12.07 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           26 |     2068 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.739      | -            | -                | -                | -         |    -2.27 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           25 |     2093 | 2024-03-31 | RUSH B            | L   | 0.726      | -            | -                | -                | -         |   -20.70 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           24 |     2124 | 2024-03-28 | Betera            | L   | 0.707      | -            | -                | -                | -         |   -21.27 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           23 |     2192 | 2024-03-26 | System5           | W   | 0.694      | -            | -                | -                | -         |     0.33 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           22 |     2420 | 2024-03-13 | PERA              | W   | 0.607      | -            | -                | -                | -         |     2.10 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           21 |     2524 | 2024-03-09 | Metizport         | L   | 0.580      | -            | -                | -                | -         |   -14.93 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           20 |     2563 | 2024-03-07 | Imperial          | W   | 0.568      | 0.535        | 0.415 (0.126)    | 0.799 (0.243)    | -         |    13.87 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           19 |     2634 | 2024-03-05 | SAW               | L   | 0.554      | -            | -                | -                | -         |    -7.54 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           18 |     2700 | 2024-03-03 | Gaimin Gladiators | L   | 0.538      | -            | -                | -                | -         |   -10.23 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           17 |     2705 | 2024-03-02 | 3DMAX             | L   | 0.534      | -            | -                | -                | -         |   -11.13 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           16 |     2748 | 2024-02-29 | PARIVISION        | W   | 0.519      | -            | -                | -                | -         |     2.21 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           15 |     2916 | 2024-02-21 | Astralis          | L   | 0.465      | -            | -                | -                | -         |    -0.57 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           14 |     2946 | 2024-02-20 | Apeks             | L   | 0.458      | -            | -                | -                | -         |   -10.31 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           13 |     2962 | 2024-02-19 | Nexus             | W   | 0.453      | -            | -                | -                | 1 (0.453) |     1.08 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|           12 |     2971 | 2024-02-19 | Gaimin Gladiators | L   | 0.452      | -            | -                | -                | -         |    -9.25 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|           11 |     2980 | 2024-02-18 | Aurora            | W   | 0.447      | 0.143        | 0.513 (0.033)    | -                | -         |    11.12 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           10 |     2983 | 2024-02-18 | SINNERS           | W   | 0.447      | -            | -                | -                | -         |     3.15 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            9 |     3011 | 2024-02-17 | Aurora            | W   | 0.439      | -            | -                | -                | -         |    11.21 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            8 |     3016 | 2024-02-17 | The Chosen Few    | W   | 0.438      | -            | -                | -                | -         |     0.47 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            7 |     3215 | 2024-02-06 | G2                | L   | 0.365      | -            | -                | -                | -         |    -0.38 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            6 |     3225 | 2024-02-05 | Cloud9            | W   | 0.359      | 1.000        | 0.159 (0.057)    | -                | 1 (0.359) |     7.00 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            5 |     3248 | 2024-02-04 | GamerLegion       | L   | 0.352      | -            | -                | -                | -         |    -8.16 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            4 |     4123 | 2023-12-17 | Apeks             | L   | 0.027      | -            | -                | -                | -         |    -0.62 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            3 |     4155 | 2023-12-16 | BESTIA            | W   | 0.021      | -            | -                | -                | 1 (0.021) |     0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            2 |     4181 | 2023-12-15 | Virtus.pro        | L   | 0.014      | -            | -                | -                | -         |    -0.04 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            1 |     4192 | 2023-12-15 | BESTIA            | W   | 0.012      | -            | -                | -                | 1 (0.012) |     0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,385.94)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-04-20 |      0.861 | $5,000.00      | $4,305.65       |
| 2024-03-10 |      0.587 | $7,500.00      | $4,404.91       |
| 2024-02-11 |      0.400 | $16,000.00     | $6,398.00       |
| 2023-12-17 |      0.028 | $10,000.00     | $277.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
