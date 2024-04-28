### Roster Details<br />
Team Name: ODDIK<br />
Roster: naitte, r1see, remix, RICIOLI, vLa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  753.4<br />
<br />
Final Rank Value (753.4) = Starting Rank Value (764.3) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.3
- 400 + ( ( 0.178 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 764.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |        3 | 2023-02-12 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -9.76 | naitte, r1see, remix, RICIOLI, vLa |
|           38 |       17 | 2023-02-11 | Black Pearl   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.65 | naitte, r1see, remix, RICIOLI, vLa |
|           37 |      976 | 2022-12-10 | ARCTIC        | L   | 0.774      | -            | -                | -                | -         |    -8.20 | naitte, r1see, remix, RICIOLI, vLa |
|           36 |     1000 | 2022-12-09 | 9z            | W   | 0.768      | 0.269        | 0.019 (0.004)    | 0.177 (0.037)    | 0 (0.000) |    17.28 | naitte, r1see, remix, RICIOLI, vLa |
|           35 |     1003 | 2022-12-09 | Sharks        | L   | 0.768      | -            | -                | -                | -         |    -9.28 | naitte, r1see, remix, RICIOLI, vLa |
|           34 |     1138 | 2022-12-05 | FURIA Academy | L   | 0.741      | -            | -                | -                | -         |   -12.38 | naitte, r1see, remix, RICIOLI, vLa |
|           33 |     1244 | 2022-12-02 | paiN          | L   | 0.721      | -            | -                | -                | -         |    -3.44 | naitte, r1see, remix, RICIOLI, vLa |
|           32 |     1255 | 2022-12-02 | ARCTIC        | L   | 0.719      | -            | -                | -                | -         |    -7.92 | naitte, r1see, remix, RICIOLI, vLa |
|           31 |     1275 | 2022-12-01 | INTZ          | W   | 0.714      | 0.371        | 0.010 (0.003)    | 0.304 (0.080)    | 1 (0.714) |    10.86 | naitte, r1see, remix, RICIOLI, vLa |
|           30 |     1546 | 2022-11-19 | Fuscão 1500   | L   | 0.635      | -            | -                | -                | -         |    -9.70 | naitte, r1see, remix, RICIOLI, vLa |
|           29 |     1561 | 2022-11-18 | SWS           | W   | 0.628      | 0.284        | 0.001 (0.000)    | 0.125 (0.022)    | 0 (0.000) |     6.36 | naitte, r1see, remix, RICIOLI, vLa |
|           28 |     1818 | 2022-10-28 | ARCTIC        | L   | 0.487      | -            | -                | -                | -         |    -5.90 | naitte, r1see, remix, RICIOLI, vLa |
|           27 |     1986 | 2022-10-21 | RED Canids    | W   | 0.440      | 0.371        | -                | 0.178 (0.029)    | 0 (0.000) |     5.37 | naitte, r1see, remix, RICIOLI, vLa |
|           26 |     2003 | 2022-10-20 | SWS           | W   | 0.434      | 0.371        | 0.001 (0.000)    | 0.125 (0.020)    | 0 (0.000) |     4.66 | naitte, r1see, remix, RICIOLI, vLa |
|           25 |     2043 | 2022-10-19 | Flamengo      | W   | 0.426      | 0.371        | -                | 0.288 (0.046)    | 0 (0.000) |     5.15 | naitte, r1see, remix, RICIOLI, vLa |
|           24 |     2608 | 2022-09-25 | Fluxo         | L   | 0.268      | -            | -                | -                | -         |    -2.64 | naitte, r1see, remix, RICIOLI, vLa |
|           23 |     2646 | 2022-09-24 | Paquetá       | L   | 0.261      | -            | -                | -                | -         |    -4.64 | naitte, r1see, remix, RICIOLI, vLa |
|           22 |     2685 | 2022-09-23 | Boca Juniors  | W   | 0.255      | -            | -                | -                | 0 (0.000) |     2.03 | naitte, r1see, remix, RICIOLI, vLa |
|           21 |     2695 | 2022-09-23 | Corinthians   | W   | 0.254      | 0.303        | 0.014 (0.001)    | 0.430 (0.033)    | 0 (0.000) |     4.02 | naitte, r1see, remix, RICIOLI, vLa |
|           20 |     2772 | 2022-09-21 | Fluxo         | L   | 0.241      | -            | -                | -                | -         |    -2.46 | naitte, r1see, remix, RICIOLI, vLa |
|           19 |     2774 | 2022-09-21 | Meta          | W   | 0.241      | 0.303        | 0.010 (0.001)    | 0.302 (0.022)    | 0 (0.000) |     3.89 | naitte, r1see, remix, RICIOLI, vLa |
|           18 |     2876 | 2022-09-17 | Fluxo         | L   | 0.214      | -            | -                | -                | -         |    -2.24 | naitte, r1see, remix, RICIOLI, vLa |
|           17 |     2914 | 2022-09-16 | ex-Isurus     | W   | 0.207      | 0.143        | 0.013 (0.000)    | -                | -         |     4.12 | naitte, r1see, remix, RICIOLI, vLa |
|           16 |     2946 | 2022-09-15 | Furious       | W   | 0.200      | -            | -                | -                | -         |     2.00 | naitte, r1see, remix, RICIOLI, vLa |
|           15 |     3097 | 2022-09-10 | FURIA Academy | L   | 0.169      | -            | -                | -                | -         |    -2.91 | naitte, r1see, remix, RICIOLI, vLa |
|           14 |     3104 | 2022-09-10 | loloNaMente   | W   | 0.168      | -            | -                | -                | -         |     0.61 | naitte, r1see, remix, RICIOLI, vLa |
|           13 |     3218 | 2022-09-08 | ARCTIC        | L   | 0.154      | -            | -                | -                | -         |    -1.67 | naitte, r1see, remix, RICIOLI, vLa |
|           12 |     3275 | 2022-09-04 | B4            | W   | 0.128      | -            | -                | -                | -         |     1.19 | naitte, r1see, remix, RICIOLI, vLa |
|           11 |     3309 | 2022-09-03 | Fuscão 1500   | W   | 0.121      | 0.143        | 0.013 (0.000)    | -                | -         |     2.00 | naitte, r1see, remix, RICIOLI, vLa |
|           10 |     3346 | 2022-09-02 | B4            | L   | 0.114      | -            | -                | -                | -         |    -2.53 | naitte, r1see, remix, RICIOLI, vLa |
|            9 |     3459 | 2022-08-28 | Fluxo         | L   | 0.081      | -            | -                | -                | -         |    -0.88 | naitte, r1see, remix, RICIOLI, vLa |
|            8 |     3487 | 2022-08-27 | ex-Isurus     | W   | 0.075      | 0.384        | 0.013 (0.000)    | -                | -         |     1.51 | naitte, r1see, remix, RICIOLI, vLa |
|            7 |     3535 | 2022-08-27 | WINDINGO      | W   | 0.072      | 0.384        | -                | 0.210 (0.006)    | -         |     0.83 | naitte, r1see, remix, RICIOLI, vLa |
|            6 |     3552 | 2022-08-26 | ex-Isurus     | L   | 0.068      | -            | -                | -                | -         |    -0.77 | naitte, r1see, remix, RICIOLI, vLa |
|            5 |     3558 | 2022-08-26 | Fluxo         | W   | 0.067      | 0.143        | 0.087 (0.001)    | 0.528 (0.005)    | -         |     1.40 | naitte, r1see, remix, RICIOLI, vLa |
|            4 |     3659 | 2022-08-21 | Case          | L   | 0.036      | -            | -                | -                | -         |    -0.68 | naitte, r1see, remix, RICIOLI, vLa |
|            3 |     3665 | 2022-08-21 | Redragon      | W   | 0.035      | -            | -                | -                | -         |     0.13 | naitte, r1see, remix, RICIOLI, vLa |
|            2 |     3772 | 2022-08-16 | paiN          | L   | 0.002      | -            | -                | -                | -         |    -0.01 | naitte, r1see, remix, RICIOLI, vLa |
|            1 |     3782 | 2022-08-16 | Los Grandes   | W   | 0.001      | -            | -                | -                | -         |     0.01 | naitte, r1see, remix, RICIOLI, vLa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,445.53)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.782 | $287.00        | $224.34         |
| 2022-12-02 |      0.719 | $7,500.00      | $5,394.62       |
| 2022-11-19 |      0.635 | $700.00        | $444.26         |
| 2022-10-30 |      0.501 | $800.00        | $400.95         |
| 2022-09-25 |      0.269 | $1,000.00      | $268.81         |
| 2022-09-25 |      0.268 | $1,300.00      | $348.46         |
| 2022-09-09 |      0.160 | $1,000.00      | $160.47         |
| 2022-08-28 |      0.081 | $2,500.00      | $203.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
