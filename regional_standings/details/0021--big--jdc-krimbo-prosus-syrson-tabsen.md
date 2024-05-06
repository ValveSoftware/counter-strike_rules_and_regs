### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [21](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1379.3<br />
<br />
Final Rank Value (1379.3) = Starting Rank Value (1403.1) + Head To Head Adjustments (-23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.744[<sup>1</sup>](#table2)
- Bounty Collected: 0.528[<sup>2</sup>](#table1)
- Opponent Network: 0.319[<sup>2</sup>](#table1)
- LAN Wins: 0.515[<sup>2</sup>](#table1)

The average of these factors is 0.527<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1403.1
- 400 + ( ( 0.527 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1403.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       50 | 2024-05-03 | HEROIC          | W   | 1.000      | 0.889        | 0.347 (0.309)    | 0.712 (0.633)    | 1 (1.000) |    24.31 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           45 |       59 | 2024-05-03 | PERA            | W   | 1.000      | 0.889        | -                | 0.365 (0.324)    | 1 (1.000) |     2.37 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           44 |       86 | 2024-05-02 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -1.07 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           43 |      111 | 2024-05-01 | BOSS            | W   | 1.000      | 0.889        | -                | 0.507 (0.451)    | 1 (1.000) |     1.96 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           42 |      322 | 2024-04-21 | BLEED           | L   | 1.000      | -            | -                | -                | -         |   -22.39 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           41 |      348 | 2024-04-20 | GamerLegion     | W   | 1.000      | 0.384        | -                | 0.481 (0.185)    | 0 (0.000) |    15.02 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           40 |      458 | 2024-04-18 | LEON            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.25 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |      567 | 2024-04-13 | OG              | L   | 1.000      | -            | -                | -                | -         |   -16.52 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |      576 | 2024-04-12 | FORZE           | W   | 1.000      | 0.684        | 0.205 (0.140)    | 0.682 (0.467)    | 0 (0.000) |     7.08 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |      647 | 2024-04-10 | Gods Reign      | W   | 1.000      | 0.684        | 0.169 (0.115)    | -                | 0 (0.000) |     2.70 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      706 | 2024-04-09 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |   -16.86 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |      885 | 2024-04-03 | EYEBALLERS      | W   | 0.979      | 0.384        | -                | 0.599 (0.225)    | -         |     2.33 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |     1366 | 2024-03-09 | Spirit          | L   | 0.814      | -            | -                | -                | -         |    -1.88 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |     1395 | 2024-03-08 | GamerLegion     | W   | 0.806      | 0.535        | 0.187 (0.080)    | 0.481 (0.207)    | -         |    15.69 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |     1529 | 2024-03-03 | Young Ninjas    | L   | 0.774      | -            | -                | -                | -         |   -22.62 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |     1587 | 2024-03-01 | AMKAL           | W   | 0.758      | 0.500        | 0.200 (0.076)    | 0.851 (0.322)    | -         |     5.78 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1614 | 2024-02-28 | BLEED           | L   | 0.745      | -            | -                | -                | -         |   -19.09 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     2138 | 2024-02-02 | Apeks           | L   | 0.574      | -            | -                | -                | -         |   -10.17 | Krimbo, mantuu, prosus, s1n, tabseN |
|           28 |     2193 | 2024-01-31 | HEROIC          | L   | 0.561      | -            | -                | -                | -         |    -4.45 | Krimbo, mantuu, prosus, s1n, tabseN |
|           27 |     2200 | 2024-01-31 | ENCE            | W   | 0.559      | -            | -                | -                | 1 (0.559) |     9.95 | Krimbo, mantuu, prosus, s1n, tabseN |
|           26 |     2240 | 2024-01-28 | Astralis        | L   | 0.539      | -            | -                | -                | -         |    -4.87 | Krimbo, mantuu, prosus, s1n, tabseN |
|           25 |     2248 | 2024-01-27 | Virtus.pro      | L   | 0.534      | -            | -                | -                | -         |    -2.31 | Krimbo, mantuu, prosus, s1n, tabseN |
|           24 |     2264 | 2024-01-26 | Cloud9          | W   | 0.527      | 0.581        | 0.472 (0.145)    | 0.525 (0.161)    | 1 (0.527) |    13.01 | Krimbo, mantuu, prosus, s1n, tabseN |
|           23 |     2287 | 2024-01-25 | HEROIC          | W   | 0.521      | 0.581        | 0.347 (0.105)    | 0.712 (0.215)    | 1 (0.521) |    12.67 | Krimbo, mantuu, prosus, s1n, tabseN |
|           22 |     2304 | 2024-01-24 | Virtus.pro      | L   | 0.513      | -            | -                | -                | -         |    -2.06 | Krimbo, mantuu, prosus, s1n, tabseN |
|           21 |     2427 | 2024-01-20 | Nexus           | L   | 0.485      | -            | -                | -                | -         |   -14.31 | Krimbo, mantuu, prosus, s1n, tabseN |
|           20 |     2481 | 2024-01-19 | fnatic          | L   | 0.479      | -            | -                | -                | -         |   -11.46 | Krimbo, mantuu, prosus, s1n, tabseN |
|           19 |     2533 | 2024-01-18 | BetBoom         | L   | 0.473      | -            | -                | -                | -         |    -6.76 | Krimbo, mantuu, prosus, s1n, tabseN |
|           18 |     2543 | 2024-01-18 | Permitta        | W   | 0.472      | -            | -                | -                | -         |     0.94 | Krimbo, mantuu, prosus, s1n, tabseN |
|           17 |     3052 | 2023-12-13 | ENCE            | W   | 0.233      | -            | -                | -                | -         |     4.13 | Krimbo, mantuu, prosus, s1n, tabseN |
|           16 |     3054 | 2023-12-13 | Aurora          | W   | 0.233      | 0.384        | 0.973 (0.087)    | -                | -         |     5.34 | Krimbo, mantuu, prosus, s1n, tabseN |
|           15 |     3064 | 2023-12-12 | Sprout          | W   | 0.226      | -            | -                | -                | -         |     0.15 | Krimbo, mantuu, prosus, s1n, tabseN |
|           14 |     3151 | 2023-12-07 | Aurora          | W   | 0.194      | 0.589        | 0.973 (0.111)    | -                | -         |     4.51 | Krimbo, mantuu, prosus, s1n, tabseN |
|           13 |     3185 | 2023-12-06 | Aurora          | W   | 0.186      | 0.589        | 0.973 (0.107)    | -                | -         |     4.39 | Krimbo, mantuu, prosus, s1n, tabseN |
|           12 |     3206 | 2023-12-05 | 9 Pandas        | W   | 0.180      | -            | -                | -                | -         |     0.97 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |     3244 | 2023-12-03 | Guild Eagles    | W   | 0.166      | -            | -                | -                | -         |     0.55 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |     3301 | 2023-11-30 | Zero Tenacity   | W   | 0.146      | -            | -                | -                | -         |     0.35 | Krimbo, mantuu, prosus, s1n, tabseN |
|            9 |     3452 | 2023-11-20 | MIBR            | L   | 0.079      | -            | -                | -                | -         |    -0.47 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3469 | 2023-11-19 | paiN            | L   | 0.073      | -            | -                | -                | -         |    -0.23 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3483 | 2023-11-18 | Into the Breach | W   | 0.067      | -            | -                | -                | -         |     0.07 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3503 | 2023-11-18 | SINNERS         | W   | 0.065      | -            | -                | -                | -         |     0.26 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3522 | 2023-11-17 | ex-Preasy       | L   | 0.060      | -            | -                | -                | -         |    -1.70 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3610 | 2023-11-15 | 00NATION        | W   | 0.045      | -            | -                | -                | -         |     0.01 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3629 | 2023-11-14 | Eternal Fire    | W   | 0.039      | -            | -                | -                | -         |     1.02 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     3635 | 2023-11-13 | TSM             | W   | 0.034      | -            | -                | -                | -         |     0.02 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     3666 | 2023-11-12 | Apeks           | L   | 0.026      | -            | -                | -                | -         |    -0.48 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,529.47)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.45) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $35,000.00     | $35,000.00      |
| 2024-03-10 |      0.821 | $7,500.00      | $6,154.40       |
| 2024-02-02 |      0.574 | $4,500.00      | $2,583.37       |
| 2024-01-28 |      0.540 | $10,500.00     | $5,669.07       |
| 2023-12-13 |      0.233 | $12,500.00     | $2,918.18       |
| 2023-12-07 |      0.194 | $100,000.00    | $19,363.43      |
| 2023-11-19 |      0.074 | $25,000.00     | $1,841.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
