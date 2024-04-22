### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1119.4<br />
<br />
Final Rank Value (1119.4) = Starting Rank Value (1249.0) + Head To Head Adjustments (-129.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.583[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.637[<sup>2</sup>](#table1)

The average of these factors is 0.440<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1249.0
- 400 + ( ( 0.440 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1249.0


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
|           65 |      128 | 2024-04-18 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -12.76 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           64 |      131 | 2024-04-18 | DMS               | W   | 1.000      | -            | -                | -                | -         |     1.24 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           63 |      144 | 2024-04-18 | AMKAL             | W   | 1.000      | 0.143        | -                | 0.703 (0.100)    | -         |    12.81 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           62 |      308 | 2024-04-11 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.80 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           61 |      347 | 2024-04-10 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -20.88 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           60 |      400 | 2024-04-09 | fnatic            | W   | 1.000      | 0.143        | 0.240 (0.034)    | 0.624 (0.089)    | -         |    14.64 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           59 |      408 | 2024-04-09 | KOI               | W   | 1.000      | 0.143        | -                | 0.902 (0.129)    | -         |    11.00 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           58 |      429 | 2024-04-08 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -16.45 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           57 |      445 | 2024-04-08 | GUN5              | W   | 1.000      | -            | -                | -                | -         |     1.53 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           56 |      586 | 2024-04-03 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -16.78 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           55 |      615 | 2024-04-02 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.57 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           54 |      622 | 2024-04-02 | B8                | W   | 1.000      | 0.143        | -                | 0.655 (0.094)    | -         |     6.25 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           53 |      649 | 2024-03-31 | B8                | L   | 1.000      | -            | -                | -                | -         |   -25.81 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           52 |      681 | 2024-03-28 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -23.78 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           51 |      746 | 2024-03-26 | FORZE             | L   | 1.000      | -            | -                | -                | -         |   -23.41 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           50 |      847 | 2024-03-19 | Legacy            | L   | 0.972      | -            | -                | -                | -         |   -20.28 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           49 |      859 | 2024-03-18 | Imperial          | L   | 0.965      | -            | -                | -                | -         |    -4.12 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           48 |      876 | 2024-03-17 | AMKAL             | W   | 0.960      | 0.143        | -                | 0.703 (0.096)    | 1 (0.960) |     6.03 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           47 |      888 | 2024-03-17 | paiN              | L   | 0.958      | -            | -                | -                | -         |    -3.34 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           46 |     1018 | 2024-03-12 | Metizport         | L   | 0.926      | -            | -                | -                | -         |   -22.25 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           45 |     1027 | 2024-03-11 | Virtus.pro        | L   | 0.921      | -            | -                | -                | -         |    -3.13 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           44 |     1036 | 2024-03-11 | KOI               | W   | 0.919      | 0.143        | -                | 0.902 (0.118)    | -         |     7.36 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           43 |     1130 | 2024-03-07 | Space             | W   | 0.893      | -            | -                | -                | -         |     1.19 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           42 |     1157 | 2024-03-06 | PARIVISION        | L   | 0.886      | -            | -                | -                | -         |   -26.98 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           41 |     1467 | 2024-02-21 | Gaimin Gladiators | W   | 0.792      | 0.143        | -                | 1.000 (0.113)    | 1 (0.792) |    11.98 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           40 |     1499 | 2024-02-20 | Monte             | W   | 0.784      | 0.143        | 0.236 (0.026)    | -                | 1 (0.784) |    11.03 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           39 |     1512 | 2024-02-19 | Cloud9            | L   | 0.780      | -            | -                | -                | -         |    -3.03 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           38 |     1523 | 2024-02-19 | OG                | W   | 0.778      | 0.143        | 0.497 (0.055)    | -                | 1 (0.778) |    12.84 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           37 |     1706 | 2024-02-11 | Metizport         | L   | 0.727      | -            | -                | -                | -         |   -18.96 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           36 |     1709 | 2024-02-11 | 3DMAX             | W   | 0.726      | -            | -                | -                | -         |     4.05 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           35 |     1722 | 2024-02-10 | Metizport         | W   | 0.719      | 0.143        | -                | 1.000 (0.103)    | -         |     3.41 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           34 |     1725 | 2024-02-10 | ex-Anonymo        | W   | 0.718      | -            | -                | -                | -         |     1.24 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           33 |     1789 | 2024-02-04 | Natus Vincere     | L   | 0.680      | -            | -                | -                | -         |    -0.49 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           32 |     1814 | 2024-02-03 | Complexity        | L   | 0.674      | -            | -                | -                | -         |    -8.04 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           31 |     1842 | 2024-02-02 | BIG               | W   | 0.667      | 0.143        | 0.471 (0.045)    | -                | 1 (0.667) |     9.49 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           30 |     1877 | 2024-02-01 | FURIA             | W   | 0.661      | 0.143        | 0.316 (0.030)    | -                | 1 (0.661) |    14.91 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           29 |     1902 | 2024-01-31 | Spirit            | L   | 0.653      | -            | -                | -                | -         |    -0.69 | CacaNito, jkaem, nawwk, sense, STYKO  |
|           28 |     2672 | 2023-12-17 | Virtus.pro        | L   | 0.354      | -            | -                | -                | -         |    -1.18 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           27 |     2676 | 2023-12-17 | Monte             | W   | 0.353      | 0.500        | 0.236 (0.042)    | 0.598 (0.106)    | 1 (0.353) |     4.83 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           26 |     2731 | 2023-12-15 | TheMongolz        | W   | 0.341      | 0.500        | 0.247 (0.042)    | 0.587 (0.100)    | 1 (0.341) |     6.66 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           25 |     2742 | 2023-12-15 | GamerLegion       | W   | 0.340      | 0.500        | 0.185 (0.032)    | -                | 1 (0.340) |     6.76 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           24 |     2829 | 2023-12-08 | FORZE             | L   | 0.294      | -            | -                | -                | -         |    -8.59 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           23 |     2857 | 2023-12-07 | EYEBALLERS        | W   | 0.287      | -            | -                | -                | -         |     1.12 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           22 |     2884 | 2023-12-06 | 3DMAX             | L   | 0.280      | -            | -                | -                | -         |    -6.96 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           21 |     2915 | 2023-12-05 | Space             | W   | 0.273      | -            | -                | -                | -         |     0.41 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           20 |     2946 | 2023-12-03 | FURIA             | L   | 0.260      | -            | -                | -                | -         |    -2.15 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           19 |     2976 | 2023-12-02 | ENCE              | W   | 0.252      | -            | -                | -                | 1 (0.252) |     0.57 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           18 |     3007 | 2023-11-30 | FURIA             | W   | 0.239      | 0.589        | 0.316 (0.044)    | -                | -         |     5.58 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           17 |     3013 | 2023-11-30 | MOUZ              | W   | 0.238      | 0.589        | 1.000 (0.140)    | -                | -         |     7.27 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           16 |     3154 | 2023-11-20 | ENCE              | L   | 0.173      | -            | -                | -                | -         |    -1.91 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           15 |     3188 | 2023-11-18 | FORZE             | W   | 0.160      | -            | -                | -                | -         |     0.33 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           14 |     3220 | 2023-11-17 | KOI               | W   | 0.154      | -            | -                | -                | -         |     1.17 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           13 |     3230 | 2023-11-17 | PERA              | W   | 0.153      | -            | -                | -                | -         |     0.32 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           12 |     3255 | 2023-11-16 | Permitta          | W   | 0.147      | -            | -                | -                | -         |     0.51 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           11 |     3266 | 2023-11-16 | FTW               | L   | 0.146      | -            | -                | -                | -         |    -4.42 | CacaNito, jkaem, kyxsan, nawwk, sense |
|           10 |     3347 | 2023-11-13 | Aurora            | L   | 0.126      | -            | -                | -                | -         |    -1.23 | CacaNito, jkaem, kyxsan, sense, STYKO |
|            9 |     3370 | 2023-11-12 | BIG               | W   | 0.120      | -            | -                | -                | -         |     1.69 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            8 |     3459 | 2023-11-08 | Spirit            | L   | 0.093      | -            | -                | -                | -         |    -0.08 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            7 |     3616 | 2023-11-01 | SINNERS           | W   | 0.045      | -            | -                | -                | -         |     0.38 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            6 |     3631 | 2023-10-31 | Aurora            | L   | 0.040      | -            | -                | -                | -         |    -0.38 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            5 |     3643 | 2023-10-31 | FURIA             | L   | 0.039      | -            | -                | -                | -         |    -0.32 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            4 |     3704 | 2023-10-29 | ENCE              | W   | 0.026      | -            | -                | -                | -         |     0.54 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            3 |     3715 | 2023-10-29 | Sprout            | W   | 0.025      | -            | -                | -                | -         |     0.01 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            2 |     3744 | 2023-10-28 | Astralis          | W   | 0.020      | -            | -                | -                | -         |     0.04 | CacaNito, jkaem, kyxsan, nawwk, sense |
|            1 |     3814 | 2023-10-26 | BIG               | L   | 0.006      | -            | -                | -                | -         |    -0.11 | CacaNito, jkaem, kyxsan, nawwk, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,806.51)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-20 |      0.980 | $10,000.00     | $9,798.45       |
| 2024-02-11 |      0.726 | $10,000.00     | $7,264.46       |
| 2023-12-17 |      0.354 | $20,000.00     | $7,086.17       |
| 2023-12-10 |      0.307 | $6,500.00      | $1,994.04       |
| 2023-12-03 |      0.260 | $40,000.00     | $10,395.98      |
| 2023-11-02 |      0.053 | $5,000.00      | $267.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
