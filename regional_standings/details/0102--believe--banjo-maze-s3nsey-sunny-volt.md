### Roster Details<br />
Team Name: Believe<br />
Roster: Banjo, Maze, S3NSEY, suNny, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  791.6<br />
<br />
Final Rank Value (791.6) = Starting Rank Value (766.1) + Head To Head Adjustments (25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.1
- 400 + ( ( 0.179 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 766.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      615 | 2023-01-18 | 1WIN            | L   | 1.000      | -            | -                | -                | -         |    -9.92 | Banjo, Maze, S3NSEY, suNny, volt            |
|           44 |      910 | 2022-12-13 | forZe           | L   | 0.793      | -            | -                | -                | -         |    -7.17 | Banjo, Kevve, Maze, volt, WolfY             |
|           43 |     1071 | 2022-12-07 | ex-Finest       | W   | 0.753      | 0.435        | 0.015 (0.005)    | 0.357 (0.117)    | 0 (0.000) |    15.54 | Banjo, Kevve, Maze, volt, WolfY             |
|           42 |     1493 | 2022-11-23 | AGO             | W   | 0.661      | 0.435        | -                | 0.328 (0.094)    | 0 (0.000) |    11.04 | Banjo, Maze, Peppzor, volt, WolfY           |
|           41 |     1689 | 2022-11-07 | Anonymo         | L   | 0.551      | -            | -                | -                | -         |   -13.24 | adamS, Banjo, Maze, S3NSEY, volt            |
|           40 |     1695 | 2022-11-06 | ENCE Academy    | L   | 0.547      | -            | -                | -                | -         |    -9.26 | adamS, Banjo, Maze, volt, WolfY             |
|           39 |     1700 | 2022-11-06 | MOUZ NXT        | W   | 0.546      | 0.320        | 0.015 (0.003)    | 0.537 (0.094)    | 0 (0.000) |     9.07 | Chr1zN, Jimpphat, Nexius, Q-Q, shield       |
|           38 |     1706 | 2022-11-06 | Illuminar       | L   | 0.545      | -            | -                | -                | -         |    -4.34 | byali, mASKED, morelz, szejn, TOAO          |
|           37 |     1717 | 2022-11-05 | ENCE Academy    | L   | 0.540      | -            | -                | -                | -         |    -9.48 | HENU, juissi, myltsi, podi, S1rva           |
|           36 |     1735 | 2022-11-03 | MOUZ NXT        | W   | 0.526      | 0.320        | 0.015 (0.003)    | 0.537 (0.091)    | 0 (0.000) |     8.61 | Chr1zN, Jimpphat, Nexius, Q-Q, shield       |
|           35 |     1743 | 2022-11-02 | forZe           | L   | 0.520      | -            | -                | -                | -         |    -4.24 | adamS, Banjo, Maze, volt, WolfY             |
|           34 |     1779 | 2022-10-31 | VOID            | W   | 0.506      | -            | -                | -                | 0 (0.000) |     1.50 | envi, miko, ruyter, Saasinho, thomass1      |
|           33 |     1800 | 2022-10-30 | PROSPECTS       | L   | 0.499      | -            | -                | -                | -         |    -4.64 | AlekS, bobeksde, FRANSSON, hype, spooke     |
|           32 |     1822 | 2022-10-28 | Flames Ascent   | W   | 0.486      | -            | -                | -                | 0 (0.000) |     4.22 | buNNy, FeZ, Hansi, Inspire, Speedy          |
|           31 |     1846 | 2022-10-27 | Apeks Rebels    | L   | 0.479      | -            | -                | -                | -         |    -8.48 | Banjo, Maze, milky, volt, WolfY             |
|           30 |     1849 | 2022-10-27 | FURIA Academy   | W   | 0.478      | 0.500        | -                | 0.278 (0.067)    | 0 (0.000) |     5.85 | Banjo, Maze, milky, volt, WolfY             |
|           29 |     1863 | 2022-10-26 | MOUZ NXT        | W   | 0.473      | 0.500        | 0.015 (0.004)    | 0.537 (0.127)    | 0 (0.000) |     7.81 | adeX, Chr1zN, Jimpphat, Nexius, Q-Q         |
|           28 |     1886 | 2022-10-25 | FURIA Academy   | L   | 0.466      | -            | -                | -                | -         |    -9.05 | Bruninho, decenty, kauez, koala, zmb        |
|           27 |     1888 | 2022-10-25 | NAVI Junior     | L   | 0.466      | -            | -                | -                | -         |    -8.19 | Banjo, Maze, milky, volt, WolfY             |
|           26 |     1981 | 2022-10-21 | ECLOT           | L   | 0.440      | -            | -                | -                | -         |    -3.87 | Banjo, Maze, Peppzor, volt, WolfY           |
|           25 |     2071 | 2022-10-18 | OG Academy      | L   | 0.418      | -            | -                | -                | -         |    -8.78 | Banjo, Maze, Peppzor, volt, WolfY           |
|           24 |     2107 | 2022-10-16 | MOUZ NXT        | L   | 0.406      | -            | -                | -                | -         |    -6.69 | Banjo, Maze, Peppzor, volt, WolfY           |
|           23 |     2114 | 2022-10-16 | NAVI Junior     | W   | 0.406      | 0.500        | 0.022 (0.004)    | -                | 0 (0.000) |     5.41 | Dem0N, froz1k, headtr1ck, npl, yab0ku-      |
|           22 |     2119 | 2022-10-16 | PROSPECTS       | W   | 0.405      | 0.435        | 0.032 (0.006)    | 0.689 (0.121)    | 0 (0.000) |     8.52 | AlekS, bobeksde, FRANSSON, hype, spooke     |
|           21 |     2134 | 2022-10-15 | Aurora          | W   | 0.400      | -            | -                | -                | -         |     4.30 | Banjo, Maze, Peppzor, volt, WolfY           |
|           20 |     2181 | 2022-10-14 | Flames Ascent   | W   | 0.393      | -            | -                | -                | -         |     3.49 | Banjo, Maze, Peppzor, volt, WolfY           |
|           19 |     2194 | 2022-10-14 | 500             | W   | 0.392      | 0.435        | 0.085 (0.014)    | 0.760 (0.129)    | -         |     9.84 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ |
|           18 |     2206 | 2022-10-13 | Iron Branch     | W   | 0.387      | -            | -                | -                | -         |     4.37 | Banjo, Maze, Peppzor, volt, WolfY           |
|           17 |     2227 | 2022-10-13 | Apeks Rebels    | W   | 0.385      | -            | -                | -                | -         |     5.68 | berzerk, Brave, sense, Tapewaare, vhw       |
|           16 |     2246 | 2022-10-12 | SAW             | L   | 0.380      | -            | -                | -                | -         |    -1.74 | Banjo, Maze, Peppzor, volt, WolfY           |
|           15 |     2262 | 2022-10-12 | OG Academy      | W   | 0.378      | -            | -                | -                | -         |     4.76 | AwaykeN, Dementor, Marix, oxygeN, s0und     |
|           14 |     2269 | 2022-10-12 | IKLA            | W   | 0.377      | 0.435        | 0.017 (0.003)    | 0.743 (0.122)    | -         |     7.85 | byr9, j3kie, Kvem, s4ltovsk1yy, SENSEi      |
|           13 |     2313 | 2022-10-09 | ECLOT           | W   | 0.359      | 0.371        | 0.046 (0.006)    | 0.584 (0.078)    | -         |     8.80 | Banjo, Maze, Peppzor, volt, WolfY           |
|           12 |     2435 | 2022-10-03 | Aurora          | L   | 0.320      | -            | -                | -                | -         |    -6.26 | Banjo, Maze, Peppzor, volt, WolfY           |
|           11 |     2478 | 2022-10-01 | PACT            | W   | 0.305      | -            | -                | -                | -         |     4.92 | azizz, b1elany, bnox, fr3nd, lunAtic        |
|           10 |     2549 | 2022-09-28 | OneTap          | W   | 0.286      | -            | -                | -                | -         |     4.10 | Ciocardau, GEOHYPE, MoDo, smekk-, swiiffter |
|            9 |     2591 | 2022-09-26 | ECLOT           | L   | 0.273      | -            | -                | -                | -         |    -1.75 | capseN, Dytor, K1-FiDa, nbqq, Valencio      |
|            8 |     2741 | 2022-09-22 | Anonymo         | W   | 0.247      | -            | -                | -                | -         |     2.04 | Demho, Flayy, innocent, oskarish, Vegi      |
|            7 |     2786 | 2022-09-21 | ARCRED          | W   | 0.239      | -            | -                | -                | -         |     3.27 | 1NVISIBLEE, DSSj, eN0o, hurtslxrd, Ryujin   |
|            6 |     2916 | 2022-09-16 | Tricked         | L   | 0.207      | -            | -                | -                | -         |    -1.43 | Banjo, Maze, Peppzor, volt, WolfY           |
|            5 |     2929 | 2022-09-16 | Entropiq        | L   | 0.205      | -            | -                | -                | -         |    -3.67 | Forester, Krad, mir, NickelBack, SENSEi     |
|            4 |     3069 | 2022-09-11 | HONORIS         | W   | 0.174      | -            | -                | -                | -         |     3.53 | Banjo, Maze, Peppzor, volt, WolfY           |
|            3 |     3081 | 2022-09-11 | AVANGAR         | W   | 0.173      | -            | -                | -                | -         |     2.71 | ice, ICY, kade0, sorrow, w1nt3r             |
|            2 |     3120 | 2022-09-10 | 500             | W   | 0.167      | 0.143        | 0.085 (0.002)    | -                | -         |     4.48 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ |
|            1 |     3210 | 2022-09-08 | Looking For Org | L   | 0.154      | -            | -                | -                | -         |    -4.01 | AW, L1GH7n1nG, R0b3n, sFade8, SoLb          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,778.48)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2022-11-20 |      0.640 | $1,500.00      | $960.33         |
| 2022-11-06 |      0.547 | $2,506.00      | $1,369.77       |
| 2022-10-09 |      0.359 | $1,250.00      | $448.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
