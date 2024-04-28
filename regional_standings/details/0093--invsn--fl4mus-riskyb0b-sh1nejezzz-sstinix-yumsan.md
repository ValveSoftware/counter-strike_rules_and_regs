### Roster Details<br />
Team Name: INVSN<br />
Roster: FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [93](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  826.9<br />
<br />
Final Rank Value (826.9) = Starting Rank Value (935.3) + Head To Head Adjustments (-108.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.286[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 935.3
- 400 + ( ( 0.262 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 935.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |        8 | 2023-02-12 | Juggernauts     | L   | 1.000      | -            | -                | -                | -         |   -20.62 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           33 |      528 | 2023-01-22 | PROSPECTS       | L   | 1.000      | -            | -                | -                | -         |   -13.98 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           32 |      552 | 2023-01-21 | Tricked         | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.954 (0.415)    | 0 (0.000) |    19.08 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           31 |      584 | 2023-01-19 | Juggernauts     | L   | 1.000      | -            | -                | -                | -         |   -21.31 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           30 |      670 | 2023-01-16 | MASONIC         | W   | 1.000      | 0.435        | 0.021 (0.009)    | 0.752 (0.327)    | 0 (0.000) |    15.74 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           29 |      678 | 2023-01-15 | Mixfits         | W   | 1.000      | 0.294        | 0.002 (0.001)    | 0.165 (0.049)    | 0 (0.000) |     8.38 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           28 |      685 | 2023-01-15 | 9 Pandas        | W   | 1.000      | 0.294        | 0.023 (0.007)    | 0.260 (0.077)    | 0 (0.000) |    12.64 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           27 |      689 | 2023-01-15 | Tricked         | L   | 1.000      | -            | -                | -                | -         |   -10.06 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           26 |      709 | 2023-01-13 | Fourteen        | L   | 1.000      | -            | -                | -                | -         |   -26.79 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           25 |      710 | 2023-01-13 | ALTERNATE aTTaX | W   | 0.999      | 0.143        | 0.008 (0.001)    | 0.486 (0.069)    | -         |    11.60 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           24 |      712 | 2023-01-13 | Rapid Ninjas    | L   | 0.998      | -            | -                | -                | -         |   -25.94 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           23 |      743 | 2022-12-25 | BakS            | L   | 0.871      | -            | -                | -                | -         |   -21.46 | 4X1s, danistzz, lov1kus, rexxie, RuFire          |
|           22 |      793 | 2022-12-18 | Beyond Possible | W   | 0.824      | 0.143        | -                | 0.088 (0.010)    | -         |     3.27 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           21 |      868 | 2022-12-15 | ESK             | W   | 0.806      | -            | -                | -                | -         |     1.55 | arbnorz, connex, Dinsanety, kujtaa, red0nz       |
|           20 |      890 | 2022-12-14 | Juggernauts     | L   | 0.800      | -            | -                | -                | -         |   -19.34 | dEE, Katalic, Rock1nG, sarenii, susp             |
|           19 |      900 | 2022-12-14 | tokyoxd         | W   | 0.798      | -            | -                | -                | -         |     1.34 | julius, LeO, merisinho, MUFFY, v1ze              |
|           18 |     1168 | 2022-12-04 | Boston crab     | L   | 0.733      | -            | -                | -                | -         |   -12.53 | El1an, KaiR0N-, Magnojez, RAiLWAY, SELLTER       |
|           17 |     1188 | 2022-12-04 | Websterz        | W   | 0.731      | 0.333        | 0.007 (0.002)    | 0.403 (0.098)    | 1 (0.731) |     9.32 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           16 |     1214 | 2022-12-03 | K23             | W   | 0.727      | 0.333        | 0.020 (0.005)    | 0.329 (0.080)    | 1 (0.727) |    11.87 | def1zer, iDISBALANCE, Jyo, Raijin, X5G7V         |
|           15 |     1236 | 2022-12-03 | Next in Line    | W   | 0.724      | -            | -                | -                | 1 (0.724) |     1.27 | bl1x1, Delight, enyl33t, noxxxzie, reNIK         |
|           14 |     1253 | 2022-12-02 | Forward         | L   | 0.719      | -            | -                | -                | -         |   -15.19 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           13 |     2103 | 2022-10-16 | GenOne          | L   | 0.407      | -            | -                | -                | -         |    -3.02 | jeyN, NeOo, Nono2K, SIXER, wasiNk                |
|           12 |     2945 | 2022-09-15 | Websterz        | L   | 0.200      | -            | -                | -                | -         |    -3.52 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           11 |     2959 | 2022-09-15 | ex-TAG          | W   | 0.199      | 0.333        | 0.010 (0.001)    | 0.081 (0.005)    | 1 (0.199) |     1.55 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|           10 |     2995 | 2022-09-14 | Forward         | W   | 0.193      | 0.333        | 0.004 (0.000)    | 0.231 (0.015)    | 1 (0.193) |     1.91 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|            9 |     3003 | 2022-09-14 | AVANGAR         | L   | 0.192      | -            | -                | -                | -         |    -4.28 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|            8 |     3034 | 2022-09-13 | K23             | W   | 0.185      | -            | -                | -                | 1 (0.185) |     0.73 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|            7 |     3226 | 2022-09-08 | 9 Pandas        | L   | 0.152      | -            | -                | -                | -         |    -3.51 | d1Ledez, p1ty, Porya, seized, TruNiQ             |
|            6 |     3256 | 2022-09-06 | ex-TAG          | L   | 0.139      | -            | -                | -                | -         |    -3.35 | FL4MUS, OverDrive, riskyb0b, sstiNiX, YumsaN     |
|            5 |     3263 | 2022-09-05 | VP.Prodigy      | W   | 0.133      | 0.360        | 0.009 (0.000)    | -                | -         |     0.94 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|            4 |     3351 | 2022-09-02 | wannafly        | L   | 0.113      | -            | -                | -                | -         |    -3.28 | BloodyK, d1xE, k1Nd, meijoo, w1ld                |
|            3 |     3611 | 2022-08-23 | los kogutos     | L   | 0.046      | -            | -                | -                | -         |    -1.00 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|            2 |     3615 | 2022-08-23 | Fourteen        | W   | 0.046      | -            | -                | -                | -         |     0.13 | FL4MUS, riskyb0b, sh1nejezzz, sstiNiX, YumsaN    |
|            1 |     3701 | 2022-08-21 | Endpoint        | L   | 0.032      | -            | -                | -                | -         |    -0.57 | H4SAN4TOR, riskyb0b, sh1nejezzz, sstiNiX, YumsaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,693.03)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-15 |      1.000 | $3,000.00      | $3,000.00       |
| 2022-12-25 |      0.873 | $250.00        | $218.21         |
| 2022-12-04 |      0.733 | $2,000.00      | $1,466.68       |
| 2022-12-02 |      0.719 | $1,669.00      | $1,200.22       |
| 2022-10-16 |      0.407 | $1,000.00      | $407.04         |
| 2022-09-15 |      0.200 | $2,000.00      | $400.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
