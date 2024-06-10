### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  1081.4<br />
<br />
Final Rank Value (1081.4) = Starting Rank Value (982.2) + Head To Head Adjustments (99.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.500[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.138[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.292<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 982.2
- 400 + ( ( 0.292 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 982.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1193 | 2024-05-04 | Monte           | L   | 0.952      | -            | -                | -                | -         |    -8.99 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |     1224 | 2024-05-02 | GamerLegion     | L   | 0.940      | -            | -                | -                | -         |    -8.70 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |     1251 | 2024-05-01 | FURIA           | W   | 0.933      | 0.889        | 0.249 (0.207)    | 0.590 (0.490)    | 1 (0.933) |    27.14 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |     1273 | 2024-04-30 | Monte           | L   | 0.927      | -            | -                | -                | -         |    -8.29 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     1727 | 2024-04-12 | BIG             | L   | 0.807      | -            | -                | -                | -         |    -3.30 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     1760 | 2024-04-11 | Aurora          | L   | 0.799      | -            | -                | -                | -         |    -2.34 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     1792 | 2024-04-10 | TSM             | W   | 0.794      | 0.500        | -                | 0.154 (0.061)    | 0 (0.000) |     3.58 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     1844 | 2024-04-09 | brazylijski luz | W   | 0.787      | 0.500        | -                | 0.355 (0.140)    | 0 (0.000) |     4.61 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     1884 | 2024-04-08 | ENCE            | W   | 0.779      | 0.684        | 0.205 (0.109)    | 0.407 (0.217)    | 0 (0.000) |    21.75 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     2162 | 2024-03-27 | 500             | L   | 0.700      | -            | -                | -                | -         |   -17.85 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     2193 | 2024-03-26 | Apeks           | W   | 0.692      | 0.500        | 0.066 (0.023)    | 0.403 (0.140)    | 0 (0.000) |    13.12 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     2198 | 2024-03-25 | B8              | L   | 0.686      | -            | -                | -                | -         |    -9.32 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     2203 | 2024-03-24 | BetBoom         | W   | 0.679      | 0.143        | 0.427 (0.041)    | 0.917 (0.089)    | 0 (0.000) |    20.39 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     2215 | 2024-03-23 | VP.Prodigy      | W   | 0.672      | -            | -                | -                | 0 (0.000) |     5.86 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     2229 | 2024-03-22 | ex-Preasy       | W   | 0.665      | -            | -                | -                | 0 (0.000) |     9.41 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     2250 | 2024-03-21 | PARIVISION      | L   | 0.660      | -            | -                | -                | -         |   -11.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     2276 | 2024-03-20 | NAVI Junior     | W   | 0.653      | -            | -                | -                | 0 (0.000) |     1.13 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     2632 | 2024-03-05 | KOI             | L   | 0.554      | -            | -                | -                | -         |    -8.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     2637 | 2024-03-05 | AMKAL           | W   | 0.553      | 0.143        | 0.143 (0.011)    | 0.711 (0.056)    | 0 (0.000) |    12.19 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     2645 | 2024-03-05 | 3DMAX           | W   | 0.553      | 0.143        | 0.122 (0.010)    | 0.821 (0.065)    | -         |    12.23 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     2727 | 2024-03-01 | Aurora          | L   | 0.527      | -            | -                | -                | -         |    -0.93 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     2741 | 2024-02-29 | 9 Pandas        | W   | 0.520      | 0.143        | 0.114 (0.008)    | 0.758 (0.056)    | -         |    11.66 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     2754 | 2024-02-28 | KOI             | W   | 0.514      | 0.143        | 0.054 (0.004)    | -                | -         |     9.03 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     2760 | 2024-02-28 | Aurora          | W   | 0.513      | 0.143        | 0.513 (0.038)    | 0.918 (0.067)    | -         |    15.41 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     2774 | 2024-02-27 | V1dar           | W   | 0.507      | -            | -                | -                | -         |     1.25 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     2780 | 2024-02-27 | ARCRED          | W   | 0.506      | -            | -                | -                | -         |     1.64 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     3178 | 2024-02-09 | Sashi           | L   | 0.387      | -            | -                | -                | -         |    -4.06 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     3180 | 2024-02-09 | RUBY            | W   | 0.386      | -            | -                | -                | -         |     4.59 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     3191 | 2024-02-08 | BetBoom         | W   | 0.381      | 0.143        | 0.427 (0.023)    | -                | -         |    11.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     3195 | 2024-02-08 | Sashi           | L   | 0.379      | -            | -                | -                | -         |    -3.85 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,516.09)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.820 | $26,250.00     | $21,516.09      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
