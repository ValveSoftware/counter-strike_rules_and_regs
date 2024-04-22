### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1286.1<br />
<br />
Final Rank Value (1286.1) = Starting Rank Value (1399.1) + Head To Head Adjustments (-113.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.895[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.321[<sup>2</sup>](#table1)

The average of these factors is 0.517<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1399.1
- 400 + ( ( 0.517 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1399.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |      143 | 2024-04-18 | RUBY               | L   | 1.000      | -            | -                | -                | -         |   -29.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      253 | 2024-04-14 | OG                 | W   | 1.000      | 0.684        | 0.497 (0.340)    | 0.553 (0.378)    | 0 (0.000) |    15.77 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |      267 | 2024-04-13 | BetBoom            | W   | 1.000      | 0.684        | 0.457 (0.312)    | 0.898 (0.614)    | 0 (0.000) |    11.26 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |      278 | 2024-04-12 | AMKAL              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.59 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |      301 | 2024-04-11 | BetBoom            | W   | 1.000      | 0.143        | 0.457 (0.065)    | -                | 0 (0.000) |    12.23 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |      308 | 2024-04-11 | Apeks              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.80 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |      313 | 2024-04-11 | FORZE              | W   | 1.000      | 0.684        | 0.140 (0.095)    | 0.784 (0.536)    | 0 (0.000) |     7.33 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      342 | 2024-04-10 | PARIVISION         | W   | 1.000      | 0.500        | -                | 0.358 (0.179)    | -         |     1.91 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      355 | 2024-04-10 | BetBoom            | L   | 1.000      | -            | -                | -                | -         |   -18.04 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      402 | 2024-04-09 | KOI                | L   | 1.000      | -            | -                | -                | -         |   -25.48 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      412 | 2024-04-09 | 1WIN               | W   | 1.000      | -            | -                | -                | -         |     0.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      419 | 2024-04-09 | 9 Pandas           | W   | 1.000      | -            | -                | -                | -         |     6.83 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      430 | 2024-04-08 | Metizport          | W   | 1.000      | -            | -                | -                | -         |     5.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      434 | 2024-04-08 | OG                 | W   | 1.000      | 0.684        | 0.497 (0.340)    | 0.553 (0.378)    | -         |    16.10 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      447 | 2024-04-08 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -30.82 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      536 | 2024-04-04 | Ninjas in Pyjamas  | W   | 1.000      | 0.143        | 0.196 (0.028)    | -                | -         |     4.25 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      577 | 2024-04-03 | Ninjas in Pyjamas  | W   | 1.000      | 0.143        | 0.196 (0.028)    | -                | -         |     4.04 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      615 | 2024-04-02 | Apeks              | W   | 1.000      | -            | -                | -                | -         |    10.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |      623 | 2024-04-02 | Metizport          | W   | 1.000      | -            | -                | -                | -         |     5.48 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |      635 | 2024-04-01 | SINNERS            | L   | 1.000      | -            | -                | -                | -         |   -26.37 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           56 |      676 | 2024-03-28 | brazylijski luz    | W   | 1.000      | 0.500        | -                | 0.356 (0.178)    | -         |     1.99 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           55 |      707 | 2024-03-27 | Metizport          | W   | 1.000      | -            | -                | -                | -         |     5.78 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           54 |      714 | 2024-03-27 | AURA               | W   | 1.000      | -            | -                | -                | -         |     0.37 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           53 |      748 | 2024-03-25 | Rebels             | W   | 1.000      | 0.500        | -                | 0.360 (0.180)    | -         |     3.15 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           52 |      764 | 2024-03-23 | ALTERNATE aTTaX    | W   | 1.000      | 0.500        | -                | 0.639 (0.320)    | -         |     2.25 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           51 |      779 | 2024-03-22 | ex-Sprout          | W   | 0.993      | -            | -                | -                | -         |     0.82 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           50 |      902 | 2024-03-16 | Gods Reign         | W   | 0.952      | 0.432        | 0.151 (0.062)    | -                | 1 (0.952) |     3.76 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           49 |      924 | 2024-03-15 | Gods Reign         | W   | 0.944      | 0.432        | 0.151 (0.062)    | -                | 1 (0.944) |     3.62 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           48 |      958 | 2024-03-14 | Bad News Kangaroos | W   | 0.937      | 0.432        | -                | 0.429 (0.174)    | 1 (0.937) |     3.28 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           47 |     1216 | 2024-03-04 | Young Ninjas       | L   | 0.873      | -            | -                | -                | -         |   -23.92 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           46 |     1261 | 2024-03-02 | Rebels             | W   | 0.860      | 0.500        | -                | 0.360 (0.155)    | -         |     2.94 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           45 |     1280 | 2024-03-01 | FORZE              | W   | 0.854      | -            | -                | -                | -         |     4.72 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           44 |     1288 | 2024-03-01 | 9 Pandas           | W   | 0.852      | -            | -                | -                | -         |     7.43 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           43 |     1293 | 2024-02-29 | KOI                | W   | 0.847      | -            | -                | -                | -         |     6.41 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           42 |     1298 | 2024-02-29 | Spirit Academy     | W   | 0.846      | -            | -                | -                | -         |     1.54 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           41 |     1303 | 2024-02-29 | HAVU               | W   | 0.844      | -            | -                | -                | -         |     1.89 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           40 |     1306 | 2024-02-28 | ECF                | W   | 0.840      | -            | -                | -                | -         |     0.64 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           39 |     1313 | 2024-02-28 | FORZE              | L   | 0.839      | -            | -                | -                | -         |   -22.57 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           38 |     1533 | 2024-02-18 | Monte              | L   | 0.774      | -            | -                | -                | -         |   -14.11 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           37 |     1543 | 2024-02-18 | B8                 | W   | 0.772      | -            | -                | -                | -         |     1.59 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           36 |     1560 | 2024-02-17 | ECF                | W   | 0.766      | -            | -                | -                | -         |     0.41 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           35 |     1564 | 2024-02-17 | Monte              | L   | 0.766      | -            | -                | -                | -         |   -15.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           34 |     1567 | 2024-02-17 | ECF                | W   | 0.765      | -            | -                | -                | -         |     0.34 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           33 |     2166 | 2024-01-19 | FORZE              | L   | 0.574      | -            | -                | -                | -         |   -16.09 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           32 |     2229 | 2024-01-18 | Enterprise         | L   | 0.567      | -            | -                | -                | -         |   -16.20 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           31 |     2240 | 2024-01-18 | IKLA               | L   | 0.566      | -            | -                | -                | -         |   -17.50 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           30 |     2758 | 2023-12-13 | BIG                | L   | 0.326      | -            | -                | -                | -         |    -7.08 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           29 |     2766 | 2023-12-12 | Guild Eagles       | W   | 0.320      | -            | -                | -                | -         |     1.32 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           28 |     2855 | 2023-12-07 | BIG                | L   | 0.287      | -            | -                | -                | -         |    -6.37 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           27 |     2862 | 2023-12-07 | Guild Eagles       | W   | 0.286      | -            | -                | -                | -         |     1.15 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           26 |     2889 | 2023-12-06 | BIG                | L   | 0.280      | -            | -                | -                | -         |    -6.33 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           25 |     2920 | 2023-12-05 | G2                 | W   | 0.273      | 0.589        | 0.773 (0.124)    | -                | -         |     8.15 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           24 |     2950 | 2023-12-03 | SAW                | W   | 0.259      | -            | -                | -                | -         |     2.73 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           23 |     2988 | 2023-12-01 | ALTERNATE aTTaX    | W   | 0.247      | -            | -                | -                | -         |     0.29 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           22 |     3150 | 2023-11-20 | MIBR               | L   | 0.173      | -            | -                | -                | -         |    -2.53 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           21 |     3199 | 2023-11-18 | FURIA              | L   | 0.159      | -            | -                | -                | -         |    -2.10 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           20 |     3218 | 2023-11-17 | PARIVISION         | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.09 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           19 |     3228 | 2023-11-17 | KOI                | L   | 0.153      | -            | -                | -                | -         |    -4.21 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           18 |     3251 | 2023-11-16 | FURIA              | L   | 0.147      | -            | -                | -                | -         |    -1.99 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           17 |     3264 | 2023-11-16 | Permitta           | W   | 0.146      | -            | -                | -                | -         |     0.24 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           16 |     3295 | 2023-11-15 | PERA               | L   | 0.140      | -            | -                | -                | -         |    -4.29 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           15 |     3303 | 2023-11-15 | ex-sYnck           | W   | 0.140      | -            | -                | -                | -         |     0.11 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           14 |     3330 | 2023-11-14 | ALTERNATE aTTaX    | L   | 0.132      | -            | -                | -                | -         |    -4.03 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           13 |     3347 | 2023-11-13 | Apeks              | W   | 0.126      | -            | -                | -                | -         |     1.23 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           12 |     3374 | 2023-11-12 | paiN               | L   | 0.119      | -            | -                | -                | -         |    -0.39 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           11 |     3406 | 2023-11-11 | Eternal Fire       | W   | 0.113      | -            | -                | -                | -         |     2.80 | deko, KENSI, Lack1, Norwi, SELLTER    |
|           10 |     3453 | 2023-11-08 | PARIVISION         | L   | 0.094      | -            | -                | -                | -         |    -2.90 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            9 |     3466 | 2023-11-08 | 9 Pandas           | L   | 0.092      | -            | -                | -                | -         |    -2.47 | easy, KENSI, Lack1, Norwi, SELLTER    |
|            8 |     3478 | 2023-11-07 | EYEBALLERS         | L   | 0.087      | -            | -                | -                | -         |    -2.60 | easy, KENSI, Lack1, Norwi, SELLTER    |
|            7 |     3502 | 2023-11-06 | Enterprise         | W   | 0.078      | -            | -                | -                | -         |     0.15 | easy, KENSI, Lack1, Norwi, SELLTER    |
|            6 |     3611 | 2023-11-01 | Monte              | L   | 0.046      | -            | -                | -                | -         |    -1.09 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            5 |     3631 | 2023-10-31 | Apeks              | W   | 0.040      | -            | -                | -                | -         |     0.38 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            4 |     3680 | 2023-10-30 | BIG                | W   | 0.032      | -            | -                | -                | -         |     0.26 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            3 |     3710 | 2023-10-29 | HEROIC             | W   | 0.026      | -            | -                | -                | -         |     0.02 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            2 |     3783 | 2023-10-27 | Eternal Fire       | W   | 0.013      | -            | -                | -                | -         |     0.33 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            1 |     3821 | 2023-10-26 | TSM                | W   | 0.005      | -            | -                | -                | -         |     0.00 | KENSI, Lack1, lattykk, Norwi, SELLTER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($145,242.67)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.76) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $105,000.00    | $105,000.00     |
| 2024-03-16 |      0.952 | $28,500.00     | $27,119.14      |
| 2023-12-13 |      0.327 | $1,500.00      | $490.14         |
| 2023-12-10 |      0.307 | $500.00        | $153.39         |
| 2023-12-07 |      0.287 | $40,000.00     | $11,477.62      |
| 2023-11-09 |      0.100 | $2,000.00      | $200.17         |
| 2023-11-02 |      0.053 | $15,000.00     | $802.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
