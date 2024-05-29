### Roster Details<br />
Team Name: ECLOT<br />
Roster: Blytz, Dytor, forsyy, kreaz, nbqq<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  971.5<br />
<br />
Final Rank Value (971.5) = Starting Rank Value (1045.2) + Head To Head Adjustments (-73.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.482[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.230[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.2
- 400 + ( ( 0.332 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1045.2


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
|           43 |       79 | 2024-05-26 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -20.98 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           42 |      169 | 2024-05-22 | Preasy          | L   | 1.000      | -            | -                | -                | -         |   -25.25 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           41 |      508 | 2024-05-13 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |   -18.58 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           40 |      578 | 2024-05-10 | Verdant         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           39 |      771 | 2024-04-30 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -16.32 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           38 |      799 | 2024-04-29 | 1WIN            | W   | 0.998      | 0.500        | 0.043 (0.022)    | 0.666 (0.333)    | 0 (0.000) |    12.13 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           37 |      835 | 2024-04-27 | MOUZ NXT        | L   | 0.986      | -            | -                | -                | -         |   -17.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           36 |      904 | 2024-04-25 | Sampi           | W   | 0.971      | 0.371        | 0.038 (0.014)    | 0.794 (0.286)    | 0 (0.000) |    11.78 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           35 |      943 | 2024-04-23 | Sampi           | W   | 0.957      | 0.371        | 0.038 (0.013)    | 0.794 (0.282)    | 0 (0.000) |    11.99 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           34 |      975 | 2024-04-21 | MOUZ NXT        | W   | 0.944      | 0.371        | 0.157 (0.055)    | 1.000 (0.350)    | 0 (0.000) |    15.65 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           33 |     1059 | 2024-04-19 | SINNERS         | W   | 0.930      | 0.371        | -                | 0.728 (0.251)    | 0 (0.000) |    15.82 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           32 |     1137 | 2024-04-17 | Alliance        | W   | 0.917      | 0.371        | -                | 0.617 (0.210)    | 0 (0.000) |     8.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           31 |     1193 | 2024-04-15 | Astralis Talent | W   | 0.903      | -            | -                | -                | -         |     7.10 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           30 |     1363 | 2024-04-09 | ALTERNATE aTTaX | L   | 0.864      | -            | -                | -                | -         |   -17.81 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           29 |     1451 | 2024-04-05 | UNiTY           | L   | 0.837      | -            | -                | -                | -         |   -19.83 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           28 |     1499 | 2024-04-04 | PGE Turow       | W   | 0.830      | -            | -                | -                | -         |     3.54 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           27 |     1540 | 2024-04-03 | Permitta        | W   | 0.824      | 0.333        | 0.025 (0.007)    | 1.000 (0.275)    | -         |     9.77 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           26 |     1822 | 2024-03-17 | SINNERS         | W   | 0.713      | -            | -                | -                | 1 (0.713) |     9.75 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           25 |     1844 | 2024-03-16 | UNiTY           | W   | 0.706      | 0.345        | 0.021 (0.005)    | -                | 1 (0.706) |     6.08 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           24 |     1865 | 2024-03-15 | Sampi           | W   | 0.699      | 0.345        | 0.038 (0.009)    | 0.794 (0.191)    | 1 (0.699) |     9.64 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           23 |     1870 | 2024-03-15 | Sashi           | L   | 0.697      | -            | -                | -                | -         |   -11.63 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           22 |     1935 | 2024-03-13 | Permitta        | L   | 0.685      | -            | -                | -                | -         |   -12.57 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           21 |     1949 | 2024-03-13 | Permitta        | L   | 0.683      | -            | -                | -                | -         |   -13.30 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           20 |     1993 | 2024-03-11 | Entropiq        | L   | 0.670      | -            | -                | -                | -         |   -18.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           19 |     2011 | 2024-03-10 | Zero Tenacity   | L   | 0.664      | -            | -                | -                | -         |   -10.92 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           18 |     2154 | 2024-03-05 | 9INE            | W   | 0.631      | -            | -                | -                | -         |     1.02 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           17 |     2198 | 2024-03-03 | Metizport       | W   | 0.618      | 0.143        | 0.088 (0.008)    | -                | -         |     8.42 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           16 |     2239 | 2024-03-01 | Viperio         | W   | 0.603      | -            | -                | -                | -         |     1.01 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           15 |     2266 | 2024-02-28 | Permitta        | W   | 0.590      | 0.333        | -                | 1.000 (0.197)    | -         |     6.39 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           14 |     2285 | 2024-02-27 | MOUZ NXT        | W   | 0.584      | 0.333        | 0.157 (0.031)    | 1.000 (0.195)    | -         |    10.05 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           13 |     2286 | 2024-02-27 | ex-sYnck        | W   | 0.584      | -            | -                | -                | -         |     1.67 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           12 |     2304 | 2024-02-26 | PGE Turow       | W   | 0.577      | -            | -                | -                | -         |     2.41 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           11 |     2326 | 2024-02-25 | Sampi           | W   | 0.570      | 0.333        | 0.038 (0.007)    | -                | -         |     6.93 | Blytz, Dytor, forsyy, kreaz, nbqq |
|           10 |     2361 | 2024-02-24 | Permitta        | L   | 0.564      | -            | -                | -                | -         |   -11.55 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            9 |     2388 | 2024-02-22 | BIG Academy     | W   | 0.551      | -            | -                | -                | -         |     1.69 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            8 |     2422 | 2024-02-21 | Permitta        | W   | 0.544      | -            | -                | -                | -         |     6.00 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            7 |     2442 | 2024-02-20 | NAVI Junior     | W   | 0.538      | -            | -                | -                | -         |     2.52 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            6 |     2469 | 2024-02-19 | Permitta        | L   | 0.531      | -            | -                | -                | -         |   -11.09 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            5 |     2875 | 2024-01-30 | ex-Sprout       | L   | 0.399      | -            | -                | -                | -         |   -11.68 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            4 |     3305 | 2024-01-16 | Zero Tenacity   | L   | 0.304      | -            | -                | -                | -         |    -4.72 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            3 |     3358 | 2024-01-14 | Permitta        | L   | 0.291      | -            | -                | -                | -         |    -6.36 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            2 |     3535 | 2024-01-09 | Sashi           | L   | 0.259      | -            | -                | -                | -         |    -4.20 | Blytz, Dytor, forsyy, kreaz, nbqq |
|            1 |     3555 | 2024-01-09 | Rhyno           | W   | 0.258      | -            | -                | -                | -         |     2.49 | Blytz, Dytor, forsyy, kreaz, nbqq |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,266.25)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-04-25 |      0.971 | $11,000.00     | $10,676.45      |
| 2024-04-06 |      0.843 | $1,500.00      | $1,265.06       |
| 2024-03-17 |      0.713 | $7,675.00      | $5,470.18       |
| 2024-02-28 |      0.590 | $5,000.00      | $2,952.27       |
| 2024-02-21 |      0.544 | $3,500.00      | $1,902.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
