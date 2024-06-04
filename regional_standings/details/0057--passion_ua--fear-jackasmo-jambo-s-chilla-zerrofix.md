### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  984.4<br />
<br />
Final Rank Value (984.4) = Starting Rank Value (1003.4) + Head To Head Adjustments (-19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.445[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.379[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.311<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1003.4
- 400 + ( ( 0.311 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1003.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |       17 | 2024-05-29 | Illuminar       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.61 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |       88 | 2024-05-25 | Sampi           | W   | 1.000      | 0.435        | 0.038 (0.016)    | 0.794 (0.345)    | 0 (0.000) |    12.28 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |      109 | 2024-05-24 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -4.42 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |      114 | 2024-05-24 | ECSTATIC        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.20 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |      130 | 2024-05-23 | SINNERS         | W   | 1.000      | 0.435        | -                | 0.728 (0.316)    | 0 (0.000) |    15.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |      251 | 2024-05-20 | Permitta        | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | 0 (0.000) |    10.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |      265 | 2024-05-19 | Sashi           | L   | 1.000      | -            | -                | -                | -         |    -5.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |      274 | 2024-05-19 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.650 (0.282)    | 0 (0.000) |    12.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |      294 | 2024-05-18 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -9.75 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |      339 | 2024-05-17 | Nexus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |      379 | 2024-05-16 | Sashi           | W   | 1.000      | 0.500        | 0.157 (0.079)    | 1.000 (0.500)    | 0 (0.000) |    26.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |      419 | 2024-05-15 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -14.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |      474 | 2024-05-14 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -15.38 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |      566 | 2024-05-11 | Preasy          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.72 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |      729 | 2024-05-02 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -5.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |      755 | 2024-05-01 | PARIVISION      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |      790 | 2024-04-30 | 9 Pandas        | W   | 1.000      | 0.500        | 0.108 (0.054)    | 0.798 (0.399)    | -         |    21.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |      817 | 2024-04-28 | ALTERNATE aTTaX | L   | 0.992      | -            | -                | -                | -         |   -15.92 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |      867 | 2024-04-26 | 9 Pandas        | W   | 0.979      | 0.500        | 0.108 (0.053)    | 0.798 (0.391)    | -         |    21.09 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |      903 | 2024-04-25 | Sashi           | L   | 0.971      | -            | -                | -                | -         |    -5.90 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |      915 | 2024-04-24 | Permitta        | L   | 0.965      | -            | -                | -                | -         |   -13.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |      947 | 2024-04-22 | B8              | L   | 0.953      | -            | -                | -                | -         |   -11.94 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |      989 | 2024-04-20 | Young Ninjas    | W   | 0.939      | 0.500        | 0.038 (0.018)    | -                | -         |    13.09 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     1009 | 2024-04-20 | Permitta        | L   | 0.937      | -            | -                | -                | -         |   -14.60 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     1046 | 2024-04-19 | ALTERNATE aTTaX | L   | 0.932      | -            | -                | -                | -         |   -17.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     1098 | 2024-04-18 | Permitta        | W   | 0.925      | 0.500        | -                | 1.000 (0.462)    | -         |    14.05 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     1131 | 2024-04-17 | Sashi           | W   | 0.918      | 0.371        | 0.157 (0.054)    | 1.000 (0.340)    | -         |    17.44 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     1165 | 2024-04-16 | 500             | L   | 0.912      | -            | -                | -                | -         |   -17.70 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     1204 | 2024-04-14 | SINNERS         | L   | 0.897      | -            | -                | -                | -         |    -9.98 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     1259 | 2024-04-11 | 3DMAX           | W   | 0.878      | 0.384        | 0.105 (0.035)    | -                | -         |    20.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     1306 | 2024-04-10 | Sashi           | W   | 0.871      | 0.371        | 0.157 (0.051)    | 1.000 (0.323)    | -         |    17.06 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     1493 | 2024-04-04 | HAVU            | W   | 0.831      | -            | -                | -                | -         |     7.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     1565 | 2024-04-02 | BLEED           | L   | 0.819      | -            | -                | -                | -         |    -4.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     1595 | 2024-03-31 | FAVBET          | L   | 0.805      | -            | -                | -                | -         |   -17.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     1602 | 2024-03-30 | Lazer Cats      | W   | 0.797      | -            | -                | -                | -         |     2.24 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     1610 | 2024-03-29 | NAVI Junior     | L   | 0.791      | -            | -                | -                | -         |   -19.29 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     1629 | 2024-03-28 | GL Academy      | L   | 0.784      | -            | -                | -                | -         |   -18.78 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     1839 | 2024-03-17 | Sampi           | L   | 0.710      | -            | -                | -                | -         |   -12.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     1848 | 2024-03-16 | ex-Preasy       | L   | 0.704      | -            | -                | -                | -         |   -10.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     1901 | 2024-03-14 | Sampi           | W   | 0.691      | -            | -                | -                | -         |     9.65 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     1968 | 2024-03-12 | Alliance        | W   | 0.678      | -            | -                | -                | -         |     7.37 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     1990 | 2024-03-11 | MOUZ NXT        | L   | 0.671      | -            | -                | -                | -         |    -8.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     2009 | 2024-03-10 | MOUZ NXT        | W   | 0.665      | 0.303        | 0.157 (0.032)    | -                | -         |    12.74 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     2022 | 2024-03-09 | The Chosen Few  | L   | 0.659      | -            | -                | -                | -         |   -17.07 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     2050 | 2024-03-08 | Spirit Academy  | L   | 0.652      | -            | -                | -                | -         |   -16.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     2054 | 2024-03-08 | Entropiq        | W   | 0.651      | -            | -                | -                | -         |     2.62 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     2073 | 2024-03-07 | GODSENT         | W   | 0.646      | -            | -                | -                | -         |     2.45 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     2111 | 2024-03-06 | Permitta        | L   | 0.638      | -            | -                | -                | -         |   -12.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     2113 | 2024-03-06 | K10             | W   | 0.637      | -            | -                | -                | -         |     3.35 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     2142 | 2024-03-05 | B8              | L   | 0.632      | -            | -                | -                | -         |    -7.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     2169 | 2024-03-04 | ALTERNATE aTTaX | W   | 0.624      | -            | -                | -                | -         |     6.61 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     2700 | 2024-02-08 | BLEED           | L   | 0.458      | -            | -                | -                | -         |    -3.99 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            6 |     2881 | 2024-01-29 | Alliance        | W   | 0.392      | -            | -                | -                | -         |     3.18 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            5 |     3208 | 2024-01-18 | MOUZ NXT        | L   | 0.317      | -            | -                | -                | -         |    -4.29 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            4 |     3262 | 2024-01-16 | Zero Tenacity   | L   | 0.308      | -            | -                | -                | -         |    -4.34 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            3 |     3278 | 2024-01-16 | Rebels          | W   | 0.307      | -            | -                | -                | -         |     5.90 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            2 |     3297 | 2024-01-16 | RUBY            | W   | 0.306      | -            | -                | -                | -         |     2.68 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            1 |     3431 | 2024-01-12 | OG              | L   | 0.280      | -            | -                | -                | -         |    -2.20 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,984.54)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-03-31 |      0.805 | $657.00        | $528.85         |
| 2024-03-30 |      0.798 | $1,000.00      | $797.58         |
| 2024-03-18 |      0.717 | $3,000.00      | $2,151.31       |
| 2024-03-11 |      0.671 | $1,500.00      | $1,006.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
