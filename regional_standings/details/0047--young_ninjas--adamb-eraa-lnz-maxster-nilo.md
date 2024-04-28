### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: adamb, eraa, LNZ, maxster, nilo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  941.8<br />
<br />
Final Rank Value (941.8) = Starting Rank Value (944.5) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.472[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.5
- 400 + ( ( 0.266 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 944.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       32 | 2023-02-11 | EYEBALLERS         | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.776 (0.337)    | 0 (0.000) |    15.86 | adamb, eraa, LNZ, maxster, nilo      |
|           56 |       64 | 2023-02-09 | Into the Breach    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.64 | adamb, eraa, LNZ, maxster, nilo      |
|           55 |      100 | 2023-02-07 | UNGENTIUM          | W   | 1.000      | 0.435        | -                | 0.474 (0.206)    | 0 (0.000) |     9.79 | adamb, eraa, LNZ, maxster, nilo      |
|           54 |      126 | 2023-02-06 | HAVU               | L   | 1.000      | -            | -                | -                | -         |   -11.20 | adamb, eraa, LNZ, maxster, nilo      |
|           53 |      147 | 2023-02-05 | Apeks Rebels       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.59 | adamb, eraa, LNZ, maxster, nilo      |
|           52 |      274 | 2023-01-31 | Tricked Future     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.71 | adamb, eraa, LNZ, maxster, nilo      |
|           51 |      320 | 2023-01-29 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -15.82 | adamb, eraa, LNZ, maxster, nilo      |
|           50 |      371 | 2023-01-27 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |   -21.41 | adamb, eraa, LNZ, nilo, susp         |
|           49 |      402 | 2023-01-26 | HAVU               | L   | 1.000      | -            | -                | -                | -         |   -12.12 | adamb, eraa, LNZ, nilo, susp         |
|           48 |      443 | 2023-01-25 | UNGENTIUM          | L   | 1.000      | -            | -                | -                | -         |   -22.69 | abdi, adamb, eraa, LNZ, nilo         |
|           47 |      493 | 2023-01-23 | farfaraway         | W   | 1.000      | 0.477        | 0.033 (0.016)    | -                | 0 (0.000) |    14.20 | abdi, adamb, eraa, LNZ, nilo         |
|           46 |      513 | 2023-01-22 | ZURIA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.42 | Jibe, SeBreeZe, tvs, Twinkey, virree |
|           45 |      522 | 2023-01-22 | cu fish            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.30 | adamb, eraa, HugoXD, maxster, susp   |
|           44 |      589 | 2023-01-19 | Nexus              | L   | 1.000      | -            | -                | -                | -         |   -23.94 | adamb, eraa, LNZ, maxster, nilo      |
|           43 |      596 | 2023-01-19 | ECLOT              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.10 | adamb, eraa, LNZ, maxster, nilo      |
|           42 |      647 | 2023-01-17 | Astralis Talent    | W   | 1.000      | -            | -                | -                | -         |    13.87 | adamb, eraa, LNZ, maxster, nilo      |
|           41 |      835 | 2022-12-16 | BIG                | L   | 0.814      | -            | -                | -                | -         |    -2.65 | adamb, eraa, maxster, nilo, ztr      |
|           40 |      948 | 2022-12-11 | ex-Into the Breach | W   | 0.780      | 0.435        | -                | 0.520 (0.176)    | -         |     9.27 | adamb, eraa, maxster, nilo, ztr      |
|           39 |     1014 | 2022-12-09 | EC Brugge          | W   | 0.766      | 0.435        | -                | 0.507 (0.169)    | -         |     6.37 | adamb, eraa, maxster, nilo, ztr      |
|           38 |     1073 | 2022-12-07 | K23                | L   | 0.753      | -            | -                | -                | -         |   -12.97 | adamb, eraa, maxster, nilo, ztr      |
|           37 |     1106 | 2022-12-06 | ex-Finest          | L   | 0.747      | -            | -                | -                | -         |   -13.56 | adamb, eraa, maxster, nilo, ztr      |
|           36 |     1232 | 2022-12-03 | ECSTATIC           | W   | 0.724      | 0.435        | 0.030 (0.009)    | 0.556 (0.175)    | -         |     7.48 | adamb, eraa, maxster, nilo, ztr      |
|           35 |     1429 | 2022-11-26 | PROSPECTS          | L   | 0.679      | -            | -                | -                | -         |   -11.04 | adamb, eraa, maxster, nilo, ztr      |
|           34 |     1463 | 2022-11-25 | EYEBALLERS         | W   | 0.672      | 0.375        | -                | 0.776 (0.196)    | 1 (0.672) |     9.16 | adamb, eraa, maxster, nilo, ztr      |
|           33 |     1531 | 2022-11-20 | Spirit Academy     | W   | 0.640      | 0.500        | 0.032 (0.010)    | 0.447 (0.143)    | -         |     8.39 | adamb, eraa, maxster, nilo, ztr      |
|           32 |     1537 | 2022-11-20 | NAVI Junior        | W   | 0.639      | 0.500        | 0.022 (0.007)    | -                | -         |     5.53 | adamb, eraa, maxster, nilo, ztr      |
|           31 |     1549 | 2022-11-19 | Spirit Academy     | L   | 0.633      | -            | -                | -                | -         |   -11.79 | adamb, eraa, maxster, nilo, ztr      |
|           30 |     1558 | 2022-11-19 | NAVI Junior        | W   | 0.631      | 0.500        | 0.022 (0.007)    | -                | -         |     5.21 | adamb, eraa, maxster, nilo, ztr      |
|           29 |     1622 | 2022-11-16 | BLUEJAYS           | L   | 0.612      | -            | -                | -                | -         |    -7.40 | adamb, eraa, maxster, nilo, ztr      |
|           28 |     1783 | 2022-10-31 | PROSPECTS          | W   | 0.506      | 0.500        | 0.032 (0.008)    | 0.689 (0.174)    | -         |     8.08 | adamb, eraa, maxster, nilo, ztr      |
|           27 |     1811 | 2022-10-29 | Astralis Talent    | W   | 0.492      | -            | -                | -                | -         |     7.39 | adamb, eraa, maxster, nilo, ztr      |
|           26 |     1823 | 2022-10-28 | BIG Academy        | W   | 0.486      | -            | -                | -                | -         |     8.55 | adamb, eraa, maxster, nilo, ztr      |
|           25 |     1827 | 2022-10-28 | Astralis Talent    | L   | 0.485      | -            | -                | -                | -         |    -8.01 | adamb, eraa, maxster, nilo, ztr      |
|           24 |     1839 | 2022-10-27 | PROSPECTS          | W   | 0.480      | 0.500        | 0.032 (0.008)    | 0.689 (0.165)    | -         |     7.79 | adamb, eraa, maxster, nilo, ztr      |
|           23 |     1845 | 2022-10-27 | ECLOT              | W   | 0.479      | 0.435        | 0.046 (0.010)    | -                | -         |     8.51 | adamb, eraa, maxster, nilo, ztr      |
|           22 |     1884 | 2022-10-25 | IKLA               | L   | 0.467      | -            | -                | -                | -         |    -7.39 | adamb, eraa, maxster, nilo, ztr      |
|           21 |     1894 | 2022-10-25 | Spirit Academy     | L   | 0.465      | -            | -                | -                | -         |    -9.09 | adamb, eraa, maxster, nilo, ztr      |
|           20 |     1937 | 2022-10-23 | 9INE               | W   | 0.452      | 0.435        | 0.045 (0.009)    | 1.000 (0.196)    | -         |     7.12 | adamb, eraa, maxster, nilo, ztr      |
|           19 |     1994 | 2022-10-21 | sYnck              | W   | 0.438      | -            | -                | -                | -         |     3.73 | adamb, eraa, maxster, nilo, ztr      |
|           18 |     2065 | 2022-10-18 | MIBR Academy       | L   | 0.419      | -            | -                | -                | -         |   -11.99 | adamb, eraa, maxster, nilo, ztr      |
|           17 |     2085 | 2022-10-17 | Astralis Talent    | W   | 0.413      | -            | -                | -                | -         |     6.10 | adamb, eraa, maxster, nilo, ztr      |
|           16 |     2110 | 2022-10-16 | ENCE Academy       | L   | 0.406      | -            | -                | -                | -         |    -9.88 | adamb, eraa, maxster, nilo, ztr      |
|           15 |     2132 | 2022-10-15 | PROSPECTS          | W   | 0.400      | -            | -                | -                | -         |     6.40 | adamb, eraa, maxster, nilo, ztr      |
|           14 |     2142 | 2022-10-15 | MIBR Academy       | W   | 0.399      | -            | -                | -                | -         |     1.17 | adamb, eraa, maxster, nilo, ztr      |
|           13 |     2196 | 2022-10-14 | Spirit Academy     | W   | 0.391      | -            | -                | -                | -         |     4.56 | adamb, eraa, maxster, nilo, ztr      |
|           12 |     2224 | 2022-10-13 | BIG Academy        | W   | 0.385      | -            | -                | -                | -         |     7.58 | adamb, eraa, maxster, nilo, ztr      |
|           11 |     2253 | 2022-10-12 | ENCE Academy       | W   | 0.379      | -            | -                | -                | -         |     3.02 | adamb, eraa, maxster, nilo, ztr      |
|           10 |     2443 | 2022-10-02 | ex-TITANS          | L   | 0.313      | -            | -                | -                | -         |    -8.27 | adamb, eraa, maxster, nilo, ztr      |
|            9 |     2514 | 2022-09-29 | EC Brugge          | W   | 0.293      | -            | -                | -                | -         |     2.98 | adamb, eraa, maxster, nilo, ztr      |
|            8 |     2546 | 2022-09-28 | Copenhagen Flames  | L   | 0.286      | -            | -                | -                | -         |    -4.16 | adamb, eraa, maxster, nilo, ztr      |
|            7 |     2562 | 2022-09-28 | CENTER             | W   | 0.285      | -            | -                | -                | -         |     0.42 | adamb, eraa, maxster, nilo, ztr      |
|            6 |     2963 | 2022-09-15 | los kogutos        | L   | 0.198      | -            | -                | -                | -         |    -4.40 | adamb, eraa, maxster, nilo, ztr      |
|            5 |     3054 | 2022-09-12 | sYnck              | W   | 0.178      | -            | -                | -                | -         |     1.53 | adamb, eraa, maxster, nilo, ztr      |
|            4 |     3080 | 2022-09-11 | Iron Branch        | L   | 0.173      | -            | -                | -                | -         |    -4.40 | adamb, eraa, maxster, nilo, ztr      |
|            3 |     3088 | 2022-09-11 | Nigma Galaxy       | W   | 0.172      | -            | -                | -                | -         |     4.61 | adamb, eraa, maxster, nilo, ztr      |
|            2 |     3116 | 2022-09-10 | ThunderFlash       | W   | 0.168      | -            | -                | -                | -         |     1.18 | adamb, eraa, maxster, nilo, ztr      |
|            1 |     3207 | 2022-09-08 | ex-Into the Breach | L   | 0.154      | -            | -                | -                | -         |    -3.07 | adamb, eraa, maxster, nilo, ztr      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,008.22)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-01-22 |      1.000 | $3,360.00      | $3,360.00       |
| 2022-11-26 |      0.679 | $5,655.00      | $3,838.42       |
| 2022-11-20 |      0.640 | $45,000.00     | $28,809.80      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
