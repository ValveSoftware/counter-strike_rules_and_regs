### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1312.4<br />
<br />
Final Rank Value (1312.4) = Starting Rank Value (1433.5) + Head To Head Adjustments (-121.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.711[<sup>1</sup>](#table2)
- Bounty Collected: 0.537[<sup>2</sup>](#table1)
- Opponent Network: 0.448[<sup>2</sup>](#table1)
- LAN Wins: 0.434[<sup>2</sup>](#table1)

The average of these factors is 0.532<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1433.5
- 400 + ( ( 0.532 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1433.5


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
|           70 |       90 | 2024-05-25 | B8                | L   | 1.000      | -            | -                | -                | -         |   -22.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           69 |      116 | 2024-05-24 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.46 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           68 |      205 | 2024-05-21 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.70 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           67 |      231 | 2024-05-20 | MIBR              | W   | 1.000      | 0.769        | 0.308 (0.237)    | 0.805 (0.619)    | 0 (0.000) |    23.72 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           66 |      240 | 2024-05-20 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -2.40 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           65 |      253 | 2024-05-20 | MIBR              | W   | 1.000      | 0.769        | 0.308 (0.237)    | 0.805 (0.619)    | 0 (0.000) |    24.90 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           64 |      410 | 2024-05-15 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -10.43 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           63 |      481 | 2024-05-14 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -0.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           62 |      520 | 2024-05-12 | B8                | L   | 1.000      | -            | -                | -                | -         |   -24.44 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           61 |      527 | 2024-05-12 | 9 Pandas          | W   | 1.000      | 0.435        | 0.108 (0.047)    | 0.798 (0.347)    | -         |     6.38 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           60 |      559 | 2024-05-11 | Metizport         | W   | 1.000      | 0.435        | -                | 0.860 (0.374)    | -         |     5.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           59 |      577 | 2024-05-10 | Enterprise        | W   | 1.000      | -            | -                | -                | -         |     2.43 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           58 |      637 | 2024-05-07 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |   -11.55 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           57 |      689 | 2024-05-04 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -20.41 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           56 |      694 | 2024-05-04 | 9 Pandas          | W   | 1.000      | 0.435        | 0.108 (0.047)    | 0.798 (0.347)    | -         |     5.65 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           55 |      717 | 2024-05-03 | Insilio           | W   | 1.000      | -            | -                | -                | -         |     3.58 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           54 |      757 | 2024-05-01 | EYEBALLERS        | W   | 1.000      | 0.435        | -                | 0.611 (0.265)    | -         |     2.21 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           53 |      787 | 2024-04-30 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -21.85 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           52 |      860 | 2024-04-26 | M80               | W   | 0.980      | 0.889        | 0.135 (0.118)    | 0.789 (0.688)    | 1 (0.980) |     9.88 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           51 |      874 | 2024-04-26 | Falcons           | W   | 0.978      | 0.889        | 0.355 (0.309)    | -                | 1 (0.978) |    19.74 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           50 |      898 | 2024-04-25 | Vitality          | L   | 0.972      | -            | -                | -                | -         |    -1.72 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           49 |      929 | 2024-04-23 | M80               | W   | 0.959      | 0.889        | 0.135 (0.115)    | 0.789 (0.673)    | 1 (0.959) |     9.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           48 |     1033 | 2024-04-19 | Cloud9            | L   | 0.933      | -            | -                | -                | -         |    -9.81 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           47 |     1048 | 2024-04-19 | Eternal Fire      | L   | 0.932      | -            | -                | -                | -         |    -1.65 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           46 |     1075 | 2024-04-18 | Apeks             | W   | 0.926      | -            | -                | -                | -         |     7.55 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           45 |     1080 | 2024-04-18 | brazylijski luz   | W   | 0.925      | -            | -                | -                | -         |     1.73 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           44 |     1085 | 2024-04-18 | iNation           | W   | 0.925      | -            | -                | -                | -         |     0.36 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           43 |     1202 | 2024-04-14 | 3DMAX             | W   | 0.898      | -            | -                | -                | -         |     7.24 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           42 |     1209 | 2024-04-13 | OG                | L   | 0.893      | -            | -                | -                | -         |   -16.58 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           41 |     1214 | 2024-04-13 | Aurora            | L   | 0.892      | -            | -                | -                | -         |   -11.49 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           40 |     1221 | 2024-04-13 | Sampi             | W   | 0.891      | 0.358        | -                | 0.794 (0.253)    | -         |     3.08 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           39 |     1248 | 2024-04-11 | Aurora            | L   | 0.880      | -            | -                | -                | -         |   -12.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           38 |     1256 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.879      | 0.684        | 0.118 (0.071)    | -                | -         |     5.10 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           37 |     1261 | 2024-04-11 | AMKAL             | L   | 0.878      | -            | -                | -                | -         |   -20.86 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           36 |     1302 | 2024-04-10 | Aurora            | W   | 0.872      | 0.143        | 0.493 (0.061)    | -                | -         |    14.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           35 |     1357 | 2024-04-09 | BIG               | W   | 0.865      | 0.684        | 0.215 (0.127)    | 0.496 (0.294)    | -         |    14.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           34 |     1432 | 2024-04-06 | Alliance          | W   | 0.845      | -            | -                | -                | -         |     1.54 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           33 |     1446 | 2024-04-05 | BLEED             | W   | 0.839      | -            | -                | -                | -         |     8.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           32 |     1484 | 2024-04-04 | Alliance          | W   | 0.832      | -            | -                | -                | -         |     1.64 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           31 |     1496 | 2024-04-04 | BLEED             | W   | 0.831      | -            | -                | -                | -         |     8.59 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           30 |     1666 | 2024-03-27 | FAVBET            | L   | 0.779      | -            | -                | -                | -         |   -23.78 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           29 |     1703 | 2024-03-24 | FORZE             | L   | 0.758      | -            | -                | -                | -         |   -20.29 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           28 |     1718 | 2024-03-23 | fnatic            | W   | 0.751      | -            | -                | -                | -         |     5.15 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           27 |     1757 | 2024-03-21 | B8                | W   | 0.738      | -            | -                | -                | -         |     4.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           26 |     2153 | 2024-03-05 | BLEED             | L   | 0.631      | -            | -                | -                | -         |   -13.93 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           25 |     2171 | 2024-03-04 | Gaimin Gladiators | W   | 0.624      | -            | -                | -                | -         |     5.86 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           24 |     2186 | 2024-03-03 | ex-Preasy         | L   | 0.619      | -            | -                | -                | -         |   -17.80 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           23 |     2190 | 2024-03-03 | ex-Sprout         | W   | 0.619      | -            | -                | -                | -         |     0.25 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           22 |     2230 | 2024-03-01 | ex-Preasy         | W   | 0.606      | -            | -                | -                | -         |     1.65 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           21 |     2262 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.592      | -            | -                | -                | -         |     1.24 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           20 |     2369 | 2024-02-23 | ex-Guild Eagles   | L   | 0.558      | -            | -                | -                | -         |   -16.02 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           19 |     2508 | 2024-02-17 | Eternal Fire      | L   | 0.519      | -            | -                | -                | -         |    -1.35 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           18 |     2532 | 2024-02-16 | Natus Vincere     | L   | 0.512      | -            | -                | -                | -         |    -1.07 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           17 |     2570 | 2024-02-15 | Enterprise        | W   | 0.504      | -            | -                | -                | 1 (0.504) |     1.10 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           16 |     2605 | 2024-02-14 | Into the Breach   | W   | 0.499      | -            | -                | -                | 1 (0.499) |     0.39 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           15 |     2608 | 2024-02-14 | fnatic            | L   | 0.498      | -            | -                | -                | -         |   -13.22 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           14 |     2691 | 2024-02-08 | FORZE             | L   | 0.460      | -            | -                | -                | -         |   -13.37 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           13 |     2697 | 2024-02-08 | Nemiga            | L   | 0.458      | -            | -                | -                | -         |   -11.08 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           12 |     2826 | 2024-02-01 | Cloud9            | L   | 0.412      | -            | -                | -                | -         |    -6.93 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           11 |     2853 | 2024-01-31 | Eternal Fire      | L   | 0.405      | -            | -                | -                | -         |    -1.21 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           10 |     3071 | 2024-01-20 | OG                | W   | 0.332      | -            | -                | -                | -         |     2.25 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            9 |     3125 | 2024-01-19 | Cloud9            | L   | 0.325      | -            | -                | -                | -         |    -5.48 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            8 |     3184 | 2024-01-18 | BIG               | W   | 0.319      | -            | -                | -                | -         |     4.63 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            7 |     3192 | 2024-01-18 | Zero Tenacity     | W   | 0.318      | -            | -                | -                | -         |     1.01 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            6 |     3707 | 2023-12-13 | ENCE              | L   | 0.078      | -            | -                | -                | -         |    -1.44 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|            5 |     3716 | 2023-12-12 | ex-Preasy         | W   | 0.071      | -            | -                | -                | -         |     0.11 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|            4 |     3769 | 2023-12-09 | Virtus.pro        | L   | 0.050      | -            | -                | -                | -         |    -0.30 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            3 |     3788 | 2023-12-08 | Cloud9            | W   | 0.044      | -            | -                | -                | 1 (0.044) |     0.64 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            2 |     3833 | 2023-12-06 | GamerLegion       | W   | 0.033      | -            | -                | -                | 1 (0.033) |     0.17 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            1 |     3869 | 2023-12-05 | MIBR              | L   | 0.025      | -            | -                | -                | -         |    -0.21 | danistzz, KaiR0N-, nafany, s1ren, zorte    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118,059.56)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-05-04 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-04-14 |      0.899 | $52,500.00     | $47,188.73      |
| 2024-04-14 |      0.898 | $9,000.00      | $8,083.74       |
| 2024-03-06 |      0.639 | $12,500.00     | $7,986.91       |
| 2024-02-02 |      0.420 | $2,500.00      | $1,049.97       |
| 2023-12-10 |      0.058 | $30,000.00     | $1,750.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
