### Roster Details<br />
Team Name: Sangal<br />
Roster: kory, kyuubii, phzy, ScrunK, Soulfly<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  921.2<br />
<br />
Final Rank Value (921.2) = Starting Rank Value (939.5) + Head To Head Adjustments (-18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 939.5
- 400 + ( ( 0.264 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 939.5


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
|           60 |       99 | 2023-02-07 | ex-Finest         | L   | 1.000      | -            | -                | -                | -         |   -17.18 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           59 |      208 | 2023-02-02 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -13.37 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           58 |      218 | 2023-02-02 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -15.91 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           57 |      244 | 2023-02-01 | 500               | W   | 1.000      | 0.477        | 0.085 (0.041)    | 0.760 (0.362)    | 0 (0.000) |    17.86 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           56 |      260 | 2023-01-31 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -16.12 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           55 |      268 | 2023-01-31 | FTW               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.41 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           54 |      278 | 2023-01-31 | GenOne            | W   | 1.000      | 0.435        | 0.300 (0.130)    | 0.400 (0.174)    | 0 (0.000) |    17.86 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           53 |      315 | 2023-01-29 | Tricked           | W   | 1.000      | 0.477        | 0.034 (0.016)    | 0.954 (0.455)    | 0 (0.000) |    14.84 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           52 |      320 | 2023-01-29 | Young Ninjas      | W   | 1.000      | 0.435        | 0.076 (0.033)    | 0.694 (0.302)    | 0 (0.000) |    15.82 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           51 |      385 | 2023-01-27 | Tricked           | L   | 1.000      | -            | -                | -                | -         |   -16.01 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           50 |      434 | 2023-01-25 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -11.88 | kory, kressy, phzy, ScrunK, Soulfly  |
|           49 |      441 | 2023-01-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -6.22 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           48 |      471 | 2023-01-24 | Into the Bin      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.96 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           47 |      488 | 2023-01-23 | Copenhagen Flames | W   | 1.000      | 0.435        | 0.133 (0.058)    | 0.722 (0.314)    | 0 (0.000) |    21.61 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           46 |      546 | 2023-01-21 | Juggernauts       | W   | 1.000      | 0.435        | -                | 0.190 (0.083)    | 0 (0.000) |     8.35 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           45 |      612 | 2023-01-18 | TENSTAR           | W   | 1.000      | -            | -                | -                | -         |     4.20 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           44 |      658 | 2023-01-16 | BLUEJAYS          | W   | 1.000      | -            | -                | -                | -         |     3.54 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           43 |      666 | 2023-01-16 | IKLA              | L   | 1.000      | -            | -                | -                | -         |   -14.07 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           42 |      696 | 2023-01-14 | GODSENT           | L   | 1.000      | -            | -                | -                | -         |   -21.48 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           41 |      889 | 2022-12-14 | forZe             | L   | 0.800      | -            | -                | -                | -         |   -11.31 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           40 |      909 | 2022-12-13 | Movistar Riders   | W   | 0.793      | -            | -                | -                | -         |     6.99 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           39 |     1063 | 2022-12-07 | Bad News Eagles   | W   | 0.754      | 0.435        | 0.066 (0.022)    | 0.375 (0.123)    | -         |    18.15 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           38 |     1111 | 2022-12-06 | HEET              | W   | 0.747      | 0.435        | 0.028 (0.009)    | -                | -         |    14.23 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           37 |     1310 | 2022-11-30 | HONORIS           | L   | 0.705      | -            | -                | -                | -         |   -11.28 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           36 |     1327 | 2022-11-29 | Websterz          | L   | 0.701      | -            | -                | -                | -         |   -13.48 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           35 |     1585 | 2022-11-17 | Copenhagen Flames | L   | 0.620      | -            | -                | -                | -         |    -7.98 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           34 |     1637 | 2022-11-15 | UNGENTIUM         | L   | 0.607      | -            | -                | -                | -         |   -13.16 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           33 |     1754 | 2022-11-01 | SINNERS           | L   | 0.514      | -            | -                | -                | -         |    -7.47 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           32 |     1963 | 2022-10-22 | Heroic            | L   | 0.446      | -            | -                | -                | -         |    -0.13 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           31 |     1998 | 2022-10-21 | Monte             | L   | 0.437      | -            | -                | -                | -         |    -7.62 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           30 |     2016 | 2022-10-20 | BIG               | W   | 0.433      | 0.461        | 0.124 (0.025)    | 0.520 (0.104)    | -         |    12.48 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           29 |     2040 | 2022-10-19 | Tricked           | L   | 0.427      | -            | -                | -                | -         |    -6.19 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           28 |     2084 | 2022-10-17 | 500               | W   | 0.413      | 0.435        | 0.085 (0.015)    | 0.760 (0.136)    | -         |     8.02 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           27 |     2129 | 2022-10-15 | Copenhagen Flames | L   | 0.400      | -            | -                | -                | -         |    -5.96 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           26 |     2212 | 2022-10-13 | ECSTATIC          | W   | 0.386      | 0.435        | -                | 0.556 (0.093)    | -         |     4.67 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           25 |     2243 | 2022-10-12 | Nemiga            | L   | 0.380      | -            | -                | -                | -         |    -9.21 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           24 |     2309 | 2022-10-09 | MOUZ              | L   | 0.359      | -            | -                | -                | -         |    -1.71 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           23 |     2328 | 2022-10-08 | Illuminar         | W   | 0.352      | -            | -                | -                | 1 (0.352) |     6.37 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           22 |     2339 | 2022-10-07 | Aurora            | W   | 0.347      | -            | -                | -                | -         |     2.08 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           21 |     2375 | 2022-10-06 | Heroic            | L   | 0.338      | -            | -                | -                | -         |    -0.10 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           20 |     2386 | 2022-10-05 | Permitta          | L   | 0.333      | -            | -                | -                | -         |    -6.56 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           19 |     2405 | 2022-10-05 | FANTASY           | W   | 0.331      | -            | -                | -                | 1 (0.331) |     0.69 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           18 |     2419 | 2022-10-04 | BIG               | L   | 0.326      | -            | -                | -                | -         |    -0.89 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           17 |     2493 | 2022-09-30 | ECLOT             | W   | 0.300      | -            | -                | -                | -         |     5.53 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           16 |     2594 | 2022-09-26 | PACT              | W   | 0.273      | -            | -                | -                | -         |     2.34 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           15 |     2721 | 2022-09-23 | EC Brugge         | W   | 0.251      | -            | -                | -                | -         |     2.50 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           14 |     2804 | 2022-09-20 | LF0               | W   | 0.234      | -            | -                | -                | -         |     0.56 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           13 |     2884 | 2022-09-17 | LDLC              | W   | 0.213      | -            | -                | -                | -         |     1.56 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           12 |     2888 | 2022-09-17 | fnatic            | W   | 0.213      | 0.143        | 0.243 (0.007)    | -                | -         |     6.38 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           11 |     2954 | 2022-09-15 | PGE Turow         | W   | 0.199      | -            | -                | -                | -         |     0.52 | kory, kyuubii, phzy, ScrunK, Soulfly |
|           10 |     2955 | 2022-09-15 | Viperio           | W   | 0.199      | -            | -                | -                | -         |     1.31 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            9 |     3411 | 2022-08-31 | Sprout            | W   | 0.100      | -            | -                | -                | -         |     2.49 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            8 |     3431 | 2022-08-30 | cowana            | W   | 0.093      | -            | -                | -                | -         |     0.23 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            7 |     3443 | 2022-08-29 | schadE halt       | W   | 0.087      | -            | -                | -                | -         |     0.20 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            6 |     3449 | 2022-08-29 | SSP               | W   | 0.086      | -            | -                | -                | -         |     0.24 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            5 |     3588 | 2022-08-24 | Eternal Fire      | L   | 0.053      | -            | -                | -                | -         |    -0.85 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            4 |     3591 | 2022-08-24 | B8                | W   | 0.052      | -            | -                | -                | -         |     0.20 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            3 |     3601 | 2022-08-23 | Entropiq          | W   | 0.047      | -            | -                | -                | -         |     0.34 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            2 |     3612 | 2022-08-23 | Budapest Five     | W   | 0.046      | -            | -                | -                | -         |     0.11 | kory, kyuubii, phzy, ScrunK, Soulfly |
|            1 |     3626 | 2022-08-23 | Sashi             | W   | 0.046      | -            | -                | -                | -         |     0.24 | kory, kyuubii, phzy, ScrunK, Soulfly |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,984.11)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2022-12-19 |      0.833 | $1,250.00      | $1,041.40       |
| 2022-10-23 |      0.453 | $7,500.00      | $3,400.28       |
| 2022-10-09 |      0.359 | $4,300.00      | $1,542.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
