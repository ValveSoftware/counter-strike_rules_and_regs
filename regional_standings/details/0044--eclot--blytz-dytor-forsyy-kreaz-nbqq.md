### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1136.9<br />
<br />
Final Rank Value (1136.9) = Starting Rank Value (1246.9) + Head To Head Adjustments (-110.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.502[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.520[<sup>2</sup>](#table1)

The average of these factors is 0.425<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1246.9
- 400 + ( ( 0.425 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1246.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       61 | 2024-06-09 | Enterprise      | W   | 1.000      | 0.450        | -                | 0.647 (0.291)    | 0 (0.000) |     6.88 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           49 |      131 | 2024-06-08 | MOUZ NXT        | W   | 1.000      | 0.450        | 0.164 (0.074)    | 1.000 (0.450)    | 0 (0.000) |    16.25 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           48 |      191 | 2024-06-07 | GhoulsW         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.57 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           47 |      219 | 2024-06-06 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -8.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           46 |      391 | 2024-06-02 | UNiTY           | W   | 1.000      | 0.346        | 0.029 (0.010)    | -                | 1 (1.000) |     9.94 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           45 |      424 | 2024-06-01 | UNiTY           | W   | 1.000      | 0.346        | 0.029 (0.010)    | -                | 1 (1.000) |    10.47 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           44 |      454 | 2024-05-31 | Sampi           | W   | 1.000      | 0.346        | 0.036 (0.013)    | 0.883 (0.305)    | 1 (1.000) |     8.85 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           43 |      579 | 2024-05-26 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -23.58 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |      669 | 2024-05-22 | Preasy          | L   | 1.000      | -            | -                | -                | -         |   -27.53 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |     1008 | 2024-05-13 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |   -17.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |     1078 | 2024-05-10 | Verdant         | W   | 0.992      | -            | -                | -                | 0 (0.000) |     4.39 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |     1271 | 2024-04-30 | MOUZ NXT        | L   | 0.927      | -            | -                | -                | -         |   -18.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |     1299 | 2024-04-29 | 1WIN            | W   | 0.919      | 0.500        | 0.042 (0.019)    | 0.672 (0.309)    | -         |     7.74 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |     1335 | 2024-04-27 | MOUZ NXT        | L   | 0.907      | -            | -                | -                | -         |   -18.73 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |     1404 | 2024-04-25 | Sampi           | W   | 0.891      | 0.371        | 0.036 (0.012)    | 0.883 (0.292)    | -         |     7.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |     1443 | 2024-04-23 | Sampi           | W   | 0.878      | 0.371        | 0.036 (0.012)    | 0.883 (0.287)    | -         |     7.61 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |     1475 | 2024-04-21 | MOUZ NXT        | W   | 0.865      | 0.371        | 0.164 (0.052)    | 1.000 (0.320)    | -         |    10.79 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     1559 | 2024-04-19 | SINNERS         | W   | 0.851      | 0.371        | 0.045 (0.014)    | 0.844 (0.266)    | -         |    12.81 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     1637 | 2024-04-17 | Alliance        | W   | 0.838      | -            | -                | -                | -         |     5.34 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     1693 | 2024-04-15 | Astralis Talent | W   | 0.824      | -            | -                | -                | -         |     3.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     1863 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.785      | -            | -                | -                | -         |   -18.65 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     1951 | 2024-04-05 | UNiTY           | L   | 0.758      | -            | -                | -                | -         |   -17.59 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     1999 | 2024-04-04 | PGE Turow       | W   | 0.751      | -            | -                | -                | -         |     1.55 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     2040 | 2024-04-03 | Permitta        | W   | 0.745      | 0.333        | -                | 0.972 (0.241)    | -         |     5.69 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     2322 | 2024-03-17 | SINNERS         | W   | 0.634      | -            | -                | -                | 1 (0.634) |     7.59 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     2344 | 2024-03-16 | UNiTY           | W   | 0.627      | -            | -                | -                | 1 (0.627) |     5.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     2365 | 2024-03-15 | Sampi           | W   | 0.619      | 0.345        | -                | 0.883 (0.189)    | 1 (0.619) |     5.13 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     2370 | 2024-03-15 | Sashi           | L   | 0.618      | -            | -                | -                | -         |   -12.46 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     2435 | 2024-03-13 | Permitta        | L   | 0.605      | -            | -                | -                | -         |   -14.20 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     2449 | 2024-03-13 | Permitta        | L   | 0.604      | -            | -                | -                | -         |   -14.74 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     2493 | 2024-03-11 | Entropiq        | L   | 0.591      | -            | -                | -                | -         |   -17.76 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     2511 | 2024-03-10 | Zero Tenacity   | L   | 0.585      | -            | -                | -                | -         |   -12.60 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     2654 | 2024-03-05 | 9INE            | W   | 0.552      | -            | -                | -                | -         |     0.35 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     2698 | 2024-03-03 | Metizport       | W   | 0.539      | -            | -                | -                | -         |     3.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     2739 | 2024-03-01 | Viperio         | W   | 0.524      | -            | -                | -                | -         |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     2766 | 2024-02-28 | Permitta        | W   | 0.511      | -            | -                | -                | -         |     3.03 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     2785 | 2024-02-27 | MOUZ NXT        | W   | 0.505      | 0.333        | 0.164 (0.028)    | -                | -         |     5.69 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     2786 | 2024-02-27 | ex-sYnck        | W   | 0.505      | -            | -                | -                | -         |     0.33 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     2804 | 2024-02-26 | PGE Turow       | W   | 0.498      | -            | -                | -                | -         |     0.83 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     2826 | 2024-02-25 | Sampi           | W   | 0.491      | -            | -                | -                | -         |     2.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     2861 | 2024-02-24 | Permitta        | L   | 0.485      | -            | -                | -                | -         |   -12.51 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     2888 | 2024-02-22 | BIG Academy     | W   | 0.472      | -            | -                | -                | -         |     0.27 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     2922 | 2024-02-21 | Permitta        | W   | 0.464      | -            | -                | -                | -         |     2.59 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     2942 | 2024-02-20 | NAVI Junior     | W   | 0.459      | -            | -                | -                | -         |     0.81 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     2969 | 2024-02-19 | Permitta        | L   | 0.452      | -            | -                | -                | -         |   -11.90 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     3375 | 2024-01-30 | ex-Sprout       | L   | 0.320      | -            | -                | -                | -         |    -9.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     3805 | 2024-01-16 | Zero Tenacity   | L   | 0.224      | -            | -                | -                | -         |    -4.89 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     3858 | 2024-01-14 | Permitta        | L   | 0.212      | -            | -                | -                | -         |    -5.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     4035 | 2024-01-09 | Sashi           | L   | 0.180      | -            | -                | -                | -         |    -3.64 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     4055 | 2024-01-09 | Rhyno           | W   | 0.179      | -            | -                | -                | -         |     0.90 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,832.98)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $7,837.00      | $7,837.00       |
| 2024-05-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-04-25 |      0.891 | $11,000.00     | $9,805.55       |
| 2024-04-06 |      0.764 | $1,500.00      | $1,146.30       |
| 2024-03-17 |      0.634 | $7,675.00      | $4,862.53       |
| 2024-02-28 |      0.511 | $5,000.00      | $2,556.41       |
| 2024-02-21 |      0.464 | $3,500.00      | $1,625.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
