### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, kRaSnaL, ryu, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1111.4<br />
<br />
Final Rank Value (1111.4) = Starting Rank Value (1196.5) + Head To Head Adjustments (-85.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.615[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.319[<sup>2</sup>](#table1)

The average of these factors is 0.412<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1196.5
- 400 + ( ( 0.412 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1196.5


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
|           53 |       79 | 2024-04-19 | OG                | L   | 1.000      | -            | -                | -                | -         |    -8.44 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           52 |      147 | 2024-04-18 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -2.70 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           51 |      266 | 2024-04-13 | Rebels            | W   | 1.000      | 0.500        | 0.050 (0.025)    | 0.360 (0.180)    | 0 (0.000) |     7.55 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           50 |      281 | 2024-04-12 | Sangal            | W   | 1.000      | 0.500        | -                | 0.685 (0.343)    | 0 (0.000) |     3.59 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           49 |      570 | 2024-04-03 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -20.07 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           48 |      586 | 2024-04-03 | Apeks             | W   | 1.000      | 0.143        | 0.193 (0.028)    | 0.687 (0.098)    | -         |    16.78 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           47 |      611 | 2024-04-02 | GamerLegion       | W   | 1.000      | -            | -                | -                | -         |     1.36 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           46 |      621 | 2024-04-02 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -23.03 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           45 |      646 | 2024-03-31 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -27.90 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           44 |      677 | 2024-03-28 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -28.77 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           43 |      745 | 2024-03-26 | System5           | W   | 1.000      | -            | -                | -                | -         |     0.84 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           42 |      973 | 2024-03-13 | PERA              | W   | 0.934      | 0.500        | -                | 0.424 (0.198)    | -         |     3.52 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           41 |     1077 | 2024-03-09 | Metizport         | L   | 0.906      | -            | -                | -                | -         |   -20.81 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           40 |     1116 | 2024-03-07 | Imperial          | W   | 0.894      | 0.535        | 0.569 (0.272)    | 1.000 (0.478)    | -         |    25.64 | DemQQ, kRaSnaL, leen, sdy, Woro2k   |
|           39 |     1187 | 2024-03-05 | SAW               | L   | 0.880      | -            | -                | -                | -         |   -11.91 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k  |
|           38 |     1253 | 2024-03-03 | Gaimin Gladiators | L   | 0.864      | -            | -                | -                | -         |   -11.49 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           37 |     1258 | 2024-03-02 | 3DMAX             | L   | 0.860      | -            | -                | -                | -         |   -20.39 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           36 |     1301 | 2024-02-29 | PARIVISION        | W   | 0.845      | 0.500        | -                | 0.358 (0.151)    | -         |     1.18 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k |
|           35 |     1469 | 2024-02-21 | Astralis          | L   | 0.792      | -            | -                | -                | -         |    -7.25 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           34 |     1499 | 2024-02-20 | Apeks             | L   | 0.784      | -            | -                | -                | -         |   -11.03 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           33 |     1515 | 2024-02-19 | Nexus             | W   | 0.780      | -            | -                | -                | 1 (0.780) |     2.40 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|           32 |     1524 | 2024-02-19 | Gaimin Gladiators | L   | 0.778      | -            | -                | -                | -         |   -11.81 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k  |
|           31 |     1533 | 2024-02-18 | Aurora            | W   | 0.774      | 0.143        | 0.763 (0.084)    | 1.000 (0.111)    | -         |    14.11 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           30 |     1536 | 2024-02-18 | SINNERS           | W   | 0.773      | 0.143        | -                | 0.779 (0.086)    | -         |     5.42 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           29 |     1564 | 2024-02-17 | Aurora            | W   | 0.766      | 0.143        | 0.763 (0.083)    | 1.000 (0.109)    | -         |    15.02 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           28 |     1569 | 2024-02-17 | The Chosen Few    | W   | 0.765      | -            | -                | -                | -         |     1.46 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           27 |     1768 | 2024-02-06 | G2                | L   | 0.692      | -            | -                | -                | -         |    -0.62 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           26 |     1778 | 2024-02-05 | Cloud9            | W   | 0.685      | 1.000        | 0.475 (0.326)    | 0.623 (0.427)    | 1 (0.685) |    19.83 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           25 |     1801 | 2024-02-04 | GamerLegion       | L   | 0.678      | -            | -                | -                | -         |    -6.32 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           24 |     2676 | 2023-12-17 | Apeks             | L   | 0.353      | -            | -                | -                | -         |    -4.83 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           23 |     2708 | 2023-12-16 | BESTIA            | W   | 0.347      | -            | -                | -                | 1 (0.347) |     0.61 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           22 |     2734 | 2023-12-15 | Virtus.pro        | L   | 0.341      | -            | -                | -                | -         |    -0.89 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           21 |     2745 | 2023-12-15 | BESTIA            | W   | 0.339      | -            | -                | -                | 1 (0.339) |     0.57 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           20 |     3047 | 2023-11-26 | Eternal Fire      | W   | 0.213      | 0.500        | 0.338 (0.036)    | -                | 1 (0.213) |     6.10 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           19 |     3058 | 2023-11-26 | Virtus.pro        | W   | 0.211      | 0.500        | 0.530 (0.056)    | -                | 1 (0.211) |     6.12 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           18 |     3095 | 2023-11-24 | Nouns             | W   | 0.199      | -            | -                | -                | 1 (0.199) |     0.45 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           17 |     3102 | 2023-11-24 | TYLOO             | W   | 0.197      | -            | -                | -                | 1 (0.197) |     0.96 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           16 |     3457 | 2023-11-08 | SINNERS           | L   | 0.094      | -            | -                | -                | -         |    -1.97 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           15 |     3481 | 2023-11-07 | 3DMAX             | L   | 0.087      | -            | -                | -                | -         |    -2.00 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           14 |     3534 | 2023-11-04 | Virtus.pro        | L   | 0.067      | -            | -                | -                | -         |    -0.17 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           13 |     3567 | 2023-11-03 | Spirit            | W   | 0.058      | 0.769        | 1.000 (0.044)    | -                | -         |     1.78 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           12 |     3578 | 2023-11-02 | Virtus.pro        | L   | 0.053      | -            | -                | -                | -         |    -0.13 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           11 |     3611 | 2023-11-01 | Aurora            | W   | 0.046      | 0.624        | 0.763 (0.022)    | -                | -         |     1.09 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|           10 |     3627 | 2023-10-31 | FORZE             | W   | 0.040      | -            | -                | -                | -         |     0.10 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            9 |     3661 | 2023-10-30 | Space             | W   | 0.034      | -            | -                | -                | -         |     0.07 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            8 |     3675 | 2023-10-30 | KOI               | W   | 0.032      | -            | -                | -                | -         |     0.30 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            7 |     3700 | 2023-10-29 | SAW               | W   | 0.027      | -            | -                | -                | -         |     0.49 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            6 |     3750 | 2023-10-28 | FaZe              | L   | 0.020      | -            | -                | -                | -         |    -0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            5 |     3757 | 2023-10-28 | Ninjas in Pyjamas | W   | 0.019      | -            | -                | -                | -         |     0.08 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            4 |     3784 | 2023-10-27 | Falcons           | W   | 0.013      | -            | -                | -                | -         |     0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            3 |     3797 | 2023-10-27 | BOSS              | W   | 0.011      | -            | -                | -                | -         |     0.05 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            2 |     3822 | 2023-10-26 | OG                | W   | 0.005      | -            | -                | -                | -         |     0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |
|            1 |     3829 | 2023-10-26 | B8                | W   | 0.004      | -            | -                | -                | -         |     0.01 | br0, DemQQ, kRaSnaL, sdy, Woro2k    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,964.76)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-10 |      0.914 | $7,500.00      | $6,854.20       |
| 2024-02-11 |      0.726 | $16,000.00     | $11,623.14      |
| 2023-12-17 |      0.354 | $10,000.00     | $3,543.09       |
| 2023-12-10 |      0.307 | $3,000.00      | $920.33         |
| 2023-11-26 |      0.213 | $50,000.00     | $10,664.59      |
| 2023-11-05 |      0.074 | $50,000.00     | $3,685.40       |
| 2023-11-02 |      0.053 | $50,000.00     | $2,674.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
