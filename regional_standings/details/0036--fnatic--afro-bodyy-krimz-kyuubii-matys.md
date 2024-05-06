### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, bodyy, KRIMZ, kyuubii, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1195.6<br />
<br />
Final Rank Value (1195.6) = Starting Rank Value (1207.6) + Head To Head Adjustments (-12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.673[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.275[<sup>2</sup>](#table1)
- LAN Wins: 0.258[<sup>2</sup>](#table1)

The average of these factors is 0.424<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1207.6
- 400 + ( ( 0.424 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1207.6


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
|           46 |       49 | 2024-05-03 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -22.13 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           45 |       76 | 2024-05-02 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -14.65 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           44 |      101 | 2024-05-01 | AMKAL             | W   | 1.000      | 0.384        | 0.200 (0.077)    | 0.851 (0.327)    | 0 (0.000) |    15.30 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           43 |      118 | 2024-05-01 | PARIVISION        | W   | 1.000      | 0.435        | -                | 0.544 (0.237)    | 0 (0.000) |     6.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           42 |      141 | 2024-04-30 | Nexus             | W   | 1.000      | 0.384        | -                | 0.605 (0.232)    | 0 (0.000) |     3.71 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           41 |      200 | 2024-04-27 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -2.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           40 |      240 | 2024-04-25 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -1.85 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           39 |      263 | 2024-04-24 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -16.21 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           38 |      287 | 2024-04-23 | Virtus.pro        | W   | 1.000      | 0.889        | 0.438 (0.389)    | 0.520 (0.463)    | 1 (1.000) |    29.41 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           37 |      441 | 2024-04-18 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -20.92 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           36 |      696 | 2024-04-09 | Apeks             | L   | 1.000      | -            | -                | -                | -         |   -15.13 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |      725 | 2024-04-08 | Apeks             | W   | 1.000      | 0.143        | 0.237 (0.034)    | -                | 0 (0.000) |    16.03 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |      737 | 2024-04-08 | KOI               | W   | 1.000      | 0.143        | -                | 0.772 (0.110)    | 0 (0.000) |     9.59 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     1067 | 2024-03-23 | BetBoom           | L   | 0.905      | -            | -                | -                | -         |    -8.50 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     1100 | 2024-03-21 | 3DMAX             | W   | 0.893      | -            | -                | -                | 0 (0.000) |    10.99 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     1456 | 2024-03-06 | BLEED             | W   | 0.793      | 0.500        | 0.400 (0.159)    | 1.000 (0.397)    | 0 (0.000) |    11.67 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     1488 | 2024-03-05 | Young Ninjas      | W   | 0.786      | 0.500        | 0.086 (0.034)    | 0.269 (0.106)    | -         |     5.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     1516 | 2024-03-04 | 3DMAX             | W   | 0.779      | 0.500        | 0.055 (0.021)    | 0.810 (0.315)    | -         |    11.76 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     1532 | 2024-03-03 | Gaimin Gladiators | L   | 0.773      | -            | -                | -                | -         |    -7.75 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     1540 | 2024-03-03 | AURA              | W   | 0.773      | -            | -                | -                | -         |     0.53 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     1548 | 2024-03-03 | ex-Preasy         | W   | 0.772      | 0.500        | 0.173 (0.067)    | 0.700 (0.270)    | -         |     7.84 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     1585 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.759      | 0.500        | 0.104 (0.039)    | 0.779 (0.295)    | -         |     4.41 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     1601 | 2024-02-28 | ex-Preasy         | L   | 0.747      | -            | -                | -                | -         |   -15.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     1717 | 2024-02-23 | GamerLegion       | L   | 0.713      | -            | -                | -                | -         |    -3.71 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     1861 | 2024-02-17 | SAW               | L   | 0.672      | -            | -                | -                | -         |    -5.19 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     1897 | 2024-02-16 | KOI               | L   | 0.665      | -            | -                | -                | -         |   -14.04 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     1920 | 2024-02-15 | AMKAL             | W   | 0.658      | -            | -                | -                | 1 (0.658) |     9.87 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     1948 | 2024-02-14 | Virtus.pro        | L   | 0.653      | -            | -                | -                | -         |    -1.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     1957 | 2024-02-14 | BetBoom           | W   | 0.652      | 0.143        | 0.563 (0.052)    | -                | 1 (0.652) |    15.98 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     2028 | 2024-02-09 | 3DMAX             | L   | 0.620      | -            | -                | -                | -         |   -10.70 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     2033 | 2024-02-09 | ex-Sprout         | L   | 0.619      | -            | -                | -                | -         |   -18.74 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     2036 | 2024-02-09 | Endpoint          | W   | 0.618      | -            | -                | -                | -         |     2.81 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     2217 | 2024-01-30 | Insilio           | L   | 0.553      | -            | -                | -                | -         |   -14.60 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     2223 | 2024-01-30 | 500               | W   | 0.553      | -            | -                | -                | -         |     1.31 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     2411 | 2024-01-20 | Gaimin Gladiators | W   | 0.487      | -            | -                | -                | -         |     9.84 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     2418 | 2024-01-20 | Virtus.pro        | L   | 0.486      | -            | -                | -                | -         |    -0.81 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     2481 | 2024-01-19 | BIG               | W   | 0.479      | 0.143        | 0.454 (0.031)    | -                | -         |    11.46 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     2523 | 2024-01-18 | SINNERS           | W   | 0.473      | -            | -                | -                | -         |     4.58 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     2535 | 2024-01-18 | SAW               | L   | 0.473      | -            | -                | -                | -         |    -3.39 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     2854 | 2024-01-09 | Entropiq          | W   | 0.415      | -            | -                | -                | -         |     0.97 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     2858 | 2024-01-09 | Enterprise        | L   | 0.414      | -            | -                | -                | -         |   -10.56 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     2868 | 2024-01-09 | Gaimin Gladiators | W   | 0.414      | -            | -                | -                | -         |     8.70 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     2885 | 2024-01-09 | HAVU              | W   | 0.413      | -            | -                | -                | -         |     1.56 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     2903 | 2024-01-09 | PGE Turow         | W   | 0.413      | -            | -                | -                | -         |     0.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     3315 | 2023-11-29 | ENCE              | L   | 0.140      | -            | -                | -                | -         |    -4.09 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     3320 | 2023-11-29 | GamerLegion       | L   | 0.138      | -            | -                | -                | -         |    -0.73 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,985.26)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-05-04 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-02 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-03-06 |      0.793 | $50,000.00     | $39,652.29      |
| 2023-12-03 |      0.167 | $5,000.00      | $832.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
