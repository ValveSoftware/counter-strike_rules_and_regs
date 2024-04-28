### Roster Details<br />
Team Name: Fluxo<br />
Roster: felps, history, Lucaozy, vsm, WOOD7<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [41](../standings_global.md)<br />
Regional Rank: [8]( ../standings_americas.md)<br />
Final Rank Value:  970.1<br />
<br />
Final Rank Value (970.1) = Starting Rank Value (882.8) + Head To Head Adjustments (87.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.485[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.8
- 400 + ( ( 0.236 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 882.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |        2 | 2023-02-12 | FUSION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.89 | felps, history, Lucaozy, vsm, WOOD7 |
|           52 |       21 | 2023-02-11 | Furious       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.59 | felps, history, Lucaozy, vsm, WOOD7 |
|           51 |      159 | 2023-02-04 | Corinthians   | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.430 (0.165)    | 0 (0.000) |    10.54 | felps, history, Lucaozy, vsm, WOOD7 |
|           50 |      160 | 2023-02-04 | O PLANO       | W   | 1.000      | 0.384        | 0.005 (0.002)    | 0.289 (0.111)    | 0 (0.000) |     8.50 | felps, history, Lucaozy, vsm, WOOD7 |
|           49 |      184 | 2023-02-03 | INTZ          | W   | 1.000      | 0.384        | 0.010 (0.004)    | 0.304 (0.117)    | 0 (0.000) |     8.46 | felps, history, Lucaozy, vsm, WOOD7 |
|           48 |      202 | 2023-02-02 | Boca Juniors  | W   | 1.000      | 0.384        | -                | 0.200 (0.077)    | 0 (0.000) |     6.67 | felps, history, Lucaozy, vsm, WOOD7 |
|           47 |      370 | 2023-01-27 | Flamengo      | L   | 1.000      | -            | -                | -                | -         |   -23.64 | felps, history, Lucaozy, vsm, WOOD7 |
|           46 |      374 | 2023-01-27 | FUSION        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.25 | felps, history, Lucaozy, vsm, WOOD7 |
|           45 |      397 | 2023-01-26 | NO ORG        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.91 | felps, history, Lucaozy, vsm, WOOD7 |
|           44 |      631 | 2023-01-17 | Flamengo      | L   | 1.000      | -            | -                | -                | -         |   -25.24 | felps, Lucaozy, lux, vsm, WOOD7     |
|           43 |      638 | 2023-01-17 | Furious       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.09 | felps, history, Lucaozy, vsm, WOOD7 |
|           42 |     1002 | 2022-12-09 | 9z            | L   | 0.768      | -            | -                | -                | -         |   -13.68 | felps, Lucaozy, lux, vsm, WOOD7     |
|           41 |     1053 | 2022-12-07 | Sharks        | W   | 0.756      | 0.384        | 0.017 (0.005)    | 0.439 (0.127)    | -         |     7.47 | felps, Lucaozy, lux, vsm, WOOD7     |
|           40 |     1059 | 2022-12-07 | FUSION        | W   | 0.754      | 0.384        | -                | 0.214 (0.062)    | -         |     5.70 | felps, Lucaozy, lux, vsm, WOOD7     |
|           39 |     1096 | 2022-12-06 | ex-Isurus     | W   | 0.749      | 0.384        | 0.013 (0.004)    | 0.171 (0.049)    | -         |     9.24 | felps, Lucaozy, lux, vsm, WOOD7     |
|           38 |     1147 | 2022-12-05 | Paquetá       | W   | 0.739      | 0.384        | -                | 0.457 (0.130)    | -         |     5.69 | felps, Lucaozy, lux, vsm, WOOD7     |
|           37 |     1480 | 2022-11-24 | G2            | L   | 0.666      | -            | -                | -                | -         |    -0.08 | felps, Lucaozy, lux, vsm, WOOD7     |
|           36 |     1497 | 2022-11-23 | Natus Vincere | L   | 0.660      | -            | -                | -                | -         |    -0.36 | felps, Lucaozy, lux, vsm, WOOD7     |
|           35 |     1924 | 2022-10-23 | MIBR          | W   | 0.455      | 0.461        | 0.089 (0.019)    | 0.586 (0.123)    | -         |     7.95 | felps, Lucaozy, lux, vsm, WOOD7     |
|           34 |     1949 | 2022-10-22 | 00NATION      | W   | 0.447      | 0.461        | 0.020 (0.004)    | -                | -         |     5.95 | felps, Lucaozy, lux, vsm, WOOD7     |
|           33 |     1979 | 2022-10-21 | Evil Geniuses | W   | 0.441      | 0.461        | 0.062 (0.013)    | -                | -         |     9.64 | felps, Lucaozy, lux, vsm, WOOD7     |
|           32 |     2155 | 2022-10-15 | Outsiders     | L   | 0.398      | -            | -                | -                | -         |    -0.25 | felps, Lucaozy, lux, vsm, WOOD7     |
|           31 |     2167 | 2022-10-14 | TeamOne       | W   | 0.394      | 0.500        | 0.028 (0.006)    | 0.445 (0.088)    | 1 (0.394) |     6.05 | felps, Lucaozy, lux, vsm, WOOD7     |
|           30 |     2197 | 2022-10-14 | Outsiders     | L   | 0.391      | -            | -                | -                | -         |    -0.23 | felps, Lucaozy, lux, vsm, WOOD7     |
|           29 |     2603 | 2022-09-25 | Paquetá       | W   | 0.269      | -            | -                | -                | -         |     2.30 | felps, Lucaozy, lux, vsm, WOOD7     |
|           28 |     2608 | 2022-09-25 | ODDIK         | W   | 0.268      | -            | -                | -                | -         |     2.64 | felps, Lucaozy, lux, vsm, WOOD7     |
|           27 |     2618 | 2022-09-25 | ex-Isurus     | W   | 0.267      | -            | -                | -                | -         |     3.66 | felps, Lucaozy, lux, vsm, WOOD7     |
|           26 |     2652 | 2022-09-24 | Flamengo      | W   | 0.260      | -            | -                | -                | -         |     1.86 | felps, Lucaozy, lux, vsm, WOOD7     |
|           25 |     2772 | 2022-09-21 | ODDIK         | W   | 0.241      | -            | -                | -                | -         |     2.46 | felps, Lucaozy, lux, vsm, WOOD7     |
|           24 |     2776 | 2022-09-21 | Corinthians   | W   | 0.241      | -            | -                | -                | -         |     2.44 | felps, Lucaozy, lux, vsm, WOOD7     |
|           23 |     2849 | 2022-09-18 | 9z            | W   | 0.221      | -            | -                | -                | -         |     3.52 | felps, Lucaozy, lux, vsm, WOOD7     |
|           22 |     2876 | 2022-09-17 | ODDIK         | W   | 0.214      | -            | -                | -                | -         |     2.24 | felps, Lucaozy, lux, vsm, WOOD7     |
|           21 |     2909 | 2022-09-16 | Mad Kings     | W   | 0.207      | -            | -                | -                | -         |     0.83 | felps, Lucaozy, lux, vsm, WOOD7     |
|           20 |     2932 | 2022-09-15 | Paquetá       | W   | 0.202      | -            | -                | -                | -         |     1.79 | felps, Lucaozy, lux, vsm, WOOD7     |
|           19 |     2940 | 2022-09-15 | 9z            | L   | 0.201      | -            | -                | -                | -         |    -3.14 | felps, Lucaozy, lux, vsm, WOOD7     |
|           18 |     2950 | 2022-09-15 | WINDINGO      | W   | 0.200      | -            | -                | -                | -         |     1.42 | felps, Lucaozy, lux, vsm, WOOD7     |
|           17 |     2978 | 2022-09-14 | Paquetá       | W   | 0.195      | -            | -                | -                | -         |     1.73 | felps, Lucaozy, lux, vsm, WOOD7     |
|           16 |     2987 | 2022-09-14 | O PLANO       | W   | 0.194      | -            | -                | -                | -         |     0.79 | felps, Lucaozy, lux, vsm, WOOD7     |
|           15 |     3159 | 2022-09-09 | Sharks        | W   | 0.161      | -            | -                | -                | -         |     1.79 | felps, Lucaozy, lux, vsm, WOOD7     |
|           14 |     3188 | 2022-09-08 | O PLANO       | W   | 0.155      | -            | -                | -                | -         |     0.61 | felps, Lucaozy, lux, vsm, WOOD7     |
|           13 |     3190 | 2022-09-08 | Fuscão 1500   | W   | 0.155      | -            | -                | -                | -         |     1.75 | felps, Lucaozy, lux, vsm, WOOD7     |
|           12 |     3195 | 2022-09-08 | SWS           | W   | 0.155      | -            | -                | -                | -         |     1.06 | felps, Lucaozy, lux, vsm, WOOD7     |
|           11 |     3456 | 2022-08-28 | paiN          | W   | 0.081      | 0.384        | 0.101 (0.003)    | -                | -         |     1.93 | felps, Lucaozy, lux, vsm, WOOD7     |
|           10 |     3459 | 2022-08-28 | ODDIK         | W   | 0.081      | -            | -                | -                | -         |     0.88 | felps, Lucaozy, lux, vsm, WOOD7     |
|            9 |     3558 | 2022-08-26 | ODDIK         | L   | 0.067      | -            | -                | -                | -         |    -1.40 | felps, Lucaozy, lux, vsm, WOOD7     |
|            8 |     3574 | 2022-08-25 | Fuscão 1500   | W   | 0.060      | -            | -                | -                | -         |     0.70 | felps, Lucaozy, lux, vsm, WOOD7     |
|            7 |     3638 | 2022-08-22 | O PLANO       | L   | 0.041      | -            | -                | -                | -         |    -1.14 | felps, Lucaozy, lux, vsm, WOOD7     |
|            6 |     3656 | 2022-08-21 | ARCTIC        | W   | 0.036      | -            | -                | -                | -         |     0.55 | felps, Lucaozy, lux, vsm, WOOD7     |
|            5 |     3660 | 2022-08-21 | Boca Juniors  | W   | 0.035      | -            | -                | -                | -         |     0.18 | felps, Lucaozy, lux, vsm, WOOD7     |
|            4 |     3752 | 2022-08-17 | 00NATION      | L   | 0.010      | -            | -                | -                | -         |    -0.17 | felps, Lucaozy, lux, vsm, WOOD7     |
|            3 |     3755 | 2022-08-17 | MIBR          | L   | 0.008      | -            | -                | -                | -         |    -0.10 | felps, Lucaozy, lux, vsm, WOOD7     |
|            2 |     3774 | 2022-08-16 | Paquetá       | W   | 0.002      | -            | -                | -                | -         |     0.01 | felps, Lucaozy, lux, vsm, WOOD7     |
|            1 |     3785 | 2022-08-16 | Furious       | W   | 0.001      | -            | -                | -                | -         |     0.01 | felps, Lucaozy, lux, vsm, WOOD7     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,015.44)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-04 |      1.000 | $11,000.00     | $11,000.00      |
| 2022-12-07 |      0.756 | $11,000.00     | $8,313.25       |
| 2022-11-27 |      0.687 | $10,000.00     | $6,869.37       |
| 2022-10-23 |      0.455 | $20,000.00     | $9,091.41       |
| 2022-10-16 |      0.406 | $3,000.00      | $1,218.40       |
| 2022-09-25 |      0.269 | $11,000.00     | $2,956.96       |
| 2022-09-25 |      0.268 | $2,500.00      | $670.12         |
| 2022-08-28 |      0.081 | $11,000.00     | $895.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
