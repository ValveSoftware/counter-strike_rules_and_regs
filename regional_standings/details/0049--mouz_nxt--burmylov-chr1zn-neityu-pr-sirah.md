### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Chr1zN, Neityu, PR, sirah<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
Final Rank Value:  1039.2<br />
<br />
Final Rank Value (1039.2) = Starting Rank Value (1062.7) + Head To Head Adjustments (-23.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.463[<sup>2</sup>](#table1)
- Opponent Network: 0.348[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1062.7
- 400 + ( ( 0.341 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1062.7


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
|           78 |       33 | 2024-05-28 | RUBY              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.21 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           77 |       61 | 2024-05-27 | Nexus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.48 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           76 |       68 | 2024-05-26 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           75 |       76 | 2024-05-26 | B8                | W   | 1.000      | 0.435        | 0.165 (0.072)    | 1.000 (0.435)    | 0 (0.000) |    22.12 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           74 |      100 | 2024-05-25 | 3DMAX             | W   | 1.000      | 0.435        | 0.105 (0.045)    | 0.669 (0.291)    | 0 (0.000) |    21.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           73 |      115 | 2024-05-24 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           72 |      127 | 2024-05-23 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.94 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           71 |      167 | 2024-05-22 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |   -18.83 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           70 |      209 | 2024-05-21 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -25.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           69 |      279 | 2024-05-19 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -10.59 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           68 |      345 | 2024-05-17 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.81 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           67 |      369 | 2024-05-16 | Sampi             | W   | 1.000      | 0.435        | -                | 0.794 (0.345)    | 0 (0.000) |    11.66 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|           66 |      429 | 2024-05-15 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           65 |      485 | 2024-05-14 | B8                | L   | 1.000      | -            | -                | -                | -         |   -12.67 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           64 |      509 | 2024-05-13 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.15 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           63 |      531 | 2024-05-12 | B8                | L   | 1.000      | -            | -                | -                | -         |   -14.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           62 |      542 | 2024-05-11 | Endpoint          | W   | 1.000      | 0.435        | -                | 0.627 (0.272)    | 0 (0.000) |    11.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           61 |      571 | 2024-05-10 | Aurora            | W   | 1.000      | 0.435        | 0.493 (0.214)    | 0.840 (0.365)    | -         |    27.07 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           60 |      641 | 2024-05-07 | RUSH B            | W   | 1.000      | -            | -                | -                | -         |     6.29 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           59 |      683 | 2024-05-05 | GL Academy        | W   | 1.000      | -            | -                | -                | -         |     7.13 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           58 |      686 | 2024-05-04 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -22.43 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           57 |      706 | 2024-05-03 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.20 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           56 |      723 | 2024-05-02 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -20.11 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           55 |      739 | 2024-05-02 | ALTERNATE aTTaX   | W   | 1.000      | 0.500        | 0.048 (0.024)    | 0.650 (0.325)    | -         |    11.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           54 |      744 | 2024-05-02 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -15.93 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           53 |      759 | 2024-05-01 | BLEED             | W   | 1.000      | 0.500        | 0.246 (0.123)    | 0.982 (0.491)    | -         |    23.34 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           52 |      771 | 2024-04-30 | ECLOT             | W   | 1.000      | 0.500        | 0.084 (0.042)    | -                | -         |    16.32 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           51 |      781 | 2024-04-30 | V1dar             | W   | 1.000      | -            | -                | -                | -         |     2.32 | Burmylov, Chr1zN, PR, sirah, TOBIZ     |
|           50 |      795 | 2024-04-29 | Nemiga            | L   | 0.999      | -            | -                | -                | -         |    -8.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           49 |      805 | 2024-04-29 | Grannys Knockers  | W   | 0.997      | -            | -                | -                | -         |     7.61 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           48 |      835 | 2024-04-27 | ECLOT             | W   | 0.986      | 0.500        | 0.084 (0.041)    | -                | -         |    17.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           47 |      905 | 2024-04-25 | Insilio           | L   | 0.970      | -            | -                | -                | -         |   -18.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           46 |      919 | 2024-04-24 | PARIVISION        | L   | 0.965      | -            | -                | -                | -         |   -19.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           45 |      951 | 2024-04-22 | EYEBALLERS        | W   | 0.952      | -            | -                | -                | -         |     7.66 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           44 |      958 | 2024-04-22 | Nemiga            | L   | 0.950      | -            | -                | -                | -         |    -8.30 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           43 |      969 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.945      | 0.500        | -                | 0.650 (0.307)    | -         |     8.08 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           42 |      975 | 2024-04-21 | ECLOT             | L   | 0.944      | -            | -                | -                | -         |   -15.65 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           41 |      997 | 2024-04-20 | BLEED             | L   | 0.939      | -            | -                | -                | -         |    -8.91 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           40 |     1084 | 2024-04-18 | Enterprise        | W   | 0.925      | -            | -                | -                | -         |     9.56 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           39 |     1106 | 2024-04-18 | ENCE Academy      | W   | 0.924      | -            | -                | -                | -         |     6.98 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           38 |     1153 | 2024-04-17 | JANO              | W   | 0.916      | -            | -                | -                | -         |     3.63 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           37 |     1166 | 2024-04-16 | GamerLegion       | L   | 0.912      | -            | -                | -                | -         |    -8.11 | Anlelele, Burmylov, Neityu, PR, sirah  |
|           36 |     1192 | 2024-04-15 | Alliance          | W   | 0.904      | -            | -                | -                | -         |     6.89 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           35 |     1233 | 2024-04-12 | Permitta          | L   | 0.884      | -            | -                | -                | -         |   -18.19 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           34 |     1360 | 2024-04-09 | Zero Tenacity     | W   | 0.865      | 0.371        | 0.147 (0.047)    | 1.000 (0.320)    | -         |    11.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           33 |     1390 | 2024-04-08 | B8                | W   | 0.858      | 0.384        | 0.165 (0.054)    | 1.000 (0.330)    | -         |    14.78 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           32 |     1520 | 2024-04-03 | PARIVISION        | W   | 0.826      | -            | -                | -                | -         |    10.95 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           31 |     1850 | 2024-03-16 | Sampi             | L   | 0.704      | -            | -                | -                | -         |   -13.79 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           30 |     1867 | 2024-03-15 | Entropiq          | W   | 0.698      | -            | -                | -                | -         |     2.66 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           29 |     1916 | 2024-03-13 | Permitta          | L   | 0.687      | -            | -                | -                | -         |   -13.31 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           28 |     1936 | 2024-03-13 | Alliance          | W   | 0.684      | -            | -                | -                | -         |     5.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           27 |     1964 | 2024-03-12 | GODSENT           | W   | 0.679      | -            | -                | -                | -         |     2.04 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           26 |     1970 | 2024-03-12 | Sampi             | L   | 0.677      | -            | -                | -                | -         |   -13.91 | Burmylov, Chr1zN, Neityu, sirah, xReal |
|           25 |     1990 | 2024-03-11 | Passion UA        | W   | 0.671      | -            | -                | -                | -         |     8.53 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           24 |     1992 | 2024-03-11 | NOM               | W   | 0.670      | -            | -                | -                | -         |     1.26 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           23 |     2000 | 2024-03-10 | V1dar             | W   | 0.666      | -            | -                | -                | -         |     1.27 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           22 |     2009 | 2024-03-10 | Passion UA        | L   | 0.665      | -            | -                | -                | -         |   -12.74 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           21 |     2013 | 2024-03-10 | ALTERNATE aTTaX   | W   | 0.664      | -            | -                | -                | -         |     6.60 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           20 |     2051 | 2024-03-08 | K10               | W   | 0.652      | -            | -                | -                | -         |     2.79 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           19 |     2067 | 2024-03-07 | INGLORIOUS        | L   | 0.646      | -            | -                | -                | -         |   -19.16 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           18 |     2202 | 2024-03-03 | ex-Preasy         | W   | 0.617      | -            | -                | -                | -         |     6.96 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           17 |     2215 | 2024-03-02 | ECF               | W   | 0.611      | -            | -                | -                | -         |     3.68 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           16 |     2285 | 2024-02-27 | ECLOT             | L   | 0.584      | -            | -                | -                | -         |   -10.05 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           15 |     2300 | 2024-02-26 | BLEED             | W   | 0.578      | -            | -                | -                | -         |     0.45 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           14 |     2363 | 2024-02-24 | Sashi             | W   | 0.563      | 0.333        | 0.157 (0.030)    | -                | -         |     8.69 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           13 |     2417 | 2024-02-21 | Entropiq          | W   | 0.544      | -            | -                | -                | -         |     1.50 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           12 |     2911 | 2024-01-27 | TSM               | L   | 0.377      | -            | -                | -                | -         |   -10.22 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           11 |     2981 | 2024-01-23 | SINNERS           | L   | 0.351      | -            | -                | -                | -         |    -6.84 | Burmylov, Chr1zN, Neityu, PR, sirah    |
|           10 |     3043 | 2024-01-21 | Astralis Talent   | W   | 0.337      | -            | -                | -                | -         |     2.30 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            9 |     3086 | 2024-01-20 | Monte Gen         | W   | 0.330      | -            | -                | -                | -         |     0.78 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            8 |     3134 | 2024-01-19 | Astralis Talent   | W   | 0.324      | -            | -                | -                | -         |     2.21 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            7 |     3142 | 2024-01-19 | WOPA              | W   | 0.323      | -            | -                | -                | -         |     0.61 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            6 |     3208 | 2024-01-18 | Passion UA        | W   | 0.317      | -            | -                | -                | -         |     4.29 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            5 |     3248 | 2024-01-17 | Aurora Young Blud | W   | 0.310      | -            | -                | -                | -         |     0.98 | Chr1zN, Kristou, Neityu, PR, sirah     |
|            4 |     3332 | 2024-01-15 | The Prodigies     | L   | 0.297      | -            | -                | -                | -         |    -8.89 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|            3 |     3800 | 2023-12-07 | Zero Tenacity     | L   | 0.040      | -            | -                | -                | -         |    -0.62 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|            2 |     3823 | 2023-12-06 | Endpoint          | L   | 0.033      | -            | -                | -                | -         |    -0.77 | Chr1zN, Neityu, PR, sirah, TOBIZ       |
|            1 |     3842 | 2023-12-06 | Nemiga            | W   | 0.031      | -            | -                | -                | -         |     0.70 | Chr1zN, Neityu, PR, sirah, TOBIZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,290.80)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-18 |      1.000 | $500.00        | $500.00         |
| 2024-05-12 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-03 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-03-18 |      0.717 | $1,000.00      | $717.10         |
| 2024-03-11 |      0.671 | $3,500.00      | $2,349.20       |
| 2024-02-28 |      0.590 | $1,500.00      | $885.68         |
| 2024-01-21 |      0.337 | $5,000.00      | $1,683.32       |
| 2024-01-20 |      0.330 | $3,500.00      | $1,155.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
