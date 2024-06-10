### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1450.5<br />
<br />
Final Rank Value (1450.5) = Starting Rank Value (1436.0) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.673[<sup>1</sup>](#table2)
- Bounty Collected: 0.527[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.645[<sup>2</sup>](#table1)

The average of these factors is 0.520<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1436.0
- 400 + ( ( 0.520 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1436.0


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
|           25 |      522 | 2024-05-28 | Liquid        | L   | 1.000      | -            | -                | -                | -         |    -7.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      543 | 2024-05-27 | Monte         | W   | 1.000      | 0.624        | 0.179 (0.112)    | 0.686 (0.428)    | 1 (1.000) |     7.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      555 | 2024-05-27 | G2            | L   | 1.000      | -            | -                | -                | -         |    -3.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |      806 | 2024-05-18 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -2.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |      836 | 2024-05-17 | Virtus.pro    | W   | 1.000      | 0.769        | 0.229 (0.176)    | 0.418 (0.322)    | 1 (1.000) |    24.81 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |      910 | 2024-05-15 | BetBoom       | W   | 1.000      | 0.769        | 0.427 (0.328)    | 0.917 (0.705)    | 1 (1.000) |    16.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |      976 | 2024-05-14 | Virtus.pro    | L   | 1.000      | -            | -                | -                | -         |    -5.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1349 | 2024-04-27 | G2            | L   | 0.905      | -            | -                | -                | -         |    -2.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1374 | 2024-04-26 | BetBoom       | L   | 0.898      | -            | -                | -                | -         |   -10.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1400 | 2024-04-25 | TYLOO         | W   | 0.892      | 0.889        | 0.050 (0.040)    | 0.273 (0.216)    | 1 (0.892) |     0.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1420 | 2024-04-24 | The MongolZ   | L   | 0.885      | -            | -                | -                | -         |    -2.84 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2596 | 2024-03-06 | Metizport     | L   | 0.561      | -            | -                | -                | -         |   -16.21 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           13 |     3047 | 2024-02-16 | AMKAL         | L   | 0.432      | -            | -                | -                | -         |   -11.07 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     3077 | 2024-02-15 | Eternal Fire  | L   | 0.424      | -            | -                | -                | -         |    -1.53 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     3103 | 2024-02-14 | FaZe          | L   | 0.420      | -            | -                | -                | -         |    -0.70 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     3107 | 2024-02-14 | 3DMAX         | W   | 0.419      | 0.143        | 0.122 (0.007)    | 0.821 (0.049)    | 1 (0.419) |     2.38 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     3163 | 2024-02-10 | Spirit        | L   | 0.394      | -            | -                | -                | -         |    -1.01 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     3176 | 2024-02-09 | ENCE          | W   | 0.387      | 1.000        | 0.205 (0.079)    | 0.407 (0.157)    | 1 (0.387) |     6.24 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     3211 | 2024-02-06 | Natus Vincere | W   | 0.366      | 1.000        | 1.000 (0.366)    | 0.312 (0.114)    | 1 (0.366) |    10.55 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     3220 | 2024-02-05 | Complexity    | W   | 0.360      | 1.000        | 0.271 (0.098)    | 0.351 (0.127)    | 1 (0.360) |     8.51 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     3234 | 2024-02-04 | Rebels        | W   | 0.354      | 1.000        | 0.053 (0.019)    | 0.472 (0.167)    | 1 (0.354) |     1.43 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     3276 | 2024-02-03 | Eternal Fire  | L   | 0.345      | -            | -                | -                | -         |    -1.02 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     3426 | 2024-01-26 | Vitality      | L   | 0.292      | -            | -                | -                | -         |    -0.52 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     3472 | 2024-01-23 | OG            | W   | 0.274      | 0.581        | 0.249 (0.040)    | 0.306 (0.049)    | 1 (0.274) |     1.78 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     3500 | 2024-01-22 | Astralis      | L   | 0.267      | -            | -                | -                | -         |    -0.54 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($99,533.10)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-03-10 |      0.587 | $5,000.00      | $2,936.61       |
| 2024-02-11 |      0.400 | $80,000.00     | $31,990.00      |
| 2024-01-28 |      0.307 | $8,500.00      | $2,606.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
