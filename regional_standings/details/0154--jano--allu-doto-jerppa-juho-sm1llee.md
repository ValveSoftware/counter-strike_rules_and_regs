### Roster Details<br />
Team Name: JANO<br />
Roster: allu, doto, Jerppa, juho, Sm1llee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  683.2<br />
<br />
Final Rank Value (683.2) = Starting Rank Value (701.8) + Head To Head Adjustments (-18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.8
- 400 + ( ( 0.158 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 701.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      187 | 2024-04-27 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -1.67 | allu, doto, Jerppa, juho, Sm1llee |
|           20 |      360 | 2024-04-20 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -7.34 | allu, doto, Jerppa, juho, Sm1llee |
|           19 |      393 | 2024-04-19 | NOM               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.080 (0.011)    | 0 (0.000) |    10.91 | allu, doto, Jerppa, juho, Sm1llee |
|           18 |      493 | 2024-04-17 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -9.69 | allu, doto, Jerppa, juho, Sm1llee |
|           17 |      502 | 2024-04-17 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -3.77 | allu, doto, Jerppa, juho, Sm1llee |
|           16 |      583 | 2024-04-12 | Zero Tenacity     | W   | 1.000      | 0.371        | 0.093 (0.035)    | 0.936 (0.347)    | 0 (0.000) |    23.66 | allu, doto, Jerppa, juho, Sm1llee |
|           15 |      747 | 2024-04-08 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -5.84 | allu, doto, Jerppa, juho, Sm1llee |
|           14 |      782 | 2024-04-06 | Johnny Speeds     | L   | 0.999      | -            | -                | -                | -         |   -10.59 | allu, doto, Jerppa, juho, Sm1llee |
|           13 |      847 | 2024-04-04 | Gaimin Gladiators | L   | 0.984      | -            | -                | -                | -         |    -0.87 | allu, doto, Jerppa, juho, Sm1llee |
|           12 |     1315 | 2024-03-12 | ECF               | L   | 0.832      | -            | -                | -                | -         |   -14.93 | allu, doto, Jelo, Jerppa, Sm1llee |
|           11 |     1405 | 2024-03-08 | INGLORIOUS        | W   | 0.804      | 0.143        | 0.000 (0.000)    | 0.073 (0.008)    | 0 (0.000) |     9.17 | allu, doto, Jelo, Jerppa, Sm1llee |
|           10 |     1515 | 2024-03-04 | Endpoint          | L   | 0.779      | -            | -                | -                | -         |   -18.67 | allu, doto, Jelo, Jerppa, Sm1llee |
|            9 |     1600 | 2024-02-29 | Sashi             | L   | 0.751      | -            | -                | -                | -         |    -3.80 | allu, doto, Jelo, Jerppa, Sm1llee |
|            8 |     2466 | 2024-01-19 | Permitta          | L   | 0.480      | -            | -                | -                | -         |    -3.45 | Aerial, allu, doto, Jelo, Sm1llee |
|            7 |     2522 | 2024-01-18 | OG                | L   | 0.473      | -            | -                | -                | -         |    -0.50 | Aerial, allu, doto, Jelo, Sm1llee |
|            6 |     2540 | 2024-01-18 | 3DMAX             | L   | 0.473      | -            | -                | -                | -         |    -0.92 | Aerial, allu, doto, Jelo, Sm1llee |
|            5 |     2617 | 2024-01-16 | Aurora Young Blud | W   | 0.461      | 0.143        | 0.002 (0.000)    | 0.098 (0.006)    | 0 (0.000) |     6.95 | Aerial, allu, doto, Jelo, Sm1llee |
|            4 |     2625 | 2024-01-16 | ex-Anonymo        | W   | 0.461      | 0.143        | 0.016 (0.001)    | 0.175 (0.012)    | 0 (0.000) |     8.25 | Aerial, allu, doto, Jelo, Sm1llee |
|            3 |     2639 | 2024-01-16 | 9INE              | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.070 (0.005)    | 0 (0.000) |     4.26 | Aerial, allu, doto, Jelo, Sm1llee |
|            2 |     3423 | 2023-11-22 | Zero Tenacity     | L   | 0.092      | -            | -                | -                | -         |    -0.56 | allu, doto, Jelo, Jerppa, Sm1llee |
|            1 |     3441 | 2023-11-21 | Viperio           | W   | 0.084      | 0.333        | 0.000 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     0.73 | allu, doto, Jelo, Jerppa, Sm1llee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($847.27)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-27 |      1.000 | $795.00        | $795.00         |
| 2023-11-24 |      0.105 | $500.00        | $52.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
