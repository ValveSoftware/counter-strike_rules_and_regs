### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1497.8<br />
<br />
Final Rank Value (1497.8) = Starting Rank Value (1694.6) + Head To Head Adjustments (-196.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.730[<sup>1</sup>](#table2)
- Bounty Collected: 0.617[<sup>2</sup>](#table1)
- Opponent Network: 0.448[<sup>2</sup>](#table1)
- LAN Wins: 0.802[<sup>2</sup>](#table1)

The average of these factors is 0.649<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1694.6
- 400 + ( ( 0.649 - 0.000 ) / ( 0.803 - 0.000 ) ) * 1600 = 1694.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |      175 | 2024-06-07 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -4.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           69 |      242 | 2024-06-06 | Eternal Fire      | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.560 (0.401)    | 1 (1.000) |    24.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           68 |      254 | 2024-06-06 | Complexity        | W   | 1.000      | 0.715        | 0.271 (0.194)    | -                | 1 (1.000) |    23.25 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           67 |      290 | 2024-06-05 | BIG               | W   | 1.000      | 0.715        | 0.228 (0.163)    | 0.459 (0.328)    | 1 (1.000) |    15.63 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           66 |      300 | 2024-06-05 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -15.84 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           65 |      312 | 2024-06-05 | fnatic            | W   | 1.000      | 0.715        | 0.198 (0.142)    | 0.650 (0.465)    | 1 (1.000) |     8.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           64 |      590 | 2024-05-25 | B8                | L   | 1.000      | -            | -                | -                | -         |   -24.70 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           63 |      616 | 2024-05-24 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           62 |      705 | 2024-05-21 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -4.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           61 |      731 | 2024-05-20 | MIBR              | W   | 1.000      | 0.769        | 0.284 (0.219)    | 0.750 (0.577)    | -         |    19.54 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           60 |      740 | 2024-05-20 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -2.51 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           59 |      753 | 2024-05-20 | MIBR              | W   | 1.000      | 0.769        | 0.284 (0.219)    | 0.750 (0.577)    | -         |    20.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           58 |      910 | 2024-05-15 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -16.73 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           57 |      981 | 2024-05-14 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -1.27 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           56 |     1020 | 2024-05-12 | B8                | L   | 1.000      | -            | -                | -                | -         |   -27.13 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           55 |     1027 | 2024-05-12 | 9 Pandas          | W   | 1.000      | 0.435        | -                | 0.758 (0.330)    | -         |     3.71 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           54 |     1059 | 2024-05-11 | Metizport         | W   | 0.999      | 0.435        | -                | 0.706 (0.306)    | -         |     3.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           53 |     1077 | 2024-05-10 | Enterprise        | W   | 0.992      | -            | -                | -                | -         |     1.41 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           52 |     1137 | 2024-05-07 | FlyQuest          | L   | 0.973      | -            | -                | -                | -         |   -17.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           51 |     1189 | 2024-05-04 | AMKAL             | L   | 0.953      | -            | -                | -                | -         |   -23.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           50 |     1194 | 2024-05-04 | 9 Pandas          | W   | 0.952      | 0.435        | -                | 0.758 (0.314)    | -         |     2.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           49 |     1217 | 2024-05-03 | Insilio           | W   | 0.944      | -            | -                | -                | -         |     1.66 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           48 |     1257 | 2024-05-01 | EYEBALLERS        | W   | 0.932      | -            | -                | -                | -         |     1.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           47 |     1287 | 2024-04-30 | 3DMAX             | L   | 0.925      | -            | -                | -                | -         |   -23.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           46 |     1360 | 2024-04-26 | M80               | W   | 0.901      | 0.889        | 0.206 (0.165)    | 0.749 (0.600)    | 1 (0.901) |     5.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           45 |     1374 | 2024-04-26 | Falcons           | W   | 0.898      | 0.889        | 0.327 (0.261)    | -                | 1 (0.898) |    10.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           44 |     1398 | 2024-04-25 | Vitality          | L   | 0.892      | -            | -                | -                | -         |    -2.79 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           43 |     1429 | 2024-04-23 | M80               | W   | 0.880      | 0.889        | 0.206 (0.161)    | 0.749 (0.586)    | 1 (0.880) |     4.71 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           42 |     1533 | 2024-04-19 | Cloud9            | L   | 0.853      | -            | -                | -                | -         |   -17.33 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           41 |     1548 | 2024-04-19 | Eternal Fire      | L   | 0.852      | -            | -                | -                | -         |    -3.90 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           40 |     1575 | 2024-04-18 | Apeks             | W   | 0.847      | -            | -                | -                | -         |     2.66 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           39 |     1580 | 2024-04-18 | brazylijski luz   | W   | 0.846      | -            | -                | -                | -         |     0.57 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           38 |     1585 | 2024-04-18 | ex-iNation        | W   | 0.846      | -            | -                | -                | -         |     0.36 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           37 |     1702 | 2024-04-14 | 3DMAX             | W   | 0.819      | -            | -                | -                | -         |     3.20 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           36 |     1709 | 2024-04-13 | OG                | L   | 0.814      | -            | -                | -                | -         |   -21.10 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           35 |     1714 | 2024-04-13 | Aurora            | L   | 0.813      | -            | -                | -                | -         |   -14.15 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           34 |     1721 | 2024-04-13 | Sampi             | W   | 0.811      | -            | -                | -                | -         |     1.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           33 |     1748 | 2024-04-11 | Aurora            | L   | 0.801      | -            | -                | -                | -         |   -15.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           32 |     1756 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.799      | 0.684        | 0.294 (0.161)    | -                | -         |    13.03 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           31 |     1761 | 2024-04-11 | AMKAL             | L   | 0.799      | -            | -                | -                | -         |   -22.71 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           30 |     1802 | 2024-04-10 | Aurora            | W   | 0.793      | -            | -                | -                | -         |     9.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           29 |     1857 | 2024-04-09 | BIG               | W   | 0.786      | -            | -                | -                | -         |     7.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           28 |     1932 | 2024-04-06 | Alliance          | W   | 0.765      | -            | -                | -                | -         |     0.54 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           27 |     1946 | 2024-04-05 | BLEED             | W   | 0.760      | -            | -                | -                | -         |     5.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           26 |     1984 | 2024-04-04 | Alliance          | W   | 0.753      | -            | -                | -                | -         |     0.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           25 |     1996 | 2024-04-04 | BLEED             | W   | 0.752      | -            | -                | -                | -         |     5.65 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           24 |     2166 | 2024-03-27 | FAVBET            | L   | 0.700      | -            | -                | -                | -         |   -21.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           23 |     2203 | 2024-03-24 | FORZE             | L   | 0.679      | -            | -                | -                | -         |   -20.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           22 |     2218 | 2024-03-23 | fnatic            | W   | 0.672      | -            | -                | -                | -         |     3.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           21 |     2257 | 2024-03-21 | B8                | W   | 0.658      | -            | -                | -                | -         |     1.31 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           20 |     2653 | 2024-03-05 | BLEED             | L   | 0.552      | -            | -                | -                | -         |   -13.71 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           19 |     2671 | 2024-03-04 | Gaimin Gladiators | W   | 0.545      | -            | -                | -                | -         |     1.83 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           18 |     2686 | 2024-03-03 | ex-Preasy         | L   | 0.540      | -            | -                | -                | -         |   -16.61 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           17 |     2690 | 2024-03-03 | ex-Sprout         | W   | 0.540      | -            | -                | -                | -         |     0.05 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           16 |     2730 | 2024-03-01 | ex-Preasy         | W   | 0.527      | -            | -                | -                | -         |     0.37 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           15 |     2762 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.512      | -            | -                | -                | -         |     0.41 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           14 |     2869 | 2024-02-23 | M1X KS            | L   | 0.479      | -            | -                | -                | -         |   -14.32 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           13 |     3008 | 2024-02-17 | Eternal Fire      | L   | 0.439      | -            | -                | -                | -         |    -3.61 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |     3032 | 2024-02-16 | Natus Vincere     | L   | 0.433      | -            | -                | -                | -         |    -3.20 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |     3070 | 2024-02-15 | Enterprise        | W   | 0.425      | -            | -                | -                | 1 (0.425) |     0.34 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |     3105 | 2024-02-14 | Into the Breach   | W   | 0.419      | -            | -                | -                | 1 (0.419) |     0.08 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |     3108 | 2024-02-14 | fnatic            | L   | 0.419      | -            | -                | -                | -         |   -11.29 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |     3191 | 2024-02-08 | FORZE             | L   | 0.381      | -            | -                | -                | -         |   -11.74 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |     3197 | 2024-02-08 | Nemiga            | L   | 0.379      | -            | -                | -                | -         |   -10.95 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |     3326 | 2024-02-01 | Cloud9            | L   | 0.333      | -            | -                | -                | -         |    -8.99 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |     3353 | 2024-01-31 | Eternal Fire      | L   | 0.326      | -            | -                | -                | -         |    -3.11 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |     3571 | 2024-01-20 | OG                | W   | 0.253      | -            | -                | -                | -         |     0.47 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |     3625 | 2024-01-19 | Cloud9            | L   | 0.246      | -            | -                | -                | -         |    -6.70 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |     3684 | 2024-01-18 | BIG               | W   | 0.240      | -            | -                | -                | -         |     1.59 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |     3692 | 2024-01-18 | Zero Tenacity     | W   | 0.239      | -            | -                | -                | -         |     0.25 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($129,869.35)
- Divide that value by the 5th highest value among all rosters ($304,111.55)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-12 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-12 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-05-04 |      0.953 | $10,000.00     | $9,528.94       |
| 2024-05-02 |      0.940 | $1,000.00      | $939.79         |
| 2024-04-14 |      0.820 | $52,500.00     | $43,032.18      |
| 2024-04-14 |      0.819 | $9,000.00      | $7,371.19       |
| 2024-03-06 |      0.560 | $12,500.00     | $6,997.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
