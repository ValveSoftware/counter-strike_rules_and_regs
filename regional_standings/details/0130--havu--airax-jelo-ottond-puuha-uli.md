### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
Final Rank Value:  738.6<br />
<br />
Final Rank Value (738.6) = Starting Rank Value (833.2) + Head To Head Adjustments (-94.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 833.2
- 400 + ( ( 0.227 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 833.2


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
|           30 |       28 | 2024-05-05 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -11.38 | Airax, Jelo, ottoNd, puuha, uli  |
|           29 |       41 | 2024-05-04 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -13.06 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |       82 | 2024-05-02 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -2.30 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |       91 | 2024-05-02 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -7.75 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |      131 | 2024-04-30 | EYEBALLERS        | W   | 1.000      | 0.384        | 0.045 (0.017)    | 0.599 (0.230)    | 0 (0.000) |    21.43 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |      150 | 2024-04-29 | Insilio           | W   | 1.000      | 0.435        | 0.019 (0.008)    | 0.660 (0.287)    | 0 (0.000) |    24.99 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |      243 | 2024-04-25 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |    -9.63 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |      255 | 2024-04-25 | ECF               | L   | 1.000      | -            | -                | -                | -         |   -18.31 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |      283 | 2024-04-23 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -16.05 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |      303 | 2024-04-22 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -5.33 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |      399 | 2024-04-19 | B8                | L   | 1.000      | -            | -                | -                | -         |    -8.81 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |      451 | 2024-04-18 | ALTERNATE aTTaX   | W   | 1.000      | 0.384        | 0.104 (0.040)    | 0.779 (0.299)    | 0 (0.000) |    20.82 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |      476 | 2024-04-17 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |    -9.91 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |      537 | 2024-04-15 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -12.67 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |      714 | 2024-04-09 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -3.65 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |      740 | 2024-04-08 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -9.46 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |      842 | 2024-04-04 | Passion UA        | L   | 0.985      | -            | -                | -                | -         |   -11.59 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     1571 | 2024-03-02 | Sangal            | L   | 0.764      | -            | -                | -                | -         |   -12.84 | Airax, Banjo, ottoNd, puuha, uli |
|           12 |     1595 | 2024-02-29 | KOI               | L   | 0.752      | -            | -                | -                | -         |    -4.61 | Airax, Banjo, ottoNd, puuha, uli |
|           11 |     1599 | 2024-02-29 | Aurora            | L   | 0.751      | -            | -                | -                | -         |    -0.56 | Airax, Banjo, ottoNd, puuha, uli |
|           10 |     1606 | 2024-02-28 | Spirit Academy    | L   | 0.746      | -            | -                | -                | -         |   -14.03 | Airax, Banjo, ottoNd, puuha, uli |
|            9 |     1686 | 2024-02-24 | ENCE Academy      | L   | 0.721      | -            | -                | -                | -         |   -10.67 | Airax, Banjo, ottoNd, puuha, uli |
|            8 |     1699 | 2024-02-24 | Rounds            | W   | 0.720      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.720) |     1.66 | Airax, Banjo, ottoNd, puuha, uli |
|            7 |     2824 | 2024-01-11 | HEROIC            | L   | 0.426      | -            | -                | -                | -         |    -0.16 | Airax, Banjo, ottoNd, sLowi, uli |
|            6 |     2831 | 2024-01-10 | TSM               | W   | 0.421      | 0.143        | 0.018 (0.001)    | 0.258 (0.016)    | 0 (0.000) |     5.52 | Airax, Banjo, ottoNd, sLowi, uli |
|            5 |     2885 | 2024-01-09 | fnatic            | L   | 0.413      | -            | -                | -                | -         |    -1.56 | Airax, Banjo, ottoNd, sLowi, uli |
|            4 |     2898 | 2024-01-09 | Sampi             | W   | 0.413      | 0.143        | 0.101 (0.006)    | 0.731 (0.043)    | 0 (0.000) |     9.37 | Airax, Banjo, ottoNd, sLowi, uli |
|            3 |     3267 | 2023-12-02 | FURIA             | L   | 0.160      | -            | -                | -                | -         |    -0.10 | Airax, Banjo, ottoNd, sLowi, uli |
|            2 |     3316 | 2023-11-29 | GamerLegion       | W   | 0.139      | 0.589        | 0.187 (0.015)    | 0.481 (0.039)    | 1 (0.139) |     4.29 | Airax, Banjo, ottoNd, sLowi, uli |
|            1 |     3322 | 2023-11-29 | ENCE              | W   | 0.138      | 0.589        | 0.039 (0.003)    | 0.013 (0.001)    | 1 (0.138) |     1.73 | Airax, Banjo, ottoNd, sLowi, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,657.39)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-02-24 |      0.721 | $1,606.00      | $1,158.49       |
| 2023-12-03 |      0.167 | $15,000.00     | $2,498.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
