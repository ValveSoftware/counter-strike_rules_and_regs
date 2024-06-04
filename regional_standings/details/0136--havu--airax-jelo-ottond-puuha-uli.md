### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  699.2<br />
<br />
Final Rank Value (699.2) = Starting Rank Value (742.4) + Head To Head Adjustments (-43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.4
- 400 + ( ( 0.176 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 742.4


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
|           28 |      679 | 2024-05-05 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -9.41 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |      692 | 2024-05-04 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -13.40 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |      733 | 2024-05-02 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -2.70 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |      742 | 2024-05-02 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -5.54 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |      782 | 2024-04-30 | EYEBALLERS        | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.611 (0.235)    | 0 (0.000) |    22.02 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |      801 | 2024-04-29 | Insilio           | W   | 0.998      | 0.435        | 0.010 (0.004)    | 0.542 (0.235)    | 0 (0.000) |    25.26 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |      894 | 2024-04-25 | EYEBALLERS        | L   | 0.972      | -            | -                | -                | -         |    -8.74 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |      906 | 2024-04-25 | ECF               | L   | 0.970      | -            | -                | -                | -         |   -11.21 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |      934 | 2024-04-23 | 1WIN              | L   | 0.958      | -            | -                | -                | -         |    -5.23 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |      954 | 2024-04-22 | SINNERS           | L   | 0.951      | -            | -                | -                | -         |    -4.86 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     1050 | 2024-04-19 | B8                | L   | 0.931      | -            | -                | -                | -         |    -4.92 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     1102 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.924      | 0.384        | 0.048 (0.017)    | 0.650 (0.231)    | 0 (0.000) |    21.09 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     1127 | 2024-04-17 | PARIVISION        | L   | 0.919      | -            | -                | -                | -         |    -6.94 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     1188 | 2024-04-15 | Alliance          | L   | 0.905      | -            | -                | -                | -         |    -9.42 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     1365 | 2024-04-09 | BLEED             | L   | 0.864      | -            | -                | -                | -         |    -1.85 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     1391 | 2024-04-08 | Permitta          | L   | 0.858      | -            | -                | -                | -         |    -6.94 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     1493 | 2024-04-04 | Passion UA        | L   | 0.831      | -            | -                | -                | -         |    -7.04 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     2222 | 2024-03-02 | Sangal            | L   | 0.610      | -            | -                | -                | -         |    -3.06 | Airax, Banjo, ottoNd, puuha, uli |
|           10 |     2246 | 2024-02-29 | KOI               | L   | 0.598      | -            | -                | -                | -         |    -3.61 | Airax, Banjo, ottoNd, puuha, uli |
|            9 |     2250 | 2024-02-29 | Aurora            | L   | 0.597      | -            | -                | -                | -         |    -0.41 | Airax, Banjo, ottoNd, puuha, uli |
|            8 |     2257 | 2024-02-28 | Spirit Academy    | L   | 0.592      | -            | -                | -                | -         |    -9.97 | Airax, Banjo, ottoNd, puuha, uli |
|            7 |     2337 | 2024-02-24 | ENCE Academy      | L   | 0.567      | -            | -                | -                | -         |    -7.50 | Airax, Banjo, ottoNd, puuha, uli |
|            6 |     2350 | 2024-02-24 | Rounds            | W   | 0.566      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.566) |     2.17 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     3475 | 2024-01-11 | HEROIC            | L   | 0.272      | -            | -                | -                | -         |    -0.04 | Airax, Banjo, ottoNd, sLowi, uli |
|            4 |     3482 | 2024-01-10 | TSM               | W   | 0.267      | 0.143        | 0.008 (0.000)    | 0.191 (0.007)    | 0 (0.000) |     4.08 | Airax, Banjo, ottoNd, sLowi, uli |
|            3 |     3536 | 2024-01-09 | fnatic            | L   | 0.259      | -            | -                | -                | -         |    -0.97 | Airax, Banjo, ottoNd, sLowi, uli |
|            2 |     3549 | 2024-01-09 | Sampi             | W   | 0.259      | 0.143        | 0.038 (0.001)    | 0.794 (0.029)    | 0 (0.000) |     6.00 | Airax, Banjo, ottoNd, sLowi, uli |
|            1 |     3918 | 2023-12-02 | FURIA             | L   | 0.006      | -            | -                | -                | -         |    -0.01 | Airax, Banjo, ottoNd, sLowi, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,098.52)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-24 |      0.567 | $1,606.00      | $911.01         |
| 2023-12-03 |      0.013 | $15,000.00     | $187.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
