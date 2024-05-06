### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1143.3<br />
<br />
Final Rank Value (1143.3) = Starting Rank Value (1061.2) + Head To Head Adjustments (82.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.592[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1061.2
- 400 + ( ( 0.347 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1061.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       42 | 2024-05-04 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -10.90 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           30 |       73 | 2024-05-02 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -7.65 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |      100 | 2024-05-01 | FURIA           | W   | 1.000      | 0.889        | 0.371 (0.330)    | 0.484 (0.430)    | 1 (1.000) |    25.02 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |      122 | 2024-04-30 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -10.21 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |      576 | 2024-04-12 | BIG             | L   | 1.000      | -            | -                | -                | -         |    -7.08 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           26 |      609 | 2024-04-11 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -5.77 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |      641 | 2024-04-10 | TSM             | W   | 1.000      | 0.500        | 0.018 (0.009)    | 0.258 (0.129)    | 0 (0.000) |     3.94 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           24 |      693 | 2024-04-09 | brazylijski luz | W   | 1.000      | 0.500        | -                | 0.373 (0.186)    | 0 (0.000) |     4.62 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |      733 | 2024-04-08 | ENCE            | W   | 1.000      | 0.684        | 0.360 (0.246)    | 0.450 (0.308)    | 0 (0.000) |    26.52 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           22 |      974 | 2024-03-28 | Space           | W   | 0.940      | -            | -                | -                | 0 (0.000) |     3.05 | easy, r3salt, SELLTER, shalfey, tN1R       |
|           21 |     1011 | 2024-03-27 | 500             | L   | 0.933      | -            | -                | -                | -         |   -24.62 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     1042 | 2024-03-26 | Apeks           | W   | 0.925      | 0.500        | 0.237 (0.110)    | 0.667 (0.309)    | 0 (0.000) |    21.16 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     1047 | 2024-03-25 | B8              | L   | 0.920      | -            | -                | -                | -         |   -19.54 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     1052 | 2024-03-24 | BetBoom         | W   | 0.912      | 0.143        | 0.563 (0.073)    | 1.000 (0.130)    | 0 (0.000) |    22.47 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     1064 | 2024-03-23 | VP.Prodigy      | W   | 0.906      | -            | -                | -                | 0 (0.000) |     2.54 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     1078 | 2024-03-22 | ex-Preasy       | W   | 0.899      | 0.143        | 0.173 (0.022)    | 0.700 (0.090)    | 0 (0.000) |    13.69 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     1099 | 2024-03-21 | PARIVISION      | L   | 0.893      | -            | -                | -                | -         |   -19.95 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     1125 | 2024-03-20 | NAVI Junior     | W   | 0.886      | -            | -                | -                | 0 (0.000) |     2.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     1481 | 2024-03-05 | KOI             | L   | 0.787      | -            | -                | -                | -         |   -13.96 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     1486 | 2024-03-05 | AMKAL           | W   | 0.787      | 0.143        | 0.200 (0.022)    | 0.851 (0.096)    | -         |    14.06 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     1494 | 2024-03-05 | 3DMAX           | W   | 0.786      | 0.143        | -                | 0.810 (0.091)    | -         |    13.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     1576 | 2024-03-01 | Aurora          | L   | 0.761      | -            | -                | -                | -         |    -2.44 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     1590 | 2024-02-29 | 9 Pandas        | W   | 0.754      | 0.143        | 0.081 (0.009)    | -                | -         |    14.12 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     1603 | 2024-02-28 | KOI             | W   | 0.747      | -            | -                | -                | -         |    11.63 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     1609 | 2024-02-28 | Aurora          | W   | 0.746      | 0.143        | 0.973 (0.104)    | 0.967 (0.103)    | -         |    21.59 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     1623 | 2024-02-27 | V1dar           | W   | 0.740      | -            | -                | -                | -         |     1.31 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     1629 | 2024-02-27 | ARCRED          | W   | 0.739      | -            | -                | -                | -         |     2.63 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     2027 | 2024-02-09 | Sashi           | L   | 0.620      | -            | -                | -                | -         |   -10.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     2029 | 2024-02-09 | RUBY            | W   | 0.619      | -            | -                | -                | -         |     3.62 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     2040 | 2024-02-08 | BetBoom         | W   | 0.614      | 0.143        | 0.563 (0.049)    | -                | -         |    17.24 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     2044 | 2024-02-08 | Sashi           | L   | 0.613      | -            | -                | -                | -         |   -10.70 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,250.00)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-04-14 |      1.000 | $26,250.00     | $26,250.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
