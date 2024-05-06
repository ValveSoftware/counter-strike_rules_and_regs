### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  985.6<br />
<br />
Final Rank Value (985.6) = Starting Rank Value (908.4) + Head To Head Adjustments (77.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.268[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 908.4
- 400 + ( ( 0.267 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 908.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |        4 | 2024-05-06 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -17.59 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |        8 | 2024-05-06 | BLEED          | L   | 1.000      | -            | -                | -                | -         |    -7.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |       54 | 2024-05-03 | Permitta       | W   | 1.000      | 0.435        | 0.053 (0.023)    | 0.979 (0.425)    | 0 (0.000) |    11.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |       66 | 2024-05-03 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |    -3.90 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |       98 | 2024-05-01 | OG             | W   | 1.000      | 0.435        | 0.580 (0.252)    | 0.490 (0.213)    | 0 (0.000) |    27.47 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |      109 | 2024-05-01 | Nexus          | W   | 1.000      | 0.435        | 0.031 (0.013)    | 0.605 (0.263)    | 0 (0.000) |    10.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |      150 | 2024-04-29 | HAVU           | L   | 1.000      | -            | -                | -                | -         |   -24.99 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |      186 | 2024-04-27 | Guild Eagles   | W   | 1.000      | 0.435        | 0.035 (0.015)    | 0.648 (0.281)    | 0 (0.000) |    16.20 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |      193 | 2024-04-27 | Permitta       | W   | 1.000      | 0.396        | 0.053 (0.021)    | 0.979 (0.388)    | 0 (0.000) |    14.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |      215 | 2024-04-26 | ARCRED         | L   | 1.000      | -            | -                | -                | -         |   -25.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |      220 | 2024-04-26 | Enterprise     | W   | 1.000      | 0.396        | 0.022 (0.009)    | 0.459 (0.182)    | 0 (0.000) |    13.67 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |      254 | 2024-04-25 | MOUZ NXT       | W   | 1.000      | 0.435        | 0.210 (0.091)    | 1.000 (0.435)    | 0 (0.000) |    18.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |      280 | 2024-04-23 | EYEBALLERS     | W   | 1.000      | 0.435        | 0.045 (0.019)    | 0.599 (0.260)    | 0 (0.000) |    12.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |      329 | 2024-04-21 | Permitta       | L   | 1.000      | -            | -                | -                | -         |   -15.06 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |      867 | 2024-04-03 | AMKAL          | L   | 0.980      | -            | -                | -                | -         |    -7.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |      908 | 2024-04-02 | Guild Eagles   | W   | 0.974      | 0.143        | 0.035 (0.005)    | 0.648 (0.090)    | 0 (0.000) |    17.15 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |      924 | 2024-04-02 | PARIVISION     | W   | 0.972      | -            | -                | -                | 0 (0.000) |    17.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     1150 | 2024-03-18 | Sashi          | L   | 0.873      | -            | -                | -                | -         |   -11.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     1208 | 2024-03-15 | CYBERSHOKE     | W   | 0.854      | -            | -                | -                | -         |     5.79 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     1282 | 2024-03-13 | INGLORIOUS     | W   | 0.839      | -            | -                | -                | -         |     3.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     1333 | 2024-03-11 | 1WIN           | W   | 0.826      | 0.372        | -                | 0.480 (0.148)    | -         |     4.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     1377 | 2024-03-09 | K10            | W   | 0.812      | -            | -                | -                | -         |     7.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     1418 | 2024-03-07 | Sashi          | L   | 0.800      | -            | -                | -                | -         |   -10.67 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     1449 | 2024-03-06 | The Chosen Few | W   | 0.794      | -            | -                | -                | -         |     6.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     1490 | 2024-03-05 | Johnny Speeds  | L   | 0.786      | -            | -                | -                | -         |   -16.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     1498 | 2024-03-05 | Betera         | W   | 0.786      | -            | -                | -                | -         |     6.06 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     2032 | 2024-02-09 | Sashi          | L   | 0.619      | -            | -                | -                | -         |    -7.49 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     2042 | 2024-02-08 | Guild Eagles   | W   | 0.614      | -            | -                | -                | -         |    12.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     2048 | 2024-02-08 | AMKAL          | L   | 0.612      | -            | -                | -                | -         |    -3.20 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     2212 | 2024-01-30 | Sashi          | L   | 0.554      | -            | -                | -                | -         |    -6.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     2217 | 2024-01-30 | fnatic         | W   | 0.553      | 0.143        | 0.327 (0.026)    | -                | -         |    14.60 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     2219 | 2024-01-30 | EXO            | W   | 0.553      | -            | -                | -                | -         |     6.82 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     2553 | 2024-01-18 | AMKAL          | L   | 0.472      | -            | -                | -                | -         |    -2.57 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     2573 | 2024-01-17 | esmagaB        | W   | 0.468      | -            | -                | -                | -         |     4.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     2579 | 2024-01-17 | PARIVISION     | W   | 0.467      | -            | -                | -                | -         |     7.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     2732 | 2024-01-13 | Permitta       | L   | 0.440      | -            | -                | -                | -         |    -6.65 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     2741 | 2024-01-13 | B8             | W   | 0.439      | -            | -                | -                | -         |     1.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     2769 | 2024-01-12 | EYEBALLERS     | W   | 0.434      | -            | -                | -                | -         |     7.09 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,149.62)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-25 |      0.920 | $1,250.00      | $1,149.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
