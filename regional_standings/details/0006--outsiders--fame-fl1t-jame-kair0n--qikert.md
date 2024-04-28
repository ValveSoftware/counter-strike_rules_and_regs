### Roster Details<br />
Team Name: Outsiders<br />
Roster: fame, FL1T, Jame, KaiR0N-, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [6](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1617.4<br />
<br />
Final Rank Value (1617.4) = Starting Rank Value (1634.7) + Head To Head Adjustments (-17.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.912[<sup>1</sup>](#table2)
- Bounty Collected: 0.540[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.717[<sup>2</sup>](#table1)

The average of these factors is 0.603<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1634.7
- 400 + ( ( 0.603 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1634.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       53 | 2023-02-10 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -14.07 | fame, FL1T, Jame, KaiR0N-, Qikert |
|           34 |       97 | 2023-02-07 | Complexity        | W   | 1.000      | 1.000        | 0.129 (0.129)    | 0.487 (0.487)    | 1 (1.000) |     5.34 | fame, FL1T, Jame, KaiR0N-, Qikert |
|           33 |      110 | 2023-02-07 | OG                | W   | 1.000      | 1.000        | 0.237 (0.237)    | 0.365 (0.365)    | 1 (1.000) |    10.94 | fame, FL1T, Jame, KaiR0N-, Qikert |
|           32 |      129 | 2023-02-06 | Ninjas in Pyjamas | W   | 1.000      | 1.000        | 0.136 (0.136)    | 0.253 (0.253)    | 1 (1.000) |     4.74 | fame, FL1T, Jame, KaiR0N-, Qikert |
|           31 |      152 | 2023-02-05 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -21.63 | fame, FL1T, Jame, KaiR0N-, Qikert |
|           30 |      881 | 2022-12-14 | G2                | L   | 0.803      | -            | -                | -                | -         |    -4.43 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           29 |      901 | 2022-12-14 | Liquid            | L   | 0.797      | -            | -                | -                | -         |    -7.52 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           28 |     1643 | 2022-11-13 | Heroic            | W   | 0.594      | 1.000        | 0.608 (0.361)    | 0.560 (0.332)    | 1 (0.594) |    13.16 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           27 |     1649 | 2022-11-12 | MOUZ              | W   | 0.587      | 1.000        | 0.155 (0.091)    | 0.276 (0.162)    | 1 (0.587) |     3.05 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           26 |     1661 | 2022-11-10 | fnatic            | W   | 0.573      | 1.000        | 0.243 (0.139)    | 0.454 (0.260)    | 1 (0.573) |     5.39 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           25 |     1687 | 2022-11-07 | MOUZ              | W   | 0.552      | 1.000        | 0.155 (0.085)    | 0.276 (0.152)    | 1 (0.552) |     2.79 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           24 |     1698 | 2022-11-06 | Spirit            | W   | 0.546      | 1.000        | 0.211 (0.115)    | 0.350 (0.191)    | 1 (0.546) |     3.21 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           23 |     1708 | 2022-11-05 | Ninjas in Pyjamas | W   | 0.542      | 1.000        | 0.136 (0.074)    | 0.253 (0.137)    | 1 (0.542) |     2.27 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           22 |     1721 | 2022-11-05 | Heroic            | L   | 0.539      | -            | -                | -                | -         |    -4.66 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           21 |     1745 | 2022-11-02 | fnatic            | W   | 0.520      | -            | -                | -                | 1 (0.520) |     4.89 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           20 |     1763 | 2022-11-01 | Vitality          | W   | 0.512      | -            | -                | -                | -         |     7.45 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           19 |     1771 | 2022-10-31 | IHC               | W   | 0.507      | -            | -                | -                | -         |     2.31 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           18 |     1784 | 2022-10-31 | MOUZ              | L   | 0.505      | -            | -                | -                | -         |   -13.83 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           17 |     2109 | 2022-10-16 | ENCE              | W   | 0.406      | -            | -                | -                | -         |     1.74 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           16 |     2126 | 2022-10-16 | MOUZ              | W   | 0.404      | -            | -                | -                | -         |     1.65 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           15 |     2155 | 2022-10-15 | Fluxo             | W   | 0.398      | 0.500        | -                | 0.528 (0.105)    | -         |     0.25 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           14 |     2184 | 2022-10-14 | ENCE              | L   | 0.393      | -            | -                | -                | -         |   -10.81 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           13 |     2197 | 2022-10-14 | Fluxo             | W   | 0.391      | -            | -                | -                | -         |     0.23 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           12 |     2305 | 2022-10-09 | Falcons           | W   | 0.360      | -            | -                | -                | -         |     0.31 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           11 |     2330 | 2022-10-08 | OG                | L   | 0.351      | -            | -                | -                | -         |    -7.27 | fame, FL1T, Jame, n0rb3r7, Qikert |
|           10 |     2359 | 2022-10-06 | Natus Vincere     | L   | 0.340      | -            | -                | -                | -         |    -4.56 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            9 |     2387 | 2022-10-05 | Heroic            | W   | 0.333      | -            | -                | -                | -         |     7.43 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            8 |     2424 | 2022-10-04 | Monte             | W   | 0.325      | -            | -                | -                | -         |     0.06 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            7 |     2496 | 2022-09-30 | Vitality          | L   | 0.299      | -            | -                | -                | -         |    -5.17 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            6 |     2553 | 2022-09-28 | FURIA             | W   | 0.286      | 0.922        | 0.131 (0.035)    | -                | -         |     1.04 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            5 |     3073 | 2022-09-11 | G2                | L   | 0.173      | -            | -                | -                | -         |    -0.63 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            4 |     3145 | 2022-09-10 | MIBR              | W   | 0.166      | -            | -                | -                | -         |     0.14 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            3 |     3163 | 2022-09-09 | FaZe              | L   | 0.160      | -            | -                | -                | -         |    -2.07 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            2 |     3227 | 2022-09-08 | FTW               | W   | 0.151      | -            | -                | -                | -         |     0.07 | fame, FL1T, Jame, n0rb3r7, Qikert |
|            1 |     3238 | 2022-09-07 | BIG               | W   | 0.146      | -            | -                | -                | -         |     0.91 | fame, FL1T, Jame, n0rb3r7, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($379,667.23)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.80) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $40,000.00     | $40,000.00      |
| 2022-12-18 |      0.824 | $15,000.00     | $12,367.37      |
| 2022-11-13 |      0.594 | $500,000.00    | $296,786.84     |
| 2022-10-16 |      0.406 | $50,000.00     | $20,306.73      |
| 2022-10-02 |      0.314 | $32,500.00     | $10,206.28      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
