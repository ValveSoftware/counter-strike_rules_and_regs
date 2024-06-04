### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [51](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1026.1<br />
<br />
Final Rank Value (1026.1) = Starting Rank Value (1085.8) + Head To Head Adjustments (-59.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.302[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1085.8
- 400 + ( ( 0.353 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1085.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       15 | 2024-05-29 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -25.30 | casey, Flayy, innocent, kisserek, olimp |
|           35 |      102 | 2024-05-25 | ECF               | W   | 1.000      | 0.371        | -                | 0.436 (0.162)    | 0 (0.000) |     7.60 | casey, Flayy, innocent, kisserek, olimp |
|           34 |      216 | 2024-05-21 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -25.06 | casey, Flayy, innocent, kisserek, olimp |
|           33 |      239 | 2024-05-20 | The Prodigies     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.42 | casey, Flayy, innocent, kisserek, olimp |
|           32 |      308 | 2024-05-18 | B8                | L   | 1.000      | -            | -                | -                | -         |   -13.08 | casey, Flayy, innocent, kisserek, olimp |
|           31 |      338 | 2024-05-17 | Gaimin Gladiators | W   | 1.000      | 0.384        | 0.090 (0.035)    | 0.809 (0.311)    | 0 (0.000) |    18.66 | casey, Flayy, innocent, kisserek, olimp |
|           30 |      830 | 2024-04-28 | Aurora            | L   | 0.989      | -            | -                | -                | -         |    -4.79 | casey, Flayy, innocent, kisserek, olimp |
|           29 |      879 | 2024-04-26 | MIBR              | W   | 0.976      | 0.500        | 0.308 (0.150)    | 0.805 (0.393)    | 1 (0.976) |    29.22 | casey, Flayy, innocent, kisserek, olimp |
|           28 |      881 | 2024-04-25 | Rooster           | W   | 0.975      | 0.500        | 0.013 (0.007)    | 0.293 (0.143)    | 1 (0.975) |     7.65 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     1034 | 2024-04-19 | brazylijski luz   | L   | 0.933      | -            | -                | -                | -         |   -22.38 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     1213 | 2024-04-13 | Monte             | L   | 0.892      | -            | -                | -                | -         |    -8.04 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     1345 | 2024-04-09 | B8                | W   | 0.866      | 0.500        | 0.165 (0.071)    | 1.000 (0.433)    | 0 (0.000) |    13.65 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     1488 | 2024-04-04 | ALTERNATE aTTaX   | W   | 0.832      | 0.500        | 0.048 (0.020)    | 0.650 (0.270)    | 0 (0.000) |     7.60 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     1538 | 2024-04-03 | SINNERS           | L   | 0.824      | -            | -                | -                | -         |   -15.56 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     1622 | 2024-03-28 | ex-Sprout         | W   | 0.786      | -            | -                | -                | 0 (0.000) |     1.69 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     1655 | 2024-03-27 | B8                | L   | 0.780      | -            | -                | -                | -         |   -10.88 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     1665 | 2024-03-27 | Sashi             | W   | 0.779      | 0.143        | 0.157 (0.018)    | 1.000 (0.111)    | -         |    10.70 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     1695 | 2024-03-25 | Aurora            | L   | 0.766      | -            | -                | -                | -         |    -2.85 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     1890 | 2024-03-14 | brazylijski luz   | L   | 0.693      | -            | -                | -                | -         |   -18.11 | casey, Flayy, kisserek, olimp, SZPERO   |
|           17 |     2162 | 2024-03-04 | BLEED             | L   | 0.626      | -            | -                | -                | -         |    -6.67 | casey, Flayy, kisserek, olimp, sNx      |
|           16 |     2196 | 2024-03-03 | Sangal            | W   | 0.619      | 0.500        | 0.166 (0.051)    | 0.911 (0.282)    | -         |     8.47 | casey, Flayy, kisserek, olimp, sNx      |
|           15 |     2208 | 2024-03-02 | Aurora            | L   | 0.612      | -            | -                | -                | -         |    -2.37 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     2243 | 2024-02-29 | Sangal            | W   | 0.599      | 0.500        | 0.166 (0.050)    | 0.911 (0.273)    | -         |     8.50 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     2734 | 2024-02-04 | Falcons           | L   | 0.433      | -            | -                | -                | -         |    -1.30 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     2771 | 2024-02-03 | FaZe              | L   | 0.425      | -            | -                | -                | -         |    -0.07 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     2793 | 2024-02-02 | M80               | W   | 0.419      | 0.143        | 0.135 (0.008)    | 0.789 (0.047)    | 1 (0.419) |    10.00 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     2845 | 2024-01-31 | Eternal Fire      | L   | 0.406      | -            | -                | -                | -         |    -0.16 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     2850 | 2024-01-31 | Cloud9            | W   | 0.405      | 0.143        | 0.188 (0.011)    | -                | 1 (0.405) |    11.31 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     2890 | 2024-01-28 | 9 Pandas          | L   | 0.386      | -            | -                | -                | -         |    -4.42 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     2976 | 2024-01-23 | Viperio           | L   | 0.352      | -            | -                | -                | -         |   -10.58 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     2977 | 2024-01-23 | PERA              | L   | 0.352      | -            | -                | -                | -         |    -8.13 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     2997 | 2024-01-22 | Sampi             | L   | 0.346      | -            | -                | -                | -         |    -7.66 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     3002 | 2024-01-22 | ALTERNATE aTTaX   | W   | 0.346      | -            | -                | -                | -         |     3.62 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     3006 | 2024-01-22 | ex-Guild Eagles   | L   | 0.345      | -            | -                | -                | -         |    -7.15 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     3278 | 2024-01-16 | Passion UA        | L   | 0.307      | -            | -                | -                | -         |    -5.90 | casey, Flayy, kisserek, olimp, sNx      |
|            1 |     3288 | 2024-01-16 | Gucci Academy     | W   | 0.306      | -            | -                | -                | -         |     0.64 | casey, Flayy, kisserek, olimp, sNx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,691.93)
- Divide that value by the 5th highest value among all rosters ($300,941.06)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-22 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-05-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-04-28 |      0.990 | $10,000.00     | $9,901.46       |
| 2024-02-11 |      0.479 | $10,000.00     | $4,790.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
