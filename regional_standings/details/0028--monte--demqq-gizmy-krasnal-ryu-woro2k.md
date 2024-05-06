### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, kRaSnaL, ryu, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1288.1<br />
<br />
Final Rank Value (1288.1) = Starting Rank Value (1374.4) + Head To Head Adjustments (-86.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.580[<sup>1</sup>](#table2)
- Bounty Collected: 0.553[<sup>2</sup>](#table1)
- Opponent Network: 0.341[<sup>2</sup>](#table1)
- LAN Wins: 0.573[<sup>2</sup>](#table1)

The average of these factors is 0.512<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1374.4
- 400 + ( ( 0.512 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1374.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       21 | 2024-05-05 | FURIA             | W   | 1.000      | 0.889        | 0.371 (0.330)    | 0.484 (0.430)    | 1 (1.000) |    20.29 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           42 |       42 | 2024-05-04 | FORZE             | W   | 1.000      | 0.889        | 0.205 (0.182)    | 0.682 (0.606)    | 1 (1.000) |    10.90 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           41 |       75 | 2024-05-02 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -11.03 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           40 |       96 | 2024-05-01 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -10.13 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           39 |      122 | 2024-04-30 | FORZE             | W   | 1.000      | 0.889        | 0.205 (0.182)    | 0.682 (0.606)    | 1 (1.000) |    10.21 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           38 |      375 | 2024-04-19 | OG                | L   | 1.000      | -            | -                | -                | -         |   -11.98 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           37 |      443 | 2024-04-18 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -4.42 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           36 |      562 | 2024-04-13 | Rebels            | W   | 1.000      | 0.500        | 0.111 (0.056)    | 0.375 (0.187)    | -         |     7.48 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           35 |      577 | 2024-04-12 | Sangal            | W   | 1.000      | 0.500        | -                | 0.797 (0.399)    | -         |     2.26 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           34 |      866 | 2024-04-03 | Metizport         | L   | 0.980      | -            | -                | -                | -         |   -23.62 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           33 |      882 | 2024-04-03 | Apeks             | W   | 0.979      | 0.143        | 0.237 (0.033)    | -                | -         |    13.47 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           32 |      907 | 2024-04-02 | GamerLegion       | W   | 0.974      | -            | -                | -                | -         |    20.19 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           31 |      917 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.972      | -            | -                | -                | -         |   -22.18 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           30 |      942 | 2024-03-31 | RUSH B            | L   | 0.959      | -            | -                | -                | -         |   -28.63 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           29 |      973 | 2024-03-28 | Betera            | L   | 0.940      | -            | -                | -                | -         |   -28.48 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           28 |     1041 | 2024-03-26 | System5           | W   | 0.927      | -            | -                | -                | -         |     0.35 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           27 |     1269 | 2024-03-13 | PERA              | W   | 0.841      | 0.500        | 0.062 (0.026)    | 0.365 (0.153)    | -         |     2.20 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           26 |     1373 | 2024-03-09 | Metizport         | L   | 0.813      | -            | -                | -                | -         |   -21.57 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           25 |     1412 | 2024-03-07 | Imperial          | W   | 0.801      | 0.535        | 0.656 (0.281)    | 0.965 (0.413)    | -         |    20.62 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           24 |     1483 | 2024-03-05 | SAW               | L   | 0.787      | -            | -                | -                | -         |   -10.49 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           23 |     1549 | 2024-03-03 | Gaimin Gladiators | L   | 0.771      | -            | -                | -                | -         |   -14.14 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           22 |     1554 | 2024-03-02 | 3DMAX             | L   | 0.767      | -            | -                | -                | -         |   -18.67 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           21 |     1597 | 2024-02-29 | PARIVISION        | W   | 0.752      | 0.500        | -                | 0.544 (0.205)    | -         |     1.43 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           20 |     1765 | 2024-02-21 | Astralis          | L   | 0.698      | -            | -                | -                | -         |    -6.39 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           19 |     1795 | 2024-02-20 | Apeks             | L   | 0.691      | -            | -                | -                | -         |   -11.86 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           18 |     1811 | 2024-02-19 | Nexus             | W   | 0.686      | -            | -                | -                | 1 (0.686) |     1.26 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|           17 |     1820 | 2024-02-19 | Gaimin Gladiators | L   | 0.685      | -            | -                | -                | -         |   -14.08 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|           16 |     1829 | 2024-02-18 | Aurora            | W   | 0.681      | 0.143        | 0.973 (0.095)    | 0.967 (0.094)    | -         |    14.12 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           15 |     1832 | 2024-02-18 | SINNERS           | W   | 0.680      | -            | -                | -                | -         |     2.35 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           14 |     1860 | 2024-02-17 | Aurora            | W   | 0.672      | 0.143        | 0.973 (0.093)    | -                | -         |    14.74 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           13 |     1865 | 2024-02-17 | The Chosen Few    | W   | 0.672      | -            | -                | -                | -         |     0.54 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           12 |     2064 | 2024-02-06 | G2                | L   | 0.599      | -            | -                | -                | -         |    -1.38 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           11 |     2074 | 2024-02-05 | Cloud9            | W   | 0.592      | 1.000        | 0.472 (0.279)    | 0.525 (0.311)    | 1 (0.592) |    14.81 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           10 |     2097 | 2024-02-04 | GamerLegion       | L   | 0.585      | -            | -                | -                | -         |    -6.20 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            9 |     2972 | 2023-12-17 | Apeks             | L   | 0.260      | -            | -                | -                | -         |    -4.47 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            8 |     3004 | 2023-12-16 | BESTIA            | W   | 0.254      | -            | -                | -                | 1 (0.254) |     0.17 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            7 |     3030 | 2023-12-15 | Virtus.pro        | L   | 0.247      | -            | -                | -                | -         |    -0.97 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            6 |     3041 | 2023-12-15 | BESTIA            | W   | 0.246      | -            | -                | -                | 1 (0.246) |     0.16 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            5 |     3343 | 2023-11-26 | Eternal Fire      | W   | 0.120      | -            | -                | -                | 1 (0.120) |     3.23 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            4 |     3354 | 2023-11-26 | Virtus.pro        | W   | 0.118      | -            | -                | -                | 1 (0.118) |     3.25 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            3 |     3391 | 2023-11-24 | Nouns             | W   | 0.106      | -            | -                | -                | 1 (0.106) |     0.08 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            2 |     3398 | 2023-11-24 | TYLOO             | W   | 0.104      | -            | -                | -                | -         |     0.31 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            1 |     3753 | 2023-11-08 | SINNERS           | L   | 0.000      | -            | -                | -                | -         |    -0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,534.35)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-10 |      0.821 | $7,500.00      | $6,154.40       |
| 2024-02-11 |      0.633 | $16,000.00     | $10,130.24      |
| 2023-12-17 |      0.261 | $10,000.00     | $2,610.03       |
| 2023-12-10 |      0.213 | $3,000.00      | $640.41         |
| 2023-11-26 |      0.120 | $50,000.00     | $5,999.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
