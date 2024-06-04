### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, Kaide, mo0N, sowalio, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  897.8<br />
<br />
Final Rank Value (897.8) = Starting Rank Value (831.3) + Head To Head Adjustments (66.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 831.3
- 400 + ( ( 0.222 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 831.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       33 | 2024-05-28 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -10.21 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           32 |       73 | 2024-05-26 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -9.47 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           31 |       84 | 2024-05-25 | B8              | L   | 1.000      | -            | -                | -                | -         |    -5.83 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           30 |      124 | 2024-05-23 | Nexus           | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.518 (0.225)    | 0 (0.000) |     9.45 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           29 |      214 | 2024-05-21 | Endpoint        | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.627 (0.272)    | 0 (0.000) |    16.10 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           28 |      553 | 2024-05-11 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -8.62 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           27 |      579 | 2024-05-10 | Nemiga          | W   | 1.000      | 0.435        | 0.363 (0.158)    | 0.647 (0.281)    | 0 (0.000) |    26.46 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           26 |      636 | 2024-05-07 | Insilio         | W   | 1.000      | 0.435        | 0.010 (0.004)    | 0.542 (0.236)    | 0 (0.000) |    19.09 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           25 |      679 | 2024-05-05 | HAVU            | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.166 (0.072)    | 0 (0.000) |     9.41 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           24 |      711 | 2024-05-03 | V1dar           | W   | 1.000      | 0.435        | -                | 0.117 (0.051)    | 0 (0.000) |     5.15 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           23 |      766 | 2024-05-01 | GL Academy      | L   | 1.000      | -            | -                | -                | -         |   -18.77 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           22 |      808 | 2024-04-29 | Permitta        | L   | 0.997      | -            | -                | -                | -         |   -13.74 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           21 |      839 | 2024-04-27 | Astralis Talent | W   | 0.985      | 0.143        | 0.012 (0.002)    | -                | 0 (0.000) |    11.65 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           20 |     1001 | 2024-04-20 | Zero Tenacity   | L   | 0.938      | -            | -                | -                | -         |   -10.67 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           19 |     1081 | 2024-04-18 | Sashi           | L   | 0.925      | -            | -                | -                | -         |    -9.30 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           18 |     1090 | 2024-04-18 | Aurora          | W   | 0.925      | 0.143        | 0.493 (0.065)    | 0.840 (0.111)    | 0 (0.000) |    27.72 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           17 |     1097 | 2024-04-18 | NOM             | W   | 0.925      | -            | -                | -                | 0 (0.000) |     4.79 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           16 |     1144 | 2024-04-17 | JANO            | W   | 0.917      | -            | -                | -                | 0 (0.000) |     8.15 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           15 |     1789 | 2024-03-19 | Sashi           | L   | 0.726      | -            | -                | -                | -         |    -7.35 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           14 |     1846 | 2024-03-16 | Permitta        | W   | 0.705      | 0.372        | 0.025 (0.007)    | 1.000 (0.263)    | -         |    14.28 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           13 |     1982 | 2024-03-11 | Nexus           | L   | 0.672      | -            | -                | -                | -         |   -10.00 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           12 |     2018 | 2024-03-09 | Spirit Academy  | W   | 0.659      | -            | -                | -                | -         |     7.38 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           11 |     2045 | 2024-03-08 | ARCRED          | W   | 0.652      | -            | -                | -                | -         |     5.64 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           10 |     2275 | 2024-02-27 | Spirit Academy  | L   | 0.586      | -            | -                | -                | -         |   -12.64 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            9 |     2279 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.585      | 0.143        | 0.048 (0.004)    | 0.650 (0.054)    | -         |    10.96 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            8 |     2680 | 2024-02-09 | FORZE           | L   | 0.465      | -            | -                | -                | -         |    -4.62 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            7 |     2694 | 2024-02-08 | AMKAL           | L   | 0.459      | -            | -                | -                | -         |    -1.60 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            6 |     2696 | 2024-02-08 | ex-Guild Eagles | W   | 0.458      | -            | -                | -                | -         |     9.77 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            5 |     2864 | 2024-01-30 | Nemiga          | L   | 0.400      | -            | -                | -                | -         |    -1.40 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            4 |     2869 | 2024-01-30 | Permitta        | W   | 0.399      | 0.143        | 0.025 (0.001)    | 1.000 (0.057)    | -         |     7.48 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            3 |     2876 | 2024-01-30 | Illyrians       | W   | 0.399      | -            | -                | -                | -         |     1.05 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            2 |     3232 | 2024-01-17 | AMKAL           | L   | 0.313      | -            | -                | -                | -         |    -1.10 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            1 |     3297 | 2024-01-16 | Passion UA      | L   | 0.306      | -            | -                | -                | -         |    -2.68 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,531.20)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-03-25 |      0.766 | $2,000.00      | $1,531.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
