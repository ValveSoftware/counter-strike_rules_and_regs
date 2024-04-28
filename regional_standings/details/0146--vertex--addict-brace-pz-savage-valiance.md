### Roster Details<br />
Team Name: VERTEX<br />
Roster: ADDICT, BRACE, pz, SaVage, Valiance<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  721.7<br />
<br />
Final Rank Value (721.7) = Starting Rank Value (723.8) + Head To Head Adjustments (-2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.8
- 400 + ( ( 0.158 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 723.8


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
|           21 |      650 | 2023-01-17 | Hello Kitten  | L   | 1.000      | -            | -                | -                | -         |   -23.31 | ADDICT, BRACE, pz, SaVage, Valiance |
|           20 |      656 | 2023-01-17 | Arena         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     3.95 | ADDICT, BRACE, pz, SaVage, Valiance |
|           19 |      672 | 2023-01-16 | Stirlz Fans   | W   | 1.000      | 0.143        | -                | 0.014 (0.002)    | 0 (0.000) |     3.90 | ADDICT, BRACE, pz, SaVage, Valiance |
|           18 |     1234 | 2022-12-03 | Rooster       | L   | 0.724      | -            | -                | -                | -         |   -12.62 | ADDICT, BRACE, malta, pz, SaVage    |
|           17 |     1261 | 2022-12-02 | Grayhound     | L   | 0.718      | -            | -                | -                | -         |    -7.88 | ADDICT, BRACE, malta, pz, SaVage    |
|           16 |     1288 | 2022-12-01 | Rooster       | W   | 0.711      | 0.350        | 0.005 (0.001)    | 0.211 (0.052)    | 0 (0.000) |     9.23 | ADDICT, BRACE, malta, pz, SaVage    |
|           15 |     1314 | 2022-11-30 | Nut-E         | W   | 0.704      | 0.350        | 0.001 (0.000)    | 0.062 (0.015)    | 0 (0.000) |     4.98 | ADDICT, BRACE, malta, pz, SaVage    |
|           14 |     1854 | 2022-10-27 | e-LEMON-ators | W   | 0.477      | 0.313        | 0.001 (0.000)    | 0.121 (0.018)    | 0 (0.000) |     5.40 | ADDICT, BRACE, Forleks, malta, pz   |
|           13 |     1975 | 2022-10-21 | 00NATION      | L   | 0.441      | -            | -                | -                | -         |    -4.52 | ADDICT, BRACE, Forleks, malta, pz   |
|           12 |     2271 | 2022-10-12 | Rooster       | W   | 0.377      | 0.350        | 0.005 (0.001)    | 0.211 (0.028)    | 0 (0.000) |     5.01 | ADDICT, BRACE, Forleks, malta, pz   |
|           11 |     2291 | 2022-10-11 | Nut-E         | W   | 0.370      | 0.313        | 0.001 (0.000)    | 0.062 (0.007)    | 0 (0.000) |     2.71 | ADDICT, BRACE, Forleks, malta, pz   |
|           10 |     2582 | 2022-09-27 | DeadWeight    | W   | 0.277      | -            | -                | -                | 0 (0.000) |     1.14 | ADDICT, BRACE, Forleks, malta, pz   |
|            9 |     2759 | 2022-09-22 | Antic         | W   | 0.245      | 0.350        | 0.001 (0.000)    | 0.088 (0.008)    | -         |     2.59 | ADDICT, BRACE, J1rah, malta, pz     |
|            8 |     2866 | 2022-09-18 | Grayhound     | W   | 0.218      | 0.143        | 0.026 (0.001)    | 0.219 (0.007)    | 1 (0.218) |     4.42 | ADDICT, BRACE, Forleks, malta, pz   |
|            7 |     2898 | 2022-09-17 | Rooster       | W   | 0.211      | 0.143        | 0.005 (0.000)    | 0.211 (0.006)    | 1 (0.211) |     2.96 | ADDICT, BRACE, Forleks, malta, pz   |
|            6 |     3012 | 2022-09-14 | KRAKEN        | W   | 0.190      | -            | -                | -                | -         |     0.84 | ADDICT, BRACE, J1rah, malta, pz     |
|            5 |     3093 | 2022-09-11 | Encore        | W   | 0.171      | 0.143        | 0.003 (0.000)    | -                | -         |     2.02 | ADDICT, BRACE, Forleks, malta, pz   |
|            4 |     3339 | 2022-09-02 | Grayhound     | L   | 0.115      | -            | -                | -                | -         |    -1.28 | ADDICT, BL1TZ, BRACE, malta, pz     |
|            3 |     3369 | 2022-09-01 | Imperial      | L   | 0.109      | -            | -                | -                | -         |    -1.02 | ADDICT, BL1TZ, BRACE, malta, pz     |
|            2 |     3631 | 2022-08-23 | Encore        | L   | 0.045      | -            | -                | -                | -         |    -0.86 | ADDICT, BL1TZ, BRACE, malta, pz     |
|            1 |     3650 | 2022-08-22 | God's Work    | W   | 0.038      | -            | -                | -                | -         |     0.25 | ADDICT, BL1TZ, BRACE, malta, pz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,485.01)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-12-04 |      0.730 | $2,755.00      | $2,011.23       |
| 2022-10-27 |      0.477 | $4,093.00      | $1,953.55       |
| 2022-10-23 |      0.455 | $5,000.00      | $2,272.85       |
| 2022-09-04 |      0.124 | $2,000.00      | $247.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
