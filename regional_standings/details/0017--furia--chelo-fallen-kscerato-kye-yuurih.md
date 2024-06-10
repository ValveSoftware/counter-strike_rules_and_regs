### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1493.1<br />
<br />
Final Rank Value (1493.1) = Starting Rank Value (1663.9) + Head To Head Adjustments (-170.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.624[<sup>1</sup>](#table2)
- Bounty Collected: 0.574[<sup>2</sup>](#table1)
- Opponent Network: 0.398[<sup>2</sup>](#table1)
- LAN Wins: 0.941[<sup>2</sup>](#table1)

The average of these factors is 0.634<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1663.9
- 400 + ( ( 0.634 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1663.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      112 | 2024-06-08 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -14.87 | chelo, FalleN, KSCERATO, kye, yuurih |
|           41 |      235 | 2024-06-06 | Complexity         | W   | 1.000      | 0.715        | 0.271 (0.194)    | 0.351 (0.251)    | 1 (1.000) |    21.27 | chelo, FalleN, KSCERATO, kye, yuurih |
|           40 |      247 | 2024-06-06 | fnatic             | W   | 1.000      | 0.715        | 0.198 (0.142)    | 0.650 (0.465)    | 1 (1.000) |     8.70 | chelo, FalleN, KSCERATO, kye, yuurih |
|           39 |      267 | 2024-06-06 | Eternal Fire       | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.560 (0.401)    | 1 (1.000) |    26.00 | chelo, FalleN, KSCERATO, kye, yuurih |
|           38 |      300 | 2024-06-05 | BetBoom            | W   | 1.000      | 0.715        | 0.427 (0.305)    | 0.917 (0.656)    | 1 (1.000) |    15.84 | chelo, FalleN, KSCERATO, kye, yuurih |
|           37 |      314 | 2024-06-05 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -15.48 | chelo, FalleN, KSCERATO, kye, yuurih |
|           36 |      393 | 2024-06-02 | GUN5               | L   | 1.000      | -            | -                | -                | -         |   -29.33 | chelo, FalleN, KSCERATO, kye, yuurih |
|           35 |      399 | 2024-06-02 | MOUZ NXT           | W   | 1.000      | 0.435        | 0.164 (0.071)    | 1.000 (0.435)    | -         |     4.09 | chelo, FalleN, KSCERATO, kye, yuurih |
|           34 |      438 | 2024-06-01 | Zero Tenacity      | W   | 1.000      | 0.435        | 0.154 (0.067)    | 1.000 (0.435)    | -         |     3.92 | chelo, FalleN, KSCERATO, kye, yuurih |
|           33 |      489 | 2024-05-30 | RUBY               | W   | 1.000      | 0.435        | -                | 0.555 (0.241)    | -         |     1.51 | chelo, FalleN, KSCERATO, kye, yuurih |
|           32 |      593 | 2024-05-25 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -28.12 | chelo, FalleN, KSCERATO, kye, yuurih |
|           31 |      609 | 2024-05-24 | Passion UA         | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.905 (0.393)    | -         |     2.04 | chelo, FalleN, KSCERATO, kye, yuurih |
|           30 |     1172 | 2024-05-05 | Monte              | L   | 0.960      | -            | -                | -                | -         |   -24.43 | chelo, FalleN, KSCERATO, kye, yuurih |
|           29 |     1191 | 2024-05-04 | ENCE               | W   | 0.953      | 0.889        | 0.205 (0.174)    | 0.407 (0.344)    | 1 (0.953) |     8.41 | chelo, FalleN, KSCERATO, kye, yuurih |
|           28 |     1208 | 2024-05-03 | Bad News Kangaroos | W   | 0.946      | -            | -                | -                | 1 (0.946) |     0.88 | chelo, FalleN, KSCERATO, kye, yuurih |
|           27 |     1251 | 2024-05-01 | FORZE              | L   | 0.933      | -            | -                | -                | -         |   -27.14 | chelo, FalleN, KSCERATO, kye, yuurih |
|           26 |     1272 | 2024-04-30 | Liquid             | L   | 0.927      | -            | -                | -                | -         |   -10.80 | chelo, FalleN, KSCERATO, kye, yuurih |
|           25 |     1521 | 2024-04-19 | MIBR               | L   | 0.855      | -            | -                | -                | -         |   -12.22 | chelo, FalleN, KSCERATO, kye, yuurih |
|           24 |     1541 | 2024-04-19 | Metizport          | W   | 0.853      | 0.589        | 0.078 (0.039)    | 0.706 (0.354)    | 1 (0.853) |     1.48 | chelo, FalleN, KSCERATO, kye, yuurih |
|           23 |     1576 | 2024-04-18 | 9z                 | L   | 0.847      | -            | -                | -                | -         |   -21.10 | chelo, FalleN, KSCERATO, kye, yuurih |
|           22 |     1862 | 2024-04-09 | HEROIC             | L   | 0.785      | -            | -                | -                | -         |    -7.64 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     1885 | 2024-04-08 | MOUZ               | L   | 0.779      | -            | -                | -                | -         |    -2.41 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     1904 | 2024-04-07 | Lynn Vision        | W   | 0.776      | 0.624        | 0.129 (0.063)    | -                | 1 (0.776) |     2.53 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     2223 | 2024-03-22 | Gaimin Gladiators  | L   | 0.667      | -            | -                | -                | -         |   -18.25 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     2242 | 2024-03-21 | FaZe               | L   | 0.660      | -            | -                | -                | -         |    -2.55 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     2253 | 2024-03-21 | G2                 | L   | 0.659      | -            | -                | -                | -         |    -3.17 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2275 | 2024-03-20 | SAW                | W   | 0.653      | -            | -                | -                | 1 (0.653) |     4.09 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2291 | 2024-03-19 | ENCE               | W   | 0.647      | -            | -                | -                | 1 (0.647) |     5.82 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     2299 | 2024-03-18 | KOI                | W   | 0.640      | -            | -                | -                | -         |     0.91 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     2313 | 2024-03-17 | Lynn Vision        | L   | 0.634      | -            | -                | -                | -         |   -18.22 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     2328 | 2024-03-17 | Legacy             | L   | 0.633      | -            | -                | -                | -         |   -19.10 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     2675 | 2024-03-03 | Complexity         | W   | 0.541      | -            | -                | -                | -         |     8.31 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     2710 | 2024-03-02 | Liquid             | W   | 0.533      | -            | -                | -                | -         |     9.22 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     2732 | 2024-03-01 | Nouns              | W   | 0.527      | -            | -                | -                | -         |     0.42 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     2864 | 2024-02-23 | 9z                 | L   | 0.482      | -            | -                | -                | -         |   -12.92 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     2877 | 2024-02-22 | 9z                 | W   | 0.475      | -            | -                | -                | -         |     2.17 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     2885 | 2024-02-22 | Imperial           | W   | 0.474      | -            | -                | -                | -         |     5.39 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3166 | 2024-02-10 | Metizport          | L   | 0.393      | -            | -                | -                | -         |   -12.06 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3168 | 2024-02-10 | ex-Anonymo         | W   | 0.393      | -            | -                | -                | -         |     0.04 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3170 | 2024-02-10 | Metizport          | L   | 0.392      | -            | -                | -                | -         |   -12.06 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3324 | 2024-02-01 | Apeks              | L   | 0.334      | -            | -                | -                | -         |   -10.02 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3347 | 2024-01-31 | The MongolZ        | L   | 0.326      | -            | -                | -                | -         |    -1.95 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,787.36)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $28,000.00     | $28,000.00      |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $12,000.00     | $12,000.00      |
| 2024-04-20 |      0.861 | $5,000.00      | $4,305.65       |
| 2024-04-14 |      0.818 | $5,000.00      | $4,090.31       |
| 2024-03-31 |      0.727 | $20,000.00     | $14,539.36      |
| 2024-02-02 |      0.341 | $2,500.00      | $852.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
