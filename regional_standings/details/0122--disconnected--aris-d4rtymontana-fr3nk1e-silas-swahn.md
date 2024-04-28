### Roster Details<br />
Team Name: Disconnected<br />
Roster: aris, D4rtyMontana, Fr3nk1e, silas, Swahn<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  749.7<br />
<br />
Final Rank Value (749.7) = Starting Rank Value (728.3) + Head To Head Adjustments (21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.3
- 400 + ( ( 0.160 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 728.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      964 | 2022-12-10 | MIBR                 | L   | 0.776      | -            | -                | -                | -         |    -5.95 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           36 |     1052 | 2022-12-07 | Vendetta             | W   | 0.756      | 0.435        | 0.017 (0.006)    | 0.361 (0.118)    | 0 (0.000) |    13.19 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           35 |     1136 | 2022-12-05 | Red Wolves           | W   | 0.742      | 0.435        | 0.002 (0.001)    | 0.291 (0.094)    | 0 (0.000) |     9.37 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           34 |     1270 | 2022-12-01 | ATK                  | L   | 0.715      | -            | -                | -                | -         |    -4.60 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           33 |     1320 | 2022-11-29 | Villainous           | L   | 0.702      | -            | -                | -                | -         |   -16.74 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           32 |     1490 | 2022-11-23 | Mythic               | W   | 0.662      | 0.435        | 0.001 (0.000)    | 0.203 (0.058)    | 0 (0.000) |     8.72 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           31 |     1508 | 2022-11-22 | Noxious              | W   | 0.655      | 0.435        | 0.006 (0.002)    | 0.180 (0.051)    | 0 (0.000) |     8.96 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           30 |     1737 | 2022-11-02 | Nouns                | L   | 0.522      | -            | -                | -                | -         |    -4.94 | aris, D4rtyMontana, Fr3nk1e, silas, Swahn   |
|           29 |     2203 | 2022-10-13 | Red Wolves           | W   | 0.388      | 0.143        | -                | 0.291 (0.016)    | 0 (0.000) |     4.78 | aris, BeaKie, brett, silas, Swahn           |
|           28 |     2239 | 2022-10-12 | Snakes Den           | W   | 0.382      | -            | -                | -                | 0 (0.000) |     4.50 | aris, BeaKie, brett, silas, Swahn           |
|           27 |     2438 | 2022-10-02 | TropiCaos            | L   | 0.315      | -            | -                | -                | -         |    -4.79 | dzt, land1n, mawth, prt, tatazin            |
|           26 |     2460 | 2022-10-01 | Davenport University | W   | 0.309      | 0.384        | 0.014 (0.002)    | 0.227 (0.027)    | 0 (0.000) |     4.81 | CoJoMo, corn, Pugg, spek, swicher           |
|           25 |     2485 | 2022-09-30 | 1 JIN                | W   | 0.301      | 0.384        | 0.006 (0.001)    | 0.192 (0.022)    | 0 (0.000) |     4.26 | aris, BeaKie, brett, silas, Swahn           |
|           24 |     2534 | 2022-09-28 | timbermen            | L   | 0.289      | -            | -                | -                | -         |    -3.63 | dare, droid, intra, shane, snav             |
|           23 |     2586 | 2022-09-26 | 7AM NA               | W   | 0.275      | 0.435        | -                | 0.107 (0.013)    | 0 (0.000) |     2.42 | aris, BeaKie, brett, silas, Swahn           |
|           22 |     2605 | 2022-09-25 | Task Force 141       | W   | 0.269      | -            | -                | -                | 0 (0.000) |     2.02 | aris, BeaKie, brett, silas, Swahn           |
|           21 |     2607 | 2022-09-25 | TropiCaos            | L   | 0.268      | -            | -                | -                | -         |    -4.14 | dzt, land1n, mawth, prt, tatazin            |
|           20 |     2686 | 2022-09-23 | Nouns                | L   | 0.254      | -            | -                | -                | -         |    -2.55 | aris, BeaKie, brett, silas, Swahn           |
|           19 |     2688 | 2022-09-23 | TropiCaos            | W   | 0.254      | 0.143        | 0.014 (0.001)    | -                | -         |     4.08 | aris, BeaKie, brett, silas, Swahn           |
|           18 |     2698 | 2022-09-23 | TeamOne              | L   | 0.253      | -            | -                | -                | -         |    -2.17 | aris, BeaKie, brett, silas, Swahn           |
|           17 |     2735 | 2022-09-22 | ATK                  | W   | 0.248      | 0.435        | 0.070 (0.008)    | 0.646 (0.070)    | -         |     6.09 | b0denmaster, Fadey, MisteM, motm, Swisher   |
|           16 |     2820 | 2022-09-19 | Strife               | L   | 0.229      | -            | -                | -                | -         |    -4.59 | D4rtyMontana, J0LZ, jitter, reck, SLIGHT    |
|           15 |     2869 | 2022-09-17 | Nouns                | L   | 0.216      | -            | -                | -                | -         |    -3.34 | aris, BeaKie, brett, silas, Swahn           |
|           14 |     2872 | 2022-09-17 | ATK                  | L   | 0.215      | -            | -                | -                | -         |    -1.54 | aris, BeaKie, brett, silas, Swahn           |
|           13 |     2936 | 2022-09-15 | timbermen            | W   | 0.201      | 0.143        | 0.016 (0.000)    | 0.306 (0.009)    | -         |     3.80 | aris, BeaKie, brett, silas, Swahn           |
|           12 |     2976 | 2022-09-14 | Strife               | W   | 0.195      | -            | -                | -                | -         |     2.26 | aris, BeaKie, brett, silas, Swahn           |
|           11 |     2982 | 2022-09-14 | Mythic               | W   | 0.195      | -            | -                | -                | -         |     2.79 | aris, BeaKie, brett, silas, Swahn           |
|           10 |     3013 | 2022-09-13 | Vendetta             | L   | 0.189      | -            | -                | -                | -         |    -3.19 | consti, Momo, Pluto, Tender, WOOHOO         |
|            9 |     3247 | 2022-09-06 | TeamOne              | L   | 0.142      | -            | -                | -                | -         |    -1.30 | iDk, malbsMd, Maluk3, pesadelo, trk         |
|            8 |     3259 | 2022-09-05 | Nouns                | L   | 0.135      | -            | -                | -                | -         |    -2.10 | Bwills, cxzi, cynic, JazzPimp, jeorgesnorts |
|            7 |     3273 | 2022-09-04 | TeamOne              | L   | 0.128      | -            | -                | -                | -         |    -1.21 | aris, BeaKie, brett, silas, Swahn           |
|            6 |     3276 | 2022-09-04 | Davenport University | W   | 0.128      | 0.143        | 0.014 (0.000)    | -                | -         |     2.04 | aris, BeaKie, brett, silas, Swahn           |
|            5 |     3303 | 2022-09-03 | 7AM NA               | W   | 0.122      | -            | -                | -                | -         |     1.03 | AtomiK, Drew, Izik, Slugy, SolGoat          |
|            4 |     3373 | 2022-09-01 | Evil Geniuses        | L   | 0.108      | -            | -                | -                | -         |    -0.48 | aris, BeaKie, brett, silas, Swahn           |
|            3 |     3378 | 2022-09-01 | Vendetta             | W   | 0.108      | -            | -                | -                | -         |     1.59 | consti, Momo, Pluto, Tender, WOOHOO         |
|            2 |     3404 | 2022-08-31 | Cartel terraza       | W   | 0.102      | -            | -                | -                | -         |     1.27 | aris, BeaKie, brett, silas, Swahn           |
|            1 |     3424 | 2022-08-30 | Task Force 141       | W   | 0.095      | -            | -                | -                | -         |     0.72 | aris, BeaKie, brett, silas, Swahn           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,931.22)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-18 |      0.829 | $1,250.00      | $1,036.08       |
| 2022-12-11 |      0.783 | $1,000.00      | $782.55         |
| 2022-10-02 |      0.315 | $5,000.00      | $1,574.64       |
| 2022-09-25 |      0.269 | $2,000.00      | $537.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
