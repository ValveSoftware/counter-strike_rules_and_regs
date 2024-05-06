### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1063.8<br />
<br />
Final Rank Value (1063.8) = Starting Rank Value (1123.9) + Head To Head Adjustments (-60.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.402[<sup>2</sup>](#table1)
- Opponent Network: 0.276[<sup>2</sup>](#table1)
- LAN Wins: 0.289[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1123.9
- 400 + ( ( 0.380 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1123.9


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
|           39 |      120 | 2024-04-30 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -17.22 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |      148 | 2024-04-29 | 1WIN            | W   | 1.000      | 0.500        | -                | 0.480 (0.240)    | 0 (0.000) |     4.65 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |      184 | 2024-04-27 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -18.45 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |      253 | 2024-04-25 | Sampi           | W   | 1.000      | 0.371        | 0.101 (0.038)    | 0.731 (0.271)    | 0 (0.000) |    12.21 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |      292 | 2024-04-23 | Sampi           | W   | 1.000      | 0.371        | 0.101 (0.038)    | 0.731 (0.271)    | 0 (0.000) |    12.64 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |      324 | 2024-04-21 | MOUZ NXT        | W   | 1.000      | 0.371        | 0.210 (0.078)    | 1.000 (0.371)    | 0 (0.000) |    15.37 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |      408 | 2024-04-19 | SINNERS         | W   | 1.000      | 0.371        | -                | 0.749 (0.277)    | 0 (0.000) |    17.58 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |      486 | 2024-04-17 | Alliance        | W   | 1.000      | 0.371        | -                | 0.815 (0.302)    | 0 (0.000) |     8.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |      542 | 2024-04-15 | Astralis Talent | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.50 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |      712 | 2024-04-09 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -21.51 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |      800 | 2024-04-05 | UNiTY           | L   | 0.991      | -            | -                | -                | -         |   -23.93 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |      848 | 2024-04-04 | PGE Turow       | W   | 0.984      | -            | -                | -                | -         |     3.84 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |      889 | 2024-04-03 | Permitta        | W   | 0.978      | 0.333        | 0.053 (0.017)    | 0.979 (0.319)    | -         |    11.12 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     1171 | 2024-03-17 | SINNERS         | W   | 0.867      | 0.345        | -                | 0.749 (0.224)    | 1 (0.867) |    12.19 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     1193 | 2024-03-16 | UNiTY           | W   | 0.860      | 0.345        | 0.050 (0.015)    | -                | 1 (0.860) |     6.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     1214 | 2024-03-15 | Sampi           | W   | 0.853      | 0.345        | 0.101 (0.030)    | -                | 1 (0.853) |    12.15 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     1219 | 2024-03-15 | Sashi           | L   | 0.851      | -            | -                | -                | -         |   -15.62 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     1284 | 2024-03-13 | Permitta        | L   | 0.839      | -            | -                | -                | -         |   -15.36 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     1298 | 2024-03-13 | Permitta        | L   | 0.838      | -            | -                | -                | -         |   -16.47 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     1342 | 2024-03-11 | Entropiq        | L   | 0.824      | -            | -                | -                | -         |   -21.97 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     1360 | 2024-03-10 | Zero Tenacity   | L   | 0.819      | -            | -                | -                | -         |   -18.28 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     1503 | 2024-03-05 | 9INE            | W   | 0.785      | -            | -                | -                | -         |     0.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     1547 | 2024-03-03 | Metizport       | W   | 0.772      | 0.143        | 0.183 (0.020)    | -                | -         |     9.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     1588 | 2024-03-01 | Viperio         | W   | 0.757      | -            | -                | -                | -         |     0.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     1615 | 2024-02-28 | Permitta        | W   | 0.745      | 0.333        | 0.053 (0.013)    | 0.979 (0.243)    | -         |     7.62 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     1634 | 2024-02-27 | MOUZ NXT        | W   | 0.739      | 0.333        | 0.210 (0.052)    | 1.000 (0.246)    | -         |    11.11 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     1635 | 2024-02-27 | ex-sYnck        | W   | 0.738      | -            | -                | -                | -         |     2.75 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     1653 | 2024-02-26 | PGE Turow       | W   | 0.731      | -            | -                | -                | -         |     2.68 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     1675 | 2024-02-25 | Sampi           | W   | 0.724      | 0.333        | 0.101 (0.024)    | -                | -         |     9.27 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     1710 | 2024-02-24 | Permitta        | L   | 0.718      | -            | -                | -                | -         |   -15.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     1737 | 2024-02-22 | BIG Academy     | W   | 0.705      | -            | -                | -                | -         |     2.29 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     1771 | 2024-02-21 | Permitta        | W   | 0.698      | -            | -                | -                | -         |     7.23 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     1791 | 2024-02-20 | NAVI Junior     | W   | 0.692      | -            | -                | -                | -         |     2.87 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     1818 | 2024-02-19 | Permitta        | L   | 0.685      | -            | -                | -                | -         |   -14.78 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     2224 | 2024-01-30 | ex-Sprout       | L   | 0.553      | -            | -                | -                | -         |   -16.35 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     2654 | 2024-01-16 | Zero Tenacity   | L   | 0.458      | -            | -                | -                | -         |   -10.65 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     2707 | 2024-01-14 | Permitta        | L   | 0.445      | -            | -                | -                | -         |   -10.21 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     2884 | 2024-01-09 | Sashi           | L   | 0.413      | -            | -                | -                | -         |    -7.95 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     2904 | 2024-01-09 | Rhyno           | W   | 0.413      | -            | -                | -                | -         |     1.35 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,313.39)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-25 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-04-06 |      0.997 | $1,500.00      | $1,496.20       |
| 2024-03-17 |      0.867 | $7,675.00      | $6,652.84       |
| 2024-02-28 |      0.745 | $5,000.00      | $3,722.74       |
| 2024-02-21 |      0.698 | $3,500.00      | $2,441.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
