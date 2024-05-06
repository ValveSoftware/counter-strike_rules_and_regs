### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, Kaide, mo0n, sowalio, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  851.6<br />
<br />
Final Rank Value (851.6) = Starting Rank Value (782.6) + Head To Head Adjustments (69.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.6
- 400 + ( ( 0.201 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 782.6


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
|           25 |       28 | 2024-05-05 | HAVU            | W   | 1.000      | 0.435        | 0.023 (0.010)    | 0.214 (0.093)    | 0 (0.000) |    11.38 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           24 |       60 | 2024-05-03 | V1dar           | W   | 1.000      | 0.435        | -                | 0.096 (0.042)    | 0 (0.000) |     5.62 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           23 |      115 | 2024-05-01 | GL Academy      | L   | 1.000      | -            | -                | -                | -         |   -17.02 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           22 |      157 | 2024-04-29 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -12.31 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           21 |      188 | 2024-04-27 | Astralis Talent | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.194 (0.028)    | 0 (0.000) |    13.55 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           20 |      350 | 2024-04-20 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -13.35 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           19 |      430 | 2024-04-18 | Sashi           | L   | 1.000      | -            | -                | -                | -         |    -8.51 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           18 |      439 | 2024-04-18 | Aurora          | W   | 1.000      | 0.143        | 0.973 (0.139)    | 0.967 (0.138)    | 0 (0.000) |    30.47 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           17 |      446 | 2024-04-18 | NOM             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.04 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           16 |      493 | 2024-04-17 | JANO            | W   | 1.000      | 0.143        | 0.005 (0.001)    | -                | 0 (0.000) |     9.69 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           15 |     1138 | 2024-03-19 | Sashi           | L   | 0.880      | -            | -                | -                | -         |    -7.92 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           14 |     1195 | 2024-03-16 | Permitta        | W   | 0.860      | 0.372        | 0.053 (0.017)    | 0.979 (0.313)    | 0 (0.000) |    19.57 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           13 |     1331 | 2024-03-11 | Nexus           | L   | 0.826      | -            | -                | -                | -         |   -10.23 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           12 |     1367 | 2024-03-09 | Spirit Academy  | W   | 0.813      | 0.372        | 0.017 (0.005)    | 0.195 (0.059)    | 0 (0.000) |    11.77 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           11 |     1394 | 2024-03-08 | ARCRED          | W   | 0.806      | 0.372        | 0.004 (0.001)    | 0.198 (0.060)    | 0 (0.000) |     8.95 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           10 |     1624 | 2024-02-27 | Spirit Academy  | L   | 0.740      | -            | -                | -                | -         |   -13.54 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            9 |     1628 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.739      | 0.143        | 0.104 (0.011)    | 0.779 (0.082)    | 0 (0.000) |    15.23 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            8 |     2029 | 2024-02-09 | FORZE           | L   | 0.619      | -            | -                | -                | -         |    -3.62 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            7 |     2043 | 2024-02-08 | AMKAL           | L   | 0.613      | -            | -                | -                | -         |    -1.70 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            6 |     2045 | 2024-02-08 | Guild Eagles    | W   | 0.613      | 0.143        | 0.035 (0.003)    | 0.648 (0.057)    | -         |    15.39 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            5 |     2213 | 2024-01-30 | Nemiga          | L   | 0.554      | -            | -                | -                | -         |    -1.17 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            4 |     2218 | 2024-01-30 | Permitta        | W   | 0.553      | 0.143        | 0.053 (0.004)    | 0.979 (0.077)    | -         |    12.28 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            3 |     2225 | 2024-01-30 | The Suspect     | W   | 0.553      | -            | -                | -                | -         |     3.07 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            2 |     2581 | 2024-01-17 | AMKAL           | L   | 0.467      | -            | -                | -                | -         |    -1.28 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            1 |     2646 | 2024-01-16 | Passion UA      | L   | 0.460      | -            | -                | -                | -         |    -3.35 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,839.38)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
