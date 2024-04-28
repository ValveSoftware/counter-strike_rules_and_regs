### Roster Details<br />
Team Name: IKLA<br />
Roster: byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [46](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  947.3<br />
<br />
Final Rank Value (947.3) = Starting Rank Value (899.1) + Head To Head Adjustments (48.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.262[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 899.1
- 400 + ( ( 0.244 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 899.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       88 | 2023-02-08 | Illuminar          | W   | 1.000      | 0.384        | 0.048 (0.018)    | 0.700 (0.269)    | 0 (0.000) |    18.57 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           51 |      145 | 2023-02-05 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |    -9.32 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           50 |      171 | 2023-02-04 | GODSENT            | L   | 1.000      | -            | -                | -                | -         |   -19.55 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           49 |      216 | 2023-02-02 | Nexus              | W   | 1.000      | 0.477        | -                | 0.542 (0.259)    | 0 (0.000) |    12.17 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           48 |      269 | 2023-01-31 | Copenhagen Flames  | L   | 1.000      | -            | -                | -                | -         |   -12.68 | j3kie, Kvem, Psycho, s4ltovsk1yy, SENSEi  |
|           47 |      280 | 2023-01-31 | Falcons            | W   | 1.000      | 0.477        | 0.045 (0.022)    | 0.767 (0.366)    | 0 (0.000) |    18.11 | j3kie, Kvem, Psycho, s4ltovsk1yy, SENSEi  |
|           46 |      419 | 2023-01-26 | Young Ninjas       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.46 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           45 |      483 | 2023-01-24 | UNGENTIUM          | W   | 1.000      | 0.477        | -                | 0.474 (0.226)    | 0 (0.000) |     9.90 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           44 |      646 | 2023-01-17 | los kogutos        | L   | 1.000      | -            | -                | -                | -         |   -21.92 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           43 |      666 | 2023-01-16 | Sangal             | W   | 1.000      | 0.477        | 0.017 (0.008)    | 0.684 (0.326)    | 0 (0.000) |    14.07 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           42 |      671 | 2023-01-16 | PGE Turow          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.54 | byr9, Kvem, Psycho, s4ltovsk1yy, SENSEi   |
|           41 |      690 | 2023-01-15 | Case               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.15 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           40 |      725 | 2023-01-10 | los kogutos        | L   | 0.978      | -            | -                | -                | -         |   -21.52 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           39 |      766 | 2022-12-18 | EYEBALLERS         | L   | 0.827      | -            | -                | -                | -         |   -15.82 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           38 |      808 | 2022-12-17 | 1WIN               | L   | 0.820      | -            | -                | -                | -         |   -14.69 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           37 |      816 | 2022-12-17 | EPG Family         | W   | 0.819      | -            | -                | -                | 0 (0.000) |     8.01 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           36 |      891 | 2022-12-14 | Apeks              | L   | 0.800      | -            | -                | -                | -         |   -11.69 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           35 |      906 | 2022-12-13 | Monte              | L   | 0.794      | -            | -                | -                | -         |   -12.96 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           34 |     1009 | 2022-12-09 | 500                | W   | 0.767      | 0.371        | 0.085 (0.024)    | 0.760 (0.217)    | 0 (0.000) |    16.56 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           33 |     1044 | 2022-12-08 | los kogutos        | W   | 0.759      | -            | -                | -                | -         |     5.65 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           32 |     1075 | 2022-12-07 | MASONIC            | W   | 0.753      | 0.477        | -                | 0.752 (0.270)    | -         |     9.40 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           31 |     1104 | 2022-12-06 | Tricked            | W   | 0.748      | 0.371        | 0.034 (0.010)    | 0.954 (0.265)    | -         |    12.77 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           30 |     1183 | 2022-12-04 | PROSPECTS          | W   | 0.732      | 0.477        | 0.032 (0.011)    | 0.689 (0.241)    | -         |    12.10 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           29 |     1228 | 2022-12-03 | ex-Into the Breach | W   | 0.725      | 0.477        | -                | 0.520 (0.180)    | -         |     9.20 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           28 |     1639 | 2022-11-15 | K23                | L   | 0.606      | -            | -                | -                | -         |   -10.47 | byr9, j3kie, MaSvAl, sad, SENSEi          |
|           27 |     1884 | 2022-10-25 | Young Ninjas       | W   | 0.467      | 0.435        | 0.076 (0.015)    | -                | -         |     7.39 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           26 |     1913 | 2022-10-24 | EPG Family         | L   | 0.458      | -            | -                | -                | -         |    -9.43 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           25 |     1932 | 2022-10-23 | ECLOT              | W   | 0.453      | 0.435        | 0.046 (0.009)    | -                | -         |     8.06 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           24 |     1933 | 2022-10-23 | HONORIS            | W   | 0.452      | -            | -                | -                | -         |     6.43 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           23 |     1945 | 2022-10-22 | Eternal Fire       | W   | 0.448      | -            | -                | -                | -         |     7.48 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           22 |     1988 | 2022-10-21 | HAVU               | W   | 0.440      | 0.435        | 0.041 (0.008)    | -                | -         |     7.58 | j3kie, Kvem, MaSvAl, sad, SENSEi          |
|           21 |     2006 | 2022-10-20 | forZe              | L   | 0.434      | -            | -                | -                | -         |    -5.42 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           20 |     2046 | 2022-10-19 | ECSTATIC           | W   | 0.426      | -            | -                | -                | -         |     6.02 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           19 |     2083 | 2022-10-17 | Copenhagen Flames  | W   | 0.413      | 0.435        | 0.133 (0.024)    | -                | -         |     7.82 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           18 |     2092 | 2022-10-17 | HAVU               | W   | 0.412      | -            | -                | -                | -         |     7.32 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           17 |     2125 | 2022-10-16 | BLUEJAYS           | L   | 0.404      | -            | -                | -                | -         |    -3.85 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           16 |     2183 | 2022-10-14 | Tricked            | L   | 0.393      | -            | -                | -                | -         |    -4.71 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           15 |     2220 | 2022-10-13 | Websterz           | W   | 0.386      | -            | -                | -                | -         |     5.82 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           14 |     2225 | 2022-10-13 | Sprout             | L   | 0.385      | -            | -                | -                | -         |    -2.29 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           13 |     2232 | 2022-10-13 | 9INE               | W   | 0.384      | -            | -                | -                | -         |     6.40 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           12 |     2269 | 2022-10-12 | Believe            | L   | 0.377      | -            | -                | -                | -         |    -7.85 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           11 |     2273 | 2022-10-11 | ex-Into the Breach | W   | 0.373      | -            | -                | -                | -         |     5.01 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|           10 |     2284 | 2022-10-11 | Partizan           | W   | 0.372      | -            | -                | -                | -         |     4.60 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi    |
|            9 |     2563 | 2022-09-28 | Endpoint           | L   | 0.284      | -            | -                | -                | -         |    -4.52 | HeavyGod, mhL, MiGHTYMAX, Nertz, Surreal  |
|            8 |     2817 | 2022-09-20 | SINNERS            | W   | 0.231      | -            | -                | -                | -         |     4.80 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            7 |     3001 | 2022-09-14 | ex-Finest          | L   | 0.192      | -            | -                | -                | -         |    -4.38 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            6 |     3295 | 2022-09-04 | MIBR               | L   | 0.125      | -            | -                | -                | -         |    -1.51 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            5 |     3336 | 2022-09-03 | Enterprise         | W   | 0.117      | -            | -                | -                | -         |     1.76 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            4 |     3358 | 2022-09-02 | ex-Finest          | W   | 0.112      | -            | -                | -                | -         |     0.98 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            3 |     3394 | 2022-09-01 | MASONIC            | W   | 0.105      | -            | -                | -                | -         |     1.73 | Anlelele, Buzz, J3nsyy, notaN, Tauson     |
|            2 |     3430 | 2022-08-30 | Enterprise         | L   | 0.093      | -            | -                | -                | -         |    -1.55 | byr9, Kvem, s4ltovsk1yy, Smash, uQlutzavr |
|            1 |     3453 | 2022-08-29 | Permitta           | L   | 0.085      | -            | -                | -                | -         |    -1.50 | casey, iso, Layner, olimp, sNx            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,901.01)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-06 |      1.000 | $2,550.00      | $2,550.00       |
| 2022-12-15 |      0.807 | $3,000.00      | $2,422.04       |
| 2022-10-24 |      0.460 | $5,000.00      | $2,298.18       |
| 2022-09-04 |      0.126 | $5,000.00      | $630.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
