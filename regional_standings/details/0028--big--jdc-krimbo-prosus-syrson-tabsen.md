### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [28](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1190.8<br />
<br />
Final Rank Value (1190.8) = Starting Rank Value (1212.7) + Head To Head Adjustments (-21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.753[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.421<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1212.7
- 400 + ( ( 0.421 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1212.7


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
|           49 |       26 | 2024-04-21 | BLEED           | L   | 1.000      | -            | -                | -                | -         |   -19.36 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           48 |       52 | 2024-04-20 | GamerLegion     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.92 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           47 |      162 | 2024-04-18 | LEON            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.58 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           46 |      271 | 2024-04-13 | OG              | L   | 1.000      | -            | -                | -                | -         |   -12.06 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           45 |      280 | 2024-04-12 | FORZE           | W   | 1.000      | 0.684        | 0.140 (0.095)    | 0.784 (0.536)    | 0 (0.000) |     8.38 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           44 |      351 | 2024-04-10 | Gods Reign      | W   | 1.000      | 0.684        | 0.151 (0.104)    | 0.268 (0.184)    | 0 (0.000) |     5.76 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           43 |      410 | 2024-04-09 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |   -16.85 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           42 |      589 | 2024-04-03 | EYEBALLERS      | W   | 1.000      | 0.384        | -                | 0.406 (0.156)    | 0 (0.000) |     4.48 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           41 |     1070 | 2024-03-09 | Spirit          | L   | 0.907      | -            | -                | -                | -         |    -0.63 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           40 |     1099 | 2024-03-08 | GamerLegion     | W   | 0.900      | 0.535        | 0.185 (0.089)    | 0.368 (0.177)    | 0 (0.000) |    18.71 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |     1233 | 2024-03-03 | Young Ninjas    | L   | 0.867      | -            | -                | -                | -         |   -22.83 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |     1291 | 2024-03-01 | AMKAL           | W   | 0.851      | 0.500        | -                | 0.703 (0.299)    | 0 (0.000) |     6.70 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |     1318 | 2024-02-28 | BLEED           | L   | 0.838      | -            | -                | -                | -         |   -19.37 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |     1842 | 2024-02-02 | Apeks           | L   | 0.667      | -            | -                | -                | -         |    -9.49 | Krimbo, mantuu, prosus, s1n, tabseN |
|           35 |     1897 | 2024-01-31 | HEROIC          | L   | 0.654      | -            | -                | -                | -         |    -3.12 | Krimbo, mantuu, prosus, s1n, tabseN |
|           34 |     1904 | 2024-01-31 | ENCE            | W   | 0.652      | 0.143        | 0.299 (0.028)    | -                | 1 (0.652) |    12.84 | Krimbo, mantuu, prosus, s1n, tabseN |
|           33 |     1944 | 2024-01-28 | Astralis        | L   | 0.633      | -            | -                | -                | -         |    -5.57 | Krimbo, mantuu, prosus, s1n, tabseN |
|           32 |     1952 | 2024-01-27 | Virtus.pro      | L   | 0.627      | -            | -                | -                | -         |    -1.77 | Krimbo, mantuu, prosus, s1n, tabseN |
|           31 |     1968 | 2024-01-26 | Cloud9          | W   | 0.621      | 0.581        | 0.475 (0.171)    | 0.623 (0.225)    | 1 (0.621) |    18.02 | Krimbo, mantuu, prosus, s1n, tabseN |
|           30 |     1991 | 2024-01-25 | HEROIC          | W   | 0.614      | 0.581        | 0.281 (0.100)    | 0.731 (0.261)    | 1 (0.614) |    16.92 | Krimbo, mantuu, prosus, s1n, tabseN |
|           29 |     2008 | 2024-01-24 | Virtus.pro      | L   | 0.606      | -            | -                | -                | -         |    -1.54 | Krimbo, mantuu, prosus, s1n, tabseN |
|           28 |     2131 | 2024-01-20 | Nexus           | L   | 0.578      | -            | -                | -                | -         |   -16.04 | Krimbo, mantuu, prosus, s1n, tabseN |
|           27 |     2185 | 2024-01-19 | fnatic          | L   | 0.572      | -            | -                | -                | -         |   -12.67 | Krimbo, mantuu, prosus, s1n, tabseN |
|           26 |     2237 | 2024-01-18 | BetBoom         | L   | 0.566      | -            | -                | -                | -         |    -8.77 | Krimbo, mantuu, prosus, s1n, tabseN |
|           25 |     2247 | 2024-01-18 | Permitta        | W   | 0.566      | -            | -                | -                | -         |     1.90 | Krimbo, mantuu, prosus, s1n, tabseN |
|           24 |     2756 | 2023-12-13 | ENCE            | W   | 0.327      | 0.384        | 0.299 (0.038)    | -                | -         |     6.56 | Krimbo, mantuu, prosus, s1n, tabseN |
|           23 |     2758 | 2023-12-13 | Aurora          | W   | 0.326      | 0.384        | 0.763 (0.096)    | 1.000 (0.125)    | -         |     7.08 | Krimbo, mantuu, prosus, s1n, tabseN |
|           22 |     2768 | 2023-12-12 | Sprout          | W   | 0.319      | -            | -                | -                | -         |     0.66 | Krimbo, mantuu, prosus, s1n, tabseN |
|           21 |     2855 | 2023-12-07 | Aurora          | W   | 0.287      | 0.589        | 0.763 (0.129)    | 1.000 (0.169)    | -         |     6.37 | Krimbo, mantuu, prosus, s1n, tabseN |
|           20 |     2889 | 2023-12-06 | Aurora          | W   | 0.280      | 0.589        | 0.763 (0.126)    | 1.000 (0.165)    | -         |     6.33 | Krimbo, mantuu, prosus, s1n, tabseN |
|           19 |     2910 | 2023-12-05 | 9 Pandas        | W   | 0.274      | -            | -                | -                | -         |     3.00 | Krimbo, mantuu, prosus, s1n, tabseN |
|           18 |     2948 | 2023-12-03 | Guild Eagles    | W   | 0.260      | -            | -                | -                | -         |     2.08 | Krimbo, mantuu, prosus, s1n, tabseN |
|           17 |     3005 | 2023-11-30 | Zero Tenacity   | W   | 0.240      | -            | -                | -                | -         |     0.67 | Krimbo, mantuu, prosus, s1n, tabseN |
|           16 |     3156 | 2023-11-20 | MIBR            | L   | 0.172      | -            | -                | -                | -         |    -1.40 | Krimbo, mantuu, prosus, s1n, tabseN |
|           15 |     3173 | 2023-11-19 | paiN            | L   | 0.166      | -            | -                | -                | -         |    -0.22 | Krimbo, mantuu, prosus, s1n, tabseN |
|           14 |     3187 | 2023-11-18 | Into the Breach | W   | 0.161      | -            | -                | -                | -         |     0.52 | Krimbo, mantuu, prosus, s1n, tabseN |
|           13 |     3207 | 2023-11-18 | SINNERS         | W   | 0.158      | -            | -                | -                | -         |     1.58 | Krimbo, mantuu, prosus, s1n, tabseN |
|           12 |     3226 | 2023-11-17 | Preasy          | L   | 0.153      | -            | -                | -                | -         |    -3.63 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |     3314 | 2023-11-15 | 00NATION        | W   | 0.138      | -            | -                | -                | -         |     0.19 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |     3333 | 2023-11-14 | Eternal Fire    | W   | 0.132      | -            | -                | -                | -         |     3.78 | Krimbo, mantuu, prosus, s1n, tabseN |
|            9 |     3339 | 2023-11-13 | TSM             | W   | 0.127      | -            | -                | -                | -         |     0.23 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3370 | 2023-11-12 | Apeks           | L   | 0.120      | -            | -                | -                | -         |    -1.69 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3560 | 2023-11-03 | Cloud9          | L   | 0.059      | -            | -                | -                | -         |    -0.12 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3626 | 2023-10-31 | FURIA           | W   | 0.040      | -            | -                | -                | -         |     0.99 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3644 | 2023-10-31 | HEROIC          | L   | 0.039      | -            | -                | -                | -         |    -1.13 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3673 | 2023-10-30 | FURIA           | W   | 0.032      | -            | -                | -                | -         |     0.80 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3680 | 2023-10-30 | Aurora          | L   | 0.032      | -            | -                | -                | -         |    -0.26 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     3753 | 2023-10-28 | ENCE            | W   | 0.019      | -            | -                | -                | -         |     0.42 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     3814 | 2023-10-26 | Apeks           | W   | 0.006      | -            | -                | -                | -         |     0.11 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($89,647.21)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $35,000.00     | $35,000.00      |
| 2024-03-10 |      0.914 | $7,500.00      | $6,854.20       |
| 2024-02-02 |      0.667 | $4,500.00      | $3,003.25       |
| 2024-01-28 |      0.633 | $10,500.00     | $6,648.78       |
| 2023-12-13 |      0.327 | $12,500.00     | $4,084.50       |
| 2023-12-07 |      0.287 | $100,000.00    | $28,694.05      |
| 2023-11-19 |      0.167 | $25,000.00     | $4,173.68       |
| 2023-11-05 |      0.074 | $12,500.00     | $921.35         |
| 2023-11-02 |      0.053 | $5,000.00      | $267.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
