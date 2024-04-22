### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  734.1<br />
<br />
Final Rank Value (734.1) = Starting Rank Value (817.8) + Head To Head Adjustments (-83.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.137[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.8
- 400 + ( ( 0.216 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 817.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |        7 | 2024-04-22 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -5.36 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |      103 | 2024-04-19 | B8              | L   | 1.000      | -            | -                | -                | -         |   -12.08 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |      155 | 2024-04-18 | ALTERNATE aTTaX | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.639 (0.246)    | 0 (0.000) |    19.13 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |      180 | 2024-04-17 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |   -15.49 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |      241 | 2024-04-15 | Alliance        | L   | 1.000      | -            | -                | -                | -         |   -13.04 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |      418 | 2024-04-09 | BLEED           | L   | 1.000      | -            | -                | -                | -         |    -4.95 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |      444 | 2024-04-08 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -10.86 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |      546 | 2024-04-04 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -14.32 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     1275 | 2024-03-02 | Sangal          | L   | 0.858      | -            | -                | -                | -         |   -16.40 | Airax, Banjo, ottoNd, puuha, uli |
|           17 |     1299 | 2024-02-29 | KOI             | L   | 0.846      | -            | -                | -                | -         |    -5.00 | Airax, Banjo, ottoNd, puuha, uli |
|           16 |     1303 | 2024-02-29 | Aurora          | L   | 0.844      | -            | -                | -                | -         |    -1.89 | Airax, Banjo, ottoNd, puuha, uli |
|           15 |     1310 | 2024-02-28 | Spirit Academy  | L   | 0.839      | -            | -                | -                | -         |   -15.13 | Airax, Banjo, ottoNd, puuha, uli |
|           14 |     1390 | 2024-02-24 | ENCE Academy    | L   | 0.815      | -            | -                | -                | -         |   -12.10 | Airax, Banjo, ottoNd, puuha, uli |
|           13 |     1403 | 2024-02-24 | Rounds          | W   | 0.813      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.813) |     2.00 | Airax, Banjo, ottoNd, puuha, uli |
|           12 |     2528 | 2024-01-11 | HEROIC          | L   | 0.519      | -            | -                | -                | -         |    -0.24 | Airax, Banjo, ottoNd, sLowi, uli |
|           11 |     2535 | 2024-01-10 | TSM             | W   | 0.514      | 0.143        | 0.016 (0.001)    | 0.299 (0.022)    | 0 (0.000) |     6.86 | Airax, Banjo, ottoNd, sLowi, uli |
|           10 |     2589 | 2024-01-09 | fnatic          | L   | 0.506      | -            | -                | -                | -         |    -3.40 | Airax, Banjo, ottoNd, sLowi, uli |
|            9 |     2602 | 2024-01-09 | Sampi           | W   | 0.506      | 0.143        | 0.084 (0.006)    | 0.698 (0.050)    | 0 (0.000) |    11.26 | Airax, Banjo, ottoNd, sLowi, uli |
|            8 |     2971 | 2023-12-02 | FURIA           | L   | 0.253      | -            | -                | -                | -         |    -0.24 | Airax, Banjo, ottoNd, sLowi, uli |
|            7 |     3020 | 2023-11-29 | GamerLegion     | W   | 0.233      | 0.589        | 0.185 (0.025)    | 0.368 (0.050)    | 1 (0.233) |     7.00 | Airax, Banjo, ottoNd, sLowi, uli |
|            6 |     3026 | 2023-11-29 | ENCE            | W   | 0.231      | 0.589        | 0.048 (0.007)    | 0.022 (0.003)    | 1 (0.231) |     3.38 | Airax, Banjo, ottoNd, sLowi, uli |
|            5 |     3587 | 2023-11-02 | 00NATION        | L   | 0.051      | -            | -                | -                | -         |    -1.14 | Airax, Banjo, ottoNd, sLowi, uli |
|            4 |     3617 | 2023-11-01 | ALTERNATE aTTaX | L   | 0.045      | -            | -                | -                | -         |    -0.66 | Airax, Banjo, ottoNd, sLowi, uli |
|            3 |     3642 | 2023-10-31 | GODSENT         | L   | 0.039      | -            | -                | -                | -         |    -0.66 | Airax, Banjo, ottoNd, sLowi, uli |
|            2 |     3648 | 2023-10-31 | brazylijski luz | L   | 0.038      | -            | -                | -                | -         |    -0.64 | Airax, Banjo, ottoNd, sLowi, uli |
|            1 |     3767 | 2023-10-28 | Nexus           | W   | 0.017      | 0.371        | 0.023 (0.000)    | 0.544 (0.003)    | 0 (0.000) |     0.29 | Airax, Banjo, ottoNd, sLowi, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,206.83)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-24 |      0.815 | $1,606.00      | $1,308.34       |
| 2023-12-03 |      0.260 | $15,000.00     | $3,898.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
