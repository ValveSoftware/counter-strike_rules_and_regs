### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1017.6<br />
<br />
Final Rank Value (1017.6) = Starting Rank Value (1086.7) + Head To Head Adjustments (-69.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.274[<sup>2</sup>](#table1)
- LAN Wins: 0.307[<sup>2</sup>](#table1)

The average of these factors is 0.356<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1086.7
- 400 + ( ( 0.356 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1086.7


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
|           34 |       28 | 2024-04-21 | MOUZ NXT        | W   | 1.000      | 0.371        | 0.054 (0.020)    | 0.970 (0.360)    | 0 (0.000) |    12.61 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |      112 | 2024-04-19 | SINNERS         | W   | 1.000      | 0.371        | 0.043 (0.016)    | 0.779 (0.289)    | 0 (0.000) |    18.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |      190 | 2024-04-17 | Alliance        | W   | 1.000      | 0.371        | -                | 0.855 (0.317)    | 0 (0.000) |     8.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |      246 | 2024-04-15 | Astralis Talent | W   | 1.000      | 0.371        | 0.028 (0.010)    | -                | 0 (0.000) |     8.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |      416 | 2024-04-09 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -22.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |      504 | 2024-04-05 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |   -22.11 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |      552 | 2024-04-04 | PGE Turow       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.86 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |      593 | 2024-04-03 | Permitta        | W   | 1.000      | 0.333        | 0.031 (0.010)    | 0.970 (0.323)    | 0 (0.000) |    11.03 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |      875 | 2024-03-17 | SINNERS         | W   | 0.960      | 0.345        | 0.043 (0.014)    | 0.779 (0.258)    | 1 (0.960) |    14.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |      897 | 2024-03-16 | UNiTY           | W   | 0.953      | 0.345        | 0.047 (0.016)    | -                | 1 (0.953) |    10.35 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |      918 | 2024-03-15 | Sampi           | W   | 0.946      | 0.345        | 0.084 (0.027)    | 0.698 (0.228)    | 1 (0.946) |    13.80 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |      923 | 2024-03-15 | Sashi           | L   | 0.944      | -            | -                | -                | -         |   -19.07 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |      988 | 2024-03-13 | Permitta        | L   | 0.932      | -            | -                | -                | -         |   -17.00 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     1002 | 2024-03-13 | Permitta        | L   | 0.931      | -            | -                | -                | -         |   -18.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     1046 | 2024-03-11 | Entropiq        | L   | 0.917      | -            | -                | -                | -         |   -23.66 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     1064 | 2024-03-10 | Zero Tenacity   | L   | 0.912      | -            | -                | -                | -         |   -22.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     1207 | 2024-03-05 | 9INE            | W   | 0.878      | -            | -                | -                | 0 (0.000) |     1.39 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     1251 | 2024-03-03 | Metizport       | W   | 0.866      | 0.143        | 0.136 (0.017)    | -                | -         |    11.71 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     1292 | 2024-03-01 | Viperio         | W   | 0.851      | -            | -                | -                | -         |     1.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     1319 | 2024-02-28 | Permitta        | W   | 0.838      | 0.333        | -                | 0.970 (0.271)    | -         |     8.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     1338 | 2024-02-27 | MOUZ NXT        | W   | 0.832      | 0.333        | 0.054 (0.015)    | 0.970 (0.269)    | -         |     9.65 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     1339 | 2024-02-27 | ex-sYnck        | W   | 0.831      | -            | -                | -                | -         |     4.40 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     1357 | 2024-02-26 | PGE Turow       | W   | 0.824      | -            | -                | -                | -         |     3.79 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     1379 | 2024-02-25 | Sampi           | W   | 0.818      | 0.333        | 0.084 (0.023)    | 0.698 (0.190)    | -         |    10.86 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     1414 | 2024-02-24 | Permitta        | L   | 0.812      | -            | -                | -                | -         |   -17.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     1441 | 2024-02-22 | BIG Academy     | W   | 0.798      | -            | -                | -                | -         |     0.72 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     1475 | 2024-02-21 | Permitta        | W   | 0.791      | 0.303        | -                | 0.970 (0.232)    | -         |     7.49 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     1495 | 2024-02-20 | NAVI Junior     | W   | 0.785      | -            | -                | -                | -         |     3.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     1522 | 2024-02-19 | Permitta        | L   | 0.778      | -            | -                | -                | -         |   -17.48 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     1928 | 2024-01-30 | ex-Sprout       | L   | 0.646      | -            | -                | -                | -         |   -18.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     2358 | 2024-01-16 | Zero Tenacity   | L   | 0.551      | -            | -                | -                | -         |   -14.51 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     2411 | 2024-01-14 | Permitta        | L   | 0.538      | -            | -                | -                | -         |   -13.02 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     2588 | 2024-01-09 | Sashi           | L   | 0.506      | -            | -                | -                | -         |   -11.85 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     2608 | 2024-01-09 | Rhyno           | W   | 0.506      | -            | -                | -                | -         |     2.38 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,826.41)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-03-17 |      0.960 | $7,675.00      | $7,368.97       |
| 2024-02-28 |      0.838 | $5,000.00      | $4,189.27       |
| 2024-02-21 |      0.791 | $3,500.00      | $2,768.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
