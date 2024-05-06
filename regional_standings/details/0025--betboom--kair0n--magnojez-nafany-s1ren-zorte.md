### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1338.2<br />
<br />
Final Rank Value (1338.2) = Starting Rank Value (1455.0) + Head To Head Adjustments (-116.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.800[<sup>1</sup>](#table2)
- Bounty Collected: 0.549[<sup>2</sup>](#table1)
- Opponent Network: 0.335[<sup>2</sup>](#table1)
- LAN Wins: 0.532[<sup>2</sup>](#table1)

The average of these factors is 0.554<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1455.0
- 400 + ( ( 0.554 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1455.0


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
|           65 |       38 | 2024-05-04 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -19.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           64 |       43 | 2024-05-04 | 9 Pandas          | W   | 1.000      | 0.435        | -                | 0.676 (0.294)    | 0 (0.000) |     5.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           63 |       66 | 2024-05-03 | Insilio           | W   | 1.000      | 0.435        | -                | 0.660 (0.287)    | 0 (0.000) |     3.90 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           62 |      106 | 2024-05-01 | EYEBALLERS        | W   | 1.000      | -            | -                | -                | -         |     2.38 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           61 |      136 | 2024-04-30 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -21.12 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           60 |      209 | 2024-04-26 | M80               | W   | 1.000      | 0.889        | 0.149 (0.132)    | 0.505 (0.449)    | 1 (1.000) |     8.49 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           59 |      223 | 2024-04-26 | Falcons           | W   | 1.000      | 0.889        | 0.417 (0.371)    | -                | 1 (1.000) |    14.29 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           58 |      247 | 2024-04-25 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.90 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           57 |      278 | 2024-04-23 | M80               | W   | 1.000      | 0.889        | 0.149 (0.132)    | 0.505 (0.449)    | 1 (1.000) |     8.23 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           56 |      382 | 2024-04-19 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |    -6.01 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           55 |      397 | 2024-04-19 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -3.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           54 |      424 | 2024-04-18 | Apeks             | W   | 1.000      | -            | -                | -                | -         |    10.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           53 |      429 | 2024-04-18 | brazylijski luz   | W   | 1.000      | -            | -                | -                | -         |     2.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           52 |      434 | 2024-04-18 | Aloha             | W   | 1.000      | -            | -                | -                | -         |     0.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           51 |      551 | 2024-04-14 | 3DMAX             | W   | 1.000      | 0.358        | -                | 0.810 (0.290)    | -         |     8.60 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           50 |      558 | 2024-04-13 | OG                | L   | 1.000      | -            | -                | -                | -         |   -14.33 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           49 |      563 | 2024-04-13 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           48 |      570 | 2024-04-13 | Sampi             | W   | 1.000      | -            | -                | -                | -         |     4.18 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           47 |      597 | 2024-04-11 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -11.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           46 |      605 | 2024-04-11 | Ninjas in Pyjamas | W   | 1.000      | 0.684        | 0.236 (0.161)    | -                | -         |     6.46 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           45 |      610 | 2024-04-11 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -23.43 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           44 |      651 | 2024-04-10 | Aurora            | W   | 1.000      | 0.143        | 0.973 (0.139)    | -                | -         |    18.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           43 |      706 | 2024-04-09 | BIG               | W   | 1.000      | 0.684        | 0.454 (0.310)    | 0.510 (0.349)    | -         |    16.86 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           42 |      781 | 2024-04-06 | Alliance          | W   | 0.999      | 0.358        | -                | 0.815 (0.291)    | -         |     2.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           41 |      795 | 2024-04-05 | BLEED             | W   | 0.993      | 0.143        | 0.400 (0.057)    | -                | -         |     8.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           40 |      833 | 2024-04-04 | Alliance          | W   | 0.987      | -            | -                | -                | -         |     2.23 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           39 |      845 | 2024-04-04 | BLEED             | W   | 0.985      | -            | -                | -                | -         |     8.75 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           38 |     1015 | 2024-03-27 | Blessed           | L   | 0.933      | -            | -                | -                | -         |   -28.41 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           37 |     1052 | 2024-03-24 | FORZE             | L   | 0.912      | -            | -                | -                | -         |   -22.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           36 |     1067 | 2024-03-23 | fnatic            | W   | 0.905      | -            | -                | -                | -         |     8.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           35 |     1106 | 2024-03-21 | B8                | W   | 0.892      | -            | -                | -                | -         |     3.29 | KaiR0N-, Magnojez, nafany, s1ren, zorte    |
|           34 |     1502 | 2024-03-05 | BLEED             | L   | 0.785      | -            | -                | -                | -         |   -18.70 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           33 |     1520 | 2024-03-04 | Gaimin Gladiators | W   | 0.778      | 0.500        | 0.189 (0.073)    | 0.990 (0.385)    | -         |     9.83 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           32 |     1535 | 2024-03-03 | ex-Preasy         | L   | 0.773      | -            | -                | -                | -         |   -21.01 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           31 |     1539 | 2024-03-03 | ex-Sprout         | W   | 0.773      | -            | -                | -                | -         |     0.38 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           30 |     1579 | 2024-03-01 | ex-Preasy         | W   | 0.760      | 0.500        | 0.173 (0.066)    | 0.700 (0.266)    | -         |     3.39 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           29 |     1611 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.746      | 0.500        | -                | 0.779 (0.290)    | -         |     1.56 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           28 |     1718 | 2024-02-23 | Guild Eagles      | L   | 0.712      | -            | -                | -                | -         |   -19.75 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           27 |     1857 | 2024-02-17 | Eternal Fire      | L   | 0.673      | -            | -                | -                | -         |    -3.46 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           26 |     1881 | 2024-02-16 | Natus Vincere     | L   | 0.666      | -            | -                | -                | -         |    -1.02 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           25 |     1919 | 2024-02-15 | Enterprise        | W   | 0.658      | -            | -                | -                | 1 (0.658) |     2.04 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           24 |     1954 | 2024-02-14 | Into the Breach   | W   | 0.653      | -            | -                | -                | 1 (0.653) |     0.80 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           23 |     1957 | 2024-02-14 | fnatic            | L   | 0.652      | -            | -                | -                | -         |   -15.98 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           22 |     2040 | 2024-02-08 | FORZE             | L   | 0.614      | -            | -                | -                | -         |   -17.24 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           21 |     2046 | 2024-02-08 | Nemiga            | L   | 0.613      | -            | -                | -                | -         |   -14.11 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           20 |     2175 | 2024-02-01 | Cloud9            | L   | 0.567      | -            | -                | -                | -         |    -5.31 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           19 |     2202 | 2024-01-31 | Eternal Fire      | L   | 0.559      | -            | -                | -                | -         |    -3.56 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           18 |     2420 | 2024-01-20 | OG                | W   | 0.486      | -            | -                | -                | -         |     4.96 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           17 |     2474 | 2024-01-19 | Cloud9            | L   | 0.479      | -            | -                | -                | -         |    -4.14 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           16 |     2533 | 2024-01-18 | BIG               | W   | 0.473      | -            | -                | -                | -         |     6.76 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           15 |     2541 | 2024-01-18 | Zero Tenacity     | W   | 0.473      | -            | -                | -                | -         |     0.74 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           14 |     3056 | 2023-12-13 | ENCE              | L   | 0.232      | -            | -                | -                | -         |    -3.60 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|           13 |     3065 | 2023-12-12 | ex-Preasy         | W   | 0.225      | -            | -                | -                | -         |     0.59 | danistzz, KaiR0N-, Magnojez, nafany, zorte |
|           12 |     3118 | 2023-12-09 | Virtus.pro        | L   | 0.204      | -            | -                | -                | -         |    -1.14 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           11 |     3137 | 2023-12-08 | Cloud9            | W   | 0.198      | 0.657        | 0.472 (0.061)    | -                | 1 (0.198) |     4.59 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|           10 |     3182 | 2023-12-06 | GamerLegion       | W   | 0.187      | -            | -                | -                | 1 (0.187) |     3.22 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            9 |     3218 | 2023-12-05 | MIBR              | L   | 0.179      | -            | -                | -                | -         |    -1.29 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            8 |     3349 | 2023-11-26 | Gucci Academy     | L   | 0.119      | -            | -                | -                | -         |    -3.68 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            7 |     3375 | 2023-11-25 | Into the Breach   | W   | 0.112      | -            | -                | -                | -         |     0.08 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            6 |     3490 | 2023-11-18 | MIBR              | L   | 0.067      | -            | -                | -                | -         |    -0.49 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            5 |     3502 | 2023-11-18 | Sangal            | W   | 0.065      | -            | -                | -                | -         |     0.01 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            4 |     3532 | 2023-11-17 | KOI               | W   | 0.058      | -            | -                | -                | 1 (0.058) |     0.16 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            3 |     3564 | 2023-11-16 | 9 Pandas          | L   | 0.052      | -            | -                | -                | -         |    -1.44 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            2 |     3729 | 2023-11-09 | SINNERS           | W   | 0.007      | -            | -                | -                | -         |     0.02 | danistzz, KaiR0N-, nafany, s1ren, zorte    |
|            1 |     3732 | 2023-11-09 | ARCRED            | W   | 0.006      | -            | -                | -                | -         |     0.00 | danistzz, KaiR0N-, nafany, s1ren, zorte    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,195.90)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.56) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-04 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-04-14 |      1.000 | $52,500.00     | $52,500.00      |
| 2024-04-14 |      1.000 | $9,000.00      | $9,000.00       |
| 2024-03-06 |      0.793 | $12,500.00     | $9,913.07       |
| 2024-02-02 |      0.574 | $2,500.00      | $1,435.21       |
| 2023-12-13 |      0.233 | $1,500.00      | $350.18         |
| 2023-12-10 |      0.212 | $30,000.00     | $6,372.99       |
| 2023-11-26 |      0.119 | $4,000.00      | $475.30         |
| 2023-11-09 |      0.007 | $22,000.00     | $149.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
