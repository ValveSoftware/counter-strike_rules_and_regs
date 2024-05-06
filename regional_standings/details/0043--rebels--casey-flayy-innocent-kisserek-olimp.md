### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1080.6<br />
<br />
Final Rank Value (1080.6) = Starting Rank Value (1131.4) + Head To Head Adjustments (-50.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.512[<sup>1</sup>](#table2)
- Bounty Collected: 0.438[<sup>2</sup>](#table1)
- Opponent Network: 0.235[<sup>2</sup>](#table1)
- LAN Wins: 0.350[<sup>2</sup>](#table1)

The average of these factors is 0.384<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1131.4
- 400 + ( ( 0.384 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1131.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      179 | 2024-04-28 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -4.01 | casey, Flayy, innocent, kisserek, olimp |
|           31 |      228 | 2024-04-26 | MIBR            | W   | 1.000      | 0.500        | 0.638 (0.319)    | 0.940 (0.470)    | 1 (1.000) |    30.17 | casey, Flayy, innocent, kisserek, olimp |
|           30 |      230 | 2024-04-25 | Rooster         | W   | 1.000      | 0.500        | 0.029 (0.015)    | 0.348 (0.174)    | 1 (1.000) |     8.66 | casey, Flayy, innocent, kisserek, olimp |
|           29 |      383 | 2024-04-19 | brazylijski luz | L   | 1.000      | -            | -                | -                | -         |   -22.90 | casey, Flayy, innocent, kisserek, olimp |
|           28 |      562 | 2024-04-13 | Monte           | L   | 1.000      | -            | -                | -                | -         |    -7.48 | casey, Flayy, innocent, kisserek, olimp |
|           27 |      694 | 2024-04-09 | B8              | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.851 (0.425)    | 0 (0.000) |    12.82 | casey, Flayy, innocent, kisserek, olimp |
|           26 |      837 | 2024-04-04 | ALTERNATE aTTaX | W   | 0.986      | 0.500        | 0.104 (0.051)    | 0.779 (0.384)    | 0 (0.000) |     8.97 | casey, Flayy, innocent, kisserek, olimp |
|           25 |      887 | 2024-04-03 | SINNERS         | L   | 0.978      | -            | -                | -                | -         |   -16.52 | casey, Flayy, innocent, kisserek, olimp |
|           24 |      971 | 2024-03-28 | ex-Sprout       | W   | 0.940      | 0.500        | -                | 0.127 (0.060)    | 0 (0.000) |     2.31 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     1004 | 2024-03-27 | B8              | L   | 0.934      | -            | -                | -                | -         |   -16.35 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     1014 | 2024-03-27 | Sashi           | W   | 0.933      | 0.143        | 0.188 (0.025)    | 1.000 (0.133)    | 0 (0.000) |    12.55 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     1044 | 2024-03-25 | Aurora          | L   | 0.920      | -            | -                | -                | -         |    -2.62 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     1239 | 2024-03-14 | brazylijski luz | L   | 0.848      | -            | -                | -                | -         |   -21.60 | casey, Flayy, kisserek, olimp, SZPERO   |
|           19 |     1511 | 2024-03-04 | BLEED           | L   | 0.780      | -            | -                | -                | -         |   -10.53 | casey, Flayy, kisserek, olimp, sNx      |
|           18 |     1545 | 2024-03-03 | Sangal          | W   | 0.773      | 0.500        | -                | 0.797 (0.308)    | 0 (0.000) |     3.77 | casey, Flayy, kisserek, olimp, sNx      |
|           17 |     1557 | 2024-03-02 | Aurora          | L   | 0.766      | -            | -                | -                | -         |    -2.35 | casey, Flayy, kisserek, olimp, sNx      |
|           16 |     1592 | 2024-02-29 | Sangal          | W   | 0.753      | 0.500        | -                | 0.797 (0.300)    | 0 (0.000) |     3.54 | casey, Flayy, kisserek, olimp, sNx      |
|           15 |     2083 | 2024-02-04 | Falcons         | L   | 0.587      | -            | -                | -                | -         |    -4.22 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     2120 | 2024-02-03 | FaZe            | L   | 0.579      | -            | -                | -                | -         |    -0.13 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     2142 | 2024-02-02 | M80             | W   | 0.573      | 0.143        | 0.149 (0.012)    | -                | 1 (0.573) |    12.73 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     2194 | 2024-01-31 | Eternal Fire    | L   | 0.560      | -            | -                | -                | -         |    -0.55 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     2199 | 2024-01-31 | Cloud9          | W   | 0.559      | 0.143        | 0.472 (0.038)    | 0.525 (0.042)    | 1 (0.559) |    16.79 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     2239 | 2024-01-28 | 9 Pandas        | L   | 0.540      | -            | -                | -                | -         |    -7.41 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     2325 | 2024-01-23 | Viperio         | L   | 0.506      | -            | -                | -                | -         |   -15.30 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     2326 | 2024-01-23 | PERA            | L   | 0.506      | -            | -                | -                | -         |   -11.79 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     2346 | 2024-01-22 | Sampi           | L   | 0.500      | -            | -                | -                | -         |   -10.36 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     2351 | 2024-01-22 | ALTERNATE aTTaX | W   | 0.500      | 0.143        | 0.104 (0.007)    | 0.779 (0.056)    | -         |     4.96 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     2355 | 2024-01-22 | Guild Eagles    | L   | 0.499      | -            | -                | -                | -         |    -9.69 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     2627 | 2024-01-16 | Passion UA      | L   | 0.461      | -            | -                | -                | -         |    -9.85 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     2637 | 2024-01-16 | Gucci Academy   | W   | 0.460      | -            | -                | -                | -         |     1.37 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     3345 | 2023-11-26 | ENCE            | W   | 0.120      | 0.344        | 0.360 (0.015)    | -                | -         |     3.28 | Goofy, hades, jcobbb, KEi, Kylar        |
|            1 |     3370 | 2023-11-25 | Enterprise      | W   | 0.112      | 0.344        | 0.022 (0.001)    | -                | -         |     0.91 | Flayy, kisserek, moonwalk, olimp, sNx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,071.25)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-04-20 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-11 |      0.633 | $10,000.00     | $6,331.40       |
| 2023-11-26 |      0.120 | $6,188.00      | $739.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
