### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [37](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1154.6<br />
<br />
Final Rank Value (1154.6) = Starting Rank Value (1169.6) + Head To Head Adjustments (-14.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.577[<sup>2</sup>](#table1)

The average of these factors is 0.396<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1169.6
- 400 + ( ( 0.396 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1169.6


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
|           50 |      831 | 2024-04-27 | MIBR              | L   | 0.989      | -            | -                | -                | -         |    -2.89 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           49 |      880 | 2024-04-25 | Aurora            | W   | 0.976      | 0.500        | 0.493 (0.241)    | 0.840 (0.410)    | 1 (0.976) |    24.16 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           48 |      886 | 2024-04-25 | sunday school     | W   | 0.974      | -            | -                | -                | 1 (0.974) |     2.14 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           47 |     1075 | 2024-04-18 | BetBoom           | L   | 0.926      | -            | -                | -                | -         |    -7.55 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           46 |     1078 | 2024-04-18 | DMS               | W   | 0.926      | -            | -                | -                | -         |     2.22 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           45 |     1091 | 2024-04-18 | AMKAL             | W   | 0.925      | 0.143        | 0.144 (0.019)    | 0.736 (0.097)    | -         |    16.19 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           44 |     1255 | 2024-04-11 | Aurora            | L   | 0.879      | -            | -                | -                | -         |    -5.51 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           43 |     1294 | 2024-04-10 | AMKAL             | L   | 0.873      | -            | -                | -                | -         |   -13.59 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           42 |     1347 | 2024-04-09 | fnatic            | W   | 0.866      | 0.143        | 0.148 (0.018)    | 0.565 (0.070)    | -         |    13.95 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           41 |     1355 | 2024-04-09 | KOI               | W   | 0.865      | 0.143        | -                | 0.570 (0.070)    | -         |     8.80 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           40 |     1376 | 2024-04-08 | fnatic            | L   | 0.860      | -            | -                | -                | -         |   -13.01 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           39 |     1392 | 2024-04-08 | GUN5              | W   | 0.858      | -            | -                | -                | -         |     0.62 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           38 |     1533 | 2024-04-03 | Monte             | L   | 0.825      | -            | -                | -                | -         |    -9.83 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           37 |     1562 | 2024-04-02 | Aurora            | L   | 0.819      | -            | -                | -                | -         |    -4.93 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           36 |     1569 | 2024-04-02 | B8                | W   | 0.818      | 0.143        | 0.165 (0.019)    | 1.000 (0.117)    | -         |    11.39 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           35 |     1596 | 2024-03-31 | B8                | L   | 0.804      | -            | -                | -                | -         |   -14.41 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           34 |     1628 | 2024-03-28 | 3DMAX             | L   | 0.785      | -            | -                | -                | -         |   -14.01 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           33 |     1693 | 2024-03-26 | FORZE             | L   | 0.771      | -            | -                | -                | -         |   -16.10 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           32 |     1794 | 2024-03-19 | Legacy            | L   | 0.725      | -            | -                | -                | -         |   -16.00 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           31 |     1806 | 2024-03-18 | Imperial          | L   | 0.717      | -            | -                | -                | -         |    -3.55 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           30 |     1823 | 2024-03-17 | AMKAL             | W   | 0.713      | 0.143        | 0.144 (0.015)    | 0.736 (0.075)    | 1 (0.713) |    10.12 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           29 |     1835 | 2024-03-17 | paiN              | L   | 0.711      | -            | -                | -                | -         |    -2.38 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           28 |     1965 | 2024-03-12 | Metizport         | L   | 0.679      | -            | -                | -                | -         |   -15.39 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           27 |     1974 | 2024-03-11 | Virtus.pro        | L   | 0.673      | -            | -                | -                | -         |    -1.30 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           26 |     1983 | 2024-03-11 | KOI               | W   | 0.672      | 0.143        | -                | 0.570 (0.055)    | -         |     5.57 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           25 |     2077 | 2024-03-07 | Space             | W   | 0.646      | 0.500        | -                | 0.437 (0.141)    | -         |     2.08 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           24 |     2104 | 2024-03-06 | PARIVISION        | L   | 0.639      | -            | -                | -                | -         |   -16.91 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           23 |     2414 | 2024-02-21 | Gaimin Gladiators | W   | 0.544      | 0.143        | -                | 0.809 (0.063)    | 1 (0.544) |     8.68 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           22 |     2446 | 2024-02-20 | Monte             | W   | 0.537      | 0.143        | 0.181 (0.014)    | -                | 1 (0.537) |    11.08 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           21 |     2459 | 2024-02-19 | Cloud9            | L   | 0.533      | -            | -                | -                | -         |    -3.81 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           20 |     2470 | 2024-02-19 | OG                | W   | 0.531      | 0.143        | 0.278 (0.021)    | -                | 1 (0.531) |     8.47 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           19 |     2653 | 2024-02-11 | Metizport         | L   | 0.480      | -            | -                | -                | -         |   -11.57 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           18 |     2656 | 2024-02-11 | 3DMAX             | W   | 0.479      | -            | -                | -                | -         |     6.34 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           17 |     2669 | 2024-02-10 | Metizport         | W   | 0.471      | 0.143        | -                | 0.860 (0.058)    | -         |     3.35 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           16 |     2672 | 2024-02-10 | ex-Anonymo        | W   | 0.471      | -            | -                | -                | -         |     0.73 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           15 |     2736 | 2024-02-04 | Natus Vincere     | L   | 0.433      | -            | -                | -                | -         |    -0.28 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           14 |     2761 | 2024-02-03 | Complexity        | L   | 0.426      | -            | -                | -                | -         |    -1.64 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           13 |     2789 | 2024-02-02 | BIG               | W   | 0.420      | 0.143        | 0.215 (0.013)    | -                | 1 (0.420) |    10.13 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           12 |     2824 | 2024-02-01 | FURIA             | W   | 0.413      | -            | -                | -                | 1 (0.413) |     9.68 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           11 |     2849 | 2024-01-31 | Spirit            | L   | 0.405      | -            | -                | -                | -         |    -0.22 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           10 |     3619 | 2023-12-17 | Virtus.pro        | L   | 0.107      | -            | -                | -                | -         |    -0.17 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            9 |     3623 | 2023-12-17 | Monte             | W   | 0.106      | 0.500        | 0.181 (0.010)    | -                | 1 (0.106) |     2.26 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            8 |     3678 | 2023-12-15 | TheMongolz        | W   | 0.094      | 0.500        | 0.176 (0.008)    | -                | 1 (0.094) |     2.50 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            7 |     3689 | 2023-12-15 | GamerLegion       | W   | 0.092      | -            | -                | -                | -         |     1.33 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            6 |     3776 | 2023-12-08 | FORZE             | L   | 0.046      | -            | -                | -                | -         |    -1.37 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            5 |     3804 | 2023-12-07 | EYEBALLERS        | W   | 0.039      | -            | -                | -                | -         |     0.20 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            4 |     3831 | 2023-12-06 | 3DMAX             | L   | 0.033      | -            | -                | -                | -         |    -0.51 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            3 |     3862 | 2023-12-05 | Space             | W   | 0.026      | -            | -                | -                | -         |     0.10 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            2 |     3893 | 2023-12-03 | FURIA             | L   | 0.013      | -            | -                | -                | -         |    -0.10 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            1 |     3923 | 2023-12-02 | ENCE              | W   | 0.005      | -            | -                | -                | -         |     0.01 | CacaNito, jkaem, kyxsan, nawwk, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,040.56)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      0.990 | $10,000.00     | $9,901.46       |
| 2024-03-20 |      0.732 | $10,000.00     | $7,324.46       |
| 2024-02-11 |      0.479 | $10,000.00     | $4,790.47       |
| 2023-12-17 |      0.107 | $20,000.00     | $2,138.20       |
| 2023-12-10 |      0.059 | $6,500.00      | $385.95         |
| 2023-12-03 |      0.013 | $40,000.00     | $500.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
