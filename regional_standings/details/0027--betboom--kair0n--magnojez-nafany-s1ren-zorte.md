### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1195.6<br />
<br />
Final Rank Value (1195.6) = Starting Rank Value (1245.5) + Head To Head Adjustments (-49.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.746[<sup>1</sup>](#table2)
- Bounty Collected: 0.495[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.239[<sup>2</sup>](#table1)

The average of these factors is 0.438<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1245.5
- 400 + ( ( 0.438 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1245.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |       86 | 2024-04-19 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |    -2.95 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           57 |      101 | 2024-04-19 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           56 |      128 | 2024-04-18 | Apeks             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           55 |      133 | 2024-04-18 | brazylijski luz   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           54 |      138 | 2024-04-18 | Aloha             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           53 |      255 | 2024-04-14 | 3DMAX             | W   | 1.000      | 0.358        | -                | 0.801 (0.287)    | 0 (0.000) |     9.91 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           52 |      262 | 2024-04-13 | OG                | L   | 1.000      | -            | -                | -                | -         |   -10.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           51 |      267 | 2024-04-13 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -11.26 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           50 |      274 | 2024-04-13 | Sampi             | W   | 1.000      | 0.358        | -                | 0.698 (0.250)    | 0 (0.000) |     6.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           49 |      301 | 2024-04-11 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -12.23 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           48 |      309 | 2024-04-11 | Ninjas in Pyjamas | W   | 1.000      | 0.684        | 0.196 (0.134)    | 0.318 (0.217)    | -         |     6.92 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           47 |      314 | 2024-04-11 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -22.59 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           46 |      355 | 2024-04-10 | Aurora            | W   | 1.000      | 0.143        | 0.763 (0.109)    | 1.000 (0.143)    | -         |    18.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           45 |      410 | 2024-04-09 | BIG               | W   | 1.000      | 0.684        | 0.471 (0.322)    | 0.529 (0.362)    | -         |    16.85 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           44 |      485 | 2024-04-06 | Alliance          | W   | 1.000      | 0.358        | -                | 0.855 (0.306)    | -         |     4.10 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           43 |      499 | 2024-04-05 | BLEED             | W   | 1.000      | 0.143        | -                | 0.933 (0.133)    | -         |    11.22 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           42 |      537 | 2024-04-04 | Alliance          | W   | 1.000      | -            | -                | -                | -         |     4.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           41 |      549 | 2024-04-04 | BLEED             | W   | 1.000      | -            | -                | -                | -         |    12.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           40 |      719 | 2024-03-27 | Blessed           | L   | 1.000      | -            | -                | -                | -         |   -29.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           39 |      756 | 2024-03-24 | FORZE             | L   | 1.000      | -            | -                | -                | -         |   -22.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           38 |      771 | 2024-03-23 | fnatic            | W   | 0.998      | 0.143        | 0.240 (0.034)    | -                | -         |    11.64 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           37 |      810 | 2024-03-21 | B8                | W   | 0.985      | -            | -                | -                | -         |     4.29 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           36 |     1206 | 2024-03-05 | BLEED             | L   | 0.879      | -            | -                | -                | -         |   -17.98 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           35 |     1224 | 2024-03-04 | Gaimin Gladiators | W   | 0.871      | 0.500        | 0.156 (0.068)    | 1.000 (0.436)    | -         |    15.80 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           34 |     1239 | 2024-03-03 | Preasy            | L   | 0.866      | -            | -                | -                | -         |   -19.39 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           33 |     1243 | 2024-03-03 | ex-Sprout         | W   | 0.866      | -            | -                | -                | -         |     1.20 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           32 |     1283 | 2024-03-01 | Preasy            | W   | 0.854      | 0.500        | 0.205 (0.087)    | 0.723 (0.308)    | -         |     8.51 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           31 |     1315 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.839      | 0.500        | -                | 0.639 (0.268)    | -         |     3.04 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           30 |     1422 | 2024-02-23 | Guild Eagles      | L   | 0.805      | -            | -                | -                | -         |   -18.65 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           29 |     1561 | 2024-02-17 | Eternal Fire      | L   | 0.766      | -            | -                | -                | -         |    -2.25 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           28 |     1585 | 2024-02-16 | Natus Vincere     | L   | 0.760      | -            | -                | -                | -         |    -0.48 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           27 |     1623 | 2024-02-15 | Enterprise        | W   | 0.751      | -            | -                | -                | 1 (0.751) |     5.05 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           26 |     1658 | 2024-02-14 | Into the Breach   | W   | 0.746      | -            | -                | -                | 1 (0.746) |     2.90 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           25 |     1661 | 2024-02-14 | fnatic            | L   | 0.745      | -            | -                | -                | -         |   -16.51 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           24 |     1744 | 2024-02-08 | FORZE             | L   | 0.707      | -            | -                | -                | -         |   -18.59 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           23 |     1750 | 2024-02-08 | Nemiga            | L   | 0.706      | -            | -                | -                | -         |   -18.82 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           22 |     1879 | 2024-02-01 | Cloud9            | L   | 0.660      | -            | -                | -                | -         |    -2.26 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           21 |     1906 | 2024-01-31 | Eternal Fire      | L   | 0.652      | -            | -                | -                | -         |    -2.43 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           20 |     2124 | 2024-01-20 | OG                | W   | 0.579      | 0.143        | 0.497 (0.041)    | -                | -         |    10.38 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           19 |     2178 | 2024-01-19 | Cloud9            | L   | 0.573      | -            | -                | -                | -         |    -1.55 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           18 |     2237 | 2024-01-18 | BIG               | W   | 0.566      | 0.143        | 0.471 (0.038)    | -                | -         |     8.77 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           17 |     2245 | 2024-01-18 | Zero Tenacity     | W   | 0.566      | -            | -                | -                | -         |     1.25 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           16 |     2760 | 2023-12-13 | ENCE              | L   | 0.325      | -            | -                | -                | -         |    -3.88 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|           15 |     2769 | 2023-12-12 | Preasy            | W   | 0.319      | -            | -                | -                | -         |     2.40 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|           14 |     2822 | 2023-12-09 | Virtus.pro        | L   | 0.298      | -            | -                | -                | -         |    -0.94 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           13 |     2841 | 2023-12-08 | Cloud9            | W   | 0.291      | 0.657        | 0.475 (0.091)    | -                | 1 (0.291) |     8.48 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           12 |     2886 | 2023-12-06 | GamerLegion       | W   | 0.280      | 0.657        | 0.185 (0.034)    | -                | 1 (0.280) |     5.73 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           11 |     2922 | 2023-12-05 | MIBR              | L   | 0.272      | -            | -                | -                | -         |    -2.34 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           10 |     3053 | 2023-11-26 | Gucci Academy     | L   | 0.212      | -            | -                | -                | -         |    -6.24 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            9 |     3079 | 2023-11-25 | Into the Breach   | W   | 0.205      | -            | -                | -                | -         |     0.58 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            8 |     3194 | 2023-11-18 | MIBR              | L   | 0.160      | -            | -                | -                | -         |    -1.46 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            7 |     3206 | 2023-11-18 | Sangal            | W   | 0.159      | -            | -                | -                | -         |     0.08 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            6 |     3236 | 2023-11-17 | KOI               | W   | 0.152      | -            | -                | -                | 1 (0.152) |     1.15 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            5 |     3268 | 2023-11-16 | 9 Pandas          | L   | 0.146      | -            | -                | -                | -         |    -3.28 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            4 |     3433 | 2023-11-09 | SINNERS           | W   | 0.100      | -            | -                | -                | -         |     0.87 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            3 |     3436 | 2023-11-09 | ARCRED            | W   | 0.099      | -            | -                | -                | -         |     0.14 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            2 |     3462 | 2023-11-08 | B8                | W   | 0.093      | -            | -                | -                | -         |     0.10 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            1 |     3492 | 2023-11-07 | EYEBALLERS        | W   | 0.084      | -            | -                | -                | -         |     0.31 | danistzz, KaiR0N-, nafany, s1ren, zorte    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($86,960.59)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.46) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      1.000 | $52,500.00     | $52,500.00      |
| 2024-04-14 |      1.000 | $9,000.00      | $9,000.00       |
| 2024-03-06 |      0.886 | $12,500.00     | $11,079.40      |
| 2024-02-02 |      0.667 | $2,500.00      | $1,668.47       |
| 2023-12-13 |      0.327 | $1,500.00      | $490.14         |
| 2023-12-10 |      0.306 | $30,000.00     | $9,172.18       |
| 2023-11-26 |      0.212 | $4,000.00      | $848.53         |
| 2023-11-09 |      0.100 | $22,000.00     | $2,201.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
