### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [42](../standings_global.md)<br />
Regional Rank: [30]( ../standings_europe.md)<br />
Final Rank Value:  1163.2<br />
<br />
Final Rank Value (1163.2) = Starting Rank Value (1122.4) + Head To Head Adjustments (40.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.481[<sup>2</sup>](#table1)

The average of these factors is 0.362<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1122.4
- 400 + ( ( 0.362 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1122.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |     1331 | 2024-04-27 | MIBR              | L   | 0.910      | -            | -                | -                | -         |    -2.64 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           43 |     1380 | 2024-04-25 | Aurora            | W   | 0.896      | 0.500        | 0.513 (0.230)    | 0.918 (0.412)    | 1 (0.896) |    24.71 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           42 |     1386 | 2024-04-25 | sunday school     | W   | 0.895      | -            | -                | -                | 1 (0.895) |     1.87 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           41 |     1575 | 2024-04-18 | BetBoom           | L   | 0.847      | -            | -                | -                | -         |    -2.66 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           40 |     1578 | 2024-04-18 | DMS               | W   | 0.846      | 0.143        | -                | 0.524 (0.063)    | -         |     5.10 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           39 |     1591 | 2024-04-18 | AMKAL             | W   | 0.846      | 0.143        | 0.143 (0.017)    | 0.711 (0.086)    | -         |    16.05 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           38 |     1755 | 2024-04-11 | Aurora            | L   | 0.800      | -            | -                | -                | -         |    -2.79 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           37 |     1794 | 2024-04-10 | AMKAL             | L   | 0.794      | -            | -                | -                | -         |   -11.26 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           36 |     1847 | 2024-04-09 | fnatic            | W   | 0.787      | 0.143        | 0.198 (0.022)    | 0.650 (0.073)    | -         |    18.61 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           35 |     1855 | 2024-04-09 | KOI               | W   | 0.786      | 0.143        | -                | 0.522 (0.059)    | -         |    10.00 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           34 |     1876 | 2024-04-08 | fnatic            | L   | 0.780      | -            | -                | -                | -         |    -5.69 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           33 |     1892 | 2024-04-08 | GUN5              | W   | 0.779      | -            | -                | -                | -         |     0.43 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           32 |     2033 | 2024-04-03 | Monte             | L   | 0.745      | -            | -                | -                | -         |    -7.46 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           31 |     2062 | 2024-04-02 | Aurora            | L   | 0.740      | -            | -                | -                | -         |    -2.42 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           30 |     2069 | 2024-04-02 | B8                | W   | 0.739      | 0.143        | 0.160 (0.017)    | 1.000 (0.106)    | -         |    12.07 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           29 |     2096 | 2024-03-31 | B8                | L   | 0.725      | -            | -                | -                | -         |   -11.17 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           28 |     2128 | 2024-03-28 | 3DMAX             | L   | 0.706      | -            | -                | -                | -         |    -9.83 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           27 |     2193 | 2024-03-26 | FORZE             | L   | 0.692      | -            | -                | -                | -         |   -13.12 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           26 |     2294 | 2024-03-19 | Legacy            | L   | 0.646      | -            | -                | -                | -         |   -12.14 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           25 |     2306 | 2024-03-18 | Imperial          | L   | 0.638      | -            | -                | -                | -         |    -2.55 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           24 |     2323 | 2024-03-17 | AMKAL             | W   | 0.634      | 0.143        | 0.143 (0.013)    | 0.711 (0.064)    | 1 (0.634) |    10.56 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           23 |     2335 | 2024-03-17 | paiN              | L   | 0.632      | -            | -                | -                | -         |    -1.72 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           22 |     2465 | 2024-03-12 | Metizport         | L   | 0.599      | -            | -                | -                | -         |   -12.38 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           21 |     2474 | 2024-03-11 | Virtus.pro        | L   | 0.594      | -            | -                | -                | -         |    -0.84 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           20 |     2483 | 2024-03-11 | KOI               | W   | 0.593      | -            | -                | -                | -         |     6.99 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           19 |     2577 | 2024-03-07 | Space             | W   | 0.566      | -            | -                | -                | -         |     0.27 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           18 |     2604 | 2024-03-06 | PARIVISION        | L   | 0.560      | -            | -                | -                | -         |   -13.10 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           17 |     2914 | 2024-02-21 | Gaimin Gladiators | W   | 0.465      | 0.143        | -                | 0.749 (0.050)    | 1 (0.465) |     8.61 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           16 |     2946 | 2024-02-20 | Monte             | W   | 0.458      | 0.143        | 0.179 (0.012)    | 0.686 (0.045)    | 1 (0.458) |    10.31 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           15 |     2959 | 2024-02-19 | Cloud9            | L   | 0.453      | -            | -                | -                | -         |    -3.13 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           14 |     2970 | 2024-02-19 | OG                | W   | 0.452      | 0.143        | 0.249 (0.016)    | -                | 1 (0.452) |     8.03 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           13 |     3153 | 2024-02-11 | Metizport         | L   | 0.401      | -            | -                | -                | -         |    -8.85 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           12 |     3156 | 2024-02-11 | 3DMAX             | W   | 0.400      | 0.143        | -                | 0.821 (0.047)    | -         |     7.18 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           11 |     3169 | 2024-02-10 | Metizport         | W   | 0.392      | -            | -                | -                | -         |     3.64 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           10 |     3172 | 2024-02-10 | ex-Anonymo        | W   | 0.392      | -            | -                | -                | -         |     0.68 | CacaNito, jkaem, nawwk, sense, STYKO  |
|            9 |     3236 | 2024-02-04 | Natus Vincere     | L   | 0.353      | -            | -                | -                | -         |    -0.19 | CacaNito, jkaem, nawwk, sense, STYKO  |
|            8 |     3261 | 2024-02-03 | Complexity        | L   | 0.347      | -            | -                | -                | -         |    -0.64 | CacaNito, jkaem, nawwk, sense, STYKO  |
|            7 |     3289 | 2024-02-02 | BIG               | W   | 0.341      | 0.143        | 0.228 (0.011)    | -                | 1 (0.341) |     9.20 | CacaNito, jkaem, nawwk, sense, STYKO  |
|            6 |     3324 | 2024-02-01 | FURIA             | W   | 0.334      | 0.143        | 0.249 (0.012)    | -                | 1 (0.334) |    10.02 | CacaNito, jkaem, nawwk, sense, STYKO  |
|            5 |     3349 | 2024-01-31 | Spirit            | L   | 0.326      | -            | -                | -                | -         |    -0.15 | CacaNito, jkaem, nawwk, sense, STYKO  |
|            4 |     4119 | 2023-12-17 | Virtus.pro        | L   | 0.028      | -            | -                | -                | -         |    -0.03 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            3 |     4123 | 2023-12-17 | Monte             | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.62 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            2 |     4178 | 2023-12-15 | The MongolZ       | W   | 0.015      | 0.500        | 0.978 (0.007)    | -                | 1 (0.015) |     0.45 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            1 |     4189 | 2023-12-15 | GamerLegion       | W   | 0.013      | -            | -                | -                | -         |     0.19 | CacaNito, jkaem, kyxsan, nawwk, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,195.97)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      0.911 | $10,000.00     | $9,109.73       |
| 2024-03-20 |      0.653 | $10,000.00     | $6,532.73       |
| 2024-02-11 |      0.400 | $10,000.00     | $3,998.75       |
| 2023-12-17 |      0.028 | $20,000.00     | $554.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
