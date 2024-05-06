### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, FL4MUS, khaN, riskyb0b, Xant3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1235.5<br />
<br />
Final Rank Value (1235.5) = Starting Rank Value (1293.1) + Head To Head Adjustments (-57.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.850[<sup>1</sup>](#table2)
- Bounty Collected: 0.477[<sup>2</sup>](#table1)
- Opponent Network: 0.437[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.469<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1293.1
- 400 + ( ( 0.469 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1293.1


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
|           38 |       15 | 2024-05-05 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.72 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           37 |       55 | 2024-05-03 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.210 (0.105)    | 1.000 (0.500)    | 0 (0.000) |     8.11 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           36 |       78 | 2024-05-02 | Passion UA        | W   | 1.000      | 0.500        | 0.111 (0.055)    | 0.644 (0.322)    | 0 (0.000) |     5.57 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           35 |       99 | 2024-05-01 | B8                | W   | 1.000      | 0.500        | 0.080 (0.040)    | 0.851 (0.425)    | 0 (0.000) |     6.41 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           34 |      144 | 2024-04-29 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.210 (0.105)    | 1.000 (0.500)    | 0 (0.000) |     8.53 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           33 |      175 | 2024-04-28 | Grannys Knockers  | L   | 1.000      | -            | -                | -                | -         |   -30.26 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           32 |      197 | 2024-04-27 | 1WIN              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.37 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           31 |      221 | 2024-04-26 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -26.86 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           30 |      265 | 2024-04-24 | BLEED             | W   | 1.000      | 0.500        | 0.400 (0.200)    | 1.000 (0.500)    | 0 (0.000) |    14.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           29 |      289 | 2024-04-23 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.093 (0.047)    | 0.936 (0.468)    | 0 (0.000) |     4.79 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           28 |      307 | 2024-04-22 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.210 (0.105)    | 1.000 (0.500)    | 0 (0.000) |     8.20 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           27 |      323 | 2024-04-21 | 1WIN              | W   | 1.000      | -            | -                | -                | -         |     1.98 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           26 |      356 | 2024-04-20 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -11.40 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           25 |      391 | 2024-04-19 | Sangal            | W   | 1.000      | 0.500        | -                | 0.797 (0.399)    | -         |     3.84 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           24 |      437 | 2024-04-18 | Secret            | W   | 1.000      | -            | -                | -                | -         |     1.08 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           23 |      479 | 2024-04-17 | Alliance          | W   | 1.000      | 0.500        | -                | 0.815 (0.407)    | -         |     3.21 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           22 |      670 | 2024-04-10 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |   -10.69 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           21 |      719 | 2024-04-09 | Steel Helmet      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.19 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           20 |      748 | 2024-04-08 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.63 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           19 |      940 | 2024-04-01 | Zero Tenacity     | W   | 0.964      | 0.384        | 0.093 (0.035)    | 0.936 (0.347)    | -         |     4.50 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           18 |     1073 | 2024-03-22 | Sashi             | L   | 0.900      | -            | -                | -                | -         |   -22.59 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           17 |     1309 | 2024-03-12 | Nexus             | L   | 0.833      | -            | -                | -                | -         |   -23.21 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           16 |     1336 | 2024-03-11 | Sashi             | W   | 0.826      | 0.372        | 0.188 (0.058)    | -                | -         |     3.87 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           15 |     1353 | 2024-03-10 | Endpoint          | W   | 0.820      | -            | -                | -                | -         |     2.47 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           14 |     1425 | 2024-03-07 | Zero Tenacity     | W   | 0.800      | -            | -                | -                | -         |     3.12 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           13 |     1487 | 2024-03-05 | KOI               | L   | 0.787      | -            | -                | -                | -         |   -19.14 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           12 |     1495 | 2024-03-05 | GUN5              | W   | 0.786      | -            | -                | -                | -         |     0.50 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           11 |     2010 | 2024-02-10 | Sashi             | W   | 0.627      | -            | -                | -                | -         |     4.13 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|           10 |     2026 | 2024-02-09 | AMKAL             | W   | 0.620      | -            | -                | -                | -         |     8.10 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            9 |     2041 | 2024-02-08 | Sashi             | W   | 0.614      | -            | -                | -                | -         |     3.75 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            8 |     2046 | 2024-02-08 | BetBoom           | W   | 0.613      | 0.143        | 0.563 (0.049)    | -                | -         |    14.11 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            7 |     2213 | 2024-01-30 | RUBY              | W   | 0.554      | -            | -                | -                | -         |     1.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            6 |     2216 | 2024-01-30 | ex-Sprout         | W   | 0.553      | -            | -                | -                | -         |     0.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            5 |     2220 | 2024-01-30 | 9 Pandas          | W   | 0.553      | -            | -                | -                | -         |     5.76 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            4 |     2635 | 2024-01-16 | samaloyod         | L   | 0.460      | -            | -                | -                | -         |   -14.25 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            3 |     2891 | 2024-01-09 | brazylijski luz   | L   | 0.413      | -            | -                | -                | -         |   -12.12 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r  |
|            2 |     3175 | 2023-12-06 | Enterprise        | L   | 0.187      | -            | -                | -                | -         |    -5.17 | 1eeR, almazer, FL4MUS, khaN, riskyb0b |
|            1 |     3191 | 2023-12-06 | MOUZ NXT          | L   | 0.186      | -            | -                | -                | -         |    -4.59 | 1eeR, almazer, FL4MUS, khaN, riskyb0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($108,034.99)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.67) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-03 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-04-24 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-04-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-03-25 |      0.920 | $3,300.00      | $3,034.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
