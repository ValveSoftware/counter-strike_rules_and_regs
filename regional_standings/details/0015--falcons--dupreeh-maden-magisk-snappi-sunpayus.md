### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1440.4<br />
<br />
Final Rank Value (1440.4) = Starting Rank Value (1471.0) + Head To Head Adjustments (-30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.690[<sup>1</sup>](#table2)
- Bounty Collected: 0.540[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.718[<sup>2</sup>](#table1)

The average of these factors is 0.552<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1471.0
- 400 + ( ( 0.552 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1471.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       22 | 2024-05-28 | Liquid        | L   | 1.000      | -            | -                | -                | -         |    -8.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |       43 | 2024-05-27 | Monte         | W   | 1.000      | 0.624        | 0.181 (0.113)    | 0.611 (0.382)    | 1 (1.000) |     6.89 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |       55 | 2024-05-27 | G2            | L   | 1.000      | -            | -                | -                | -         |    -5.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |      306 | 2024-05-18 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -1.96 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |      336 | 2024-05-17 | Virtus.pro    | W   | 1.000      | 0.769        | 0.271 (0.208)    | 0.499 (0.384)    | 1 (1.000) |    23.59 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |      410 | 2024-05-15 | BetBoom       | W   | 1.000      | 0.769        | 0.392 (0.302)    | 0.951 (0.731)    | 1 (1.000) |    10.43 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |      476 | 2024-05-14 | Virtus.pro    | L   | 1.000      | -            | -                | -                | -         |    -6.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |      849 | 2024-04-27 | G2            | L   | 0.984      | -            | -                | -                | -         |    -4.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |      874 | 2024-04-26 | BetBoom       | L   | 0.978      | -            | -                | -                | -         |   -19.74 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |      900 | 2024-04-25 | TYLOO         | W   | 0.971      | 0.889        | 0.042 (0.036)    | 0.330 (0.285)    | 1 (0.971) |     1.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |      920 | 2024-04-24 | TheMongolz    | L   | 0.964      | -            | -                | -                | -         |   -16.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2096 | 2024-03-06 | Metizport     | L   | 0.640      | -            | -                | -                | -         |   -18.84 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           13 |     2547 | 2024-02-16 | AMKAL         | L   | 0.511      | -            | -                | -                | -         |   -13.67 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     2577 | 2024-02-15 | Eternal Fire  | L   | 0.504      | -            | -                | -                | -         |    -2.19 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     2603 | 2024-02-14 | FaZe          | L   | 0.499      | -            | -                | -                | -         |    -0.93 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     2607 | 2024-02-14 | 3DMAX         | W   | 0.498      | 0.143        | 0.105 (0.007)    | 0.669 (0.048)    | 1 (0.498) |     1.83 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     2663 | 2024-02-10 | Spirit        | L   | 0.473      | -            | -                | -                | -         |    -1.32 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     2676 | 2024-02-09 | ENCE          | W   | 0.466      | 1.000        | 0.199 (0.093)    | 0.422 (0.197)    | 1 (0.466) |     5.68 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     2711 | 2024-02-06 | Natus Vincere | W   | 0.445      | 1.000        | 1.000 (0.445)    | 0.382 (0.170)    | 1 (0.445) |    12.69 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     2720 | 2024-02-05 | Complexity    | W   | 0.440      | 1.000        | 0.260 (0.114)    | 0.329 (0.145)    | 1 (0.440) |     8.29 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     2734 | 2024-02-04 | Rebels        | W   | 0.433      | 1.000        | 0.059 (0.025)    | 0.413 (0.179)    | 1 (0.433) |     1.30 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     2776 | 2024-02-03 | Eternal Fire  | L   | 0.424      | -            | -                | -                | -         |    -1.50 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     2926 | 2024-01-26 | Vitality      | L   | 0.371      | -            | -                | -                | -         |    -1.19 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     2972 | 2024-01-23 | OG            | W   | 0.353      | 0.581        | 0.278 (0.057)    | 0.376 (0.077)    | 1 (0.353) |     2.03 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     3000 | 2024-01-22 | Astralis      | L   | 0.346      | -            | -                | -                | -         |    -1.97 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,935.71)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-29 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-10 |      0.666 | $5,000.00      | $3,332.47       |
| 2024-02-11 |      0.479 | $80,000.00     | $38,323.78      |
| 2024-01-28 |      0.386 | $8,500.00      | $3,279.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
