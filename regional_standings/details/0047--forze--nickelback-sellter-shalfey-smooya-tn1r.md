### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [35]( ../standings_europe.md)<br />
Final Rank Value:  1059.3<br />
<br />
Final Rank Value (1059.3) = Starting Rank Value (972.3) + Head To Head Adjustments (87.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 972.3
- 400 + ( ( 0.295 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 972.3


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
|           30 |      693 | 2024-05-04 | Monte           | L   | 1.000      | -            | -                | -                | -         |    -9.77 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |      724 | 2024-05-02 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |   -10.25 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |      751 | 2024-05-01 | FURIA           | W   | 1.000      | 0.889        | 0.138 (0.123)    | 0.402 (0.358)    | 1 (1.000) |    25.03 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |      773 | 2024-04-30 | Monte           | L   | 1.000      | -            | -                | -                | -         |    -9.39 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     1227 | 2024-04-12 | BIG             | L   | 0.886      | -            | -                | -                | -         |    -4.58 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     1260 | 2024-04-11 | Aurora          | L   | 0.878      | -            | -                | -                | -         |    -4.42 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     1292 | 2024-04-10 | TSM             | W   | 0.873      | 0.500        | -                | 0.191 (0.083)    | 0 (0.000) |     4.16 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     1344 | 2024-04-09 | brazylijski luz | W   | 0.866      | 0.500        | -                | 0.374 (0.162)    | 0 (0.000) |     4.91 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     1384 | 2024-04-08 | ENCE            | W   | 0.858      | 0.684        | 0.199 (0.117)    | 0.422 (0.248)    | 0 (0.000) |    23.14 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     1662 | 2024-03-27 | 500             | L   | 0.779      | -            | -                | -                | -         |   -19.69 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     1693 | 2024-03-26 | Apeks           | W   | 0.771      | 0.500        | 0.083 (0.032)    | 0.495 (0.191)    | 0 (0.000) |    16.10 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     1698 | 2024-03-25 | B8              | L   | 0.766      | -            | -                | -                | -         |   -11.01 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     1703 | 2024-03-24 | BetBoom         | W   | 0.758      | 0.143        | 0.392 (0.042)    | 0.951 (0.103)    | 0 (0.000) |    20.29 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     1715 | 2024-03-23 | VP.Prodigy      | W   | 0.751      | -            | -                | -                | 0 (0.000) |     2.44 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     1729 | 2024-03-22 | ex-Preasy       | W   | 0.745      | 0.143        | 0.051 (0.005)    | -                | 0 (0.000) |    10.95 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     1750 | 2024-03-21 | PARIVISION      | L   | 0.739      | -            | -                | -                | -         |   -13.89 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     1776 | 2024-03-20 | NAVI Junior     | W   | 0.732      | -            | -                | -                | 0 (0.000) |     0.65 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     2132 | 2024-03-05 | KOI             | L   | 0.633      | -            | -                | -                | -         |   -11.21 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     2137 | 2024-03-05 | AMKAL           | W   | 0.633      | 0.143        | 0.144 (0.013)    | 0.736 (0.067)    | 0 (0.000) |    13.73 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     2145 | 2024-03-05 | 3DMAX           | W   | 0.632      | 0.143        | 0.105 (0.009)    | -                | -         |    12.76 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     2227 | 2024-03-01 | Aurora          | L   | 0.606      | -            | -                | -                | -         |    -1.81 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     2241 | 2024-02-29 | 9 Pandas        | W   | 0.600      | 0.143        | 0.108 (0.009)    | 0.798 (0.068)    | -         |    13.42 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     2254 | 2024-02-28 | KOI             | W   | 0.593      | -            | -                | -                | -         |     9.24 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     2260 | 2024-02-28 | Aurora          | W   | 0.592      | 0.143        | 0.493 (0.042)    | 0.840 (0.071)    | -         |    17.19 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     2274 | 2024-02-27 | V1dar           | W   | 0.586      | -            | -                | -                | -         |     1.53 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     2280 | 2024-02-27 | ARCRED          | W   | 0.585      | -            | -                | -                | -         |     2.56 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     2678 | 2024-02-09 | Sashi           | L   | 0.466      | -            | -                | -                | -         |    -6.60 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     2680 | 2024-02-09 | RUBY            | W   | 0.465      | -            | -                | -                | -         |     4.62 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     2691 | 2024-02-08 | BetBoom         | W   | 0.460      | 0.143        | 0.392 (0.026)    | 0.951 (0.062)    | -         |    13.37 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     2695 | 2024-02-08 | Sashi           | L   | 0.459      | -            | -                | -                | -         |    -6.42 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,594.36)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      0.899 | $26,250.00     | $23,594.36      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
