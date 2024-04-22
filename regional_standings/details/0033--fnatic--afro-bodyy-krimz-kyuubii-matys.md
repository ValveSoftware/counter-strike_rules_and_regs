### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, bodyy, KRIMZ, kyuubii, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1090.6<br />
<br />
Final Rank Value (1090.6) = Starting Rank Value (1072.9) + Head To Head Adjustments (17.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.617[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.200[<sup>2</sup>](#table1)
- LAN Wins: 0.161[<sup>2</sup>](#table1)

The average of these factors is 0.348<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1072.9
- 400 + ( ( 0.348 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1072.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      145 | 2024-04-18 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -18.38 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           36 |      400 | 2024-04-09 | Apeks             | L   | 1.000      | -            | -                | -                | -         |   -14.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |      429 | 2024-04-08 | Apeks             | W   | 1.000      | 0.143        | 0.193 (0.028)    | 0.687 (0.098)    | 0 (0.000) |    16.45 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |      441 | 2024-04-08 | KOI               | W   | 1.000      | 0.143        | 0.058 (0.008)    | 0.902 (0.129)    | 0 (0.000) |    12.51 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |      771 | 2024-03-23 | BetBoom           | L   | 0.998      | -            | -                | -                | -         |   -11.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |      804 | 2024-03-21 | 3DMAX             | W   | 0.986      | 0.143        | -                | 0.801 (0.113)    | 0 (0.000) |    10.88 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     1160 | 2024-03-06 | BLEED             | W   | 0.886      | 0.500        | 0.221 (0.098)    | 0.933 (0.414)    | 0 (0.000) |    14.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     1192 | 2024-03-05 | Young Ninjas      | W   | 0.880      | 0.500        | 0.082 (0.036)    | 0.313 (0.138)    | 0 (0.000) |     8.80 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     1220 | 2024-03-04 | 3DMAX             | W   | 0.872      | 0.500        | 0.048 (0.021)    | 0.801 (0.349)    | 0 (0.000) |    12.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     1236 | 2024-03-03 | Gaimin Gladiators | L   | 0.866      | -            | -                | -                | -         |    -6.47 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     1244 | 2024-03-03 | AURA              | W   | 0.866      | -            | -                | -                | 0 (0.000) |     1.10 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     1252 | 2024-03-03 | Preasy            | W   | 0.866      | 0.500        | 0.205 (0.089)    | 0.723 (0.313)    | 0 (0.000) |    12.74 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     1289 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.852      | 0.500        | -                | 0.639 (0.272)    | -         |     5.97 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     1305 | 2024-02-28 | Preasy            | L   | 0.841      | -            | -                | -                | -         |   -13.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     1421 | 2024-02-23 | GamerLegion       | L   | 0.806      | -            | -                | -                | -         |    -4.24 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     1565 | 2024-02-17 | SAW               | L   | 0.766      | -            | -                | -                | -         |    -6.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     1601 | 2024-02-16 | KOI               | L   | 0.758      | -            | -                | -                | -         |   -11.99 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     1624 | 2024-02-15 | AMKAL             | W   | 0.751      | -            | -                | -                | 1 (0.751) |     9.82 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     1652 | 2024-02-14 | Virtus.pro        | L   | 0.747      | -            | -                | -                | -         |    -0.99 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     1661 | 2024-02-14 | BetBoom           | W   | 0.745      | 0.143        | 0.457 (0.049)    | 0.898 (0.096)    | 1 (0.745) |    16.51 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     1732 | 2024-02-09 | 3DMAX             | L   | 0.713      | -            | -                | -                | -         |   -13.30 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     1737 | 2024-02-09 | ex-Sprout         | L   | 0.712      | -            | -                | -                | -         |   -20.67 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     1740 | 2024-02-09 | Endpoint          | W   | 0.712      | -            | -                | -                | -         |     4.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     1921 | 2024-01-30 | Insilio           | L   | 0.646      | -            | -                | -                | -         |   -17.55 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     1927 | 2024-01-30 | 500               | W   | 0.646      | -            | -                | -                | -         |     1.48 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     2115 | 2024-01-20 | Gaimin Gladiators | W   | 0.580      | 0.143        | 0.156 (0.013)    | 1.000 (0.083)    | -         |    13.75 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     2122 | 2024-01-20 | Virtus.pro        | L   | 0.579      | -            | -                | -                | -         |    -0.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     2185 | 2024-01-19 | BIG               | W   | 0.572      | 0.143        | 0.471 (0.038)    | -                | -         |    12.67 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     2227 | 2024-01-18 | SINNERS           | W   | 0.567      | -            | -                | -                | -         |     8.68 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     2239 | 2024-01-18 | SAW               | L   | 0.566      | -            | -                | -                | -         |    -5.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     2558 | 2024-01-09 | Entropiq          | W   | 0.508      | -            | -                | -                | -         |     2.33 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     2562 | 2024-01-09 | Enterprise        | L   | 0.508      | -            | -                | -                | -         |   -11.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     2572 | 2024-01-09 | Gaimin Gladiators | W   | 0.507      | 0.143        | 0.156 (0.011)    | -                | -         |    12.54 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     2589 | 2024-01-09 | HAVU              | W   | 0.506      | -            | -                | -                | -         |     3.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     2607 | 2024-01-09 | PGE Turow         | W   | 0.506      | -            | -                | -                | -         |     1.93 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     3019 | 2023-11-29 | ENCE              | L   | 0.234      | -            | -                | -                | -         |    -6.11 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     3024 | 2023-11-29 | GamerLegion       | L   | 0.231      | -            | -                | -                | -         |    -1.21 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,617.09)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-06 |      0.886 | $50,000.00     | $44,317.60      |
| 2023-12-03 |      0.260 | $5,000.00      | $1,299.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
