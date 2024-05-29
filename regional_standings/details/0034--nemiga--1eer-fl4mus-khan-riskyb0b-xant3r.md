### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, FL4MUS, khaN, riskyb0b, Xant3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [34](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1174.9<br />
<br />
Final Rank Value (1174.9) = Starting Rank Value (1219.9) + Head To Head Adjustments (-45.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.694[<sup>1</sup>](#table2)
- Bounty Collected: 0.464[<sup>2</sup>](#table1)
- Opponent Network: 0.437[<sup>2</sup>](#table1)
- LAN Wins: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.422<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1219.9
- 400 + ( ( 0.422 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1219.9


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
|           41 |      579 | 2024-05-10 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -26.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           40 |      623 | 2024-05-08 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -23.84 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           39 |      642 | 2024-05-07 | SINNERS           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           38 |      666 | 2024-05-05 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           37 |      706 | 2024-05-03 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.157 (0.079)    | 1.000 (0.500)    | 0 (0.000) |     8.20 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           36 |      729 | 2024-05-02 | Passion UA        | W   | 1.000      | 0.500        | -                | 0.759 (0.380)    | 0 (0.000) |     5.77 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           35 |      750 | 2024-05-01 | B8                | W   | 1.000      | 0.500        | 0.165 (0.082)    | 1.000 (0.500)    | 0 (0.000) |     7.98 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           34 |      795 | 2024-04-29 | MOUZ NXT          | W   | 0.999      | 0.500        | 0.157 (0.079)    | 1.000 (0.500)    | 0 (0.000) |     8.65 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           33 |      826 | 2024-04-28 | Grannys Knockers  | L   | 0.991      | -            | -                | -                | -         |   -28.18 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           32 |      848 | 2024-04-27 | 1WIN              | W   | 0.984      | 0.500        | -                | 0.666 (0.328)    | 0 (0.000) |     7.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           31 |      872 | 2024-04-26 | Sangal            | L   | 0.978      | -            | -                | -                | -         |   -22.43 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           30 |      916 | 2024-04-24 | BLEED             | W   | 0.965      | 0.500        | 0.246 (0.119)    | 0.982 (0.474)    | 0 (0.000) |    15.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           29 |      940 | 2024-04-23 | Zero Tenacity     | W   | 0.958      | 0.500        | 0.147 (0.070)    | 1.000 (0.479)    | 0 (0.000) |     6.89 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           28 |      958 | 2024-04-22 | MOUZ NXT          | W   | 0.950      | 0.500        | 0.157 (0.075)    | 1.000 (0.475)    | -         |     8.30 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           27 |      974 | 2024-04-21 | 1WIN              | W   | 0.944      | -            | -                | -                | -         |     6.98 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           26 |     1007 | 2024-04-20 | Gaimin Gladiators | L   | 0.937      | -            | -                | -                | -         |   -13.02 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           25 |     1042 | 2024-04-19 | Sangal            | W   | 0.932      | 0.500        | 0.166 (0.077)    | 0.911 (0.424)    | -         |     8.23 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           24 |     1088 | 2024-04-18 | Secret            | W   | 0.925      | -            | -                | -                | -         |     1.08 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           23 |     1130 | 2024-04-17 | Alliance          | W   | 0.918      | -            | -                | -                | -         |     3.31 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           22 |     1321 | 2024-04-10 | FlyQuest          | L   | 0.869      | -            | -                | -                | -         |    -6.54 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           21 |     1370 | 2024-04-09 | Steel Helmet      | W   | 0.863      | -            | -                | -                | 1 (0.863) |     1.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           20 |     1399 | 2024-04-08 | FaZe              | L   | 0.856      | -            | -                | -                | -         |    -0.38 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           19 |     1591 | 2024-04-01 | Zero Tenacity     | W   | 0.810      | 0.384        | 0.147 (0.046)    | 1.000 (0.311)    | -         |     6.75 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           18 |     1724 | 2024-03-22 | Sashi             | L   | 0.746      | -            | -                | -                | -         |   -17.92 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           17 |     1960 | 2024-03-12 | Nexus             | L   | 0.679      | -            | -                | -                | -         |   -18.69 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           16 |     1987 | 2024-03-11 | Sashi             | W   | 0.672      | 0.372        | 0.157 (0.039)    | -                | -         |     4.02 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           15 |     2004 | 2024-03-10 | Endpoint          | W   | 0.666      | -            | -                | -                | -         |     2.56 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           14 |     2076 | 2024-03-07 | Zero Tenacity     | W   | 0.646      | 0.372        | 0.147 (0.035)    | -                | -         |     4.94 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           13 |     2138 | 2024-03-05 | KOI               | L   | 0.632      | -            | -                | -                | -         |   -15.91 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           12 |     2146 | 2024-03-05 | GUN5              | W   | 0.632      | -            | -                | -                | -         |     0.26 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           11 |     2661 | 2024-02-10 | Sashi             | W   | 0.473      | -            | -                | -                | -         |     3.71 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           10 |     2677 | 2024-02-09 | AMKAL             | W   | 0.466      | -            | -                | -                | -         |     7.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            9 |     2692 | 2024-02-08 | Sashi             | W   | 0.460      | -            | -                | -                | -         |     3.48 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            8 |     2697 | 2024-02-08 | BetBoom           | W   | 0.458      | -            | -                | -                | -         |    11.08 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            7 |     2864 | 2024-01-30 | RUBY              | W   | 0.400      | -            | -                | -                | -         |     1.40 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            6 |     2867 | 2024-01-30 | ex-Sprout         | W   | 0.399      | -            | -                | -                | -         |     0.36 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            5 |     2871 | 2024-01-30 | 9 Pandas          | W   | 0.399      | -            | -                | -                | -         |     5.41 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            4 |     3286 | 2024-01-16 | samaloyod         | L   | 0.306      | -            | -                | -                | -         |    -9.44 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            3 |     3542 | 2024-01-09 | brazylijski luz   | L   | 0.259      | -            | -                | -                | -         |    -7.53 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            2 |     3826 | 2023-12-06 | Enterprise        | L   | 0.033      | -            | -                | -                | -         |    -0.91 | 1eeR, almazer, FL4MUS, khaN, riskyb0b |
|            1 |     3842 | 2023-12-06 | MOUZ NXT          | L   | 0.031      | -            | -                | -                | -         |    -0.70 | 1eeR, almazer, FL4MUS, khaN, riskyb0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($109,264.55)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-03 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-04-24 |      0.965 | $50,000.00     | $48,251.90      |
| 2024-04-14 |      0.897 | $5,000.00      | $4,486.17       |
| 2024-03-25 |      0.766 | $3,300.00      | $2,526.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
