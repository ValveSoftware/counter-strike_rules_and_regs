### Roster Details<br />
Team Name: HEROIC<br />
Roster: kyxsan, NertZ, nicoodoz, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1542.1<br />
<br />
Final Rank Value (1542.1) = Starting Rank Value (1637.9) + Head To Head Adjustments (-95.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.685[<sup>1</sup>](#table2)
- Bounty Collected: 0.610[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.995[<sup>2</sup>](#table1)

The average of these factors is 0.650<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1637.9
- 400 + ( ( 0.650 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1637.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       37 | 2024-05-04 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -29.51 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           44 |       50 | 2024-05-03 | BIG               | L   | 1.000      | -            | -                | -                | -         |   -24.31 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           43 |       62 | 2024-05-03 | FlyQuest          | W   | 1.000      | 0.889        | 0.050 (0.044)    | 0.705 (0.627)    | 1 (1.000) |     6.87 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           42 |       80 | 2024-05-02 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -17.65 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           41 |      126 | 2024-04-30 | Ninjas in Pyjamas | W   | 1.000      | 0.889        | 0.236 (0.210)    | 0.346 (0.307)    | 1 (1.000) |     1.56 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           40 |      654 | 2024-04-10 | G2                | L   | 1.000      | -            | -                | -                | -         |    -7.41 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |      711 | 2024-04-09 | FURIA             | W   | 1.000      | 0.624        | 0.371 (0.231)    | 0.484 (0.302)    | 1 (1.000) |     9.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |      745 | 2024-04-08 | 9z                | W   | 1.000      | 0.624        | -                | 0.520 (0.324)    | 1 (1.000) |     1.23 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |      755 | 2024-04-07 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -25.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     1061 | 2024-03-23 | paiN              | L   | 0.907      | -            | -                | -                | -         |   -13.46 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     1083 | 2024-03-22 | Virtus.pro        | L   | 0.898      | -            | -                | -                | -         |   -10.31 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |     1095 | 2024-03-21 | Complexity        | L   | 0.893      | -            | -                | -                | -         |   -18.44 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |     1103 | 2024-03-21 | FaZe              | W   | 0.892      | 1.000        | 1.000 (0.892)    | 0.712 (0.635)    | 1 (0.892) |    23.70 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     1152 | 2024-03-18 | Eternal Fire      | W   | 0.872      | 0.143        | 0.397 (0.049)    | -                | 1 (0.872) |    16.50 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     1173 | 2024-03-17 | Imperial          | W   | 0.867      | 0.143        | 0.656 (0.081)    | 0.965 (0.119)    | 1 (0.867) |    13.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     1183 | 2024-03-17 | Lynn Vision       | W   | 0.865      | -            | -                | -                | 1 (0.865) |     1.71 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     1283 | 2024-03-13 | Metizport         | W   | 0.839      | 0.143        | -                | 1.000 (0.120)    | -         |     1.49 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     1308 | 2024-03-12 | Virtus.pro        | L   | 0.834      | -            | -                | -                | -         |    -8.66 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     1325 | 2024-03-11 | ENCE              | W   | 0.827      | 0.143        | 0.360 (0.043)    | -                | -         |     9.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     1337 | 2024-03-11 | ex-Preasy         | W   | 0.826      | -            | -                | -                | -         |     1.39 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     1378 | 2024-03-09 | OG                | L   | 0.812      | -            | -                | -                | -         |   -21.63 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     1454 | 2024-03-06 | Young Ninjas      | W   | 0.793      | 0.535        | 0.086 (0.037)    | 0.269 (0.114)    | -         |     0.51 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     1735 | 2024-02-22 | GamerLegion       | W   | 0.706      | -            | -                | -                | 1 (0.706) |     6.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     1756 | 2024-02-21 | Spirit            | L   | 0.700      | -            | -                | -                | -         |    -5.40 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     1793 | 2024-02-20 | Astralis          | W   | 0.691      | -            | -                | -                | 1 (0.691) |     8.66 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     1807 | 2024-02-19 | Vitality          | L   | 0.687      | -            | -                | -                | -         |    -4.69 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     1815 | 2024-02-19 | ex-Preasy         | W   | 0.686      | -            | -                | -                | -         |     0.86 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     2058 | 2024-02-06 | G2                | L   | 0.600      | -            | -                | -                | -         |    -4.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     2065 | 2024-02-06 | GamerLegion       | W   | 0.599      | 1.000        | 0.187 (0.112)    | 0.481 (0.288)    | -         |     6.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     2072 | 2024-02-05 | Vitality          | W   | 0.592      | 1.000        | 1.000 (0.592)    | 0.442 (0.262)    | -         |    14.92 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     2123 | 2024-02-03 | G2                | L   | 0.579      | -            | -                | -                | -         |    -3.79 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     2193 | 2024-01-31 | BIG               | W   | 0.561      | -            | -                | -                | -         |     4.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     2203 | 2024-01-31 | Astralis          | W   | 0.559      | -            | -                | -                | -         |     8.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     2287 | 2024-01-25 | BIG               | L   | 0.521      | -            | -                | -                | -         |   -12.67 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     2302 | 2024-01-24 | Cloud9            | L   | 0.514      | -            | -                | -                | -         |    -7.67 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     2410 | 2024-01-20 | ex-sYnck          | W   | 0.487      | -            | -                | -                | -         |     0.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     2430 | 2024-01-20 | IKLA              | W   | 0.485      | -            | -                | -                | -         |     0.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     2475 | 2024-01-19 | KOI               | L   | 0.479      | -            | -                | -                | -         |   -14.56 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     2530 | 2024-01-18 | MOUZ              | L   | 0.473      | -            | -                | -                | -         |    -3.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     2538 | 2024-01-18 | FORZE             | W   | 0.473      | -            | -                | -                | -         |     0.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     2801 | 2024-01-11 | SINNERS           | W   | 0.427      | -            | -                | -                | -         |     0.50 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     2805 | 2024-01-11 | IKLA              | W   | 0.427      | -            | -                | -                | -         |     0.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     2818 | 2024-01-11 | ex-sYnck          | W   | 0.426      | -            | -                | -                | -         |     0.08 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     2824 | 2024-01-11 | HAVU              | W   | 0.426      | -            | -                | -                | -         |     0.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     2844 | 2024-01-10 | GUN5              | W   | 0.420      | -            | -                | -                | -         |     0.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56,253.97)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-03-31 |      0.960 | $20,000.00     | $19,204.66      |
| 2024-03-10 |      0.821 | $7,500.00      | $6,154.40       |
| 2024-02-11 |      0.633 | $24,000.00     | $15,195.36      |
| 2024-01-28 |      0.540 | $5,000.00      | $2,699.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
