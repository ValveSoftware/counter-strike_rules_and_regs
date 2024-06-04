### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, hAdji, kRaSnaL, STYKO, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1214.7<br />
<br />
Final Rank Value (1214.7) = Starting Rank Value (1303.4) + Head To Head Adjustments (-88.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.574[<sup>1</sup>](#table2)
- Bounty Collected: 0.486[<sup>2</sup>](#table1)
- Opponent Network: 0.350[<sup>2</sup>](#table1)
- LAN Wins: 0.452[<sup>2</sup>](#table1)

The average of these factors is 0.465<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1303.4
- 400 + ( ( 0.465 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1303.4


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
|           47 |       43 | 2024-05-27 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -6.89 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           46 |       54 | 2024-05-27 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.89 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           45 |      211 | 2024-05-21 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -23.59 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           44 |      250 | 2024-05-20 | Sashi             | W   | 1.000      | 0.500        | 0.157 (0.079)    | 1.000 (0.500)    | 0 (0.000) |    14.50 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           43 |      303 | 2024-05-18 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -16.52 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           42 |      332 | 2024-05-17 | BLEED             | W   | 1.000      | 0.500        | 0.246 (0.123)    | 0.982 (0.491)    | 0 (0.000) |    12.08 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           41 |      371 | 2024-05-16 | ECF               | W   | 1.000      | 0.384        | -                | 0.436 (0.168)    | 0 (0.000) |     3.73 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           40 |      417 | 2024-05-15 | DMS               | W   | 1.000      | 0.500        | -                | 0.397 (0.198)    | -         |     1.88 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           39 |      632 | 2024-05-07 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.53 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           38 |      672 | 2024-05-05 | FURIA             | W   | 1.000      | 0.889        | 0.138 (0.123)    | 0.402 (0.358)    | 1 (1.000) |    19.29 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           37 |      693 | 2024-05-04 | FORZE             | W   | 1.000      | 0.889        | 0.108 (0.096)    | 0.499 (0.443)    | 1 (1.000) |     9.77 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           36 |      726 | 2024-05-02 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -11.55 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           35 |      747 | 2024-05-01 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -3.00 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           34 |      773 | 2024-04-30 | FORZE             | W   | 1.000      | 0.889        | 0.108 (0.096)    | 0.499 (0.443)    | 1 (1.000) |     9.39 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           33 |     1026 | 2024-04-19 | OG                | L   | 0.933      | -            | -                | -                | -         |   -12.92 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           32 |     1094 | 2024-04-18 | paiN              | L   | 0.925      | -            | -                | -                | -         |    -4.31 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           31 |     1213 | 2024-04-13 | Rebels            | W   | 0.892      | 0.500        | -                | 0.413 (0.184)    | -         |     8.04 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           30 |     1228 | 2024-04-12 | Sangal            | W   | 0.885      | 0.500        | 0.166 (0.074)    | 0.911 (0.403)    | -         |     6.32 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           29 |     1517 | 2024-04-03 | Metizport         | L   | 0.826      | -            | -                | -                | -         |   -19.33 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           28 |     1533 | 2024-04-03 | Apeks             | W   | 0.825      | -            | -                | -                | -         |     9.83 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           27 |     1558 | 2024-04-02 | GamerLegion       | W   | 0.820      | -            | -                | -                | -         |    12.80 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           26 |     1568 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.818      | -            | -                | -                | -         |   -17.84 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           25 |     1593 | 2024-03-31 | RUSH B            | L   | 0.805      | -            | -                | -                | -         |   -23.94 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           24 |     1624 | 2024-03-28 | Betera            | L   | 0.786      | -            | -                | -                | -         |   -23.62 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           23 |     1692 | 2024-03-26 | System5           | W   | 0.773      | -            | -                | -                | -         |     0.40 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           22 |     1920 | 2024-03-13 | PERA              | W   | 0.686      | -            | -                | -                | -         |     2.11 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           21 |     2024 | 2024-03-09 | Metizport         | L   | 0.659      | -            | -                | -                | -         |   -17.09 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           20 |     2063 | 2024-03-07 | Imperial          | W   | 0.647      | 0.535        | 0.373 (0.129)    | 0.889 (0.308)    | -         |    15.91 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           19 |     2134 | 2024-03-05 | SAW               | L   | 0.633      | -            | -                | -                | -         |    -8.17 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           18 |     2200 | 2024-03-03 | Gaimin Gladiators | L   | 0.617      | -            | -                | -                | -         |   -11.91 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           17 |     2205 | 2024-03-02 | 3DMAX             | L   | 0.613      | -            | -                | -                | -         |   -13.89 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           16 |     2248 | 2024-02-29 | PARIVISION        | W   | 0.598      | -            | -                | -                | -         |     1.90 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           15 |     2416 | 2024-02-21 | Astralis          | L   | 0.544      | -            | -                | -                | -         |    -1.56 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           14 |     2446 | 2024-02-20 | Apeks             | L   | 0.537      | -            | -                | -                | -         |   -11.08 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           13 |     2462 | 2024-02-19 | Nexus             | W   | 0.532      | -            | -                | -                | 1 (0.532) |     1.30 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|           12 |     2471 | 2024-02-19 | Gaimin Gladiators | L   | 0.531      | -            | -                | -                | -         |   -11.13 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|           11 |     2480 | 2024-02-18 | Aurora            | W   | 0.527      | 0.143        | 0.493 (0.037)    | -                | -         |    11.07 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           10 |     2483 | 2024-02-18 | SINNERS           | W   | 0.526      | -            | -                | -                | -         |     2.05 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            9 |     2511 | 2024-02-17 | Aurora            | W   | 0.518      | 0.143        | 0.493 (0.037)    | -                | -         |    11.34 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            8 |     2516 | 2024-02-17 | The Chosen Few    | W   | 0.518      | -            | -                | -                | -         |     0.54 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            7 |     2715 | 2024-02-06 | G2                | L   | 0.445      | -            | -                | -                | -         |    -0.88 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            6 |     2725 | 2024-02-05 | Cloud9            | W   | 0.438      | 1.000        | 0.188 (0.082)    | -                | 1 (0.438) |     9.27 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            5 |     2748 | 2024-02-04 | GamerLegion       | L   | 0.431      | -            | -                | -                | -         |    -9.16 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            4 |     3623 | 2023-12-17 | Apeks             | L   | 0.106      | -            | -                | -                | -         |    -2.26 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            3 |     3655 | 2023-12-16 | BESTIA            | W   | 0.100      | -            | -                | -                | 1 (0.100) |     0.08 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            2 |     3681 | 2023-12-15 | Virtus.pro        | L   | 0.093      | -            | -                | -                | -         |    -0.30 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            1 |     3692 | 2023-12-15 | BESTIA            | W   | 0.092      | -            | -                | -                | 1 (0.092) |     0.07 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,434.07)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-22 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-04-20 |      0.940 | $5,000.00      | $4,701.51       |
| 2024-03-10 |      0.666 | $7,500.00      | $4,998.70       |
| 2024-02-11 |      0.479 | $16,000.00     | $7,664.76       |
| 2023-12-17 |      0.107 | $10,000.00     | $1,069.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
