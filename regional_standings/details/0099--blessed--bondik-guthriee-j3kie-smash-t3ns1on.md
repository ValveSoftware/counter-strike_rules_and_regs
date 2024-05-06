### Roster Details<br />
Team Name: Blessed<br />
Roster: bondik, guthriee, j3kie, Smash, t3ns1on<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [99](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  814.6<br />
<br />
Final Rank Value (814.6) = Starting Rank Value (744.7) + Head To Head Adjustments (69.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.7
- 400 + ( ( 0.181 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 744.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      879 | 2024-04-03 | Metizport         | L   | 0.979      | -            | -                | -                | -         |    -6.26 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           13 |      912 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.973      | -            | -                | -                | -         |    -4.94 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           12 |      916 | 2024-04-02 | GamerLegion       | W   | 0.973      | 0.143        | 0.187 (0.026)    | 0.481 (0.067)    | 0 (0.000) |    29.65 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           11 |      944 | 2024-03-31 | Passion UA        | W   | 0.959      | 0.276        | 0.111 (0.029)    | 0.644 (0.170)    | 0 (0.000) |    20.11 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|           10 |      949 | 2024-03-30 | L&G               | W   | 0.952      | 0.276        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.91 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            9 |     1005 | 2024-03-27 | ALTERNATE aTTaX   | W   | 0.934      | 0.143        | 0.104 (0.014)    | 0.779 (0.104)    | 0 (0.000) |    20.92 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            8 |     1015 | 2024-03-27 | BetBoom           | W   | 0.933      | 0.143        | 0.563 (0.075)    | 1.000 (0.133)    | 0 (0.000) |    28.41 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            7 |     1350 | 2024-03-10 | AURA              | L   | 0.820      | -            | -                | -                | -         |   -20.45 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            6 |     1396 | 2024-03-08 | Nexus             | L   | 0.806      | -            | -                | -                | -         |    -7.99 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            5 |     1452 | 2024-03-06 | CYBERSHOKE        | W   | 0.793      | 0.372        | 0.004 (0.001)    | 0.073 (0.022)    | 0 (0.000) |    10.46 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz |
|            4 |     2630 | 2024-01-16 | Nexus             | L   | 0.461      | -            | -                | -                | -         |    -4.21 | BTN, ERSIN, ragga, s0und, XELLOW          |
|            3 |     2648 | 2024-01-16 | OWL               | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.86 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            2 |     2735 | 2024-01-13 | ex-Anonymo        | L   | 0.439      | -            | -                | -                | -         |    -6.81 | bondik, guthriee, j3kie, Smash, t3ns1on   |
|            1 |     2771 | 2024-01-12 | Wolves            | W   | 0.434      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.25 | bondik, guthriee, j3kie, Smash, t3ns1on   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,261.14)
- Divide that value by the 5th highest value among all rosters ($162,092.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
