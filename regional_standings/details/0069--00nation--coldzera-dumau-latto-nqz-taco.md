### Roster Details<br />
Team Name: 00NATION<br />
Roster: coldzera, dumau, latto, nqz, TACO<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
Final Rank Value:  896.9<br />
<br />
Final Rank Value (896.9) = Starting Rank Value (853.7) + Head To Head Adjustments (43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 853.7
- 400 + ( ( 0.222 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 853.7


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
|           24 |      562 | 2023-01-20 | Flamengo        | W   | 1.000      | 0.143        | -                | 0.288 (0.041)    | 0 (0.000) |     8.61 | coldzera, dumau, latto, nqz, TACO |
|           23 |      583 | 2023-01-19 | Imperial        | L   | 1.000      | -            | -                | -                | -         |   -15.44 | coldzera, dumau, latto, nqz, TACO |
|           22 |      610 | 2023-01-18 | Flamengo        | W   | 1.000      | 0.143        | -                | 0.288 (0.041)    | 0 (0.000) |     8.67 | coldzera, dumau, latto, nqz, TACO |
|           21 |      936 | 2022-12-11 | ARCTIC          | W   | 0.782      | 0.269        | 0.036 (0.007)    | 0.230 (0.048)    | 0 (0.000) |    12.26 | coldzera, dumau, latto, TACO, try |
|           20 |      974 | 2022-12-10 | Sharks          | W   | 0.775      | 0.269        | 0.017 (0.004)    | 0.439 (0.091)    | 0 (0.000) |    11.05 | coldzera, dumau, latto, TACO, try |
|           19 |      999 | 2022-12-09 | O PLANO         | W   | 0.768      | 0.269        | 0.005 (0.001)    | 0.289 (0.060)    | 0 (0.000) |     6.63 | coldzera, dumau, latto, TACO, try |
|           18 |     1005 | 2022-12-09 | ARCTIC          | L   | 0.768      | -            | -                | -                | -         |   -12.00 | coldzera, dumau, latto, TACO, try |
|           17 |     1006 | 2022-12-09 | O PLANO         | W   | 0.768      | 0.269        | 0.005 (0.001)    | 0.289 (0.060)    | 0 (0.000) |     6.66 | coldzera, dumau, latto, TACO, try |
|           16 |     1207 | 2022-12-03 | paiN            | L   | 0.728      | -            | -                | -                | -         |    -5.35 | coldzera, dumau, latto, TACO, try |
|           15 |     1241 | 2022-12-02 | ARCTIC          | W   | 0.722      | 0.371        | 0.036 (0.010)    | 0.230 (0.061)    | 1 (0.722) |    12.13 | coldzera, dumau, latto, TACO, try |
|           14 |     1753 | 2022-11-01 | IHC             | L   | 0.514      | -            | -                | -                | -         |    -1.40 | coldzera, dumau, latto, TACO, try |
|           13 |     1772 | 2022-10-31 | FURIA           | L   | 0.507      | -            | -                | -                | -         |    -1.60 | coldzera, dumau, latto, TACO, try |
|           12 |     1782 | 2022-10-31 | Bad News Eagles | L   | 0.506      | -            | -                | -                | -         |    -3.05 | coldzera, dumau, latto, TACO, try |
|           11 |     1949 | 2022-10-22 | Fluxo           | L   | 0.447      | -            | -                | -                | -         |    -5.95 | coldzera, dumau, latto, TACO, try |
|           10 |     1975 | 2022-10-21 | VERTEX          | W   | 0.441      | 0.461        | 0.014 (0.003)    | 0.208 (0.042)    | -         |     4.52 | coldzera, dumau, latto, TACO, try |
|            9 |     2343 | 2022-10-07 | Complexity      | W   | 0.346      | 0.143        | 0.129 (0.006)    | 0.487 (0.024)    | 1 (0.346) |    10.34 | coldzera, dumau, latto, TACO, try |
|            8 |     2367 | 2022-10-06 | Imperial        | W   | 0.338      | 0.143        | 0.022 (0.001)    | 0.254 (0.012)    | 1 (0.338) |     5.67 | coldzera, dumau, latto, TACO, try |
|            7 |     2381 | 2022-10-05 | ex-Isurus       | W   | 0.334      | 0.143        | 0.013 (0.001)    | -                | 1 (0.334) |     5.36 | coldzera, dumau, latto, TACO, try |
|            6 |     2400 | 2022-10-05 | 9z              | L   | 0.332      | -            | -                | -                | -         |    -4.67 | coldzera, dumau, latto, TACO, try |
|            5 |     3570 | 2022-08-25 | SWS             | W   | 0.061      | -            | -                | -                | -         |     0.47 | coldzera, dumau, latto, TACO, try |
|            4 |     3752 | 2022-08-17 | Fluxo           | W   | 0.010      | 0.143        | 0.087 (0.000)    | -                | -         |     0.17 | coldzera, dumau, latto, TACO, try |
|            3 |     3756 | 2022-08-17 | paiN            | L   | 0.008      | -            | -                | -                | -         |    -0.05 | coldzera, dumau, latto, TACO, try |
|            2 |     3759 | 2022-08-17 | Meta            | W   | 0.007      | -            | -                | -                | -         |     0.09 | coldzera, dumau, latto, TACO, try |
|            1 |     3778 | 2022-08-16 | Sharks          | W   | 0.001      | -            | -                | -                | -         |     0.01 | coldzera, dumau, latto, TACO, try |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,431.30)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-11 |      0.782 | $850.00        | $664.42         |
| 2022-11-03 |      0.528 | $10,000.00     | $5,276.16       |
| 2022-10-23 |      0.455 | $7,500.00      | $3,409.28       |
| 2022-08-28 |      0.081 | $1,000.00      | $81.45          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
