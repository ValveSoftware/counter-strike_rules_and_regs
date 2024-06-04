### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1385.5<br />
<br />
Final Rank Value (1385.5) = Starting Rank Value (1402.2) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.600[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.668[<sup>2</sup>](#table1)

The average of these factors is 0.516<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1402.2
- 400 + ( ( 0.516 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1402.2


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
|           42 |        8 | 2024-05-29 | Virtus.pro      | W   | 1.000      | 0.624        | 0.271 (0.169)    | 0.499 (0.312)    | 1 (1.000) |    25.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           41 |       25 | 2024-05-28 | FlyQuest        | W   | 1.000      | 0.624        | 0.114 (0.071)    | 0.648 (0.404)    | 1 (1.000) |    18.02 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           40 |       49 | 2024-05-27 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -1.72 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |      244 | 2024-05-20 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -8.36 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |      263 | 2024-05-19 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -3.00 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |      639 | 2024-05-07 | G2              | L   | 1.000      | -            | -                | -                | -         |    -3.27 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      701 | 2024-05-03 | HEROIC          | W   | 1.000      | 0.889        | 0.322 (0.286)    | 0.662 (0.589)    | 1 (1.000) |    26.17 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |      710 | 2024-05-03 | PERA            | W   | 1.000      | 0.889        | -                | 0.408 (0.363)    | 1 (1.000) |     2.20 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |      737 | 2024-05-02 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -1.33 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |      762 | 2024-05-01 | BOSS            | W   | 1.000      | 0.889        | -                | 0.477 (0.424)    | 1 (1.000) |     2.05 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |      973 | 2024-04-21 | BLEED           | L   | 0.944      | -            | -                | -                | -         |   -19.92 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |      999 | 2024-04-20 | GamerLegion     | W   | 0.938      | 0.384        | 0.224 (0.081)    | -                | 0 (0.000) |     8.51 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1109 | 2024-04-18 | LEON            | W   | 0.924      | -            | -                | -                | 0 (0.000) |     0.26 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1218 | 2024-04-13 | OG              | L   | 0.891      | -            | -                | -                | -         |   -18.37 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1227 | 2024-04-12 | FORZE           | W   | 0.886      | 0.684        | 0.108 (0.066)    | 0.499 (0.302)    | -         |     4.58 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1298 | 2024-04-10 | Gods Reign      | W   | 0.872      | 0.684        | 0.082 (0.049)    | 0.228 (0.136)    | -         |     1.81 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1357 | 2024-04-09 | BetBoom         | L   | 0.865      | -            | -                | -                | -         |   -14.39 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1536 | 2024-04-03 | EYEBALLERS      | W   | 0.824      | 0.384        | -                | 0.611 (0.194)    | -         |     1.62 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     2017 | 2024-03-09 | Spirit          | L   | 0.660      | -            | -                | -                | -         |    -0.88 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     2046 | 2024-03-08 | GamerLegion     | W   | 0.652      | 0.535        | 0.072 (0.025)    | -                | -         |     5.47 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     2180 | 2024-03-03 | Young Ninjas    | L   | 0.619      | -            | -                | -                | -         |   -18.54 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     2238 | 2024-03-01 | AMKAL           | W   | 0.604      | 0.500        | 0.144 (0.043)    | 0.736 (0.222)    | -         |     4.76 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     2265 | 2024-02-28 | BLEED           | L   | 0.591      | -            | -                | -                | -         |   -14.07 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     2789 | 2024-02-02 | Apeks           | L   | 0.420      | -            | -                | -                | -         |   -10.13 | Krimbo, mantuu, prosus, s1n, tabseN |
|           18 |     2844 | 2024-01-31 | HEROIC          | L   | 0.407      | -            | -                | -                | -         |    -2.06 | Krimbo, mantuu, prosus, s1n, tabseN |
|           17 |     2851 | 2024-01-31 | ENCE            | W   | 0.405      | -            | -                | -                | 1 (0.405) |     5.94 | Krimbo, mantuu, prosus, s1n, tabseN |
|           16 |     2891 | 2024-01-28 | Astralis        | L   | 0.385      | -            | -                | -                | -         |    -1.50 | Krimbo, mantuu, prosus, s1n, tabseN |
|           15 |     2899 | 2024-01-27 | Virtus.pro      | L   | 0.380      | -            | -                | -                | -         |    -1.87 | Krimbo, mantuu, prosus, s1n, tabseN |
|           14 |     2915 | 2024-01-26 | Cloud9          | W   | 0.373      | 0.581        | 0.188 (0.041)    | -                | 1 (0.373) |     6.37 | Krimbo, mantuu, prosus, s1n, tabseN |
|           13 |     2938 | 2024-01-25 | HEROIC          | W   | 0.367      | 0.581        | 0.322 (0.069)    | 0.662 (0.141)    | 1 (0.367) |     9.83 | Krimbo, mantuu, prosus, s1n, tabseN |
|           12 |     2955 | 2024-01-24 | Virtus.pro      | L   | 0.359      | -            | -                | -                | -         |    -1.69 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |     3078 | 2024-01-20 | Nexus           | L   | 0.331      | -            | -                | -                | -         |    -9.85 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |     3132 | 2024-01-19 | fnatic          | L   | 0.325      | -            | -                | -                | -         |    -8.57 | Krimbo, mantuu, prosus, s1n, tabseN |
|            9 |     3184 | 2024-01-18 | BetBoom         | L   | 0.319      | -            | -                | -                | -         |    -4.63 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3194 | 2024-01-18 | Permitta        | W   | 0.318      | -            | -                | -                | -         |     0.55 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3703 | 2023-12-13 | ENCE            | W   | 0.079      | -            | -                | -                | -         |     1.14 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3705 | 2023-12-13 | Aurora          | W   | 0.078      | -            | -                | -                | -         |     1.51 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3715 | 2023-12-12 | Sprout          | W   | 0.072      | -            | -                | -                | -         |     0.03 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3802 | 2023-12-07 | Aurora          | W   | 0.040      | -            | -                | -                | -         |     0.76 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3836 | 2023-12-06 | Aurora          | W   | 0.032      | -            | -                | -                | -         |     0.62 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     3857 | 2023-12-05 | 9 Pandas        | W   | 0.026      | -            | -                | -                | -         |     0.16 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     3895 | 2023-12-03 | ex-Guild Eagles | W   | 0.012      | -            | -                | -                | -         |     0.03 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,845.08)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-04-14 |      0.899 | $35,000.00     | $31,459.15      |
| 2024-03-10 |      0.666 | $7,500.00      | $4,998.70       |
| 2024-02-02 |      0.420 | $4,500.00      | $1,889.95       |
| 2024-01-28 |      0.386 | $10,500.00     | $4,051.10       |
| 2023-12-13 |      0.079 | $12,500.00     | $992.02         |
| 2023-12-07 |      0.040 | $100,000.00    | $3,954.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
