### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, Kaide, mo0n, sowalio, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [95](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  819.5<br />
<br />
Final Rank Value (819.5) = Starting Rank Value (774.9) + Head To Head Adjustments (44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 774.9
- 400 + ( ( 0.194 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 774.9


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
|           20 |       54 | 2024-04-20 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -17.02 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           19 |      134 | 2024-04-18 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -11.81 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           18 |      143 | 2024-04-18 | Aurora          | W   | 1.000      | 0.143        | 0.763 (0.109)    | 1.000 (0.143)    | 0 (0.000) |    29.38 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           17 |      150 | 2024-04-18 | NOM             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.089 (0.013)    | 0 (0.000) |     6.68 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           16 |      197 | 2024-04-17 | JANO            | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.220 (0.031)    | 0 (0.000) |     8.46 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           15 |      842 | 2024-03-19 | Sashi           | L   | 0.974      | -            | -                | -                | -         |   -11.79 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           14 |      899 | 2024-03-16 | Permitta        | W   | 0.953      | 0.372        | 0.031 (0.011)    | 0.970 (0.344)    | 0 (0.000) |    20.33 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           13 |     1035 | 2024-03-11 | Nexus           | L   | 0.920      | -            | -                | -                | -         |   -12.76 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           12 |     1071 | 2024-03-09 | Spirit Academy  | W   | 0.907      | 0.372        | 0.020 (0.007)    | 0.245 (0.083)    | 0 (0.000) |    13.76 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           11 |     1098 | 2024-03-08 | ARCRED          | W   | 0.900      | 0.372        | 0.008 (0.003)    | 0.164 (0.055)    | 0 (0.000) |     9.83 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|           10 |     1328 | 2024-02-27 | Spirit Academy  | L   | 0.833      | -            | -                | -                | -         |   -14.46 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            9 |     1332 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.833      | 0.143        | 0.019 (0.002)    | 0.639 (0.076)    | 0 (0.000) |    14.96 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            8 |     1733 | 2024-02-09 | FORZE           | L   | 0.713      | -            | -                | -                | -         |    -6.15 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            7 |     1747 | 2024-02-08 | AMKAL           | L   | 0.707      | -            | -                | -                | -         |    -4.24 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            6 |     1749 | 2024-02-08 | Guild Eagles    | W   | 0.706      | 0.143        | 0.046 (0.005)    | 0.727 (0.073)    | 0 (0.000) |    17.81 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            5 |     1917 | 2024-01-30 | Nemiga          | L   | 0.647      | -            | -                | -                | -         |    -5.93 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            4 |     1922 | 2024-01-30 | Permitta        | W   | 0.646      | 0.143        | 0.031 (0.003)    | 0.970 (0.090)    | 0 (0.000) |    12.70 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            3 |     1929 | 2024-01-30 | The Suspect     | W   | 0.646      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.10 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            2 |     2285 | 2024-01-17 | AMKAL           | L   | 0.561      | -            | -                | -                | -         |    -3.65 | dekz, Kaide, mo0n, sowalio, w1nt3r           |
|            1 |     2350 | 2024-01-16 | Passion UA      | L   | 0.553      | -            | -                | -                | -         |    -5.63 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($190,462.73)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
