### Roster Details<br />
Team Name: Permitta<br />
Roster: casey, iso, Layner, olimp, sNx<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
Final Rank Value:  868.2<br />
<br />
Final Rank Value (868.2) = Starting Rank Value (854.5) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.5
- 400 + ( ( 0.222 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 854.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      211 | 2023-02-02 | Complexity      | L   | 1.000      | -            | -                | -                | -         |    -2.63 | casey, iso, Layner, olimp, sNx              |
|           29 |      241 | 2023-02-01 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -2.32 | casey, iso, Layner, olimp, sNx              |
|           28 |      436 | 2023-01-25 | Into the Bin    | L   | 1.000      | -            | -                | -                | -         |   -24.92 | casey, iso, Layner, olimp, sNx              |
|           27 |      477 | 2023-01-24 | MASONIC         | L   | 1.000      | -            | -                | -                | -         |   -19.51 | casey, iso, Layner, olimp, sNx              |
|           26 |      514 | 2023-01-22 | Falcons         | L   | 1.000      | -            | -                | -                | -         |   -13.52 | casey, iso, Layner, olimp, sNx              |
|           25 |      592 | 2023-01-19 | Spirit Academy  | W   | 1.000      | 0.477        | 0.032 (0.015)    | 0.447 (0.213)    | 0 (0.000) |    13.87 | casey, iso, Layner, olimp, sNx              |
|           24 |      614 | 2023-01-18 | Falcons         | L   | 1.000      | -            | -                | -                | -         |   -14.74 | casey, iso, Layner, olimp, sNx              |
|           23 |      660 | 2023-01-16 | 9INE            | L   | 1.000      | -            | -                | -                | -         |   -15.63 | casey, iso, Layner, olimp, sNx              |
|           22 |      767 | 2022-12-18 | Iron Branch     | W   | 0.827      | -            | -                | -                | 0 (0.000) |     6.05 | casey, iso, Layner, olimp, sNx              |
|           21 |      805 | 2022-12-17 | Monte           | W   | 0.820      | 0.300        | 0.029 (0.007)    | 0.945 (0.233)    | 0 (0.000) |    14.21 | casey, iso, Murlok, olimp, sNx              |
|           20 |      913 | 2022-12-13 | Sprout          | L   | 0.793      | -            | -                | -                | -         |    -5.87 | casey, iso, Layner, olimp, sNx              |
|           19 |      953 | 2022-12-11 | PACT            | W   | 0.779      | 0.377        | 0.016 (0.005)    | -                | 0 (0.000) |     7.56 | casey, iso, Layner, olimp, sNx              |
|           18 |      980 | 2022-12-10 | ThunderFlash    | W   | 0.774      | 0.377        | 0.010 (0.003)    | -                | 0 (0.000) |     6.01 | casey, iso, Layner, olimp, sNx              |
|           17 |     1046 | 2022-12-08 | MASONIC         | W   | 0.759      | 0.477        | 0.021 (0.008)    | 0.752 (0.272)    | 0 (0.000) |    11.54 | casey, iso, Layner, olimp, sNx              |
|           16 |     1084 | 2022-12-07 | ECLOT           | W   | 0.752      | 0.477        | 0.046 (0.017)    | 0.584 (0.210)    | 0 (0.000) |    14.00 | casey, iso, Layner, olimp, sNx              |
|           15 |     1114 | 2022-12-06 | K23             | W   | 0.747      | 0.435        | 0.020 (0.007)    | 0.329 (0.107)    | 0 (0.000) |    12.93 | casey, iso, Layner, olimp, sNx              |
|           14 |     1170 | 2022-12-04 | ALTERNATE aTTaX | W   | 0.733      | 0.477        | -                | 0.486 (0.170)    | 0 (0.000) |     9.89 | casey, iso, Layner, olimp, sNx              |
|           13 |     1217 | 2022-12-03 | Falcons         | L   | 0.726      | -            | -                | -                | -         |   -10.65 | casey, iso, Layner, mchk, sNx               |
|           12 |     1513 | 2022-11-22 | UNGENTIUM       | W   | 0.653      | 0.435        | 0.015 (0.004)    | 0.474 (0.135)    | 0 (0.000) |     8.28 | casey, iso, Layner, olimp, sNx              |
|           11 |     1613 | 2022-11-16 | BLUEJAYS        | L   | 0.613      | -            | -                | -                | -         |    -5.25 | casey, iso, Layner, olimp, sNx              |
|           10 |     1853 | 2022-10-27 | EC Brugge       | L   | 0.478      | -            | -                | -                | -         |    -9.36 | matty, n0tice, ritchiEE, simix, Stev0se     |
|            9 |     1860 | 2022-10-26 | Bad News Eagles | W   | 0.473      | 0.435        | 0.066 (0.014)    | 0.375 (0.077)    | -         |    12.03 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|            8 |     2386 | 2022-10-05 | Sangal          | W   | 0.333      | 0.371        | -                | 0.684 (0.085)    | -         |     6.56 | kory, kyuubii, phzy, ScrunK, Soulfly        |
|            7 |     2521 | 2022-09-29 | Aurora          | W   | 0.293      | -            | -                | -                | -         |     2.51 | delus1onn, KaiR0N-, Lack1, RAiLWAY, sugaR   |
|            6 |     2754 | 2022-09-22 | 500             | W   | 0.246      | 0.371        | 0.085 (0.008)    | 0.760 (0.069)    | -         |     5.83 | casey, Layner, mchk, olimp, sNx             |
|            5 |     2806 | 2022-09-20 | MASONIC         | W   | 0.233      | -            | -                | -                | -         |     4.32 | casey, iso, Layner, mchk, sNx               |
|            4 |     3453 | 2022-08-29 | IKLA            | W   | 0.085      | -            | -                | -                | -         |     1.50 | casey, iso, Layner, olimp, sNx              |
|            3 |     3565 | 2022-08-26 | Enterprise      | W   | 0.066      | -            | -                | -                | -         |     1.11 | Blytz, h4rn, manguss, SYSTEM, The eLiVe     |
|            2 |     3580 | 2022-08-25 | 500             | L   | 0.058      | -            | -                | -                | -         |    -0.40 | casey, iso, Layner, olimp, sNx              |
|            1 |     3627 | 2022-08-23 | KOVA            | W   | 0.046      | -            | -                | -                | -         |     0.30 | Airax, ottoNd, Sm1llee, uli, zks            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,094.36)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-03 |      1.000 | $2,500.00      | $2,500.00       |
| 2022-12-18 |      0.827 | $2,966.00      | $2,453.22       |
| 2022-12-11 |      0.779 | $11,075.00     | $8,630.22       |
| 2022-10-09 |      0.359 | $7,000.00      | $2,510.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
