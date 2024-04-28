### Roster Details<br />
Team Name: fnatic<br />
Roster: FASHR, KRIMZ, mezii, nicoodoz, roeJ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1459.9<br />
<br />
Final Rank Value (1459.9) = Starting Rank Value (1487.4) + Head To Head Adjustments (-27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.619[<sup>1</sup>](#table2)
- Bounty Collected: 0.525[<sup>2</sup>](#table1)
- Opponent Network: 0.223[<sup>2</sup>](#table1)
- LAN Wins: 0.757[<sup>2</sup>](#table1)

The average of these factors is 0.531<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1487.4
- 400 + ( ( 0.531 - 0.000 ) / ( 0.782 - 0.000 ) ) * 1600 = 1487.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      108 | 2023-02-07 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -21.40 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           44 |      122 | 2023-02-06 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -11.09 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           43 |      152 | 2023-02-05 | Outsiders         | W   | 1.000      | 1.000        | 0.801 (0.801)    | 0.353 (0.353)    | 1 (1.000) |    21.63 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           42 |      194 | 2023-02-03 | MIBR              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.08 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           41 |      224 | 2023-02-01 | OG                | L   | 1.000      | -            | -                | -                | -         |   -14.44 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           40 |      246 | 2023-02-01 | Evil Geniuses     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.00 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           39 |     1534 | 2022-11-20 | BIG               | W   | 0.640      | 0.589        | 0.124 (0.047)    | 0.520 (0.196)    | 1 (0.640) |     6.61 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           38 |     1547 | 2022-11-19 | Astralis          | W   | 0.634      | 0.589        | 0.149 (0.056)    | 0.538 (0.201)    | 1 (0.634) |     5.94 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           37 |     1580 | 2022-11-17 | Bad News Eagles   | W   | 0.620      | 0.589        | 0.066 (0.024)    | 0.375 (0.137)    | 1 (0.620) |     2.73 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           36 |     1584 | 2022-11-17 | SAW               | W   | 0.620      | 0.589        | 0.093 (0.034)    | 0.642 (0.234)    | 1 (0.620) |     2.55 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           35 |     1589 | 2022-11-17 | Astralis          | W   | 0.619      | 0.589        | 0.149 (0.054)    | 0.538 (0.196)    | 1 (0.619) |     6.10 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           34 |     1597 | 2022-11-17 | Complexity        | L   | 0.618      | -            | -                | -                | -         |   -13.11 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           33 |     1601 | 2022-11-17 | 500               | W   | 0.618      | 0.589        | 0.085 (0.031)    | 0.760 (0.276)    | 1 (0.618) |     1.84 | FASHR, mezii, nicoodoz, Peppzor, roeJ |
|           32 |     1661 | 2022-11-10 | Outsiders         | L   | 0.573      | -            | -                | -                | -         |    -5.39 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           31 |     1685 | 2022-11-07 | BIG               | W   | 0.553      | 1.000        | 0.124 (0.068)    | 0.520 (0.288)    | 1 (0.553) |     6.28 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           30 |     1699 | 2022-11-06 | ENCE              | W   | 0.546      | 1.000        | 0.108 (0.059)    | 0.394 (0.215)    | -         |     4.55 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           29 |     1709 | 2022-11-05 | Heroic            | L   | 0.542      | -            | -                | -                | -         |    -2.30 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           28 |     1719 | 2022-11-05 | Ninjas in Pyjamas | W   | 0.540      | 1.000        | 0.136 (0.074)    | 0.253 (0.137)    | -         |     4.61 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           27 |     1732 | 2022-11-03 | 9z                | W   | 0.528      | -            | -                | -                | -         |     0.80 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           26 |     1745 | 2022-11-02 | Outsiders         | L   | 0.520      | -            | -                | -                | -         |    -4.89 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           25 |     1755 | 2022-11-01 | MOUZ              | L   | 0.514      | -            | -                | -                | -         |   -11.83 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           24 |     1765 | 2022-10-31 | OG                | W   | 0.508      | -            | -                | -                | -         |     9.07 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           23 |     1774 | 2022-10-31 | Cloud9            | W   | 0.507      | -            | -                | -                | -         |     4.68 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           22 |     2323 | 2022-10-08 | 1WIN              | W   | 0.353      | -            | -                | -                | -         |     0.43 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           21 |     2344 | 2022-10-07 | Eternal Fire      | W   | 0.346      | -            | -                | -                | -         |     0.63 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           20 |     2377 | 2022-10-06 | B8                | L   | 0.337      | -            | -                | -                | -         |   -10.54 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           19 |     2396 | 2022-10-05 | FaZe              | L   | 0.332      | -            | -                | -                | -         |    -2.34 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           18 |     2426 | 2022-10-04 | Aurora            | W   | 0.325      | -            | -                | -                | -         |     0.13 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           17 |     2579 | 2022-09-27 | Liquid            | L   | 0.279      | -            | -                | -                | -         |    -1.12 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           16 |     2888 | 2022-09-17 | Sangal            | L   | 0.213      | -            | -                | -                | -         |    -6.38 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           15 |     2911 | 2022-09-16 | PACT              | W   | 0.207      | -            | -                | -                | -         |     0.12 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           14 |     2921 | 2022-09-16 | LDLC              | L   | 0.206      | -            | -                | -                | -         |    -6.41 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           13 |     2927 | 2022-09-16 | Genk              | W   | 0.206      | -            | -                | -                | -         |     0.09 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           12 |     3234 | 2022-09-07 | sYnck             | W   | 0.147      | -            | -                | -                | -         |     0.08 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           11 |     3241 | 2022-09-07 | ECLOT             | W   | 0.145      | -            | -                | -                | -         |     0.31 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|           10 |     3285 | 2022-09-04 | Endpoint          | W   | 0.127      | -            | -                | -                | -         |     0.14 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            9 |     3328 | 2022-09-03 | Spirit            | W   | 0.119      | -            | -                | -                | -         |     1.28 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            8 |     3347 | 2022-09-02 | Vitality          | L   | 0.114      | -            | -                | -                | -         |    -1.27 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            7 |     3388 | 2022-09-01 | Natus Vincere     | L   | 0.106      | -            | -                | -                | -         |    -0.81 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            6 |     3414 | 2022-08-31 | Ninjas in Pyjamas | W   | 0.100      | -            | -                | -                | -         |     0.06 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            5 |     3642 | 2022-08-22 | K23               | W   | 0.040      | -            | -                | -                | -         |     0.01 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            4 |     3645 | 2022-08-22 | Monte             | W   | 0.039      | -            | -                | -                | -         |     0.05 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            3 |     3670 | 2022-08-21 | HAVU              | W   | 0.034      | -            | -                | -                | -         |     0.05 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            2 |     3676 | 2022-08-21 | AGO               | W   | 0.033      | -            | -                | -                | -         |     0.02 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |
|            1 |     3702 | 2022-08-21 | B8                | W   | 0.032      | -            | -                | -                | -         |     0.01 | FASHR, KRIMZ, mezii, nicoodoz, roeJ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($115,151.89)
- Divide that value by the highest value among all rosters ($473,741.74)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-02-12 |      1.000 | $16,000.00     | $16,000.00      |
| 2022-11-20 |      0.640 | $100,000.00    | $63,962.01      |
| 2022-11-13 |      0.594 | $45,000.00     | $26,710.82      |
| 2022-10-02 |      0.314 | $27,000.00     | $8,479.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
